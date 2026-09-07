---
unit: cc-rjm-286
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-286

## Files assigned
- [x] sources/rjm/scripts/eval/README.md
- [x] sources/rjm/scripts/eval/examples/e2e-delivery-fixtures.json
- [x] sources/rjm/scripts/eval/examples/example-overlap-pairs.json
- [x] sources/rjm/scripts/eval/examples/example-scenarios.json
- [x] sources/rjm/scripts/eval/examples/overlap-pairs-issue-1949.json
- [x] sources/rjm/scripts/eval/examples/runtime-parity-fixtures.json
- [x] sources/rjm/scripts/eval/optimize-artifact.py
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_gate.py
- [x] sources/rjm/scripts/validation/check_build_gates.py
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-e2e-delivery-fixtures-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-overlap-pairs-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-scenarios-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-overlap-pairs-issue-1949-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-runtime-parity-fixtures-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-optimize-artifact-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-build-gates-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md

## Outputs produced
- docs/analysis/concepts/rjm/end-to-end-delivery-eval-fixtures.md (1004 bytes)
- docs/analysis/concepts/rjm/provenance.md (863 bytes)
- docs/analysis/concepts/rjm/required-tests.md (850 bytes)
- docs/analysis/concepts/rjm/required-docs.md (856 bytes)
- docs/analysis/concepts/rjm/required-gates.md (1039 bytes)
- docs/analysis/concepts/rjm/ambiguous-stop-expected.md (911 bytes)
- docs/analysis/concepts/rjm/eval-skill-overlap-py.md (1296 bytes)
- docs/analysis/concepts/rjm/m1-catalog-prune.md (903 bytes)
- docs/analysis/concepts/rjm/pairs.md (1165 bytes)
- docs/analysis/concepts/rjm/memory-enhancement.md (1070 bytes)
- docs/analysis/concepts/rjm/owner.md (1210 bytes)
- docs/analysis/concepts/rjm/rule-id.md (1003 bytes)
- docs/analysis/concepts/rjm/expected-gate.md (1031 bytes)
- docs/analysis/concepts/rjm/restraint-pool.md (1200 bytes)
- docs/analysis/concepts/rjm/negative-judge-rubric.md (1238 bytes)
- docs/analysis/concepts/rjm/issue-1949.md (915 bytes)
- docs/analysis/concepts/rjm/m4.md (839 bytes)
- docs/analysis/concepts/rjm/pairwise-overlap-eval.md (1355 bytes)
- docs/analysis/concepts/rjm/investigate-tier.md (907 bytes)
- docs/analysis/concepts/rjm/resume-phase-3.md (867 bytes)
- docs/analysis/concepts/rjm/execute-reversible-tool.md (900 bytes)
- docs/analysis/concepts/rjm/consequential-choice.md (913 bytes)
- docs/analysis/concepts/rjm/qa-rejects-incomplete-scope.md (928 bytes)
- docs/analysis/concepts/rjm/regex.md (806 bytes)
- docs/analysis/concepts/rjm/not-regex.md (830 bytes)
- docs/analysis/concepts/rjm/file-equals.md (837 bytes)
- docs/analysis/concepts/rjm/gate-group.md (821 bytes)
- docs/analysis/concepts/rjm/report-group.md (827 bytes)
- docs/analysis/concepts/rjm/ledgermismatcherror.md (854 bytes)
- docs/analysis/concepts/rjm/duplicatekeyerror.md (859 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-286.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/end-to-end-delivery-eval-fixtures.md docs/analysis/concepts/rjm/provenance.md docs/analysis/concepts/rjm/required-tests.md docs/analysis/concepts/rjm/required-docs.md docs/analysis/concepts/rjm/required-gates.md docs/analysis/concepts/rjm/ambiguous-stop-expected.md docs/analysis/concepts/rjm/eval-skill-overlap-py.md docs/analysis/concepts/rjm/m1-catalog-prune.md docs/analysis/concepts/rjm/pairs.md docs/analysis/concepts/rjm/memory-enhancement.md docs/analysis/concepts/rjm/owner.md docs/analysis/concepts/rjm/rule-id.md docs/analysis/concepts/rjm/expected-gate.md docs/analysis/concepts/rjm/restraint-pool.md docs/analysis/concepts/rjm/negative-judge-rubric.md docs/analysis/concepts/rjm/issue-1949.md docs/analysis/concepts/rjm/m4.md docs/analysis/concepts/rjm/pairwise-overlap-eval.md docs/analysis/concepts/rjm/investigate-tier.md docs/analysis/concepts/rjm/resume-phase-3.md docs/analysis/concepts/rjm/execute-reversible-tool.md docs/analysis/concepts/rjm/consequential-choice.md docs/analysis/concepts/rjm/qa-rejects-incomplete-scope.md docs/analysis/concepts/rjm/regex.md docs/analysis/concepts/rjm/not-regex.md docs/analysis/concepts/rjm/file-equals.md docs/analysis/concepts/rjm/gate-group.md docs/analysis/concepts/rjm/report-group.md docs/analysis/concepts/rjm/ledgermismatcherror.md docs/analysis/concepts/rjm/duplicatekeyerror.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-286 completes 30 concept cards spanning end-to-end delivery evaluation fixtures, pairwise skill overlap evaluation, scenario evaluation definitions, runtime parity assertions, and held-out optimization constants/exceptions:
  1. Delivery evaluation fixtures (`end-to-end-delivery-eval-fixtures`, `provenance`, `required-tests`, `required-docs`, `required-gates`, `ambiguous-stop-expected`) from `e2e-delivery-fixtures.json` and `check_build_gates.py`.
  2. Overlap evaluation fixtures and catalog prune history (`eval-skill-overlap-py`, `m1-catalog-prune`, `pairs`, `memory-enhancement`, `owner`, `issue-1949`, `m4`, `pairwise-overlap-eval`, `investigate-tier`) from `example-overlap-pairs.json`, `overlap-pairs-issue-1949.json`, `scripts/eval/README.md`, and `software_engineering_library_activation_gate.py`.
  3. Scenario evaluation framework and restraint measurement (`rule-id`, `expected-gate`, `restraint-pool`, `negative-judge-rubric`) from `example-scenarios.json` and `scripts/eval/README.md`.
  4. Runtime parity testing fixtures and assertion primitives (`resume-phase-3`, `execute-reversible-tool`, `consequential-choice`, `qa-rejects-incomplete-scope`, `regex`, `not-regex`, `file-equals`) from `runtime-parity-fixtures.json`.
  5. Optimization rails constants and exceptions (`gate-group`, `report-group`, `ledgermismatcherror`, `duplicatekeyerror`) from `optimize-artifact.py`.
- Non-lifecycle concepts representing identifiers, schema keys, constants, classes, and file names were authored with `kind: name-only` per D-023.
- `memory-enhancement` was authored with `kind: technique`, `implementation_in_scope: false`, and `Implementation status: out-of-scope` per METHOD.md §1.2 memory exclusion rules.
- Behavioral evaluation concepts (`restraint-pool`, `negative-judge-rubric`, `pairwise-overlap-eval`) were authored with `kind: technique`.
- All 40 occurrences recorded in `facts/cc-rjm-286.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (`clean`, `defects: missing-path`, `defects: orphan`, `defects: doc-drift`, and `defects: missing-path, doc-drift, script-bug, orphan`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 authored concept cards and 1 unit report.
