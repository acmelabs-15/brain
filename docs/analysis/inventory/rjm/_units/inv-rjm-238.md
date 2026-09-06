---
unit: inv-rjm-238
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-238

## Files assigned
- [x] `scripts/eval/software_engineering_library_activation_ci.py`
- [x] `scripts/eval/software_engineering_library_activation_gate.py`
- [x] `scripts/eval/variance-control.py`
- [x] `scripts/external_signals/__init__.py`
- [x] `scripts/external_signals/acceptance_criteria.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-ci-py.md` (11516 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-gate-py.md` (10489 bytes)
- `docs/analysis/inventory/rjm/scripts-eval-variance-control-py.md` (8923 bytes)
- `docs/analysis/inventory/rjm/scripts-external-signals---init---py.md` (2836 bytes)
- `docs/analysis/inventory/rjm/scripts-external-signals-acceptance-criteria-py.md` (7072 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-238.md`

## Scripts executed
- `scripts/eval/software_engineering_library_activation_ci.py`: `python3 scripts/eval/software_engineering_library_activation_ci.py --help` (exit 0)
- `scripts/eval/software_engineering_library_activation_ci.py`: `python3 scripts/eval/software_engineering_library_activation_ci.py alert-issue` (exit 1)
- `scripts/eval/software_engineering_library_activation_gate.py`: `python3 scripts/eval/software_engineering_library_activation_gate.py --help` (exit 0)
- `scripts/eval/software_engineering_library_activation_gate.py`: mock gate run with `--fail-on-threshold` (exit 0 on pass, exit 1 on threshold breach)
- `scripts/eval/variance-control.py`: `python3 scripts/eval/variance-control.py --fixture F002 --agent security --reps 20 --dry-run` (exit 0)
- `scripts/eval/variance-control.py`: `python3 scripts/eval/variance-control.py --reps 1` (exit 2)
- `scripts/external_signals/__init__.py`: `python3 -c "import scripts.external_signals"` (exit 0)
- `scripts/external_signals/acceptance_criteria.py`: `python3 scripts/external_signals/acceptance_criteria.py --body pr-body.md --diff pr.diff --json` (exit 2, missing file)
- `scripts/external_signals/acceptance_criteria.py`: mock evaluation run with passing body and diff (exit 0)
- `scripts/external_signals/acceptance_criteria.py`: mock evaluation run with unchecked checkbox (exit 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/software_engineering_library_activation_ci.py` and `software_engineering_library_activation_gate.py` implement the ADR-088 rollback tracking policy, which connects to `tests/evals/rule-scenarios/*.json` and `scripts/eval/eval-rule-activation.py` (inv-rjm-232).
- `scripts/eval/variance-control.py` reuses `_scoring_engine._VERDICT_RE` and `AnthropicAPIAdapter` to implement the issue #1877 variance-control harness referenced by `ai-agents-research-frontier` (inv-rjm-031).
- `scripts/external_signals/__init__.py` and `scripts/external_signals/acceptance_criteria.py` establish the deterministic external signal gating architecture described in `docs/design/external-signal-gating.md` and enforced by `scripts/quality_gate/spec_external_signal_gate.py` (inv-rjm-257).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,000 tokens (46,899 source bytes)
- Approximate tokens of output written: ~10,200 tokens (~40,836 card bytes + ~2,500 report bytes)
