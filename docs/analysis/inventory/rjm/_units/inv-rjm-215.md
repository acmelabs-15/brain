---
unit: inv-rjm-215
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-215

## Files assigned
- [x] sources/rjm/scripts/eval/_anthropic_api.py
- [x] sources/rjm/scripts/eval/_copilot_cli_acp.py
- [x] sources/rjm/scripts/eval/_copilot_cli_constants.py
- [x] sources/rjm/scripts/eval/_copilot_cli_transcript.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval--anthropic-api-py.md (8204 bytes)
- docs/analysis/inventory/rjm/scripts-eval--copilot-cli-acp-py.md (7676 bytes)
- docs/analysis/inventory/rjm/scripts-eval--copilot-cli-constants-py.md (4600 bytes)
- docs/analysis/inventory/rjm/scripts-eval--copilot-cli-transcript-py.md (7541 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-215.md (1894 bytes)

## Scripts executed
- `sources/rjm/scripts/eval/_anthropic_api.py`: `python3 sources/rjm/scripts/eval/_anthropic_api.py`, exit code 0; `uv run pytest tests/eval/test_anthropic_model_default.py tests/eval/test_provider_error_redaction.py`, exit code 0 (33 passed)
- `sources/rjm/scripts/eval/_copilot_cli_acp.py`: `python3 sources/rjm/scripts/eval/_copilot_cli_acp.py`, exit code 0; `uv run pytest tests/eval/test_providers.py`, exit code 0 (192 passed)
- `sources/rjm/scripts/eval/_copilot_cli_constants.py`: `python3 sources/rjm/scripts/eval/_copilot_cli_constants.py`, exit code 0; `uv run pytest tests/eval/test_providers.py -k "TracePrefixes or footer or trace"`, exit code 0 (8 passed)
- `sources/rjm/scripts/eval/_copilot_cli_transcript.py`: `python3 sources/rjm/scripts/eval/_copilot_cli_transcript.py`, exit code 0; `uv run pytest tests/eval/test_providers.py -k "transcript or session_root"`, exit code 0 (10 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These four files form the lower-level transport and protocol layer for the evaluation runner system in `sources/rjm/scripts/eval/`:
  - `_anthropic_api.py` provides the zero-dependency Anthropic Messages API transport, key loading with CWE-22 defense, and preflight model reachability checks. It routes alternative providers to `_providers.py`.
  - `_copilot_cli_acp.py`, `_copilot_cli_constants.py`, and `_copilot_cli_transcript.py` provide the underlying mechanics for `_copilot_cli.py` (Copilot CLI provider adapter). `_copilot_cli_acp.py` speaks JSON-RPC over ACP stdin/stdout, while `_copilot_cli_transcript.py` parses `events.jsonl` session files on disk with security checks (O_NOFOLLOW / dir_fd) to verify model attribution.
  - Sibling modules `_copilot_cli.py`, `_copilot_process_tree.py`, `_copilot_windows_files.py`, `_providers.py`, and `_eval_common.py` belong to adjacent units.

## Blocked or uncertain
none

## Time and size
Source read: 48,783 bytes (~12,200 tokens) across 4 files.
Output written: 29,915 bytes (~7,500 tokens) across 4 cards + unit report.
