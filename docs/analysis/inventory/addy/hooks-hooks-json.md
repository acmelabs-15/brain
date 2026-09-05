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
verified: 2026-09-05 quote-check+coverage
---

# hooks/hooks.json

## Purpose — required, verbatim
> "SessionStart" — hooks/hooks.json:3 (no explicit purpose statement)

## Design intent — required
Registers a Claude Code `SessionStart` lifecycle hook for the `agent-skills` plugin. It configures Claude Code to execute an inline bash command whenever a new session begins. This command checks for the presence of `hooks/session-start.sh` (within `${CLAUDE_PLUGIN_ROOT}` or alternatively `${CLAUDE_PROJECT_DIR}/.claude/hooks/`) and executes it if found, falling back safely with `|| true` to avoid aborting the session if absent. The executed hook script injects the `using-agent-skills` meta-skill into the session's initial context, providing immediate skill discovery and operational routing to the agent. Without this configuration, Claude Code sessions would start without automatic skill discovery context, requiring users to manually invoke or discover skills.

## Phase — required
none

## Inputs — required
- Triggering event: `SessionStart` lifecycle event triggered by Claude Code when starting a session — hooks/hooks.json:3
- Configuration command: evaluates `${CLAUDE_PLUGIN_ROOT}` and `${CLAUDE_PROJECT_DIR}` environment variables to locate `session-start.sh` — hooks/hooks.json:8

## Outputs — required
none

## Invokes — required
- script hooks/session-start.sh — hooks/hooks.json:8

## Invoked by — required
none

## Concepts named — required, verbatim
- `hooks` — hooks/hooks.json:2 — defined here
- `SessionStart` — hooks/hooks.json:3 — defined here
- `command` — hooks/hooks.json:7 — used here

## Structure
- `hooks` — hooks/hooks.json:2
- `SessionStart` — hooks/hooks.json:3
- `type` — hooks/hooks.json:7
- `command` — hooks/hooks.json:8

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/hooks.json`, language: bash / shell command, lines: 1
- documented invocation: `"command": "SCRIPT=\"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] || SCRIPT=\"${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ]&& bash \"$SCRIPT\" || true"` — hooks/hooks.json:8
- **executed:** yes
- actual command run: `CLAUDE_PLUGIN_ROOT="sources/addy" bash -c 'SCRIPT="${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh"; [ -f "$SCRIPT" ] || SCRIPT="${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh"; [ -f "$SCRIPT" ]&& bash "$SCRIPT" || true'`
- abridged stdout: `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n..."}}`
- **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths: `hooks/hooks.json:8` terminates with `|| true`, guaranteeing exit code 0 under all conditions.
- for validators/gates: not a validator or gate; cannot exit non-zero due to trailing `|| true`.
- does the output match what the documentation claims? Yes, runs the session start hook and emits a valid JSON envelope containing the `SessionStart` hook event and meta-skill additional context.

## Defects — required
- unfailable-gate — hooks/hooks.json:8 — The hook command appends `|| true`, suppressing all errors and ensuring exit code 0 even if bash fails or the script is corrupted or missing.
- missing-path — hooks/hooks.json:8 — Fallback path `${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh` references a `.claude/hooks/` directory that does not exist in the repository clone.

## Observations
- Standard Claude Code plugin hook declaration using the `hooks.SessionStart` schema.
- Employs double-nested `"hooks"` arrays (`hooks.SessionStart[0].hooks[0]`), adhering to Claude Code's hook configuration syntax where event handlers contain hook groups.
- Dispatches to `hooks/session-start.sh` to inject the `using-agent-skills` meta-skill into agent context.

## Context cost
364 bytes, approximately 90 tokens.
