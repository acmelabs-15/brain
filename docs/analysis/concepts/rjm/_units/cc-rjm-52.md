---
unit: cc-rjm-52
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-52

## Files assigned
- [x] .agents/devops/arm-runner-migration-analysis.md
- [x] .agents/governance/agent-consolidation-process.md
- [x] .agents/governance/agent-design-principles.md
- [x] .agents/governance/steering-committee-charter.md
- [x] .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml
- [x] .claude/skills/chaos-experiment/templates/experiment-template.md
- [x] .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md
- [x] .claude/skills/merge-resolver/SKILL.md
- [x] .claude/skills/review/references/analyst.md
- [x] .claude/skills/skillforge/references/specification-template.md
- [x] docs/agent-governance.md
- [x] docs/codeql-rollout-checklist.md
- [x] docs/task-classification-guide.md
- [x] docs/analysis/inventory/rjm/agents-devops-arm-runner-migration-analysis-md.md
- [x] docs/analysis/inventory/rjm/docs-task-classification-guide-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-merge-resolver-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-specification-template-md.md
- [x] docs/analysis/inventory/rjm/docs-codeql-rollout-checklist-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-agent-consolidation-process-md.md
- [x] docs/analysis/inventory/rjm/docs-agent-governance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-analyst-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-steering-committee-charter-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-references-skill-spec-xml.md
- [x] docs/analysis/inventory/rjm/claude-skills-codebase-documenter-assets-templates-code-comments-template-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-chaos-experiment-templates-experiment-template-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-agent-design-principles-md.md

## Outputs produced
- docs/analysis/concepts/rjm/risk-level.md (1447 bytes)
- docs/analysis/concepts/rjm/workflow-inventory.md (935 bytes)
- docs/analysis/concepts/rjm/migration-recommendation.md (985 bytes)
- docs/analysis/concepts/rjm/testing-strategy.md (1004 bytes)
- docs/analysis/concepts/rjm/cost-impact-analysis.md (931 bytes)
- docs/analysis/concepts/rjm/risk-assessment.md (910 bytes)
- docs/analysis/concepts/rjm/mixed-runner-strategy.md (1408 bytes)
- docs/analysis/concepts/rjm/success-criteria.md (1976 bytes)
- docs/analysis/concepts/rjm/agent-consolidation-process.md (1736 bytes)
- docs/analysis/concepts/rjm/consolidation-triggers.md (1579 bytes)
- docs/analysis/concepts/rjm/automatic-review-triggers.md (1019 bytes)
- docs/analysis/concepts/rjm/manual-review-triggers.md (1013 bytes)
- docs/analysis/concepts/rjm/recommendation-threshold.md (1079 bytes)
- docs/analysis/concepts/rjm/impact-assessment.md (1494 bytes)
- docs/analysis/concepts/rjm/decision-criteria.md (1729 bytes)
- docs/analysis/concepts/rjm/migration-plan-template.md (1325 bytes)
- docs/analysis/concepts/rjm/deprecation-notice.md (1440 bytes)
- docs/analysis/concepts/rjm/parallel-operation.md (1317 bytes)
- docs/analysis/concepts/rjm/post-consolidation-checklist.md (1265 bytes)
- docs/analysis/concepts/rjm/archive-structure.md (1348 bytes)
- docs/analysis/concepts/rjm/rollback-procedure.md (1527 bytes)
- docs/analysis/concepts/rjm/frontier-model-execution.md (1575 bytes)
- docs/analysis/concepts/rjm/constrain-that-capability-down.md (1349 bytes)
- docs/analysis/concepts/rjm/scaffold-a-weaker-model-up.md (1231 bytes)
- docs/analysis/concepts/rjm/calibrated-envelope.md (1300 bytes)
- docs/analysis/concepts/rjm/prompting-inversion.md (1287 bytes)
- docs/analysis/concepts/rjm/model-pin-policy.md (1285 bytes)
- docs/analysis/concepts/rjm/calibrated-floor.md (1367 bytes)
- docs/analysis/concepts/rjm/non-overlapping-specialization.md (1466 bytes)
- docs/analysis/concepts/rjm/clear-entry-criteria.md (1382 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-52.md (7289 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0 (32 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned in `facts/cc-rjm-52.txt` were absent prior to this run and have now been authored in full.
- Concepts span three primary domains within rjm:
  - DevOps CI/CD runner migration and optimization (`arm-runner-migration-analysis.md`, `task-classification-guide.md`).
  - Governance lifecycle and agent consolidation framework (`agent-consolidation-process.md`, `steering-committee-charter.md`, `docs/agent-governance.md`).
  - Frontier model execution assumptions, prompt calibration, and core design principles (`agent-design-principles.md`).
- Multi-occurrence concepts were mapped across all citing locations:
  - `Risk Level` (2 occurrences): `.agents/devops/arm-runner-migration-analysis.md` and `docs/task-classification-guide.md`.
  - `Success Criteria` (4 occurrences): `.agents/devops/arm-runner-migration-analysis.md`, `.claude/skills/merge-resolver/SKILL.md`, `.claude/skills/skillforge/references/specification-template.md`, and `docs/codeql-rollout-checklist.md`.
  - `Consolidation Triggers` (2 occurrences): `.agents/governance/agent-consolidation-process.md` and `docs/agent-governance.md`.
  - `Impact Assessment` (2 occurrences): `.agents/governance/agent-consolidation-process.md` and `.claude/skills/review/references/analyst.md`.
  - `Decision Criteria` (3 occurrences): `.agents/governance/agent-consolidation-process.md`, `.agents/governance/steering-committee-charter.md`, and `.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml`.
  - `Deprecation Notice` (2 occurrences): `.agents/governance/agent-consolidation-process.md` and `.claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md`.
  - `Rollback Procedure` (2 occurrences): `.agents/governance/agent-consolidation-process.md` and `.claude/skills/chaos-experiment/templates/experiment-template.md`.
  - `Non-Overlapping Specialization` (2 occurrences): `.agents/governance/agent-design-principles.md` and `docs/agent-governance.md`.
  - `Clear Entry Criteria` (2 occurrences): `.agents/governance/agent-design-principles.md` and `docs/agent-governance.md`.
- Document headings and reporting labels were classified as `kind: name-only` per D-023: `workflow-inventory`, `migration-recommendation`, `testing-strategy`, `cost-impact-analysis`, `risk-assessment`, `automatic-review-triggers`, `manual-review-triggers`, and `recommendation-threshold`.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 13 source files and 13 inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
