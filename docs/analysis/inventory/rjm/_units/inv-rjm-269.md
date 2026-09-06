---
unit: inv-rjm-269
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-269

## Files assigned
- [x] `sources/rjm/scripts/validate_session_json.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validate-session-json-py.md` (17133 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-269.md` (2324 bytes)

## Scripts executed
- `scripts/validate_session_json.py` — `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24.json` — exit 1
- `scripts/validate_session_json.py` — `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json` — exit 1
- `scripts/validate_session_json.py` — `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json --existing-log` — exit 0
- `scripts/validate_session_json.py` — `uv run python scripts/validate_session_json.py .agents/sessions/2025-12-18-session-24-component-agents-docs.json --existing-log --pre-commit` — exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
`scripts/validate_session_json.py` serves as the canonical session-log schema and protocol validator in `rjm`. Downstream scripts (`scripts/validation/git_hook_policy.py`, `scripts/validation/session_scope.py`, `scripts/validation/checks_tooling.py`), skill documents (`src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md`, `src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md`, `src/copilot-cli/skills/ai-agents-validation-and-qa/SKILL.md`), and instructions (`src/copilot-cli/instructions/canonical-source-mirror.instructions.md`) explicitly bind their contracts to this script. The script replaced `Validate-SessionJson.ps1` per ADR-042 and implements ADR-035 exit code standardization.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~17,575 tokens (70,298 bytes); approximate tokens of output written: ~4,500 tokens.
