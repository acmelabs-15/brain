# 02 — Lifecycle Artifacts Specification

This document provides the authoritative specification for all fifty-five canonical artifacts in the `brain` lifecycle. Each artifact entry specifies its canonical name, governing alignment decisions, definition, structural schema/template, producers, consumers, and exact on-disk path convention.

State in the `brain` lifecycle lives on disk in verifiable documents (D-010, D-230, D-233). Every artifact adheres to strict file path and formatting conventions.

---

## 1. Specification & Discovery Artifacts

### 1.1 `structured-requirements`
- **Canonical Name:** `structured-requirements`
- **Governing Decisions:** D-126, D-128, D-620
- **Definition:** The formal technical specification document articulating user requirements, functional behaviors, system architecture, data models, non-goals, and verification test seams.
- **On-Disk Path:** `docs/specs/<feature-slug>.md`
- **Producer:** `spec` phase; `spec-subagent` or `architect` via `to-spec-synthesis`
- **Consumer:** `plan-phase`, `build-phase`, `review-phase`; `planner`, `implementation-agent`, `code-reviewer`
- **Schema / Template:**
```markdown
# Specification: <Feature Name>

- **Status:** Draft | Under Review | Approved
- **Author:** <Role / Agent>
- **Date:** YYYY-MM-DD
- **Target Seams:** <path/to/seam1>, <path/to/seam2>

## 1. Executive Summary & Problem Statement
<Clear statement of the problem, motivation, and primary user outcome>

## 2. User Stories & Acceptance Criteria
- **US-1:** As a <user>, I want <capability>, so that <benefit>.
  - **AC-1.1:** <Falsifiable criterion>
  - **AC-1.2:** <Falsifiable criterion>

## 3. Architecture & Technical Seams
<System topology, modified modules, and dependency impacts>

## 4. Data Models & API Contracts
<Data schemas, interface types, and database changes>

## 5. Scope Boundaries & Not-Doing List
- **In Scope:** <Explicit list>
- **Not Doing (Out of Scope):** <Explicit negative scope list>

## 6. Security & Failure Modes
<Threat assessment, failure cases, and error recovery behavior>

## 7. Verification Strategy & Test Seams
<Deterministic automated verification commands and test suite locations>
```

---

### 1.2 `agent-brief`
- **Canonical Name:** `agent-brief`
- **Governing Decisions:** D-127
- **Definition:** A high-level problem statement, user goal, or product requirements overview framing the feature space before exploratory grilling.
- **On-Disk Path:** `docs/briefs/<feature-slug>.md`
- **Producer:** Human user, product owner, or `user-representative`
- **Consumer:** `spec` phase; `architect`, `explorer`, `critic`
- **Schema / Template:**
```markdown
# Brief: <Problem or Feature Title>

- **Context:** <Background environment, user feedback, or incident record>
- **Objective:** <The primary capability to unlock>
- **Known Constraints:** <Technical, operational, or business limits>
- **Success Looks Like:** <Concrete observables defining completion>
```

---

### 1.3 `discovery-questionnaire`
- **Canonical Name:** `discovery-questionnaire`
- **Governing Decisions:** D-132, D-138
- **Definition:** An exploratory question-and-answer log used during grilling sessions to surface hidden assumptions, resolve ambiguities, and capture edge cases.
- **On-Disk Path:** `docs/specs/notes/<feature-slug>-discovery.md`
- **Producer:** `spec` phase; `grill-me`, `grill-with-docs`
- **Consumer:** `specification-drafting`; `spec-subagent`, `architect`
- **Schema / Template:**
```markdown
# Discovery Questionnaire: <Feature Slug>

| # | Question / Inquiry | Answer / Clarification | Impacted Seam |
|---|---|---|---|
| 1 | <Specific inquiry> | <Clarification received> | <Component/Module> |
```

---

### 1.4 `one-page-summary`
- **Canonical Name:** `one-page-summary`
- **Governing Decisions:** D-126
- **Definition:** A condensed, high-density executive summary of a feature proposal designed for rapid human stakeholder review.
- **On-Disk Path:** `docs/specs/<feature-slug>-summary.md`
- **Producer:** `spec` phase; `to-prd-synthesis`, `technical-writer`
- **Consumer:** Human reviewer, `steering-committee`
- **Schema / Template:**
```markdown
# One-Page Summary: <Feature Title>

- **Target Milestone:** <Milestone> | **Priority:** High / Medium / Low
- **Problem:** <1-2 sentences>
- **Proposed Solution:** <1-2 sentences>
- **Key Architecture Changes:** <Bullet list of modified subsystems>
- **Risk & Mitigation:** <Primary risk and response>
```

---

### 1.5 `minimum-viable-product-scope`
- **Canonical Name:** `minimum-viable-product-scope`
- **Governing Decisions:** D-131
- **Definition:** The minimal subset of functional capabilities required to deliver demonstrable user value in the initial release slice.
- **On-Disk Path:** Embedded in `docs/specs/<feature-slug>.md` § Scope
- **Producer:** `spec` phase; `architect`, `scope-check`
- **Consumer:** `plan-phase`; `planner`, `task-decomposer`
- **Schema / Template:**
```markdown
### Minimum Viable Product (MVP) Scope
- [ ] Core Capability 1: <Description>
- [ ] Core Capability 2: <Description>
- *Post-MVP Deferrals:* <Explicit list of deferred enhancements>
```

---

### 1.6 `scope-boundary-declaration`
- **Canonical Name:** `scope-boundary-declaration`
- **Governing Decisions:** D-130
- **Definition:** An explicit boundary declaration articulating both affirmative functional commitments and strict negative scope ("Not Doing List").
- **On-Disk Path:** `docs/specs/notes/<feature-slug>-scope.md`
- **Producer:** `scope-check`; `architect`
- **Consumer:** `specification-drafting`, `plan-phase`
- **Schema / Template:**
```markdown
# Scope Boundary Declaration: <Feature Slug>

## In Scope
- <Explicit capability boundary>

## Not Doing List
- <Explicit exclusion to prevent architectural bloat>
```

---

### 1.7 `boundary-map`
- **Canonical Name:** `boundary-map`
- **Governing Decisions:** D-140, D-141
- **Definition:** A structural diagram or listing delineating domain boundaries, service interactions, and data ownership between system components.
- **On-Disk Path:** `docs/architecture/boundary-maps/<domain>.md`
- **Producer:** `reconnaissance`; `architect`
- **Consumer:** `spec`, `plan-phase`; `planner`
- **Schema / Template:** Markdown file with Mermaid boundary diagram and domain responsibility matrix.

---

### 1.8 `working-title`
- **Canonical Name:** `working-title`
- **Governing Decisions:** D-144
- **Definition:** The provisional human-readable title and normalized kebab-case slug assigned to a feature, specification, or work increment.
- **On-Disk Path:** Stored in frontmatter of `docs/specs/<slug>.md` (`working_title: "..."`)
- **Producer:** `spec` initialization; `architect`
- **Consumer:** All phases and tracking tools
- **Schema / Template:** String literal in YAML frontmatter.

---

### 1.9 `shared-exploration-map`
- **Canonical Name:** `shared-exploration-map`
- **Governing Decisions:** D-140
- **Definition:** A shared collaborative knowledge document capturing explored directory structures, discovered interfaces, and call graphs.
- **On-Disk Path:** `docs/architecture/exploration-map.md`
- **Producer:** `reconnaissance`, `wayfinder-exploration-skill`
- **Consumer:** All engineering agents
- **Schema / Template:** Markdown table of subsystems, paths, responsibilities, and key exports.

---

### 1.10 `wayfinder-map`
- **Canonical Name:** `wayfinder-map`
- **Governing Decisions:** D-140, D-489
- **Definition:** An index of codebase landmarks, domain models, and navigational waypoints generated by the wayfinder exploration skill.
- **On-Disk Path:** `docs/architecture/wayfinder-map.md`
- **Producer:** `wayfinder-exploration-skill`; `explorer`
- **Consumer:** `implementation-agent`, `planner`, `architect`
- **Schema / Template:** Hierarchical markdown document listing landmark paths, core contracts, and architectural seams.

---

## 2. Planning & Task Breakdown Artifacts

### 2.1 `task-list`
- **Canonical Name:** `task-list`
- **Governing Decisions:** D-133, D-134
- **Definition:** The master execution checklist of ordered work units required to implement a specification, tracking status, prerequisites, and assigned slices.
- **On-Disk Path:** `tasks/todo.md` or `docs/tasks/todo-<feature-slug>.md`
- **Producer:** `plan-phase`; `planner`, `to-tickets`
- **Consumer:** `build-phase`; `implementation-agent`, `build-cop`
- **Schema / Template:**
```markdown
# Task List: <Feature Name>

- **Specification:** [`spec.md`](../specs/<feature-slug>.md)
- **Status:** In Progress
- **Total Tasks:** N | **Completed:** M

## Tasks

- [ ] **TASK-001:** <Task Title>
  - **Phase:** <phase name>
  - **Prerequisites:** none
  - **Seams:** `<path/to/file.ts>`
  - **Verification:** `bun test tests/unit/task-001.test.ts`
  - **Ticket:** [`TASK-001.md`](tickets/TASK-001.md)

- [ ] **TASK-002:** <Task Title>
  - **Phase:** <phase name>
  - **Prerequisites:** TASK-001
  - **Seams:** `<path/to/file2.ts>`
  - **Verification:** `bun test tests/unit/task-002.test.ts`
  - **Ticket:** [`TASK-002.md`](tickets/TASK-002.md)
```

---

### 2.2 `task-card`
- **Canonical Name:** `task-card`
- **Governing Decisions:** D-134, D-135
- **Definition:** A self-contained, atomic work unit document detailing the implementation scope, code seams, acceptance criteria, and verification commands for a single task.
- **On-Disk Path:** `docs/tasks/tickets/TASK-<id>.md`
- **Producer:** `plan-phase`; `task-decomposer`, `to-tickets`
- **Consumer:** `build-phase`; `implementation-agent`
- **Schema / Template:**
```markdown
# TASK-<ID>: <Task Title>

- **Parent Plan:** [`plan.md`](../plan-<slug>.md)
- **Status:** Pending | In Progress | Done | Blocked
- **Dependencies:** <TASK-ID or none>
- **Size:** S | M | L

## 1. Description & Context
<Concise explanation of the code slice to implement>

## 2. Target Files & Seams
- Modify: `src/path/to/target.ts` (lines X–Y)
- Create: `tests/unit/target.test.ts`

## 3. Acceptance Criteria
- [ ] Criterion 1: <Specific behavior>
- [ ] Criterion 2: <Specific behavior>

## 4. Verification Command
```bash
bun test tests/unit/target.test.ts
```
```

---

### 2.3 `subtask-card`
- **Canonical Name:** `subtask-card`
- **Governing Decisions:** D-136
- **Definition:** A nested sub-unit card breaking down a complex task card into micro-steps during active execution.
- **On-Disk Path:** Embedded in `docs/tasks/tickets/TASK-<id>.md` § Subtasks
- **Producer:** `task-execution`; `implementation-agent`
- **Consumer:** `implementation-agent`
- **Schema / Template:** Markdown checklist with file-specific micro-steps.

---

### 2.4 `tracer-bullet-ticket`
- **Canonical Name:** `tracer-bullet-ticket`
- **Governing Decisions:** D-134, D-363
- **Definition:** An end-to-end task ticket that cuts through all architectural layers with minimal logic to prove architectural feasibility and test seams.
- **On-Disk Path:** `docs/tasks/tickets/TASK-001-tracer-bullet.md`
- **Producer:** `plan-phase`; `architect`, `planner`
- **Consumer:** `build-phase`; `implementation-agent`
- **Schema / Template:** Standard `task-card` annotated with `[Tracer Bullet: Cross-Cutting Prototype]`.

---

### 2.5 `task-backlog`
- **Canonical Name:** `task-backlog`
- **Governing Decisions:** D-137
- **Definition:** The repository of unworked, candidate, or future task cards awaiting assignment to an active milestone.
- **On-Disk Path:** `docs/tasks/backlog.md`
- **Producer:** `plan-phase`, `review-phase`; `planner`
- **Consumer:** `planner`, human supervisor
- **Schema / Template:** Markdown list of unassigned task cards grouped by priority and subsystem.

---

### 2.6 `implementation-plan-template`
- **Canonical Name:** `implementation-plan-template`
- **Governing Decisions:** D-135
- **Definition:** The standardized structural schema defining the required sections of an implementation plan document.
- **On-Disk Path:** `docs/plan/templates/implementation-plan.md`
- **Producer:** Maintained in project templates
- **Consumer:** `plan-phase`; `planner`
- **Schema / Template:** Markdown template specifying Metadata, Dependency Graph, Task Schedule, Risk Register, and Rollout Milestones.

---

### 2.7 `acceptance-criteria`
- **Canonical Name:** `acceptance-criteria`
- **Governing Decisions:** D-128
- **Definition:** A concrete, falsifiable statement defining an observable condition that must be verified true for a work unit to be accepted.
- **On-Disk Path:** Embedded within `docs/specs/*.md` and `docs/tasks/tickets/*.md`
- **Producer:** `spec` and `plan-phase`
- **Consumer:** `build-phase`, `test`, `review-phase`
- **Schema / Template:** Bulleted list formatted as `- [ ] <Observable requirement verifiable by an automated test or inspection>`.

---

### 2.8 `actionable-task-unit`
- **Canonical Name:** `actionable-task-unit`
- **Governing Decisions:** D-134
- **Definition:** A bounded unit of work containing complete context, file paths, seams, and verification commands enabling headless execution without external ambiguity.
- **On-Disk Path:** Manifested as `task-card` (`docs/tasks/tickets/TASK-*.md`)
- **Producer:** `task-decomposition`
- **Consumer:** `task-execution`
- **Schema / Template:** Conforms to `task-card` schema.

---

### 2.9 `risk-register`
- **Canonical Name:** `risk-register`
- **Governing Decisions:** D-130
- **Definition:** A structured inventory of architectural, security, operational, or dependency risks identified during planning, along with mitigations.
- **On-Disk Path:** `docs/tasks/risk-register-<slug>.md` or embedded in `plan.md`
- **Producer:** `plan-phase`; `planner`, `architect`
- **Consumer:** `review-phase`, `ship-phase`
- **Schema / Template:**
```markdown
| Risk ID | Description | Severity | Probability | Mitigation Strategy | Owner |
|---|---|---|---|---|---|
| R-1 | <Risk description> | High / Med / Low | High / Med / Low | <Mitigation plan> | <Role> |
```

---

## 3. Implementation & Source Artifacts

### 3.1 `working-increment`
- **Canonical Name:** `working-increment`
- **Governing Decisions:** D-143
- **Definition:** The functional code modifications, unit tests, and configuration edits constructed in the repository working tree during task execution.
- **On-Disk Path:** Active files in repository working tree (`src/`, `tests/`, etc.)
- **Producer:** `build-phase`; `implementation-agent`
- **Consumer:** `test`, `review-phase`, `ship-phase`
- **Schema / Template:** Verified source code and tests adhering to project coding standards.

---

### 3.2 `working-tree`
- **Canonical Name:** `working-tree`
- **Governing Decisions:** D-144
- **Definition:** The git filesystem state representing active tracked and untracked files in the current repository checkout.
- **On-Disk Path:** Working directory root (`/Users/peterkloss/Dev/ACMElabs/brain-v2`)
- **Producer:** Git version control system
- **Consumer:** All agent operations and build tools
- **Schema / Template:** Git working directory status inspected via `git status --porcelain`.

---

### 3.3 `commit-message`
- **Canonical Name:** `commit-message`
- **Governing Decisions:** D-142
- **Definition:** The structured change description adhering to conventional commits applied to atomic git commits.
- **On-Disk Path:** Git commit metadata
- **Producer:** `build-phase`; `implementation-agent` via `atomic-commit-workflow`
- **Consumer:** Git log, `ship-phase`, `changeset`
- **Schema / Template:**
```
<type>(<scope>): <short imperative description>

<Detailed motivation and explanation of changes>

- <Key seam modified>
- <Verification proof command>

Closes: #<TASK-ID>
```

---

### 3.4 `pull-request`
- **Canonical Name:** `pull-request`
- **Governing Decisions:** D-141
- **Definition:** The formal version control branch proposed for integration, containing committed changes, test proofs, and review summaries.
- **On-Disk Path:** Remote repository pull request metadata
- **Producer:** `ship-phase` or developer handoff; `project-shipper`
- **Consumer:** Reviewers, CI/CD runners, repository maintainers
- **Schema / Template:** Markdown PR template detailing summary, testing proof, risk assessment, and checklist.

---

### 3.5 `plugin-manifest`
- **Canonical Name:** `plugin-manifest`
- **Governing Decisions:** D-145, D-009
- **Definition:** The JSON manifest defining the agent plugin metadata, capabilities, entrypoints, and configuration.
- **On-Disk Path:** `.claude-plugin/plugin.json` (canonical) and `.agents/mcp_config.json` (Antigravity mirror)
- **Producer:** Plugin authoring; `architect`
- **Consumer:** Agent harnesses (Claude Code, Antigravity)
- **Schema / Template:** Valid JSON defining plugin name, version, description, commands, skills, and hooks.

---

## 4. Verification & Testing Artifacts

### 4.1 `test-strategy`
- **Canonical Name:** `test-strategy`
- **Governing Decisions:** D-147
- **Definition:** The document detailing testing levels, test seam placements, automated fixtures, and coverage goals for a feature.
- **On-Disk Path:** `docs/testing/strategy-<feature-slug>.md`
- **Producer:** `spec` and `plan-phase`; `test-engineer`, `architect`
- **Consumer:** `build-phase`, `test`; `implementation-agent`, `test-engineer`
- **Schema / Template:** Markdown document outlining Unit Seams, Integration Fixtures, E2E Scenarios, Performance Benchmarks, and Coverage Gates.

---

### 4.2 `test-results`
- **Canonical Name:** `test-results`
- **Governing Decisions:** D-146
- **Definition:** The structured execution output and exit status captured from automated test suite runs.
- **On-Disk Path:** `docs/testing/results-<feature-slug>.md`
- **Producer:** `test`; `test-engineer`
- **Consumer:** `review-phase`, `ship-phase`, quality gates
- **Schema / Template:**
```markdown
# Test Results: <Feature Slug>

- **Date:** YYYY-MM-DD HH:MM:SS
- **Status:** PASS | FAIL
- **Total Tests:** N | **Passed:** P | **Failed:** F | **Skipped:** S

## Suite Breakdown
- `tests/unit/*.test.ts`: PASS (100%)
- `tests/integration/*.test.ts`: PASS (100%)

## Output Log
```
<Raw command output and timing metrics>
```
```

---

### 4.3 `test-coverage-report`
- **Canonical Name:** `test-coverage-report`
- **Governing Decisions:** D-147
- **Definition:** The automated analysis reporting line, branch, and function coverage percentages achieved by test suites across modified files.
- **On-Disk Path:** `docs/testing/coverage-<feature-slug>.md`
- **Producer:** `test`; `test-engineer`
- **Consumer:** `review-phase`, `quality-gate-pipeline`
- **Schema / Template:** Markdown table summarizing line and branch coverage percentages per modified module.

---

### 4.4 `minimised-reproduction-case`
- **Canonical Name:** `minimised-reproduction-case`
- **Governing Decisions:** D-122
- **Definition:** A reproduction script or test case reduced to strictly load-bearing inputs that deterministically produces a defect without extraneous code.
- **On-Disk Path:** `tests/repro/repro-<bug-id>.test.ts`
- **Producer:** `baseline-establishment`; `systematic-bug-hunter`
- **Consumer:** `hypothesis-probing`, `defect-remediation`; `implementation-agent`
- **Schema / Template:** Minimal executable Bun test script demonstrating the failure.

---

## 5. Review & Audit Artifacts

### 5.1 `review-report`
- **Canonical Name:** `review-report`
- **Governing Decisions:** D-149, D-264
- **Definition:** The consolidated audit report produced by the six-role review panel evaluating code diffs, security posture, simplicity, and architecture compliance.
- **On-Disk Path:** `docs/reviews/review-<feature-slug>.md`
- **Producer:** `review-phase`; `code-reviewer`, `six-role-panel`
- **Consumer:** `ship-phase`, `build-phase` (if changes requested)
- **Schema / Template:**
```markdown
# Review Report: <Feature Slug>

- **Verdict:** APPROVED | REVISIONS-REQUESTED | BLOCKED
- **Review Round:** 1 of 3 (per D-264)
- **Reviewers:** Code Reviewer, Security Auditor, Code Simplifier, Architect

## Findings Matrix
| ID | Severity | Category | Finding Description | Resolution / Rationalization |
|---|---|---|---|---|
| F-1 | High / Med / Low | Security / Style / Arch | <Description> | <Addressed in commit X / Justified> |

## Persona Evaluations
- **Security Auditor:** <Assessment>
- **Code Simplifier:** <Assessment>
- **Silent Failure Hunter:** <Assessment>
- **Architect:** <Assessment>
```

---

### 5.2 `security-assessment`
- **Canonical Name:** `security-assessment`
- **Governing Decisions:** D-150
- **Definition:** A specialized audit report evaluating threat vectors, input sanitization, authentication boundaries, and data exposure risks.
- **On-Disk Path:** `docs/security/assessment-<feature-slug>.md`
- **Producer:** `review-phase`; `security-auditor`
- **Consumer:** `review-phase`, `architect`, `project-shipper`
- **Schema / Template:** Markdown document detailing Attack Surface Analysis, Secrets Audit, Dependency Vulnerability Scan, and Threat Mitigations.

---

### 5.3 `assumption-challenge`
- **Canonical Name:** `assumption-challenge`
- **Governing Decisions:** D-151
- **Definition:** An adversarial critique documenting surviving doubts, edge case vulnerabilities, and unverified assumptions before final merge.
- **On-Disk Path:** `docs/reviews/assumptions-<feature-slug>.md`
- **Producer:** `review-phase`; `hostile-expert`, `contrarian-analyst`
- **Consumer:** `review-phase`, `architect`
- **Schema / Template:** Markdown list of challenged assumptions, empirical tests performed, and risk rationalizations.

---

### 5.4 `template-assessment`
- **Canonical Name:** `template-assessment`
- **Governing Decisions:** D-152
- **Definition:** A quality review evaluating project document templates for adherence to structural standards, frontmatter schemas, and linting rules.
- **On-Disk Path:** `docs/reviews/template-assessment-<name>.md`
- **Producer:** `review-phase`; `standards-subagent`
- **Consumer:** `skillbook-curator`, `technical-writer`
- **Schema / Template:** Checklist of template fields, formatting compliance, and lint results.

---

## 6. Release, Operations & Observability Artifacts

### 6.1 `changeset`
- **Canonical Name:** `changeset`
- **Governing Decisions:** D-154, D-617
- **Definition:** A structured markdown document recording semantic version bump intent and package release descriptions.
- **On-Disk Path:** `.changeset/<unique-id>.md`
- **Producer:** `ship-phase`; `changeset-versioning-technique`
- **Consumer:** Release tooling (`@changesets/cli`), `ship-phase`
- **Schema / Template:**
```markdown
---
"@acmelabs/brain": minor
---

<User-facing release description of features and fixes>
```

---

### 6.2 `release-notes`
- **Canonical Name:** `release-notes`
- **Governing Decisions:** D-154, D-617
- **Definition:** The compiled customer-facing summary of added capabilities, bug fixes, breaking changes, and migration instructions for a release.
- **On-Disk Path:** `docs/releases/release-<version>.md` and `CHANGELOG.md`
- **Producer:** `ship-phase`; `project-shipper`
- **Consumer:** End users, developers, deployment pipeline
- **Schema / Template:** Standard changelog layout with Added, Changed, Fixed, and Breaking Changes sections.

---

### 6.3 `runbook` / `launch-runbook`
- **Canonical Name:** `runbook`
- **Governing Decisions:** D-156, D-157
- **Definition:** An operational guide detailing deployment procedures, infrastructure dependencies, operational verification checks, and troubleshooting steps.
- **On-Disk Path:** `docs/runbooks/runbook-<version>.md`
- **Producer:** `ship-phase`; `devops-specialist`, `project-shipper`
- **Consumer:** Site reliability engineers, on-call developers
- **Schema / Template:** Markdown document with Pre-Deployment Checklist, Execution Commands, Telemetry Validation, and Triage Steps.

---

### 6.4 `rollback-plan`
- **Canonical Name:** `rollback-plan`
- **Governing Decisions:** D-155
- **Definition:** The documented emergency reversal procedure specifying exact commands, database migration rollbacks, and verification checks required to restore previous known-good state.
- **On-Disk Path:** Embedded in `docs/runbooks/runbook-<version>.md` § Rollback
- **Producer:** `ship-phase`; `rollback-owner`, `devops-specialist`
- **Consumer:** On-call engineers, automated deployment rollback triggers
- **Schema / Template:** Step-by-step rollback execution script with health check criteria.

---

### 6.5 `service-dashboard-spec`
- **Canonical Name:** `service-dashboard-spec`
- **Governing Decisions:** D-158
- **Definition:** The specification of monitoring dashboards, metrics panels, query expressions, and threshold alerts for production observability.
- **On-Disk Path:** `docs/monitoring/dashboard-<service>.json` or `.md`
- **Producer:** `ship-phase`; `devops-specialist`
- **Consumer:** Monitoring platforms, operational dashboards
- **Schema / Template:** JSON or markdown specification of telemetry queries, visualization panels, and alert boundaries.

---

### 6.6 `slo-configuration-template`
- **Canonical Name:** `slo-configuration-template`
- **Governing Decisions:** D-158
- **Definition:** The configuration defining Service Level Objectives (SLOs), Service Level Indicators (SLIs), and error budget thresholds for a service.
- **On-Disk Path:** `docs/monitoring/slo-<service>.yaml`
- **Producer:** `ship-phase`; `devops-specialist`
- **Consumer:** Observability infrastructure
- **Schema / Template:** YAML configuration defining SLI metrics, target SLO percentage (e.g. 99.9%), and alert rules.

---

## 7. Documentation, Vocabulary & Knowledge Artifacts

### 7.1 `readme-documentation`
- **Canonical Name:** `readme-documentation`
- **Governing Decisions:** D-159
- **Definition:** The primary orientation and onboarding documentation for a repository, module, or skill.
- **On-Disk Path:** `README.md` in repository root or package directories
- **Producer:** `technical-writer`, `architect`
- **Consumer:** Developers, users, autonomous agents
- **Schema / Template:** Markdown file with Project Overview, Prerequisites, Quickstart, Usage Guide, and Contributing Guidelines.

---

### 7.2 `domain-glossary`
- **Canonical Name:** `domain-glossary`
- **Governing Decisions:** D-160, D-161
- **Definition:** The single source of vocabulary defining canonical terms, definitions, and boundaries across the project.
- **On-Disk Path:** `docs/plan/GLOSSARY.md`
- **Producer:** Alignment decisions (`DECISIONS.md`); `architect`
- **Consumer:** All agents, human developers, linting tools
- **Schema / Template:** Alphabetical list of terms conforming to the glossary entry schema in `docs/plan/GLOSSARY.md`.

---

### 7.3 `shared-vocabulary`
- **Canonical Name:** `shared-vocabulary`
- **Governing Decisions:** D-162
- **Definition:** The aligned terminology shared between human engineers and autonomous agents to ensure unambiguous communication.
- **On-Disk Path:** Maintained in `docs/plan/GLOSSARY.md`
- **Producer:** Alignment analysis; `architect`
- **Consumer:** All lifecycle participants
- **Schema / Template:** Normalized vocabulary entries.

---

### 7.4 `learning-log`
- **Canonical Name:** `learning-log`
- **Governing Decisions:** D-163
- **Definition:** A persistent record of operational lessons, agent corrections, and pattern improvements captured across sessions.
- **On-Disk Path:** `docs/retrospectives/learning-log.md`
- **Producer:** `retrospective-agent`, human supervisor
- **Consumer:** All agents during reconnaissance and specification
- **Schema / Template:** Chronological log of issue occurrences, root causes, and behavioral rules.

---

### 7.5 `context-map`
- **Canonical Name:** `context-map`
- **Governing Decisions:** D-140
- **Definition:** The architectural map defining bounded contexts, integration interfaces, and data flow across subsystems.
- **On-Disk Path:** `docs/architecture/context-map.md`
- **Producer:** `reconnaissance`; `architect`
- **Consumer:** `spec`, `plan-phase`; all agents
- **Schema / Template:** Mermaid diagram accompanied by domain relationship definitions.

---

## 8. Configuration & Governance Templates

### 8.1 `agent-rules`
- **Canonical Name:** `agent-rules`
- **Governing Decisions:** D-164, D-165
- **Definition:** The operational instructions and constraints loaded by autonomous agents at session initialization.
- **On-Disk Path:** `AGENTS.md` (repository root) and `CLAUDE.md`
- **Producer:** Project governance; `architect`, Peter
- **Consumer:** All agent runtimes (Claude Code, Antigravity)
- **Schema / Template:** Markdown file defining Working Directory Rules, Prohibited Actions, Toolchain Policies, and Operating Protocols.

---

### 8.2 `user-rules`
- **Canonical Name:** `user-rules`
- **Governing Decisions:** D-165
- **Definition:** User-specific global configuration and personal preference instructions applied across agent sessions.
- **On-Disk Path:** User configuration directory or `docs/plan/PREFERENCES.md`
- **Producer:** Human user
- **Consumer:** Agent session initialization
- **Schema / Template:** Markdown preference declarations.

---

### 8.3 `windsurf-rules`
- **Canonical Name:** `windsurf-rules`
- **Governing Decisions:** D-166
- **Definition:** IDE-specific rule configurations for Cascade/Windsurf development environments.
- **On-Disk Path:** `.windsurfrules`
- **Producer:** Maintained for IDE compatibility
- **Consumer:** Windsurf IDE agent
- **Schema / Template:** Plaintext/markdown rules.

---

### 8.4 `code-style-standard`
- **Canonical Name:** `code-style-standard`
- **Governing Decisions:** D-167
- **Definition:** The formatting, linting, and naming conventions enforced across repository source code.
- **On-Disk Path:** Configuration files (`tsconfig.json`, `.prettierrc`, `biome.json`)
- **Producer:** Project governance; `architect`
- **Consumer:** Linters, `build-cop`, `implementation-agent`
- **Schema / Template:** Formatter and linter configurations.

---

### 8.5 `session-protocol-template`
- **Canonical Name:** `session-protocol-template`
- **Governing Decisions:** D-168
- **Definition:** The standardized template defining start, execution, and handoff procedures for multi-session agent work.
- **On-Disk Path:** `docs/plan/templates/session-handoff.md`
- **Producer:** Project governance
- **Consumer:** All sessions at start and end
- **Schema / Template:** Frontmatter metadata and markdown sections for Start State, Completed Units, Blocked Items, and Next Actions.

---

### 8.6 `shared-template-library`
- **Canonical Name:** `shared-template-library`
- **Governing Decisions:** D-169
- **Definition:** The repository directory holding all canonical document and artifact templates used across the lifecycle.
- **On-Disk Path:** `docs/plan/templates/`
- **Producer:** Project setup
- **Consumer:** All agent authoring tasks
- **Schema / Template:** Directory of markdown template files.

---

### 8.7 `shell-template-scaffold`
- **Canonical Name:** `shell-template-scaffold`
- **Governing Decisions:** D-170
- **Definition:** Reusable Bash script scaffold containing standard error handling, argument parsing, and exit code trapping.
- **On-Disk Path:** `scripts/templates/script-template.sh`
- **Producer:** Platform tooling
- **Consumer:** Script authors
- **Schema / Template:** POSIX shell script with `set -euo pipefail` and help handlers.

---

### 8.8 `skill-specification-template`
- **Canonical Name:** `skill-specification-template`
- **Governing Decisions:** D-171
- **Definition:** The markdown template specifying skill metadata, trigger phrases, input parameters, and execution instructions.
- **On-Disk Path:** `skills/<skill-name>/SKILL.md` (template in `docs/plan/templates/skill.md`)
- **Producer:** Skill authoring; `skillbook-curator`
- **Consumer:** Agent skill loaders
- **Schema / Template:** Frontmatter (`name`, `description`) followed by Intent, Workflow, Prompts, and Reference links.

---

### 8.9 `state-management-script-template`
- **Canonical Name:** `state-management-script-template`
- **Governing Decisions:** D-172
- **Definition:** Script template for managing tabular project state, progress tracking, and validation counters.
- **On-Disk Path:** `scripts/synthesis/units.ts`
- **Producer:** Synthesis tooling
- **Consumer:** Session automation
- **Schema / Template:** TypeScript script interacting with markdown tables.

---

### 8.10 `validation-script-template`
- **Canonical Name:** `validation-script-template`
- **Governing Decisions:** D-173
- **Definition:** Script template for automated gate checks and data integrity assertions.
- **On-Disk Path:** `scripts/synthesis/quote-check.ts`
- **Producer:** Synthesis tooling
- **Consumer:** Quality gate pipelines
- **Schema / Template:** TypeScript script returning exit code 0 on pass, non-zero on failure.

---

### 8.11 `visual-card-template`
- **Canonical Name:** `visual-card-template`
- **Governing Decisions:** D-174
- **Definition:** UI component template for displaying information cards in web dashboards and documentation viewers.
- **On-Disk Path:** `docs/templates/visual-card.md`
- **Producer:** Frontend design
- **Consumer:** Documentation viewers
- **Schema / Template:** Component markup with title, body, status badge, and action items.

---

### 8.12 `yaml-frontmatter-schema`
- **Canonical Name:** `yaml-frontmatter-schema`
- **Governing Decisions:** D-175
- **Definition:** The schema specifying mandatory and optional YAML metadata header fields across project documents.
- **On-Disk Path:** Defined in `METHOD.md` and document templates
- **Producer:** Project governance
- **Consumer:** Parsing scripts and linters
- **Schema / Template:** Strict YAML block enclosed within `---` delimiters at line 1.
