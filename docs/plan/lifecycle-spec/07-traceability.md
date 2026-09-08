# 07 — Lifecycle Traceability Matrix

This document provides the complete, end-to-end traceability matrix linking every element in the `brain` lifecycle specification (`docs/plan/lifecycle-spec/00-overview.md` through `06-sequencing.md`) to its canonical glossary entry, governing alignment decision in `docs/decisions/DECISIONS.md`, concordance row in `docs/analysis/concordance/`, and physical source package citations.

---

## 1. Lifecycle Phases Traceability (28 Phases)

| Canonical Phase | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `baseline-establishment` | [D-122](../../decisions/DECISIONS.md#d-122) | [`diagnosing-phase-2`](../analysis/concordance/phases.md#diagnosing-phase-2) | addy: — · matt: `Phase 2` · rjm: `Establish Baseline` |
| `build-phase` | [D-102](../../decisions/DECISIONS.md#d-102) | [`catalog-build-phase`](../analysis/concordance/phases.md#catalog-build-phase) | addy: `Build phase` · matt: — · rjm: `Implementation` |
| `contract-phase` | [D-623](../../decisions/DECISIONS.md#d-623) | [`phase-contract`](../analysis/concordance/phases.md#phase-contract) | addy: — · matt: `Contract` · rjm: — |
| `defect-remediation` | [D-125](../../decisions/DECISIONS.md#d-125) | [`diagnosing-phase-5`](../analysis/concordance/phases.md#diagnosing-phase-5) | addy: — · matt: `Phase 5` · rjm: `Phase 3: Run the Drift Gates Locally Before Pushing` |
| `defect-reproduction` | [D-121](../../decisions/DECISIONS.md#d-121) | [`diagnosing-phase-1`](../analysis/concordance/phases.md#diagnosing-phase-1) | addy: — · matt: `Phase 1` · rjm: `Phase 1: Test Strategy` |
| `deletion-cleanup` | [D-624](../../decisions/DECISIONS.md#d-624) | [`phase-cleanup`](../analysis/concordance/phases.md#phase-cleanup) | addy: — · matt: — · rjm: `Phase D4: Cleanup` |
| `diagnostic-cleanup` | [D-624](../../decisions/DECISIONS.md#d-624) | [`phase-cleanup`](../analysis/concordance/phases.md#phase-cleanup) | addy: — · matt: `Cleanup` · rjm: — |
| `engineering-domain` | [D-113](../../decisions/DECISIONS.md#d-113) | [`framework-engineering`](../analysis/concordance/phases.md#framework-engineering) | addy: — · matt: `engineering` · rjm: — |
| `execution-planning` | [D-118](../../decisions/DECISIONS.md#d-118) | [`workflow-phase-2-plan`](../analysis/concordance/phases.md#workflow-phase-2-plan) | addy: `"Phase 2: Plan"` · matt: — · rjm: `/1-plan` |
| `expand-phase` | [D-621](../../decisions/DECISIONS.md#d-621) | [`phase-expand`](../analysis/concordance/phases.md#phase-expand) | addy: `EXPAND` · matt: `Expand` · rjm: — |
| `hypothesis-generation` | [D-123](../../decisions/DECISIONS.md#d-123) | [`diagnosing-phase-3`](../analysis/concordance/phases.md#diagnosing-phase-3) | addy: — · matt: `Phase 3` · rjm: `Form Hypothesis` |
| `hypothesis-probing` | [D-124](../../decisions/DECISIONS.md#d-124) | [`diagnosing-phase-4`](../analysis/concordance/phases.md#diagnosing-phase-4) | addy: — · matt: `Phase 4` · rjm: `Diagnosis` |
| `lifecycle` | [D-111](../../decisions/DECISIONS.md#d-111) | [`meta-sdlc`](../analysis/concordance/phases.md#meta-sdlc) | addy: `SDLC` · matt: `phase` · rjm: `autonomous development session` |
| `migrate-phase` | [D-622](../../decisions/DECISIONS.md#d-622) | [`phase-migrate`](../analysis/concordance/phases.md#phase-migrate) | addy: `MIGRATE` · matt: `Migrate` · rjm: — |
| `phase-routing` | [D-112](../../decisions/DECISIONS.md#d-112) | [`meta-phase-routing`](../analysis/concordance/phases.md#meta-phase-routing) | addy: `Meta phase` · matt: `productivity` · rjm: — |
| `plan-phase` | [D-103](../../decisions/DECISIONS.md#d-103) | [`catalog-plan-phase`](../analysis/concordance/phases.md#catalog-plan-phase) | addy: `"Plan phase"` · matt: — · rjm: `Execution Planning` |
| `prior-art-review` | [D-116](../../decisions/DECISIONS.md#d-116) | [`workflow-phase-0-homonym`](../analysis/concordance/phases.md#workflow-phase-0-homonym) | addy: — · matt: — · rjm: `Phase 0` |
| `quality-assurance` | [D-106](../../decisions/DECISIONS.md#d-106) | [`catalog-verify-phase`](../analysis/concordance/phases.md#catalog-verify-phase) | addy: `Verify phase` · matt: — · rjm: `Quality Assurance` |
| `reconnaissance` | [D-115](../../decisions/DECISIONS.md#d-115) | [`workflow-phase-0-scope`](../analysis/concordance/phases.md#workflow-phase-0-scope) | addy: `"Phase 0: Scope Check"` · matt: — · rjm: `Phase 0: Recon the target` |
| `review-phase` | [D-104](../../decisions/DECISIONS.md#d-104) | [`catalog-review-phase`](../analysis/concordance/phases.md#catalog-review-phase) | addy: `Review phase` · matt: — · rjm: `Phase 1: Independent Review` |
| `scope-check` | [D-116](../../decisions/DECISIONS.md#d-116) | [`workflow-phase-0-homonym`](../analysis/concordance/phases.md#workflow-phase-0-homonym) | addy: `Phase 0` · matt: — · rjm: — |
| `ship-phase` | [D-105](../../decisions/DECISIONS.md#d-105) | [`catalog-ship-phase`](../analysis/concordance/phases.md#catalog-ship-phase) | addy: `Ship phase` · matt: — · rjm: `Validation and Packaging` |
| `spec` | [D-620](../../decisions/DECISIONS.md#d-620) | [`lifecycle-stage-spec`](../analysis/concordance/phases.md#lifecycle-stage-spec) | addy: `DEFINE` · matt: `explore` · rjm: `/spec` |
| `specification-drafting` | [D-117](../../decisions/DECISIONS.md#d-117) | [`workflow-phase-1-specify`](../analysis/concordance/phases.md#workflow-phase-1-specify) | addy: `"Phase 1: Specify"` · matt: — · rjm: `PRD to Spec` |
| `task-decomposition` | [D-119](../../decisions/DECISIONS.md#d-119) | [`workflow-phase-3-tasks`](../analysis/concordance/phases.md#workflow-phase-3-tasks) | addy: `"Phase 3: Tasks"` · matt: — · rjm: `Kanban` |
| `task-execution` | [D-120](../../decisions/DECISIONS.md#d-120) | [`workflow-phase-4-implement`](../analysis/concordance/phases.md#workflow-phase-4-implement) | addy: `"Phase 4: Implement"` · matt: — · rjm: `/2-impl` |
| `test` | [D-101](../../decisions/DECISIONS.md#d-101) | [`lifecycle-stage-verify-test`](../analysis/concordance/phases.md#lifecycle-stage-verify-test) | addy: `VERIFY` · matt: — · rjm: `test` |
| `triage-phase` | [D-114](../../decisions/DECISIONS.md#d-114) | [`framework-triage`](../analysis/concordance/phases.md#framework-triage) | addy: — · matt: `triage` · rjm: — |

---

## 2. Artifacts Traceability (55 Artifacts)

| Canonical Artifact | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `agent-brief` | [D-127](../../decisions/DECISIONS.md#d-127) | [`artifact-agent-brief`](../analysis/concordance/artifacts.md#artifact-agent-brief) | addy: `product brief` · matt: `agent brief` · rjm: — |
| `agent-guardrails-template` | [D-213](../../decisions/DECISIONS.md#d-213) | [`artifact-rjm-agent-guardrails-template`](../analysis/concordance/artifacts.md#artifact-rjm-agent-guardrails-template) | addy: — · matt: — · rjm: `Agent Guardrails Template` |
| `agent-instructions-file` | [D-165](../../decisions/DECISIONS.md#d-165) | [`artifact-claude-rules`](../analysis/concordance/artifacts.md#artifact-claude-rules) | addy: `CLAUDE.md` · matt: `AGENTS.md` · rjm: — |
| `agent-rules-config` | [D-164](../../decisions/DECISIONS.md#d-164) | [`artifact-rules-configuration`](../analysis/concordance/artifacts.md#artifact-rules-configuration) | addy: `rules` · matt: `per-repo config` · rjm: `Platform Configuration Schema` |
| `architecture-decision-record` | [D-140](../../decisions/DECISIONS.md#d-140) | [`artifact-architecture-decision-records-concept`](../analysis/concordance/artifacts.md#artifact-architecture-decision-records-concept) | addy: `Architecture Decision Records` · matt: `architectural decision` · rjm: `decision group` |
| `artifact-template` | [D-173](../../decisions/DECISIONS.md#d-173) | [`artifact-matt-template`](../analysis/concordance/artifacts.md#artifact-matt-template) | addy: — · matt: `template` · rjm: — |
| `assumption-challenge` | [D-153](../../decisions/DECISIONS.md#d-153) | [`artifact-assumption-challenge`](../analysis/concordance/artifacts.md#artifact-assumption-challenge) | addy: `surviving doubts` · matt: — · rjm: `Assumption Challenge Template` |
| `canonical-glossary-file` | [D-161](../../decisions/DECISIONS.md#d-161) | [`artifact-glossary-md-file`](../analysis/concordance/artifacts.md#artifact-glossary-md-file) | addy: — · matt: `GLOSSARY.md` · rjm: `Data Stores` |
| `changeset` | [D-617](../../decisions/DECISIONS.md#d-617) | [`artifact-changeset`](../analysis/concordance/artifacts.md#artifact-changeset) | addy: `releases` · matt: `changeset` · rjm: — |
| `ci-validation-report-template` | [D-206](../../decisions/DECISIONS.md#d-206) | [`artifact-rjm-ci-validation-report-template`](../analysis/concordance/artifacts.md#artifact-rjm-ci-validation-report-template) | addy: — · matt: — · rjm: `CI Validation Report Template` |
| `code-style-guidelines` | [D-167](../../decisions/DECISIONS.md#d-167) | [`artifact-code-style`](../analysis/concordance/artifacts.md#artifact-code-style) | addy: `Code Style` · matt: `design principles` · rjm: — |
| `commit-message` | [D-143](../../decisions/DECISIONS.md#d-143) | [`artifact-commit-message`](../analysis/concordance/artifacts.md#artifact-commit-message) | addy: `Change Descriptions` · matt: `commit message` · rjm: — |
| `concept-card-template` | [D-205](../../decisions/DECISIONS.md#d-205) | [`artifact-rjm-card-template`](../analysis/concordance/artifacts.md#artifact-rjm-card-template) | addy: — · matt: — · rjm: `Card Template` |
| `considered-options` | [D-139](../../decisions/DECISIONS.md#d-139) | [`artifact-considered-options`](../analysis/concordance/artifacts.md#artifact-considered-options) | addy: `Alternatives Considered` · matt: `Considered Options` · rjm: `Considered Options` |
| `context-map` | [D-141](../../decisions/DECISIONS.md#d-141) | [`artifact-context-map`](../analysis/concordance/artifacts.md#artifact-context-map) | addy: `capability map` · matt: `Context Map` · rjm: `Context Map` |
| `context-map-file` | [D-178](../../decisions/DECISIONS.md#d-178) | [`artifact-matt-context-map-md`](../analysis/concordance/artifacts.md#artifact-matt-context-map-md) | addy: — · matt: `CONTEXT-MAP.md` · rjm: — |
| `conversation-structure-template` | [D-199](../../decisions/DECISIONS.md#d-199) | [`artifact-rjm-conversation-structure-template`](../analysis/concordance/artifacts.md#artifact-rjm-conversation-structure-template) | addy: — · matt: — · rjm: `Conversation Structure Template` |
| `debug-trace` | [D-150](../../decisions/DECISIONS.md#d-150) | [`artifact-debug-trace`](../analysis/concordance/artifacts.md#artifact-debug-trace) | addy: `DevTools performance trace` · matt: `debug log` · rjm: `Probe` |
| `decision-ticket` | [D-184](../../decisions/DECISIONS.md#d-184) | [`artifact-matt-decision-ticket`](../analysis/concordance/artifacts.md#artifact-matt-decision-ticket) | addy: — · matt: `decision ticket` · rjm: — |
| `decision-ticket-set` | [D-189](../../decisions/DECISIONS.md#d-189) | [`artifact-matt-decision-tickets`](../analysis/concordance/artifacts.md#artifact-matt-decision-tickets) | addy: — · matt: `decision tickets` · rjm: — |
| `deferral-issue-template` | [D-218](../../decisions/DECISIONS.md#d-218) | [`artifact-rjm-p1-deferral-issue-template`](../analysis/concordance/artifacts.md#artifact-rjm-p1-deferral-issue-template) | addy: — · matt: — · rjm: `P1 Deferral Issue Template` |
| `design-review-template` | [D-215](../../decisions/DECISIONS.md#d-215) | [`artifact-rjm-design-review-template`](../analysis/concordance/artifacts.md#artifact-rjm-design-review-template) | addy: — · matt: — · rjm: `Design Review Template` |
| `design-schema` | [D-201](../../decisions/DECISIONS.md#d-201) | [`artifact-rjm-design-schema`](../analysis/concordance/artifacts.md#artifact-rjm-design-schema) | addy: — · matt: — · rjm: `Design Schema` |
| `diagnosis-template` | [D-208](../../decisions/DECISIONS.md#d-208) | [`artifact-rjm-diagnosis-template`](../analysis/concordance/artifacts.md#artifact-rjm-diagnosis-template) | addy: — · matt: — · rjm: `Diagnosis Template` |
| `discovery-questionnaire` | [D-133](../../decisions/DECISIONS.md#d-133) | [`artifact-discovery-questionnaire`](../analysis/concordance/artifacts.md#artifact-discovery-questionnaire) | addy: — · matt: `discovery questionnaire` · rjm: `Agent Interview Response Template` |
| `domain-mapping` | [D-183](../../decisions/DECISIONS.md#d-183) | [`artifact-matt-mapping`](../analysis/concordance/artifacts.md#artifact-matt-mapping) | addy: — · matt: `mapping` · rjm: — |
| `editor-rules-config` | [D-166](../../decisions/DECISIONS.md#d-166) | [`artifact-editor-rules`](../analysis/concordance/artifacts.md#artifact-editor-rules) | addy: `cursorrules` · matt: `Domain docs` · rjm: — |
| `evolution-score-template` | [D-194](../../decisions/DECISIONS.md#d-194) | [`artifact-rjm-evolution-score-template`](../analysis/concordance/artifacts.md#artifact-rjm-evolution-score-template) | addy: — · matt: — · rjm: `Evolution Score Template` |
| `execution-plan-doc` | [D-198](../../decisions/DECISIONS.md#d-198) | [`artifact-rjm-executionplan`](../analysis/concordance/artifacts.md#artifact-rjm-executionplan) | addy: — · matt: — · rjm: `ExecutionPlan` |
| `exploration-map` | [D-176](../../decisions/DECISIONS.md#d-176) | [`artifact-matt-map`](../analysis/concordance/artifacts.md#artifact-matt-map) | addy: — · matt: `map` · rjm: — |
| `exploration-map-file` | [D-175](../../decisions/DECISIONS.md#d-175) | [`artifact-matt-map-md`](../analysis/concordance/artifacts.md#artifact-matt-map-md) | addy: — · matt: `map.md` · rjm: — |
| `floor-guard-script` | [D-169](../../decisions/DECISIONS.md#d-169) | [`artifact-addy-floor-guard-mjs`](../analysis/concordance/artifacts.md#artifact-addy-floor-guard-mjs) | addy: `floor-guard.mjs` · matt: — · rjm: — |
| `generation-script-template` | [D-217](../../decisions/DECISIONS.md#d-217) | [`artifact-rjm-generation-script-template`](../analysis/concordance/artifacts.md#artifact-rjm-generation-script-template) | addy: — · matt: — · rjm: `Generation Script Template` |
| `glossary-doc` | [D-160](../../decisions/DECISIONS.md#d-160) | [`artifact-glossary`](../analysis/concordance/artifacts.md#artifact-glossary) | addy: — · matt: `glossary` · rjm: `source symbols` |
| `halt-message-schema` | [D-214](../../decisions/DECISIONS.md#d-214) | [`artifact-rjm-halt-message-schema`](../analysis/concordance/artifacts.md#artifact-rjm-halt-message-schema) | addy: — · matt: — · rjm: `Halt Message Schema` |
| `implementation-ticket` | [D-191](../../decisions/DECISIONS.md#d-191) | [`artifact-matt-implementation-ticket`](../analysis/concordance/artifacts.md#artifact-matt-implementation-ticket) | addy: — · matt: `_implementation_ ticket` · rjm: — |
| `input-contract` | [D-130](../../decisions/DECISIONS.md#d-130) | [`artifact-input-contract`](../analysis/concordance/artifacts.md#artifact-input-contract) | addy: `confirmed statement of intent` · matt: `input pile` · rjm: `Input Contract` |
| `investigation-plan` | [D-224](../../decisions/DECISIONS.md#d-224) | [`artifact-rjm-investigation-plan`](../analysis/concordance/artifacts.md#artifact-rjm-investigation-plan) | addy: — · matt: — · rjm: `investigation plan` |
| `issue-template` | [D-182](../../decisions/DECISIONS.md#d-182) | [`artifact-matt-issue-template`](../analysis/concordance/artifacts.md#artifact-matt-issue-template) | addy: — · matt: `issue-template` · rjm: — |
| `launch-runbook` | [D-157](../../decisions/DECISIONS.md#d-157) | [`artifact-launch-runbook`](../analysis/concordance/artifacts.md#artifact-launch-runbook) | addy: `launch runbook` · matt: — · rjm: `Deployment Diagram` |
| `learning-extraction-template` | [D-210](../../decisions/DECISIONS.md#d-210) | [`artifact-rjm-learning-extraction-template`](../analysis/concordance/artifacts.md#artifact-rjm-learning-extraction-template) | addy: — · matt: — · rjm: `Learning Extraction Template` |
| `learning-record` | [D-163](../../decisions/DECISIONS.md#d-163) | [`artifact-learning-records`](../analysis/concordance/artifacts.md#artifact-learning-records) | addy: — · matt: `learning-records` · rjm: `Sync log` |
| `lifecycle-plan-template` | [D-229](../../decisions/DECISIONS.md#d-229) | [`artifact-rjm-plan-template`](../analysis/concordance/artifacts.md#artifact-rjm-plan-template) | addy: — · matt: — · rjm: `Plan Template` |
| `local-markdown-tickets` | [D-180](../../decisions/DECISIONS.md#d-180) | [`artifact-matt-local-markdown-tickets`](../analysis/concordance/artifacts.md#artifact-matt-local-markdown-tickets) | addy: — · matt: `Local-markdown tickets` · rjm: — |
| `local-ticket-template` | [D-177](../../decisions/DECISIONS.md#d-177) | [`artifact-matt-local-ticket-template`](../analysis/concordance/artifacts.md#artifact-matt-local-ticket-template) | addy: — · matt: `local-ticket-template` · rjm: — |
| `measurement-plan` | [D-225](../../decisions/DECISIONS.md#d-225) | [`artifact-rjm-measurement-plan`](../analysis/concordance/artifacts.md#artifact-rjm-measurement-plan) | addy: — · matt: — · rjm: `Measurement Plan` |
| `migration-plan-template` | [D-216](../../decisions/DECISIONS.md#d-216) | [`artifact-rjm-migration-plan-template`](../analysis/concordance/artifacts.md#artifact-rjm-migration-plan-template) | addy: — · matt: — · rjm: `Migration Plan Template` |
| `mvp-scope` | [D-132](../../decisions/DECISIONS.md#d-132) | [`artifact-mvp-scope`](../analysis/concordance/artifacts.md#artifact-mvp-scope) | addy: `MVP scope` · matt: `Success looks like` · rjm: — |
| `navigational-map` | [D-186](../../decisions/DECISIONS.md#d-186) | [`artifact-matt-the-map`](../analysis/concordance/artifacts.md#artifact-matt-the-map) | addy: — · matt: `the map` · rjm: — |
| `one-pager` | [D-126](../../decisions/DECISIONS.md#d-126) | [`artifact-one-pager`](../analysis/concordance/artifacts.md#artifact-one-pager) | addy: `one-pager` · matt: `Brief` · rjm: — |
| `plan-template` | [D-136](../../decisions/DECISIONS.md#d-136) | [`artifact-plan-template`](../analysis/concordance/artifacts.md#artifact-plan-template) | addy: `Plan Document Template` · matt: `spec-template` · rjm: `Task List Template` |
| `plan-vs-reality-record` | [D-223](../../decisions/DECISIONS.md#d-223) | [`artifact-rjm-plan-vs-reality`](../analysis/concordance/artifacts.md#artifact-rjm-plan-vs-reality) | addy: — · matt: — · rjm: `PLAN vs REALITY` |
| `planguage-requirement-schema` | [D-200](../../decisions/DECISIONS.md#d-200) | [`artifact-rjm-planguage`](../analysis/concordance/artifacts.md#artifact-rjm-planguage) | addy: — · matt: — · rjm: `Planguage` |
| `plugin-manifest` | [D-146](../../decisions/DECISIONS.md#d-146) | [`artifact-claude-plugin-manifest`](../analysis/concordance/artifacts.md#artifact-claude-plugin-manifest) | addy: — · matt: `Claude Code plugin` · rjm: `marketplace plugin` |
| `post-implementation-verification-template` | [D-220](../../decisions/DECISIONS.md#d-220) | [`artifact-rjm-piv-report-template`](../analysis/concordance/artifacts.md#artifact-rjm-piv-report-template) | addy: — · matt: — · rjm: `PIV Report Template` |
| `project-rules` | [D-171](../../decisions/DECISIONS.md#d-171) | [`artifact-addy-project-rules`](../analysis/concordance/artifacts.md#artifact-addy-project-rules) | addy: `Project rules` · matt: — · rjm: — |
| `pull-request` | [D-142](../../decisions/DECISIONS.md#d-142) | [`artifact-pull-request`](../analysis/concordance/artifacts.md#artifact-pull-request) | addy: `pull request` · matt: `Pull requests` · rjm: `restoration PR` |
| `questionnaire-template` | [D-193](../../decisions/DECISIONS.md#d-193) | [`artifact-matt-questionnaire-template`](../analysis/concordance/artifacts.md#artifact-matt-questionnaire-template) | addy: — · matt: `questionnaire-template` · rjm: — |
| `readme-doc` | [D-159](../../decisions/DECISIONS.md#d-159) | [`artifact-readme-md-file`](../analysis/concordance/artifacts.md#artifact-readme-md-file) | addy: — · matt: `README.md` · rjm: `Infrastructure Documentation Format` |
| `reassessment-plan` | [D-195](../../decisions/DECISIONS.md#d-195) | [`artifact-rjm-reassessment-plan`](../analysis/concordance/artifacts.md#artifact-rjm-reassessment-plan) | addy: — · matt: — · rjm: `reassessment-plan` |
| `remediation-action-plan` | [D-228](../../decisions/DECISIONS.md#d-228) | [`artifact-rjm-action-plan`](../analysis/concordance/artifacts.md#artifact-rjm-action-plan) | addy: — · matt: — · rjm: `action plan` |
| `requirements-spec` | [D-128](../../decisions/DECISIONS.md#d-128) | [`artifact-requirements`](../analysis/concordance/artifacts.md#artifact-requirements) | addy: `requirements` · matt: `user stories` · rjm: `Requirement Schema` |
| `research-ticket` | [D-187](../../decisions/DECISIONS.md#d-187) | [`artifact-matt-research-tickets`](../analysis/concordance/artifacts.md#artifact-matt-research-tickets) | addy: — · matt: `Research tickets` · rjm: — |
| `resolution-summary-template` | [D-226](../../decisions/DECISIONS.md#d-226) | [`artifact-rjm-resolution-summary-template`](../analysis/concordance/artifacts.md#artifact-rjm-resolution-summary-template) | addy: — · matt: — · rjm: `Resolution Summary Template` |
| `resource-lease-schema` | [D-202](../../decisions/DECISIONS.md#d-202) | [`artifact-rjm-lease-schema`](../analysis/concordance/artifacts.md#artifact-rjm-lease-schema) | addy: — · matt: — · rjm: `Lease schema` |
| `review-report` | [D-151](../../decisions/DECISIONS.md#d-151) | [`artifact-review-report`](../analysis/concordance/artifacts.md#artifact-review-report) | addy: `Review Output Template` · matt: — · rjm: `retrospective_format` |
| `rollback-plan` | [D-155](../../decisions/DECISIONS.md#d-155) | [`artifact-rollback-steps`](../analysis/concordance/artifacts.md#artifact-rollback-steps) | addy: `rollback steps` · matt: — · rjm: `Resolution Path` |
| `root-cause-pattern-template` | [D-221](../../decisions/DECISIONS.md#d-221) | [`artifact-rjm-root-cause-pattern-template`](../analysis/concordance/artifacts.md#artifact-rjm-root-cause-pattern-template) | addy: — · matt: — · rjm: `Root Cause Pattern Template` |
| `round-template` | [D-181](../../decisions/DECISIONS.md#d-181) | [`artifact-matt-round-template`](../analysis/concordance/artifacts.md#artifact-matt-round-template) | addy: — · matt: `round template` · rjm: — |
| `rule-file-set` | [D-170](../../decisions/DECISIONS.md#d-170) | [`artifact-addy-rules-files`](../analysis/concordance/artifacts.md#artifact-addy-rules-files) | addy: `rules files` · matt: — · rjm: — |
| `runbook` | [D-156](../../decisions/DECISIONS.md#d-156) | [`artifact-runbook`](../analysis/concordance/artifacts.md#artifact-runbook) | addy: `runbook` · matt: — · rjm: `Infrastructure Handoff` |
| `scope-constraints` | [D-131](../../decisions/DECISIONS.md#d-131) | [`artifact-scope-constraints`](../analysis/concordance/artifacts.md#artifact-scope-constraints) | addy: `Not Doing list` · matt: `Constraints` · rjm: `Breaking Change Assessment` |
| `script-template` | [D-197](../../decisions/DECISIONS.md#d-197) | [`artifact-rjm-script-template`](../analysis/concordance/artifacts.md#artifact-rjm-script-template) | addy: — · matt: — · rjm: `Script Template` |
| `security-assessment` | [D-152](../../decisions/DECISIONS.md#d-152) | [`artifact-security-assessment`](../analysis/concordance/artifacts.md#artifact-security-assessment) | addy: `Security Audit Report` · matt: — · rjm: `Attack Vectors` |
| `security-audit-template` | [D-219](../../decisions/DECISIONS.md#d-219) | [`artifact-rjm-architecture-security-audit-template`](../analysis/concordance/artifacts.md#artifact-rjm-architecture-security-audit-template) | addy: — · matt: — · rjm: `Architecture Security Audit Template` |
| `seed-template-collection` | [D-188](../../decisions/DECISIONS.md#d-188) | [`artifact-matt-seed-templates`](../analysis/concordance/artifacts.md#artifact-matt-seed-templates) | addy: — · matt: `seed templates` · rjm: — |
| `seed-template-schema` | [D-174](../../decisions/DECISIONS.md#d-174) | [`artifact-matt-seed-template-schema`](../analysis/concordance/artifacts.md#artifact-matt-seed-template-schema) | addy: — · matt: `seed-template schema` · rjm: — |
| `service-dashboard-spec` | [D-158](../../decisions/DECISIONS.md#d-158) | [`artifact-monitoring-dashboards`](../analysis/concordance/artifacts.md#artifact-monitoring-dashboards) | addy: `Dashboards` · matt: — · rjm: `SLI (Service Level Indicator)` |
| `session-protocol-template` | [D-212](../../decisions/DECISIONS.md#d-212) | [`artifact-rjm-session-protocol-template`](../analysis/concordance/artifacts.md#artifact-rjm-session-protocol-template) | addy: — · matt: — · rjm: `SESSION-PROTOCOL template` |
| `shared-exploration-map` | [D-179](../../decisions/DECISIONS.md#d-179) | [`artifact-matt-shared-map`](../analysis/concordance/artifacts.md#artifact-matt-shared-map) | addy: — · matt: `shared map` · rjm: — |
| `shared-template-library` | [D-204](../../decisions/DECISIONS.md#d-204) | [`artifact-rjm-shared-templates`](../analysis/concordance/artifacts.md#artifact-rjm-shared-templates) | addy: — · matt: — · rjm: `Shared Templates` |
| `shared-vocabulary` | [D-162](../../decisions/DECISIONS.md#d-162) | [`artifact-shared-language`](../analysis/concordance/artifacts.md#artifact-shared-language) | addy: — · matt: `shared language` · rjm: `User docs` |
| `shell-template-scaffold` | [D-192](../../decisions/DECISIONS.md#d-192) | [`artifact-matt-template-sh`](../analysis/concordance/artifacts.md#artifact-matt-template-sh) | addy: — · matt: `template.sh` · rjm: — |
| `skill-specification-template` | [D-196](../../decisions/DECISIONS.md#d-196) | [`artifact-rjm-skill-specification-template`](../analysis/concordance/artifacts.md#artifact-rjm-skill-specification-template) | addy: — · matt: — · rjm: `Skill Specification Template` |
| `slo-configuration-template` | [D-227](../../decisions/DECISIONS.md#d-227) | [`artifact-rjm-slo-configuration-template`](../analysis/concordance/artifacts.md#artifact-rjm-slo-configuration-template) | addy: — · matt: — · rjm: `SLO Configuration Template` |
| `state-management-script-template` | [D-209](../../decisions/DECISIONS.md#d-209) | [`artifact-rjm-state-management-script-template`](../analysis/concordance/artifacts.md#artifact-rjm-state-management-script-template) | addy: — · matt: — · rjm: `State Management Script Template` |
| `structured-requirements` | [D-129](../../decisions/DECISIONS.md#d-129) | [`artifact-structured-requirements`](../analysis/concordance/artifacts.md#artifact-structured-requirements) | addy: `Spec files` · matt: — · rjm: `Structured requirements` |
| `subtask-card` | [D-137](../../decisions/DECISIONS.md#d-137) | [`artifact-child-ticket`](../analysis/concordance/artifacts.md#artifact-child-ticket) | addy: — · matt: `Child ticket` · rjm: `Task Schema` |
| `task-backlog` | [D-138](../../decisions/DECISIONS.md#d-138) | [`artifact-backlog`](../analysis/concordance/artifacts.md#artifact-backlog) | addy: — · matt: `backlog` · rjm: `selection group` |
| `task-card` | [D-135](../../decisions/DECISIONS.md#d-135) | [`artifact-task-unit`](../analysis/concordance/artifacts.md#artifact-task-unit) | addy: `Task List Target` · matt: `ticket` · rjm: `Task Definition Format` |
| `task-list` | [D-134](../../decisions/DECISIONS.md#d-134) | [`artifact-tasks-todo-list`](../analysis/concordance/artifacts.md#artifact-tasks-todo-list) | addy: `tasks/todo.md` · matt: `tickets` · rjm: `TASK-*` |
| `template-assessment` | [D-203](../../decisions/DECISIONS.md#d-203) | [`artifact-rjm-template-assessment`](../analysis/concordance/artifacts.md#artifact-rjm-template-assessment) | addy: — · matt: — · rjm: `Template Assessment` |
| `test-coverage-report` | [D-148](../../decisions/DECISIONS.md#d-148) | [`artifact-test-coverage`](../analysis/concordance/artifacts.md#artifact-test-coverage) | addy: `Test Coverage Analysis` · matt: `test files` · rjm: `corpus_verified` |
| `test-results` | [D-147](../../decisions/DECISIONS.md#d-147) | [`artifact-test-execution-results`](../analysis/concordance/artifacts.md#artifact-test-execution-results) | addy: `Error Output / Test Results` · matt: `failing test` · rjm: `test group` |
| `test-strategy` | [D-149](../../decisions/DECISIONS.md#d-149) | [`artifact-testing-strategy`](../analysis/concordance/artifacts.md#artifact-testing-strategy) | addy: `Testing Strategy` · matt: `Testing Decisions` · rjm: `AssertionSpec` |
| `tracer-bullet-ticket` | [D-185](../../decisions/DECISIONS.md#d-185) | [`artifact-matt-tracer-bullet-tickets`](../analysis/concordance/artifacts.md#artifact-matt-tracer-bullet-tickets) | addy: — · matt: `tracer-bullet tickets` · rjm: — |
| `user-rules` | [D-172](../../decisions/DECISIONS.md#d-172) | [`artifact-addy-user-rules`](../analysis/concordance/artifacts.md#artifact-addy-user-rules) | addy: `User rules` · matt: — · rjm: — |
| `validation-script-template` | [D-222](../../decisions/DECISIONS.md#d-222) | [`artifact-rjm-validation-script-template`](../analysis/concordance/artifacts.md#artifact-rjm-validation-script-template) | addy: — · matt: — · rjm: `Validation Script Template` |
| `visual-card-template` | [D-211](../../decisions/DECISIONS.md#d-211) | [`artifact-rjm-visual-card-template`](../analysis/concordance/artifacts.md#artifact-rjm-visual-card-template) | addy: — · matt: — · rjm: `visual card template` |
| `wayfinder-map` | [D-190](../../decisions/DECISIONS.md#d-190) | [`artifact-matt-wayfinder-map`](../analysis/concordance/artifacts.md#artifact-matt-wayfinder-map) | addy: — · matt: `wayfinder:map` · rjm: — |
| `windsurf-rules` | [D-168](../../decisions/DECISIONS.md#d-168) | [`artifact-addy-windsurfrules`](../analysis/concordance/artifacts.md#artifact-addy-windsurfrules) | addy: `.windsurfrules` · matt: — · rjm: — |
| `working-increment` | [D-144](../../decisions/DECISIONS.md#d-144) | [`artifact-working-code`](../analysis/concordance/artifacts.md#artifact-working-code) | addy: `working increment` · matt: `production code` · rjm: — |
| `working-title` | [D-145](../../decisions/DECISIONS.md#d-145) | [`artifact-working-tree`](../analysis/concordance/artifacts.md#artifact-working-tree) | addy: — · matt: `Working title` · rjm: — |
| `working-tree` | [D-145](../../decisions/DECISIONS.md#d-145) | [`artifact-working-tree`](../analysis/concordance/artifacts.md#artifact-working-tree) | addy: `working tree` · matt: — · rjm: — |
| `yaml-frontmatter-schema` | [D-207](../../decisions/DECISIONS.md#d-207) | [`artifact-rjm-yaml-front-matter-schema`](../analysis/concordance/artifacts.md#artifact-rjm-yaml-front-matter-schema) | addy: — · matt: — · rjm: `YAML Front Matter Schema` |

---

## 3. Roles Traceability (68 Roles)

| Canonical Role | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `adversarial-reviewer` | [D-554](../../decisions/DECISIONS.md#d-554) | [`adversarial-reviewer`](../analysis/concordance/roles.md#adversarial-reviewer) | addy: — · matt: — · rjm: `adversarial reviewer` |
| `afk-agent` | [D-577](../../decisions/DECISIONS.md#d-577) | [`afk-agent`](../analysis/concordance/roles.md#afk-agent) | addy: — · matt: `AFK agent` · rjm: — |
| `afk-runner` | [D-578](../../decisions/DECISIONS.md#d-578) | [`afk-runner`](../analysis/concordance/roles.md#afk-runner) | addy: — · matt: `AFK runner` · rjm: — |
| `agent` | [D-570](../../decisions/DECISIONS.md#d-570) | [`agent`](../analysis/concordance/roles.md#agent) | addy: `AI coding agents` · matt: `agent` · rjm: `agent` |
| `agent-persona` | [D-582](../../decisions/DECISIONS.md#d-582) | [`agent-personas`](../analysis/concordance/roles.md#agent-personas) | addy: `Agent Personas` · matt: — · rjm: — |
| `agent-safety-auditor` | [D-543](../../decisions/DECISIONS.md#d-543) | [`agent-safety`](../analysis/concordance/roles.md#agent-safety) | addy: — · matt: — · rjm: `agent-safety` |
| `architect` | [D-530](../../decisions/DECISIONS.md#d-530) | [`architect`](../analysis/concordance/roles.md#architect) | addy: — · matt: — · rjm: `architect` |
| `ask-matt-router` | [D-524](../../decisions/DECISIONS.md#d-524) | [`ask-matt`](../analysis/concordance/roles.md#ask-matt) | addy: — · matt: `ask-matt` · rjm: — |
| `assignee-role` | [D-523](../../decisions/DECISIONS.md#d-523) | [`assignee`](../analysis/concordance/roles.md#assignee) | addy: — · matt: `assignee` · rjm: — |
| `audience-agent` | [D-585](../../decisions/DECISIONS.md#d-585) | [`audience-agent`](../analysis/concordance/roles.md#audience-agent) | addy: — · matt: — · rjm: `AUDIENCE AGENT` |
| `autonomous-development-agent` | [D-571](../../decisions/DECISIONS.md#d-571) | [`autonomous-development-agent`](../analysis/concordance/roles.md#autonomous-development-agent) | addy: — · matt: — · rjm: `autonomous development agent` |
| `background-agent` | [D-576](../../decisions/DECISIONS.md#d-576) | [`background-agent`](../analysis/concordance/roles.md#background-agent) | addy: — · matt: `background agent` · rjm: — |
| `brutally-honest-strategic-advisor` | [D-520](../../decisions/DECISIONS.md#d-520) | [`brutally-honest-strategic-advisor`](../analysis/concordance/roles.md#brutally-honest-strategic-advisor) | addy: — · matt: — · rjm: `Brutally Honest Strategic Advisor` |
| `build-cop` | [D-558](../../decisions/DECISIONS.md#d-558) | [`build-cop`](../analysis/concordance/roles.md#build-cop) | addy: `Build Cop` · matt: — · rjm: — |
| `claude-code-agent` | [D-572](../../decisions/DECISIONS.md#d-572) | [`coding-agents`](../analysis/concordance/roles.md#coding-agents) | addy: `coding agents` · matt: — · rjm: `Claude Code Agents` |
| `code-reviewer` | [D-545](../../decisions/DECISIONS.md#d-545) | [`code-reviewer`](../analysis/concordance/roles.md#code-reviewer) | addy: `code-reviewer` · matt: `reviewer agent` · rjm: `code-reviewer` |
| `code-simplifier` | [D-536](../../decisions/DECISIONS.md#d-536) | [`code-simplifier`](../analysis/concordance/roles.md#code-simplifier) | addy: — · matt: — · rjm: `code-simplifier` |
| `comment-analyzer` | [D-565](../../decisions/DECISIONS.md#d-565) | [`comment-analyzer`](../analysis/concordance/roles.md#comment-analyzer) | addy: — · matt: — · rjm: `comment-analyzer` |
| `contrarian-analyst` | [D-551](../../decisions/DECISIONS.md#d-551) | [`contrarian-analyst`](../analysis/concordance/roles.md#contrarian-analyst) | addy: — · matt: — · rjm: `Contrarian Analyst` |
| `coordinator` | [D-579](../../decisions/DECISIONS.md#d-579) | [`coordinator`](../analysis/concordance/roles.md#coordinator) | addy: — · matt: — · rjm: `coordinator` |
| `critic` | [D-552](../../decisions/DECISIONS.md#d-552) | [`critic`](../analysis/concordance/roles.md#critic) | addy: — · matt: — · rjm: `critic` |
| `cynic` | [D-549](../../decisions/DECISIONS.md#d-549) | [`cynic`](../analysis/concordance/roles.md#cynic) | addy: — · matt: — · rjm: `Cynic` |
| `dependency-auditor` | [D-557](../../decisions/DECISIONS.md#d-557) | [`dependency-auditor`](../analysis/concordance/roles.md#dependency-auditor) | addy: — · matt: — · rjm: `dependency-auditor` |
| `design-authority` | [D-531](../../decisions/DECISIONS.md#d-531) | [`design-authority`](../analysis/concordance/roles.md#design-authority) | addy: — · matt: — · rjm: `Design Authority` |
| `devops-specialist` | [D-555](../../decisions/DECISIONS.md#d-555) | [`devops`](../analysis/concordance/roles.md#devops) | addy: — · matt: — · rjm: `devops` |
| `driver` | [D-534](../../decisions/DECISIONS.md#d-534) | [`driver`](../analysis/concordance/roles.md#driver) | addy: — · matt: `driver` · rjm: `Developer` |
| `explorer` | [D-569](../../decisions/DECISIONS.md#d-569) | [`explore`](../analysis/concordance/roles.md#explore) | addy: `Explore` · matt: `exploration subagent` · rjm: `Explore` |
| `external-swe-agent` | [D-575](../../decisions/DECISIONS.md#d-575) | [`sub-agent`](../analysis/concordance/roles.md#sub-agent) | addy: — · matt: `sub-agent` · rjm: `copilot-swe-agent` |
| `fresh-context-reviewer` | [D-547](../../decisions/DECISIONS.md#d-547) | [`fresh-context-reviewer`](../analysis/concordance/roles.md#fresh-context-reviewer) | addy: `fresh-context reviewer` · matt: `fresh agent` · rjm: `Naive Reader` |
| `general-purpose-agent` | [D-573](../../decisions/DECISIONS.md#d-573) | [`general-purpose`](../analysis/concordance/roles.md#general-purpose) | addy: `general-purpose` · matt: — · rjm: `executor` |
| `hostile-expert` | [D-550](../../decisions/DECISIONS.md#d-550) | [`hostile-expert`](../analysis/concordance/roles.md#hostile-expert) | addy: — · matt: — · rjm: `Hostile Expert` |
| `implementation-agent` | [D-532](../../decisions/DECISIONS.md#d-532) | [`implementation-agent`](../analysis/concordance/roles.md#implementation-agent) | addy: — · matt: `implementation agent` · rjm: `implementer` |
| `implementer-subagent` | [D-533](../../decisions/DECISIONS.md#d-533) | [`implementer-subagents`](../analysis/concordance/roles.md#implementer-subagents) | addy: — · matt: `implementer subagents` · rjm: `implementer agent` |
| `janitor` | [D-563](../../decisions/DECISIONS.md#d-563) | [`janitor`](../analysis/concordance/roles.md#janitor) | addy: — · matt: — · rjm: `janitor` |
| `launch-sponsor` | [D-560](../../decisions/DECISIONS.md#d-560) | [`launch-sponsor`](../analysis/concordance/roles.md#launch-sponsor) | addy: `launch sponsor` · matt: — · rjm: — |
| `merge-resolver` | [D-562](../../decisions/DECISIONS.md#d-562) | [`merger-subagent`](../analysis/concordance/roles.md#merger-subagent) | addy: — · matt: `merger subagent` · rjm: `merge-resolver` |
| `needs-slicing-role` | [D-528](../../decisions/DECISIONS.md#d-528) | [`needs-slicing`](../analysis/concordance/roles.md#needs-slicing) | addy: — · matt: `needs-slicing` · rjm: — |
| `peer-coach` | [D-548](../../decisions/DECISIONS.md#d-548) | [`peer-coach`](../analysis/concordance/roles.md#peer-coach) | addy: — · matt: — · rjm: `Peer/Coach` |
| `planner` | [D-521](../../decisions/DECISIONS.md#d-521) | [`planner`](../analysis/concordance/roles.md#planner) | addy: — · matt: — · rjm: `planner` |
| `principal-engineer-advisor` | [D-529](../../decisions/DECISIONS.md#d-529) | [`senior-engineer`](../analysis/concordance/roles.md#senior-engineer) | addy: `senior-engineer` · matt: — · rjm: `Principal+` |
| `project-shipper` | [D-556](../../decisions/DECISIONS.md#d-556) | [`project-shipper`](../analysis/concordance/roles.md#project-shipper) | addy: — · matt: — · rjm: `project-shipper` |
| `prompt-engineer-specialist` | [D-586](../../decisions/DECISIONS.md#d-586) | [`prompt-engineer`](../analysis/concordance/roles.md#prompt-engineer) | addy: — · matt: — · rjm: `prompt-engineer` |
| `ready-for-afk-role` | [D-527](../../decisions/DECISIONS.md#d-527) | [`ready-for-afk`](../analysis/concordance/roles.md#ready-for-afk) | addy: — · matt: `ready-for-afk` · rjm: — |
| `ready-for-agent-role` | [D-525](../../decisions/DECISIONS.md#d-525) | [`ready-for-agent`](../analysis/concordance/roles.md#ready-for-agent) | addy: — · matt: `ready-for-agent` · rjm: — |
| `ready-for-human-role` | [D-526](../../decisions/DECISIONS.md#d-526) | [`ready-for-human`](../analysis/concordance/roles.md#ready-for-human) | addy: — · matt: `ready-for-human` · rjm: — |
| `retrospective-agent` | [D-567](../../decisions/DECISIONS.md#d-567) | [`retrospective-agent`](../analysis/concordance/roles.md#retrospective-agent) | addy: — · matt: — · rjm: `retrospective agent` |
| `rollback-owner` | [D-559](../../decisions/DECISIONS.md#d-559) | [`rollback-owner`](../analysis/concordance/roles.md#rollback-owner) | addy: `Rollback owner` · matt: — · rjm: — |
| `router` | [D-580](../../decisions/DECISIONS.md#d-580) | [`router`](../analysis/concordance/roles.md#router) | addy: — · matt: — · rjm: `router` |
| `screen-reader-auditor` | [D-540](../../decisions/DECISIONS.md#d-540) | [`screen-reader`](../analysis/concordance/roles.md#screen-reader) | addy: `screen-reader` · matt: — · rjm: — |
| `security-auditor` | [D-541](../../decisions/DECISIONS.md#d-541) | [`security-auditor`](../analysis/concordance/roles.md#security-auditor) | addy: `security-auditor` · matt: — · rjm: `Security Specialist` |
| `senior-code-reviewer` | [D-546](../../decisions/DECISIONS.md#d-546) | [`senior-code-reviewer`](../analysis/concordance/roles.md#senior-code-reviewer) | addy: `Senior Code Reviewer` · matt: `review agent` · rjm: `Senior Analytical Reviewer` |
| `silent-failure-hunter` | [D-539](../../decisions/DECISIONS.md#d-539) | [`silent-failure-hunter`](../analysis/concordance/roles.md#silent-failure-hunter) | addy: — · matt: — · rjm: `silent-failure-hunter` |
| `six-role-panel` | [D-553](../../decisions/DECISIONS.md#d-553) | [`six-role-panel`](../analysis/concordance/roles.md#six-role-panel) | addy: `role-based reviewers` · matt: — · rjm: `six-role panel` |
| `skillbook-curator` | [D-587](../../decisions/DECISIONS.md#d-587) | [`skillbook-agent`](../analysis/concordance/roles.md#skillbook-agent) | addy: — · matt: — · rjm: `Skillbook Agent` |
| `spec-subagent` | [D-519](../../decisions/DECISIONS.md#d-519) | [`spec-sub-agent`](../analysis/concordance/roles.md#spec-sub-agent) | addy: — · matt: `Spec sub-agent` · rjm: `Analyst Agent` |
| `specialized-agent-persona` | [D-583](../../decisions/DECISIONS.md#d-583) | [`specialized-agent-personas`](../analysis/concordance/roles.md#specialized-agent-personas) | addy: `Specialized Agent Personas` · matt: — · rjm: — |
| `standards-subagent` | [D-535](../../decisions/DECISIONS.md#d-535) | [`standards-sub-agent`](../analysis/concordance/roles.md#standards-sub-agent) | addy: — · matt: `Standards sub-agent` · rjm: `type-design-analyzer` |
| `steering-committee` | [D-544](../../decisions/DECISIONS.md#d-544) | [`steering-committee`](../analysis/concordance/roles.md#steering-committee) | addy: — · matt: — · rjm: `Steering Committee` |
| `subagent` | [D-574](../../decisions/DECISIONS.md#d-574) | [`subagent`](../analysis/concordance/roles.md#subagent) | addy: — · matt: `subagent` · rjm: — |
| `supply-chain-risk-scanner` | [D-542](../../decisions/DECISIONS.md#d-542) | [`supply-chain-risk-scanner`](../analysis/concordance/roles.md#supply-chain-risk-scanner) | addy: — · matt: — · rjm: `Supply-chain risk scanner` |
| `systematic-bug-hunter` | [D-538](../../decisions/DECISIONS.md#d-538) | [`systematic-bug-hunter`](../analysis/concordance/roles.md#systematic-bug-hunter) | addy: — · matt: — · rjm: `Systematic Bug Hunter` |
| `task-decomposer` | [D-522](../../decisions/DECISIONS.md#d-522) | [`task-decomposer`](../analysis/concordance/roles.md#task-decomposer) | addy: — · matt: — · rjm: `task-decomposer` |
| `tech-debt-remediation-specialist` | [D-564](../../decisions/DECISIONS.md#d-564) | [`tech-debt-remediation-specialist`](../analysis/concordance/roles.md#tech-debt-remediation-specialist) | addy: — · matt: — · rjm: `Tech Debt Remediation Specialist` |
| `technical-writer` | [D-568](../../decisions/DECISIONS.md#d-568) | [`technical-writer`](../analysis/concordance/roles.md#technical-writer) | addy: — · matt: — · rjm: `Technical Writer` |
| `test-engineer` | [D-537](../../decisions/DECISIONS.md#d-537) | [`test-engineer`](../analysis/concordance/roles.md#test-engineer) | addy: `test-engineer` · matt: — · rjm: `Quality Assurance Specialist` |
| `trusted-controller` | [D-581](../../decisions/DECISIONS.md#d-581) | [`trusted-controller`](../analysis/concordance/roles.md#trusted-controller) | addy: — · matt: — · rjm: `trusted controller` |
| `user-representative` | [D-584](../../decisions/DECISIONS.md#d-584) | [`user-representative`](../analysis/concordance/roles.md#user-representative) | addy: — · matt: — · rjm: `User Representative` |
| `web-performance-auditor` | [D-561](../../decisions/DECISIONS.md#d-561) | [`web-performance-auditor`](../analysis/concordance/roles.md#web-performance-auditor) | addy: `web-performance-auditor` · matt: — · rjm: — |

---

## 4. References Traceability (21 References)

| Canonical Reference | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `api-interface-standards-reference` | [D-603](../../decisions/DECISIONS.md#d-603) | [`api-interface-standards`](../analysis/concordance/references.md#api-interface-standards) | addy: `OpenAPI / Swagger` · matt: `first-party APIs` · rjm: — |
| `architectural-anti-patterns-reference` | [D-592](../../decisions/DECISIONS.md#d-592) | [`code-smell-baseline`](../analysis/concordance/references.md#code-smell-baseline) | addy: — · matt: `Fowler code smells` · rjm: `Anti-Patterns to Avoid` |
| `architectural-decision-records-reference` | [D-589](../../decisions/DECISIONS.md#d-589) | [`architectural-decision-records`](../analysis/concordance/references.md#architectural-decision-records) | addy: — · matt: `architectural decision records` · rjm: `ADR-002` |
| `code-review-checklist-reference` | [D-599](../../decisions/DECISIONS.md#d-599) | [`code-review-standards`](../analysis/concordance/references.md#code-review-standards) | addy: `Review Checklist` · matt: — · rjm: `Quick Self-Review` |
| `code-smell-baseline` | [D-593](../../decisions/DECISIONS.md#d-593) | [`fowler-smell-guidelines`](../analysis/concordance/references.md#fowler-smell-guidelines) | addy: — · matt: `smell baseline` · rjm: — |
| `context-window-management-reference` | [D-602](../../decisions/DECISIONS.md#d-602) | [`context-window-management`](../analysis/concordance/references.md#context-window-management) | addy: — · matt: `context window` · rjm: `spawn tax` |
| `definition-of-done` | [D-590](../../decisions/DECISIONS.md#d-590) | [`complete-acceptance-criteria`](../analysis/concordance/references.md#complete-acceptance-criteria) | addy: `Definition of Done` · matt: `Complete acceptance criteria` · rjm: — |
| `design-system-standards` | [D-598](../../decisions/DECISIONS.md#d-598) | [`design-system-specifications`](../analysis/concordance/references.md#design-system-specifications) | addy: `design systems` · matt: `Tailwind` · rjm: — |
| `domain-driven-design` | [D-588](../../decisions/DECISIONS.md#d-588) | [`domain-driven-design`](../analysis/concordance/references.md#domain-driven-design) | addy: — · matt: `DDD` · rjm: `Domain-Driven Design` |
| `harness-engineering-reference` | [D-601](../../decisions/DECISIONS.md#d-601) | [`harness-engineering`](../analysis/concordance/references.md#harness-engineering) | addy: `Claude Code interop` · matt: `harnesses` · rjm: `Harness Engineering` |
| `issue-tracker-governance-reference` | [D-604](../../decisions/DECISIONS.md#d-604) | [`issue-tracker-references`](../analysis/concordance/references.md#issue-tracker-references) | addy: — · matt: `issue trackers` · rjm: `Generic field governance` |
| `lifecycle-anti-recommendations` | [D-249](../../decisions/DECISIONS.md#d-249) | [`sequencing-overkill-anti-recommendations`](../analysis/concordance/sequencing.md#sequencing-overkill-anti-recommendations) | addy: — · matt: — · rjm: `idea lifecycle` |
| `orchestration-antipatterns-reference` | [D-260](../../decisions/DECISIONS.md#d-260) | [`sequencing-antipattern-catalog`](../analysis/concordance/sequencing.md#sequencing-antipattern-catalog) | addy: `orchestration anti-pattern` · matt: — · rjm: — |
| `orchestration-patterns-reference` | [D-257](../../decisions/DECISIONS.md#d-257) | [`sequencing-orchestration-patterns-catalog`](../analysis/concordance/sequencing.md#sequencing-orchestration-patterns-catalog) | addy: `orchestration-patterns` · matt: — · rjm: — |
| `performance-checklist-reference` | [D-597](../../decisions/DECISIONS.md#d-597) | [`performance-checklists-and-instruments`](../analysis/concordance/references.md#performance-checklists-and-instruments) | addy: `Performance Checklist` · matt: — · rjm: `Instrument Index` |
| `primary-source-reference` | [D-600](../../decisions/DECISIONS.md#d-600) | [`primary-sources-documentation`](../analysis/concordance/references.md#primary-sources-documentation) | addy: `Official documentation` · matt: `primary source` · rjm: `Primary source` |
| `secrets-handling-reference` | [D-596](../../decisions/DECISIONS.md#d-596) | [`secret-and-credential-handling`](../analysis/concordance/references.md#secret-and-credential-handling) | addy: — · matt: `secrets.*` · rjm: `Secret Detection` |
| `static-analysis-standards` | [D-594](../../decisions/DECISIONS.md#d-594) | [`static-analysis-standards`](../analysis/concordance/references.md#static-analysis-standards) | addy: `inline standards` · matt: — · rjm: `Static Analysis Checklist` |
| `task-fitness-guide` | [D-241](../../decisions/DECISIONS.md#d-241) | [`sequencing-fitness-when-to-use-guide`](../analysis/concordance/sequencing.md#sequencing-fitness-when-to-use-guide) | addy: `When to use` · matt: `Explicit scope boundaries` · rjm: `When to Use` |
| `task-sizing-guidelines` | [D-591](../../decisions/DECISIONS.md#d-591) | [`task-sizing-and-effort`](../analysis/concordance/references.md#task-sizing-and-effort) | addy: `Task Sizing Guidelines` · matt: `effort` · rjm: — |
| `testing-patterns-reference` | [D-595](../../decisions/DECISIONS.md#d-595) | [`testing-patterns-and-verification`](../analysis/concordance/references.md#testing-patterns-and-verification) | addy: `Testing Patterns Reference (JavaScript/TypeScript)` · matt: — · rjm: `verification steps` |

---

## 5. Quality Gates Traceability (11 Gates)

| Canonical Gate | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `ask-first-confirmation-gate` | [D-512](../../decisions/DECISIONS.md#d-512) | [`ask-first-confirmation-gate`](../analysis/concordance/gates.md#ask-first-confirmation-gate) | addy: `Ask First` · matt: `confirmation gate` · rjm: `Ask First` |
| `completion-criteria-quality-gate` | [D-513](../../decisions/DECISIONS.md#d-513) | [`completion-criteria-quality-gate`](../analysis/concordance/gates.md#completion-criteria-quality-gate) | addy: — · matt: `Completion criteria` · rjm: `Quality Gate` |
| `front-gate-prerequisite` | [D-237](../../decisions/DECISIONS.md#d-237) | [`sequencing-precedence-front-gate-prerequisite`](../analysis/concordance/sequencing.md#sequencing-precedence-front-gate-prerequisite) | addy: `The Gated Workflow` · matt: `Prerequisite` · rjm: `front-gate-before-pipeline` |
| `phase-boundary-transition` | [D-252](../../decisions/DECISIONS.md#d-252) | [`sequencing-boundary-phase-boundary-gate`](../analysis/concordance/sequencing.md#sequencing-boundary-phase-boundary-gate) | addy: `boundaries` · matt: `phase boundary` · rjm: `Boundary translation` |
| `pre-commit-validation-checks` | [D-518](../../decisions/DECISIONS.md#d-518) | [`pre-commit-validation-checks`](../analysis/concordance/gates.md#pre-commit-validation-checks) | addy: `Pre-Commit Checks` · matt: — · rjm: `pre-push hook` |
| `pretooluse-hook` | [D-517](../../decisions/DECISIONS.md#d-517) | [`pretooluse-hook`](../analysis/concordance/gates.md#pretooluse-hook) | addy: `PreToolUse` · matt: `PreToolUse hook` · rjm: — |
| `quality-gate-pipeline` | [D-239](../../decisions/DECISIONS.md#d-239) | [`sequencing-precedence-quality-gate-pipeline`](../analysis/concordance/sequencing.md#sequencing-precedence-quality-gate-pipeline) | addy: `quality-gate pipelines` · matt: — · rjm: — |
| `self-audit-round-cap` | [D-264](../../decisions/DECISIONS.md#d-264) | [`sequencing-caps-self-audit-round-cap`](../analysis/concordance/sequencing.md#sequencing-caps-self-audit-round-cap) | addy: `Loop engineering` · matt: `hitl-loop.template.sh` · rjm: `Self-audit round cap` |
| `smoke-testing` | [D-515](../../decisions/DECISIONS.md#d-515) | [`smoke-testing`](../analysis/concordance/gates.md#smoke-testing) | addy: `Staging smoke test` · matt: `smoke test` · rjm: — |
| `stop-the-line-andon-cord` | [D-514](../../decisions/DECISIONS.md#d-514) | [`stop-the-line-andon-cord`](../analysis/concordance/gates.md#stop-the-line-andon-cord) | addy: `Stop-the-line rule` · matt: — · rjm: `andon-cord` |
| `unit-testing-suite` | [D-516](../../decisions/DECISIONS.md#d-516) | [`unit-testing-suite`](../analysis/concordance/gates.md#unit-testing-suite) | addy: `Unit tests` · matt: `test suite` · rjm: — |

---

## 6. Sequencing & Architecture Patterns Traceability

| Canonical Pattern | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `adapter-pattern` | [D-611](../../decisions/DECISIONS.md#d-611) | [`adapter-pattern`](../analysis/concordance/invocation-patterns.md#adapter-pattern) | addy: `Adapter Pattern` · matt: `Adapter` · rjm: `Adapter` |
| `adr-state-lifecycle` | [D-271](../../decisions/DECISIONS.md#d-271) | [`sequencing-dag-adr-lifecycle`](../analysis/concordance/sequencing.md#sequencing-dag-adr-lifecycle) | addy: `ADR Lifecycle` · matt: — · rjm: — |
| `agent-driven-workflow` | [D-236](../../decisions/DECISIONS.md#d-236) | [`sequencing-pipeline-agent-driven-workflow`](../analysis/concordance/sequencing.md#sequencing-pipeline-agent-driven-workflow) | addy: `Agent-driven workflow` · matt: — · rjm: — |
| `command-driven-workflow` | [D-235](../../decisions/DECISIONS.md#d-235) | [`sequencing-pipeline-command-vs-agent-driven`](../analysis/concordance/sequencing.md#sequencing-pipeline-command-vs-agent-driven) | addy: `Command-driven workflow` · matt: — · rjm: — |
| `direct-invocation-pattern` | [D-255](../../decisions/DECISIONS.md#d-255) | [`sequencing-orchestration-direct-invocation`](../analysis/concordance/sequencing.md#sequencing-orchestration-direct-invocation) | addy: `Direct invocation` · matt: — · rjm: — |
| `error-handling-pattern` | [D-613](../../decisions/DECISIONS.md#d-613) | [`error-handling-architecture`](../analysis/concordance/invocation-patterns.md#error-handling-architecture) | addy: `Error Handling` · matt: — · rjm: `Error Handling Pattern` |
| `expand-contract-pattern` | [D-615](../../decisions/DECISIONS.md#d-615) | [`expand-contract`](../analysis/concordance/invocation-patterns.md#expand-contract) | addy: `Expand/Contract` · matt: `expand–contract` · rjm: `expand-contract` |
| `feature-flag-lifecycle` | [D-270](../../decisions/DECISIONS.md#d-270) | [`sequencing-dag-feature-flag-lifecycle`](../analysis/concordance/sequencing.md#sequencing-dag-feature-flag-lifecycle) | addy: `feature-flag lifecycle` · matt: — · rjm: — |
| `gate-skip-policy` | [D-248](../../decisions/DECISIONS.md#d-248) | [`sequencing-fitness-skipping-rules-policy`](../analysis/concordance/sequencing.md#sequencing-fitness-skipping-rules-policy) | addy: `SKIPS` · matt: — · rjm: `_DEFAULT_SKIP_POLICY` |
| `greenfield-lifecycle-path` | [D-250](../../decisions/DECISIONS.md#d-250) | [`sequencing-adoption-greenfield-path`](../analysis/concordance/sequencing.md#sequencing-adoption-greenfield-path) | addy: `Greenfield` · matt: `greenfield build` · rjm: `BOOTSTRAP_ITERATIONS` |
| `human-in-the-loop-checkpoint` | [D-265](../../decisions/DECISIONS.md#d-265) | [`sequencing-caps-human-in-the-loop`](../analysis/concordance/sequencing.md#sequencing-caps-human-in-the-loop) | addy: — · matt: `human-in-the-loop` · rjm: — |
| `idempotency-pattern` | [D-614](../../decisions/DECISIONS.md#d-614) | [`idempotency-control`](../analysis/concordance/invocation-patterns.md#idempotency-control) | addy: `Honouring an Idempotency Key` · matt: `idempotent` · rjm: `Idempotency` |
| `implicit-command-mapping` | [D-234](../../decisions/DECISIONS.md#d-234) | [`sequencing-pipeline-lifecycle-mapping-implicit`](../analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping-implicit) | addy: `Lifecycle Mapping (Implicit Commands)` · matt: — · rjm: — |
| `lifecycle-mapping` | [D-233](../../decisions/DECISIONS.md#d-233) | [`sequencing-pipeline-lifecycle-mapping`](../analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-mapping) | addy: `Lifecycle Mapping` · matt: — · rjm: — |
| `lifecycle-sequence` | [D-231](../../decisions/DECISIONS.md#d-231) | [`sequencing-pipeline-macro-lifecycle-sequence`](../analysis/concordance/sequencing.md#sequencing-pipeline-macro-lifecycle-sequence) | addy: `Lifecycle Sequence` · matt: `General workflow tools` · rjm: `Lifecycle commands` |
| `lifecycle-workflow` | [D-232](../../decisions/DECISIONS.md#d-232) | [`sequencing-pipeline-lifecycle-concept`](../analysis/concordance/sequencing.md#sequencing-pipeline-lifecycle-concept) | addy: `lifecycle` · matt: — · rjm: `Workflows` |
| `meta-orchestrator-antipattern` | [D-625](../../decisions/DECISIONS.md#d-625) | [`sequencing-antipattern-meta-orchestrator`](../analysis/concordance/sequencing.md#sequencing-antipattern-meta-orchestrator) | addy: `meta-orchestrator` · matt: — · rjm: — |
| `multi-agent-orchestration` | [D-609](../../decisions/DECISIONS.md#d-609) | [`multi-agent-orchestration`](../analysis/concordance/invocation-patterns.md#multi-agent-orchestration) | addy: — · matt: `multi-agent framework` · rjm: `Multi-agent` |
| `needs-triage-marker` | [D-245](../../decisions/DECISIONS.md#d-245) | [`sequencing-fitness-needs-triage-label`](../analysis/concordance/sequencing.md#sequencing-fitness-needs-triage-label) | addy: — · matt: `needs-triage` · rjm: `Skill-Triage-002` |
| `optimization-workflow` | [D-263](../../decisions/DECISIONS.md#d-263) | [`sequencing-loops-optimization-workflow`](../analysis/concordance/sequencing.md#sequencing-loops-optimization-workflow) | addy: `The Optimization Workflow` · matt: — · rjm: — |
| `parallel-fan-out-merge` | [D-256](../../decisions/DECISIONS.md#d-256) | [`sequencing-orchestration-parallel-fan-out-merge`](../analysis/concordance/sequencing.md#sequencing-orchestration-parallel-fan-out-merge) | addy: `Parallel fan-out with merge` · matt: — · rjm: `Multi-Agent Orchestration System` |
| `pass-through-antipattern` | [D-608](../../decisions/DECISIONS.md#d-608) | [`pass-through`](../analysis/concordance/invocation-patterns.md#pass-through) | addy: — · matt: `pass-through` · rjm: `Pass Through` |
| `phase-boundary-decision-model` | [D-251](../../decisions/DECISIONS.md#d-251) | [`sequencing-boundary-decision-model`](../analysis/concordance/sequencing.md#sequencing-boundary-decision-model) | addy: `three-tier boundary system` · matt: `Phase boundaries` · rjm: `Boundary Protection` |
| `pipeline-staleness-invalidation` | [D-240](../../decisions/DECISIONS.md#d-240) | [`sequencing-precedence-full-pipeline-staleness`](../analysis/concordance/sequencing.md#sequencing-precedence-full-pipeline-staleness) | addy: — · matt: — · rjm: `Full pipeline staleness` |
| `progressive-disclosure-strategy` | [D-610](../../decisions/DECISIONS.md#d-610) | [`progressive-disclosure-strategy`](../analysis/concordance/invocation-patterns.md#progressive-disclosure-strategy) | addy: `progressive disclosure` · matt: — · rjm: `Progressive Disclosure Pattern` |
| `prompt-injection-defense` | [D-607](../../decisions/DECISIONS.md#d-607) | [`prompt-injection`](../analysis/concordance/invocation-patterns.md#prompt-injection) | addy: `Prompt Injection` · matt: — · rjm: `prompt-injection` |
| `quick-fix-workflow` | [D-242](../../decisions/DECISIONS.md#d-242) | [`sequencing-fitness-quick-fix-workflow`](../analysis/concordance/sequencing.md#sequencing-fitness-quick-fix-workflow) | addy: `five-step triage` · matt: `triage roles` · rjm: `Quick Fix Workflow` |
| `research-first-workflow` | [D-243](../../decisions/DECISIONS.md#d-243) | [`sequencing-fitness-research-first-workflow`](../analysis/concordance/sequencing.md#sequencing-fitness-research-first-workflow) | addy: — · matt: `grilling loop` · rjm: `Research-First Workflow` |
| `review-thread-lifecycle` | [D-272](../../decisions/DECISIONS.md#d-272) | [`sequencing-dag-thread-severity-lifecycle`](../analysis/concordance/sequencing.md#sequencing-dag-thread-severity-lifecycle) | addy: — · matt: — · rjm: `Thread Severity Classification and Lifecycle` |
| `router-dispatch-pattern` | [D-619](../../decisions/DECISIONS.md#d-619) | [`router-dispatch-pattern`](../analysis/concordance/invocation-patterns.md#router-dispatch-pattern) | addy: — · matt: `router` · rjm: `router pattern` |
| `runtime-error-triage` | [D-247](../../decisions/DECISIONS.md#d-247) | [`sequencing-fitness-runtime-error-triage`](../analysis/concordance/sequencing.md#sequencing-fitness-runtime-error-triage) | addy: `Runtime Error Triage` · matt: — · rjm: — |
| `sequential-paraphrasing-antipattern` | [D-259](../../decisions/DECISIONS.md#d-259) | [`sequencing-antipattern-sequential-paraphrasing`](../analysis/concordance/sequencing.md#sequencing-antipattern-sequential-paraphrasing) | addy: `Sequential orchestrator that paraphrases` · matt: — · rjm: — |
| `session-handoff-protocol` | [D-254](../../decisions/DECISIONS.md#d-254) | [`sequencing-handoff-syntax-and-skill`](../analysis/concordance/sequencing.md#sequencing-handoff-syntax-and-skill) | addy: — · matt: `The /handoff Skill` · rjm: `Handoff syntax` |
| `shift-left-verification` | [D-268](../../decisions/DECISIONS.md#d-268) | [`sequencing-dag-shift-left-lifecycle`](../analysis/concordance/sequencing.md#sequencing-dag-shift-left-lifecycle) | addy: `Shift Left` · matt: — · rjm: `Shift-left security` |
| `single-source-of-truth-principle` | [D-605](../../decisions/DECISIONS.md#d-605) | [`single-source-of-truth-pattern`](../analysis/concordance/invocation-patterns.md#single-source-of-truth-pattern) | addy: — · matt: `Single source of truth` · rjm: `Single source of truth principle` |
| `standard-feature-workflow` | [D-230](../../decisions/DECISIONS.md#d-230) | [`sequencing-pipeline-standard-feature-workflow`](../analysis/concordance/sequencing.md#sequencing-pipeline-standard-feature-workflow) | addy: `Sequential pipeline as user-driven slash commands` · matt: `workflows/*.md` · rjm: `Standard Feature Workflow` |
| `strangler-fig-pattern` | [D-612](../../decisions/DECISIONS.md#d-612) | [`strangler-fig-migration`](../analysis/concordance/invocation-patterns.md#strangler-fig-migration) | addy: `Strangler Pattern` · matt: — · rjm: `Strangler Fig Pattern` |
| `task-dependency-graph` | [D-267](../../decisions/DECISIONS.md#d-267) | [`sequencing-dag-dependency-graph`](../analysis/concordance/sequencing.md#sequencing-dag-dependency-graph) | addy: `dependency graph` · matt: — · rjm: `Workflow Validation` |
| `task-prerequisites` | [D-238](../../decisions/DECISIONS.md#d-238) | [`sequencing-precedence-prerequisites-pattern`](../analysis/concordance/sequencing.md#sequencing-precedence-prerequisites-pattern) | addy: — · matt: `Prerequisites` · rjm: `Front-gate` |
| `topological-dependency-order` | [D-266](../../decisions/DECISIONS.md#d-266) | [`sequencing-dag-dependency-order-topological`](../analysis/concordance/sequencing.md#sequencing-dag-dependency-order-topological) | addy: `dependency order` · matt: — · rjm: `Get-DecisionSequence` |
| `triage-checklist-sequence` | [D-246](../../decisions/DECISIONS.md#d-246) | [`sequencing-fitness-triage-checklist`](../analysis/concordance/sequencing.md#sequencing-fitness-triage-checklist) | addy: `The Triage Checklist` · matt: — · rjm: — |
| `triage-first-discipline` | [D-244](../../decisions/DECISIONS.md#d-244) | [`sequencing-fitness-triage-first`](../analysis/concordance/sequencing.md#sequencing-fitness-triage-first) | addy: — · matt: `Triage role` · rjm: `Triage first` |
| `trust-boundary-enforcement` | [D-253](../../decisions/DECISIONS.md#d-253) | [`sequencing-boundary-trust-boundaries`](../analysis/concordance/sequencing.md#sequencing-boundary-trust-boundaries) | addy: `Trust boundaries` · matt: — · rjm: `Untrusted-content boundary` |
| `verification-feedback-loop` | [D-262](../../decisions/DECISIONS.md#d-262) | [`sequencing-loops-feedback-loop-singular`](../analysis/concordance/sequencing.md#sequencing-loops-feedback-loop-singular) | addy: `verification loop` · matt: `feedback loop` · rjm: `self-improving loop` |

---

## 7. Selected Lifecycle Skills & Core Techniques Traceability

| Canonical Skill / Technique | Decision | Concordance Anchor | Source Names / Provenance |
|---|---|---|---|
| `grill-me` | [D-418](../../decisions/DECISIONS.md#d-418) | [`matt-grill-me`](../analysis/concordance/techniques.md#matt-grill-me) | addy: — · matt: `grill-me` · rjm: — |
| `grill-with-docs` | [D-444](../../decisions/DECISIONS.md#d-444) | [`matt-grill-with-docs`](../analysis/concordance/techniques.md#matt-grill-with-docs) | addy: — · matt: `grill-with-docs` · rjm: — |
| `wayfinder-exploration-skill` | [D-489](../../decisions/DECISIONS.md#d-489) | [`matt-wayfinder`](../analysis/concordance/techniques.md#matt-wayfinder) | addy: — · matt: `wayfinder` · rjm: — |
| `to-spec-synthesis` | [D-294](../../decisions/DECISIONS.md#d-294) | [`matt-to-spec`](../analysis/concordance/techniques.md#matt-to-spec) | addy: — · matt: `to-spec` · rjm: — |
| `to-tickets` | [D-316](../../decisions/DECISIONS.md#d-316) | [`matt-to-tickets`](../analysis/concordance/techniques.md#matt-to-tickets) | addy: — · matt: `to-tickets` · rjm: — |
| `diagnosing-bugs` | [D-333](../../decisions/DECISIONS.md#d-333) | [`matt-diagnosing-bugs`](../analysis/concordance/techniques.md#matt-diagnosing-bugs) | addy: — · matt: `diagnosing-bugs` · rjm: — |
| `code-simplifier` | [D-536](../../decisions/DECISIONS.md#d-536) | [`code-simplifier`](../analysis/concordance/roles.md#code-simplifier) | addy: — · matt: — · rjm: `code-simplifier` |
| `silent-failure-hunter` | [D-539](../../decisions/DECISIONS.md#d-539) | [`silent-failure-hunter`](../analysis/concordance/roles.md#silent-failure-hunter) | addy: — · matt: — · rjm: `silent-failure-hunter` |
| `security-auditor` | [D-541](../../decisions/DECISIONS.md#d-541) | [`security-auditor`](../analysis/concordance/roles.md#security-auditor) | addy: `security-auditor` · matt: — · rjm: `Security Specialist` |
| `changeset-versioning-technique` | [D-436](../../decisions/DECISIONS.md#d-436) | [`matt-changesets`](../analysis/concordance/techniques.md#matt-changesets) | addy: — · matt: `Changesets` · rjm: — |
| `six-phase-diagnosis` | [D-336](../../decisions/DECISIONS.md#d-336) | [`matt-six-phase-diagnosis`](../analysis/concordance/techniques.md#matt-six-phase-diagnosis) | addy: — · matt: `six-phase diagnosis` · rjm: — |
| `thin-vertical-slices` | [D-301](../../decisions/DECISIONS.md#d-301) | [`vertical-slices`](../analysis/concordance/techniques.md#vertical-slices) | addy: `thin vertical slices` · matt: `vertical slices` · rjm: `thin vertical slices` |
| `red-green-refactor-loop` | [D-261](../../decisions/DECISIONS.md#d-261) | [`sequencing-loops-tdd-red-green-refactor`](../analysis/concordance/sequencing.md#sequencing-loops-tdd-red-green-refactor) | addy: `TDD workflow` · matt: `red-green-refactor loop` · rjm: `closed-loop rule` |
| `characterization-testing` | [D-344](../../decisions/DECISIONS.md#d-344) | [`characterization-testing`](../analysis/concordance/techniques.md#characterization-testing) | addy: `characterization tests` · matt: — · rjm: `Characterization test` |
| `bisection-harness` | [D-338](../../decisions/DECISIONS.md#d-338) | [`matt-bisection-harness`](../analysis/concordance/techniques.md#matt-bisection-harness) | addy: — · matt: `bisection harness` · rjm: — |
| `git-worktree-isolation-technique` | [D-339](../../decisions/DECISIONS.md#d-339) | [`matt-git-worktrees`](../analysis/concordance/techniques.md#matt-git-worktrees) | addy: — · matt: `Git worktrees` · rjm: — |
