---
unit: inv-rjm-302
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-302

## Files assigned
- [x] `sources/rjm/scripts/validation/push_ref_staleness.py` — read in full
- [x] `sources/rjm/scripts/validation/rule_activation_coverage_baseline.json` — read in full
- [x] `sources/rjm/scripts/validation/ruleset_params_baseline.json` — read in full
- [x] `sources/rjm/scripts/validation/run_install_parity_ci.py` — read in full
- [x] `sources/rjm/scripts/validation/run_plugin_version_bump_ci.py` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-push-ref-staleness-py.md` (7921 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-rule-activation-coverage-baseline-json.md` (4335 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-ruleset-params-baseline-json.md` (3524 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-run-install-parity-ci-py.md` (6545 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-run-plugin-version-bump-ci-py.md` (7011 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-302.md`

## Scripts executed
- `sources/rjm/scripts/validation/push_ref_staleness.py`: `python3 scripts/validation/push_ref_staleness.py </dev/null` (exit code: 0)
- `sources/rjm/scripts/validation/push_ref_staleness.py`: `echo "refs/heads/test 1111111111111111111111111111111111111111 refs/heads/test 2222222222222222222222222222222222222222" | python3 scripts/validation/push_ref_staleness.py "{1}"` (exit code: 2)
- `sources/rjm/scripts/validation/rule_activation_coverage_baseline.json`: `python3 -m json.tool scripts/validation/rule_activation_coverage_baseline.json` (exit code: 0)
- `sources/rjm/scripts/validation/rule_activation_coverage_baseline.json`: `python3 scripts/validation/check_rule_activation_coverage.py` (exit code: 0)
- `sources/rjm/scripts/validation/ruleset_params_baseline.json`: `python3 -m json.tool scripts/validation/ruleset_params_baseline.json` (exit code: 0)
- `sources/rjm/scripts/validation/ruleset_params_baseline.json`: `python3 scripts/validation/check_ruleset_params_drift.py --offline` (exit code: 0)
- `sources/rjm/scripts/validation/run_install_parity_ci.py`: `python3 scripts/validation/run_install_parity_ci.py` (exit code: 0)
- `sources/rjm/scripts/validation/run_plugin_version_bump_ci.py`: `python3 scripts/validation/run_plugin_version_bump_ci.py` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/push_ref_staleness.py`: Phase 1V specifically flagged that earlier runs omitted `command git` from `## Invokes`. This card explicitly includes `command git` (lines 117 and 136). Because it is not invoked by any in-scope lifecycle file (only referenced by out-of-scope `lefthook.yml` and test suites), it is classified with `Invoked by: orphan` and carries the corresponding `orphan` defect under `## Defects`.
- `scripts/validation/run_install_parity_ci.py` and `scripts/validation/run_plugin_version_bump_ci.py`: Both modules share infrastructure provided by `scripts/validation/ci_runner_base.py` (unit `inv-rjm-294`) and invoke underlying validator scripts under `build/scripts/`. Both implement ADR-006 thin workflow patterns, keeping GitHub Actions workflow YAML thin and allowing CI steps to be executed and debugged locally.
- `scripts/validation/rule_activation_coverage_baseline.json` and `scripts/validation/ruleset_params_baseline.json`: Both are classified with `type: script` per the manifest partition mapping. They serve as deterministic baseline ratchets consumed by `check_rule_activation_coverage.py` and `check_ruleset_params_drift.py` respectively.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4,570 tokens (18,281 bytes across 5 files). Approximate tokens of output written: ~7,300 tokens (29,336 bytes of cards plus unit report).
