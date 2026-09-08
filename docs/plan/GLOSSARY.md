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

### acquiring-wisdom

- **definition:** Acquiring wisdom is an engineering technique for acquiring Wisdom represents the boundary where simulated in-workspace instruction yields to external reality. Recognising that models cannot synthesize authentic social or professional feedback, the technique bounds agent teaching by routing questions that demand seasoned judgment to external practitioner communities.
- **kind:** technique
- **source names:** addy: — · matt: `Acquiring Wisdom` · rjm: —
- **decision:** D-353
- **concordance:** `docs/analysis/concordance/techniques.md#matt-acquiring-wisdom`

### adversarial-grilling-technique

- **definition:** Adversarial grilling technique is the core interrogative interview loop in matt's package. It models problem spaces as design trees, questioning users along the decision frontier in batched rounds to eliminate unstated assumptions and establish firm consensus before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `grilling` · rjm: —
- **decision:** D-468
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling`

### afk-research-investigation

- **definition:** Research is an AFK investigation skill dedicated to uncovering external facts from primary sources. By delegating documentation and API verification to a background subagent, it prevents the primary conversational agent from hallucinating or guessing at external technical constraints.
- **kind:** technique
- **source names:** addy: — · matt: `research` · rjm: —
- **decision:** D-295
- **concordance:** `docs/analysis/concordance/techniques.md#matt-research`

### agent-skill-dispatch-meta-pattern

- **definition:** Agent skill dispatch meta pattern is an engineering technique that as the meta-skill of the addy pack, `using-agent-skills` acts as an operating system and router for AI coding agents. It pairs an algorithmic decision tree mapping development stages to specific skills with six mandatory operating behaviors (such as pushing back on bad ideas, enforcing simplicity, and verifying before claiming completion) to maintain engineering discipline across the entire lifecycle.
- **kind:** technique
- **source names:** addy: `using-agent-skills` · matt: — · rjm: —
- **decision:** D-280
- **concordance:** `docs/analysis/concordance/techniques.md#addy-using-agent-skills`

### ai-navigability

- **definition:** Ai navigability is a design quality attribute in Matt's framework representing how effectively an AI coding agent can understand, navigate, and modify a codebase without having to open and synthesize dozens of shallow, pass-through files to trace a single domain workflow.
- **kind:** technique
- **source names:** addy: — · matt: `AI-navigability` · rjm: —
- **decision:** D-437
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ai-navigability`

### anti-rationalization

- **definition:** Anti rationalization is an engineering technique for anti-rationalization is a defensive prompt-engineering technique that anticipates common cognitive excuses agents use to skip steps (such as "I'll write tests later") and binds them to strict counter-arguments.
- **kind:** technique
- **source names:** addy: `Anti-Rationalization` · matt: — · rjm: —
- **decision:** D-395
- **concordance:** `docs/analysis/concordance/techniques.md#addy-anti-rationalization`

### anti-rationalization-guards

- **definition:** Anti rationalization guards is an engineering technique for anti-rationalization guards explicitly enumerate common cognitive excuses coding agents use to skip tests or reviews, proactively dismantling these rationalizations before the agent can act on them.
- **kind:** technique
- **source names:** addy: `anti-rationalization guards` · matt: — · rjm: —
- **decision:** D-315
- **concordance:** `docs/analysis/concordance/techniques.md#addy-anti-rationalization-guards`

### aria-live-regions

- **definition:** Aria live regions is an engineering technique for in addy, ARIA Live Regions provide the standard accessibility mechanism for broadcasting asynchronous UI updates to screen readers without shifting keyboard focus, distinguishing polite non-disruptive notifications (role="status") from assertive interruptive alerts (role="alert").
- **kind:** technique
- **source names:** addy: `ARIA Live Regions` · matt: — · rjm: —
- **decision:** D-392
- **concordance:** `docs/analysis/concordance/techniques.md#addy-aria-live-regions`

### ask-secret

- **definition:** Ask secret is an interactive secret input helper in the wizard template library. Similar to `ask`, it prompts the user for a configuration value and retains previously saved values on re-run, but uses `read -rs` to suppress terminal echoing, safeguarding API tokens and passwords during setup.
- **kind:** technique
- **source names:** addy: — · matt: `ask_secret` · rjm: —
- **decision:** D-509
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ask-secret`

### atomic-commit-workflow

- **definition:** The atomic commit workflow is a version control discipline creating small, focused (~100-line) commits with structured messages as checkpoints between discrete implementation tasks.
- **kind:** technique
- **source names:** addy: `git-workflow-and-versioning` · matt: — · rjm: —
- **decision:** D-269
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-git-workflow-versioning`
- **not to be confused with:** commit-message, working-increment

### background-worktrees

- **definition:** Background worktrees is the filesystem and version control isolation technique enabling parallel agent execution. Running multiple autonomous agents in a single shared checkout leads to git index lock errors, HEAD contention, and stash collisions; background worktrees give each subagent an independent working tree linked to the same repository.
- **kind:** technique
- **source names:** addy: — · matt: `background worktrees` · rjm: —
- **decision:** D-327
- **concordance:** `docs/analysis/concordance/techniques.md#matt-background-worktrees`

### bash-syntax-check

- **definition:** Bash syntax check is an engineering technique for `bash -n` performs a syntax check on shell scripts without executing commands. Because wizards contain interactive prompts and launch browser windows, the AI cannot run them end-to-end; `bash -n` provides a fast, zero-side-effect syntax gate before handoff.
- **kind:** technique
- **source names:** addy: — · matt: `bash -n` · rjm: —
- **decision:** D-504
- **concordance:** `docs/analysis/concordance/techniques.md#matt-bash-n`

### bfcache

- **definition:** Bfcache is the browser back/forward cache that preserves full in-memory page snapshots for instant back/forward navigation. Addy mandates eliminating `unload` listeners and avoiding `Cache-Control: no-store` on HTML documents to keep pages eligible for bfcache.
- **kind:** technique
- **source names:** addy: `bfcache` · matt: — · rjm: —
- **decision:** D-385
- **concordance:** `docs/analysis/concordance/techniques.md#addy-bfcache`

### bisection-harness

- **definition:** Bisection harness is an automated script harness that tests a checkout state and returns a clean exit code for `git bisect run`. In Matt's methodology, constructing this harness turns historical regression isolation into purely mechanical execution.
- **kind:** technique
- **source names:** addy: — · matt: `bisection harness` · rjm: —
- **decision:** D-338
- **concordance:** `docs/analysis/concordance/techniques.md#matt-bisection-harness`

### blast-radius-containment

- **definition:** Blast radius containment is an architectural isolation technique restricting the operational impact of potential subsystem failures or code refactors to strictly bounded component boundaries.
- **kind:** technique
- **source names:** addy: — · matt: `blast radius` · rjm: `Blast Radius Containment`
- **decision:** D-300
- **concordance:** `docs/analysis/concordance/techniques.md#blast-radius-containment`

### call-graph-collapse

- **definition:** Call graph collapse is a specialized diagram pattern for HTML architecture reports that illustrates deepening by showing an intricate tree of nested function calls consolidated into a single deep module with internal details faded out.
- **kind:** technique
- **source names:** addy: — · matt: `Call-graph collapse` · rjm: —
- **decision:** D-434
- **concordance:** `docs/analysis/concordance/techniques.md#matt-call-graph-collapse`

### changeset-versioning-technique

- **definition:** Changeset versioning technique is a versioning and release management workflow where contributors declare semantic intent through small markdown change files. These are later aggregated to update changelogs and bump package versions systematically during releases.
- **kind:** technique
- **source names:** addy: — · matt: `Changesets` · rjm: —
- **decision:** D-436
- **concordance:** `docs/analysis/concordance/techniques.md#matt-changesets`

### characterization-testing

- **definition:** Characterization testing is a verification technique that captures the existing behavior of legacy or complex code before making changes to guarantee bug-for-bug behavioral parity.
- **kind:** technique
- **source names:** addy: `characterization tests` · matt: — · rjm: `Characterization test`
- **decision:** D-344
- **concordance:** `docs/analysis/concordance/techniques.md#characterization-testing`

### chart-the-map

- **definition:** Chart the map is the initial exploration phase and technique of wayfinder. In a single dedicated session, the agent pins down the overall destination, grills breadth-first across the problem space to reveal the frontier, creates the index map issue, and creates initial sharp child tickets while sketching remaining uncertainty into Not yet specified.
- **kind:** technique
- **source names:** addy: — · matt: `Chart the map` · rjm: —
- **decision:** D-479
- **concordance:** `docs/analysis/concordance/techniques.md#matt-chart-the-map`

### claims-verification-technique

- **definition:** Claims verification technique is the coordination technique used in wayfinder to avoid collision between concurrent agent sessions. By assigning the ticket to the current session driver prior to starting work, unclaimed frontier tickets are immediately distinguishable from in-progress tickets, allowing multiple sessions to safely work the frontier in parallel.
- **kind:** technique
- **source names:** addy: — · matt: `claims` · rjm: —
- **decision:** D-488
- **concordance:** `docs/analysis/concordance/techniques.md#matt-claims`

### cli-banner-display

- **definition:** Cli banner display is a presentation helper function in the wizard library that clears the terminal and displays an opening banner explaining what the procedure will do and how many stages it contains, establishing clear expectations for the human operator.
- **kind:** technique
- **source names:** addy: — · matt: `banner` · rjm: —
- **decision:** D-433
- **concordance:** `docs/analysis/concordance/techniques.md#matt-banner`

### codebase-terminology

- **definition:** Codebase terminology is an engineering technique for in Matt's toolkit, codebase terminology represents the shared vocabulary and naming conventions embedded within project code and documentation. Triggering domain-modeling on discussions of codebase terminology ensures that ambiguous or overloaded terms are pinned down and recorded inline in CONTEXT.md before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `codebase terminology` · rjm: —
- **decision:** D-330
- **concordance:** `docs/analysis/concordance/techniques.md#matt-codebase-terminology`

### compaction

- **definition:** Compaction is an automated or user-initiated context compression mechanism that summarises past conversation turns, which Matt cautions against when transitioning from `/to-spec` to `/to-tickets` because lossy compaction destroys detailed specification context.
- **kind:** technique
- **source names:** addy: — · matt: `compaction` · rjm: —
- **decision:** D-414
- **concordance:** `docs/analysis/concordance/techniques.md#matt-compaction`

### competing-hypothesis-debugging

- **definition:** Competing hypothesis debugging is an engineering technique for competing-hypothesis debugging is an adversarial investigative technique leveraging Agent Teams for complex production defect analysis. Rather than allowing a single agent to fixate on the first plausible explanation, multiple specialized personas concurrently explore competing root-cause hypotheses and actively attempt to disprove each other's theories, ensuring that the surviving explanation is empirically verified before fixes are attempted.
- **kind:** technique
- **source names:** addy: `competing-hypothesis debugging` · matt: — · rjm: —
- **decision:** D-346
- **concordance:** `docs/analysis/concordance/techniques.md#addy-competing-hypothesis-debugging`

### configuration-management

- **definition:** Configuration management is an engineering technique for configuration management unifies setup generation and maintenance within a single skill to ensure that project templates and verification logic remain synchronized as skill packages evolve.
- **kind:** technique
- **source names:** addy: — · matt: `configuration management` · rjm: —
- **decision:** D-447
- **concordance:** `docs/analysis/concordance/techniques.md#matt-configuration-management`

### conflict-resolution-technique

- **definition:** Conflict resolution technique is the final step in the lifecycle of a wayfinder ticket. The agent records answers on the ticket, marks it closed or resolved, and registers a summary pointer in the parent map so future agents can build upon the decision.
- **kind:** technique
- **source names:** addy: — · matt: `Resolve` · rjm: —
- **decision:** D-458
- **concordance:** `docs/analysis/concordance/techniques.md#matt-resolve`

### constraint-driven-development

- **definition:** Constraint driven development is a development methodology that shifts quality enforcement from post-hoc prose guidelines to explicit, mechanically checked threshold constraints that run inside the inner development loop.
- **kind:** technique
- **source names:** addy: `constraint-driven-development` · matt: — · rjm: —
- **decision:** D-367
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraint-driven-development`

### constraints-check

- **definition:** Constraints check is a command utility that runs all configured project constraints against the current branch on demand, reporting immediate compliance status.
- **kind:** technique
- **source names:** addy: `/constraints check` · matt: — · rjm: —
- **decision:** D-375
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraints-check`

### constraints-guard

- **definition:** Constraints guard is a diff inspection technique that guards against stealthy regressions where agents weaken thresholds, disable tests, or add linter suppressions to reach a green build.
- **kind:** technique
- **source names:** addy: `/constraints guard` · matt: — · rjm: —
- **decision:** D-279
- **concordance:** `docs/analysis/concordance/techniques.md#addy-constraints-guard`

### contain-intrinsic-size

- **definition:** Contain intrinsic size is a companion CSS property used with `content-visibility: auto` to define a placeholder width and height for unrendered elements, ensuring accurate scrollbar sizing and preventing Cumulative Layout Shift when elements scroll into view.
- **kind:** technique
- **source names:** addy: `contain-intrinsic-size` · matt: — · rjm: —
- **decision:** D-378
- **concordance:** `docs/analysis/concordance/techniques.md#addy-contain-intrinsic-size`

### content-visibility-auto

- **definition:** Content visibility auto is a CSS rendering performance optimization that instructs the browser engine to skip layout, painting, and rendering work for off-screen elements until they approach the viewport, dramatically reducing initial DOM rendering time.
- **kind:** technique
- **source names:** addy: `content-visibility: auto` · matt: — · rjm: —
- **decision:** D-379
- **concordance:** `docs/analysis/concordance/techniques.md#addy-content-visibility-auto`

### context-aware-loading

- **definition:** Context aware loading is an engineering technique for context-Aware Loading prevents context window exhaustion and prompt dilution by restricting loaded skill instructions to those required for the current task (e.g. UI engineering during frontend work, debugging during error recovery), preserving model reasoning capacity.
- **kind:** technique
- **source names:** addy: `Context-Aware Loading` · matt: — · rjm: —
- **decision:** D-371
- **concordance:** `docs/analysis/concordance/techniques.md#addy-context-aware-loading`

### context-compaction-command

- **definition:** Context compaction command is a conversational summarization command in Claude Code that compresses dialogue history to free token capacity. In matt's lifecycle philosophy, /compact is intentionally placed at the bottom of the phase boundary decision tree as a default fallback rather than a first reach; because automated summarization flattens nuances and decisions, developers are advised to supply an explicit focusing instruction when compacting.
- **kind:** technique
- **source names:** addy: — · matt: `/compact` · rjm: —
- **decision:** D-492
- **concordance:** `docs/analysis/concordance/techniques.md#matt-compact`

### context-efficiency

- **definition:** Context efficiency is an engineering technique for context Efficiency establishes constraints (keeping SKILL.md under 500 lines, using progressive disclosure, preferring executable scripts over verbose inline code) to minimize prompt overhead and prevent context window degradation during agent operations.
- **kind:** technique
- **source names:** addy: `Context Efficiency` · matt: — · rjm: —
- **decision:** D-397
- **concordance:** `docs/analysis/concordance/techniques.md#addy-context-efficiency`

### context-hygiene

- **definition:** Context hygiene is a context management discipline in Matt Pocock's workflow that avoids resetting or compacting agent context between `/to-spec` and `/to-tickets`, ensuring the full specification is directly readable in memory rather than truncated during tracker API round-trips.
- **kind:** technique
- **source names:** addy: — · matt: `context hygiene` · rjm: —
- **decision:** D-298
- **concordance:** `docs/analysis/concordance/techniques.md#matt-context-hygiene`

### context-pointers

- **definition:** Context pointers is the foundational architectural mechanism for managing LLM context windows. By placing concise, high-salience pointers in persistent context that specify when and why to load external documents, agents can navigate deep project knowledge without saturating working memory.
- **kind:** technique
- **source names:** addy: — · matt: `Context pointers` · rjm: —
- **decision:** D-324
- **concordance:** `docs/analysis/concordance/techniques.md#matt-context-pointers`

### conversational-feel

- **definition:** Conversational feel is an engineering technique for conversational feel frames the agent's role as an active editorial partner rather than a passive scribe. By inverting the exploratory grilling session to ask what the article is actually arguing and what breaks if a paragraph is cut, the agent enforces rigorous narrative momentum and defends against weak transitions.
- **kind:** technique
- **source names:** addy: — · matt: `Conversational feel` · rjm: —
- **decision:** D-435
- **concordance:** `docs/analysis/concordance/techniques.md#matt-conversational-feel`

### conversational-wizard-flow

- **definition:** Conversational wizard flow is an engineering technique for `wizard` bridges the gap between AI agents and human-only credentials/clicks. Because agents cannot interact with external browser consoles or securely hold human third-party passwords, `wizard` scopes the procedure and authors an interactive bash script that drives the human operator through each screen, capturing values directly into `.env` and GitHub Actions secrets.
- **kind:** technique
- **source names:** addy: — · matt: `wizard` · rjm: —
- **decision:** D-416
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wizard`

### cross-session-memory

- **definition:** Cross session memory is an engineering technique that cross-session memory represents the architectural ability to preserve and restore learned codebase knowledge, task status, and technical constraints across independent agent invocations without relying on fragile conversational history or manual prompt re-feeding.
- **kind:** technique
- **source names:** addy: `cross-session memory` · matt: — · rjm: —
- **decision:** D-390
- **concordance:** `docs/analysis/concordance/techniques.md#addy-cross-session-memory`

### cross-skill-invocation

- **definition:** Cross skill invocation is a composition pattern and calling convention where one skill invokes another by explicitly instructing the agent to call the harness Skill tool. This replaces bare slash-command mentions in prose, raising invocation reliability and ensuring harness-neutral interoperability.
- **kind:** technique
- **source names:** addy: — · matt: `cross-skill invocation` · rjm: —
- **decision:** D-406
- **concordance:** `docs/analysis/concordance/techniques.md#matt-cross-skill-invocation`

### debug-logging

- **definition:** Debug logging is an engineering technique for diagnostic tracing technique that logs execution events, parsed parameters, and branch decisions to a local sentinel-triggered log file without contaminating model stdout or stderr channels.
- **kind:** technique
- **source names:** addy: `Debug logging` · matt: — · rjm: —
- **decision:** D-347
- **concordance:** `docs/analysis/concordance/techniques.md#addy-debug-logging`

### decision-flow

- **definition:** Decision flow is a structured decision tree for choosing the simplest valid orchestration architecture for a task. It biases strongly toward zero or minimal orchestration (direct invocation or user-driven commands), reserving parallel fan-out only for independent, repeating sub-tasks.
- **kind:** technique
- **source names:** addy: `Decision flow` · matt: — · rjm: —
- **decision:** D-372
- **concordance:** `docs/analysis/concordance/techniques.md#addy-decision-flow`

### decision-mapping

- **definition:** Decision mapping is an engineering technique for `decision-mapping` was the original name of the skill before being reframed and renamed to `wayfinder` in v1.1. The term was retired because 'decision map' was perceived as jargon and inaccurate, given that only a subset of map tickets were pure decisions; it is marked `deprecated: true`.
- **kind:** technique
- **source names:** addy: — · matt: `decision-mapping` · rjm: —
- **decision:** D-415
- **concordance:** `docs/analysis/concordance/techniques.md#matt-decision-mapping`

### decision-note-capture

- **definition:** Decision note capture is a terminal output formatting helper function in `template.sh` used to render subtle, dimmed context and summary lines without competing visually with primary instructional steps.
- **kind:** technique
- **source names:** addy: — · matt: `note` · rjm: —
- **decision:** D-439
- **concordance:** `docs/analysis/concordance/techniques.md#matt-note`

### deduplication

- **definition:** Deduplication is a triage technique that checks incoming feature requests against previously recorded rejections in `.out-of-scope/`. By matching concepts rather than issue titles, it prevents repetitive discussions and allows agents or maintainers to immediately close redundant requests with authoritative context.
- **kind:** technique
- **source names:** addy: — · matt: `Deduplication` · rjm: —
- **decision:** D-461
- **concordance:** `docs/analysis/concordance/techniques.md#matt-deduplication`

### delegating

- **definition:** Delegating is the motivating outcome in loop-me's methodology. Once predictable patterns are formalized into workflows without unresolved questions, execution responsibility can be handed over from the human to autonomous agent routines.
- **kind:** technique
- **source names:** addy: — · matt: `delegating` · rjm: —
- **decision:** D-497
- **concordance:** `docs/analysis/concordance/techniques.md#matt-delegating`

### deletion-test

- **definition:** Deletion test is an engineering technique for thought experiment assessing module validity: imagine deleting the module; if complexity simply disappears, it was a pass-through wrapper; if complexity reappears across N call sites, it was genuinely earning its keep.
- **kind:** technique
- **source names:** addy: — · matt: `deletion test` · rjm: —
- **decision:** D-359
- **concordance:** `docs/analysis/concordance/techniques.md#matt-deletion-test`

### demo-path

- **definition:** Demo path is a ticket authoring technique that requires defining an observable, demonstrable path through all layers of a change for every ticket, preventing models from defaulting to layer-by-layer horizontal partitioning.
- **kind:** technique
- **source names:** addy: — · matt: `demo path` · rjm: —
- **decision:** D-308
- **concordance:** `docs/analysis/concordance/techniques.md#matt-demo-path`

### dependency-security

- **definition:** Dependency security is an engineering technique for dependency security safeguards applications against vulnerabilities and supply-chain attacks introduced through external packages. Addy mandates locating the exact installation boundary, verifying consistent package manager tooling, enforcing frozen and immutable lockfile installs in CI, and restricting package lifecycle script execution.
- **kind:** technique
- **source names:** addy: `Dependency Security` · matt: — · rjm: —
- **decision:** D-364
- **concordance:** `docs/analysis/concordance/techniques.md#addy-dependency-security`

### depth-as-leverage

- **definition:** Depth as leverage is an architectural evaluation technique in Matt Pocock's codebase-design framework. While John Ousterhout originally defined module depth as the ratio of lines of implementation code to lines of interface specification, codebase-design rejects that formula because it incentivizes bloated implementations. Instead, depth-as-leverage defines depth as the amount of capability, safety, and functionality callers or tests can exercise per unit of interface surface they must learn.
- **kind:** technique
- **source names:** addy: — · matt: `depth-as-leverage` · rjm: —
- **decision:** D-329
- **concordance:** `docs/analysis/concordance/techniques.md#matt-depth-as-leverage`

### desirable-difficulty

- **definition:** Desirable difficulty is an engineering technique for desirable difficulty is the pedagogical principle that learning tasks should be intentionally challenging to deepen encoding. The teach skill applies difficulty strategically: keeping initial knowledge acquisition frictionless to preserve working memory, while introducing calibrated difficulty during quizzes and drills to solidify storage strength.
- **kind:** technique
- **source names:** addy: — · matt: `desirable difficulty` · rjm: —
- **decision:** D-332
- **concordance:** `docs/analysis/concordance/techniques.md#matt-desirable-difficulty`

### diagnosing-bugs

- **definition:** Diagnosing bugs is an engineering skill enforcing a rigorous six-phase scientific debugging discipline. It strictly prohibits speculative code modifications by gating hypothesis formation behind an executable, reproducible tight feedback loop (a single command that goes red on the failure and green on resolution).
- **kind:** technique
- **source names:** addy: — · matt: `diagnosing-bugs` · rjm: —
- **decision:** D-333
- **concordance:** `docs/analysis/concordance/techniques.md#matt-diagnosing-bugs`

### dialogue-driven-discovery

- **definition:** Dialogue-driven discovery is an interactive elicitation technique that uncovers unstated user intent and architectural constraints through structured, one-question-at-a-time conversational interviews.
- **kind:** technique
- **source names:** addy: `one question at a time` · matt: `interview` · rjm: —
- **decision:** D-274
- **concordance:** `docs/analysis/concordance/techniques.md#dialogue-driven-discovery`

### dialogue-evals

- **definition:** Dialogue evals is a behavioral evaluation technique for skills whose primary artifact is the conversation itself (such as mentoring, code review, or planning) rather than file modifications. Unlike execution evals, dialogue evals require no pre-baked workspace fixtures.
- **kind:** technique
- **source names:** addy: `dialogue evals` · matt: — · rjm: —
- **decision:** D-368
- **concordance:** `docs/analysis/concordance/techniques.md#addy-dialogue-evals`

### direct-feedback-utterance

- **definition:** Direct feedback utterance is a bash output helper function in the wizard library that formats plain text instructions with two spaces of indentation, providing readable visual hierarchy beneath stage headings during interactive setup flows.
- **kind:** technique
- **source names:** addy: — · matt: `say` · rjm: —
- **decision:** D-511
- **concordance:** `docs/analysis/concordance/techniques.md#matt-say`

### discover-the-stack-first

- **definition:** Discover the stack first is a preparatory technique mandating that agents inspect the repository's build system, checked-in wrappers, and CI configurations before invoking test commands. Without it, agents default to assumptions like `npm test` on non-Node repositories or invoke global binaries rather than project wrappers.
- **kind:** technique
- **source names:** addy: `Discover the Stack First` · matt: — · rjm: —
- **decision:** D-278
- **concordance:** `docs/analysis/concordance/techniques.md#addy-discover-the-stack-first`

### domain-modeling

- **definition:** Domain modeling is the active domain-driven design discipline in matt's ecosystem. Rather than passively reading existing documentation, it actively interrupts design conversations to challenge imprecise terms, enforce ubiquitous language, and record definitions in CONTEXT.md and ADRs at the moment they resolve.
- **kind:** technique
- **source names:** addy: — · matt: `domain-modeling` · rjm: —
- **decision:** D-305
- **concordance:** `docs/analysis/concordance/techniques.md#matt-domain-modeling`

### domain-modelling

- **definition:** Domain modelling is an engineering technique for `domain modelling` represents the systematic elicitation and documentation of ubiquitous language and architecture decisions in `matt`. Implemented primarily through the `domain-modeling` skill and the `grill-with-docs` workflow, it ensures agents and human engineers share consistent project vocabulary and architectural boundaries.
- **kind:** technique
- **source names:** addy: — · matt: `domain modelling` · rjm: —
- **decision:** D-424
- **concordance:** `docs/analysis/concordance/techniques.md#matt-domain-modelling`

### drill

- **definition:** Drill is a drill is an active practice exercise within the teach skill executed via a tight feedback loop where difficulty is utilized as a learning tool. Unlike passive reading, a drill refuses to accept superficial acknowledgment, holding the user accountable until retention and understanding are demonstrated.
- **kind:** technique
- **source names:** addy: — · matt: `drill` · rjm: —
- **decision:** D-411
- **concordance:** `docs/analysis/concordance/techniques.md#matt-drill`

### e2e-test

- **definition:** E2e test is an E2E test represents the top tier of Addy's test pyramid (~5% of tests), classified as a Large test size that verifies complete end-to-end user flows across the full stack while being strictly limited to critical paths to prevent flaky, slow execution suites.
- **kind:** technique
- **source names:** addy: `E2E test` · matt: — · rjm: —
- **decision:** D-348
- **concordance:** `docs/analysis/concordance/techniques.md#addy-e2e-test`

### enforce-simplicity

- **definition:** Enforce simplicity is a counter-bias mechanism directing agents to resist overengineering and premature abstraction, demanding minimal lines of code and favoring boring, obvious solutions over expensive cleverness.
- **kind:** technique
- **source names:** addy: `Enforce Simplicity` · matt: — · rjm: —
- **decision:** D-374
- **concordance:** `docs/analysis/concordance/techniques.md#addy-enforce-simplicity`

### eval-framework

- **definition:** Eval framework is the eval framework provides automated testing for the skill pack itself, treating skills as software artifacts that require trigger, routing, and behavioral regression testing against model updates.
- **kind:** technique
- **source names:** addy: `eval framework` · matt: — · rjm: —
- **decision:** D-399
- **concordance:** `docs/analysis/concordance/techniques.md#addy-eval-framework`

### evals-framework

- **definition:** Evals framework is the three-tier testing framework in addy that validates skill structure, measures prompt routing accuracy, and runs behavioral test cases against headless agents.
- **kind:** technique
- **source names:** addy: `Evals framework` · matt: — · rjm: —
- **decision:** D-396
- **concordance:** `docs/analysis/concordance/techniques.md#addy-evals-framework`

### execution-continuation-prompt

- **definition:** Execution continuation prompt is the first and highest-fidelity context transition option evaluated at phase boundaries. Keeping the unbroken session context preserves design rationale and decisions as a primary source, which lossy summarization or compaction would flatten. Compaction mid-phase causes agents to lose the thread, whereas continuing costs nothing and loses nothing.
- **kind:** technique
- **source names:** addy: — · matt: `Continue` · rjm: —
- **decision:** D-427
- **concordance:** `docs/analysis/concordance/techniques.md#matt-continue`

### execution-wait-helper

- **definition:** Execution wait helper is an engineering technique for in Matt's prompt design, "wait" is a targeted communicative trigger. Unlike output directives ("be brief", "be concise") that prompt the model to discard explanatory context, "wait" signals listener confusion, causing the agent to step backward, diagnose what went unexplained, and bridge the gap.
- **kind:** technique
- **source names:** addy: — · matt: `wait` · rjm: —
- **decision:** D-505
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wait`

### exercise-skeleton-stubbing

- **definition:** Exercise skeleton stubbing is a progressive authoring technique that scaffolds a full course skeleton with minimal valid placeholder files. Stubbing allows course designers to validate overall structure with linters before investing time in authoring detailed problem and solution content.
- **kind:** technique
- **source names:** addy: — · matt: `stubbing` · rjm: —
- **decision:** D-285
- **concordance:** `docs/analysis/concordance/techniques.md#matt-stubbing`

### existing-code-exploration

- **definition:** Existing code exploration is a bash helper function in `template.sh` that checks the target `.env` file for existing key-value pairs. By retrieving prior values, it allows interactive input functions (`ask` and `ask_secret`) to offer current settings as re-run defaults, making wizard execution safe and repeatable without requiring re-entry of unmodified configurations.
- **kind:** technique
- **source names:** addy: — · matt: `_existing` · rjm: —
- **decision:** D-473
- **concordance:** `docs/analysis/concordance/techniques.md#matt-existing`

### explicit-context-loading

- **definition:** Explicit context loading is an engineering technique for explicit Context Loading allows developers to bypass automated routing heuristics by directly referencing skill files via `@` syntax, providing deterministic execution when entering critical lifecycle phases.
- **kind:** technique
- **source names:** addy: `Explicit Context Loading` · matt: — · rjm: —
- **decision:** D-389
- **concordance:** `docs/analysis/concordance/techniques.md#addy-explicit-context-loading`

### exploratory-legwork

- **definition:** Exploratory legwork is the depth of autonomous exploration and verification an agent performs. Rather than scripting every micro-action, Matt's methodology induces legwork by framing completion criteria with uncompromising demand, compelling the model to exhaustively investigate before concluding.
- **kind:** technique
- **source names:** addy: — · matt: `legwork` · rjm: —
- **decision:** D-448
- **concordance:** `docs/analysis/concordance/techniques.md#matt-legwork`

### facts-elicitation

- **definition:** Facts elicitation is an engineering technique for in Matt's grilling methodology, facts are empirical truths discoverable from the project environment. Agents are strictly forbidden from interrogating the user for information they can verify themselves; instead, they dispatch background subagents to locate facts, preserving human cognitive bandwidth solely for subjective decisions.
- **kind:** technique
- **source names:** addy: — · matt: `facts` · rjm: —
- **decision:** D-297
- **concordance:** `docs/analysis/concordance/techniques.md#matt-facts`

### facts-vs-decisions

- **definition:** Facts vs decisions is an engineering technique that this distinction prevents conversational fatigue by requiring agents to look up existing technical facts (libraries, schemas, existing patterns) from the workspace rather than asking the human, reserving human dialogue exclusively for true subjective decisions.
- **kind:** technique
- **source names:** addy: — · matt: `Facts vs. decisions` · rjm: —
- **decision:** D-477
- **concordance:** `docs/analysis/concordance/techniques.md#matt-facts-vs-decisions`

### falsifiable

- **definition:** Falsifiable is a strict quality standard for debugging hypotheses requiring each hypothesis to formulate an explicit testable prediction. Without falsifiability, hypotheses degenerate into vague intuition that cannot be systematically verified or eliminated.
- **kind:** technique
- **source names:** addy: — · matt: `falsifiable` · rjm: —
- **decision:** D-355
- **concordance:** `docs/analysis/concordance/techniques.md#matt-falsifiable`

### falsifiable-hypotheses

- **definition:** Falsifiable hypotheses is the scientific discipline applied to bug diagnosis: the agent must articulate 3 to 5 ranked, falsifiable predictions regarding the root cause before introducing probes, preventing biased or wandering experimentation.
- **kind:** technique
- **source names:** addy: — · matt: `falsifiable hypotheses` · rjm: —
- **decision:** D-352
- **concordance:** `docs/analysis/concordance/techniques.md#matt-falsifiable-hypotheses`

### fluency-strength

- **definition:** Fluency strength is a psychological concept defining how easily a learner can access information in the immediate moment. In Matt's teaching design, high fluency strength is explicitly identified as an unreliable indicator of true competence that often masks rapid forgetting once the prompt or session ends.
- **kind:** technique
- **source names:** addy: — · matt: `Fluency strength` · rjm: —
- **decision:** D-493
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fluency-strength`

### free-play-buttons

- **definition:** Free play buttons is an engineering technique for interactive controls in a logic prototype offering one button per domain action. They allow non-technical evaluators to poke at the state machine in arbitrary sequences, exposing unforeseen edge cases or invalid state transitions early.
- **kind:** technique
- **source names:** addy: — · matt: `free-play buttons` · rjm: —
- **decision:** D-510
- **concordance:** `docs/analysis/concordance/techniques.md#matt-free-play-buttons`

### fromany

- **definition:** Fromany is a shoehorn utility function designed for negative testing, allowing intentionally invalid values to be passed to typed functions without triggering compile errors while retaining IDE code completion.
- **kind:** technique
- **source names:** addy: — · matt: `fromAny()` · rjm: —
- **decision:** D-450
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fromany`

### fromexact

- **definition:** Fromexact is a shoehorn utility function that enforces complete interface conformance without allowing missing fields, providing an explicit transition step before relaxing mock constraints with fromPartial().
- **kind:** technique
- **source names:** addy: — · matt: `fromExact()` · rjm: —
- **decision:** D-474
- **concordance:** `docs/analysis/concordance/techniques.md#matt-fromexact`

### frompartial

- **definition:** Frompartial is a TypeScript test helper function from shoehorn that permits partial objects while preserving type validation for all supplied fields, eliminating fragile boilerplate in test fixtures.
- **kind:** technique
- **source names:** addy: — · matt: `fromPartial` · rjm: —
- **decision:** D-491
- **concordance:** `docs/analysis/concordance/techniques.md#matt-frompartial`

### frontier-query

- **definition:** Frontier query is an algorithmic technique used by wayfinder to deterministically select the next ticket from an exploration DAG. By filtering out blocked and assigned tickets, it prevents deadlocks and redundant work.
- **kind:** technique
- **source names:** addy: — · matt: `Frontier query` · rjm: —
- **decision:** D-443
- **concordance:** `docs/analysis/concordance/techniques.md#matt-frontier-query`

### git-bisect-run

- **definition:** Git bisect run is the standard git binary search command used to automate regression identification. Matt's lifecycle treats running git bisect as downstream mechanical work that becomes trivial once a reliable test harness exists.
- **kind:** technique
- **source names:** addy: — · matt: `git bisect run` · rjm: —
- **decision:** D-337
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-bisect-run`

### git-guardrails-claude-code

- **definition:** Git guardrails claude code is an interactive setup procedure and skill in the misc bucket that installs an executable PreToolUse hook to intercept dangerous git commands (push, reset --hard, clean, branch -D) before Claude Code executes them. It ensures automated agents cannot inadvertently perform destructive repository mutations or data loss.
- **kind:** technique
- **source names:** addy: — · matt: `git-guardrails-claude-code` · rjm: —
- **decision:** D-335
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-guardrails-claude-code`

### git-worktree-isolation

- **definition:** Git worktree isolation is an execution environment management technique providing clean, separate filesystem working trees for parallel branch execution without repository switching overhead.
- **kind:** technique
- **source names:** addy: `Working with Worktrees` · matt: `worktrees` · rjm: `worktrees`
- **decision:** D-302
- **concordance:** `docs/analysis/concordance/techniques.md#git-worktrees`

### git-worktree-isolation-technique

- **definition:** Git worktree isolation technique is an engineering technique for git worktrees allow multiple working trees to be attached to a single repository checkout. In agent workflows, they provide isolation for concurrent coding agents working on different tickets simultaneously, though Matt notes that shared refs (such as stashes) still require careful handling.
- **kind:** technique
- **source names:** addy: — · matt: `Git worktrees` · rjm: —
- **decision:** D-339
- **concordance:** `docs/analysis/concordance/techniques.md#matt-git-worktrees`

### grill-me

- **definition:** Grill me is a stateless, conversational interview skill that subjects early, uncommitted ideas to relentless inquiry. By asking frontier questions in structured rounds while intentionally refusing to create files or jump into plan generation, it forces the user to confront assumptions and clarify intent.
- **kind:** technique
- **source names:** addy: — · matt: `grill-me` · rjm: —
- **decision:** D-418
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-me`

### grill-the-send-not-the-subject

- **definition:** Grill the send not the subject is an engineering technique that prevents interview deadlock when the user is blocked on external knowledge. Probing a user about subject matter they do not understand causes frustration and stalls progress; interviewing them about the transmission context (recipient expertise and desired decision payload) extracts everything needed to frame an effective inquiry.
- **kind:** technique
- **source names:** addy: — · matt: `Grill the send, not the subject` · rjm: —
- **decision:** D-463
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-the-send-not-the-subject`

### grill-with-docs

- **definition:** Grill with docs is the stateful engineering entry point in matt's lifecycle. It marries the interrogative grilling interview with active domain modeling, ensuring that as decisions and vocabulary are settled, they are written directly to repository files on disk.
- **kind:** technique
- **source names:** addy: — · matt: `grill-with-docs` · rjm: —
- **decision:** D-444
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grill-with-docs`

### grilling-discipline

- **definition:** Grilling discipline is the questioning technique governing loop-me interactions: persistent interrogation structured as discrete rounds of questions where every question includes a proposed default answer. This structure accelerates user feedback, eliminates decision paralysis, and rapidly drives specifications toward completion.
- **kind:** technique
- **source names:** addy: — · matt: `grilling discipline` · rjm: —
- **decision:** D-410
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling-discipline`

### grilling-session

- **definition:** Grilling session is a grilling session is Matt's core conversational alignment technique where the agent relentlessly interviews the developer to expose ambiguities and resolve decision branches before writing code or documents.
- **kind:** technique
- **source names:** addy: — · matt: `grilling session` · rjm: —
- **decision:** D-483
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grilling-session`

### grounding

- **definition:** Grounding is an authoring discipline ensuring that every idea or term is firmly understood before the text relies upon it. Concepts are grounded either as explicit audience prerequisites or introduced step-by-step in prior blocks, preventing conceptual leaps that lose readers.
- **kind:** technique
- **source names:** addy: — · matt: `Grounding` · rjm: —
- **decision:** D-457
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grounding`

### guided-walkthroughs

- **definition:** Guided walkthroughs is an engineering technique for guided walkthroughs provide structured, reproducible scenario sequences inside self-contained logic prototype HTML files, enabling non-technical stakeholders to test domain logic and edge cases before code is written.
- **kind:** technique
- **source names:** addy: — · matt: `guided walkthroughs` · rjm: —
- **decision:** D-494
- **concordance:** `docs/analysis/concordance/techniques.md#matt-guided-walkthroughs`

### hidden-entry

- **definition:** Hidden entry is an engineering technique for hidden entry is a terminal security technique implemented via `read -s` in the wizard template. By disabling character echo during sensitive inputs, it ensures passwords and API keys never persist in terminal logs, screenshots, or screen-sharing sessions.
- **kind:** technique
- **source names:** addy: — · matt: `hidden entry` · rjm: —
- **decision:** D-459
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hidden-entry`

### hidden-secret-entry

- **definition:** Hidden secret entry is a terminal interaction technique in setup wizards that suppresses keyboard character echoing when reading sensitive values like API tokens or passwords, preventing shoulder surfing and ensuring credentials are not retained in terminal scrollback buffers.
- **kind:** technique
- **source names:** addy: — · matt: `hidden secret entry` · rjm: —
- **decision:** D-460
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hidden-secret-entry`

### hitl-bash-script

- **definition:** Hitl bash script is a human-in-the-loop debugging technique using an interactive bash script to guide human actions and capture observations as structured key-value output. This ensures that even un-automatable bugs retain a structured, repeatable feedback loop.
- **kind:** technique
- **source names:** addy: — · matt: `HITL bash script` · rjm: —
- **decision:** D-475
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hitl-bash-script`

### hitl-capture-helper

- **definition:** Hitl capture helper is an interactive input helper in `hitl-loop.template.sh` that prompts the human operator for observation data and captures the reply into a variable. At loop completion, captured variables are printed as KEY=VALUE pairs for the invoking agent to parse.
- **kind:** technique
- **source names:** addy: — · matt: `capture` · rjm: —
- **decision:** D-284
- **concordance:** `docs/analysis/concordance/techniques.md#matt-capture`

### hypothesis-testing

- **definition:** Hypothesis testing is a structured inquiry technique in diagnosing-bugs where the agent generates 3–5 ranked, falsifiable explanations for a defect only after an automated reproduction command exists. Hypotheses make explicit predictions tested through minimal probes and temporary instrumentation, preventing speculative code changes until root causes are confirmed.
- **kind:** technique
- **source names:** addy: — · matt: `hypothesis-testing` · rjm: —
- **decision:** D-351
- **concordance:** `docs/analysis/concordance/techniques.md#matt-hypothesis-testing`

### hyrum-s-law

- **definition:** Hyrum s law is an engineering technique for hyrum's Law forces agents to treat all observable behavior — including timing quirks and undocumented bugs — as contractually binding in mature systems, mandating active migration paths rather than optimistic assumption of contract purity.
- **kind:** technique
- **source names:** addy: `Hyrum's Law` · matt: — · rjm: —
- **decision:** D-366
- **concordance:** `docs/analysis/concordance/techniques.md#addy-hyrum-s-law`

### implement-spec-orchestration

- **definition:** Implement spec orchestration is an experimental multi-agent orchestration skill residing in the in-progress bucket. It overcomes the limitation of single-ticket serial execution by modeling tickets as an acyclic task graph, launching concurrent implementer subagents across unblocked frontier tickets in isolated git worktrees, merging outputs via merger subagents, and culminating in a single verified pull request.
- **kind:** technique
- **source names:** addy: — · matt: `implement-spec` · rjm: —
- **decision:** D-286
- **concordance:** `docs/analysis/concordance/techniques.md#matt-implement-spec`

### improve-codebase-architecture

- **definition:** Improve codebase architecture is an architectural survey skill that identifies opportunities to turn shallow modules into deep modules (hiding complexity behind simpler interfaces). Applying Ousterhout's philosophy and a strict "deletion test" (concentrating vs. spreading complexity), it acts as an advisory survey producing an external HTML report and interactive dialogue, deliberately leaving code modification to subsequent separate sessions.
- **kind:** technique
- **source names:** addy: — · matt: `improve-codebase-architecture` · rjm: —
- **decision:** D-312
- **concordance:** `docs/analysis/concordance/techniques.md#matt-improve-codebase-architecture`

### incremental-implementation

- **definition:** Incremental implementation is an iterative engineering technique that breaks tasks into small, test-verified diffs committing working code continuously with immediate regression feedback.
- **kind:** technique
- **source names:** addy: `incremental-implementation` · matt: `implement` · rjm: —
- **decision:** D-319
- **concordance:** `docs/analysis/concordance/techniques.md#incremental-implementation`

### information-access

- **definition:** Information access is an environment improvement category in retrospectives that targets informational bottlenecks. Rather than compensating with complex prompts, this technique provides coding agents with direct runtime visibility (such as teeing background server logs or granting read-only service tokens) to eliminate blind spots.
- **kind:** technique
- **source names:** addy: — · matt: `Information access` · rjm: —
- **decision:** D-369
- **concordance:** `docs/analysis/concordance/techniques.md#matt-information-access`

### instrumentation

- **definition:** Instrumentation is an engineering technique for instrumentation in Matt's lifecycle represents targeted code modifications or logging probes inserted to isolate defective code paths. It is treated as strictly secondary and mechanical: adding probes or logs before establishing a deterministic feedback loop is rejected as speculative guessing.
- **kind:** technique
- **source names:** addy: — · matt: `instrumentation` · rjm: —
- **decision:** D-472
- **concordance:** `docs/analysis/concordance/techniques.md#matt-instrumentation`

### integration-test

- **definition:** Integration test is an integration test in Addy's test strategy corresponds to a Medium test size in the resource model (~15% of test suites) and validates behavior that crosses process or boundary layers like APIs, databases, or filesystems on localhost without external network dependencies.
- **kind:** technique
- **source names:** addy: `Integration test` · matt: — · rjm: —
- **decision:** D-303
- **concordance:** `docs/analysis/concordance/techniques.md#addy-integration-test`

### intent-dispatch-send

- **definition:** Intent dispatch send is the foundational interview scoping technique in `to-questionnaire`. By restricting elicitation strictly to transmission parameters (recipient role, expertise, and required deliverables) instead of probing domain content the user explicitly does not possess, it prevents the interview from derailing into speculative or unanswerable queries.
- **kind:** technique
- **source names:** addy: — · matt: `send` · rjm: —
- **decision:** D-500
- **concordance:** `docs/analysis/concordance/techniques.md#matt-send`

### intent-skill-mapping

- **definition:** Intent skill mapping is an engineering technique for intent to skill mapping provides an automated classification mechanism that connects ambiguous or natural-language user requests directly to structured skill workflows, ensuring agents adhere to disciplined processes even when users do not explicitly invoke commands.
- **kind:** technique
- **source names:** addy: `Intent → Skill Mapping` · matt: — · rjm: —
- **decision:** D-398
- **concordance:** `docs/analysis/concordance/techniques.md#addy-intent-skill-mapping`

### interactive-teaching-dialogue

- **definition:** Interactive teaching dialogue is a dedicated pedagogical skill that isolates learning activities from production code. It verifies external learning materials rather than trusting model parametric memory and delivers bite-sized HTML lessons that track progress across sessions.
- **kind:** technique
- **source names:** addy: — · matt: `teach` · rjm: —
- **decision:** D-506
- **concordance:** `docs/analysis/concordance/techniques.md#matt-teach`

### interleaving

- **definition:** Interleaving is a cognitive learning technique used in `teach` to build long-term retention (storage strength) rather than temporary fluency. By alternating among distinct but related topics during practice drills, it forces active discrimination between concepts, preventing rote habituation.
- **kind:** technique
- **source names:** addy: — · matt: `interleaving` · rjm: —
- **decision:** D-484
- **concordance:** `docs/analysis/concordance/techniques.md#matt-interleaving`

### interview-rounds-structure

- **definition:** Interview rounds structure is an engineering technique for `rounds` structure the interactive interview loop in grilling. Rather than asking one question at a time (which is inefficient) or dumping all questions at once (which overwhelms users and asks questions whose prerequisites are unknown), grilling computes the frontier of currently answerable decisions and presents them in discrete, numbered rounds.
- **kind:** technique
- **source names:** addy: — · matt: `rounds` · rjm: —
- **decision:** D-296
- **concordance:** `docs/analysis/concordance/techniques.md#matt-rounds`

### introduced-change-tracking

- **definition:** Introduced change tracking is an engineering technique for introduced concepts are explicitly explained and landed within the article itself rather than assumed as audience prerequisites. Once an introduced concept is established by a beat or paragraph, it joins the running grounded set, allowing subsequent sections of the piece to build directly upon it without alienating the reader.
- **kind:** technique
- **source names:** addy: — · matt: `Introduced` · rjm: —
- **decision:** D-507
- **concordance:** `docs/analysis/concordance/techniques.md#matt-introduced`

### isinputpending

- **definition:** Isinputpending is a browser API allowing JavaScript execution loops to inspect the input event queue and yield only when an actual user interaction is waiting, eliminating unnecessary yielding overhead while protecting INP.
- **kind:** technique
- **source names:** addy: `isInputPending()` · matt: — · rjm: —
- **decision:** D-393
- **concordance:** `docs/analysis/concordance/techniques.md#addy-isinputpending`

### keyboard-navigation

- **definition:** Keyboard navigation is an engineering technique for in addy, Keyboard Navigation is a foundational WCAG 2.1 AA requirement ensuring that every interactive interface element can be discovered, focused, and triggered without a mouse. It requires semantic elements (<button>), explicit keyboard event handlers (onKeyDown), visible focus styling, and modal focus trapping.
- **kind:** technique
- **source names:** addy: `Keyboard Navigation` · matt: — · rjm: —
- **decision:** D-377
- **concordance:** `docs/analysis/concordance/techniques.md#addy-keyboard-navigation`

### leading-word

- **definition:** Leading word is a cornerstone prompt-engineering technique in Matt's design. Rather than spending dozens of tokens explaining nuanced behaviors, authoring documents leverage compact pretrained tokens (e.g. *wait*, *tight*, *red*) that recruit extensive latent model priors at near-zero token cost.
- **kind:** technique
- **source names:** addy: — · matt: `leading word` · rjm: —
- **decision:** D-481
- **concordance:** `docs/analysis/concordance/techniques.md#matt-leading-word`

### leading-words

- **definition:** Leading words is a prompt and documentation technique that recruits rich latent concepts already present in an LLM's pretraining using compact tokens. Anchoring to pretrained terms guides complex multi-step behavior without spending context on verbose explanations.
- **kind:** technique
- **source names:** addy: — · matt: `leading words` · rjm: —
- **decision:** D-486
- **concordance:** `docs/analysis/concordance/techniques.md#matt-leading-words`

### lint-staged

- **definition:** Lint staged is a fast pre-commit optimization technique that scopes formatting tools like Prettier strictly to staged files rather than scanning the entire repository, keeping commit times minimal.
- **kind:** technique
- **source names:** addy: — · matt: `lint-staged` · rjm: —
- **decision:** D-428
- **concordance:** `docs/analysis/concordance/techniques.md#matt-lint-staged`

### manage-confusion-actively

- **definition:** Manage confusion actively is a critical behavioral rule halting autonomous execution whenever an agent detects contradictions or ambiguity, requiring it to name the confusion and present tradeoff options rather than guessing and hoping for the best.
- **kind:** technique
- **source names:** addy: `Manage Confusion Actively` · matt: — · rjm: —
- **decision:** D-382
- **concordance:** `docs/analysis/concordance/techniques.md#addy-manage-confusion-actively`

### mcp-integration

- **definition:** Mcp integration is an engineering technique for mCP Integration connects AI agents to live runtime environments (such as Chrome DevTools for browser testing), enabling skills to verify real execution state instead of making ungrounded assumptions based solely on static code.
- **kind:** technique
- **source names:** addy: `MCP Integration` · matt: — · rjm: —
- **decision:** D-394
- **concordance:** `docs/analysis/concordance/techniques.md#addy-mcp-integration`

### merge-rebase

- **definition:** Merge rebase is an engineering technique for git branch integration operations (merging or rebasing) that result in file-level conflicts. The resolving-merge-conflicts skill provides a structured procedure to inspect conflict state, understand intent from commit messages and PRs, resolve hunks without inventing behavior, and verify with automated checks.
- **kind:** technique
- **source names:** addy: — · matt: `merge/rebase` · rjm: —
- **decision:** D-403
- **concordance:** `docs/analysis/concordance/techniques.md#matt-merge-rebase`

### mermaid-graph

- **definition:** Mermaid graph is the primary diagramming technique recommended for HTML architecture reports to visualize dependencies and call flows, using Mermaid syntax wrapped in Tailwind-styled cards and styled with classDef rules to contrast messy before states against clean deep modules.
- **kind:** technique
- **source names:** addy: — · matt: `Mermaid graph` · rjm: —
- **decision:** D-476
- **concordance:** `docs/analysis/concordance/techniques.md#matt-mermaid-graph`

### migrate-to-shoehorn

- **definition:** Migrate to shoehorn is a refactoring technique and workflow in the misc bucket that replaces unsafe `as` type assertions in test files with type-safe shoehorn utilities, preventing test mocks from masking schema regressions.
- **kind:** technique
- **source names:** addy: — · matt: `migrate-to-shoehorn` · rjm: —
- **decision:** D-362
- **concordance:** `docs/analysis/concordance/techniques.md#matt-migrate-to-shoehorn`

### milestone-retrospective

- **definition:** Milestone retrospective is a retrospective analysis skill designed to inspect completed coding session logs and recommend actionable refinements to the agent's environment. It addresses the root causes of agent mistakes by improving navigation pointers, automated checks, coding standards, or tooling efficiency.
- **kind:** technique
- **source names:** addy: — · matt: `retro` · rjm: —
- **decision:** D-453
- **concordance:** `docs/analysis/concordance/techniques.md#matt-retro`

### mock

- **definition:** Mock is a test double technique strictly confined to external system boundaries (third-party APIs, time, external services). Matt Pocock's design philosophy firmly rejects mocking internal modules, classes, or database abstractions, mandating real implementations or in-process stand-ins instead to avoid brittle, tautological tests.
- **kind:** technique
- **source names:** addy: — · matt: `Mock` · rjm: —
- **decision:** D-442
- **concordance:** `docs/analysis/concordance/techniques.md#matt-mock`

### most-important-first

- **definition:** Most important first is an async prioritization heuristic ensuring that if a busy stakeholder answers only the top few questions before disengaging, the most critical decision-blocking uncertainties are resolved first.
- **kind:** technique
- **source names:** addy: — · matt: `most-important-first` · rjm: —
- **decision:** D-283
- **concordance:** `docs/analysis/concordance/techniques.md#matt-most-important-first`

### multi-commit-rebase

- **definition:** Multi commit rebase is a multi-commit rebase is identified as an operational hazard for coding agents. Because rebasing across multiple commits with repeated conflict resolution easily causes agents to lose track of intermediate state, the recommended pattern is to abort, squash the branch to a single commit, and rebase cleanly once.
- **kind:** technique
- **source names:** addy: — · matt: `multi-commit rebase` · rjm: —
- **decision:** D-495
- **concordance:** `docs/analysis/concordance/techniques.md#matt-multi-commit-rebase`

### multi-session-planning

- **definition:** Multi session planning is an engineering technique for multi-session planning is an architectural strategy designed to combat context window exhaustion on large efforts. Instead of attempting to settle all details at once, it maps the problem into a structured graph of decision tickets that can be tackled across separate, focused sessions, preventing context degradation.
- **kind:** technique
- **source names:** addy: — · matt: `multi-session planning` · rjm: —
- **decision:** D-454
- **concordance:** `docs/analysis/concordance/techniques.md#matt-multi-session-planning`

### multi-topic-grilling

- **definition:** Multi topic grilling is an engineering technique that grills is the active verb form of the grilling interview technique. In improve-codebase-architecture, once a candidate is chosen, the agent grills the human on constraints and design trade-offs to ensure consensus before any refactoring takes place.
- **kind:** technique
- **source names:** addy: — · matt: `grills` · rjm: —
- **decision:** D-430
- **concordance:** `docs/analysis/concordance/techniques.md#matt-grills`

### native-blocking-edges

- **definition:** Native blocking edges is an engineering technique for native blocking edges represent prerequisite constraints directly within the issue tracking engine, ensuring that tasks cannot be picked up until their dependencies are completed.
- **kind:** technique
- **source names:** addy: — · matt: `native blocking edges` · rjm: —
- **decision:** D-311
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-blocking-edges`

### native-blocking-link

- **definition:** Native blocking link is an engineering technique for gitLab's platform feature for linking blocked issues to their blockers, used by wayfinder to establish machine-verifiable dependency graphs across tickets.
- **kind:** technique
- **source names:** addy: — · matt: `native blocking link` · rjm: —
- **decision:** D-413
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-blocking-link`

### native-issue-dependencies

- **definition:** Native issue dependencies is an engineering technique for gitHub's built-in issue dependency relationship mechanism, leveraged by wayfinder to establish canonical blocking edges between tickets and enable automated frontier queries.
- **kind:** technique
- **source names:** addy: — · matt: `native issue dependencies` · rjm: —
- **decision:** D-449
- **concordance:** `docs/analysis/concordance/techniques.md#matt-native-issue-dependencies`

### native-skills-system

- **definition:** Native skills system is the native skills system represents host-level skill auto-discovery and on-demand invocation natively supported by the Gemini CLI. By automatically detecting `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` and activating them only when relevant to the user's prompt, it avoids monolithic system instruction files and preserves context budget.
- **kind:** technique
- **source names:** addy: `native skills system` · matt: — · rjm: —
- **decision:** D-380
- **concordance:** `docs/analysis/concordance/techniques.md#addy-native-skills-system`

### natural-language-steering

- **definition:** Natural language steering is an engineering technique for natural-language steering establishes conversational dialogue as the primary mechanism for regulating agent depth, keeping control with the human operator rather than imposing rigid numeric thresholds.
- **kind:** technique
- **source names:** addy: — · matt: `natural-language steering` · rjm: —
- **decision:** D-502
- **concordance:** `docs/analysis/concordance/techniques.md#matt-natural-language-steering`

### no-fluff

- **definition:** No fluff is an engineering technique for `/no-fluff` represents a common prompt-engineering shortcut that attempts to reduce verbosity by constraining phrasing. Matt notes that focusing on output removal rather than listener needs causes models to become blunt while leaving underlying misunderstandings unresolved.
- **kind:** technique
- **source names:** addy: — · matt: `/no-fluff` · rjm: —
- **decision:** D-470
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-fluff`

### no-op-test

- **definition:** No op test is a behavioral editing technique: delete a sentence and test whether the agent's actions change. If behavior does not change, the line is a no-op that wastes context tokens and must be removed. It establishes an empirical, behavioral standard for brevity rather than stylistic preference.
- **kind:** technique
- **source names:** addy: — · matt: `no-op test` · rjm: —
- **decision:** D-356
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-op-test`

### no-ops

- **definition:** No ops is a pruning technique that tests whether an instruction actually changes model behavior relative to default pre-trained behavior. If a model already follows the behavior by default, the instruction consumes valuable context window tokens and attention without altering output, and should be eliminated rather than edited.
- **kind:** technique
- **source names:** addy: — · matt: `No-ops` · rjm: —
- **decision:** D-508
- **concordance:** `docs/analysis/concordance/techniques.md#matt-no-ops`

### npx-skills

- **definition:** Npx skills is the CLI execution mechanism used by developers to discover, add, and manage skills within their coding environment (`npx skills@latest add ...`), enabling modular distribution and installation of agent capabilities.
- **kind:** technique
- **source names:** addy: — · matt: `npx skills` · rjm: —
- **decision:** D-485
- **concordance:** `docs/analysis/concordance/techniques.md#matt-npx-skills`

### on-demand-skill-activation

- **definition:** On demand skill activation is an engineering technique for on-demand skill activation enables natural-language intent routing, allowing coding agents to autonomously load relevant methodology skills when developers describe work rather than requiring explicit slash commands.
- **kind:** technique
- **source names:** addy: `On-Demand Skill Activation` · matt: — · rjm: —
- **decision:** D-277
- **concordance:** `docs/analysis/concordance/techniques.md#addy-on-demand-skill-activation`

### one-slice-at-a-time

- **definition:** One slice at a time is an engineering technique that enforces strict atomicity in TDD execution: exactly one seam, one test, and one minimal implementation per cycle. This prevents agents and human developers from accumulating unverified code or over-committing to complex architectures before seeing concrete tests pass, ensuring steady, predictable progress.
- **kind:** technique
- **source names:** addy: — · matt: `One slice at a time` · rjm: —
- **decision:** D-310
- **concordance:** `docs/analysis/concordance/techniques.md#matt-one-slice-at-a-time`

### open-url

- **definition:** Open url is a cross-platform browser opening utility in the wizard template library that detects and uses available launcher commands (`wslview`, `explorer.exe`, `xdg-open`, or macOS `open`) to navigate the human to the exact dashboard page required, falling back to manual instruction if no browser launcher succeeds.
- **kind:** technique
- **source names:** addy: — · matt: `open_url` · rjm: —
- **decision:** D-441
- **concordance:** `docs/analysis/concordance/techniques.md#matt-open-url`

### operational-metrics

- **definition:** Operational metrics is an observational technique tracking quantitative performance, reliability, and error indicators to verify system health across operational workflows.
- **kind:** technique
- **source names:** addy: `Metrics` · matt: — · rjm: `metric`
- **decision:** D-365
- **concordance:** `docs/analysis/concordance/techniques.md#operational-metrics`

### parallel-worktrees

- **definition:** Parallel worktrees is the practice of running multiple concurrent agent sessions in isolated git worktrees. To prevent loss of intent during branch reconciliation, matt emphasizes that the session that authored the changes in a worktree should perform the merge back, rather than batching all conflicts onto a separate agent lacking author context.
- **kind:** technique
- **source names:** addy: — · matt: `parallel worktrees` · rjm: —
- **decision:** D-342
- **concordance:** `docs/analysis/concordance/techniques.md#matt-parallel-worktrees`

### pause

- **definition:** Pause is a synchronization helper function in the wizard framework that halts execution until the user manually performs an out-of-band action (such as navigating a dashboard or confirming an external state) and presses Enter to proceed.
- **kind:** technique
- **source names:** addy: — · matt: `pause` · rjm: —
- **decision:** D-407
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pause`

### perf-branch

- **definition:** Perf branch is a specialized diagnostic branch in the bug diagnosis workflow that prescribes baseline measurement and bisection instead of log-based debugging for performance regressions.
- **kind:** technique
- **source names:** addy: — · matt: `Perf branch` · rjm: —
- **decision:** D-317
- **concordance:** `docs/analysis/concordance/techniques.md#matt-perf-branch`

### performance-branch

- **definition:** Performance branch is the performance branch adapts the diagnosing-bugs workflow to latency and resource regressions. Instead of relying on boolean pass/fail tests, it establishes a quantitative baseline measurement, applies bisection, and insists on measuring before and after any code modifications.
- **kind:** technique
- **source names:** addy: — · matt: `performance branch` · rjm: —
- **decision:** D-360
- **concordance:** `docs/analysis/concordance/techniques.md#matt-performance-branch`

### plain-english

- **definition:** Plain english is an engineering technique for plain English establishes the communicative baseline for human-agent collaboration in Matt's toolkit. Grounded in ASD-STE100 principles, it prevents models from generating opaque, self-referential prose and forces clear sentence structures without sacrificing technical precision.
- **kind:** technique
- **source names:** addy: — · matt: `plain English` · rjm: —
- **decision:** D-498
- **concordance:** `docs/analysis/concordance/techniques.md#matt-plain-english`

### plan-step-decomposition

- **definition:** Plan step decomposition is a terminal helper function in interactive scripts (`template.sh` and `hitl-loop.template.sh`). It presents a discrete human action (such as performing a manual browser step or signing into a service) and pauses execution until confirmed, maintaining clear visual progress during guided operations.
- **kind:** technique
- **source names:** addy: — · matt: `step` · rjm: —
- **decision:** D-420
- **concordance:** `docs/analysis/concordance/techniques.md#matt-step`

### post-mortem

- **definition:** Post mortem is an engineering technique for in `matt:engineering`, a post-mortem captures systemic architectural lessons from difficult bugs. In earlier iterations of `diagnosing-bugs`, Phase 6 incorporated a post-mortem step that handed off findings directly to `improve-codebase-architecture` whenever the lack of a proper test seam was identified. Because `improve-codebase-architecture` is an interactive user-invoked skill, this autonomous hand-off violated invocation invariants during unattended debugging sessions and was subsequently removed in favor of a clean, checklist-only Phase 6.
- **kind:** technique
- **source names:** addy: — · matt: `post-mortem` · rjm: —
- **decision:** D-469
- **concordance:** `docs/analysis/concordance/techniques.md#matt-post-mortem`

### prefactor

- **definition:** Prefactor is an engineering technique for prefactoring embodies the principle "Make the change easy, then make the easy change." Rather than tangling structural adjustments with new feature logic within a single ticket or commit, prefactoring isolates preparatory restructuring into dedicated prerequisite tickets. This keeps diffs clean, lowers cognitive load, and ensures that when new functionality is introduced, the codebase already accommodates it cleanly.
- **kind:** technique
- **source names:** addy: — · matt: `prefactor` · rjm: —
- **decision:** D-334
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prefactor`

### prefactoring

- **definition:** Prefactoring is the practice of refactoring existing code prior to introducing new features, adhering to Kent Beck's maxim: "Make the change easy, then make the easy change." In `to-tickets`, prefactoring tickets are scheduled first in the dependency graph so that architectural friction is eliminated in standalone, behavior-preserving commits before behavioral feature tickets are attempted.
- **kind:** technique
- **source names:** addy: — · matt: `prefactoring` · rjm: —
- **decision:** D-318
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prefactoring`

### prettier

- **definition:** Prettier is an opinionated code formatting tool that enforces consistent styling across a codebase. Integrated into pre-commit workflows so developers and agents do not waste review bandwidth on formatting trivialities.
- **kind:** technique
- **source names:** addy: — · matt: `Prettier` · rjm: —
- **decision:** D-499
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prettier`

### progressive-disclosure

- **definition:** Progressive disclosure is the core architectural discipline of Matt's documentation approach: keep primary files focused on ordered steps and high-priority rules, moving detailed, branch-specific, or voluminous references into separate files accessed only via context pointers when needed.
- **kind:** technique
- **source names:** addy: — · matt: `progressive disclosure` · rjm: —
- **decision:** D-432
- **concordance:** `docs/analysis/concordance/techniques.md#matt-progressive-disclosure`

### prompt-driven-skill-architecture

- **definition:** Prompt driven skill architecture is an engineering technique for prompt-driven skill architecture leverages the natural adaptability of large language models to re-scope skill execution on the fly, eliminating the overhead of dedicated CLI flags or redundant sibling commands.
- **kind:** technique
- **source names:** addy: — · matt: `prompt-driven` · rjm: —
- **decision:** D-282
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prompt-driven`

### prompt-quality

- **definition:** Prompt quality is an engineering technique for prompt-quality emphasizes that conversational precision and relevance must be engineered into the skill prompt itself rather than handled through arbitrary external throttling mechanisms.
- **kind:** technique
- **source names:** addy: — · matt: `prompt-quality` · rjm: —
- **decision:** D-487
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prompt-quality`

### prototype-exploration-technique

- **definition:** Prototype exploration technique is a shaping technique that resolves thorny design questions through disposable, runnable code rather than abstract conversational debate. By focusing strictly on answering one question, it prevents agents and developers from over-engineering unverified designs into production.
- **kind:** technique
- **source names:** addy: — · matt: `The /prototype Skill` · rjm: —
- **decision:** D-289
- **concordance:** `docs/analysis/concordance/techniques.md#matt-the-prototype-skill`

### prototyping

- **definition:** Prototyping is the empirical engine of Wayfinder. Rather than building elaborate speculative roadmaps, Wayfinder relies on rapid, disposable prototypes to flush out technical constraints and invalidate bad assumptions early, keeping multi-session planning agile and evidence-driven.
- **kind:** technique
- **source names:** addy: — · matt: `prototyping` · rjm: —
- **decision:** D-446
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prototyping`

### pruning

- **definition:** Pruning is the continuous editorial discipline of auditing agent-facing text sentence by sentence. Pruning aggressively removes no-ops, deduplicates repeated concepts, and eliminates stale sediment to ensure every token in the agent's window earns its keep.
- **kind:** technique
- **source names:** addy: — · matt: `Pruning` · rjm: —
- **decision:** D-358
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pruning`

### pulling-from-the-pile

- **definition:** Pulling from the pile is an engineering technique for pulling from the pile defines the core extraction technique of treating raw authoring material as a quarry rather than a rigid outline. Material can be freely split, recombined, or paraphrased to serve the article's voice, while missing ideas are explicitly called out as gaps to be filled or cut.
- **kind:** technique
- **source names:** addy: — · matt: `Pulling from the pile` · rjm: —
- **decision:** D-401
- **concordance:** `docs/analysis/concordance/techniques.md#matt-pulling-from-the-pile`

### push-back-when-warranted

- **definition:** Push back when warranted is an anti-sycophancy directive instructing agents to voice honest technical objections and provide quantified tradeoffs when a proposed approach is flawed, prioritizing genuine software quality over agreeable compliance.
- **kind:** technique
- **source names:** addy: `Push Back When Warranted` · matt: — · rjm: —
- **decision:** D-321
- **concordance:** `docs/analysis/concordance/techniques.md#addy-push-back-when-warranted`

### push-right

- **definition:** Push right is a core workflow design heuristic in loop-me: defer human involvement as far right in the process timeline as possible. By executing all preparatory, research, and generation work autonomously first, the human reviewer is engaged only once, late, with fully prepared decision briefs.
- **kind:** technique
- **source names:** addy: — · matt: `Push right` · rjm: —
- **decision:** D-425
- **concordance:** `docs/analysis/concordance/techniques.md#matt-push-right`

### rationalization-tables

- **definition:** Rationalization tables is an engineering technique for rationalization tables are anti-drift mechanisms embedded in skills that explicitly list the plausible-sounding excuses an agent generates to skip disciplined steps (such as omitting tests, assuming backwards compatibility, or bypassing verification) alongside direct refutations that hold the agent to project standards.
- **kind:** technique
- **source names:** addy: `rationalization tables` · matt: — · rjm: —
- **decision:** D-373
- **concordance:** `docs/analysis/concordance/techniques.md#addy-rationalization-tables`

### re-pitches

- **definition:** Re pitches is an engineering technique for re-pitching is Matt's conversational repair technique: rather than forcing the model to simply compress its output into terseness, it instructs the model to step back, identify the missing premise or unstated assumption, and restate the idea in accessible language grounded in project vocabulary.
- **kind:** technique
- **source names:** addy: — · matt: `re-pitches` · rjm: —
- **decision:** D-462
- **concordance:** `docs/analysis/concordance/techniques.md#matt-re-pitches`

### recommendation

- **definition:** Recommendation is the recommendation technique requires the agent to propose a concrete, reasoned answer alongside every question it poses. This accelerates human decision-making by allowing users to answer by number ("1 yes, 2 second option") rather than drafting detailed responses from scratch.
- **kind:** technique
- **source names:** addy: — · matt: `recommendation` · rjm: —
- **decision:** D-325
- **concordance:** `docs/analysis/concordance/techniques.md#matt-recommendation`

### red-green

- **definition:** Red green is an engineering technique for `Red-green` is Matt's streamlined adaptation of classical test-driven development for AI coding agents. Observing that agents routinely fail to execute nuanced refactorings in the middle of implementation, Matt's lifecycle explicitly decouples the red-green authoring loop from refactoring. Developers and agents write a failing test and just enough code to satisfy it, deferring code cleanup and architectural refactoring to a dedicated `code-review` session.
- **kind:** technique
- **source names:** addy: — · matt: `Red-green` · rjm: —
- **decision:** D-326
- **concordance:** `docs/analysis/concordance/techniques.md#matt-red-green`

### red-green-refactor-loop

- **definition:** The red-green-refactor loop is a micro-implementation discipline requiring writing an automated failing test first, writing minimal code to make the test pass, and refactoring while keeping tests green.
- **kind:** technique
- **source names:** addy: `TDD workflow` · matt: `red-green-refactor loop` · rjm: `closed-loop rule`
- **decision:** D-261
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-tdd-red-green-refactor`
- **not to be confused with:** verification-feedback-loop, optimization-workflow

### red-green-slice

- **definition:** Red green slice is a red-green slice is the micro-iteration technique within implement where TDD is driven in minimal atomic steps: one failing test followed by only enough code to pass it, explicitly avoiding speculative code or batch test generation.
- **kind:** technique
- **source names:** addy: — · matt: `red-green slice` · rjm: —
- **decision:** D-309
- **concordance:** `docs/analysis/concordance/techniques.md#matt-red-green-slice`

### redact

- **definition:** Redact is a critical privacy and safety technique in diagnosing bugs that mandates replacing credentials and secrets with `<REDACTED>` and keeping secrets in environment variables. Without this sanitization, auth tokens and credentials would be leaked into terminal context and recorded logs.
- **kind:** technique
- **source names:** addy: — · matt: `Redact` · rjm: —
- **decision:** D-402
- **concordance:** `docs/analysis/concordance/techniques.md#matt-redact`

### refactoring

- **definition:** Refactoring is the discipline of restructuring software internals without changing external observable behavior. In Matt Pocock's methodology, refactoring was explicitly decoupled from the classic red-green-refactor TDD inner loop in June 2026. Because coding agents struggled to execute refactoring mid-implementation and authoring sessions suffer from confirmation bias, refactoring is treated as an independent downstream activity driven by code-review and dedicated improvement skills in separate sessions.
- **kind:** technique
- **source names:** addy: — · matt: `Refactoring` · rjm: —
- **decision:** D-343
- **concordance:** `docs/analysis/concordance/techniques.md#matt-refactoring`

### relentless-interview

- **definition:** Relentless interview is the core questioning technique employed by `grill-me` to stress-test designs and plans by recursively interrogating every branch of the design tree until all ambiguities and unexamined assumptions are resolved.
- **kind:** technique
- **source names:** addy: — · matt: `relentless interview` · rjm: —
- **decision:** D-292
- **concordance:** `docs/analysis/concordance/techniques.md#matt-relentless-interview`

### replace-don-t-layer

- **definition:** Replace don t layer is a testing strategy for module refactoring: when shallow modules are deepened into a cohesive deep module, developers must delete the old unit tests that targeted internal shallow components rather than keeping them as a redundant layer. Tests are rewritten at the deepened interface ("the interface is the test surface").
- **kind:** technique
- **source names:** addy: — · matt: `replace, don't layer` · rjm: —
- **decision:** D-307
- **concordance:** `docs/analysis/concordance/techniques.md#matt-replace-don-t-layer`

### replayed-capture

- **definition:** Replayed capture is a diagnostic technique that isolates bugs by re-running saved production artifacts through code paths in local isolation. It avoids the friction of mocking complex upstream dependencies while retaining realistic error triggers.
- **kind:** technique
- **source names:** addy: — · matt: `replayed capture` · rjm: —
- **decision:** D-323
- **concordance:** `docs/analysis/concordance/techniques.md#matt-replayed-capture`

### reproduction-rate

- **definition:** Reproduction rate is a debugging technique for intermittent or flaky bugs. Rather than stalling waiting for a 100% deterministic reproduction, the agent actively increases the reproduction rate through parallel triggers, load, loops, or injected timing delays until the failure happens reliably enough to test hypotheses against.
- **kind:** technique
- **source names:** addy: — · matt: `reproduction rate` · rjm: —
- **decision:** D-357
- **concordance:** `docs/analysis/concordance/techniques.md#matt-reproduction-rate`

### requestidlecallback

- **definition:** Requestidlecallback is a standard browser API that schedules tasks during browser idle periods, preventing analytics flushes, telemetry, and prefetching from competing with high-priority rendering or input processing.
- **kind:** technique
- **source names:** addy: `requestIdleCallback` · matt: — · rjm: —
- **decision:** D-391
- **concordance:** `docs/analysis/concordance/techniques.md#addy-requestidlecallback`

### resolving-merge-conflicts

- **definition:** Resolving merge conflicts is an engineering technique for `resolving-merge-conflicts` approaches git conflict resolution as an intent-reconciliation problem rather than a syntactic text-editing task. It forbids blind resolution flags like `--ours` or `--theirs` and disallows `--abort`, insisting that the agent inspect primary sources (commit messages, PR discussions, and issue trackers) on both sides of each hunk. By requiring that the repository's native automated checks (typecheck, tests, format) run before committing, it prevents the introduction of code that looks syntactically harmonious but breaks runtime contracts.
- **kind:** technique
- **source names:** addy: — · matt: `resolving-merge-conflicts` · rjm: —
- **decision:** D-331
- **concordance:** `docs/analysis/concordance/techniques.md#matt-resolving-merge-conflicts`

### retrieval-practice

- **definition:** Retrieval practice is an engineering technique for retrieval practice requires learners to actively pull knowledge from memory rather than passively re-reading text. By embedding quizzes and diagnostic drills directly within lessons, the teach skill reinforces memory pathways and confirms understanding before advancing to new material.
- **kind:** technique
- **source names:** addy: — · matt: `retrieval practice` · rjm: —
- **decision:** D-471
- **concordance:** `docs/analysis/concordance/techniques.md#matt-retrieval-practice`

### retrieval-spacing-discipline

- **definition:** Retrieval spacing discipline is an engineering technique for spacing distributes practice intervals over time rather than massing instruction into a single marathon session. In the teach skill, spacing leverages the multi-session nature of the standing workspace to re-test previously learned concepts after intervals of decay, transforming transient familiarity into permanent capability.
- **kind:** technique
- **source names:** addy: — · matt: `spacing` · rjm: —
- **decision:** D-478
- **concordance:** `docs/analysis/concordance/techniques.md#matt-spacing`

### safe-read-command

- **definition:** Safe read command is an engineering technique for `read -r` is the POSIX bash built-in command for capturing input without backslash escaping. While lightweight and portable, its lack of terminal line-editing causes escape sequences (such as arrow key movements) to be captured as literal text, presenting a documented UX limitation in setup wizards.
- **kind:** technique
- **source names:** addy: — · matt: `read -r` · rjm: —
- **decision:** D-503
- **concordance:** `docs/analysis/concordance/techniques.md#matt-read-r`

### sandbox-mode

- **definition:** Sandbox mode is an engineering technique for sandbox mode enforces platform-level permission restrictions on agent shell execution, providing safety guardrails against accidental or malicious system damage during automated runs.
- **kind:** technique
- **source names:** addy: `Sandbox Mode` · matt: — · rjm: —
- **decision:** D-345
- **concordance:** `docs/analysis/concordance/techniques.md#addy-sandbox-mode`

### scaffold-exercises

- **definition:** Scaffold exercises is a specialized course-authoring skill for scaffolding structured educational modules. It automates the generation of multi-variant exercise directories (`problem/`, `solution/`, `explainer/`) adhering to strict naming and linting conventions, ensuring that course repositories pass automated linter validation.
- **kind:** technique
- **source names:** addy: — · matt: `scaffold-exercises` · rjm: —
- **decision:** D-288
- **concordance:** `docs/analysis/concordance/techniques.md#matt-scaffold-exercises`

### scheduler-posttask

- **definition:** Scheduler posttask is a prioritized task-scheduling browser API allowing web applications to schedule tasks with specific priorities ('user-blocking', 'user-visible', 'background') so critical UI updates take precedence over background work.
- **kind:** technique
- **source names:** addy: `scheduler.postTask()` · matt: — · rjm: —
- **decision:** D-387
- **concordance:** `docs/analysis/concordance/techniques.md#addy-scheduler-posttask`

### scheduler-yield

- **definition:** Scheduler yield is the preferred modern web platform API for task-level yielding. Unlike setTimeout(..., 0), scheduler.yield() yields execution to high-priority browser tasks (input handling, rendering) while placing the continuation at the head of the task queue.
- **kind:** technique
- **source names:** addy: `scheduler.yield()` · matt: — · rjm: —
- **decision:** D-370
- **concordance:** `docs/analysis/concordance/techniques.md#addy-scheduler-yield`

### scope-discipline-enforcement

- **definition:** Scope discipline enforcement is a discipline requiring surgical precision during edits, explicitly forbidding orthogonal cleanups, unsolicited refactoring, deleting unfamiliar comments, or adding unrequested features.
- **kind:** technique
- **source names:** addy: `Maintain Scope Discipline` · matt: — · rjm: —
- **decision:** D-276
- **concordance:** `docs/analysis/concordance/techniques.md#addy-maintain-scope-discipline`

### scoping

- **definition:** Scoping is an engineering technique for `scoping` grounds wizard creation in repository evidence. Rather than asking developers open-ended questions about what configuration is required, scoping inspects existing workflow files and configuration schemas to automatically deduce what variables and secrets must be produced.
- **kind:** technique
- **source names:** addy: — · matt: `scoping` · rjm: —
- **decision:** D-340
- **concordance:** `docs/analysis/concordance/techniques.md#matt-scoping`

### scoping-decision-tree

- **definition:** Scoping decision tree is the decision tree represents the structural branching of architectural and design choices that a grilling session systematically traverses to ensure all critical ambiguities are resolved before implementation begins.
- **kind:** technique
- **source names:** addy: — · matt: `decision tree` · rjm: —
- **decision:** D-290
- **concordance:** `docs/analysis/concordance/techniques.md#matt-decision-tree`

### seam-placement

- **definition:** Seam placement is the explicit design choice of where to draw the boundary between a module's internal implementation and its external callers. In Design It Twice, seam placement is treated as its own first-class evaluation criterion—distinct from module depth and change locality—to ensure interfaces are drawn where boundaries naturally occur.
- **kind:** technique
- **source names:** addy: — · matt: `seam placement` · rjm: —
- **decision:** D-306
- **concordance:** `docs/analysis/concordance/techniques.md#matt-seam-placement`

### session-clear-command

- **definition:** Session clear command is a context-management command in Claude Code that erases conversational history to reclaim the full token window. In matt's lifecycle, /clear is the highest-priority context reset move on the phase boundary tree when past work is disposable (such as between independent implementation tickets), eliminating conversational noise and preventing token degradation in the smart zone.
- **kind:** technique
- **source names:** addy: — · matt: `/clear` · rjm: —
- **decision:** D-464
- **concordance:** `docs/analysis/concordance/techniques.md#matt-clear`

### session-hooks

- **definition:** Session hooks is an engineering technique for session Hooks automate the injection of meta-skills or environment validation at session start, ensuring the agent is equipped with workflow routing without requiring manual prompt initialization by the developer.
- **kind:** technique
- **source names:** addy: `Session Hooks` · matt: — · rjm: —
- **decision:** D-400
- **concordance:** `docs/analysis/concordance/techniques.md#addy-session-hooks`

### set-var

- **definition:** Set var is a bash helper function in the wizard template library that automates setting non-secret GitHub Actions variables using the GitHub CLI (`gh variable set`), with graceful degradation to a skip list and manual instructions if `gh` is unavailable or unauthenticated.
- **kind:** technique
- **source names:** addy: — · matt: `set_var` · rjm: —
- **decision:** D-341
- **concordance:** `docs/analysis/concordance/techniques.md#matt-set-var`

### setup-matt-pocock-skills

- **definition:** Setup matt pocock skills is an engineering technique for foundational configuration skill executed once per repository to establish issue tracker destinations, triage label strings, and domain documentation locations. Embodying Matt Pocock's "config is death" philosophy, it replaces global configuration files with committed Markdown files under `docs/agents/`, enabling identical skill instructions to operate portably across GitHub, GitLab, and local scratch trackers without skill modification.
- **kind:** technique
- **source names:** addy: — · matt: `/setup-matt-pocock-skills` · rjm: —
- **decision:** D-438
- **concordance:** `docs/analysis/concordance/techniques.md#matt-setup-matt-pocock-skills`

### setup-pre-commit

- **definition:** Setup pre commit is an interactive setup skill that configures client-side pre-commit quality gates in a repository. It automatically detects the active package manager, installs Husky, lint-staged, and Prettier as devDependencies, initializes Husky v9+, configures formatting with `.lintstagedrc` and default `.prettierrc`, hooks up typechecking and test scripts if present, verifies the setup, and performs an initial commit as a smoke test.
- **kind:** technique
- **source names:** addy: — · matt: `setup-pre-commit` · rjm: —
- **decision:** D-480
- **concordance:** `docs/analysis/concordance/techniques.md#matt-setup-pre-commit`

### shellcheck

- **definition:** Shellcheck is an engineering technique for shellCheck is an industry-standard static analysis tool for shell scripts. In the wizard authoring workflow, running ShellCheck verifies quoting, variable expansion, and portability, ensuring scripts run reliably across varied user shell environments.
- **kind:** technique
- **source names:** addy: — · matt: `shellcheck` · rjm: —
- **decision:** D-417
- **concordance:** `docs/analysis/concordance/techniques.md#matt-shellcheck`

### shoehorn

- **definition:** Shoehorn is a type-safe testing utility and technique that allows developers to provide partial or mock objects in unit tests while retaining TypeScript type checking on the provided properties.
- **kind:** technique
- **source names:** addy: — · matt: `shoehorn` · rjm: —
- **decision:** D-350
- **concordance:** `docs/analysis/concordance/techniques.md#matt-shoehorn`

### single-interview-round

- **definition:** Single interview round is a round is the atomic interaction turn in grilling. Rather than asking questions one by one or dumping an overwhelming checklist all at once, a round asks exactly the subset of decisions whose dependencies are satisfied. This parallelizes independent inquiries while preserving logical causality across iterations.
- **kind:** technique
- **source names:** addy: — · matt: `round` · rjm: —
- **decision:** D-429
- **concordance:** `docs/analysis/concordance/techniques.md#matt-round`

### single-session-planning

- **definition:** Single session planning is an engineering technique for single-session planning is an architectural technique for resolving trade-offs and settling terminology in a single conversation. It prioritizes low overhead and rapid convergence, writing newly crystallized domain terms into CONTEXT.md and significant trade-offs into ADRs before passing the settled conversation directly to downstream specification skills.
- **kind:** technique
- **source names:** addy: — · matt: `single-session planning` · rjm: —
- **decision:** D-482
- **concordance:** `docs/analysis/concordance/techniques.md#matt-single-session-planning`

### six-phase-diagnosis

- **definition:** Six phase diagnosis is the core diagnostic methodology in Matt Pocock's diagnosing-bugs skill. It enforces a strict, gated sequence of six phases: (1) build a tight reproduction loop, (2) minimize reproduction code/time, (3) formulate and rank falsifiable hypotheses, (4) add targeted temporary instrumentation, (5) implement the fix with a regression test, and (6) clean up temporary probes. The methodology prevents agents from prematurely editing code or guessing theories before establishing an automated red-green verification signal.
- **kind:** technique
- **source names:** addy: — · matt: `six-phase diagnosis` · rjm: —
- **decision:** D-336
- **concordance:** `docs/analysis/concordance/techniques.md#matt-six-phase-diagnosis`

### skill-discovery

- **definition:** Skill discovery is the central dispatch mechanism in Addy's meta-skill architecture, matching incoming requests and current development phases against a structured decision tree to select the right skill from the 24-skill library.
- **kind:** technique
- **source names:** addy: `Skill Discovery` · matt: — · rjm: —
- **decision:** D-275
- **concordance:** `docs/analysis/concordance/techniques.md#addy-skill-discovery`

### skill-execution-harness

- **definition:** Skill execution harness is an engineering technique that skills are the fundamental procedural unit in addy's architecture, providing structured instructions that turn LLM capabilities into deterministic engineering workflows with verifiable exit gates.
- **kind:** technique
- **source names:** addy: `Skills` · matt: — · rjm: —
- **decision:** D-388
- **concordance:** `docs/analysis/concordance/techniques.md#addy-skills`

### skill-execution-harness-technique

- **definition:** Skill execution harness technique is an engineering technique for in `matt`, `skills` has a dual meaning. Within the `teach` skill, it defines the practical, actionable capabilities a learner acquires through interactive practice, complementing factual knowledge and practitioner wisdom. Across the package as a whole, it represents the modular prompt-based behaviors and slash commands that equip coding agents to perform disciplined engineering tasks.
- **kind:** technique
- **source names:** addy: — · matt: `skills` · rjm: —
- **decision:** D-465
- **concordance:** `docs/analysis/concordance/techniques.md#matt-skills`

### spike-prototyping

- **definition:** Spike prototyping is an empirical exploration technique in matt designed to break deadlocks during requirements gathering. When conversational inquiry cannot settle how a state machine behaves or how a screen feels, the developer detours to a prototype on an isolated branch. The code is written as deliberately throwaway—omitting tests, persistence, and abstractions—so that only the validated answer is preserved and folded into subsequent specifications.
- **kind:** technique
- **source names:** addy: — · matt: `prototype` · rjm: —
- **decision:** D-291
- **concordance:** `docs/analysis/concordance/techniques.md#matt-prototype`

### splitting-by-invocation

- **definition:** Splitting by invocation is an engineering technique that balances autonomous agent reach against permanent context window overhead. Because each model-invoked skill demands always-loaded description tokens, splitting by invocation requires justifying that token cost through a distinct prompt trigger word or cross-skill invocation need.
- **kind:** technique
- **source names:** addy: — · matt: `Splitting by invocation` · rjm: —
- **decision:** D-440
- **concordance:** `docs/analysis/concordance/techniques.md#matt-splitting-by-invocation`

### stampede-protection

- **definition:** Stampede protection is an engineering technique for stampede protection is the umbrella architectural safeguard preventing a cache invalidation on a hot key from flooding origin services with concurrent recomputations. Addy notes that naive cache-aside implementations are particularly vulnerable, requiring mitigations such as in-flight promise deduplication, distributed locking, or serving stale data during background revalidation.
- **kind:** technique
- **source names:** addy: `stampede protection` · matt: — · rjm: —
- **decision:** D-381
- **concordance:** `docs/analysis/concordance/techniques.md#addy-stampede-protection`

### steps-and-completion-criteria

- **definition:** Steps and completion criteria is an engineering technique that establishes the core behavioural lever for procedural agent execution. By requiring every step to terminate on clear, checkable, and demanding conditions, it prevents agents from declaring premature success or rushing through sequential tasks.
- **kind:** technique
- **source names:** addy: — · matt: `Steps and completion criteria` · rjm: —
- **decision:** D-426
- **concordance:** `docs/analysis/concordance/techniques.md#matt-steps-and-completion-criteria`

### subagent-dispatch

- **definition:** Subagent dispatch is an engineering technique for subagent-dispatch enables a primary agent to launch background child agents for focused tasks (such as parallel research or adversarial code review) using harness-agnostic instructions.
- **kind:** technique
- **source names:** addy: — · matt: `subagent-dispatch` · rjm: —
- **decision:** D-452
- **concordance:** `docs/analysis/concordance/techniques.md#matt-subagent-dispatch`

### subagents

- **definition:** Subagents is an engineering technique that subagents in addy represent Claude Code's stable parallelism primitive for executing independent tasks concurrently. Operating in their own context windows, subagents report findings strictly back to the spawning main agent without peer-to-peer messaging, making them ideal for parallel fan-out inspections (such as /ship) and research isolation.
- **kind:** technique
- **source names:** addy: `Subagents` · matt: — · rjm: —
- **decision:** D-386
- **concordance:** `docs/analysis/concordance/techniques.md#addy-subagents`

### surface-assumptions

- **definition:** Surface assumptions is an operational guardrail requiring agents to explicitly enumerate their assumptions about requirements, architecture, and scope before writing code, preventing costly rework caused by silent, unchecked misunderstandings.
- **kind:** technique
- **source names:** addy: `Surface Assumptions` · matt: — · rjm: —
- **decision:** D-320
- **concordance:** `docs/analysis/concordance/techniques.md#addy-surface-assumptions`

### talk-normal

- **definition:** Talk normal is an engineering technique for `/talk-normal` is an informal concision command that attempts to de-jargonize agent speech. In Matt's evaluation, such commands lack an anchor in agreed project vocabulary and lead models to strip nuance rather than restate missing foundational premises.
- **kind:** technique
- **source names:** addy: — · matt: `/talk-normal` · rjm: —
- **decision:** D-412
- **concordance:** `docs/analysis/concordance/techniques.md#matt-talk-normal`

### task-completion-verification

- **definition:** Task completion verification is a terminal presentation helper function in `template.sh` that provides closure to interactive setup wizards. By clearing intermediate step output and presenting a clean summary of written variables, secrets, and skipped manual tasks, `finish` gives the human operator an unambiguous record of what was accomplished and what remains to be done.
- **kind:** technique
- **source names:** addy: — · matt: `finish` · rjm: —
- **decision:** D-445
- **concordance:** `docs/analysis/concordance/techniques.md#matt-finish`

### teaching-decision

- **definition:** Teaching decision is a teaching decision represents any pedagogical choice made by the agent—determining next topic, selecting resources, or designing exercises. The package requires all such decisions to be anchored in MISSION.md, ensuring that learning activities remain tightly coupled to the user's real-world outcome rather than arbitrary curriculum progression.
- **kind:** technique
- **source names:** addy: — · matt: `teaching decision` · rjm: —
- **decision:** D-314
- **concordance:** `docs/analysis/concordance/techniques.md#matt-teaching-decision`

### temporary-instrumentation

- **definition:** Temporary instrumentation is an engineering technique for temporary diagnostic code inserted to expose internal state during bug diagnosis. Matt's lifecycle treats adding temporary instrumentation as an escalated intervention requiring human permission and disciplined tagging (e.g. `[DEBUG-a4f2]`) to ensure complete removal before fixing.
- **kind:** technique
- **source names:** addy: — · matt: `temporary instrumentation` · rjm: —
- **decision:** D-354
- **concordance:** `docs/analysis/concordance/techniques.md#matt-temporary-instrumentation`

### terminal-clearing-technique

- **definition:** Clearing is the context hygiene discipline of resetting the conversation window between independent units of work. In Matt's architecture, tickets are deliberately sized to execute within a single clean context window, making previous conversation history disposable and preventing cross-task context pollution.
- **kind:** technique
- **source names:** addy: — · matt: `clearing` · rjm: —
- **decision:** D-422
- **concordance:** `docs/analysis/concordance/techniques.md#matt-clearing`

### testability

- **definition:** Testability is an architectural quality attribute and primary design objective in Matt's lifecycle where deep abstractions provide simple, durable test surfaces, avoiding the antipattern of exposing private implementation details or extracting shallow helper functions solely for unit testing.
- **kind:** technique
- **source names:** addy: — · matt: `testability` · rjm: —
- **decision:** D-361
- **concordance:** `docs/analysis/concordance/techniques.md#matt-testability`

### the-research-skill

- **definition:** The research skill is a shaping skill that offloads external documentation and fact-finding to an asynchronous background agent reading primary sources. Producing a cited Markdown file in the repo preserves the main session's context window while providing durable, verifiable evidence for subsequent architectural decisions.
- **kind:** technique
- **source names:** addy: — · matt: `The /research Skill` · rjm: —
- **decision:** D-419
- **concordance:** `docs/analysis/concordance/techniques.md#matt-the-research-skill`

### thin-vertical-slices

- **definition:** Thin vertical slices is an end-to-end architectural implementation technique that builds fully functional, cross-layer functional paths demonstrating customer value rather than layer-by-layer horizontal scaffolding.
- **kind:** technique
- **source names:** addy: `thin vertical slices` · matt: `vertical slices` · rjm: `thin vertical slices`
- **decision:** D-301
- **concordance:** `docs/analysis/concordance/techniques.md#vertical-slices`

### three-dot-diff

- **definition:** The three-dot diff is a code review inspection technique utilizing git merge-base diffing ('git diff base...head') to view exclusively changes introduced on a topic branch.
- **kind:** technique
- **source names:** addy: — · matt: `three-dot` · rjm: `three-dot diff`
- **decision:** D-363
- **concordance:** `docs/analysis/concordance/techniques.md#three-dot-diff`

### tldr-abbreviation-command

- **definition:** Tldr abbreviation command is an engineering technique for `/tldr` is analyzed in Matt's design as an anti-pattern for conversational repair. Because it instructs the model to compress output rather than address comprehension failure, it causes the model to delete necessary context and drop into an uninformative register.
- **kind:** technique
- **source names:** addy: — · matt: `/tldr` · rjm: —
- **decision:** D-467
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tldr`

### to-prd-synthesis

- **definition:** To prd synthesis is an engineering technique for `to-prd` was the predecessor skill name for `to-spec` in Matt's toolkit prior to version 1.1. It was retired and renamed to standardize the terminology around "spec" across the entire lifecycle rather than using PRD (Product Requirements Document), aligning the destination document with downstream tickets and test seam specifications.
- **kind:** technique
- **source names:** addy: — · matt: `to-prd` · rjm: —
- **decision:** D-293
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-prd`

### to-questionnaire

- **definition:** To questionnaire is an engineering technique for to-questionnaire bridges the gap between autonomous development and human organizational reality. When progress stalls on unwritten domain knowledge, it packages the ambiguity into a structured, low-friction survey format that respects the stakeholder's time while forcing clear decision options.
- **kind:** technique
- **source names:** addy: — · matt: `to-questionnaire` · rjm: —
- **decision:** D-299
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-questionnaire`

### to-spec-synthesis

- **definition:** To spec synthesis is an engineering technique that synthesizes decisions already made in conversation into a durable specification issue on the project's issue tracker. Designed under the principle that "specs are decision records, not questionnaires", it does not interview the user; instead, it records settled architecture, explicit user stories, implementation decisions, and testing seams so subsequent agent sessions can execute without context drift.
- **kind:** technique
- **source names:** addy: — · matt: `to-spec` · rjm: —
- **decision:** D-294
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-spec`

### to-tickets

- **definition:** To tickets is an engineering technique that breaks complex specifications or plans into independently buildable and verifiable vertical slices ("tracer bullets"). By enforcing vertical cuts through all architecture layers (rather than horizontal slicing by layer) and capturing explicit dependency edges, it generates tasks optimized for single-session agent execution without mid-task blocked states.
- **kind:** technique
- **source names:** addy: — · matt: `to-tickets` · rjm: —
- **decision:** D-316
- **concordance:** `docs/analysis/concordance/techniques.md#matt-to-tickets`

### tool-economy

- **definition:** Tool economy is a retrospective evaluation technique focused on tool usage efficiency and context budget preservation. When coding agents execute repetitive or bloated tool calls (such as indiscriminate search or verbose CLI outputs), tool economy audits identify opportunities to streamline calls, filter responses, or rewrite custom MCP tooling to minimize token expenditure and latency.
- **kind:** technique
- **source names:** addy: — · matt: `Tool economy` · rjm: —
- **decision:** D-451
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tool-economy`

### tracer-bullet

- **definition:** Tracer bullet is a core decomposition principle in Matt Pocock's methodology where units of work cut vertically through every layer of the system (database, domain logic, API, UI, tests) rather than horizontally by technical tier. Each tracer bullet proves an end-to-end path immediately, enabling continuous validation and sizing work to fit safely inside a single fresh context window.
- **kind:** technique
- **source names:** addy: — · matt: `tracer bullet` · rjm: —
- **decision:** D-313
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tracer-bullet`

### tracer-bullet-vertical-slices

- **definition:** Tracer bullet vertical slices is an engineering technique for tracer-bullet vertical slices prioritize building thin, end-to-end functional paths that prove integration across all architectural layers early, preventing the integration risks inherent in horizontal layer-by-layer development.
- **kind:** technique
- **source names:** addy: — · matt: `tracer-bullet vertical slices` · rjm: —
- **decision:** D-281
- **concordance:** `docs/analysis/concordance/techniques.md#matt-tracer-bullet-vertical-slices`

### trigger-evals

- **definition:** Trigger evals is an engineering technique for evaluation technique that assesses whether a skill's description will trigger when an agent encounters natural language user requests. Evaluates TF-IDF similarity of positive test prompts against the entire catalog to guarantee target skills rank in the top-k, while ensuring negative prompts do not rank first.
- **kind:** technique
- **source names:** addy: `Trigger evals` · matt: — · rjm: —
- **decision:** D-383
- **concordance:** `docs/analysis/concordance/techniques.md#addy-trigger-evals`

### trigger-phrasing

- **definition:** Trigger phrasing is an authoring technique where rich, descriptive keywords and situation cues are embedded in skill descriptions so models can autonomously select and execute the skill when relevant conditions arise.
- **kind:** technique
- **source names:** addy: — · matt: `trigger phrasing` · rjm: —
- **decision:** D-466
- **concordance:** `docs/analysis/concordance/techniques.md#matt-trigger-phrasing`

### ttfb-diagnosis

- **definition:** Ttfb diagnosis is a structured diagnostic technique to troubleshoot server response latency (> 800ms). It breaks TTFB into distinct network and compute stages (DNS, connection/TLS, server execution), prescribing targeted remediations for each.
- **kind:** technique
- **source names:** addy: `TTFB Diagnosis` · matt: — · rjm: —
- **decision:** D-384
- **concordance:** `docs/analysis/concordance/techniques.md#addy-ttfb-diagnosis`

### type-assertions

- **definition:** Type assertions is an engineering technique for in TypeScript, `as` type assertions force the compiler to treat a value as a specific type, bypassing static type checking. Matt's workflow flags `as` assertions in test files as a code smell and provides automated migration to safer helper libraries.
- **kind:** technique
- **source names:** addy: — · matt: `type assertions` · rjm: —
- **decision:** D-349
- **concordance:** `docs/analysis/concordance/techniques.md#matt-type-assertions`

### typechecking

- **definition:** Typechecking is a continuous static verification technique mandated during implementation to provide rapid feedback on type errors and syntax mismatches before running automated tests.
- **kind:** technique
- **source names:** addy: — · matt: `typechecking` · rjm: —
- **decision:** D-408
- **concordance:** `docs/analysis/concordance/techniques.md#matt-typechecking`

### ubiquitous-language

- **definition:** Ubiquitous language is an engineering technique that ubiquitous language in Matt's toolkit represents the shared domain vocabulary continuously sharpened and enforced across code, prompts, and conversation. It is maintained actively through `domain-modeling`, where terms are written inline into `CONTEXT.md` as soon as they are resolved, ensuring models and humans share identical conceptual boundaries without semantic drift.
- **kind:** technique
- **source names:** addy: — · matt: `ubiquitous language` · rjm: —
- **decision:** D-304
- **concordance:** `docs/analysis/concordance/techniques.md#matt-ubiquitous-language`

### upserts

- **definition:** Upserts is an engineering technique for upserting combines updating existing values with inserting missing ones. In the wizard skill, the `write_env` helper parses `.env` files line by line, replacing matching key definitions while preserving formatting and comments, or appending new keys when not found.
- **kind:** technique
- **source names:** addy: — · matt: `upserts` · rjm: —
- **decision:** D-404
- **concordance:** `docs/analysis/concordance/techniques.md#matt-upserts`

### variant

- **definition:** Variant is a query-parameter switching technique that enables rapid switching between radically different UI layout prototypes on a single production route, ensuring variants are evaluated against real layout density and live data rather than in an isolated vacuum.
- **kind:** technique
- **source names:** addy: — · matt: `?variant=` · rjm: —
- **decision:** D-328
- **concordance:** `docs/analysis/concordance/techniques.md#matt-variant`

### wait-what

- **definition:** Wait what is a minimalist productivity skill designed to repair conversational comprehension without triggering degenerative 'be concise' caveman responses. By explicitly naming the listener's state ('Wait, you lost me') rather than demanding brevity, it prompts the agent to back up, provide missing context, and re-explain in clear, standardized English using the project's established ubiquitous language.
- **kind:** technique
- **source names:** addy: — · matt: `wait-what` · rjm: —
- **decision:** D-455
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wait-what`

### warning-escalation-helper

- **definition:** Warning escalation helper is a terminal output formatting helper function in `template.sh` providing consistent visual highlighting and alert iconography for non-fatal errors, skipped actions, and cautionary guidance during wizard execution.
- **kind:** technique
- **source names:** addy: — · matt: `warn` · rjm: —
- **decision:** D-496
- **concordance:** `docs/analysis/concordance/techniques.md#matt-warn`

### wayfinder-exploration-skill

- **definition:** Wayfinder exploration skill is an architectural planning discipline designed for large, multi-session initiatives. Instead of generating speculative implementation tasks, wayfinder charts the unknowns as a shared board of 'decision tickets' on an issue tracker. It methodically resolves decisions one at a time before any implementation code or task slicing begins.
- **kind:** technique
- **source names:** addy: — · matt: `wayfinder` · rjm: —
- **decision:** D-489
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wayfinder`

### wayfinder-routing

- **definition:** Wayfinder routing is an engineering technique for wayfinder routing serves as an adaptive on-ramp in `/ask-matt` that identifies projects with high structural ambiguity or multi-session complexity and steers them to `/wayfinder` for incremental mapping rather than attempting premature linear specification.
- **kind:** technique
- **source names:** addy: — · matt: `Wayfinder routing` · rjm: —
- **decision:** D-423
- **concordance:** `docs/analysis/concordance/techniques.md#matt-wayfinder-routing`

### when-to-split

- **definition:** When to split is an engineering technique that establishes the criteria for document decomposition. Because dividing a document spends either context load or cognitive load, splitting is justified only when separating sequential steps prevents premature completion or when independent invocation triggers warrant separate descriptions.
- **kind:** technique
- **source names:** addy: — · matt: `When to split` · rjm: —
- **decision:** D-431
- **concordance:** `docs/analysis/concordance/techniques.md#matt-when-to-split`

### work-through-the-map

- **definition:** Work through the map is the iterative execution loop of wayfinder. Each session loads the low-resolution map, claims a single frontier decision ticket, investigates or grills to reach a definitive decision, records the resolution, and graduates clarified fog into new tickets until the destination is reached.
- **kind:** technique
- **source names:** addy: — · matt: `Work through the map` · rjm: —
- **decision:** D-501
- **concordance:** `docs/analysis/concordance/techniques.md#matt-work-through-the-map`

### worktree

- **definition:** Worktree is the git worktree isolation mechanism used by implement-spec to enable concurrent background subagent execution. Allocating an independent worktree to each implementer subagent prevents git lock contention, working directory collisions, and intermediate state interference during parallel ticket execution.
- **kind:** technique
- **source names:** addy: — · matt: `worktree` · rjm: —
- **decision:** D-322
- **concordance:** `docs/analysis/concordance/techniques.md#matt-worktree`

### write-env

- **definition:** Write env is a bash helper function in the wizard template library that performs idempotent upserts into an environment file (`.env`), ensuring that captured credentials and variables are saved without duplicating keys or corrupting file formatting on repeated wizard runs.
- **kind:** technique
- **source names:** addy: — · matt: `write_env` · rjm: —
- **decision:** D-405
- **concordance:** `docs/analysis/concordance/techniques.md#matt-write-env`

### writing-beats

- **definition:** Writing beats is an exploit-phase writing skill that organizes prose construction into a sequence of discrete narrative beats. It guarantees reader comprehension by checking that every concept is grounded before any beat relies on it, offering branching choices at each step.
- **kind:** technique
- **source names:** addy: — · matt: `writing-beats` · rjm: —
- **decision:** D-409
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-beats`

### writing-fragments

- **definition:** Writing fragments is an in-progress writing skill implementing pure exploratory ideation. By interviewing the author relentlessly and appending ideas to a raw fragments document while forbidding outline generation, it prevents premature structural commitments and preserves rich creative material.
- **kind:** technique
- **source names:** addy: — · matt: `writing-fragments` · rjm: —
- **decision:** D-456
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-fragments`

### writing-great-skills

- **definition:** Writing great skills is the original name of the `writing-for-agents` reference skill. It was renamed in v1.1 when practitioners realized that guidelines on information hierarchy, leading words, and pruning applied universally to all agent-facing text (such as AGENTS.md, specifications, and tickets) rather than just skill definitions.
- **kind:** technique
- **source names:** addy: — · matt: `writing-great-skills` · rjm: —
- **decision:** D-287
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-great-skills`

### writing-shape

- **definition:** Writing shape is an in-progress writing skill implementing the exploit phase of article authoring. It processes a fixed pile of raw fragments, forces deliberate opening selection, and grows the piece paragraph by paragraph while enforcing rigorous conceptual grounding and defensible formatting choices.
- **kind:** technique
- **source names:** addy: — · matt: `writing-shape` · rjm: —
- **decision:** D-421
- **concordance:** `docs/analysis/concordance/techniques.md#matt-writing-shape`

### yagni

- **definition:** YAGNI (You Aren't Gonna Need It) is a scoping filter and design discipline that eliminates speculative requirements, premature abstractions, and unneeded extension points during task planning and implementation.
- **kind:** technique
- **source names:** addy: — · matt: `YAGNI scoping filter` · rjm: `YAGNI`
- **decision:** D-273
- **concordance:** `docs/analysis/concordance/techniques.md#yagni`

### yieldtomain

- **definition:** Yieldtomain is a task-chunking technique in browser JavaScript that yields control back to the main thread's event loop during long-running tasks. This prevents thread starvation, keeping the UI responsive and safeguarding INP.
- **kind:** technique
- **source names:** addy: `yieldToMain` · matt: — · rjm: —
- **decision:** D-376
- **concordance:** `docs/analysis/concordance/techniques.md#addy-yieldtomain`

### zone-of-proximal-development

- **definition:** Zone of proximal development is an engineering technique for vygotskian pedagogical principle adapted for AI instruction in `teach`. It balances challenge against current mastery, selecting lessons that require deliberate effort without exceeding working memory or jumping into ungrounded prerequisites.
- **kind:** technique
- **source names:** addy: — · matt: `zone of proximal development` · rjm: —
- **decision:** D-490
- **concordance:** `docs/analysis/concordance/techniques.md#matt-zone-of-proximal-development`

### Gates

### front-gate-prerequisite

- **definition:** A front-gate prerequisite is an entry assertion that strictly blocks a lifecycle phase or pipeline from initiating until all required upstream artifacts are committed to disk.
- **kind:** gate
- **source names:** addy: `The Gated Workflow` · matt: `Prerequisite` · rjm: `front-gate-before-pipeline`
- **decision:** D-237
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-front-gate-prerequisite`
- **not to be confused with:** task-prerequisites, quality-gate-pipeline

### phase-boundary-transition

- **definition:** A phase boundary transition is the explicit stopping and evaluation point between two lifecycle stages where deliverables are verified and session context is reset or handed off.
- **kind:** gate
- **source names:** addy: `boundaries` · matt: `phase boundary` · rjm: `Boundary translation`
- **decision:** D-252
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-phase-boundary-gate`
- **not to be confused with:** phase-boundary-decision-model, quality-gate-pipeline

### quality-gate-pipeline

- **definition:** A quality-gate pipeline is a series of automated verification checks and policy assertions enforced at phase boundaries before code or artifacts can transition to subsequent stages.
- **kind:** gate
- **source names:** addy: `quality-gate pipelines` · matt: — · rjm: —
- **decision:** D-239
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-quality-gate-pipeline`
- **not to be confused with:** front-gate-prerequisite, phase-boundary-transition

### self-audit-round-cap

- **definition:** The self-audit round cap is a hard limit capping automated review-and-fix iteration loops at three rounds maximum, requiring mandatory escalation to a human developer if unresolved.
- **kind:** gate
- **source names:** addy: `Loop engineering` · matt: `hitl-loop.template.sh` · rjm: `Self-audit round cap`
- **decision:** D-264
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-caps-self-audit-round-cap`
- **not to be confused with:** human-in-the-loop-checkpoint, quality-gate-pipeline

### Roles

*(none yet)*

### References

### lifecycle-anti-recommendations

- **definition:** Lifecycle anti-recommendations are documented negative guidelines defining trivial or mechanical tasks (such as single-line doc typos or dependency pin bumps) where the full lifecycle imposes unnecessary overhead and must be omitted.
- **kind:** reference
- **source names:** addy: — · matt: — · rjm: `idea lifecycle`
- **decision:** D-249
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-overkill-anti-recommendations`
- **not to be confused with:** task-fitness-guide, gate-skip-policy

### orchestration-antipatterns-reference

- **definition:** The orchestration anti-patterns reference is a catalog of prohibited multi-agent design structures, including nested subagent hierarchies, router agents, and hidden conversational re-prompting.
- **kind:** reference
- **source names:** addy: `orchestration anti-pattern` · matt: — · rjm: —
- **decision:** D-260
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-catalog`
- **not to be confused with:** orchestration-patterns-reference, meta-orchestrator-antipattern

### orchestration-patterns-reference

- **definition:** The orchestration patterns reference is an architectural specification documenting approved subagent dispatch topologies, communication constraints, and multi-agent coordination models.
- **kind:** reference
- **source names:** addy: `orchestration-patterns` · matt: — · rjm: —
- **decision:** D-257
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-patterns-catalog`
- **not to be confused with:** orchestration-antipatterns-reference, parallel-fan-out-merge

### task-fitness-guide

- **definition:** The task fitness guide is a decision matrix mapping incoming engineering task shapes (such as full features, hotfixes, spikes, or doc changes) to the appropriate subset of lifecycle phases.
- **kind:** reference
- **source names:** addy: `When to use` · matt: `Explicit scope boundaries` · rjm: `When to Use`
- **decision:** D-241
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-when-to-use-guide`
- **not to be confused with:** lifecycle-anti-recommendations, lifecycle-mapping

### Patterns

### adr-state-lifecycle

- **definition:** The ADR state lifecycle is the formal progression governing architectural decision records through proposed, accepted, rejected, and superseded or deprecated states.
- **kind:** pattern
- **source names:** addy: `ADR Lifecycle` · matt: — · rjm: —
- **decision:** D-271
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-adr-lifecycle`
- **not to be confused with:** architecture-decision-record, considered-options

### agent-driven-workflow

- **definition:** An agent-driven workflow is an autonomous execution paradigm where subagents progress through multi-step task breakdowns within bounded phase constraints without turn-by-turn developer prompting.
- **kind:** pattern
- **source names:** addy: `Agent-driven workflow` · matt: — · rjm: —
- **decision:** D-236
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-agent-driven-workflow`
- **not to be confused with:** command-driven-workflow, standard-feature-workflow

### command-driven-workflow

- **definition:** A command-driven workflow is an execution paradigm where progression through lifecycle phases is explicitly invoked and gated by developer slash commands rather than autonomous loops.
- **kind:** pattern
- **source names:** addy: `Command-driven workflow` · matt: — · rjm: —
- **decision:** D-235
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-command-vs-agent-driven`
- **not to be confused with:** agent-driven-workflow, standard-feature-workflow

### direct-invocation-pattern

- **definition:** The direct invocation pattern is a single-persona execution model where a specialist skill or tool is called directly by the user or primary agent without intermediate coordinator routing.
- **kind:** pattern
- **source names:** addy: `Direct invocation` · matt: — · rjm: —
- **decision:** D-255
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-direct-invocation`
- **not to be confused with:** parallel-fan-out-merge, meta-orchestrator-antipattern

### feature-flag-lifecycle

- **definition:** The feature flag lifecycle is the release management progression governing flag creation, testing, gradual rollout, 100% enablement, and scheduled code cleanup.
- **kind:** pattern
- **source names:** addy: `feature-flag lifecycle` · matt: — · rjm: —
- **decision:** D-270
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-feature-flag-lifecycle`
- **not to be confused with:** standard-feature-workflow, ship-phase

### gate-skip-policy

- **definition:** A gate skip policy is a formal operational standard specifying permissible conditions, mandatory justifications, and audit trails required to bypass a lifecycle gate or verification check.
- **kind:** pattern
- **source names:** addy: `SKIPS` · matt: — · rjm: `_DEFAULT_SKIP_POLICY`
- **decision:** D-248
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-skipping-rules-policy`
- **not to be confused with:** lifecycle-anti-recommendations, front-gate-prerequisite

### greenfield-lifecycle-path

- **definition:** The greenfield lifecycle path is an adoption sequence for new codebases establishing comprehensive specification, strict planning, and rigorous testing gates from project inception.
- **kind:** pattern
- **source names:** addy: `Greenfield` · matt: `greenfield build` · rjm: `BOOTSTRAP_ITERATIONS`
- **decision:** D-250
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-adoption-greenfield-path`
- **not to be confused with:** standard-feature-workflow, quick-fix-workflow

### human-in-the-loop-checkpoint

- **definition:** A human-in-the-loop checkpoint is a deliberate pause in autonomous execution requiring explicit human confirmation, direction, or approval before high-impact or destructive actions proceed.
- **kind:** pattern
- **source names:** addy: — · matt: `human-in-the-loop` · rjm: —
- **decision:** D-265
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-caps-human-in-the-loop`
- **not to be confused with:** self-audit-round-cap, phase-boundary-transition

### implicit-command-mapping

- **definition:** Implicit command mapping is the natural-language intent recognition mechanism that infers and activates the appropriate lifecycle skill without requiring explicit slash-command syntax.
- **kind:** pattern
- **source names:** addy: `Lifecycle Mapping (Implicit Commands)` · matt: — · rjm: —
- **decision:** D-234
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping-implicit`
- **not to be confused with:** lifecycle-mapping, command-driven-workflow

### lifecycle-mapping

- **definition:** Lifecycle mapping is the dispatch heuristic that categorizes an incoming developer request and routes it to the corresponding lifecycle phase and skill.
- **kind:** pattern
- **source names:** addy: `Lifecycle Mapping` · matt: — · rjm: —
- **decision:** D-233
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping`
- **not to be confused with:** implicit-command-mapping, phase-routing

### lifecycle-sequence

- **definition:** The lifecycle sequence is the chronologically ordered stage progression defining the entry, handoff, and completion order across all lifecycle phases.
- **kind:** pattern
- **source names:** addy: `Lifecycle Sequence` · matt: `General workflow tools` · rjm: `Lifecycle commands`
- **decision:** D-231
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-macro-lifecycle-sequence`
- **not to be confused with:** standard-feature-workflow, lifecycle-workflow

### lifecycle-workflow

- **definition:** A lifecycle workflow is an end-to-end disciplined engineering sequence governing software creation, validation, and release under explicit gate constraints.
- **kind:** pattern
- **source names:** addy: `lifecycle` · matt: — · rjm: `Workflows`
- **decision:** D-232
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-concept`
- **not to be confused with:** lifecycle-sequence, standard-feature-workflow

### meta-orchestrator-antipattern

- **definition:** The meta-orchestrator anti-pattern is an inefficient architecture where an intermediate agent persona serves solely to route tasks to other agents, introducing paraphrasing loss and unnecessary token consumption.
- **kind:** pattern
- **source names:** addy: `meta-orchestrator` · matt: — · rjm: —
- **decision:** D-258
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-meta-orchestrator`
- **not to be confused with:** sequential-paraphrasing-antipattern, direct-invocation-pattern

### needs-triage-marker

- **definition:** A needs-triage marker is an issue tracking state or label indicating that an incoming work item is unclassified and requires evaluation before entry into the lifecycle.
- **kind:** pattern
- **source names:** addy: — · matt: `needs-triage` · rjm: `Skill-Triage-002`
- **decision:** D-245
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-needs-triage-label`
- **not to be confused with:** triage-first-discipline, triage-phase

### optimization-workflow

- **definition:** The optimization workflow is an empirical performance tuning cycle progressing through baseline measurement, profiling, surgical optimization, and regression verification.
- **kind:** pattern
- **source names:** addy: `The Optimization Workflow` · matt: — · rjm: —
- **decision:** D-263
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-optimization-workflow`
- **not to be confused with:** verification-feedback-loop, red-green-refactor-loop

### parallel-fan-out-merge

- **definition:** Parallel fan-out with merge is an orchestration pattern in which multiple specialist subagents run concurrently with isolated contexts on independent units or perspectives before their outputs are merged into a synthesized verdict.
- **kind:** pattern
- **source names:** addy: `Parallel fan-out with merge` · matt: — · rjm: `Multi-Agent Orchestration System`
- **decision:** D-256
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-orchestration-parallel-fan-out-merge`
- **not to be confused with:** direct-invocation-pattern, meta-orchestrator-antipattern

### phase-boundary-decision-model

- **definition:** The phase boundary decision model is an architectural protocol evaluated at phase completion to determine context management actions across continuation, clean slate, handoff, subagent dispatch, or compaction.
- **kind:** pattern
- **source names:** addy: `three-tier boundary system` · matt: `Phase boundaries` · rjm: `Boundary Protection`
- **decision:** D-251
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-decision-model`
- **not to be confused with:** phase-boundary-transition, session-handoff-protocol

### pipeline-staleness-invalidation

- **definition:** Pipeline staleness invalidation is the dependency invalidation rule where modifications to upstream specification or planning artifacts mark all downstream code and verification outputs stale, requiring pipeline re-execution.
- **kind:** pattern
- **source names:** addy: — · matt: — · rjm: `Full pipeline staleness`
- **decision:** D-240
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-full-pipeline-staleness`
- **not to be confused with:** front-gate-prerequisite, quality-gate-pipeline

### quick-fix-workflow

- **definition:** The quick fix workflow is an accelerated, three-stage lifecycle fast path (/build → /test → /ship) bypassing specification and planning for localized defect repairs with verified root causes and bounded blast radii.
- **kind:** pattern
- **source names:** addy: `five-step triage` · matt: `triage roles` · rjm: `Quick Fix Workflow`
- **decision:** D-242
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-quick-fix-workflow`
- **not to be confused with:** standard-feature-workflow, research-first-workflow

### research-first-workflow

- **definition:** The research-first workflow is an exploratory lifecycle sequence that executes specification and execution planning (/spec → /plan) to investigate technical spikes and resolve architectural uncertainties without writing implementation code.
- **kind:** pattern
- **source names:** addy: — · matt: `grilling loop` · rjm: `Research-First Workflow`
- **decision:** D-243
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-research-first-workflow`
- **not to be confused with:** standard-feature-workflow, quick-fix-workflow

### review-thread-lifecycle

- **definition:** The review thread lifecycle is the resolution sequence for pull request review comments categorizing severity (blocking vs non-blocking) and tracking findings from open to verified resolved.
- **kind:** pattern
- **source names:** addy: — · matt: — · rjm: `Thread Severity Classification and Lifecycle`
- **decision:** D-272
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-thread-severity-lifecycle`
- **not to be confused with:** review-phase, review-report

### runtime-error-triage

- **definition:** Runtime error triage is a specialized diagnostic sequence isolating exception causes, stack frames, and failure states in production or test environments prior to remediation.
- **kind:** pattern
- **source names:** addy: `Runtime Error Triage` · matt: — · rjm: —
- **decision:** D-247
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-runtime-error-triage`
- **not to be confused with:** triage-checklist-sequence, defect-reproduction

### sequential-paraphrasing-antipattern

- **definition:** The sequential paraphrasing anti-pattern is an execution defect where an autonomous agent wraps and chains macro lifecycle commands sequentially on the user's behalf, obscuring underlying output and bypassing human gates.
- **kind:** pattern
- **source names:** addy: `Sequential orchestrator that paraphrases` · matt: — · rjm: —
- **decision:** D-259
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-antipattern-sequential-paraphrasing`
- **not to be confused with:** meta-orchestrator-antipattern, command-driven-workflow

### session-handoff-protocol

- **definition:** The session handoff protocol is the mechanism of serializing completed phase progress, open decisions, and active context into a structured markdown document on disk to seed subsequent agent conversations.
- **kind:** pattern
- **source names:** addy: — · matt: `The /handoff Skill` · rjm: `Handoff syntax`
- **decision:** D-254
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-handoff-syntax-and-skill`
- **not to be confused with:** phase-boundary-decision-model, phase-boundary-transition

### shift-left-verification

- **definition:** Shift-left verification is the architectural practice of moving quality, security, and performance assertions upstream into specification and planning phases to minimize remediation costs.
- **kind:** pattern
- **source names:** addy: `Shift Left` · matt: — · rjm: `Shift-left security`
- **decision:** D-268
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-shift-left-lifecycle`
- **not to be confused with:** quality-gate-pipeline, front-gate-prerequisite

### standard-feature-workflow

- **definition:** The standard feature workflow is the canonical six-stage macro lifecycle execution pipeline (/spec → /plan → /build → /test → /review → /ship) sequentially driven by the human developer for non-trivial capabilities.
- **kind:** pattern
- **source names:** addy: `Sequential pipeline as user-driven slash commands` · matt: `workflows/*.md` · rjm: `Standard Feature Workflow`
- **decision:** D-230
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-pipeline-standard-feature-workflow`
- **not to be confused with:** quick-fix-workflow, research-first-workflow

### task-dependency-graph

- **definition:** A task dependency graph is a directed acyclic model mapping relationships, prerequisites, and execution constraints among decomposed implementation tasks.
- **kind:** pattern
- **source names:** addy: `dependency graph` · matt: — · rjm: `Workflow Validation`
- **decision:** D-267
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-dependency-graph`
- **not to be confused with:** topological-dependency-order, task-prerequisites

### task-prerequisites

- **definition:** Task prerequisites are explicit dependencies declared on work items or tickets that prevent execution from beginning until blocking parent tasks or technical decisions are complete.
- **kind:** pattern
- **source names:** addy: — · matt: `Prerequisites` · rjm: `Front-gate`
- **decision:** D-238
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-precedence-prerequisites-pattern`
- **not to be confused with:** front-gate-prerequisite, task-dependency-graph

### topological-dependency-order

- **definition:** Topological dependency order is the linear scheduling sequence of work units derived from a directed acyclic graph to ensure all foundational components exist before dependent tasks execute.
- **kind:** pattern
- **source names:** addy: `dependency order` · matt: — · rjm: `Get-DecisionSequence`
- **decision:** D-266
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-dag-dependency-order-topological`
- **not to be confused with:** task-dependency-graph, task-prerequisites

### triage-checklist-sequence

- **definition:** The triage checklist sequence is an ordered defect triage protocol systematically progressing through reproduction, localization, reduction, root cause isolation, recurrence guarding, and verification.
- **kind:** pattern
- **source names:** addy: `The Triage Checklist` · matt: — · rjm: —
- **decision:** D-246
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-triage-checklist`
- **not to be confused with:** triage-first-discipline, runtime-error-triage

### triage-first-discipline

- **definition:** The triage-first discipline is the intake sequencing rule requiring issue reproduction, severity assessment, and blast-radius classification before selecting a lifecycle workflow path.
- **kind:** pattern
- **source names:** addy: — · matt: `Triage role` · rjm: `Triage first`
- **decision:** D-244
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-fitness-triage-first`
- **not to be confused with:** triage-phase, triage-checklist-sequence

### trust-boundary-enforcement

- **definition:** Trust boundary enforcement is an architectural security discipline that isolates trusted agent execution environments and tool invocations from untrusted user inputs, external web content, and third-party data.
- **kind:** pattern
- **source names:** addy: `Trust boundaries` · matt: — · rjm: `Untrusted-content boundary`
- **decision:** D-253
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-boundary-trust-boundaries`
- **not to be confused with:** phase-boundary-transition, front-gate-prerequisite

### verification-feedback-loop

- **definition:** A verification feedback loop is an iterative diagnostic cycle in which code changes are immediately tested against deterministic verification commands to provide rapid correction signals.
- **kind:** pattern
- **source names:** addy: `verification loop` · matt: `feedback loop` · rjm: `self-improving loop`
- **decision:** D-262
- **concordance:** `docs/analysis/concordance/sequencing.md#sequencing-loops-feedback-loop-singular`
- **not to be confused with:** red-green-refactor-loop, optimization-workflow
