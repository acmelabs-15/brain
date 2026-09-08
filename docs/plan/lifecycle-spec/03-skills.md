# 03 — Lifecycle Skills Specification

This document provides the authoritative specification for all skills to be built in `skills/` (with their corresponding Antigravity mirrors in `.agents/skills/` per D-009). Each skill entry details its canonical name, assigned phase, purpose, inputs, outputs, invoked skills/tools, exact source citations (`path:line`), and governing alignment decisions.

---

## 1. Core Macro Lifecycle Skills

### 1.1 `spec-driven-development`
- **Skill Name:** `spec-driven-development`
- **Primary Phase:** `spec`
- **Purpose:** Coordinate the end-to-end discovery, requirements elicitation, scoping, and formal technical specification authoring for new features or major refactors.
- **Inputs:**
  - Feature prompt, user idea, or `agent-brief` (`docs/briefs/<slug>.md`).
  - Target repository context and architectural maps (`docs/architecture/context-map.md`).
- **Outputs:**
  - Approved `structured-requirements` document (`docs/specs/<slug>.md`).
  - Discovery log and questionnaires (`docs/specs/notes/<slug>-discovery.md`).
- **What it Invokes:**
  - Skills: `grill-me`, `grill-with-docs`, `wayfinder`, `to-spec`.
  - Tools: File read/write, bash search/ripgrep.
- **Source Material:**
  - Addy `sources/addy/skills/spec-driven-development/SKILL.md:12-85` (six-phase specification process, scope check).
  - Matt `sources/matt/skills/in-progress/writing-fragments/SKILL.md:9-40` (conversational problem exploration).
  - RJM `sources/rjm/.claude/commands/spec.md:1-85` (specification structure and CVA analysis).
- **Governing Decisions:** D-620, D-100, D-115, D-116, D-117, D-230, D-231, D-237

---

### 1.2 `planning-and-task-breakdown`
- **Skill Name:** `planning-and-task-breakdown`
- **Primary Phase:** `plan-phase`
- **Purpose:** Deconstruct an approved specification into an acyclic directed graph of atomic, sized task tickets with explicit file seams, acceptance criteria, and verification commands.
- **Inputs:**
  - Approved specification document (`docs/specs/<slug>.md`).
  - System architecture guidelines and ADR records (`docs/decisions/*.md`).
- **Outputs:**
  - Execution plan (`docs/tasks/plan-<slug>.md`).
  - Actionable checklist (`tasks/todo.md` or `docs/tasks/todo-<slug>.md`).
  - Sized task tickets (`docs/tasks/tickets/TASK-*.md`).
- **What it Invokes:**
  - Skills: `to-tickets`, `thin-vertical-slices`.
  - Tools: File read/write, dependency graph analyzers.
- **Source Material:**
  - Addy `sources/addy/skills/planning-and-task-breakdown/SKILL.md:8-90` (task decomposition, phase grouping).
  - Matt `sources/matt/skills/engineering/to-tickets/SKILL.md:1-75` (ticket generation format, issue tracker integration).
  - RJM `sources/rjm/.claude/commands/plan.md:1-185` (acyclic dependency planning, critical path analysis).
- **Governing Decisions:** D-103, D-118, D-119, D-133, D-134, D-232, D-238, D-239

---

### 1.3 `implement-spec`
- **Skill Name:** `implement-spec`
- **Primary Phase:** `build-phase`
- **Purpose:** Orchestrate autonomous task execution, claiming pending tickets from the task list, implementing minimal vertical slices in a red-green-refactor loop, and committing atomic changes.
- **Inputs:**
  - Task checklist (`tasks/todo.md`).
  - Active task ticket (`docs/tasks/tickets/TASK-*.md`).
  - Specification document (`docs/specs/<slug>.md`).
- **Outputs:**
  - Functional code modifications (`working-increment`) in repository working tree.
  - Automated unit and regression test cases.
  - Atomic conventional git commits.
- **What it Invokes:**
  - Skills: `code-simplification`, `test-driven-development`.
  - Tools: File edit, terminal test execution, git commit.
- **Source Material:**
  - Addy `sources/addy/skills/implement-spec/SKILL.md:1-80` (spec execution loop, task status synchronization).
  - Addy `sources/addy/skills/incremental-implementation/SKILL.md:1-65` (thin slice construction).
  - Matt `sources/matt/skills/engineering/implement/SKILL.md:45-80` (build step, seam modification).
  - RJM `sources/rjm/.claude/commands/build.md:1-90` (task dispatch, build validation).
- **Governing Decisions:** D-102, D-117, D-120, D-142, D-143, D-233, D-240, D-512, D-513

---

### 1.4 `verify`
- **Skill Name:** `verify`
- **Primary Phase:** `test`
- **Purpose:** Execute automated regression test suites, integration fixtures, and environmental quality gates to confirm functional correctness and performance preservation.
- **Inputs:**
  - Working tree code diffs and test cases.
  - Test strategy configuration (`docs/testing/strategy-<slug>.md`).
- **Outputs:**
  - Structured test results report (`docs/testing/results-<slug>.md`).
  - Code coverage metrics report (`docs/testing/coverage-<slug>.md`).
- **What it Invokes:**
  - Tools: Test runner (`bun test`), linting, typechecking.
- **Source Material:**
  - Addy `sources/addy/skills/verify/SKILL.md:5-65` (post-build automated verification, failure recovery).
  - Matt `sources/matt/skills/engineering/implement/SKILL.md:50-70` (test execution).
  - RJM `sources/rjm/.claude/commands/test.md:1-95` (test execution framework, quality gate ladder).
- **Governing Decisions:** D-101, D-106, D-146, D-147, D-234, D-241, D-514, D-515

---

### 1.5 `review`
- **Skill Name:** `review`
- **Primary Phase:** `review-phase`
- **Purpose:** Coordinate a multi-persona adversarial code review panel examining security, code simplicity, failure modes, and architectural alignment across proposed changes.
- **Inputs:**
  - Working tree code diff against base branch.
  - Specification document (`docs/specs/<slug>.md`).
  - Test execution report (`docs/testing/results-<slug>.md`).
- **Outputs:**
  - Consolidated review report (`docs/reviews/review-<slug>.md`).
  - Security assessment findings (`docs/security/assessment-<slug>.md`).
  - Explicit review approval or change requests.
- **What it Invokes:**
  - Skills: `code-simplification`, `silent-failure-hunter`, `security-audit`.
  - Roles: `code-reviewer`, `security-auditor`, `code-simplifier`, `architect`, `silent-failure-hunter`.
- **Source Material:**
  - Addy `sources/addy/skills/code-review-and-quality/SKILL.md:1-85` (review criteria, checklist evaluation).
  - Matt `sources/matt/skills/engineering/code-review/SKILL.md:1-60` (code critique, simplicity standards).
  - RJM `sources/rjm/.claude/skills/review/SKILL.md:1-110` (six-role review panel, multi-lens critique).
  - RJM `sources/rjm/.claude/skills/adr-review/references/ADR-064-commands-to-skills-migration.md:105` (skills composition).
- **Governing Decisions:** D-104, D-149, D-150, D-151, D-235, D-242, D-264, D-516, D-517

---

### 1.6 `ship`
- **Skill Name:** `ship`
- **Primary Phase:** `ship-phase`
- **Purpose:** Package, version, document, and deploy approved code increments, executing automated semver bumps, changelog generation, and deployment runbook verification.
- **Inputs:**
  - Approved review report (`docs/reviews/review-<slug>.md`).
  - Git working tree on release branch.
- **Outputs:**
  - Changeset bump (`.changeset/*.md`).
  - Updated changelog (`CHANGELOG.md`) and release notes.
  - Deployment runbook (`docs/runbooks/runbook-<version>.md`).
  - Production deployment confirmation.
- **What it Invokes:**
  - Skills: `changeset-versioning`.
  - Tools: Git tagging, release packaging, infrastructure deployment.
- **Source Material:**
  - Addy `sources/addy/skills/shipping-and-launch/SKILL.md:1-75` (release checklists, launch runbooks).
  - Addy `sources/addy/commands/ship.toml:1-40` (release pipeline workflow).
  - Matt `sources/matt/package.json:12` (`@changesets/cli` release automation).
  - RJM `sources/rjm/.claude/commands/ship.md:1-90` (packaging, validation, production deployment).
- **Governing Decisions:** D-105, D-154, D-617, D-156, D-157, D-236, D-243, D-518

---

## 2. Discovery & Exploration Skills

### 2.1 `grill-me`
- **Skill Name:** `grill-me`
- **Primary Phase:** `spec`
- **Purpose:** Conduct relentless, conversational grilling of the user to surface hidden assumptions, clarify edge cases, identify constraints, and establish clear MVP boundaries.
- **Inputs:** Initial user concept, feature idea, or problem statement.
- **Outputs:** Discovery questionnaire answers (`docs/specs/notes/<slug>-discovery.md`).
- **What it Invokes:** Interactive terminal questions (`ask_question` or dialogue loop).
- **Source Material:**
  - Matt `sources/matt/skills/productivity/grill-me/SKILL.md:1-80` (conversational grilling methodology, single question discipline).
  - Addy `sources/addy/skills/interview-me/SKILL.md:1-70` (structured interview rounds).
- **Governing Decisions:** D-328, D-329, D-331

---

### 2.2 `grill-with-docs`
- **Skill Name:** `grill-with-docs`
- **Primary Phase:** `spec`
- **Purpose:** Interrogate project documentation, external API guides, and system reference files alongside user grilling to verify environmental feasibility.
- **Inputs:** Problem statement, relevant documentation paths or URLs.
- **Outputs:** Document-grounded requirements and technical constraints.
- **What it Invokes:** `grill-me`, documentation search tools.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/grill-with-docs/SKILL.md:1-75` (doc-grounded discovery, contract verification).
- **Governing Decisions:** D-330, D-331

---

### 2.3 `wayfinder`
- **Skill Name:** `wayfinder`
- **Primary Phase:** `spec` (and across all phases)
- **Purpose:** Explore, navigate, and map unfamiliar codebase topology, identifying architectural landmarks, export contracts, and domain models without bloating context.
- **Inputs:** Target directory, feature domain, or exploratory query.
- **Outputs:** `wayfinder-map` (`docs/architecture/wayfinder-map.md`).
- **What it Invokes:** Ripgrep, AST analyzers, file listings.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/wayfinder/SKILL.md:1-90` (wayfinder mapping, landmark identification).
- **Governing Decisions:** D-489, D-618

---

### 2.4 `to-spec`
- **Skill Name:** `to-spec`
- **Primary Phase:** `spec`
- **Purpose:** Synthesize collected notes, discovery answers, and architectural constraints into a formal technical specification adhering to `structured-requirements`.
- **Inputs:** Discovery questionnaires, reconnaissance notes, user briefs.
- **Outputs:** `structured-requirements` document (`docs/specs/<slug>.md`).
- **What it Invokes:** Markdown drafting templates.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/to-spec/SKILL.md:1-70` (spec synthesis).
  - Addy `sources/addy/skills/spec-driven-development/SKILL.md:40-75` (specification structure).
- **Governing Decisions:** D-478, D-620, D-117

---

### 2.5 `to-tickets`
- **Skill Name:** `to-tickets`
- **Primary Phase:** `plan-phase`
- **Purpose:** Slice specification requirements into self-contained markdown ticket files, each containing description, file seams, acceptance criteria, and verification commands.
- **Inputs:** Approved specification (`docs/specs/<slug>.md`).
- **Outputs:** Sized task tickets (`docs/tasks/tickets/TASK-*.md`).
- **What it Invokes:** Ticket templating utilities.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/to-tickets/SKILL.md:1-80` (ticket generation, task slicing).
  - Addy `sources/addy/skills/planning-and-task-breakdown/SKILL.md:20-65` (atomic work breakdown).
- **Governing Decisions:** D-480, D-119, D-134, D-135

---

## 3. Diagnostic & Engineering Skills

### 3.1 `diagnosing-bugs`
- **Skill Name:** `diagnosing-bugs`
- **Primary Phase:** `triage-phase` through `defect-remediation`
- **Purpose:** Execute the systematic six-phase bug diagnosis discipline: deterministic reproduction, baseline establishment, hypothesis generation, probing, remediation, and cleanup.
- **Inputs:** Bug description, error stack trace, failing input data.
- **Outputs:** Failing reproduction test, minimized baseline, probe logs, code fix, permanent regression test.
- **What it Invokes:** Temporary instrumentation, test execution, diff auditing.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/diagnosing-bugs/SKILL.md:1-155` (six-phase bug diagnosis workflow).
  - RJM `sources/rjm/.claude/commands/test.md:20-115` (reproduction testing, hypothesis probing).
- **Governing Decisions:** D-121, D-122, D-123, D-124, D-125, D-310, D-457, D-624

---

### 3.2 `triage`
- **Skill Name:** `triage`
- **Primary Phase:** `triage-phase`
- **Purpose:** Ingest incoming defect reports, assess system impact, determine validity and priority, filter duplicate issues, and route valid bugs to diagnostic workflows.
- **Inputs:** Raw issue report, error logs, user inquiries.
- **Outputs:** Triaged issue ticket (`docs/issues/ISSUE-*.md`) with assigned labels and priority.
- **What it Invokes:** Issue tracker inspection, log search.
- **Source Material:**
  - Matt `sources/matt/skills/engineering/triage/SKILL.md:1-65` (issue classification, triage sequence).
- **Governing Decisions:** D-114, D-505, D-506

---

### 3.3 `deprecation-and-migration`
- **Skill Name:** `deprecation-and-migration`
- **Primary Phase:** `expand-phase`, `migrate-phase`, `contract-phase`
- **Purpose:** Guide safe schema, API, and architectural transitions using the expand-contract pattern to ensure zero downtime and clean backward compatibility.
- **Inputs:** Migration proposal, legacy interface definitions, target data structures.
- **Outputs:** Expanded interfaces, migration backfill scripts, contract deletion diffs.
- **What it Invokes:** Database migration runners, AST refactoring tools.
- **Source Material:**
  - Addy `sources/addy/skills/deprecation-and-migration/SKILL.md:1-210` (expand-contract migration pattern, parallel changes).
  - Matt `sources/matt/docs/engineering/to-tickets.md:50-55` (expand, migrate, contract phases).
- **Governing Decisions:** D-621, D-622, D-623, D-314, D-370

---

### 3.4 `code-simplification`
- **Skill Name:** `code-simplification`
- **Primary Phase:** `build-phase`, `review-phase`
- **Purpose:** Audit newly implemented or modified code to eliminate unnecessary abstractions, remove redundant layers, enforce simplicity, and improve readability.
- **Inputs:** Working tree source diffs.
- **Outputs:** Refactored, simplified source code diffs with preserved test coverage.
- **What it Invokes:** Linters, test suites.
- **Source Material:**
  - Addy `sources/addy/skills/code-simplification/SKILL.md:1-65` (pruning complexity, YAGNI enforcement).
  - RJM `sources/rjm/.claude/skills/review/references/code-quality.md:1-60` (code quality criteria).
- **Governing Decisions:** D-294, D-319, D-531

---

### 3.5 `silent-failure-hunter`
- **Skill Name:** `silent-failure-hunter`
- **Primary Phase:** `review-phase`
- **Purpose:** Audit code changes for swallowed exceptions, empty catch blocks, unhandled promise rejections, and missing error logging.
- **Inputs:** Working tree source diffs.
- **Outputs:** Findings list of latent silent failure points and proposed robust error handling.
- **What it Invokes:** Static analysis search, code inspection.
- **Source Material:**
  - RJM `sources/rjm/.claude/skills/review/references/reliability.md:1-60` (silent failure detection).
  - Addy `sources/addy/skills/debugging-and-error-recovery/SKILL.md:20-65` (error handling patterns).
- **Governing Decisions:** D-456, D-569

---

### 3.6 `security-audit`
- **Skill Name:** `security-audit`
- **Primary Phase:** `review-phase`
- **Purpose:** Inspect code diffs and dependencies for security vulnerabilities, injection risks, secret leakage, and improper authentication boundaries.
- **Inputs:** Working tree diffs, dependency manifests (`package.json`, `bun.lock`).
- **Outputs:** `security-assessment` report (`docs/security/assessment-<slug>.md`).
- **What it Invokes:** Secret scanning tools, vulnerability checkers.
- **Source Material:**
  - Addy `sources/addy/skills/security-and-hardening/SKILL.md:1-85` (security review checklist, threat modeling).
  - RJM `sources/rjm/.claude/skills/review/references/security.md:1-75` (security audit criteria).
- **Governing Decisions:** D-150, D-304, D-568

---

### 3.7 `changeset-versioning`
- **Skill Name:** `changeset-versioning`
- **Primary Phase:** `ship-phase`
- **Purpose:** Manage semantic version bumps, package release manifests, and automated changelog updates using `@changesets/cli`.
- **Inputs:** Committed working increments, release intent.
- **Outputs:** `.changeset/<unique-id>.md`, updated `CHANGELOG.md`.
- **What it Invokes:** `@changesets/cli` via Bun.
- **Source Material:**
  - Matt `sources/matt/package.json:12` (`@changesets/cli`).
  - Addy `sources/addy/skills/git-workflow-and-versioning/SKILL.md:1-65` (semver release notes).
- **Governing Decisions:** D-154, D-617, D-297

---

### 3.8 `architecture-decision-records`
- **Skill Name:** `architecture-decision-records`
- **Primary Phase:** `spec`, `plan-phase`
- **Purpose:** Create, update, supersede, and maintain architectural decision records (ADRs) capturing context, options, rationales, and consequences.
- **Inputs:** Architectural design decision, trade-off analysis.
- **Outputs:** `docs/decisions/adr-<id>-<title>.md`.
- **What it Invokes:** Decision templates, index updates.
- **Source Material:**
  - Addy `sources/addy/skills/documentation-and-adrs/SKILL.md:1-70` (ADR format and governance).
  - RJM `sources/rjm/.claude/skills/adr-review/SKILL.md:1-85` (ADR state lifecycle, review).
- **Governing Decisions:** D-139, D-541, D-591

---

### 3.9 `router`
- **Skill Name:** `router`
- **Primary Phase:** `phase-routing`
- **Purpose:** Analyze incoming user prompts and repository status to determine user intent, recommend the appropriate command or skill, and dispatch the corresponding phase.
- **Inputs:** User request string, current working tree state.
- **Outputs:** Phase routing directive and command invocation.
- **What it Invokes:** Target phase commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`).
- **Source Material:**
  - Matt `sources/matt/skills/engineering/ask-matt/SKILL.md:1-70` (intent-driven skill routing).
  - Addy `sources/addy/skills/using-agent-skills/SKILL.md:1-55` (skill discovery and routing).
  - RJM `sources/rjm/.claude/skills/adr-review/references/ADR-064-commands-to-skills-migration.md:105` (command dispatch).
- **Governing Decisions:** D-112, D-580, D-606, D-619
