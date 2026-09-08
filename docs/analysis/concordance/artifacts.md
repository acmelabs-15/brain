# Concordance — Artifacts

This document establishes the structural concordance for all **artifact** and **template** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5 and §9, this is one of three structural concordances that establish the stage names, sequencing, and operational boundaries of the software development lifecycle.

---

## Structural Overview — Lifecycle Artifacts and Work Breakdown

| Artifact Role | Addy (`agent-skills`) | Matt (`skills`) | RJM (`ai-agents`) | Purpose & Lifecycle Contract |
|---|---|---|---|---|
| **1. Specification & Requirements** | `spec` (`SPEC.md`), `prd`, `requirements` | `spec` (`spec.md`), `agent-brief`, `user-stories` | `full-specification-template`, `prd`, `requirement-schema` | Establishes feature scope, user stories, boundaries, and acceptance criteria before planning or coding. |
| **2. Scoping & Intent Framing** | `one-pager`, `product-brief`, `not-doing-list` | `brief`, `input-pile`, `constraints` | `input-contract`, `structured-requirements` | Captures initial problem statement, negative scope, and environmental constraints. |
| **3. Implementation Plan** | `task-plan` (`tasks/plan.md`) | `plan` (`docs/plans/`) | `tasksplit`, `task-plan-md` | Decomposes approved specifications into ordered, dependency-tracked implementation steps. |
| **4. Tasks & Work Items** | `tasks-todo-md` (`tasks/todo.md`) | `tickets` (`docs/agents/issue-tracker.md`) | `task` (`TASK-*`), `task-definition-format` | Atomic unit of execution assigned to implementing workers with explicit acceptance criteria. |
| **5. Architectural Decisions** | `adr`, `adrs` (`docs/adr/`), `adr-template` | `adr`, `adrs` (`docs/agents/adrs/`) | `adr`, `adrs` (`.agents/architecture/`), `adr-template` | Records durable architectural choices, rejected alternatives, and downstream consequences. |
| **6. Source Changes & Diffs** | `diff`, `working-increment`, `pull-request` | `diffs`, `production-code`, `pull-requests` | `restoration-pr`, platform builds | Tangible codebase modifications, git patches, and PR submissions produced during Build. |
| **7. Verification & Test Evidence** | `error-output-test-results`, `regression-test` | `failing-test`, `evidence`, `regression-test` | `test-group`, `evidence`, `corpus-verified` | Concrete proof of correctness, regression test suites, and benchmark validation logs. |
| **8. Review & Quality Reports** | `scorecard`, `review-output-template` | Review notes in `engineering` | `scorecard`, `retrospective-format` | Multi-perspective audit grading implementation against quality, security, and design standards. |
| **9. Release & Rollback Artifacts** | `changelog`, `rollback-plan`, `runbook` | `changeset`, PR handoffs | `changelog`, `rollback-plan`, `resolution-path` | Release manifests, version history, operational rollback procedures, and deployment runbooks. |
| **10. Living Knowledge & Glossaries** | `readme-structure`, `claude-md`, `rules` | `glossary`, `agents-md`, `learning-records` | `source-symbols`, `platform-configuration-schema` | Long-term repository memory, project lexicons, rules of engagement, and continuous learning records. |

---

## Concordance Rows

## 1. Specification, Problem Definition & Requirements Artifacts

### artifact-specification-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `spec` | `spec` | `Full Specification Template` |
| **card** | [spec](../concepts/addy/spec.md) | [spec](../concepts/matt/spec.md) | [full-specification-template](../concepts/rjm/full-specification-template.md) |
| **kind** | artifact | artifact | template |
| **phase** | `addy:Define` | `matt:specify` | `rjm:Phase 2: Specification` |
| **produces** | A specification document (spec / PRD) establishing boundaries, objectives, commands, and tests. | A single published issue tracker item documenting Problem Statement, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope, and Further Notes. | Complete XML specification document conforming to the `<skill_specification>` schema. |
| **consumes** | Rough feature ideas, briefs, or user requirements. | Settled discussions from grilling sessions, domain glossary vocabulary (`CONTEXT.md`), ADRs, pre-agreed public seams. | Skill metadata, problem context, explicit/implicit requirements, architecture, and success criteria. |
| **impl status** | clean | defects: missing-path | clean |

- **class:** ALIGNED
- **difference:** Addy (skills/spec-driven-development/SKILL.md:12), Matt (skills/explore/SKILL.md:14), and RJM (.claude/commands/spec.md:1) all establish a comprehensive specification document defining requirements, boundaries, user stories, and acceptance criteria.
- **sequencing note:** Produced in Define / explore / /spec phase; primary input to Plan / /plan.
- **needs decision:** no
- **decision:** —

### artifact-spec-markdown-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SPEC.md` | `spec.md` | — |
| **card** | [spec-md](../concepts/addy/spec-md.md) | [spec-md](../concepts/matt/spec-md.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Define` | `matt:to-spec` | — |
| **produces** | Authoritative specification document governing subsequent planning and implementation phases. | A local markdown specification file documenting requirements, interfaces, and testing strategies. | — |
| **consumes** | User intent, feature requests, interview answers, and architectural constraints. | Feature requests, architectural discussions, and domain models. | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** Both Addy and Matt define the literal on-disk SPEC.md / spec.md file capturing the durable specification.
- **sequencing note:** Written during specification discovery.
- **needs decision:** no
- **decision:** —

### artifact-prd

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PRD` | — | `PRD` |
| **card** | [prd](../concepts/addy/prd.md) | — | [prd](../concepts/rjm/prd.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Define` | — | `rjm:spec` |
| **produces** | A structured specification covering objectives, commands, architecture, testing, and explicit non-goals (`spec.md`). | — | Comprehensive product requirements document specifying scope, user stories, acceptance criteria, and constraints. |
| **consumes** | Clarified intent, user interview results, or raw feature requirements. | — | Problem statement, requirements interview elicitation, Step 0 answers, and Prior Art block. |
| **impl status** | clean | — | defects: missing-path, internal-contradiction, doc-drift |

- **class:** ALIGNED
- **difference:** Addy and RJM both define a Product Requirements Document (PRD) specifying high-level business requirements, user personas, and target outcomes.
- **sequencing note:** Created in Define / /spec; upstream of task decomposition.
- **needs decision:** no
- **decision:** —

### artifact-one-pager

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `one-pager` | `Brief` | — |
| **card** | [one-pager](../concepts/addy/one-pager.md) | [brief](../concepts/matt/brief.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Define` | `matt:in-progress` | — |
| **produces** | A concise one-page document capturing product vision, target audience, MVP scope, and explicit non-goals. | A concise, structured review document optimized for quick human decision-making. | — |
| **consumes** | Refined problem statements, explored solution variations, and surfaced assumptions. | Output assets, execution rationale, and asset links produced by workflow steps. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines one-pager as a high-density, single-page summary of scope and goals; Matt defines brief as an agent-ready problem overview.
- **sequencing note:** Pre-specification summary artifact.
- **needs decision:** yes
- **decision:** D-126

### artifact-agent-brief

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `product brief` | `agent brief` | — |
| **card** | [product-brief](../concepts/addy/product-brief.md) | [agent-brief](../concepts/matt/agent-brief.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Define` | `matt:Triage` | — |
| **produces** | Summary of initiative capabilities, dependencies, stakeholder ownership, and constraints | A durable, self-contained markdown comment on the issue tracker serving as an autonomous work order. | — |
| **consumes** | Business objectives, user problem statements, and high-level initiative scope | Reproduced bug details, verified test assertions, or fully refined enhancement requirements. | — |
| **impl status** | clean | defects: doc-drift (from skills-engineering-triage-agent-brief-md.md: mentions GitHub issue or PR specifically, whereas SKILL.md and design support alternative trackers) | — |

- **class:** SYNONYM
- **difference:** Addy defines product-brief and Matt defines agent-brief as the formal input context framing the feature problem space.
- **sequencing note:** Entry context artifact for the discovery / specification phase.
- **needs decision:** yes
- **decision:** D-127

### artifact-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `requirements` | `user stories` | `Requirement Schema` |
| **card** | [requirements](../concepts/addy/requirements.md) | [user-stories](../concepts/matt/user-stories.md) | [requirement-schema](../concepts/rjm/requirement-schema.md) |
| **kind** | artifact | artifact | template |
| **phase** | `addy:Define` | `matt:Spec` | `rjm:spec` |
| **produces** | Structured specifications, acceptance criteria, and task breakdowns. | An exhaustive, numbered catalog of user stories conforming to the format `As an <actor>, I want a <feature>, so that <benefit>`. | `REQ-NNN-[kebab-case-name].md` files containing YAML frontmatter and structured requirement body sections. |
| **consumes** | User prompts, problem statements, customer requests, and business objectives. | User requirements, problem framing, and feature discussions from grilling sessions. | User interview responses, problem statement, and domain ontology entity terms. |
| **impl status** | defects: doc-drift | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Addy defines requirements lists; Matt defines user stories expressing user needs; RJM formalizes requirements via a requirement-schema template.
- **sequencing note:** Core component section of the specification.
- **needs decision:** yes
- **decision:** D-128

### artifact-structured-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Spec files` | — | `Structured requirements` |
| **card** | [spec-files](../concepts/addy/spec-files.md) | — | [structured-requirements](../concepts/rjm/structured-requirements.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Ship` | — | `rjm:spec` |
| **produces** | Accurate, authoritative specification documents guiding engineers and agents during implementation. | — | Structured PRD markdown returned in-memory to caller. |
| **consumes** | Feature requirements, product goals, architectural constraints, and user interface designs. | — | Resolved design tree branches and interview decisions. |
| **impl status** | clean | — | clean |

- **class:** PARTIAL
- **difference:** Addy groups specification files across directories; RJM defines structured-requirements as an explicit machine-checkable requirements artifact.
- **sequencing note:** Specification persistence artifacts.
- **needs decision:** yes
- **decision:** D-129

### artifact-input-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `confirmed statement of intent` | `input pile` | `Input Contract` |
| **card** | [confirmed-statement-of-intent](../concepts/addy/confirmed-statement-of-intent.md) | [input-pile](../concepts/matt/input-pile.md) | [input-contract](../concepts/rjm/input-contract.md) |
| **kind** | artifact | artifact | template |
| **phase** | `addy:Define` | `matt:in-progress` | `rjm:cross-phase` |
| **produces** | A validated intent record (optionally saved to `docs/intent/[topic].md`). | Read-only source material mined to populate paragraphs and narrative moves during article shaping. | A standardized `## Task for [Agent Name]` markdown block for invoking specialist agents. |
| **consumes** | Completed interview dialogue and explicit affirmative confirmation ("yes") from the user. | Unstructured prose, raw fragments from an explore session, interview transcripts, or author notes. | Task instructions, operational context, boundary constraints, and deliverable expectations. |
| **impl status** | clean | clean | defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor ... |

- **class:** PARTIAL
- **difference:** Addy records confirmed user intent; Matt accumulates author notes into an input pile; RJM establishes a formal schema-validated input contract.
- **sequencing note:** Generated at the onset of interactive interview / exploration.
- **needs decision:** yes
- **decision:** D-130

### artifact-scope-constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Not Doing list` | `Constraints` | `Breaking Change Assessment` |
| **card** | [not-doing-list](../concepts/addy/not-doing-list.md) | [constraints](../concepts/matt/constraints.md) | [breaking-change-assessment](../concepts/rjm/breaking-change-assessment.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Define` | `matt:productivity` | `rjm:review` |
| **produces** | An explicit enumerated list of features and capabilities deliberately excluded from the current scope. | The `## Constraints` section of `MISSION.md`. | Structured metadata documenting breaking change presence (Yes/No), impact scope (None/Minor/Major), migration requirements, and migration paths. |
| **consumes** | Secondary feature ideas, out-of-scope requests, and deferred optimizations. | Learner time availability, budget constraints, scheduling commitments, and learning preferences. | Analysis of changes to public APIs, shared contracts, and consumer impact. |
| **impl status** | clean | clean | defects: doc-drift, missing-path, other |

- **class:** PARTIAL
- **difference:** Addy uses a not-doing-list for negative scope; Matt documents environmental constraints; RJM performs a formal breaking-change risk assessment.
- **sequencing note:** Scoping boundary artifact established during specification.
- **needs decision:** yes
- **decision:** D-131

### artifact-mvp-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `MVP scope` | `Success looks like` | — |
| **card** | [mvp-scope](../concepts/addy/mvp-scope.md) | [success-looks-like](../concepts/matt/success-looks-like.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Define` | `matt:productivity` | — |
| **produces** | The minimal set of core features required to validate value and deliver functional utility to initial users. | The `## Success looks like` section in `MISSION.md`. | — |
| **consumes** | User problems, market requirements, and candidate feature lists explored during ideation. | Learner target capabilities and observable performance outcomes. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines MVP scope boundaries; Matt specifies the concrete 'success looks like' condition for the initial slice.
- **sequencing note:** Phase boundary definition in specification.
- **needs decision:** yes
- **decision:** D-132

### artifact-discovery-questionnaire

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `discovery questionnaire` | `Agent Interview Response Template` |
| **card** | — | [discovery-questionnaire](../concepts/matt/discovery-questionnaire.md) | [agent-interview-response-template](../concepts/rjm/agent-interview-response-template.md) |
| **kind** | — | artifact | template |
| **phase** | — | `matt:Productivity` | `rjm:cross-phase` |
| **produces** | — | A structured async elicitation markdown document (`to-questionnaire-<slug>.md`). | Standardized agent interview response files stored in `.agents/governance/interviews/[agent]-interview.md`. |
| **consumes** | — | A user's knowledge deficit and external recipient context. | Responses elicited during the execution of the agent interview protocol. |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt provides a discovery questionnaire for exploratory grilling; RJM provides an agent interview response template for stakeholder elicitation.
- **sequencing note:** Interactive discovery artifact preceding formal spec drafting.
- **needs decision:** yes
- **decision:** D-133

## 2. Work Breakdown, Planning & Task Tracking Artifacts

### artifact-implementation-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `task plan` | `plan` | `TaskSplit` |
| **card** | [task-plan](../concepts/addy/task-plan.md) | [plan](../concepts/matt/plan.md) | [tasksplit](../concepts/rjm/tasksplit.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Plan` | `matt:engineering` | `rjm:Test` |
| **produces** | Sequenced breakdown of discrete, testable implementation tasks and verification gates. | Sequential implementation steps executed by /implement. | Disjoint tuples of task IDs for optimization, held-out gating, and optional test evaluation, along with a SHA-256 fingerprint. |
| **consumes** | Feature specification, architectural boundaries, and user requirements. | A settled agreement, task breakdown, or architectural consensus reached during an interactive session. | A set of evaluation task identifiers, a random seed, and partition ratios. |
| **impl status** | clean | defects: orphan, doc-drift, cross-file-contradiction, other | clean |

- **class:** ALIGNED
- **difference:** Addy (skills/planning-and-task-breakdown/SKILL.md), Matt (to-tickets), and RJM (.claude/commands/plan.md) all define an implementation plan breaking spec into ordered work.
- **sequencing note:** Produced in Plan phase; consumed by Build phase.
- **needs decision:** no
- **decision:** —

### artifact-tasks-todo-list

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `tasks/todo.md` | `tickets` | `TASK-*` |
| **card** | [tasks-todo-md](../concepts/addy/tasks-todo-md.md) | [tickets](../concepts/matt/tickets.md) | [task](../concepts/rjm/task.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Plan` | `matt:plan` | `rjm:spec` |
| **produces** | Actionable markdown task list artifact with checkboxes tracking execution state during `/build`. | Issue tracker items (or local markdown files) containing vertical slice acceptance criteria, pre-agreed seams, and blocking edges. | Actionable implementation task definitions, work breakdown items, and deliverable checklists. |
| **consumes** | Decomposed vertical tasks with acceptance criteria, verification commands, and phase checkpoints. | A specification, architectural plan, or settled conversation. | Approved requirement specifications (`REQ-*`) and design specifications (`DESIGN-*`). |
| **impl status** | defects: other | defects: missing-path | defects: orphan, missing-path |

- **class:** SYNONYM
- **difference:** Addy maintains actionable task checklists in tasks/todo.md; Matt creates modular markdown ticket files; RJM generates structured tasks within its plan manifest.
- **sequencing note:** Produced in Plan; checked off incrementally during Build.
- **needs decision:** yes
- **decision:** D-134

### artifact-task-unit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Task List Target` | `ticket` | `Task Definition Format` |
| **card** | [task-list-target](../concepts/addy/task-list-target.md) | [ticket](../concepts/matt/ticket.md) | [task-definition-format](../concepts/rjm/task-definition-format.md) |
| **kind** | artifact | artifact | template |
| **phase** | `addy:Plan` | `matt:cross-phase` | `rjm:plan` |
| **produces** | A checklist-style markdown file at `tasks/todo.md` or synchronized items in an external issue tracker (GitHub Issues, Jira, Linear, `bd`/beads). | Tracked work items or decision records holding questions, criteria, and resolution details. | Standardized task blocks (TASK-NNN) specifying title, type, complexity, description, criteria, dependencies, and affected files. |
| **consumes** | Structured tasks, acceptance criteria, verification commands, checkpoints. | Requirements, problem statements, or questions surfaced during planning and specification. | Decomposed requirements, identified dependencies, affected files, and verifiable acceptance criteria. |
| **impl status** | clean | defects: missing-path, other, doc-drift (proscribed by CONTEXT.md in favor of Issue yet pervasive across skill documentation and wayfinder terminology) | clean |

- **class:** SYNONYM
- **difference:** Addy defines task list targets (local markdown or external issue tracker); Matt defines self-contained ticket files; RJM defines structured task definition formats.
- **sequencing note:** Atomic task unit consumed by implementing worker.
- **needs decision:** yes
- **decision:** D-135

### artifact-plan-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Plan Document Template` | `spec-template` | `Task List Template` |
| **card** | [plan-document-template](../concepts/addy/plan-document-template.md) | [spec-template](../concepts/matt/spec-template.md) | [task-list-template](../concepts/rjm/task-list-template.md) |
| **kind** | template | template | template |
| **phase** | `addy:Plan` | `matt:cross-phase` | `rjm:plan` |
| **produces** | The implementation plan document saved to `tasks/plan.md`. | Complete specification issues published to the project issue tracker with the ready-for-agent label. | Formatted task list document saved to `.agents/planning/TASKS-[feature-name].md`. |
| **consumes** | Feature requirements, architecture decisions, dependency graph, sequenced task lists. | Conversation context, repository exploration findings, and user-confirmed seams. | Decomposed tasks, complexity estimates, milestones, and dependency relationships. |
| **impl status** | clean | defects: missing-path (skills/engineering/to-spec/SKILL.md:9 mentions non-existent /setup-matt-pocock-skills command) | clean |

- **class:** SYNONYM
- **difference:** Addy provides a plan document template; Matt provides ticket/spec templates; RJM provides task list templates.
- **sequencing note:** Planning authoring templates.
- **needs decision:** yes
- **decision:** D-136

### artifact-tasks-plan-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `tasks/plan.md` | `plans` | `task_plan.md` |
| **card** | [tasks-plan-md](../concepts/addy/tasks-plan-md.md) | [plans](../concepts/matt/plans.md) | [task-plan-md](../concepts/rjm/task-plan-md.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Plan` | `matt:cross-phase` | `rjm:plan` |
| **produces** | Persistent plan document containing task rationale, component ordering, and verification criteria. | Structured execution plans, task checklists, or milestone documents guiding implementation work. | External task plan file containing sequenced milestones and status checkboxes. |
| **consumes** | Specification context, architecture models, and component dependency graphs. | Requirements, specifications, or architectural decisions outlining concrete execution steps. | Requirements breakdown and phase decomposition. |
| **impl status** | defects: doc-drift | clean | defects: missing-path |

- **class:** ALIGNED
- **difference:** Addy defines tasks/plan.md, Matt organizes docs/plans/, and RJM references task-plan-md as durable plan files.
- **sequencing note:** Durable plan storage artifact.
- **needs decision:** no
- **decision:** —

### artifact-verifiable-slice

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `verifiable slice` | `slice` | — |
| **card** | [verifiable-slice](../concepts/addy/verifiable-slice.md) | [slice](../concepts/matt/slice.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Build` | `matt:cross-phase` | — |
| **produces** | An end-to-end unit of working code accompanied by automated test proofs or type-check verification. | An individual, vertically sliced implementation ticket sized for a single agent context window. | — |
| **consumes** | A single task breakdown item and existing codebase infrastructure. | An approved feature specification document produced by `to-spec`. | — |
| **impl status** | clean | defects: missing-path, other (CONTEXT.md defects) | — |

- **class:** ALIGNED
- **difference:** Addy and Matt both define vertical, verifiable implementation slices that deliver working functionality end-to-end.
- **sequencing note:** Sizing concept for plan tasks; built and verified atomically.
- **needs decision:** no
- **decision:** —

### artifact-child-ticket

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Child ticket` | `Task Schema` |
| **card** | — | [child-ticket](../concepts/matt/child-ticket.md) | [task-schema](../concepts/rjm/task-schema.md) |
| **kind** | — | artifact | template |
| **phase** | — | `matt:wayfinder` | `rjm:spec` |
| **produces** | — | Documented findings, code prototypes, or answers linked back to the map. | `TASK-NNN-[kebab-case-name].md` files containing YAML frontmatter, execution scopes, and acceptance criteria. |
| **consumes** | — | Parent wayfinding map identifying an open question or sub-task. | Approved `DESIGN-NNN` design artifacts and implementation decomposition plans. |
| **impl status** | — | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Matt models sub-tasks as child tickets linked to parent issues; RJM models sub-tasks using nested task schema definitions.
- **sequencing note:** Plan decomposition artifact.
- **needs decision:** yes
- **decision:** D-137

### artifact-backlog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `backlog` | `selection group` |
| **card** | — | [backlog](../concepts/matt/backlog.md) | [selection-group](../concepts/rjm/selection-group.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | none | Held-out evaluation task subset used to calculate gate decisions and p-values. |
| **consumes** | — | none | Evaluation task universe, split configuration, and baseline results. |
| **impl status** | — | defects: missing-path, other (from context-md.md: cites non-existent docs/agents/triage-labels.md and subject to runaway artifact bloat in CONTEXT.md) | defects: doc-drift, internal-contradiction, missing-path |

- **class:** SYNONYM
- **difference:** Matt maintains a backlog of unworked tickets; RJM organizes candidate tasks into selection groups for batch execution.
- **sequencing note:** Queue artifact holding unassigned work.
- **needs decision:** yes
- **decision:** D-138

## 3. Architecture, Decisions & Design Artifacts (ADRs)

### artifact-adr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ADR` | `ADR` | `ADR` |
| **card** | [adr](../concepts/addy/adr.md) | [adr](../concepts/matt/adr.md) | [adr](../concepts/rjm/adr.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Ship` | `matt:cross-phase` | `rjm:Spec` |
| **produces** | An Architecture Decision Record document capturing context, decision, alternatives, and consequences. | A sequentially numbered markdown file in docs/adr/ (0001-slug.md) recording context, decision, and rationale. | Numbered markdown files under .agents/architecture/ capturing context, decisions, status, and consequences. |
| **consumes** | Problem context, decision drivers, candidate architectures, and evaluated trade-offs. | An architectural choice that is hard to reverse, surprising without context, and the result of a real trade-off. | Architectural options, CVA analyses, trade-off evaluations, debate logs, and prior art references. |
| **impl status** | clean | defects: missing-path, other, internal-contradiction (coupling ADR and glossary guidance into a single skill creates convention conflicts in repos with existing ADR setups) | clean |

- **class:** ALIGNED
- **difference:** All three packages define an Architectural Decision Record (ADR) capturing context, options, decision, and consequences.
- **sequencing note:** Authored in Plan or Build when structural choices are made.
- **needs decision:** no
- **decision:** —

### artifact-adrs-collection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ADRs` | `ADRs` | — |
| **card** | [adrs](../concepts/addy/adrs.md) | [adrs](../concepts/matt/adrs.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Ship` | `matt:cross-phase` | — |
| **produces** | Version-controlled Architecture Decision Records documenting context, options, decision, and consequences. | Version-controlled Markdown records (typically stored in `docs/adr/` or `.agents/adr/`). | — |
| **consumes** | Architectural proposals, technical evaluation criteria, evaluated alternatives, and accepted trade-offs. | Architectural choices, trade-off evaluations, and decision rationale developed through grilling or design sessions. | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** Addy and Matt both maintain a collection of ADR documents in a dedicated architecture directory (docs/adr/ and docs/agents/adrs/).
- **sequencing note:** Repository-wide architectural memory.
- **needs decision:** no
- **decision:** —

### artifact-adr-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ADR Template` | — | `ADR Template` |
| **card** | [adr-template](../concepts/addy/adr-template.md) | — | [adr-template](../concepts/rjm/adr-template.md) |
| **kind** | template | — | template |
| **phase** | `addy:Ship` | — | `rjm:spec` |
| **produces** | A structured ADR Markdown document with Status, Date, Context, Decision, Alternatives Considered, and Consequences sections. | — | A standardized markdown decision record conforming to project standards. |
| **consumes** | Architectural context, constraints, technical requirements, evaluated options, and trade-offs. | — | Architectural context, options considered, trade-offs, and downstream consequences. |
| **impl status** | clean | — | defects: exit-code-mismatch, missing-path |

- **class:** ALIGNED
- **difference:** Addy and RJM both provide an explicit template for authoring ADRs.
- **sequencing note:** Authoring template for decisions.
- **needs decision:** no
- **decision:** —

### artifact-decision-statement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Decision` | `decision` | `Decision` |
| **card** | [decision](../concepts/addy/decision.md) | [decision](../concepts/matt/decision.md) | [decision](../concepts/rjm/decision.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Ship` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | A clear, concise, and binding declaration of the chosen architectural strategy in an ADR. | An agreed technical or architectural commitment recorded in tickets, ADRs, or CONTEXT.md. | Authoritative architectural choices, structured agent telemetry logs, or recorded consensus decisions. |
| **consumes** | Problem context, system requirements, evaluated alternatives, and trade-off assessments. | Architectural trade-offs, open design questions, and exploration artifacts. | Context, forces, evaluated alternatives, agent votes, or repository state. |
| **impl status** | clean | defects: missing-path, other (CONTEXT.md defects; grill-with-docs silent non-writing when wrapped in other pipelines) | defects: doc-drift, exit-code-mismatch |

- **class:** ALIGNED
- **difference:** All three define the explicit decision statement recorded within an ADR.
- **sequencing note:** Core section of an ADR.
- **needs decision:** no
- **decision:** —

### artifact-considered-options

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Alternatives Considered` | `Considered Options` | `Considered Options` |
| **card** | [alternatives-considered](../concepts/addy/alternatives-considered.md) | [considered-options](../concepts/matt/considered-options.md) | [considered-options](../concepts/rjm/considered-options.md) |
| **kind** | artifact | template | template |
| **phase** | `addy:Ship` | `matt:none` | `rjm:Review` |
| **produces** | A comparative analysis documenting pros, cons, and explicit rejection rationale for alternative technical choices. | A documented list of rejected alternatives within an ADR to prevent recurring debates. | Documented list of alternative architectural solutions with comparative trade-off analysis. |
| **consumes** | Competing libraries, frameworks, architectural designs, or approaches evaluated during problem solving. | Evaluated architectural alternatives and trade-off rationales. | Problem statement, decision drivers, candidate technical architectures. |
| **impl status** | clean | clean | defects: internal-contradiction |

- **class:** SYNONYM
- **difference:** Addy names the section alternatives-considered; Matt and RJM name it considered-options.
- **sequencing note:** Section of an ADR evaluating alternatives.
- **needs decision:** yes
- **decision:** D-139

### artifact-consequences

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Consequences` | `Consequences` | `Consequences` |
| **card** | [consequences](../concepts/addy/consequences.md) | [consequences](../concepts/matt/consequences.md) | [consequences](../concepts/rjm/consequences.md) |
| **kind** | artifact | template | template |
| **phase** | `addy:Ship` | `matt:none` | `rjm:spec` |
| **produces** | An explicit list of trade-offs, downstream dependencies, required skills, and operational hosting requirements. | An explicit callout of downstream architectural or operational consequences in an ADR. | Structured breakdown of outcomes categorized into positive, negative, and neutral impacts. |
| **consumes** | The adopted architectural decision and its anticipated technical, operational, and organizational impacts. | Identified secondary impacts, trade-offs, or downstream effects of a decision. | The selected architectural decision and downstream system impact analysis. |
| **impl status** | clean | clean | clean |

- **class:** ALIGNED
- **difference:** All three capture the downstream positive and negative consequences of an architectural decision.
- **sequencing note:** Concluding section of an ADR.
- **needs decision:** no
- **decision:** —

### artifact-architecture-decision-records-concept

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Architecture Decision Records` | `architectural decision` | `decision group` |
| **card** | [architecture-decision-records](../concepts/addy/architecture-decision-records.md) | [architectural-decision](../concepts/matt/architectural-decision.md) | [decision-group](../concepts/rjm/decision-group.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Ship` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | Numbered Markdown ADR records in `docs/decisions/` or `.adr-dir` recording decision context, alternatives, and consequences. | An Architecture Decision Record (ADR) in docs/adr/. | Evaluation task subset reserved strictly for gating decisions. |
| **consumes** | Significant technical choices, architectural context, alternatives considered, accepted trade-offs. | A technical choice meeting permanence, surprise, and trade-off criteria. | Partitioned evaluation task set and split configuration. |
| **impl status** | clean | clean | defects: doc-drift, internal-contradiction, missing-path |

- **class:** SYNONYM
- **difference:** Addy formalizes the ADR discipline; Matt refers to architectural decisions; RJM groups related decisions into decision groups.
- **sequencing note:** Architectural governance concept.
- **needs decision:** yes
- **decision:** D-140

### artifact-context-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `capability map` | `Context Map` | `Context Map` |
| **card** | [capability-map](../concepts/addy/capability-map.md) | [context-map](../concepts/matt/context-map.md) | [context-map](../concepts/rjm/context-map.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Define` | `matt:none` | `rjm:cross-phase` |
| **produces** | A structured document defining stable module IDs, module responsibilities, dependencies, and an acyclic build order | The `CONTEXT-MAP.md` document at repository root. | An architectural artifact documenting inter-context relationships and translation strategies. |
| **consumes** | Complex user requests spanning multiple independent functional domains or subsystems | Identified bounded contexts and their inter-context events and shared types. | Bounded context boundaries, component dependency models, and subsystem integration requirements. |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy defines capability maps; Matt and RJM define context maps representing system boundaries and dependencies.
- **sequencing note:** Structural design artifact informing architectural decisions.
- **needs decision:** yes
- **decision:** D-141

### artifact-system-context

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `context` | `Context` |
| **card** | — | [context](../concepts/matt/context.md) | [context](../concepts/rjm/context.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | Working memory for agent reasoning, or structured background sections in documents. | Clear architectural problem framing, propagated trace metadata, or candidate classification bounds. |
| **consumes** | — | User prompts, repository files, domain models, and previous conversation history. | Problem statements, distributed trace identifiers, capability definitions, or source transcript excerpts. |
| **impl status** | — | defects: doc-drift, other (runaway artifact bloat where models expand CONTEXT.md into running specs, and degradation as tokens approach the smart zone limit) | defects: missing-path, doc-drift, exit-code-mismatch |

- **class:** ALIGNED
- **difference:** Both packages define system context and surrounding environment state passed to agents.
- **sequencing note:** Universal execution context.
- **needs decision:** no
- **decision:** —

## 4. Implementation, Source Code & Revision Control Artifacts

### artifact-diff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `diff` | `diffs` | — |
| **card** | [diff](../concepts/addy/diff.md) | [diffs](../concepts/matt/diffs.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:none` | `matt:cross-phase` | — |
| **produces** | Unified line-by-line textual representation of additions, deletions, and context lines. | Unified difference patches indicating line additions, deletions, and modifications. | — |
| **consumes** | Two versions or states of a source code file. | Two commits, branches, or file tree states in a repository. | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** Addy and Matt both define unified diffs representing code changes produced during task execution.
- **sequencing note:** Produced in Build; consumed by Verify and Review.
- **needs decision:** no
- **decision:** —

### artifact-pull-request

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `pull request` | `Pull requests` | `restoration PR` |
| **card** | [pull-request](../concepts/addy/pull-request.md) | [pull-requests](../concepts/matt/pull-requests.md) | [restoration-pr](../concepts/rjm/restoration-pr.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Ship` | `matt:triage` | `rjm:cross-phase` |
| **produces** | A pull request on a hosting platform containing change descriptions, CI status, and reviewer feedback. | Triage labels, verification comments, review notes, or merged/closed status. | Pull request restoring failing book references to the always-on rule surface or strengthening skill triggers. |
| **consumes** | A feature branch with clean atomic commits and passing tests. | External contributor code branches proposed against the repository. | Activation gate failure report and consecutive failure threshold notification. |
| **impl status** | clean | defects: missing-path | clean |

- **class:** SYNONYM
- **difference:** Addy and Matt target GitHub/GitLab pull requests; RJM defines restoration PRs and review artifacts.
- **sequencing note:** Produced in Build / Review; merged in Ship.
- **needs decision:** yes
- **decision:** D-142

### artifact-commit-message

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Change Descriptions` | `commit message` | — |
| **card** | [change-descriptions](../concepts/addy/change-descriptions.md) | [commit-message](../concepts/matt/commit-message.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Review` | `matt:cross-phase` | — |
| **produces** | Structured commit/PR description featuring an imperative first line and detailed context body. | A persistent git history entry capturing the rationale, intent, and resolution context. | — |
| **consumes** | Code changes, design rationale, bug numbers, benchmark metrics, and acknowledged trade-offs. | A resolved conflict or verified bug diagnosis with an identified root cause. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy structures change descriptions per commit; Matt defines structured commit messages.
- **sequencing note:** Produced at task completion in Build.
- **needs decision:** yes
- **decision:** D-143

### artifact-working-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `working increment` | `production code` | — |
| **card** | [working-increment](../concepts/addy/working-increment.md) | [production-code](../concepts/matt/production-code.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Build` | `matt:cross-phase` | — |
| **produces** | A compilable, test-verified state of the codebase committed as a standalone save point. | Deployable, runtime-executed application code. | — |
| **consumes** | The codebase at a stable commit plus a single incremental modification. | Domain logic, architecture specifications, and implementation designs. | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy refers to working increments; Matt refers to production code deliverables.
- **sequencing note:** Core deliverable of the Build phase.
- **needs decision:** yes
- **decision:** D-144

### artifact-working-tree

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `working tree` | `Working title` | — |
| **card** | [working-tree](../concepts/addy/working-tree.md) | [working-title](../concepts/matt/working-title.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Define` | `matt:in-progress` | — |
| **produces** | The complete current state of project files analyzed for diff violations against the merge base. | A provisional H1 heading at the top of the raw fragments file without metadata or table of contents. | — |
| **consumes** | Local files on disk, including staged, unstaged, and untracked modifications. | Initial user topic or conversation context when first initializing the fragments document. | — |
| **impl status** | clean | clean | — |

- **class:** HOMONYM
- **difference:** Addy defines working-tree as the git filesystem state; Matt defines working-title as the provisional name of a document.
- **sequencing note:** Addy: VCS artifact. Matt: editorial artifact.
- **needs decision:** yes
- **decision:** D-145

### artifact-plugin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `plugin` | `Plugin` |
| **card** | — | [plugin](../concepts/matt/plugin.md) | [plugin](../concepts/rjm/plugin.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | An installable plugin bundle for Claude Code. | A versioned, portable bundle enabling distribution and lifecycle execution across repositories. |
| **consumes** | — | Curated skills selected for public distribution. | Agent components including slash commands, skills with SKILL.md, custom agents, hooks, and MCP server configurations. |
| **impl status** | — | clean | defects: missing-path |

- **class:** ALIGNED
- **difference:** Both define Claude Code plugin packages and manifests.
- **sequencing note:** Packaging and distribution artifact.
- **needs decision:** no
- **decision:** —

### artifact-claude-plugin-manifest

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Claude Code plugin` | `marketplace plugin` |
| **card** | — | [claude-code-plugin](../concepts/matt/claude-code-plugin.md) | [marketplace-plugin](../concepts/rjm/marketplace-plugin.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | An installable, read-only plugin bundle distributed via Claude Code's official marketplace or direct git URL. | Distributable package artifact installable into consumer workspaces via Claude Code plugin marketplaces. |
| **consumes** | — | The promoted set of skills located across `skills/engineering/` and `skills/productivity/`, curated via `.claude-plugin/plugin.json`. | Bundled agent templates, skill definitions, hook scripts, and plugin manifest (`plugin.json`). |
| **impl status** | — | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Matt defines claude-code-plugin packaging; RJM defines marketplace-plugin manifests.
- **sequencing note:** Plugin distribution artifact.
- **needs decision:** yes
- **decision:** D-146

### artifact-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `frontmatter` | `frontmatter` |
| **card** | — | [frontmatter](../concepts/matt/frontmatter.md) | [frontmatter](../concepts/rjm/frontmatter.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | YAML header metadata configuring agent skill discovery and invocation behavior. | Structured key-value configuration metadata parsed by agents, commands, and validation scripts. |
| **consumes** | — | Skill name, description, model invocation settings. | Markdown document headers bounded by `---` delimiters. |
| **impl status** | — | clean | defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, other |

- **class:** ALIGNED
- **difference:** Both packages define YAML frontmatter schema blocks for skills and agents.
- **sequencing note:** Metadata header across all skill/agent files.
- **needs decision:** no
- **decision:** —

### artifact-skill-definition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Skill` | `skill` | `Skill` |
| **card** | [skill](../concepts/addy/skill.md) | [skill](../concepts/matt/skill.md) | [skill](../concepts/rjm/skill.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | Structured guidance and step-by-step workflow execution leading to verified deliverables. | An invocable, autonomous or interactive capability executed by an agent or human. | Executed workflows, tool invocations, and structured output envelopes. |
| **consumes** | Developer intent, slash commands, or persona invocations. | Instruction markdown files, agent frontmatter metadata, and optional script or template assets. | Task requirements, tool execution permissions, and user/agent triggers. |
| **impl status** | clean | clean | clean |

- **class:** ALIGNED
- **difference:** All three define the skill directory and SKILL.md specification file.
- **sequencing note:** Plugin skill artifact.
- **needs decision:** no
- **decision:** —

## 5. Testing, Quality, Verification & Diagnostics Artifacts

### artifact-regression-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `regression test` | `regression test` | — |
| **card** | [regression-test](../concepts/addy/regression-test.md) | [regression-test](../concepts/matt/regression-test.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Build` | `matt:cross-phase` | — |
| **produces** | An automated test case that fails without the fix and passes with it. | An automated test that fails before the fix and passes once the fix is applied, preventing regression. | — |
| **consumes** | A reproduced defect scenario and verified root-cause fix. | A minimised reproduction of a bug and an architectural seam that reaches the failure. | — |
| **impl status** | clean | clean in skill (skills/engineering/diagnosing-bugs/SKILL.md:114 has no defects), but associated with defects in docs: other (missing human checkpoint between instrumentation and... | — |

- **class:** ALIGNED
- **difference:** Both define regression test fixtures preventing recurrence of identified bugs.
- **sequencing note:** Created during bugfix; executed in Verify / test.
- **needs decision:** no
- **decision:** —

### artifact-test-execution-results

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Error Output / Test Results` | `failing test` | `test group` |
| **card** | [error-output-test-results](../concepts/addy/error-output-test-results.md) | [failing-test](../concepts/matt/failing-test.md) | [test-group](../concepts/rjm/test-group.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Build` | `matt:diagnosing-bugs` | `rjm:cross-phase` |
| **produces** | Targeted diagnostic error context guiding the agent during debugging iterations. | An automated test suite case asserting the exact defect symptom and failing reliably. | Unbiased final evaluation benchmark score for accepted artifacts. |
| **consumes** | Test failure outputs, stack traces, linter error messages, and build failures. | A known defect symptom and an accessible code seam (unit, integration, or e2e). | Evaluation task set and split configuration specifying `--test-ratio > 0.0`. |
| **impl status** | defects: doc-drift, orphan | clean | defects: doc-drift, internal-contradiction, missing-path |

- **class:** SYNONYM
- **difference:** Addy captures raw error output and test results; Matt isolates failing tests; RJM organizes tests into test groups.
- **sequencing note:** Output of test runner in Verify / test.
- **needs decision:** yes
- **decision:** D-147

### artifact-test-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Test Coverage Analysis` | `test files` | `corpus_verified` |
| **card** | [test-coverage-analysis](../concepts/addy/test-coverage-analysis.md) | [test-files](../concepts/matt/test-files.md) | [corpus-verified](../concepts/rjm/corpus-verified.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Verify` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | Structured report documenting current test coverage, identified gaps, and prioritized recommended tests. | Automated test suites executing behavioral and regression verifications. | Boolean decision payload attribute (`true` if verified, `false` if check never ran). |
| **consumes** | Existing test suites, source code coverage reports, and identified untested logic paths. | Source code under test, test runner harness, and assertion utilities. | Corpus metadata from split configuration and result files. |
| **impl status** | clean | clean | defects: doc-drift, internal-contradiction, missing-path, script-bug |

- **class:** PARTIAL
- **difference:** Addy analyzes test coverage; Matt inspects test files; RJM verifies against reference corpus benchmarks.
- **sequencing note:** Verification gate artifacts.
- **needs decision:** yes
- **decision:** D-148

### artifact-testing-strategy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Testing Strategy` | `Testing Decisions` | `AssertionSpec` |
| **card** | [testing-strategy](../concepts/addy/testing-strategy.md) | [testing-decisions](../concepts/matt/testing-decisions.md) | [assertionspec](../concepts/rjm/assertionspec.md) |
| **kind** | template | artifact | artifact |
| **phase** | `addy:Define` | `matt:engineering` | `rjm:Test` |
| **produces** | Test framework configurations, file locations, coverage targets, and level mappings in the spec. | A specification section articulating what makes a good test, target modules for verification, and codebase prior art. | Evaluation assertion rules defining expected regex patterns, target file paths, or expected file contents. |
| **consumes** | Project test infrastructure, framework tooling, and quality standards. | Agreed test seams negotiated with the user prior to specification writing, plus existing testing patterns in the repository. | Test fixture assertion specifications from JSON fixture documents. |
| **impl status** | defects: doc-drift | clean | clean |

- **class:** SYNONYM
- **difference:** Addy outlines a testing strategy; Matt records testing decisions; RJM defines assertion specifications.
- **sequencing note:** Formulated during Plan; validated during Verify.
- **needs decision:** yes
- **decision:** D-149

### artifact-verification-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verification Story` | `Evidence` | `Evidence` |
| **card** | [verification-story](../concepts/addy/verification-story.md) | [evidence](../concepts/matt/evidence.md) | [evidence](../concepts/rjm/evidence.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:Review` | `matt:productivity` | `rjm:cross-phase` |
| **produces** | Explicit report section documenting evidence of testing, build integrity, and critical path checks. | An Evidence section within a learning record artifact. | Verifiable audit trails, structured verification evidence records, session log compliance fields. |
| **consumes** | Test review results, build verification status, and security inspection records. | Demonstrated user comprehension, such as an answered question, completed exercise, or cited prior experience. | Raw session logs, git status output, provenance markers, analysis outputs. |
| **impl status** | clean | clean | defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug |

- **class:** ALIGNED
- **difference:** All three define verification evidence and proof logs demonstrating that requirements are satisfied.
- **sequencing note:** Produced in Verify / test; handed to Review.
- **needs decision:** no
- **decision:** —

### artifact-debug-trace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `DevTools performance trace` | `debug log` | `Probe` |
| **card** | [devtools-performance-trace](../concepts/addy/devtools-performance-trace.md) | [debug-log](../concepts/matt/debug-log.md) | [probe](../concepts/rjm/probe.md) |
| **kind** | artifact | artifact | artifact |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:none` |
| **produces** | Main-thread flame charts, layout recalculation timings, and long task breakdowns. | Console or log outputs that test specific predictions during bug diagnosis. | Measured runtime telemetry including environment variables, working directory, stdin payloads, and process exit codes. |
| **consumes** | Recorded browser execution timeline via Chrome DevTools or the Chrome DevTools MCP. | Codebase execution paths and active hypothesis probe instrumentation. | Pinned target binary (e.g. copilot CLI, claude) and an isolated execution environment. |
| **impl status** | clean | clean in core technique; associated with risk of secret leakage in unredacted log captures noted in docs/engineering/diagnosing-bugs.md:70 | defects: missing-path |

- **class:** PARTIAL
- **difference:** Addy captures Chrome DevTools performance traces; Matt captures runtime debug logs; RJM executes diagnostic probes.
- **sequencing note:** Diagnostic artifacts during troubleshooting.
- **needs decision:** yes
- **decision:** D-150

## 6. Review, Audit, Critique & Security Artifacts

### artifact-scorecard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Scorecard` | — | `scorecard` |
| **card** | [scorecard](../concepts/addy/scorecard.md) | — | [scorecard](../concepts/rjm/scorecard.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Review` | — | `rjm:none` |
| **produces** | Tabular summary of Core Web Vitals compliance (LCP, INP, CLS) and Lighthouse scores. | — | A structured tabular evaluation summary containing dimension scores out of 10, evidence summaries, inspection methods, and overall DX mean. |
| **consumes** | Lab measurements, field data from CrUX, or null signals in quick mode. | — | Dimension scores, empirical observations, execution logs, and evidence labels from Steps 1 through 8. |
| **impl status** | clean | — | defects: orphan |

- **class:** ALIGNED
- **difference:** Addy and RJM both define evaluation scorecards grading implementation against defined criteria.
- **sequencing note:** Produced during Review phase.
- **needs decision:** no
- **decision:** —

### artifact-review-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Review Output Template` | — | `retrospective_format` |
| **card** | [review-output-template](../concepts/addy/review-output-template.md) | — | [retrospective-format](../concepts/rjm/retrospective-format.md) |
| **kind** | template | — | template |
| **phase** | `addy:Review` | — | `rjm:execution` |
| **produces** | Standardized review output comprising Review Summary, Findings, and Verification Story. | — | Terminal-presented retrospective report directly rendered to stdout for user inspection. |
| **consumes** | Evaluated code review findings and verification results. | — | Plan file path, milestone execution outcomes, reconciliation metrics, plan accuracy observations, approved deviations, and quality review summaries. |
| **impl status** | clean | — | defects: missing-path, internal-contradiction, exit-code-mismatch |

- **class:** SYNONYM
- **difference:** Addy provides a review-output template; RJM provides retrospective and review summary formats.
- **sequencing note:** Produced in Review; gating criteria for Ship.
- **needs decision:** yes
- **decision:** D-151

### artifact-security-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Security Audit Report` | — | `Attack Vectors` |
| **card** | [security-audit-report](../concepts/addy/security-audit-report.md) | — | [attack-vectors](../concepts/rjm/attack-vectors.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Review` | — | `rjm:spec` |
| **produces** | Structured markdown report summarizing security status and documenting specific findings with proofs of concept. | — | stride-threat-matrix |
| **consumes** | Vulnerabilities discovered across input handling, authentication, data protection, infrastructure, and LLM features. | — | assets, threat-actors, data-flow-diagram |
| **impl status** | clean | — | defects: doc-drift |

- **class:** PARTIAL
- **difference:** Addy compiles a formal security audit report; RJM inventories attack vectors and threat models.
- **sequencing note:** Produced during adversarial Review.
- **needs decision:** yes
- **decision:** D-152

### artifact-assumption-challenge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `surviving doubts` | — | `Assumption Challenge Template` |
| **card** | [surviving-doubts](../concepts/addy/surviving-doubts.md) | — | [assumption-challenge-template](../concepts/rjm/assumption-challenge-template.md) |
| **kind** | artifact | — | template |
| **phase** | `addy:Build` | — | `rjm:cross-phase` |
| **produces** | An explicit list of unresolved doubts, highlighted risks, and residual uncertainties attached to the verdict. | — | Structured assumption challenge report formatted with Evidence For, Evidence Against, Alternatives, Uncertainty Level, and Recommendation. |
| **consumes** | Adversarial review findings that could not be verified, reconciled, or disproven. | — | Explicit or implicit architectural assumptions undergoing challenge. |
| **impl status** | clean | — | defects: missing-path |

- **class:** SYNONYM
- **difference:** Addy records surviving doubts after review; RJM formalizes assumption challenges via an explicit template.
- **sequencing note:** Adversarial critique artifact in Review.
- **needs decision:** yes
- **decision:** D-153

## 7. Shipping, Deployment, Rollback & Operations Artifacts

### artifact-changelog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `changelog` | — | `Changelog` |
| **card** | [changelog](../concepts/addy/changelog.md) | — | [changelog](../concepts/rjm/changelog.md) |
| **kind** | artifact | — | template |
| **phase** | `addy:Ship` | — | `rjm:cross-phase` |
| **produces** | A versioned changelog document (e.g. `CHANGELOG.md`) communicating product updates. | — | Tabular revision history linking dates, versions, and change descriptions. |
| **consumes** | Categorized descriptions of added, changed, fixed, deprecated, removed, and security changes. | — | Release notes, version increments, and breaking or non-breaking API changes. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both maintain a CHANGELOG.md recording release versions, features, and fixes.
- **sequencing note:** Updated in Ship phase prior to release tagging.
- **needs decision:** no
- **decision:** —

### artifact-changeset

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `releases` | `changeset` | — |
| **card** | [releases](../concepts/addy/releases.md) | [changeset](../concepts/matt/changeset.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:Ship` | `matt:cross-phase` | — |
| **produces** | Immutable git tag, published package or deployment artifact, and release notes. | Markdown file under `.changeset/` documenting modifications and intended semver bump. | — |
| **consumes** | Verified code on main, clean test suite, git tags, and human-curated changelog. | Committed repository changes, semver bump level, change summary. | — |
| **impl status** | defects: doc-drift, orphan | defects: cross-file-contradiction | — |

- **class:** SYNONYM
- **difference:** Addy tracks releases; Matt uses changesets to manage version bumps and changelog generation.
- **sequencing note:** Release management artifact in Ship.
- **needs decision:** yes
- **decision:** D-617

### artifact-rollback-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Rollback plan` | — | `Rollback Plan` |
| **card** | [rollback-plan](../concepts/addy/rollback-plan.md) | — | [rollback-plan](../concepts/rjm/rollback-plan.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Ship` | — | `rjm:cross-phase` |
| **produces** | An actionable operational plan documenting trigger conditions, step-by-step reversal procedures, and recovery time objectives | — | Documented sequence of immediate revert operations restoring systems to a known stable baseline. |
| **consumes** | Deployment configuration, feature flags, database migrations, and operational monitoring metrics | — | Identified regression, critical test failures, or operational breakdown during deployment or rollout. |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** Addy and RJM both define a documented rollback plan detailing recovery procedures on deployment failure.
- **sequencing note:** Formulated in Plan/Ship; executed conditionally.
- **needs decision:** no
- **decision:** —

### artifact-rollback-steps

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `rollback steps` | — | `Resolution Path` |
| **card** | [rollback-steps](../concepts/addy/rollback-steps.md) | — | [resolution-path](../concepts/rjm/resolution-path.md) |
| **kind** | artifact | — | template |
| **phase** | `addy:Ship` | — | `rjm:Review` |
| **produces** | Step-by-step verified procedures and commands for safely reversing a production release | — | Actionable modification plan guiding the revision of an ADR prior to subsequent review rounds. |
| **consumes** | Deployment architecture details, release identifiers, and target environment configuration | — | Identified P0/P1 issues, review recommendations, debate consensus points. |
| **impl status** | clean | — | defects: cross-file-contradiction |

- **class:** SYNONYM
- **difference:** Addy provides concrete rollback steps; RJM specifies resolution paths for failure recovery.
- **sequencing note:** Operational procedure in rollback plan.
- **needs decision:** yes
- **decision:** D-155

### artifact-runbook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `runbook` | — | `Infrastructure Handoff` |
| **card** | [runbook](../concepts/addy/runbook.md) | — | [infrastructure-handoff](../concepts/rjm/infrastructure-handoff.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Ship` | — | `rjm:test` |
| **produces** | A concise, actionable procedural guide enabling on-call engineers to triage and mitigate incidents. | — | Infrastructure defect report routed to milestone-planner rather than code implementer. |
| **consumes** | Production alerting rules, operational diagnostics, initial queries, and escalation procedures. | — | Diagnostic logs revealing environment misconfigurations, missing dependencies, or test harness failures. |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines an operational runbook; RJM defines infrastructure handoff documentation.
- **sequencing note:** Operational handoff artifact in Ship.
- **needs decision:** yes
- **decision:** D-156

### artifact-launch-runbook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `launch runbook` | — | `Deployment Diagram` |
| **card** | [launch-runbook](../concepts/addy/launch-runbook.md) | — | [deployment-diagram](../concepts/rjm/deployment-diagram.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Ship` | — | `rjm:spec` |
| **produces** | Operational procedural documentation enabling on-call and support engineers to manage release operations | — | Infrastructure deployment topology diagram rendered in Mermaid. |
| **consumes** | Deployment steps, configuration details, health verification commands, and escalation contacts | — | Infrastructure topologies, network diagrams, server node definitions, and hosting environment specs. |
| **impl status** | clean | — | defects: exit-code-mismatch, missing-path |

- **class:** PARTIAL
- **difference:** Addy provides a launch runbook checklist; RJM provides deployment diagrams and topology specs.
- **sequencing note:** Release execution artifacts in Ship.
- **needs decision:** yes
- **decision:** D-157

### artifact-monitoring-dashboards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Dashboards` | — | `SLI (Service Level Indicator)` |
| **card** | [dashboards](../concepts/addy/dashboards.md) | — | [sli-service-level-indicator](../concepts/rjm/sli-service-level-indicator.md) |
| **kind** | artifact | — | artifact |
| **phase** | `addy:Ship` | — | `rjm:cross-phase` |
| **produces** | Visualized service health views answering core operational questions for on-call engineers | — | Concrete quantitative measurement of service behavior over time (e.g. latency percentiles, error percentages). |
| **consumes** | Metric streams, error rates, p99 latency queries, traffic counts, and resource saturation telemetry | — | Raw telemetry metric streams and operational event counters. |
| **impl status** | clean | — | defects: missing-path |

- **class:** SYNONYM
- **difference:** Addy tracks metrics on production dashboards; RJM specifies SLI/SLO indicators for service health.
- **sequencing note:** Post-release telemetry artifacts.
- **needs decision:** yes
- **decision:** D-158

## 8. Documentation, Knowledge, Glossaries & Education Artifacts

### artifact-readme

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `README Structure` | `README` | — |
| **card** | [readme-structure](../concepts/addy/readme-structure.md) | [readme](../concepts/matt/readme.md) | — |
| **kind** | template | artifact | — |
| **phase** | `addy:Ship` | `matt:cross-phase` | — |
| **produces** | A standardized top-level `README.md` enabling quick orientation and onboarding. | Introductory documentation oriented toward human developers and autonomous agents. | — |
| **consumes** | Project name, description, setup instructions, command table, architectural overview, and contributing guidelines. | Repository architecture, setup instructions, orientation details. | — |
| **impl status** | clean | defects: orphan, doc-drift | — |

- **class:** ALIGNED
- **difference:** Addy defines README structure standards; Matt defines top-level repository README files.
- **sequencing note:** Public documentation artifact.
- **needs decision:** no
- **decision:** —

### artifact-readme-md-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `README.md` | `Infrastructure Documentation Format` |
| **card** | — | [readme-md](../concepts/matt/readme-md.md) | [infrastructure-documentation-format](../concepts/rjm/infrastructure-documentation-format.md) |
| **kind** | — | artifact | template |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | A primary landing page and introductory overview document for users and agents. | Durable markdown documentation of pipelines, triggers, jobs, runners, and required secrets. |
| **consumes** | — | Package, skill, or directory purpose and usage instructions. | CI/CD configuration files (GitHub workflows, build scripts), deployment environment details. |
| **impl status** | — | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Matt defines the explicit README.md file; RJM defines infrastructure documentation formats.
- **sequencing note:** Repository documentation file.
- **needs decision:** yes
- **decision:** D-159

### artifact-glossary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `glossary` | `source symbols` |
| **card** | — | [glossary](../concepts/matt/glossary.md) | [source-symbols](../concepts/rjm/source-symbols.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:build` |
| **produces** | — | A markdown glossary (`CONTEXT.md`) containing concise definitions and avoided synonyms for project-specific terms. | The indexed symbol dictionary in `assessment.json` used by Phase 3 compilability checks. |
| **consumes** | — | Domain discussions, business entity naming debates, and clarifying answers during grilling sessions. | Source code AST and regex extractors across supported programming languages. |
| **impl status** | — | defects: other (runaway artifact bloat where CONTEXT.md turns into a running spec in docs/engineering/domain-modeling.md:44-45; missing docs/agents/domain.md path in setup-matt-... | defects: script-bug, internal-contradiction, doc-drift |

- **class:** SYNONYM
- **difference:** Matt maintains domain glossaries of project vocabulary; RJM maintains source symbol indexes.
- **sequencing note:** Living project lexicon artifact.
- **needs decision:** yes
- **decision:** D-160

### artifact-glossary-md-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `GLOSSARY.md` | `Data Stores` |
| **card** | — | [glossary-md](../concepts/matt/glossary-md.md) | [data-stores](../concepts/rjm/data-stores.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:productivity` | `rjm:spec` |
| **produces** | — | A standardized glossary of domain terminology ensuring coherent language across all explainers and exercises. | Persisted data assets subject to Tampering, Information Disclosure, and Denial of Service threats. |
| **consumes** | — | Distilled concepts, terms, and corrected misconceptions acquired during teaching sessions. | Storage schemas, database configurations, caching layers, and file persistence definitions. |
| **impl status** | — | defects: doc-drift (teach/SKILL.md omits linking to GLOSSARY-FORMAT.md in its workspace file list) | defects: exit-code-mismatch, missing-path |

- **class:** PARTIAL
- **difference:** Matt stores vocabulary in GLOSSARY.md; RJM stores project knowledge in structured data stores.
- **sequencing note:** Knowledge storage artifact.
- **needs decision:** yes
- **decision:** D-161

### artifact-shared-language

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `shared language` | `User docs` |
| **card** | — | [shared-language](../concepts/matt/shared-language.md) | [user-docs](../concepts/rjm/user-docs.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | — | A domain glossary document (such as `CONTEXT.md`) that maps project concepts to concise definitions. | End-user documentation files and usage instructions distributed within agent packages. |
| **consumes** | — | Project terminology, domain concepts, and system jargon discussed during initial development or grilling sessions. | Shipped agent definitions, commands, hooks, and operational workflows. |
| **impl status** | — | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Matt defines shared language between engineers and agents; RJM maintains user documentation.
- **sequencing note:** Communication and documentation artifact.
- **needs decision:** yes
- **decision:** D-162

### artifact-learning-records

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `learning-records` | `Sync log` |
| **card** | — | [learning-records](../concepts/matt/learning-records.md) | [sync-log](../concepts/rjm/sync-log.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:productivity` | `rjm:cross-phase` |
| **produces** | — | Sequentially numbered markdown files (`0001-slug.md`) recording key learning milestones. | A durable audit log detailing synchronization dates, upstream commit hashes, and notes on applied modifications. |
| **consumes** | — | Demonstrated mastery, user feedback, or established prior knowledge from completed lessons. | Upstream repository commits, version tags, or local specification drift patch commit ranges. |
| **impl status** | — | defects: internal-contradiction (lack of initial assessment leaves first session with zero learning records) | defects: orphan, missing-path, internal-contradiction, doc-drift |

- **class:** SYNONYM
- **difference:** Matt tracks agent insights in learning records; RJM records synchronization and evolution in sync logs.
- **sequencing note:** Continuous learning memory artifact.
- **needs decision:** yes
- **decision:** D-163

### artifact-documentation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `documentation` | `docs page` | — |
| **card** | [documentation](../concepts/addy/documentation.md) | [docs-page](../concepts/matt/docs-page.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | — |
| **produces** | README updates, API reference docs, ADRs, and guides written in timeless language. | Human-facing documentation markdown files published online to aihero.dev. | — |
| **consumes** | Implemented features, public interfaces, APIs, and architectural decisions. | Skill capabilities, trigger boundaries, common questions, and system positioning. | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** Addy and Matt both produce technical documentation pages for user and developer guidance.
- **sequencing note:** Reference and user documentation.
- **needs decision:** no
- **decision:** —

### artifact-rules-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `rules` | `per-repo config` | `Platform Configuration Schema` |
| **card** | [rules](../concepts/addy/rules.md) | [per-repo-config](../concepts/matt/per-repo-config.md) | [platform-configuration-schema](../concepts/rjm/platform-configuration-schema.md) |
| **kind** | artifact | artifact | template |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | `rjm:cross-phase` |
| **produces** | Concise instruction files (such as `.cursor/rules/*.mdc`) loaded into agent context. | Committed markdown files under `docs/agents/` (`issue-tracker.md`, `triage-labels.md`, `domain.md`). | Validation rules for templates/platforms/*.yaml files declaring per-provider substitution rules consumed by the build pipeline. |
| **consumes** | Architectural constraints, team conventions, operational boundaries, and formatting policies. | Initial user choices and repository discovery inputs during `/setup-matt-pocock-skills`. | Platform specification requirements defined in REQ-003-002 and architectural constraints from ADR-006 Amendment 2026-04-28. |
| **impl status** | clean | clean | defects: cross-file-contradiction, doc-drift |

- **class:** SYNONYM
- **difference:** Addy establishes agent rules; Matt configures per-repo settings; RJM schemas platform configurations.
- **sequencing note:** Harness and agent configuration artifact.
- **needs decision:** yes
- **decision:** D-164

### artifact-claude-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `CLAUDE.md` | `AGENTS.md` | — |
| **card** | [claude-md](../concepts/addy/claude-md.md) | [agents-md](../concepts/matt/agents-md.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:cross-phase` | `matt:cross-phase` | — |
| **produces** | Persistent project-level system instructions automatically loaded into context by Claude Code on session launch. | An always-loaded steering document providing persistent instructions for coding agents across sessions. | — |
| **consumes** | Project tech stack details, canonical build/test/lint commands, code style rules, and pointers to constraints. | Repository rules, coding conventions, architectural invariants, and agent behavior guidelines. | — |
| **impl status** | defects: other, doc-drift, orphan | clean | — |

- **class:** SYNONYM
- **difference:** Addy uses CLAUDE.md for agent rules; Matt uses AGENTS.md for agent instructions.
- **sequencing note:** Harness root instruction artifact.
- **needs decision:** yes
- **decision:** D-165

### artifact-editor-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `cursorrules` | `Domain docs` | — |
| **card** | [cursorrules](../concepts/addy/cursorrules.md) | [domain-docs](../concepts/matt/domain-docs.md) | — |
| **kind** | artifact | artifact | — |
| **phase** | `addy:cross-phase` | `matt:Setup` | — |
| **produces** | Single project-root context file (`.cursorrules`) loaded into all agent sessions in legacy setups. | Scaffolded domain configuration guidelines (`docs/agents/domain.md`) directing downstream skills to read `CONTEXT.md`, `CONTEXT-MAP.md`, and `docs/adr/`. | — |
| **consumes** | Monolithic project rules, coding conventions, and developer guidelines. | The repository's architectural structure, identifying whether it operates as a single-context project or a multi-context monorepo. | — |
| **impl status** | defects: doc-drift, orphan | defects: missing-path (skills/engineering/setup-matt-pocock-skills/domain.md:3 references docs/agents/domain.md which is not present in source repo root and must be instantiated... | — |

- **class:** PARTIAL
- **difference:** Addy targets .cursorrules for Cursor IDE; Matt targets domain documentation.
- **sequencing note:** Configuration / documentation artifact.
- **needs decision:** yes
- **decision:** D-166

### artifact-code-style

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Code Style` | `design principles` | — |
| **card** | [code-style](../concepts/addy/code-style.md) | [design-principles](../concepts/matt/design-principles.md) | — |
| **kind** | template | artifact | — |
| **phase** | `addy:Define` | `matt:cross-phase` | — |
| **produces** | Exemplary code snippets and conventions embedded within the specification document. | Documented architectural design rules and constraints in project context files. | — |
| **consumes** | Project idioms, linter rules, and representative codebase samples. | Architectural consensus, code analysis, and high-level engineering philosophy. | — |
| **impl status** | defects: doc-drift | defects: orphan, doc-drift | — |

- **class:** SYNONYM
- **difference:** Addy defines code style conventions; Matt defines general design principles.
- **sequencing note:** Engineering conventions artifact.
- **needs decision:** yes
- **decision:** D-167

### artifact-assets-collection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `assets` | `Assets` |
| **card** | — | [assets](../concepts/matt/assets.md) | [assets](../concepts/rjm/assets.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:productivity` | `rjm:spec` |
| **produces** | — | Reusable component files in `./assets/` linked by multiple HTML lessons. | threat-model-asset-inventory |
| **consumes** | — | Shared CSS styling, JavaScript quiz logic, simulators, and diagramming utilities. | system-architecture |
| **impl status** | — | defects: script-bug, missing-path (path ambiguity resolving ./ against skill directory) | defects: doc-drift |

- **class:** ALIGNED
- **difference:** Both packages maintain assets directories for media, diagrams, and static files.
- **sequencing note:** Static repository assets.
- **needs decision:** no
- **decision:** —

### artifact-components

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `components` | `Components` |
| **card** | — | [components](../concepts/matt/components.md) | [components](../concepts/rjm/components.md) |
| **kind** | — | artifact | template |
| **phase** | — | `matt:Productivity` | `rjm:cross-phase` |
| **produces** | — | Reusable CSS, JavaScript widgets, quiz runners, and diagram templates saved in `./assets/`. | Tabular inventory of architectural modules with explicit responsibilities and dependencies. |
| **consumes** | — | Lesson design requirements and workspace styling specifications. | System decomposition, service boundaries, data store mappings, and ownership rosters. |
| **impl status** | — | defects: script-bug, internal-contradiction | clean |

- **class:** ALIGNED
- **difference:** Both packages define modular components within the agent system.
- **sequencing note:** Modular architectural components.
- **needs decision:** no
- **decision:** —

### artifact-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `workflow` | `Workflow` |
| **card** | — | [workflow](../concepts/matt/workflow.md) | [workflow](../concepts/rjm/workflow.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:in-progress` | `rjm:cross-phase` |
| **produces** | — | A markdown specification file in workflows/*.md defining execution steps and checkpoints. | Automated CI/CD build, validation, and release pipelines. |
| **consumes** | — | An identified recurring loop and answers elicited during grilling rounds. | YAML pipeline files in .github/workflows/*.yml and external GitHub Action dependencies. |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** Both packages define structured workflows coordinating agent actions.
- **sequencing note:** Lifecycle workflow definitions.
- **needs decision:** no
- **decision:** —

### artifact-explainers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `explainers` | `explainers` |
| **card** | — | [explainers](../concepts/matt/explainers.md) | [explainers](../concepts/rjm/explainers.md) |
| **kind** | — | artifact | artifact |
| **phase** | — | `matt:cross-phase` | `rjm:plan` |
| **produces** | — | Conceptual teaching documents and exercise subfolders (`explainer/` with `readme.md`). | A written explanatory document detailing architectural goals, context, and expected behaviors before work begins. |
| **consumes** | — | Curated knowledge from `RESOURCES.md` and canonical terms from `GLOSSARY.md`. | Problem statement, user requirements, and technical constraints. |
| **impl status** | — | defects: doc-drift (teach/SKILL.md omits link to GLOSSARY-FORMAT.md) | defects: missing-path, doc-drift |

- **class:** ALIGNED
- **difference:** Both packages provide explainer documents detailing concepts and patterns.
- **sequencing note:** Educational explainer artifacts.
- **needs decision:** no
- **decision:** —

## 9. Addy Package-Specific Artifacts & Templates

### artifact-addy-api-docs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `API docs` | — | — |
| **card** | [api-docs](../concepts/addy/api-docs.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Type-annotated TSDoc/JSDoc comments and OpenAPI/Swagger schema documentation for public interfaces. | — | — |
| **consumes** | Public endpoints, library interfaces, type signatures, error responses, parameters. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: API docs (api-docs). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-skill-gap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `skill-gap` | — | — |
| **card** | [skill-gap](../concepts/addy/skill-gap.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | A structured GitHub issue containing the affected skill, excerpt, project context, failure description, and workaround | — | — |
| **consumes** | Observed skill failures, outdated instructions, ecosystem incompatibilities, and project context | — | — |
| **impl status** | defects: orphan (.github/ISSUE_TEMPLATE/skill-gap.yml:1 issue template is not invoked by repository workflows) | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: skill-gap (skill-gap). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-floor-section

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Floor section` | — | — |
| **card** | [floor-section](../concepts/addy/floor-section.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | A dedicated section in CONSTRAINTS.md defining non-negotiable floor rules. | — | — |
| **consumes** | Five critical weakening moves (suppressions, skipped tests, disabled checks, stubs, reduced thresholds). | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Floor section (floor-section). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-simplify-ignore-start

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `simplify-ignore-start` | — | — |
| **card** | [simplify-ignore-start](../concepts/addy/simplify-ignore-start.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Trigger signal instructing simplify-ignore hook to buffer following lines until closing marker | — | — |
| **consumes** | Code comments in source files marked for exclusion from simplification | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: simplify-ignore-start (simplify-ignore-start). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-user-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `User skills` | — | — |
| **card** | [user-skills](../concepts/addy/user-skills.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Globally available agent workflows accessible across all projects on the local machine. | — | — |
| **consumes** | User-authored or user-installed skill definitions located in the user home directory. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: User skills (user-skills). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-perf-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PERF.md` | — | — |
| **card** | [perf-md](../concepts/addy/perf-md.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Persistent historical ledger of performance experiments preventing future engineers and agents from repeating discarded optimizations. | — | — |
| **consumes** | Performance optimization hypotheses, baseline metrics, post-change benchmarks, keep/revert verdicts, and root-cause explanations. | — | — |
| **impl status** | defects: other | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: PERF.md (perf-md). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-exceptions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Exceptions` | — | — |
| **card** | [exceptions](../concepts/addy/exceptions.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | An auditable markdown table in `CONSTRAINTS.md` documenting authorized, time-bounded exceptions to project quality rules. | — | — |
| **consumes** | Tracked technical debt, rule waiver justifications, ticket references, designated owner, and expiration date. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Exceptions (exceptions). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-skill-discovery-flowchart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `skill discovery flowchart` | — | — |
| **card** | [skill-discovery-flowchart](../concepts/addy/skill-discovery-flowchart.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Selection of the appropriate specialized skill or command | — | — |
| **consumes** | User task description or development objective | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: skill discovery flowchart (skill-discovery-flowchart). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-acknowledged-risks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `acknowledged risks` | — | — |
| **card** | [acknowledged-risks](../concepts/addy/acknowledged-risks.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | A documented registry of known risks accepted by stakeholders prior to deployment. | — | — |
| **consumes** | Identified non-critical issues, performance edge cases, or partial feature limitations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: acknowledged risks (acknowledged-risks). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-deprecation-headers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `deprecation headers` | — | — |
| **card** | [deprecation-headers](../concepts/addy/deprecation-headers.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Standardized HTTP response headers communicating retirement timelines and migration URLs to consuming clients. | — | — |
| **consumes** | API route definition, deprecation policy, sunset date schedule, and HTTP response handling middleware. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: deprecation headers (deprecation-headers). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-dialogue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `dialogue` | — | — |
| **card** | [dialogue](../concepts/addy/dialogue.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | Conversational responses, clarifications, structured recommendations, and diagnostic interview turns. | — | — |
| **consumes** | User prompts and requirements presented in interactive conversation. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: dialogue (dialogue). Defined in addy:none. 
- **sequencing note:** Addy-specific phase: addy:none.
- **needs decision:** no
- **decision:** —

### artifact-addy-production-dashboard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Production dashboard` | — | — |
| **card** | [production-dashboard](../concepts/addy/production-dashboard.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Real-time visibility into production request rates, latencies, and transaction error frequencies | — | — |
| **consumes** | Configured telemetry emitters, logging pipelines, and metric aggregation dashboards | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Production dashboard (production-dashboard). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-metric

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Metric` | — | — |
| **card** | [metric](../concepts/addy/metric.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Time-series aggregations (RED and USE patterns) plotted on dashboards and evaluated by alert rules. | — | — |
| **consumes** | Numerical measurements, latency samples, counters, and bounded label sets. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Metric (metric). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-basic-ci-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Basic CI Pipeline` | — | — |
| **card** | [basic-ci-pipeline](../concepts/addy/basic-ci-pipeline.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | .github/workflows/ci.yml configuration file defining automated CI jobs. | — | — |
| **consumes** | Git repository with Node.js project configuration (package.json, lockfile). | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Basic CI Pipeline (basic-ci-pipeline). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-structured-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Structured log` | — | — |
| **card** | [structured-log](../concepts/addy/structured-log.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Machine-parseable JSON log records with stable event names and key-value fields. | — | — |
| **consumes** | Discrete application events, contextual metadata, error codes, and correlation IDs. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Structured log (structured-log). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-candidate-meters

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Candidate meters` | — | — |
| **card** | [candidate-meters](../concepts/addy/candidate-meters.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Evaluated options for quantifiable consumption metrics to be decided and finalized in the feature spec | — | — |
| **consumes** | Business pricing models, user interaction patterns, and application telemetry event capabilities | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Candidate meters (candidate-meters). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-success-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Success Criteria` | — | — |
| **card** | [success-criteria](../concepts/addy/success-criteria.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Specific, falsifiable, and testable acceptance conditions and numeric targets. | — | — |
| **consumes** | User stories, subjective requirements, and problem statements. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Success Criteria (success-criteria). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-windsurfrules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `.windsurfrules` | — | — |
| **card** | [windsurfrules](../concepts/addy/windsurfrules.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Persistent project-level instructions loaded by the Codeium Windsurf IDE. | — | — |
| **consumes** | Core skills concatenated or configured for project-specific workflows. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: .windsurfrules (windsurfrules). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** yes
- **decision:** D-168

### artifact-addy-relevant-source-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Relevant Source Files` | — | — |
| **card** | [relevant-source-files](../concepts/addy/relevant-source-files.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Accurate, ground-truth context about project APIs and conventions before code is written. | — | — |
| **consumes** | Target source code files, related test files, existing pattern examples, and type definitions. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Relevant Source Files (relevant-source-files). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-sdd-cache-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `sdd-cache hook` | — | — |
| **card** | [sdd-cache-hook](../concepts/addy/sdd-cache-hook.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Locally cached documentation payloads and reduced network bandwidth during source-driven development. | — | — |
| **consumes** | WebFetch tool calls, origin HTTP headers, and local disk storage at .claude/sdd-cache/. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: sdd-cache hook (sdd-cache-hook). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-migration-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `migration guide` | — | — |
| **card** | [migration-guide](../concepts/addy/migration-guide.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Documentation artifact outlining replacement imports, configuration updates, and verification commands. | — | — |
| **consumes** | Deprecated system interfaces, replacement system APIs, breaking changes list, and verification tooling. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: migration guide (migration-guide). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-commands

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Commands` | — | — |
| **card** | [commands](../concepts/addy/commands.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Lifecycle phase orchestration, invocation of domain skills, and execution of automated verification scripts. | — | — |
| **consumes** | User slash-command invocations, CLI arguments, and active repository context. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Commands (commands). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-severity-labels

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `severity labels` | — | — |
| **card** | [severity-labels](../concepts/addy/severity-labels.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Standardized review annotations indicating whether an issue is blocking (e.g. Blocker, Warning, Nit, Question). | — | — |
| **consumes** | Code review comments, discovered issues, security findings, and style suggestions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: severity labels (severity-labels). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-constraintsignore

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `.constraintsignore` | — | — |
| **card** | [constraintsignore](../concepts/addy/constraintsignore.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | A path-level ignore list evaluated by the floor guard before flagging rule violations. | — | — |
| **consumes** | File glob patterns identifying repository paths legitimately exempted from floor checks. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: .constraintsignore (constraintsignore). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-spec-architecture-docs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Spec / Architecture Docs` | — | — |
| **card** | [spec-architecture-docs](../concepts/addy/spec-architecture-docs.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Targeted specification context scoped to the immediate feature under development. | — | — |
| **consumes** | Feature specifications and architecture documentation. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Spec / Architecture Docs (spec-architecture-docs). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-deprecation-notice

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Deprecation Notice` | — | — |
| **card** | [deprecation-notice](../concepts/addy/deprecation-notice.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Standardized announcement document or code notice communicating deprecation terms and migration instructions to consumers. | — | — |
| **consumes** | Deprecated component identifier, effective date, recommended replacement system, removal schedule, and technical rationale. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Deprecation Notice (deprecation-notice). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-conversation-history

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Conversation History` | — | — |
| **card** | [conversation-history](../concepts/addy/conversation-history.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Active session state that requires periodic summarization, compaction, or reset. | — | — |
| **consumes** | Multi-turn interaction logs, user prompt sequences, and agent tool execution history. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Conversation History (conversation-history). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-floor-guard-mjs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `floor-guard.mjs` | — | — |
| **card** | [floor-guard-mjs](../concepts/addy/floor-guard-mjs.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Standardized process exit codes (0 for clean, 1 for violations, 2 for failure to execute) and formatted error findings. | — | — |
| **consumes** | Git repository diffs against merge base, untracked files via `git ls-files`, and `CONSTRAINTS.md`. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: floor-guard.mjs (floor-guard-mjs). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** yes
- **decision:** D-169

### artifact-addy-database-change

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Database change` | — | — |
| **card** | [database-change](../concepts/addy/database-change.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Updated database schema structure and persistent data modifications | — | — |
| **consumes** | Database migration scripts, schema definitions, and staging verification data | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Database change (database-change). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-artifact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `artifact` | — | — |
| **card** | [artifact](../concepts/addy/artifact.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | The minimal reviewable unit evaluated by the fresh-context reviewer. | — | — |
| **consumes** | A diff, function, architectural proposal, or concrete factual claim under evaluation. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: artifact (artifact). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-untracked-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `untracked files` | — | — |
| **card** | [untracked-files](../concepts/addy/untracked-files.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Synthetic file diffs generated through `git diff --no-index /dev/null <file>` for floor inspection. | — | — |
| **consumes** | File listings discovered via `git ls-files --others --exclude-standard`. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: untracked files (untracked-files). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-rules-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `rules files` | — | — |
| **card** | [rules-files](../concepts/addy/rules-files.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Persistent configuration files (`CLAUDE.md`, `.cursorrules`, `.windsurfrules`, `AGENTS.md`) loaded into agent context across sessions. | — | — |
| **consumes** | Project-wide conventions, command definitions, code style rules, test patterns, architectural boundaries. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: rules files (rules-files). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** yes
- **decision:** D-170

### artifact-addy-command

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Command` | — | — |
| **card** | [command](../concepts/addy/command.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Orchestrated invocation of corresponding skills and agent personas. | — | — |
| **consumes** | User invocation (e.g. slash command in terminal or chat) and optional arguments. | — | — |
| **impl status** | clean in docs/agents.md; defects: unfailable-gate, missing-path in hooks/hooks.json | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Command (command). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-project-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Project rules` | — | — |
| **card** | [project-rules](../concepts/addy/project-rules.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | `.cursor/rules/*.mdc` rule files checked into version control for workspace-wide enforcement. | — | — |
| **consumes** | Project-specific architectural constraints, repository policies, and file glob patterns. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Project rules (project-rules). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** yes
- **decision:** D-171

### artifact-addy-exceptions-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `exceptions table` | — | — |
| **card** | [exceptions-table](../concepts/addy/exceptions-table.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | A structured table tracking rule exemptions with owners, reasons, and expiration dates. | — | — |
| **consumes** | Approved temporary exemptions from project constraints. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: exceptions table (exceptions-table). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `baseline` | — | — |
| **card** | [baseline](../concepts/addy/baseline.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | An empirical measurement record (timings, memory, queries) documenting current performance before code changes. | — | — |
| **consumes** | Reproducible profiling harness, representative test datasets, and performance measurement tools. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: baseline (baseline). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-account-data

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `account data` | — | — |
| **card** | [account-data](../concepts/addy/account-data.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Authoritative customer identity records and profile state accessible by downstream modules | — | — |
| **consumes** | User registration records, organization tenant definitions, and membership rosters | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: account data (account-data). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-simplify-ignore-end

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `simplify-ignore-end` | — | — |
| **card** | [simplify-ignore-end](../concepts/addy/simplify-ignore-end.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Signals hook to write cached block content to disk cache and output placeholder line | — | — |
| **consumes** | Active buffered block initiated by simplify-ignore-start | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: simplify-ignore-end (simplify-ignore-end). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-objective

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Objective` | — | — |
| **card** | [objective](../concepts/addy/objective.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | The introductory section of a specification establishing project goals and target users. | — | — |
| **consumes** | User requirements, problem statements, and business motivation. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Objective (objective). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-trace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Trace` | — | — |
| **card** | [trace](../concepts/addy/trace.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | End-to-end directed acyclic graphs depicting request latency breakdowns across services and internal operations. | — | — |
| **consumes** | Distributed spans, context propagation headers across service and asynchronous boundaries, and sampling policies. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Trace (trace). Defined in addy:Ship. 
- **sequencing note:** Addy-specific phase: addy:Ship.
- **needs decision:** no
- **decision:** —

### artifact-addy-trigger-prompts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `trigger prompts` | — | — |
| **card** | [trigger-prompts](../concepts/addy/trigger-prompts.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Positive and negative trigger prompt test sets in eval case definitions (`evals/cases/<skill>.json`). | — | — |
| **consumes** | Authentic developer task descriptions, real-world user phrasing variations, and task contexts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: trigger prompts (trigger-prompts). Defined in addy:Verify. 
- **sequencing note:** Addy-specific phase: addy:Verify.
- **needs decision:** no
- **decision:** —

### artifact-addy-usage-dashboard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `usage dashboard` | — | — |
| **card** | [usage-dashboard](../concepts/addy/usage-dashboard.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | Visualized administrative usage telemetry summarizing consumption metrics and financial spend | — | — |
| **consumes** | Billing transaction history, account member tallies, and API usage event records | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: usage dashboard (usage-dashboard). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-skills-cli

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `skills CLI` | — | — |
| **card** | [skills-cli](../concepts/addy/skills-cli.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | Installed skill files in agent configuration directories. | — | — |
| **consumes** | Skill packages from addyosmani/agent-skills. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: skills CLI (skills-cli). Defined in addy:none. 
- **sequencing note:** Addy-specific phase: addy:none.
- **needs decision:** no
- **decision:** —

### artifact-addy-constraints-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `CONSTRAINTS.md` | — | — |
| **card** | [constraints-md](../concepts/addy/constraints-md.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Repo-root quality contract defining enforced numbers, floor checks, and exception expiries. | — | — |
| **consumes** | Quality interview responses, baseline metric measurements, and tool configurations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: CONSTRAINTS.md (constraints-md). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-addy-session-stores

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `session stores` | — | — |
| **card** | [session-stores](../concepts/addy/session-stores.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Persistent, scalable storage mechanism for active user session objects | — | — |
| **consumes** | External database or cache backend and compatible framework store adapter | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: session stores (session-stores). Defined in addy:Build. 
- **sequencing note:** Addy-specific phase: addy:Build.
- **needs decision:** no
- **decision:** —

### artifact-addy-web-performance-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Web Performance Audit` | — | — |
| **card** | [web-performance-audit](../concepts/addy/web-performance-audit.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Comprehensive markdown performance audit document with prioritized findings and Core Web Vitals scorecard. | — | — |
| **consumes** | Web application code, runtime performance traces, and empirical measurement reports. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Web Performance Audit (web-performance-audit). Defined in addy:Review. 
- **sequencing note:** Addy-specific phase: addy:Review.
- **needs decision:** no
- **decision:** —

### artifact-addy-enforced-with-numbers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Enforced with numbers` | — | — |
| **card** | [enforced-with-numbers](../concepts/addy/enforced-with-numbers.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | A structured markdown table mapping each quality dimension to a numerical rule, checking command, and execution stage. | — | — |
| **consumes** | User selections for enforced quality dimensions, numerical thresholds, and chosen tooling. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Enforced with numbers (enforced-with-numbers). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-user-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `User rules` | — | — |
| **card** | [user-rules](../concepts/addy/user-rules.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Persistent IDE configuration applied to all workspaces opened by that user. | — | — |
| **consumes** | Personal engineering preferences, universal tool settings, and global policies. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: User rules (user-rules). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** yes
- **decision:** D-172

### artifact-addy-project-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Project Structure` | — | — |
| **card** | [project-structure](../concepts/addy/project-structure.md) | — | — |
| **kind** | template | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | A documented directory and file layout map within the specification. | — | — |
| **consumes** | Existing codebase architecture, conventions, and module structure. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Project Structure (project-structure). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-measured-not-yet-enforced

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Measured, not yet enforced` | — | — |
| **card** | [measured-not-yet-enforced](../concepts/addy/measured-not-yet-enforced.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | A structured table in CONSTRAINTS.md tracking metrics, baseline values, and enforcement directions. | — | — |
| **consumes** | Baseline measurements of codebase metrics lacking explicit target numbers. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Measured, not yet enforced (measured-not-yet-enforced). Defined in addy:Define. 
- **sequencing note:** Addy-specific phase: addy:Define.
- **needs decision:** no
- **decision:** —

### artifact-addy-project-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Project skills` | — | — |
| **card** | [project-skills](../concepts/addy/project-skills.md) | — | — |
| **kind** | artifact | — | — |
| **phase** | `addy:cross-phase` | — | — |
| **produces** | Step-by-step procedural workflow execution with embedded verification gates within the project. | — | — |
| **consumes** | Workflow definitions (`SKILL.md`), task context matching frontmatter descriptions. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to Addy: Project skills (project-skills). Defined in addy:cross-phase. 
- **sequencing note:** Addy-specific phase: addy:cross-phase.
- **needs decision:** no
- **decision:** —

## 10. Matt Package-Specific Artifacts & Templates

### artifact-matt-closing-summary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `closing summary` | — |
| **card** | — | [closing-summary](../concepts/matt/closing-summary.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | A consolidated terminal report outlining what succeeded and what manual steps remain. | — |
| **consumes** | — | The execution log, written variable lists, and skipped warning stages from the wizard run. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: closing summary (closing-summary). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-logic-prototype

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Logic Prototype` | — |
| **card** | — | [logic-prototype](../concepts/matt/logic-prototype.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A standalone HTML file containing a portable logic module, readable state panel, free-play buttons, and guided scenario walkthroughs. | — |
| **consumes** | — | Design uncertainty regarding business logic, state transitions, or data models. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Logic Prototype (logic-prototype). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-shareable-demo

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `shareable demo` | — |
| **card** | — | [shareable-demo](../concepts/matt/shareable-demo.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A standalone, zero-dependency HTML demo file runnable via double-click in any browser. | — |
| **consumes** | — | A state model, business logic question, or data shape requiring interactive validation. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: shareable demo (shareable-demo). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-domain-glossary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `domain glossary` | — |
| **card** | — | [domain-glossary](../concepts/matt/domain-glossary.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Consistent domain terminology throughout specs, ticket titles, issues, and code identifiers. | — |
| **consumes** | — | Repository ubiquitous language documents, typically maintained in root `CONTEXT.md` or scoped context files. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: domain glossary (domain-glossary). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-docs-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `docs/agents/` | — |
| **card** | — | [docs-agents](../concepts/matt/docs-agents.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Persistent agent configuration documents such as domain guides, issue tracker conventions, and triage label definitions. | — |
| **consumes** | — | Repository configuration decisions made during setup-matt-pocock-skills. | — |
| **impl status** | — | defects: missing-path, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: docs/agents/ (docs-agents). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-top-recommendation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Top recommendation` | — |
| **card** | — | [top-recommendation](../concepts/matt/top-recommendation.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A singled-out primary candidate presented as the default starting point for human decision-making. | — |
| **consumes** | — | A complete set of evaluated and ranked architectural candidates. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Top recommendation (top-recommendation). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-ui-prototype

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `UI Prototype` | — |
| **card** | — | [ui-prototype](../concepts/matt/ui-prototype.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | 3 to 5 structurally distinct UI variant components switchable via URL parameters and a floating bottom bar. | — |
| **consumes** | — | A visual layout question or user interface dilemma, along with an existing host route or new throwaway route. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: UI Prototype (ui-prototype). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-reference-documents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Reference Documents` | — |
| **card** | — | [reference-documents](../concepts/matt/reference-documents.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | Compressed markdown or HTML reference sheets in `./reference/*.html`. | — |
| **consumes** | — | Raw knowledge, syntax, algorithms, or definitions distilled from completed lessons. | — |
| **impl status** | — | defects: doc-drift, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Reference Documents (reference-documents). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-throwaway-branch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `throwaway branch` | — |
| **card** | — | [throwaway-branch](../concepts/matt/throwaway-branch.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A git branch named `prototype/<name>` or `research/<name>` branched off main that is never merged. | — |
| **consumes** | — | Exploratory prototype code, UI variants, or spike scripts. | — |
| **impl status** | — | clean (in skills/engineering/prototype/); defects: missing-path, doc-drift (in CHANGELOG.md) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: throwaway branch (throwaway-branch). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-child

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `child` | — |
| **card** | — | [child](../concepts/matt/child.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | Investigative answers, research reports, prototypes, or resolved sub-tasks. | — |
| **consumes** | — | Parent wayfinder map defining overall scope and goals. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: child (child). Defined in matt:wayfinder. 
- **sequencing note:** Matt-specific phase: matt:wayfinder.
- **needs decision:** no
- **decision:** —

### artifact-matt-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `template` | — |
| **card** | — | [template](../concepts/matt/template.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | A standardized shell environment providing fixed helper functions for wizard generation. | — |
| **consumes** | — | The reusable skills/engineering/wizard/template.sh base script. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: template (template). Defined in matt:Engineering. 
- **sequencing note:** Matt-specific phase: matt:Engineering.
- **needs decision:** yes
- **decision:** D-173

### artifact-matt-solutions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `solutions` | — |
| **card** | — | [solutions](../concepts/matt/solutions.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Exercise directories (`solution/`) containing complete working implementations in `main.ts` and documentation in `readme.md`. | — |
| **consumes** | — | Validated solution code and explanatory walk-through text. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: solutions (solutions). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-seed-template-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `seed-template schema` | — |
| **card** | — | [seed-template-schema](../concepts/matt/seed-template-schema.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | Structural expectations against which emitted repository configuration files can be checked for drift. | — |
| **consumes** | — | Seed template definitions bundled with setup skills. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: seed-template schema (seed-template-schema). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** yes
- **decision:** D-174

### artifact-matt-mission

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `mission` | — |
| **card** | — | [mission](../concepts/matt/mission.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | The foundational purpose and scope document recorded in `MISSION.md`. | — |
| **consumes** | — | User goals, motivation, and learning preferences explored through an initial interview. | — |
| **impl status** | — | defects: doc-drift, script-bug, internal-contradiction | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: mission (mission). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-handoff-summary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `handoff summary` | — |
| **card** | — | [handoff-summary](../concepts/matt/handoff-summary.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | An ephemeral prompt string containing a "suggested skills" section and artifact pointers, with sensitive credentials and duplicated repo content redacted. | — |
| **consumes** | — | The active conversation history, recent decisions, artifact links, and optional user arguments specifying the next session's focus. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: handoff summary (handoff-summary). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-throwaway-harness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `throwaway harness` | — |
| **card** | — | [throwaway-harness](../concepts/matt/throwaway-harness.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:diagnosing-bugs` | — |
| **produces** | — | An ephemeral execution driver triggering the defect with minimal runtime overhead. | — |
| **consumes** | — | The defective code path and minimal or mocked dependencies. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: throwaway harness (throwaway-harness). Defined in matt:diagnosing-bugs. 
- **sequencing note:** Matt-specific phase: matt:diagnosing-bugs.
- **needs decision:** no
- **decision:** —

### artifact-matt-codex-plugin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Codex plugin` | — |
| **card** | — | [codex-plugin](../concepts/matt/codex-plugin.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | none (deferred distribution artifact). | — |
| **consumes** | — | Codex manifest requirements (`.codex-plugin/plugin.json`) and repository layout constraints. | — |
| **impl status** | — | not-implemented: deferred due to Codex manifest limitation requiring a single path string and stripping symlinks on install. | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Codex plugin (codex-plugin). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-design-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `design document` | — |
| **card** | — | [design-document](../concepts/matt/design-document.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | A concise, structured markdown file in `.out-of-scope/` capturing the rejection rationale and historical issue references. | — |
| **consumes** | — | A maintainer's decision to reject a requested enhancement, including the domain concept, reasoning, and linked issue discussions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: design document (design-document). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-map-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `map.md` | — |
| **card** | — | [map-md](../concepts/matt/map-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | Persistent state tracking notes, accumulated decisions, and child ticket relationships. | — |
| **consumes** | — | High-level exploration goals and questions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: map.md (map-md). Defined in matt:wayfinder. 
- **sequencing note:** Matt-specific phase: matt:wayfinder.
- **needs decision:** yes
- **decision:** D-175

### artifact-matt-candidate-card

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Candidate card` | — |
| **card** | — | [candidate-card](../concepts/matt/candidate-card.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | An `<article>` element in the HTML architecture review report presenting an individual candidate refactoring. | — |
| **consumes** | — | Identified architectural refactoring candidates, problem descriptions, proposed solutions, impacted files, and dependency categories. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Candidate card (candidate-card). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-resources-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `RESOURCES.md` | — |
| **card** | — | [resources-md](../concepts/matt/resources-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A persistent bibliography file dividing references into Knowledge and Wisdom. | — |
| **consumes** | — | External search results, authoritative documentation, books, and practitioner communities. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: RESOURCES.md (resources-md). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-handoff-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `handoff document` | — |
| **card** | — | [handoff-document](../concepts/matt/handoff-document.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A markdown file in the OS temporary directory containing live context and suggested skills. | — |
| **consumes** | — | A rich conversation history with in-flight work, open questions, and next actions. | — |
| **impl status** | — | defects: other (temp files vanishing between sessions; shell interpolation bugs; unverified assumptions passed as facts) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: handoff document (handoff-document). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `map` | — |
| **card** | — | [map](../concepts/matt/map.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Plan` | — |
| **produces** | — | A directed graph of decision tickets on the issue tracker tracking questions, assumptions, and dependencies. | — |
| **consumes** | — | An ambiguous, large-scale goal or destination that exceeds the scope of a single context window. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: map (map). Defined in matt:Plan. 
- **sequencing note:** Matt-specific phase: matt:Plan.
- **needs decision:** yes
- **decision:** D-176

### artifact-matt-glossaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Glossaries` | — |
| **card** | — | [glossaries](../concepts/matt/glossaries.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | Term-and-definition reference documents (e.g. following `GLOSSARY-FORMAT.md`). | — |
| **consumes** | — | Domain-specific terminology and nomenclature encountered during topic research. | — |
| **impl status** | — | defects: doc-drift, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Glossaries (glossaries). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-child-issue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `child issue` | — |
| **card** | — | [child-issue](../concepts/matt/child-issue.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | An individual tracker issue sized to fit within a single 100K token agent session. | — |
| **consumes** | — | The parent `wayfinder:map` issue and an identified open question or decision. | — |
| **impl status** | — | defects: other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: child issue (child-issue). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `PR` | — |
| **card** | — | [pr](../concepts/matt/pr.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:implement` | — |
| **produces** | — | A GitHub Pull Request proposal containing the consolidated implementation ready for review and merge. | — |
| **consumes** | — | Feature branch commits, ticket implementations, and code review verdicts. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: PR (pr). Defined in matt:implement. 
- **sequencing note:** Matt-specific phase: matt:implement.
- **needs decision:** no
- **decision:** —

### artifact-matt-problem

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `problem/` | — |
| **card** | — | [problem](../concepts/matt/problem.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A dedicated workspace folder where learners write code to solve the exercise. | — |
| **consumes** | — | Incomplete starter code, problem readme with instructions, and TODO tasks. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: problem/ (problem). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-fragment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `fragment` | — |
| **card** | — | [fragment](../concepts/matt/fragment.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | Discrete text entries separated by horizontal rules inside an unstructured exploratory markdown document. | — |
| **consumes** | — | Author dialogue, reactions, vignettes, punchlines, and observations elicited through conversational questioning. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: fragment (fragment). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-github-actions-secrets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `GitHub Actions secrets` | — |
| **card** | — | [github-actions-secrets](../concepts/matt/github-actions-secrets.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | Encrypted repository or organization secrets accessible to GitHub Actions pipelines. | — |
| **consumes** | — | Sensitive credentials required for automated build, test, and deployment workflows in CI. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: GitHub Actions secrets (github-actions-secrets). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-problems

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `problems` | — |
| **card** | — | [problems](../concepts/matt/problems.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Interactive exercise directories (`problem/`) containing `readme.md` files and starter code with explicit TODO comments. | — |
| **consumes** | — | Exercise specifications and pedagogical learning goals. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: problems (problems). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-next-beats

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `next beats` | — |
| **card** | — | [next-beats](../concepts/matt/next-beats.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | A selected next beat appended to the article file on disk. | — |
| **consumes** | — | The current article text on disk, the running set of grounded concepts, and the raw material pile. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: next beats (next-beats). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-html-lessons

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `HTML lessons` | — |
| **card** | — | [html-lessons](../concepts/matt/html-lessons.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Standalone HTML files in `./lessons/` featuring typography, interactive quizzes, and source citations. | — |
| **consumes** | — | Curated knowledge from RESOURCES.md, formatted against the mission and learning history. | — |
| **impl status** | — | defects: internal-contradiction (quiz answers consistently placed in slot A) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: HTML lessons (html-lessons). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-local-ticket-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `local-ticket-template` | — |
| **card** | — | [local-ticket-template](../concepts/matt/local-ticket-template.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Standardized markdown ticket files (`<NN>-<slug>.md`) containing title, what to build, blocked by, status, and acceptance criteria. | — |
| **consumes** | — | Approved vertical slice tickets when publishing to local files under `.scratch/<feature-slug>/issues/`. | — |
| **impl status** | — | defects: missing-path (skills/engineering/to-tickets/SKILL.md:11 missing setup command) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: local-ticket-template (local-ticket-template). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** yes
- **decision:** D-177

### artifact-matt-the-mission

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `The Mission` | — |
| **card** | — | [the-mission](../concepts/matt/the-mission.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | `MISSION.md` document defining objectives, constraints, and success criteria for the teaching workspace. | — |
| **consumes** | — | User's learning request and real-world motivation for studying a topic. | — |
| **impl status** | — | defects: doc-drift, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: The Mission (the-mission). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-context-map-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `CONTEXT-MAP.md` | — |
| **card** | — | [context-map-md](../concepts/matt/context-map-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A markdown index artifact at repo root listing all domain contexts, their file paths, and their relationships. | — |
| **consumes** | — | Identification of multiple bounded contexts, sub-projects, or monorepo packages. | — |
| **impl status** | — | defects: doc-drift, orphan | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: CONTEXT-MAP.md (context-map-md). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** yes
- **decision:** D-178

### artifact-matt-shared-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `shared map` | — |
| **card** | — | [shared-map](../concepts/matt/shared-map.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A canonical issue tracker ticket labeled `wayfinder:map` tracking destination, notes, decisions made, and unresolved fog. | — |
| **consumes** | — | A broad initiative or complex idea too large for a single agent session, with an established destination. | — |
| **impl status** | — | defects: other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: shared map (shared-map). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** yes
- **decision:** D-179

### artifact-matt-markdown-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `markdown notes` | — |
| **card** | — | [markdown-notes](../concepts/matt/markdown-notes.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | Markdown documents stored outside the target repository. | — |
| **consumes** | — | Exploration findings gathered by an exploration subagent. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: markdown notes (markdown-notes). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-beat

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `beat` | — |
| **card** | — | [beat](../concepts/matt/beat.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | A discrete narrative move (sentence, paragraph, or vignette) appended to the article file. | — |
| **consumes** | — | Grounded concepts and raw material fragments from the input pile. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: beat (beat). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** no
- **decision:** —

### artifact-matt-root-cause

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `root cause` | — |
| **card** | — | [root-cause](../concepts/matt/root-cause.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Precise identification of the underlying fault mechanism justifying a permanent code fix. | — |
| **consumes** | — | Diagnostic test output, probe logs, and falsified/confirmed hypothesis predictions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: root cause (root-cause). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-local-markdown-tickets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Local-markdown tickets` | — |
| **card** | — | [local-markdown-tickets](../concepts/matt/local-markdown-tickets.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:to-tickets` | — |
| **produces** | — | Individual markdown issue files stored under `.scratch/<feature-slug>/issues/` | — |
| **consumes** | — | A feature slug, spec, or wayfinder map without access to an external issue tracker | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Local-markdown tickets (local-markdown-tickets). Defined in matt:to-tickets. 
- **sequencing note:** Matt-specific phase: matt:to-tickets.
- **needs decision:** yes
- **decision:** D-180

### artifact-matt-exercises

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `exercises/` | — |
| **card** | — | [exercises](../concepts/matt/exercises.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Standardized filesystem hierarchy containing all course learning materials and exercises. | — |
| **consumes** | — | Course curriculum outline and section specifications. | — |
| **impl status** | — | defects: doc-drift (teach/SKILL.md omits link to GLOSSARY-FORMAT.md) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: exercises/ (exercises). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-domain-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `domain.md` | — |
| **card** | — | [domain-md](../concepts/matt/domain-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A markdown file (docs/domain.md) containing product entity definitions and naming rules. | — |
| **consumes** | — | Domain knowledge elicited during repo setup or domain modeling. | — |
| **impl status** | — | defects: doc-drift, internal-contradiction | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: domain.md (domain-md). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-inbound-work

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `inbound work` | — |
| **card** | — | [inbound-work](../concepts/matt/inbound-work.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | Issues categorized into category roles (`bug` / `enhancement`) and state roles with verified reproductions or attached briefs. | — |
| **consumes** | — | User bug reports, community enhancement suggestions, and external pull requests. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: inbound work (inbound-work). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-ui-variations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `UI variations` | — |
| **card** | — | [ui-variations](../concepts/matt/ui-variations.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Multiple contrasting layout variants implemented on a single route with switchable controls. | — |
| **consumes** | — | A question regarding visual layout, density, or UI structure. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: UI variations (ui-variations). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-domain-model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `domain model` | — |
| **card** | — | [domain-model](../concepts/matt/domain-model.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | A cohesive ubiquitous language recorded in `CONTEXT.md` and durable architectural decision records in `docs/adr/`. | — |
| **consumes** | — | User business requirements, codebase terminology, concrete domain scenarios, and architectural trade-offs. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: domain model (domain-model). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** no
- **decision:** —

### artifact-matt-shared-stylesheet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `shared stylesheet` | — |
| **card** | — | [shared-stylesheet](../concepts/matt/shared-stylesheet.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A reusable CSS stylesheet stored in assets/ referenced by all subsequent HTML lesson documents. | — |
| **consumes** | — | The creation of a standing teaching workspace and the generation of the initial lesson. | — |
| **impl status** | — | defects: orphan, doc-drift, missing-path | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: shared stylesheet (shared-stylesheet). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-wisdom-communities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Wisdom (Communities)` | — |
| **card** | — | [wisdom-communities](../concepts/matt/wisdom-communities.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | The `## Wisdom (Communities)` section in `RESOURCES.md`. | — |
| **consumes** | — | High-reputation online forums, local practice groups, workshops, and learner community preferences. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Wisdom (Communities) (wisdom-communities). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-round-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `round template` | — |
| **card** | — | [round-template](../concepts/matt/round-template.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A structured conversational message formatting each interview question with horizontal rule separation. | — |
| **consumes** | — | Inquiry questions generated during an active grilling round. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: round template (round-template). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** yes
- **decision:** D-181

### artifact-matt-learning-records-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `./learning-records/*.md` | — |
| **card** | — | [learning-records-md](../concepts/matt/learning-records-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Sequentially numbered markdown records in `./learning-records/0001-<dash-case-name>.md`. | — |
| **consumes** | — | Demonstrated learner insights, prior knowledge claims, or corrected misconceptions. | — |
| **impl status** | — | defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: ./learning-records/*.md (learning-records-md). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-snapshot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `snapshot` | — |
| **card** | — | [snapshot](../concepts/matt/snapshot.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:diagnosing-bugs` | — |
| **produces** | — | A diff comparison indicating regression or divergence between current execution output and expected baseline. | — |
| **consumes** | — | A fixture input and a verified baseline output. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: snapshot (snapshot). Defined in matt:diagnosing-bugs. 
- **sequencing note:** Matt-specific phase: matt:diagnosing-bugs.
- **needs decision:** no
- **decision:** —

### artifact-matt-issue-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issue-template` | — |
| **card** | — | [issue-template](../concepts/matt/issue-template.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A structured remote issue with Parent, What to build, Acceptance criteria, and Blocked by sections. | — |
| **consumes** | — | A draft vertical slice ticket ready to be published to a remote issue tracker. | — |
| **impl status** | — | defects: missing-path | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: issue-template (issue-template). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** yes
- **decision:** D-182

### artifact-matt-contexts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Contexts` | — |
| **card** | — | [contexts](../concepts/matt/contexts.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | A markdown list in `CONTEXT-MAP.md` linking each context to its localized `CONTEXT.md`. | — |
| **consumes** | — | List of bounded contexts with concise descriptions and file paths. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Contexts (contexts). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** no
- **decision:** —

### artifact-matt-markdown-questionnaire

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Markdown questionnaire` | — |
| **card** | — | [markdown-questionnaire](../concepts/matt/markdown-questionnaire.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A formatted Markdown questionnaire document designed for asynchronous review or live discussion. | — |
| **consumes** | — | An unresolved decision requiring input or domain knowledge from an external stakeholder. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Markdown questionnaire (markdown-questionnaire). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-project-nouns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Project nouns` | — |
| **card** | — | [project-nouns](../concepts/matt/project-nouns.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity Skills` | — |
| **produces** | — | Corrected conversational explanations featuring legitimate domain terminology. | — |
| **consumes** | — | `CONTEXT.md` terms agreed upon by the engineering team. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Project nouns (project-nouns). Defined in matt:Productivity Skills. 
- **sequencing note:** Matt-specific phase: matt:Productivity Skills.
- **needs decision:** no
- **decision:** —

### artifact-matt-gaps

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Gaps` | — |
| **card** | — | [gaps](../concepts/matt/gaps.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A `## Gaps` section in `RESOURCES.md`. | — |
| **consumes** | — | Identified topic areas required by the mission where high-trust resources are currently lacking. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Gaps (gaps). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-draft-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `draft PR` | — |
| **card** | — | [draft-pr](../concepts/matt/draft-pr.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | A draft pull request on GitHub linked to closing the spec issue and tickets. | — |
| **consumes** | — | Specification issue and ticket list identifying the target scope. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: draft PR (draft-pr). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-adr-s

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ADR's` | — |
| **card** | — | [adr-s](../concepts/matt/adr-s.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | Sequentially numbered decision records written to `docs/adr/`. | — |
| **consumes** | — | Plan or design decisions challenged and resolved during an engineering interrogation. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: ADR's (adr-s). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** no
- **decision:** —

### artifact-matt-terminal-app

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `terminal app` | — |
| **card** | — | [terminal-app](../concepts/matt/terminal-app.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Shaping` | — |
| **produces** | — | Interactive CLI prompt loop for inspecting state transitions. | — |
| **consumes** | — | Local developer environment, runtime tooling, and cloned codebase. | — |
| **impl status** | — | defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:46 documents replacing terminal apps with single-file HTML demos) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: terminal app (terminal-app). Defined in matt:Shaping. 
- **sequencing note:** Matt-specific phase: matt:Shaping.
- **needs decision:** no
- **decision:** —

### artifact-matt-mapping

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `mapping` | — |
| **card** | — | [mapping](../concepts/matt/mapping.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A configured mapping file (docs/agents/triage-labels.md) translating tracker-specific label strings into canonical skill roles. | — |
| **consumes** | — | Issue tracker label vocabulary and project repository configuration. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: mapping (mapping). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** yes
- **decision:** D-183

### artifact-matt-loose-idea

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `loose idea` | — |
| **card** | — | [loose-idea](../concepts/matt/loose-idea.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A sharpened, committed design concept ready for formal specification. | — |
| **consumes** | — | An intuitive, unpolished, or partially conceived product or feature notion. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: loose idea (loose-idea). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-lessons-html

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `./lessons/*.html` | — |
| **card** | — | [lessons-html](../concepts/matt/lessons-html.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Self-contained HTML lessons titled `0001-<dash-case-name>.html` in `./lessons/`. | — |
| **consumes** | — | Curated knowledge from `RESOURCES.md`, reusable components from `./assets/`, and target learning objectives from `MISSION.md`. | — |
| **impl status** | — | defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: ./lessons/*.html (lessons-html). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-runtime-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `runtime prompt` | — |
| **card** | — | [runtime-prompt](../concepts/matt/runtime-prompt.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Agent execution behavior driven by prompt constraints. | — |
| **consumes** | — | Task instructions, operational context, human prompts. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: runtime prompt (runtime-prompt). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-decision-ticket

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `decision ticket` | — |
| **card** | — | [decision-ticket](../concepts/matt/decision-ticket.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A resolution comment on the issue settling the question, followed by issue closure and map updates. | — |
| **consumes** | — | An unexplored architectural or design question surfaced during wayfinder mapping. | — |
| **impl status** | — | defects: missing-path, other (in CONTEXT.md); missing-path, doc-drift (in CHANGELOG.md) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: decision ticket (decision-ticket). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** yes
- **decision:** D-184

### artifact-matt-behavioural-contracts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `behavioural contracts` | — |
| **card** | — | [behavioural-contracts](../concepts/matt/behavioural-contracts.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | Verifiable statements of expected system behavior, invariants, and input/output relationships. | — |
| **consumes** | — | Requirements analysis, observed bug behavior, function interfaces, and acceptance conditions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: behavioural contracts (behavioural-contracts). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-tracer-bullet-tickets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tracer-bullet tickets` | — |
| **card** | — | [tracer-bullet-tickets](../concepts/matt/tracer-bullet-tickets.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Discrete, self-contained ticket files or issue tracker tasks specifying end-to-end functionality and dependency blockers. | — |
| **consumes** | — | A feature specification, plan, or conversational design produced during earlier exploration or grilling phases. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: tracer-bullet tickets (tracer-bullet-tickets). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** yes
- **decision:** D-185

### artifact-matt-issue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Issue` | — |
| **card** | — | [issue](../concepts/matt/issue.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Tracked records of work items including bugs, tasks, specifications, or vertical slices. | — |
| **consumes** | — | An initialized issue tracker backend (GitHub, GitLab, Linear, or `.scratch/`). | — |
| **impl status** | — | defects: missing-path, other (CONTEXT.md cites non-existent triage-labels.md path; risks runaway artifact bloat) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Issue (issue). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-issues-nn-slug-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issues/<NN>-<slug>.md` | — |
| **card** | — | [issues-nn-slug-md](../concepts/matt/issues-nn-slug-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:to-tickets` | — |
| **produces** | — | Individual numbered markdown ticket files ready for independent claiming and implementation. | — |
| **consumes** | — | Feature specification (`spec.md`) broken down by the to-tickets skill. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: issues/<NN>-<slug>.md (issues-nn-slug-md). Defined in matt:to-tickets. 
- **sequencing note:** Matt-specific phase: matt:to-tickets.
- **needs decision:** no
- **decision:** —

### artifact-matt-single-shareable-html-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `single shareable HTML file` | — |
| **card** | — | [single-shareable-html-file](../concepts/matt/single-shareable-html-file.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A zero-dependency HTML file containing embedded CSS, JavaScript, state inspector, and scenario buttons. | — |
| **consumes** | — | Domain logic, test scenarios, and interactive walkthrough steps. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: single shareable HTML file (single-shareable-html-file). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-starting-beats

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `starting beats` | — |
| **card** | — | [starting-beats](../concepts/matt/starting-beats.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | A chosen starting beat written as the opening entry in the article file. | — |
| **consumes** | — | Raw material markdown file and settled audience prerequisite concepts. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: starting beats (starting-beats). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-context-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `CONTEXT.md` | — |
| **card** | — | [context-md](../concepts/matt/context-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | The repository's ubiquitous language and canonical glossary file at the project root. | — |
| **consumes** | — | Domain modeling sessions, resolved glossary terms, and architectural definitions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: CONTEXT.md (context-md). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-dev-only-script

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `dev-only script` | — |
| **card** | — | [dev-only-script](../concepts/matt/dev-only-script.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: dev-only script (dev-only-script). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-variants

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `variants` | — |
| **card** | — | [variants](../concepts/matt/variants.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A set of distinct exported components (e.g., VariantA, VariantB, VariantC) presenting competing layouts. | — |
| **consumes** | — | The target page's purpose, domain data, and design questions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: variants (variants). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-destination

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `destination` | — |
| **card** | — | [destination](../concepts/matt/destination.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | A clear 1-2 line statement anchoring the scope of all subsequent decision tickets in a wayfinder map. | — |
| **consumes** | — | A high-level project vision, complex migration goal, or large architectural initiative. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: destination (destination). Defined in matt:Engineering. 
- **sequencing note:** Matt-specific phase: matt:Engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-sections

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `sections` | — |
| **card** | — | [sections](../concepts/matt/sections.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Numbered directories (`XX-section-name/`) inside `exercises/` containing ordered exercise folders. | — |
| **consumes** | — | Course outline detailing high-level curriculum modules and topic divisions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: sections (sections). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-env

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `.env` | — |
| **card** | — | [env](../concepts/matt/env.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | Updated local configuration files containing necessary environment variables for local development. | — |
| **consumes** | — | Scoped credentials and configuration values gathered during wizard execution. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: .env (env). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-lessons

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `lessons` | — |
| **card** | — | [lessons](../concepts/matt/lessons.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Sequentially numbered HTML files (`0001-slug.html`) delivering one tangible win. | — |
| **consumes** | — | Target goals from MISSION.md, knowledge from RESOURCES.md, and prior records. | — |
| **impl status** | — | defects: internal-contradiction (quiz answer positioning flaw; absence of initial assessment) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: lessons (lessons). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-issue-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issue graph` | — |
| **card** | — | [issue-graph](../concepts/matt/issue-graph.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A connected hierarchy of parent and child issues in the project tracker. | — |
| **consumes** | — | Project requirements, specifications, and sliced work tickets. | — |
| **impl status** | — | defects: doc-drift, orphan | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: issue graph (issue-graph). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-paper-trail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `paper trail` | — |
| **card** | — | [paper-trail](../concepts/matt/paper-trail.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:shaping` | — |
| **produces** | — | Persistent files on disk (CONTEXT.md and numbered ADR files under docs/adr/). | — |
| **consumes** | — | Settled domain terms and qualifying architectural trade-offs from an interview. | — |
| **impl status** | — | defects: orphan, doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: paper trail (paper-trail). Defined in matt:shaping. 
- **sequencing note:** Matt-specific phase: matt:shaping.
- **needs decision:** no
- **decision:** —

### artifact-matt-external-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `external-PR` | — |
| **card** | — | [external-pr](../concepts/matt/external-pr.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | A triaged pull request with verified test status, attached follow-up agent brief describing necessary delta work, or maintainer merge queue transition. | — |
| **consumes** | — | Inbound pull requests submitted by outside contributors to the repository. | — |
| **impl status** | — | defects: script-bug | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: external-PR (external-pr). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-merge-requests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Merge requests` | — |
| **card** | — | [merge-requests](../concepts/matt/merge-requests.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Code reviews, automated pipeline results, discussions, and merged branch history. | — |
| **consumes** | — | Proposed code branches in GitLab repositories. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Merge requests (merge-requests). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-sub-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `sub-issues` | — |
| **card** | — | [sub-issues](../concepts/matt/sub-issues.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:The Main Flow` | — |
| **produces** | — | Hierarchical parent-child tracking relationships on issue trackers supporting native sub-issues. | — |
| **consumes** | — | A parent specification issue and decomposed child ticket issues. | — |
| **impl status** | — | defects: doc-drift | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: sub-issues (sub-issues). Defined in matt:The Main Flow. 
- **sequencing note:** Matt-specific phase: matt:The Main Flow.
- **needs decision:** no
- **decision:** —

### artifact-matt-explainer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `explainer/` | — |
| **card** | — | [explainer](../concepts/matt/explainer.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A directory containing a non-empty `readme.md` and optional supporting code without student tasks. | — |
| **consumes** | — | Conceptual teaching text and explanatory code snippets. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: explainer/ (explainer). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-asset

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `asset` | — |
| **card** | — | [asset](../concepts/matt/asset.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A referenced deliverable attached to a tracker ticket or wayfinder map. | — |
| **consumes** | — | A completed prototype, research finding, or diagram. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: asset (asset). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-commits

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `commits` | — |
| **card** | — | [commits](../concepts/matt/commits.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Git commit objects permanently recording snapshots of repository state in version control history. | — |
| **consumes** | — | Staged repository file modifications, author information, and commit messages. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: commits (commits). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-reference-html

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `./reference/*.html` | — |
| **card** | — | [reference-html](../concepts/matt/reference-html.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | Self-contained HTML documents in `./reference/` formatted for high readability and quick consultation. | — |
| **consumes** | — | Compressed learnings, syntax, algorithms, or glossaries extracted from lessons. | — |
| **impl status** | — | defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: ./reference/*.html (reference-html). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-native-blocking-links

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `native blocking links` | — |
| **card** | — | [native-blocking-links](../concepts/matt/native-blocking-links.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:to-tickets` | — |
| **produces** | — | First-class dependency relationships in issue tracking tools (GitHub, Linear) | — |
| **consumes** | — | Inter-ticket dependency declarations emitted by `/to-tickets` | — |
| **impl status** | — | defects: doc-drift (external/to-tickets.md:58 notes blocking dependencies written into issue bodies instead of using gh issue create --blocked-by) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: native blocking links (native-blocking-links). Defined in matt:to-tickets. 
- **sequencing note:** Matt-specific phase: matt:to-tickets.
- **needs decision:** no
- **decision:** —

### artifact-matt-adr-callout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ADR callout` | — |
| **card** | — | [adr-callout](../concepts/matt/adr-callout.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A visually prominent one-line callout linking a candidate refactoring to an ADR. | — |
| **consumes** | — | An architectural decision candidate that meets ADR criteria. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: ADR callout (adr-callout). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-implementation-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Implementation Decisions` | — |
| **card** | — | [implementation-decisions](../concepts/matt/implementation-decisions.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A structured specification section listing modules, modified interfaces, technical clarifications, schema changes, and API contracts. | — |
| **consumes** | — | Agreed architectural choices, developer technical clarifications, and interface agreements settled during grilling conversations. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Implementation Decisions (implementation-decisions). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-the-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `the map` | — |
| **card** | — | [the-map](../concepts/matt/the-map.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | A centralized index issue (`wayfinder:map`) containing destination, decisions, fog of war, and out-of-scope sections | — |
| **consumes** | — | A complex multi-session project goal and destination | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: the map (the-map). Defined in matt:wayfinder. 
- **sequencing note:** Matt-specific phase: matt:wayfinder.
- **needs decision:** yes
- **decision:** D-186

### artifact-matt-prototypeswitcher

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `PrototypeSwitcher` | — |
| **card** | — | [prototypeswitcher](../concepts/matt/prototypeswitcher.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | An interactive switcher component rendering cycling arrows, variant labels, and keyboard navigation. | — |
| **consumes** | — | An array of variant keys and the currently selected variant identifier. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: PrototypeSwitcher (prototypeswitcher). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-specs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `specs` | — |
| **card** | — | [specs](../concepts/matt/specs.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Detailed technical specification documents guiding implementation and ticket breakdown. | — |
| **consumes** | — | User requirements, problem definitions, domain concepts, and architectural constraints. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: specs (specs). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-why

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Why` | — |
| **card** | — | [why](../concepts/matt/why.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | The `## Why` section in `MISSION.md`. | — |
| **consumes** | — | User stated motivations, goals, and desired real-world outcomes. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Why (why). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-standing-teaching-workspace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `standing teaching workspace` | — |
| **card** | — | [standing-teaching-workspace](../concepts/matt/standing-teaching-workspace.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | An organized workspace containing MISSION.md, RESOURCES.md, lessons, reference files, and learning records. | — |
| **consumes** | — | A dedicated directory where the user intends to learn a subject over multiple sessions. | — |
| **impl status** | — | defects: script-bug, missing-path (relative path resolution placing workspace files into ~/.claude/skills) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: standing teaching workspace (standing-teaching-workspace). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `issues` | — |
| **card** | — | [issues](../concepts/matt/issues.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Tracked issue items in an issue tracking system (such as GitHub Issues) capturing requirements and discussion. | — |
| **consumes** | — | Defect reports, feature requests, or user feedback requiring tracking and resolution. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: issues (issues). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-interactive-bash-script

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `interactive bash script` | — |
| **card** | — | [interactive-bash-script](../concepts/matt/interactive-bash-script.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | A standalone, executable shell script run directly by the developer in their terminal. | — |
| **consumes** | — | Wizard stage definitions and the fixed template.sh helper library. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: interactive bash script (interactive-bash-script). Defined in matt:Engineering. 
- **sequencing note:** Matt-specific phase: matt:Engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-state-model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `state model` | — |
| **card** | — | [state-model](../concepts/matt/state-model.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | An interactive pure module (reducer, machine, or function set) decoupled from the DOM for validation. | — |
| **consumes** | — | Domain rules, state transitions, and business logic specifications. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: state model (state-model). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-time-remaining

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `time-remaining` | — |
| **card** | — | [time-remaining](../concepts/matt/time-remaining.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | Terminal countdown display showing estimated minutes left in the setup wizard. | — |
| **consumes** | — | `TOTAL_MINUTES` estimate and script execution timer. | — |
| **impl status** | — | defects: missing-path, doc-drift (in CHANGELOG.md) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: time-remaining (time-remaining). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** no
- **decision:** —

### artifact-matt-implications

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Implications` | — |
| **card** | — | [implications](../concepts/matt/implications.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | An Implications section within a learning record artifact. | — |
| **consumes** | — | Non-obvious pedagogical consequences emerging from newly established learner knowledge or corrected misconceptions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Implications (implications). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-triage-labels

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Triage labels` | — |
| **card** | — | [triage-labels](../concepts/matt/triage-labels.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Setup` | — |
| **produces** | — | A repo-specific configuration file (`docs/agents/triage-labels.md`) mapping five canonical triage roles to active label strings. | — |
| **consumes** | — | The repository's issue tracker configuration and existing issue label taxonomy. | — |
| **impl status** | — | defects: doc-drift (docs/engineering/setup-matt-pocock-skills.md:67 generates mapping table in `triage-labels.md` without creating corresponding label entities in GitHub/GitLab,... | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Triage labels (triage-labels). Defined in matt:Setup. 
- **sequencing note:** Matt-specific phase: matt:Setup.
- **needs decision:** no
- **decision:** —

### artifact-matt-domain-vocabulary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `domain-vocabulary` | — |
| **card** | — | [domain-vocabulary](../concepts/matt/domain-vocabulary.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity Skills` | — |
| **produces** | — | Alignment of agent explanations with agreed project nouns and ubiquitous language. | — |
| **consumes** | — | `CONTEXT.md` or `CONTEXT-MAP.md` defining project-specific naming conventions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: domain-vocabulary (domain-vocabulary). Defined in matt:Productivity Skills. 
- **sequencing note:** Matt-specific phase: matt:Productivity Skills.
- **needs decision:** no
- **decision:** —

### artifact-matt-agent-ready-brief

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `agent-ready brief` | — |
| **card** | — | [agent-ready-brief](../concepts/matt/agent-ready-brief.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | A durable structured comment posted to the issue tracker specifying types, signatures, and behavioral expectations. | — |
| **consumes** | — | Verified reproduction of a bug, confirmed feature requirement, codebase inspection, and domain types/contracts. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: agent-ready brief (agent-ready-brief). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-retired-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `retired skill` | — |
| **card** | — | [retired-skill](../concepts/matt/retired-skill.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Deletion of the skill from the repository and a changeset entry specifying its replacement. | — |
| **consumes** | — | An obsolete skill designated for removal. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: retired skill (retired-skill). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-original-issue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `original issue` | — |
| **card** | — | [original-issue](../concepts/matt/original-issue.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | Historical context and author intent required to reconcile conflicting diff hunks without dropping features. | — |
| **consumes** | — | An issue tracker or work tracking record documenting feature requirements or defect fixes. | — |
| **impl status** | — | defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: original issue (original-issue). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-top-recommendation-section

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Top recommendation section` | — |
| **card** | — | [top-recommendation-section](../concepts/matt/top-recommendation-section.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A prominent summary card identifying the primary recommended refactoring with an anchor link. | — |
| **consumes** | — | The evaluated candidate cards and their relative leverage assessments. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Top recommendation section (top-recommendation-section). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-sessions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `sessions` | — |
| **card** | — | [sessions](../concepts/matt/sessions.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Stateful learning progress files, code changes, or branch histories created across separate interaction runs. | — |
| **consumes** | — | User goals, task instructions, and persisted workspace/repository files. | — |
| **impl status** | — | clean in concept definition; associated with defects in teach implementation: script-bug (browser opening bugs on non-Mac platforms in teach/SKILL.md:46) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: sessions (sessions). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-resolution-comment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `resolution comment` | — |
| **card** | — | [resolution-comment](../concepts/matt/resolution-comment.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A persistent comment on the closed issue tracker ticket explaining the decision and rationale. | — |
| **consumes** | — | The definitive answer, findings, or decision arrived at during a ticket resolution session. | — |
| **impl status** | — | defects: other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: resolution comment (resolution-comment). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-research-tickets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Research tickets` | — |
| **card** | — | [research-tickets](../concepts/matt/research-tickets.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | A markdown research report documenting findings from primary sources on a dedicated branch | — |
| **consumes** | — | A question or unknown fact outside the local working directory blocking a decision | — |
| **impl status** | — | defects: other (external/research.md:51 notes subagents opening draft PRs on throwaway branches and branch deletion breaking context pointers) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Research tickets (research-tickets). Defined in matt:wayfinder. 
- **sequencing note:** Matt-specific phase: matt:wayfinder.
- **needs decision:** yes
- **decision:** D-187

### artifact-matt-task

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `task` | — |
| **card** | — | [task](../concepts/matt/task.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | Completed manual work and recorded environment facts (credentials, URLs, row counts) that unblock decisions | — |
| **consumes** | — | A blocking operational prerequisite (access provisioning, service signup, data migration) | — |
| **impl status** | — | defects: other (external/wayfinder.md:48 notes agents frequently misinterpreting task tickets as implementation steps and writing product code) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: task (task). Defined in matt:wayfinder. 
- **sequencing note:** Matt-specific phase: matt:wayfinder.
- **needs decision:** no
- **decision:** —

### artifact-matt-supported-installer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `supported installer` | — |
| **card** | — | [supported-installer](../concepts/matt/supported-installer.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: supported installer (supported-installer). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-notes-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `NOTES.md` | — |
| **card** | — | [notes-md](../concepts/matt/notes-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A persistent markdown scratchpad consulted across multiple agent turns. | — |
| **consumes** | — | Informal user preferences, pedagogical notes, and raw observations during sessions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: NOTES.md (notes-md). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-html-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `HTML report` | — |
| **card** | — | [html-report](../concepts/matt/html-report.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A self-contained HTML file `<tmpdir>/architecture-review-<timestamp>.html` opened in the user's browser. | — |
| **consumes** | — | Codebase exploration results, candidate cards, diagram specifications, and top recommendation rationale. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: HTML report (html-report). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-floating-bottom-bar

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `floating bottom bar` | — |
| **card** | — | [floating-bottom-bar](../concepts/matt/floating-bottom-bar.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | An on-screen navigation bar allowing instant cycling between prototype variants via buttons and keyboard arrow keys. | — |
| **consumes** | — | A set of UI variants and the current variant selection. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: floating bottom bar (floating-bottom-bar). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-mission-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `MISSION.md` | — |
| **card** | — | [mission-md](../concepts/matt/mission-md.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A markdown file capturing the why and observable outcomes of the curriculum. | — |
| **consumes** | — | Initial user interview establishing concrete real-world goals and observable success criteria. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: MISSION.md (mission-md). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-seed-templates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `seed templates` | — |
| **card** | — | [seed-templates](../concepts/matt/seed-templates.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | Baseline markdown files for issue tracking, domain docs, and triage labels in target projects. | — |
| **consumes** | — | Skill installation packages. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: seed templates (seed-templates). Defined in matt:none. 
- **sequencing note:** Matt-specific phase: matt:none.
- **needs decision:** yes
- **decision:** D-188

### artifact-matt-lesson

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `lesson` | — |
| **card** | — | [lesson](../concepts/matt/lesson.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A self-contained HTML file (`./lessons/NNNN-slug.html`) with embedded interactive components and exercises. | — |
| **consumes** | — | `MISSION.md`, `RESOURCES.md`, prior `learning-records/`, and shared `assets/` components. | — |
| **impl status** | — | defects: script-bug, internal-contradiction | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: lesson (lesson). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-current-state

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Current state` | — |
| **card** | — | [current-state](../concepts/matt/current-state.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A human-readable visual panel with labeled fields that highlights recent state changes. | — |
| **consumes** | — | The state object produced by the portable logic module after an action dispatch. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Current state (current-state). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-suggested-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `suggested skills` | — |
| **card** | — | [suggested-skills](../concepts/matt/suggested-skills.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | An explicit checklist of skill names that downstream agents should invoke. | — |
| **consumes** | — | Assessment of current progress and subsequent task requirements. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: suggested skills (suggested-skills). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-session

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `session` | — |
| **card** | — | [session](../concepts/matt/session.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Conversational history, modified code, and generated artifacts. | — |
| **consumes** | — | User prompts, project configuration, and skill definitions. | — |
| **impl status** | — | defects: doc-drift, script-bug, other (confirmation bias in same-session review, sub-agent runaway loops, and temp file loss in handoffs) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: session (session). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-decision-tickets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `decision tickets` | — |
| **card** | — | [decision-tickets](../concepts/matt/decision-tickets.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A tracked issue on the repository issue tracker whose resolution yields a documented decision or concrete asset. | — |
| **consumes** | — | A high-level project goal or destination obscured by architectural or domain ambiguity. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: decision tickets (decision-tickets). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** yes
- **decision:** D-189

### artifact-matt-wayfinder-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `wayfinder:map` | — |
| **card** | — | [wayfinder-map](../concepts/matt/wayfinder-map.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Wayfinder` | — |
| **produces** | — | A central coordinating issue linking decisions made, active frontier tickets, and undiscovered fog of war. | — |
| **consumes** | — | A complex, multi-session goal with an agreed destination and open architectural questions. | — |
| **impl status** | — | defects: other (Notes override in wayfinder permits agents to self-authorize execution inside the map) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: wayfinder:map (wayfinder-map). Defined in matt:Wayfinder. 
- **sequencing note:** Matt-specific phase: matt:Wayfinder.
- **needs decision:** yes
- **decision:** D-190

### artifact-matt-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Notes` | — |
| **card** | — | [notes](../concepts/matt/notes.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Standing preferences, domain guidelines, or execution override instructions on a map issue, or issue comments in GitLab. | — |
| **consumes** | — | Wayfinder map issue creation or issue discussion updates. | — |
| **impl status** | — | defects: other (Notes override permits agents to self-authorize execution inside the map, creating an escape hatch that bypasses the "plan, don't do" constraint) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Notes (notes). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-implementation-ticket

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `_implementation_ ticket` | — |
| **card** | — | [implementation-ticket](../concepts/matt/implementation-ticket.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:implementation` | — |
| **produces** | — | Production code changes, passing test suites, and git commits | — |
| **consumes** | — | A completed spec, plan, or decomposed task slice from `/to-tickets` | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: _implementation_ ticket (implementation-ticket). Defined in matt:implementation. 
- **sequencing note:** Matt-specific phase: matt:implementation.
- **needs decision:** yes
- **decision:** D-191

### artifact-matt-template-sh

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `template.sh` | — |
| **card** | — | [template-sh](../concepts/matt/template-sh.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | A self-contained, executable interactive bash script. | — |
| **consumes** | — | Scoped wizard stages, target URLs, and destination variable mappings. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: template.sh (template-sh). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** yes
- **decision:** D-192

### artifact-matt-local-markdown

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `local markdown` | — |
| **card** | — | [local-markdown](../concepts/matt/local-markdown.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Markdown files representing tickets, tasks, and issues stored directly in the repository. | — |
| **consumes** | — | Local directory structure (`.scratch/<feature>/`). | — |
| **impl status** | — | clean (in .out-of-scope/mainstream-issue-trackers-only.md); defects: doc-drift, internal-contradiction (in docs/engineering/setup-matt-pocock-skills.md, external/setup-matt-poco... | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: local markdown (local-markdown). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-scratch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `.scratch/` | — |
| **card** | — | [scratch](../concepts/matt/scratch.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Organized feature folders (`.scratch/<feature-slug>/`) containing `spec.md` and numbered ticket files (`issues/<NN>-<slug>.md`). | — |
| **consumes** | — | Local filesystem repository root directory. | — |
| **impl status** | — | defects: script-bug (open template bug #200 where generated issue files can duplicate acceptance criteria) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: .scratch/ (scratch). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-questionnaire-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `questionnaire-template` | — |
| **card** | — | [questionnaire-template](../concepts/matt/questionnaire-template.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A formatted `to-questionnaire-<slug>.md` discovery document organized with context, response guidance, themed questions, and a catch-all. | — |
| **consumes** | — | User answers from the two-step send interview identifying the recipient and required decisions. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: questionnaire-template (questionnaire-template). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** yes
- **decision:** D-193

### artifact-matt-triage-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Triage Notes` | — |
| **card** | — | [triage-notes](../concepts/matt/triage-notes.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A structured issue comment clearly demarcating established facts from outstanding questions. | — |
| **consumes** | — | Facts established during initial triage or grilling, alongside unresolved questions for the issue reporter. | — |
| **impl status** | — | defects: missing-path | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Triage Notes (triage-notes). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-questionnaire

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `questionnaire` | — |
| **card** | — | [questionnaire](../concepts/matt/questionnaire.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | A standalone markdown questionnaire file (`to-questionnaire-<slug>.md`). | — |
| **consumes** | — | A blocked decision, recipient context (role, expertise), and a concrete list of required answers. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: questionnaire (questionnaire). Defined in matt:Productivity. 
- **sequencing note:** Matt-specific phase: matt:Productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-learning-record

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Learning Record` | — |
| **card** | — | [learning-record](../concepts/matt/learning-record.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A numbered markdown file in `./learning-records/` (e.g. `0001-<slug>.md`) capturing verified knowledge and pedagogical implications. | — |
| **consumes** | — | Demonstrated learner understanding, stated prior knowledge, corrected misconceptions, or mission adjustments. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: Learning Record (learning-record). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-gitlab-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `GitLab issues` | — |
| **card** | — | [gitlab-issues](../concepts/matt/gitlab-issues.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Tracked tickets, discussion threads, and resolved state within GitLab. | — |
| **consumes** | — | User feature requests, bug reports, wayfinding child tasks, and specifications. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: GitLab issues (gitlab-issues). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-native-sub-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `native sub-issues` | — |
| **card** | — | [native-sub-issues](../concepts/matt/native-sub-issues.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:to-tickets` | — |
| **produces** | — | Parent-child issue relationships in trackers supporting sub-issues | — |
| **consumes** | — | A parent feature spec or epic and its constituent slice tickets | — |
| **impl status** | — | defects: doc-drift (external/to-tickets.md:56 reports GitHub integration failing to create native sub-issues despite CLI support; issue #554) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: native sub-issues (native-sub-issues). Defined in matt:to-tickets. 
- **sequencing note:** Matt-specific phase: matt:to-tickets.
- **needs decision:** no
- **decision:** —

### artifact-matt-knowledge-base

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `knowledge base` | — |
| **card** | — | [knowledge-base](../concepts/matt/knowledge-base.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Upkeep` | — |
| **produces** | — | A persistent, searchable repository of rejected design concepts in `.out-of-scope/` used by triage to prevent re-litigating settled decisions. | — |
| **consumes** | — | Rejected enhancement decisions detailing the rejected feature idea, rationale for refusal, and referencing issue numbers. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: knowledge base (knowledge-base). Defined in matt:Upkeep. 
- **sequencing note:** Matt-specific phase: matt:Upkeep.
- **needs decision:** no
- **decision:** —

### artifact-matt-term

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `term` | — |
| **card** | — | [term](../concepts/matt/term.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | Shared vocabulary between author and reader where both the concept and its named label are understood. | — |
| **consumes** | — | A conceptual idea in the narrative requiring an explicit verbal identifier. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: term (term). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

### artifact-matt-conversation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `conversation` | — |
| **card** | — | [conversation](../concepts/matt/conversation.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Ephemeral working context, negotiated decisions, and immediate implementation inputs. | — |
| **consumes** | — | Interactive turns between human user and AI agent. | — |
| **impl status** | — | defects: orphan, doc-drift, cross-file-contradiction, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: conversation (conversation). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `handoff` | — |
| **card** | — | [handoff](../concepts/matt/handoff.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | A portable markdown document written to the OS temporary directory containing task context, goals, and state. | — |
| **consumes** | — | An active conversation thread and an optional note describing the intended scope of the receiving session. | — |
| **impl status** | — | defects: other (OS temporary directory paths vary across platforms, temp files risk automatic deletion, shell command escaping hazards) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: handoff (handoff). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-integration-branch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `integration branch` | — |
| **card** | — | [integration-branch](../concepts/matt/integration-branch.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Plan` | — |
| **produces** | — | An isolated shared git branch isolating unstable intermediate commits until all batches merge and verify. | — |
| **consumes** | — | Multiple migration tickets or interdependent wide refactor batches that temporarily break system integrity when applied alone. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: integration branch (integration-branch). Defined in matt:Plan. 
- **sequencing note:** Matt-specific phase: matt:Plan.
- **needs decision:** no
- **decision:** —

### artifact-matt-fixed-frame

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `fixed frame` | — |
| **card** | — | [fixed-frame](../concepts/matt/fixed-frame.md) | — |
| **kind** | — | template | — |
| **phase** | — | `matt:cross-phase` | — |
| **produces** | — | Consistent three-section structural skeleton across all skill documentation pages. | — |
| **consumes** | — | Skill specifications, triggering rules, and system placement context. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: fixed frame (fixed-frame). Defined in matt:cross-phase. 
- **sequencing note:** Matt-specific phase: matt:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-matt-implementation-issue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `implementation issue` | — |
| **card** | — | [implementation-issue](../concepts/matt/implementation-issue.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:Shaping` | — |
| **produces** | — | A traceable issue ticket specifying implementation scope and linking to background prototype evidence. | — |
| **consumes** | — | Prototype verdicts, architectural decisions, and links to unmerged exploratory branches. | — |
| **impl status** | — | defects: orphan (external/prototype.md:1) | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: implementation issue (implementation-issue). Defined in matt:Shaping. 
- **sequencing note:** Matt-specific phase: matt:Shaping.
- **needs decision:** no
- **decision:** —

### artifact-matt-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `decisions` | — |
| **card** | — | [decisions](../concepts/matt/decisions.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | User-authorized choices that reshape the design tree and unblock downstream branches. | — |
| **consumes** | — | A question on the interview frontier involving architectural trade-offs, preferences, or irreversible choices. | — |
| **impl status** | — | defects: orphan, doc-drift, other | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: decisions (decisions). Defined in matt:productivity. 
- **sequencing note:** Matt-specific phase: matt:productivity.
- **needs decision:** no
- **decision:** —

### artifact-matt-state-panel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `state panel` | — |
| **card** | — | [state-panel](../concepts/matt/state-panel.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Real-time, domain-labelled visual display of active state, variables, and transition history. | — |
| **consumes** | — | State changes emitted by the prototype's underlying logic machine. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: state panel (state-panel). Defined in matt:engineering. 
- **sequencing note:** Matt-specific phase: matt:engineering.
- **needs decision:** no
- **decision:** —

### artifact-matt-pr-branch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `PR branch` | — |
| **card** | — | [pr-branch](../concepts/matt/pr-branch.md) | — |
| **kind** | — | artifact | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | The unified Git branch hosting all merged ticket implementations for the specification. | — |
| **consumes** | — | A base branch starting commit, ticket feature branch commits. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to Matt: PR branch (pr-branch). Defined in matt:in-progress. 
- **sequencing note:** Matt-specific phase: matt:in-progress.
- **needs decision:** no
- **decision:** —

## 11. RJM Specific Platform, Schema & Agent Artifacts

### artifact-rjm-routing-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Routing decisions` |
| **card** | — | — | [routing-decisions](../concepts/rjm/routing-decisions.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured log records (`input_id`, `chosen_agent`, `reason`) in standard run logs. |
| **consumes** | — | — | Input payload, classifier output, and router selection rules. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Routing decisions (routing-decisions). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-evolution-score-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evolution Score Template` |
| **card** | — | — | [evolution-score-template](../concepts/rjm/evolution-score-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized markdown evolution score section within the skill specification or review artifact. |
| **consumes** | — | — | Evolution scoring evaluation data and reviewer feedback. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Evolution Score Template (evolution-score-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-194

### artifact-rjm-memory-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory graph` |
| **card** | — | — | [memory-graph](../concepts/rjm/memory-graph.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An interconnected network of abstract memory nodes linked by cosine similarity. |
| **consumes** | — | — | Conceptual notes, learned behaviors, and semantic associations. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique to RJM: Memory graph (memory-graph). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-supplemental-phase-n

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Supplemental (Phase N)` |
| **card** | — | — | [supplemental-phase-n](../concepts/rjm/supplemental-phase-n.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Markdown sub-block appended to `## Prior Art / Constraints` documenting additional findings without overwriting original sections. |
| **consumes** | — | — | New entity-linked memories and relationships surfaced from higher-tier graph traversal phases. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Supplemental (Phase N) (supplemental-phase-n). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-traceability-health

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Traceability Health` |
| **card** | — | — | [traceability-health](../concepts/rjm/traceability-health.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Quantitative coherence metrics covering Valid Chains, Orphaned REQs, Orphaned Designs, Broken References, and Untraced Tasks. |
| **consumes** | — | — | Specification artifacts (requirements, designs, tasks) and traceability graph validation script output. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Traceability Health (traceability-health). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-custom-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `custom agents` |
| **card** | — | — | [custom-agents](../concepts/rjm/custom-agents.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Platform-specific agent markdown definitions in .github/agents/*.agent.md. |
| **consumes** | — | — | Shared agent template definitions (templates/agents/*.shared.md) and platform generator configuration. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: custom agents (custom-agents). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-reassessment-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `reassessment-plan` |
| **card** | — | — | [reassessment-plan](../concepts/rjm/reassessment-plan.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Documented trigger thresholds and automated script configurations for revisiting the sourcing decision. |
| **consumes** | — | — | Initial ADR baseline assumptions, drift detection script parameters, and operational monitoring schedules. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, missing-doc, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: reassessment-plan (reassessment-plan). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** yes
- **decision:** D-195

### artifact-rjm-phase-0-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0 evidence` |
| **card** | — | — | [phase-0-evidence](../concepts/rjm/phase-0-evidence.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | JSON evidence bundle detailing work items, outcomes, git commits, and source availability flags. |
| **consumes** | — | — | Session logs under `.agents/sessions/` and git commit history across the retrospective period. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Phase 0 evidence (phase-0-evidence). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-evolution-agent-system-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evolution Agent System Prompt` |
| **card** | — | — | [evolution-agent-system-prompt](../concepts/rjm/evolution-agent-system-prompt.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Configured evaluator agent assessing timelessness scores (>=7), extension points (>=2), dependency stability, and design rationale. |
| **consumes** | — | — | Agent invocation parameters and future-proofing criteria. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Evolution Agent System Prompt (evolution-agent-system-prompt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-extract-skill-script-refs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extract_skill_script_refs` |
| **card** | — | — | [extract-skill-script-refs](../concepts/rjm/extract-skill-script-refs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: extract_skill_script_refs (extract-skill-script-refs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pr-comment-store

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR comment store` |
| **card** | — | — | [pr-comment-store](../concepts/rjm/pr-comment-store.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Ordered timeline of lease claim, renewal, release, and override markers. |
| **consumes** | — | — | GitHub issue comments posted via API on pull requests. |
| **impl status** | — | — | not-implemented (ADR-090 proposed; citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** Unique to RJM: PR comment store (pr-comment-store). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-external-entity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `External Entity` |
| **card** | — | — | [external-entity](../concepts/rjm/external-entity.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Cataloged component entry in threat model component tables subject to spoofing analysis. |
| **consumes** | — | — | Client applications, user interfaces, external partner APIs, and unauthenticated network callers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: External Entity (external-entity). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-examples

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Examples` |
| **card** | — | — | [examples](../concepts/rjm/examples.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Working code snippets demonstrating end-to-end API client invocation. |
| **consumes** | — | — | Valid API endpoints, authentication tokens, and realistic request payloads. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Examples (examples). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-model-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `model_tier` |
| **card** | — | — | [model-tier](../concepts/rjm/model-tier.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Implement` |
| **produces** | — | — | Execution-tier configuration and contradiction validation findings. |
| **consumes** | — | — | Agent definition templates and PR specification text. |
| **impl status** | — | — | `scripts/validation/spec_contradiction.py`: clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: model_tier (model-tier). Defined in rjm:Implement. 
- **sequencing note:** RJM-specific phase: rjm:Implement.
- **needs decision:** no
- **decision:** —

### artifact-rjm-investigation-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `investigation report` |
| **card** | — | — | [investigation-report](../concepts/rjm/investigation-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Documented summary of research outcomes formatted as a QA deliverable. |
| **consumes** | — | — | Research notes, spike findings, and architectural analyses. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: investigation report (investigation-report). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-authored

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `authored` |
| **card** | — | — | [authored](../concepts/rjm/authored.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | File category classification tagging human-written source code modules for assessment. |
| **consumes** | — | — | File paths and source content evaluated through path segment heuristics and header markers. |
| **impl status** | — | — | defects: doc-drift, missing-path, always-failing-gate |

- **class:** UNIQUE
- **difference:** Unique to RJM: authored (authored). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-autherror

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AuthError` |
| **card** | — | — | [autherror](../concepts/rjm/autherror.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Exception objects or structured error payloads signaling authentication/permission failure. |
| **consumes** | — | — | Authentication check failures, missing tokens, or authorization rejections. |
| **impl status** | — | — | defects: missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: AuthError (autherror). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-workflowresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowResult` |
| **card** | — | — | [workflowresult](../concepts/rjm/workflowresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Aggregated execution summary and final output string. |
| **consumes** | — | — | Completed `StepResult` objects and workflow execution state. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: WorkflowResult (workflowresult). Defined in rjm:orchestrator. 
- **sequencing note:** RJM-specific phase: rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### artifact-rjm-claude-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Claude Skills` |
| **card** | — | — | [claude-skills](../concepts/rjm/claude-skills.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic tool executions, PR comments, review submissions, and steering selections. |
| **consumes** | — | — | Task intent, command parameters, GitHub CLI credentials. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Claude Skills (claude-skills). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-tyree-akerman

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tyree & Akerman` |
| **card** | — | — | [tyree-akerman](../concepts/rjm/tyree-akerman.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A formal, enterprise-grade architecture decision record with rigorous traceability links. |
| **consumes** | — | — | Business issues, architectural assumptions, constraints, positions, arguments, and implications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Tyree & Akerman (tyree-akerman). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scenario-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scenario files` |
| **card** | — | — | [scenario-files](../concepts/rjm/scenario-files.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured JSON scenario suites containing positive and negative test cases for rule evaluation. |
| **consumes** | — | — | Test cases, prompts, expected gate labels, expected verdicts, and rule activation conditions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Scenario files (scenario-files). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-synthetic-merge-tree

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `synthetic merge tree` |
| **card** | — | — | [synthetic-merge-tree](../concepts/rjm/synthetic-merge-tree.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Git tree object representing the simulated merge result. |
| **consumes** | — | — | Target base commit OID and candidate branch HEAD commit OID. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: synthetic merge tree (synthetic-merge-tree). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-result-validated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RESULT: VALIDATED` |
| **card** | — | — | [result-validated](../concepts/rjm/result-validated.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | An advisory ship report concluding with `RESULT: VALIDATED` and the recorded review attestation. |
| **consumes** | — | — | Passing pre-flight checks and `/review` axis execution on a colleague's PR branch. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: RESULT: VALIDATED (result-validated). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-marketplace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Marketplace` |
| **card** | — | — | [marketplace](../concepts/rjm/marketplace.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A discoverable catalog index enabling automated installation and updating of plugins. |
| **consumes** | — | — | Plugin registries, source repositories, versioning specifications, and author metadata. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Marketplace (marketplace). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-matrix-scorer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Matrix Scorer` |
| **card** | — | — | [decision-matrix-scorer](../concepts/rjm/decision-matrix-scorer.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Weighted composite scores, margin-of-victory metrics, and sensitivity analysis determining ranking stability. |
| **consumes** | — | — | Weighted criteria (strategic, operational, risk) and individual option scores on a 1-10 scale. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Matrix Scorer (decision-matrix-scorer). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pipeline-documentation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline Documentation` |
| **card** | — | — | [pipeline-documentation](../concepts/rjm/pipeline-documentation.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Pipeline documentation artifacts saved to `.agents/devops/`. |
| **consumes** | — | — | Pipeline workflow definitions, runner parameters, required secrets, and known workarounds. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pipeline Documentation (pipeline-documentation). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-triage-transcript

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `triage transcript` |
| **card** | — | — | [triage-transcript](../concepts/rjm/triage-transcript.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: triage transcript (triage-transcript). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-slo-service-level-objective

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO (Service Level Objective)` |
| **card** | — | — | [slo-service-level-objective](../concepts/rjm/slo-service-level-objective.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Precise numeric reliability target bounding acceptable performance and enabling error budget derivation. |
| **consumes** | — | — | Defined Service Level Indicators and user expectations of service reliability. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLO (Service Level Objective) (slo-service-level-objective). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-committed-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `committed_baseline` |
| **card** | — | — | [committed-baseline](../concepts/rjm/committed-baseline.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Regression threshold boundary for CI ratchet scripts. |
| **consumes** | — | — | Repository lint and test results. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: committed_baseline (committed-baseline). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-installation-scripts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Installation scripts` |
| **card** | — | — | [installation-scripts](../concepts/rjm/installation-scripts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Configured development environments, installed plugins, and synchronized MCP settings. |
| **consumes** | — | — | Platform environment configurations, marketplace references, and plugin dependencies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Installation scripts (installation-scripts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-why-change-now

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Why Change Now` |
| **card** | — | — | [why-change-now](../concepts/rjm/why-change-now.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A documented justification demonstrating why immediate architectural alteration is necessary and viable. |
| **consumes** | — | — | Evidence of changed requirements, new technological alternatives, and risk analysis. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Why Change Now (why-change-now). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-technical-debt-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Technical Debt Analysis` |
| **card** | — | — | [technical-debt-analysis](../concepts/rjm/technical-debt-analysis.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Structured metadata reporting debt added (Low/Medium/High), debt reduced (Low/Medium/High), and net architectural impact (Improved/Neutral/Degraded). |
| **consumes** | — | — | Assessment of shortcuts, workarounds, refactoring, and code cleanup introduced by the diff. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Technical Debt Analysis (technical-debt-analysis). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architecture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecture` |
| **card** | — | — | [architecture](../concepts/rjm/architecture.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system architecture document (ARCHITECTURE.md) or skill architecture specification. |
| **consumes** | — | — | System design decisions, component boundaries, data flow models, and failure mode mitigations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Architecture (architecture). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sequence-diagram

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sequence Diagram` |
| **card** | — | — | [sequence-diagram](../concepts/rjm/sequence-diagram.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Chronological message sequence diagram rendered in Mermaid. |
| **consumes** | — | — | Protocol specifications, authentication message flows, and inter-service interaction sequences. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Sequence Diagram (sequence-diagram). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-value-hypothesis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `value hypothesis` |
| **card** | — | — | [value-hypothesis](../concepts/rjm/value-hypothesis.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Falsifiable proposition and quantifiable retention/engagement thresholds to test real value delivery. |
| **consumes** | — | — | Product value proposition, target user persona, and observed user pain points. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: value hypothesis (value-hypothesis). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-overview

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overview` |
| **card** | — | — | [overview](../concepts/rjm/overview.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Introductory executive summary paragraph orienting the reader to the system or API scope. |
| **consumes** | — | — | High-level system architecture, service purpose, exposed interfaces, and protocol definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overview (overview). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-observability-section

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observability section` |
| **card** | — | — | [observability-section](../concepts/rjm/observability-section.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A formal specification section in the PRD detailing measurable SLIs, numerical SLO targets, error budgets, and alert thresholds. |
| **consumes** | — | — | PRD user stories, system architecture, and outputs from the `slo-designer` skill. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Observability section (observability-section). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-script-language

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `script-language` |
| **card** | — | — | [script-language](../concepts/rjm/script-language.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** Unique to RJM: script-language (script-language). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-processes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Processes` |
| **card** | — | — | [processes](../concepts/rjm/processes.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Transformed data and outputs; subject to all six STRIDE threat categories. |
| **consumes** | — | — | Application source code, service definitions, compute workloads, and execution contexts. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Processes (processes). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-recommended-controls

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recommended Controls` |
| **card** | — | — | [recommended-controls](../concepts/rjm/recommended-controls.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | prioritized-security-controls |
| **consumes** | — | — | attack-vectors, stride-analysis |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Recommended Controls (recommended-controls). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-needle-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `needle file` |
| **card** | — | — | [needle-file](../concepts/rjm/needle-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A single-line file containing isolated text for safe Git grep or Python comparison operations. |
| **consumes** | — | — | Quoted string or code snippet from an untrusted review comment. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: needle file (needle-file). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-structured-handoff-output

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Structured Handoff Output` |
| **card** | — | — | [structured-handoff-output](../concepts/rjm/structured-handoff-output.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Machine-readable markdown block designed for automated orchestration and ingestion. |
| **consumes** | — | — | Finalized retrospective outputs, candidate skills, memory diffs, and action items. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Structured Handoff Output (structured-handoff-output). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-serena-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena memory` |
| **card** | — | — | [serena-memory](../concepts/rjm/serena-memory.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Git-tracked markdown files in `.serena/memories/[domain]-[name].md`. |
| **consumes** | — | — | Retrospective learning extractions, resolved merge patterns, and architectural decisions. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique to RJM: Serena memory (serena-memory). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-maintainability-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Maintainability Assessment` |
| **card** | — | — | [maintainability-assessment](../concepts/rjm/maintainability-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured markdown table evaluating six maintainability qualities on a 1-5 scale with qualitative notes. |
| **consumes** | — | — | Code quality inspection of changed files across structural quality dimensions. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Maintainability Assessment (maintainability-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-task-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Task Structure` |
| **card** | — | — | [task-structure](../concepts/rjm/task-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Atomic task artifacts (`TASK-NNN-{slug}.md`) with complexity estimates, acceptance checkboxes, and file modification lists. |
| **consumes** | — | — | Technical design artifacts (`DESIGN-NNN`), acceptance criteria, and file impact estimates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Task Structure (task-structure). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-adr-072

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-072` |
| **card** | — | — | [adr-072](../concepts/rjm/adr-072.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Architectural specification for cross-harness abstraction and generator seams. |
| **consumes** | — | — | Multi-harness agent requirements, JTBD plugin architecture designs. |
| **impl status** | — | — | defects: unfailable-gate, doc-drift, missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: ADR-072 (adr-072). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-per-issue-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `per-issue handoff` |
| **card** | — | — | [per-issue-handoff](../concepts/rjm/per-issue-handoff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured handoff artifact at `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE_NUMBER}-handoff.md`. |
| **consumes** | — | — | Active session state, uncompleted issue scope, and handoff template at `.agents/templates/HANDOFF.md`. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: per-issue handoff (per-issue-handoff). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-optimize-group

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `optimize group` |
| **card** | — | — | [optimize-group](../concepts/rjm/optimize-group.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Exposed task subset and scores used for prompting and artifact optimization. |
| **consumes** | — | — | Full evaluation task universe and splitting ratios. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: optimize group (optimize-group). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-connected-context-from-exploring-knowledge-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Connected context from exploring-knowledge-graph` |
| **card** | — | — | [connected-context-from-exploring-knowledge-graph](../concepts/rjm/connected-context-from-exploring-knowledge-graph.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured subsection in PriorArtBlock classifying connected entities as in-scope, out-of-scope, or blast-radius. |
| **consumes** | — | — | Knowledge graph traversal results from exploring-knowledge-graph, entity relationships, and linked project metadata. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Connected context from exploring-knowledge-graph (connected-context-from-exploring-knowledge-graph). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skill-catalog-mcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Catalog MCP` |
| **card** | — | — | [skill-catalog-mcp](../concepts/rjm/skill-catalog-mcp.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | MCP tools (`search_skills`, `get_skill`, `check_skill_exists`, `cite_skill`, `suggest_skills`, `validate_no_raw_commands`) and MCP resources (`skills://catalog`, `skills://categ... |
| **consumes** | — | — | Executable skills from `.claude/skills/`, learned pattern skills from `.agents/skills/`, and category indexes from Serena memories. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skill Catalog MCP (skill-catalog-mcp). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-blob-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `blob file` |
| **card** | — | — | [blob-file](../concepts/rjm/blob-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A temporary file containing the verbatim file contents used for multi-line string containment checks. |
| **consumes** | — | — | Git blob content retrieved via git show for a specific commit and path. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: blob file (blob-file). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-mvp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MVP` |
| **card** | — | — | [mvp](../concepts/rjm/mvp.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Empirical customer response data validating or refuting core business assumptions. |
| **consumes** | — | — | A clear leap-of-faith hypothesis and pre-defined pass/fail evaluation thresholds. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: MVP (mvp). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-mitigations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mitigations` |
| **card** | — | — | [mitigations](../concepts/rjm/mitigations.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Prioritized, actionable remediation plan with assigned sprint targets and implementation owners. |
| **consumes** | — | — | Threat matrix entries, risk ratings, architectural constraints, and engineering team ownerships. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Mitigations (mitigations). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-traction-goal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `traction goal` |
| **card** | — | — | [traction-goal](../concepts/rjm/traction-goal.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Objective quantitative metric for judging channel test success and justifying continued spend. |
| **consumes** | — | — | Financial runway models, investor milestones, or breakeven operational requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: traction goal (traction-goal). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-plugin-content

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin content` |
| **card** | — | — | [plugin-content](../concepts/rjm/plugin-content.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Updated plugin bundles and synchronized mirror distributions. |
| **consumes** | — | — | Agent definitions, skill markdown files, prompts, and hook configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Plugin content (plugin-content). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-hypotheses

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `hypotheses` |
| **card** | — | — | [hypotheses](../concepts/rjm/hypotheses.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | One-page documented statement of falsifiable business assumptions to be tested in customer interviews. |
| **consumes** | — | — | Founder assumptions, preliminary market observations, and product concept. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: hypotheses (hypotheses). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-matrix-scores

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Matrix Scores` |
| **card** | — | — | [decision-matrix-scores](../concepts/rjm/decision-matrix-scores.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Evaluate` |
| **produces** | — | — | Ranked list of weighted scores, winning option identification, confidence determination, and sensitivity analysis table. |
| **consumes** | — | — | Validated criteria JSON specifying category weights and candidate option ratings across strategic, operational, and risk dimensions. |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Matrix Scores (decision-matrix-scores). Defined in rjm:Evaluate. 
- **sequencing note:** RJM-specific phase: rjm:Evaluate.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Log` |
| **card** | — | — | [decision-log](../concepts/rjm/decision-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Structured decision table capturing choices, multi-step reasoning chains, and evaluated alternatives. |
| **consumes** | — | — | Architectural choices, micro-decisions, technical trade-offs, and rejected alternative approaches. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Log (decision-log). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-steering-committee-charter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Steering Committee Charter` |
| **card** | — | — | [steering-committee-charter](../concepts/rjm/steering-committee-charter.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formally ratified governance decisions approving new agent roles, consolidation plans, or deprecation actions. |
| **consumes** | — | — | Agent creation proposals (ADRs), capability overlap analyses, and usage telemetry. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Steering Committee Charter (steering-committee-charter). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-adr-stub

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR stub` |
| **card** | — | — | [adr-stub](../concepts/rjm/adr-stub.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Preliminary ADR Markdown artifact (`# ADR-XXX: ...`) containing Context, Decision, Rationale, and Alternatives Considered sections. |
| **consumes** | — | — | CVA pattern recommendations, matrix evidence, and evaluated alternatives. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: ADR stub (adr-stub). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-path-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `path file` |
| **card** | — | — | [path-file](../concepts/rjm/path-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | An isolated path file loaded safely into environment variables using sentinel stripping. |
| **consumes** | — | — | File path cited within an external review comment. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: path file (path-file). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-interview-transcript

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Interview transcript` |
| **card** | — | — | [interview-transcript](../concepts/rjm/interview-transcript.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Durable markdown audit log at `.agents/specs/interviews/INTERVIEW-<slug>.md`. |
| **consumes** | — | — | User responses and recommended defaults during the requirements interview. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Interview transcript (interview-transcript). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-threat-model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Threat Model` |
| **card** | — | — | [threat-model](../concepts/rjm/threat-model.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Asset inventories, threat actor profiles, STRIDE matrices, and prioritized security mitigations. |
| **consumes** | — | — | System architectural proposals, component boundaries, external interfaces, and data flow diagrams. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Threat Model (threat-model). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-deprecated-skills-section

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deprecated Skills Section` |
| **card** | — | — | [deprecated-skills-section](../concepts/rjm/deprecated-skills-section.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A dedicated deprecation table within the skills index preventing obsolete skills from polluting active search results while retaining backwards auditability. |
| **consumes** | — | — | Deprecated skill records, deprecation dates, rationale statements, and replacement skill identifiers. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Deprecated Skills Section (deprecated-skills-section). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-what-currently-exists

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `What Currently Exists` |
| **card** | — | — | [what-currently-exists](../concepts/rjm/what-currently-exists.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An accurate, documented baseline of the existing system state prior to proposed modifications. |
| **consumes** | — | — | Codebase history, current architecture, and existing pattern documentation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: What Currently Exists (what-currently-exists). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-logs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Logs` |
| **card** | — | — | [logs](../concepts/rjm/logs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Timestamped structured event records correlated by trace IDs for debugging and compliance. |
| **consumes** | — | — | System execution events, error occurrences, transaction workflows. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Logs (logs). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** no
- **decision:** —

### artifact-rjm-automation-opportunities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Automation Opportunities` |
| **card** | — | — | [automation-opportunities](../concepts/rjm/automation-opportunities.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured Markdown table listing candidate automations with columns for Opportunity description, Type (Action/Workflow/Skill/Command), Benefit (Low/Medium/High), and Effort (... |
| **consumes** | — | — | DevOps review observations identifying repetitive manual tasks, recurring workflow patterns, or procedure automation candidates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Automation Opportunities (automation-opportunities). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-language-agnostic-shape

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Language-agnostic shape` |
| **card** | — | — | [language-agnostic-shape](../concepts/rjm/language-agnostic-shape.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A unified conceptual template adaptable to Python, TypeScript, Go, or Rust docstring syntaxes. |
| **consumes** | — | — | General docstring requirements (summary, parameters, returns, errors). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Language-agnostic shape (language-agnostic-shape). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-epic-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Epic Structure` |
| **card** | — | — | [epic-structure](../concepts/rjm/epic-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Structured epic artifacts containing problem statements, hypotheses, success metrics, kill criteria, and outcome reviews. |
| **consumes** | — | — | Strategic goals, prioritized feature initiatives, and user requirements. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Epic Structure (epic-structure). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-comparison-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Comparison Table` |
| **card** | — | — | [comparison-table](../concepts/rjm/comparison-table.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A structured comparison table detailing Option, Type, Cost, Setup Time, Maintenance, Token Burn, and Verdict. |
| **consumes** | — | — | User requirements, results of internal prior-art search, and external solution candidates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Comparison Table (comparison-table). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-prologue

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prologue` |
| **card** | — | — | [prologue](../concepts/rjm/prologue.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A five-clause executive summary summarizing the architectural decision in Alexandrian pattern form. |
| **consumes** | — | — | Use case context, key concerns, chosen option, desired quality attribute, and accepted downside. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Prologue (prologue). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-firm-finding

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Firm finding` |
| **card** | — | — | [firm-finding](../concepts/rjm/firm-finding.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Verified, factually grounded conclusions in diagnostic reports. |
| **consumes** | — | — | Direct user statements, confirmed repository artifacts, and validated historical records. |
| **impl status** | — | — | defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Firm finding (firm-finding). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-recovery-recipe-instruction-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `recovery-recipe instruction file` |
| **card** | — | — | [recovery-recipe-instruction-file](../concepts/rjm/recovery-recipe-instruction-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Contextual guidance instructing agents and developers on resolving version collisions. |
| **consumes** | — | — | Repository instruction loader configuration (`.github/instructions/plugin-version-bump.instructions.md`). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: recovery-recipe instruction file (recovery-recipe-instruction-file). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skill-specification-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Specification Template` |
| **card** | — | — | [skill-specification-template](../concepts/rjm/skill-specification-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 2: Specification` |
| **produces** | — | — | An XML specification document (`<skill_specification>`) ready for Phase 3 artifact generation. |
| **consumes** | — | — | Phase 1 Deep Analysis findings, applied thinking lenses, problem statements, and requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skill Specification Template (skill-specification-template). Defined in rjm:Phase 2: Specification. 
- **sequencing note:** RJM-specific phase: rjm:Phase 2: Specification.
- **needs decision:** yes
- **decision:** D-196

### artifact-rjm-script-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `script_path` |
| **card** | — | — | [script-path](../concepts/rjm/script-path.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: script_path (script-path). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-report-generators

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Report generators` |
| **card** | — | — | [report-generators](../concepts/rjm/report-generators.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Human-readable Markdown comments and summaries posted to pull requests or issues. |
| **consumes** | — | — | Raw CI check outputs, lint logs, test summaries, and AI review evaluation metrics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Report generators (report-generators). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-slos

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLOs` |
| **card** | — | — | [slos](../concepts/rjm/slos.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Quantitative reliability targets that govern deployment gates, error budget calculations, and alerting rules. |
| **consumes** | — | — | Service Level Indicators (SLIs), historical latency and error baselines, and business requirements. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLOs (slos). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-conventions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Conventions` |
| **card** | — | — | [conventions](../concepts/rjm/conventions.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A unified bulleted list of interface conventions establishing consistent API behavior. |
| **consumes** | — | — | System-wide API governance decisions and communication protocols. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Conventions (conventions). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-threat-matrix-summary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Threat Matrix Summary` |
| **card** | — | — | [threat-matrix-summary](../concepts/rjm/threat-matrix-summary.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Consolidated high-level security status dashboard table enabling executive and engineering review. |
| **consumes** | — | — | Detailed STRIDE analysis findings, likelihood scores, impact assessments, and mitigation assignments. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Threat Matrix Summary (threat-matrix-summary). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skill-observations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Observations` |
| **card** | — | — | [skill-observations](../concepts/rjm/skill-observations.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Initialized `.serena/memories/{skill-name}-observations.md` markdown file. |
| **consumes** | — | — | Empirical learnings and observations from sessions utilizing a specific skill. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skill Observations (skill-observations). Defined in rjm:reflect. 
- **sequencing note:** RJM-specific phase: rjm:reflect.
- **needs decision:** no
- **decision:** —

### artifact-rjm-data-store

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Store` |
| **card** | — | — | [data-store](../concepts/rjm/data-store.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Cataloged storage component entry in threat model component tables subject to tampering, disclosure, and DoS threats. |
| **consumes** | — | — | Database instances, disk volumes, object storage buckets, and persistent memory caches. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Data Store (data-store). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-madr-4-0

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MADR 4.0` |
| **card** | — | — | [madr-4-0](../concepts/rjm/madr-4-0.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Standardized Markdown Architectural Decision Record document. |
| **consumes** | — | — | Problem statement, decision context, candidate options, trade-offs, and verification criteria. |
| **impl status** | — | — | defects: cross-file-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: MADR 4.0 (madr-4-0). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-workflowdefinition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowDefinition` |
| **card** | — | — | [workflowdefinition](../concepts/rjm/workflowdefinition.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Validated pipeline specification ready for scheduling and execution. |
| **consumes** | — | — | Workflow YAML specification file or programmatic step configurations. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: WorkflowDefinition (workflowdefinition). Defined in rjm:orchestrator. 
- **sequencing note:** RJM-specific phase: rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### artifact-rjm-blocker-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Blocker Report` |
| **card** | — | — | [blocker-report](../concepts/rjm/blocker-report.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured blocker report artifact enabling rapid orchestrator or human triage. |
| **consumes** | — | — | Task identifier, description of blocking condition, blocker type categorization, and trial records of alternative approaches. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Blocker Report (blocker-report). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-objectives

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Objectives` |
| **card** | — | — | [objectives](../concepts/rjm/objectives.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | List of binary-verifiable markdown checkboxes defining discrete, trackable goals within an execution plan. |
| **consumes** | — | — | Task breakdown, epic requirements, and acceptance criteria. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Objectives (objectives). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-script-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Template` |
| **card** | — | — | [script-template](../concepts/rjm/script-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 3: Generation` |
| **produces** | — | — | A full starter Python script implementation located at `../assets/templates/script-template.py`. |
| **consumes** | — | — | Target skill requirements and scripting patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Script Template (script-template). Defined in rjm:Phase 3: Generation. 
- **sequencing note:** RJM-specific phase: rjm:Phase 3: Generation.
- **needs decision:** yes
- **decision:** D-197

### artifact-rjm-executionplan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ExecutionPlan` |
| **card** | — | — | [executionplan](../concepts/rjm/executionplan.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | Summary of planned API calls, estimated input/output tokens, estimated cost in USD, and pricing timestamp. |
| **consumes** | — | — | List of test fixtures, model identifier, run count, variants tuple, and token pricing rates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: ExecutionPlan (executionplan). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** yes
- **decision:** D-198

### artifact-rjm-paulo-merson

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Paulo Merson` |
| **card** | — | — | [paulo-merson](../concepts/rjm/paulo-merson.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured architectural decision document with explicit decision drivers and empirical confirmation mechanisms. |
| **consumes** | — | — | Problem statement, architectural drivers, research requirements, and candidate solutions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Paulo Merson (paulo-merson). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-coverage-note

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `coverage note` |
| **card** | — | — | [coverage-note](../concepts/rjm/coverage-note.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Audit trail distinguishing between executed searches with zero results and unexecuted or degraded searches. |
| **consumes** | — | — | Search query results, tool execution errors, and MCP availability status. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: coverage note (coverage-note). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-confirmation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confirmation` |
| **card** | — | — | [confirmation](../concepts/rjm/confirmation.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Actionable verification mechanism (test suite, automated gate, metrics) ensuring the architectural decision is implemented as specified. |
| **consumes** | — | — | Accepted architectural decision, implementation criteria, test and validation strategies. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Confirmation (confirmation). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-conversation-structure-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Conversation Structure Template` |
| **card** | — | — | [conversation-structure-template](../concepts/rjm/conversation-structure-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured message sequence defining roles and cognitive responsibilities across initial generation, analysis/feedback, refinement, and formatting turns. |
| **consumes** | — | — | Base system instructions and multi-turn conversational requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Conversation Structure Template (conversation-structure-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-199

### artifact-rjm-expected-answer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `expected answer` |
| **card** | — | — | [expected-answer](../concepts/rjm/expected-answer.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Reference evaluation artifact and benchmark criterion used by the LLM judge to score response quality. |
| **consumes** | — | — | Domain reference documentation and expert specification of expected agent behavior. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: expected answer (expected-answer). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-provenance-and-re-verification-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Provenance and Re-Verification Table` |
| **card** | — | — | [provenance-and-re-verification-table](../concepts/rjm/provenance-and-re-verification-table.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A verifiable audit table ensuring that change control rules remain synchronized with upstream implementations. |
| **consumes** | — | — | Referenced source files, ADR records, and executable shell commands. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Provenance and Re-Verification Table (provenance-and-re-verification-table). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-planguage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Planguage` |
| **card** | — | — | [planguage](../concepts/rjm/planguage.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A metrics-driven decision record based on Tom Gilb's planning language methodology. |
| **consumes** | — | — | Measurable quality requirements, stakeholder goals, risks, and architectural assumptions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Planguage (planguage). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** yes
- **decision:** D-200

### artifact-rjm-operational-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Operational Notes` |
| **card** | — | — | [operational-notes](../concepts/rjm/operational-notes.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Operational readiness reference section connecting architectural design to day-two operations. |
| **consumes** | — | — | Deployment automation, monitoring dashboards, log aggregators, and on-call rotation schedules. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Operational Notes (operational-notes). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-step0-5-halt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `step0_5-halt` |
| **card** | — | — | [step0-5-halt](../concepts/rjm/step0-5-halt.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured fenced code block (`trigger`, `check`, `evidence`, `test_failed`, `deferral`) emitted to stdout. |
| **consumes** | — | — | Halt trigger firings (H6–H11) from Step 0.5 Memory-First Gate evaluation. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: step0_5-halt (step0-5-halt). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skill-file-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill File Format` |
| **card** | — | — | [skill-file-format](../concepts/rjm/skill-file-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized memory documents saved to `.serena/memories/{domain}/{domain}-{NNN}-{short-descriptor}.md`. |
| **consumes** | — | — | Validated learning rules, context descriptions, concrete evidence citations, and code patterns. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skill File Format (skill-file-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-rate-limits

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rate Limits` |
| **card** | — | — | [rate-limits](../concepts/rjm/rate-limits.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Documented request rate limits and HTTP 429 response contracts with retry headers. |
| **consumes** | — | — | Service capacity constraints, API tier definitions, and quota tracking state. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Rate Limits (rate-limits). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-production

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `production` |
| **card** | — | — | [production](../concepts/rjm/production.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Enforcement of default baseline quality thresholds (e.g. cohesion 7, coupling 7, encapsulation 7, non-redundancy 8). |
| **consumes** | — | — | Source files intended for deployment to production environments. |
| **impl status** | — | — | defects: doc-drift, missing-path, always-failing-gate |

- **class:** UNIQUE
- **difference:** Unique to RJM: production (production). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-synthesis-panel-frontmatter-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Synthesis Panel Frontmatter Standard` |
| **card** | — | — | [synthesis-panel-frontmatter-standard](../concepts/rjm/synthesis-panel-frontmatter-standard.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized YAML frontmatter blocks (`status`, `priority`, `reviewer`, `date`, `pr-branch`, `scope`) on design review documents. |
| **consumes** | — | — | Architect design review evaluations and synthesis panel outcomes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Synthesis Panel Frontmatter Standard (synthesis-panel-frontmatter-standard). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architect-synthesis-panels

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `architect synthesis panels` |
| **card** | — | — | [architect-synthesis-panels](../concepts/rjm/architect-synthesis-panels.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Synthesis evaluation panels capturing holistic architectural assessments, trade-offs, and final merge verdicts. |
| **consumes** | — | — | Architect agent analyses, cross-agent critique rounds, and ADR proposals. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: architect synthesis panels (architect-synthesis-panels). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pr-branch-holder-lease

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Branch Holder Lease` |
| **card** | — | — | [pr-branch-holder-lease](../concepts/rjm/pr-branch-holder-lease.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | A PR comment marker (`<!-- PR-BRANCH-HOLDER-LEASE -->`) establishing exclusive mutation ownership. |
| **consumes** | — | — | Repository name, PR number, target branch, holder id, verified GitHub actor, and base SHA. |
| **impl status** | — | — | not-implemented (Status proposed in ADR-090; citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** Unique to RJM: PR Branch Holder Lease (pr-branch-holder-lease). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Report` |
| **card** | — | — | [report](../concepts/rjm/report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | Structured JSON payloads and human-readable Markdown documents summarizing evaluation or validation results. |
| **consumes** | — | — | Individual run records, test outcomes, validator findings, or audit scan data. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Report (report). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-counter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Counter` |
| **card** | — | — | [counter](../concepts/rjm/counter.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Monotonically increasing cumulative numeric time-series values. |
| **consumes** | — | — | Discrete event occurrences (such as incoming HTTP requests or raised errors). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Counter (counter). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** no
- **decision:** —

### artifact-rjm-blockers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Blockers` |
| **card** | — | — | [blockers](../concepts/rjm/blockers.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Structured documentation of impediments, their impact on plan status, and requirements for unblocking. |
| **consumes** | — | — | Unresolved technical hurdles, missing upstream requirements, failing gates, or third-party blockers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Blockers (blockers). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scope` |
| **card** | — | — | [scope](../concepts/rjm/scope.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Explicit inclusion and exclusion boundaries defining what will and will not be built or evaluated. |
| **consumes** | — | — | Feature descriptions, system architecture boundaries, stakeholder requests, and backlog epics. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Scope (scope). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-commit-count

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Commit count` |
| **card** | — | — | [commit-count](../concepts/rjm/commit-count.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Advisory warning notifications and PR split recommendations. |
| **consumes** | — | — | Git branch commit history relative to origin/main. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Commit count (commit-count). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-curated-context-corpus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `curated context corpus` |
| **card** | — | — | [curated-context-corpus](../concepts/rjm/curated-context-corpus.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Rich, high-fidelity prompt contexts assembled dynamically for LLM task execution. |
| **consumes** | — | — | Architectural decision records, memory notes, agent definitions, guidelines, and project specifications. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: curated context corpus (curated-context-corpus). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-entity-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Entity graph` |
| **card** | — | — | [entity-graph](../concepts/rjm/entity-graph.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An interconnected network of tangible entity nodes representing real-world components. |
| **consumes** | — | — | Real-world systems, domain entities, tools, and project assets. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique to RJM: Entity graph (entity-graph). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sidecar-memories

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sidecar memories` |
| **card** | — | — | [sidecar-memories](../concepts/rjm/sidecar-memories.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Isolated agent memory files storing agent-specific context and preferences. |
| **consumes** | — | — | Agent role definitions and task performance observations. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: Sidecar memories (sidecar-memories). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ruthless-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Ruthless Triage` |
| **card** | — | — | [ruthless-triage](../concepts/rjm/ruthless-triage.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Structured triage report (Current State, The Real Question, Options, Verdict: DO / DON'T / WHY). |
| **consumes** | — | — | Multi-variable dilemmas, stalled projects, overwhelming goal lists, organizational blockers. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Ruthless Triage (ruthless-triage). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-lead-magnet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `lead magnet` |
| **card** | — | — | [lead-magnet](../concepts/rjm/lead-magnet.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Qualified inbound prospect leads, contact details, brand goodwill, and buyer engagement. |
| **consumes** | — | — | Understanding of acute customer pain points, specific domain solution, and an aligned paid offer. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: lead magnet (lead-magnet). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-holder-id

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `holder id` |
| **card** | — | — | [holder-id](../concepts/rjm/holder-id.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | A stable, non-colliding holder identifier string in lease comment schemas. |
| **consumes** | — | — | Explicit CLI arguments (`--lease-holder`), agent harness session IDs (`AI_AGENT_SESSION_ID`), or GitHub Actions run identifiers. |
| **impl status** | — | — | not-implemented (ADR-090 proposed; citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** Unique to RJM: holder id (holder-id). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Schema` |
| **card** | — | — | [design-schema](../concepts/rjm/design-schema.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | `DESIGN-NNN-[kebab-case-name].md` files containing YAML frontmatter, component architecture, and decision mappings. |
| **consumes** | — | — | Approved `REQ-NNN` requirements artifacts, architectural decisions, and domain ontology decision rules. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Schema (design-schema). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** yes
- **decision:** D-201

### artifact-rjm-output-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Output Contract` |
| **card** | — | — | [output-contract](../concepts/rjm/output-contract.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A standardized `## [Agent Name] Report: [Topic]` markdown deliverable. |
| **consumes** | — | — | Agent execution results, analytical findings, code modifications, or recommendations. |
| **impl status** | — | — | defects: other (Principle Compliance Matrix in .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder table with blank checkboxes; capability floor ... |

- **class:** UNIQUE
- **difference:** Unique to RJM: Output Contract (output-contract). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-reviewed-by

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reviewed-By` |
| **card** | — | — | [reviewed-by](../concepts/rjm/reviewed-by.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | A standardized Git commit trailer formatted as `Reviewed-By: /review@<axes> on <sha>`. |
| **consumes** | — | — | Completed review axes, reviewed commit SHA, and git commit history. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Reviewed-By (reviewed-by). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-gatedecision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GateDecision` |
| **card** | — | — | [gatedecision](../concepts/rjm/gatedecision.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Structured decision record containing skip boolean, verdict string, message, and retry metadata. |
| **consumes** | — | — | Context infrastructure failure status flag. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: GateDecision (gatedecision). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-endpoints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Endpoints` |
| **card** | — | — | [endpoints](../concepts/rjm/endpoints.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured, exhaustive per-route technical documentation. |
| **consumes** | — | — | Route definitions, query parameters, request schemas, status codes, and response payloads. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Endpoints (endpoints). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-investigation-only-allowlist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `investigation-only allowlist` |
| **card** | — | — | [investigation-only-allowlist](../concepts/rjm/investigation-only-allowlist.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Boolean verdicts and pattern lists determining whether PR files qualify for QA exemption. |
| **consumes** | — | — | Path strings from changed files in pull requests. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: investigation-only allowlist (investigation-only-allowlist). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-non-goals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Non-Goals` |
| **card** | — | — | [non-goals](../concepts/rjm/non-goals.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Explicit list of rejected or deferred capabilities cited during architectural review. |
| **consumes** | — | — | Out-of-scope feature requests, potential scope creep areas, and boundary trade-offs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Non-Goals (non-goals). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-adr-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Assessment` |
| **card** | — | — | [adr-assessment](../concepts/rjm/adr-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Structured metadata indicating ADR requirement (Yes/No), identified decisions, existing ADR references, and concrete recommendations. |
| **consumes** | — | — | Identified architectural decisions, pattern introductions, or dependency choices compared against existing ADR directories. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: ADR Assessment (adr-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-lease-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lease schema` |
| **card** | — | — | [lease-schema](../concepts/rjm/lease-schema.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Formatted markdown comments posted to GitHub pull request discussions. |
| **consumes** | — | — | Automation ID, holder ID, GitHub actor, branch name, timestamps, base SHA, and operation type. |
| **impl status** | — | — | not-implemented (ADR-090 proposed; citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Lease schema (lease-schema). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** yes
- **decision:** D-202

### artifact-rjm-tactical-cost-note

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tactical cost note` |
| **card** | — | — | [tactical-cost-note](../concepts/rjm/tactical-cost-note.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A concise cost table comparing Setup, Monthly, and Notes across candidate options. |
| **consumes** | — | — | Setup duration estimates, monthly subscription fees, and DIY token burn calculations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Tactical cost note (tactical-cost-note). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-code-comment-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Comment Standards` |
| **card** | — | — | [code-comment-standards](../concepts/rjm/code-comment-standards.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized in-code documentation patterns across functions, docstrings, annotations, and deprecations. |
| **consumes** | — | — | Source code, function signatures, complex algorithms, and architectural rationales. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Code Comment Standards (code-comment-standards). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-audience-agent-system-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Audience Agent System Prompt` |
| **card** | — | — | [audience-agent-system-prompt](../concepts/rjm/audience-agent-system-prompt.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Configured evaluator agent assessing trigger naturalness, instruction actionability, jargon definitions, and discoverability. |
| **consumes** | — | — | Agent invocation parameters and usability focus guidelines. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Audience Agent System Prompt (audience-agent-system-prompt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-committed-count-baselines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `committed count baselines` |
| **card** | — | — | [committed-count-baselines](../concepts/rjm/committed-count-baselines.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tracked text files recording violation thresholds in git. |
| **consumes** | — | — | Linter output metrics measuring taste and ruff violations. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: committed count baselines (committed-count-baselines). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `decision memory` |
| **card** | — | — | [decision-memory](../concepts/rjm/decision-memory.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Durable markdown record in .serena/memories/decision-<slug>.md capturing verified technical facts. |
| **consumes** | — | — | Measured probe evidence, comparison with official documentation, and architectural rationale. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: decision memory (decision-memory). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-post-pr-retrospective

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-PR Retrospective` |
| **card** | — | — | [post-pr-retrospective](../concepts/rjm/post-pr-retrospective.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Archived retrospective record detailing timeline, five whys analysis, and actionable learnings. |
| **consumes** | — | — | Merged pull request metadata, CI review comments, and commit logs. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Post-PR Retrospective (post-pr-retrospective). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-priorartblock

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PriorArtBlock` |
| **card** | — | — | [priorartblock](../concepts/rjm/priorartblock.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured markdown block formatted according to the schema specifications. |
| **consumes** | — | — | Direct prior art, graph exploration results, and coverage notes. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: PriorArtBlock (priorartblock). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-progress-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Progress Log` |
| **card** | — | — | [progress-log](../concepts/rjm/progress-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Append-only tabular progress log documenting the chronology and ownership of execution milestones. |
| **consumes** | — | — | Work status updates, timestamps, milestone accomplishments, and executing agent identity. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Progress Log (progress-log). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-team

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-team` |
| **card** | — | — | [agent-team](../concepts/rjm/agent-team.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A standalone plugin enabling multi-agent delegation and collaboration. |
| **consumes** | — | — | Specialist agent definitions, agent routing logic, and shared memory infrastructure. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: agent-team (agent-team). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architectural-concerns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architectural Concerns` |
| **card** | — | — | [architectural-concerns](../concepts/rjm/architectural-concerns.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A markdown table documenting each concern with Severity (Critical/High/Medium/Low), Concern summary, Location (file:line), and actionable Recommendation. |
| **consumes** | — | — | Specific architectural flaws, boundary violations, or anti-patterns discovered in the diff. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Architectural Concerns (architectural-concerns). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-spec-005

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SPEC-005` |
| **card** | — | — | [spec-005](../concepts/rjm/spec-005.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Standardized programmatic invocation contracts linking slash commands to automated context gathering. |
| **consumes** | — | — | Lifecycle command interface requirements and context gathering orchestration designs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: SPEC-005 (spec-005). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-overall-design-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall Design Score` |
| **card** | — | — | [overall-design-score](../concepts/rjm/overall-design-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A composite numeric score out of 5 representing overall architectural design quality. |
| **consumes** | — | — | Individual ratings from the Design Quality Assessment table. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overall Design Score (overall-design-score). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-execution-trace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Execution Trace` |
| **card** | — | — | [execution-trace](../concepts/rjm/execution-trace.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Chronological event table with columns for Time, Agent, Action, Outcome, and Energy. |
| **consumes** | — | — | Session logs, tool call records, and execution timestamps. |
| **impl status** | — | — | defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/frameworks.md |

- **class:** UNIQUE
- **difference:** Unique to RJM: Execution Trace (execution-trace). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-discriminating-fixtures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-discriminating fixtures` |
| **card** | — | — | [agent-discriminating-fixtures](../concepts/rjm/agent-discriminating-fixtures.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | eval-corpus |
| **consumes** | — | — | agent-prompt |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: agent-discriminating fixtures (agent-discriminating-fixtures). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-template-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Template Assessment` |
| **card** | — | — | [template-assessment](../concepts/rjm/template-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured assessment block rating template adequacy and listing concrete structural or convention defects. |
| **consumes** | — | — | Analysis of PR templates (`PULL_REQUEST_TEMPLATE.md`) and issue templates (`ISSUE_TEMPLATE/*`) changed in a pull request. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Template Assessment (template-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** yes
- **decision:** D-203

### artifact-rjm-slo

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO` |
| **card** | — | — | [slo](../concepts/rjm/slo.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Target reliability percentages, measurement windows (e.g. 30-day rolling), and error budgets. |
| **consumes** | — | — | Service Level Indicators (SLIs), service criticality ratings, and dependency chain constraints. |
| **impl status** | — | — | defects: internal-contradiction, exit-code-mismatch, missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLO (slo). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-alternative-analysis-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Alternative Analysis Format` |
| **card** | — | — | [alternative-analysis-format](../concepts/rjm/alternative-analysis-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comparative evaluation document detailing pros, cons, and tradeoffs across competing designs. |
| **consumes** | — | — | Current proposed technical approach, identified architectural concerns, and candidate alternative solutions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Alternative Analysis Format (alternative-analysis-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-investigation-artifact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `investigation artifact` |
| **card** | — | — | [investigation-artifact](../concepts/rjm/investigation-artifact.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: investigation artifact (investigation-artifact). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-handoff-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff Contract` |
| **card** | — | — | [handoff-contract](../concepts/rjm/handoff-contract.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured delegation block containing DELEGATE TO, TASK, CONTEXT, EXPECTED OUTPUT, SUCCESS CRITERIA, CONSTRAINTS, and optional TIMEBOX. |
| **consumes** | — | — | Target agent role, atomic task definition, background context, output requirements, and constraints. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Handoff Contract (handoff-contract). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scrap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `scrap` |
| **card** | — | — | [scrap](../concepts/rjm/scrap.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Archival disposition of eval corpora, deprecation or supersession of evaluation ADRs, and retirement of specialized agent prompts. |
| **consumes** | — | — | Evaluation evidence showing negative/null performance deltas or fatal experimental methodology flaws. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: scrap (scrap). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-tco-calculator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TCO Calculator` |
| **card** | — | — | [tco-calculator](../concepts/rjm/tco-calculator.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Quantitative financial comparisons (NPV, IRR, break-even years) across build, buy, and partner options. |
| **consumes** | — | — | Cost assumptions, development estimates, licensing fees, maintenance rates, and discount rates. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: TCO Calculator (tco-calculator). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-prior-art-block

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prior Art block` |
| **card** | — | — | [prior-art-block](../concepts/rjm/prior-art-block.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Markdown section embedded into the PRD containing historical context and blast-radius constraints. |
| **consumes** | — | — | Direct prior art searches, chestertons-fence recommendations, and exploring-knowledge-graph entities. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Prior Art block (prior-art-block). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-prescription

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prescription` |
| **card** | — | — | [prescription](../concepts/rjm/prescription.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Proposed remediation steps evaluated independently from the finding's verdict and diagnosis. |
| **consumes** | — | — | A review finding proposing specific code changes or architectural mitigations. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Prescription (prescription). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-explainer-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Explainer Structure` |
| **card** | — | — | [explainer-structure](../concepts/rjm/explainer-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Educational documentation formatted to `.agents/planning/EXPLAINER-[topic].md`. |
| **consumes** | — | — | Complex concepts, architecture topics, workflow designs, or system mechanics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Explainer Structure (explainer-structure). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-overall-decision-rigor-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall Decision Rigor Score` |
| **card** | — | — | [overall-decision-rigor-score](../concepts/rjm/overall-decision-rigor-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A composite numeric score out of 5 representing overall decision reasoning quality. |
| **consumes** | — | — | Individual criterion ratings from the Decision Quality Assessment table. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overall Decision Rigor Score (overall-decision-rigor-score). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-growth-hypothesis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `growth hypothesis` |
| **card** | — | — | [growth-hypothesis](../concepts/rjm/growth-hypothesis.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Falsifiable predictions and quantifiable acquisition thresholds governing viral, paid, or organic spread. |
| **consumes** | — | — | A validated value hypothesis and preliminary customer acquisition assumptions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: growth hypothesis (growth-hypothesis). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Structure` |
| **card** | — | — | [design-structure](../concepts/rjm/design-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A technical design document (`DESIGN-NNN-{slug}.md`) covering component architecture, technology decisions, security, and test strategy. |
| **consumes** | — | — | Requirements specifications (`REQ-NNN`), architectural decisions, and ontology decision rules (`O5`). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Structure (design-structure). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-push-guard-framework

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `push-guard framework` |
| **card** | — | — | [push-guard-framework](../concepts/rjm/push-guard-framework.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Pre-push validation verdicts preventing defective commits from reaching CI. |
| **consumes** | — | — | Local git commit states, staged diffs, and formatting standards. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: push-guard framework (push-guard-framework). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-output-envelope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `output envelope` |
| **card** | — | — | [output-envelope](../concepts/rjm/output-envelope.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured JSON or formatted console output wrapping operation results. |
| **consumes** | — | — | Raw script execution output and telemetry. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: output envelope (output-envelope). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-action-sequence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Action Sequence` |
| **card** | — | — | [action-sequence](../concepts/rjm/action-sequence.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An ordered action plan table specifying sequence order, action description, dependencies (`Depends On`), and downstream blockers (`Blocks`). |
| **consumes** | — | — | Prioritized retrospective action items and their execution prerequisites. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Action Sequence (action-sequence). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-rationale

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rationale` |
| **card** | — | — | [rationale](../concepts/rjm/rationale.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Documented technical justification establishing why a specific architectural alternative was selected over competing options. |
| **consumes** | — | — | Decision context forces, candidate alternatives, trade-off evaluations, and empirical evidence. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Rationale (rationale). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-strategy-canvas

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strategy canvas` |
| **card** | — | — | [strategy-canvas](../concepts/rjm/strategy-canvas.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A visual diagnostic plot of industry value curves revealing competitive crowding or divergent opportunities. |
| **consumes** | — | — | Standard industry buying criteria and rival performance scores across all competitive factors. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: strategy canvas (strategy-canvas). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-incoherence-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Incoherence Report` |
| **card** | — | — | [incoherence-report](../concepts/rjm/incoherence-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Code Quality` |
| **produces** | — | — | Structured markdown report containing executive summary, severity breakdowns, Source A/B evidence citations, and interactive user resolution markers. |
| **consumes** | — | — | Codebase survey context, exploration findings across abstract consistency dimensions, and deep-dive verification verdicts. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Incoherence Report (incoherence-report). Defined in rjm:Code Quality. 
- **sequencing note:** RJM-specific phase: rjm:Code Quality.
- **needs decision:** no
- **decision:** —

### artifact-rjm-claude-lifecycle-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Claude lifecycle hook` |
| **card** | — | — | [claude-lifecycle-hook](../concepts/rjm/claude-lifecycle-hook.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Runtime-contract test suites and validated hook anchoring reports. |
| **consumes** | — | — | Lifecycle hook scripts under .claude/hooks/ and hook registration metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Claude lifecycle hook (claude-lifecycle-hook). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-memory-index

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `memory-index` |
| **card** | — | — | [memory-index](../concepts/rjm/memory-index.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Search results mapping keywords to specific memory filenames. |
| **consumes** | — | — | Institutional memory catalog entries and category keywords. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: memory-index (memory-index). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-priority-stack

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Priority Stack` |
| **card** | — | — | [priority-stack](../concepts/rjm/priority-stack.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Tiered priority artifact organizing items into P0 (Do Today), P1 (Do This Week), P2 (Do Eventually), and KILL (Stop Doing). |
| **consumes** | — | — | Backlogs of competing tasks, feature requests, operational items. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Priority Stack (priority-stack). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-per-branch-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Per-branch handoff` |
| **card** | — | — | [per-branch-handoff](../concepts/rjm/per-branch-handoff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Handoff markdown document at `.agents/handoffs/{branch}/{session}.md`. |
| **consumes** | — | — | Feature branch state, ongoing sub-task statuses, and local test evidence across collaborating sessions. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Per-branch handoff (per-branch-handoff). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ontologyfragment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OntologyFragment` |
| **card** | — | — | [ontologyfragment](../concepts/rjm/ontologyfragment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Durable domain modeling file at `.agents/specs/ontology/<feature-slug>.md`. |
| **consumes** | — | — | Elicited domain answers covering O1 entities, O2 ubiquitous language, O3 relationships, O4 aggregate boundaries, O5 decision rules, O6 bounded contexts, O7 open questions. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: OntologyFragment (ontologyfragment). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-req

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REQ-*` |
| **card** | — | — | [req](../concepts/rjm/req.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Formal requirements specification documents (e.g. `REQ-001`) with explicit acceptance criteria and verification requirements. |
| **consumes** | — | — | User requirements, problem statements, feature requests, and issue descriptions. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: REQ-* (req). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-assembly-layer-prototype

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Assembly-layer prototype` |
| **card** | — | — | [assembly-layer-prototype](../concepts/rjm/assembly-layer-prototype.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Working prototype and architectural evaluation of context assembly layers. |
| **consumes** | — | — | Catalogued context artifacts and candidate retrieval/assembly mechanisms (RAG, rule-based, agent-mediated). |
| **impl status** | — | — | not-implemented (ADR-069 open question deferred to downstream prototyping) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Assembly-layer prototype (assembly-layer-prototype). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-diff-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `diff-format` |
| **card** | — | — | [diff-format](../concepts/rjm/diff-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Standardized unified diff blocks specifying unambiguous code insertions, deletions, and replacements. |
| **consumes** | — | — | Proposed code modifications within milestone specifications. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: diff-format (diff-format). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-detection-scripts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Detection scripts` |
| **card** | — | — | [detection-scripts](../concepts/rjm/detection-scripts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Detailed reports of detected violations or coverage gaps with exit code 1 if critical issues are found. |
| **consumes** | — | — | Staged git diffs, changed files, test suites, and skill configuration definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Detection scripts (detection-scripts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-shared-templates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shared Templates` |
| **card** | — | — | [shared-templates](../concepts/rjm/shared-templates.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Generated agent files for Copilot CLI (`src/copilot-cli/agents/*.agent.md`) and VS Code Copilot (`src/vs-code-agents/*.md`). |
| **consumes** | — | — | Baseline agent definitions, common instructions, and role guidelines. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Shared Templates (shared-templates). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-204

### artifact-rjm-discussion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Discussion` |
| **card** | — | — | [discussion](../concepts/rjm/discussion.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Narrative explaining the background forces and problem context motivating the architectural choice. |
| **consumes** | — | — | Problem statement, organizational background, stakeholder perspectives, and project constraints. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Discussion (discussion). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-adr-debate-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Debate Log` |
| **card** | — | — | [adr-debate-log](../concepts/rjm/adr-debate-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Debate summary, agent review rounds, consensus points, prioritized change requirements (P0/P1/P2), and consolidated decision verdict. |
| **consumes** | — | — | Draft Architecture Decision Record (ADR), specialist agent critique reviews (Analyst, Architect, Critic, Independent Thinker, Security, High-Level Advisor). |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: ADR Debate Log (adr-debate-log). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-direct-prior-art-from-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Direct prior art from memory` |
| **card** | — | — | [direct-prior-art-from-memory](../concepts/rjm/direct-prior-art-from-memory.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured subsection of PriorArtBlock summarizing relevant historical decisions and whether to honor, adapt, or propose amending them. |
| **consumes** | — | — | Memory point search results, historical ADRs, session episodes, and chestertons-fence recommendations. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Direct prior art from memory (direct-prior-art-from-memory). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-buying-signals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `buying signals` |
| **card** | — | — | [buying-signals](../concepts/rjm/buying-signals.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Verifiable behavioral evidence confirming that a prospect is commercially engaged rather than politely nodding. |
| **consumes** | — | — | Customer presentation of a rough solution prototype (mockup, demo, concierge). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: buying signals (buying-signals). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Handoff` |
| **card** | — | — | [session-handoff](../concepts/rjm/session-handoff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured markdown handoff document (`HANDOFF.md` or per-issue continuity records under `.agents/sessions/handoffs/`). |
| **consumes** | — | — | Completed tasks, context for the next session, pending backlog items, decisions made, and modified file lists from the completed session. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Session Handoff (session-handoff). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-impact-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Impact Assessment` |
| **card** | — | — | [impact-assessment](../concepts/rjm/impact-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured impact evaluations detailing blast radius, affected artifacts, verification risks, and user impact. |
| **consumes** | — | — | Proposed pull request diffs or agent consolidation proposals. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Impact Assessment (impact-assessment). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-script-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script Structure` |
| **card** | — | — | [script-structure](../concepts/rjm/script-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized script layout with clear synopsis documentation and typed parameters. |
| **consumes** | — | — | New automation or utility script specifications. |
| **impl status** | — | — | defects: missing-path, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Script Structure (script-structure). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-utility-scripts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Utility scripts` |
| **card** | — | — | [utility-scripts](../concepts/rjm/utility-scripts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Automated execution of repetitive developer tasks such as validated PR creation or batch operations. |
| **consumes** | — | — | CLI arguments, Git repository state, PR metadata, and target branch configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Utility scripts (utility-scripts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-derived-data

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Derived data` |
| **card** | — | — | [derived-data](../concepts/rjm/derived-data.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Caches, search indices, materialized views, read-optimized snapshots. |
| **consumes** | — | — | System of record state, deterministic transformation and projection functions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Derived data (derived-data). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-card-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Card Template` |
| **card** | — | — | [card-template](../concepts/rjm/card-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formatted ASCII card adhering to the structural sections: SCOPE, PROBLEM, TECHNIQUE, and BEFORE/AFTER. |
| **consumes** | — | — | Specific prompt modification details including section name, downstream impacts, observed failure, and reference citation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Card Template (card-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-205

### artifact-rjm-junit-xml

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `JUnit XML` |
| **card** | — | — | [junit-xml](../concepts/rjm/junit-xml.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Structured XML test reports consumed by CI test reporters and verification gates. |
| **consumes** | — | — | Test execution results, test case outcome statuses, or CI skip reasons. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: JUnit XML (junit-xml). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-findings-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `findings.md` |
| **card** | — | — | [findings-md](../concepts/rjm/findings-md.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Persistent documentation of analysis discoveries external to the prompt context. |
| **consumes** | — | — | Code inspection results, API specifications, and architectural investigation notes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: findings.md (findings-md). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** no
- **decision:** —

### artifact-rjm-judge-salvaged

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `judge_salvaged` |
| **card** | — | — | [judge-salvaged](../concepts/rjm/judge-salvaged.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Auditable sample records tagged with `judge_salvaged` metadata in recomputed evaluation tables. |
| **consumes** | — | — | Salvaged evaluation payloads meeting full-field recovery requirements. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: judge_salvaged (judge-salvaged). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-extract-script-refs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extract_script_refs` |
| **card** | — | — | [extract-script-refs](../concepts/rjm/extract-script-refs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: extract_script_refs (extract-script-refs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-continue-pivot-cut-framework

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Continue/Pivot/Cut Framework` |
| **card** | — | — | [continue-pivot-cut-framework](../concepts/rjm/continue-pivot-cut-framework.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Strategic verdict artifact containing Situation, Verdict (CONTINUE / PIVOT / CUT), Reasoning, Immediate Action, and Warning Signs. |
| **consumes** | — | — | In-progress projects, experimental features, underperforming architecture tracks. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Continue/Pivot/Cut Framework (continue-pivot-cut-framework). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-failure-prevention-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Failure Prevention Matrix` |
| **card** | — | — | [failure-prevention-matrix](../concepts/rjm/failure-prevention-matrix.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Longitudinal tabular tracking of failure categories, occurrences, prevention rules, and recurrence rates. |
| **consumes** | — | — | Cumulative incident reports, root causes, detection mechanisms, and mitigation success records. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Failure Prevention Matrix (failure-prevention-matrix). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-multi-tool-artifact-build-system

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Multi-tool Artifact Build System` |
| **card** | — | — | [multi-tool-artifact-build-system](../concepts/rjm/multi-tool-artifact-build-system.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Build` |
| **produces** | — | — | Native GitHub Copilot CLI artifacts (`src/copilot-cli/`) including agents, skills, commands, rules, and hook configurations. |
| **consumes** | — | — | Canonical Claude Code artifacts (`.claude/`), platform configuration mappings (`templates/platforms/copilot-cli.yaml`). |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Multi-tool Artifact Build System (multi-tool-artifact-build-system). Defined in rjm:Build. 
- **sequencing note:** RJM-specific phase: rjm:Build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-stepresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `StepResult` |
| **card** | — | — | [stepresult](../concepts/rjm/stepresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Structured step outcome record for downstream input chaining and pipeline reporting. |
| **consumes** | — | — | Executed workflow step output or caught execution exception. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: StepResult (stepresult). Defined in rjm:orchestrator. 
- **sequencing note:** RJM-specific phase: rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### artifact-rjm-generated-trees

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `generated trees` |
| **card** | — | — | [generated-trees](../concepts/rjm/generated-trees.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Derived directory structures including src/vs-code-agents/ and src/copilot-cli/. |
| **consumes** | — | — | Canonical source files and templates. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: generated trees (generated-trees). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-always-on-corpus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `always-on corpus` |
| **card** | — | — | [always-on-corpus](../concepts/rjm/always-on-corpus.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Baseline system prompt context payload (~70KB across 7 rules) loaded on every agent interaction. |
| **consumes** | — | — | Always-on rule files in `.claude/rules/` or `.github/instructions/`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: always-on corpus (always-on-corpus). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-weekly-rollup

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Weekly rollup` |
| **card** | — | — | [weekly-rollup](../concepts/rjm/weekly-rollup.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Markdown summary report table with counts, thresholds, and status per kill criterion. |
| **consumes** | — | — | `.agents/metrics/drift-events.jsonl` telemetry events file. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Weekly rollup (weekly-rollup). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-endingcommit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `endingCommit` |
| **card** | — | — | [endingcommit](../concepts/rjm/endingcommit.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Reachable commit SHA recorded in `.agents/sessions/*.json` metadata linking the session log to the git commit graph. |
| **consumes** | — | — | Committed git change set, git `HEAD` commit SHA. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: endingCommit (endingcommit). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-value-curve

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `value curve` |
| **card** | — | — | [value-curve](../concepts/rjm/value-curve.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A visual strategic profile demonstrating divergence, focus, and strategic differentiation. |
| **consumes** | — | — | Factor scores resulting from the Four Actions framework. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: value curve (value-curve). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-overall-observability-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall Observability Score` |
| **card** | — | — | [overall-observability-score](../concepts/rjm/overall-observability-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A standardized numerical score out of 5 indicating overall telemetry completeness and production readiness. |
| **consumes** | — | — | Coverage ratings and finding severities across logs, metrics, traces, and agent/hook event streams. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overall Observability Score (overall-observability-score). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-episode-store

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `episode-store` |
| **card** | — | — | [episode-store](../concepts/rjm/episode-store.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Persistent, curated episodic memory repository accessible to retrospective and agent memory retrieval tools. |
| **consumes** | — | — | Extracted session episodes, valid event identifiers, committed file metrics. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: episode-store (episode-store). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ci-validation-report-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI Validation Report Template` |
| **card** | — | — | [ci-validation-report-template](../concepts/rjm/ci-validation-report-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | .agents/devops/ci-validation-[date].md reporting local validation status and readiness. |
| **consumes** | — | — | Test results, build logs, secret scan outputs, and environmental check outcomes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: CI Validation Report Template (ci-validation-report-template). Defined in rjm:verify. 
- **sequencing note:** RJM-specific phase: rjm:verify.
- **needs decision:** yes
- **decision:** D-206

### artifact-rjm-parity-manifests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `parity manifests` |
| **card** | — | — | [parity-manifests](../concepts/rjm/parity-manifests.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Coordinated manifest files maintaining byte/version parity across host platforms. |
| **consumes** | — | — | Dual-platform distribution requirements. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: parity manifests (parity-manifests). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-risk-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk Matrix` |
| **card** | — | — | [risk-matrix](../concepts/rjm/risk-matrix.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Discrete risk classifications (Critical: 9, High: 6, Medium: 3-4, Low: 1-2) with associated engineering remediation response requirements. |
| **consumes** | — | — | Likelihood scores (1-3) and Impact scores (1-3) from threat ratings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Risk Matrix (risk-matrix). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-trust-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Trust Boundaries` |
| **card** | — | — | [trust-boundaries](../concepts/rjm/trust-boundaries.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Perimeter delineations where data flows cross between distinct trust levels, prompting STRIDE evaluation. |
| **consumes** | — | — | Network segmentation rules, execution privilege tiers, authentication perimeters, and access control policies. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Trust Boundaries (trust-boundaries). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pass-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pass Handoff` |
| **card** | — | — | [pass-handoff](../concepts/rjm/pass-handoff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Structured handoff communication instructing orchestrator to proceed with PR creation or deployment. |
| **consumes** | — | — | Pre-PR Validation Report with APPROVED verdict and high confidence score. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pass Handoff (pass-handoff). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `sel` |
| **card** | — | — | [sel](../concepts/rjm/sel.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Accept or reject gating decisions based on held-out benchmark performance. |
| **consumes** | — | — | Partitioned task-id set, consultation budget, and candidate evaluation results. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: sel (sel). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-context

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent context` |
| **card** | — | — | [agent-context](../concepts/rjm/agent-context.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Informed model reasoning and autonomous decision-making capacity. |
| **consumes** | — | — | System prompts, conversation history, tool outputs, and diagnostic remediation messages. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: agent context (agent-context). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-yaml-front-matter-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YAML Front Matter Schema` |
| **card** | — | — | [yaml-front-matter-schema](../concepts/rjm/yaml-front-matter-schema.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Spec` |
| **produces** | — | — | A standardized machine-readable frontmatter header on requirement specification documents. |
| **consumes** | — | — | Requirement metadata including requirement id, title, status, priority, category, and related artifact links. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: YAML Front Matter Schema (yaml-front-matter-schema). Defined in rjm:Spec. 
- **sequencing note:** RJM-specific phase: rjm:Spec.
- **needs decision:** yes
- **decision:** D-207

### artifact-rjm-dependency-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependency Graph` |
| **card** | — | — | [dependency-graph](../concepts/rjm/dependency-graph.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Visual ASCII directed acyclic graph illustrating milestone dependencies, parallelization opportunities, and critical paths. |
| **consumes** | — | — | Milestone prerequisite definitions and execution sequence constraints. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Dependency Graph (dependency-graph). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-discordant-loss

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `discordant_loss` |
| **card** | — | — | [discordant-loss](../concepts/rjm/discordant-loss.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Non-negative integer count of held-out tasks that moved pass-to-fail. |
| **consumes** | — | — | Paired evaluation results between candidate and incumbent on held-out tasks. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: discordant_loss (discordant-loss). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ac-traceability-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AC Traceability Matrix` |
| **card** | — | — | [ac-traceability-matrix](../concepts/rjm/ac-traceability-matrix.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | sub-task-mappings |
| **consumes** | — | — | requirements-acceptance-criteria |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: AC Traceability Matrix (ac-traceability-matrix). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-git-hook-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git hook configuration` |
| **card** | — | — | [git-hook-configuration](../concepts/rjm/git-hook-configuration.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validated Git hook jobs and execution policies. |
| **consumes** | — | — | lefthook.yml configuration files and hook definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Git hook configuration (git-hook-configuration). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-contradiction-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Contradiction Log` |
| **card** | — | — | [contradiction-log](../concepts/rjm/contradiction-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | A structured decision memory entry (`decision-<short-slug>`) containing question, conventional answer, first-principles position, evidence, and decision. |
| **consumes** | — | — | Identified contradictions between a first-principles finding and an established ADR, memory, or canonical repository convention. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Contradiction Log (contradiction-log). Defined in rjm:research. 
- **sequencing note:** RJM-specific phase: rjm:research.
- **needs decision:** no
- **decision:** —

### artifact-rjm-diagnosis-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Diagnosis Template` |
| **card** | — | — | [diagnosis-template](../concepts/rjm/diagnosis-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized `## Diagnostic Analysis` documentation section in retrospective session reports. |
| **consumes** | — | — | Session execution outcomes, event logs, error messages, and root cause findings. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Diagnosis Template (diagnosis-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-208

### artifact-rjm-overall-agent-safety-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall Agent Safety Score` |
| **card** | — | — | [overall-agent-safety-score](../concepts/rjm/overall-agent-safety-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Summary numeric rating out of 5 indicating overall safety posture. |
| **consumes** | — | — | Ratings across the five individual dimensions of the Agent Safety Assessment table. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overall Agent Safety Score (overall-agent-safety-score). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-keep-as-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `keep-as-audit` |
| **card** | — | — | [keep-as-audit](../concepts/rjm/keep-as-audit.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Offline audit status assignment, scheduled re-run milestones, and preserved evaluation runners. |
| **consumes** | — | — | Evaluation run statistics showing inconclusive positive delta (confidence interval spans zero) or minor flakiness. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: keep-as-audit (keep-as-audit). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-derivative-prs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `derivative PRs` |
| **card** | — | — | [derivative-prs](../concepts/rjm/derivative-prs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Stacked pull request relationships with parent PRs for coordinated maintenance and review. |
| **consumes** | — | — | Feature branches and parent pull requests targeting repository branches. |
| **impl status** | — | — | defects: internal-contradiction, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: derivative PRs (derivative-prs). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-critique-document-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critique Document Structure` |
| **card** | — | — | [critique-document-structure](../concepts/rjm/critique-document-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Standardized critique markdown documents saved to `.agents/critique/[NNN]-[plan-name]-critique-[YYYY-MM-DD].md`. |
| **consumes** | — | — | Plan files, design specifications, and architecture proposals evaluated across the six critic review axes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Critique Document Structure (critique-document-structure). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-residual-p2-issues

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Residual P2 Issues` |
| **card** | — | — | [residual-p2-issues](../concepts/rjm/residual-p2-issues.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Documented entries in the debate log under "Residual P2 Issues" and linked GitHub backlog issues. |
| **consumes** | — | — | Unresolved P2 (nice-to-have) issues from independent reviewer feedback. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Residual P2 Issues (residual-p2-issues). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-state-management-script-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `State Management Script Template` |
| **card** | — | — | [state-management-script-template](../concepts/rjm/state-management-script-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 3: Generation` |
| **produces** | — | — | Multi-command state tracking script with `init`, `add-item`, `update`, and `status` subcommands. |
| **consumes** | — | — | Project names, item descriptions, status updates, and state persistence configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: State Management Script Template (state-management-script-template). Defined in rjm:Phase 3: Generation. 
- **sequencing note:** RJM-specific phase: rjm:Phase 3: Generation.
- **needs decision:** yes
- **decision:** D-209

### artifact-rjm-git-advanced-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `git-advanced-workflows` |
| **card** | — | — | [git-advanced-workflows](../concepts/rjm/git-advanced-workflows.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: git-advanced-workflows (git-advanced-workflows). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-neutral

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Neutral` |
| **card** | — | — | [neutral](../concepts/rjm/neutral.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An enumerated list of secondary impacts that are neither clearly advantageous nor disadvantageous. |
| **consumes** | — | — | Procedural shifts, operational changes, and neutral behavioral observations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Neutral (neutral). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dependency-risk-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependency Risk Matrix` |
| **card** | — | — | [dependency-risk-matrix](../concepts/rjm/dependency-risk-matrix.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tabular risk matrix quantifying dependency counts across Critical (exploit present), High (CVE present), Medium (>1 year outdated), and Low (maintenance mode) risk tiers. |
| **consumes** | — | — | Dependency scan results, known CVE lists, package maintenance age. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Dependency Risk Matrix (dependency-risk-matrix). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-corpus-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Corpus catalog` |
| **card** | — | — | [corpus-catalog](../concepts/rjm/corpus-catalog.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An authoritative, machine-readable inventory of context artifacts. |
| **consumes** | — | — | Context artifacts, memory files, skill files, and architectural documentation. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: Corpus catalog (corpus-catalog). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-quality-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Quality Assessment` |
| **card** | — | — | [design-quality-assessment](../concepts/rjm/design-quality-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured markdown table rating pattern adherence, boundary respect, coupling, cohesion, and extensibility on a 1-5 scale with explanatory notes. |
| **consumes** | — | — | Architectural analysis of the pull request diff across structural design dimensions. |
| **impl status** | — | — | defects: doc-drift, missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Quality Assessment (design-quality-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-y-statement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Y-Statement` |
| **card** | — | — | [y-statement](../concepts/rjm/y-statement.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A structured single-sentence decision record capturing essential trade-offs without procedural overhead. |
| **consumes** | — | — | Use case, facing concern, chosen option, desired quality, and accepted downside. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Y-Statement (y-statement). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-impact-analysis-deliverable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Impact Analysis Deliverable` |
| **card** | — | — | [impact-analysis-deliverable](../concepts/rjm/impact-analysis-deliverable.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | A markdown deliverable in `.agents/planning/impact-analysis-[role]-[feature].md` detailing direct/indirect impacts, affected areas, and recommendations. |
| **consumes** | — | — | Proposed feature design and milestone requirements. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Impact Analysis Deliverable (impact-analysis-deliverable). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dev-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `dev-lifecycle` |
| **card** | — | — | [dev-lifecycle](../concepts/rjm/dev-lifecycle.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A standalone, installable plugin providing end-to-end developer lifecycle capabilities. |
| **consumes** | — | — | Lifecycle workflow commands, quality skills, and verification hooks. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: dev-lifecycle (dev-lifecycle). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Decisions` |
| **card** | — | — | [design-decisions](../concepts/rjm/design-decisions.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An index of formalized Architecture Decision Records (ADRs) capturing rationale and consequences. |
| **consumes** | — | — | Architectural trade-offs, evaluated alternatives, and component boundary modifications. |
| **impl status** | — | — | clean (ARCHITECTURE.template.md), defects: doc-drift (docs/architecture.md) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Decisions (design-decisions). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-refactor-list

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `refactor list` |
| **card** | — | — | [refactor-list](../concepts/rjm/refactor-list.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Numbered list of discrete refactoring recommendations specifying target location, rationale, and code snippets. |
| **consumes** | — | — | Recently modified code containing multiple separable simplification opportunities. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: refactor list (refactor-list). Defined in rjm:build. 
- **sequencing note:** RJM-specific phase: rjm:build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-test-coverage-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Coverage Assessment` |
| **card** | — | — | [test-coverage-assessment](../concepts/rjm/test-coverage-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured Markdown summary table detailing test coverage status (Adequate/Missing/Partial) and citations across unit tests, edge cases, error paths, and assertions. |
| **consumes** | — | — | Static code inspection findings, pre-executed test execution results, and test file evidence. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Test Coverage Assessment (test-coverage-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-learning-extraction-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Learning Extraction Template` |
| **card** | — | — | [learning-extraction-template](../concepts/rjm/learning-extraction-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Canonical retrospective artifact saved to `.agents/retrospective/YYYY-MM-DD-[scope].md`. |
| **consumes** | — | — | All structured findings produced across Phase 0 through Phase 5. |
| **impl status** | — | — | defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/learning-template.md |

- **class:** UNIQUE
- **difference:** Unique to RJM: Learning Extraction Template (learning-extraction-template). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** yes
- **decision:** D-210

### artifact-rjm-business-case

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Business Case` |
| **card** | — | — | [business-case](../concepts/rjm/business-case.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Comprehensive architectural business case document incorporating SWOT analysis, cost-benefit trade-offs, and return on investment (ROI) calculations. |
| **consumes** | — | — | Problem statement, organizational investment requirements, cost projections, and strategic business objectives. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Business Case (business-case). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architectural-decision-records

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architectural Decision Records` |
| **card** | — | — | [architectural-decision-records](../concepts/rjm/architectural-decision-records.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Version-controlled, immutable architecture decision documents stored in `.agents/architecture/`. |
| **consumes** | — | — | Architecturally significant requirements, technical alternatives, quality-attribute trade-offs, and precedent searches. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Architectural Decision Records (architectural-decision-records). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-collection-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Collection Files` |
| **card** | — | — | [collection-files](../concepts/rjm/collection-files.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Distinct registry entries categorizing collection files separately from atomic skill files. |
| **consumes** | — | — | Pre-existing multi-skill markdown files grouping related patterns by domain. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Collection Files (collection-files). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-vendor-scorecard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vendor Scorecard` |
| **card** | — | — | [vendor-scorecard](../concepts/rjm/vendor-scorecard.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | A 0-100 composite vendor health score, risk flag enumeration, and pass/yellow-flag/red-flag exit classifications. |
| **consumes** | — | — | Vendor profile metrics, financial health indicators, product maturity data, and pricing structures. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Vendor Scorecard (vendor-scorecard). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-related

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Related` |
| **card** | — | — | [related](../concepts/rjm/related.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Hyperlinked cross-references connecting the plan to broader repository tracking systems. |
| **consumes** | — | — | Issue identifiers, pull request URLs, and ADR citations relevant to the plan's scope. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Related (related). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-yaml-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YAML frontmatter` |
| **card** | — | — | [yaml-frontmatter](../concepts/rjm/yaml-frontmatter.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Parsable YAML header block configuring skill activation triggers and execution constraints. |
| **consumes** | — | — | Skill attributes including name, description, allowed-tools, and model selection. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: YAML frontmatter (yaml-frontmatter). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dissent-record

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dissent Record` |
| **card** | — | — | [dissent-record](../concepts/rjm/dissent-record.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Permanent written record of unallayed architectural objections and counterpoints. |
| **consumes** | — | — | Reviewing agent dissenting opinions, BLOCK votes, disagree-and-commit statements. |
| **impl status** | — | — | defects: cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Dissent Record (dissent-record). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-validation-scripts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation scripts` |
| **card** | — | — | [validation-scripts](../concepts/rjm/validation-scripts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic exit codes (0 for success, non-zero for failure) and actionable validation failure reports. |
| **consumes** | — | — | Session logs, git commit history, pull request descriptions, and workflow YAML files. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction (scripts/README.md retains legacy PowerShell syntax and references non-existent test files) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Validation scripts (validation-scripts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-judge-failure-count

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `judge-failure count` |
| **card** | — | — | [judge-failure-count](../concepts/rjm/judge-failure-count.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Measurable failure tallies reflecting harness rejection rates. |
| **consumes** | — | — | Parse refusal events and validation failure markers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: judge-failure count (judge-failure-count). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sha-bound-pass-marker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SHA-bound PASS marker` |
| **card** | — | — | [sha-bound-pass-marker](../concepts/rjm/sha-bound-pass-marker.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | The .claude/review-pass.json marker file binding the verified commit SHA and review metadata. |
| **consumes** | — | — | A PASS final review verdict or an acknowledged WARN verdict evaluated against the current Git HEAD commit. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: SHA-bound PASS marker (sha-bound-pass-marker). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-calibration-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `calibration table` |
| **card** | — | — | [calibration-table](../concepts/rjm/calibration-table.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Tabular evidence artifact included in the pull request description demonstrating detector efficacy. |
| **consumes** | — | — | Candidate threshold values, historical pull request replay measurements, and expected firing rates. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: calibration table (calibration-table). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-visual-card-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `visual card template` |
| **card** | — | — | [visual-card-template](../concepts/rjm/visual-card-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized visual card presentation documenting SCOPE, PROBLEM, TECHNIQUE, and BEFORE/AFTER content. |
| **consumes** | — | — | Diagnosed prompt defect, proposed replacement technique, and scoped prompt segment. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: visual card template (visual-card-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-211

### artifact-rjm-pipeline-impact-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline Impact Assessment` |
| **card** | — | — | [pipeline-impact-assessment](../concepts/rjm/pipeline-impact-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured Markdown summary table rating the operational and cost impacts of changes on Build, Test, Deploy, and Cost with accompanying notes. |
| **consumes** | — | — | DevOps review findings, pull request diffs, and pipeline configuration changes. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pipeline Impact Assessment (pipeline-impact-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-nygard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Nygard` |
| **card** | — | — | [nygard](../concepts/rjm/nygard.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Architect` |
| **produces** | — | — | A minimalist architectural decision record markdown document. |
| **consumes** | — | — | Decision context, options, and expected outcomes. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Nygard (nygard). Defined in rjm:Architect. 
- **sequencing note:** RJM-specific phase: rjm:Architect.
- **needs decision:** no
- **decision:** —

### artifact-rjm-data-flows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Flows` |
| **card** | — | — | [data-flows](../concepts/rjm/data-flows.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Documented data flow paths across components, evaluated for in-transit Tampering, Information Disclosure, and Denial of Service. |
| **consumes** | — | — | Network protocols, API communication channels, IPC mechanisms, and serialization formats. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Data Flows (data-flows). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-parallelresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ParallelResult` |
| **card** | — | — | [parallelresult](../concepts/rjm/parallelresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Aggregated result structure mapping step names to outputs and tracking failures. |
| **consumes** | — | — | Outcomes from concurrently executed workflow steps in `ParallelStepExecutor`. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: ParallelResult (parallelresult). Defined in rjm:orchestrator. 
- **sequencing note:** RJM-specific phase: rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sla-service-level-agreement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLA (Service Level Agreement)` |
| **card** | — | — | [sla-service-level-agreement](../concepts/rjm/sla-service-level-agreement.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formal agreement with defined financial, legal, or operational remedies (e.g. customer billing credits or penalties). |
| **consumes** | — | — | Internal Service Level Objectives and contractual commitments. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLA (Service Level Agreement) (sla-service-level-agreement). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-epics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `epics` |
| **card** | — | — | [epics](../concepts/rjm/epics.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:roadmap` |
| **produces** | — | — | Large, outcome-oriented work specifications decomposed into prioritized milestones and tasks. |
| **consumes** | — | — | High-level product vision, strategic goals, user research, and technical feasibility reports. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: epics (epics). Defined in rjm:roadmap. 
- **sequencing note:** RJM-specific phase: rjm:roadmap.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pre-pr-validation-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR Validation Report` |
| **card** | — | — | [pre-pr-validation-report](../concepts/rjm/pre-pr-validation-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Markdown report detailing summary, test results, coverage metrics, fail-safe checks, and final verdict. |
| **consumes** | — | — | Results from all five pre-PR quality gate steps (CI tests, fail-safe patterns, alignment, coverage, PR description). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pre-PR Validation Report (pre-pr-validation-report). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-extracted-learnings

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Extracted Learnings` |
| **card** | — | — | [extracted-learnings](../concepts/rjm/extracted-learnings.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Structured learning items with atomic statements, atomicity scores, evidence citations, and skill operation targets. |
| **consumes** | — | — | Validated action decisions from Phase 3 and empirical evidence from Phase 0. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Extracted Learnings (extracted-learnings). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-generated-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generated Files` |
| **card** | — | — | [generated-files](../concepts/rjm/generated-files.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Platform-ready agent markdown files marked do-not-edit. |
| **consumes** | — | — | Shared templates (`templates/agents/*.shared.md`) and platform configuration YAML files. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Generated Files (generated-files). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-protocol-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SESSION-PROTOCOL template` |
| **card** | — | — | [session-protocol-template](../concepts/rjm/session-protocol-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Consumer repository `.agents/SESSION-PROTOCOL.md` configuration. |
| **consumes** | — | — | Standard session lifecycle conventions and protocol requirements. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: SESSION-PROTOCOL template (session-protocol-template). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** yes
- **decision:** D-212

### artifact-rjm-runrecord

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RunRecord` |
| **card** | — | — | [runrecord](../concepts/rjm/runrecord.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | An immutable entry appended to `runs.jsonl` under the execution run directory. |
| **consumes** | — | — | Evaluated fixture data, prompt content hashes, model execution results, and assertion scores. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: RunRecord (runrecord). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-component-diagram

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Component Diagram` |
| **card** | — | — | [component-diagram](../concepts/rjm/component-diagram.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Visual component diagram rendered in Mermaid or PlantUML. |
| **consumes** | — | — | Service definitions, architectural specifications, interface boundaries, and component lists. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Component Diagram (component-diagram). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-lifecycle-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lifecycle frontmatter` |
| **card** | — | — | [lifecycle-frontmatter](../concepts/rjm/lifecycle-frontmatter.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured YAML frontmatter block at the top of an ADR file. |
| **consumes** | — | — | ADR metadata (id, date, decision-makers, supersession links). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Lifecycle frontmatter (lifecycle-frontmatter). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-safety-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Safety Assessment` |
| **card** | — | — | [agent-safety-assessment](../concepts/rjm/agent-safety-assessment.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Markdown table rating five safety dimensions from 1 to 5 with explanatory notes. |
| **consumes** | — | — | Evaluation findings across tool scope, command safety, guardrail integrity, prompt integrity, and threat surface. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Safety Assessment (agent-safety-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-effective-context

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `effective context` |
| **card** | — | — | [effective-context](../concepts/rjm/effective-context.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Total active instruction prompt payload delivered to the model during a specific edit session. |
| **consumes** | — | — | Always-on rule corpus plus path-scoped rule files triggered by specific file extensions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: effective context (effective-context). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-latency-p50

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Latency p50` |
| **card** | — | — | [latency-p50](../concepts/rjm/latency-p50.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Median response time measurement representing the typical experience of the 50th percentile of requests. |
| **consumes** | — | — | Request duration histograms or distribution metrics. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Latency p50 (latency-p50). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-threat-model-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Threat Model Format` |
| **card** | — | — | [threat-model-format](../concepts/rjm/threat-model-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | A structured threat model document saved to `.agents/security/TM-NNN-[feature].md`. |
| **consumes** | — | — | Architectural designs, asset definitions, threat actor profiles, and feature specifications. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Threat Model Format (threat-model-format). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-overall-maintainability-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall Maintainability Score` |
| **card** | — | — | [overall-maintainability-score](../concepts/rjm/overall-maintainability-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A composite numeric score out of 5 representing overall code maintainability. |
| **consumes** | — | — | Individual ratings from the Maintainability Assessment table. |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: Overall Maintainability Score (overall-maintainability-score). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scoreevidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ScoreEvidence` |
| **card** | — | — | [scoreevidence](../concepts/rjm/scoreevidence.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | An immutable record binding a numeric performance metric to its source extraction envelope and corpus hash. |
| **consumes** | — | — | Evaluation execution results and extractor provenance metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: ScoreEvidence (scoreevidence). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-alexandrian

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Alexandrian` |
| **card** | — | — | [alexandrian](../concepts/rjm/alexandrian.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Pattern-formatted ADR document following Christopher Alexander's architectural pattern language. |
| **consumes** | — | — | Problem context, discussion of forces at play, solution description, and consequences. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Alexandrian (alexandrian). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-positive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Positive` |
| **card** | — | — | [positive](../concepts/rjm/positive.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An enumerated list of beneficial results expected from adopting the decision. |
| **consumes** | — | — | Architectural improvements, capabilities unlocked, and positive performance or quality outcomes. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Positive (positive). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-debate-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Debate Log` |
| **card** | — | — | [debate-log](../concepts/rjm/debate-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Audit log saved to `.agents/critique/ADR-NNN-debate-log.md` recording all debate rounds, issues addressed, and final consensus. |
| **consumes** | — | — | Multi-agent review reports, conflict rulings, and convergence check voting records. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Debate Log (debate-log). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-madr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MADR` |
| **card** | — | — | [madr](../concepts/rjm/madr.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Architect` |
| **produces** | — | — | Structured Markdown decision records documenting decision drivers, choices, and consequences. |
| **consumes** | — | — | Problem context, decision drivers, considered options, and comparative pros and cons. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: MADR (madr). Defined in rjm:Architect. 
- **sequencing note:** RJM-specific phase: rjm:Architect.
- **needs decision:** no
- **decision:** —

### artifact-rjm-contributor-docs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Contributor docs` |
| **card** | — | — | [contributor-docs](../concepts/rjm/contributor-docs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Contributor-facing documentation files (`CLAUDE.md`, `CONTRIBUTING.md`, `AGENTS.md`) governing codebase development. |
| **consumes** | — | — | Repository architecture, contributor conventions, testing practices, and build scripts. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Contributor docs (contributor-docs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-agent-system-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Agent System Prompt` |
| **card** | — | — | [design-agent-system-prompt](../concepts/rjm/design-agent-system-prompt.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Configured evaluator agent focused on technical correctness, pattern appropriateness, phase ordering, and example validity. |
| **consumes** | — | — | Agent invocation parameters and role definitions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Agent System Prompt (design-agent-system-prompt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sli

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLI` |
| **card** | — | — | [sli](../concepts/rjm/sli.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Quantitative measurement queries (e.g. PromQL availability ratios or latency percentiles). |
| **consumes** | — | — | Service metrics, request logs, Prometheus event streams, and user journey definitions. |
| **impl status** | — | — | defects: internal-contradiction, exit-code-mismatch, missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLI (sli). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agentic-capabilities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agentic_capabilities` |
| **card** | — | — | [agentic-capabilities](../concepts/rjm/agentic-capabilities.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured XML specification section declaring whether and how autonomous execution, self-verification, error recovery, and state persistence are supported. |
| **consumes** | — | — | Script architecture specifications, automation plans, and CLI interface requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: agentic_capabilities (agentic-capabilities). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ci-helpers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI helpers` |
| **card** | — | — | [ci-helpers](../concepts/rjm/ci-helpers.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formatted GitHub Actions output parameters written to `$GITHUB_OUTPUT` or `$GITHUB_ENV`. |
| **consumes** | — | — | Workflow event payloads, step outputs, and environment variables. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: CI helpers (ci-helpers). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-output-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Output Structure` |
| **card** | — | — | [output-structure](../concepts/rjm/output-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized, structured textual responses and investigation documents conforming to agent communication contracts. |
| **consumes** | — | — | Agent analysis, tool execution logs, investigation findings, hypotheses, and recommendations. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Output Structure (output-structure). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-serena-memories

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena memories` |
| **card** | — | — | [serena-memories](../concepts/rjm/serena-memories.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Contextual knowledge items and memory files assisting agent recall during sessions. |
| **consumes** | — | — | Repository source files, conventions, and agent workflow patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Serena memories (serena-memories). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-info

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Info` |
| **card** | — | — | [session-info](../concepts/rjm/session-info.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Structured header section linking the retrospective artifact to its origin session. |
| **consumes** | — | — | Session execution context, agent metadata, task type classification, and session outcome. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Session Info (session-info). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** no
- **decision:** —

### artifact-rjm-core-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `core-agents` |
| **card** | — | — | [core-agents](../concepts/rjm/core-agents.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | A standalone Claude Code plugin providing specialized agent personas and generation tooling. |
| **consumes** | — | — | Agent markdown definitions, shared templates, and generator scripts. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: core-agents (core-agents). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-milestone-dependencies

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Milestone Dependencies` |
| **card** | — | — | [milestone-dependencies](../concepts/rjm/milestone-dependencies.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | ASCII dependency graph and tabular dependency mappings defining blocking relationships across milestones. |
| **consumes** | — | — | Milestones, architectural layering constraints, and prerequisite artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Milestone Dependencies (milestone-dependencies). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-outcome

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Outcome` |
| **card** | — | — | [decision-outcome](../concepts/rjm/decision-outcome.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Explicit declaration of chosen technical path, justification, positive/negative consequences, and follow-up requirements. |
| **consumes** | — | — | Evaluated candidate options, decision drivers, stakeholder trade-off priorities. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Outcome (decision-outcome). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-suggested-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Suggested Actions` |
| **card** | — | — | [suggested-actions](../concepts/rjm/suggested-actions.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Concrete next steps including assigned maintainers, triage labels, milestone targets, and sequential actions. |
| **consumes** | — | — | Feature review evaluation outcomes and recommended triage dispositions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Suggested Actions (suggested-actions). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pester-test-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pester test files` |
| **card** | — | — | [pester-test-files](../concepts/rjm/pester-test-files.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Test execution assertions, pass/fail test results, and mock verifications. |
| **consumes** | — | — | PowerShell scripts, functions, and modules under test. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pester test files (pester-test-files). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-fixture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Fixture` |
| **card** | — | — | [fixture](../concepts/rjm/fixture.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | Standardized evaluation input consumed by benchmark runners (`eval-agent-vs-baseline.py`, `eval-oneshot-vs-shipped.py`, `eval-runtime-parity.py`). |
| **consumes** | — | — | Fixture identifier, test prompt string, input context, provenance category, tags, and scoring assertion specifications. |
| **impl status** | — | — | defects: exit-code-mismatch, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: Fixture (fixture). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skillbook-updates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skillbook Updates` |
| **card** | — | — | [skillbook-updates](../concepts/rjm/skillbook-updates.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formatted JSON operational blocks (ADD, UPDATE, TAG, REMOVE) targeting specific skill IDs. |
| **consumes** | — | — | Scored learnings and validated action items. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skillbook Updates (skillbook-updates). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-guardrails-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Guardrails Template` |
| **card** | — | — | [agent-guardrails-template](../concepts/rjm/agent-guardrails-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Explicit operational constraints, confirmation tiers, audit requirements, and escalation paths. |
| **consumes** | — | — | Agent system prompts, tool schemas, and lifecycle hook configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Guardrails Template (agent-guardrails-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-213

### artifact-rjm-rewrite-diff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `rewrite diff` |
| **card** | — | — | [rewrite-diff](../concepts/rjm/rewrite-diff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Code diff specifying before/after blocks with one-sentence rationale. |
| **consumes** | — | — | Recently modified code, functions, or files targeted for simplification. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: rewrite diff (rewrite-diff). Defined in rjm:build. 
- **sequencing note:** RJM-specific phase: rjm:build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-trust-boundary-map

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Trust Boundary Map` |
| **card** | — | — | [trust-boundary-map](../concepts/rjm/trust-boundary-map.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Mermaid flowchart illustrating Untrusted, DMZ/Semi-Trusted, Trusted, and Highly Trusted zones with designated trust boundaries (TB1, TB2, TB3). |
| **consumes** | — | — | Network architecture, component topology, external API boundaries, data storage tiers. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Trust Boundary Map (trust-boundary-map). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skill-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `.skill file` |
| **card** | — | — | [skill-file](../concepts/rjm/skill-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Phase 4: Packaging` |
| **produces** | — | — | A distributable `.skill` zip archive file. |
| **consumes** | — | — | Validated skill directory containing SKILL.md, references, scripts, and assets. |
| **impl status** | — | — | defects: script-bug, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM: .skill file (skill-file). Defined in rjm:Phase 4: Packaging. 
- **sequencing note:** RJM-specific phase: rjm:Phase 4: Packaging.
- **needs decision:** no
- **decision:** —

### artifact-rjm-ci-cd-scope-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI/CD Scope Notes` |
| **card** | — | — | [ci-cd-scope-notes](../concepts/rjm/ci-cd-scope-notes.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured table documenting unowned pipeline risks with columns for Area, Evidence (`file:line`), and Risk. |
| **consumes** | — | — | Identified pipeline-specific risks, file and line citations, and risk impact descriptions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: CI/CD Scope Notes (ci-cd-scope-notes). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-audit-trail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `audit trail` |
| **card** | — | — | [audit-trail](../concepts/rjm/audit-trail.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Immutable forensic log records enabling post-incident analysis and compliance verification. |
| **consumes** | — | — | Agent execution events, prompts, tool inputs, outputs, and reasoning traces. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: audit trail (audit-trail). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-adr-governance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR / governance` |
| **card** | — | — | [adr-governance](../concepts/rjm/adr-governance.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Multi-agent review verdicts, Zimmermann critique answers, and formalized governance decisions. |
| **consumes** | — | — | Architectural Decision Records and governance markdown files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: ADR / governance (adr-governance). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-success-criterion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `success_criterion` |
| **card** | — | — | [success-criterion](../concepts/rjm/success-criterion.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Deterministic verification verdict (pass/fail) or auditable human-judgment rationale. |
| **consumes** | — | — | Sub-agent definition and execution artifacts. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: success_criterion (success-criterion). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-data-flow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Flow` |
| **card** | — | — | [data-flow](../concepts/rjm/data-flow.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Numbered chronological sequence describing end-to-end request processing. |
| **consumes** | — | — | Client request interactions, inter-component protocols, and persistent storage mutations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Data Flow (data-flow). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-updated-adr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Updated ADR` |
| **card** | — | — | [updated-adr](../concepts/rjm/updated-adr.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Final revised ADR file saved to `.agents/architecture/` with updated status upon consensus. |
| **consumes** | — | — | Original proposed ADR and synthesized resolutions from multi-agent review rounds. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Updated ADR (updated-adr). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-structured-findings

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `structured findings` |
| **card** | — | — | [structured-findings](../concepts/rjm/structured-findings.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Formatted issue reports with mandatory `severity`, `category`, `location`, and `recommendation` fields. |
| **consumes** | — | — | Code review findings identified by specialized review subagents or AST analysis tools. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: structured findings (structured-findings). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-halt-message-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Halt Message Schema` |
| **card** | — | — | [halt-message-schema](../concepts/rjm/halt-message-schema.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | halt-message |
| **consumes** | — | — | halt-triggers |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Halt Message Schema (halt-message-schema). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** yes
- **decision:** D-214

### artifact-rjm-patch

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Patch` |
| **card** | — | — | [patch](../concepts/rjm/patch.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | A validated atomic patch specification ready for sequential application by `apply_patches`. |
| **consumes** | — | — | Edit proposals specifying operation type, target anchor line, and replacement or inserted text. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Patch (patch). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scenarios

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scenarios` |
| **card** | — | — | [scenarios](../concepts/rjm/scenarios.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | JSON-formatted scenario test fixtures containing scenario identifiers, input payloads, expected verdicts, and string assertion criteria. |
| **consumes** | — | — | Prompt specifications and test cases designed to exercise specific capabilities or edge cases. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Scenarios (scenarios). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-whole-product

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `whole product` |
| **card** | — | — | [whole-product](../concepts/rjm/whole-product.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A turnkey solution enabling pragmatist buyers to extract full value immediately out of the box. |
| **consumes** | — | — | Core technology product, third-party integrations, professional services, documentation, and support infrastructure. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: whole product (whole-product). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-output-helpers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `output helpers` |
| **card** | — | — | [output-helpers](../concepts/rjm/output-helpers.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formatted output envelope structures written to stdout. |
| **consumes** | — | — | Execution results, error details, and metadata from calling scripts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: output helpers (output-helpers). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-quick-reference-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick Reference Table` |
| **card** | — | — | [quick-reference-table](../concepts/rjm/quick-reference-table.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured 5-column markdown table enabling rapid scanning and lookup by executing agents. |
| **consumes** | — | — | Skill metadata including ID, Domain, Summary Statement, File Name, and Status. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Quick Reference Table (quick-reference-table). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-system-diagram

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `System Diagram` |
| **card** | — | — | [system-diagram](../concepts/rjm/system-diagram.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Compact, mobile-readable visual diagram of system topology (e.g. Mermaid flowchart). |
| **consumes** | — | — | Component relationship models, communication topologies, and boundary definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: System Diagram (system-diagram). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-progress-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `progress.md` |
| **card** | — | — | [progress-md](../concepts/rjm/progress-md.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Chronological session journal documenting execution history and verification state. |
| **consumes** | — | — | Completed step descriptions, command outputs, test suite outcomes, and timestamps. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: progress.md (progress-md). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-freshness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Freshness` |
| **card** | — | — | [freshness](../concepts/rjm/freshness.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Quantitative measure of data recency and pipeline processing lag. |
| **consumes** | — | — | Pipeline completion timestamps and current system time (`time() - pipeline_last_success_timestamp`). |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Freshness (freshness). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-review-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Review Template` |
| **card** | — | — | [design-review-template](../concepts/rjm/design-review-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured DESIGN-REVIEW documents with YAML frontmatter in `.agents/architecture/DESIGN-REVIEW-[topic].md`. |
| **consumes** | — | — | Architectural proposals, feature designs, or pull request diffs requiring design governance. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Design Review Template (design-review-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-215

### artifact-rjm-migration-plan-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Migration Plan Template` |
| **card** | — | — | [migration-plan-template](../concepts/rjm/migration-plan-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Executable migration plan documents guiding phased deprecation and capability transfer. |
| **consumes** | — | — | Approved agent consolidation decisions and capability comparison findings. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Migration Plan Template (migration-plan-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-216

### artifact-rjm-fuzz-baselines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fuzz baselines` |
| **card** | — | — | [fuzz-baselines](../concepts/rjm/fuzz-baselines.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Differential testing assertions and conformance metrics |
| **consumes** | — | — | Test inputs and reference parser outputs |
| **impl status** | — | — | defects: doc-drift, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: fuzz baselines (fuzz-baselines). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-serena-project-memory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena Project Memory` |
| **card** | — | — | [serena-project-memory](../concepts/rjm/serena-project-memory.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A durable Serena memory file at `{topic-slug}-integration`. |
| **consumes** | — | — | Core insights, key principles, practical guidance, and integration points from the research analysis. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique to RJM: Serena Project Memory (serena-project-memory). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-apicallresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `APICallResult` |
| **card** | — | — | [apicallresult](../concepts/rjm/apicallresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | An immutable record of model execution including outcome, raw response text, token usage, latency in milliseconds, and error category. |
| **consumes** | — | — | Model prompt string, model identifier, retry configuration, and HTTP API response. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: APICallResult (apicallresult). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architecture-overview

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecture Overview` |
| **card** | — | — | [architecture-overview](../concepts/rjm/architecture-overview.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Comprehensive architectural decomposition section forming the basis for STRIDE threat identification. |
| **consumes** | — | — | System architecture diagrams, service boundaries, component rosters, and data movement specifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Architecture Overview (architecture-overview). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-actionable-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `actionable metrics` |
| **card** | — | — | [actionable-metrics](../concepts/rjm/actionable-metrics.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Clear cause-and-effect performance measurements tying specific product iterations to observable customer behavioral shifts. |
| **consumes** | — | — | User behavioral interaction data grouped by discrete cohorts and time intervals. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: actionable metrics (actionable-metrics). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-more-information

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `More Information` |
| **card** | — | — | [more-information](../concepts/rjm/more-information.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Supplementary reference material attached to the architectural decision record. |
| **consumes** | — | — | Supporting empirical data, benchmarks, team discussion notes, or related decision links. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: More Information (more-information). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-generation-script-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generation Script Template` |
| **card** | — | — | [generation-script-template](../concepts/rjm/generation-script-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 3: Generation` |
| **produces** | — | — | Generated artifact files on disk, exiting with code 0 on success or 1 on failure. |
| **consumes** | — | — | Input specification file paths, destination output paths, and `string.Template` definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Generation Script Template (generation-script-template). Defined in rjm:Phase 3: Generation. 
- **sequencing note:** RJM-specific phase: rjm:Phase 3: Generation.
- **needs decision:** yes
- **decision:** D-217

### artifact-rjm-related-decisions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Related Decisions` |
| **card** | — | — | [related-decisions](../concepts/rjm/related-decisions.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An interconnected architectural decision graph linking dependent decisions across time. |
| **consumes** | — | — | Cross-references and identifiers of related architecture records. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Related Decisions (related-decisions). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-edgex

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `EdgeX` |
| **card** | — | — | [edgex](../concepts/rjm/edgex.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An edge-computing-specific architecture decision record. |
| **consumes** | — | — | IoT device constraints, hardware limitations, and distributed networking requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: EdgeX (edgex). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-shared-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shared Configuration` |
| **card** | — | — | [shared-configuration](../concepts/rjm/shared-configuration.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized configuration file at `.github/codeql/codeql-config.yml`. |
| **consumes** | — | — | Security query suite definitions and path inclusion/exclusion rules. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Shared Configuration (shared-configuration). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pr-type-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Type Classification` |
| **card** | — | — | [pr-type-classification](../concepts/rjm/pr-type-classification.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A standardized Markdown block declaring `PR TYPE: [category]` and `FILES: [list of changed files by category]`. |
| **consumes** | — | — | Pull request diffs and file categorization patterns (CODE, WORKFLOW, CONFIG, DOCS, MIXED). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: PR Type Classification (pr-type-classification). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-project-toolkit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `project-toolkit` |
| **card** | — | — | [project-toolkit](../concepts/rjm/project-toolkit.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A comprehensive meta-plugin providing all development tools in a single installation. |
| **consumes** | — | — | dev-lifecycle, agent-team, and supporting plugin modules. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: project-toolkit (project-toolkit). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-generated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `generated` |
| **card** | — | — | [generated](../concepts/rjm/generated.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | File classification routing files to generator drift checks rather than authored maintainability scoring. |
| **consumes** | — | — | File path segments (`**/generated/**`, `**/*.pb.py`) and source file header comment markers indicating automated generation. |
| **impl status** | — | — | defects: doc-drift, missing-path, always-failing-gate |

- **class:** UNIQUE
- **difference:** Unique to RJM: generated (generated). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-hook-scripts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hook scripts` |
| **card** | — | — | [hook-scripts](../concepts/rjm/hook-scripts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Automated pre-tool, post-tool, and prompt lifecycle validations, logging, and environment setup. |
| **consumes** | — | — | Harness events, tool call payloads, and trigger conditions. |
| **impl status** | — | — | defects: other, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Hook scripts (hook-scripts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-corpus-pinned

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `corpus_pinned` |
| **card** | — | — | [corpus-pinned](../concepts/rjm/corpus-pinned.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Boolean flag in gate decision payload. |
| **consumes** | — | — | Split configuration and results envelopes. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: corpus_pinned (corpus-pinned). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-data-flow-diagram

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Flow Diagram` |
| **card** | — | — | [data-flow-diagram](../concepts/rjm/data-flow-diagram.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | visualized-data-flows |
| **consumes** | — | — | feature-architecture, trust-boundaries |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Data Flow Diagram (data-flow-diagram). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-inline-body-shims

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `inline-body shims` |
| **card** | — | — | [inline-body-shims](../concepts/rjm/inline-body-shims.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: inline-body shims (inline-body-shims). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-gauge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gauge` |
| **card** | — | — | [gauge](../concepts/rjm/gauge.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Variable point-in-time numeric values that can fluctuate up or down. |
| **consumes** | — | — | Current system state readings (such as active memory, thread count, or queue length). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Gauge (gauge). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sel-consultations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `sel_consultations` |
| **card** | — | — | [sel-consultations](../concepts/rjm/sel-consultations.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Running total integer of consultations spent against the held-out selection group. |
| **consumes** | — | — | Held-out selection ledger lock and cumulative consultation count. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: sel_consultations (sel-consultations). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-recovered-prefixes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `recovered prefixes` |
| **card** | — | — | [recovered-prefixes](../concepts/rjm/recovered-prefixes.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Recovered evaluation samples providing partial or full score fields when salvaged. |
| **consumes** | — | — | Truncated judge output strings stored in eval run artifacts up to the 200-character truncation ceiling. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: recovered prefixes (recovered-prefixes). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-tombstone

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `tombstone` |
| **card** | — | — | [tombstone](../concepts/rjm/tombstone.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A tombstoned comment marker indicating that the branch lease is immediately free. |
| **consumes** | — | — | Existing lease comment ID or permission to post a new timeline comment upon task release. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: tombstone (tombstone). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-p1-deferral-issue-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `P1 Deferral Issue Template` |
| **card** | — | — | [p1-deferral-issue-template](../concepts/rjm/p1-deferral-issue-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Standardized GitHub issue with title format `[ADR-NNN] [P1 DEFERRED] [keyword-rich description]` and labels `priority:P1`, `backlog`, `adr-followup`. |
| **consumes** | — | — | Deferred P1 finding details, originating ADR path, debate log path, identifying agent persona, and deferral rationale. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: P1 Deferral Issue Template (p1-deferral-issue-template). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** yes
- **decision:** D-218

### artifact-rjm-traceability-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `traceability graph` |
| **card** | — | — | [traceability-graph](../concepts/rjm/traceability-graph.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A directed graph data structure capturing forward and backward traceability relationships among specifications. |
| **consumes** | — | — | Specification files in `.agents/specs/` (`requirements/`, `design/`, `tasks/`) with YAML frontmatter `related` lists. |
| **impl status** | — | — | defects: script-bug, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: traceability graph (traceability-graph). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-skills-index-registry

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skills Index Registry` |
| **card** | — | — | [skills-index-registry](../concepts/rjm/skills-index-registry.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A centralized index registry file (`.serena/memories/skills-index.md`) enabling O(1) skill lookups and lifecycle tracking. |
| **consumes** | — | — | Atomic and collection skill memory files stored under `.serena/memories/`. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Skills Index Registry (skills-index-registry). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-coverage-notes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coverage notes` |
| **card** | — | — | [coverage-notes](../concepts/rjm/coverage-notes.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Audit notes documenting query coverage, confidence ratings (high/low), and environmental degradation justifications. |
| **consumes** | — | — | Search variant history, query result counts, and skill/MCP availability status. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Coverage notes (coverage-notes). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-platform-overrides

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `platform-overrides` |
| **card** | — | — | [platform-overrides](../concepts/rjm/platform-overrides.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Override configurations applied during automated multi-platform agent generation from canonical Claude sources. |
| **consumes** | — | — | Platform-specific frontmatter definitions, tool mappings, and agent customization patches. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: platform-overrides (platform-overrides). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-evidence-for-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence for Verdict` |
| **card** | — | — | [evidence-for-verdict](../concepts/rjm/evidence-for-verdict.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Tabular defect report identifying test file, test name, anti-pattern, line reference, verdict (`[FAIL]`), reason, and required remediation. |
| **consumes** | — | — | Identified test suite anti-patterns, missing assertions, and structural-only validations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Evidence for Verdict (evidence-for-verdict). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-requirement-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Requirement Structure` |
| **card** | — | — | [requirement-structure](../concepts/rjm/requirement-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A standardized requirement specification document (`REQ-NNN-{slug}.md`) containing frontmatter, statement, context, ontology, acceptance criteria, rationale, and dependencies. |
| **consumes** | — | — | PRD inputs, feature scope, and domain ontology entities. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Requirement Structure (requirement-structure). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-workflowstep

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowStep` |
| **card** | — | — | [workflowstep](../concepts/rjm/workflowstep.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Discrete execution unit dispatched to an agent or runner. |
| **consumes** | — | — | Step configuration in workflow definitions. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: WorkflowStep (workflowstep). Defined in rjm:orchestrator. 
- **sequencing note:** RJM-specific phase: rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-quality-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Quality Assessment` |
| **card** | — | — | [decision-quality-assessment](../concepts/rjm/decision-quality-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured markdown table evaluating six criteria (Assumptions Explicit, Claims Verifiable, Alternatives Considered, Bias Examined, Failure Modes Named, Starts Simple) on a 1-... |
| **consumes** | — | — | Decision rigor analysis of proposed decisions, ADRs, and technical justifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Quality Assessment (decision-quality-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Metrics` |
| **card** | — | — | [metrics](../concepts/rjm/metrics.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Aggregated time-series data, dashboard visualizations, and SLI calculations. |
| **consumes** | — | — | Raw numeric events, durations, counters, and gauges across execution runs. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Metrics (metrics). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-baseline-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `baseline file` |
| **card** | — | — | [baseline-file](../concepts/rjm/baseline-file.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Committed scalar ceiling against which subsequent runs measure regressions. |
| **consumes** | — | — | Measured violation count and maintainer approval via --update. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: baseline file (baseline-file). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-bonuses

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `bonuses` |
| **card** | — | — | [bonuses](../concepts/rjm/bonuses.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | High-value supplementary deliverables bundled with the core offer that neutralize prospect hesitations. |
| **consumes** | — | — | Customer objection inventory detailing hurdles to purchase or execution. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: bonuses (bonuses). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-comparison-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Comparison Matrix` |
| **card** | — | — | [comparison-matrix](../concepts/rjm/comparison-matrix.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Multi-dimensional comparison table scoring architectural options side-by-side. |
| **consumes** | — | — | Evaluated design criteria and rating scores for current and alternative approaches. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Comparison Matrix (comparison-matrix). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-documentation-accuracy-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation Accuracy Report` |
| **card** | — | — | [documentation-accuracy-report](../concepts/rjm/documentation-accuracy-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Formatted Markdown report summarizing documentation coverage, claims count, and blocking compilability issues. |
| **consumes** | — | — | `assessment.json`, `claims.json`, `compilability-findings.json`, and `gate-result.json`. |
| **impl status** | — | — | defects: script-bug, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Documentation Accuracy Report (documentation-accuracy-report). Defined in rjm:build. 
- **sequencing note:** RJM-specific phase: rjm:build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-platform-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Platform Configuration` |
| **card** | — | — | [platform-configuration](../concepts/rjm/platform-configuration.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured YAML configuration definitions governing agent template compilation. |
| **consumes** | — | — | Target IDE capabilities, model aliases, tool mapping configurations, and invocation syntax requirements. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Platform Configuration (platform-configuration). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-getting-started-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GETTING STARTED AUDIT` |
| **card** | — | — | [getting-started-audit](../concepts/rjm/getting-started-audit.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | A structured step-by-step table summarizing onboarding actions, individual friction ratings, evidence citations, and total time elapsed. |
| **consumes** | — | — | Sequence of onboarding actions, measured execution durations, friction ratings, and evidence sources. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: GETTING STARTED AUDIT (getting-started-audit). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-trust-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Trust Boundary` |
| **card** | — | — | [trust-boundary](../concepts/rjm/trust-boundary.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Visual and conceptual security perimeter demarcating transitions between different levels of privilege. |
| **consumes** | — | — | Network topology, service mesh configurations, authorization boundaries, and process execution privileges. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Trust Boundary (trust-boundary). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-autonomous-issue-development-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Autonomous Issue Development Prompt` |
| **card** | — | — | [autonomous-issue-development-prompt](../concepts/rjm/autonomous-issue-development-prompt.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Automated end-to-end pull requests, verification evidence, recursive review approvals, and session retrospectives. |
| **consumes** | — | — | Repository URL, target assignee, target PR count, priority issues, and repository development conventions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Autonomous Issue Development Prompt (autonomous-issue-development-prompt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-latency-p99

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Latency p99` |
| **card** | — | — | [latency-p99](../concepts/rjm/latency-p99.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tail response time measurement capturing the latency of the slowest 1% of requests. |
| **consumes** | — | — | Request duration distribution metrics and histograms. |
| **impl status** | — | — | defects: orphan, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Latency p99 (latency-p99). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-fetched-pages-complete

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fetched_pages_complete` |
| **card** | — | — | [fetched-pages-complete](../concepts/rjm/fetched-pages-complete.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Standardized boolean status field in verifier JSON outputs indicating complete pagination. |
| **consumes** | — | — | GitHub API pagination responses across review threads, comments, and check runs. |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** Unique to RJM: fetched_pages_complete (fetched-pages-complete). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-delegation-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `delegation_format` |
| **card** | — | — | [delegation-format](../concepts/rjm/delegation-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:execution` |
| **produces** | — | — | Formatted `<delegation>` XML blocks specifying agent roles, execution modes, plan sources, milestones, files, tasks, and acceptance criteria. |
| **consumes** | — | — | Approved plan files, milestone boundaries, target file paths, specific tasks, and acceptance criteria. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM: delegation_format (delegation-format). Defined in rjm:execution. 
- **sequencing note:** RJM-specific phase: rjm:execution.
- **needs decision:** no
- **decision:** —

### artifact-rjm-quality-grade-alert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Grade Alert` |
| **card** | — | — | [quality-grade-alert](../concepts/rjm/quality-grade-alert.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Formatted GitHub issue titled with degradation count and containing a summary table. |
| **consumes** | — | — | List of degraded domains with scores, trends, and critical gap counts. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Quality Grade Alert (quality-grade-alert). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-validation-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validation report` |
| **card** | — | — | [validation-report](../concepts/rjm/validation-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Formal QA evidence documenting verification results, defect findings, and approval status. |
| **consumes** | — | — | Test execution logs, acceptance criteria, edge case tests, and code diffs. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: validation report (validation-report). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Contract` |
| **card** | — | — | [agent-contract](../concepts/rjm/agent-contract.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized execution behavior, enforceable quality gates, and uniform return statuses ([COMPLETE], [BLOCKED], [NEEDS_DECOMPOSITION], [SECURITY_FLAG]). |
| **consumes** | — | — | Agent input specifications, quality gate conditions, and failure definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Contract (agent-contract). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-aggregateresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AggregateResult` |
| **card** | — | — | [aggregateresult](../concepts/rjm/aggregateresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Summary metrics including agent and baseline recall, signed delta, paired bootstrap confidence intervals, cost basis, and flakiness flags. |
| **consumes** | — | — | Collections of RunRecord instances from evaluated agent and baseline prompt executions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: AggregateResult (aggregateresult). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-portable-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Portable Skill` |
| **card** | — | — | [portable-skill](../concepts/rjm/portable-skill.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Exemplar skill structure demonstrating frontmatter and body conventions for cross-platform portability. |
| **consumes** | — | — | official-standard |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession) |

- **class:** UNIQUE
- **difference:** Unique to RJM: Portable Skill (portable-skill). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-architecture-security-audit-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecture Security Audit Template` |
| **card** | — | — | [architecture-security-audit-template](../concepts/rjm/architecture-security-audit-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Comprehensive architectural security review documents including privilege boundary analyses, Mermaid trust boundary maps, attack surface inventories, and prioritized recommendat... |
| **consumes** | — | — | Proposed system architectures, ADRs, component models, and data dictionaries. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Architecture Security Audit Template (architecture-security-audit-template). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-219

### artifact-rjm-specification-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Specification Structure` |
| **card** | — | — | [specification-structure](../concepts/rjm/specification-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured XML skill specification document (SKILL_SPEC.md) ready for Phase 2 validation. |
| **consumes** | — | — | Analysis insights from Phase 1, requirements, and architectural selections. |
| **impl status** | — | — | defects: orphan, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Specification Structure (specification-structure). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-slash-command

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `slash command` |
| **card** | — | — | [slash-command](../concepts/rjm/slash-command.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An executable command definition markdown file under `.claude/commands/[namespace]/[name].md` or `.claude/commands/[name].md`. |
| **consumes** | — | — | User prompt automation requirements, frontmatter metadata (description, argument-hint, allowed-tools). |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch, internal-contradiction, script-bug, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: slash command (slash-command). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-formfactorcomparison

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FormFactorComparison` |
| **card** | — | — | [formfactorcomparison](../concepts/rjm/formfactorcomparison.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Pairwise deltas, bootstrap confidence intervals, token totals, and FormFactorVerdict. |
| **consumes** | — | — | Evaluation run records across agent, baseline, and skill prompt variants. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: FormFactorComparison (formfactorcomparison). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-vendorscore

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `VendorScore` |
| **card** | — | — | [vendorscore](../concepts/rjm/vendorscore.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Evaluate` |
| **produces** | — | — | Structured evaluation record including numerical score, warning flags, and recommendation verdict (PASS, YELLOW FLAG, RED FLAG). |
| **consumes** | — | — | Evaluated vendor data across financial stability, product maturity, pricing structure, and support quality. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: VendorScore (vendorscore). Defined in rjm:Evaluate. 
- **sequencing note:** RJM-specific phase: rjm:Evaluate.
- **needs decision:** no
- **decision:** —

### artifact-rjm-cell-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `cell_score` |
| **card** | — | — | [cell-score](../concepts/rjm/cell-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A single scalar metric representing the robust central tendency of performance in that cell. |
| **consumes** | — | — | Individual judge sample score triples for a specific scenario × mechanism cell. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: cell_score (cell-score). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-leap-of-faith-assumption

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `leap-of-faith assumption` |
| **card** | — | — | [leap-of-faith-assumption](../concepts/rjm/leap-of-faith-assumption.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An explicitly stated, falsifiable core proposition whose truth or falsehood dictates whether the venture survives. |
| **consumes** | — | — | Venture thesis, initial product architecture concept, and customer pain assumptions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: leap-of-faith assumption (leap-of-faith-assumption). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-design-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DESIGN-REVIEW` |
| **card** | — | — | [design-review](../concepts/rjm/design-review.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured document (`.agents/architecture/DESIGN-REVIEW-*.md`) containing review verdicts, priorities, and architectural assessments. |
| **consumes** | — | — | Proposed architecture decision records, specifications, pull request diffs, and synthesis panel evaluations. |
| **impl status** | — | — | defects: missing-path, other, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: DESIGN-REVIEW (design-review). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-minimum-viable-product

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `minimum viable product` |
| **card** | — | — | [minimum-viable-product](../concepts/rjm/minimum-viable-product.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Smallest viable testing vehicle (landing page, prototype, concierge execution, or single feature) for user testing. |
| **consumes** | — | — | Leap-of-faith assumption and pre-set pass/fail experimental evaluation thresholds. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: minimum viable product (minimum-viable-product). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-required-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Required Frontmatter` |
| **card** | — | — | [required-frontmatter](../concepts/rjm/required-frontmatter.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Valid YAML header block required for agent compilation. |
| **consumes** | — | — | Agent description, argument hint, and platform tool configurations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Required Frontmatter (required-frontmatter). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-rubric-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `rubric score` |
| **card** | — | — | [rubric-score](../concepts/rjm/rubric-score.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Composite numerical scores assessing artifact quality against weighted rubric dimensions. |
| **consumes** | — | — | Authored artifacts, evaluation criteria rubrics, and automated judge scoring inputs. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: rubric score (rubric-score). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-piv-report-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PIV Report Template` |
| **card** | — | — | [piv-report-template](../concepts/rjm/piv-report-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A markdown report artifact (`.agents/security/PIV-[feature].md`) containing verification results, new findings, verification tests, plan deviations, recommendation verdict, and ... |
| **consumes** | — | — | PIV checklist results, discovered vulnerabilities, CI test results, and plan deviations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: PIV Report Template (piv-report-template). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** yes
- **decision:** D-220

### artifact-rjm-visual-card-layout

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Visual Card Layout` |
| **card** | — | — | [visual-card-layout](../concepts/rjm/visual-card-layout.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized, highly scannable visual proposal cards displaying scope, problem, technique attribution, and BEFORE/AFTER diffs. |
| **consumes** | — | — | Planned prompt modifications, problematic source quotes, runtime failure descriptions, and pattern trigger justifications. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Visual Card Layout (visual-card-layout). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-error-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Error Budget` |
| **card** | — | — | [error-budget](../concepts/rjm/error-budget.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Quantified allowance of acceptable failures or downtime (e.g., minutes per month or failed request budget). |
| **consumes** | — | — | Target SLO percentage and time window duration. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch, orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: Error Budget (error-budget). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-buy-vs-build-decision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Buy-vs-build decision` |
| **card** | — | — | [buy-vs-build-decision](../concepts/rjm/buy-vs-build-decision.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A documented strategic recommendation (build, buy, partner, or defer) with supporting trade-off rationale. |
| **consumes** | — | — | Capability requirements, market alternative evaluations, and core-vs-context strategic classifications. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Buy-vs-build decision (buy-vs-build-decision). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-code

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code` |
| **card** | — | — | [code](../concepts/rjm/code.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Executable software modules and complete QA evidence test reports. |
| **consumes** | — | — | Source code, test files, runtime scripts, and libraries. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Code (code). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-per-issue-handoffs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `per-issue handoffs` |
| **card** | — | — | [per-issue-handoffs](../concepts/rjm/per-issue-handoffs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Markdown handoff files located at `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE}-handoff.md`. |
| **consumes** | — | — | Session work-in-progress, completed milestones, test execution evidence, and pending tasks. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: per-issue handoffs (per-issue-handoffs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-goals-and-non-goals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Goals and Non-Goals` |
| **card** | — | — | [goals-and-non-goals](../concepts/rjm/goals-and-non-goals.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured declaration of intended outcomes paired with explicit boundary exclusions. |
| **consumes** | — | — | Product requirements, project scope definitions, and architectural boundaries. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Goals and Non-Goals (goals-and-non-goals). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-prd-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PRD Structure` |
| **card** | — | — | [prd-structure](../concepts/rjm/prd-structure.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Standardized PRD document covering Overview, Goals, Non-Goals, Stories, Functional Requirements, AC, Metrics, Questions, and Considerations. |
| **consumes** | — | — | Feature requests, problem descriptions, stakeholder requirements. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: PRD Structure (prd-structure). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-held-out-fixture-set

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `held-out fixture set` |
| **card** | — | — | [held-out-fixture-set](../concepts/rjm/held-out-fixture-set.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Normalized benchmark fixtures with provenance metadata for eval harness runs. |
| **consumes** | — | — | Verified test scenarios, public CVEs, synthetic prompts, and assertions. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: held-out fixture set (held-out-fixture-set). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-outcome

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Outcome` |
| **card** | — | — | [outcome](../concepts/rjm/outcome.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Measurable outcome statements embedded in roadmap epics. |
| **consumes** | — | — | Feature vision, user research, and strategic objectives. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Outcome (outcome). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-internal-overlay

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `internal overlay` |
| **card** | — | — | [internal-overlay](../concepts/rjm/internal-overlay.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | `src/copilot-cli-internal` plugin package loaded locally by developers. |
| **consumes** | — | — | Items tagged `surface: internal` and build routing rules in `build_all.py`. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: internal overlay (internal-overlay). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-threat-actors

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Threat Actors` |
| **card** | — | — | [threat-actors](../concepts/rjm/threat-actors.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | attacker-profile-matrix |
| **consumes** | — | — | threat-landscape, system-architecture |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Threat Actors (threat-actors). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-rca

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RCA` |
| **card** | — | — | [rca](../concepts/rjm/rca.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Causal chain documentation identifying the definitive technical mechanism responsible for a failure. |
| **consumes** | — | — | Incident reports, stack traces, regression logs, and retrospective observations. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: RCA (rca). Defined in rjm:research. 
- **sequencing note:** RJM-specific phase: rjm:research.
- **needs decision:** no
- **decision:** —

### artifact-rjm-spec-patches

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `spec patches` |
| **card** | — | — | [spec-patches](../concepts/rjm/spec-patches.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:sync` |
| **produces** | — | — | Proposed specification edits and diff patches updating documentation to reflect code changes. |
| **consumes** | — | — | Triaged drift findings, human confirmations, and existing REQ/DESIGN/TASK specification text. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: spec patches (spec-patches). Defined in rjm:sync. 
- **sequencing note:** RJM-specific phase: rjm:sync.
- **needs decision:** no
- **decision:** —

### artifact-rjm-root-cause-pattern-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Root Cause Pattern Template` |
| **card** | — | — | [root-cause-pattern-template](../concepts/rjm/root-cause-pattern-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Standardized RootCause pattern entity (`RootCause-{Category}-{NNN}`) formatted for persistence in Serena memory. |
| **consumes** | — | — | Diagnosed root cause, warning signals, and prevention mechanisms. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Root Cause Pattern Template (root-cause-pattern-template). Defined in rjm:retrospective. 
- **sequencing note:** RJM-specific phase: rjm:retrospective.
- **needs decision:** yes
- **decision:** D-221

### artifact-rjm-consensus-points

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consensus Points` |
| **card** | — | — | [consensus-points](../concepts/rjm/consensus-points.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Formally recorded list of unanimous agreements reached across reviewing agents. |
| **consumes** | — | — | Individual agent critique reviews, conflict resolution analyses. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Consensus Points (consensus-points). Defined in rjm:Review. 
- **sequencing note:** RJM-specific phase: rjm:Review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-discordant-pairs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `discordant pairs` |
| **card** | — | — | [discordant-pairs](../concepts/rjm/discordant-pairs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Counts of positive shifts (`fail-to-pass`) and negative regressions (`pass-to-fail`). |
| **consumes** | — | — | Paired evaluation results per task ID between baseline and candidate. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: discordant pairs (discordant-pairs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-validation-script-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation Script Template` |
| **card** | — | — | [validation-script-template](../concepts/rjm/validation-script-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 3: Generation` |
| **produces** | — | — | Executable Python script template validating artifacts and returning exit code 0 or 1 with reports. |
| **consumes** | — | — | Target file or directory paths, validation criteria, and optional `--strict` or `--json` flags. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Validation Script Template (validation-script-template). Defined in rjm:Phase 3: Generation. 
- **sequencing note:** RJM-specific phase: rjm:Phase 3: Generation.
- **needs decision:** yes
- **decision:** D-222

### artifact-rjm-archival-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Archival Format` |
| **card** | — | — | [archival-format](../concepts/rjm/archival-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Archived ADR document persisted under `.agents/architecture/archive/ADR-NNN-title.md` with structured header metadata. |
| **consumes** | — | — | Deleted ADR content, deletion timestamp, reason for archival, and original lifecycle status. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Archival Format (archival-format). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-valid-error-types

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `VALID_ERROR_TYPES` |
| **card** | — | — | [valid-error-types](../concepts/rjm/valid-error-types.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | The canonical set of eight allowable error classification strings: `NotFound`, `ApiError`, `AuthError`, `InvalidParams`, `RateLimitError`, `Timeout`, `General`, `VerificationFai... |
| **consumes** | — | — | Candidate error type strings supplied during error formatting or validation. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: VALID_ERROR_TYPES (valid-error-types). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-plan-vs-reality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PLAN vs REALITY` |
| **card** | — | — | [plan-vs-reality](../concepts/rjm/plan-vs-reality.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Formatted delta table highlighting point differences and triggering OK or FLAG alerts. |
| **consumes** | — | — | Dimension scores from a prior scorecard and corresponding scores from the current audit. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: PLAN vs REALITY (plan-vs-reality). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** yes
- **decision:** D-223

### artifact-rjm-investigation-allowlist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation allowlist` |
| **card** | — | — | [investigation-allowlist](../concepts/rjm/investigation-allowlist.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An authoritative allowlist of file path patterns permitted for QA-exempt investigation sessions. |
| **consumes** | — | — | ADR-034 governance specifications and path matching patterns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Investigation allowlist (investigation-allowlist). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-assertion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Assertion` |
| **card** | — | — | [assertion](../concepts/rjm/assertion.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | Validation constraints attached to evaluation fixtures that evaluate agent output and produce an `AssertionResult`. |
| **consumes** | — | — | Assertion kind enum (`REGEX` or `VERDICT`), regex pattern string or expected verdict string, and optional description text. |
| **impl status** | — | — | defects: exit-code-mismatch, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: Assertion (assertion). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-active-session-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `active session log` |
| **card** | — | — | [active-session-log](../concepts/rjm/active-session-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Resolved active session metadata file path receiving appended checkpoint links. |
| **consumes** | — | — | Sorted candidate session log files under `.agents/sessions/*.json` and the current git branch. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: active session log (active-session-log). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dx-audit-scorecard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DX AUDIT SCORECARD` |
| **card** | — | — | [dx-audit-scorecard](../concepts/rjm/dx-audit-scorecard.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Structured ASCII table artifact presenting complete audit scores, evidence summaries, TTHW, and Overall DX mean score. |
| **consumes** | — | — | Scores (0-10), evidence summaries, and method classifications across eight audit dimensions, plus measured Time-to-Hello-World (TTHW). |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: DX AUDIT SCORECARD (dx-audit-scorecard). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pre-mortem-risk-inventory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Mortem Risk Inventory` |
| **card** | — | — | [pre-mortem-risk-inventory](../concepts/rjm/pre-mortem-risk-inventory.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | A structured risk inventory document organizing prioritized risks (Critical, High, Medium, Low), Prevention/Detection/Response mitigations, action items, and review schedules. |
| **consumes** | — | — | Project context, brainstormed failure causes, quantitative likelihood and impact scores, and mitigation strategies. |
| **impl status** | — | — | defects: missing-path, exit-code-mismatch, orphan, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pre-Mortem Risk Inventory (pre-mortem-risk-inventory). Defined in rjm:build. 
- **sequencing note:** RJM-specific phase: rjm:build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-consultations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `consultations` |
| **card** | — | — | [consultations](../concepts/rjm/consultations.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Integer accounting charge (0 for early refusal, 1 for evaluated candidate) in gate decision JSON. |
| **consumes** | — | — | Execution path and refusal status of the gate invocation. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: consultations (consultations). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-opt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `opt` |
| **card** | — | — | [opt](../concepts/rjm/opt.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Partitioned set of task IDs allocated for candidate edit generation. |
| **consumes** | — | — | Full evaluation benchmark fixture set, split configuration, and seed. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: opt (opt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dream-outcome

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `dream outcome` |
| **card** | — | — | [dream-outcome](../concepts/rjm/dream-outcome.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Articulated desired future state that anchors the top of the Value Equation and guides marketing messaging. |
| **consumes** | — | — | Customer discovery research, avatar pain point analysis, and understanding of target buyer aspirations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: dream outcome (dream-outcome). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-investigation-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `investigation plan` |
| **card** | — | — | [investigation-plan](../concepts/rjm/investigation-plan.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Investigation Planning` |
| **produces** | — | — | A committed contract of target files, investigative questions, and testable hypotheses to be verified in Step 5. |
| **consumes** | — | — | Focus area selections, priority assignments (P1-P3), and initial exploration findings. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: investigation plan (investigation-plan). Defined in rjm:Investigation Planning. 
- **sequencing note:** RJM-specific phase: rjm:Investigation Planning.
- **needs decision:** yes
- **decision:** D-224

### artifact-rjm-skillignore

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `.skillignore` |
| **card** | — | — | [skillignore](../concepts/rjm/skillignore.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Phase 4: Packaging` |
| **produces** | — | — | Exclusion rules applied by `is_ignored()` to filter file paths during `.skill` packaging. |
| **consumes** | — | — | Line-delimited ignore patterns and comments within a skill directory. |
| **impl status** | — | — | defects: script-bug, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** Unique to RJM: .skillignore (skillignore). Defined in rjm:Phase 4: Packaging. 
- **sequencing note:** RJM-specific phase: rjm:Phase 4: Packaging.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pre-executed-test-results

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-executed Test Results` |
| **card** | — | — | [pre-executed-test-results](../concepts/rjm/pre-executed-test-results.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Empirical evidence citations incorporated into the QA review verdict and test coverage assessment. |
| **consumes** | — | — | Workflow test runner outputs, pass/fail counts, failure traces, and execution summaries produced prior to review dispatch. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pre-executed Test Results (pre-executed-test-results). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-taste-lint-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `taste lint report` |
| **card** | — | — | [taste-lint-report](../concepts/rjm/taste-lint-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | A structured JSON document containing scanned file counts, file category breakdowns, error/warning tallies, and violation lists. |
| **consumes** | — | — | Target files, staged changes, or repository directory contents. |
| **impl status** | — | — | defects: other, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: taste lint report (taste-lint-report). Defined in rjm:build. 
- **sequencing note:** RJM-specific phase: rjm:build.
- **needs decision:** no
- **decision:** —

### artifact-rjm-measurement-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Measurement Plan` |
| **card** | — | — | [measurement-plan](../concepts/rjm/measurement-plan.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Implementation schedule, data collection methods, and milestones for automated agent metrics collection. |
| **consumes** | — | — | Baseline metric assessments and agent governance requirements. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Measurement Plan (measurement-plan). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** yes
- **decision:** D-225

### artifact-rjm-analysis-summary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analysis Summary` |
| **card** | — | — | [analysis-summary](../concepts/rjm/analysis-summary.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Four-bullet summary of analyst findings or explicit "no finding" affirmations. |
| **consumes** | — | — | Analyst evaluation notes on readability, claim support, consistency, and simplicity. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Analysis Summary (analysis-summary). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-memory-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory Format` |
| **card** | — | — | [memory-format](../concepts/rjm/memory-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:reflect` |
| **produces** | — | — | Structured markdown document formatted with metadata and confidence-categorized sections. |
| **consumes** | — | — | Distilled reflection learnings grouped into confidence tiers (HIGH, MED, LOW) and session metrics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Memory Format (memory-format). Defined in rjm:reflect. 
- **sequencing note:** RJM-specific phase: rjm:reflect.
- **needs decision:** no
- **decision:** —

### artifact-rjm-workflow-run-coalescing-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Run Coalescing Metrics` |
| **card** | — | — | [workflow-run-coalescing-metrics](../concepts/rjm/workflow-run-coalescing-metrics.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A periodic metrics report on run coalescing, cancellation performance, and race conditions. |
| **consumes** | — | — | GitHub Actions run events, cancellation timestamps, and concurrency group metrics. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Workflow Run Coalescing Metrics (workflow-run-coalescing-metrics). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `session log` |
| **card** | — | — | [session-log](../concepts/rjm/session-log.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:session-end` |
| **produces** | — | — | Serialized JSON session summary capturing tool calls, token metrics, and execution steps. |
| **consumes** | — | — | Session activity, command history, and phase transition records. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: session log (session-log). Defined in rjm:session-end. 
- **sequencing note:** RJM-specific phase: rjm:session-end.
- **needs decision:** no
- **decision:** —

### artifact-rjm-failure-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Failure Handoff` |
| **card** | — | — | [failure-handoff](../concepts/rjm/failure-handoff.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | Actionable remediation instructions routing specific failure root causes back to the implementer. |
| **consumes** | — | — | Pre-PR Validation Report with BLOCKED verdict, failing test logs, and identified defect locations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Failure Handoff (failure-handoff). Defined in rjm:test. 
- **sequencing note:** RJM-specific phase: rjm:test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-investigation-artifacts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation artifacts` |
| **card** | — | — | [investigation-artifacts](../concepts/rjm/investigation-artifacts.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Committed exploratory and diagnostic records across designated directories (`.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/sec... |
| **consumes** | — | — | Research discoveries, analysis notes, session logs, learning extractions, memory updates, and security assessments. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Investigation artifacts (investigation-artifacts). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-lead-engine

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `lead engine` |
| **card** | — | — | [lead-engine](../concepts/rjm/lead-engine.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Predictable, measurable, and scalable pipeline of qualified prospect conversations and customer acquisitions. |
| **consumes** | — | — | Core Four channel selection, compelling lead magnet, daily/weekly action quotas, and tracking instrumentation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: lead engine (lead-engine). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-assertionresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AssertionResult` |
| **card** | — | — | [assertionresult](../concepts/rjm/assertionresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | A structured verdict record containing a boolean pass status, failure message, and matched or extracted values. |
| **consumes** | — | — | An `Assertion` instance, model response text, and evaluator extraction results. |
| **impl status** | — | — | defects: exit-code-mismatch, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: AssertionResult (assertionresult). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-logs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session logs` |
| **card** | — | — | [session-logs](../concepts/rjm/session-logs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Optional JSON session records under `.agents/sessions/YYYY-MM-DD-session-NN.json` validated by `scripts/validate_session_json.py`. |
| **consumes** | — | — | Agent execution transcripts, command outputs, and task metadata. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Session logs (session-logs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-step-0-5-halt-block-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 0.5 halt block format` |
| **card** | — | — | [step-0-5-halt-block-format](../concepts/rjm/step-0-5-halt-block-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A fenced code block with info-string `step0_5-halt` containing `trigger`, `check`, `evidence`, `test_failed`, and `deferral` keys. |
| **consumes** | — | — | Trigger ID (H6-H11), AC check ID, evidence text, rule violated, and deferral instruction. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Step 0.5 halt block format (step-0-5-halt-block-format). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-forgetful-atomic-memories

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Forgetful Atomic Memories` |
| **card** | — | — | [forgetful-atomic-memories](../concepts/rjm/forgetful-atomic-memories.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | 5 to 10 atomic, constrained, actionable, and linked memory entries in Forgetful. |
| **consumes** | — | — | Categorized concepts, frameworks, patterns, failure modes, and examples from research analysis. |
| **impl status** | — | — | out-of-scope |

- **class:** UNIQUE
- **difference:** Unique to RJM: Forgetful Atomic Memories (forgetful-atomic-memories). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-shipped-components

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shipped Components` |
| **card** | — | — | [shipped-components](../concepts/rjm/shipped-components.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Scoped list of components subject to mandatory third-party license notice generation. |
| **consumes** | — | — | Plugin definitions in `.claude-plugin/marketplace.json`, forked code, and requirements.txt runtime dependencies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Shipped Components (shipped-components). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-observability-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observability Assessment` |
| **card** | — | — | [observability-assessment](../concepts/rjm/observability-assessment.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A structured Markdown summary table displaying pillar coverage status and evaluative notes. |
| **consumes** | — | — | Observability review evaluations across discrete logs, service metrics, distributed traces, and agent/hook event telemetry. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Observability Assessment (observability-assessment). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-evaluation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Evaluation` |
| **card** | — | — | [agent-evaluation](../concepts/rjm/agent-evaluation.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:Phase 4: Synthesis Panel` |
| **produces** | — | — | Markdown review report containing Verdict (APPROVED / CHANGES_REQUIRED), Scores (1-10), Strengths, Issues table, and Recommendations. |
| **consumes** | — | — | Candidate skill artifacts and evaluator lens criteria. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Evaluation (agent-evaluation). Defined in rjm:Phase 4: Synthesis Panel. 
- **sequencing note:** RJM-specific phase: rjm:Phase 4: Synthesis Panel.
- **needs decision:** no
- **decision:** —

### artifact-rjm-holder-lease

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `holder lease` |
| **card** | — | — | [holder-lease](../concepts/rjm/holder-lease.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Exclusive PR comment lease marker preventing concurrent branch mutation. |
| **consumes** | — | — | Repository, PR number, branch name, holder id, and verified GitHub actor. |
| **impl status** | — | — | not-implemented (ADR-090 proposed; citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** Unique to RJM: holder lease (holder-lease). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-milestones

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Milestones` |
| **card** | — | — | [milestones](../concepts/rjm/milestones.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Discrete, sequenced milestone increments with targeted file paths, work items, and verification criteria. |
| **consumes** | — | — | Specifications, acceptance criteria, architecture decisions, and scope boundaries. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Milestones (milestones). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-extraction-provenance-envelope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extraction-provenance envelope` |
| **card** | — | — | [extraction-provenance-envelope](../concepts/rjm/extraction-provenance-envelope.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Tamper-evident metadata envelope bound directly to evaluation results files. |
| **consumes** | — | — | Evaluation execution reports, extractor version, input digest, results digest, upstream scorer identity, group assignment, and split fingerprint. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction (implemented in extract per ADR-087 #3436; citing inventory card records missing-path, doc-drift, internal-contradiction) |

- **class:** UNIQUE
- **difference:** Unique to RJM: extraction-provenance envelope (extraction-provenance-envelope). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-arc42

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `arc42` |
| **card** | — | — | [arc42](../concepts/rjm/arc42.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An architecture decision record formatted for direct inclusion into arc42 Section 9 (Architecture Decisions). |
| **consumes** | — | — | arc42 architecture model, quality goals, and system building blocks. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: arc42 (arc42). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-resolution-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Resolution Report` |
| **card** | — | — | [resolution-report](../concepts/rjm/resolution-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured markdown report detailing PR context, resolved conflicts table, file-by-file decision rationale, and manual review flags. |
| **consumes** | — | — | Completed shell-executed merge actions, verification outputs, and confidence ratings. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Resolution Report (resolution-report). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-resolution-summary-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Resolution Summary Template` |
| **card** | — | — | [resolution-summary-template](../concepts/rjm/resolution-summary-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Issue Resolution Summary markdown table added to final review recommendations. |
| **consumes** | — | — | Counts of identified, resolved, deferred, and backlogged issues categorized by priority (P0/P1/P2). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Resolution Summary Template (resolution-summary-template). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** yes
- **decision:** D-226

### artifact-rjm-slo-configuration-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SLO Configuration Template` |
| **card** | — | — | [slo-configuration-template](../concepts/rjm/slo-configuration-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Declarative YAML configuration file specifying service reliability targets and PromQL metrics. |
| **consumes** | — | — | Service metadata, user journeys, SLI definitions, SLO targets, and alerting thresholds. |
| **impl status** | — | — | defects: orphan, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: SLO Configuration Template (slo-configuration-template). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** yes
- **decision:** D-227

### artifact-rjm-agent-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Catalog` |
| **card** | — | — | [agent-catalog](../concepts/rjm/agent-catalog.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Committed documentation index (`docs/agent-catalog.md`) detailing agent names, role classifications, line counts, and functional descriptions. |
| **consumes** | — | — | Agent templates under `templates/agents/*.shared.md` and the generation script `build/generate_agent_catalog.py`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Catalog (agent-catalog). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-session-state-mcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session State MCP` |
| **card** | — | — | [session-state-mcp](../concepts/rjm/session-state-mcp.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | MCP tools (`session_start`, `validate_gate`, `advance_phase`, `record_evidence`, `session_end`, `get_blocked_reason`), MCP resources (`session://state`, `session://checklist`, `... |
| **consumes** | — | — | Session start parameters, RFC 2119 gate definitions from SESSION-PROTOCOL.md, and tool verification evidence. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: Session State MCP (session-state-mcp). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-p-value

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `p_value` |
| **card** | — | — | [p-value](../concepts/rjm/p-value.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Float probability value representing the exact one-sided McNemar tail. |
| **consumes** | — | — | `discordant_gain` and `discordant_loss` counts from paired candidate evaluation. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: p_value (p-value). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-specification-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `specification tier` |
| **card** | — | — | [specification-tier](../concepts/rjm/specification-tier.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | The structured specification layer that governs repository architecture and provides baseline criteria for tests and review. |
| **consumes** | — | — | Requirements definitions (REQ), system designs (DESIGN), and decomposed tasks (TASK). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: specification tier (specification-tier). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-framework-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `framework-skills` |
| **card** | — | — | [framework-skills](../concepts/rjm/framework-skills.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | A standalone Claude Code plugin providing reusable workflow automation skills. |
| **consumes** | — | — | Domain-agnostic skill implementations, utility scripts, and test suites. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: framework-skills (framework-skills). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-solution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Solution` |
| **card** | — | — | [solution](../concepts/rjm/solution.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Detailed description of the chosen resolution and how it addresses the stated problem forces. |
| **consumes** | — | — | Problem context, evaluated forces, and selected technical approach. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Solution (solution). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-scope-split-recommendation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Scope Split Recommendation` |
| **card** | — | — | [scope-split-recommendation](../concepts/rjm/scope-split-recommendation.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Decomposition proposal dividing an ADR into distinct sub-records (ADR-NNN-A, ADR-NNN-B). |
| **consumes** | — | — | Scope concerns raised by two or more reviewing agents in Phase 1. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Scope Split Recommendation (scope-split-recommendation). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-logs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `decision logs` |
| **card** | — | — | [decision-logs](../concepts/rjm/decision-logs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Structured tabular records capturing date, decision, rationale, and alternatives considered. |
| **consumes** | — | — | Architectural choices, technical trade-offs, and evaluated alternative implementations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: decision logs (decision-logs). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** no
- **decision:** —

### artifact-rjm-decision-drivers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Drivers` |
| **card** | — | — | [decision-drivers](../concepts/rjm/decision-drivers.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Prioritized list of decision drivers used to evaluate and compare architectural options. |
| **consumes** | — | — | Business requirements, quality attributes, system constraints, and stakeholder concerns. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Decision Drivers (decision-drivers). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-principle-compliance-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Principle Compliance Matrix` |
| **card** | — | — | [principle-compliance-matrix](../concepts/rjm/principle-compliance-matrix.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A tabular compliance record across Non-Overlap, Entry Criteria, Limitations, Composable, Verifiable, and Consistent columns. |
| **consumes** | — | — | Agent interview reports, architectural reviews, and quarterly evaluation results. |
| **impl status** | — | — | defects: other (Principle Compliance Matrix table at .agents/governance/agent-design-principles.md:297-302 is an unpopulated placeholder with blank checkboxes for all agents; ca... |

- **class:** UNIQUE
- **difference:** Unique to RJM: Principle Compliance Matrix (principle-compliance-matrix). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-exception-documentation-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exception Documentation Format` |
| **card** | — | — | [exception-documentation-format](../concepts/rjm/exception-documentation-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized workflow comment annotations documenting approved exceptions. |
| **consumes** | — | — | Valid architectural justifications for x64 or Windows runner selection. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Exception Documentation Format (exception-documentation-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-autonomous-pr-monitoring-prompt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Autonomous PR Monitoring Prompt` |
| **card** | — | — | [autonomous-pr-monitoring-prompt](../concepts/rjm/autonomous-pr-monitoring-prompt.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Triaged PR batches, automated PR reviews, committed CI fixes, thread resolutions, branch updates, and merged pull requests. |
| **consumes** | — | — | GitHub notifications, open PR list, CI check results, review threads, Serena memories, and per-issue handoffs. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Autonomous PR Monitoring Prompt (autonomous-pr-monitoring-prompt). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-reviewed-tip

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `reviewed tip` |
| **card** | — | — | [reviewed-tip](../concepts/rjm/reviewed-tip.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A target commit SHA embedded into the `Reviewed-By` trailer of an empty marker commit. |
| **consumes** | — | — | The Git commit at HEAD when all review axes pass. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: reviewed tip (reviewed-tip). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-platform-configs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Platform Configs` |
| **card** | — | — | [platform-configs](../concepts/rjm/platform-configs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | YAML configuration files governing code generation transformations. |
| **consumes** | — | — | Platform specification requirements, model identifier maps, and tool syntax rules. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Platform Configs (platform-configs). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-auto-retros

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Auto-retros` |
| **card** | — | — | [auto-retros](../concepts/rjm/auto-retros.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | `*-auto-retro.md` skeleton files in `.agents/retrospective/`. |
| **consumes** | — | — | Stop-hook execution triggers, session exit events. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Auto-retros (auto-retros). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-additionalcontext

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `additionalContext` |
| **card** | — | — | [additionalcontext](../concepts/rjm/additionalcontext.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A standardized JSON envelope injected into the host session context. |
| **consumes** | — | — | Merged stdout text from observer hook shims. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: additionalContext (additionalcontext). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-gateresult

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GateResult` |
| **card** | — | — | [gateresult](../concepts/rjm/gateresult.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | A structured verdict indicating whether a candidate edit replaces the incumbent, with decision rationale and consultation accounting. |
| **consumes** | — | — | Candidate score, incumbent score, McNemar significance test results, consultation budget, and split fingerprints. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: GateResult (gateresult). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-standard-envelope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `standard envelope` |
| **card** | — | — | [standard-envelope](../concepts/rjm/standard-envelope.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized JSON dictionary with Success, Data, Error, and Metadata keys. |
| **consumes** | — | — | Output payload, execution status, error details, and execution metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: standard envelope (standard-envelope). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-required-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REQUIRED ACTIONS` |
| **card** | — | — | [required-actions](../concepts/rjm/required-actions.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Unambiguous, step-specific operational instructions and tool invocations required before the next step. |
| **consumes** | — | — | Current step state from analyze.py. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: REQUIRED ACTIONS (required-actions). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** no
- **decision:** —

### artifact-rjm-external-entities

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `External Entities` |
| **card** | — | — | [external-entities](../concepts/rjm/external-entities.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | DFD source and destination entities subject to Spoofing analysis. |
| **consumes** | — | — | System architecture specifications, actor roles, external API integrations, and client definitions. |
| **impl status** | — | — | defects: exit-code-mismatch, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: External Entities (external-entities). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-visual-card-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `visual card format` |
| **card** | — | — | [visual-card-format](../concepts/rjm/visual-card-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Visual card representation showing side-by-side or before-and-after prompt transformations. |
| **consumes** | — | — | Detailed prompt change proposals, including scope, diagnostic findings, and applied techniques. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: visual card format (visual-card-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-error-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Error Format` |
| **card** | — | — | [error-format](../concepts/rjm/error-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Consistent JSON error response payloads containing machine-readable codes and support request IDs. |
| **consumes** | — | — | Application exceptions, HTTP error responses, and support tracing contexts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Error Format (error-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-fail-to-pass

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fail-to-pass` |
| **card** | — | — | [fail-to-pass](../concepts/rjm/fail-to-pass.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Positive improvement count for gating evaluation. |
| **consumes** | — | — | Task outcomes from baseline (fail) and candidate (pass). |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: fail-to-pass (fail-to-pass). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-negative

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Negative` |
| **card** | — | — | [negative](../concepts/rjm/negative.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | An honest, enumerated list of accepted negative impacts resulting from the decision. |
| **consumes** | — | — | Architectural compromises, operational overhead, complexity burdens, and trade-offs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Negative (negative). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-goals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Goals` |
| **card** | — | — | [goals](../concepts/rjm/goals.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prioritized list of desired business and technical outcomes. |
| **consumes** | — | — | Stakeholder requirements, functional needs, and quality attributes. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Goals (goals). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-prior-art-constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prior Art / Constraints` |
| **card** | — | — | [prior-art-constraints](../concepts/rjm/prior-art-constraints.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Formatted `## Prior Art / Constraints` section with subsections for direct prior art, connected context, and coverage notes. |
| **consumes** | — | — | Memory point search results, chestertons-fence recommendations, and graph traversal entities. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Prior Art / Constraints (prior-art-constraints). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-eval-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `eval baseline` |
| **card** | — | — | [eval-baseline](../concepts/rjm/eval-baseline.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Measured performance numbers establishing the empirical standard against which new versions or proposed rules are judged. |
| **consumes** | — | — | Pre-registered evaluation scenario fixtures, zero-spend dry-run validations, and explicit numerical predictions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: eval baseline (eval-baseline). Defined in rjm:research. 
- **sequencing note:** RJM-specific phase: rjm:research.
- **needs decision:** no
- **decision:** —

### artifact-rjm-results-envelope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `results envelope` |
| **card** | — | — | [results-envelope](../concepts/rjm/results-envelope.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | JSON formatted evaluation results file (`base.json`, `cand.json`) containing task outcomes and provenance headers. |
| **consumes** | — | — | Raw scorer execution verdicts and environment metadata. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: results envelope (results-envelope). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-obsolescence-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `obsolescence_triggers` |
| **card** | — | — | [obsolescence-triggers](../concepts/rjm/obsolescence-triggers.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | List of identified obsolescence conditions paired with likelihood estimates and defensive design measures. |
| **consumes** | — | — | Ecosystem trend analysis, platform roadmap assumptions, and dependency stability evaluations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: obsolescence_triggers (obsolescence-triggers). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-sidecar-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sidecar files` |
| **card** | — | — | [sidecar-files](../concepts/rjm/sidecar-files.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Persistent `memories.md` files localized to specific agent directories. |
| **consumes** | — | — | Role-specific agent observations, prompt preferences, and task execution history. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: Sidecar files (sidecar-files). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-workflow-modules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow modules` |
| **card** | — | — | [workflow-modules](../concepts/rjm/workflow-modules.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Reusable script functions and modular logic imported by GitHub Actions workflow steps. |
| **consumes** | — | — | CI environment context, workflow step outputs, and shared utility definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Workflow modules (workflow-modules). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-artifact-insight-findings

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `artifact insight findings` |
| **card** | — | — | [artifact-insight-findings](../concepts/rjm/artifact-insight-findings.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | GitHub issues with provenance footers. |
| **consumes** | — | — | Scanned agent artifacts analyzed by the AI insight scanner. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: artifact insight findings (artifact-insight-findings). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-step0-halt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `step0-halt` |
| **card** | — | — | [step0-halt](../concepts/rjm/step0-halt.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured fenced code block halt output stopping `/spec` execution. |
| **consumes** | — | — | Fired halt trigger (H1–H5) from Step 0 First Principles Gate. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: step0-halt (step0-halt). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-marker-commit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `marker commit` |
| **card** | — | — | [marker-commit](../concepts/rjm/marker-commit.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | An empty Git commit (`git commit --allow-empty`) containing the `Reviewed-By:` trailer naming its parent commit. |
| **consumes** | — | — | A PASS review verdict across all required axes for the current commit HEAD. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: marker commit (marker-commit). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-api-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `API Reference` |
| **card** | — | — | [api-reference](../concepts/rjm/api-reference.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized API reference documentation document (typically docs/API.md). |
| **consumes** | — | — | System endpoints, request/response schema specifications, authentication mechanisms, and rate limit rules. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: API Reference (api-reference). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pr-validation-report

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Validation Report` |
| **card** | — | — | [pr-validation-report](../concepts/rjm/pr-validation-report.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Markdown validation report artifact `pr-validation-report.md` posted to CI summaries and PR discussions. |
| **consumes** | — | — | PR validation status inputs including description check outcome, bypass label flags, issue linking keywords, and template compliance. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: PR Validation Report (pr-validation-report). Defined in rjm:ship. 
- **sequencing note:** RJM-specific phase: rjm:ship.
- **needs decision:** no
- **decision:** —

### artifact-rjm-security-piv-reports

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security PIV reports` |
| **card** | — | — | [security-piv-reports](../concepts/rjm/security-piv-reports.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Documented post-implementation verification reports certifying PR security posture. |
| **consumes** | — | — | Security analysis output, pull request audit findings, and vulnerability detection reviews. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Security PIV reports (security-piv-reports). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-action-plan

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `action plan` |
| **card** | — | — | [action-plan](../concepts/rjm/action-plan.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Phased recommendations grouped into Immediate (blocking/security), Short-Term (sprint-level), and Long-Term (strategic/architectural). |
| **consumes** | — | — | Verified findings, severity tiers, and identified systemic patterns. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: action plan (action-plan). Defined in rjm:analyze. 
- **sequencing note:** RJM-specific phase: rjm:analyze.
- **needs decision:** yes
- **decision:** D-228

### artifact-rjm-stop-output

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stop output` |
| **card** | — | — | [stop-output](../concepts/rjm/stop-output.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | JSON payload containing decision: "block" and accompanying prompt reason, or empty completion. |
| **consumes** | — | — | Validation gate evaluations, task completion criteria, and post-turn invariants. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: Stop output (stop-output). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-remediation-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Remediation Actions` |
| **card** | — | — | [remediation-actions](../concepts/rjm/remediation-actions.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A structured remediation table specifying the detected issue, concrete fix action, and designated owner. |
| **consumes** | — | — | Traceability errors and warnings identified during specification graph validation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Remediation Actions (remediation-actions). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-github-issues-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GitHub Issues format` |
| **card** | — | — | [github-issues-format](../concepts/rjm/github-issues-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured GitHub Issue markdown formatted with `# CONTEXT`, `# TODO`, and `# SUCCESS CRITERIA`. |
| **consumes** | — | — | Task context, objectives, and acceptance criteria. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: GitHub Issues format (github-issues-format). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-dx-scorecard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DX scorecard` |
| **card** | — | — | [dx-scorecard](../concepts/rjm/dx-scorecard.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | The final formatted scorecard table presenting dimension scores, inspection methods, and overall DX arithmetic mean. |
| **consumes** | — | — | Scores across the eight audit dimensions, evidence citations, method labels, and TTHW measurements. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** Unique to RJM: DX scorecard (dx-scorecard). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-outcome-specs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Outcome specs` |
| **card** | — | — | [outcome-specs](../concepts/rjm/outcome-specs.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Goal-driven specifications defining what outcome to achieve rather than micromanaging how the model must navigate steps. |
| **consumes** | — | — | User goals, domain knowledge bases, operational policies, and historical context. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Outcome specs (outcome-specs). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-content-controlled-skill-variant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `content-controlled skill variant` |
| **card** | — | — | [content-controlled-skill-variant](../concepts/rjm/content-controlled-skill-variant.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | An evaluation fixture artifact (`evals/security-spike/skill-content-controlled/SKILL.md`) for form-factor benchmarking. |
| **consumes** | — | — | The base agent prompt definition (`templates/agents/security.shared.md`) with frontmatter stripped. |
| **impl status** | — | — | defects: cross-file-contradiction, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: content-controlled skill variant (content-controlled-skill-variant). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-control

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Control` |
| **card** | — | — | [control](../concepts/rjm/control.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | Baseline control instances used to sanity-check fixture assertion sensitivity and reliability. |
| **consumes** | — | — | Positive and negative control declarations from parity fixture corpora. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Control (control). Defined in rjm:Test. 
- **sequencing note:** RJM-specific phase: rjm:Test.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Skills` |
| **card** | — | — | [agent-skills](../concepts/rjm/agent-skills.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Documented behavioral patterns, linting guidelines, documentation standards, and workflow heuristics. |
| **consumes** | — | — | Retrospective insights, failure analysis, and empirical software development evidence. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Skills (agent-skills). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-plan-template

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plan Template` |
| **card** | — | — | [plan-template](../concepts/rjm/plan-template.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Standardized markdown plan files formatted as `# Plan: [Epic Name]`. |
| **consumes** | — | — | Epic objectives, decomposed milestones, dependency graphs, cross-milestone risks, open questions, and assumptions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Plan Template (plan-template). Defined in rjm:plan. 
- **sequencing note:** RJM-specific phase: rjm:plan.
- **needs decision:** yes
- **decision:** D-229

### artifact-rjm-project-canonical

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Project Canonical` |
| **card** | — | — | [project-canonical](../concepts/rjm/project-canonical.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Comprehensive architectural decision records matching `.agents/architecture/ADR-TEMPLATE.md`. |
| **consumes** | — | — | Architectural context, prior art investigation, alternative evaluations, and agent metadata. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Project Canonical (project-canonical). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-quick-scan-configuration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick Scan Configuration` |
| **card** | — | — | [quick-scan-configuration](../concepts/rjm/quick-scan-configuration.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Lightweight configuration file at `.github/codeql/codeql-config-quick.yml`. |
| **consumes** | — | — | Targeted query specifications targeting high-impact vulnerability classes (command injection, SQL injection, XSS, path traversal, hardcoded credentials). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** Unique to RJM: Quick Scan Configuration (quick-scan-configuration). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-security-report-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Report Format` |
| **card** | — | — | [security-report-format](../concepts/rjm/security-report-format.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | A formatted security report artifact at `.agents/security/SR-NNN-[scope].md`. |
| **consumes** | — | — | Verified security findings, severities, impact analysis, and remediation proposals. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Security Report Format (security-report-format). Defined in rjm:review. 
- **sequencing note:** RJM-specific phase: rjm:review.
- **needs decision:** no
- **decision:** —

### artifact-rjm-agent-metrics-dashboard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Metrics Dashboard` |
| **card** | — | — | [agent-metrics-dashboard](../concepts/rjm/agent-metrics-dashboard.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | A formatted periodic markdown report summarizing agent health, adoption, and effectiveness. |
| **consumes** | — | — | Collected telemetry across all 8 agent metrics. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Agent Metrics Dashboard (agent-metrics-dashboard). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-golden-test-corpus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `golden test corpus` |
| **card** | — | — | [golden-test-corpus](../concepts/rjm/golden-test-corpus.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | Repeatable evaluation benchmark for scoring agent prompt performance and regression detection. |
| **consumes** | — | — | Curated test cases, known-vulnerable code snippets, expected agent verdicts. |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: golden test corpus (golden-test-corpus). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-structured-feedback

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Structured feedback` |
| **card** | — | — | [structured-feedback](../concepts/rjm/structured-feedback.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Specific improvement suggestions and dimensional scores passed to the generator. |
| **consumes** | — | — | Candidate output and evaluation rubric scores. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Structured feedback (structured-feedback). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-delegate-shims

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `delegate shims` |
| **card** | — | — | [delegate-shims](../concepts/rjm/delegate-shims.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** Unique to RJM: delegate shims (delegate-shims). Defined in rjm:none. 
- **sequencing note:** RJM-specific phase: rjm:none.
- **needs decision:** no
- **decision:** —

### artifact-rjm-parity-manifest

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `parity manifest` |
| **card** | — | — | [parity-manifest](../concepts/rjm/parity-manifest.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Validated manifest file deployed to plugin consumers. |
| **consumes** | — | — | Plugin definition metadata, commands, skills, and version identifiers. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** Unique to RJM: parity manifest (parity-manifest). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-discordant-gain

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `discordant_gain` |
| **card** | — | — | [discordant-gain](../concepts/rjm/discordant-gain.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Non-negative integer count of held-out tasks that moved fail-to-pass. |
| **consumes** | — | — | Paired evaluation results between candidate and incumbent on held-out tasks. |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** Unique to RJM: discordant_gain (discordant-gain). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### artifact-rjm-pros-and-cons-of-the-options

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pros and Cons of the Options` |
| **card** | — | — | [pros-and-cons-of-the-options](../concepts/rjm/pros-and-cons-of-the-options.md) |
| **kind** | — | — | template |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Structured analysis of arguments (Good, Neutral, Bad) for every considered option. |
| **consumes** | — | — | Candidate architectural options and comparative evaluation criteria. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to RJM: Pros and Cons of the Options (pros-and-cons-of-the-options). Defined in rjm:spec. 
- **sequencing note:** RJM-specific phase: rjm:spec.
- **needs decision:** no
- **decision:** —

### artifact-rjm-failure-mode-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Failure-Mode Catalog` |
| **card** | — | — | [failure-mode-catalog](../concepts/rjm/failure-mode-catalog.md) |
| **kind** | — | — | artifact |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized failure mode classifications (`FM-1` through `FM-11`) for incidents. |
| **consumes** | — | — | Post-incident analyses, retrospectives, and failure observations. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** Unique to RJM: Failure-Mode Catalog (failure-mode-catalog). Defined in rjm:cross-phase. 
- **sequencing note:** RJM-specific phase: rjm:cross-phase.
- **needs decision:** no
- **decision:** —

