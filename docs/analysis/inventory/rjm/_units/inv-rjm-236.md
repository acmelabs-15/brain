---
unit: inv-rjm-236
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-236

## Files assigned
- [x] sources/rjm/scripts/eval/panels/owner-copilot-cli.json

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-panels-owner-copilot-cli-json.md (7740 bytes)

## Scripts executed
- scripts/eval/panels/owner-copilot-cli.json: `python3 sources/rjm/scripts/eval/panels/owner-copilot-cli.json`, exit code 0
- scripts/eval/panels/owner-copilot-cli.json: `python3 scripts/eval/eval-model-panel.py --agents orchestrator --panel-config scripts/eval/panels/owner-copilot-cli.json --dry-run`, exit code 0
- scripts/eval/panels/owner-copilot-cli.json: `python3 -c 'import sys, pathlib; sys.path.insert(0, "sources/rjm/scripts/eval"); import _model_panel_core as mpc; text = pathlib.Path("sources/rjm/scripts/eval/panels/owner-copilot-cli.json").read_text(); p = mpc.load_panel_config(text); print(p)'`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/panels/owner-copilot-cli.json` defines the concrete production model panel configuration for `eval-model-panel.py` (`inv-rjm-218`), specifically for the GitHub Copilot CLI transport.
- Both tiers (`opus5` referencing `claude-opus-5` and `sol56` referencing `gpt-5.6-sol`) are configured with `role: "reference"`. This avoids probe tier degradation checks when no cheaper deployment tier exists in production.
- Token pricing handling: per `scripts/eval/_eval_common.py:40-45`, `gpt-5.6-sol` has no per-token rate defined because Copilot CLI meters premium requests rather than raw tokens; `claude-opus-5` has a rate of $0.005 input / $0.025 output per 1K tokens (`scripts/eval/_eval_common.py:38`).
- None of this unit's files appears in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`), so no divergence cards were required.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~250 tokens (1,102 bytes across 1 file).
Approximate tokens of output written: ~2,400 tokens (~9,500 bytes across 1 card and unit report).
