---
unit: inv-rjm-219
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-219

## Files assigned
- [x] `scripts/eval/_optimizer_adapters.py` (27405 bytes, 610 lines) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval--optimizer-adapters-py.md` (11512 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-219.md` (1826 bytes)

## Scripts executed
- `scripts/eval/_optimizer_adapters.py`: `python3 sources/rjm/scripts/eval/_optimizer_adapters.py` (exit code: 0; module execution)
- `scripts/eval/_optimizer_adapters.py`: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/eval'); import _optimizer_adapters; print(_optimizer_adapters.__all__)"` (exit code: 0; module import test)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/_optimizer_adapters.py` supplies adapter functions (`agent_results`, `rule_results`, `rule_results_multi`, `pytest_results`) imported by `scripts/eval/optimize-artifact.py:72` (unit inv-rjm-223) to transform scorer outputs into `{task_id: bool}` dictionaries consumed by `_optimizer_core.score` (unit inv-rjm-220).
- The multi-run noise defense in `rule_results_multi` references empirical findings from ADR-087 Open Requirement 6 (`.agents/architecture/ADR-087-held-out-validated-improvement.md`).

## Blocked or uncertain
none

## Time and size
Source read: ~6,850 tokens (27,405 bytes). Outputs written: ~3,200 tokens across inventory card and unit report.
