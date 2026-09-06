---
unit: inv-rjm-283
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-283

## Files assigned
- [x] `sources/rjm/scripts/validation/check_repo_health.py` (22001 bytes, 501 lines)
- [x] `sources/rjm/scripts/validation/check_rule_activation_coverage.py` (20391 bytes, 493 lines)
- [x] `sources/rjm/scripts/validation/check_ruleset_params_drift.py` (4341 bytes, 142 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-repo-health-py.md` (10062 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-rule-activation-coverage-py.md` (10756 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-ruleset-params-drift-py.md` (8210 bytes)

## Scripts executed
- `scripts/validation/check_repo_health.py`, `python3 sources/rjm/scripts/validation/check_repo_health.py`, exit code 0
- `scripts/validation/check_repo_health.py`, `python3 sources/rjm/scripts/validation/check_repo_health.py /nonexistent/path`, exit code 2
- `scripts/validation/check_rule_activation_coverage.py`, `python3 sources/rjm/scripts/validation/check_rule_activation_coverage.py`, exit code 0
- `scripts/validation/check_rule_activation_coverage.py`, `python3 sources/rjm/scripts/validation/check_rule_activation_coverage.py --repo-root /tmp`, exit code 2
- `scripts/validation/check_ruleset_params_drift.py`, `python3 sources/rjm/scripts/validation/check_ruleset_params_drift.py --offline`, exit code 0
- `scripts/validation/check_ruleset_params_drift.py`, `python3 sources/rjm/scripts/validation/check_ruleset_params_drift.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_repo_health.py` imports `check_repo_health_report.py` (unit `inv-rjm-282`) and coordinates with `lefthook.yml` jobs `repo-health` under a 7-second budget against Lefthook's 10-second timeout.
- `scripts/validation/check_rule_activation_coverage.py` imports baseline guards from `scripts/validation/portability_baseline.py` and references test evaluation scenario suites in `tests/evals/rule-scenarios/` and `tests/evals/skill-scenarios/`. It is wrapped by `scripts/validation/checks_spec.py` and cited in `.claude/skills/context-optimizer/references/rule-audit-procedure.md`.
- `scripts/validation/check_ruleset_params_drift.py` defines `EXIT_AUTH = 4` on authentication failure at line 32 and 76, which is omitted from the ADR-035 exit code enumeration in the docstring header.

## Blocked or uncertain
none

## Time and size
Approximate source read: 46733 bytes (~11700 tokens). Approximate output written: 29028 bytes across 3 cards (~7300 tokens) + unit report (~1400 bytes, ~350 tokens).
