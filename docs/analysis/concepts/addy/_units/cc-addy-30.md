---
unit: cc-addy-30
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-30

## Files assigned
- [x] sources/addy/scripts/run-evals-test.js
- [x] sources/addy/scripts/run-evals.js
- [x] sources/addy/scripts/validate-artifact-paths-test.js
- [x] sources/addy/scripts/validate-artifact-paths.js
- [x] sources/addy/scripts/validate-commands-test.js
- [x] docs/analysis/inventory/addy/scripts-run-evals-test-js.md
- [x] docs/analysis/inventory/addy/scripts-run-evals-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-commands-test-js.md

## Outputs produced
- docs/analysis/concepts/addy/fails-when-a-behavioral-eval-references-a-missing-fixture.md (1078 bytes)
- docs/analysis/concepts/addy/requires-fixtures-for-execution-evals.md (952 bytes)
- docs/analysis/concepts/addy/allows-dialogue-evals-without-fixtures.md (966 bytes)
- docs/analysis/concepts/addy/rejects-provisional-execution-evals.md (961 bytes)
- docs/analysis/concepts/addy/allows-dialogue-evals-with-a-legacy-provisional-marker.md (1033 bytes)
- docs/analysis/concepts/addy/rejects-unknown-behavioral-eval-kinds.md (970 bytes)
- docs/analysis/concepts/addy/dry-runs-a-fixtureless-dialogue-eval.md (978 bytes)
- docs/analysis/concepts/addy/enforces-the-configured-rank-1-floor.md (983 bytes)
- docs/analysis/concepts/addy/rejects-an-invalid-rank-1-floor.md (943 bytes)
- docs/analysis/concepts/addy/materializes-a-git-baseline-and-applies-a-working-tree-patch.md (1088 bytes)
- docs/analysis/concepts/addy/trigger-evals.md (1314 bytes)
- docs/analysis/concepts/addy/routing-collisions.md (1265 bytes)
- docs/analysis/concepts/addy/rank-1-ratchet.md (1170 bytes)
- docs/analysis/concepts/addy/dialogue-evals.md (1220 bytes)
- docs/analysis/concepts/addy/buildcorpus.md (835 bytes)
- docs/analysis/concepts/addy/cosine.md (806 bytes)
- docs/analysis/concepts/addy/rankskills.md (824 bytes)
- docs/analysis/concepts/addy/rundeterministic.md (848 bytes)
- docs/analysis/concepts/addy/runbehavioral.md (838 bytes)
- docs/analysis/concepts/addy/passes-when-producers-and-consumers-use-the-canonical-artifact-paths.md (1112 bytes)
- docs/analysis/concepts/addy/fails-when-a-producer-drifts-to-an-unapproved-artifact-path-the-93-regression.md (1148 bytes)
- docs/analysis/concepts/addy/reports-the-offending-file-and-line-number.md (1001 bytes)
- docs/analysis/concepts/addy/accepts-the-docs-spec-md-alternate-spec-location.md (1037 bytes)
- docs/analysis/concepts/addy/ignores-non-artifact-markdown-references-no-false-positives.md (1101 bytes)
- docs/analysis/concepts/addy/skips-guarded-files-that-do-not-exist.md (988 bytes)
- docs/analysis/concepts/addy/writefile.md (982 bytes)
- docs/analysis/concepts/addy/spec-plan-build-pipeline.md (1347 bytes)
- docs/analysis/concepts/addy/artifact-path-drift.md (1257 bytes)
- docs/analysis/concepts/addy/pr-93.md (870 bytes)
- docs/analysis/concepts/addy/artifact-allowlist.md (953 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-30.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md (exit 0, 30 PASS 0 FAIL)
- bun scripts/synthesis/coverage.ts (exit 0, clean for cc-addy-30)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Multiple concepts from `scripts/run-evals-test.js` and `scripts/validate-artifact-paths-test.js` represented test case descriptions and assertions rather than lifecycle concepts; in accordance with METHOD.md R6, D-023, and unit dispatch instructions, these were generated with `kind: name-only`, `(used, not defined)` definitions, full occurrence tables, and explanatory design notes.
- Function identifiers (`buildCorpus`, `cosine`, `rankSkills`, `runDeterministic`, `runBehavioral`, `writeFile`), PR references (`PR #93`), and configuration sets (`ARTIFACT_ALLOWLIST`) were similarly authored as `kind: name-only`.
- Core lifecycle techniques, gates, and patterns extracted from `run-evals.js` and `validate-artifact-paths.js` include `trigger-evals` (evaluating catalog prompt routing), `routing-collisions` (preventing ambiguous description overlap), `rank-1-ratchet` (CI gate enforcing top-1 routing accuracy), `dialogue-evals` (fixtureless conversational evaluations), `spec-plan-build-pipeline` (three-stage feature execution model), and `artifact-path drift` (failure mode where artifact paths diverge across commands).
- Defect note: `scripts/run-evals-test.js` has a known defect recorded in its inventory card regarding CommonJS `require()` failing when parent package.json specifies `"type": "module"`. This was carried forward into `Implementation status: defects: other` for all concepts defined in that test file.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~18,000 tokens (~48 KB source scripts and inventory entries).
Approximate tokens of output written: ~7,800 tokens (30 concept cards totaling 30,868 bytes; 1 unit report).
