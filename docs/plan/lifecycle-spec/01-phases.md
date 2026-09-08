# 01 — Lifecycle Phases Specification

This document provides the complete, authoritative specification for all twenty-eight canonical phases in the `brain` lifecycle. Each phase specification details its canonical identity, purpose, entry criteria, exit criteria, artifacts consumed, artifacts produced (with on-disk path conventions), composed skills, reference documents, participant agent roles, and governing quality gates.

---

## 1. Macro Lifecycle Phases

### 1.1 `spec`
- **Canonical Name:** `spec`
- **Governing Decisions:** D-620 (superseding D-100), D-111, D-230, D-231, D-237
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:12-40`; Matt `skills/in-progress/writing-fragments/SKILL.md:9-25`; RJM `.claude/commands/spec.md:1-50`
- **Purpose:** Explore user requirements, interrogate problem boundaries, surface architectural constraints, and synthesize a formal technical specification before any planning or coding begins.
- **Entry Criteria:**
  - Incoming user feature request, problem statement, or issue ticket.
  - Repository working tree is clean (`git status --porcelain` is empty).
  - Target branch is aligned with upstream tracking branch.
- **Exit Criteria:**
  - All mandatory specification sections (architecture, data model, APIs, non-goals, security, test seams) are populated.
  - `front-gate-prerequisite` verified: technical dependencies and environment prerequisites confirmed.
  - `ask-first-confirmation-gate` satisfied: user or human authority explicitly approves the specification.
- **Artifacts Consumed:**
  - `agent-brief` (`docs/briefs/<feature-slug>.md` or user input)
  - `context-map` (`docs/architecture/context-map.md`)
- **Artifacts Produced:**
  - `structured-requirements` / `spec` (`docs/specs/<feature-slug>.md`)
  - `discovery-questionnaire` (`docs/specs/<feature-slug>-discovery.md`)
- **Skills Composed:**
  - `grill-me` (adversarial requirement interrogation)
  - `grill-with-docs` (documentation-grounded requirement extraction)
  - `wayfinder-exploration-skill` (codebase navigation and topology exploration)
  - `to-spec-synthesis` (structured specification drafting)
- **References Used:**
  - `primary-source-reference`
  - `domain-driven-design`
  - `task-fitness-guide`
- **Roles Involved:**
  - `architect` (spec lead)
  - `user-representative` (advocate for domain requirements)
  - `critic` (adversarial challenger)
  - `spec-subagent` (drafting worker)
- **Gates:**
  - `front-gate-prerequisite`
  - `ask-first-confirmation-gate`

---

### 1.2 `plan-phase`
- **Canonical Name:** `plan-phase`
- **Governing Decisions:** D-103, D-118, D-119, D-232, D-238, D-239
- **Source Citations:** Addy `skills/planning-and-task-breakdown/SKILL.md:8-60`; Matt `docs/engineering/to-tickets.md:1-60`; RJM `.claude/commands/plan.md:1-120`
- **Purpose:** Translate an approved technical specification into an ordered, acyclic dependency graph of atomic tasks sized for single-session execution, establishing precise acceptance criteria and verification commands for every work unit.
- **Entry Criteria:**
  - Approved specification document on disk (`docs/specs/<feature-slug>.md`).
  - Architecture decisions recorded and accepted in ADRs if breaking changes are required.
- **Exit Criteria:**
  - Every task is sized within task-sizing guidelines (S/M/L; under context budget limits).
  - Every task defines concrete file seams, description, acceptance criteria, and verification commands.
  - Task dependency graph is verified acyclic with unambiguous critical path.
  - `completion-criteria-quality-gate` satisfied.
- **Artifacts Consumed:**
  - `structured-requirements` (`docs/specs/<feature-slug>.md`)
  - `architectural-decision-records-reference` (`docs/decisions/adr-*.md`)
- **Artifacts Produced:**
  - `plan` (`docs/tasks/plan-<feature-slug>.md`)
  - `task-list` / `tasks/todo.md` (`docs/tasks/todo-<feature-slug>.md` or `tasks/todo.md`)
  - `task-card` (`docs/tasks/tickets/TASK-*.md`)
- **Skills Composed:**
  - `to-tickets` (atomic ticket generation)
  - `task-decomposer` (breakdown into vertical slices)
  - `planning-and-task-breakdown` (sequencing and dependency graph construction)
- **References Used:**
  - `task-sizing-guidelines`
  - `task-fitness-guide`
  - `orchestration-patterns-reference`
  - `definition-of-done`
- **Roles Involved:**
  - `planner` (plan orchestrator)
  - `task-decomposer` (breakdown specialist)
  - `architect` (dependency reviewer)
- **Gates:**
  - `completion-criteria-quality-gate`
  - `phase-boundary-transition`

---

### 1.3 `build-phase`
- **Canonical Name:** `build-phase`
- **Governing Decisions:** D-102, D-117, D-120, D-233, D-240, D-512, D-513
- **Source Citations:** Addy `commands/build.toml:2`, `skills/implement-spec/SKILL.md:1-50`; Matt `skills/implement/SKILL.md:45-80`; RJM `.claude/commands/build.md:1-80`
- **Purpose:** Implement task units from the plan by constructing vertical code slices, writing automated unit tests, and producing clean git commits in a strict red-green-refactor loop.
- **Entry Criteria:**
  - Valid task checklist (`tasks/todo.md`) with unworked pending tasks.
  - Clean working tree or designated isolated git worktree (`git-worktree-isolation`).
  - Baseline test suite currently passes on the branch.
- **Exit Criteria:**
  - Target task implementation complete across designated file seams.
  - New unit tests written and passing alongside modified code.
  - `unit-testing-suite` passes locally.
  - `stop-the-line-andon-cord` not triggered (zero build/type errors).
  - Atomic git commit created with descriptive change notes.
- **Artifacts Consumed:**
  - `task-list` (`tasks/todo.md`)
  - `task-card` (`docs/tasks/tickets/TASK-*.md`)
  - `spec` (`docs/specs/<feature-slug>.md`)
- **Artifacts Produced:**
  - `working-increment` (code modifications in repository working tree)
  - `commit-message` (`Change Descriptions`)
  - `test-results` (local test execution outputs)
- **Skills Composed:**
  - `implement-spec-orchestration` (task dispatch and execution tracking)
  - `incremental-implementation` (thin vertical slice construction)
  - `red-green-refactor-loop` (test-first construction cycle)
  - `code-simplifier` (post-green refactoring)
- **References Used:**
  - `definition-of-done`
  - `coding-standards`
  - `testing-patterns-reference`
  - `api-interface-standards-reference`
- **Roles Involved:**
  - `implementation-agent` (worker persona)
  - `implementer-subagent` (subagent executor)
  - `build-cop` (build guardian)
- **Gates:**
  - `unit-testing-suite`
  - `stop-the-line-andon-cord`
  - `pre-commit-validation-checks`

---

### 1.4 `test`
- **Canonical Name:** `test`
- **Governing Decisions:** D-101, D-106, D-234, D-241, D-514, D-515
- **Source Citations:** Addy `skills/verify/SKILL.md:5-45`; Matt `skills/implement/SKILL.md:50-70`; RJM `.claude/commands/test.md:1-60`
- **Purpose:** Subject built code changes to exhaustive automated verification, regression test suites, integration fixtures, and environmental validation to prove end-to-end correctness.
- **Entry Criteria:**
  - All tasks in the active milestone marked implemented in `tasks/todo.md`.
  - Local unit tests pass clean.
  - Clean working tree with staged or committed changes.
- **Exit Criteria:**
  - Full automated regression test suite passes with zero failures.
  - Zero regression in benchmarked performance or error metrics.
  - Code coverage satisfies project threshold requirements.
  - `quality-gate-pipeline` runs to completion and issues `PASS` verdict.
- **Artifacts Consumed:**
  - `working-increment` (repository source tree)
  - `test-strategy` (`docs/testing/strategy-<feature-slug>.md`)
- **Artifacts Produced:**
  - `test-results` (`docs/testing/results-<feature-slug>.md`)
  - `test-coverage-report` (`docs/testing/coverage-<feature-slug>.md`)
- **Skills Composed:**
  - `characterization-testing` (behavior preservation verification)
  - `smoke-testing` (sanity check of primary user journeys)
  - `eval-framework` (evaluation benchmarking for non-deterministic code)
- **References Used:**
  - `testing-patterns-reference`
  - `performance-checklist-reference`
  - `static-analysis-standards`
- **Roles Involved:**
  - `test-engineer` (test orchestrator)
  - `systematic-bug-hunter` (edge case investigator)
  - `adversarial-reviewer` (verification challenger)
- **Gates:**
  - `quality-gate-pipeline`
  - `smoke-testing`
  - `stop-the-line-andon-cord`

---

### 1.5 `review-phase`
- **Canonical Name:** `review-phase`
- **Governing Decisions:** D-104, D-235, D-242, D-264, D-516, D-517
- **Source Citations:** Addy `skills/review/SKILL.md:1-60`; Matt `skills/engineering/SKILL.md:5-30`; RJM `.claude/skills/review/SKILL.md:1-75`, `.claude/skills/adr-review/references/ADR-064-commands-to-skills-migration.md:105`
- **Purpose:** Perform multi-perspective adversarial inspection and architectural review of code diffs, verifying design compliance, security posture, code simplicity, and convention adherence.
- **Entry Criteria:**
  - Passing test verification report (`docs/testing/results-<feature-slug>.md`).
  - Active git branch containing clean commit history relative to base.
- **Exit Criteria:**
  - All findings from the six-role review panel addressed or formally rationalized.
  - Zero unmitigated critical security, architecture, or reliability vulnerabilities.
  - `self-audit-round-cap` respected (at most 3 review cycles; unresolved escalates to human).
  - Explicit merge approval verdict issued.
- **Artifacts Consumed:**
  - `working-increment` (git diff against base branch)
  - `spec` (`docs/specs/<feature-slug>.md`)
  - `test-results` (`docs/testing/results-<feature-slug>.md`)
- **Artifacts Produced:**
  - `review-report` (`docs/reviews/review-<feature-slug>.md`)
  - `security-assessment` (`docs/security/assessment-<feature-slug>.md`)
  - `assumption-challenge` (`docs/reviews/assumptions-<feature-slug>.md`)
- **Skills Composed:**
  - `six-role-panel` (multi-persona inspection)
  - `anti-rationalization-guards` (rigorous finding evaluation)
  - `code-simplifier` (removal of extraneous layers)
- **References Used:**
  - `code-review-checklist-reference`
  - `security-standards`
  - `code-smell-baseline`
  - `architectural-anti-patterns-reference`
- **Roles Involved:**
  - `code-reviewer` (lead inspector)
  - `security-auditor` (threat modeling specialist)
  - `code-simplifier` (complexity pruner)
  - `silent-failure-hunter` (error handling inspector)
  - `architect` (structural authority)
  - `hostile-expert` (contrarian stress-tester)
- **Gates:**
  - `self-audit-round-cap`
  - `phase-boundary-transition`

---

### 1.6 `ship-phase`
- **Canonical Name:** `ship-phase`
- **Governing Decisions:** D-105, D-154, D-617, D-236, D-243, D-518
- **Source Citations:** Addy `commands/ship.toml:1-30`; Matt `package.json:12`, `skills/triage/SKILL.md:10`; RJM `.claude/commands/ship.md:1-70`
- **Purpose:** Package, version, document, and deploy approved code increments to production or release targets under strict release gating and rollback guarantees.
- **Entry Criteria:**
  - Approved review report with signoff from required authorities.
  - Green CI/CD validation run on target release commit.
  - Migration prerequisites verified and executed if applicable.
- **Exit Criteria:**
  - Changeset or version bump committed and tagged in git.
  - Changelog updated with customer-facing release notes.
  - Deployment runbook generated and executed against target environment.
  - Production telemetry and health checks confirm zero regression.
- **Artifacts Consumed:**
  - `review-report` (`docs/reviews/review-<feature-slug>.md`)
  - `working-increment` (release branch commit)
- **Artifacts Produced:**
  - `changeset` (`.changeset/<release-id>.md`)
  - `release-notes` (`docs/releases/release-<version>.md` and `CHANGELOG.md`)
  - `runbook` / `launch-runbook` (`docs/runbooks/runbook-<version>.md`)
  - `monitoring-dashboards` / SLO telemetry definitions
- **Skills Composed:**
  - `changeset-versioning-technique` (automated semver management)
  - `atomic-commit-workflow` (release tagging and tree freezing)
  - `operational-metrics` (health and error telemetry verification)
- **References Used:**
  - `definition-of-done`
  - `git-guardrails-claude-code`
  - `secrets-handling-reference`
  - `performance-checklist-reference`
- **Roles Involved:**
  - `project-shipper` (release orchestrator)
  - `devops-specialist` (deployment infrastructure lead)
  - `rollback-owner` (emergency reversal authority)
- **Gates:**
  - `pre-commit-validation-checks`
  - `quality-gate-pipeline`
  - `phase-boundary-transition`

---

## 2. Specification Sub-Phases

### 2.1 `reconnaissance`
- **Canonical Name:** `reconnaissance`
- **Governing Decisions:** D-115, D-620
- **Source Citations:** RJM `.claude/commands/spec.md:20`; Addy `skills/spec-driven-development/SKILL.md:32`
- **Purpose:** Survey repository structure, technology stack, directory layouts, and dependency manifests before formulating feature requirements.
- **Entry Criteria:** Invocations of `/spec` or start of specification workflow.
- **Exit Criteria:** Repository tech stack, build scripts, and directory conventions documented in discovery notes.
- **Artifacts Consumed:** Target codebase manifests (`package.json`, `tsconfig.json`, `bun.lock`).
- **Artifacts Produced:** Reconnaissance summary (`docs/specs/notes/recon-<slug>.md`).
- **Skills Composed:** `discover-the-stack-first`, `existing-code-exploration`.
- **References Used:** `primary-source-reference`.
- **Roles Involved:** `explorer`, `architect`.
- **Gates:** `front-gate-prerequisite`.

### 2.2 `prior-art-review`
- **Canonical Name:** `prior-art-review`
- **Governing Decisions:** D-116, D-620
- **Source Citations:** RJM `.claude/commands/spec.md:35`; Matt `skills/in-progress/writing-fragments/SKILL.md:25`
- **Purpose:** Search internal codebase and third-party dependencies for preexisting implementations to prevent redundant code authoring.
- **Entry Criteria:** Reconnaissance complete; proposed feature concepts articulated.
- **Exit Criteria:** Confirmation that no duplicate utility, component, or pattern exists in the codebase.
- **Artifacts Consumed:** Repository codebase and internal library documentation.
- **Artifacts Produced:** Prior art findings section in discovery document.
- **Skills Composed:** `the-research-skill`, `existing-code-exploration`.
- **References Used:** `primary-source-reference`, `code-smell-baseline`.
- **Roles Involved:** `explorer`, `architect`.
- **Gates:** `front-gate-prerequisite`.

### 2.3 `scope-check`
- **Canonical Name:** `scope-check`
- **Governing Decisions:** D-116, D-620
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:32`
- **Purpose:** Validate proposed feature scope against single-responsibility boundaries, flagging multi-module bloat before drafting detailed specs.
- **Entry Criteria:** Initial feature outline drafted.
- **Exit Criteria:** Confirmation that feature fits within a single coherent architectural boundary; oversized features split into sequential milestones.
- **Artifacts Consumed:** Feature proposal outline.
- **Artifacts Produced:** Scope boundary statement and "Not Doing List" (`docs/specs/notes/scope-<slug>.md`).
- **Skills Composed:** `scope-discipline-enforcement`, `scoping-decision-tree`.
- **References Used:** `task-sizing-guidelines`, `task-fitness-guide`.
- **Roles Involved:** `architect`, `critic`.
- **Gates:** `ask-first-confirmation-gate`.

### 2.4 `specification-drafting`
- **Canonical Name:** `specification-drafting`
- **Governing Decisions:** D-117, D-620
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:40`; RJM `.claude/commands/spec.md:50`
- **Purpose:** Synthesize reconnaissance findings, prior art, user requirements, and constraints into a formal technical specification document.
- **Entry Criteria:** Reconnaissance, prior art review, and scope check all passed.
- **Exit Criteria:** Complete `spec.md` document written to disk with all required sections populated.
- **Artifacts Consumed:** Discovery notes, interview transcript, user briefs.
- **Artifacts Produced:** `structured-requirements` (`docs/specs/<slug>.md`).
- **Skills Composed:** `to-spec-synthesis`, `domain-modeling`.
- **References Used:** `domain-driven-design`, `primary-source-reference`.
- **Roles Involved:** `spec-subagent`, `architect`.
- **Gates:** `front-gate-prerequisite`.

---

## 3. Planning Sub-Phases

### 3.1 `task-decomposition`
- **Canonical Name:** `task-decomposition`
- **Governing Decisions:** D-119, D-103
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:64`; Matt `docs/engineering/to-tickets.md:20`; RJM `.claude/commands/plan.md:50`
- **Purpose:** Decompose high-level specification requirements into self-contained, atomic task units with explicit boundaries.
- **Entry Criteria:** Approved specification document (`docs/specs/<slug>.md`).
- **Exit Criteria:** Complete set of atomic tasks defined with file paths, seams, and verification criteria.
- **Artifacts Consumed:** `structured-requirements` (`docs/specs/<slug>.md`).
- **Artifacts Produced:** `task-card` collection (`docs/tasks/tickets/TASK-*.md`).
- **Skills Composed:** `to-tickets`, `thin-vertical-slices`.
- **References Used:** `task-sizing-guidelines`, `definition-of-done`.
- **Roles Involved:** `task-decomposer`, `planner`.
- **Gates:** `completion-criteria-quality-gate`.

### 3.2 `execution-planning`
- **Canonical Name:** `execution-planning`
- **Governing Decisions:** D-118, D-103
- **Source Citations:** RJM `.claude/commands/plan.md:183`; Addy `external/api-and-interface-design.md:5`
- **Purpose:** Analyze task dependencies, isolate critical paths, and construct an ordered execution plan and checklist.
- **Entry Criteria:** Decomposed task cards exist on disk.
- **Exit Criteria:** Acyclic dependency graph validated; sequential execution order established in `tasks/todo.md`.
- **Artifacts Consumed:** `task-card` collection.
- **Artifacts Produced:** `plan` (`docs/tasks/plan-<slug>.md`), `tasks/todo.md`.
- **Skills Composed:** `topological-dependency-order`, `plan-step-decomposition`.
- **References Used:** `orchestration-patterns-reference`, `task-sizing-guidelines`.
- **Roles Involved:** `planner`, `coordinator`.
- **Gates:** `completion-criteria-quality-gate`.

---

## 4. Build Sub-Phases & QA

### 4.1 `task-execution`
- **Canonical Name:** `task-execution`
- **Governing Decisions:** D-120, D-102
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:76`; RJM `.claude/commands/work.md:45`
- **Purpose:** Claim and implement a specific task ticket, modifying target files and authoring tests according to task instructions.
- **Entry Criteria:** Pending task ticket in `tasks/todo.md`; clean working tree.
- **Exit Criteria:** Code modifications applied; unit tests written; local tests passing.
- **Artifacts Consumed:** `task-card` (`docs/tasks/tickets/TASK-*.md`).
- **Artifacts Produced:** `working-increment` (code diffs).
- **Skills Composed:** `red-green-refactor-loop`, `implement-spec-orchestration`.
- **References Used:** `coding-standards`, `testing-patterns-reference`.
- **Roles Involved:** `implementation-agent`, `implementer-subagent`.
- **Gates:** `unit-testing-suite`, `stop-the-line-andon-cord`.

### 4.2 `quality-assurance`
- **Canonical Name:** `quality-assurance`
- **Governing Decisions:** D-106, D-102
- **Source Citations:** Addy `external/api-and-interface-design.md:5`; RJM `.claude/commands/test.md:144`
- **Purpose:** Run local author-level verification checks (linting, typechecking, formatting) before declaring a task increment complete.
- **Entry Criteria:** Implementation diff authored by agent.
- **Exit Criteria:** Linters and typecheckers pass with zero warnings or errors.
- **Artifacts Consumed:** Working tree code modifications.
- **Artifacts Produced:** Local validation pass logs.
- **Skills Composed:** `typechecking`, `shellcheck`, `prettier`.
- **References Used:** `static-analysis-standards`, `code-smell-baseline`.
- **Roles Involved:** `implementation-agent`, `build-cop`.
- **Gates:** `pre-commit-validation-checks`.

---

## 5. Diagnostic & Defect Triage Sub-Lifecycle

### 5.1 `triage-phase`
- **Canonical Name:** `triage-phase`
- **Governing Decisions:** D-114, D-120
- **Source Citations:** Matt `skills/triage/SKILL.md:10-40`
- **Purpose:** Evaluate incoming defect reports, assess impact, filter duplicates, and route valid bugs into the systematic diagnostic pipeline.
- **Entry Criteria:** Bug report, user ticket, or runtime exception alert.
- **Exit Criteria:** Issue classified, priority assigned, initial reproduction steps documented.
- **Artifacts Consumed:** Bug report, stack trace, error logs.
- **Artifacts Produced:** Triaged ticket (`docs/issues/ISSUE-*.md`).
- **Skills Composed:** `triage-first-discipline`, `runtime-error-triage`.
- **References Used:** `issue-tracker-governance-reference`.
- **Roles Involved:** `router`, `triage-specialist`.
- **Gates:** `phase-boundary-transition`.

### 5.2 `defect-reproduction`
- **Canonical Name:** `defect-reproduction`
- **Governing Decisions:** D-121, D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:25-45`; RJM `.claude/commands/test.md:20-40`
- **Purpose:** Construct an isolated, automated, deterministic command or test case that demonstrably fails due to the reported defect.
- **Entry Criteria:** Triaged bug ticket.
- **Exit Criteria:** Executable command or test case that reliably exits with non-zero failure code on unpatched code.
- **Artifacts Consumed:** Triaged ticket, source code.
- **Artifacts Produced:** Failing reproduction test (`tests/repro/defect-repro.test.ts` or `repro.sh`).
- **Skills Composed:** `characterization-testing`, `diagnosing-bugs`.
- **References Used:** `testing-patterns-reference`.
- **Roles Involved:** `systematic-bug-hunter`, `test-engineer`.
- **Gates:** Deterministic red-test execution check.

### 5.3 `baseline-establishment`
- **Canonical Name:** `baseline-establishment`
- **Governing Decisions:** D-122, D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:48-68`; RJM `.claude/commands/test.md:45-65`
- **Purpose:** Strip away incidental test setup to isolate the minimal load-bearing sequence that triggers failure, recording baseline metrics.
- **Entry Criteria:** Working reproduction test.
- **Exit Criteria:** Minimal reproduction case confirmed; baseline error logs recorded.
- **Artifacts Consumed:** Failing reproduction test.
- **Artifacts Produced:** Minimized test case and baseline execution log (`docs/diagnostic/baseline-<bug-id>.md`).
- **Skills Composed:** `bisection-harness`, `diagnosing-bugs`.
- **References Used:** `testing-patterns-reference`.
- **Roles Involved:** `systematic-bug-hunter`.
- **Gates:** Minimal reproduction validation.

### 5.4 `hypothesis-generation`
- **Canonical Name:** `hypothesis-generation`
- **Governing Decisions:** D-123, D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:70-90`; RJM `.claude/commands/test.md:70-90`
- **Purpose:** Articulate three to five ranked, falsifiable hypotheses explaining the causal root mechanism of the defect.
- **Entry Criteria:** Minimized baseline established.
- **Exit Criteria:** Ranked hypotheses documented with concrete falsification criteria for each.
- **Artifacts Consumed:** Baseline log, source code files.
- **Artifacts Produced:** Diagnostic hypothesis document (`docs/diagnostic/hypotheses-<bug-id>.md`).
- **Skills Composed:** `competing-hypothesis-debugging`, `diagnosing-bugs`.
- **References Used:** `architectural-anti-patterns-reference`.
- **Roles Involved:** `systematic-bug-hunter`, `architect`.
- **Gates:** Falsifiability audit.

### 5.5 `hypothesis-probing`
- **Canonical Name:** `hypothesis-probing`
- **Governing Decisions:** D-124, D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:92-112`; RJM `.claude/commands/test.md:95-115`
- **Purpose:** Deploy targeted probes and temporary instrumentation, testing one variable at a time, to validate or refute each hypothesis.
- **Entry Criteria:** Ranked falsifiable hypotheses documented.
- **Exit Criteria:** Conclusive identification of the root cause mechanism; all invalid hypotheses falsified.
- **Artifacts Consumed:** Diagnostic hypothesis document, source files.
- **Artifacts Produced:** Probe execution telemetry log (`docs/diagnostic/probes-<bug-id>.md`).
- **Skills Composed:** `temporary-instrumentation`, `diagnosing-bugs`.
- **References Used:** `testing-patterns-reference`.
- **Roles Involved:** `systematic-bug-hunter`.
- **Gates:** Single-variable isolation rule.

### 5.6 `defect-remediation`
- **Canonical Name:** `defect-remediation`
- **Governing Decisions:** D-125, D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:115-132`; RJM `.claude/commands/verify.md:30-55`
- **Purpose:** Implement a verified fix at the correct architectural seam, confirming that the reproduction test passes without adjacent regressions.
- **Entry Criteria:** Conclusively proven root cause.
- **Exit Criteria:** Reproduction test passes; regression test suite passes; minimal code fix applied.
- **Artifacts Consumed:** Root cause analysis, reproduction test case.
- **Artifacts Produced:** Code fix diff and permanent regression test.
- **Skills Composed:** `diagnosing-bugs`, `red-green-refactor-loop`.
- **References Used:** `coding-standards`, `testing-patterns-reference`.
- **Roles Involved:** `implementation-agent`, `test-engineer`.
- **Gates:** `unit-testing-suite`, `stop-the-line-andon-cord`.

### 5.7 `diagnostic-cleanup`
- **Canonical Name:** `diagnostic-cleanup`
- **Governing Decisions:** D-624 (superseding D-110), D-114
- **Source Citations:** Matt `skills/engineering/diagnosing-bugs/SKILL.md:135-150`
- **Purpose:** Cleanly purge all temporary logging, probes, and diagnostic scaffolding from the repository before committing the fix.
- **Entry Criteria:** Remediation verified clean by tests.
- **Exit Criteria:** Diff contains only the permanent code fix and permanent regression test; zero temporary probe code remaining.
- **Artifacts Consumed:** Staged working tree changes.
- **Artifacts Produced:** Cleaned working increment.
- **Skills Composed:** `diagnosing-bugs`, `atomic-commit-workflow`.
- **References Used:** `code-smell-baseline`, `coding-standards`.
- **Roles Involved:** `implementation-agent`, `code-simplifier`.
- **Gates:** `pre-commit-validation-checks`.

---

## 6. Migration & Deletion Sub-Lifecycles

### 6.1 `expand-phase`
- **Canonical Name:** `expand-phase`
- **Governing Decisions:** D-621 (superseding D-107)
- **Source Citations:** Addy `skills/deprecation-and-migration/SKILL.md:169-185`; Matt `docs/engineering/to-tickets.md:50`
- **Purpose:** Add new database columns, API endpoints, or architecture interfaces in parallel with existing legacy interfaces, maintaining backwards compatibility.
- **Entry Criteria:** Approved migration specification.
- **Exit Criteria:** New interfaces deployed and operational; dual-write or forward-compatibility mechanisms active.
- **Artifacts Consumed:** Migration specification (`docs/specs/migration-<name>.md`).
- **Artifacts Produced:** Expanded interface schema and compatibility adapters.
- **Skills Composed:** `expand-contract-pattern`, `strangler-fig-pattern`.
- **References Used:** `api-interface-standards-reference`, `domain-driven-design`.
- **Roles Involved:** `architect`, `implementation-agent`.
- **Gates:** `phase-boundary-transition`.

### 6.2 `migrate-phase`
- **Canonical Name:** `migrate-phase`
- **Governing Decisions:** D-622 (superseding D-108)
- **Source Citations:** Addy `skills/deprecation-and-migration/SKILL.md:169-195`; Matt `docs/engineering/to-tickets.md:51`
- **Purpose:** Progressively migrate data, callers, and operational traffic from legacy interfaces to new interfaces.
- **Entry Criteria:** Expand phase completed and verified in production.
- **Exit Criteria:** 100% of traffic and call sites transitioned to new interfaces; legacy traffic verified zero.
- **Artifacts Consumed:** Migration plan, caller inventory.
- **Artifacts Produced:** Backfill execution logs, updated client integration diffs.
- **Skills Composed:** `expand-contract-pattern`, `operational-metrics`.
- **References Used:** `api-interface-standards-reference`.
- **Roles Involved:** `implementation-agent`, `devops-specialist`.
- **Gates:** `quality-gate-pipeline`.

### 6.3 `contract-phase`
- **Canonical Name:** `contract-phase`
- **Governing Decisions:** D-623 (superseding D-109)
- **Source Citations:** Addy `skills/deprecation-and-migration/SKILL.md:169-205`; Matt `docs/engineering/to-tickets.md:52`
- **Purpose:** Decommission and delete deprecated legacy interfaces, schema columns, and transitional adapters after all callers have migrated.
- **Entry Criteria:** Zero traffic to legacy interfaces confirmed over telemetry window.
- **Exit Criteria:** Legacy code and schema elements deleted; code simplification complete.
- **Artifacts Consumed:** Telemetry confirmation report.
- **Artifacts Produced:** Deletion diff removing deprecated interfaces.
- **Skills Composed:** `expand-contract-pattern`, `deletion-test`.
- **References Used:** `code-smell-baseline`, `coding-standards`.
- **Roles Involved:** `implementation-agent`, `architect`.
- **Gates:** `unit-testing-suite`, `quality-gate-pipeline`.

### 6.4 `deletion-cleanup`
- **Canonical Name:** `deletion-cleanup`
- **Governing Decisions:** D-624 (superseding D-110)
- **Source Citations:** RJM `.claude/skills/adr-review/references/deletion-workflow.md:81-110`
- **Purpose:** Systematically audit and remove stale documentation, dangling references, deprecated ADR pointers, and obsolete glossary entries following code deletion.
- **Entry Criteria:** Code deletion merged.
- **Exit Criteria:** Repository documentation, architectural references, and indexes audited with zero dangling links.
- **Artifacts Consumed:** Deletion diff and project documentation files.
- **Artifacts Produced:** Documentation updates removing dead references.
- **Skills Composed:** `pruning`, `deduplication`.
- **References Used:** `issue-tracker-governance-reference`, `primary-source-reference`.
- **Roles Involved:** `technical-writer`, `janitor`.
- **Gates:** `pre-commit-validation-checks`.

---

## 7. Meta & Container Phases

### 7.1 `phase-routing`
- **Canonical Name:** `phase-routing`
- **Governing Decisions:** D-112, D-619
- **Source Citations:** Addy `external/index.md:25`; Matt `skills/productivity/SKILL.md:5`
- **Purpose:** Evaluate developer intent, working tree state, and command invocations to route execution to the proper lifecycle phase.
- **Entry Criteria:** Developer prompt or command invocation.
- **Exit Criteria:** Destination phase selected and dispatched with appropriate parameters.
- **Artifacts Consumed:** Developer prompt, repository state.
- **Artifacts Produced:** Dispatch directive.
- **Skills Composed:** `intent-dispatch-send`, `wayfinder-routing`.
- **References Used:** `orchestration-patterns-reference`.
- **Roles Involved:** `router`, `coordinator`.
- **Gates:** None (routing gate).

### 7.2 `engineering-domain`
- **Canonical Name:** `engineering-domain`
- **Governing Decisions:** D-113
- **Source Citations:** Matt `skills/engineering/SKILL.md:5`
- **Purpose:** Serve as the unified functional container classifying all core software engineering skills, conventions, and tool definitions across the agent skill catalog.
- **Entry Criteria:** Global catalog classification.
- **Exit Criteria:** Consistent skill discovery across sub-skills.
- **Artifacts Consumed:** Agent skill registry.
- **Artifacts Produced:** Skill metadata classifications.
- **Skills Composed:** All engineering sub-skills.
- **References Used:** `coding-standards`.
- **Roles Involved:** All technical roles.
- **Gates:** None (domain catalog container).

### 7.3 `lifecycle`
- **Canonical Name:** `lifecycle`
- **Governing Decisions:** D-111
- **Source Citations:** Addy `skills/spec-driven-development/SKILL.md:14`; Matt `skills/work-in-phases/SKILL.md:12`; RJM `.claude/commands/work.md:10`
- **Purpose:** Embody the overarching end-to-end software development operating model, governing all phase transitions, artifact contracts, and quality gates across the project.
- **Entry Criteria:** Lifecycle initialization.
- **Exit Criteria:** Project lifecycle execution complete.
- **Artifacts Consumed:** All lifecycle artifacts.
- **Artifacts Produced:** Complete software system.
- **Skills Composed:** Full lifecycle skill catalog.
- **References Used:** All reference standards.
- **Roles Involved:** All roles.
- **Gates:** All lifecycle gates.
