---
unit: inv-rjm-187
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-187

## Files assigned
- [x] `sources/rjm/CONTRIBUTING.md` (44,216 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/contributing-md.md` (16,223 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `CONTRIBUTING.md` specifies the single source of truth for agents as `templates/agents/*.shared.md` and documents the generator `build/generate_agents.py` which populates `src/vs-code-agents/` and `src/copilot-cli/agents/`.
- References ADR-047, ADR-057, ADR-084, ADR-097, ADR-008, ADR-034, ADR-094, ADR-054 for hook design, prompt behavioral evaluations, session protocols, and security scanning.
- Documents the deprecation and retirement of all `PreToolUse`, `PostToolUse`, and `PermissionRequest` hooks under ADR-097, retaining only per-session or per-turn hooks (`SessionStart`, `UserPromptSubmit`, `SessionEnd`, `PreCompact`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,050 tokens; approximate tokens of output written: ~3,900 tokens.
