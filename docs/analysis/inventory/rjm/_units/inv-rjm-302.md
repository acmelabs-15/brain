---
unit: inv-rjm-302
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-302

## Files assigned
- [x] `scripts/validation/push_ref_staleness.py` — read in full
- [x] `scripts/validation/rule_activation_coverage_baseline.json` — read in full
- [x] `scripts/validation/ruleset_params_baseline.json` — read in full
- [x] `scripts/validation/run_install_parity_ci.py` — read in full
- [x] `scripts/validation/run_plugin_version_bump_ci.py` — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-push-ref-staleness-py.md` — 8948 bytes
- `docs/analysis/inventory/rjm/scripts-validation-rule-activation-coverage-baseline-json.md` — 4812 bytes
- `docs/analysis/inventory/rjm/scripts-validation-ruleset-params-baseline-json.md` — 3928 bytes
- `docs/analysis/inventory/rjm/scripts-validation-run-install-parity-ci-py.md` — 6778 bytes
- `docs/analysis/inventory/rjm/scripts-validation-run-plugin-version-bump-ci-py.md` — 7214 bytes

## Scripts executed
- `scripts/validation/push_ref_staleness.py`:
  - `python3 scripts/validation/push_ref_staleness.py </dev/null` — exit code 0
  - `echo "refs/heads/foo 1234567890123456789012345678901234567890 refs/heads/foo 1234567890123456789012345678901234567890" | python3 scripts/validation/push_ref_staleness.py "{1}"` — exit code 2
  - `echo "refs/heads/mybranch 1111111111111111111111111111111111111111 refs/heads/mybranch 2222222222222222222222222222222222222222" | python3 scripts/validation/push_ref_staleness.py` — exit code 0
- `scripts/validation/rule_activation_coverage_baseline.json`:
  - `python3 -m json.tool scripts/validation/rule_activation_coverage_baseline.json` — exit code 0
  - `python3 scripts/validation/check_rule_activation_coverage.py` — exit code 0
- `scripts/validation/ruleset_params_baseline.json`:
  - `python3 -m json.tool scripts/validation/ruleset_params_baseline.json` — exit code 0
  - `python3 scripts/validation/check_ruleset_params_drift.py` — exit code 0
- `scripts/validation/run_install_parity_ci.py`:
  - `python3 scripts/validation/run_install_parity_ci.py` — exit code 0
- `scripts/validation/run_plugin_version_bump_ci.py`:
  - `python3 scripts/validation/run_plugin_version_bump_ci.py` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `run_install_parity_ci.py` and `run_plugin_version_bump_ci.py` both depend directly on `scripts/validation/ci_runner_base.py` (assigned in unit `inv-rjm-294`) for git shallow clone unshallowing, branch allowlisting, and diff base resolution.
- `rule_activation_coverage_baseline.json` is consumed by `scripts/validation/check_rule_activation_coverage.py` (unit `inv-rjm-283`).
- `ruleset_params_baseline.json` is consumed by `scripts/validation/check_ruleset_params_drift.py`.
- Both runner scripts embody the thin workflow architecture mandated by ADR-006 (`.agents/architecture/ADR-006-thin-workflows-testable-modules.md`), keeping GitHub Actions workflow YAML declarative while placing imperative execution and fallbacks into Python modules.

## Blocked or uncertain
none

## Time and size
Source read: 18,281 bytes across 5 files (~4,570 tokens).
Output written: 31,680 bytes across 5 inventory cards + ~2,500 bytes unit report (~8,500 tokens).
