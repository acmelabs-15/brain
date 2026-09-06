---
unit: inv-rjm-216
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-216

## Files assigned
- [x] `scripts/eval/_copilot_cli.py`
- [x] `scripts/eval/_copilot_process_tree.py`
- [x] `scripts/eval/_copilot_windows_files.py`
- [x] `scripts/eval/_e2e_delivery_core.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval--copilot-cli-py.md` (6266 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--copilot-process-tree-py.md` (4834 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--copilot-windows-files-py.md` (4720 bytes)
- `docs/analysis/inventory/rjm/scripts-eval--e2e-delivery-core-py.md` (6391 bytes)

## Scripts executed
- `scripts/eval/_copilot_cli.py`: `python3 sources/rjm/scripts/eval/_copilot_cli.py` (exit 0)
- `scripts/eval/_copilot_process_tree.py`: `python3 sources/rjm/scripts/eval/_copilot_process_tree.py` (exit 0)
- `scripts/eval/_copilot_windows_files.py`: `python3 sources/rjm/scripts/eval/_copilot_windows_files.py` (exit 0)
- `scripts/eval/_e2e_delivery_core.py`: `python3 sources/rjm/scripts/eval/_e2e_delivery_core.py` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/_copilot_cli.py` imports from `_copilot_cli_acp.py`, `_copilot_cli_constants.py`, and `_copilot_cli_transcript.py` (assigned to unit `inv-rjm-215`).
- `scripts/eval/_copilot_process_tree.py` is invoked by `_copilot_cli_acp.py` (in `inv-rjm-215`).
- `scripts/eval/_copilot_windows_files.py` is invoked by `_copilot_cli_transcript.py` (in `inv-rjm-215`).
- `scripts/eval/_e2e_delivery_core.py` provides the pure evaluation core imported by `scripts/eval/eval-e2e-delivery.py` (assigned to unit `inv-rjm-224`).

## Blocked or uncertain
none

## Time and size
Source read: 45,941 bytes (~11,500 tokens).
Output written: 22,211 bytes (~5,550 tokens) across 4 inventory cards + unit report.
