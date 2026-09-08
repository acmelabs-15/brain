# GLOSSARY — Canonical terms

The single source of vocabulary for the lifecycle. Empty until Phase 4. Every term here has a decision behind it; every decision that names a term adds it here in the same step.

## Rules

1. **Before a term is decided**, refer to the source concept with its package prefix: `addy:spec`, `matt:spec`, `rjm:spec`. Never invent an interim neutral word.
2. **After a term is decided**, use only the canonical term everywhere in `docs/` and in every built artifact. `scripts/synthesis/glossary-lint.ts` flags package-prefixed terms that have a decision, and canonical-looking terms that do not.
3. **One term, one meaning.** If a word needs two meanings, it needs two terms. Homonyms from the sources are resolved here, not preserved.
4. **Definitions are complete sentences** that say what the thing is, not what it is for. Purpose goes in the lifecycle spec.
5. **Sources are cited.** Each entry names the concordance row it resolves and the decision that set it.

## Entry format

```
### <canonical-term>

- **definition:** <one to three sentences>
- **kind:** phase | artifact | technique | gate | role | reference | pattern
- **source names:** addy: `<verbatim>` · matt: `<verbatim>` · rjm: `<verbatim>` (or — if absent)
- **decision:** D-NNN
- **concordance:** `docs/analysis/concordance/<family>.md#<row-anchor>`
- **not to be confused with:** <other canonical term(s)>, if any
```

---

## Terms

<!-- Phase 4 appends entries here, alphabetically within kind. -->

### Phases

### baseline-establishment

- **definition:** Baseline establishment is the diagnostic phase in which reproduction steps are minimized to only load-bearing elements and steady-state operating telemetry is recorded as a benchmark.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 2` · rjm: `Establish Baseline`
- **decision:** D-122
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-2`
- **not to be confused with:** `defect-reproduction`, `hypothesis-generation`

### build-phase

- **definition:** The build phase is the implementation stage of the lifecycle where vertical code slices are constructed, unit tests written, and task checklist items executed.
- **kind:** phase
- **source names:** addy: `Build phase` · matt: — · rjm: `Implementation`
- **decision:** D-102
- **concordance:** `docs/analysis/concordance/phases.md#catalog-build-phase`
- **not to be confused with:** `task-execution`, `plan-phase`

### contract-phase

- **definition:** The contract phase is the terminal stage of a parallel change migration where deprecated legacy interfaces, schema columns, or compatibility adapters are cleanly removed after all consumers have migrated.
- **kind:** phase
- **source names:** addy: — · matt: `Contract` · rjm: —
- **decision:** D-109
- **concordance:** `docs/analysis/concordance/phases.md#phase-contract`
- **not to be confused with:** `expand-phase`, `migrate-phase`, `deletion-cleanup`

### defect-remediation

- **definition:** Defect remediation is the concluding diagnostic phase in which the verified fix and permanent regression test are confirmed at the proper architectural seam, instrumentation removed, and validation gates passed.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 5` · rjm: `Phase 3: Run the Drift Gates Locally Before Pushing`
- **decision:** D-125
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-5`
- **not to be confused with:** `quality-assurance`, `diagnostic-cleanup`

### defect-reproduction

- **definition:** Defect reproduction is the initial diagnostic phase in which an automated, deterministic reproduction command is established to reliably demonstrate a reported defect before attempting fixes.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 1` · rjm: `Phase 1: Test Strategy`
- **decision:** D-121
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-1`
- **not to be confused with:** `test`, `baseline-establishment`

### deletion-cleanup

- **definition:** Deletion cleanup is the final step of a code deletion review where obsolete references, stale documentation, and deprecated architecture records are systematically removed.
- **kind:** phase
- **source names:** addy: — · matt: — · rjm: `Phase D4: Cleanup`
- **decision:** D-110
- **concordance:** `docs/analysis/concordance/phases.md#phase-cleanup`
- **not to be confused with:** `diagnostic-cleanup`, `contract-phase`

### diagnostic-cleanup

- **definition:** Diagnostic cleanup is the concluding step of a bug diagnosis workflow in which temporary logging, test probes, and diagnostic scaffolding are removed before committing the fix.
- **kind:** phase
- **source names:** addy: — · matt: `Cleanup` · rjm: —
- **decision:** D-110
- **concordance:** `docs/analysis/concordance/phases.md#phase-cleanup`
- **not to be confused with:** `deletion-cleanup`, `contract-phase`

### engineering-domain

- **definition:** The engineering domain is the functional container classifying core software construction, testing, and maintenance capabilities within the agent skill catalog.
- **kind:** phase
- **source names:** addy: — · matt: `engineering` · rjm: —
- **decision:** D-113
- **concordance:** `docs/analysis/concordance/phases.md#framework-engineering`
- **not to be confused with:** `lifecycle`, `build-phase`

### execution-planning

- **definition:** Execution planning is the primary activity of the plan phase in which an approved specification is translated into architectural milestones, target file lists, and technical approach documentation.
- **kind:** phase
- **source names:** addy: `"Phase 2: Plan"` · matt: — · rjm: `/1-plan`
- **decision:** D-118
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-2-plan`
- **not to be confused with:** `plan-phase`, `task-decomposition`

### expand-phase

- **definition:** The expand phase is the initial stage of a parallel change migration where new database columns, interfaces, or method signatures are introduced additively alongside existing implementations without breaking existing consumers.
- **kind:** phase
- **source names:** addy: `EXPAND` · matt: `Expand` · rjm: —
- **decision:** D-107
- **concordance:** `docs/analysis/concordance/phases.md#phase-expand`
- **not to be confused with:** `migrate-phase`, `contract-phase`

### hypothesis-generation

- **definition:** Hypothesis generation is the diagnostic phase in which three to five ranked, falsifiable hypotheses with specific observable predictions are formulated to explain an observed failure.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 3` · rjm: `Form Hypothesis`
- **decision:** D-123
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-3`
- **not to be confused with:** `hypothesis-probing`

### hypothesis-probing

- **definition:** Hypothesis probing is the active diagnostic phase in which targeted probes, instrumentation, or logging are applied to isolate and test candidate hypotheses one variable at a time.
- **kind:** phase
- **source names:** addy: — · matt: `Phase 4` · rjm: `Diagnosis`
- **decision:** D-124
- **concordance:** `docs/analysis/concordance/phases.md#diagnosing-phase-4`
- **not to be confused with:** `hypothesis-generation`, `defect-remediation`

### lifecycle

- **definition:** The lifecycle is the structured, multi-phase sequence of engineering stages—spanning specification, planning, implementation, testing, review, and shipping—governing autonomous software development.
- **kind:** phase
- **source names:** addy: `SDLC` · matt: `phase` · rjm: `autonomous development session`
- **decision:** D-111
- **concordance:** `docs/analysis/concordance/phases.md#meta-sdlc`
- **not to be confused with:** `phase-routing`

### migrate-phase

- **definition:** The migrate phase is the intermediate stage of a parallel change migration where active call sites and data reads/writes are incrementally transitioned in batches to the expanded interface.
- **kind:** phase
- **source names:** addy: `MIGRATE` · matt: `Migrate` · rjm: —
- **decision:** D-108
- **concordance:** `docs/analysis/concordance/phases.md#phase-migrate`
- **not to be confused with:** `expand-phase`, `contract-phase`

### phase-routing

- **definition:** Phase routing is the meta-orchestration mechanism that determines which lifecycle phase, skill, or workflow command is appropriate for an incoming developer request.
- **kind:** phase
- **source names:** addy: `Meta phase` · matt: `productivity` · rjm: —
- **decision:** D-112
- **concordance:** `docs/analysis/concordance/phases.md#meta-phase-routing`
- **not to be confused with:** `lifecycle`

### plan-phase

- **definition:** The plan phase is the lifecycle stage where technical specifications are decomposed into an acyclic graph of discrete, testable work units with explicit acceptance criteria.
- **kind:** phase
- **source names:** addy: `"Plan phase"` · matt: — · rjm: `Execution Planning`
- **decision:** D-103
- **concordance:** `docs/analysis/concordance/phases.md#catalog-plan-phase`
- **not to be confused with:** `execution-planning`, `task-decomposition`

### prior-art-review

- **definition:** Prior art review is the initial exploratory stage in code review that examines historical context, related architecture decision records, and git history before evaluating diffs.
- **kind:** phase
- **source names:** addy: — · matt: — · rjm: `Phase 0`
- **decision:** D-116
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-homonym`
- **not to be confused with:** `scope-check`, `review-phase`

### quality-assurance

- **definition:** Quality assurance is the systematic verification activity within the test phase that ensures bug fixes include permanent regression tests and satisfy quality invariants.
- **kind:** phase
- **source names:** addy: `Verify phase` · matt: — · rjm: `Quality Assurance`
- **decision:** D-106
- **concordance:** `docs/analysis/concordance/phases.md#catalog-verify-phase`
- **not to be confused with:** `test`, `defect-remediation`

### reconnaissance

- **definition:** Reconnaissance is the preparatory phase within specification or planning that surveys repository conventions, tooling, and modular boundaries to determine feasible scope before detailed design.
- **kind:** phase
- **source names:** addy: `"Phase 0: Scope Check"` · matt: — · rjm: `Phase 0: Recon the target`
- **decision:** D-115
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-scope`
- **not to be confused with:** `scope-check`, `prior-art-review`

### review-phase

- **definition:** The review phase is the post-verification lifecycle stage where independent reviewer roles evaluate code quality, security posture, architectural adherence, and maintainability prior to release.
- **kind:** phase
- **source names:** addy: `Review phase` · matt: — · rjm: `Phase 1: Independent Review`
- **decision:** D-104
- **concordance:** `docs/analysis/concordance/phases.md#catalog-review-phase`
- **not to be confused with:** `test`, `prior-art-review`

### scope-check

- **definition:** The scope check is the initial gate in specification that validates whether an incoming request spans multiple independently testable capabilities and decomposes it before drafting.
- **kind:** phase
- **source names:** addy: `Phase 0` · matt: — · rjm: —
- **decision:** D-116
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-0-homonym`
- **not to be confused with:** `prior-art-review`, `reconnaissance`

### ship-phase

- **definition:** The ship phase is the release lifecycle stage where reviewed changes are packaged, documentation and changelogs generated, migrations finalized, and code tagged or deployed.
- **kind:** phase
- **source names:** addy: `Ship phase` · matt: — · rjm: `Validation and Packaging`
- **decision:** D-105
- **concordance:** `docs/analysis/concordance/phases.md#catalog-ship-phase`
- **not to be confused with:** `review-phase`

### spec

- **definition:** The spec phase is the initial lifecycle stage in which user requirements, problem scope, and system boundaries are explored, clarified, and formalized into an approved technical specification before execution planning.
- **kind:** phase
- **source names:** addy: `DEFINE` · matt: `explore` · rjm: `/spec`
- **decision:** D-100
- **concordance:** `docs/analysis/concordance/phases.md#lifecycle-stage-spec`
- **not to be confused with:** `specification-drafting`, `plan`

### specification-drafting

- **definition:** Specification drafting is the core activity of the spec phase in which user requirements, architecture diagrams, data contracts, and acceptance criteria are written into a structured specification artifact.
- **kind:** phase
- **source names:** addy: `"Phase 1: Specify"` · matt: — · rjm: `PRD to Spec`
- **decision:** D-117
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-1-specify`
- **not to be confused with:** `spec`, `execution-planning`

### task-decomposition

- **definition:** Task decomposition is the final stage of planning in which the execution plan is broken down into an ordered checklist or ticket set of independently testable, bite-sized tasks.
- **kind:** phase
- **source names:** addy: `"Phase 3: Tasks"` · matt: — · rjm: `Kanban`
- **decision:** D-119
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-3-tasks`
- **not to be confused with:** `execution-planning`, `task-execution`

### task-execution

- **definition:** Task execution is the primary activity of the build phase in which code and tests are iteratively written, compiled, and verified against task acceptance criteria.
- **kind:** phase
- **source names:** addy: `"Phase 4: Implement"` · matt: — · rjm: `/2-impl`
- **decision:** D-120
- **concordance:** `docs/analysis/concordance/phases.md#workflow-phase-4-implement`
- **not to be confused with:** `build-phase`, `task-decomposition`

### test

- **definition:** The test phase is the lifecycle stage in which newly constructed code and automated test suites are executed, baseline behaviors verified, and regressions prevented prior to independent code review.
- **kind:** phase
- **source names:** addy: `VERIFY` · matt: — · rjm: `test`
- **decision:** D-101
- **concordance:** `docs/analysis/concordance/phases.md#lifecycle-stage-verify-test`
- **not to be confused with:** `quality-assurance`, `review`

### triage-phase

- **definition:** The triage phase is the pre-specification intake stage in which incoming bug reports, issues, or external requests are inspected, reproduced, labeled, and prepared for entry into the lifecycle.
- **kind:** phase
- **source names:** addy: — · matt: `triage` · rjm: —
- **decision:** D-114
- **concordance:** `docs/analysis/concordance/phases.md#framework-triage`
- **not to be confused with:** `spec`, `reconnaissance`

### Artifacts

### agent-brief

- **definition:** An agent brief is a structured context document specifying problem boundaries, system constraints, user intent, and references necessary to seed an autonomous agent session.
- **kind:** artifact
- **source names:** addy: `product brief` · matt: `agent brief` · rjm: —
- **decision:** D-127
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-agent-brief`
- **not to be confused with:** `one-pager, input-contract`

### agent-guardrails-template

- **definition:** An agent guardrails template is a security and governance schema specifying tool constraints, file fence boundaries, and safety invariants for autonomous subagents.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Agent Guardrails Template`
- **decision:** D-213
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-agent-guardrails-template`
- **not to be confused with:** `session-protocol-template, agent-rules-config`

### agent-instructions-file

- **definition:** An agent instructions file is the repository-level context file (CLAUDE.md or AGENTS.md) instructing AI coding agents on project layout, build commands, and coding guidelines.
- **kind:** artifact
- **source names:** addy: `CLAUDE.md` · matt: `AGENTS.md` · rjm: —
- **decision:** D-165
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-claude-rules`
- **not to be confused with:** `agent-rules-config, editor-rules-config`

### agent-rules-config

- **definition:** An agent rules configuration is a repository or platform policy file governing autonomous agent behavior, coding constraints, tool access, and lifecycle execution parameters.
- **kind:** artifact
- **source names:** addy: `rules` · matt: `per-repo config` · rjm: `Platform Configuration Schema`
- **decision:** D-164
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rules-configuration`
- **not to be confused with:** `agent-instructions-file, editor-rules-config`

### architecture-decision-record

- **definition:** An architecture decision record is a durable document capturing a significant architectural choice, its context, consequences, alternatives considered, and current status.
- **kind:** artifact
- **source names:** addy: `Architecture Decision Records` · matt: `architectural decision` · rjm: `decision group`
- **decision:** D-140
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-architecture-decision-records-concept`
- **not to be confused with:** `considered-options, decision-ticket`

### artifact-template

- **definition:** An artifact template is a standardized document boilerplate defining mandatory sections, markdown formatting, and prompt instructions for generating lifecycle deliverables.
- **kind:** artifact
- **source names:** addy: — · matt: `template` · rjm: —
- **decision:** D-173
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-template`
- **not to be confused with:** `plan-template, seed-template-schema`

### assumption-challenge

- **definition:** An assumption challenge is a structured critique artifact identifying unverified premises, failure modes, and surviving doubts in a specification or architecture.
- **kind:** artifact
- **source names:** addy: `surviving doubts` · matt: — · rjm: `Assumption Challenge Template`
- **decision:** D-153
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-assumption-challenge`
- **not to be confused with:** `review-report, considered-options`

### canonical-glossary-file

- **definition:** A canonical glossary file is the specific tracked repository markdown file (docs/plan/GLOSSARY.md) maintaining the machine-checked vocabulary of the development lifecycle.
- **kind:** artifact
- **source names:** addy: — · matt: `GLOSSARY.md` · rjm: `Data Stores`
- **decision:** D-161
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-glossary-md-file`
- **not to be confused with:** `glossary-doc, shared-vocabulary`

### changeset

- **definition:** A changeset is a versioning artifact documenting atomic package release notes, semver bump classifications, and consumer-facing changelog summaries.
- **kind:** artifact
- **source names:** addy: `releases` · matt: `changeset` · rjm: —
- **decision:** D-154
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-changeset`
- **not to be confused with:** `commit-message, pull-request`

### ci-validation-report-template

- **definition:** A CI validation report template is a standardized schema formatting continuous integration pipeline results, gate checks, and test summaries for release review.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `CI Validation Report Template`
- **decision:** D-206
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-ci-validation-report-template`
- **not to be confused with:** `test-results, post-implementation-verification-template`

### code-style-guidelines

- **definition:** Code style guidelines are documented conventions specifying naming patterns, syntax rules, formatting standards, and structural idioms for a codebase.
- **kind:** artifact
- **source names:** addy: `Code Style` · matt: `design principles` · rjm: —
- **decision:** D-167
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-code-style`
- **not to be confused with:** `project-rules, agent-rules-config`

### commit-message

- **definition:** A commit message is a structured version control summary describing the intent, scope, and rationale of an atomic code change.
- **kind:** artifact
- **source names:** addy: `Change Descriptions` · matt: `commit message` · rjm: —
- **decision:** D-143
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-commit-message`
- **not to be confused with:** `pull-request, changeset`

### concept-card-template

- **definition:** A concept card template is a structured schema defining required fields, verbatim quotation citations, occurrence tables, and design intent for lifecycle concepts.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Card Template`
- **decision:** D-205
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-card-template`
- **not to be confused with:** `artifact-template, visual-card-template`

### considered-options

- **definition:** A considered options record is an architectural analysis artifact documenting candidate solutions evaluated during design alongside the explicit rationale for rejected alternatives.
- **kind:** artifact
- **source names:** addy: `Alternatives Considered` · matt: `Considered Options` · rjm: `Considered Options`
- **decision:** D-139
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-considered-options`
- **not to be confused with:** `architecture-decision-record, decision-ticket`

### context-map

- **definition:** A context map is a structural diagram and architectural inventory illustrating bounded system domains, component relationships, dependencies, and integration boundaries.
- **kind:** artifact
- **source names:** addy: `capability map` · matt: `Context Map` · rjm: `Context Map`
- **decision:** D-141
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-context-map`
- **not to be confused with:** `context-map-file, domain-mapping`

### context-map-file

- **definition:** A context map file is a dedicated markdown document (CONTEXT-MAP.md) detailing service boundaries, module interactions, and interface contracts across a repository.
- **kind:** artifact
- **source names:** addy: — · matt: `CONTEXT-MAP.md` · rjm: —
- **decision:** D-178
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-context-map-md`
- **not to be confused with:** `context-map, exploration-map-file`

### conversation-structure-template

- **definition:** A conversation structure template is a conversational prompt schema defining turn-taking phases, agent personas, and required artifact handoffs in interactive workflows.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Conversation Structure Template`
- **decision:** D-199
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-conversation-structure-template`
- **not to be confused with:** `round-template, agent-brief`

### debug-trace

- **definition:** A debug trace is a chronological diagnostic log or performance capture recording runtime telemetry, function invocations, and variable states during defect investigation.
- **kind:** artifact
- **source names:** addy: `DevTools performance trace` · matt: `debug log` · rjm: `Probe`
- **decision:** D-150
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-debug-trace`
- **not to be confused with:** `test-results, baseline-establishment`

### decision-ticket

- **definition:** A decision ticket is an actionable task unit whose primary deliverable is an architectural or technical choice documented with trade-offs and rationale rather than code.
- **kind:** artifact
- **source names:** addy: — · matt: `decision ticket` · rjm: —
- **decision:** D-184
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-decision-ticket`
- **not to be confused with:** `architecture-decision-record, decision-ticket-set`

### decision-ticket-set

- **definition:** A decision ticket set is a grouped collection of open technical questions and architectural forks that must be resolved prior to scheduling implementation tickets.
- **kind:** artifact
- **source names:** addy: — · matt: `decision tickets` · rjm: —
- **decision:** D-189
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-decision-tickets`
- **not to be confused with:** `decision-ticket, architecture-decision-record`

### deferral-issue-template

- **definition:** A deferral issue template is a formal issue tracking schema for recording non-blocking review findings and technical debt deferred to subsequent iterations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `P1 Deferral Issue Template`
- **decision:** D-218
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-p1-deferral-issue-template`
- **not to be confused with:** `issue-template, task-backlog`

### design-review-template

- **definition:** A design review template is an evaluative schema specifying criteria, checklists, and scoring rubrics for assessing architectural designs before implementation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Design Review Template`
- **decision:** D-215
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-design-review-template`
- **not to be confused with:** `review-report, design-schema`

### design-schema

- **definition:** A design schema is a formal data contract specifying the structure, fields, validation rules, and relationships required for architectural design documents.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Design Schema`
- **decision:** D-201
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-design-schema`
- **not to be confused with:** `design-review-template, yaml-frontmatter-schema`

### diagnosis-template

- **definition:** A diagnosis template is a structured investigation schema guiding root-cause analysis through defect reproduction, baseline metrics, ranked hypotheses, and targeted probes.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Diagnosis Template`
- **decision:** D-208
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-diagnosis-template`
- **not to be confused with:** `investigation-plan, resolution-summary-template`

### discovery-questionnaire

- **definition:** A discovery questionnaire is an exploratory inquiry artifact containing structured clarifying questions and recorded stakeholder responses used to resolve ambiguity during specification.
- **kind:** artifact
- **source names:** addy: — · matt: `discovery questionnaire` · rjm: `Agent Interview Response Template`
- **decision:** D-133
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-discovery-questionnaire`
- **not to be confused with:** `questionnaire-template, agent-brief`

### domain-mapping

- **definition:** A domain mapping is an analytical artifact charting domain models, entity relationships, and operational flows across complex software subsystems.
- **kind:** artifact
- **source names:** addy: — · matt: `mapping` · rjm: —
- **decision:** D-183
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-mapping`
- **not to be confused with:** `context-map, exploration-map`

### editor-rules-config

- **definition:** An editor rules configuration is an IDE-specific context file (.cursorrules or equivalent) providing environment-specific guidelines and prompts to in-editor AI assistants.
- **kind:** artifact
- **source names:** addy: `cursorrules` · matt: `Domain docs` · rjm: —
- **decision:** D-166
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-editor-rules`
- **not to be confused with:** `agent-instructions-file, agent-rules-config`

### evolution-score-template

- **definition:** An evolution score template is an evaluation rubric measuring codebase maturity, architectural drift, and maintainability progression across development milestones.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Evolution Score Template`
- **decision:** D-194
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-evolution-score-template`
- **not to be confused with:** `template-assessment, security-audit-template`

### execution-plan-doc

- **definition:** An execution plan document is a detailed procedural roadmap defining concrete milestones, testing gates, command invocations, and rollback checkpoints for a complex migration.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `ExecutionPlan`
- **decision:** D-198
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-executionplan`
- **not to be confused with:** `lifecycle-plan-template, plan-template`

### exploration-map

- **definition:** An exploration map is a conceptual graph or outline charting the explored problem space, related domains, and potential technical directions during discovery.
- **kind:** artifact
- **source names:** addy: — · matt: `map` · rjm: —
- **decision:** D-176
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-map`
- **not to be confused with:** `exploration-map-file, context-map`

### exploration-map-file

- **definition:** An exploration map file is a lightweight markdown artifact (map.md) recording navigated concepts, open questions, and discovered paths during conversational exploration.
- **kind:** artifact
- **source names:** addy: — · matt: `map.md` · rjm: —
- **decision:** D-175
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-map-md`
- **not to be confused with:** `exploration-map, context-map-file`

### floor-guard-script

- **definition:** A floor guard script is an automated validation script enforcing quality baselines and invariant checks, implemented in pure Bun rather than ported as standalone external scripts.
- **kind:** artifact
- **source names:** addy: `floor-guard.mjs` · matt: — · rjm: —
- **decision:** D-169
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-floor-guard-mjs`
- **not to be confused with:** `validation-script-template, script-template`

### generation-script-template

- **definition:** A generation script template is a code scaffolding template defining boilerplate generators and artifact synthesis utilities implemented in pure Bun.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Generation Script Template`
- **decision:** D-217
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-generation-script-template`
- **not to be confused with:** `script-template, validation-script-template`

### glossary-doc

- **definition:** A glossary document is an authoritative index defining domain terminology, canonical concepts, source citations, and distinctions for a project.
- **kind:** artifact
- **source names:** addy: — · matt: `glossary` · rjm: `source symbols`
- **decision:** D-160
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-glossary`
- **not to be confused with:** `canonical-glossary-file, shared-vocabulary`

### halt-message-schema

- **definition:** A halt message schema is a structured escalation contract defining the error taxonomy, blocking reason, required human input, and resume token when an agent stops.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Halt Message Schema`
- **decision:** D-214
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-halt-message-schema`
- **not to be confused with:** `session-protocol-template, resolution-summary-template`

### implementation-ticket

- **definition:** An implementation ticket is a concrete, self-contained task unit specifying code changes, test additions, and verification steps required to deliver a feature slice.
- **kind:** artifact
- **source names:** addy: — · matt: `_implementation_ ticket` · rjm: —
- **decision:** D-191
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-implementation-ticket`
- **not to be confused with:** `tracer-bullet-ticket, task-card`

### input-contract

- **definition:** An input contract is an immutable, schema-validated specification of all caller-provided parameters, prerequisite artifacts, and environmental preconditions required before phase execution.
- **kind:** artifact
- **source names:** addy: `confirmed statement of intent` · matt: `input pile` · rjm: `Input Contract`
- **decision:** D-130
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-input-contract`
- **not to be confused with:** `agent-brief, scope-constraints`

### investigation-plan

- **definition:** An investigation plan is a diagnostic roadmap specifying reproduction steps, telemetry captures, and analytical hypotheses for troubleshooting complex issues.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `investigation plan`
- **decision:** D-224
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-investigation-plan`
- **not to be confused with:** `diagnosis-template, remediation-action-plan`

### issue-template

- **definition:** An issue template is a standardized form specification guiding developers and agents in submitting complete bug reports, feature requests, or investigation briefs.
- **kind:** artifact
- **source names:** addy: — · matt: `issue-template` · rjm: —
- **decision:** D-182
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-issue-template`
- **not to be confused with:** `deferral-issue-template, local-ticket-template`

### launch-runbook

- **definition:** A launch runbook is a specialized deployment checklist detailing pre-flight checks, staged cutover steps, rollback criteria, and post-launch verification procedures.
- **kind:** artifact
- **source names:** addy: `launch runbook` · matt: — · rjm: `Deployment Diagram`
- **decision:** D-157
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-launch-runbook`
- **not to be confused with:** `runbook, rollback-plan`

### learning-extraction-template

- **definition:** A learning extraction template is a retrospective schema capturing root-cause patterns, process improvements, and model failure modes from completed workflows.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Learning Extraction Template`
- **decision:** D-210
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-learning-extraction-template`
- **not to be confused with:** `learning-record, root-cause-pattern-template`

### learning-record

- **definition:** A learning record is an iterative reflection document capturing operational insights, agent adaptation notes, and process improvements across lifecycle sessions.
- **kind:** artifact
- **source names:** addy: — · matt: `learning-records` · rjm: `Sync log`
- **decision:** D-163
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-learning-records`
- **not to be confused with:** `review-report, learning-extraction-template`

### lifecycle-plan-template

- **definition:** A lifecycle plan template is an overarching execution plan schema defining work breakdown structures, risk matrices, and milestone delivery schedules.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Plan Template`
- **decision:** D-229
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-plan-template`
- **not to be confused with:** `plan-template, execution-plan-doc`

### local-markdown-tickets

- **definition:** Local markdown tickets are file-based task definitions stored directly within a repository's version-controlled documentation to track implementation tasks without external tools.
- **kind:** artifact
- **source names:** addy: — · matt: `Local-markdown tickets` · rjm: —
- **decision:** D-180
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-local-markdown-tickets`
- **not to be confused with:** `local-ticket-template, task-card`

### local-ticket-template

- **definition:** A local ticket template is a markdown boilerplate specifying the description, acceptance criteria, dependencies, and verification steps for an in-repo task ticket.
- **kind:** artifact
- **source names:** addy: — · matt: `local-ticket-template` · rjm: —
- **decision:** D-177
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-local-ticket-template`
- **not to be confused with:** `task-card, local-markdown-tickets`

### measurement-plan

- **definition:** A measurement plan is an experimental artifact defining performance indicators, data collection methods, benchmark baselines, and statistical criteria for validation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Measurement Plan`
- **decision:** D-225
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-measurement-plan`
- **not to be confused with:** `slo-configuration-template, service-dashboard-spec`

### migration-plan-template

- **definition:** A migration plan template is a structured schema defining parallel change phases, schema expansions, data backfills, and deprecation contractions for system migrations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Migration Plan Template`
- **decision:** D-216
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-migration-plan-template`
- **not to be confused with:** `execution-plan-doc, rollback-plan`

### mvp-scope

- **definition:** An MVP scope is an explicit specification of the minimal viable capability set and concrete observable success criteria required for initial release.
- **kind:** artifact
- **source names:** addy: `MVP scope` · matt: `Success looks like` · rjm: —
- **decision:** D-132
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-mvp-scope`
- **not to be confused with:** `scope-constraints, one-pager`

### navigational-map

- **definition:** A navigational map is the active, evolving orientation document maintained by wayfinding skills to guide users and agents through unfamiliar codebases.
- **kind:** artifact
- **source names:** addy: — · matt: `the map` · rjm: —
- **decision:** D-186
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-the-map`
- **not to be confused with:** `wayfinder-map, exploration-map`

### one-pager

- **definition:** A one-pager is a high-density, single-page summary artifact establishing problem scope, target audience, MVP boundaries, and non-goals prior to detailed specification.
- **kind:** artifact
- **source names:** addy: `one-pager` · matt: `Brief` · rjm: —
- **decision:** D-126
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-one-pager`
- **not to be confused with:** `agent-brief, requirements-spec`

### plan-template

- **definition:** A plan template is a standardized schema defining required sections, headings, risk registers, and milestone structures for execution planning documents.
- **kind:** artifact
- **source names:** addy: `Plan Document Template` · matt: `spec-template` · rjm: `Task List Template`
- **decision:** D-136
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-plan-template`
- **not to be confused with:** `artifact-template, task-list`

### plan-vs-reality-record

- **definition:** A plan versus reality record is a variance analysis artifact comparing planned estimates and milestones against actual execution duration and scope adjustments.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `PLAN vs REALITY`
- **decision:** D-223
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-plan-vs-reality`
- **not to be confused with:** `execution-plan-doc, learning-record`

### planguage-requirement-schema

- **definition:** A planguage requirement schema is a formal requirements syntax specifying keyword-value tags (TAG, GIST, SCALE, METER, MUST, WISH) for unambiguous technical verification.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Planguage`
- **decision:** D-200
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-planguage`
- **not to be confused with:** `structured-requirements, requirements-spec`

### plugin-manifest

- **definition:** A plugin manifest is a JSON metadata artifact declaring plugin identity, version, entrypoints, permissions, and tool capabilities for agent platform discovery.
- **kind:** artifact
- **source names:** addy: — · matt: `Claude Code plugin` · rjm: `marketplace plugin`
- **decision:** D-146
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-claude-plugin-manifest`
- **not to be confused with:** `agent-rules-config`

### post-implementation-verification-template

- **definition:** A post-implementation verification template is a reporting schema summarizing automated test runs, regression verifications, and deployment sanity checks.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `PIV Report Template`
- **decision:** D-220
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-piv-report-template`
- **not to be confused with:** `review-report, ci-validation-report-template`

### project-rules

- **definition:** Project rules are repository-scoped behavioral directives and architectural constraints that apply unconditionally to all agents and developers working in a repository.
- **kind:** artifact
- **source names:** addy: `Project rules` · matt: — · rjm: —
- **decision:** D-171
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-project-rules`
- **not to be confused with:** `user-rules, agent-rules-config`

### pull-request

- **definition:** A pull request is a version control change proposal bundling atomic commits, change descriptions, automated test runs, and reviewer approvals for merging into a target branch.
- **kind:** artifact
- **source names:** addy: `pull request` · matt: `Pull requests` · rjm: `restoration PR`
- **decision:** D-142
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-pull-request`
- **not to be confused with:** `commit-message, working-increment`

### questionnaire-template

- **definition:** A questionnaire template is a structured interviewing document providing standard diagnostic and requirements elicitation questions for user grilling.
- **kind:** artifact
- **source names:** addy: — · matt: `questionnaire-template` · rjm: —
- **decision:** D-193
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-questionnaire-template`
- **not to be confused with:** `discovery-questionnaire, round-template`

### readme-doc

- **definition:** A README document is the primary introductory markdown file at a repository or component root providing purpose, setup instructions, usage examples, and architecture overview.
- **kind:** artifact
- **source names:** addy: — · matt: `README.md` · rjm: `Infrastructure Documentation Format`
- **decision:** D-159
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-readme-md-file`
- **not to be confused with:** `agent-instructions-file, glossary-doc`

### reassessment-plan

- **definition:** A reassessment plan is a scheduled review document outlining verification checkpoints, metrics, and criteria for re-evaluating architectural decisions and system performance.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `reassessment-plan`
- **decision:** D-195
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-reassessment-plan`
- **not to be confused with:** `investigation-plan, remediation-action-plan`

### remediation-action-plan

- **definition:** A remediation action plan is a structured operational roadmap specifying corrective actions, assignees, deadlines, and verification gates following an incident or audit.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `action plan`
- **decision:** D-228
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-action-plan`
- **not to be confused with:** `investigation-plan, resolution-summary-template`

### requirements-spec

- **definition:** A requirements specification is a structured catalog of functional and non-functional capability definitions, user stories, and constraints governing system behavior.
- **kind:** artifact
- **source names:** addy: `requirements` · matt: `user stories` · rjm: `Requirement Schema`
- **decision:** D-128
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-requirements`
- **not to be confused with:** `structured-requirements, spec`

### research-ticket

- **definition:** A research ticket is an exploratory task card dedicated to investigating third-party libraries, algorithmic approaches, or performance characteristics prior to design.
- **kind:** artifact
- **source names:** addy: — · matt: `Research tickets` · rjm: —
- **decision:** D-187
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-research-tickets`
- **not to be confused with:** `decision-ticket, implementation-ticket`

### resolution-summary-template

- **definition:** A resolution summary template is a post-mortem document schema summarizing problem statement, root cause, fix implementation, and regression prevention measures.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Resolution Summary Template`
- **decision:** D-226
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-resolution-summary-template`
- **not to be confused with:** `diagnosis-template, remediation-action-plan`

### resource-lease-schema

- **definition:** A resource lease schema is a concurrency control specification defining lease durations, ownership tokens, and expiration conditions for shared development environments.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Lease schema`
- **decision:** D-202
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-lease-schema`
- **not to be confused with:** `input-contract, state-management-script-template`

### review-report

- **definition:** A review report is an evaluative document summarizing multi-perspective code inspection findings, security assessments, architectural adherence, and required remediation items.
- **kind:** artifact
- **source names:** addy: `Review Output Template` · matt: — · rjm: `retrospective_format`
- **decision:** D-151
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-review-report`
- **not to be confused with:** `security-assessment, post-implementation-verification-template`

### rollback-plan

- **definition:** A rollback plan is an operational procedure specifying exact commands and steps required to safely revert a failed deployment or migration to a known good state.
- **kind:** artifact
- **source names:** addy: `rollback steps` · matt: — · rjm: `Resolution Path`
- **decision:** D-155
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rollback-steps`
- **not to be confused with:** `runbook, launch-runbook`

### root-cause-pattern-template

- **definition:** A root cause pattern template is an analytical schema cataloging recurring failure modes, architectural anti-patterns, and diagnostic indicators across defects.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Root Cause Pattern Template`
- **decision:** D-221
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-root-cause-pattern-template`
- **not to be confused with:** `learning-extraction-template, diagnosis-template`

### round-template

- **definition:** A round template is a structured interaction schema defining prompt framing, expected feedback categories, and exit criteria for iterative review or grilling rounds.
- **kind:** artifact
- **source names:** addy: — · matt: `round template` · rjm: —
- **decision:** D-181
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-round-template`
- **not to be confused with:** `questionnaire-template, discovery-questionnaire`

### rule-file-set

- **definition:** A rule file set is a composite collection of specialized rule documents partitioned by domain or lifecycle phase to guide agent behavior without context bloat.
- **kind:** artifact
- **source names:** addy: `rules files` · matt: — · rjm: —
- **decision:** D-170
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-rules-files`
- **not to be confused with:** `agent-rules-config, project-rules`

### runbook

- **definition:** A runbook is an operational procedure document containing step-by-step instructions for operating, monitoring, diagnosing, and maintaining a software service in production.
- **kind:** artifact
- **source names:** addy: `runbook` · matt: — · rjm: `Infrastructure Handoff`
- **decision:** D-156
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-runbook`
- **not to be confused with:** `launch-runbook, rollback-plan`

### scope-constraints

- **definition:** Scope constraints are explicit boundary definitions documenting out-of-scope capabilities, technical invariants, and breaking-change risk assessments for an initiative.
- **kind:** artifact
- **source names:** addy: `Not Doing list` · matt: `Constraints` · rjm: `Breaking Change Assessment`
- **decision:** D-131
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-scope-constraints`
- **not to be confused with:** `input-contract, mvp-scope`

### script-template

- **definition:** A script template is a boilerplate structure for executable automation scripts defining standard argument parsing, logging, error handling, and exit code conventions.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Script Template`
- **decision:** D-197
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-script-template`
- **not to be confused with:** `validation-script-template, state-management-script-template`

### security-assessment

- **definition:** A security assessment is an analytical audit artifact identifying threat models, attack surfaces, vulnerability scans, and required hardening controls for a software component.
- **kind:** artifact
- **source names:** addy: `Security Audit Report` · matt: — · rjm: `Attack Vectors`
- **decision:** D-152
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-security-assessment`
- **not to be confused with:** `review-report, security-audit-template`

### security-audit-template

- **definition:** A security audit template is a comprehensive inspection schema defining threat modeling checks, dependency vulnerability scans, and access control verifications.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Architecture Security Audit Template`
- **decision:** D-219
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-architecture-security-audit-template`
- **not to be confused with:** `security-assessment, review-report`

### seed-template-collection

- **definition:** A seed template collection is a bundled library of baseline skill definitions, command scaffolds, and configuration files used to bootstrap new plugin extensions.
- **kind:** artifact
- **source names:** addy: — · matt: `seed templates` · rjm: —
- **decision:** D-188
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-seed-templates`
- **not to be confused with:** `seed-template-schema, shared-template-library`

### seed-template-schema

- **definition:** A seed template schema is a formal specification defining the frontmatter properties, validation rules, and structural fields required for initializing new skills or templates.
- **kind:** artifact
- **source names:** addy: — · matt: `seed-template schema` · rjm: —
- **decision:** D-174
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-seed-template-schema`
- **not to be confused with:** `artifact-template, seed-template-collection`

### service-dashboard-spec

- **definition:** A service dashboard specification is an operational artifact defining service level indicators (SLIs), alert thresholds, and telemetry visualizations for runtime monitoring.
- **kind:** artifact
- **source names:** addy: `Dashboards` · matt: — · rjm: `SLI (Service Level Indicator)`
- **decision:** D-158
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-monitoring-dashboards`
- **not to be confused with:** `slo-configuration-template, runbook`

### session-protocol-template

- **definition:** A session protocol template is a standardized operational checklist defining startup, work-loop, and shutdown steps for autonomous agent conversations.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `SESSION-PROTOCOL template`
- **decision:** D-212
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-session-protocol-template`
- **not to be confused with:** `agent-guardrails-template, halt-message-schema`

### shared-exploration-map

- **definition:** A shared exploration map is a collaborative context artifact shared across developer and agent turns to synchronize understanding of system topology and problem scope.
- **kind:** artifact
- **source names:** addy: — · matt: `shared map` · rjm: —
- **decision:** D-179
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-shared-map`
- **not to be confused with:** `exploration-map, wayfinder-map`

### shared-template-library

- **definition:** A shared template library is a centralized directory of reusable document schemas, checklists, and prompt scaffolds accessible across multiple lifecycle commands.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Shared Templates`
- **decision:** D-204
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-shared-templates`
- **not to be confused with:** `artifact-template, seed-template-collection`

### shared-vocabulary

- **definition:** A shared vocabulary is a documented semantic model aligning engineering definitions, domain terminology, and user documentation across team and agent interactions.
- **kind:** artifact
- **source names:** addy: — · matt: `shared language` · rjm: `User docs`
- **decision:** D-162
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-shared-language`
- **not to be confused with:** `glossary-doc, canonical-glossary-file`

### shell-template-scaffold

- **definition:** A shell template scaffold is a script boilerplate used in Matt's toolkit for generating executable templates, dropped from brain in favor of pure Bun tooling per D-003.
- **kind:** artifact
- **source names:** addy: — · matt: `template.sh` · rjm: —
- **decision:** D-192
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-template-sh`
- **not to be confused with:** `generation-script-template, script-template`

### skill-specification-template

- **definition:** A skill specification template is a standardized schema defining skill metadata, input/output schemas, invocation triggers, composed tools, and verification invariants.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Skill Specification Template`
- **decision:** D-196
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-skill-specification-template`
- **not to be confused with:** `artifact-template, yaml-frontmatter-schema`

### slo-configuration-template

- **definition:** An SLO configuration template is a declarative schema specifying service level objectives, error budget thresholds, and alerting policies for production services.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `SLO Configuration Template`
- **decision:** D-227
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-slo-configuration-template`
- **not to be confused with:** `service-dashboard-spec, measurement-plan`

### state-management-script-template

- **definition:** A state management script template is a boilerplate for scripts that read, mutate, and synchronize repository state tables and phase markers under concurrent access.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `State Management Script Template`
- **decision:** D-209
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-state-management-script-template`
- **not to be confused with:** `script-template, validation-script-template`

### structured-requirements

- **definition:** Structured requirements are machine-readable requirement declarations formalized with unique identifiers, acceptance criteria, verification methods, and dependency relationships.
- **kind:** artifact
- **source names:** addy: `Spec files` · matt: — · rjm: `Structured requirements`
- **decision:** D-129
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-structured-requirements`
- **not to be confused with:** `requirements-spec, task-list`

### subtask-card

- **definition:** A subtask card is a subordinate work unit record representing an atomic implementation step linked to a parent task card or feature milestone.
- **kind:** artifact
- **source names:** addy: — · matt: `Child ticket` · rjm: `Task Schema`
- **decision:** D-137
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-child-ticket`
- **not to be confused with:** `task-card, task-list`

### task-backlog

- **definition:** A task backlog is an organized repository of pending, unstarted task cards and feature ideas prioritized for future lifecycle iterations.
- **kind:** artifact
- **source names:** addy: — · matt: `backlog` · rjm: `selection group`
- **decision:** D-138
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-backlog`
- **not to be confused with:** `task-list, task-card`

### task-card

- **definition:** A task card is a self-contained work unit record defining a single implementation change with its objective, target files, acceptance criteria, and verification commands.
- **kind:** artifact
- **source names:** addy: `Task List Target` · matt: `ticket` · rjm: `Task Definition Format`
- **decision:** D-135
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-task-unit`
- **not to be confused with:** `task-list, subtask-card`

### task-list

- **definition:** A task list is an ordered checklist of discrete, testable work units with explicit completion criteria and dependencies governing implementation progress.
- **kind:** artifact
- **source names:** addy: `tasks/todo.md` · matt: `tickets` · rjm: `TASK-*`
- **decision:** D-134
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-tasks-todo-list`
- **not to be confused with:** `task-card, subtask-card`

### template-assessment

- **definition:** A template assessment is an evaluative report auditing template completeness, drift against source implementations, and adherence to platform formatting conventions.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Template Assessment`
- **decision:** D-203
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-template-assessment`
- **not to be confused with:** `evolution-score-template, review-report`

### test-coverage-report

- **definition:** A test coverage report is a diagnostic evaluation measuring the proportion of code statements, branches, and critical paths exercised by automated test suites.
- **kind:** artifact
- **source names:** addy: `Test Coverage Analysis` · matt: `test files` · rjm: `corpus_verified`
- **decision:** D-148
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-test-coverage`
- **not to be confused with:** `test-results, test-strategy`

### test-results

- **definition:** A test results record is an execution log capturing test suite execution status, assertion outcomes, failure traces, and duration metrics.
- **kind:** artifact
- **source names:** addy: `Error Output / Test Results` · matt: `failing test` · rjm: `test group`
- **decision:** D-147
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-test-execution-results`
- **not to be confused with:** `test-coverage-report, test-strategy`

### test-strategy

- **definition:** A test strategy is a specification artifact defining testing levels, assertion specifications, test environment requirements, and verification commands for a project.
- **kind:** artifact
- **source names:** addy: `Testing Strategy` · matt: `Testing Decisions` · rjm: `AssertionSpec`
- **decision:** D-149
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-testing-strategy`
- **not to be confused with:** `test-results, test-coverage-report`

### tracer-bullet-ticket

- **definition:** A tracer bullet ticket is an end-to-end implementation task designed to rapidly validate an architectural path, integration seam, or technological feasibility through a minimal functional slice.
- **kind:** artifact
- **source names:** addy: — · matt: `tracer-bullet tickets` · rjm: —
- **decision:** D-185
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-tracer-bullet-tickets`
- **not to be confused with:** `implementation-ticket, task-card`

### user-rules

- **definition:** User rules are developer-scoped personal configuration directives and preferences applied across projects in an agent's global configuration environment.
- **kind:** artifact
- **source names:** addy: `User rules` · matt: — · rjm: —
- **decision:** D-172
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-user-rules`
- **not to be confused with:** `project-rules, agent-rules-config`

### validation-script-template

- **definition:** A validation script template is a test harness boilerplate for deterministic verification scripts that assert file invariants and execution success.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `Validation Script Template`
- **decision:** D-222
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-validation-script-template`
- **not to be confused with:** `script-template, generation-script-template`

### visual-card-template

- **definition:** A visual card template is a presentation schema for displaying concise task status, gate metrics, and architectural diagrams in terminal or chat interfaces.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `visual card template`
- **decision:** D-211
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-visual-card-template`
- **not to be confused with:** `concept-card-template, task-card`

### wayfinder-map

- **definition:** A wayfinder map is a structured architectural overview artifact produced by wayfinding skills to orient developers and agents within a repository's file structure and workflows.
- **kind:** artifact
- **source names:** addy: — · matt: `wayfinder:map` · rjm: —
- **decision:** D-190
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-matt-wayfinder-map`
- **not to be confused with:** `navigational-map, exploration-map`

### windsurf-rules

- **definition:** A windsurf rules artifact is an IDE-specific configuration file (.windsurfrules) for the Windsurf development environment, dropped from canonical lifecycle output in favor of dual-target Claude and Antigravity standards.
- **kind:** artifact
- **source names:** addy: `.windsurfrules` · matt: — · rjm: —
- **decision:** D-168
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-addy-windsurfrules`
- **not to be confused with:** `editor-rules-config, agent-rules-config`

### working-increment

- **definition:** A working increment is a compiled, functional, and test-verified code slice satisfying a defined subset of task acceptance criteria without regressing existing baselines.
- **kind:** artifact
- **source names:** addy: `working increment` · matt: `production code` · rjm: —
- **decision:** D-144
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-code`
- **not to be confused with:** `working-tree, pull-request`

### working-title

- **definition:** A working title is a provisional, human-readable identifier assigned to an exploratory document or draft specification prior to formal naming and indexing.
- **kind:** artifact
- **source names:** addy: — · matt: `Working title` · rjm: —
- **decision:** D-145
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-tree`
- **not to be confused with:** `working-tree, spec`

### working-tree

- **definition:** A working tree is the active filesystem directory structure containing tracked repository files, unstaged modifications, and local artifacts currently checked out by a developer or agent.
- **kind:** artifact
- **source names:** addy: `working tree` · matt: — · rjm: —
- **decision:** D-145
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-working-tree`
- **not to be confused with:** `working-title, working-increment`

### yaml-frontmatter-schema

- **definition:** A YAML frontmatter schema is a formal specification defining the required metadata keys, types, and constraints embedded at the head of markdown documentation.
- **kind:** artifact
- **source names:** addy: — · matt: — · rjm: `YAML Front Matter Schema`
- **decision:** D-207
- **concordance:** `docs/analysis/concordance/artifacts.md#artifact-rjm-yaml-front-matter-schema`
- **not to be confused with:** `design-schema, seed-template-schema`

### Techniques

*(none yet)*

### Gates

*(none yet)*

### Roles

*(none yet)*

### References

*(none yet)*

### Patterns

*(none yet)*
