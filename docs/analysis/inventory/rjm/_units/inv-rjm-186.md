---
unit: inv-rjm-186
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-186

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/workflows/validate-generated-agents.yml` (11662 bytes, 256 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.vscode/toolsets.jsonc` (2741 bytes, 97 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/AGENTS.md` (2947 bytes, 58 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/CLAUDE.md` (2482 bytes, 58 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/github-workflows-validate-generated-agents-yml.md` (10006 bytes)
- `docs/analysis/inventory/rjm/vscode-toolsets-jsonc.md` (2964 bytes)
- `docs/analysis/inventory/rjm/agents-md.md` (5194 bytes)
- `docs/analysis/inventory/rjm/claude-md.md` (4760 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-186.md`

## Scripts executed
- `build/generate_agents.py`, command: `uv run python build/generate_agents.py --validate`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Root `AGENTS.md` and `CLAUDE.md` constitute the central operational and routing entry points for the `rjm` repository, establishing the lifecycle slash commands (`/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) and agent delegation conventions (`Task(subagent_type="orchestrator")`).
- `.github/workflows/validate-generated-agents.yml` is the primary continuous integration gate ensuring generated agents, matrix references, and template schemas across platforms do not drift from their canonical templates.
- `.vscode/toolsets.jsonc` defines VS Code native toolset groupings matching the definitions in `templates/toolsets.yaml`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4958 tokens (19832 bytes); approximate tokens of output written: ~6000 tokens (~24000 bytes).
