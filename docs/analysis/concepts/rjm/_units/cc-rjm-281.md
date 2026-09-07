---
unit: cc-rjm-281
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-281

## Files assigned
- [x] sources/rjm/scripts/eval/eval-agents.py
- [x] sources/rjm/scripts/eval/eval-e2e-delivery.py
- [x] sources/rjm/scripts/eval/eval-knowledge-integration.py
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-agents-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-e2e-delivery-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-knowledge-integration-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md

## Outputs produced
- docs/analysis/concepts/rjm/sunk-cost-fallacy.md (1391 bytes)
- docs/analysis/concepts/rjm/agent-max-tokens.md (1038 bytes)
- docs/analysis/concepts/rjm/call-api-for-agents.md (882 bytes)
- docs/analysis/concepts/rjm/complexity-behavior.md (895 bytes)
- docs/analysis/concepts/rjm/score-agent-response.md (908 bytes)
- docs/analysis/concepts/rjm/dimensions.md (893 bytes)
- docs/analysis/concepts/rjm/avg-scores.md (883 bytes)
- docs/analysis/concepts/rjm/decide-dry-run-exit.md (930 bytes)
- docs/analysis/concepts/rjm/run-assessment.md (838 bytes)
- docs/analysis/concepts/rjm/run-assessment-or-exit.md (895 bytes)
- docs/analysis/concepts/rjm/ground-truth-discipline.md (1295 bytes)
- docs/analysis/concepts/rjm/agent-registry.md (834 bytes)
- docs/analysis/concepts/rjm/autoplan.md (1420 bytes)
- docs/analysis/concepts/rjm/runs-per-cell.md (849 bytes)
- docs/analysis/concepts/rjm/planned-api-calls.md (881 bytes)
- docs/analysis/concepts/rjm/skill-knowledge-integration-assessment.md (1484 bytes)
- docs/analysis/concepts/rjm/accuracy.md (1219 bytes)
- docs/analysis/concepts/rjm/depth.md (1155 bytes)
- docs/analysis/concepts/rjm/specificity.md (1205 bytes)
- docs/analysis/concepts/rjm/no-data.md (1208 bytes)
- docs/analysis/concepts/rjm/kill-gate.md (1310 bytes)
- docs/analysis/concepts/rjm/issue-3042.md (789 bytes)
- docs/analysis/concepts/rjm/model-panel-core.md (892 bytes)
- docs/analysis/concepts/rjm/make-run-id.md (1033 bytes)
- docs/analysis/concepts/rjm/child-report-path.md (1028 bytes)
- docs/analysis/concepts/rjm/has-malformed-metadata-event.md (927 bytes)
- docs/analysis/concepts/rjm/default-runner.md (911 bytes)
- docs/analysis/concepts/rjm/sweep.md (783 bytes)
- docs/analysis/concepts/rjm/resolve-panel.md (872 bytes)
- docs/analysis/concepts/rjm/known-providers.md (873 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-281.md (3812 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-281 were generated from templates/concept-card.md.
- Concepts span rjm evaluation harnesses (`eval-agents.py`, `eval-e2e-delivery.py`, `eval-knowledge-integration.py`, `eval-model-panel.py`, `eval-model-sweep.py`, `eval-oneshot-vs-shipped.py`) and validation tooling (`check_shipped_skill_routes.py`).
- 22 concepts were classified as `kind: name-only` per D-023 because they represent Python script constants, functions, classes, data structures, or GitHub tracking issues.
- 8 concepts were classified into lifecycle kinds:
  - `sunk-cost-fallacy`: `kind: pattern` (decision pattern / anti-pattern check)
  - `ground-truth-discipline`: `kind: technique` (benchmark curation discipline)
  - `autoplan`: `kind: technique` (automated planning skill prompt under `rjm:plan`)
  - `skill-knowledge-integration-assessment`: `kind: technique` (knowledge value assessment)
  - `accuracy`, `depth`, `specificity`: `kind: checklist` (evaluation rubric scoring dimensions)
  - `no-data`, `kill-gate`: `kind: gate` (evaluation completion and regression gates)
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` with 30 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 7 source scripts and 7 citing inventory cards; approximate tokens of output written: ~12,000 tokens across 30 concept cards and this unit report.
