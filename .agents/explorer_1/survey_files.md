# Survey and Catalog: `inv-addy-1` Work Unit (28 Files)

## 1. Executive Summary & Overview

The `inv-addy-1` work unit represents the entry points, orchestrators, command definitions, and evaluation test suites for the `addy` source package (`github.com/addyosmani/agent-skills`, pinned SHA `d2c37ef6225dd8726cdd369a8030307f48592d26`).

- **Total Files**: 28 files
- **Total Lines**: 1,221 lines
- **Total Size**: 49,827 bytes (~48.66 KB)
- **Directory Scope**:
  1. `.gemini/commands/` — 9 TOML command definitions (263 lines, 17,385 bytes)
  2. `evals/cases/` — 19 JSON evaluation / benchmark test suite definitions (958 lines, 32,442 bytes)

No scripts exist in this unit; all files are configuration / metadata (`command` or `config`).

---

## 2. Inventory Catalog Table

| # | Relative Path | Line Count | Byte Count | Type | Subsystem |
|---|---------------|------------|------------|------|-----------|
| 1 | `.gemini/commands/ship.toml` | 71 | 4,780 | `command` | Gemini CLI Commands / Multi-Agent Orchestration |
| 2 | `.gemini/commands/webperf.toml` | 32 | 1,884 | `command` | Gemini CLI Commands / Performance Auditing |
| 3 | `.gemini/commands/planning.toml` | 15 | 635 | `command` | Gemini CLI Commands / Lifecycle Planning |
| 4 | `.gemini/commands/review.toml` | 15 | 844 | `command` | Gemini CLI Commands / Code Review |
| 5 | `.gemini/commands/constraints.toml` | 32 | 2,775 | `command` | Gemini CLI Commands / Quality Governance |
| 6 | `.gemini/commands/build.toml` | 43 | 3,840 | `command` | Gemini CLI Commands / Implementation Execution |
| 7 | `.gemini/commands/spec.toml` | 16 | 911 | `command` | Gemini CLI Commands / Requirements Specification |
| 8 | `.gemini/commands/code-simplify.toml` | 21 | 1,066 | `command` | Gemini CLI Commands / Refactoring & Code Quality |
| 9 | `.gemini/commands/test.toml` | 18 | 650 | `command` | Gemini CLI Commands / Testing & Verification |
| 10 | `evals/cases/code-review-and-quality.json` | 45 | 1,374 | `config` | Eval Test Suite / Review & Quality |
| 11 | `evals/cases/source-driven-development.json` | 44 | 1,287 | `config` | Eval Test Suite / Grounding & Documentation |
| 12 | `evals/cases/interview-me.json` | 42 | 1,197 | `config` | Eval Test Suite / Requirements Discovery |
| 13 | `evals/cases/ci-cd-and-automation.json` | 45 | 1,349 | `config` | Eval Test Suite / Pipeline Automation |
| 14 | `evals/cases/test-driven-development.json` | 73 | 3,981 | `config` | Eval Test Suite / TDD & Bug Reproduction |
| 15 | `evals/cases/security-and-hardening.json` | 45 | 1,311 | `config` | Eval Test Suite / Threat Modeling & Hardening |
| 16 | `evals/cases/doubt-driven-development.json` | 42 | 1,274 | `config` | Eval Test Suite / Adversarial Review |
| 17 | `evals/cases/spec-driven-development.json` | 72 | 2,657 | `config` | Eval Test Suite / Specification & Decomposition |
| 18 | `evals/cases/idea-refine.json` | 43 | 1,269 | `config` | Eval Test Suite / Ideation & MVP Scoping |
| 19 | `evals/cases/incremental-implementation.json` | 57 | 1,942 | `config` | Eval Test Suite / Vertical Slices & Execution |
| 20 | `evals/cases/observability-and-instrumentation.json` | 44 | 1,278 | `config` | Eval Test Suite / Telemetry & Alerting |
| 21 | `evals/cases/constraint-driven-development.json` | 79 | 3,353 | `config` | Eval Test Suite / Quality Bars & Ratchets |
| 22 | `evals/cases/context-engineering.json` | 44 | 1,390 | `config` | Eval Test Suite / Context Management |
| 23 | `evals/cases/browser-testing-with-devtools.json` | 44 | 1,455 | `config` | Eval Test Suite / DevTools Browser Testing |
| 24 | `evals/cases/frontend-ui-engineering.json` | 51 | 1,430 | `config` | Eval Test Suite / UI, A11y & State |
| 25 | `evals/cases/documentation-and-adrs.json` | 44 | 1,328 | `config` | Eval Test Suite / ADRs & Documentation |
| 26 | `evals/cases/shipping-and-launch.json` | 56 | 1,816 | `config` | Eval Test Suite / Launch Readiness & Gates |
| 27 | `evals/cases/api-and-interface-design.json` | 45 | 1,494 | `config` | Eval Test Suite / API & Contract Design |
| 28 | `evals/cases/deprecation-and-migration.json` | 43 | 1,257 | `config` | Eval Test Suite / Lifecycle Sunset & Migration |

---

## 3. Subsystem Groupings and Architecture

The 28 files fall naturally into two major architectural subsystems:

### Subsystem A: Slash Commands (`.gemini/commands/*.toml`)
These TOML files define the user-facing CLI slash commands for Google Gemini CLI. Each TOML file contains:
- `description`: Single-line summary of the command's purpose.
- `prompt`: Detailed instruction prompt injected into the Gemini session when the user runs the command (e.g. `/ship`, `/build`, `/spec`).

Key architectural characteristics:
- **Direct Skill Invocation**: Commands serve as frontends/entrypoints to the corresponding skills located in `skills/<skill_name>/SKILL.md`.
- **Multi-Agent Fan-Out Orchestration**: Commands like `/ship` demonstrate parallel subagent spawning (`code-reviewer`, `security-auditor`, `test-engineer`) and subsequent synthesis in the main context.
- **Autonomous vs. Stepped Modes**: `/build` provides dual-mode execution (single-task stepped execution vs `/build auto` autonomous plan execution).
- **Sub-commands & Parameter Handling**: Commands like `/constraints` support sub-commands (`check`, `guard`, `ratchet`) and `$ARGUMENTS` expansion.

### Subsystem B: Evaluation & Benchmark Test Suites (`evals/cases/*.json`)
These JSON files define test cases and routing assertions used by the evaluation harness (`evals/README.md` and test runners) to benchmark agent performance on skills.

Structure of each eval file:
- `skill_name`: Canonical skill identifier.
- `trigger`:
  - `positive`: Array of trigger prompts with required retrieval rank (`top_k: 1` or `top_k: 3`).
  - `negative`: Array of distractor prompts that should route to other designated owner skills or remain untriggered.
- `evals`: Array of detailed test scenarios containing:
  - `id`: Numeric test case identifier.
  - `kind` (optional): Interaction type (e.g. `"dialogue"` for multi-turn conversational interviews).
  - `prompt`: User prompt presenting a realistic engineering task or pressure scenario.
  - `expected_output`: Summary description of expected result.
  - `files` (optional): Referenced test fixture packages located in `evals/fixtures/<fixture-name>/`.
  - `expectations`: Strict grading rubric checklist items verifying methodology compliance (e.g. test-first invariant, resisting authority pressure, explicit boundary definition, citing sources).

---

## 4. Deep-Dive File Catalog (All 28 Files)

### 1. `.gemini/commands/ship.toml`
- **Path**: `sources/addy/.gemini/commands/ship.toml`
- **Lines**: 71 | **Bytes**: 4,780 | **Type**: `command`
- **Purpose**: "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision" (line 1).
- **Design Intent**: Orchestrates a pre-launch review by spawning three specialist subagents in parallel, then synthesizing their findings into a structured GO/NO-GO decision with a mandatory rollback plan. Prevents single-reviewer blindspots and enforces launch gates.
- **Inputs**: Staged changes, recent git commits, diffs.
- **Outputs**: Markdown ship report containing GO/NO-GO decision, blockers, recommended fixes, acknowledged risks, rollback plan (triggers, procedure, RTO), and embedded specialist reports.
- **Invokes**:
  - Skill: `shipping-and-launch` (line 4)
  - Subagents: `code-reviewer` (`agents/code-reviewer.md`), `security-auditor` (`agents/security-auditor.md`), `test-engineer` (`agents/test-engineer.md`) (lines 14–16)
- **External References**: `references/orchestration-patterns.md` (line 23), `agents/` (line 25), `~/.gemini/agents/` (line 25).
- **Special Characteristics / Gates**:
  - Mandatory parallel execution of Phase A personas in a single assistant turn.
  - Flat fan-out (no peer-to-peer delegation).
  - Mandatory rollback plan for GO verdict.
  - Critical finding defaults to NO-GO.
  - Fan-out bypass criteria: <= 2 files, < 50 lines diff, no auth/payments/data/config changes.

### 2. `.gemini/commands/webperf.toml`
- **Path**: `sources/addy/.gemini/commands/webperf.toml`
- **Lines**: 32 | **Bytes**: 1,884 | **Type**: `command`
- **Purpose**: "Run a web performance audit via the web-performance-auditor persona" (line 1).
- **Design Intent**: Provides automated web performance auditing for browser-facing web applications, dynamically switching between Deep mode (with live traces/Lighthouse/CrUX data) and Quick mode (static code analysis).
- **Inputs**: Diffs/components, Lighthouse JSON, PSI JSON, CrUX API data, DevTools performance traces, or live URL.
- **Outputs**: Web performance audit report with sourced scorecard, ranked findings, positive observations, and recommendations.
- **Invokes**: Persona `web-performance-auditor` (`agents/web-performance-auditor.md`) (line 20).
- **External References / Tools**: `chrome-devtools` MCP server (`lighthouse_audit`, `performance_*`), Chrome DevTools MCP CLI (`npx -p chrome-devtools-mcp chrome-devtools`), Lighthouse CLI, PageSpeed Insights, CrUX API.
- **Special Characteristics**: Hard rule prohibiting fabricated metrics (unmeasured values marked `not measured`).

### 3. `.gemini/commands/planning.toml`
- **Path**: `sources/addy/.gemini/commands/planning.toml`
- **Lines**: 15 | **Bytes**: 635 | **Type**: `command`
- **Purpose**: "Break work into small verifiable tasks with acceptance criteria and dependency ordering" (line 1).
- **Design Intent**: Bridges specification and implementation by entering a read-only planning mode that analyzes component dependencies and slices work vertically into verifiable tasks.
- **Inputs**: `SPEC.md` (or equivalent spec) and codebase.
- **Outputs**: `tasks/plan.md` (execution plan) and `tasks/todo.md` (task list).
- **Invokes**: Skill `planning-and-task-breakdown` (line 4).
- **Special Characteristics**: Read-only enforcement (no code modifications during planning); vertical slicing over horizontal layering.

### 4. `.gemini/commands/review.toml`
- **Path**: `sources/addy/.gemini/commands/review.toml`
- **Lines**: 15 | **Bytes**: 844 | **Type**: `command`
- **Purpose**: "Conduct a five-axis code review — correctness, readability, architecture, security, performance" (line 1).
- **Design Intent**: Standardizes peer review along five explicit dimensions with severity categorization to ensure thorough, actionable feedback.
- **Inputs**: Staged changes or recent commits.
- **Outputs**: Structured review report with severity-labeled findings (`Critical`, `Important`, `Suggestion`), `file:line` citations, and fix recommendations.
- **Invokes**: Skill `code-review-and-quality` (line 4).
- **Referenced Skills**: `security-and-hardening` (axis 4, line 11), `performance-optimization` (axis 5, line 12).

### 5. `.gemini/commands/constraints.toml`
- **Path**: `sources/addy/.gemini/commands/constraints.toml`
- **Lines**: 32 | **Bytes**: 2,775 | **Type**: `command`
- **Purpose**: "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" (line 1).
- **Design Intent**: Establishes, enforces, and ratchets codebase quality constraints through an automated inspection and brief Socratic interview, binding constraints to actual tools.
- **Inputs**: Repo configuration files (`package.json`, `pyproject.toml`, `go.mod`), linters, test coverage, CI workflows.
- **Outputs**: `CONSTRAINTS.md` (Floor, enforced metrics, measured-only metrics, exceptions table), `package.json` scripts (`check:fast`, `check:task`, `check:full`), agent prompt additions in `AGENTS.md` and `GEMINI.md`.
- **Invokes**: Skill `constraint-driven-development` (line 4).
- **External Tools**: Semgrep, gitleaks (`--redact`), osv-scanner, axe-core, Lighthouse, size-limit, dependency-cruiser, Stryker.
- **Special Characteristics / Sub-commands**:
  - `/constraints check` (run verification against branch).
  - `/constraints guard` (inspect diff for weakened standards/suppressions).
  - `/constraints ratchet` (lock today's measured values as new floor).

### 6. `.gemini/commands/build.toml`
- **Path**: `sources/addy/.gemini/commands/build.toml`
- **Lines**: 43 | **Bytes**: 3,840 | **Type**: `command`
- **Purpose**: "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." (line 1).
- **Design Intent**: Drives disciplined implementation via TDD cycles. Supports single-task stepped mode or autonomous whole-plan execution with clean rollback guarantees.
- **Inputs**: Task plan (`tasks/plan.md`), specification (`SPEC.md`, `docs/SPEC.md`, `spec/*`), git repository state.
- **Outputs**: Production code, unit/regression tests, atomic git commits per task, updated `tasks/plan.md` status.
- **Invokes**: Skills `incremental-implementation`, `test-driven-development` (line 4).
- **Referenced Skills**: `planning-and-task-breakdown` (line 33), `debugging-and-error-recovery` (lines 36, 42), `doubt-driven-development` (line 38).
- **Special Characteristics / Modes**:
  - Default mode: Implements single next pending task (RED → GREEN → regression → build → commit).
  - Autonomous mode (`/build auto` / `/build all`): Verifies clean baseline (`git status --porcelain`), requires unambiguous approval checkpoint, runs plan in dependency order with atomic per-task commits. Halts immediately on failure or high-risk operations.

### 7. `.gemini/commands/spec.toml`
- **Path**: `sources/addy/.gemini/commands/spec.toml`
- **Lines**: 16 | **Bytes**: 911 | **Type**: `command`
- **Purpose**: "Start spec-driven development — write a structured specification before writing code" (line 1).
- **Design Intent**: Enforces a specification-first methodology by conducting a clarifying interview to establish goals, boundaries, and acceptance criteria before implementation.
- **Inputs**: User requirements, project context.
- **Outputs**: `SPEC.md` covering objective, commands, project structure, code style, testing strategy, boundaries.
- **Invokes**: Skill `spec-driven-development` (line 4).
- **Special Characteristics**: Capability decomposition for complex initiatives (Phase 0 capability map with module ids and dependency ordering).

### 8. `.gemini/commands/code-simplify.toml`
- **Path**: `sources/addy/.gemini/commands/code-simplify.toml`
- **Lines**: 21 | **Bytes**: 1,066 | **Type**: `command`
- **Purpose**: "Simplify code for clarity and maintainability — reduce complexity without changing behavior" (line 1).
- **Design Intent**: Systematically reduces structural complexity (nesting, long functions, nested ternaries, duplication, dead code) in small incremental steps while preserving exact external behavior.
- **Inputs**: Target code / recent diffs, `GEMINI.md`, test suites.
- **Outputs**: Refactored code with passing test suites and clean diff.
- **Invokes**: Skill `code-simplification` (line 4).
- **Referenced Skills / Files**: `GEMINI.md` (line 8), `code-review-and-quality` (line 21).
- **Special Characteristics**: Incremental verification; automatic revert if any test fails.

### 9. `.gemini/commands/test.toml`
- **Path**: `sources/addy/.gemini/commands/test.toml`
- **Lines**: 18 | **Bytes**: 650 | **Type**: `command`
- **Purpose**: "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." (line 1).
- **Design Intent**: Guides test-driven development for features (Red-Green-Refactor) and defect fixes ("Prove-It pattern" requiring a failing reproduction test before code changes).
- **Inputs**: Feature specs, bug descriptions, codebase.
- **Outputs**: Failing tests, minimal passing implementations, verified test suite passes.
- **Invokes**: Skill `test-driven-development` (line 4).
- **Referenced Skills**: `browser-testing-with-devtools` (line 18).

---

### 10. `evals/cases/code-review-and-quality.json`
- **Path**: `sources/addy/evals/cases/code-review-and-quality.json`
- **Lines**: 45 | **Bytes**: 1,374 | **Type**: `config`
- **Target Skill**: `code-review-and-quality`
- **Trigger Tests**:
  - Positive (3): PR review, quality pass on diff, review AI-generated code.
  - Negative (2): Deploy to prod (`shipping-and-launch`), write failing test (`test-driven-development`).
- **Eval Scenario (ID 1)**: Multi-axis review of a diff adding a user-search endpoint.
- **Expectations**: Covers multiple axes (correctness, readability, architecture, security, performance); severity taxonomy labels; security analysis of user input; leads with high-leverage findings.

### 11. `evals/cases/source-driven-development.json`
- **Path**: `sources/addy/evals/cases/source-driven-development.json`
- **Lines**: 44 | **Bytes**: 1,287 | **Type**: `config`
- **Target Skill**: `source-driven-development`
- **Trigger Tests**:
  - Positive (3): Verify Next.js docs, source-cited Stripe code, ground framework decisions in docs.
  - Negative (2): Fix flaky CI test (`ci-cd-and-automation`), break spec into tasks (`planning-and-task-breakdown`).
- **Eval Scenario (ID 1)**: Implement session handling with official framework documentation.
- **Expectations**: Cites official documentation; flags unverified assumptions; avoids deprecated patterns.

### 12. `evals/cases/interview-me.json`
- **Path**: `sources/addy/evals/cases/interview-me.json`
- **Lines**: 42 | **Bytes**: 1,197 | **Type**: `config`
- **Target Skill**: `interview-me`
- **Trigger Tests**:
  - Positive (3): Interview before building, grill on requirements, ask one question at a time.
  - Negative (2): Run test suite (`test-driven-development`), deploy to staging (`shipping-and-launch`).
- **Eval Scenario (ID 1 - Dialogue)**: Clarifying a vague request ("a better admin page").
- **Expectations**: Questions asked one at a time (no batching); no premature solutions; surfaces underlying objective.

### 13. `evals/cases/ci-cd-and-automation.json`
- **Path**: `sources/addy/evals/cases/ci-cd-and-automation.json`
- **Lines**: 45 | **Bytes**: 1,349 | **Type**: `config`
- **Target Skill**: `ci-cd-and-automation`
- **Trigger Tests**:
  - Positive (3): GitHub Actions on PR, deploy stage with approval gate, automated quality gates.
  - Negative (2): Refactor function (`code-simplification`), structured logging (`observability-and-instrumentation`).
- **Eval Scenario (ID 1)**: Create Node.js CI pipeline with lint, test, and merge blocking.
- **Expectations**: Pull request trigger; quality gate failures block pipeline; logical step ordering and sane caching; zero hardcoded secrets.

### 14. `evals/cases/test-driven-development.json`
- **Path**: `sources/addy/evals/cases/test-driven-development.json`
- **Lines**: 73 | **Bytes**: 3,981 | **Type**: `config`
- **Target Skill**: `test-driven-development`
- **Trigger Tests**:
  - Positive (3): Write failing test before bugfix, streak calculator TDD, parsing logic test coverage.
  - Negative (2): Update architecture diagram (`documentation-and-adrs`), skill routing query (`using-agent-skills`).
- **Eval Scenarios (3)**:
  - **ID 1**: Lost-cent reconciliation bug (`BUG.md`). Expects failing reproduction test first; preserves README fairness invariant (earliest shares get remainder); dedicated test for remainder >= 2; runs repository test command.
  - **ID 2**: High pressure hotfix scenario (tech lead demands immediate remainder-dump one-liner without tests). Expects agent to resist pressure, write failing reproduction test first, reject improper remainder-dump fix, and verify full suite.
  - **ID 3**: Ecosystem awareness test (`test-driven-development-ecosystem`). Expects Python/unittest detection, using `python3 -m unittest` instead of npm, test-first debit entry with negative balance ValueError test.

### 15. `evals/cases/security-and-hardening.json`
- **Path**: `sources/addy/evals/cases/security-and-hardening.json`
- **Lines**: 45 | **Bytes**: 1,311 | **Type**: `config`
- **Target Skill**: `security-and-hardening`
- **Trigger Tests**:
  - Positive (3): File upload vulnerability audit, OWASP Top 10 login audit, harden webhook URL fetcher.
  - Negative (2): Rename variables (`code-simplification`), release tagging (`git-workflow-and-versioning`).
- **Eval Scenario (ID 1)**: Harden server-side webhook URL fetcher.
- **Expectations**: Identifies trust boundaries before proposing controls; SSRF protection blocks private and reserved IP ranges (not just protocol scheme checks); boundary input validation; zero secrets exposed in logs/errors.

### 16. `evals/cases/doubt-driven-development.json`
- **Path**: `sources/addy/evals/cases/doubt-driven-development.json`
- **Lines**: 42 | **Bytes**: 1,274 | **Type**: `config`
- **Target Skill**: `doubt-driven-development`
- **Trigger Tests**:
  - Positive (3): Cross-examine auth assumptions, adversarial review of reasoning in fresh context, stress-test high-stakes migration.
  - Negative (2): Prettier formatting, changelog writing.
- **Eval Scenario (ID 1)**: Adversarial review of an irreversible data migration plan.
- **Expectations**: Extracts and challenges non-trivial claims individually; empirically tests assumptions; verdict clearly separates verified claims from surviving doubts.

### 17. `evals/cases/spec-driven-development.json`
- **Path**: `sources/addy/evals/cases/spec-driven-development.json`
- **Lines**: 72 | **Bytes**: 2,657 | **Type**: `config`
- **Target Skill**: `spec-driven-development`
- **Trigger Tests**:
  - Positive (5): Billing feature spec, PRD with boundaries, new service requirements, capability decomposition, capability mapping.
  - Negative (3): Trace request (`observability-and-instrumentation`), simplify one-liner (`code-simplification`), break spec into tasks (`planning-and-task-breakdown`).
- **Eval Scenarios (2)**:
  - **ID 1**: Usage-based billing `SPEC.md`. Expects explicit boundaries/non-goals; surfaces ambiguities as questions; testing strategy included; no implementation code.
  - **ID 2**: Capability decomposition (`portal-brief.md`, `spec-driven-development-decomposition`). Expects capability map with module IDs and acyclic dependency direction; approval requested before per-module drafting; strictly scoped specs; no implementation code.

### 18. `evals/cases/idea-refine.json`
- **Path**: `sources/addy/evals/cases/idea-refine.json`
- **Lines**: 43 | **Bytes**: 1,269 | **Type**: `config`
- **Target Skill**: `idea-refine`
- **Trigger Tests**:
  - Positive (3): Refine habit tracker idea, stress-test onboarding plan, ideate on developer retention.
  - Negative (2): Fix CI (`ci-cd-and-automation`), audit upload endpoint (`security-and-hardening`).
- **Eval Scenario (ID 1 - Dialogue)**: Refine vague product idea ("knowledge sharing tool").
- **Expectations**: Sharpening questions before convergence; surfaces hidden assumptions; produces explicit "Not Doing" list; constructively pushes back on weak aspects.

### 19. `evals/cases/incremental-implementation.json`
- **Path**: `sources/addy/evals/cases/incremental-implementation.json`
- **Lines**: 57 | **Bytes**: 1,942 | **Type**: `config`
- **Target Skill**: `incremental-implementation`
- **Trigger Tests**:
  - Positive (3): Next task from plan as small slice, step-by-step build with commit per increment, ship behind feature flag in thin slices.
  - Negative (2): Alerting configuration (`observability-and-instrumentation`), requirements interview (`interview-me`).
- **Eval Scenarios (2)**:
  - **ID 1**: CSV export implementation from tasks plan. Expects thin vertical slices; verification before next slice; atomic git commit per slice.
  - **ID 2**: Sunk-cost pressure scenario (`incremental-implementation-pressure`). Expects agent to reject sunk-cost pressure to commit large unverified batch, decompose into vertical slices, and require test verification per slice.

### 20. `evals/cases/observability-and-instrumentation.json`
- **Path**: `sources/addy/evals/cases/observability-and-instrumentation.json`
- **Lines**: 44 | **Bytes**: 1,278 | **Type**: `config`
- **Target Skill**: `observability-and-instrumentation`
- **Trigger Tests**:
  - Positive (3): Structured logging/metrics for checkout, request tracing, on-call alerts for new endpoint.
  - Negative (2): Simplify component (`code-simplification`), draft PRD.
- **Eval Scenario (ID 1)**: Instrument payment-retry feature for on-call operations.
- **Expectations**: Formulates operational on-call questions first; structured JSON logs with correlation IDs; RED metrics with bounded label cardinality; symptom-based actionable alerts.

### 21. `evals/cases/constraint-driven-development.json`
- **Path**: `sources/addy/evals/cases/constraint-driven-development.json`
- **Lines**: 79 | **Bytes**: 3,353 | **Type**: `config`
- **Target Skill**: `constraint-driven-development`
- **Trigger Tests**:
  - Positive (5): Set up quality constraints, interview with defaults, prevent `@ts-ignore`/test skipping, coverage threshold placement, a11y/webperf constraints.
  - Negative (3): PR review (`code-review-and-quality`), deploy stage (`ci-cd-and-automation`), failing test before fix (`test-driven-development`).
- **Eval Scenarios (3 - Dialogue)**:
  - **ID 1**: Repo constraints setup. Inspects repo stack first; <= 4 questions with defaults; ratchet approach (record and hold today's value) if no target number; tiered execution cost placement; reasons for numbers.
  - **ID 2**: Unrealistic threshold pushback (user requests 85% coverage when current is 62%). Warns against permanent red build; offers ratchet alternative.
  - **ID 3**: Accessibility constraint setup. Names concrete tool (`axe-core`) and commands; checks for running URL; records command in `CONSTRAINTS.md`; places check at preview-deploy stage.

### 22. `evals/cases/context-engineering.json`
- **Path**: `sources/addy/evals/cases/context-engineering.json`
- **Lines**: 44 | **Bytes**: 1,390 | **Type**: `config`
- **Target Skill**: `context-engineering`
- **Trigger Tests**:
  - Positive (3): Context to load before refactor, model quality degradation fix, rules files & context packing setup.
  - Negative (2): Unit tests for parser (`test-driven-development`), SQL injection hardening (`security-and-hardening`).
- **Eval Scenario (ID 1)**: Diagnosing and remedying agent context degradation.
- **Expectations**: Diagnoses context causes (pollution/forgetting); produces concrete loading plan (rules files, packing, task-scoped context); strictly scopes context to task.

### 23. `evals/cases/browser-testing-with-devtools.json`
- **Path**: `sources/addy/evals/cases/browser-testing-with-devtools.json`
- **Lines**: 44 | **Bytes**: 1,455 | **Type**: `config`
- **Target Skill**: `browser-testing-with-devtools`
- **Trigger Tests**:
  - Positive (3): DevTools button click debug, inspect network requests on load, verify form submission & localStorage in real browser.
  - Negative (2): Spec for billing (`spec-driven-development`), break PRD into tasks (`planning-and-task-breakdown`).
- **Eval Scenario (ID 1)**: Silent form submission failure investigation.
- **Expectations**: Grounded in observed runtime evidence (console, network, DOM); clearly distinguishes observation from inference; provides concrete fix hypothesis.

### 24. `evals/cases/frontend-ui-engineering.json`
- **Path**: `sources/addy/evals/cases/frontend-ui-engineering.json`
- **Lines**: 51 | **Bytes**: 1,430 | **Type**: `config`
- **Target Skill**: `frontend-ui-engineering`
- **Trigger Tests**:
  - Positive (5): Responsive & WCAG compliant page, accessible modal with keyboard support, mobile pricing page, reusable dashboard/profile components with state management.
  - Negative (2): Database index optimization (`performance-optimization`), tag and publish release.
- **Eval Scenario (ID 1)**: Design system dropdown menu component.
- **Expectations**: Keyboard navigation and focus management; correct ARIA roles and semantic HTML; deliberate component state management.

### 25. `evals/cases/documentation-and-adrs.json`
- **Path**: `sources/addy/evals/cases/documentation-and-adrs.json`
- **Lines**: 44 | **Bytes**: 1,328 | **Type**: `config`
- **Target Skill**: `documentation-and-adrs`
- **Trigger Tests**:
  - Positive (3): ADR for Postgres vs Mongo, document queue architecture decision, update setup doc with rationale.
  - Negative (2): Root cause memory leak (`debugging-and-error-recovery`), harden login against brute force (`security-and-hardening`).
- **Eval Scenario (ID 1)**: Event sourcing ADR for orders service.
- **Expectations**: Standard ADR sections (Context, Decision, Alternatives Considered, Consequences); records trade-offs and rejected options; written in timeless language.

### 26. `evals/cases/shipping-and-launch.json`
- **Path**: `sources/addy/evals/cases/shipping-and-launch.json`
- **Lines**: 56 | **Bytes**: 1,816 | **Type**: `config`
- **Target Skill**: `shipping-and-launch`
- **Trigger Tests**:
  - Positive (3): Pre-launch checklist, pre-production requirements, rollback plan.
  - Negative (2): Refine product idea (`idea-refine`), function performance investigation.
- **Eval Scenarios (2)**:
  - **ID 1**: Checkout launch go/no-go assessment. Expects rollback plan before GO; verifies monitoring/alerting readiness; clear GO/NO-GO verdict with blockers.
  - **ID 2**: Authority pressure scenario (executive sponsor demands GO despite failed tests). Expects agent to hold the line, maintain failed E2E tests and missing controls as blockers, and provide concrete remediation steps.

### 27. `evals/cases/api-and-interface-design.json`
- **Path**: `sources/addy/evals/cases/api-and-interface-design.json`
- **Lines**: 45 | **Bytes**: 1,494 | **Type**: `config`
- **Target Skill**: `api-and-interface-design`
- **Trigger Tests**:
  - Positive (3): REST endpoint design for invoices, public module interface design, frontend-backend service contract.
  - Negative (2): Null pointer exception in unit test (`debugging-and-error-recovery`), mobile responsive landing page (`frontend-ui-engineering`).
- **Eval Scenario (ID 1)**: Public API design for URL shortener service.
- **Expectations**: Specifies error responses with status codes and uniform error shape; input validation at boundary; versioning / backward compatibility strategy; avoids inventing unstated requirements.

### 28. `evals/cases/deprecation-and-migration.json`
- **Path**: `sources/addy/evals/cases/deprecation-and-migration.json`
- **Lines**: 43 | **Bytes**: 1,257 | **Type**: `config`
- **Target Skill**: `deprecation-and-migration`
- **Trigger Tests**:
  - Positive (3): Sunsetting v1 API deprecation plan, legacy auth migration without breaking changes, safe removal of old feature.
  - Negative (2): Dark mode in settings, flaky CI test (`ci-cd-and-automation`).
- **Eval Scenario (ID 1)**: Public v1 REST API deprecation plan (200 external consumers).
- **Expectations**: Advance consumer notifications with timeline; compatibility window with active telemetry/monitoring; removal gated on measured adoption rather than arbitrary calendar dates.

---

## 5. Cross-File & Cross-Subsystem Dependency Matrix

### Within `inv-addy-1`:
- **`ship.toml`** coordinates launch readiness and reflects expectations in **`shipping-and-launch.json`**.
- **`review.toml`** implements the 5-axis review tested in **`code-review-and-quality.json`** and references **`security-and-hardening.json`**.
- **`constraints.toml`** implements quality bars and ratchets tested in **`constraint-driven-development.json`**.
- **`build.toml`** implements incremental execution and autonomous modes tested in **`incremental-implementation.json`**, **`test-driven-development.json`**, and references **`doubt-driven-development.json`**.
- **`spec.toml`** implements spec drafting and capability decomposition tested in **`spec-driven-development.json`**.
- **`test.toml`** implements TDD and bug reproduction tested in **`test-driven-development.json`** and references **`browser-testing-with-devtools.json`**.
- **`code-simplify.toml`** references review standards tested in **`code-review-and-quality.json`**.

### External Dependencies (Other Addy Units & Tooling):
1. **Target Skills** (located in `sources/addy/skills/<skill-name>/SKILL.md`):
   - `shipping-and-launch`, `planning-and-task-breakdown`, `code-review-and-quality`, `constraint-driven-development`, `incremental-implementation`, `test-driven-development`, `spec-driven-development`, `code-simplification`, `source-driven-development`, `interview-me`, `ci-cd-and-automation`, `security-and-hardening`, `doubt-driven-development`, `idea-refine`, `observability-and-instrumentation`, `context-engineering`, `browser-testing-with-devtools`, `frontend-ui-engineering`, `documentation-and-adrs`, `api-and-interface-design`, `deprecation-and-migration`, `performance-optimization`, `git-workflow-and-versioning`, `debugging-and-error-recovery`, `using-agent-skills`.
2. **Subagents / Personas** (located in `sources/addy/agents/`):
   - `code-reviewer.md` (`code-reviewer`)
   - `security-auditor.md` (`security-auditor`)
   - `test-engineer.md` (`test-engineer`)
   - `web-performance-auditor.md` (`web-performance-auditor`)
3. **Eval Test Fixtures** (located in `sources/addy/evals/fixtures/`):
   - `test-driven-development/` (`BUG.md`, `src/split.js`, `test/split.test.js`, `package.json`, `README.md`)
   - `test-driven-development-ecosystem/`
   - `spec-driven-development/`
   - `spec-driven-development-decomposition/` (`portal-brief.md`)
   - `incremental-implementation/` (`tasks/plan.md`, `reports.js`, `reports.test.js`)
   - `incremental-implementation-pressure/` (`scenario.md`, `draft-export.js`)
   - `shipping-and-launch/`
   - `context-engineering/` (`context-audit.md`)
   - `frontend-ui-engineering/` (`design-system.md`, `Button.tsx`)
   - `api-and-interface-design/` (`service-brief.md`)
   - `ci-cd-and-automation/` (`src/slug.js`, `test/slug.test.js`, `package.json`)
   - `debugging-and-error-recovery/` (`time-pressure.md`, `pagination.js`, `pagination.test.js`)
4. **External CLI Tools & MCP Servers**:
   - Google Gemini CLI / Claude Code runtime
   - Chrome DevTools MCP server (`lighthouse_audit`, `performance_*`) & CLI (`npx -p chrome-devtools-mcp chrome-devtools`)
   - Security / Static Analysis: Semgrep, Gitleaks (`--redact`), OSV-Scanner
   - Quality / Performance / Testing: Axe-core, Lighthouse, Stryker, Size-limit, Dependency-cruiser, Jest/Vitest/Unittest (`python3 -m unittest`)
