---
package: addy
path: hooks/hooks.json
type: config
bytes: 364
unit: inv-addy-32
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/hooks.json, sha256: 870c97c9cb6f526b66cc1d684e261ad2f7b45066a41e56ca5cb3fa6784df8888}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/hooks.json

## Purpose — required, verbatim
> "SessionStart" — hooks/hooks.json:3 (no explicit purpose statement)

## Design intent — required
Configures Claude Code event hooks for the `agent-skills` plugin, defining an automated `SessionStart` lifecycle hook. On session initialization, it resolves and executes `hooks/session-start.sh` from either `${CLAUDE_PLUGIN_ROOT}` or `${CLAUDE_PROJECT_DIR}/.claude`, running it via bash with graceful failure tolerance (`|| true`). This ensures initial session setup tasks run automatically without blocking session startup if absent.

## Phase — required
none

## Inputs — required
- Environment variable `${CLAUDE_PLUGIN_ROOT}` — hooks/hooks.json:8
- Environment variable `${CLAUDE_PROJECT_DIR}` — hooks/hooks.json:8
- Script path `hooks/session-start.sh` or `.claude/hooks/session-start.sh` — hooks/hooks.json:8

## Outputs — required
- Side-effect execution of `session-start.sh` via bash — hooks/hooks.json:8

## Invokes — required
- script session-start.sh — hooks/hooks.json:8

## Invoked by — required
none

## Concepts named — required, verbatim
- `hooks` — hooks/hooks.json:2 — defined here
- `SessionStart` — hooks/hooks.json:3 — defined here
- `command` — hooks/hooks.json:7 — used here
- `session-start.sh` — hooks/hooks.json:8 — used here

## Structure
JSON object declaring plugin hooks:
- "hooks" — hooks/hooks.json:2
- "SessionStart" — hooks/hooks.json:3
- "type" — hooks/hooks.json:7
- "command" — hooks/hooks.json:8

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines a Claude Code plugin lifecycle hook configuration triggered on `SessionStart`.
- Implements a resilient bash command fallback pattern that checks for `hooks/session-start.sh` in `${CLAUDE_PLUGIN_ROOT}` before falling back to `${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh`.
- Appends `|| true` to guarantee that the hook exits cleanly with exit code 0 even if the script does not exist or encounters an execution failure.

## Context cost
364 bytes (~91 tokens). Minimal JSON hook configuration.
