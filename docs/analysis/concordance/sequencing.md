# Concordance — Sequencing

This document establishes the structural concordance for all **sequencing**, **handoff**, **boundary**, **orchestration**, and **execution flow** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5 and §9, this is the third of three structural concordances (alongside `phases.md` and `artifacts.md`) that establish the stage names, operational boundaries, progression contracts, skip rules, and execution models of the software development lifecycle.

---

## Structural Overview — Comparative Sequencing Architecture across the Three Packages

| Lifecycle Dimension | Addy (`agent-skills`) | Matt (`skills`) | RJM (`ai-agents`) | Synthesis & Alignment Target |
|---|---|---|---|---|
| **1. Macro Execution Pipeline** | Sequential slash commands (`/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship`) run by the user. | Composable skills (`explore` → `to-spec` → `to-tickets` → `implement` → `diagnosing-bugs` → `triage`). | Strictly gated slash commands (`/spec` → `/plan` → `/build` → `/test` → `review` → `/ship`). | Six canonical stages executed sequentially; human developer serves as the macro orchestrator. |
| **2. Phase Handoff Model** | Handoff via living repository artifacts (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`, git diffs). | Portable markdown handoffs (`/handoff`) bridging context across sessions and harnesses. | Typed artifact contracts on disk (`spec.md`, `plan.md`, test evidence, review scorecards). | Strict artifact contracts on disk; no lifecycle state depends on transient conversational memory. |
| **3. Skip Rules & Fast Paths** | Greenfield (full lifecycle from day one) vs. Brownfield (incremental verification-first rollout). | Informal task scoping; developer selects entry skill without mandatory slash command gates. | Formal Task-Shape Fitness Guide (scaled delivery, hotfix, spike, doc-only) with explicit skip rules. | Explicit fitness rubric matching task shapes to phase subsets; skipping phases must be deliberate, never accidental. |
| **4. Anti-Recommendations** | Anti-patterns catalog forbidding skipping specs for prototypes or skipping tests for CI green. | Avoids compaction mid-phase; preserves primary reasoning context. | Anti-recommendations where full lifecycle is overkill (typos, reverts, mechanical renames). | Clear policy defining exactly when the full lifecycle is overkill and which phases may be omitted. |
| **5. Boundary Decision Model** | Three-tier boundary system separating instruction, context, and tasks; boundary input validation. | Five-option decision tree at phase boundaries: Continue, `/clear`, `/handoff`, Subagent, or `/compact`. | Boundary protection and untrusted-content boundaries enforced via subagent inspection. | Formal phase boundary evaluation protocol governing context retention and session transitions. |
| **6. Orchestration Paradigm** | User-as-orchestrator; single-persona commands; parallel fan-out with merge; Agent Teams for debate. | Conversational pair programming; human steering; subagent delegation for AFK tasks. | Orchestrator agent dispatching gated subagents sequentially with automated milestone gates. | Multi-tier orchestration: direct invocation for simple tasks, parallel fan-out for reviews, user-driven pipeline for SDLC. |
| **7. Iteration Bounds & Loops** | Inner TDD red-green-refactor loop; verification loop; loop engineering rules. | Red-green-refactor loop; human-in-the-loop scripts; diagnostic differential loops. | Self-audit round cap (hard stop at 3 rounds); closed-loop execution; anti-infinite-loop bounds. | Mandatory 3-round cap on automated review/fix loops; hard stop escalating to human developer upon failure. |
| **8. Dependency DAG Execution** | Topological sorting of task dependency graphs; vertical slicing; Shift Left validation. | Linear ticket lists with prerequisite tracking. | Directed acyclic decision sequences; automated workflow acyclicity validation. | Acyclic dependency graph construction during planning; tasks executed in topological dependency order. |

---

## Concordance Rows

## 1. Standard End-to-End Lifecycle Execution Pipelines

### sequencing-pipeline-standard-feature-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Sequential pipeline as user-driven slash commands` | `workflows/*.md` | `Standard Feature Workflow` |
| **card** | [sequential-pipeline-as-user-driven-slash-commands](../concepts/addy/sequential-pipeline-as-user-driven-slash-commands.md) | [workflows-md](../concepts/matt/workflows-md.md) | [standard-feature-workflow](../concepts/rjm/standard-feature-workflow.md) |
| **kind** | pattern | name-only | pattern |
| **phase** | `cross-phase` | `matt:in-progress` | `cross-phase` |
| **produces** | Systematic phase-by-phase progression through the software development lifecycle with explicit human quality checkpoints | none | Fully specified, planned, test-driven, quality-verified, and reviewed code opened as a pull request. |
| **consumes** | Phase artifacts, human developer judgment and decisions, sequential lifecycle slash commands (/spec, /plan, /build, /test, /review, /ship) | none | New feature requests, multi-file changes, or non-trivial engineering requirements. |
| **impl status** | clean | clean | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy defines sequential user-driven slash commands (/spec -> /plan -> /build -> /test -> /review -> /ship in references/orchestration-patterns.md:80), RJM defines the Standard Feature Workflow (/spec -> /plan -> /build -> /test -> /review -> /ship in docs/workflow-commands.md:17), while Matt structures development around composable engineering workflows (workflows/*.md). All three enforce sequential progression from requirements to shipping.
- **sequencing note:** The primary macro execution sequence for non-trivial features across all packages.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-macro-lifecycle-sequence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Lifecycle Sequence` | `General workflow tools` | `Lifecycle commands` |
| **card** | [lifecycle-sequence](../concepts/addy/lifecycle-sequence.md) | [general-workflow-tools](../concepts/matt/general-workflow-tools.md) | [lifecycle-commands](../concepts/rjm/lifecycle-commands.md) |
| **kind** | pattern | name-only | pattern |
| **phase** | `cross-phase` | `matt:Productivity` | `cross-phase` |
| **produces** | Chronologically ordered skill execution pipeline (interview-me through shipping-and-launch). | none | Chained lifecycle phase execution spanning requirements specification through branch shipping. |
| **consumes** | Complete feature development lifecycle from ideation to production deployment. | none | Feature requests, issue specifications, code diffs, test outputs, and pull requests. |
| **impl status** | defects: cross-file-contradiction, internal-contradiction, doc-drift | clean | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy establishes the canonical Lifecycle Sequence (skills/using-agent-skills/SKILL.md:14), RJM defines the six Lifecycle Commands (.claude/commands/ in README.md:543), and Matt organizes daily engineering around General Workflow Tools (README.md:218). Addy and RJM share the six-phase pipeline; Matt uses conversation-first skills without slash commands.
- **sequencing note:** Establishes stage order and toolchain invocation progression.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-spec-plan-build-core

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `spec -> plan -> build pipeline` | — | `Pipeline Standards` |
| **card** | [spec-plan-build-pipeline](../concepts/addy/spec-plan-build-pipeline.md) | — | [pipeline-standards](../concepts/rjm/pipeline-standards.md) |
| **kind** | pattern | — | pattern |
| **phase** | `cross-phase` | — | `rjm:build` |
| **produces** | SPEC.md, tasks/plan.md, tasks/todo.md, implemented code changes | — | Standardized, secure pipeline definitions using pinned action commit SHAs, composite actions, matrix builds, and artifact caching. |
| **consumes** | Product specifications, requirements, architecture decisions | — | Workflow definition files (`.github/workflows/*.yml`), action dependencies, and build scripts. |
| **impl status** | clean | — | defects: missing-path |

- **class:** ALIGNED
- **difference:** Addy explicitly formalizes the core spec -> plan -> build pipeline (skills/spec-driven-development/SKILL.md:40), matching RJM's Pipeline Standards (docs/workflow-commands.md:12). Matt shares the sequence implicitly (explore -> to-spec -> to-tickets -> implement) but without a dedicated pipeline concept card.
- **sequencing note:** Governs the constructive front-half of the development lifecycle before testing and review.
- **needs decision:** no
- **decision:** —

### sequencing-pipeline-full-lifecycle-order

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Full Lifecycle` | — | `DEFAULT_WORKFLOWS` |
| **card** | [full-lifecycle](../concepts/addy/full-lifecycle.md) | — | [default-workflows](../concepts/rjm/default-workflows.md) |
| **kind** | pattern | — | name-only |
| **phase** | `cross-phase` | — | `none` |
| **produces** | End-to-end disciplined development flow spanning Define, Plan, Build, Verify, Review, and Ship phases. | — | none |
| **consumes** | Project requirements spanning initial specification through production deployment. | — | none |
| **impl status** | clean | — | defects: doc-drift, orphan |

- **class:** ALIGNED
- **difference:** Addy defines the Full Lifecycle execution path (docs/adoption-guide.md:24) matching RJM's DEFAULT_WORKFLOWS registry (.claude/commands/plan.md:12). Both govern the complete sequence of gated development phases.
- **sequencing note:** Governs the end-to-end execution of greenfield and major feature work.
- **needs decision:** no
- **decision:** —

### sequencing-pipeline-lifecycle-concept

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `lifecycle` | — | `Workflows` |
| **card** | [lifecycle](../concepts/addy/lifecycle.md) | — | [workflows](../concepts/rjm/workflows.md) |
| **kind** | pattern | — | name-only |
| **phase** | `cross-phase` | — | `none` |
| **produces** | End-to-end development workflow from requirements to production launch. | — | none |
| **consumes** | All project phases and skills. | — | none |
| **impl status** | defects: doc-drift | — | defects: internal-contradiction, missing-path |

- **class:** SYNONYM
- **difference:** Addy defines the software development lifecycle concept (README.md:5) as a series of disciplined engineering phases, corresponding to RJM's Workflows construct (docs/workflow-commands.md:14).
- **sequencing note:** Underpins lifecycle phase progression across the repository.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-the-lifecycle-meta

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The lifecycle` | — | — |
| **card** | [the-lifecycle](../concepts/addy/the-lifecycle.md) | — | — |
| **kind** | name-only | — | — |
| **phase** | `none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy names 'The lifecycle' in documentation (README.md:24) as the complete conceptual continuum from idea to production launch. Matt and RJM implement the pipeline without this specific heading.
- **sequencing note:** High-level conceptual frame for Addy's skill suite.
- **needs decision:** no
- **decision:** —

### sequencing-pipeline-lifecycle-mapping

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Lifecycle Mapping` | — | — |
| **card** | [lifecycle-mapping](../concepts/addy/lifecycle-mapping.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Direct association of lifecycle phases (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) to corresponding skill workflows. | — | — |
| **consumes** | Developer requests categorized by lifecycle stage. | — | — |
| **impl status** | defects: [missing-path] in docs/opencode-setup.md | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Lifecycle Mapping (skills/using-agent-skills/SKILL.md:28) to route arbitrary incoming developer requests to the appropriate lifecycle phase and skill.
- **sequencing note:** Acts as the entry router before any lifecycle phase is invoked.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-lifecycle-mapping-implicit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Lifecycle Mapping (Implicit Commands)` | — | — |
| **card** | [lifecycle-mapping-implicit-commands](../concepts/addy/lifecycle-mapping-implicit-commands.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Sequential execution of corresponding lifecycle skills (e.g. `spec-driven-development`, `planning-and-task-breakdown`). | — | — |
| **consumes** | User task state and the six-stage product lifecycle model. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines implicit command mapping where natural language phrases automatically trigger lifecycle slash commands without explicit /command syntax (skills/using-agent-skills/SKILL.md:35).
- **sequencing note:** Pre-execution intent routing step.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-command-vs-agent-driven

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Command-driven workflow` | — | — |
| **card** | [command-driven-workflow](../concepts/addy/command-driven-workflow.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Deterministic execution of the corresponding phase workflow. | — | — |
| **consumes** | Explicit developer command invocation (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`). | — | — |
| **impl status** | defects: [missing-path] in docs/opencode-setup.md regarding .opencode/commands/ missing on main | — | — |

- **class:** UNIQUE
- **difference:** Addy contrasts Command-driven workflow (explicit developer slash commands) with autonomous agent loops (skills/using-agent-skills/SKILL.md:52).
- **sequencing note:** Governs the control mechanism across all lifecycle phases.
- **needs decision:** yes
- **decision:** —

### sequencing-pipeline-agent-driven-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Agent-driven workflow` | — | — |
| **card** | [agent-driven-workflow](../concepts/addy/agent-driven-workflow.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Automatic skill selection and workflow execution without manual slash command invocations. | — | — |
| **consumes** | User intent in conversation and project `AGENTS.md` instructions. | — | — |
| **impl status** | defects: [missing-path] in docs/opencode-setup.md regarding per-skill installs and command directory | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Agent-driven workflow where subagents autonomously progress through multi-step tasks under strict quality constraints (skills/using-agent-skills/SKILL.md:65).
- **sequencing note:** Autonomous execution alternative to manual command-by-command progression.
- **needs decision:** yes
- **decision:** —


## 2. Phase Precedence, Prerequisites & Front-Gates

### sequencing-precedence-front-gate-prerequisite

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The Gated Workflow` | `Prerequisite` | `front-gate-before-pipeline` |
| **card** | [the-gated-workflow](../concepts/addy/the-gated-workflow.md) | [prerequisite](../concepts/matt/prerequisite.md) | [front-gate-before-pipeline](../concepts/rjm/front-gate-before-pipeline.md) |
| **kind** | pattern | technique | pattern |
| **phase** | `addy:Define` | `matt:in-progress` | `cross-phase` |
| **produces** | Sequence of validated deliverables: capability map, module specification, plan, task list, and code. | The initial grounded concept set used to validate candidate starting beats or article openings. | Go/no-go determination halting pipelines lacking demonstrable consumer demand. |
| **consumes** | Initial feature request, bug report, or architectural change description. | Author agreement on audience baseline knowledge prior to generating beats or paragraphs. | Pipeline trigger requests and raw candidate inputs across planning, research, and data synthesis workflows. |
| **impl status** | defects: doc-drift | clean | defects: doc-drift, missing-path |

- **class:** SYNONYM
- **difference:** RJM formalizes the 'front-gate-before-pipeline' pattern (.claude/commands/plan.md:15), requiring /spec output before /plan can execute. Matt defines Prerequisite (skills/engineering/implement/SKILL.md:18) where tickets require prior architectural decisions. Addy defines The Gated Workflow (README.md:222) requiring verified phase exit artifacts.
- **sequencing note:** Strictly enforces that specification must precede planning, and planning must precede building.
- **needs decision:** yes
- **decision:** —

### sequencing-precedence-prerequisites-pattern

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Prerequisites` | `Front-gate` |
| **card** | — | [prerequisites](../concepts/matt/prerequisites.md) | [front-gate](../concepts/rjm/front-gate.md) |
| **kind** | — | pattern | gate |
| **phase** | — | `cross-phase` | `cross-phase` |
| **produces** | — | Explicit disclosure of necessary environmental setup or lazy-creation behavior in documentation. | Gate pass/fail decision confirming a named blocked user, documented status quo, and concrete observation. |
| **consumes** | — | Workspace requirements, tracker configurations, or prior skill outputs. | Raw idea, feature request, or uncurated capture material. |
| **impl status** | — | defects: missing-path, doc-drift, orphan | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Matt defines Prerequisites pattern (skills/engineering/to-tickets/SKILL.md:22) where work items cannot be scheduled until blocking dependencies are complete. RJM defines front-gate (.claude/commands/plan.md:18) as the entry assertion for planning.
- **sequencing note:** Blocks phase entry until prerequisite artifacts are committed to disk.
- **needs decision:** yes
- **decision:** —

### sequencing-precedence-quality-gate-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `quality-gate pipelines` | — | — |
| **card** | [quality-gate-pipelines](../concepts/addy/quality-gate-pipelines.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Automated gate validation checks and pass/fail enforcement in CI/CD pipelines before merge or deployment. | — | — |
| **consumes** | Automated test suites, static analysis linters, security audit scanners, and build configurations. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** SYNONYM
- **difference:** Addy defines quality-gate pipelines (skills/ci-cd-and-automation/SKILL.md:12) enforcing verification checks between lifecycle stages. RJM defines fast-stage-gate (.agents/architecture/ADR-064:42) enforcing rapid pass/fail checks between phases.
- **sequencing note:** Executes at the transition boundary between every lifecycle phase.
- **needs decision:** yes
- **decision:** —

### sequencing-precedence-quality-gate-pipeline-singular

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Quality Gate Pipeline` | — | — |
| **card** | [quality-gate-pipeline](../concepts/addy/quality-gate-pipeline.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Automated verification verdict determining if a pull request is ready for review and merge. | — | — |
| **consumes** | Pull request or committed code changes, test suites, linter and type checker configurations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Quality Gate Pipeline as a formal CI/CD gate structure (skills/ci-cd-and-automation/SKILL.md:45).
- **sequencing note:** Post-build automated verification pipeline.
- **needs decision:** no
- **decision:** —

### sequencing-precedence-full-pipeline-staleness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Full pipeline staleness` |
| **card** | — | — | [full-pipeline-staleness](../concepts/rjm/full-pipeline-staleness.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | Verification verdict from `build/scripts/build_all.py --check`. |
| **consumes** | — | — | Entire canonical repository state and derived prefixes (`src/`, `.github/instructions/`, `docs/agent-catalog.md`). |
| **impl status** | — | — | defects: unfailable-gate, doc-drift |

- **class:** UNIQUE
- **difference:** RJM defines Full pipeline staleness (.agents/architecture/ADR-064:55) where changes to upstream artifacts (spec or plan) invalidate downstream implementation and test artifacts, requiring a full pipeline rerun.
- **sequencing note:** Triggers backward invalidation and pipeline re-execution upon upstream modification.
- **needs decision:** yes
- **decision:** —


## 3. Task-Shape Fitness, Fast-Tracks & Skip Rules

### sequencing-fitness-when-to-use-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `When to use` | `Explicit scope boundaries` | `When to Use` |
| **card** | [when-to-use](../concepts/addy/when-to-use.md) | [explicit-scope-boundaries](../concepts/matt/explicit-scope-boundaries.md) | [when-to-use](../concepts/rjm/when-to-use.md) |
| **kind** | name-only | pattern | name-only |
| **phase** | `none` | `cross-phase` | `cross-phase` |
| **produces** | none | An explicit out-of-scope section within an agent brief comment. | none |
| **consumes** | none | Adjacent features, prospective refactors, and non-essential enhancements identified during triage. | none |
| **impl status** | defects: [doc-drift, internal-contradiction] (docs/skill-anatomy.md notes section rigidity contradictions; external documentation displays trigger drift) | defects: doc-drift | defects: doc-drift, missing-path (from .claude/skills/github-url-intercept/SKILL.md script directory drift and missing relative links; .claude/skills/research-and-incorporate/SKILL.md memory tag drift and missing front-gate skill path) |

- **class:** SYNONYM
- **difference:** RJM provides an explicit Fitness Guide in docs/when-to-use.md:1 mapping eight task shapes to the six lifecycle commands (scaled delivery, compliance, bug mitigation, hotfix, generated artifact, spike, doc-only, context black hole). Addy provides 'When to use' guidance in README.md:228 and skills/using-agent-skills/SKILL.md:18. Matt defines explicit scope boundaries in skills/engineering/triage/SKILL.md:24.
- **sequencing note:** Evaluated before any command is run to select the minimal sufficient subset of lifecycle phases.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-quick-fix-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `five-step triage` | `triage roles` | `Quick Fix Workflow` |
| **card** | [five-step-triage](../concepts/addy/five-step-triage.md) | [triage-roles](../concepts/matt/triage-roles.md) | [quick-fix-workflow](../concepts/rjm/quick-fix-workflow.md) |
| **kind** | technique | role | pattern |
| **phase** | `cross-phase` | `matt:Triage` | `cross-phase` |
| **produces** | Reproduction case, localized root cause, minimal reproduction, bug fix, and regression guard test. | A structured issue classification assigning exactly one category role and exactly one state role to each triaged item. | Rapid three-step remediation sequence bypassing specification and planning phases. |
| **consumes** | Bug report, failing test, error log, or anomalous behavior. | Untriaged issues, external bug reports, or incoming pull requests landing from outside contributors. | Localized bug fix descriptions with known root causes and small blast radii. |
| **impl status** | clean | defects: doc-drift, script-bug, other (from docs-engineering-triage-md.md: setup-matt-pocock-skills writes label vocabulary to docs/agents/triage-labels.md but fails to create tracker labels via CLI; the five-state machine lacks states for blocked... | defects: doc-drift |

- **class:** SYNONYM
- **difference:** RJM defines Quick Fix Workflow (docs/workflow-commands.md:26) executing /build -> /test -> /ship (bypassing /spec and /plan for localized hotfixes with clear root causes). Addy provides five-step triage in skills/debugging-and-error-recovery/SKILL.md:15 (reproduce -> localize -> reduce -> fix -> guard). Matt handles rapid defect triage via triage roles in skills/engineering/triage/SKILL.md:12.
- **sequencing note:** Fast-path execution pipeline for defect resolution and small bugfixes.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-research-first-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `grilling loop` | `Research-First Workflow` |
| **card** | — | [grilling-loop](../concepts/matt/grilling-loop.md) | [research-first-workflow](../concepts/rjm/research-first-workflow.md) |
| **kind** | — | technique | pattern |
| **phase** | — | `cross-phase` | `cross-phase` |
| **produces** | — | Refined architectural decisions, updated domain terms in `CONTEXT.md`, and new or updated ADRs. | Structured requirements specification and exploratory milestone plan without code implementation. |
| **consumes** | — | A candidate chosen by the user from the HTML report. | An open question, architectural trade-off, or spike investigation request. |
| **impl status** | — | clean | defects: doc-drift |

- **class:** SYNONYM
- **difference:** RJM defines Research-First Workflow (docs/workflow-commands.md:34) running /spec -> /plan without implementation to investigate exploratory spikes. Matt achieves exploratory spikes via the grilling loop in skills/productivity/grilling/SKILL.md:18.
- **sequencing note:** Terminates after planning without proceeding to build, test, or ship.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-triage-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Triage role` | `Triage first` |
| **card** | — | [triage-role](../concepts/matt/triage-role.md) | [triage-first](../concepts/rjm/triage-first.md) |
| **kind** | — | role | pattern |
| **phase** | — | `matt:Triage` | `rjm:coordinator` |
| **produces** | — | A canonical role designation mapped to concrete issue tracker labels. | Three-dimensional classification profile: Complexity tier (Cynefin), Scope (single/multi-step/cross-domain), and Urgency (P0-P3). |
| **consumes** | — | An issue in an issue tracker undergoing evaluation. | User requests, issue reports, or system goals. |
| **impl status** | — | defects: missing-path, other (CONTEXT.md cites non-existent docs/agents/triage-labels.md path) | defects: missing-path, doc-drift |

- **class:** SYNONYM
- **difference:** RJM defines 'Triage first' (docs/workflow-commands.md:42) requiring issue classification and blast-radius estimation before deciding whether to run the full lifecycle or the quick-fix path. Matt provides Triage role (skills/engineering/triage/SKILL.md:30).
- **sequencing note:** Front-end gate determining pipeline routing.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-needs-triage-label

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `needs-triage` | `Skill-Triage-002` |
| **card** | — | [needs-triage](../concepts/matt/needs-triage.md) | [skill-triage-002](../concepts/rjm/skill-triage-002.md) |
| **kind** | — | role | name-only |
| **phase** | — | `matt:Triage` | `none` |
| **produces** | — | Initial status marker prioritizing the issue for evaluation by maintainers. | none |
| **consumes** | — | Newly created or unlabelled issues submitted to an issue tracker. | none |
| **impl status** | — | clean | defects: missing-path |

- **class:** SYNONYM
- **difference:** Matt defines needs-triage issue state in skills/engineering/setup-matt-pocock-skills/triage-labels.md:12. RJM defines Skill-Triage-002 (.claude/skills/triage/SKILL.md:15) as the automated triage dispatch agent.
- **sequencing note:** Initial entry state for unclassified work items.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-triage-label-concept

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `triage-label` | — |
| **card** | — | [triage-label](../concepts/matt/triage-label.md) | — |
| **kind** | — | name-only | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines triage-label (skills/engineering/setup-matt-pocock-skills/triage-labels.md:20) for categorizing backlog items by complexity and subsystem.
- **sequencing note:** Issue tracker tagging during discovery phase.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-triage-labels-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `triage-labels.md` | — |
| **card** | — | [triage-labels-md](../concepts/matt/triage-labels-md.md) | — |
| **kind** | — | name-only | — |
| **phase** | — | `none` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | defects: missing-path, script-bug (CONTEXT.md cites non-existent file path; setup writes file but does not create labels in tracker per #616) | — |

- **class:** UNIQUE
- **difference:** Matt provides triage-labels.md (skills/engineering/setup-matt-pocock-skills/triage-labels.md:1) as the reference schema for issue categorization.
- **sequencing note:** Reference vocabulary for backlog management.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-triage-label-vocabulary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `triage label vocabulary` | — |
| **card** | — | [triage-label-vocabulary](../concepts/matt/triage-label-vocabulary.md) | — |
| **kind** | — | reference | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | Committed mapping table in `docs/agents/triage-labels.md` linking canonical roles to repository-specific label strings. | — |
| **consumes** | — | User selections during `/setup-matt-pocock-skills` or existing issue labels in the repository. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines triage label vocabulary (skills/engineering/setup-matt-pocock-skills/triage-labels.md:35) standardizing labels across repository issue trackers.
- **sequencing note:** Taxonomy standardization for issue tracking.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-triage-checklist

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The Triage Checklist` | — | — |
| **card** | [the-triage-checklist](../concepts/addy/the-triage-checklist.md) | — | — |
| **kind** | checklist | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Systematic defect remediation through ordered execution of reproduction, localization, reduction, root cause fixing, recurrence guarding, and verification. | — | — |
| **consumes** | Unresolved software bugs, test failures, build errors, or runtime anomalies. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines The Triage Checklist (skills/debugging-and-error-recovery/SKILL.md:45) for verifying bug reproduction before fix implementation.
- **sequencing note:** Pre-fix verification step during defect mitigation.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-runtime-error-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Runtime Error Triage` | — | — |
| **card** | [runtime-error-triage](../concepts/addy/runtime-error-triage.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Diagnosed root cause for runtime failures (null reference, network/CORS, render boundary failure, unexpected state) and targeted fix. | — | — |
| **consumes** | Runtime exception, stack trace, console error message, network error log, or component render failure. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Runtime Error Triage (skills/debugging-and-error-recovery/SKILL.md:58) specializing in production exception and stack trace analysis.
- **sequencing note:** Diagnostic step preceding code modification.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-build-failure-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Build Failure Triage` | — | — |
| **card** | [build-failure-triage](../concepts/addy/build-failure-triage.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Categorized build failure analysis (type error, import error, config error, dependency error, environment error) and localized fix. | — | — |
| **consumes** | Compiler errors, build log diagnostics, bundler failure outputs, and exit codes. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Build Failure Triage (skills/debugging-and-error-recovery/SKILL.md:72) for resolving compiler and typecheck failures during the build phase.
- **sequencing note:** Invoked upon build tool failure before test execution.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-test-failure-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Test Failure Triage` | — | — |
| **card** | [test-failure-triage](../concepts/addy/test-failure-triage.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Triage determination distinguishing whether the test is outdated, the code has a bug, unrelated changes caused a side effect, or the test is flaky. | — | — |
| **consumes** | Test failure report, diff of recent code changes, and test coverage mapping. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Test Failure Triage (skills/debugging-and-error-recovery/SKILL.md:86) for isolating failing assertions in automated test suites.
- **sequencing note:** Invoked upon test runner failure before review.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-skipping-rules-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SKIPS` | — | `_DEFAULT_SKIP_POLICY` |
| **card** | [skips](../concepts/addy/skips.md) | — | [default-skip-policy](../concepts/rjm/default-skip-policy.md) |
| **kind** | name-only | — | name-only |
| **phase** | `addy:Define` | — | `none` |
| **produces** | none | — | none |
| **consumes** | none | — | none |
| **impl status** | clean | — | defects: other |

- **class:** SYNONYM
- **difference:** Addy defines SKIPS policy in skills/constraint-driven-development/SKILL.md:32 to govern when checks may be bypassed. RJM defines _DEFAULT_SKIP_POLICY in .claude/commands/ship.md:45.
- **sequencing note:** Enforces audit logging and justification whenever a lifecycle gate is skipped.
- **needs decision:** yes
- **decision:** —

### sequencing-fitness-on-skip-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `--on-skip` |
| **card** | — | — | [on-skip](../concepts/rjm/on-skip.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift, script-bug |

- **class:** UNIQUE
- **difference:** RJM defines --on-skip CLI parameter (.claude/commands/test.md:52) controlling behavior when optional test gates are bypassed.
- **sequencing note:** Command-line execution modifier for test phases.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-skip-env

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_ENV` |
| **card** | — | — | [skip-env](../concepts/rjm/skip-env.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines SKIP_ENV environment variable (.claude/commands/build.md:64) allowing containerized environment verification to be bypassed in local dev.
- **sequencing note:** Environment configuration flag.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-skip-cache-reason

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skip_cache_reason` |
| **card** | — | — | [skip-cache-reason](../concepts/rjm/skip-cache-reason.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM defines skip_cache_reason (.claude/commands/test.md:78) logging why cached build artifacts were invalidated.
- **sequencing note:** Caching decision during test and build execution.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-write-skip-outputs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_write_skip_outputs` |
| **card** | — | — | [write-skip-outputs](../concepts/rjm/write-skip-outputs.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines _write_skip_outputs (.claude/commands/ship.md:88) writing stub verification reports when optional shipping checks are skipped.
- **sequencing note:** Maintains artifact continuity when steps are bypassed.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-missingscriptskip

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MissingScriptSkip` |
| **card** | — | — | [missingscriptskip](../concepts/rjm/missingscriptskip.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines MissingScriptSkip (.claude/commands/test.md:92) handling scenarios where a project lacks documented verification scripts.
- **sequencing note:** Graceful fallback during automated testing.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-skipping-tests-anti-pattern

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Skipping tests to pass CI` | — | — |
| **card** | [skipping-tests-to-pass-ci](../concepts/addy/skipping-tests-to-pass-ci.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Test` | — | — |
| **produces** | False-green CI builds that conceal regressions by bypassing failing test assertions. | — | — |
| **consumes** | Failing test suites, continuous integration pipeline runs, and build failures. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy identifies 'Skipping tests to pass CI' (skills/constraint-driven-development/SKILL.md:40) as an anti-pattern where agents comment out assertions or mark tests skipped to achieve green status.
- **sequencing note:** Strictly forbidden across all lifecycle phases.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-test-skip-syntax

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `test.skip` | — | — |
| **card** | [test-skip](../concepts/addy/test-skip.md) | — | — |
| **kind** | name-only | — | — |
| **phase** | `none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy documents test.skip syntax (skills/constraint-driven-development/SKILL.md:44) as an indicator of test suppression that requires justification.
- **sequencing note:** Monitored by pre-merge review gates.
- **needs decision:** no
- **decision:** —

### sequencing-fitness-skips-guarded-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `skips guarded files that do not exist` | — | — |
| **card** | [skips-guarded-files-that-do-not-exist](../concepts/addy/skips-guarded-files-that-do-not-exist.md) | — | — |
| **kind** | name-only | — | — |
| **phase** | `none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines safe skip behavior when a guarded configuration file is absent from the target project (skills/ci-cd-and-automation/SKILL.md:60).
- **sequencing note:** Conditional execution handling in workflow skills.
- **needs decision:** no
- **decision:** —


## 4. Anti-Recommendations & Overkill Bounds

### sequencing-overkill-anti-recommendations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `idea lifecycle` |
| **card** | — | — | [idea-lifecycle](../concepts/rjm/idea-lifecycle.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | Inspectable governance artifacts across each stage, culminating in calibrated gates, validated skills, or documented retirements. |
| **consumes** | — | — | Research hypotheses, contradictory observations, and initial empirical probes. |
| **impl status** | — | — | defects: missing-path |

- **class:** PARTIAL
- **difference:** RJM explicitly documents Anti-recommendations in docs/when-to-use.md:36 for when the full lifecycle is overkill: (1) Typo, comment, or single-line doc fixes; (2) Reverting known-bad commits; (3) Mechanical renames across files. Running /spec or /plan on these task shapes is counter-productive overhead.
- **sequencing note:** Provides clear boundaries where phases must be deliberately omitted.
- **needs decision:** yes
- **decision:** —


## 5. Greenfield vs. Brownfield Sequencing

### sequencing-adoption-greenfield-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Greenfield` | `greenfield build` | `BOOTSTRAP_ITERATIONS` |
| **card** | [greenfield](../concepts/addy/greenfield.md) | [greenfield-build](../concepts/matt/greenfield-build.md) | [bootstrap-iterations](../concepts/rjm/bootstrap-iterations.md) |
| **kind** | pattern | pattern | name-only |
| **phase** | `none` | `matt:shaping` | `none` |
| **produces** | Immediate day-one adoption of the full lifecycle (`/spec → /plan → /build → /review → /ship`). | A multi-session project plan decomposed into dependency graphs and tickets. | none |
| **consumes** | New repository, zero legacy code, and completely controllable test coverage. | A new product concept or large greenfield architectural vision. | none |
| **impl status** | clean | defects: orphan, doc-drift | clean |

- **class:** SYNONYM
- **difference:** Addy defines Path A (Greenfield: full lifecycle immediately, docs/adoption-guide.md:20) for brand new repositories where gates cost nothing and compound. Matt defines greenfield build in skills/engineering/codebase-design/SKILL.md:30. RJM supports bootstrap iterations for initial project creation (docs/workflow-commands.md:50).
- **sequencing note:** Establishes day-one full lifecycle enforcement on new projects.
- **needs decision:** yes
- **decision:** —

### sequencing-adoption-greenfield-full-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Full lifecycle, immediately` | — | — |
| **card** | [full-lifecycle-immediately](../concepts/addy/full-lifecycle-immediately.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `none` | — | — |
| **produces** | End-to-end execution of `/spec`, `/plan`, `/build`, `/review`, and `/ship` across all tasks. | — | — |
| **consumes** | Greenfield project conditions with clean history and controllable test coverage. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines 'Full lifecycle, immediately' (docs/adoption-guide.md:22) as the specific operational rule for greenfield repositories.
- **sequencing note:** Applies from commit zero in new codebases.
- **needs decision:** no
- **decision:** —

### sequencing-adoption-brownfield-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Brownfield` | `Brownfield audit` | — |
| **card** | [brownfield](../concepts/addy/brownfield.md) | [brownfield-audit](../concepts/matt/brownfield-audit.md) | — |
| **kind** | pattern | pattern | — |
| **phase** | `none` | `matt:Upkeep` | — |
| **produces** | Staged four-phase adoption roadmap prioritizing safety nets and characterization tests before code changes. | An architectural survey report exposing real boundaries, dependencies, and deepening opportunities across the codebase. | — |
| **consumes** | Established codebase with legacy behavior, uneven test coverage, and undocumented conventions. | A large, unstructured, legacy, or vibe-coded repository. | — |
| **impl status** | clean | defects: doc-drift (external/improve-codebase-architecture.md:64), doc-drift (external/improve-codebase-architecture.md:50), missing-path (external/improve-codebase-architecture.md:66), orphan (external/improve-codebase-architecture.md:1) | — |

- **class:** ALIGNED
- **difference:** Addy defines Path B (Brownfield: incremental, verification-first, docs/adoption-guide.md:73) progressing in four phases: (1) Context & read-only skills; (2) Tests before change; (3) New features get greenfield treatment; (4) Pay down debt & observe. Matt defines brownfield audit in skills/engineering/improve-codebase-architecture/SKILL.md:24.
- **sequencing note:** Two-speed lifecycle execution model for established codebases.
- **needs decision:** no
- **decision:** —


## 6. Phase Boundaries & Context Transitions

### sequencing-boundary-decision-model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `three-tier boundary system` | `Phase boundaries` | `Boundary Protection` |
| **card** | [three-tier-boundary-system](../concepts/addy/three-tier-boundary-system.md) | [phase-boundaries](../concepts/matt/phase-boundaries.md) | [boundary-protection](../concepts/rjm/boundary-protection.md) |
| **kind** | pattern | pattern | technique |
| **phase** | `addy:Review` | `matt:ask-matt` | `cross-phase` |
| **produces** | Strict security decision boundaries dividing automatic actions from human-gated actions and hard blocks. | A transition action selected from Continue, /clear, /handoff, Subagent, or /compact | Leak-free architectural boundaries and decoupled subsystem interfaces. |
| **consumes** | System boundaries, external inputs, authorization checks, and agent operations. | An active agent session concluding a distinct chunk of work (grilling, spec, tickets, implementation, QA) | Architectural layer interfaces and component boundaries. |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Matt defines the Phase Boundaries decision model (skills/engineering/ask-matt/PHASE-BOUNDARIES.md:1) with a strict five-option decision tree evaluated at boundary points: (1) Continue in session; (2) /clear; (3) /handoff; (4) Subagent; (5) /compact. Addy defines three-tier boundary system in skills/using-agent-skills/SKILL.md:40. RJM defines boundary protection in .agents/architecture/ADR-064:30.
- **sequencing note:** Evaluated strictly at the completion of a logical phase before deciding context retention.
- **needs decision:** yes
- **decision:** —

### sequencing-boundary-phase-boundary-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `boundaries` | `phase boundary` | `Boundary translation` |
| **card** | [boundaries](../concepts/addy/boundaries.md) | [phase-boundary](../concepts/matt/phase-boundary.md) | [boundary-translation](../concepts/rjm/boundary-translation.md) |
| **kind** | pattern | gate | pattern |
| **phase** | `addy:Define` | `cross-phase` | `rjm:review` |
| **produces** | The Boundaries section of SPEC.md specifying rules across Always do, Ask first, and Never do tiers | A decision selecting one of five context moves: Continue, /clear, /handoff, Subagent, or /compact. | Sanitized user-facing errors or external status codes while preserving raw internal error telemetry in diagnostic traces. |
| **consumes** | Project engineering policies, security standards, team conventions, and human constraints | Completion of a lifecycle phase (e.g. grilling, prototyping, or ticket implementation). | Internal exceptions, technical stack traces, domain error definitions, and boundary mapping schemas. |
| **impl status** | clean | clean | defects: other |

- **class:** SYNONYM
- **difference:** Matt defines 'phase boundary' (skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5) as the gap between two phases where context switching belongs. Addy defines boundaries in skills/using-agent-skills/SKILL.md:44. RJM defines boundary translation in .agents/architecture/ADR-064:35.
- **sequencing note:** The explicit demarcation point between adjacent lifecycle stages.
- **needs decision:** yes
- **decision:** —

### sequencing-boundary-trigger-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Trigger boundary` | — |
| **card** | — | [trigger-boundary](../concepts/matt/trigger-boundary.md) | — |
| **kind** | — | pattern | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | Crisp trigger definitions that guide tool selection and prevent overlap between adjacent skills. | — |
| **consumes** | — | Situational criteria, task profiles, and distinctions between sibling skills. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines Trigger boundary (skills/engineering/ask-matt/PHASE-BOUNDARIES.md:18) as the threshold condition that initiates a phase transition.
- **sequencing note:** Event that marks phase completion and triggers boundary evaluation.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-content-markers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Content Boundary Markers` | — | — |
| **card** | [content-boundary-markers](../concepts/addy/content-boundary-markers.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Explicitly demarcated context boundaries separating trusted instructions from untrusted browser output. | — | — |
| **consumes** | User prompts, project code, browser observation data (DOM, console, network payloads). | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Content Boundary Markers (skills/context-engineering/SKILL.md:32) as visual delimiter tokens separating system instructions, context files, and task briefs.
- **sequencing note:** Preserves prompt structure and prevents context contamination.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-trust-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Trust boundaries` | — | `Untrusted-content boundary` |
| **card** | [trust-boundaries](../concepts/addy/trust-boundaries.md) | — | [untrusted-content-boundary](../concepts/rjm/untrusted-content-boundary.md) |
| **kind** | pattern | — | gate |
| **phase** | `addy:Review` | — | `cross-phase` |
| **produces** | Mapped demarcation points separating trusted execution environments from untrusted external data. | — | Sanitized evaluation that isolates external text from system prompt directives and execution logic. |
| **consumes** | System architecture diagrams, network topologies, API endpoints, and data flows. | — | External content returned by tools, including issues, PR comments, web pages, code files, and memory notes. |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines Trust boundaries (skills/security-and-hardening/SKILL.md:18) separating trusted internal execution from untrusted inputs. RJM defines Untrusted-content boundary in .claude/commands/spec.md:88.
- **sequencing note:** Enforced during spec and review phases to evaluate attack surfaces.
- **needs decision:** yes
- **decision:** —

### sequencing-boundary-security-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Security Boundaries` | — | — |
| **card** | [security-boundaries](../concepts/addy/security-boundaries.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Security containment policies preventing credential leakage and prompt injection exploitation. | — | — |
| **consumes** | Browser connection options, untrusted web content, agent execution capabilities. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Security Boundaries (skills/security-and-hardening/SKILL.md:25) governing permission isolation between agent execution tools.
- **sequencing note:** Tool authorization boundary during build and test.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-boundary-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `boundary validation` | — | — |
| **card** | [boundary-validation](../concepts/addy/boundary-validation.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Validated data structures or explicit semantic rejection errors at interface boundaries. | — | — |
| **consumes** | Input data, schema definitions, and type contracts. | — | — |
| **impl status** | defects: doc-drift, orphan | — | — |

- **class:** UNIQUE
- **difference:** Addy defines boundary validation (skills/api-and-interface-design/SKILL.md:22) checking schema contracts and invariants at system interfaces.
- **sequencing note:** Pre-condition and post-condition assertions between components.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-validate-at-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Validate at Boundaries` | — | — |
| **card** | [validate-at-boundaries](../concepts/addy/validate-at-boundaries.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Validated, type-safe data objects passed into internal application services. | — | — |
| **consumes** | External request bodies, user form submissions, third-party API payloads, environment variables. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines 'Validate at Boundaries' (skills/api-and-interface-design/SKILL.md:28) as the design principle requiring input validation at the edge rather than deep in domain logic.
- **sequencing note:** API and interface design rule.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-mock-at-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Mock at Boundaries Only` | — | — |
| **card** | [mock-at-boundaries-only](../concepts/addy/mock-at-boundaries-only.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Test` | — | — |
| **produces** | Test isolation boundaries that mock database calls, HTTP requests, filesystem operations, and external APIs while preserving business logic execution. | — | — |
| **consumes** | Architectural taxonomy of system components separating I/O boundaries from pure internal logic. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines 'Mock at Boundaries Only' (references/testing-patterns.md:40) forbidding internal mock objects and restricting test doubles to external I/O boundaries.
- **sequencing note:** Testing discipline applied during TDD build phase.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-installation-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `installation boundary` | — | — |
| **card** | [installation-boundary](../concepts/addy/installation-boundary.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Identified authoritative root directory governing dependency resolution and lifecycle script execution. | — | — |
| **consumes** | Monorepo directory layout, workspace configurations, package manifests, and lockfiles. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines installation boundary (docs/getting-started.md:15) separating plugin repository contents from the user workspace.
- **sequencing note:** Plugin distribution and isolation boundary.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-system-boundaries-matt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `system boundaries` | — |
| **card** | — | [system-boundaries](../concepts/matt/system-boundaries.md) | — |
| **kind** | — | pattern | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Architectural boundary definitions separating internal modules from third-party or external services. | — |
| **consumes** | — | System architecture and external dependencies. | — |
| **impl status** | — | clean (in skills/engineering/tdd/mocking.md; external documentation notes doc-drift and orphan status) | — |

- **class:** UNIQUE
- **difference:** Matt defines system boundaries in skills/engineering/domain-modeling/SKILL.md:24 for identifying bounded contexts and domain separation.
- **sequencing note:** Domain modeling step during specification phase.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-public-boundary-matt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `public boundary` | — |
| **card** | — | [public-boundary](../concepts/matt/public-boundary.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | Decoupled, durable test cases positioned at component boundaries. | — |
| **consumes** | — | Module interfaces, API definitions, or public behavioral contracts. | — |
| **impl status** | — | defects: orphan, doc-drift, cross-file-contradiction, other | — |

- **class:** UNIQUE
- **difference:** Matt defines public boundary in skills/engineering/implement/SKILL.md:38 for distinguishing exported public APIs from private implementation details.
- **sequencing note:** Implementation constraint governing test seams.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-entrypoint-across-packages

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `entrypoint-boundary-across-packages` | — |
| **card** | — | [entrypoint-boundary-across-packages](../concepts/matt/entrypoint-boundary-across-packages.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | Linter error if any package imports internal files from another package. | — |
| **consumes** | — | Import statements between different packages within the repository. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines entrypoint-boundary-across-packages in skills/engineering/codebase-design/SKILL.md:44 governing package exports in monorepos.
- **sequencing note:** Architectural boundary check.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-entry-point-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Entry-point boundary` | — |
| **card** | — | [entry-point-boundary](../concepts/matt/entry-point-boundary.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | Validation error preventing external code from bypassing root entry points. | — |
| **consumes** | — | All external import statements targeting package directories. | — |
| **impl status** | — | defects: doc-drift | — |

- **class:** UNIQUE
- **difference:** Matt defines Entry-point boundary in skills/engineering/codebase-design/SKILL.md:52 restricting direct imports to declared package entrypoints.
- **sequencing note:** Module import boundary check.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-entrypoint-from-app

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `entrypoint-boundary-from-app` | — |
| **card** | — | [entrypoint-boundary-from-app](../concepts/matt/entrypoint-boundary-from-app.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | Linter error if application or root code imports files from package subfolders. | — |
| **consumes** | — | Import statements originating from outside any package. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines entrypoint-boundary-from-app in skills/engineering/codebase-design/SKILL.md:60 preventing application code from reaching into package internals.
- **sequencing note:** Application architecture lint.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-lint-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `lint:boundaries` | — |
| **card** | — | [lint-boundaries](../concepts/matt/lint-boundaries.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | Exit code 0 on clean boundaries or non-zero failure upon deep import violations. | — |
| **consumes** | — | `dependency-cruiser` CLI and `.dependency-cruiser.cjs` configuration. | — |
| **impl status** | — | defects: doc-drift | — |

- **class:** UNIQUE
- **difference:** Matt defines lint:boundaries script command in skills/engineering/codebase-design/SKILL.md:75 to automatically verify architectural dependency boundaries.
- **sequencing note:** Automated gate run during build and verification.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-boundary-note-rjm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `boundary_note` |
| **card** | — | — | [boundary-note](../concepts/rjm/boundary-note.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: unimplemented-feature |

- **class:** UNIQUE
- **difference:** RJM defines boundary_note in .agents/architecture/ADR-064:48 documenting cross-cutting dependencies that touch architectural boundaries.
- **sequencing note:** Architectural decision documentation requirement.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-ai-agents-codebase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundaries with the ai-agents Codebase` |
| **card** | — | — | [boundaries-with-the-ai-agents-codebase](../concepts/rjm/boundaries-with-the-ai-agents-codebase.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines Boundaries with the ai-agents Codebase (docs/workflow-commands.md:65) establishing strict separation between the lifecycle engine and repository-specific scripts.
- **sequencing note:** Harness isolation boundary.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-guardian-rjm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundary guardian` |
| **card** | — | — | [boundary-guardian](../concepts/rjm/boundary-guardian.md) |
| **kind** | — | — | role |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Architectural review verdicts, boundary approval, or refactoring guidance. |
| **consumes** | — | — | Proposed boundary changes, reverse-import remediations, leaky-type refactorings, architectural PRs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines Boundary guardian persona (.agents/architecture/ADR-064:60) auditing PRs for unintended violations of architectural seams.
- **sequencing note:** Review phase subagent persona.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-autoplan-router

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Autoplan and Orchestrator Router Boundary` |
| **card** | — | — | [autoplan-and-orchestrator-router-boundary](../concepts/rjm/autoplan-and-orchestrator-router-boundary.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Clear architectural separation: autoplan handles initial skill-level routing; orchestrator coordinates multi-agent, multi-domain task execution. |
| **consumes** | — | — | User request inputs, skill catalog, multi-agent coordination requirements. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM defines Autoplan and Orchestrator Router Boundary (.claude/commands/plan.md:38) separating automated task planning from subagent task dispatch.
- **sequencing note:** Execution boundary between plan decomposition and execution.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-refactoring-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Refactoring Boundaries` |
| **card** | — | — | [refactoring-boundaries](../concepts/rjm/refactoring-boundaries.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Explicit scoping decisions determining whether to refactor inline or file a separate technical debt issue. |
| **consumes** | — | — | Opportunities for code improvement encountered while implementing a task. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** RJM defines Refactoring Boundaries (docs/workflow-commands.md:72) limiting mechanical code restructuring to behavior-preserving transformations with green tests.
- **sequencing note:** Execution constraint during refactoring and build.
- **needs decision:** no
- **decision:** —

### sequencing-boundary-matt-slug

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `boundary` | — |
| **card** | — | [boundary](../concepts/matt/boundary.md) | — |
| **kind** | — | name-only | — |
| **phase** | — | `none` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines boundary as a general architectural concept in skills/engineering/codebase-design/SKILL.md:22.
- **sequencing note:** Foundational design concept.
- **needs decision:** no
- **decision:** —


## 7. Artifact-Based Phase Handoffs & Portability

### sequencing-handoff-syntax-and-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `The /handoff Skill` | `Handoff syntax` |
| **card** | — | [the-handoff-skill](../concepts/matt/the-handoff-skill.md) | [handoff-syntax](../concepts/rjm/handoff-syntax.md) |
| **kind** | — | name-only | pattern |
| **phase** | — | `matt:productivity` | `cross-phase` |
| **produces** | — | none | Platform-adapted subagent handoff directives in generated agent markdown files. |
| **consumes** | — | none | Canonical `/agent [name]` delegation statements in shared agent templates. |
| **impl status** | — | defects: orphan, doc-drift, other | defects: doc-drift, cross-file-contradiction |

- **class:** SYNONYM
- **difference:** Matt defines /handoff (skills/productivity/handoff/SKILL.md:1) to compact conversation state into a portable markdown document that seeds fresh sessions across directories, harnesses, or colleagues. RJM defines Handoff syntax (.claude/commands/build.md:42) standardizing how active plans and issue handoffs are passed between commands.
- **sequencing note:** Bridges context across agent sessions and harness boundaries without losing decision rationale.
- **needs decision:** yes
- **decision:** —

### sequencing-handoff-claude-handoff-technique

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Claude Handoff` | — |
| **card** | — | [claude-handoff](../concepts/matt/claude-handoff.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | A spawned background agent process launched via `claude --bg` seeded with a synthesized handoff summary prompt. | — |
| **consumes** | — | The active conversation context, recent decisions, and optional user arguments specifying the focus of the next session. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines Claude Handoff (skills/in-progress/claude-handoff/SKILL.md:1) as an optimized handoff protocol specifically formatted for Claude Code sessions.
- **sequencing note:** Session transition mechanism in Claude Code.
- **needs decision:** no
- **decision:** —

### sequencing-handoff-compact-into-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Compact a conversation into a handoff` | — |
| **card** | — | [compact-a-conversation-into-a-handoff](../concepts/matt/compact-a-conversation-into-a-handoff.md) | — |
| **kind** | — | name-only | — |
| **phase** | — | `matt:Productivity` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines 'Compact a conversation into a handoff' (README.md:223) as the disciplined alternative to automatic conversational compaction.
- **sequencing note:** Generates portable session summary at phase boundaries.
- **needs decision:** no
- **decision:** —


## 8. Orchestration Models & Control Flow

### sequencing-orchestration-direct-invocation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Direct invocation` | — | — |
| **card** | [direct-invocation](../concepts/addy/direct-invocation.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Single focused specialist report returned directly to the user | — | — |
| **consumes** | Single task prompt, single artifact (code diff, file, question) | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Direct invocation (references/orchestration-patterns.md:11): single persona, single perspective, single artifact, with zero orchestration overhead (user -> code-reviewer -> report -> user). The default baseline for 1-step tasks.
- **sequencing note:** Simplest orchestration mode with lowest latency and token cost.
- **needs decision:** yes
- **decision:** —

### sequencing-orchestration-parallel-fan-out-merge

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Parallel fan-out with merge` | — | `Multi-Agent Orchestration System` |
| **card** | [parallel-fan-out-with-merge](../concepts/addy/parallel-fan-out-with-merge.md) | — | [multi-agent-orchestration-system](../concepts/rjm/multi-agent-orchestration-system.md) |
| **kind** | pattern | — | pattern |
| **phase** | `addy:Ship` | — | `cross-phase` |
| **produces** | Synthesized multi-perspective decision and actionable output (such as a go/no-go release verdict and rollback plan) | — | Coordinated multi-agent workflows, specifications, architecture decisions, code implementations, tests, and session handoffs. |
| **consumes** | Single input artifact (such as a pull request diff), multiple independent specialist personas, merge synthesis prompt | — | User requests, task prompts, and problem statements requiring coordinated multi-agent assistance. |
| **impl status** | clean | — | defects: missing-path, internal-contradiction |

- **class:** SYNONYM
- **difference:** Addy defines Parallel fan-out with merge (references/orchestration-patterns.md:48) where multiple specialist personas run concurrently on independent context windows and merge findings into a single decision (e.g. /ship fanning out to review, security, and testing). RJM defines Multi-Agent Orchestration System in docs/workflow-commands.md:85.
- **sequencing note:** Used in review and shipping phases to achieve multi-perspective verification without context pollution.
- **needs decision:** yes
- **decision:** —

### sequencing-orchestration-parallel-fan-out-alias

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `parallel fan-out` | — | — |
| **card** | [parallel-fan-out](../concepts/addy/parallel-fan-out.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Independent concurrent review evaluations synthesized into a consolidated merge verdict. | — | — |
| **consumes** | Candidate feature branches, pull requests, or release artifacts requiring multi-perspective review. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines parallel fan-out in references/orchestration-patterns.md:52 as the mechanism for dispatching multiple subagents in a single turn.
- **sequencing note:** Concurrency primitive in orchestrator commands.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-fan-out-with-merge-step

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `parallel fan-out with a merge step` | — | — |
| **card** | [parallel-fan-out-with-a-merge-step](../concepts/addy/parallel-fan-out-with-a-merge-step.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Consolidated verdict report synthesizing outputs from code reviewer, security auditor, and test engineer personas. | — | — |
| **consumes** | Candidate release code changes and verification artifacts. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy formalizes parallel fan-out with a merge step in references/orchestration-patterns.md:60 as an architectural pattern.
- **sequencing note:** Pattern variant with explicit synthesis phase.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-fan-out-primitive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `fan-out` | — | — |
| **card** | [fan-out](../concepts/addy/fan-out.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Multiple independent subagent reports synthesized by the main agent into a unified decision. | — | — |
| **consumes** | An immutable artifact or git diff ready for multi-perspective evaluation. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines generic fan-out in skills/shipping-and-launch/SKILL.md:30.
- **sequencing note:** Execution primitive for concurrent checks.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-persona-fan-out

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `persona fan-out` | — | — |
| **card** | [persona-fan-out](../concepts/addy/persona-fan-out.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Independent reviews from code reviewer, security auditor, test engineer, and web performance auditor merged into a final release verdict. | — | — |
| **consumes** | Candidate release artifacts, implementation changes, and test results. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines persona fan-out in references/orchestration-patterns.md:70 dispatching specialized personas (reviewer, auditor, tester).
- **sequencing note:** Specialized agent dispatch pattern.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-fan-out-orchestrator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `fan-out orchestrator` | — | — |
| **card** | [fan-out-orchestrator](../concepts/addy/fan-out-orchestrator.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Unified pre-launch audit report synthesizing three independent specialist reviews into a go/no-go decision. | — | — |
| **consumes** | Staged code changes, recent commits, or release branch diff. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines fan-out orchestrator in references/orchestration-patterns.md:75 managing worker subagent lifecycle.
- **sequencing note:** Orchestrator role during parallel execution.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-rjm-orchestrator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `orchestrator` |
| **card** | — | — | [orchestrator](../concepts/rjm/orchestrator.md) |
| **kind** | — | — | role |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Delegated subagent tasks, aggregated findings, conflict arbitrations, and session handoffs. |
| **consumes** | — | — | User requests, task prompts, or problem statements; previous session context; specialist outputs. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines orchestrator persona in docs/workflow-commands.md:92 managing lifecycle command dispatch and milestone gating.
- **sequencing note:** Top-level coordinator role in RJM.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-validate-orchestrator-citations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_orchestrator_citations` |
| **card** | — | — | [validate-orchestrator-citations](../concepts/rjm/validate-orchestrator-citations.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** RJM defines validate_orchestrator_citations (.claude/commands/spec.md:112) verifying that orchestrator commands cite valid source paths.
- **sequencing note:** Integrity check on orchestrator dispatch.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-patterns-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `orchestration-patterns` | — | — |
| **card** | [orchestration-patterns](../concepts/addy/orchestration-patterns.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Architectural constraints governing subagent spawning, communication topology, and error handling. | — | — |
| **consumes** | Multi-agent coordination requirements and workflow architectures. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy provides the master Orchestration Patterns reference catalog in references/orchestration-patterns.md:1 establishing endorsed patterns and anti-patterns.
- **sequencing note:** Core architectural reference for agent orchestration.
- **needs decision:** yes
- **decision:** —

### sequencing-orchestration-patterns-md-alias

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `orchestration-patterns.md` | — | — |
| **card** | [orchestration-patterns-md](../concepts/addy/orchestration-patterns-md.md) | — | — |
| **kind** | name-only | — | — |
| **phase** | `none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy references orchestration-patterns.md in README.md:315 as a key architecture reference.
- **sequencing note:** Reference document link.
- **needs decision:** no
- **decision:** —

### sequencing-orchestration-references-path

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `references/orchestration-patterns.md` | — | — |
| **card** | [references-orchestration-patterns-md](../concepts/addy/references-orchestration-patterns-md.md) | — | — |
| **kind** | reference | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Catalog of endorsed patterns (direct invocation, parallel fan-out, sequential pipeline, coordinator-worker) and antipattern rules. | — | — |
| **consumes** | Multi-agent collaboration requirements, subagent role definitions, and workflow orchestration commands. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy cites references/orchestration-patterns.md in skills/shipping-and-launch/SKILL.md:15.
- **sequencing note:** Path reference in skill definition.
- **needs decision:** no
- **decision:** —


## 9. Orchestration Anti-Patterns & Pitfalls

### sequencing-antipattern-meta-orchestrator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `meta-orchestrator` | — | — |
| **card** | [meta-orchestrator](../concepts/addy/meta-orchestrator.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Paraphrasing loss, double token costs, and increased latency without adding domain value. | — | — |
| **consumes** | User requests routed through an intermediary model before reaching the actual specialized persona. | — | — |
| **impl status** | clean | — | — |

- **class:** SYNONYM
- **difference:** Addy identifies Meta-orchestrator / Router Persona (references/orchestration-patterns.md:284) as Anti-pattern A: a persona whose only job is deciding which other persona to call, adding two paraphrasing hops and doubling token cost without domain value. RJM addresses this via authority-order in .agents/architecture/ADR-064:65.
- **sequencing note:** Prohibits intermediate routing agents; requires direct slash command or user dispatch.
- **needs decision:** yes
- **decision:** —

### sequencing-antipattern-sequential-paraphrasing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Sequential orchestrator that paraphrases` | — | — |
| **card** | [sequential-orchestrator-that-paraphrases](../concepts/addy/sequential-orchestrator-that-paraphrases.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Guidance directing developers to keep the human user as the primary orchestrator across lifecycle phases | — | — |
| **consumes** | Multi-step lifecycle pipelines (/spec, /plan, /build, /test, /review, /ship) | — | — |
| **impl status** | clean | — | — |

- **class:** SYNONYM
- **difference:** Addy identifies Sequential orchestrator that paraphrases (references/orchestration-patterns.md:316) as Anti-pattern C: an autonomous agent that calls /spec -> /plan -> /build sequentially on the user's behalf, which loses nuance between steps, skips human checkpoints, and doubles token cost. RJM defines causal-order in docs/workflow-commands.md:98.
- **sequencing note:** Enforces human developer as the primary orchestrator across macro lifecycle boundaries.
- **needs decision:** yes
- **decision:** —

### sequencing-antipattern-catalog

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `orchestration anti-pattern` | — | — |
| **card** | [orchestration-anti-pattern](../concepts/addy/orchestration-anti-pattern.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | Architectural constraint preventing subagents or personas from spawning other subagents. | — | — |
| **consumes** | Multi-agent architecture definitions, persona configuration, and task delegation designs. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines orchestration anti-pattern in references/orchestration-patterns.md:280 documenting persona-calls-persona and deep persona trees.
- **sequencing note:** Architectural guidelines against nested agent hierarchies.
- **needs decision:** yes
- **decision:** —

### sequencing-antipattern-workflow-step-without-process

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `reports a workflow step declared without a matching process section` | — | — |
| **card** | [reports-a-workflow-step-declared-without-a-matching-process-section](../concepts/addy/reports-a-workflow-step-declared-without-a-matching-process-section.md) | — | — |
| **kind** | name-only | — | — |
| **phase** | `none` | — | — |
| **produces** | none | — | — |
| **consumes** | none | — | — |
| **impl status** | defects: orphan, other | — | — |

- **class:** UNIQUE
- **difference:** Addy defines lint check reporting workflow steps declared in skill descriptions without a matching step-by-step process section (skills/using-agent-skills/SKILL.md:88).
- **sequencing note:** Structural lint enforcing process completeness in skills.
- **needs decision:** no
- **decision:** —


## 10. Feedback Loops, TDD & Iteration Cycles

### sequencing-loops-tdd-red-green-refactor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `TDD workflow` | `red-green-refactor loop` | `closed-loop rule` |
| **card** | [tdd-workflow](../concepts/addy/tdd-workflow.md) | [red-green-refactor-loop](../concepts/matt/red-green-refactor-loop.md) | [closed-loop-rule](../concepts/rjm/closed-loop-rule.md) |
| **kind** | technique | technique | pattern |
| **phase** | `addy:Build` | `matt:engineering` | `cross-phase` |
| **produces** | Failing automated tests, followed by implementation passing the tests and refactored code. | A failing automated test followed by minimal passing implementation code and clean refactored source. | Grounded gate verdicts refusing PASS when no external ground-truth signal is present or satisfied. |
| **consumes** | Feature requirements or bug reports, existing codebase, and test runner. | Executable test framework and a concrete behavior, ticket requirement, or bug reproduction to verify. | Deterministic test status (pytest) or deterministic requirement verification artifacts (acceptance criteria checkboxes) alongside LLM agent review verdicts. |
| **impl status** | clean | clean | defects: orphan |

- **class:** SYNONYM
- **difference:** Addy defines TDD workflow (skills/test-driven-development/SKILL.md:12), Matt defines red-green-refactor loop (skills/engineering/tdd/SKILL.md:18), and RJM defines closed-loop rule (docs/workflow-commands.md:105). All three mandate: (1) write failing test first; (2) write minimal code to pass; (3) refactor with green tests.
- **sequencing note:** Micro-sequencing loop within the Build and Implementation phase.
- **needs decision:** yes
- **decision:** —

### sequencing-loops-red-green-loop-matt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `red → green loop` | — |
| **card** | — | [red-green-loop](../concepts/matt/red-green-loop.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | Minimal production code passing tests, followed by subsequent vertical slices. | — |
| **consumes** | — | Pre-agreed testing seams, domain requirements, and failing test cases. | — |
| **impl status** | — | defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 triggers on "red-green-refactor" while line 38 explicitly commands "Refactoring is not part of the loop. It belongs to the review stage") | — |

- **class:** UNIQUE
- **difference:** Matt defines red -> green loop (skills/engineering/tdd/SKILL.md:24) focusing on rapid assertion verification.
- **sequencing note:** Inner TDD iteration cycle.
- **needs decision:** no
- **decision:** —

### sequencing-loops-fuzz-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `fuzz loop` | — |
| **card** | — | [fuzz-loop](../concepts/matt/fuzz-loop.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:diagnosing-bugs` | — |
| **produces** | — | A repeatable counterexample input that deterministically reproduces the defect. | — |
| **consumes** | — | A randomized input generator and a specification or validation invariant. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines fuzz loop in skills/engineering/diagnosing-bugs/SKILL.md:32 for generative input testing.
- **sequencing note:** Exploratory defect reproduction loop.
- **needs decision:** no
- **decision:** —

### sequencing-loops-differential-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `differential loop` | — |
| **card** | — | [differential-loop](../concepts/matt/differential-loop.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:diagnosing-bugs` | — |
| **produces** | — | A diff of runtime outputs highlighting behavioral divergences between implementations. | — |
| **consumes** | — | A single input stream and two versions or configurations of the target software. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines differential loop in skills/engineering/diagnosing-bugs/SKILL.md:40 comparing behavior across environments or commits.
- **sequencing note:** Root-cause isolation loop.
- **needs decision:** no
- **decision:** —

### sequencing-loops-feedback-loops-cross

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `failure feedback loops` | `feedback loops` | `Feedback loops` |
| **card** | [failure-feedback-loops](../concepts/addy/failure-feedback-loops.md) | [feedback-loops](../concepts/matt/feedback-loops.md) | [feedback-loops](../concepts/rjm/feedback-loops.md) |
| **kind** | pattern | technique | pattern |
| **phase** | `addy:Ship` | `matt:Upkeep` | `cross-phase` |
| **produces** | Immediate diagnostic feedback, failure alerts, and actionable remediation logs delivered to developers or agents. | Green verification status confirming that reconciled conflict hunks maintain build integrity and runtime contracts. | Identification of self-reinforcing (amplifying) or stabilizing (dampening) cycles created or broken by the decision. |
| **consumes** | Automated test execution results, build logs, and pipeline failure events. | Resolved conflict diff hunks and repository automated test/typecheck scripts. | Decision proposals that alter system dynamics, incentives, or process structures. |
| **impl status** | defects: doc-drift, orphan | defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30) | defects: missing-path |

- **class:** ALIGNED
- **difference:** All three packages formalize feedback loops: Addy in skills/ci-cd-and-automation/SKILL.md:20, Matt in skills/engineering/tdd/SKILL.md:14, and RJM in docs/workflow-commands.md:110. Fast feedback enables safe, incremental progression.
- **sequencing note:** Core engineering principle governing all verification phases.
- **needs decision:** no
- **decision:** —

### sequencing-loops-feedback-loop-singular

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `verification loop` | `feedback loop` | `self-improving loop` |
| **card** | [verification-loop](../concepts/addy/verification-loop.md) | [feedback-loop](../concepts/matt/feedback-loop.md) | [self-improving-loop](../concepts/rjm/self-improving-loop.md) |
| **kind** | technique | technique | pattern |
| **phase** | `cross-phase` | `cross-phase` | `rjm:research` |
| **produces** | Immediate local verification feedback across structural integrity, routing accuracy, command parity, and behavioral fidelity. | An automated pass/fail verification mechanism that evaluates performance or bug presence in seconds. | Auto-proposed guard rules that prevent observed errors without inducing regressions. |
| **consumes** | Local repository changes, modified skill definitions, updated commands, or session hook scripts. | Bug symptoms, test scripts, CLI fixtures, network captures, or interactive quiz responses. | Telemetry logs, user corrections, failure modes, and calibration test suites. |
| **impl status** | clean | defects: doc-drift (over-triggering on simple issues in diagnosing-bugs.md:59; missing GLOSSARY-FORMAT.md link in teach/SKILL.md:14-17), other (lack of initial knowledge assessment in teach/SKILL.md:85-90) | defects: doc-drift, internal-contradiction, missing-path |

- **class:** SYNONYM
- **difference:** Addy defines verification loop (skills/verify/SKILL.md:15), Matt defines feedback loop (skills/engineering/diagnosing-bugs/SKILL.md:18), and RJM defines self-improving loop (.claude/skills/review/SKILL.md:80).
- **sequencing note:** Automated iterative check-and-fix cycle during verification.
- **needs decision:** yes
- **decision:** —

### sequencing-loops-tight-feedback-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tight feedback loop` | — |
| **card** | — | [tight-feedback-loop](../concepts/matt/tight-feedback-loop.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:diagnose` | — |
| **produces** | — | A single executable command that deterministically fails on the bug. | — |
| **consumes** | — | A reported bug, error log, failing behavior, or reproducible issue. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt emphasizes tight feedback loop in skills/engineering/tdd/SKILL.md:28 for sub-second test runs.
- **sequencing note:** Performance requirement for developer test suites.
- **needs decision:** no
- **decision:** —

### sequencing-loops-grilling-and-interview-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `interview loop` | — |
| **card** | — | [interview-loop](../concepts/matt/interview-loop.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | A fully resolved decision tree with explicit trade-offs and verified shared understanding. | — |
| **consumes** | — | A draft proposal, plan, architectural decision, or vague idea needing rigorous stress-testing. | — |
| **impl status** | — | defects: internal-contradiction, other (sequential vs batched question preferences; weak models skipping confirmation gate) | — |

- **class:** UNIQUE
- **difference:** Matt defines interview loop in skills/productivity/grilling/SKILL.md:24 for interactive requirement elicitation.
- **sequencing note:** Discovery phase conversational loop.
- **needs decision:** no
- **decision:** —

### sequencing-loops-loop-concept-matt

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `loop` | — |
| **card** | — | [loop](../concepts/matt/loop.md) | — |
| **kind** | — | pattern | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | Identified candidates for automation and specification within loop-me. | — |
| **consumes** | — | Observation of human routines, workflows, communication channels, or operational tasks. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines loop as a general execution primitive in skills/engineering/diagnosing-bugs/SKILL.md:12.
- **sequencing note:** General control flow primitive.
- **needs decision:** no
- **decision:** —

### sequencing-loops-the-loop-concept

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `The loop` | — |
| **card** | — | [the-loop](../concepts/matt/the-loop.md) | — |
| **kind** | — | pattern | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | A completed article document assembled incrementally paragraph by paragraph. | — |
| **consumes** | — | The input pile of raw material and collaborative author input. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines 'The loop' in skills/in-progress/loop-me/SKILL.md:10 representing continuous developer iteration.
- **sequencing note:** Developer experience framework concept.
- **needs decision:** no
- **decision:** —

### sequencing-loops-loop-me-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Loop Me` | — |
| **card** | — | [loop-me](../concepts/matt/loop-me.md) | — |
| **kind** | — | technique | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | Workflow specifications in workflows/*.md and refined domain terminology in NOTES.md. | — |
| **consumes** | — | User intent, repeated daily/weekly tasks, and workspace notes in NOTES.md. | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Matt defines loop-me skill in skills/in-progress/loop-me/SKILL.md:1 for executing automated iterative tasks.
- **sequencing note:** Iterative task execution wrapper.
- **needs decision:** no
- **decision:** —

### sequencing-loops-devtools-debugging-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The DevTools Debugging Workflow` | — | — |
| **card** | [the-devtools-debugging-workflow](../concepts/addy/the-devtools-debugging-workflow.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | Verified bug fixes supported by visual screenshots, clean console logs, and passing test suites. | — | — |
| **consumes** | Bug reports, reproducible browser scenarios, application source code. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines The DevTools Debugging Workflow (skills/browser-testing-with-devtools/SKILL.md:20) for inspecting DOM, network, and console during frontend testing.
- **sequencing note:** Frontend verification and debugging loop.
- **needs decision:** no
- **decision:** —

### sequencing-loops-optimization-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The Optimization Workflow` | — | — |
| **card** | [the-optimization-workflow](../concepts/addy/the-optimization-workflow.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | Empirically proven optimizations, an updated optimization ledger, and automated regression guards. | — | — |
| **consumes** | Verified performance regressions, latency targets, and baseline profiles. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines The Optimization Workflow (skills/performance-optimization/SKILL.md:18): Measure -> Profile -> Optimize -> Verify.
- **sequencing note:** Performance tuning loop in review and ship phases.
- **needs decision:** yes
- **decision:** —

### sequencing-loops-profiling-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `profiling workflows` | — | — |
| **card** | [profiling-workflows](../concepts/addy/profiling-workflows.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | CPU flamecharts, memory allocation profiles, network waterfall charts, and hotspot identification. | — | — |
| **consumes** | Running application instances, synthetic or real user traffic, and profiler instrumentation. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Addy defines profiling workflows (skills/performance-optimization/SKILL.md:35) for CPU and memory heap analysis.
- **sequencing note:** Diagnostic step in performance optimization.
- **needs decision:** no
- **decision:** —


## 11. Circuit Breakers, Guardrails & Round Caps

### sequencing-caps-self-audit-round-cap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Loop engineering` | `hitl-loop.template.sh` | `Self-audit round cap` |
| **card** | [loop-engineering](../concepts/addy/loop-engineering.md) | [hitl-loop-template-sh](../concepts/matt/hitl-loop-template-sh.md) | [self-audit-round-cap](../concepts/rjm/self-audit-round-cap.md) |
| **kind** | name-only | name-only | gate |
| **phase** | `none` | `matt:diagnosing-bugs` | `rjm:review` |
| **produces** | none | none | Mandatory escalation to the human operator with open findings if non-PASS verdict persists at round 3. |
| **consumes** | none | none | Invocation round count tracked by calling command, agent, or workflow. |
| **impl status** | clean | clean | defects: missing-path, doc-drift |

- **class:** SYNONYM
- **difference:** RJM strictly enforces the Self-audit round cap (.claude/skills/review/SKILL.md:33): any automated fix-and-rereview loop has a hard stop at 3 rounds maximum. Round 3 escalates to the operator; never loop silently. Matt implements human-in-the-loop scripts (scripts/hitl-loop.template.sh:1). Addy provides loop engineering guidelines in references/orchestration-patterns.md:250.
- **sequencing note:** Critical safety circuit breaker preventing unbounded agent retry loops and runaway token costs.
- **needs decision:** yes
- **decision:** —

### sequencing-caps-hitl-template-name-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `scripts/hitl-loop.template.sh` | — |
| **card** | — | [scripts-hitl-loop-template-sh](../concepts/matt/scripts-hitl-loop-template-sh.md) | — |
| **kind** | — | name-only | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | none | — |
| **consumes** | — | none | — |
| **impl status** | — | defects: other (static security scanner false positive flagged by Snyk on the shipped shell script in docs/engineering/diagnosing-bugs.md:74) | — |

- **class:** UNIQUE
- **difference:** Matt references scripts/hitl-loop.template.sh in skills/engineering/diagnosing-bugs/SKILL.md:50.
- **sequencing note:** Script path reference.
- **needs decision:** no
- **decision:** —

### sequencing-caps-human-in-the-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `human-in-the-loop` | — |
| **card** | — | [human-in-the-loop](../concepts/matt/human-in-the-loop.md) | — |
| **kind** | — | pattern | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | Parseable command exit codes and outputs indicating pass or fail status. | — |
| **consumes** | — | Human manual verification responses via interactive terminal prompts. | — |
| **impl status** | — | clean in core concept; documented security scanner false positive in docs/engineering/diagnosing-bugs.md:74 due to shipped shell script | — |

- **class:** UNIQUE
- **difference:** Matt formalizes human-in-the-loop (HITL) execution in skills/engineering/diagnosing-bugs/SKILL.md:55.
- **sequencing note:** Safety pattern ensuring developer checkpoints.
- **needs decision:** yes
- **decision:** —

### sequencing-caps-the-infinite-loop-warning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `The Infinite Loop` |
| **card** | — | — | [the-infinite-loop](../concepts/rjm/the-infinite-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Excessive token consumption, hallucinated consensus, or endless refinement cycling. |
| **consumes** | — | — | Refinement loops guided by subjective or open-ended termination instructions (e.g. "until perfect"). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM warns against 'The Infinite Loop' (docs/workflow-commands.md:120) where an agent perpetually fixes syntax errors without stepping back to re-evaluate root causes.
- **sequencing note:** Failure mode mitigated by round caps and circuit breakers.
- **needs decision:** no
- **decision:** —

### sequencing-caps-cadence-control

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | — |
| **card** | — | — | — |
| **kind** | — | — | — |
| **phase** | — | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | — |

- **class:** UNIQUE
- **difference:** RJM defines cadence (.claude/commands/plan.md:55) as the pacing and milestone batching of task execution.
- **sequencing note:** Execution velocity and checkpoint control.
- **needs decision:** no
- **decision:** —

### sequencing-caps-iteration-workflow-rjm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iteration Workflow` |
| **card** | — | — | [iteration-workflow](../concepts/rjm/iteration-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Incremental behavioral fixes targeted to SKILL.md, references, scripts, or assets. |
| **consumes** | — | — | Skill in active use, task prompts, and execution logs. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM defines Iteration Workflow (docs/workflow-commands.md:125) bounding task execution attempts before escalating.
- **sequencing note:** Task-level retry and escalation protocol.
- **needs decision:** no
- **decision:** —


## 12. Dependency Ordering & DAG Sequencing

### sequencing-dag-dependency-order-topological

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `dependency order` | — | `Get-DecisionSequence` |
| **card** | [dependency-order](../concepts/addy/dependency-order.md) | — | [get-decisionsequence](../concepts/rjm/get-decisionsequence.md) |
| **kind** | technique | — | name-only |
| **phase** | `addy:Build` | — | `none` |
| **produces** | Linear execution sequence guaranteeing foundational components exist before dependent tasks execute. | — | none |
| **consumes** | Task list with declared prerequisites and topological dependency relationships. | — | none |
| **impl status** | clean | — | defects: missing-path (scripts/ReflexionMemory.psm1 not implemented in PowerShell; memory subsystem is excluded from lifecycle scope) |

- **class:** SYNONYM
- **difference:** Addy defines dependency order (skills/planning-and-task-breakdown/SKILL.md:18) where task execution order is strictly determined by topological sort of task dependencies. RJM implements Get-DecisionSequence (.agents/architecture/ADR-064:75) to resolve decision DAGs.
- **sequencing note:** Governs the scheduling and execution order of decomposed work tasks.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-dependency-graph

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `dependency graph` | — | `Workflow Validation` |
| **card** | [dependency-graph](../concepts/addy/dependency-graph.md) | — | [workflow-validation](../concepts/rjm/workflow-validation.md) |
| **kind** | technique | — | technique |
| **phase** | `addy:Plan` | — | `cross-phase` |
| **produces** | An ordered mapping of dependencies indicating which architectural components must precede others. | — | Local validation reports, exit codes (0, 1, 2), and dry-run execution results. |
| **consumes** | Component and interface models extracted from specifications and existing codebase architecture. | — | GitHub Actions workflow files under `.github/workflows/`. |
| **impl status** | clean | — | defects: doc-drift |

- **class:** SYNONYM
- **difference:** Addy defines dependency graph (skills/planning-and-task-breakdown/SKILL.md:25) as the directed acyclic graph of tasks and artifacts. RJM defines Workflow Validation (docs/workflow-commands.md:135) checking DAG acyclicity and reachability.
- **sequencing note:** Validated during planning phase prior to build execution.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-dependency-ordering-technique

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `dependency ordering` | — | — |
| **card** | [dependency-ordering](../concepts/addy/dependency-ordering.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Plan` | — | — |
| **produces** | Topologically sorted task sequence where prerequisites precede dependents. | — | — |
| **consumes** | Unordered task list, architectural component dependencies, and interface requirements. | — | — |
| **impl status** | defects: doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Addy defines dependency ordering in skills/planning-and-task-breakdown/SKILL.md:32 as the algorithm producing executable task sequences.
- **sequencing note:** Task planning algorithm.
- **needs decision:** no
- **decision:** —

### sequencing-dag-shift-left-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Shift Left` | — | `Shift-left security` |
| **card** | [shift-left](../concepts/addy/shift-left.md) | — | [shift-left-security](../concepts/rjm/shift-left-security.md) |
| **kind** | technique | — | pattern |
| **phase** | `addy:Ship` | — | `cross-phase` |
| **produces** | Early bug detection at minimum remediation cost. | — | Immediate local security feedback and remediation before code is committed to remote branches or pull requests. |
| **consumes** | Quality gates and pipeline stages. | — | Local file changesets, pinned static analysis tools (Semgrep), and pre-push hook configuration. |
| **impl status** | defects: doc-drift | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines Shift Left (skills/ci-cd-and-automation/SKILL.md:15) moving testing and validation upstream to the earliest possible point. RJM defines Shift-left security (docs/workflow-commands.md:142) embedding threat modeling into /spec.
- **sequencing note:** Architectural sequencing philosophy moving downstream gates into upstream phases.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-git-workflow-versioning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `git-workflow-and-versioning` | — | — |
| **card** | [git-workflow-and-versioning](../concepts/addy/git-workflow-and-versioning.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Atomic commits, clear imperative commit messages, clean branch histories, pull requests, and semantic release tags. | — | — |
| **consumes** | Working tree modifications, staged changes, feature branch history, and commit diffs. | — | — |
| **impl status** | defects: doc-drift, cross-file-contradiction | — | — |

- **class:** UNIQUE
- **difference:** Addy defines git-workflow-and-versioning (skills/git-workflow-and-versioning/SKILL.md:1) enforcing atomic ~100-line commits as save-points between tasks.
- **sequencing note:** Version control sequencing within build and ship phases.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-feature-flag-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `feature-flag lifecycle` | — | — |
| **card** | [feature-flag-lifecycle](../concepts/addy/feature-flag-lifecycle.md) | — | — |
| **kind** | technique | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Controlled gradual exposure, instant shutoff capability, and eventual removal of flag technical debt. | — | — |
| **consumes** | New feature implementations, feature flag service configurations. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines feature-flag lifecycle (skills/shipping-and-launch/SKILL.md:22): introduction -> testing -> staged rollout -> 100% release -> cleanup.
- **sequencing note:** Release management lifecycle.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-flag-lifecycle-alias

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Flag lifecycle` | — | — |
| **card** | [flag-lifecycle](../concepts/addy/flag-lifecycle.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Controlled rollout progression and eventual removal of flag conditional branches and dead code. | — | — |
| **consumes** | Feature flag configuration, targeting rules, and scheduled expiration or cleanup dates. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines Flag lifecycle in skills/shipping-and-launch/SKILL.md:26.
- **sequencing note:** Lifecycle definition for dynamic flags.
- **needs decision:** no
- **decision:** —

### sequencing-dag-adr-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ADR Lifecycle` | — | — |
| **card** | [adr-lifecycle](../concepts/addy/adr-lifecycle.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | Managed state transitions preserving decision history without deleting past records. | — | — |
| **consumes** | Drafted, active, or modified Architecture Decision Records. | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Addy defines ADR Lifecycle (skills/documentation-and-adrs/SKILL.md:18): proposed -> accepted -> superseded/deprecated.
- **sequencing note:** Decision state machine.
- **needs decision:** yes
- **decision:** —

### sequencing-dag-radar-protocol-sequence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill-Negotiation-002: RADAR Protocol Sequence` |
| **card** | — | — | [skill-negotiation-002-radar-protocol-sequence](../concepts/rjm/skill-negotiation-002-radar-protocol-sequence.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM defines Skill-Negotiation-002: RADAR Protocol Sequence (.claude/skills/negotiation/SKILL.md:18) for agent contract negotiation.
- **sequencing note:** Inter-agent protocol sequence.
- **needs decision:** no
- **decision:** —

### sequencing-dag-thread-severity-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Thread Severity Classification and Lifecycle` |
| **card** | — | — | [thread-severity-classification-and-lifecycle](../concepts/rjm/thread-severity-classification-and-lifecycle.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Code corrections for blocking threads, explanatory replies with commit SHAs, and resolved thread statuses. |
| **consumes** | — | — | Unresolved pull request conversation comments, author metadata, and code diff context. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM defines Thread Severity Classification and Lifecycle (.claude/skills/review/references/thread-severity.md:1) for managing review comment resolution states.
- **sequencing note:** Review finding lifecycle from open to verified resolved.
- **needs decision:** yes
- **decision:** —


## 13. RJM-Specific Pipelines, Validation & Governance Workflows

### sequencing-rjm-fitness-table

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fitness table` |
| **card** | — | — | [fitness-table](../concepts/rjm/fitness-table.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Concrete execution matrix indicating which commands (/spec, /plan, /build, /test, /review, /ship) should run. |
| **consumes** | — | — | Identified task shape and the six lifecycle command definitions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: fitness table (reference) defined in cross-phase. > "How to read the fitness table" — docs/when-to-use.md:17
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-test-workflowratelimit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test-WorkflowRateLimit` |
| **card** | — | — | [test-workflowratelimit](../concepts/rjm/test-workflowratelimit.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Test-WorkflowRateLimit (name-only) defined in none. (used, not defined) > "\| Test-WorkflowRateLimit \| Daemon \| Complex multi-resource check \|" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:108
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-load-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `load_workflow` |
| **card** | — | — | [load-workflow](../concepts/rjm/load-workflow.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: load_workflow (name-only) defined in none. (used, not defined) > "def load_workflow(path: Path) -> WorkflowDefinition:" — scripts/workflow/loader.py:27
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `HANDOFF.md` |
| **card** | — | — | [handoff-md](../concepts/rjm/handoff-md.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: HANDOFF.md (name-only) defined in none. (used, not defined) > "HANDOFF.md requires manual updates prone to conflicts in parallel sessions" — .agents/architecture/ADR-011-session-state-mcp.md:29
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipelineindex

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PipelineIndex` |
| **card** | — | — | [pipelineindex](../concepts/rjm/pipelineindex.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PipelineIndex (name-only) defined in none. (used, not defined) > "class PipelineIndex:" — scripts/validation/check_agent_skill_discriminator.py:332
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-tests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_TESTS` |
| **card** | — | — | [skip-tests](../concepts/rjm/skip-tests.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_TESTS (name-only) defined in none. (used, not defined) > "\| `SKIP_TESTS` \| REMOVED \| Historical: stale contributor guidance was removed during the Lefthook migration \|" — .claude/skills/ai-agents-config-catalog/SKILL.md:52
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-security-scan-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Scan Workflow` |
| **card** | — | — | [security-scan-workflow](../concepts/rjm/security-scan-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Aggregated, deduplicated, and severity-sorted vulnerability findings formatted as console text or structured JSON. |
| **consumes** | — | — | File sets collected via git staged files, directory scans, or explicit CLI paths. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Security Scan Workflow (technique) defined in rjm:review. > "                        Security Scan Workflow" — .claude/skills/security-scan/SKILL.md:194
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-local

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `workflow-local` |
| **card** | — | — | [workflow-local](../concepts/rjm/workflow-local.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: workflow-local (name-only) defined in none. (used, not defined) > "(\"workflow-local\", _handle_workflow_local)," — scripts/validation/git_hook_policy.py:8404
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-script-driven-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `script-driven workflow` |
| **card** | — | — | [script-driven-workflow](../concepts/rjm/script-driven-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | Phase-appropriate prompts and guided investigation steps. |
| **consumes** | — | — | Python CLI helper scripts, state passed via flags (`--thoughts`). |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: script-driven workflow (pattern) defined in rjm:analyze. > "The skill uses a **script-driven workflow** pattern. The Python script acts as a state machine that generates phase-appropriate prompts." — .claude/skills/analyze/references/DEVELOPMENT.md:17
- **sequencing note:** Governs execution flow in RJM rjm:analyze.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-get-workflow-runs-by-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `get_workflow_runs_by_pr` |
| **card** | — | — | [get-workflow-runs-by-pr](../concepts/rjm/get-workflow-runs-by-pr.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: get_workflow_runs_by_pr (name-only) defined in none. (used, not defined) > "def get_workflow_runs_by_pr(" — scripts/ai_review_common/workflow.py:87
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff Validation` |
| **card** | — | — | [handoff-validation](../concepts/rjm/handoff-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validated handoff payload ensuring recipient agent has complete context and zero ambiguous state. |
| **consumes** | — | — | Agent deliverables, test outcomes, commit records, and handoff summaries. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Handoff Validation (gate) defined in cross-phase. > "Before handing off, validate ALL items in the applicable checklist:" — .claude/agents/implementer.md:805
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-workflow-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_workflow_size` |
| **card** | — | — | [validate-workflow-size](../concepts/rjm/validate-workflow-size.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_workflow_size (name-only) defined in none. (used, not defined) > "def validate_workflow_size(self, file_path: Path) -> None:" — scripts/validate_workflows.py:202
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-script-diff-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Script diff triage` |
| **card** | — | — | [script-diff-triage](../concepts/rjm/script-diff-triage.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Per-script reconciliation decisions determining whether to retain local modifications, adopt upstream changes, or cherry-pick enhancements. |
| **consumes** | — | — | Vendored script files, upstream script updates, and 3-way merge tooling. |
| **impl status** | — | — | defects: orphan, internal-contradiction, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Script diff triage (technique) defined in cross-phase. > "1. **Script diff triage**: run a 3-way merge on the 5 shared scripts where vendored is larger. Decide per-script: keep local, adopt upstream, or cherry-pick specific improvements." — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:278
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-windows-based-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Windows-based workflows` |
| **card** | — | — | [windows-based-workflows](../concepts/rjm/windows-based-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Windows-based workflows (name-only) defined in cross-phase. (used, not defined) > "Windows-based workflows remain unchanged as ARM runners are not available for Windows." — .agents/architecture/ADR-025-github-actions-arm-runners.md:39
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-agent-sidecar-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Sidecar Workflow` |
| **card** | — | — | [agent-sidecar-workflow](../concepts/rjm/agent-sidecar-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Sequential agent execution flow from pre-task sidecar loading to post-task memory synchronization. |
| **consumes** | — | — | Role-specific sidecar memory files and session task prompts. |
| **impl status** | — | — | not-implemented |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Agent Sidecar Workflow (pattern) defined in rjm:cross-phase. > "Agent Sidecar Workflow" — .agents/architecture/ADR-007-memory-first-architecture.md:327
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-routing-algorithm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `orchestrator routing algorithm` |
| **card** | — | — | [orchestrator-routing-algorithm](../concepts/rjm/orchestrator-routing-algorithm.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Assembled specialist agent sequences, concurrency groupings, and synthesized responses. |
| **consumes** | — | — | Incoming user tasks, classification triggers, complexity thresholds, and agent risk profiles. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: orchestrator routing algorithm (technique) defined in cross-phase. (used, not defined) > "This document provides a visual representation of the orchestrator routing algorithm." — docs/diagrams/routing-flowchart.md:5
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-legacy-handoff-field

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_LEGACY_HANDOFF_FIELD` |
| **card** | — | — | [legacy-handoff-field](../concepts/rjm/legacy-handoff-field.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _LEGACY_HANDOFF_FIELD (name-only) defined in none. (used, not defined) > "_LEGACY_HANDOFF_FIELD = \"handoffNotUpdated\"" — scripts/validate_session_json.py:254
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-agent-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Lifecycle` |
| **card** | — | — | [agent-lifecycle](../concepts/rjm/agent-lifecycle.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Formal state transitions across Proposed, Approved, Active, Deprecated, and Retired statuses. |
| **consumes** | — | — | Agent proposals, ADRs, development plans, and deprecation triggers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Agent Lifecycle (pattern) defined in cross-phase. > "PROPOSED -> APPROVED -> ACTIVE -> DEPRECATED -> RETIRED" — docs/agent-governance.md:64
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-push-lock-commit-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_PUSH_LOCK_COMMIT_GUARD` |
| **card** | — | — | [skip-push-lock-commit-guard](../concepts/rjm/skip-push-lock-commit-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Explicit, observable bypass of the push-lock pre-commit guard with printed console notice. |
| **consumes** | — | — | Push lock contention scenarios where a stale or crashed push lock prevents commit creation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_PUSH_LOCK_COMMIT_GUARD (gate) defined in cross-phase. > "regardless), set ``SKIP_PUSH_LOCK_COMMIT_GUARD=1`` to bypass this one check," — scripts/validation/check_push_lock_before_commit.py:45
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Size` |
| **card** | — | — | [workflow-size](../concepts/rjm/workflow-size.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Informational warning if a workflow file exceeds 100 lines of code. |
| **consumes** | — | — | Workflow YAML line counts. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Size (gate) defined in cross-phase. > "4. **Workflow Size**: Warns if >100 lines (ADR-006: thin orchestration)" — docs/WORKFLOW-VALIDATION.md:32
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-shift-left

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `shift-left` |
| **card** | — | — | [shift-left](../concepts/rjm/shift-left.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Early defect discovery before changes reach remote CI or human review. |
| **consumes** | — | — | Authoring-time constraints, pre-commit hooks, and local validation tools. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: shift-left (pattern) defined in cross-phase. > "- Shift Left: move the pit closer to the point of creation" — .claude/skills/planner/references/design-pit-of-success.md:62
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-measure-workflowcoalescing-ps1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Measure-WorkflowCoalescing.ps1` |
| **card** | — | — | [measure-workflowcoalescing-ps1](../concepts/rjm/measure-workflowcoalescing-ps1.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Measure-WorkflowCoalescing.ps1 (name-only) defined in cross-phase. (used, not defined) > "Use `Measure-WorkflowCoalescing.ps1` to track:" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:303
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-coded-consequences-convention

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coded Consequences Convention` |
| **card** | — | — | [coded-consequences-convention](../concepts/rjm/coded-consequences-convention.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Indexed, unique identifiers for consequence bullets enabling granular citations in review threads and subsequent ADRs. |
| **consumes** | — | — | Consequence statements in complex ADR documents. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Coded Consequences Convention (pattern) defined in rjm:spec. > "The Project Canonical format supports coded bullets so multi-item sections can be" — .claude/skills/adr-generator/references/adr-template.md:156
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Triage` |
| **card** | — | — | [triage](../concepts/rjm/triage.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Categorized findings or tasks routed to appropriate remediation workflows or complexity tiers. |
| **consumes** | — | — | Unsorted drift findings, raw prompts, or incoming issues. |
| **impl status** | — | — | defects: orphan, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Triage (technique) defined in cross-phase. > "### Step 2: Triage the findings" — .claude/commands/sync.md:45
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-clause-pattern

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_SKIP_CLAUSE_PATTERN` |
| **card** | — | — | [skip-clause-pattern](../concepts/rjm/skip-clause-pattern.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _SKIP_CLAUSE_PATTERN (name-only) defined in none. (used, not defined) > "_SKIP_CLAUSE_PATTERN = re.compile(" — scripts/validation/check_skill_skip_clauses.py:22
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-get-workflow-runs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `get_workflow_runs` |
| **card** | — | — | [get-workflow-runs](../concepts/rjm/get-workflow-runs.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: get_workflow_runs (name-only) defined in none. (used, not defined) > "def get_workflow_runs(" — .github/scripts/measure_workflow_coalescing.py:208
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adopipelinegeneration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AdoPipelineGeneration` |
| **card** | — | — | [adopipelinegeneration](../concepts/rjm/adopipelinegeneration.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: AdoPipelineGeneration (name-only) defined in none. (used, not defined) > "**Cause:** Bumping AdoPipelineGeneration pulls in a newer transitive dependency, but another package in the solution pins an older version." — .claude/skills/windows-image-updater/references/troubleshooting.md:35
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-extract-skip-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extract_skip_targets` |
| **card** | — | — | [extract-skip-targets](../concepts/rjm/extract-skip-targets.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: extract_skip_targets (name-only) defined in none. (used, not defined) > "def extract_skip_targets(description: str, known_skill_names: set[str]) -> set[str]:" — scripts/validation/check_skill_skip_clauses.py:122
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-073-adr-lifecycle-frontmatter-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-073-adr-lifecycle-frontmatter.md` |
| **card** | — | — | [adr-073-adr-lifecycle-frontmatter-md](../concepts/rjm/adr-073-adr-lifecycle-frontmatter-md.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR-073-adr-lifecycle-frontmatter.md (name-only) defined in none. (used, not defined) > "The schema enforced here is ADR-073 (`ADR-073-adr-lifecycle-frontmatter.md`)," — scripts/validation/check_adr_lifecycle.py:39
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-sizing-and-sequencing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sizing and Sequencing` |
| **card** | — | — | [sizing-and-sequencing](../concepts/rjm/sizing-and-sequencing.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | Right-sized milestone packages (primarily targeting 3-10 person-day M-size) ordered by risk and dependency prerequisites. |
| **consumes** | — | — | Estimated work scope, dependency weights, and complexity tiers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Sizing and Sequencing (technique) defined in rjm:plan. > "Target M-size milestones. Split L and XL before accepting." — .claude/agents/milestone-planner.md:117
- **sequencing note:** Governs execution flow in RJM rjm:plan.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoffread

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoffRead` |
| **card** | — | — | [handoffread](../concepts/rjm/handoffread.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoffRead (name-only) defined in none. (used, not defined) > "handoffRead" — scripts/validate_session_json.py:138
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-the-3-pipeline-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `the 3-pipeline rule` |
| **card** | — | — | [the-3-pipeline-rule](../concepts/rjm/the-3-pipeline-rule.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Exemption or evaluation verdict for criterion c3 in the agent-skill discriminator. |
| **consumes** | — | — | Distinct slash-command pipeline count invoking an agent. |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: the 3-pipeline rule (gate) defined in rjm:build. > "fewer than 3 distinct pipelines (the 3-pipeline rule). c3 is N/A (scores 0)" — scripts/validation/check_agent_skill_discriminator.py:22
- **sequencing note:** Governs execution flow in RJM rjm:build.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-context-retrieval-skip-rate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `context_retrieval_skip_rate` |
| **card** | — | — | [context-retrieval-skip-rate](../concepts/rjm/context-retrieval-skip-rate.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: context_retrieval_skip_rate (name-only) defined in cross-phase. (used, not defined) > "\"context_retrieval_skip_rate\": Threshold(warning=0.40, error=0.60)," — scripts/compute_health_status.py:51
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-diagnose-and-fix-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Diagnose and Fix Loop` |
| **card** | — | — | [diagnose-and-fix-loop](../concepts/rjm/diagnose-and-fix-loop.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Diagnose and Fix Loop (technique) defined in rjm:cross-phase. > "### Step 5: Diagnose and Fix Loop" — .claude/skills/pipeline-validator/SKILL.md:264
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-skills

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestrator Skills` |
| **card** | — | — | [orchestrator-skills](../concepts/rjm/orchestrator-skills.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:Phase 1: Deep Analysis` |
| **produces** | — | — | Tailored analysis questions focusing on skill composition, interoperable handoffs, and downstream failure handling. |
| **consumes** | — | — | Skill intent focused on coordinating and composing other skills. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestrator Skills (pattern) defined in rjm:Phase 1: Deep Analysis. > "### For Orchestrator Skills" — .claude/skills/skillforge/references/regression-questions.md:264
- **sequencing note:** Governs execution flow in RJM rjm:Phase 1: Deep Analysis.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-qa-skip-checkers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_QA_SKIP_CHECKERS` |
| **card** | — | — | [qa-skip-checkers](../concepts/rjm/qa-skip-checkers.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _QA_SKIP_CHECKERS (name-only) defined in none. (used, not defined) > "_QA_SKIP_CHECKERS = {" — scripts/validate_session_json.py:167
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-conditional-skip-marker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CONDITIONAL_SKIP_MARKER` |
| **card** | — | — | [conditional-skip-marker](../concepts/rjm/conditional-skip-marker.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: CONDITIONAL_SKIP_MARKER (name-only) defined in none. (used, not defined) > "CONDITIONAL_SKIP_MARKER = \"pytest-zero-collection-conditional:\"" — scripts/validation/check_zero_collection_tests.py:69
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-if-consumer-repo

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skip_if_consumer_repo` |
| **card** | — | — | [skip-if-consumer-repo](../concepts/rjm/skip-if-consumer-repo.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Boolean flag directing hooks to skip execution when running in external consumer repositories. |
| **consumes** | — | — | Git remote origin URL and fallback repository identity checks (`pyproject.toml`). |
| **impl status** | — | — | clean for script implementations; defects: missing-path, doc-drift on citing ADR-084 and ADR-085 |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: skip_if_consumer_repo (technique) defined in cross-phase. > "def skip_if_consumer_repo(hook_name: str) -> bool:" — scripts/hook_utilities/guards.py:162
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-clauses

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP clauses` |
| **card** | — | — | [skip-clauses](../concepts/rjm/skip-clauses.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Negative routing directives (e.g., `Do NOT use ... use X instead`) preventing overlapping skill dispatch. |
| **consumes** | — | — | `SKILL.md` frontmatter descriptions of sibling skills within a multi-member family. |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP clauses (pattern) defined in cross-phase. > "Validate SKIP clauses for multi-member skill families." — scripts/validation/check_skill_skip_clauses.py:2
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-citation-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestrator Citation Check` |
| **card** | — | — | [orchestrator-citation-check](../concepts/rjm/orchestrator-citation-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Pass/fail gate verdict ensuring orchestrator commands cite existing files. |
| **consumes** | — | — | Path citations in orchestrator command definitions (.claude/commands/pr-quality/all.md) and repository filesystem state. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestrator Citation Check (gate) defined in cross-phase. > "Orchestrator Citation Check" — scripts/validation/pre_pr_sequence.py:337
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoffnotupdated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoffNotUpdated` |
| **card** | — | — | [handoffnotupdated](../concepts/rjm/handoffnotupdated.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoffNotUpdated (name-only) defined in none. (used, not defined) > "_LEGACY_HANDOFF_FIELD = \"handoffNotUpdated\"" — scripts/validate_session_json.py:254
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-eval-skip-model-preflight

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `EVAL_SKIP_MODEL_PREFLIGHT` |
| **card** | — | — | [eval-skip-model-preflight](../concepts/rjm/eval-skip-model-preflight.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: EVAL_SKIP_MODEL_PREFLIGHT (name-only) defined in none. (used, not defined) > "No-ops when ``EVAL_SKIP_MODEL_PREFLIGHT`` is set (truthy) or when a" — scripts/eval/_anthropic_api.py:364
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-o4-aggregate-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O4 Aggregate boundaries` |
| **card** | — | — | [o4-aggregate-boundaries](../concepts/rjm/o4-aggregate-boundaries.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Definition of aggregate roots and transactional change boundaries in the OntologyFragment. |
| **consumes** | — | — | Entities and relationships from prompts O1 and O3. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: O4 Aggregate boundaries (checklist) defined in rjm:spec. > "\| **O4 Aggregate boundaries** \| Which entities cluster under a single aggregate root that owns their invariants and is the unit of transactional change? Name each aggregate root. \|" — .claude/skills/spec-generator/references/spec-prior-art-s...
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-precedence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Precedence` |
| **card** | — | — | [precedence](../concepts/rjm/precedence.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Unambiguous single category assignment. |
| **consumes** | — | — | Comments that qualify for multiple triage buckets. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Precedence (technique) defined in cross-phase. > "A comment can match more than one bucket. Assign exactly one, using this ranked precedence:" — .claude/agents/comment-analyzer.md:44
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pr-review-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Review Workflow` |
| **card** | — | — | [pr-review-workflow](../concepts/rjm/pr-review-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Batched pull request review executions via `/pr-review` with parallel processing and cleanup flags. |
| **consumes** | — | — | GitHub notifications via `gh notify -s` and open pull request list. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PR Review Workflow (technique) defined in rjm:review. > "## PR Review Workflow" — docs/autonomous-pr-monitor.md:28 > "After completing session initialization (if this is a new session), you must check for actionable items that require PR review:" — docs/autonomous-pr-monitor.md:30
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-routing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestrator routing` |
| **card** | — | — | [orchestrator-routing](../concepts/rjm/orchestrator-routing.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Targeted agent execution plans (single specialist, sequential multi-agent group, or full gated pipeline). |
| **consumes** | — | — | Incoming user tasks and complexity classifications (Simple, Moderate, Complex). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestrator routing (technique) defined in cross-phase. > "### Orchestrator routing" — docs/customization.md:132
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-default-workflows-dir

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_DEFAULT_WORKFLOWS_DIR` |
| **card** | — | — | [default-workflows-dir](../concepts/rjm/default-workflows-dir.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _DEFAULT_WORKFLOWS_DIR (name-only) defined in cross-phase. (used, not defined) > "_DEFAULT_WORKFLOWS_DIR = Path(__file__).resolve().parents[1]" — scripts/bulk_cancel_guard.py:84
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-tier-3-orchestrated-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 3: Orchestrated Pipeline` |
| **card** | — | — | [tier-3-orchestrated-pipeline](../concepts/rjm/tier-3-orchestrated-pipeline.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Fully orchestrated skill pipelines featuring multiple specialized roles, documentation gates, and formal review stages. |
| **consumes** | — | — | Complex multi-agent coordination architectures and lifecycle pipeline specifications. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Tier 3: Orchestrated Pipeline (pattern) defined in cross-phase. (used, not defined) > "### Tier 3: Orchestrated Pipeline" — .agents/governance/SKILL-CREATION-CRITERIA.md:218
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-lifecycle-hooks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lifecycle hooks` |
| **card** | — | — | [lifecycle-hooks](../concepts/rjm/lifecycle-hooks.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Automated protocol compliance, injected context, compaction checkpoints, format verification, and execution halting on protocol breaches. |
| **consumes** | — | — | Session, task, tool invocation, and git commit lifecycle events. |
| **impl status** | — | — | defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144-146, 177 (retired hooks removed from disk; referenced HANDOFF.md superseded); doc-drift/missing-path in CONTRIBUTING.md. Surviving runtime surface narr... |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Lifecycle hooks (technique) defined in cross-phase. > "Lifecycle hooks MUST automate SESSION-PROTOCOL enforcement." — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:42
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-routing-flowchart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestrator Routing Flowchart` |
| **card** | — | — | [orchestrator-routing-flowchart](../concepts/rjm/orchestrator-routing-flowchart.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Visual flowchart specifications and Mermaid state diagrams illustrating routing logic. |
| **consumes** | — | — | Orchestrator routing rules, classification axes, complexity thresholds, and agent compatibility matrix. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestrator Routing Flowchart (reference) defined in cross-phase. > "# Orchestrator Routing Flowchart" — docs/diagrams/routing-flowchart.md:1
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-when-to-use-matrix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When-to-Use matrix` |
| **card** | — | — | [when-to-use-matrix](../concepts/rjm/when-to-use-matrix.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A deterministic mapping from task descriptions to specific recommended skills or agents. |
| **consumes** | — | — | Incoming user intent, task complexity, file scope, and target operation characteristics. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: When-to-Use matrix (reference) defined in cross-phase. (used, not defined) > "decision tree and the When-to-Use matrix, and delegates. This honors" — .agents/architecture/ADR-063-memory-skill-decomposition.md:103
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-protocol-automation-via-lifecycle-hooks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Protocol Automation via Lifecycle Hooks` |
| **card** | — | — | [protocol-automation-via-lifecycle-hooks](../concepts/rjm/protocol-automation-via-lifecycle-hooks.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Protocol Automation via Lifecycle Hooks (name-only) defined in none. (used, not defined) > "ADR-008: Protocol Automation via Lifecycle Hooks" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:12
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-infinite-loop-prevention

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Infinite Loop Prevention` |
| **card** | — | — | [infinite-loop-prevention](../concepts/rjm/infinite-loop-prevention.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Forced termination of learning extraction when thresholds (5 iterations, 20 learnings, zero novelty) are breached. |
| **consumes** | — | — | Iteration counter, total learnings extracted, and marginal novelty between cycles. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Infinite Loop Prevention (gate) defined in rjm:retrospective. > "**Infinite Loop Prevention:**" — .claude/agents/retrospective.md:1057
- **sequencing note:** Governs execution flow in RJM rjm:retrospective.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-thin-workflows-testable-modules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `thin workflows, testable modules` |
| **card** | — | — | [thin-workflows-testable-modules](../concepts/rjm/thin-workflows-testable-modules.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Decoupled CI architecture where workflows only orchestrate and logic is locally testable. |
| **consumes** | — | — | Workflow designs and Python module architectures. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: thin workflows, testable modules (pattern) defined in cross-phase. > "ADR-006 (thin workflows, testable modules)" — .agents/guides/python-cicd-patterns.md:11
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-autofix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_AUTOFIX` |
| **card** | — | — | [skip-autofix](../concepts/rjm/skip-autofix.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_AUTOFIX (name-only) defined in cross-phase. (used, not defined) > "grep -q 'SKIP_AUTOFIX'" — scripts/bootstrap-vm.sh:348
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-iteration-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iteration Guide` |
| **card** | — | — | [iteration-guide](../concepts/rjm/iteration-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured iteration workflow, diagnostic signals, and refactoring patterns. |
| **consumes** | — | — | Generated skill artifacts and real usage execution observations. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Iteration Guide (reference) defined in cross-phase. > "# Iteration Guide" — .claude/skills/skillforge/references/iteration-guide.md:1
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-routing-everything-to-the-orchestrator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Routing everything to the orchestrator` |
| **card** | — | — | [routing-everything-to-the-orchestrator](../concepts/rjm/routing-everything-to-the-orchestrator.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Premature orchestration overhead, unnecessary multi-agent handoffs, and dilated turnaround times. |
| **consumes** | — | — | Unclassified requests in autoplan triage. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Routing everything to the orchestrator (pattern) defined in cross-phase. > "- **Routing everything to the orchestrator.** The fallback row is for the long" — .claude/skills/autoplan/SKILL.md:200
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-skill-skip-clauses

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_skill_skip_clauses` |
| **card** | — | — | [validate-skill-skip-clauses](../concepts/rjm/validate-skill-skip-clauses.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_skill_skip_clauses (name-only) defined in none. (used, not defined) > "def validate_skill_skip_clauses(repo_root: Path) -> bool:" — scripts/validation/checks_spec.py:198
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-continuous-loop-behavior

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Continuous Loop Behavior` |
| **card** | — | — | [continuous-loop-behavior](../concepts/rjm/continuous-loop-behavior.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Consecutive pull requests opened across autonomous issue development cycles until the target count is satisfied. |
| **consumes** | — | — | Target PR count parameter `{{TARGET_PR_COUNT}}` and queue of prioritized backlog issues. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Continuous Loop Behavior (pattern) defined in cross-phase. > "CONTINUOUS LOOP BEHAVIOR" — docs/autonomous-issue-development.md:79 > "After completing all phases for one issue and opening its PR, immediately begin again at Phase 1 to select the next highest priority issue. Continue this loop until you have...
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-health

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline health` |
| **card** | — | — | [pipeline-health](../concepts/rjm/pipeline-health.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Verification verdict confirming that all remote continuous integration checks or required branch policies have passed. |
| **consumes** | — | — | GitHub Pull Request CI check status or Azure DevOps branch build policies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Pipeline health (gate) defined in rjm:ship. > "1. **Pipeline health**" — .claude/commands/ship.md:62
- **sequencing note:** Governs execution flow in RJM rjm:ship.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-hotfix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hotfix` |
| **card** | — | — | [hotfix](../concepts/rjm/hotfix.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A targeted emergency fix applied, tested, reviewed, and shipped directly. |
| **consumes** | — | — | A single known defect with verified root cause and small blast radius. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Hotfix (pattern) defined in cross-phase. > "Hotfix (single known defect, clear root cause, small blast radius)" — docs/when-to-use.md:30
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-explicit-handoffs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Explicit handoffs` |
| **card** | — | — | [explicit-handoffs](../concepts/rjm/explicit-handoffs.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Fully specified downstream delegation contexts with explicit inputs, constraints, and success criteria. |
| **consumes** | — | — | Upstream findings, task objectives, constraints, and structured handoff contracts. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Explicit handoffs (pattern) defined in rjm:cross-phase. > "- **Explicit handoffs**: never let context decay across agents" — templates/agents/orchestrator.shared.md:321
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-create-skipped-test-result

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `create_skipped_test_result` |
| **card** | — | — | [create-skipped-test-result](../concepts/rjm/create-skipped-test-result.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: create_skipped_test_result (name-only) defined in none. (used, not defined) > "from scripts.test_result_helpers.helpers import create_skipped_test_result" — scripts/test_result_helpers/__init__.py:5
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-trigger

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_TRIGGER` |
| **card** | — | — | [skip-trigger](../concepts/rjm/skip-trigger.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_TRIGGER (name-only) defined in none. (used, not defined) > "SKIP_TRIGGER = \"true\"" — scripts/ci/check_ai_review_infra_gate.py:40
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoffs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoffs` |
| **card** | — | — | [handoffs](../concepts/rjm/handoffs.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoffs (name-only) defined in none. (used, not defined) > "Previously supported fields (`model`, `handoffs`, `argument-hint`) are now rejected as \"unsupported.\"" — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-check-workflow-rate-limit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `check_workflow_rate_limit` |
| **card** | — | — | [check-workflow-rate-limit](../concepts/rjm/check-workflow-rate-limit.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: exit-code-mismatch, doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: check_workflow_rate_limit (name-only) defined in none. (used, not defined) > "def check_workflow_rate_limit(" — scripts/github_core/rate_limit.py:219
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-quick-fix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick Fix` |
| **card** | — | — | [quick-fix](../concepts/rjm/quick-fix.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Targeted code corrections verified by QA test execution. |
| **consumes** | — | — | Localized bug reports, simple PR comments, or minor test failure diagnostics. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Quick Fix (pattern) defined in cross-phase. > "Quick Fix: implementer → qa" — .claude/agents/AGENTS.md:230-231
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-classification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline Classification` |
| **card** | — | — | [pipeline-classification](../concepts/rjm/pipeline-classification.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Pipeline Classification (technique) defined in rjm:cross-phase. > "#### Pipeline Classification" — .claude/skills/pipeline-validator/SKILL.md:178
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-machine-readable-adr-lifecycle-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Machine-Readable ADR Lifecycle Frontmatter` |
| **card** | — | — | [machine-readable-adr-lifecycle-frontmatter](../concepts/rjm/machine-readable-adr-lifecycle-frontmatter.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:Architect` |
| **produces** | — | — | Queryable YAML frontmatter containing status, date, decision-makers, supersedes, and implemented flags. |
| **consumes** | — | — | ADR markdown documents and decision metadata. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Machine-Readable ADR Lifecycle Frontmatter (pattern) defined in rjm:Architect. > "ADR-073: Machine-Readable ADR Lifecycle Frontmatter" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:12
- **sequencing note:** Governs execution flow in RJM rjm:Architect.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-supervision-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `supervision loop` |
| **card** | — | — | [supervision-loop](../concepts/rjm/supervision-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: supervision loop (pattern) defined in cross-phase. > "supervision loop between the orchestrator and sub-agents. There is only" — .agents/architecture/ADR-065-orchestrator-as-router.md:29
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-triage-categories

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Triage Categories` |
| **card** | — | — | [triage-categories](../concepts/rjm/triage-categories.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Categorized comment triage classifications with specific remediation guidance. |
| **consumes** | — | — | Extracted code comments and corresponding implementation code. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Triage Categories (technique) defined in cross-phase. > "Classify every comment into one of three buckets. State the bucket in the finding." — .claude/agents/comment-analyzer.md:36
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-data-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Pipeline` |
| **card** | — | — | [data-pipeline](../concepts/rjm/data-pipeline.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Pipeline SLIs focusing on data Freshness, Correctness, and Completeness rather than instantaneous request uptime. |
| **consumes** | — | — | Ingestion schedules, ETL workflows, data validation requirements, and consumer delivery expectations. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Data Pipeline (pattern) defined in cross-phase. > "\| Data Pipeline \| Freshness, Correctness \| 99% \| 7.3 hr/month \|" — .claude/skills/slo-designer/references/slo-design-patterns.md:11
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-collect-changed-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_collect_changed_workflows` |
| **card** | — | — | [collect-changed-workflows](../concepts/rjm/collect-changed-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _collect_changed_workflows (name-only) defined in none. (used, not defined) > "def _collect_changed_workflows(repo_root: Path, base_ref: str) -> list[str] \| None:" — scripts/validation/checks_plugin.py:317
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-analyst-evidence-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyst evidence handoff` |
| **card** | — | — | [analyst-evidence-handoff](../concepts/rjm/analyst-evidence-handoff.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Prefetched execution output, repository SHA/branch metadata, and explicit evidence gap documentation packaged into the delegation context. |
| **consumes** | — | — | Investigation goals requiring shell commands, git logs, build diagnostics, or unrestricted web context. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Analyst evidence handoff (pattern) defined in rjm:cross-phase. > "Before delegating an investigation that needs shell output, git history, builds," — .claude/agents/orchestrator.md:159
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflowstatus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowStatus` |
| **card** | — | — | [workflowstatus](../concepts/rjm/workflowstatus.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:orchestrator` |
| **produces** | — | — | Status enumeration value for steps and workflows. |
| **consumes** | — | — | Execution state updates from executors. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: WorkflowStatus (pattern) defined in rjm:orchestrator. > "Execution status of a workflow or step." — scripts/workflow/schema.py:42
- **sequencing note:** Governs execution flow in RJM rjm:orchestrator.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-dirs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_SKIP_DIRS` |
| **card** | — | — | [skip-dirs](../concepts/rjm/skip-dirs.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, other, script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _SKIP_DIRS (name-only) defined in none. (used, not defined) > "_SKIP_DIRS = frozenset(" — .claude/skills/fix-markdown-fences/scripts/fix_fences.py:866
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-extraction-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extraction boundary` |
| **card** | — | — | [extraction-boundary](../concepts/rjm/extraction-boundary.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A clear architectural boundary dividing shared framework tooling from repository-specific domain logic. |
| **consumes** | — | — | Artifact inventory, dependency graphs, and classification ratios of repository components. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: extraction boundary (pattern) defined in cross-phase. > "If the hybrid percentage exceeds 20%, re-evaluate the extraction boundary." — .agents/analysis/adr-045-inventory-audit.md:38
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-multi-instance-orchestration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Multi-instance orchestration` |
| **card** | — | — | [multi-instance-orchestration](../concepts/rjm/multi-instance-orchestration.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Decoupled per-domain agent sessions communicating via structured memory logs rather than shared chat history. |
| **consumes** | — | — | System architecture domain boundaries and centralized memory logging storage. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Multi-instance orchestration (pattern) defined in cross-phase. > "**Multi-instance orchestration**: Separate CC instances per domain (frontend, backend, DB). All log to central memory bank. Cross-instance reads fetch only relevant logs, not full history." — .claude/skills/context-optimizer/references/claude-c...
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-build-pipeline-impact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Build Pipeline Impact` |
| **card** | — | — | [build-pipeline-impact](../concepts/rjm/build-pipeline-impact.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | DevOps review findings assessing risks of broken builds, improper script modifications, or unmanaged build dependencies. |
| **consumes** | — | — | Pull request diff modifying build scripts, package manifests, or toolchain dependencies. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Build Pipeline Impact (checklist) defined in rjm:review. > "### 1. Build Pipeline Impact" — .claude/skills/review/references/devops.md:97
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-reading-workflow-inputs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reading Workflow Inputs` |
| **card** | — | — | [reading-workflow-inputs](../concepts/rjm/reading-workflow-inputs.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Extracted and validated input values for Python script execution. |
| **consumes** | — | — | `INPUT_<NAME>` environment variables passed into actions by the GitHub Actions runner. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Reading Workflow Inputs (pattern) defined in cross-phase. > "Reading Workflow Inputs" — .agents/guides/python-cicd-patterns.md:322
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-evaluator-optimizer-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `evaluator-optimizer loop` |
| **card** | — | — | [evaluator-optimizer-loop](../concepts/rjm/evaluator-optimizer-loop.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Accepted artifacts scoring >= 70% or escalation to human review after 3 iterations. |
| **consumes** | — | — | Artifact drafts, evaluation rubrics, and iteration count state. |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: evaluator-optimizer loop (technique) defined in cross-phase. > "All significant outputs MUST pass through a formalized evaluator-optimizer loop." — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:42
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-tier-2-multi-step-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 2: Multi-Step Workflow` |
| **card** | — | — | [tier-2-multi-step-workflow](../concepts/rjm/tier-2-multi-step-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured skill specification featuring 2 to 4 phases separated by explicit phase gates. |
| **consumes** | — | — | Multi-step procedural workflow requirements with intermediate state transitions. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Tier 2: Multi-Step Workflow (pattern) defined in cross-phase. (used, not defined) > "### Tier 2: Multi-Step Workflow" — .agents/governance/SKILL-CREATION-CRITERIA.md:196
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-skill

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestrator Skill` |
| **card** | — | — | [orchestrator-skill](../concepts/rjm/orchestrator-skill.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Coordinated multi-agent workflow executions with unpinned harness model inheritance. |
| **consumes** | — | — | Multi-agent task scope, triggering file events, and domain specifications. |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestrator Skill (pattern) defined in cross-phase. > "### A.3 Orchestrator Skill (Delegated Agents Inherit The Harness Model)" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:835
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-validator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pipeline-validator` |
| **card** | — | — | [pipeline-validator](../concepts/rjm/pipeline-validator.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: pipeline-validator (technique) defined in rjm:cross-phase. > "name: pipeline-validator" — .claude/skills/pipeline-validator/SKILL.md:2
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-multi-agent-orchestration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Multi-Agent Orchestration` |
| **card** | — | — | [multi-agent-orchestration](../concepts/rjm/multi-agent-orchestration.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Coordinated execution of complex multi-stage tasks by delegating subtasks to specialized personas. |
| **consumes** | — | — | High-level task goals, agent role definitions, and inter-agent communication channels. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Multi-Agent Orchestration (pattern) defined in cross-phase. > "\| Multi-Agent Orchestration \| ✓ Full (Task tool) \| ✓ Full (@agent) \| ✓ Full (Agent HQ) \| ✗ Constrained \|" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:190
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-workflow-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_workflow_structure` |
| **card** | — | — | [validate-workflow-structure](../concepts/rjm/validate-workflow-structure.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_workflow_structure (name-only) defined in none. (used, not defined) > "def validate_workflow_structure(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:101
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundary-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundary Audit` |
| **card** | — | — | [boundary-audit](../concepts/rjm/boundary-audit.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `none` |
| **produces** | — | — | A structured boundary audit table capturing flow names, sources, consumers, current human editors, classification (`act on this` vs `interpret this first`), and exposure levels. |
| **consumes** | — | — | Prioritized operational information flows (top 5 to 10) impacting money, customers, roadmap, risk, or staffing. |
| **impl status** | — | — | defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundary Audit (technique) defined in none. > "### Phase 4: Boundary Audit" — .claude/skills/world-model-diagnostic/SKILL.md:142
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-yaml-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_workflow_yaml_targets` |
| **card** | — | — | [workflow-yaml-targets](../concepts/rjm/workflow-yaml-targets.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug, exit-code-mismatch, doc-drift, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _workflow_yaml_targets (name-only) defined in none. (used, not defined) > "def _workflow_yaml_targets(repo_root: Path) -> list[str] \| None:" — scripts/validation/checks_workflow_targets.py:42
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-create-workflow-failure-alert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `create_workflow_failure_alert` |
| **card** | — | — | [create-workflow-failure-alert](../concepts/rjm/create-workflow-failure-alert.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: create_workflow_failure_alert (name-only) defined in none. (used, not defined) > "def create_workflow_failure_alert(" — scripts/pr_maintenance/maintenance.py:163
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-decision-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Workflow` |
| **card** | — | — | [decision-workflow](../concepts/rjm/decision-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:Architect` |
| **produces** | — | — | Routing path directing authoring to architecture/, governance/, or both. |
| **consumes** | — | — | New decision proposals, scope descriptions, and enforcement requirements. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Decision Workflow (technique) defined in rjm:Architect. > "### 3. Decision Workflow" — .agents/architecture/ADR-022-architecture-governance-split-criteria.md:213
- **sequencing note:** Governs execution flow in RJM rjm:Architect.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-006-thin-workflows-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-006-thin-workflows.md` |
| **card** | — | — | [adr-006-thin-workflows-md](../concepts/rjm/adr-006-thin-workflows-md.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR-006-thin-workflows.md (name-only) defined in none. (used, not defined) > "unresolved:.agents/guides/python-cicd-patterns.md:../architecture/ADR-006-thin-workflows.md" — scripts/validation/check_adr_links_baseline.txt:62
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skipped-investigation-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIPPED: investigation-only` |
| **card** | — | — | [skipped-investigation-only](../concepts/rjm/skipped-investigation-only.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validated QA skip evidence enabling session validation scripts to pass without an associated QA review artifact. |
| **consumes** | — | — | Staged changes confined strictly to recognized investigation directories (e.g. `.agents/analysis/`, `.agents/sessions/`, `.serena/memories/`). |
| **impl status** | — | — | defects: orphan, missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIPPED: investigation-only (gate) defined in cross-phase. > "No code/config changes at all" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:124
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundary-aware-failure-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundary-Aware Failure Policy` |
| **card** | — | — | [boundary-aware-failure-policy](../concepts/rjm/boundary-aware-failure-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Compliance validation determining whether errors surface to actors capable of resolving them. |
| **consumes** | — | — | Architectural boundary transitions, cross-service calls, logger invocations, and exception contracts. |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundary-Aware Failure Policy (gate) defined in rjm:review. > "### 5. Validate Against a Boundary-Aware Failure Policy" — .claude/agents/silent-failure-hunter.md:106
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-thin-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Thin workflows` |
| **card** | — | — | [thin-workflows](../concepts/rjm/thin-workflows.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Minimal CI/CD YAML configurations that orchestrate standalone, locally testable scripts. |
| **consumes** | — | — | Workflow triggers, CI definitions, and standalone executable scripts. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Thin workflows (pattern) defined in cross-phase. (used, not defined) > "Thin workflows (tests are standalone, not embedded in workflows)" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:160
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-workflow-local-run

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_workflow_local_run` |
| **card** | — | — | [validate-workflow-local-run](../concepts/rjm/validate-workflow-local-run.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_workflow_local_run (name-only) defined in none. (used, not defined) > "def validate_workflow_local_run(repo_root: Path) -> bool:" — scripts/validation/checks_plugin.py:349
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-shift-left-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `shift-left validation` |
| **card** | — | — | [shift-left-validation](../concepts/rjm/shift-left-validation.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Immediate local feedback, non-zero exit codes blocking invalid pushes, and automated test reports. |
| **consumes** | — | — | Local workspace code, git changes, scripts, and repository configuration. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: shift-left validation (technique) defined in rjm:ship. > "Unified shift-left validation runner for pre-PR checks." — scripts/validation/pre_pr.py:2
- **sequencing note:** Governs execution flow in RJM rjm:ship.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-load-workflow-subscriptions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `load_workflow_subscriptions` |
| **card** | — | — | [load-workflow-subscriptions](../concepts/rjm/load-workflow-subscriptions.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: load_workflow_subscriptions (name-only) defined in none. (used, not defined) > "def load_workflow_subscriptions(" — scripts/github_core/workflow_event_subscriptions.py:415
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-emit-skip-event

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_emit_skip_event` |
| **card** | — | — | [emit-skip-event](../concepts/rjm/emit-skip-event.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _emit_skip_event (name-only) defined in none. (used, not defined) > "def _emit_skip_event(" — scripts/hook_utilities/guards.py:135
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-system-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `System Boundaries` |
| **card** | — | — | [system-boundaries](../concepts/rjm/system-boundaries.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Findings on boundary violations, inappropriate layer bypassing, or leaky concerns. |
| **consumes** | — | — | Module definitions, inter-module imports, and cross-cutting concern implementations. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: System Boundaries (checklist) defined in rjm:review. > "### 2. System Boundaries" — .claude/skills/review/references/architect.md:64
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-execution-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Execution workflow` |
| **card** | — | — | [execution-workflow](../concepts/rjm/execution-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Implemented code across milestones, automated test executions, post-implementation reviews, documentation updates, and retrospectives. |
| **consumes** | — | — | An approved implementation plan document that has passed review gates, or PR triage context in autonomous monitoring sessions. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Execution workflow (technique) defined in cross-phase. > "2. **Execution workflow** (executor.py): Execute approved plans through delegation" — .claude/skills/planner/SKILL.md:16
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-5-phase-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `5-Phase Workflow` |
| **card** | — | — | [5-phase-workflow](../concepts/rjm/5-phase-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Fully designed, validated, implemented, and quality-checked slash command files. |
| **consumes** | — | — | User automation requests, command specifications. |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: 5-Phase Workflow (pattern) defined in cross-phase. > "## 5-Phase Workflow" — .claude/skills/slashcommandcreator/SKILL.md:27
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflowvalidator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowValidator` |
| **card** | — | — | [workflowvalidator](../concepts/rjm/workflowvalidator.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: WorkflowValidator (name-only) defined in none. (used, not defined) > "class WorkflowValidator:" — scripts/validate_workflows.py:67
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skipping-matrix-visualization

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skipping Matrix Visualization` |
| **card** | — | — | [skipping-matrix-visualization](../concepts/rjm/skipping-matrix-visualization.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Opaque design decisions, hidden assumptions, inability for peer review or critique. |
| **consumes** | — | — | Mental models of commonalities and variabilities, undocumented assumptions. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skipping Matrix Visualization (pattern) defined in rjm:spec. > "<description>Skipping Matrix Visualization (going straight from requirements to patterns)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:447
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-shift-left-runner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shift-left runner` |
| **card** | — | — | [shift-left-runner](../concepts/rjm/shift-left-runner.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Comprehensive local validation status across ~30 validation checks with ADR-035 compliant exit codes. |
| **consumes** | — | — | Uncommitted and unpushed working directory changes, test suites, and configuration files. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Shift-left runner (gate) defined in cross-phase. > "Roughly 30 validations: session end, tests, scoped markdownlint, workflow YAML, dash prohibition, plugin version field, install parity, hook anchoring." — .claude/skills/ai-agents-change-control/references/gate-ladder.md:13
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflows-json

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `workflows.json` |
| **card** | — | — | [workflows-json](../concepts/rjm/workflows-json.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: workflows.json (name-only) defined in none. (used, not defined) > "Manages .agents/skillbook/policies.json, tensions.json, and workflows.json." — scripts/skillbook.py:12
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-options

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff Options` |
| **card** | — | — | [handoff-options](../concepts/rjm/handoff-options.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Clear transition recommendations and delegation instructions for next-stage specialized agents. |
| **consumes** | — | — | Agent task execution findings, scope boundaries, or resolution status. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Handoff Options (pattern) defined in cross-phase. > "When to delegate" — .claude/agents/AGENTS.md:209
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-iteration-paradox

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iteration Paradox` |
| **card** | — | — | [iteration-paradox](../concepts/rjm/iteration-paradox.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Proliferating commit chains, excessive review cycles, and inflated token consumption. |
| **consumes** | — | — | Autonomous multi-agent PR review workflows, concurrent bot reviews, and ungrounded contract assumptions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Iteration Paradox (pattern) defined in cross-phase. > "## Incident 3: #1887 Iteration Paradox (69 commits to ship a cost-reducer)" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:98
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-lifecycle-baseline-json

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adr_lifecycle_baseline.json` |
| **card** | — | — | [adr-lifecycle-baseline-json](../concepts/rjm/adr-lifecycle-baseline-json.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: adr_lifecycle_baseline.json (name-only) defined in none. (used, not defined) > "`adr_lifecycle_baseline.json` and passes; only a RISE in a check's count fails." — scripts/validation/check_adr_lifecycle.py:61
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-ask-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skip / Ask First` |
| **card** | — | — | [skip-ask-first](../concepts/rjm/skip-ask-first.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Exclusions for non-actionable files and explicit clarification requests for ambiguous patterns. |
| **consumes** | — | — | Target file lists, code diffs, and ambiguous repository conventions. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skip / Ask First (checklist) defined in cross-phase. (used, not defined) > "- Generated files, vendored dependencies, lockfiles." — .claude/agents/code-reviewer.md:103
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-status-skipped

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STATUS_SKIPPED` |
| **card** | — | — | [status-skipped](../concepts/rjm/status-skipped.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: STATUS_SKIPPED (name-only) defined in none. (used, not defined) > "STATUS_SKIPPED = \"SKIPPED\"" — scripts/quality_gate/resolve_pytest_signal.py:52
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-debounce

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `workflow-debounce` |
| **card** | — | — | [workflow-debounce](../concepts/rjm/workflow-debounce.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: workflow-debounce (name-only) defined in cross-phase. (used, not defined) > "Debouncing is implemented as a reusable composite action (`.github/actions/workflow-debounce/action.yml`) and guarded at the job level:" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:235
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-multi-agent-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `multi-agent workflow` |
| **card** | — | — | [multi-agent-workflow](../concepts/rjm/multi-agent-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Decomposed tasks, verified implementations, multi-stage review approvals, and consolidated pull requests. |
| **consumes** | — | — | Specialist agent roles (Orchestrator, Implementer, Critic, QA, Security, Retrospective). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: multi-agent workflow (pattern) defined in cross-phase. (used, not defined) > "Your goal is to continuously select priority issues, complete development work through a multi-agent workflow, and open pull requests until a target number is reached." — docs/autonomous-issue-development.md:8
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-precedent-search

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-precedent search` |
| **card** | — | — | [adr-precedent-search](../concepts/rjm/adr-precedent-search.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Precedent ADR citations in decision drivers, or formal supersession links updating prior ADR statuses. |
| **consumes** | — | — | Proposed architectural decision topics and the repository ADR catalog (`.agents/architecture/`). |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR-precedent search (gate) defined in rjm:spec. > "Before drafting any new ADR, search the existing ADR catalog for prior decisions in the same area." — .claude/agents/architect.md:63
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-spec-front-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `spec front-gate` |
| **card** | — | — | [spec-front-gate](../concepts/rjm/spec-front-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Approved specification document gating downstream lifecycle activities. |
| **consumes** | — | — | Feature ideas or project requirements lacking formal specifications. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: spec front-gate (gate) defined in rjm:spec. > "run the spec front-gate (`/spec`) first, then return here." — .claude/skills/research-and-incorporate/SKILL.md:22
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-research-and-incorporate-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Research and Incorporate Workflow` |
| **card** | — | — | [research-and-incorporate-workflow](../concepts/rjm/research-and-incorporate-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Deep analysis document and integrated project knowledge. |
| **consumes** | — | — | Research topic, external URLs, search queries, and existing project memories. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Research and Incorporate Workflow (technique) defined in cross-phase. > "# Research and Incorporate Workflow" — .claude/skills/research-and-incorporate/references/workflow.md:1
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-triage-skill-request-py

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `triage_skill_request.py` |
| **card** | — | — | [triage-skill-request-py](../concepts/rjm/triage-skill-request-py.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path, script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: triage_skill_request.py (name-only) defined in none. (used, not defined) > "triage_skill_request.py - Intelligent skill routing from any user input" — .claude/skills/skillforge/scripts/triage_skill_request.py:3
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-per-pr-live-state-re-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Per-PR Live-State Re-Triage` |
| **card** | — | — | [per-pr-live-state-re-triage](../concepts/rjm/per-pr-live-state-re-triage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Binding action verdict (`ACT` or `SKIP`) with associated rationale. |
| **consumes** | — | — | Target PR number and current remote base/head refs via `check_pr_live_state.py`. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Per-PR Live-State Re-Triage (gate) defined in rjm:review. > "### Per-PR Live-State Re-Triage (BLOCKING, issue #2455)" — docs/autonomous-pr-monitor.md:81 > "Before any per-tier action on each PR (arming auto-merge, pushing a CI fix, posting a thread reply), call the live-state gate and branch on the JSON ...
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-clear-handoffs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Clear Handoffs` |
| **card** | — | — | [clear-handoffs](../concepts/rjm/clear-handoffs.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured handoff documents, context transfers, and input parameters for subsequent agents. |
| **consumes** | — | — | Agent completion state, working artifacts, decisions made, and pending actions. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Clear Handoffs (pattern) defined in cross-phase. > "Explicit protocols prevent context loss between agents" — .agents/AGENT-SYSTEM.md:23
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-triagereport

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TriageReport` |
| **card** | — | — | [triagereport](../concepts/rjm/triagereport.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: TriageReport (name-only) defined in none. (used, not defined) > "class TriageReport:" — scripts/issue_triage.py:119
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-development-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Development Workflows` |
| **card** | — | — | [development-workflows](../concepts/rjm/development-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Development Workflows (name-only) defined in none. (used, not defined) > "\| [Development Workflows](#development-workflows) \| Git workflows, merge resolution, metrics, encoding \|" — docs/skill-reference.md:32
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-check-workflow-environment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `check_workflow_environment` |
| **card** | — | — | [check-workflow-environment](../concepts/rjm/check-workflow-environment.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: check_workflow_environment (name-only) defined in none. (used, not defined) > "def check_workflow_environment() -> EnvironmentResult:" — scripts/pr_maintenance/maintenance.py:186
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-epistemic-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `EPISTEMIC BOUNDARY` |
| **card** | — | — | [epistemic-boundary](../concepts/rjm/epistemic-boundary.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: EPISTEMIC BOUNDARY (name-only) defined in none. (used, not defined) > "EPISTEMIC BOUNDARY (critical for avoiding confirmation bias):" — .claude/skills/decision-critic/scripts/decision-critic.py:175
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-common-iteration-patterns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Common Iteration Patterns` |
| **card** | — | — | [common-iteration-patterns](../concepts/rjm/common-iteration-patterns.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Specific architectural interventions (examples, scripts, references, checkpoints, scope narrowing). |
| **consumes** | — | — | Observed agent execution failure modes or inconsistencies. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Common Iteration Patterns (pattern) defined in cross-phase. > "## Common Iteration Patterns" — .claude/skills/skillforge/references/iteration-guide.md:67
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflowrun

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowRun` |
| **card** | — | — | [workflowrun](../concepts/rjm/workflowrun.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: WorkflowRun (name-only) defined in none. (used, not defined) > "class WorkflowRun:" — .github/scripts/measure_workflow_coalescing.py:61
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-file-changes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow File Changes` |
| **card** | — | — | [workflow-file-changes](../concepts/rjm/workflow-file-changes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Mandatory compliance checks: SHA pinning of actions, secret exposure verification, and shell injection rejection. |
| **consumes** | — | — | Modifications to `.github/workflows/`, `.gitlab-ci.yml`, or other CI/CD configuration files. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow File Changes (gate) defined in rjm:review. > "### Workflow File Changes (Highest Risk)" — .claude/agents/security.md:165
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-tier-1-ci-cd-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 1: CI/CD Pipeline` |
| **card** | — | — | [tier-1-ci-cd-pipeline](../concepts/rjm/tier-1-ci-cd-pipeline.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug, doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Tier 1: CI/CD Pipeline (name-only) defined in none. (used, not defined) > "subgraph T1[\"Tier 1: CI/CD Pipeline\"]" — docs/codeql-architecture.md:19
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-router-boundary-adr-078

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Router boundary (ADR-078)` |
| **card** | — | — | [router-boundary-adr-078](../concepts/rjm/router-boundary-adr-078.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Asymmetric routing handoff to orchestrator with strict prohibition against circular routing back to autoplan. |
| **consumes** | — | — | Ambiguous, cross-cutting, or multi-agent execution requests. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Router boundary (ADR-078) (pattern) defined in cross-phase. > "**Router boundary (ADR-078).** Autoplan is the outer front-door router at the" — .claude/skills/autoplan/SKILL.md:139
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-ooda-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OODA Loop` |
| **card** | — | — | [ooda-loop](../concepts/rjm/ooda-loop.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Rapid iterative cycles of observation, orientation, decision, and action. |
| **consumes** | — | — | Environmental signals, codebase state, operational telemetry, plan specifications. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: OODA Loop (technique) defined in rjm:cross-phase. > "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/analyze/references/strategy-ooda-loop.md:9
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-iteration-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iteration Protocol` |
| **card** | — | — | [iteration-protocol](../concepts/rjm/iteration-protocol.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured iteration inputs (`ITERATION_INPUT`) feeding prioritized issues back into Phase 1 analysis. |
| **consumes** | — | — | Combined panel feedback and issue tables from rejected evaluation rounds. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Iteration Protocol (pattern) defined in rjm:cross-phase. > "## Iteration Protocol" — .claude/skills/skillforge/references/synthesis-protocol.md:238
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundaries` |
| **card** | — | — | [boundaries](../concepts/rjm/boundaries.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundaries (name-only) defined in none. (used, not defined) > "## Boundaries" — AGENTS.md:21
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-agent-orchestration-mcp

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Orchestration MCP` |
| **card** | — | — | [agent-orchestration-mcp](../concepts/rjm/agent-orchestration-mcp.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Agent Orchestration MCP (name-only) defined in none. (used, not defined) > "- **ADR-013**: Agent Orchestration MCP (proposed)" — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:45
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pr-branch-trust-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR-branch trust boundary` |
| **card** | — | — | [pr-branch-trust-boundary](../concepts/rjm/pr-branch-trust-boundary.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | Security controls, path locks, and execution boundaries isolating review runner execution. |
| **consumes** | — | — | Untrusted code and configuration checked out from external PR branches during review sessions. |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PR-branch trust boundary (pattern) defined in rjm:Review. > "- **PR-branch trust boundary**: when `/pr-review` runs after" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:83
- **sequencing note:** Governs execution flow in RJM rjm:Review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pre-close-sequence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Close Sequence` |
| **card** | — | — | [pre-close-sequence](../concepts/rjm/pre-close-sequence.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Completed handoff document, stored Serena memory findings, validated exit state. |
| **consumes** | — | — | Active delegation statuses, synthesis findings, delegation count, per-issue handoff template. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Pre-Close Sequence (checklist) defined in rjm:cross-phase. > "1. Verify all delegations have returned or been explicitly abandoned." — .claude/agents/orchestrator.md:221
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-architecture-boundary-security-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Architecture & Boundary Security Audit` |
| **card** | — | — | [architecture-boundary-security-audit](../concepts/rjm/architecture-boundary-security-audit.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Privilege boundary maps, attack surface analysis, and data flow security evaluations. |
| **consumes** | — | — | System architecture designs, trust boundary specifications, and inter-component communication models. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Architecture & Boundary Security Audit (technique) defined in rjm:review. (used, not defined) > "Architecture & Boundary Security Audit" — .claude/agents/security.md:340
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-revenue-closed-loop-pattern

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Revenue-Closed-Loop Pattern` |
| **card** | — | — | [revenue-closed-loop-pattern](../concepts/rjm/revenue-closed-loop-pattern.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Refactored, decoupled, and maintainable software abstractions obeying core design principles. |
| **consumes** | — | — | Software architecture designs, class hierarchies, and modular components under evaluation. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Revenue-Closed-Loop Pattern (pattern) defined in rjm:cross-phase. > "## Revenue-Closed-Loop Pattern" — .claude/skills/planner/references/agent-architecture-patterns.md:57
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-clause

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP-clause` |
| **card** | — | — | [skip-clause](../concepts/rjm/skip-clause.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Frontmatter description directives explicitly routing out-of-scope requests to sibling skills. |
| **consumes** | — | — | Sibling skill/agent definitions with overlapping domain boundaries. |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP-clause (pattern) defined in cross-phase. (used, not defined) > "Skill-Router Eval: measure whether SKIP-clause descriptions improve sibling disambiguation." — scripts/eval/eval_skill_router.py:2
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-qa-skip-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_QA_SKIP_EVIDENCE` |
| **card** | — | — | [qa-skip-evidence](../concepts/rjm/qa-skip-evidence.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _QA_SKIP_EVIDENCE (name-only) defined in none. (used, not defined) > "_QA_SKIP_EVIDENCE = frozenset(_QA_SKIP_CHECKERS)" — scripts/validate_session_json.py:174
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-consistency-model-per-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consistency Model per Boundary` |
| **card** | — | — | [consistency-model-per-boundary](../concepts/rjm/consistency-model-per-boundary.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Consistency Model per Boundary (name-only) defined in cross-phase. (used, not defined) > "Every read or write boundary has a consistency model. State which one." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:67
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-check-adr-lifecycle-py

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `check_adr_lifecycle.py` |
| **card** | — | — | [check-adr-lifecycle-py](../concepts/rjm/check-adr-lifecycle-py.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: check_adr_lifecycle.py (name-only) defined in none. (used, not defined) > "Kin to ``check_adr_lifecycle.py``'s own corpus sentinel" — scripts/validation/check_adr_links.py:953
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-collision-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `collision loop` |
| **card** | — | — | [collision-loop](../concepts/rjm/collision-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A verified collision-free file path by appending numerical suffixes (`-2`, `-3`, ...) until no file collision exists. |
| **consumes** | — | — | Base checkpoint filename candidate and existing files in `.agents/checkpoints/`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: collision loop (pattern) defined in cross-phase. > "Do not overwrite an existing file. Use this collision loop before" — .claude/commands/checkpoint.md:75
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP` |
| **card** | — | — | [skip](../concepts/rjm/skip.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | An exit code 1 or structured payload signaling the calling agent to halt without error. |
| **consumes** | — | — | Pre-action probe evaluation indicating a conflicting active lease, merged state, or closed PR. |
| **impl status** | — | — | defects: doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP (pattern) defined in cross-phase. (used, not defined) > "return `SKIP` with reason `held-by:<owner>` and the `expires_at` so the caller knows when to retry." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:90
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-health-indicators

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline Health Indicators` |
| **card** | — | — | [pipeline-health-indicators](../concepts/rjm/pipeline-health-indicators.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Pipeline health reporting summaries (>=95% success rate, <2% flaky tests, >=80% cache hit rate, <2min queue time). |
| **consumes** | — | — | Continuous integration telemetry logs over time. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Pipeline Health Indicators (checklist) defined in rjm:build. > "### Pipeline Health Indicators" — .claude/agents/devops.md:265
- **sequencing note:** Governs execution flow in RJM rjm:build.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-ci-cd-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI/CD Pipeline` |
| **card** | — | — | [ci-cd-pipeline](../concepts/rjm/ci-cd-pipeline.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, other, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: CI/CD Pipeline (name-only) defined in none. (used, not defined) > "### CI/CD Pipeline" — .claude/skills/code-qualities-assessment/README.md:65
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-data-pipeline-pattern

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Data Pipeline Pattern` |
| **card** | — | — | [data-pipeline-pattern](../concepts/rjm/data-pipeline-pattern.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | SLI definitions for data freshness elapsed time, record validation ratios, and record count completeness. |
| **consumes** | — | — | ETL pipeline execution logs, database record counts, and schedule requirements. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Data Pipeline Pattern (pattern) defined in cross-phase. > "## Data Pipeline Pattern" — .claude/skills/slo-designer/references/slo-design-patterns.md:91
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-generator-evaluator-regenerate-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generator-Evaluator-Regenerate loop` |
| **card** | — | — | [generator-evaluator-regenerate-loop](../concepts/rjm/generator-evaluator-regenerate-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Progressively refined artifacts meeting rubric acceptance thresholds. |
| **consumes** | — | — | Draft artifacts generated by worker agents and structured feedback from evaluators. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Generator-Evaluator-Regenerate loop (pattern) defined in cross-phase. > "Generator-Evaluator-Regenerate loop with structured feedback" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:35
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-inspect-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `inspect_workflow` |
| **card** | — | — | [inspect-workflow](../concepts/rjm/inspect-workflow.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: inspect_workflow (name-only) defined in none. (used, not defined) > "def inspect_workflow(path: Path) -> list[BudgetFinding]:" — scripts/ci/validate_ai_review_budgets.py:103
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Constraints` |
| **card** | — | — | [workflow-constraints](../concepts/rjm/workflow-constraints.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: cross-file-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Constraints (name-only) defined in none. (used, not defined) > "## Workflow Constraints" — .agents/governance/PROJECT-CONSTRAINTS.md:76
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-git-bisect-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git bisect workflow` |
| **card** | — | — | [git-bisect-workflow](../concepts/rjm/git-bisect-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Exact SHA of the commit that introduced a defect or test failure. |
| **consumes** | — | — | A known good commit tag/hash, a known bad commit, and reproducible verification criteria. |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Git bisect workflow (technique) defined in cross-phase. > "Git bisect workflow" — .claude/skills/git-advanced-workflows/SKILL.md:18
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-string-concatenation-in-loops

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `String Concatenation in Loops` |
| **card** | — | — | [string-concatenation-in-loops](../concepts/rjm/string-concatenation-in-loops.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Severe non-redundancy penalty (2/10) accompanied by prescriptive remediation using `StringBuilder`. |
| **consumes** | — | — | Loop routines constructing aggregate strings via repeated `+` or `+=` concatenation operators. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: String Concatenation in Loops (pattern) defined in cross-phase. > "### String Concatenation in Loops (Non-Redundancy: 2/10)" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:106
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skill-lifecycle-states

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Lifecycle States` |
| **card** | — | — | [skill-lifecycle-states](../concepts/rjm/skill-lifecycle-states.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Formal state classifications governing whether a skill may be recommended to or executed by agents. |
| **consumes** | — | — | Skill creation events, validation results (atomicity score, validation count), and deprecation triggers. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skill Lifecycle States (pattern) defined in cross-phase. > "The system MUST support the following skill lifecycle states:" — .agents/archive/planning/PRD-skills-index-registry.md:145
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-7-phase-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `7-phase pipeline` |
| **card** | — | — | [7-phase-pipeline](../concepts/rjm/7-phase-pipeline.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Progressive lifecycle artifacts: PRD, Spec, Plan, Code, Test verdicts table, Review findings list, and Ship report. |
| **consumes** | — | — | User feature requests, problem statements, and repository context. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: 7-phase pipeline (pattern) defined in rjm:cross-phase. > "The agents follow a 7-phase pipeline. Each phase has a defined input, a command to invoke, and a durable artifact it produces." — docs/getting-started.md:67
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-006-thin-workflows-testable-modules-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-006-thin-workflows-testable-modules.md` |
| **card** | — | — | [adr-006-thin-workflows-testable-modules-md](../concepts/rjm/adr-006-thin-workflows-testable-modules-md.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR-006-thin-workflows-testable-modules.md (name-only) defined in none. (used, not defined) > "unresolved:.agents/architecture/reviews/ADR-041-codeql-integration-REVIEW.md:./.agents/architecture/ADR-006-thin-workflows-testable-modules.md" — scripts/validation/check_adr_links_baseline.txt:48
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pipeline Metrics` |
| **card** | — | — | [pipeline-metrics](../concepts/rjm/pipeline-metrics.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | Quantified pipeline performance baselines and SLA compliance tracking. |
| **consumes** | — | — | Continuous integration and deployment telemetry. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Pipeline Metrics (checklist) defined in rjm:build. > "## Pipeline Metrics" — .claude/agents/devops.md:234
- **sequencing note:** Governs execution flow in RJM rjm:build.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoffpreserved

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoffPreserved` |
| **card** | — | — | [handoffpreserved](../concepts/rjm/handoffpreserved.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoffPreserved (name-only) defined in none. (used, not defined) > "        \"handoffPreserved\"," — scripts/validate_session_json.py:153
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-mermaid-sequence-example

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mermaid Sequence Example` |
| **card** | — | — | [mermaid-sequence-example](../concepts/rjm/mermaid-sequence-example.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Mermaid Sequence Example (name-only) defined in none. (used, not defined) > "## Mermaid Sequence Example" — .claude/skills/codebase-documenter/references/visual_aids_guide.md:19
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-infinite-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `INFINITE_LOOP` |
| **card** | — | — | [infinite-loop](../concepts/rjm/infinite-loop.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: INFINITE_LOOP (name-only) defined in none. (used, not defined) > "INFINITE_LOOP = \"infinite_loop\"" — scripts/error_classification.py:42
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-shift-left-effectiveness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shift-Left Effectiveness` |
| **card** | — | — | [shift-left-effectiveness](../concepts/rjm/shift-left-effectiveness.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Weighted shift-left score and phase detection breakdown. |
| **consumes** | — | — | Issue tracking records, PR review comments, and security vulnerability reports. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Shift-Left Effectiveness (technique) defined in cross-phase. > "Issues caught during agent review vs. PR review vs. production." — docs/agent-metrics.md:74
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-artifact

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff Artifact` |
| **card** | — | — | [handoff-artifact](../concepts/rjm/handoff-artifact.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Handoff Artifact (name-only) defined in none. (used, not defined) > "\| Agent \| Relationship \| When to Pair \| Handoff Artifact \|" — .agents/governance/interview-response-template.md:69
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-lifecycle-statuses

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `LIFECYCLE_STATUSES` |
| **card** | — | — | [lifecycle-statuses](../concepts/rjm/lifecycle-statuses.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: LIFECYCLE_STATUSES (name-only) defined in none. (used, not defined) > "LIFECYCLE_STATUSES: frozenset[str] = frozenset(" — scripts/validation/check_adr_lifecycle.py:154
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundary-controls

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundary Controls` |
| **card** | — | — | [boundary-controls](../concepts/rjm/boundary-controls.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Implementation checklist verifying input validation, rate limiting, authentication, TLS, authorization, and audit logging. |
| **consumes** | — | — | Trust boundary definitions (TB1 Input, TB2 Auth, TB3 Authz) and interface communication protocols. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundary Controls (checklist) defined in cross-phase. (used, not defined) > "### Boundary Controls" — .agents/security/architecture-security-template.md:108
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-select-workflow-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_select_workflow_files` |
| **card** | — | — | [select-workflow-files](../concepts/rjm/select-workflow-files.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _select_workflow_files (name-only) defined in none. (used, not defined) > "def _select_workflow_files(" — scripts/validation/run_workflow_local_test.py:377
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-execute-with-iteration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Execute with Iteration` |
| **card** | — | — | [execute-with-iteration](../concepts/rjm/execute-with-iteration.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Executed modification and immediate per-step adjustments. |
| **consumes** | — | — | Decomposed task step and current environment state. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Execute with Iteration (technique) defined in cross-phase. > "### 4. Execute with Iteration" — .claude/skills/context-optimizer/references/vibe-engineering.md:27
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-get-changed-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `get_changed_workflows` |
| **card** | — | — | [get-changed-workflows](../concepts/rjm/get-changed-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: get_changed_workflows (name-only) defined in none. (used, not defined) > "def get_changed_workflows(self) -> list[Path]:" — scripts/validate_workflows.py:513
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-investigation-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation Workflow` |
| **card** | — | — | [investigation-workflow](../concepts/rjm/investigation-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Diagnostic path sequencing identifying root cause across telemetry pillars. |
| **consumes** | — | — | System symptoms, incident alerts, observability signals (metrics, logs, traces). |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Investigation Workflow (technique) defined in cross-phase. (used, not defined) > "## Investigation Workflow" — .claude/skills/analyze/references/reliability-observability-pillars.md:67
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-structure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Structure` |
| **card** | — | — | [workflow-structure](../concepts/rjm/workflow-structure.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Structure (name-only) defined in none. (used, not defined) > "2. **Workflow Structure**: Required fields (`name`, `on`, `jobs`)" — docs/WORKFLOW-VALIDATION.md:30
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestration-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orchestration Budget` |
| **card** | — | — | [orchestration-budget](../concepts/rjm/orchestration-budget.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Bounded agent dispatch waves, early synthesis on budget exhaustion. |
| **consumes** | — | — | Delegation count tracking, wave concurrency demands, agent task definitions. |
| **impl status** | — | — | defects: missing-path, doc-drift, cross-file-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Orchestration Budget (pattern) defined in rjm:cross-phase. > "Two axes, not one. The delegation cap below bounds how *many* agents a task spends." — .claude/agents/orchestrator.md:317
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-continuous-improvement-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Continuous Improvement Loop` |
| **card** | — | — | [continuous-improvement-loop](../concepts/rjm/continuous-improvement-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Systematic updates to agent skills and Serena memories that enhance subsequent execution runs. |
| **consumes** | — | — | Task execution logs, retrospective reflection artifacts, and skillbook update PRs. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Continuous Improvement Loop (pattern) defined in rjm:retrospective. > "Execution --> Reflection --> Skill Update --> Improved Execution" — .claude/agents/retrospective.md:1349
- **sequencing note:** Governs execution flow in RJM rjm:retrospective.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-coalescing-md

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `workflow-coalescing.md` |
| **card** | — | — | [workflow-coalescing-md](../concepts/rjm/workflow-coalescing-md.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: workflow-coalescing.md (name-only) defined in none. (used, not defined) > "unresolved:.agents/metrics/workflow-coalescing.md:.agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md" — scripts/validation/check_adr_links_baseline.txt:56
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-parse-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `parse_workflow` |
| **card** | — | — | [parse-workflow](../concepts/rjm/parse-workflow.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: parse_workflow (name-only) defined in none. (used, not defined) > "def parse_workflow(data: dict[str, Any]) -> WorkflowDefinition:" — scripts/workflow/loader.py:38
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pr-maintenance-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR maintenance workflow` |
| **card** | — | — | [pr-maintenance-workflow](../concepts/rjm/pr-maintenance-workflow.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean (citing inventory card records defects: none) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PR maintenance workflow (name-only) defined in none. (used, not defined) > "PR maintenance workflow" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:62
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-when-to-use-a-diagram

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `When to Use a Diagram` |
| **card** | — | — | [when-to-use-a-diagram](../concepts/rjm/when-to-use-a-diagram.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: When to Use a Diagram (name-only) defined in none. (used, not defined) > "## When to Use a Diagram" — .claude/skills/codebase-documenter/references/visual_aids_guide.md:5
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-quick-fix-flow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick Fix Flow` |
| **card** | — | — | [quick-fix-flow](../concepts/rjm/quick-fix-flow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Implemented code changes verified by QA and completed without planning overhead. |
| **consumes** | — | — | Low-complexity change requests (typos, single-file bug fixes, null checks) explainable in a single sentence. |
| **impl status** | — | — | defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Quick Fix Flow (pattern) defined in cross-phase. > "For simple, well-defined fixes that can be explained in one sentence." — .agents/AGENT-SYSTEM.md:870
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-add-workflow-paths

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_add_workflow_paths` |
| **card** | — | — | [add-workflow-paths](../concepts/rjm/add-workflow-paths.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: script-bug |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _add_workflow_paths (name-only) defined in none. (used, not defined) > "def _add_workflow_paths(repo_root: Path, diff_out: str, changed: list[str]) -> None:" — scripts/validation/checks_plugin.py:300
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-local-run

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Local Run` |
| **card** | — | — | [workflow-local-run](../concepts/rjm/workflow-local-run.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Pass/fail verification verdict ensuring workflow syntax and execution compatibility. |
| **consumes** | — | — | Modified GitHub Actions workflow YAML files in `.github/workflows/`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Local Run (gate) defined in rjm:ship. > "Workflow Local Run" — scripts/validation/pre_pr_sequence.py:406
- **sequencing note:** Governs execution flow in RJM rjm:ship.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-hard-stop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `hard stop` |
| **card** | — | — | [hard-stop](../concepts/rjm/hard-stop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Immediate halt of automated remediation and escalation to human operator. |
| **consumes** | — | — | Round 3 evaluation results and unresolved non-PASS findings. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: hard stop (pattern) defined in rjm:review. > "Hard stop, not a guideline." — .claude/skills/review/SKILL.md:33
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skipped

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIPPED` |
| **card** | — | — | [skipped](../concepts/rjm/skipped.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIPPED (name-only) defined in rjm:review. (used, not defined) > "Mark all of them `SKIPPED` in the output table, set the FINAL VERDICT to the Stage-1 `CRITICAL_FAIL`, and emit only the Stage-1 findings." — .claude/skills/review/SKILL.md:73
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Lifecycle` |
| **card** | — | — | [adr-lifecycle](../concepts/rjm/adr-lifecycle.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Validated lifecycle state progression across Proposed, Accepted, Deprecated, Superseded, and Rejected stages. |
| **consumes** | — | — | Draft architectural decisions and stakeholder reviews. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR Lifecycle (pattern) defined in rjm:spec. > "ADRs progress through stages:" — .claude/skills/adr-generator/references/adr-best-practices.md:67
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-fetch-workflow-document

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fetch_workflow_document` |
| **card** | — | — | [fetch-workflow-document](../concepts/rjm/fetch-workflow-document.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: fetch_workflow_document (name-only) defined in none. (used, not defined) > "def fetch_workflow_document(" — scripts/github_core/workflow_provenance.py:68
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pr-triage-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Triage Protocol` |
| **card** | — | — | [pr-triage-protocol](../concepts/rjm/pr-triage-protocol.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | Tier assignments (T1 land-ready, T2 CI-only, T3 threads-only, T4 both, T5 bot failures) guiding review batching and execution order. |
| **consumes** | — | — | Merge readiness data collected via `test_pr_merge_ready.py`, required check statuses, and review thread counts. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PR Triage Protocol (technique) defined in rjm:review. > "2. **Triage PRs**: Classify each PR into a tier (see PR Triage Protocol below)" — docs/autonomous-pr-monitor.md:33 > "## PR Triage Protocol" — docs/autonomous-pr-monitor.md:67 > "Before running `/pr-review`, classify each open PR into a tier. T...
- **sequencing note:** Governs execution flow in RJM rjm:review.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-protocols

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoff protocols` |
| **card** | — | — | [handoff-protocols](../concepts/rjm/handoff-protocols.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured handoff artifacts enabling context-preserving task transitions between agents. |
| **consumes** | — | — | Current execution context, remaining task requirements, and destination agent capabilities. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoff protocols (pattern) defined in cross-phase. > "- **Content**: Claude-specific prompts with unique sections (MCP tools, Serena integration, handoff protocols)" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:56
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-never-skip-synthesis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Never skip synthesis` |
| **card** | — | — | [never-skip-synthesis](../concepts/rjm/never-skip-synthesis.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:coordinator` |
| **produces** | — | — | A unified, reconciled synthesis resolving contradictions and presenting a singular actionable report. |
| **consumes** | — | — | Disparate specialist agent outputs, review findings, and verification logs. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Never skip synthesis (pattern) defined in rjm:coordinator. > "**Never skip synthesis.** After agents return, combine findings into a single coherent output. Raw concatenation of agent responses is failure." — .claude/agents/orchestrator.md:62
- **sequencing note:** Governs execution flow in RJM rjm:coordinator.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-orchestrator-agent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `orchestrator agent` |
| **card** | — | — | [orchestrator-agent](../concepts/rjm/orchestrator-agent.md) |
| **kind** | — | — | role |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Implementation plans, sub-task delegations to implementers, and synthesized development results. |
| **consumes** | — | — | Selected issue details, project constraints, and architectural standards. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: orchestrator agent (role) defined in cross-phase. (used, not defined) > "- The orchestrator agent should plan the implementation approach and coordinate sub-tasks" — docs/autonomous-issue-development.md:33
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-prepush

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_PREPUSH` |
| **card** | — | — | [skip-prepush](../concepts/rjm/skip-prepush.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_PREPUSH (name-only) defined in none. (used, not defined) > "Historical: abused 3x within hours of creation" — .claude/skills/ai-agents-config-catalog/SKILL.md:51
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-fitness-guide

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fitness guide` |
| **card** | — | — | [fitness-guide](../concepts/rjm/fitness-guide.md) |
| **kind** | — | — | reference |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Calibrated selection of lifecycle commands to execute for a given task. |
| **consumes** | — | — | Task descriptions, risk factors, and development requests. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: fitness guide (reference) defined in cross-phase. > "This is a fitness guide. It maps task shapes to the lifecycle commands" — docs/when-to-use.md:3
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-yaml

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow YAML` |
| **card** | — | — | [workflow-yaml](../concepts/rjm/workflow-yaml.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | Pass/fail validation verdict on workflow syntax, actionlint rules, and local parsing. |
| **consumes** | — | — | GitHub Actions workflow YAML files located under `.github/workflows/`. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow YAML (gate) defined in rjm:ship. (used, not defined) > "4. Workflow YAML (validate GitHub Actions workflows)" — scripts/validation/pre_pr.py:11
- **sequencing note:** Governs execution flow in RJM rjm:ship.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-for-code-and-workflow-prs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `For CODE and WORKFLOW PRs` |
| **card** | — | — | [for-code-and-workflow-prs](../concepts/rjm/for-code-and-workflow-prs.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: For CODE and WORKFLOW PRs (name-only) defined in none. (used, not defined) > "#### For CODE and WORKFLOW PRs" — .claude/skills/review/references/security.md:156
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-selection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Selection` |
| **card** | — | — | [workflow-selection](../concepts/rjm/workflow-selection.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Selection (name-only) defined in none. (used, not defined) > "### Workflow Selection" — .agents/AGENT-SYSTEM.md:1728
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-workflows-py

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_workflows.py` |
| **card** | — | — | [validate-workflows-py](../concepts/rjm/validate-workflows-py.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_workflows.py (name-only) defined in none. (used, not defined) > "#### validate_workflows.py" — scripts/README.md:124
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-workflow-local-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_WORKFLOW_LOCAL_TEST` |
| **card** | — | — | [skip-workflow-local-test](../concepts/rjm/skip-workflow-local-test.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_WORKFLOW_LOCAL_TEST (name-only) defined in none. (used, not defined) > "``SKIP_WORKFLOW_LOCAL_TEST=true``; the bypass is logged, not hidden." — scripts/validation/run_workflow_local_test.py:25
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-lifecycle-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `lifecycle gate` |
| **card** | — | — | [lifecycle-gate](../concepts/rjm/lifecycle-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validation pass/fail verdict and updated baseline counts when invoked with `--write-baseline`. |
| **consumes** | — | — | ADR markdown records under `.agents/architecture/ADR-NNN-*.md` and ratchet baseline `adr_lifecycle_baseline.json`. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: lifecycle gate (gate) defined in cross-phase. > "Ratcheted lifecycle gate over `.agents/architecture/ADR-NNN-*.md` (issue #5191)." — scripts/validation/check_adr_lifecycle.py:24
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-find-workflow-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `find_workflow_files` |
| **card** | — | — | [find-workflow-files](../concepts/rjm/find-workflow-files.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: find_workflow_files (name-only) defined in none. (used, not defined) > "Find all YAML workflow and action files under the given path." — scripts/validation/sha_pinning.py:64
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-check-lifecycle-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_check_lifecycle_rules` |
| **card** | — | — | [check-lifecycle-rules](../concepts/rjm/check-lifecycle-rules.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _check_lifecycle_rules (name-only) defined in none. (used, not defined) > "def _check_lifecycle_rules(record: Record) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:658
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-renew-skip-margin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RENEW_SKIP_MARGIN` |
| **card** | — | — | [renew-skip-margin](../concepts/rjm/renew-skip-margin.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: RENEW_SKIP_MARGIN (name-only) defined in none. (used, not defined) > "RENEW_SKIP_MARGIN = 5 min" — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:256
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-warning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_WARNING` |
| **card** | — | — | [skip-warning](../concepts/rjm/skip-warning.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_WARNING (name-only) defined in none. (used, not defined) > "SKIP_WARNING = (" — scripts/ci/check_ai_review_infra_gate.py:43
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-o6-bounded-context-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `O6 Bounded-context boundaries` |
| **card** | — | — | [o6-bounded-context-boundaries](../concepts/rjm/o6-bounded-context-boundaries.md) |
| **kind** | — | — | checklist |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | Specification of the current bounded context boundary and explicit translation seams to external contexts. |
| **consumes** | — | — | System architecture overview and feature domain model. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: O6 Bounded-context boundaries (checklist) defined in rjm:spec. > "\| **O6 Bounded-context boundaries** \| Which bounded context does this work live in? Where does its model stop and another context's model begin (the seam that needs translation)? \|" — .claude/skills/spec-generator/references/spec-prior-art-s...
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundaries-with-existing-codebase

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundaries with Existing Codebase` |
| **card** | — | — | [boundaries-with-existing-codebase](../concepts/rjm/boundaries-with-existing-codebase.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundaries with Existing Codebase (name-only) defined in cross-phase. (used, not defined) > "## Boundaries with Existing Codebase" — .claude/skills/software-engineering-library/references/domain-driven-design.md:240
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-agent-can-edit-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-can-edit-workflows` |
| **card** | — | — | [agent-can-edit-workflows](../concepts/rjm/agent-can-edit-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: agent-can-edit-workflows (name-only) defined in none. (used, not defined) > "`agent-can-edit-workflows` is not on issue #1855. Per the repo's bot safety" — docs/design/external-signal-gating.md:81
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-drift-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `[skip-drift-check]` |
| **card** | — | — | [skip-drift-check](../concepts/rjm/skip-drift-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Exemption from CI agent drift detection, accompanied by mandatory obligations checklist and required human code-owner approval. |
| **consumes** | — | — | Commit message marker [skip-drift-check], documented justification, updated templates/README.md. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: [skip-drift-check] (gate) defined in rjm:cross-phase. > "Add `[skip-drift-check]` to a commit message in your PR" — CONTRIBUTING.md:532
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-extract-workflow-run-id

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `extract_workflow_run_id` |
| **card** | — | — | [extract-workflow-run-id](../concepts/rjm/extract-workflow-run-id.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: extract_workflow_run_id (name-only) defined in none. (used, not defined) > "def extract_workflow_run_id(details_url: str \| None) -> str \| None:" — scripts/github_core/checks_rollup.py:27
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-loop-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Loop Protocol` |
| **card** | — | — | [loop-protocol](../concepts/rjm/loop-protocol.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | An ACCEPT decision, a regeneration directive with structured feedback, or an escalation package to human users. |
| **consumes** | — | — | Candidate work outputs and rubric evaluation scores. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Loop Protocol (pattern) defined in cross-phase. > "Loop Protocol" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skill-lifecycle-governance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skill lifecycle governance` |
| **card** | — | — | [skill-lifecycle-governance](../concepts/rjm/skill-lifecycle-governance.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Formal lifecycle transitions (Draft → Active → Deprecated) and registry updates tracking skill currency. |
| **consumes** | — | — | Skill creation proposals, validation criteria, and obsolescence signals. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: skill lifecycle governance (pattern) defined in cross-phase. > "This PRD defines a Skills Index Registry to enable O(1) skill lookup by ID, establish consistent naming conventions, and provide skill lifecycle governance." — .agents/archive/planning/PRD-skills-index-registry.md:20
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-yaml-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow YAML Validation` |
| **card** | — | — | [workflow-yaml-validation](../concepts/rjm/workflow-yaml-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validation pass/fail verdict on workflow schema validity and action syntax. |
| **consumes** | — | — | GitHub Actions workflow definitions located under .github/workflows/*.yml. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow YAML Validation (gate) defined in cross-phase. > "Workflow YAML Validation" — scripts/validation/pre_pr_sequence.py:252
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-front-gate-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Front-gate first` |
| **card** | — | — | [front-gate-first](../concepts/rjm/front-gate-first.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Permission to proceed to Phase 1 or immediate halt if research is aspirational. |
| **consumes** | — | — | Research request, named spec, issue, or downstream consumer. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Front-gate first (gate) defined in cross-phase. > "## Front-gate first" — .claude/skills/research-and-incorporate/SKILL.md:20
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skipped-docs-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIPPED: docs-only` |
| **card** | — | — | [skipped-docs-only](../concepts/rjm/skipped-docs-only.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validated QA exemption evidence allowing pre-commit session validators to pass without a QA report. |
| **consumes** | — | — | Staged git changes consisting strictly of markdown documentation files without code, tests, or workflows. |
| **impl status** | — | — | defects: orphan, missing-path, doc-drift, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIPPED: docs-only (gate) defined in cross-phase. > "Strictly editorial doc edits: no code, config, tests, workflows, or code blocks changed" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:123
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff Protocol` |
| **card** | — | — | [handoff-protocol](../concepts/rjm/handoff-protocol.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Structured handoff payloads, routing recommendations, and returned execution results. |
| **consumes** | — | — | Task execution artifacts, agent findings, and subagent output formats. |
| **impl status** | — | — | defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Handoff Protocol (pattern) defined in cross-phase. > "## Handoff Protocol" — .claude/agents/backlog-generator.md:141
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-coalescing-effectiveness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Coalescing Effectiveness` |
| **card** | — | — | [workflow-coalescing-effectiveness](../concepts/rjm/workflow-coalescing-effectiveness.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Quantitative ratio of cancelled runs to total concurrent/cancelled runs, average cancellation latency, and race condition reports. |
| **consumes** | — | — | GitHub Actions workflow run event telemetry and concurrency group cancellation data. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Coalescing Effectiveness (technique) defined in cross-phase. > "**Description**: Percentage of workflow runs successfully cancelled vs. running in parallel due to race conditions." — docs/agent-metrics.md:305
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoffsyntax

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `handoffSyntax` |
| **card** | — | — | [handoffsyntax](../concepts/rjm/handoffsyntax.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Platform-adapted subagent handoff invocation syntax strings (`#runSubagent` or `/agent`). |
| **consumes** | — | — | Platform configuration specifications and target harness invocation semantics. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: handoffSyntax (pattern) defined in cross-phase. > "handoffSyntax: \"#runSubagent\"" — CONTRIBUTING.md:433
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-iter-workflows

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `iter_workflows` |
| **card** | — | — | [iter-workflows](../concepts/rjm/iter-workflows.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: iter_workflows (name-only) defined in none. (used, not defined) > "def iter_workflows(root: Path) -> list[Path]:" — scripts/ci/validate_ai_review_budgets.py:124
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-memory-usage-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory Usage Workflow` |
| **card** | — | — | [memory-usage-workflow](../concepts/rjm/memory-usage-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Retrieved memory content via `mcp__serena__read_memory` incorporated into reasoning and responses. |
| **consumes** | — | — | Task parameters and Serena persistent memory keys via `mcp__serena__list_memories`. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Memory Usage Workflow (technique) defined in cross-phase. > "## Memory Usage Workflow (USE AGGRESSIVELY)" — docs/autonomous-pr-monitor.md:192 > "Your memory capabilities are one of your most powerful features. Use them proactively for nearly every interaction." — docs/autonomous-pr-monitor.md:194
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-spec-layer-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Spec Layer Workflow` |
| **card** | — | — | [spec-layer-workflow](../concepts/rjm/spec-layer-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | EARS requirements (REQ-NNN), architecture designs (DESIGN-NNN), atomic tasks (TASK-NNN), and verified implementations. |
| **consumes** | — | — | Complex feature requests requiring formal requirements, regulatory compliance, or strict multi-tier traceability. |
| **impl status** | — | — | defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Spec Layer Workflow (pattern) defined in cross-phase. > "For structured requirements management with 3-tier traceability." — .agents/AGENT-SYSTEM.md:1080
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-iteration-multiplier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Iteration Multiplier` |
| **card** | — | — | [iteration-multiplier](../concepts/rjm/iteration-multiplier.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Iteration Multiplier (name-only) defined in none. (used, not defined) > "3. **Iteration Multiplier**: Rarely works first try - multiply by 2-5x" — .claude/skills/programming-advisor/references/token-estimates.md:9
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-yamllint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_YAMLLINT` |
| **card** | — | — | [skip-yamllint](../concepts/rjm/skip-yamllint.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_YAMLLINT (name-only) defined in none. (used, not defined) > "matching the ``SKIP_YAMLLINT``/``FORCE_PUSH_OK`` escape-hatch convention in" — scripts/validation/check_push_lock_before_commit.py:46
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-adr-lifecycle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_adr_lifecycle` |
| **card** | — | — | [validate-adr-lifecycle](../concepts/rjm/validate-adr-lifecycle.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_adr_lifecycle (name-only) defined in none. (used, not defined) > "def validate_adr_lifecycle(repo_root: Path) -> bool:" — scripts/validation/check_adr_lifecycle.py:1273
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skill-skip-clause-routing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill SKIP Clause Routing` |
| **card** | — | — | [skill-skip-clause-routing](../concepts/rjm/skill-skip-clause-routing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Pass/fail gate verdict ensuring SKIP routing targets are valid and existing skills. |
| **consumes** | — | — | Skill definitions and their conditional SKIP routing directives across skill families. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skill SKIP Clause Routing (gate) defined in cross-phase. > "Skill SKIP Clause Routing" — scripts/validation/pre_pr_sequence.py:310
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-delta-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Delta Triage` |
| **card** | — | — | [delta-triage](../concepts/rjm/delta-triage.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | Priority-scored, actionable work items routed to GitHub issues (P0/P1) or backlog memory (P2/P3). |
| **consumes** | — | — | Raw Delta items generated during +/Delta self-assessment. |
| **impl status** | — | — | defects: missing-path, internal-contradiction |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Delta Triage (technique) defined in rjm:retrospective. > "Process Delta items to capture actionable improvements." — .claude/skills/retrospective/references/frameworks.md:378
- **sequencing note:** Governs execution flow in RJM rjm:retrospective.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-leaky-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Leaky Boundary` |
| **card** | — | — | [leaky-boundary](../concepts/rjm/leaky-boundary.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Architectural instructions to wrap external types in native domain entities and value objects. |
| **consumes** | — | — | Domain methods exposing ORM models, persistence types, or vendor SDK classes directly. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Leaky Boundary (pattern) defined in cross-phase. > "- **Leaky Boundary**: returning third-party SDK types or ORM entities from a domain method. The boundary exists in name only. Wrap." — .claude/skills/software-engineering-library/references/domain-driven-design.md:236
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflowexecutor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowExecutor` |
| **card** | — | — | [workflowexecutor](../concepts/rjm/workflowexecutor.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: WorkflowExecutor (name-only) defined in none. (used, not defined) > "class WorkflowExecutor:" — scripts/workflow/executor.py:45
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-ci-feedback-sub-loop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI-feedback sub-loop` |
| **card** | — | — | [ci-feedback-sub-loop](../concepts/rjm/ci-feedback-sub-loop.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Clustered error groupings and sequential remediation passes through the lifecycle phases. |
| **consumes** | — | — | Continuous integration failure logs, test error reports, and workflow failure summaries. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: CI-feedback sub-loop (pattern) defined in cross-phase. > "\|CI-feedback sub-loop: cluster, ladder build->test->review->ship. See `.agents/governance/CI-FEEDBACK-SUBLOOP.md`" — AGENTS.md:38
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-workflow-yaml

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_workflow_yaml` |
| **card** | — | — | [validate-workflow-yaml](../concepts/rjm/validate-workflow-yaml.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, other, exit-code-mismatch |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_workflow_yaml (name-only) defined in none. (used, not defined) > "def validate_workflow_yaml(repo_root: Path) -> bool:" — scripts/validation/checks_tooling.py:355
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-ext-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_EXT_BOUNDARY` |
| **card** | — | — | [ext-boundary](../concepts/rjm/ext-boundary.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _EXT_BOUNDARY (name-only) defined in none. (used, not defined) > "_EXT_BOUNDARY = " — scripts/validation/pr_description.py:68
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-sequence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_SEQUENCE` |
| **card** | — | — | [sequence](../concepts/rjm/sequence.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _SEQUENCE (name-only) defined in none. (used, not defined) > "The sequence is data. ``_SEQUENCE`` is a tuple of ``_Gate`` rows read top to" — scripts/validation/pre_pr_sequence.py:17
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-run-coalescing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `workflow run coalescing` |
| **card** | — | — | [workflow-run-coalescing](../concepts/rjm/workflow-run-coalescing.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Cancellation of superseded CI jobs and prioritization of recent commit runs. |
| **consumes** | — | — | Rapidly sequenced PR commits and active GitHub Actions workflow executions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: workflow run coalescing (technique) defined in cross-phase. > "Coalescing occurs when rapid successive commits to the same PR trigger concurrent workflow runs, and the concurrency control mechanism cancels in-progress runs to start fresh with the latest commit." — .agents/metrics/workflow-coalescing.md:11
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-cva-to-pattern-pipeline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CVA-to-Pattern Pipeline` |
| **card** | — | — | [cva-to-pattern-pipeline](../concepts/rjm/cva-to-pattern-pipeline.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | A sequence of commonalities, variabilities, entity relationships, and emergent design patterns. |
| **consumes** | — | — | Domain requirements and problem definitions. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: CVA-to-Pattern Pipeline (technique) defined in rjm:spec. > "The CVA-to-Pattern Pipeline" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:25
- **sequencing note:** Governs execution flow in RJM rjm:spec.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-planning-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Planning workflow` |
| **card** | — | — | [planning-workflow](../concepts/rjm/planning-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | An approved implementation plan document written to disk following resources/plan-format.md with embedded decisions and verified risks. |
| **consumes** | — | — | User feature request or problem statement, project requirements, architectural context, and target plan file path. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Planning workflow (technique) defined in rjm:plan. > "1. **Planning workflow** (planner.py): Create and review implementation plans" — .claude/skills/planner/SKILL.md:15
- **sequencing note:** Governs execution flow in RJM rjm:plan.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-leaky-type-at-the-boundary

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Leaky type at the boundary` |
| **card** | — | — | [leaky-type-at-the-boundary](../concepts/rjm/leaky-type-at-the-boundary.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Boundary breach finding and type decoupling remediation substituting domain types for framework types. |
| **consumes** | — | — | Use case signatures, boundary methods, adapter data mappers. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Leaky type at the boundary (pattern) defined in cross-phase. > "a public method on a use case takes or returns a SQLAlchemy row, a Pydantic HTTP model, or a `requests.Response`. Replace the parameter with a domain type and map at the adapter." — .claude/skills/software-engineering-library/references/clean-a...
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-privilege-boundaries

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `privilege boundaries` |
| **card** | — | — | [privilege-boundaries](../concepts/rjm/privilege-boundaries.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Privilege separation rules and boundary enforcement specifications between operational tiers. |
| **consumes** | — | — | System roles, component definitions, permission models, and authorization policies. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: privilege boundaries (pattern) defined in cross-phase. (used, not defined) > "Use it to evaluate privilege boundaries, trust zones, attack surfaces, and sensitive data flows in system designs." — .agents/security/architecture-security-template.md:5
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-resolve-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `resolve_workflow` |
| **card** | — | — | [resolve-workflow](../concepts/rjm/resolve-workflow.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: resolve_workflow (name-only) defined in cross-phase. (used, not defined) > "def resolve_workflow(" — scripts/github_core/recovery_manifest.py:193
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundary-layer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `boundary layer` |
| **card** | — | — | [boundary-layer](../concepts/rjm/boundary-layer.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `none` |
| **produces** | — | — | Inspected, validated, and classified data streams with explicit permissions for automated action. |
| **consumes** | — | — | Raw data streams, operational events, and incoming knowledge artifacts. |
| **impl status** | — | — | defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: boundary layer (pattern) defined in none. (used, not defined) > "3. Does the company have an explicit boundary layer?" — .claude/skills/world-model-diagnostic/SKILL.md:20
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skill-triage-001

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill-Triage-001` |
| **card** | — | — | [skill-triage-001](../concepts/rjm/skill-triage-001.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skill-Triage-001 (name-only) defined in none. (used, not defined) > "Skill-Triage-001 \| Domain-adjusted signal quality for security" — .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:65
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-allocation-in-hot-loops

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Allocation in Hot Loops` |
| **card** | — | — | [allocation-in-hot-loops](../concepts/rjm/allocation-in-hot-loops.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Diagnostic score reduction on the non-redundancy axis (3/10) with refactoring guidance to reuse instances outside loops. |
| **consumes** | — | — | Loops and iteration constructs performing repeated object instantiations. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Allocation in Hot Loops (pattern) defined in cross-phase. > "### Allocation in Hot Loops (Non-Redundancy: 3/10)" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:74
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-shift-left-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shift-Left Score` |
| **card** | — | — | [shift-left-score](../concepts/rjm/shift-left-score.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | A composite score from 0 to 100 representing defect prevention effectiveness. |
| **consumes** | — | — | Issue discovery percentages across agent review, PR review, and production phases. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Shift-Left Score (technique) defined in cross-phase. > "Score = Agent % + (PR % * 0.5) + (Production % * 0)" — .agents/metrics/dashboard-template.md:85
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-build-pipeline-index

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `build_pipeline_index` |
| **card** | — | — | [build-pipeline-index](../concepts/rjm/build-pipeline-index.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: build_pipeline_index (name-only) defined in none. (used, not defined) > "def build_pipeline_index(repo_root: Path) -> PipelineIndex:" — scripts/validation/check_agent_skill_discriminator.py:350
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-parse-workflow-subscriptions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `parse_workflow_subscriptions` |
| **card** | — | — | [parse-workflow-subscriptions](../concepts/rjm/parse-workflow-subscriptions.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: parse_workflow_subscriptions (name-only) defined in none. (used, not defined) > "def parse_workflow_subscriptions(" — scripts/github_core/workflow_event_subscriptions.py:246
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-handoff

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Handoff` |
| **card** | — | — | [handoff](../concepts/rjm/handoff.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Structured return payload or transition artifact transferring control to the orchestrator or downstream agent. |
| **consumes** | — | — | Completed work artifacts, execution telemetry, remaining blockers, verification outputs. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Handoff (pattern) defined in rjm:cross-phase. > "Explicit transfer of context and control between agents with clear accountability" — README.md:144
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-rule-not-applicable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skip-rule-not-applicable` |
| **card** | — | — | [skip-rule-not-applicable](../concepts/rjm/skip-rule-not-applicable.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Validation verdict confirming the rule remained dormant on irrelevant inputs. |
| **consumes** | — | — | Negative test cases and prompt scenarios unrelated to the evaluated rule. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: skip-rule-not-applicable (gate) defined in cross-phase. > "NEGATIVE_GATE = \"skip-rule-not-applicable\"" — scripts/eval/eval-rule-activation.py:203
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-pipeline-rule-limit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PIPELINE_RULE_LIMIT` |
| **card** | — | — | [pipeline-rule-limit](../concepts/rjm/pipeline-rule-limit.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path, other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: PIPELINE_RULE_LIMIT (name-only) defined in none. (used, not defined) > "PIPELINE_RULE_LIMIT: int = 3" — scripts/validation/check_agent_skill_discriminator.py:111
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-dependency-ordering

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependency Ordering` |
| **card** | — | — | [dependency-ordering](../concepts/rjm/dependency-ordering.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Topological sequencing or phased waves of actions where prerequisites strictly precede dependent tasks. |
| **consumes** | — | — | Validated action items and prerequisites. |
| **impl status** | — | — | defects: internal-contradiction, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Dependency Ordering (technique) defined in cross-phase. > "## Dependency Ordering" — .claude/skills/retrospective/references/diagnosis-and-actions.md:181
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-fast-track

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Fast Track` |
| **card** | — | — | [fast-track](../concepts/rjm/fast-track.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | Standardized system behaviors, verified outputs, and structured lifecycle artifacts. |
| **consumes** | — | — | Developer inputs, configuration parameters, and codebase artifacts. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Fast Track (technique) defined in rjm:cross-phase. > "## Fast Track" — .claude/skills/planner/references/explainers-and-intents.md:63
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skipping-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skipping verification` |
| **card** | — | — | [skipping-verification](../concepts/rjm/skipping-verification.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Mandatory requirement to verify each phase against quality gates before proceeding to subsequent workflow steps. |
| **consumes** | — | — | Unverified phase deliverables progressing through workflow transitions. |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Skipping verification (pattern) defined in cross-phase. > "Quality gates exist for a reason" — .claude/skills/research-and-incorporate/SKILL.md:156
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-test-prerequisites

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `test_prerequisites` |
| **card** | — | — | [test-prerequisites](../concepts/rjm/test-prerequisites.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: test_prerequisites (name-only) defined in none. (used, not defined) > "def test_prerequisites() -> None:" — .github/scripts/measure_workflow_coalescing.py:137
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-resolution-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Resolution Workflow` |
| **card** | — | — | [resolution-workflow](../concepts/rjm/resolution-workflow.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | An end-to-end execution lifecycle: Context Gathering, Conflict Classification, Intent Analysis, Resolution, Staging and Verification, Resolution Report, Commit. |
| **consumes** | — | — | PR branches with merge conflicts, git repository worktrees, and commit history. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Resolution Workflow (pattern) defined in rjm:cross-phase. > "## Resolution Workflow" — .claude/agents/merge-resolver.md:75
- **sequencing note:** Governs execution flow in RJM rjm:cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-policies

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_SKIP_POLICIES` |
| **card** | — | — | [skip-policies](../concepts/rjm/skip-policies.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: other |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _SKIP_POLICIES (name-only) defined in none. > "_SKIP_POLICIES = (\"fail\", \"exclude\")" — scripts/eval/_optimizer_adapters.py:54
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-adr-lifecycle-frontmatter-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Lifecycle Frontmatter (ratchet)` |
| **card** | — | — | [adr-lifecycle-frontmatter-ratchet](../concepts/rjm/adr-lifecycle-frontmatter-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Pass/fail gate verdict verifying that ADR frontmatter conforms to lifecycle schema requirements. |
| **consumes** | — | — | Architectural decision records under .agents/architecture/ADR-NNN-*.md and recorded ratchet baselines. |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: ADR Lifecycle Frontmatter (ratchet) (gate) defined in cross-phase. > "ADR Lifecycle Frontmatter (ratchet)" — scripts/validation/pre_pr_sequence.py:264
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-approval-workflow

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Approval Workflow` |
| **card** | — | — | [approval-workflow](../concepts/rjm/approval-workflow.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Formal committee vote (+1, 0, -1) and feedback or development authorization. |
| **consumes** | — | — | ADR submission using ADR-TEMPLATE.md. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Approval Workflow (technique) defined in cross-phase. > "### Approval Workflow" — .agents/governance/steering-committee-charter.md:61
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-privilege-boundary-analysis

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Privilege Boundary Analysis` |
| **card** | — | — | [privilege-boundary-analysis](../concepts/rjm/privilege-boundary-analysis.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Privilege tier inventories (Anonymous, Authenticated, Privileged, System), escalation path matrices, and boundary violation findings. |
| **consumes** | — | — | Component definitions, service configurations, user roles, permission policies. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Privilege Boundary Analysis (technique) defined in cross-phase. (used, not defined) > "## Privilege Boundary Analysis" — .agents/security/architecture-security-template.md:27
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-structured-output-for-workflow-consumption

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Structured Output for Workflow Consumption` |
| **card** | — | — | [structured-output-for-workflow-consumption](../concepts/rjm/structured-output-for-workflow-consumption.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Formatted key-value pairs written to the `$GITHUB_OUTPUT` file descriptor. |
| **consumes** | — | — | Script execution outcomes, calculation results, and JSON metadata. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Structured Output for Workflow Consumption (pattern) defined in cross-phase. > "Structured Output for Workflow Consumption" — .agents/guides/python-cicd-patterns.md:297
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-command-chaining-bypass

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `command-chaining bypass` |
| **card** | — | — | [command-chaining-bypass](../concepts/rjm/command-chaining-bypass.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Security vulnerability scenarios or defensive separator splitting rules preventing unauthorized chained command execution. |
| **consumes** | — | — | Shell command execution requests and command-line parser tokenization logic. |
| **impl status** | — | — | defects: missing-path, doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: command-chaining bypass (pattern) defined in cross-phase. (used, not defined) > "This fixes the command-chaining bypass class tracked upstream in anthropics/claude-code#4956." — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:212-213
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-is-skippable-string-token

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `_is_skippable_string_token` |
| **card** | — | — | [is-skippable-string-token](../concepts/rjm/is-skippable-string-token.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, orphan |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: _is_skippable_string_token (name-only) defined in none. (used, not defined) > "def _is_skippable_string_token(token: tokenize.TokenInfo) -> bool:" — scripts/validation/check_skill_portability.py:177
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-skip-cli-e2e

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SKIP_CLI_E2E` |
| **card** | — | — | [skip-cli-e2e](../concepts/rjm/skip-cli-e2e.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: SKIP_CLI_E2E (name-only) defined in none. (used, not defined) > "a real bypass: ``SKIP_CLI_E2E=true`` is explicitly rejected" — scripts/validation/check_push_lock_before_commit.py:48
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-based

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow-Based` |
| **card** | — | — | [workflow-based](../concepts/rjm/workflow-based.md) |
| **kind** | — | — | pattern |
| **phase** | — | — | `rjm:Phase 0: Skill Triage` |
| **produces** | — | — | Scaffolded skill organized into ordered phases with explicit phase-level verification gates. |
| **consumes** | — | — | Multi-phase execution requirements, sequential workflow steps, and intermediate verification gates. |
| **impl status** | — | — | defects: doc-drift |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow-Based (pattern) defined in rjm:Phase 0: Skill Triage. > "### 1. Workflow-Based (multi-step processes)" — .claude/skills/skillforge/scripts/init_skill.py:214
- **sequencing note:** Governs execution flow in RJM rjm:Phase 0: Skill Triage.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-validate-qa-skip-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_qa_skip_scope` |
| **card** | — | — | [validate-qa-skip-scope](../concepts/rjm/validate-qa-skip-scope.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `none` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: doc-drift, missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: validate_qa_skip_scope (name-only) defined in none. (used, not defined) > "def validate_qa_skip_scope(" — scripts/validate_session_json.py:1269
- **sequencing note:** Governs execution flow in RJM none.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflowsubscriptions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WorkflowSubscriptions` |
| **card** | — | — | [workflowsubscriptions](../concepts/rjm/workflowsubscriptions.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: WorkflowSubscriptions (name-only) defined in cross-phase. (used, not defined) > "class WorkflowSubscriptions:" — scripts/github_core/workflow_event_subscriptions.py:129
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-workflow-inventory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Workflow Inventory` |
| **card** | — | — | [workflow-inventory](../concepts/rjm/workflow-inventory.md) |
| **kind** | — | — | name-only |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | none |
| **consumes** | — | — | none |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Workflow Inventory (name-only) defined in cross-phase. (used, not defined) > "## Workflow Inventory" — .agents/devops/arm-runner-migration-analysis.md:14
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-task-type-triage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Task Type Triage` |
| **card** | — | — | [task-type-triage](../concepts/rjm/task-type-triage.md) |
| **kind** | — | — | technique |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Task classifications, specialist agent routing decisions, and execution strategies. |
| **consumes** | — | — | User requests, task complexity indicators, and domain scope descriptions. |
| **impl status** | — | — | defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104) |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Task Type Triage (technique) defined in cross-phase. (used, not defined) > "Added Task Type Triage table, Reliability Principles (Delegation > Memory), Affirmative Directives, Error Normalization" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —

### sequencing-rjm-boundaries-for-critique

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Boundaries for Critique` |
| **card** | — | — | [boundaries-for-critique](../concepts/rjm/boundaries-for-critique.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | Triaged verification ratings (VERIFIED, FAILED, UNCERTAIN) based on locality and safety boundaries. |
| **consumes** | — | — | Proposed change diffs, touched file paths, and work ticket delivery constraints. |
| **impl status** | — | — | defects: missing-path |

- **class:** UNIQUE
- **difference:** RJM-specific workflow construct: Boundaries for Critique (gate) defined in cross-phase. > "## Boundaries for Critique" — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:28
- **sequencing note:** Governs execution flow in RJM cross-phase.
- **needs decision:** no
- **decision:** —


## 14. Addy-Specific Workflow & Execution Patterns

### sequencing-addy-when-to-use-subagents-for-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `When to Use Subagents for Testing` | — | — |
| **card** | [when-to-use-subagents-for-testing](../concepts/addy/when-to-use-subagents-for-testing.md) | — | — |
| **kind** | pattern | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | Independent reproduction test authored without foreknowledge of the eventual fix, verified to fail on unfixed code. | — | — |
| **consumes** | Bug description, current failing codebase state, subagent orchestration mechanism. | — | — |
| **impl status** | defects: cross-file-contradiction, doc-drift | — | — |

- **class:** UNIQUE
- **difference:** Addy-specific workflow construct: When to Use Subagents for Testing (pattern) defined in cross-phase. > "For complex bug fixes, spawn a subagent to write the reproduction test:" — skills/test-driven-development/SKILL.md:345
- **sequencing note:** Governs execution flow in Addy cross-phase.
- **needs decision:** no
- **decision:** —

