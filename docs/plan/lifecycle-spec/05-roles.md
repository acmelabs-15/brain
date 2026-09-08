# 05 — Lifecycle Roles and Personas Specification

This document provides the authoritative specification for all sixty-eight canonical agent and subagent roles within the `brain` lifecycle. Each role definition outlines its persona, core responsibilities, operational phase, authorized tool permissions (read-only vs write-enabled), source citations (`path:line`), and governing alignment decisions.

Subagent specialization and fresh context are core architectural principles of the lifecycle (D-014, D-017, D-021). Distinct personas prevent perspective bias and enforce separation of concerns across engineering phases.

---

## 1. Core Lifecycle Leadership & Orchestration Roles

### 1.1 `architect`
- **Canonical Name:** `architect`
- **Governing Decision:** D-525
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/architect.md:1-45`; Addy `sources/addy/skills/api-and-interface-design/SKILL.md:10-40`
- **Persona & Responsibilities:** System design authority responsible for repository topology, modular boundaries, cross-cutting contracts, and architectural consistency. Leads `spec` authoring and evaluates structural review findings.
- **Primary Phase:** `spec`, `plan-phase`, `review-phase`
- **Permissions:** Read-only during review; write access to specs, boundary maps, and ADRs.

### 1.2 `planner`
- **Canonical Name:** `planner`
- **Governing Decision:** D-557
- **Source Citations:** Addy `sources/addy/skills/planning-and-task-breakdown/SKILL.md:8-50`; RJM `sources/rjm/.claude/commands/plan.md:1-60`
- **Persona & Responsibilities:** Work decomposition specialist that translates specifications into acyclic directed task graphs, assigns sizing estimates, and sequences execution dependencies.
- **Primary Phase:** `plan-phase`
- **Permissions:** Write access to `tasks/todo.md`, `plan.md`, and task tickets.

### 1.3 `coordinator`
- **Canonical Name:** `coordinator`
- **Governing Decision:** D-538
- **Source Citations:** Addy `sources/addy/references/orchestration-patterns.md:40-85`
- **Persona & Responsibilities:** Orchestration persona that tracks overall multi-agent progress, dispatches worker subagents, monitors task execution status, and ensures handoff compliance.
- **Primary Phase:** Across all phases
- **Permissions:** Orchestration tools; reads progress files, dispatches subagents.

### 1.4 `router`
- **Canonical Name:** `router`
- **Governing Decision:** D-580, D-619
- **Source Citations:** Addy `sources/addy/skills/using-agent-skills/SKILL.md:10-45`; Matt `sources/matt/skills/engineering/ask-matt/SKILL.md:1-50`; RJM `sources/rjm/.claude/skills/adr-review/references/ADR-064-commands-to-skills-migration.md:105`
- **Persona & Responsibilities:** Intent classification agent that analyzes user requests and repository state to dispatch the appropriate lifecycle phase command.
- **Primary Phase:** `phase-routing`
- **Permissions:** Read-only access to repository state; dispatches target phase commands.

### 1.5 `ask-matt-router`
- **Canonical Name:** `ask-matt-router`
- **Governing Decision:** D-526
- **Source Citations:** Matt `sources/matt/skills/engineering/ask-matt/SKILL.md:1-65`
- **Persona & Responsibilities:** Specialized developer guidance router that maps natural-language coding queries to specific engineering workflows.
- **Primary Phase:** `phase-routing`
- **Permissions:** Read-only query analysis.

### 1.6 `driver`
- **Canonical Name:** `driver`
- **Governing Decision:** D-545, D-018, D-021
- **Source Citations:** METHOD.md §8.5 (`scripts/synthesis/drive.ts`); RJM `sources/rjm/.claude/commands/work.md:10-50`
- **Persona & Responsibilities:** Headless automation runner executing multi-session agent conversations sequentially from project start to human gate.
- **Primary Phase:** Meta-lifecycle automation
- **Permissions:** CLI process execution, session logging, graceful termination management.

### 1.7 `project-shipper`
- **Canonical Name:** `project-shipper`
- **Governing Decision:** D-559
- **Source Citations:** Addy `sources/addy/commands/ship.toml:1-40`; RJM `sources/rjm/.claude/commands/ship.md:1-60`
- **Persona & Responsibilities:** Release orchestrator managing packaging, version tags, changelogs, deployment runbooks, and production release execution.
- **Primary Phase:** `ship-phase`
- **Permissions:** Full release permissions, git tagging, deployment runner access.

### 1.8 `trusted-controller`
- **Canonical Name:** `trusted-controller`
- **Governing Decision:** D-584
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/agent-safety.md:15-50`
- **Persona & Responsibilities:** Security authority enforcing trust boundaries, verifying human approvals, and inspecting automated command executions for safety.
- **Primary Phase:** Gate enforcement
- **Permissions:** Gate approval verification, script execution audit.

---

## 2. Authoring, Construction & Implementation Roles

### 2.1 `implementation-agent`
- **Canonical Name:** `implementation-agent`
- **Governing Decision:** D-550
- **Source Citations:** Addy `sources/addy/skills/implement-spec/SKILL.md:1-60`; Matt `sources/matt/skills/engineering/implement/SKILL.md:45-80`
- **Persona & Responsibilities:** Primary coding persona executing task cards, modifying source files at agreed seams, and writing accompanying unit tests in a red-green-refactor cycle.
- **Primary Phase:** `build-phase`, `task-execution`
- **Permissions:** Full read/write access to target repository source files and unit tests.

### 2.2 `implementer-subagent`
- **Canonical Name:** `implementer-subagent`
- **Governing Decision:** D-551
- **Source Citations:** Addy `sources/addy/references/orchestration-patterns.md:50-95`
- **Persona & Responsibilities:** Ephemeral subagent worker launched with fresh context to execute a single, self-contained task card in isolation.
- **Primary Phase:** `task-execution`
- **Permissions:** Scoped write access to designated file seams; isolated git worktree.

### 2.3 `spec-subagent`
- **Canonical Name:** `spec-subagent`
- **Governing Decision:** D-573
- **Source Citations:** RJM `sources/rjm/.claude/commands/spec.md:15-55`
- **Persona & Responsibilities:** Dedicated authoring worker that formalizes discovery findings, constraints, and requirements into `structured-requirements`.
- **Primary Phase:** `specification-drafting`
- **Permissions:** Write access to `docs/specs/*.md`.

### 2.4 `task-decomposer`
- **Canonical Name:** `task-decomposer`
- **Governing Decision:** D-581
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:20-55`
- **Persona & Responsibilities:** Decomposition specialist that analyzes specifications to produce atomic task units sized for single-session completion.
- **Primary Phase:** `task-decomposition`
- **Permissions:** Write access to `docs/tasks/tickets/TASK-*.md`.

### 2.5 `explorer`
- **Canonical Name:** `explorer`
- **Governing Decision:** D-546
- **Source Citations:** Matt `sources/matt/skills/engineering/wayfinder/SKILL.md:1-60`; Addy `sources/addy/skills/spec-driven-development/SKILL.md:30-50`
- **Persona & Responsibilities:** Codebase surveying persona that navigates directories, maps dependencies, and identifies architectural landmarks.
- **Primary Phase:** `reconnaissance`, `spec`
- **Permissions:** Read-only access to files, ripgrep, AST analysis tools.

### 2.6 `technical-writer`
- **Canonical Name:** `technical-writer`
- **Governing Decision:** D-583
- **Source Citations:** Addy `sources/addy/skills/documentation-and-adrs/SKILL.md:1-50`
- **Persona & Responsibilities:** Documentation specialist authoring READMEs, user guides, API references, and release notes.
- **Primary Phase:** `spec`, `ship-phase`
- **Permissions:** Write access to documentation files.

### 2.7 `devops-specialist`
- **Canonical Name:** `devops-specialist`
- **Governing Decision:** D-544
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/devops.md:1-45`
- **Persona & Responsibilities:** Infrastructure engineer managing build pipelines, deployment scripts, monitoring configs, and container definitions.
- **Primary Phase:** `ship-phase`
- **Permissions:** Write access to CI/CD workflows and deployment runbooks.

### 2.8 `merge-resolver`
- **Canonical Name:** `merge-resolver`
- **Governing Decision:** D-554
- **Source Citations:** Matt `sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md:1-55`
- **Persona & Responsibilities:** Specialized git conflict resolution agent that analyzes diverging branches and cleanly reconciles merge conflicts.
- **Primary Phase:** `build-phase`, `ship-phase`
- **Permissions:** Git merge, rebase, and conflict staging tools.

### 2.9 `tech-debt-remediation-specialist`
- **Canonical Name:** `tech-debt-remediation-specialist`
- **Governing Decision:** D-582
- **Source Citations:** Matt `sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md:20-60`
- **Persona & Responsibilities:** Dedicated refactoring persona targeting code smells, deprecated APIs, and structural technical debt.
- **Primary Phase:** Maintenance refactoring
- **Permissions:** Write access to legacy code seams and unit tests.

---

## 3. Verification, Testing & Quality Roles

### 3.1 `test-engineer`
- **Canonical Name:** `test-engineer`
- **Governing Decision:** D-585
- **Source Citations:** Addy `sources/addy/skills/verify/SKILL.md:5-50`; RJM `sources/rjm/.claude/skills/review/references/qa.md:1-50`
- **Persona & Responsibilities:** Test authoring and verification persona responsible for regression suites, integration fixtures, and coverage validation.
- **Primary Phase:** `test`
- **Permissions:** Write access to `tests/`; terminal execution for test suites.

### 3.2 `systematic-bug-hunter`
- **Canonical Name:** `systematic-bug-hunter`
- **Governing Decision:** D-579
- **Source Citations:** Matt `sources/matt/skills/engineering/diagnosing-bugs/SKILL.md:1-85`
- **Persona & Responsibilities:** Root-cause diagnostic specialist executing the six-phase bug diagnosis workflow, from deterministic reproduction to cleanup.
- **Primary Phase:** `defect-reproduction` through `defect-remediation`
- **Permissions:** Temporary probe instrumentation, test execution, minimal code fixes.

### 3.3 `build-cop`
- **Canonical Name:** `build-cop`
- **Governing Decision:** D-533
- **Source Citations:** Addy `sources/addy/skills/ci-cd-and-automation/SKILL.md:10-45`
- **Persona & Responsibilities:** Build health guardian that enforces pre-commit hooks, static analysis, and triggers `stop-the-line-andon-cord` on broken builds.
- **Primary Phase:** `build-phase`, `quality-assurance`
- **Permissions:** Build script execution, commit gating.

### 3.4 `silent-failure-hunter`
- **Canonical Name:** `silent-failure-hunter`
- **Governing Decision:** D-569
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/reliability.md:1-50`
- **Persona & Responsibilities:** Auditor dedicated to uncovering swallowed errors, empty catch blocks, unhandled promise rejections, and missing logs.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only inspection of diffs and error logging patterns.

### 3.5 `standards-subagent`
- **Canonical Name:** `standards-subagent`
- **Governing Decision:** D-575
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/spec-compliance.md:1-45`
- **Persona & Responsibilities:** Compliance auditor verifying document formatting, template adherence, and schema validity.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only template assessment.

---

## 4. Review, Audit & Adversarial Personas (Six-Role Review Panel)

### 4.1 `six-role-panel`
- **Canonical Name:** `six-role-panel`
- **Governing Decision:** D-570
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/SKILL.md:1-95`
- **Persona & Responsibilities:** Coordinated multi-perspective review body uniting six distinct analytical lenses to evaluate code changes prior to merge.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only inspection of diffs; produces consolidated `review-report`.

### 4.2 `code-reviewer`
- **Canonical Name:** `code-reviewer`
- **Governing Decision:** D-535
- **Source Citations:** Addy `sources/addy/skills/code-review-and-quality/SKILL.md:1-50`
- **Persona & Responsibilities:** Lead code review persona evaluating logic correctness, readability, test adequacy, and convention adherence.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only code inspection.

### 4.3 `senior-code-reviewer`
- **Canonical Name:** `senior-code-reviewer`
- **Governing Decision:** D-567
- **Source Citations:** Matt `sources/matt/docs/engineering/code-review.md:1-40`
- **Persona & Responsibilities:** Experienced engineering review persona focusing on long-term maintainability, edge cases, and design simplicity.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only code inspection.

### 4.4 `adversarial-reviewer`
- **Canonical Name:** `adversarial-reviewer`
- **Governing Decision:** D-519
- **Source Citations:** METHOD.md §6.4; RJM `sources/rjm/.claude/skills/review/references/analyst.md:1-50`
- **Persona & Responsibilities:** Independent review persona mandated to actively search for defects, unstated assumptions, and flaws, never producing empty praise.
- **Primary Phase:** `review-phase`, Phase 4V, Phase 7 review
- **Permissions:** Read-only verification.

### 4.5 `fresh-context-reviewer`
- **Canonical Name:** `fresh-context-reviewer`
- **Governing Decision:** D-548
- **Source Citations:** METHOD.md §6.2, §7 step 6
- **Persona & Responsibilities:** Reviewer spawned with a completely fresh context window to evaluate deliverables without memory contamination from authoring turns.
- **Primary Phase:** Work-unit verification
- **Permissions:** Read-only validation.

### 4.6 `critic`
- **Canonical Name:** `critic`
- **Governing Decision:** D-539
- **Source Citations:** Addy `sources/addy/skills/interview-me/SKILL.md:15-50`
- **Persona & Responsibilities:** Socratic challenger during specification and discovery that questions motivations, probes edge cases, and exposes weaknesses.
- **Primary Phase:** `spec`
- **Permissions:** Interactive dialogue and questioning.

### 4.7 `cynic`
- **Canonical Name:** `cynic`
- **Governing Decision:** D-540
- **Source Citations:** Addy `sources/addy/skills/doubt-driven-development/SKILL.md:1-45`
- **Persona & Responsibilities:** Skeptical persona that assumes features will fail, evaluating worst-case failure modes and operational hazards.
- **Primary Phase:** `spec`, `review-phase`
- **Permissions:** Read-only critique.

### 4.8 `hostile-expert`
- **Canonical Name:** `hostile-expert`
- **Governing Decision:** D-549
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/decision-rigor.md:1-50`
- **Persona & Responsibilities:** Adversarial domain specialist that rigorously stress-tests architectural decisions and data contracts against production realities.
- **Primary Phase:** `spec`, `review-phase`
- **Permissions:** Read-only critique.

### 4.9 `contrarian-analyst`
- **Canonical Name:** `contrarian-analyst`
- **Governing Decision:** D-537
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/analyst.md:15-55`
- **Persona & Responsibilities:** Analytical reviewer providing counter-proposals to mainstream design consensus to expose groupthink.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only critique.

### 4.10 `brutally-honest-strategic-advisor`
- **Canonical Name:** `brutally-honest-strategic-advisor`
- **Governing Decision:** D-532
- **Source Citations:** Addy `sources/addy/skills/idea-refine/SKILL.md:10-50`
- **Persona & Responsibilities:** Direct, unvarnished strategic advisor evaluating whether a proposed feature provides genuine user value.
- **Primary Phase:** `spec`
- **Permissions:** Discovery dialogue.

### 4.11 `principal-engineer-advisor`
- **Canonical Name:** `principal-engineer-advisor`
- **Governing Decision:** D-558
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/architect.md:1-55`
- **Persona & Responsibilities:** Senior technical advisor providing guidance on system scalability, operational reliability, and organizational conventions.
- **Primary Phase:** `spec`, `review-phase`
- **Permissions:** Architectural consultation.

### 4.12 `security-auditor`
- **Canonical Name:** `security-auditor`
- **Governing Decision:** D-568
- **Source Citations:** Addy `sources/addy/skills/security-and-hardening/SKILL.md:1-60`; RJM `sources/rjm/.claude/skills/review/references/security.md:1-60`
- **Persona & Responsibilities:** Security review specialist auditing code for OWASP vulnerabilities, injection risks, secret leaks, and auth boundaries.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only code inspection and vulnerability scanner access.

### 4.13 `dependency-auditor`
- **Canonical Name:** `dependency-auditor`
- **Governing Decision:** D-542
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/agent-safety.md:1-50`
- **Persona & Responsibilities:** Auditor evaluating third-party dependencies for security advisories, license compliance, and package health.
- **Primary Phase:** `review-phase`, `ship-phase`
- **Permissions:** Package manifest inspection.

### 4.14 `supply-chain-risk-scanner`
- **Canonical Name:** `supply-chain-risk-scanner`
- **Governing Decision:** D-578
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/security.md:20-55`
- **Persona & Responsibilities:** Specialized auditor analyzing lockfiles and transitive dependencies for supply-chain attacks and tampering.
- **Primary Phase:** `review-phase`
- **Permissions:** Lockfile auditing tools.

### 4.15 `code-simplifier`
- **Canonical Name:** `code-simplifier`
- **Governing Decision:** D-536
- **Source Citations:** Addy `sources/addy/skills/code-simplification/SKILL.md:1-55`
- **Persona & Responsibilities:** Refactoring reviewer dedicated to eliminating unnecessary abstractions, removing dead code, and simplifying logic.
- **Primary Phase:** `build-phase`, `review-phase`
- **Permissions:** Code refactoring and diff inspection.

### 4.16 `web-performance-auditor`
- **Canonical Name:** `web-performance-auditor`
- **Governing Decision:** D-587
- **Source Citations:** Addy `sources/addy/skills/performance-optimization/SKILL.md:1-55`
- **Persona & Responsibilities:** Frontend performance reviewer evaluating Core Web Vitals, bundle size impact, and rendering efficiency.
- **Primary Phase:** `review-phase`
- **Permissions:** Bundle analysis and performance trace inspection.

### 4.17 `screen-reader-auditor`
- **Canonical Name:** `screen-reader-auditor`
- **Governing Decision:** D-566
- **Source Citations:** Addy `sources/addy/references/accessibility-checklist.md:1-60`
- **Persona & Responsibilities:** Accessibility specialist auditing semantic HTML, ARIA labels, focus management, and assistive tech support.
- **Primary Phase:** `review-phase`
- **Permissions:** DOM and accessibility tree inspection.

### 4.18 `agent-safety-auditor`
- **Canonical Name:** `agent-safety-auditor`
- **Governing Decision:** D-524
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/agent-safety.md:1-60`
- **Persona & Responsibilities:** Auditor assessing prompt injection resistance, tool-use safety, and sandboxing compliance in agent extensions.
- **Primary Phase:** `review-phase`
- **Permissions:** Safety and sandboxing inspection.

### 4.19 `comment-analyzer`
- **Canonical Name:** `comment-analyzer`
- **Governing Decision:** D-536
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/code-quality.md:30-65`
- **Persona & Responsibilities:** Auditor inspecting code comments for drift, obsolete instructions, misleading explanations, or commented-out code.
- **Primary Phase:** `review-phase`
- **Permissions:** Read-only comment audit.

---

## 5. Operational, Governance & Support Roles

### 5.1 `design-authority`
- **Canonical Name:** `design-authority`
- **Governing Decision:** D-543
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/architect.md:10-40`
- **Persona & Responsibilities:** Lead design governance body reviewing and ratifying breaking architectural proposals.
- **Primary Phase:** Architectural review
- **Permissions:** ADR signoff.

### 5.2 `steering-committee`
- **Canonical Name:** `steering-committee`
- **Governing Decision:** D-576
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/roadmap.md:1-40`
- **Persona & Responsibilities:** Governance body establishing strategic milestones, resource prioritization, and lifecycle roadmaps.
- **Primary Phase:** Governance
- **Permissions:** Roadmap ratification.

### 5.3 `launch-sponsor`
- **Canonical Name:** `launch-sponsor`
- **Governing Decision:** D-553
- **Source Citations:** Addy `sources/addy/skills/shipping-and-launch/SKILL.md:20-60`
- **Persona & Responsibilities:** Executive or product stakeholder authorizing production deployment and release publication.
- **Primary Phase:** `ship-phase`
- **Permissions:** Release signoff.

### 5.4 `rollback-owner`
- **Canonical Name:** `rollback-owner`
- **Governing Decision:** D-565
- **Source Citations:** Addy `sources/addy/skills/shipping-and-launch/SKILL.md:30-70`
- **Persona & Responsibilities:** Operational authority responsible for executing emergency rollback procedures if post-deployment checks fail.
- **Primary Phase:** `ship-phase`
- **Permissions:** Rollback script execution.

### 5.5 `user-representative`
- **Canonical Name:** `user-representative`
- **Governing Decision:** D-586
- **Source Citations:** Matt `sources/matt/docs/productivity/grill-me.md:10-45`
- **Persona & Responsibilities:** Domain stakeholder advocating for end-user usability, ergonomics, and business workflow requirements.
- **Primary Phase:** `spec`
- **Permissions:** Requirements input.

### 5.6 `audience-agent`
- **Canonical Name:** `audience-agent`
- **Governing Decision:** D-528
- **Source Citations:** Matt `sources/matt/skills/productivity/writing-for-agents/SKILL.md:1-55`
- **Persona & Responsibilities:** Evaluator persona that tests whether documentation and instructions are clear and navigable for downstream agent readers.
- **Primary Phase:** Documentation review
- **Permissions:** Read-only readability evaluation.

### 5.7 `peer-coach`
- **Canonical Name:** `peer-coach`
- **Governing Decision:** D-556
- **Source Citations:** Matt `sources/matt/skills/productivity/teach/SKILL.md:1-50`
- **Persona & Responsibilities:** Pedagogical assistant that provides explanatory feedback and guided walkthroughs of complex architectural concepts.
- **Primary Phase:** Interactive guidance
- **Permissions:** Educational explanation.

### 5.8 `prompt-engineer-specialist`
- **Canonical Name:** `prompt-engineer-specialist`
- **Governing Decision:** D-560
- **Source Citations:** RJM `sources/rjm/.claude/skills/skillforge/references/overview-and-triggers.md:1-50`
- **Persona & Responsibilities:** Prompt architecture expert optimizing system prompts, trigger phrases, and degrees-of-freedom in agent skills.
- **Primary Phase:** Skill development
- **Permissions:** Write access to skill system prompts.

### 5.9 `retrospective-agent`
- **Canonical Name:** `retrospective-agent`
- **Governing Decision:** D-564
- **Source Citations:** Addy `sources/addy/skills/idea-refine/SKILL.md:20-60`; Matt `sources/matt/skills/in-progress/retro/SKILL.md:1-45`
- **Persona & Responsibilities:** Post-mortem analysis persona capturing lessons learned, operational bugs, and process improvements into `learning-log`.
- **Primary Phase:** Post-release review
- **Permissions:** Write access to `docs/retrospectives/`.

### 5.10 `skillbook-curator`
- **Canonical Name:** `skillbook-curator`
- **Governing Decision:** D-571
- **Source Citations:** RJM `sources/rjm/.claude/skills/skillforge/SKILL.md:1-75`
- **Persona & Responsibilities:** Maintainer of the agent skill catalog, organizing indexing, deprecation, and versioning across skills.
- **Primary Phase:** Skill governance
- **Permissions:** Skill registry management.

### 5.11 `janitor`
- **Canonical Name:** `janitor`
- **Governing Decision:** D-552
- **Source Citations:** RJM `sources/rjm/.claude/skills/adr-review/references/deletion-workflow.md:81-110`
- **Persona & Responsibilities:** Codebase maintenance persona that purges dead files, updates stale documentation, and resolves orphan references.
- **Primary Phase:** `deletion-cleanup`
- **Permissions:** File deletion and dead reference removal.

---

## 6. Execution Modes, Workflow Archetypes & Classification Roles

### 6.1 `agent`
- **Canonical Name:** `agent`
- **Governing Decision:** D-522
- **Source Citations:** General taxonomy across all three sources.
- **Persona & Responsibilities:** Autonomous software entity capable of perceiving environment state, executing tools, and completing directed goals.
- **Primary Phase:** Across all phases
- **Permissions:** Context-dependent tool execution.

### 6.2 `subagent`
- **Canonical Name:** `subagent`
- **Governing Decision:** D-577
- **Source Citations:** METHOD.md §6; Addy `sources/addy/references/orchestration-patterns.md:40-80`
- **Persona & Responsibilities:** Ephemeral secondary agent dispatched by a parent orchestrator to execute a scoped task with an independent context window.
- **Primary Phase:** Task execution, review
- **Permissions:** Scoped tool access bounded by dispatch brief.

### 6.3 `claude-code-agent`
- **Canonical Name:** `claude-code-agent`
- **Governing Decision:** D-534
- **Source Citations:** Matt `sources/matt/package.json:10`; RJM `.claude/CLAUDE.md:1-30`
- **Persona & Responsibilities:** Agent instance operating within the Anthropic Claude Code command-line interface.
- **Primary Phase:** Execution harness
- **Permissions:** Standard Claude Code toolset.

### 6.4 `agent-persona`
- **Canonical Name:** `agent-persona`
- **Governing Decision:** D-523
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/references/analyst.md:1-30`
- **Persona & Responsibilities:** Behavioral profile defining specific expertise, perspective, biases, and evaluation criteria for an agent.
- **Primary Phase:** Role configuration
- **Permissions:** N/A (classification).

### 6.5 `specialized-agent-persona`
- **Canonical Name:** `specialized-agent-persona`
- **Governing Decision:** D-574
- **Source Citations:** RJM `sources/rjm/.claude/skills/review/SKILL.md:15-50`
- **Persona & Responsibilities:** Hyper-focused persona instantiated for domain-specific tasks (e.g. security audit, performance profiling).
- **Primary Phase:** Review and diagnosis
- **Permissions:** Domain-specific tools.

### 6.6 `general-purpose-agent`
- **Canonical Name:** `general-purpose-agent`
- **Governing Decision:** D-549
- **Source Citations:** General harness capability.
- **Persona & Responsibilities:** Standard agent configuration equipped with full filesystem, command, and search capabilities for open-ended exploration.
- **Primary Phase:** Exploration and ad-hoc troubleshooting
- **Permissions:** Standard CLI toolset.

### 6.7 `autonomous-development-agent`
- **Canonical Name:** `autonomous-development-agent`
- **Governing Decision:** D-529
- **Source Citations:** RJM `sources/rjm/.claude/commands/work.md:1-40`
- **Persona & Responsibilities:** End-to-end development agent capable of traversing multiple lifecycle phases under defined gating constraints.
- **Primary Phase:** Lifecycle execution
- **Permissions:** Full development toolset.

### 6.8 `background-agent`
- **Canonical Name:** `background-agent`
- **Governing Decision:** D-530
- **Source Citations:** Addy `sources/addy/references/orchestration-patterns.md:70-110`
- **Persona & Responsibilities:** Agent running asynchronously in a separate background thread or worktree to complete long-running build or test jobs.
- **Primary Phase:** Long-running verification
- **Permissions:** Asynchronous execution.

### 6.9 `afk-agent`
- **Canonical Name:** `afk-agent`
- **Governing Decision:** D-520
- **Source Citations:** Matt `sources/matt/skills/engineering/to-tickets.md:35-50`
- **Persona & Responsibilities:** Agent configured to execute batch tickets autonomously without interactive user intervention ("Away From Keyboard").
- **Primary Phase:** Batch task execution
- **Permissions:** Headless automated execution.

### 6.10 `afk-runner`
- **Canonical Name:** `afk-runner`
- **Governing Decision:** D-521
- **Source Citations:** Matt `sources/matt/skills/engineering/to-tickets.md:40-60`
- **Persona & Responsibilities:** Execution loop driving AFK batch tickets sequentially until completion or an unrecoverable block is encountered.
- **Primary Phase:** Batch automation
- **Permissions:** Task dispatch and loop control.

### 6.11 `external-swe-agent`
- **Canonical Name:** `external-swe-agent`
- **Governing Decision:** D-547
- **Source Citations:** RJM `sources/rjm/.claude/commands/work.md:30-65`
- **Persona & Responsibilities:** External AI coding benchmark or third-party autonomous developer entity interfacing with repository artifacts.
- **Primary Phase:** Benchmark execution
- **Permissions:** Sandboxed benchmark toolset.

### 6.12 `assignee-role`
- **Canonical Name:** `assignee-role`
- **Governing Decision:** D-527
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:15-35`
- **Persona & Responsibilities:** Ticket metadata field designating whether a task unit is assigned to an agent (`ready-for-agent`) or human developer (`ready-for-human`).
- **Primary Phase:** Task assignment
- **Permissions:** N/A (ticket classification).

### 6.13 `ready-for-agent-role`
- **Canonical Name:** `ready-for-agent-role`
- **Governing Decision:** D-562
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:20-40`
- **Persona & Responsibilities:** Ticket status marking a task as fully specified, bounded, and verified fit for autonomous agent execution.
- **Primary Phase:** Planning handoff
- **Permissions:** N/A (ticket status).

### 6.14 `ready-for-human-role`
- **Canonical Name:** `ready-for-human-role`
- **Governing Decision:** D-563
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:20-40`
- **Persona & Responsibilities:** Ticket status marking a task as requiring human decision-making, visual taste, or external credentials.
- **Primary Phase:** Planning handoff
- **Permissions:** N/A (ticket status).

### 6.15 `ready-for-afk-role`
- **Canonical Name:** `ready-for-afk-role`
- **Governing Decision:** D-561
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:25-45`
- **Persona & Responsibilities:** Ticket status marking a task as verified safe for unattended headless batch processing.
- **Primary Phase:** Planning handoff
- **Permissions:** N/A (ticket status).

### 6.16 `needs-slicing-role`
- **Canonical Name:** `needs-slicing-role`
- **Governing Decision:** D-555
- **Source Citations:** Matt `sources/matt/docs/engineering/to-tickets.md:30-50`
- **Persona & Responsibilities:** Ticket status indicating that a task is too large or complex for single-session execution and must be further decomposed.
- **Primary Phase:** Task breakdown
- **Permissions:** N/A (ticket status).
