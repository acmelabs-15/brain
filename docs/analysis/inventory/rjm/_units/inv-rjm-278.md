---
unit: inv-rjm-278
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-278

## Files assigned
- [x] sources/rjm/scripts/validation/check_copilot_routing_exclusions.py
- [x] sources/rjm/scripts/validation/check_copilot_version_pin.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_dual_priority_labels.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-copilot-routing-exclusions-py.md (8019 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-copilot-version-pin-py.md (7157 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-doc-interpreter-portability-py.md (13017 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-dual-priority-labels-py.md (7846 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-278.md (3890 bytes)

## Scripts executed
- `scripts/validation/check_copilot_routing_exclusions.py`: `uv run python scripts/validation/check_copilot_routing_exclusions.py` (exit code 0)
- `scripts/validation/check_copilot_routing_exclusions.py`: `uv run python scripts/validation/check_copilot_routing_exclusions.py /nonexistent` (exit code 2)
- `scripts/validation/check_copilot_version_pin.py`: `uv run python scripts/validation/check_copilot_version_pin.py` (exit code 0)
- `scripts/validation/check_copilot_version_pin.py`: `uv run python scripts/validation/check_copilot_version_pin.py --action /nonexistent/action.yml` (exit code 2)
- `scripts/validation/check_doc_interpreter_portability.py`: `uv run python scripts/validation/check_doc_interpreter_portability.py` (exit code 0)
- `scripts/validation/check_dual_priority_labels.py`: `uv run python scripts/validation/check_dual_priority_labels.py --labels priority:P1` (exit code 0)
- `scripts/validation/check_dual_priority_labels.py`: `uv run python scripts/validation/check_dual_priority_labels.py --labels priority:P1 priority:P2` (exit code 1)
- `scripts/validation/check_dual_priority_labels.py`: `uv run python scripts/validation/check_dual_priority_labels.py` (exit code 2)
- `scripts/validation/check_dual_priority_labels.py`: `uv run python scripts/validation/check_dual_priority_labels.py --issue 1 --pr 1` (exit code 2)
- `scripts/validation/check_dual_priority_labels.py`: `uv run python scripts/validation/check_dual_priority_labels.py --issue 999999999` (exit code 3)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_doc_interpreter_portability.py` imports and depends on helper modules `scripts/validation/doc_interpreter_subprocess.py` and `scripts/validation/portability_baseline.py`, and reads `scripts/validation/doc_interpreter_baseline.json`.
- `scripts/validation/check_dual_priority_labels.py` references canonical priority label generation in `.claude/skills/github/scripts/issue/set_issue_labels.py` which falls outside lifecycle scope under the exclusion boundary (`rjm-excluded.md`). The script itself is currently unwired to any lifecycle workflow or gate, documented as an orphan triage script.
- `scripts/validation/check_copilot_routing_exclusions.py` and `scripts/validation/check_copilot_version_pin.py` protect Copilot CLI distribution artifacts (`src/copilot-cli/skills` and `.github/actions/ai-review/action.yml`) against routing to excluded skills and using deprecated `@github/copilot` versions.

## Blocked or uncertain
none

## Time and size
Source read: 4 files, 45,432 bytes, ~11,350 tokens. Output written: 5 files, ~38,000 bytes, ~9,500 tokens.
