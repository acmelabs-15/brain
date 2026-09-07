---
unit: cc-rjm-187
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-187

## Files assigned
- [x] .claude/skills/review/SKILL.md
- [x] .claude/skills/review/references/architect.md
- [x] .claude/skills/review/references/code-quality.md
- [x] .claude/skills/review/references/decision-rigor.md
- [x] .claude/skills/review/references/devops.md
- [x] .claude/skills/review/references/observability.md
- [x] .claude/skills/review/references/qa.md
- [x] .claude/skills/skillforge/scripts/triage_skill_request.py
- [x] .claude/skills/software-engineering-library/SKILL.md
- [x] .claude/skills/threat-modeling/references/advanced-analysis.md
- [x] .claude/skills/threat-modeling/scripts/generate_threat_matrix.py
- [x] docs/design/external-signal-gating.md
- [x] docs/skill-reference.md
- [x] docs/workflow-commands.md
- [x] scripts/progress/reporter.py

## Outputs produced
- docs/analysis/concepts/rjm/breaking-changes.md (1279 bytes)
- docs/analysis/concepts/rjm/technical-debt.md (1276 bytes)
- docs/analysis/concepts/rjm/design-quality-assessment.md (1304 bytes)
- docs/analysis/concepts/rjm/overall-design-score.md (1126 bytes)
- docs/analysis/concepts/rjm/architectural-concerns.md (1326 bytes)
- docs/analysis/concepts/rjm/breaking-change-assessment.md (1282 bytes)
- docs/analysis/concepts/rjm/technical-debt-analysis.md (1243 bytes)
- docs/analysis/concepts/rjm/adr-assessment.md (1276 bytes)
- docs/analysis/concepts/rjm/code-quality.md (2111 bytes)
- docs/analysis/concepts/rjm/scoped-cleanup.md (1256 bytes)
- docs/analysis/concepts/rjm/maintainability-assessment.md (1267 bytes)
- docs/analysis/concepts/rjm/overall-maintainability-score.md (1167 bytes)
- docs/analysis/concepts/rjm/decision-rigor-review-task.md (1498 bytes)
- docs/analysis/concepts/rjm/summary.md (1541 bytes)
- docs/analysis/concepts/rjm/pre-committed-metrics.md (1360 bytes)
- docs/analysis/concepts/rjm/assumptions-and-claims.md (1323 bytes)
- docs/analysis/concepts/rjm/survivorship-and-evidence-bias.md (1359 bytes)
- docs/analysis/concepts/rjm/start-simple.md (1363 bytes)
- docs/analysis/concepts/rjm/big-bang-cutover.md (1232 bytes)
- docs/analysis/concepts/rjm/decision-quality-assessment.md (1278 bytes)
- docs/analysis/concepts/rjm/overall-decision-rigor-score.md (1148 bytes)
- docs/analysis/concepts/rjm/devops-review-task.md (1327 bytes)
- docs/analysis/concepts/rjm/pr-scope-detection.md (1224 bytes)
- docs/analysis/concepts/rjm/action.md (1238 bytes)
- docs/analysis/concepts/rjm/script.md (839 bytes)
- docs/analysis/concepts/rjm/template.md (1035 bytes)
- docs/analysis/concepts/rjm/docs.md (1162 bytes)
- docs/analysis/concepts/rjm/config.md (1177 bytes)
- docs/analysis/concepts/rjm/build-pipeline-impact.md (1225 bytes)
- docs/analysis/concepts/rjm/ci-cd-configuration.md (1201 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-187.md (4907 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Concepts in this unit cover Stage-2 review axis prompt references (`architect.md`, `code-quality.md`, `decision-rigor.md`, `devops.md`), triage scripts, and shared PR categorization identifiers.
- PR classification identifiers (`ACTION`, `SCRIPT`, `TEMPLATE`, `DOCS`, `CONFIG`) and `summary` (CONTEXT_MODE enum value and progress reporter header) are classified as `kind: name-only` per METHOD.md R6 and D-023.
- Core review roles and checklists include `breaking-changes`, `technical-debt`, `code-quality`, `scoped-cleanup`, `decision-rigor-review-task`, `pre-committed-metrics`, `assumptions-and-claims`, `survivorship-and-evidence-bias`, `start-simple`, `devops-review-task`, `pr-scope-detection`, `build-pipeline-impact`, and `ci-cd-configuration`.
- Assessment tables and composite score fields are categorized as `kind: artifact`: `design-quality-assessment`, `overall-design-score`, `architectural-concerns`, `breaking-change-assessment`, `technical-debt-analysis`, `adr-assessment`, `maintainability-assessment`, `overall-maintainability-score`, `decision-quality-assessment`, `overall-decision-rigor-score`.
- Anti-pattern `big-bang-cutover` is classified as `kind: pattern`.
- All 30 concept cards pass quote-check with zero failures (33 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 15 source files and citing inventory cards; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
