---
unit: cc-rjm-285
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-285

## Files assigned
- [x] sources/rjm/scripts/eval/eval-skill-overlap.py
- [x] sources/rjm/scripts/eval/eval-suite.py
- [x] sources/rjm/scripts/eval/examples/example-overlap-pairs.json
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-overlap-pairs-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-suite-py.md

## Outputs produced
- docs/analysis/concepts/rjm/issue-1932.md (1080 bytes)
- docs/analysis/concepts/rjm/cluster-json.md (910 bytes)
- docs/analysis/concepts/rjm/delta-help-threshold.md (909 bytes)
- docs/analysis/concepts/rjm/overlapverdict.md (876 bytes)
- docs/analysis/concepts/rjm/costestimate.md (857 bytes)
- docs/analysis/concepts/rjm/pricingerror.md (863 bytes)
- docs/analysis/concepts/rjm/directionscores.md (871 bytes)
- docs/analysis/concepts/rjm/own-delta.md (836 bytes)
- docs/analysis/concepts/rjm/other-delta.md (876 bytes)
- docs/analysis/concepts/rjm/recommend-action.md (939 bytes)
- docs/analysis/concepts/rjm/retirement-claim-guard.md (1401 bytes)
- docs/analysis/concepts/rjm/issue-2676.md (875 bytes)
- docs/analysis/concepts/rjm/reportref.md (882 bytes)
- docs/analysis/concepts/rjm/reportverdicterror.md (912 bytes)
- docs/analysis/concepts/rjm/retirement-verdicts.md (961 bytes)
- docs/analysis/concepts/rjm/pairsfileerror.md (877 bytes)
- docs/analysis/concepts/rjm/pairsconfig.md (838 bytes)
- docs/analysis/concepts/rjm/missingskillerror.md (908 bytes)
- docs/analysis/concepts/rjm/responsefn.md (871 bytes)
- docs/analysis/concepts/rjm/judgefn.md (874 bytes)
- docs/analysis/concepts/rjm/judgescoreerror.md (876 bytes)
- docs/analysis/concepts/rjm/pairresult.md (897 bytes)
- docs/analysis/concepts/rjm/matrix-json.md (890 bytes)
- docs/analysis/concepts/rjm/prune-fold-table.md (891 bytes)
- docs/analysis/concepts/rjm/eval-suite.md (1620 bytes)
- docs/analysis/concepts/rjm/git-diff.md (870 bytes)
- docs/analysis/concepts/rjm/structural-tests.md (1304 bytes)
- docs/analysis/concepts/rjm/behavioral-comparison.md (1392 bytes)
- docs/analysis/concepts/rjm/agent-quality-assessment.md (1281 bytes)
- docs/analysis/concepts/rjm/skill-knowledge-integration.md (1403 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-285.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/issue-1932.md docs/analysis/concepts/rjm/cluster-json.md docs/analysis/concepts/rjm/delta-help-threshold.md docs/analysis/concepts/rjm/overlapverdict.md docs/analysis/concepts/rjm/costestimate.md docs/analysis/concepts/rjm/pricingerror.md docs/analysis/concepts/rjm/directionscores.md docs/analysis/concepts/rjm/own-delta.md docs/analysis/concepts/rjm/other-delta.md docs/analysis/concepts/rjm/recommend-action.md docs/analysis/concepts/rjm/retirement-claim-guard.md docs/analysis/concepts/rjm/issue-2676.md docs/analysis/concepts/rjm/reportref.md docs/analysis/concepts/rjm/reportverdicterror.md docs/analysis/concepts/rjm/retirement-verdicts.md docs/analysis/concepts/rjm/pairsfileerror.md docs/analysis/concepts/rjm/pairsconfig.md docs/analysis/concepts/rjm/missingskillerror.md docs/analysis/concepts/rjm/responsefn.md docs/analysis/concepts/rjm/judgefn.md docs/analysis/concepts/rjm/judgescoreerror.md docs/analysis/concepts/rjm/pairresult.md docs/analysis/concepts/rjm/matrix-json.md docs/analysis/concepts/rjm/prune-fold-table.md docs/analysis/concepts/rjm/eval-suite.md docs/analysis/concepts/rjm/git-diff.md docs/analysis/concepts/rjm/structural-tests.md docs/analysis/concepts/rjm/behavioral-comparison.md docs/analysis/concepts/rjm/agent-quality-assessment.md docs/analysis/concepts/rjm/skill-knowledge-integration.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-285 authored 30 concept cards across three rjm evaluation sources:
  1. `scripts/eval/eval-skill-overlap.py`: Pairwise skill overlap analysis harness, metrics, cost estimation, and retirement-claim guards (`cluster-json`, `delta-help-threshold`, `overlapverdict`, `costestimate`, `pricingerror`, `directionscores`, `own-delta`, `other-delta`, `recommend-action`, `retirement-claim-guard`, `issue-2676`, `reportref`, `reportverdicterror`, `retirement-verdicts`, `pairsfileerror`, `pairsconfig`, `missingskillerror`, `responsefn`, `judgefn`, `judgescoreerror`, `pairresult`, `matrix-json`, `prune-fold-table`).
  2. `scripts/eval/examples/example-overlap-pairs.json`: Overlap test fixture and example configuration citing `issue-1932` (along with `eval-skill-overlap.py`).
  3. `scripts/eval/eval-suite.py`: Unified evaluation orchestrator and dispatcher across structural tests, behavioral prompt comparisons, agent assessments, and skill knowledge tests (`eval-suite`, `git-diff`, `structural-tests`, `behavioral-comparison`, `agent-quality-assessment`, `skill-knowledge-integration`).
- Five concepts were classified as operational lifecycle concepts (`kind: technique` and `kind: gate`): `retirement-claim-guard`, `eval-suite`, `structural-tests`, `behavioral-comparison`, `agent-quality-assessment`, and `skill-knowledge-integration`.
- Remaining twenty-four concepts represent file names, GitHub issue numbers, data structures, exceptions, type aliases, and CLI tools, classified as `kind: name-only` per D-023.
- All 31 occurrence locations specified in `facts/cc-rjm-285.txt` are fully documented across the 30 concept cards.
- Defects from citing inventory cards (`defects: doc-drift, other` for `eval-skill-overlap.py` and `defects: missing-path` for `eval-suite.py`) were accurately propagated to the Implementation status sections.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 3 source files and 3 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 work-unit report.
