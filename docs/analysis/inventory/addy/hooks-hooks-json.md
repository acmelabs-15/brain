---
package: addy
path: hooks/hooks.json
type: config
bytes: 364
unit: inv-addy-9
---

# hooks/hooks.json

## Purpose — required, verbatim
> "{"hooks": {"SessionStart": [{"hooks": [{"type": "command", "command": "SCRIPT=\"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] || SCRIPT=\"${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] && bash \"$SCRIPT\" || true"}]}]}}" (no explicit purpose statement) — hooks/hooks.json:1-15

## Design intent — required
Declarative configuration file for Claude Code plugin hooks. Registers the `SessionStart` event listener to run `hooks/session-start.sh` (checking both `${CLAUDE_PLUGIN_ROOT}` and `${CLAUDE_PROJECT_DIR}/.claude/hooks/`), ensuring that every agent session automatically executes the session-start hook to inject the meta-skill.

## Phase — required
cross-phase

## Inputs — required
- Environment variables: `CLAUDE_PLUGIN_ROOT`, `CLAUDE_PROJECT_DIR` — hooks/hooks.json:8

## Outputs — required
- Hook registration object for Claude Code harness runtime — hooks/hooks.json:1-14

## Invokes — required
- script hooks/session-start.sh — hooks/hooks.json:8

## Invoked by — required
- Claude Code plugin host runtime

## Concepts named — required, verbatim
- `hooks` — hooks/hooks.json:2 — used here
- `SessionStart` — hooks/hooks.json:3 — used here
- `command` — hooks/hooks.json:7 — used here

## Structure
- JSON configuration object (`hooks.SessionStart`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Only registers `SessionStart`. It does not register `PreToolUse` or `PostToolUse` for `sdd-cache`, as SDD cache hooks require explicit user opt-in via `.claude/settings.json`.
- Uses shell fallback logic (`|| SCRIPT=...; [ -f "$SCRIPT" ] && bash "$SCRIPT" || true`) to locate `session-start.sh` regardless of whether the package is loaded as a global plugin or project-local repository.

## Context cost
364 bytes (~91 tokens)
