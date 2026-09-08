# 06 — Lifecycle Sequencing Specification

This document provides the authoritative specification for the ordering of phases, skip rules, fast paths, and artifact-driven phase transitions in the `brain` development lifecycle.

The primary sequencing imperative across the entire lifecycle is that **transitions are governed by durable on-disk artifact contracts, never ephemeral conversation memory** (D-010, D-230, D-233, D-256). If an agent conversation ends, compacts, or halts, any succeeding session resumes seamlessly from persisted on-disk state.

---

## 1. Canonical Lifecycle Sequence

The primary macro lifecycle follows a strict six-stage forward progression:

```
[phase-routing] ──> [spec] ──> [plan-phase] ──> [build-phase] ──> [test] ──> [review-phase] ──> [ship-phase]
```

### 1.1 Internal Sub-Phase Sequencing

Each macro stage executes internal sub-phases in deterministic order:

#### 1. Specification Stage (`spec`)
1. `reconnaissance` (D-115; RJM `.claude/commands/spec.md:20`): Inspect repository structure, dependency manifests, and directory topology.
2. `prior-art-review` (D-116; RJM `.claude/commands/spec.md:35`): Search codebase and external libraries for existing implementations.
3. `scope-check` (D-116; Addy `skills/spec-driven-development/SKILL.md:32`): Validate single-responsibility boundaries; flag multi-module bloat.
4. `specification-drafting` (D-117; Addy `skills/spec-driven-development/SKILL.md:40`): Draft formal technical specification (`docs/specs/<slug>.md`).
5. **Gate Check:** Satisfy `front-gate-prerequisite` and obtain `ask-first-confirmation-gate` approval before proceeding.

#### 2. Planning Stage (`plan-phase`)
1. `task-decomposition` (D-119; Matt `docs/engineering/to-tickets.md:20`): Slice specification requirements into atomic task cards (`TASK-*.md`).
2. `execution-planning` (D-118; RJM `.claude/commands/plan.md:183`): Construct acyclic dependency graph, determine critical paths, and generate master checklist (`tasks/todo.md`).
3. **Gate Check:** Validate against `completion-criteria-quality-gate` (every task must have verifiable acceptance criteria and test seams).

#### 3. Build Stage (`build-phase`)
1. Claim next unblocked task card from `tasks/todo.md` in topological dependency order (D-259).
2. `task-execution` (D-120; Addy `skills/spec-driven-development/SKILL.md:76`): Author test seam first (red), implement code slice (green), and refactor (clean) per D-233.
3. `quality-assurance` (D-106; RJM `.claude/commands/test.md:144`): Run local linters, typecheckers, and scoped test suites.
4. Commit atomic change with conventional `commit-message` referencing task ID.
5. Update `tasks/todo.md` checklist item to completed. Repeat until all milestone tasks are done.
6. **Gate Check:** Verify `unit-testing-suite` passes and `stop-the-line-andon-cord` is clean.

#### 4. Test Stage (`test`)
1. Execute full automated regression test suite across the repository (D-101; Addy `skills/verify/SKILL.md:5`).
2. Execute integration test fixtures and characterization tests.
3. Capture execution logs in `test-results` (`docs/testing/results-<slug>.md`) and verify code coverage in `test-coverage-report`.
4. **Gate Check:** Run `quality-gate-pipeline` and `smoke-testing` (zero failures permitted).

#### 5. Review Stage (`review-phase`)
1. Assemble `six-role-panel` (D-570; RJM `.claude/skills/review/SKILL.md:1-40`): Security Auditor, Code Simplifier, Silent Failure Hunter, Architect, Code Reviewer, Hostile Expert.
2. Review code diff against specification, recording findings in `review-report` (`docs/reviews/review-<slug>.md`).
3. If revisions requested: route back to `build-phase` for remediation, capped at 3 rounds per `self-audit-round-cap` (D-264).
4. **Gate Check:** Issue explicit approval verdict.

#### 6. Ship Stage (`ship-phase`)
1. Execute `changeset-versioning` to bump semantic version and compile changelog entries (D-154, D-617).
2. Generate deployment runbook and rollback plan (`docs/runbooks/runbook-<version>.md`).
3. Tag git release and deploy to target environment.
4. Verify production telemetry against Service Level Objectives (SLOs).

---

## 2. Specialized Workflow Sequences

### 2.1 Diagnostic & Bug Remediation Sequence
When addressing runtime bugs, test failures, or customer defects, the lifecycle executes the systematic six-phase diagnosis sequence (D-121–D-125, D-624; Matt `skills/engineering/diagnosing-bugs/SKILL.md:1-150`):

```
[triage-phase]
      │
      ▼
[defect-reproduction]      (Construct deterministic red-failing automated test)
      │
      ▼
[baseline-establishment]   (Strip incidental complexity; record baseline metrics)
      │
      ▼
[hypothesis-generation]    (Document 3–5 ranked falsifiable causal hypotheses)
      │
      ▼
[hypothesis-probing]       (Deploy temporary instrumentation; test 1 variable at a time)
      │
      ▼
[defect-remediation]       (Implement minimal fix at proper seam; verify repro test turns green)
      │
      ▼
[diagnostic-cleanup]       (Purge all temporary probes/logs; keep permanent regression test)
      │
      ▼
[test] ──> [review-phase] ──> [ship-phase]
```

### 2.2 Parallel Change Migration Sequence (Expand-Contract)
When modifying database schemas, shared API contracts, or high-risk architectural interfaces, the lifecycle executes the expand-contract pattern across separate releases (D-621–D-623, D-624; Addy `skills/deprecation-and-migration/SKILL.md:169-210`):

1. `expand-phase` (Release N): Deploy new interfaces or database columns alongside legacy ones. Initialize dual-writing or backward-compatibility adapters.
2. `migrate-phase` (Release N+1): Transition callers, backfill historical data, and shift operational traffic to new interfaces. Verify legacy traffic reaches zero.
3. `contract-phase` (Release N+2): Safely drop deprecated legacy interfaces, columns, and transitional adapters.
4. `deletion-cleanup`: Systematically audit documentation and ADRs to eliminate dead references.

---

## 3. Skip Rules, Fast Paths & Branching Policies

### 3.1 `quick-fix-workflow` (D-244)
- **Applicability:** Isolated defects, documentation typos, or broken test fixes where the root cause is trivial and modifying at most 2 files (<50 lines diff).
- **Fast Path Rules:**
  - May skip formal `spec` document drafting and `plan-phase` task cards.
  - MUST still execute `defect-reproduction` (must have a failing test proving the bug).
  - MUST still pass `unit-testing-suite`, `quality-gate-pipeline`, and expedited single-reviewer `review-phase`.
  - Prohibited for architectural changes, API contract alterations, or database schema modifications.

### 3.2 `research-first-workflow` (D-247)
- **Applicability:** Feasibility studies, performance benchmarking, technology evaluations, or exploratory spikes.
- **Workflow Rules:**
  - Operates strictly in an isolated throwaway branch or sandbox directory.
  - Produces an exploration report or ADR recommendation.
  - Does NOT produce production commits, does NOT enter `ship-phase`.
  - If research succeeds and feature work is approved, standard lifecycle initiates at `spec`.

### 3.3 `greenfield-lifecycle-path` (D-245)
- **Applicability:** Brand-new repositories or isolated new sub-packages.
- **Workflow Rules:**
  - Phase 0 executes repository scaffolding, package manifests, and CI configuration.
  - Specification focuses on core domain modeling and tracer-bullet slice.
  - First build task implements a thin, cross-cutting tracer bullet to validate build/test toolchains end-to-end before expanding feature backlog.

### 3.4 `optimization-workflow` (D-248)
- **Applicability:** Dedicated performance optimization, memory reduction, or bundle shrinking tasks.
- **Workflow Rules:**
  - Mandatory baseline measurement before writing any code.
  - Optimization slices must be paired with automated performance regression benchmarks.
  - Review phase requires signoff from `web-performance-auditor`.

### 3.5 `gate-skip-policy` (D-246)
- **Absolute Rule:** Automated quality gates (`unit-testing-suite`, `pre-commit-validation-checks`, `quality-gate-pipeline`, `stop-the-line-andon-cord`) **CAN NEVER BE SKIPPED UNDER ANY CIRCUMSTANCES**.
- If a gate fails, the pipeline halts immediately. Pushing broken builds or bypassing linters is strictly forbidden.
- Human review gates can only be delegated if pre-authorized in writing within `PREFERENCES.md` or `STATE.md`.

---

## 4. Artifact Contracts Between Phases

Each phase transition is defined by a strict input/output contract enforced by gates:

| Phase Transition | Required Input Artifact(s) | Producing Phase | Enforcing Gate | Output Handed Off | Consuming Phase |
|---|---|---|---|---|---|
| **Spec → Plan** | `agent-brief` / User prompt | Ingestion | `front-gate-prerequisite` & `ask-first-confirmation-gate` | `structured-requirements` (`docs/specs/<slug>.md`) | `plan-phase` |
| **Plan → Build** | `structured-requirements` | `spec` | `completion-criteria-quality-gate` | `plan.md`, `tasks/todo.md`, `TASK-*.md` | `build-phase` |
| **Build → Test** | `tasks/todo.md`, `TASK-*.md` | `plan-phase` | `unit-testing-suite` & `stop-the-line-andon-cord` | `working-increment` (code diffs + unit tests) | `test` |
| **Test → Review** | `working-increment` | `build-phase` | `quality-gate-pipeline` & `smoke-testing` | `test-results.md`, `test-coverage-report.md` | `review-phase` |
| **Review → Ship** | Code diff, `spec.md`, `test-results.md` | `test` | `self-audit-round-cap` (max 3 rounds) | `review-report.md` (APPROVED) | `ship-phase` |
| **Ship → Complete** | `review-report.md`, release branch | `review-phase` | `pre-commit-validation-checks` | Release tag, `CHANGELOG.md`, `runbook.md` | Deployment |

### 4.1 Pipeline Staleness and Invalidation (D-253)
If an upstream artifact is modified after downstream work has commenced (e.g. `spec.md` is edited during implementation):
1. All downstream artifacts (`plan.md`, `tasks/todo.md`, code diffs, test results) are marked `STALE`.
2. Active build tasks must pause immediately.
3. The planner must re-synchronize the task breakdown against the modified specification before coding resumes.

### 4.2 Verification Feedback Loop (D-263)
If a quality gate fails during `test` or `review-phase`:
1. The failure reason and failing test logs are recorded on disk.
2. Execution routes backward to `build-phase` (task execution).
3. The implementation agent claims the defect as a high-priority remediation task, fixes the issue, and re-submits through `test`. Failure never advances forward.

---

## 5. Multi-Session Continuity Protocol

The lifecycle is designed for seamless execution across multi-session agent engagements without loss of context (D-010, D-254):

1. **On-Disk Session Handoff (`docs/plan/sessions/NNN-<phase>.md`):** Every session initializes by reading the latest handoff and `STATE.md`, and concludes by recording start state, completed unit IDs, script outputs, and exact next actions.
2. **Cold Resumption Protocol:** A brand-new agent session requires zero conversational history. It reads `METHOD.md`, `STATE.md`, and `tasks/todo.md` to identify the active task and immediately begins execution.
3. **No Hidden State:** No file lists, architectural decisions, or test results may remain solely in agent conversation memory. Every decision is committed to disk before a turn concludes.
