---
unit: inv-rjm-234
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-234

## Files assigned
- [x] `sources/rjm/scripts/eval/eval-suite.py`
- [x] `sources/rjm/scripts/eval/examples/e2e-delivery-fixtures.json`
- [x] `sources/rjm/scripts/eval/examples/example-overlap-pairs.json`
- [x] `sources/rjm/scripts/eval/examples/example-scenarios.json`
- [x] `sources/rjm/scripts/eval/examples/overlap-pairs-issue-1949.json`
- [x] `sources/rjm/scripts/eval/examples/runtime-parity-fixtures.json`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-eval-suite-py.md` (7677 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-examples-e2e-delivery-fixtures-json.md` (5931 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-examples-example-overlap-pairs-json.md` (4443 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-examples-example-scenarios-json.md` (3940 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-examples-overlap-pairs-issue-1949-json.md` (5036 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-examples-runtime-parity-fixtures-json.md` (4653 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-234.md` (this report)

## Scripts executed
- `scripts/eval/eval-suite.py`, `python3 scripts/eval/eval-suite.py --dry-run`, exit 0
- `scripts/eval/eval-suite.py`, `python3 scripts/eval/eval-suite.py`, exit 0
- `scripts/eval/eval-suite.py`, `python3 scripts/eval/eval-suite.py --base-ref non-existent-ref`, exit 2
- `scripts/eval/eval-suite.py`, `python3 scripts/eval/eval-suite.py --scope prompts --dry-run`, exit 0
- `scripts/eval/examples/e2e-delivery-fixtures.json`, `python3 scripts/eval/eval-e2e-delivery.py --fixtures scripts/eval/examples/e2e-delivery-fixtures.json --dry-run`, exit 0
- `scripts/eval/examples/example-overlap-pairs.json`, `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run`, exit 0
- `scripts/eval/examples/example-scenarios.json`, `python3 -m json.tool scripts/eval/examples/example-scenarios.json`, exit 0
- `scripts/eval/examples/overlap-pairs-issue-1949.json`, `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/overlap-pairs-issue-1949.json --dry-run`, exit 0
- `scripts/eval/examples/runtime-parity-fixtures.json`, `python3 scripts/eval/eval_runtime_parity.py --fixtures scripts/eval/examples/runtime-parity-fixtures.json --dry-run`, exit 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-suite.py` orchestrates child evaluators assigned to adjacent units: `eval-prompt-change.py` (ADR-057), `eval-agents.py` (inv-rjm-227), and `eval-knowledge-integration.py`.
- `tests/QualityGatePrompts.Tests.ps1` referenced by `eval-suite.py:232` does not exist on disk in `sources/rjm/tests/`, causing structural Pester tests to always report skipped.
- `scripts/eval/examples/overlap-pairs-issue-1949.json` documents live pairwise skill overlap eval for issue #1949, referencing `eval-skill-overlap.py`. It is not statically imported in repo code but is passed via CLI flag `--pairs`.
- All JSON fixture files in `scripts/eval/examples/` were validated for syntax and exercised with their corresponding eval CLI runners.

## Blocked or uncertain
none

## Time and size
Approximate source read: 43,459 bytes (~10,865 tokens across 6 source files).
Approximate output written: 31,680 bytes (~7,920 tokens across 6 inventory cards and 1 unit report).
