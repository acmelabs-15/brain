# Concordance — Phases

This document establishes the structural concordance for all **phase** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5 and §9, this is one of three structural concordances that establish the stage names, sequencing, and operational boundaries of the software development lifecycle.

---

## Structural Overview — Lifecycle Stages and Boundaries

| Stage (Logical) | Addy (`agent-skills`) | Matt (`skills`) | RJM (`ai-agents`) | Boundary / Contract |
|---|---|---|---|---|
| **1. Specification & Discovery** | `Define` (`skills/spec-driven-development/SKILL.md`) | `explore` (`skills/explore/SKILL.md`), `to-spec` | `/spec` (`.claude/commands/spec.md`) | Entry: user goal/problem. Exit: approved specification before planning or coding. |
| **2. Planning & Task Breakdown** | `Plan` (`skills/planning-and-task-breakdown/SKILL.md`) | `Plan` (`to-tickets`) | `/plan` (`.claude/commands/plan.md`) | Entry: approved spec. Exit: acyclic task plan with acceptance criteria. |
| **3. Implementation & Build** | `Build` (`commands/build.toml`, `skills/implement-spec/`) | `engineering` (`skills/implement/SKILL.md`) | `/build` (`.claude/commands/build.md`) | Entry: sliced task checklist. Exit: working implementation code with unit tests. |
| **4. Verification & Testing** | `Verify` (`skills/verify/SKILL.md`) | `diagnosing-bugs` (`skills/diagnosing-bugs/`) | `/test` (`.claude/commands/test.md`) | Entry: built code diffs. Exit: passing test suites, baseline proof, zero regressions. |
| **5. Review & Audit** | `Review` (`skills/review/SKILL.md`) | Code review in `engineering` | `review` (`.claude/skills/review/`, ADR-064) | Entry: verified code changes. Exit: multi-perspective critique, threat model, merge approval. |
| **6. Shipping & Release** | `Ship` (`commands/ship.toml`) | `triage` / PR handoff | `/ship` (`.claude/commands/ship.md`) | Entry: approved review verdict. Exit: tagged release, changelog, migration execution, deployed code. |

---

## Concordance Rows

## 1. Macro Lifecycle Stages

### lifecycle-stage-spec

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `DEFINE` | `explore` | `/spec` |
| **card** | [define](../concepts/addy/define.md) | [explore](../concepts/matt/explore.md) | [spec](../concepts/rjm/spec.md) |
| **kind** | phase | phase | phase |
| **phase** | `addy:Define` | `matt:in-progress` | `rjm:spec` |
| **produces** | Approved specification document or PRD clarifying requirements, boundaries, and acceptance criteria. | An unstructured collection of fragments stored in a single markdown file with a working title. | Comprehensive specification document, CVA matrix, user stories, acceptance criteria, and critic review signoff. |
| **consumes** | Unstructured user idea, problem statement, or feature request. | Author dialogue, initial prompt thoughts, questions, anecdotes, and observations during conversational grilling. | User feature request, problem description, or issue ticket. |
| **impl status** | defects: cross-file-contradiction, doc-drift, missing-path, orphan | clean | defects: missing-path, doc-drift |

- **class:** SYNONYM
- **difference:** Addy names this phase DEFINE (skills/spec-driven-development/SKILL.md:12), Matt names it explore (skills/explore/SKILL.md:14), and RJM names it /spec (.claude/commands/spec.md:1). All three govern problem discovery, scope bounding, and requirements definition before planning or coding.
- **sequencing note:** Terminal entry stage for new feature work across all three packages; precedes planning.
- **needs decision:** yes
- **decision:** D-620

### lifecycle-stage-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PLAN` | — | `PLAN` |
| **card** | [plan](../concepts/addy/plan.md) | — | [plan](../concepts/rjm/plan.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Plan` | — | `rjm:plan` |
| **produces** | Ordered task list with explicit acceptance criteria, dependency graph, and verification strategy. | — | Implementation plan, sized atomic tasks (S/M/L), dependency graph, risk register, and execution milestones. |
| **consumes** | Approved specification from the Define phase. | — | Approved specification, PRD, requirements documentation, or architectural decision records. |
| **impl status** | defects: cross-file-contradiction, doc-drift, missing-path, orphan | — | defects: missing-path, doc-drift |

- **class:** ALIGNED
- **difference:** Addy (skills/planning-and-task-breakdown/SKILL.md:8) and RJM (.claude/commands/plan.md:1) both define PLAN as the dedicated work breakdown phase that converts specifications into ordered task graphs. Matt achieves this via the to-tickets skill under engineering without a standalone phase card.
- **sequencing note:** Must follow specification and precede code implementation across all packages.
- **needs decision:** no
- **decision:** —

### lifecycle-stage-build

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `/build` | `build step` | `Build` |
| **card** | [build](../concepts/addy/build.md) | [build-step](../concepts/matt/build-step.md) | [build](../concepts/rjm/build.md) |
| **kind** | phase | phase | phase |
| **phase** | `addy:Build` | `matt:engineering` | `rjm:build` |
| **produces** | Working code, passing test suites, and atomic per-task git commits. | Working, verified feature code and passing test suites. | Working source code, unit tests, platform runtime artifacts, or internal capabilities. |
| **consumes** | Decomposed task plan with explicit acceptance criteria from the Plan phase. | Sliced tickets, specifications, and agreed test seams. | Approved specification, implementation plan, task breakdown, or sourcing decision. |
| **impl status** | clean | defects: doc-drift, orphan | defects: doc-drift, exit-code-mismatch, missing-path |

- **class:** ALIGNED
- **difference:** Addy (/build in commands/build.toml:2), Matt (build step in skills/implement/SKILL.md:45), and RJM (Build in .claude/commands/build.md:1) all define the primary code execution phase where tasks from the plan are constructed into working, tested code slices.
- **sequencing note:** Executes after planning; consumes task plans and produces implementation diffs.
- **needs decision:** no
- **decision:** —

### lifecycle-stage-verify-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `VERIFY` | — | `test` |
| **card** | [verify](../concepts/addy/verify.md) | — | [test](../concepts/rjm/test.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Verify` | — | `rjm:test` |
| **produces** | Execution proof, test logs, error recovery steps, and diagnostic verification reports. | — | Test execution results, quality gate pass/fail verdicts, and held-out evaluation metrics. |
| **consumes** | Code changes and tests produced during the Build phase. | — | Compiled software builds, unit test suites, integration test fixtures, and prompt evaluation holdout sets. |
| **impl status** | defects: cross-file-contradiction, doc-drift, missing-path | — | defects: doc-drift, missing-path, always-failing-gate, script-bug |

- **class:** SYNONYM
- **difference:** Addy calls post-build automated verification VERIFY (skills/verify/SKILL.md:5), whereas RJM calls it test (.claude/commands/test.md:1). Matt embeds automated test execution directly into the build step and reserves diagnosing-bugs for defects.
- **sequencing note:** Runs immediately after build and before code review.
- **needs decision:** yes
- **decision:** D-101

### lifecycle-stage-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `REVIEW` | — | `review` |
| **card** | [review](../concepts/addy/review.md) | — | [review](../concepts/rjm/review.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Review` | — | `rjm:review` |
| **produces** | Categorized review feedback (Critical, Required, Optional, Nit), simplification recommendations, and security/performance assessments. | — | Five-axis review report (architecture, security, quality, tests, standards) with prioritized findings. |
| **consumes** | Working, verified implementation changes and diffs. | — | Code changes, passing test results from /test, and original specification artifacts. |
| **impl status** | defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, orphan | — | clean |

- **class:** ALIGNED
- **difference:** Addy (skills/review/SKILL.md:10) and RJM (.claude/skills/review/SKILL.md:1, ADR-064) both define a standalone multi-perspective review stage before release. Matt treats code review as a skill within the engineering phase.
- **sequencing note:** Executes after testing/verification passes and before shipping.
- **needs decision:** no
- **decision:** —

### lifecycle-stage-ship

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SHIP` | — | `/ship` |
| **card** | [ship](../concepts/addy/ship.md) | — | [ship](../concepts/rjm/ship.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Ship` | — | `rjm:ship` |
| **produces** | Pre-launch checklist, rollback strategy, feature flag configuration, and production monitoring setup. | — | Pre-flight verification report, GitHub pull request creation, and ship summary report. |
| **consumes** | Reviewed and approved code ready for deployment. | — | Reviewed tip commit with valid `Reviewed-By` trailer from `/review`, passing automated test suites, and clean pre-flight verification. |
| **impl status** | defects: cross-file-contradiction, doc-drift, missing-path, orphan | — | defects: missing-path, doc-drift |

- **class:** ALIGNED
- **difference:** Addy (commands/ship.toml:2) and RJM (.claude/commands/ship.md:1) both define SHIP as the release, packaging, changelog, and deployment gate. Matt has no dedicated release command or phase, handing off at PR creation.
- **sequencing note:** Final phase of the development lifecycle across both packages that implement it.
- **needs decision:** no
- **decision:** —

## 2. High-Level Catalog & Taxonomy Phases

### catalog-build-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Build phase` | — | `Implementation` |
| **card** | [build-phase](../concepts/addy/build-phase.md) | — | [implementation](../concepts/rjm/implementation.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Build` | — | `rjm:build` |
| **produces** | Tested implementation code written in vertical slices. | — | Production source code, slash command markdown definitions, test suites, executable automation scripts. |
| **consumes** | Spec documents, tasks, and task plans from the Define and Plan phases. | — | Approved specifications, consensus validation reports, architecture designs, command templates. |
| **impl status** | defects: doc-drift | — | defects: doc-drift, internal-contradiction, missing-path, orphan, script-bug |

- **class:** SYNONYM
- **difference:** Addy catalogs Build phase in external web documentation (external/api-and-interface-design.md:5), aligning with RJM implementation phase (.claude/commands/build.md:126).
- **sequencing note:** Identical to the build lifecycle stage.
- **needs decision:** yes
- **decision:** D-102

### catalog-plan-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Plan phase"` | — | `Execution Planning` |
| **card** | [plan-phase](../concepts/addy/plan-phase.md) | — | [execution-planning](../concepts/rjm/execution-planning.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Plan` | — | `rjm:plan` |
| **produces** | Ordered task breakdown, dependency graphs, and test plans. | — | Milestone inventory, target file mappings, parallelization analysis, task tracking setup, and reconciliation signals. |
| **consumes** | Approved specifications, architecture constraints, and product requirements. | — | Approved plan file, milestone definitions, and user thoughts. |
| **impl status** | clean | — | defects: missing-path, internal-contradiction, exit-code-mismatch |

- **class:** SYNONYM
- **difference:** Addy Plan phase (external/api-and-interface-design.md:5) aligns with RJM Execution Planning (.claude/commands/plan.md:183).
- **sequencing note:** Identical to planning lifecycle stage.
- **needs decision:** yes
- **decision:** D-103

### catalog-review-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Review phase` | — | `Phase 1: Independent Review` |
| **card** | [review-phase](../concepts/addy/review-phase.md) | — | [phase-1-independent-review](../concepts/rjm/phase-1-independent-review.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Review` | — | `rjm:review` |
| **produces** | Multi-axis review findings, code simplification diffs, security audits, performance profiling results, merge approvals. | — | Parallel review reports from architect, critic, independent-thinker, security, and analyst agents with categorized concerns (P0/P1/P2). |
| **consumes** | Completed implementation code, test suites, and pull requests ready for evaluation. | — | Target ADR text and Phase 0 related work research findings. |
| **impl status** | defects: doc-drift, orphan | — | clean |

- **class:** PARTIAL
- **difference:** Addy Review phase (external/api-and-interface-design.md:5) represents high-level catalog classification, whereas RJM Phase 1: Independent Review (.claude/skills/review/SKILL.md:28) is a concrete sub-phase within review.
- **sequencing note:** Review stage.
- **needs decision:** yes
- **decision:** D-104

### catalog-ship-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Ship phase` | — | `Validation and Packaging` |
| **card** | [ship-phase](../concepts/addy/ship-phase.md) | — | [validation-and-packaging](../concepts/rjm/validation-and-packaging.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Ship` | — | `rjm:ship` |
| **produces** | Production deployments, semantic version tags, human-curated changelogs, runtime telemetry, and rollback procedures. | — | Validated skill package passing structural linters and documentation safety checks ready for distribution. |
| **consumes** | Reviewed and approved code changes, passing test suites, and deployment configurations. | — | Completed skill directory with SKILL.md, references/, scripts/, and documentation. |
| **impl status** | defects: doc-drift, orphan | — | defects: doc-drift, missing-path, script-bug |

- **class:** PARTIAL
- **difference:** Addy Ship phase (external/api-and-interface-design.md:5) categorizes release tooling, whereas RJM Validation and Packaging (.claude/commands/ship.md:73) is the packaging sub-phase of ship.
- **sequencing note:** Release stage.
- **needs decision:** yes
- **decision:** D-105

### catalog-verify-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verify phase` | — | `Quality Assurance` |
| **card** | [verify-phase](../concepts/addy/verify-phase.md) | — | [quality-assurance](../concepts/rjm/quality-assurance.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Verify` | — | `cross-phase` |
| **produces** | Verification results, runtime proofs, and root-cause bug fixes. | — | Maintainability improvements, permanent regression test cases, and a final summary report documenting root cause and preventive measures. |
| **consumes** | Implemented code and test suites from the Build phase. | — | Verified bug fix code, reproduction logs, and test execution results. |
| **impl status** | defects: doc-drift | — | clean |

- **class:** SYNONYM
- **difference:** Addy Verify phase (external/api-and-interface-design.md:5) aligns with RJM Quality Assurance (.claude/commands/test.md:144).
- **sequencing note:** Validation stage.
- **needs decision:** yes
- **decision:** D-106

## 3. Refactoring, Migration & Code Transformation Phases

### phase-refactor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `REFACTOR` | `refactor` | — |
| **card** | [refactor](../concepts/addy/refactor.md) | [refactor](../concepts/matt/refactor.md) | — |
| **kind** | phase | phase | — |
| **phase** | `addy:Build` | `matt:engineering` | — |
| **produces** | Cleaned up, deduplicated, and optimized code with all existing tests still passing. | Restructured code with identical behavior and improved design. | — |
| **consumes** | Passing tests (GREEN) and functional implementation code. | Working, tested code from the implementation step. | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | defects: doc-drift, orphan | — |

- **class:** ALIGNED
- **difference:** Addy REFACTOR (skills/refactor/SKILL.md:12) and Matt refactor (skills/refactor/SKILL.md:8) both define behavior-preserving code restructuring after tests pass. RJM has no standalone refactor phase card.
- **sequencing note:** Post-implementation inside the build stage.
- **needs decision:** no
- **decision:** —

### phase-expand

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `EXPAND` | `Expand` | — |
| **card** | [expand](../concepts/addy/expand.md) | [expand](../concepts/matt/expand.md) | — |
| **kind** | phase | phase | — |
| **phase** | `addy:Ship` | `matt:Plan` | — |
| **produces** | Additive database migration script adding nullable or optional structures that existing production code safely ignores. | The new interface, method, or column introduced alongside the existing deprecated implementation. | — |
| **consumes** | Target database schema design requiring new fields, tables, or structural changes. | An interface, schema, or function signature targeted for wide refactoring across a codebase. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy EXPAND (references/database-migrations.md:34) applies the expand pattern to database schemas, while Matt Expand (skills/expand-contract-migrate/SKILL.md:18) applies it to codebase interfaces and call sites. Both introduce new structures alongside legacy structures.
- **sequencing note:** First step in parallel change migration; precedes Migrate.
- **needs decision:** yes
- **decision:** D-621

### phase-migrate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `MIGRATE` | `Migrate` | — |
| **card** | [migrate](../concepts/addy/migrate.md) | [migrate](../concepts/matt/migrate.md) | — |
| **kind** | phase | phase | — |
| **phase** | `addy:Ship` | `matt:Plan` | — |
| **produces** | Synchronized data across both columns/tables, completed backfill of historical rows, and application reads switched to the new structure. | Individual tickets that transition call sites to the new form in partitioned, reviewable batches. | — |
| **consumes** | Expanded database schema containing both legacy and new structures concurrently. | Call sites using the legacy implementation, following completion of the Expand ticket. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy MIGRATE (references/database-migrations.md:46) transitions data and reads to new schema structures; Matt Migrate (skills/expand-contract-migrate/SKILL.md:24) transitions call sites in batches.
- **sequencing note:** Follows Expand; precedes Contract.
- **needs decision:** yes
- **decision:** D-622

### phase-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Contract` | — |
| **card** | — | [contract](../concepts/matt/contract.md) | — |
| **kind** | — | phase | — |
| **phase** | — | `matt:Plan` | — |
| **produces** | — | Clean removal of legacy code, leaving only the new unified implementation. | — |
| **consumes** | — | A deprecated interface or schema from which all active call sites have been completely removed. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt Contract (skills/expand-contract-migrate/SKILL.md:30) defines the clean removal of deprecated legacy interfaces once all call sites are migrated. Addy handles this implicitly without a dedicated card.
- **sequencing note:** Final step in expand-contract-migrate; follows Migrate.
- **needs decision:** yes
- **decision:** D-623

### phase-cleanup

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Cleanup` | `Phase D4: Cleanup` |
| **card** | — | [cleanup](../concepts/matt/cleanup.md) | [phase-d4-cleanup](../concepts/rjm/phase-d4-cleanup.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:engineering` | `rjm:review` |
| **produces** | — | A clean working directory stripped of temporary log statements and prototypes, with the root-cause hypothesis documented in the commit message. | Updated dependent ADRs, updated CLAUDE.md files, session log entries, and ADR Deletion Complete summary report. |
| **consumes** | — | A verified code fix, passing regression test, and any temporary debugging instrumentation or test fixtures. | Action determinations from Phase D3, list of referencing files, and repository configuration paths. |
| **impl status** | — | clean | clean |

- **class:** HOMONYM
- **difference:** Matt Cleanup (skills/diagnosing-bugs/SKILL.md:135) removes temporary debugging instrumentation after a bug fix. RJM Phase D4: Cleanup (.claude/skills/review/SKILL.md:195) removes obsolete dead code after deletion detection.
- **sequencing note:** Matt executes at end of bug diagnosis; RJM executes at end of deletion review.
- **needs decision:** yes
- **decision:** D-110

## 4. SDLC, Meta & Orchestration Frameworks

### meta-sdlc

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SDLC` | `phase` | `autonomous development session` |
| **card** | [sdlc](../concepts/addy/sdlc.md) | [phase](../concepts/matt/phase.md) | [autonomous-development-session](../concepts/rjm/autonomous-development-session.md) |
| **kind** | phase | phase | phase |
| **phase** | `cross-phase` | `cross-phase` | `cross-phase` |
| **produces** | Delivered, verified, and operated production software changes. | A completed lifecycle milestone (an aligned concept, a spec, a test suite, an implementation, a review) | Multiple shipped pull requests, session logs, scratchpads, and retrospectives. |
| **consumes** | Software product ideas, feature requests, or bug reports. | A goal, ticket, or problem statement to be addressed within an engineering session | Target repository URL, target assignee, and target PR count parameter. |
| **impl status** | clean | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Addy SDLC (skills/spec-driven-development/SKILL.md:14), Matt phase (skills/work-in-phases/SKILL.md:12), and RJM autonomous-development-session (.claude/skills/autonomous-dev/SKILL.md:1) all describe the overarching concept of a phased software development lifecycle.
- **sequencing note:** Macro container for all lifecycle phases.
- **needs decision:** yes
- **decision:** D-111

### meta-phase-routing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Meta phase` | `productivity` | — |
| **card** | [meta-phase](../concepts/addy/meta-phase.md) | [productivity](../concepts/matt/productivity.md) | — |
| **kind** | phase | phase | — |
| **phase** | `addy:Meta` | `matt:productivity` | — |
| **produces** | Selection of relevant engineering skills and routing into appropriate lifecycle phases. | Handoff summaries, interactive interviews, plain-English explanations, and questionnaires. | — |
| **consumes** | Incoming user request, ambiguous task goals, or unconfigured interaction session. | Conversation context, developer prompts, architectural plans, and teaching materials. | — |
| **impl status** | defects: doc-drift, orphan | clean | — |

- **class:** PARTIAL
- **difference:** Addy Meta phase (external/index.md:25) classifies skill discovery and phase routing; Matt productivity (skills/productivity/SKILL.md:5) encompasses workflow assistance and handoffs. RJM has no standalone meta-phase card.
- **sequencing note:** Pre-session and cross-phase routing.
- **needs decision:** yes
- **decision:** D-112

### framework-engineering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `engineering` | — |
| **card** | — | [engineering](../concepts/matt/engineering.md) | — |
| **kind** | — | phase | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Production code, specifications, regression tests, architecture decisions, and code reviews. | — |
| **consumes** | — | Codebase context, repository configuration, issue trackers, and implementation requests. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt engineering (skills/engineering/SKILL.md:5) is Matt's top-level container for all implementation, spec, review, and refactoring skills. Addy and RJM structure these directly as distinct lifecycle phases.
- **sequencing note:** Top-level domain in Matt's taxonomy.
- **needs decision:** yes
- **decision:** D-113

### framework-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `triage` | — |
| **card** | — | [triage](../concepts/matt/triage.md) | — |
| **kind** | — | phase | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Triage label updates, verification assessments, AI disclaimer comments, and agent-ready implementation briefs. | — |
| **consumes** | — | Incoming issues, bug reports, and external pull requests from the configured issue tracker, plus triage label vocabulary from `docs/agents/triage-labels.md`. | — |
| **impl status** | — | defects: missing-path, other (references non-existent `commands/setup-matt-pocock-skills.md`; depends on remote label creation that setup does not perform automatically). | — |

- **class:** UNIQUE
- **difference:** Matt triage (skills/triage/SKILL.md:10) provides issue tracker intake, bug verification, and AI label management. Addy and RJM do not include an issue-intake phase card in their lifecycle scope.
- **sequencing note:** Pre-spec intake phase.
- **needs decision:** yes
- **decision:** D-114

### framework-exploit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `exploit` | — |
| **card** | — | [exploit](../concepts/matt/exploit.md) | — |
| **kind** | — | phase | — |
| **phase** | — | `none` | — |
| **produces** | — | Structured narrative article or progressive beat sequence. | — |
| **consumes** | — | Fixed input pile of raw fragments, transcripts, or notes produced during exploratory ideation. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt exploit (skills/exploit/SKILL.md:8) structures raw conversational fragments into a progressive narrative beat sequence. Unique to Matt's conversational drafting workflow.
- **sequencing note:** Follows explore in Matt's drafting sequence.
- **needs decision:** no
- **decision:** —

## 5. Sliced Work & Task Breakdown Sub-phases

### workflow-phase-0-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Phase 0: Scope Check"` | — | `Phase 0: Recon the target` |
| **card** | [phase-0-scope-check](../concepts/addy/phase-0-scope-check.md) | — | [phase-0-recon-the-target](../concepts/rjm/phase-0-recon-the-target.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Define` | — | `rjm:autoplan` |
| **produces** | Capability map with stable module IDs and acyclic dependency order. | — | Detected language, build command, test command, conventions, and active contribution gates. |
| **consumes** | Requirements that potentially bundle multiple independently testable capabilities. | — | Target repository files (CONTRIBUTING*, AGENTS.md/CLAUDE.md, build manifests, directory layout). |
| **impl status** | defects: doc-drift | — | clean |

- **class:** SYNONYM
- **difference:** Addy Phase 0: Scope Check (skills/spec-driven-development/SKILL.md:32) validates whether requirements bundle multiple modules; RJM Phase 0: Recon the target (.claude/commands/autoplan.md:22) maps repository context before planning.
- **sequencing note:** Initial step in specification/planning breakdown.
- **needs decision:** yes
- **decision:** D-115

### workflow-phase-0-homonym

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Phase 0` | — | `Phase 0` |
| **card** | [phase-0](../concepts/addy/phase-0.md) | — | [phase-0](../concepts/rjm/phase-0.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Define` | — | `rjm:review` |
| **produces** | An approved capability map containing module IDs, responsibilities, dependencies, and build order | — | Historical context, related prior art, and background problem evidence. |
| **consumes** | User requests bundling multiple independently testable features or architectural capabilities | — | Issue trackers, git logs, pull request history, and repository memory stores. |
| **impl status** | clean | — | defects: doc-drift, missing-path |

- **class:** HOMONYM
- **difference:** Addy Phase 0 (skills/spec-driven-development/SKILL.md:28) is a scope-check gate in specification. RJM Phase 0 (.claude/skills/review/SKILL.md:18) is a related work research and architectural history check in the review phase.
- **sequencing note:** Addy executes in Define; RJM executes in Review.
- **needs decision:** yes
- **decision:** D-116

### workflow-phase-1-specify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Phase 1: Specify"` | — | `PRD to Spec` |
| **card** | [phase-1-specify](../concepts/addy/phase-1-specify.md) | — | [prd-to-spec](../concepts/rjm/prd-to-spec.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Define` | — | `rjm:spec` |
| **produces** | A validated specification document covering six core areas and reframed success criteria. | — | `.agents/specs/requirements/REQ-NNN-*.md`, `DESIGN-NNN-*.md`, `TASK-NNN-*.md`. |
| **consumes** | High-level feature vision, user stories, surfaced assumptions, and human clarification. | — | Structured PRD produced during the Grill Me phase after resolving open interview questions. |
| **impl status** | defects: doc-drift | — | clean |

- **class:** SYNONYM
- **difference:** Addy Phase 1: Specify (skills/spec-driven-development/SKILL.md:40) drafts a six-area specification; RJM PRD to Spec (.claude/commands/spec.md:52) transforms product requirements into technical specifications.
- **sequencing note:** Core specification drafting step.
- **needs decision:** yes
- **decision:** D-117

### workflow-phase-2-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Phase 2: Plan"` | — | `/1-plan` |
| **card** | [phase-2-plan](../concepts/addy/phase-2-plan.md) | — | [1-plan](../concepts/rjm/1-plan.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Define` | — | `none` |
| **produces** | Technical implementation plan saved to `tasks/plan.md`. | — | Combined requirements and execution plan. |
| **consumes** | Validated specification document (`SPEC-<module>.md`). | — | Problem statements, issues, or initialized session context. |
| **impl status** | defects: doc-drift | — | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy Phase 2: Plan (skills/spec-driven-development/SKILL.md:52) produces tasks/plan.md; RJM 1-plan (.claude/commands/work.md:30) initiates the plan step of the sequential work cycle.
- **sequencing note:** Follows specification; produces technical task plan.
- **needs decision:** yes
- **decision:** D-118

### workflow-phase-3-tasks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Phase 3: Tasks"` | — | `Kanban` |
| **card** | [phase-3-tasks](../concepts/addy/phase-3-tasks.md) | — | [kanban](../concepts/rjm/kanban.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Define` | — | `rjm:plan` |
| **produces** | Ordered task breakdown list with acceptance criteria and verification commands saved to `tasks/todo.md`. | — | Versioned execution plan artifact with milestones, dependency ordering, risk register, and S/M/L sizing. |
| **consumes** | Validated technical implementation plan (`tasks/plan.md`). | — | Specification files (`REQ-NNN-*.md`, `DESIGN-NNN-*.md`, `TASK-NNN-*.md`) from the spec phase. |
| **impl status** | defects: doc-drift | — | clean |

- **class:** SYNONYM
- **difference:** Addy Phase 3: Tasks (skills/spec-driven-development/SKILL.md:64) generates tasks/todo.md checklist; RJM Kanban (.claude/commands/plan.md:120) produces the task board.
- **sequencing note:** Final step of planning; precedes implementation.
- **needs decision:** yes
- **decision:** D-119

### workflow-phase-4-implement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Phase 4: Implement"` | — | `/2-impl` |
| **card** | [phase-4-implement](../concepts/addy/phase-4-implement.md) | — | [2-impl](../concepts/rjm/2-impl.md) |
| **kind** | phase | — | phase |
| **phase** | `addy:Build` | — | `none` |
| **produces** | Implemented, working, and verified source code accompanied by passing test suites. | — | Implemented code changes and commit history. |
| **consumes** | Ordered task checklist (`tasks/todo.md`), relevant spec sections, and tests. | — | Decomposed tasks or plan steps from legacy planning. |
| **impl status** | defects: doc-drift | — | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy Phase 4: Implement (skills/spec-driven-development/SKILL.md:76) executes code against tasks/todo.md; RJM 2-impl (.claude/commands/work.md:45) executes the implementation step.
- **sequencing note:** Core code construction step.
- **needs decision:** yes
- **decision:** D-120

## 6. Diagnostic & Bug Investigation Phases

### diagnosing-phase-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Phase 1` | `Phase 1: Test Strategy` |
| **card** | — | [phase-1](../concepts/matt/phase-1.md) | [phase-1-test-strategy](../concepts/rjm/phase-1-test-strategy.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:diagnosing-bugs` | `rjm:test` |
| **produces** | — | A tight, deterministic, automated command that fails on the bug and succeeds when fixed. | Test strategy document saved to `.agents/qa/NNN-[feature]-test-strategy.md`. |
| **consumes** | — | A defect report, observed symptom, or failing scenario. | Feature requirements, PRD, or roadmap items prior to coding. |
| **impl status** | — | clean | defects: missing-path |

- **class:** PARTIAL
- **difference:** Matt Phase 1 (skills/diagnosing-bugs/SKILL.md:25) requires creating a deterministic red-capable automated command proving the defect. RJM Phase 1: Test Strategy (.claude/commands/test.md:34) designs the test strategy.
- **sequencing note:** Initial phase in defect diagnosis and test generation.
- **needs decision:** yes
- **decision:** D-121

### diagnosing-phase-2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Phase 2` | `Establish Baseline` |
| **card** | — | [phase-2](../concepts/matt/phase-2.md) | [establish-baseline](../concepts/rjm/establish-baseline.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:diagnosing-bugs` | `rjm:test` |
| **produces** | — | A minimised reproduction case where every remaining element is verified as load-bearing. | Quantified steady-state baseline document establishing normal operating metrics and green/yellow/red tolerance thresholds. |
| **consumes** | — | A validated, red-capable command from Phase 1. | 7 to 30 days of historical operational telemetry (throughput, error rates, latency percentiles, resource utilization). |
| **impl status** | — | clean | defects: doc-drift, exit-code-mismatch |

- **class:** PARTIAL
- **difference:** Matt Phase 2 (skills/diagnosing-bugs/SKILL.md:48) minimizes reproduction steps to load-bearing elements. RJM Establish Baseline (.claude/commands/test.md:62) establishes verified baseline test measurements.
- **sequencing note:** Second step in diagnostic isolation.
- **needs decision:** yes
- **decision:** D-122

### diagnosing-phase-3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Phase 3` | `Form Hypothesis` |
| **card** | — | [phase-3](../concepts/matt/phase-3.md) | [form-hypothesis](../concepts/rjm/form-hypothesis.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:diagnosing-bugs` | `rjm:test` |
| **produces** | — | A minimised reproduction where every remaining element is verified as load-bearing, and a ranked list of 3–5 falsifiable hypotheses. | Falsifiable hypothesis statement defining expected behavior and recovery timeframes under specific failure modes. |
| **consumes** | — | A confirmed reproducible defect signal and a red-capable command from Phase 2. | Steady-state baseline metrics and system architectural understanding of resilience mechanisms. |
| **impl status** | — | clean | defects: doc-drift, exit-code-mismatch |

- **class:** SYNONYM
- **difference:** Matt Phase 3 (skills/diagnosing-bugs/SKILL.md:70) produces 3–5 ranked falsifiable hypotheses. RJM Form Hypothesis (.claude/commands/test.md:88) formulates hypotheses for unexpected test behavior.
- **sequencing note:** Hypothesis generation prior to probing.
- **needs decision:** yes
- **decision:** D-123

### diagnosing-phase-4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Phase 4` | `Diagnosis` |
| **card** | — | [phase-4](../concepts/matt/phase-4.md) | [diagnosis](../concepts/rjm/diagnosis.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:diagnosing-bugs` | `cross-phase` |
| **produces** | — | Targeted diagnostic probes and debug logs verifying or falsifying candidate hypotheses one variable at a time. | Prioritized diagnostic findings categorized by operational impact. |
| **consumes** | — | A minimized reproduction case and 3–5 ranked hypotheses with falsifiable predictions from Phase 3. | Causal insights, failure modes, and success patterns from Phase 1. |
| **impl status** | — | clean | defects: missing-path, internal-contradiction, orphan |

- **class:** SYNONYM
- **difference:** Matt Phase 4 (skills/diagnosing-bugs/SKILL.md:92) runs targeted probes to test one hypothesis variable at a time. RJM Diagnosis (.claude/commands/test.md:112) runs diagnostic probes against failing systems.
- **sequencing note:** Diagnostic probing step.
- **needs decision:** yes
- **decision:** D-124

### diagnosing-phase-5

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Phase 5` | `Phase 3: Run the Drift Gates Locally Before Pushing` |
| **card** | — | [phase-5](../concepts/matt/phase-5.md) | [phase-3-run-the-drift-gates-locally-before-pushing](../concepts/rjm/phase-3-run-the-drift-gates-locally-before-pushing.md) |
| **kind** | — | phase | phase |
| **phase** | — | `matt:diagnosing-bugs` | `rjm:verify` |
| **produces** | — | A verified fix, a regression test at the correct seam (or documented absence of one), removed instrumentation, and a descriptive commit message. | Validation verdicts across the 7 drift gates (agent templates, pipeline staleness, lib mirrors, etc.). |
| **consumes** | — | A confirmed hypothesis prediction from Phase 4 isolating the true root cause. | Regenerated repository working tree, pre-push git hooks. |
| **impl status** | — | clean | defects: unfailable-gate, doc-drift |

- **class:** PARTIAL
- **difference:** Matt Phase 5 (skills/diagnosing-bugs/SKILL.md:115) verifies the fix and regression test at the proper seam. RJM Phase 3 (.claude/commands/verify.md:42) runs local drift gates before push.
- **sequencing note:** Verification and remediation completion.
- **needs decision:** yes
- **decision:** D-125

## 7. RJM Specific & Sub-phase Workflows

### rjm-0-init

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `/0-init` |
| **card** | — | — | [0-init](../concepts/rjm/0-init.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Initialized development session environment. |
| **consumes** | — | — | Fresh agent session context or new feature request. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/workflow-commands.md:212). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

### rjm-3-qa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `/3-qa` |
| **card** | — | — | [3-qa](../concepts/rjm/3-qa.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Quality assurance verification verdict. |
| **consumes** | — | — | Implemented code changes and unit test suites. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/workflow-commands.md:215). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

### rjm-4-security

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `/4-security` |
| **card** | — | — | [4-security](../concepts/rjm/4-security.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Security validation verdict. |
| **consumes** | — | — | Tested code changes and security configurations. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/workflow-commands.md:216). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

### rjm-act

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ACT` |
| **card** | — | — | [act](../concepts/rjm/act.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Implementation changes, code edits, test execution evidence, or local workflow test results. |
| **consumes** | — | — | Decided courses of action, execution plans, verified lease ownership, or workflow configurations. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:91). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-action-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Action Phase` |
| **card** | — | — | [action-phase](../concepts/rjm/action-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Newly created GitHub issue tracking the concrete implementation work. |
| **consumes** | — | — | Identified technical gaps or proposed architectural improvements from the research analysis. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/research.md:51). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-active

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Active` |
| **card** | — | — | [active](../concepts/rjm/active.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Operational skills and agents actively discoverable, recommended, and invoked across execution workflows. |
| **consumes** | — | — | Validated skill files passing quality gates, or approved agent definitions passing steering committee review. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/archive/planning/PRD-skills-index-registry.md:148). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-alerting

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ALERTING` |
| **card** | — | — | [alerting](../concepts/rjm/alerting.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Burn rate alerting rules and multi-window alert logic separating pages from tickets. |
| **consumes** | — | — | Calculated error budgets and operational escalation procedures. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/slo-designer/SKILL.md:119). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-analysis-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analysis Phase` |
| **card** | — | — | [analysis-phase](../concepts/rjm/analysis-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Long-form structured document (3,000–5,000 words) persisted under `.agents/analysis/`. |
| **consumes** | — | — | Gathered research findings and raw web data from the Research Phase. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/research.md:48). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-analyze-map-the-zone

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyze, Map the Zone` |
| **card** | — | — | [analyze-map-the-zone](../concepts/rjm/analyze-map-the-zone.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | Structured analytical assessment mapping ZOPA overlap, BATNA strengths, information asymmetry, and dollar-quantified value gaps. |
| **consumes** | — | — | Extracted offer terms and decoded signals from Step 1. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/negotiation.md:80). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:support.
- **needs decision:** no
- **decision:** —

## 7.4 RJM Test & Verification Sub-phases

### rjm-analyze-results

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyze Results` |
| **card** | — | — | [analyze-results](../concepts/rjm/analyze-results.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Formal analysis document with experiment verdict (VALIDATED, INVALIDATED, INCONCLUSIVE) and prioritized action items. |
| **consumes** | — | — | Observation logs, telemetry timeseries data, and the original hypothesis statement. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/chaos-experiment/SKILL.md:224). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:test.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-applicability-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Applicability Phase` |
| **card** | — | — | [applicability-phase](../concepts/rjm/applicability-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Concrete mapping of integration points, affected components, and feasibility assessments. |
| **consumes** | — | — | Completed analysis document and codebase architecture specifications. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/research.md:49). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Assessment` |
| **card** | — | — | [assessment](../concepts/rjm/assessment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | `assessment.json` containing enumerated files, extracted public symbols, and doc-to-source file mappings. |
| **consumes** | — | — | Target repository filesystem, source code files, and documentation trees. |
| **impl status** | — | — | defects: script-bug, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:7). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-build-cva-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Build CVA Matrix` |
| **card** | — | — | [build-cva-matrix](../concepts/rjm/build-cva-matrix.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Visual CVA Markdown table showing concrete cell values and relationship structures. |
| **consumes** | — | — | Identified commonalities (rows) and variabilities across use cases (columns). |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/references/SKILL_SPEC.md:219). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-challenge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Challenge` |
| **card** | — | — | [challenge](../concepts/rjm/challenge.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Contrarian perspectives, steel-manned counterarguments, alternative problem framings, and inverted failure mode analysis. |
| **consumes** | — | — | Decomposed structural elements (claims, assumptions, constraints, judgments) and factored verification results. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py) |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:19). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-claim-extraction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Claim Extraction` |
| **card** | — | — | [claim-extraction](../concepts/rjm/claim-extraction.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | `claims.json` capturing code examples, method signatures, behavioral claims, and quantitative statements. |
| **consumes** | — | — | Documentation Markdown files and Phase 1 assessment symbol metadata. |
| **impl status** | — | — | defects: script-bug, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:8). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-classify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Classify` |
| **card** | — | — | [classify](../concepts/rjm/classify.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Categorized entity, severity level, strategic alignment score, or decision bucket. |
| **consumes** | — | — | Raw inputs, capabilities, PR metadata, issue records, or dependency scan findings. |
| **impl status** | — | — | defects: orphan, script-bug, exit-code-mismatch, doc-drift, missing-doc |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.4 RJM Test & Verification Sub-phases

### rjm-classify-pr-type

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Classify PR Type` |
| **card** | — | — | [classify-pr-type](../concepts/rjm/classify-pr-type.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | A PR type classification (e.g., core logic, documentation, test suite, refactor) gating subsequent test dimensions. |
| **consumes** | — | — | Git diff file listing comparing HEAD against the target base branch (`origin/<base-branch>` or `main`). |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/test.md:25). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:test.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-close-the-retrospective

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Close the Retrospective` |
| **card** | — | — | [close-the-retrospective](../concepts/rjm/close-the-retrospective.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Retrospective self-assessment (+/Delta, ROTI ratings, Helped/Hindered reflections), prioritized delta triage items, and GitHub issue action items. |
| **consumes** | — | — | Completed retrospective analysis from Phase 5 (Learnings & Memory Extraction), including identified root causes and proposed improvements. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:115). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-command

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Command` |
| **card** | — | — | [command](../concepts/rjm/command.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Bidirectional remote control channels allowing adversaries to instruct compromised nodes. |
| **consumes** | — | — | Installed persistence implants and outbound network channels. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:38). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-company-building

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Company Building` |
| **card** | — | — | [company-building](../concepts/rjm/company-building.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formal departmental organizational structures and operational scaling processes. |
| **consumes** | — | — | A validated, repeatable business model and established customer creation engine. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/references/four-steps.md:23). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-compilability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Compilability` |
| **card** | — | — | [compilability](../concepts/rjm/compilability.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | `compilability-findings.json` containing detected compilability and symbol resolution defects. |
| **consumes** | — | — | `assessment.json` source symbol index and `claims.json` extracted claims. |
| **impl status** | — | — | defects: script-bug, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/scripts/doc_accuracy.py:9). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.10 RJM Session Lifecycle Sub-phases

### rjm-context-retrieval

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Context Retrieval` |
| **card** | — | — | [context-retrieval](../concepts/rjm/context-retrieval.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-start` |
| **produces** | — | — | Active agent context loaded with HANDOFF.md content and relevant prior session summaries. |
| **consumes** | — | — | Session start initialization artifacts and repository state. |
| **impl status** | — | — | defects: missing-path, unfailable-gate, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:37). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-start.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-customer-creation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Customer Creation` |
| **card** | — | — | [customer-creation](../concepts/rjm/customer-creation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Large-scale customer demand generation and systematic marketing-driven customer acquisition. |
| **consumes** | — | — | A repeatable, scalable sales motion proven on real strangers during Customer Validation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/references/four-steps.md:23). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-customer-discovery

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Customer Discovery` |
| **card** | — | — | [customer-discovery](../concepts/rjm/customer-discovery.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Interview qualitative findings confirming or invalidating whether the target customer problem is real and severe. |
| **consumes** | — | — | Hypothesized customer profiles, problem statements, and current alternative costs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/references/four-steps.md:37). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-customer-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Customer Validation` |
| **card** | — | — | [customer-validation](../concepts/rjm/customer-validation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Signed orders, paid pilots from strangers, refined sales roadmap, and verified purchase intent. |
| **consumes** | — | — | Validated customer problem, rough solution prototype or pilot offering, and initial sales script. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/references/four-steps.md:44). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-d1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `D1` |
| **card** | — | — | [d1](../concepts/rjm/d1.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Identification of deleted ADR paths and change classification. |
| **consumes** | — | — | Git status, file modification triggers, or detect_adr_changes.py output. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/SKILL.md:108). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-d2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `D2` |
| **card** | — | — | [d2](../concepts/rjm/d2.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Dependency graph of downstream files and components impacted by the ADR removal. |
| **consumes** | — | — | Deleted ADR identifier and repository references across code, tests, and documentation. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/SKILL.md:109). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-d3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `D3` |
| **card** | — | — | [d3](../concepts/rjm/d3.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Decision to move the ADR to an archive directory or mark it deprecated/superseded. |
| **consumes** | — | — | Status metadata and historical value of the deleted ADR. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/SKILL.md:110). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-d4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `D4` |
| **card** | — | — | [d4](../concepts/rjm/d4.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Updated documentation, code comments, and ADR indexes with repaired or removed references. |
| **consumes** | — | — | Dependency list identified in D2 and archival updates from D3. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/SKILL.md:111). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-data-gathering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Gathering` |
| **card** | — | — | [data-gathering](../concepts/rjm/data-gathering.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Objective execution timelines, reconstructed events, and categorized outcome records. |
| **consumes** | — | — | Raw session logs, git histories, terminal commands, PR review comments, and tool invocation traces. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:74). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-decide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decide` |
| **card** | — | — | [decide](../concepts/rjm/decide.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Actionable decisions, Architecture Decision Records (ADRs), execution commitments, worktree prune verdicts. |
| **consumes** | — | — | Evaluated options, trade-off analyses, synthesized models, risk assessments, benchmark metrics. |
| **impl status** | — | — | defects: missing-path, doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/strategy-ooda-loop.md:19). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-decide-what-to-do

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decide What to Do` |
| **card** | — | — | [decide-what-to-do](../concepts/rjm/decide-what-to-do.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Classified, SMART-validated, and dependency-ordered action plans. |
| **consumes** | — | — | Prioritized diagnostic findings from Phase 2 (Diagnosis). |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:93). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-decomposition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decomposition` |
| **card** | — | — | [decomposition](../concepts/rjm/decomposition.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Decomposed structural elements with stable identifiers: Claims (C1..Cn), Assumptions (A1..An), Constraints (K1..Kn), and Judgments (J1..Jn). |
| **consumes** | — | — | Raw decision statement, context narrative, architectural proposal, or plan. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py) |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md:19). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-deep-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deep Analysis` |
| **card** | — | — | [deep-analysis](../concepts/rjm/deep-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Concrete file-and-line citations, evidence findings, confirmed or refuted hypotheses. |
| **consumes** | — | — | Hypotheses, target file lists, and inspection questions from Step 3. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/DEVELOPMENT.md:31). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:analyze.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-define

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DEFINE` |
| **card** | — | — | [define](../concepts/rjm/define.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Functional specification, PRD, CVA matrix, and testable acceptance criteria. |
| **consumes** | — | — | User automation request, problem statement, or feature idea. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (README.md:306). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-deliver

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deliver` |
| **card** | — | — | [deliver](../concepts/rjm/deliver.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Transmission of malicious payloads across trust boundaries into target environments. |
| **consumes** | — | — | Weaponized payloads and transmission mediums (email, web forms, API inputs). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:35). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-depth-selection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Depth Selection` |
| **card** | — | — | [depth-selection](../concepts/rjm/depth-selection.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Depth tier selection (Quick, Standard, or Deep) establishing subsequent time-boxes and artifact deliverables. |
| **consumes** | — | — | Decision budget estimate ($), strategic impact level (low/medium/high), and reversibility classification. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:48). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:plan.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-design-counter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design, Counter` |
| **card** | — | — | [design-counter](../concepts/rjm/design-counter.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | Strategic counter-proposal structure formatted through Perception, Context, and Permission lenses. |
| **consumes** | — | — | Mapped ZOPA, BATNA, and quantified value gaps from Step 2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/negotiation.md:105). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:support.
- **needs decision:** no
- **decision:** —

## 7.4 RJM Test & Verification Sub-phases

### rjm-design-injection-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Injection Plan` |
| **card** | — | — | [design-injection-plan](../concepts/rjm/design-injection-plan.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Detailed failure injection plan specifying tool commands, execution duration, blast radius controls, and verified rollback steps. |
| **consumes** | — | — | Falsifiable hypothesis, target infrastructure topology, and operational safety boundaries. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/chaos-experiment/SKILL.md:147). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:test.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-detection-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DETECTION PHASE` |
| **card** | — | — | [detection-phase](../concepts/rjm/detection-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:Code Quality` |
| **produces** | — | — | Survey findings, candidate incoherences, deep-dive verification results, and an Incoherence Report. |
| **consumes** | — | — | Repository files, top-level orientation context, and selected abstract consistency dimensions. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (scripts/incoherence.py:12). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:Code Quality.
- **needs decision:** no
- **decision:** —

### rjm-directory-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Directory Analysis` |
| **card** | — | — | [directory-analysis](../concepts/rjm/directory-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Ownership classifications based on directory path patterns such as `node_modules`, `.venv`, `vendor`, or `.gitmodules`. |
| **consumes** | — | — | Resolved target filesystem paths and directory hierarchy. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analysis-provenance/SKILL.md:65). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-discovery

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Discovery` |
| **card** | — | — | [discovery](../concepts/rjm/discovery.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Inventory of discovered domains, skills, user journeys, or market opportunities. |
| **consumes** | — | — | Target repository, file trees, domain definitions, and customer/system problem spaces. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/quality-auditor.md:57). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-discovery-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Discovery & Analysis` |
| **card** | — | — | [discovery-analysis](../concepts/rjm/discovery-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Analysis document (`.agents/analysis/slashcommand-[name]-analysis.md`) with recommendation. |
| **consumes** | — | — | User intent, prompt repetition evidence, existing command catalog. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/slashcommandcreator/SKILL.md:29). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-documentation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation` |
| **card** | — | — | [documentation](../concepts/rjm/documentation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Updated SKILL.md files, technical documentation, usage examples, and finalized SLO specifications. |
| **consumes** | — | — | Completed code implementations, quality review findings, architectural decisions, and SLO definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/CLAUDE.md:119). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.10 RJM Session Lifecycle Sub-phases

### rjm-documentation-update

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation Update` |
| **card** | — | — | [documentation-update](../concepts/rjm/documentation-update.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-end` |
| **produces** | — | — | Updated HANDOFF.md and session log files documenting session changes and next steps. |
| **consumes** | — | — | Completed session work, modified files, handoff notes, and session state. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:40). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-end.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-draft

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Draft` |
| **card** | — | — | [draft](../concepts/rjm/draft.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Provisional skill registrations awaiting validation gates. |
| **consumes** | — | — | Newly authored skill files and provisional index entries. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/archive/planning/PRD-skills-index-registry.md:147). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-evaluate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evaluate` |
| **card** | — | — | [evaluate](../concepts/rjm/evaluate.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Weighted decision scores, confidence intervals, validation reports, or exit code determinations. |
| **consumes** | — | — | Analyzed data, candidate options, extracted threads, repository states, or candidate PR metadata. |
| **impl status** | — | — | defects: doc-drift, missing-path, orphan, exit-code-mismatch, missing-doc |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-evolution-and-architecture-selection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evolution and Architecture Selection` |
| **card** | — | — | [evolution-and-architecture-selection](../concepts/rjm/evolution-and-architecture-selection.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architecture pattern selection and temporal timelessness score. |
| **consumes** | — | — | Draft skill specification, projected capability lifetime, and task complexity metrics. |
| **impl status** | — | — | defects: doc-drift, missing-path, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/SKILL.md:200). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.4 RJM Test & Verification Sub-phases

### rjm-execute-experiment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Execute Experiment` |
| **card** | — | — | [execute-experiment](../concepts/rjm/execute-experiment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Timestamped execution observation log recording metric movements, system alerts, and recovery events. |
| **consumes** | — | — | Approved injection plan, tested rollback procedures, stakeholder notification, and active monitoring dashboards. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/chaos-experiment/SKILL.md:184). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:test.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-exploit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exploit` |
| **card** | — | — | [exploit](../concepts/rjm/exploit.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Unauthorized code execution, memory corruption, or privilege compromise on target systems. |
| **consumes** | — | — | Delivered payloads and unmitigated software vulnerabilities. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:36). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-exploration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exploration` |
| **card** | — | — | [exploration](../concepts/rjm/exploration.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Initial structural survey, file listings, dependency map, and potential problem areas. |
| **consumes** | — | — | Target repository, analysis scope prompt. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/DEVELOPMENT.md:28). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:analyze.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-file-header-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `File Header Analysis` |
| **card** | — | — | [file-header-analysis](../concepts/rjm/file-header-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Attribution signals identifying generator signatures, "DO NOT EDIT" notices, or third-party copyrights. |
| **consumes** | — | — | The first 20 lines of the target file's content. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analysis-provenance/SKILL.md:67). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-focus-selection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Focus Selection` |
| **card** | — | — | [focus-selection](../concepts/rjm/focus-selection.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Prioritized candidate areas classified by analysis dimensions (architecture, security, quality). |
| **consumes** | — | — | Exploration phase findings, architectural signals. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/DEVELOPMENT.md:29). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:analyze.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-generate-insights

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generate Insights` |
| **card** | — | — | [generate-insights](../concepts/rjm/generate-insights.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Root cause hypotheses, driving/restraining force mappings, and categorized insight matrices. |
| **consumes** | — | — | Objective timelines and classified outcomes from Phase 0 (Data Gathering). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:79). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.10 RJM Session Lifecycle Sub-phases

### rjm-git-operations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git Operations` |
| **card** | — | — | [git-operations](../concepts/rjm/git-operations.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-end` |
| **produces** | — | — | A clean git commit and updated repository commit log. |
| **consumes** | — | — | Staged files, validated code, passing quality and QA checks. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:43). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-end.
- **needs decision:** no
- **decision:** —

### rjm-git-state-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git State Verification` |
| **card** | — | — | [git-state-verification](../concepts/rjm/git-state-verification.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-start` |
| **produces** | — | — | Documented git status (branch, clean worktree, HEAD commit SHA) recorded in the session log. |
| **consumes** | — | — | Working repository tree and git status/branch inspection outputs. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:39). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-start.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-gotomarket

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GoToMarket` |
| **card** | — | — | [gotomarket](../concepts/rjm/gotomarket.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Executable customer acquisition funnels, distribution channels, and sales pipeline mechanics. |
| **consumes** | — | — | A validated product offer, differentiated positioning, and established pricing model. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/SKILL.md:9). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-grading

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Grading` |
| **card** | — | — | [grading](../concepts/rjm/grading.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Computed domain quality scores, layer-specific evaluations, and identified quality gaps. |
| **consumes** | — | — | Discovered assets, file inventories, and grading rubrics from the discovery phase. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/quality-auditor.md:63). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-grill-me

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Grill Me` |
| **card** | — | — | [grill-me](../concepts/rjm/grill-me.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured PRD (Problem, User stories, Data model, Acceptance criteria). |
| **consumes** | — | — | Problem statement, user requests, and codebase context. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/getting-started.md:73). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-identify-commonalities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Identify Commonalities` |
| **card** | — | — | [identify-commonalities](../concepts/rjm/identify-commonalities.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | List of universal, invariant domain behaviors, steps, and data structures common to all use cases. |
| **consumes** | — | — | Multiple user stories, domain use cases, system requirements. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/references/SKILL_SPEC.md:170). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-identify-variabilities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Identify Variabilities` |
| **card** | — | — | [identify-variabilities](../concepts/rjm/identify-variabilities.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured inventory of variation points, variability dimensions, and difference parameters across use cases. |
| **consumes** | — | — | Established commonalities, use case variations, parameter differences, external dependency variations. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/references/SKILL_SPEC.md:194). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-implement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Implement` |
| **card** | — | — | [implement](../concepts/rjm/implement.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Committed code plus passing tests. |
| **consumes** | — | — | Execution plan artifact from the Kanban phase. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/getting-started.md:76). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-incident-response

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Incident response` |
| **card** | — | — | [incident-response](../concepts/rjm/incident-response.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Service mitigation actions, root cause analyses, and updated operational recovery procedures. |
| **consumes** | — | — | Operational alert notifications, telemetry data (logs and traces), and disaster recovery runbooks. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/chaos-experiment/references/chaos-engineering-principles.md:60). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-insights-generated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Insights Generated` |
| **card** | — | — | [insights-generated](../concepts/rjm/insights-generated.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Diagnostic outputs including Five Whys root cause, Fishbone analysis, and pattern classifications. |
| **consumes** | — | — | Phase 0 factual observations, execution traces, and debrief outputs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/references/learning-template.md:28). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-install

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Install` |
| **card** | — | — | [install](../concepts/rjm/install.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Persistent backdoors, modified system binaries, registry keys, or scheduled tasks. |
| **consumes** | — | — | Initial exploit execution access and host operating system services. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:37). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-investigation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation` |
| **card** | — | — | [investigation](../concepts/rjm/investigation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Code execution traces, identified failure mechanisms (e.g. null references, race conditions), prioritized hypotheses, and verification plans. |
| **consumes** | — | — | Confirmed reproduction steps, error logs, and codebase context from Problem Assessment. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/debug.md:38). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-investigation-planning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation Planning` |
| **card** | — | — | [investigation-planning](../concepts/rjm/investigation-planning.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Concrete investigation plan specifying exact target files, hypotheses, and inspection questions. |
| **consumes** | — | — | Selected focus areas and priority classifications from Step 2. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/DEVELOPMENT.md:30). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:analyze.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-learning-extraction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Learning Extraction` |
| **card** | — | — | [learning-extraction](../concepts/rjm/learning-extraction.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured learning records, atomicity scores, and formatted skillbook candidates. |
| **consumes** | — | — | Diagnosed patterns, action items, and root cause analyses. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:98). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-map-to-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Map to Patterns` |
| **card** | — | — | [map-to-patterns](../concepts/rjm/map-to-patterns.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Pattern mapping recommendations (Strategy, Abstract Factory, Bridge, or no abstraction) supported by structural rationale. |
| **consumes** | — | — | Completed CVA matrix with row and column variability scores. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/references/SKILL_SPEC.md:245). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-memory-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory Phase` |
| **card** | — | — | [memory-phase](../concepts/rjm/memory-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | High-level narrative memory in Serena and 5–10 granular, tagged atomic memories in Forgetful. |
| **consumes** | — | — | Applicability mappings and synthesized analysis conclusions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/research.md:50). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-milestone-execution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Milestone Execution` |
| **card** | — | — | [milestone-execution](../concepts/rjm/milestone-execution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Implemented code increments, passing tests, and updated progress tracking. |
| **consumes** | — | — | Approved milestones, task tracking lists, and dependency analysis. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, exit-code-mismatch, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/planner/scripts/executor.py:8). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:plan.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-orient

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orient` |
| **card** | — | — | [orient](../concepts/rjm/orient.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Contextual understanding, mental models, synthesized insights, risk assessments. |
| **consumes** | — | — | Raw observations, data, codebase state, telemetry signals, metrics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/strategy-ooda-loop.md:18). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-package-manifest-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Package Manifest Analysis` |
| **card** | — | — | [package-manifest-analysis](../concepts/rjm/package-manifest-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Ownership signals confirming whether a target file corresponds to a declared external dependency. |
| **consumes** | — | — | Target file paths and repository dependency manifests (`package.json`, `requirements.txt`, lockfiles). |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analysis-provenance/SKILL.md:66). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-persist-and-close

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Persist and Close` |
| **card** | — | — | [persist-and-close](../concepts/rjm/persist-and-close.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Persisted memory records, triaged GitHub issues/backlog items, and ROTI assessment. |
| **consumes** | — | — | Extracted learnings scoring >= 70% atomicity and retrospective performance data. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/references/learning-template.md:104). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-persuasion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Persuasion` |
| **card** | — | — | [persuasion](../concepts/rjm/persuasion.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Consensus alignment, reduced buyer hesitation, and finalized stakeholder commitments. |
| **consumes** | — | — | Identified buyer pain points, competitive differentiation, and active commercial opportunities. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/SKILL.md:9). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-0-data-gathering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0: Data Gathering` |
| **card** | — | — | [phase-0-data-gathering](../concepts/rjm/phase-0-data-gathering.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Factual session context, execution trace chronology, outcome classification, and work items. |
| **consumes** | — | — | Session logs under `.agents/sessions/`, git history, and GitHub PR/issue activity. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:227). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-0-load-the-settled-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0: Load the Settled Contract` |
| **card** | — | — | [phase-0-load-the-settled-contract](../concepts/rjm/phase-0-load-the-settled-contract.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Ground-truth baseline understanding of supported event formats, casing, and lifecycle differences. |
| **consumes** | — | — | `agent-harness-reference` official sidecar, hook specification documents, and platform contracts. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:27). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-0-related-work-research

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0: Related Work Research` |
| **card** | — | — | [phase-0-related-work-research](../concepts/rjm/phase-0-related-work-research.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Related work research report summarizing open/closed issues, active PRs, and implications for the ADR review. |
| **consumes** | — | — | Target ADR title, key topics, and GitHub repository history. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/debate-protocol.md:5). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-0-skill-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0 Skill Triage` |
| **card** | — | — | [phase-0-skill-triage](../concepts/rjm/phase-0-skill-triage.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Triage classification verdict (`USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, `COMPOSE`, or `CLARIFY`) and match confidence scores. |
| **consumes** | — | — | Raw user input (prompts, errors, code snippets, questions, URLs, or task descriptions) and indexed skill ecosystem metadata. |
| **impl status** | — | — | defects: doc-drift, script-bug, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/changelog.md:17). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-0-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0 triage` |
| **card** | — | — | [phase-0-triage](../concepts/rjm/phase-0-triage.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Routing decision (build, improve, reuse, or reject) and duplication assessment. |
| **consumes** | — | — | User prompts, skill requests, task descriptions, or foreign skill catalogs. |
| **impl status** | — | — | clean · defects: doc-drift, script-bug, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/external-skill-source-adaptation.md:5). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1` |
| **card** | — | — | [phase-1](../concepts/rjm/phase-1.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Independent review assessments or critical pre-merge security and error-handling fixes. |
| **consumes** | — | — | Pre-merge pull request changes or proposed Architecture Decision Records. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:28). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-assess-the-situation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Assess the Situation` |
| **card** | — | — | [phase-1-assess-the-situation](../concepts/rjm/phase-1-assess-the-situation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Identification of applicable workflow, clean status check, and a timestamped safety branch. |
| **consumes** | — | — | Repository working tree status, recent git log, and user workflow intent. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/git-advanced-workflows/SKILL.md:24). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-1-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Assessment` |
| **card** | — | — | [phase-1-assessment](../concepts/rjm/phase-1-assessment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | assessment.json mapping documentation files to implementation symbols. |
| **consumes** | — | — | Target repository documentation files and codebase source tree. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:67). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-phase-1-classify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Classify` |
| **card** | — | — | [phase-1-classify](../concepts/rjm/phase-1-classify.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:autoplan` |
| **produces** | — | — | Intent family classification and decision autonomy level (Mechanical, Taste, Sovereignty). |
| **consumes** | — | — | Reconnaissance signals from Phase 0 and raw user request text. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/autoplan/SKILL.md:92). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:autoplan.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-1-classify-the-source-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Classify the Source Hook` |
| **card** | — | — | [phase-1-classify-the-source-hook](../concepts/rjm/phase-1-classify-the-source-hook.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Classified hook inventory detailing event types, execution modes (direct vs observe), and output parsing expectations. |
| **consumes** | — | — | Canonical hook registrations from `.claude/settings.json`. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:55). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-deep-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Deep Analysis` |
| **card** | — | — | [phase-1-deep-analysis](../concepts/rjm/phase-1-deep-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deep analysis document (`references/PHASE1_ANALYSIS.md`) detailing explicit and implicit requirements, edge cases, and architectural choices. |
| **consumes** | — | — | Initial skill idea, user intent, domain documentation, and requirement prompts. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:1). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-discovery

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Discovery` |
| **card** | — | — | [phase-1-discovery](../concepts/rjm/phase-1-discovery.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Validated inventory of detected and specified domains to audit. |
| **consumes** | — | — | Repository structure and automated domain discovery via `grade_domains.py`. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/quality-auditor.shared.md:62). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-1-generate-insights

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Generate Insights` |
| **card** | — | — | [phase-1-generate-insights](../concepts/rjm/phase-1-generate-insights.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Causal insights from Five Whys, fishbone diagrams, force field analysis, and learning matrices. |
| **consumes** | — | — | Factual session evidence and execution traces gathered in Phase 0. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/SKILL.md:94). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-1-identify-commonalities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Identify Commonalities` |
| **card** | — | — | [phase-1-identify-commonalities](../concepts/rjm/phase-1-identify-commonalities.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Identified set of universal invariants and shared operations that are always true across all use cases. |
| **consumes** | — | — | Target domain requirements, multiple user stories or use case descriptions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/SKILL.md:66). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.8 RJM Reflection & Memory Sub-phases

### rjm-phase-1-identify-the-target-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Identify the Target Skill` |
| **card** | — | — | [phase-1-identify-the-target-skill](../concepts/rjm/phase-1-identify-the-target-skill.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Target skill identifier and resolved path (`.serena/memories/{skill-name}-observations.md`). |
| **consumes** | — | — | Current conversation context and existing memory files in `.serena/memories/`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/reflect/SKILL.md:59). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:reflect.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-1-insights-generated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Insights Generated` |
| **card** | — | — | [phase-1-insights-generated](../concepts/rjm/phase-1-insights-generated.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Causal insights from diagnostic frameworks such as Five Whys, fishbone analysis, and learning matrices. |
| **consumes** | — | — | Factual session evidence and execution traces gathered in Phase 0. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:230). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-1-know-the-seam-before-you-edit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Know the Seam Before You Edit` |
| **card** | — | — | [phase-1-know-the-seam-before-you-edit](../concepts/rjm/phase-1-know-the-seam-before-you-edit.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Correct identification of canonical source file and regenerating script. |
| **consumes** | — | — | Target file path planned for modification. |
| **impl status** | — | — | defects: unfailable-gate, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-generation-and-release/SKILL.md:40). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-1-pick-the-instrument

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Pick the instrument` |
| **card** | — | — | [phase-1-pick-the-instrument](../concepts/rjm/phase-1-pick-the-instrument.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A selected diagnostic instrument and its corresponding execution command. |
| **consumes** | — | — | A codebase concern, diagnostic question, or suspected anomaly. |
| **impl status** | — | — | defects: unfailable-gate, other |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:39). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-1-project-brief

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Project Brief` |
| **card** | — | — | [phase-1-project-brief](../concepts/rjm/phase-1-project-brief.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Shared project context document confirming common understanding among participants. |
| **consumes** | — | — | Project name, objectives, milestone schedule, team composition, key dependencies, and success criteria. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/pre-mortem/references/strategy-ooda-loop.md:32). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-1-research

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: RESEARCH` |
| **card** | — | — | [phase-1-research](../concepts/rjm/phase-1-research.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Verbatim quoted evidence, core principles, frameworks, examples, and failure modes. |
| **consumes** | — | — | Research parameters (TOPIC, CONTEXT, URLS) and prior knowledge stores. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/SKILL.md:91). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-research-and-context-gathering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Research and Context Gathering` |
| **card** | — | — | [phase-1-research-and-context-gathering](../concepts/rjm/phase-1-research-and-context-gathering.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Verbatim quotes, web search results, and synthesis requirements satisfying verification criteria. |
| **consumes** | — | — | Research topic, URLs, and project memories. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/references/workflow.md:19). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-1-scope-the-surface

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1: Scope the Surface` |
| **card** | — | — | [phase-1-scope-the-surface](../concepts/rjm/phase-1-scope-the-surface.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Attack surface inventory naming entry points (CLI argv, HTTP routes, env vars, file paths, tool params). |
| **consumes** | — | — | Changed code, diffs, or supplied code snippets. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/security-review/SKILL.md:69). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2` |
| **card** | — | — | [phase-2](../concepts/rjm/phase-2.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Consolidated consensus/conflict reports or QA test coverage expansions. |
| **consumes** | — | — | Individual agent reviews from Phase 1, or post-merge PR code. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:29). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-analysis-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: ANALYSIS DOCUMENT` |
| **card** | — | — | [phase-2-analysis-document](../concepts/rjm/phase-2-analysis-document.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A deep analysis document written to `.agents/analysis/{topic-slug}.md`. |
| **consumes** | — | — | Grounded research quotes and synthesis outputs from Phase 1. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/SKILL.md:97). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.8 RJM Reflection & Memory Sub-phases

### rjm-phase-2-analyze-the-conversation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Analyze the Conversation` |
| **card** | — | — | [phase-2-analyze-the-conversation](../concepts/rjm/phase-2-analyze-the-conversation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Categorized learning signals tagged by confidence level (HIGH, MED, LOW) meeting threshold criteria. |
| **consumes** | — | — | Complete session conversation transcript and signal detection patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/reflect/SKILL.md:72). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:reflect.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2-change-canonical-sources

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Change Canonical Sources` |
| **card** | — | — | [phase-2-change-canonical-sources](../concepts/rjm/phase-2-change-canonical-sources.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Updated canonical scripts and hook registrations under `.claude/hooks/` and `.claude/settings.json`. |
| **consumes** | — | — | Classified hook requirements and identified cross-harness contract differences. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:97). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-2-claim-extraction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Claim Extraction` |
| **card** | — | — | [phase-2-claim-extraction](../concepts/rjm/phase-2-claim-extraction.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | claims.json containing categorized claims (code-example, method-signature, behavioral, quantitative). |
| **consumes** | — | — | assessment.json and parsed documentation text blocks. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:68). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.11 RJM Executor Sub-phases

### rjm-phase-2-conflict-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Conflict Classification` |
| **card** | — | — | [phase-2-conflict-classification](../concepts/rjm/phase-2-conflict-classification.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | Triaged conflict inventory categorizing each file as auto-resolvable, rename-both, or manual resolution. |
| **consumes** | — | — | List of conflicted files identified during Phase 1 context gathering. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/merge-resolver.shared.md:56). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:executor.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-2-consolidation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Consolidation` |
| **card** | — | — | [phase-2-consolidation](../concepts/rjm/phase-2-consolidation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | List of consensus points, catalog of conflicting findings, flagged review anti-patterns requiring re-review, and consolidated change recommendations. |
| **consumes** | — | — | Completed structured reviews from the six Phase 1 review agents (architect, critic, independent-thinker, security, analyst, high-level-advisor). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/debate-protocol.md:116). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2-deep-analysis-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Deep Analysis Document` |
| **card** | — | — | [phase-2-deep-analysis-document](../concepts/rjm/phase-2-deep-analysis-document.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Comprehensive analysis document at `.agents/analysis/{topic-slug}.md` meeting word count and quality gates. |
| **consumes** | — | — | Verified Phase 1 research findings and structured synthesis. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/references/workflow.md:119). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-2-diagnosis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Diagnosis` |
| **card** | — | — | [phase-2-diagnosis](../concepts/rjm/phase-2-diagnosis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Structured diagnostic tables classifying successes, failures, and near misses with atomicity scores. |
| **consumes** | — | — | Insights, patterns, and root-cause findings produced in Phase 1. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:236). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2-execute-the-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Execute the Workflow` |
| **card** | — | — | [phase-2-execute-the-workflow](../concepts/rjm/phase-2-execute-the-workflow.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Executed Git changes including rewritten commits, cherry-picked patches, bisect verdicts, or recovered branches. |
| **consumes** | — | — | Assessed repository state, selected workflow procedure, and safety backup branch. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/git-advanced-workflows/SKILL.md:32). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-2-failure-announcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Failure Announcement` |
| **card** | — | — | [phase-2-failure-announcement](../concepts/rjm/phase-2-failure-announcement.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Psychological safety and prospective hindsight framing that prompts participants to identify failure causes. |
| **consumes** | — | — | Completed Phase 1 project brief and established timeline endpoint. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/pre-mortem/references/strategy-ooda-loop.md:33). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2-grading

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Grading` |
| **card** | — | — | [phase-2-grading](../concepts/rjm/phase-2-grading.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | JSON grading data persisted via `grade_domains.py --format json --output`. |
| **consumes** | — | — | Verified domain list from Phase 1. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/quality-auditor.shared.md:68). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-2-identify-variabilities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Identify Variabilities` |
| **card** | — | — | [phase-2-identify-variabilities](../concepts/rjm/phase-2-identify-variabilities.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Catalog of variation points, extension parameters, and differing implementations across use cases. |
| **consumes** | — | — | Established commonalities from Phase 1, use case details, parameter and operational variations. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/SKILL.md:101). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-2-regenerate-after-editing-a-canonical-surface

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Regenerate After Editing a Canonical Surface` |
| **card** | — | — | [phase-2-regenerate-after-editing-a-canonical-surface](../concepts/rjm/phase-2-regenerate-after-editing-a-canonical-surface.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Regenerated outputs matching canonical edits to be committed together. |
| **consumes** | — | — | Canonical source changes (templates, skills, commands, rules, lib). |
| **impl status** | — | — | defects: unfailable-gate, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-generation-and-release/SKILL.md:80). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-2-route

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Route` |
| **card** | — | — | [phase-2-route](../concepts/rjm/phase-2-route.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Selected execution destination (specific skill, command pipeline, or orchestrator agent). |
| **consumes** | — | — | Classified intent family and size tier from Phase 1. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/autoplan/SKILL.md:112). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-run-it-correctly

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Run it correctly` |
| **card** | — | — | [phase-2-run-it-correctly](../concepts/rjm/phase-2-run-it-correctly.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Raw terminal output, diagnostic numbers, and process exit codes. |
| **consumes** | — | — | The command and execution flags selected in Phase 1. |
| **impl status** | — | — | defects: unfailable-gate, other |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:52). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-select

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PHASE 2: SELECT` |
| **card** | — | — | [phase-2-select](../concepts/rjm/phase-2-select.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Selected primary agent, ordered agent sequence, and mandatory guardrail agent additions. |
| **consumes** | — | — | Task type, complexity classification, and risk level from Phase 1 (Classify). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/diagrams/routing-flowchart.md:23). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-specification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Specification` |
| **card** | — | — | [phase-2-specification](../concepts/rjm/phase-2-specification.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured XML skill specification defining metadata, requirements, architecture, and validation criteria. |
| **consumes** | — | — | Phase 1 analysis findings, explicit and implicit requirements, domain context, and cognitive model evaluations. |
| **impl status** | — | — | defects: doc-drift, missing-path, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/SKILL.md:164). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-specification-generation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Specification Generation` |
| **card** | — | — | [phase-2-specification-generation](../concepts/rjm/phase-2-specification-generation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formal skill specification detailing trigger boundaries, progressive disclosure references, and script requirements. |
| **consumes** | — | — | Requirements analysis findings and cognitive models established in Phase 1 (Deep Analysis). |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/synthesis-protocol.md:407). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-2-threat-model-the-change

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2: Threat-Model the Change` |
| **card** | — | — | [phase-2-threat-model-the-change](../concepts/rjm/phase-2-threat-model-the-change.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Structured threat-model reasoning answering the three core questions (attack surface, threat actor, impact) and mapped CWE classifications. |
| **consumes** | — | — | Entry points and trust boundaries identified during Phase 1. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/security-review/SKILL.md:74). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3` |
| **card** | — | — | [phase-3](../concepts/rjm/phase-3.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Proposed updates for P0/P1 issues or enhanced catch-block logging and API pagination status. |
| **consumes** | — | — | Consolidated conflict reports or post-merge logging requirements. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:30). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-applicability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: APPLICABILITY` |
| **card** | — | — | [phase-3-applicability](../concepts/rjm/phase-3-applicability.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Detailed applicability section mapping concrete integration points across agents, protocols, memory, and skills. |
| **consumes** | — | — | Completed Phase 2 analysis document. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/SKILL.md:102). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-applicability-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Applicability Assessment` |
| **card** | — | — | [phase-3-applicability-assessment](../concepts/rjm/phase-3-applicability-assessment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Applicability section detailing integration points and priority assessment. |
| **consumes** | — | — | Verified deep analysis document and project architecture context. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/references/workflow.md:223). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-3-build-cva-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Build CVA Matrix` |
| **card** | — | — | [phase-3-build-cva-matrix](../concepts/rjm/phase-3-build-cva-matrix.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A 2D CVA matrix rendered as a Markdown table (at least 2×2) showing concrete implementations for each commonality/variability pair. |
| **consumes** | — | — | Commonalities identified in Phase 1 and variabilities identified in Phase 2 across two or more requirements or use cases. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/SKILL.md:140). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-3-compilability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Compilability` |
| **card** | — | — | [phase-3-compilability](../concepts/rjm/phase-3-compilability.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | compilability-findings.json reporting phantom parameters and unresolved symbols. |
| **consumes** | — | — | claims.json code examples and assessment.json source symbol tables. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:69). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-3-decide-what-to-do

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Decide What to Do` |
| **card** | — | — | [phase-3-decide-what-to-do](../concepts/rjm/phase-3-decide-what-to-do.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Action classifications (Keep, Drop, Add, Modify), SMART-validated targets, and ordered dependency sequences. |
| **consumes** | — | — | Root cause findings, success patterns, and prioritized diagnoses from Phase 2. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/SKILL.md:123). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Decisions` |
| **card** | — | — | [phase-3-decisions](../concepts/rjm/phase-3-decisions.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Action classifications (Keep/Drop/Add/Modify), SMART validation outcomes, and dependency-ordered action sequences. |
| **consumes** | — | — | Diagnosed root causes, success patterns, and prioritized findings from Phase 2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:253). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-3-execute

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PHASE 3: EXECUTE` |
| **card** | — | — | [phase-3-execute](../concepts/rjm/phase-3-execute.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Scheduled serial execution queues, parallel execution groups, and individual agent output artifacts. |
| **consumes** | — | — | Assembled agent sequence from Phase 2 (Select). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/diagrams/routing-flowchart.md:32). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-execute-with-defaults

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Execute with defaults` |
| **card** | — | — | [phase-3-execute-with-defaults](../concepts/rjm/phase-3-execute-with-defaults.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Executed changes, applied engineering defaults, and decision classifications logged for final gate review. |
| **consumes** | — | — | Selected route, classified size tier, and execution context. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/autoplan/SKILL.md:148). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-generation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Generation` |
| **card** | — | — | [phase-3-generation](../concepts/rjm/phase-3-generation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Skill directory containing SKILL.md, references/, assets/, and optional scripts/. |
| **consumes** | — | — | Validated XML skill specification from Phase 2, architecture pattern selection, and template assets. |
| **impl status** | — | — | defects: doc-drift, missing-path, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/SKILL.md:176). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-3-independent-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3 (Independent Analysis)` |
| **card** | — | — | [phase-3-independent-analysis](../concepts/rjm/phase-3-independent-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Unfiltered lists of 5-10 brainstormed failure causes per participant spanning technical, human, organizational, and external categories. |
| **consumes** | — | — | Project context established during Phase 1 and the failure announcement triggered in Phase 2. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/pre-mortem/references/mental-models-galls-law.md:21). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.11 RJM Executor Sub-phases

### rjm-phase-3-intent-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Intent Analysis` |
| **card** | — | — | [phase-3-intent-analysis](../concepts/rjm/phase-3-intent-analysis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | Ranked priority evaluation of competing edits (security patch > bugfix > breaking change > change with tests > recent change > style). |
| **consumes** | — | — | Git blame logs, commit history, and commit messages for conflicting files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/merge-resolver.shared.md:84). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:executor.
- **needs decision:** no
- **decision:** —

## 7.8 RJM Reflection & Memory Sub-phases

### rjm-phase-3-propose-learnings

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Propose Learnings` |
| **card** | — | — | [phase-3-propose-learnings](../concepts/rjm/phase-3-propose-learnings.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Formatted terminal proposal block and user approval verdict (`Y`, `n`, or `edit`). |
| **consumes** | — | — | Classified learning signals from Phase 2 tagged with confidence levels ([HIGH], [MED], [LOW]) and source quotes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/reflect/references/phase3-4-propose-persist.md:7). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:reflect.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-3-read-the-number-against-the-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Read the number against the baseline` |
| **card** | — | — | [phase-3-read-the-number-against-the-baseline](../concepts/rjm/phase-3-read-the-number-against-the-baseline.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A delta evaluation assessing whether the change added new findings or increased budgets. |
| **consumes** | — | — | Diagnostic output metrics and the baseline values recorded in `references/instrument-guides.md`. |
| **impl status** | — | — | defects: unfailable-gate, other |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:66). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-reporting

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Reporting` |
| **card** | — | — | [phase-3-reporting](../concepts/rjm/phase-3-reporting.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Markdown domain quality audit report. |
| **consumes** | — | — | Grading data, gap descriptions, and historical audit reports. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/quality-auditor.shared.md:74). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-3-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Resolution` |
| **card** | — | — | [phase-3-resolution](../concepts/rjm/phase-3-resolution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Complete updated ADR draft text, documented dissenting views in Alternatives Considered, rationale for accepted versus rejected feedback, and optional scope split recommendations. |
| **consumes** | — | — | Consolidated change recommendations, prioritized P0/P1/P2 issues, and high-level-advisor rulings from Phase 2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/debate-protocol.md:150). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-return-a-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Return a Verdict` |
| **card** | — | — | [phase-3-return-a-verdict](../concepts/rjm/phase-3-return-a-verdict.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A final single-word verdict token (IDENTIFY, OK, or ESCALATE) accompanied by concise remediation guidance or missing artifact specifications. |
| **consumes** | — | — | Threat model findings, risk scores, and reachability assessment from Phase 2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/security-review/SKILL.md:79). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-3-skill-generation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Skill Generation` |
| **card** | — | — | [phase-3-skill-generation](../concepts/rjm/phase-3-skill-generation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Concrete skill files including SKILL.md, modular reference documentation, and execution scripts. |
| **consumes** | — | — | Approved skill specification from Phase 2. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/synthesis-protocol.md:410). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-test-before-generation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Test Before Generation` |
| **card** | — | — | [phase-3-test-before-generation](../concepts/rjm/phase-3-test-before-generation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Test execution logs validating that canonical hook logic functions correctly before triggering generation. |
| **consumes** | — | — | Modified canonical hook scripts and corresponding unit tests. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:145). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-verify-and-clean-up

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3: Verify and Clean Up` |
| **card** | — | — | [phase-3-verify-and-clean-up](../concepts/rjm/phase-3-verify-and-clean-up.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Verified working tree, passing tests, and cleanup of temporary branches or worktrees. |
| **consumes** | — | — | Rewritten or modified Git repository state. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/git-advanced-workflows/SKILL.md:149). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4` |
| **card** | — | — | [phase-4](../concepts/rjm/phase-4.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Consensus voting outcomes, convergence determinations, or atomicity scoring evaluations. |
| **consumes** | — | — | Proposed issue resolutions, revised ADR text, or extracted retrospective learnings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/SKILL.md:98). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-4-act-on-the-reading

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Act on the reading` |
| **card** | — | — | [phase-4-act-on-the-reading](../concepts/rjm/phase-4-act-on-the-reading.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | An engineering decision: proceed with work, initiate debugging triage, or flag an existing baseline defect. |
| **consumes** | — | — | Delta evaluation and baseline comparison from Phase 3. |
| **impl status** | — | — | defects: unfailable-gate, other |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:70). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-4-behavioral

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Behavioral` |
| **card** | — | — | [phase-4-behavioral](../concepts/rjm/phase-4-behavioral.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | behavioral-findings.json detailing discrepancies between documented behavior and code logic. |
| **consumes** | — | — | Behavioral claims from claims.json and referenced source code implementation files. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:70). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-4-extracted-learnings

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Extracted Learnings` |
| **card** | — | — | [phase-4-extracted-learnings](../concepts/rjm/phase-4-extracted-learnings.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Atomicity-scored learning statements accompanied by structured skillbook operations (ADD, UPDATE, TAG, REMOVE). |
| **consumes** | — | — | SMART-validated decisions and classified actions from Phase 3. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:264). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-learning-extraction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Learning Extraction` |
| **card** | — | — | [phase-4-learning-extraction](../concepts/rjm/phase-4-learning-extraction.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Atomicity-scored learnings, quality band ratings, and structured skill operation payloads. |
| **consumes** | — | — | Classified actions and decisions from Phase 3. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/SKILL.md:134). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-4-map-to-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Map to Patterns` |
| **card** | — | — | [phase-4-map-to-patterns](../concepts/rjm/phase-4-map-to-patterns.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Design pattern recommendations (Strategy, Abstract Factory, Bridge) with matrix-backed rationale and an ADR stub. |
| **consumes** | — | — | Populated CVA Markdown matrix from Phase 3. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/SKILL.md:176). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-4-memory-integration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Memory Integration` |
| **card** | — | — | [phase-4-memory-integration](../concepts/rjm/phase-4-memory-integration.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Serena project memory, 5-10 atomic Forgetful memories, cross-memory links, and optional skill enhancements. |
| **consumes** | — | — | Verified analysis document with completed applicability section from Phase 3. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/references/workflow.md:310). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.8 RJM Reflection & Memory Sub-phases

### rjm-phase-4-persist-learnings-to-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Persist Learnings to Memory` |
| **card** | — | — | [phase-4-persist-learnings-to-memory](../concepts/rjm/phase-4-persist-learnings-to-memory.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Updated `.serena/memories/{skill-name}-observations.md` file with appended learnings and code citations. |
| **consumes** | — | — | Approved learnings from Phase 3, existing memory files from `.serena/memories/`, and session metadata. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/reflect/references/phase3-4-propose-persist.md:60). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:reflect.
- **needs decision:** no
- **decision:** —

## 7.6 RJM Shipping Sub-phases

### rjm-phase-4-plugin-manifests-carry-no-version

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Plugin Manifests Carry No Version` |
| **card** | — | — | [phase-4-plugin-manifests-carry-no-version](../concepts/rjm/phase-4-plugin-manifests-carry-no-version.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Version-free manifest files ensuring Git commit SHAs govern freshness. |
| **consumes** | — | — | Generated and canonical plugin manifests across `.claude/` and `src/copilot-cli/`. |
| **impl status** | — | — | defects: doc-drift, unfailable-gate |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-generation-and-release/SKILL.md:138). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:ship.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-4-recommendations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Recommendations` |
| **card** | — | — | [phase-4-recommendations](../concepts/rjm/phase-4-recommendations.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Prioritized list of concrete remediation actions targeting critical and significant domain gaps. |
| **consumes** | — | — | Domain audit reports, gap classifications by severity, and scores for low-performing (D/F) domains. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/quality-auditor.shared.md:80). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-regenerate-all-mirrors

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Regenerate All Mirrors` |
| **card** | — | — | [phase-4-regenerate-all-mirrors](../concepts/rjm/phase-4-regenerate-all-mirrors.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Synchronized mirror artifacts across `.claude/` and `src/copilot-cli/`. |
| **consumes** | — | — | Validated canonical sources and generator scripts (`build/generate_agents.py`, `scripts/sync_plugin_lib.py`). |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:167). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.11 RJM Executor Sub-phases

### rjm-phase-4-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Resolution` |
| **card** | — | — | [phase-4-resolution](../concepts/rjm/phase-4-resolution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | Resolved file contents with conflict hunks reconciled and conflict markers eliminated. |
| **consumes** | — | — | Intent analysis evaluations, classified conflict hunks, and repository files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/merge-resolver.shared.md:97). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:executor.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-4-round-robin-collection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Round-Robin Collection` |
| **card** | — | — | [phase-4-round-robin-collection](../concepts/rjm/phase-4-round-robin-collection.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Consolidated, deduplicated pool of failure reasons grouped by category (Technical, People, Process, Organizational, External, Unknown). |
| **consumes** | — | — | Lists of failure reasons generated during Phase 3 independent analysis. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/pre-mortem/references/strategy-ooda-loop.md:35). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-4-synthesis-deep-dive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Synthesis Deep Dive` |
| **card** | — | — | [phase-4-synthesis-deep-dive](../concepts/rjm/phase-4-synthesis-deep-dive.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | Multi-agent review reports, scores, issues tables, and unanimous approval verdict or Phase 1 feedback loops. |
| **consumes** | — | — | Generated skill artifacts from Phase 3 (SKILL.md, references, scripts) and validated specification from Phase 2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:1). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:Phase 4: Synthesis Panel.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-synthesis-panel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Synthesis Panel` |
| **card** | — | — | [phase-4-synthesis-panel](../concepts/rjm/phase-4-synthesis-panel.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Synthesis panel evaluation verdicts, change requests, or unanimous sign-off for registry finalization. |
| **consumes** | — | — | Generated skill artifacts from Phase 3, including SKILL.md, support scripts, and modular references. |
| **impl status** | — | — | defects: doc-drift, script-bug, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/skillforge/references/synthesis-protocol.md:413). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-synthesize

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PHASE 4: SYNTHESIZE` |
| **card** | — | — | [phase-4-synthesize](../concepts/rjm/phase-4-synthesize.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Unified response artifact, conflict detection records, and final delivered result. |
| **consumes** | — | — | Agent outputs, recommendations, and execution artifacts produced in Phase 3 (Execute). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/diagrams/routing-flowchart.md:41). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-phase-5-action-items

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Action Items` |
| **card** | — | — | [phase-5-action-items](../concepts/rjm/phase-5-action-items.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Issue body file (`.agents/analysis/{topic-slug}-issue-body.md`), GitHub issue, and durable handoff record. |
| **consumes** | — | — | Identified implementation proposals and completed research artifacts from earlier phases. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/research-and-incorporate/references/workflow.md:429). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-5-cross-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Cross-Document` |
| **card** | — | — | [phase-5-cross-document](../concepts/rjm/phase-5-cross-document.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | consistency-findings.json identifying conflicting values and inconsistent doc statements. |
| **consumes** | — | — | Quantitative and behavioral claims across multiple documentation files. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:71). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.6 RJM Shipping Sub-phases

### rjm-phase-5-npm-release-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: npm Release Path` |
| **card** | — | — | [phase-5-npm-release-path](../concepts/rjm/phase-5-npm-release-path.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Published npm package with verified cryptographic provenance attestations. |
| **consumes** | — | — | Validated packages/ai-agents-cli artifacts, git release tags, and publishing workflow permissions. |
| **impl status** | — | — | defects: doc-drift, unfailable-gate |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-generation-and-release/SKILL.md:163). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:ship.
- **needs decision:** no
- **decision:** —

## 7.7 RJM Retrospective Sub-phases

### rjm-phase-5-persist-and-close

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Persist and Close` |
| **card** | — | — | [phase-5-persist-and-close](../concepts/rjm/phase-5-persist-and-close.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Updated persistent memory records, delta triage action items, and retrospective evaluation metrics (+/Delta). |
| **consumes** | — | — | Candidate learnings meeting the atomicity persistence threshold (>= 70%) and retrospective process evaluations. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/retrospective/scripts/run_retrospective.py:301). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:retrospective.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-5-review-and-mitigate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5 (Review and Mitigate)` |
| **card** | — | — | [phase-5-review-and-mitigate](../concepts/rjm/phase-5-review-and-mitigate.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Scored risk items (likelihood and impact from 1 to 5), designated risk owners, Prevention/Detection/Response mitigation plans, and an action items schedule. |
| **consumes** | — | — | Categorized failure reasons produced during Phase 4 round-robin collection. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/pre-mortem/references/mental-models-galls-law.md:21). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-5-test-shipped-artifacts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Test Shipped Artifacts` |
| **card** | — | — | [phase-5-test-shipped-artifacts](../concepts/rjm/phase-5-test-shipped-artifacts.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Integration test results proving that shipped artifacts install and execute cleanly. |
| **consumes** | — | — | Generated mirror files and isolated test environments. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:196). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-5-validation-and-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Validation and Handoff` |
| **card** | — | — | [phase-5-validation-and-handoff](../concepts/rjm/phase-5-validation-and-handoff.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Matrix validation report via `validate-cva-matrix.py`, routed tasks to `decision-critic` and `architect` agent, and documented reassessment triggers. |
| **consumes** | — | — | Pattern recommendations, CVA matrix Markdown file, and ADR stub. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/SKILL.md:263). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.11 RJM Executor Sub-phases

### rjm-phase-5-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 5: Verification` |
| **card** | — | — | [phase-5-verification](../concepts/rjm/phase-5-verification.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | Staged git index containing cleanly resolved files verified free of conflict or merge markers. |
| **consumes** | — | — | Resolved candidate files from Phase 4. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/merge-resolver.shared.md:109). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:executor.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-phase-6-refresh-knowledge-only-when-needed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 6: Refresh Knowledge Only When Needed` |
| **card** | — | — | [phase-6-refresh-knowledge-only-when-needed](../concepts/rjm/phase-6-refresh-knowledge-only-when-needed.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Updated `agent-harness-reference` documentation, probe logs, or ADRs. |
| **consumes** | — | — | Discovered harness behavioral shifts or new official release features. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-portability-campaign/SKILL.md:215). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.11 RJM Executor Sub-phases

### rjm-phase-6-resolution-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 6: Resolution Report` |
| **card** | — | — | [phase-6-resolution-report](../concepts/rjm/phase-6-resolution-report.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | Resolution report documenting auto vs manual fixes, strategy per file, confidence score, rationale, and manual review flags. |
| **consumes** | — | — | Verification results and conflict resolution audit data. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (templates/agents/merge-resolver.shared.md:115). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:executor.
- **needs decision:** no
- **decision:** —

## 7.3 RJM Build Sub-phases

### rjm-phase-6-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 6: Structure` |
| **card** | — | — | [phase-6-structure](../concepts/rjm/phase-6-structure.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | structure-findings.json containing structural, navigation, and comment quality defects. |
| **consumes** | — | — | Repository documentation tree structure, navigational indexes, and source comment samples. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:72). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:build.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-phase-d1-deletion-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase D1: Deletion Detection` |
| **card** | — | — | [phase-d1-deletion-detection](../concepts/rjm/phase-d1-deletion-detection.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Detection report identifying deleted ADR paths, last known lifecycle status (proposed, accepted, deprecated, superseded), and referencing dependent ADRs. |
| **consumes** | — | — | Git working tree modifications and deleted ADR files detected via `detect_adr_changes.py`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/deletion-workflow.md:5). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-phase-d2-impact-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase D2: Impact Assessment` |
| **card** | — | — | [phase-d2-impact-assessment](../concepts/rjm/phase-d2-impact-assessment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Analyst impact assessment report with a Delete (safe to remove) or Block (active dependencies require resolution) recommendation. |
| **consumes** | — | — | Deleted ADR path, title, last known status, and dependent ADR list generated in Phase D1. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/deletion-workflow.md:17). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

### rjm-phase-d3-archival-decision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase D3: Archival Decision` |
| **card** | — | — | [phase-d3-archival-decision](../concepts/rjm/phase-d3-archival-decision.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Concrete action determination: Delete directly (proposed without deps), Archive then delete (accepted or deprecated), Block deletion (active deps exist), or Verify successor then delete (superseded). |
| **consumes** | — | — | Impact assessment recommendations from Phase D2, ADR lifecycle status, and dependency existence. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-review/references/deletion-workflow.md:50). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-phase-g1-gather

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G1: Gather` |
| **card** | — | — | [phase-g1-gather](../concepts/rjm/phase-g1-gather.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Collected decision facts, significance assessment via ASR test, and readiness verification via START Definition of Ready. |
| **consumes** | — | — | User prompt, decision parameters, and architectural motivation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/SKILL.md:60). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-phase-g2-research

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G2: Research` |
| **card** | — | — | [phase-g2-research](../concepts/rjm/phase-g2-research.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Resolved ADR destination path, detected template format, and deterministic next sequential number via check_adr_uniqueness.py. |
| **consumes** | — | — | Target repository directory structure, existing ADR files, and naming conventions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/SKILL.md:78). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-phase-g3-generate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G3: Generate` |
| **card** | — | — | [phase-g3-generate](../concepts/rjm/phase-g3-generate.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Complete draft ADR document containing machine-readable YAML frontmatter and formatted decision sections. |
| **consumes** | — | — | Gathered decision facts from G1 and template/path metadata from G2. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/SKILL.md:132). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-phase-g4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G4` |
| **card** | — | — | [phase-g4](../concepts/rjm/phase-g4.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Validated ADR ready for saving, or defect findings requiring correction. |
| **consumes** | — | — | Populated ADR document produced in Phase G3. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/references/quality-checklist.md:3). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-phase-g4-validate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G4: Validate` |
| **card** | — | — | [phase-g4-validate](../concepts/rjm/phase-g4-validate.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Validated ADR passing all structural, content, conditional, and governance checks. |
| **consumes** | — | — | Draft ADR produced in Phase G3 and the ADR Quality Checklist. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/SKILL.md:174). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-phase-g5-save

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase G5: Save` |
| **card** | — | — | [phase-g5-save](../concepts/rjm/phase-g5-save.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Persisted ADR file on disk and a recommendation to initiate multi-agent debate review via adr-review. |
| **consumes** | — | — | Fully validated ADR content and resolved file path from earlier phases. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/adr-generator/SKILL.md:178). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-planning-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PLANNING PHASE` |
| **card** | — | — | [planning-phase](../concepts/rjm/planning-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Complete implementation plan documents with architecture models, decision logs, and testable milestones. |
| **consumes** | — | — | Problem statements, project goals, existing codebase architecture, and plan file path. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/planner/scripts/planner.py:5). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:plan.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-positioning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Positioning` |
| **card** | — | — | [positioning](../concepts/rjm/positioning.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Positioning statement, category selection, and differentiated value proposition framing. |
| **consumes** | — | — | Competitive alternatives, unique product attributes, and target buyer segment definition. |
| **impl status** | — | — | clean in .claude/skills/business-strategy/references/obviously-awesome.md; defects: missing-path in .claude/skills/business-strategy/SKILL.md |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/references/obviously-awesome.md:3). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-post-ship-monitoring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `post-ship monitoring` |
| **card** | — | — | [post-ship-monitoring](../concepts/rjm/post-ship-monitoring.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Periodic health reports, maturity tier classifications, and pruning candidates for obsolete or uncalibrated gates. |
| **consumes** | — | — | Runtime execution telemetry, guard interception events, and override frequency data from production sessions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/ai-agents-research-methodology/SKILL.md:8). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-pre-implementation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-implementation` |
| **card** | — | — | [pre-implementation](../concepts/rjm/pre-implementation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:Plan` |
| **produces** | — | — | Verified tool/skill availability, decomposed vertical slices, and test-first design. |
| **consumes** | — | — | Approved specifications, verified constraints, and task plan outlines. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/analysis/002-project-constraints-consolidation.md:109). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:Plan.
- **needs decision:** no
- **decision:** —

## 7.6 RJM Shipping Sub-phases

### rjm-pre-push

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-push` |
| **card** | — | — | [pre-push](../concepts/rjm/pre-push.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Pass/fail verification verdicts blocking remote git push if validation gates or security scans fail. |
| **consumes** | — | — | Committed git changesets, branch state, and staged push references. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-054-local-security-scanning.md:18). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:ship.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-pre-work

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-work` |
| **card** | — | — | [pre-work](../concepts/rjm/pre-work.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `none` |
| **produces** | — | — | Activated memory environment, initialized project context, and confirmed constraints. |
| **consumes** | — | — | Handoff files, issue descriptions, and repository configuration. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/analysis/002-project-constraints-consolidation.md:107). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within none.
- **needs decision:** no
- **decision:** —

### rjm-problem-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Problem Assessment` |
| **card** | — | — | [problem-assessment](../concepts/rjm/problem-assessment.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Context summary, identified expected vs actual behavior, and documented reproduction steps with error logs. |
| **consumes** | — | — | Error messages, stack traces, failure reports, and recent codebase commits. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/debug.md:32). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-provenance-determination

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Provenance Determination` |
| **card** | — | — | [provenance-determination](../concepts/rjm/provenance-determination.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Final code ownership categorization (`UPSTREAM`, `LOCAL`, `VENDOR`, or `UNKNOWN`) with supporting evidence. |
| **consumes** | — | — | Collected provenance indicators from directory, manifest, and header analyses. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analysis-provenance/SKILL.md:68). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-qr-issue-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QR Issue Resolution` |
| **card** | — | — | [qr-issue-resolution](../concepts/rjm/qr-issue-resolution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Targeted bug fixes and re-verification requests looped back to quality review. |
| **consumes** | — | — | Defect reports and review feedback generated during Post-Implementation QR. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/planner/scripts/executor.py:10). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:plan.
- **needs decision:** no
- **decision:** —

## 7.10 RJM Session Lifecycle Sub-phases

### rjm-quality-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Checks` |
| **card** | — | — | [quality-checks](../concepts/rjm/quality-checks.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-end` |
| **produces** | — | — | Validation evidence that code and documentation adhere to repository lint standards. |
| **consumes** | — | — | Updated files, documentation, and codebase changes from the current session. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:41). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-end.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-read-decode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Read, Decode` |
| **card** | — | — | [read-decode](../concepts/rjm/read-decode.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | Exhaustive inventory of commitments, conditions, contingencies, anchors, hedging words, urgency signals, and omissions. |
| **consumes** | — | — | Raw offer text, legal documents, proposal emails, or contractual terms. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/negotiation.md:69). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:support.
- **needs decision:** no
- **decision:** —

### rjm-recommendations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recommendations` |
| **card** | — | — | [recommendations](../concepts/rjm/recommendations.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Actionable, prioritized corrective measures categorized by impact and implementation effort. |
| **consumes** | — | — | Identified deficiencies, review findings, gap analysis, and risk assessments. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/quality-auditor.md:75). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-recon

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recon` |
| **card** | — | — | [recon](../concepts/rjm/recon.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Target intelligence, open port lists, service versions, and vulnerability candidates. |
| **consumes** | — | — | Publicly accessible interfaces, DNS records, service endpoints, and system metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:33). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-reconciliation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reconciliation` |
| **card** | — | — | [reconciliation](../concepts/rjm/reconciliation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Approved documentation patches, reconciled codebase baseline, or confirmed execution parameters. |
| **consumes** | — | — | Scan findings, execution plan, detected repository state, or user feedback. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/doc-accuracy/SKILL.md:177). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-reconciliation-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RECONCILIATION PHASE` |
| **card** | — | — | [reconciliation-phase](../concepts/rjm/reconciliation-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:Code Quality` |
| **produces** | — | — | Target file modifications applied by Developer and Technical Writer agents, updated report status markers, and reconciliation summary. |
| **consumes** | — | — | User-annotated Incoherence Report containing resolution instructions. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (scripts/incoherence.py:20). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:Code Quality.
- **needs decision:** no
- **decision:** —

### rjm-recursive-learning-extraction

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recursive Learning Extraction` |
| **card** | — | — | [recursive-learning-extraction](../concepts/rjm/recursive-learning-extraction.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Exhaustive set of persistent memories bootstrapped from session learnings until recursion termination criteria are met. |
| **consumes** | — | — | High-scoring learnings, skillbook candidates, and newly formed memory representations. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/retrospective.md:109). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-reporting

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reporting` |
| **card** | — | — | [reporting](../concepts/rjm/reporting.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Markdown audit report, structured JSON results, and updated persistent memory records. |
| **consumes** | — | — | Calculated grades, gap matrices, and trend data from Phase 2 Grading. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/quality-auditor.md:69). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7.9 RJM Research & Analysis Sub-phases

### rjm-research-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Research Phase` |
| **card** | — | — | [research-phase](../concepts/rjm/research-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Raw fetched web content, search summaries, and local memory citations. |
| **consumes** | — | — | Topic prompt, local repository memories, and search queries. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/commands/research.md:47). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:research.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Resolution` |
| **card** | — | — | [resolution](../concepts/rjm/resolution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Minimal targeted code modifications, passing verification test runs, and resolved review comment threads. |
| **consumes** | — | — | Confirmed root cause hypotheses, reproduction test cases, and diagnostic execution traces. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/debug.md:44). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-retirement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Retirement` |
| **card** | — | — | [retirement](../concepts/rjm/retirement.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Complete removal of deprecated files, updated orchestrator routing configurations, archived documentation, and catalog updates. |
| **consumes** | — | — | Deprecated agent or hook artifacts, completed parallel operation monitoring, and an authoritative retirement decision. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:30). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

## 7.2 RJM Planning Sub-phases

### rjm-review-phase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REVIEW PHASE` |
| **card** | — | — | [review-phase](../concepts/rjm/review-phase.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Scrubbed plan diff snippets, timeless present comments, validated risk anchors, and quality review verdicts. |
| **consumes** | — | — | Draft implementation plan document. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/planner/scripts/planner.py:6). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:plan.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-runtime

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Runtime` |
| **card** | — | — | [runtime](../concepts/rjm/runtime.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Active agent execution environments within Claude Code, Copilot CLI, or VS Code. |
| **consumes** | — | — | Platform-specific agent definitions generated during the build layer. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (docs/architecture.md:11). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-scope-definition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scope Definition` |
| **card** | — | — | [scope-definition](../concepts/rjm/scope-definition.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:chaos-experiment` |
| **produces** | — | — | Defined system boundaries, target services, and failure domains for experimentation. |
| **consumes** | — | — | System architecture, historical incidents, and monitoring data. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-043-scoped-tool-execution.md:73). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:chaos-experiment.
- **needs decision:** no
- **decision:** —

## 7.10 RJM Session Lifecycle Sub-phases

### rjm-serena-initialization

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena Initialization` |
| **card** | — | — | [serena-initialization](../concepts/rjm/serena-initialization.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-start` |
| **produces** | — | — | Verified Serena memory/context tool invocation output in the execution transcript. |
| **consumes** | — | — | Agent session start trigger and active Serena MCP connection. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:35). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-start.
- **needs decision:** no
- **decision:** —

### rjm-session-log-creation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Log Creation` |
| **card** | — | — | [session-log-creation](../concepts/rjm/session-log-creation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-start` |
| **produces** | — | — | A new session log file on disk initialized with standard template fields. |
| **consumes** | — | — | Retrieved session context, session metadata, and standard session log template. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:38). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-start.
- **needs decision:** no
- **decision:** —

### rjm-skill-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Validation` |
| **card** | — | — | [skill-validation](../concepts/rjm/skill-validation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:session-start` |
| **produces** | — | — | Validated list of required skills recorded in the session log. |
| **consumes** | — | — | Identified task requirements and applicable domain skills. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM (.agents/architecture/ADR-011-session-state-mcp.md:36). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:session-start.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-sli-definition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLI DEFINITION` |
| **card** | — | — | [sli-definition](../concepts/rjm/sli-definition.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Selected Service Level Indicators across availability, latency, throughput, error rate, and correctness. |
| **consumes** | — | — | Critical user journeys and system architectural context from Step 1 (Discovery). |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/slo-designer/SKILL.md:110). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-slo-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO TARGETS` |
| **card** | — | — | [slo-targets](../concepts/rjm/slo-targets.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Quantitative target thresholds (e.g. 99.9% availability, p99 < 200ms) with documented business rationales. |
| **consumes** | — | — | Defined SLIs, historical telemetry baselines, and dependency chain constraints. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/slo-designer/SKILL.md:113). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

## 7.5 RJM Review Sub-phases

### rjm-stage-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stage 1` |
| **card** | — | — | [stage-1](../concepts/rjm/stage-1.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Stage-1 compliance verdict (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`). |
| **consumes** | — | — | Pull request diff and linked specification documents (`REQ-*`, `DESIGN-*`, `TASK-*`). |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/review/references/spec-compliance.md:10). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:review.
- **needs decision:** no
- **decision:** —

## 7. RJM Specific & Sub-phase Workflows

### rjm-synthesis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Synthesis` |
| **card** | — | — | [synthesis](../concepts/rjm/synthesis.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Prioritized findings report, executive summary, remediation recommendations, or final decision verdicts. |
| **consumes** | — | — | Verified evidence, findings, and evaluation metrics gathered across prior steps. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analyze/references/DEVELOPMENT.md:33). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-target-recon

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Target Recon` |
| **card** | — | — | [target-recon](../concepts/rjm/target-recon.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:coordinator` |
| **produces** | — | — | Verified target repository technology stack profile and architectural context. |
| **consumes** | — | — | Repository manifests, configuration files, file extensions, and build system descriptors. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/agents/orchestrator.md:35). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:coordinator.
- **needs decision:** no
- **decision:** —

### rjm-target-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Target Resolution` |
| **card** | — | — | [target-resolution](../concepts/rjm/target-resolution.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Resolved absolute and relative filesystem paths confirmed to exist on disk. |
| **consumes** | — | — | Target file or directory path arguments provided to provenance tools. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/analysis-provenance/SKILL.md:64). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### rjm-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation` |
| **card** | — | — | [validation](../concepts/rjm/validation.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic pass/fail verdict, parity confirmation, or empirical proof of market demand. |
| **consumes** | — | — | Software artifacts, dual-ingestion telemetry feeds, or customer interview findings. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/business-strategy/SKILL.md:9). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:cross-phase.
- **needs decision:** no
- **decision:** —

## 7.1 RJM Specification Sub-phases

### rjm-validation-and-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation and Handoff` |
| **card** | — | — | [validation-and-handoff](../concepts/rjm/validation-and-handoff.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Validated CVA analysis section embedded in PRD or ADR, handoff routing to downstream agents. |
| **consumes** | — | — | Pattern selections, CVA matrix, anti-pattern checklists, trade-off analysis. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/cva-analysis/references/SKILL_SPEC.md:271). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

### rjm-weaponize

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Weaponize` |
| **card** | — | — | [weaponize](../concepts/rjm/weaponize.md) |
| **kind** | — | — | phase |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Custom attack payloads, weaponized documents, or automated exploit scripts. |
| **consumes** | — | — | Target vulnerability data and exploit generation payloads. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM (.claude/skills/threat-modeling/references/advanced-analysis.md:34). Neither Addy nor Matt implements this specific sub-phase in their lifecycle scope.
- **sequencing note:** Executes within rjm:spec.
- **needs decision:** no
- **decision:** —

---

## Family Summary — Phases

| Metric | Count |
|---|---|
| **Total concordance rows** | 240 |
| **Cards mapped (addy)** | 22 / 22 (100%) |
| **Cards mapped (matt)** | 17 / 17 (100%) |
| **Cards mapped (rjm)** | 232 / 232 (100%) |
| **Total concept cards mapped** | 271 / 271 (100%) |
| **Rows needing decision** | 26 |

### Breakdown by Classification

| Classification | Row Count |
|---|---|
| `SYNONYM` | 15 |
| `ALIGNED` | 5 |
| `PARTIAL` | 6 |
| `UNIQUE` | 212 |
| `HOMONYM` | 2 |
