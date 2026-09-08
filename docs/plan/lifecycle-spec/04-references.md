# 04 — Lifecycle References Specification

This document provides the authoritative specification for all twenty-one reference documents to be written or adapted for the `brain` lifecycle under `references/`. Each entry details the reference's canonical identity, on-disk target path, purpose, key rules and checklists, exact source citations (`path:line`), and governing alignment decisions.

Per Peter's stated inputs in `PREFERENCES.md` § References, these reference documents codify cross-cutting engineering standards, checklists, and anti-pattern definitions that govern agent execution across multiple lifecycle phases.

---

## 1. Core Engineering & Quality References

### 1.1 `definition-of-done`
- **Canonical Name:** `definition-of-done`
- **On-Disk Path:** `references/definition-of-done.md`
- **Governing Decision:** D-590 (and PREFERENCES.md § References)
- **Source Citations:** Addy `sources/addy/references/definition-of-done.md:1-60`; RJM `sources/rjm/.claude/skills/review/references/code-quality.md:15-45`
- **Purpose:** Establish the non-negotiable exit criteria and completion checklist required before any code slice, task, or feature milestone is considered complete.
- **Key Rules & Checklists:**
  - Code compiles, formats, and typechecks with zero errors or warnings.
  - Automated unit and regression tests written, passing, and covering critical seams.
  - No temporary diagnostic code, debug console logs, or probe scaffolding remaining.
  - Documentation and architectural records updated to reflect all functional changes.
  - Performance, accessibility, and security standards verified against baseline.
  - Atomic git commits created with conventional commit messages referencing task IDs.

---

### 1.2 `testing-patterns-reference`
- **Canonical Name:** `testing-patterns-reference`
- **On-Disk Path:** `references/testing-patterns.md`
- **Governing Decision:** D-595
- **Source Citations:** Addy `sources/addy/references/testing-patterns.md:1-120`; RJM `sources/rjm/.claude/skills/review/references/qa.md:1-55`
- **Purpose:** Define standard testing strategies, seam placement heuristics, test doubles guidelines, and fixture management rules across unit, integration, and E2E tiers.
- **Key Rules & Checklists:**
  - Place test seams at domain boundaries rather than mocking internal implementation details.
  - Characterization testing must capture existing behavior before commencing refactoring.
  - Pure Bun test runner (`bun test`) utilized for execution with deterministic assertions.
  - Flaky tests, arbitrary sleep delays, and non-deterministic timing are strictly prohibited.
  - Every reported bug must establish a failing automated test before implementing fixes.

---

### 1.3 `performance-checklist-reference`
- **Canonical Name:** `performance-checklist-reference`
- **On-Disk Path:** `references/performance-checklist.md`
- **Governing Decision:** D-597
- **Source Citations:** Addy `sources/addy/references/performance-checklist.md:1-95`; Addy `sources/addy/skills/performance-optimization/SKILL.md:15-60`
- **Purpose:** Provide an exhaustive verification checklist for runtime latency, bundle size, memory consumption, rendering performance, and resource efficiency.
- **Key Rules & Checklists:**
  - Measure before optimizing; record steady-state operating baselines before changes.
  - Evaluate memory allocation patterns and eliminate potential circular reference leaks.
  - Enforce lazy loading, progressive disclosure, and minimal dependency footprint.
  - Verify asynchronous task concurrency bounds and event loop responsiveness.

---

### 1.4 `code-review-checklist-reference`
- **Canonical Name:** `code-review-checklist-reference`
- **On-Disk Path:** `references/code-review-checklist.md`
- **Governing Decision:** D-599
- **Source Citations:** Addy `sources/addy/skills/code-review-and-quality/SKILL.md:20-80`; Matt `sources/matt/docs/engineering/code-review.md:1-45`; RJM `sources/rjm/.claude/skills/review/references/spec-compliance.md:1-50`
- **Purpose:** Provide structured evaluation criteria for adversarial code review, guiding inspectors to identify logic bugs, architectural drift, and maintainability issues.
- **Key Rules & Checklists:**
  - Verify strict adherence to specification contracts and acceptance criteria.
  - Scrutinize error handling paths, boundary conditions, and null/undefined transitions.
  - Reject unnecessary complexity, over-abstraction, and speculative generalization (YAGNI).
  - Enforce uniform code formatting, naming consistency, and explicit type declarations.

---

### 1.5 `code-smell-baseline`
- **Canonical Name:** `code-smell-baseline`
- **On-Disk Path:** `references/code-smell-baseline.md`
- **Governing Decision:** D-593
- **Source Citations:** Matt `sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md:15-55`; Addy `sources/addy/skills/code-simplification/SKILL.md:10-45`
- **Purpose:** Catalog common anti-patterns, maintainability hazards, and architectural code smells that must be flagged and refactored during review and cleanup.
- **Key Rules & Checklists:**
  - God objects, oversized classes, and multi-thousand-line modules requiring decomposition.
  - Shotgun surgery: changes that force simultaneous modifications across dozens of files.
  - Deep inheritance hierarchies and convoluted abstraction layers.
  - Dead code, unused variables, and abandoned feature branches.

---

### 1.6 `static-analysis-standards`
- **Canonical Name:** `static-analysis-standards`
- **On-Disk Path:** `references/static-analysis-standards.md`
- **Governing Decision:** D-594
- **Source Citations:** Addy `sources/addy/skills/ci-cd-and-automation/SKILL.md:15-45`; Matt `sources/matt/skills/misc/setup-pre-commit/SKILL.md:10-40`
- **Purpose:** Establish baseline static analysis rules, linter configurations, and typecheck standards enforced by automated pre-commit gates.
- **Key Rules & Checklists:**
  - Strict TypeScript configuration (`noImplicitAny: true`, `strictNullChecks: true`).
  - ShellCheck validation required for all shell scripts (`scripts/**/*.sh`).
  - Linters and formatters must exit clean (zero errors, zero warnings) before commit staging.

---

## 2. Architecture & Design References

### 2.1 `architectural-decision-records-reference`
- **Canonical Name:** `architectural-decision-records-reference`
- **On-Disk Path:** `references/architectural-decision-records.md`
- **Governing Decision:** D-589
- **Source Citations:** Addy `sources/addy/skills/documentation-and-adrs/SKILL.md:10-50`; RJM `sources/rjm/.claude/skills/adr-review/SKILL.md:1-60`
- **Purpose:** Guide the creation, indexing, superseding, and deprecation of Architectural Decision Records (ADRs) to preserve institutional memory.
- **Key Rules & Checklists:**
  - Every architectural choice impacting system boundaries or interfaces requires an ADR.
  - Mandatory sections: Title, Status, Context, Decision, Consequences, and Rejected Alternatives.
  - ADRs are immutable once adopted; revisions must be enacted via superseding ADRs.

---

### 2.2 `domain-driven-design`
- **Canonical Name:** `domain-driven-design`
- **On-Disk Path:** `references/domain-driven-design.md`
- **Governing Decision:** D-588
- **Source Citations:** Matt `sources/matt/docs/engineering/domain-modeling.md:1-55`; Addy `sources/addy/skills/api-and-interface-design/SKILL.md:10-45`
- **Purpose:** Outline domain modeling principles, ubiquitous language guidelines, and bounded context management rules for modeling software boundaries.
- **Key Rules & Checklists:**
  - Ubiquitous language must be strictly shared across code, specifications, and glossary.
  - Bounded contexts define unambiguous data ownership; cross-context communication requires adapters.
  - Entities, Value Objects, Aggregates, and Domain Events must be clearly delineated.

---

### 2.3 `architectural-anti-patterns-reference`
- **Canonical Name:** `architectural-anti-patterns-reference`
- **On-Disk Path:** `references/architectural-anti-patterns.md`
- **Governing Decision:** D-592
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/architect.md:1-65`; Addy `sources/addy/references/orchestration-patterns.md:180-220`
- **Purpose:** Document major architectural anti-patterns—such as circular dependencies, leaky abstractions, and distributed monoliths—to prevent structural decay.
- **Key Rules & Checklists:**
  - Prohibit circular dependency cycles between packages, modules, or services.
  - Eliminate pass-through abstractions that forward calls without adding semantic value.
  - Prevent database-level coupling between nominally autonomous bounded contexts.

---

### 2.4 `api-interface-standards-reference`
- **Canonical Name:** `api-interface-standards-reference`
- **On-Disk Path:** `references/api-interface-standards.md`
- **Governing Decision:** D-603
- **Source Citations:** Addy `sources/addy/skills/api-and-interface-design/SKILL.md:15-60`; RJM `sources/rjm/.claude/skills/review/references/spec-compliance.md:15-45`
- **Purpose:** Define standards for public and internal API surface design, type safety, versioning, error payloads, and idempotent request handling.
- **Key Rules & Checklists:**
  - APIs must be strictly typed using schema validators or TypeScript definitions.
  - Error responses must provide structured error codes, human-readable messages, and remediation tips.
  - Breaking changes require semantic version increments and parallel expand-contract transitions.

---

### 2.5 `design-system-standards`
- **Canonical Name:** `design-system-standards`
- **On-Disk Path:** `references/design-system-standards.md`
- **Governing Decision:** D-598
- **Source Citations:** Addy `sources/addy/skills/frontend-ui-engineering/SKILL.md:10-50`
- **Purpose:** Standardize UI component composition, design tokens, responsive layout rules, and accessibility compliance (WCAG 2.1 AA).
- **Key Rules & Checklists:**
  - Components must consume design tokens for colors, typography, spacing, and elevation.
  - Keyboard navigation, ARIA attributes, and color contrast ratios must satisfy accessibility standards.
  - Visual components must remain decoupled from business domain logic.

---

## 3. Orchestration & Execution References

### 3.1 `orchestration-patterns-reference`
- **Canonical Name:** `orchestration-patterns-reference`
- **On-Disk Path:** `references/orchestration-patterns.md`
- **Governing Decision:** D-257 (and PREFERENCES.md § References)
- **Source Citations:** Addy `sources/addy/references/orchestration-patterns.md:1-175`; RJM `sources/rjm/.claude/skills/analyze/references/agent-architecture-patterns.md:1-60`
- **Purpose:** Define proven multi-agent coordination patterns, subagent fan-out/merge flows, worktree isolation methods, and handoff contracts.
- **Key Rules & Checklists:**
  - Multi-agent workflows must communicate through durable on-disk artifacts, not conversational memory.
  - Parallel subagent execution requires isolated git worktrees to prevent file modification collisions.
  - Sizing rules bound what a single subagent worker can read and produce in one execution turn.

---

### 3.2 `orchestration-antipatterns-reference`
- **Canonical Name:** `orchestration-antipatterns-reference`
- **On-Disk Path:** `references/orchestration-antipatterns.md`
- **Governing Decision:** D-260, D-625
- **Source Citations:** Addy `sources/addy/references/orchestration-patterns.md:180-230`; RJM `sources/rjm/.claude/skills/adr-review/references/ADR-064-commands-to-skills-migration.md:105-120`
- **Purpose:** Document dangerous multi-agent coordination anti-patterns, including the meta-orchestrator anti-pattern and sequential paraphrasing cascades.
- **Key Rules & Checklists:**
  - Never wrap all tools in a massive meta-orchestrator agent that hides individual skill capabilities.
  - Avoid conversational cascades where agents paraphrase each other's outputs without inspecting raw files.
  - Prohibit boundless agent loops that lack concrete exit criteria or iteration caps.

---

### 3.3 `task-sizing-guidelines`
- **Canonical Name:** `task-sizing-guidelines`
- **On-Disk Path:** `references/task-sizing-guidelines.md`
- **Governing Decision:** D-591
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:20-55`; Addy `sources/addy/skills/planning-and-task-breakdown/SKILL.md:25-50`
- **Purpose:** Provide criteria for sizing decomposed tasks (S, M, L) to fit safely within agent context windows and single-session boundaries.
- **Key Rules & Checklists:**
  - Small (S): Modifies 1–2 files, <50 lines changed, single unit test; completed in <10 minutes.
  - Medium (M): Modifies 3–5 files, 50–200 lines, focused component slice; completed in one session.
  - Large (L): Modifies >5 files; must be split into multiple S/M tasks before claiming.
  - Any task whose implementation risks context exhaustion must be re-sliced into smaller units.

---

### 3.4 `task-fitness-guide`
- **Canonical Name:** `task-fitness-guide`
- **On-Disk Path:** `references/task-fitness-guide.md`
- **Governing Decision:** D-241
- **Source Citations:** Addy `sources/addy/skills/planning-and-task-breakdown/SKILL.md:35-65`; Matt `sources/matt/docs/engineering/to-tickets.md:40-60`
- **Purpose:** Guide the evaluation of task suitability, determining whether a problem is ready for autonomous agent execution or requires human clarification.
- **Key Rules & Checklists:**
  - High Fitness: Clear acceptance criteria, deterministic automated verification, isolated file seams.
  - Low Fitness: Ambiguous requirements, subjective visual judgements, missing test harnesses.
  - Low fitness tasks must be routed back to `spec` or flagged for human pairing.

---

### 3.5 `lifecycle-anti-recommendations`
- **Canonical Name:** `lifecycle-anti-recommendations`
- **On-Disk Path:** `references/lifecycle-anti-recommendations.md`
- **Governing Decision:** D-249
- **Source Citations:** Addy `sources/addy/skills/spec-driven-development/SKILL.md:25-45`; Matt `sources/matt/skills/work-in-phases/SKILL.md:15-35`
- **Purpose:** Document prohibited shortcuts and anti-patterns across the development lifecycle to enforce process discipline.
- **Key Rules & Checklists:**
  - Never write production code before an approved specification and task breakdown exist.
  - Never bypass automated testing or skip quality gates under pressure to expedite release.
  - Never rely on conversational state to bridge multi-session work.

---

## 4. Environment, Security & Harness References

### 4.1 `secrets-handling-reference`
- **Canonical Name:** `secrets-handling-reference`
- **On-Disk Path:** `references/secrets-handling.md`
- **Governing Decision:** D-596
- **Source Citations:** Addy `sources/addy/references/security-checklist.md:15-45`; RJM `sources/rjm/.claude/skills/review/references/security.md:20-50`
- **Purpose:** Establish strict protocols for secret detection, environment variable isolation, and credentials management across agent workflows.
- **Key Rules & Checklists:**
  - Zero plaintext secrets, API tokens, private keys, or credentials committed to source control.
  - Environment variables must be loaded via local uncommitted `.env` files or secret managers.
  - Automated pre-commit hooks scan staged diffs for high-entropy strings and credentials.

---

### 4.2 `context-window-management-reference`
- **Canonical Name:** `context-window-management-reference`
- **On-Disk Path:** `references/context-window-management.md`
- **Governing Decision:** D-602
- **Source Citations:** RJM `sources/rjm/.claude/skills/analyze/references/context-budget-management.md:1-60`; METHOD.md §8.2
- **Purpose:** Guide context budget management, token preservation, progressive disclosure, and tool output discipline in agent sessions.
- **Key Rules & Checklists:**
  - Never read massive files whole; inspect targeted line ranges using line slicing tools.
  - Checkpoint state to disk at every work unit boundary rather than accumulating conversation history.
  - Track context usage against governing model ceilings; trigger clean session close before pressure limits.

---

### 4.3 `harness-engineering-reference`
- **Canonical Name:** `harness-engineering-reference`
- **On-Disk Path:** `references/harness-engineering.md`
- **Governing Decision:** D-601, D-009
- **Source Citations:** RJM `sources/rjm/.claude/skills/agent-harness-reference/SKILL.md:1-80`
- **Purpose:** Define technical contracts, hook interfaces, and plugin manifests for Claude Code and Antigravity harness environments.
- **Key Rules & Checklists:**
  - Maintain dual-target parity between Claude Code plugins and Antigravity workspace configurations.
  - Hook implementations must fail closed, preventing risky tool executions if hooks encounter errors.
  - Follow official harness schemas for tool declarations, agent definitions, and slash commands.

---

### 4.4 `issue-tracker-governance-reference`
- **Canonical Name:** `issue-tracker-governance-reference`
- **On-Disk Path:** `references/issue-tracker-governance.md`
- **Governing Decision:** D-604
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:10-50`; Matt `sources/matt/skills/engineering/triage/SKILL.md:15-45`
- **Purpose:** Standardize issue tracker ticket conventions, status transitions, label taxonomies, and dependency tracking.
- **Key Rules & Checklists:**
  - Tickets must be categorized by domain, priority, and phase readiness (`ready-for-agent`, `needs-slicing`).
  - Native blocking dependencies must link predecessor and successor tasks unambiguously.
  - Closed tickets must link directly to the resolving commit hash or pull request.

---

### 4.5 `primary-source-reference`
- **Canonical Name:** `primary-source-reference`
- **On-Disk Path:** `references/primary-source-reference.md`
- **Governing Decision:** D-600
- **Source Citations:** Addy `sources/addy/skills/source-driven-development/SKILL.md:1-60`; METHOD.md R2
- **Purpose:** Mandate that all technical claims, framework assumptions, and API usages cite and verify physical primary source documentation.
- **Key Rules & Checklists:**
  - Code claims must cite verified line numbers from physical source repositories or official documentation.
  - Never trust training weights or hallucinations for rapidly evolving library APIs.
  - When analyzing codebases, open and read the actual source file rather than relying on summaries.
