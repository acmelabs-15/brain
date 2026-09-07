---
unit: cc-rjm-282
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-282

## Files assigned
- [x] sources/rjm/scripts/eval/eval-model-panel.py
- [x] sources/rjm/scripts/eval/eval-model-sweep.py
- [x] sources/rjm/scripts/eval/eval-oneshot-vs-shipped.py
- [x] sources/rjm/scripts/eval/eval-reviewer-asymmetry.py
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-panel-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-model-sweep-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-oneshot-vs-shipped-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-eval-reviewer-asymmetry-py.md

## Outputs produced
- docs/analysis/concepts/rjm/dry-run-report.md (1039 bytes)
- docs/analysis/concepts/rjm/model-sweep-core.md (893 bytes)
- docs/analysis/concepts/rjm/modelevalrunner.md (943 bytes)
- docs/analysis/concepts/rjm/subprocessmodelevalrunner.md (948 bytes)
- docs/analysis/concepts/rjm/eval-common-py.md (882 bytes)
- docs/analysis/concepts/rjm/issue-2858.md (880 bytes)
- docs/analysis/concepts/rjm/default-child-timeout-s.md (877 bytes)
- docs/analysis/concepts/rjm/childrunerror.md (834 bytes)
- docs/analysis/concepts/rjm/agent-name-arg.md (824 bytes)
- docs/analysis/concepts/rjm/parse-models-arg.md (878 bytes)
- docs/analysis/concepts/rjm/validate-models-priced.md (897 bytes)
- docs/analysis/concepts/rjm/sanitize-for-run-id.md (859 bytes)
- docs/analysis/concepts/rjm/build-child-argv.md (838 bytes)
- docs/analysis/concepts/rjm/child-cost-usd.md (907 bytes)
- docs/analysis/concepts/rjm/parse-report.md (905 bytes)
- docs/analysis/concepts/rjm/build-arg-parser.md (846 bytes)
- docs/analysis/concepts/rjm/plan-lines.md (889 bytes)
- docs/analysis/concepts/rjm/default-output-path.md (879 bytes)
- docs/analysis/concepts/rjm/run-sweep.md (920 bytes)
- docs/analysis/concepts/rjm/issue-2788.md (841 bytes)
- docs/analysis/concepts/rjm/oneshot-bench-core.md (878 bytes)
- docs/analysis/concepts/rjm/anthropic-api.md (1009 bytes)
- docs/analysis/concepts/rjm/api-error-verdict.md (888 bytes)
- docs/analysis/concepts/rjm/judge-max-tokens.md (832 bytes)
- docs/analysis/concepts/rjm/default-fixtures.md (857 bytes)
- docs/analysis/concepts/rjm/resolve-repo-child.md (913 bytes)
- docs/analysis/concepts/rjm/grade-fixture.md (883 bytes)
- docs/analysis/concepts/rjm/run-live.md (873 bytes)
- docs/analysis/concepts/rjm/summary-to-json.md (903 bytes)
- docs/analysis/concepts/rjm/summary-to-human.md (881 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-282.md (5721 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/dry-run-report.md docs/analysis/concepts/rjm/model-sweep-core.md docs/analysis/concepts/rjm/modelevalrunner.md docs/analysis/concepts/rjm/subprocessmodelevalrunner.md docs/analysis/concepts/rjm/eval-common-py.md docs/analysis/concepts/rjm/issue-2858.md docs/analysis/concepts/rjm/default-child-timeout-s.md docs/analysis/concepts/rjm/childrunerror.md docs/analysis/concepts/rjm/agent-name-arg.md docs/analysis/concepts/rjm/parse-models-arg.md docs/analysis/concepts/rjm/validate-models-priced.md docs/analysis/concepts/rjm/sanitize-for-run-id.md docs/analysis/concepts/rjm/build-child-argv.md docs/analysis/concepts/rjm/child-cost-usd.md docs/analysis/concepts/rjm/parse-report.md docs/analysis/concepts/rjm/build-arg-parser.md docs/analysis/concepts/rjm/plan-lines.md docs/analysis/concepts/rjm/default-output-path.md docs/analysis/concepts/rjm/run-sweep.md docs/analysis/concepts/rjm/issue-2788.md docs/analysis/concepts/rjm/oneshot-bench-core.md docs/analysis/concepts/rjm/anthropic-api.md docs/analysis/concepts/rjm/api-error-verdict.md docs/analysis/concepts/rjm/judge-max-tokens.md docs/analysis/concepts/rjm/default-fixtures.md docs/analysis/concepts/rjm/resolve-repo-child.md docs/analysis/concepts/rjm/grade-fixture.md docs/analysis/concepts/rjm/run-live.md docs/analysis/concepts/rjm/summary-to-json.md docs/analysis/concepts/rjm/summary-to-human.md` (exit code 0; quote-check: 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts in unit cc-rjm-282 originate from the rjm evaluation CLI harness scripts (`eval-model-panel.py`, `eval-model-sweep.py`, `eval-oneshot-vs-shipped.py`, and `eval-reviewer-asymmetry.py`).
- All 30 concepts were classified as `kind: name-only` per D-023 because they represent Python internal functions, helper modules, classes, protocol types, constants, or issue tracker references rather than lifecycle phases, techniques, artifacts, or gates.
- Multi-occurrence concepts (`dry-run-report` appearing in both `eval-model-panel.py:194` and `eval-oneshot-vs-shipped.py:195`; `anthropic-api` appearing in `eval-oneshot-vs-shipped.py:30` and `eval-reviewer-asymmetry.py:47`) were fully recorded with all citing locations in their respective `Where used` tables.
- Defect annotations from inventory cards (`defects: missing-path, doc-drift` for `eval-model-sweep.py` and `defects: doc-drift` for `eval-reviewer-asymmetry.py`) were propagated to the `Implementation status` fields of the respective concept cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,500 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~8,800 tokens across 30 concept cards and 1 work-unit report.
