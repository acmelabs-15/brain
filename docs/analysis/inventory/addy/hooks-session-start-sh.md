---
package: addy
path: hooks/session-start.sh
type: script
bytes: 1392
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "Injects the using-agent-skills meta-skill into every new session" — hooks/session-start.sh:3

## Design intent — required
Acts as the automated session startup hook for Claude Code sessions. Upon session start, it reads `skills/using-agent-skills/SKILL.md` and outputs a standard JSON envelope with `hookEventName: "SessionStart"` and `additionalContext` containing the meta-skill body and discovery flowchart. This guarantees that every AI agent session starts with full awareness of available skills and the routing taxonomy. If `jq` or the skill file is missing, it emits an informative fallback message without crashing the host session.

## Phase — required
addy:Meta

## Inputs — required
- Meta-skill file at `using-agent-skills/SKILL.md` — hooks/session-start.sh:11
- Detection of command `jq` on PATH — hooks/session-start.sh:13

## Outputs — required
- Standard JSON envelope on stdout: `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}` — hooks/session-start.sh:6

## Invokes — required
- skill using-agent-skills — hooks/session-start.sh:11

## Invoked by — required
- config hooks.json — hooks/hooks.json:8
- script session-start-test.sh — hooks/session-start-test.sh:14
- doc CONTRIBUTING.md — CONTRIBUTING.md:83
- doc developer-onboarding.md — docs/developer-onboarding.md:67

## Concepts named — required, verbatim
- `SessionStart` — hooks/session-start.sh:6 — used here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `hookSpecificOutput` — hooks/session-start.sh:6 — used here
- `additionalContext` — hooks/session-start.sh:6 — used here

## Structure
Executable bash script without markdown headings:
- Script directory and meta-skill path resolution: `SCRIPT_DIR` — hooks/session-start.sh:9, `SKILLS_DIR` — hooks/session-start.sh:10, `META_SKILL` — hooks/session-start.sh:11
- `jq` availability check and fallback message emission — hooks/session-start.sh:13-16
- Meta-skill content injection via `jq -cn` — hooks/session-start.sh:18-28

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `hooks/session-start.sh`, bash, 29 lines
- documented invocation: `"bash \"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\""` — hooks/hooks.json:8
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: Ran `bash hooks/session-start.sh`; stdout: `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n..."}}`; **actual exit code**: 0.
- documented exit codes vs. actual exit paths: Documented: exits 0 with `SessionStart` envelope. Actual exit paths: `exit 0` at hooks/session-start.sh:15 (missing jq); implicit exit 0 at hooks/session-start.sh:28 (file present or missing fallback).
- for validators/gates: Not a gate. Emits configuration envelope.
- does the output match what the documentation claims? Yes, outputs valid JSON conforming to the Claude Code `SessionStart` specification.

## Defects — required
none

## Observations
- Follows the Claude Code and Codex specification requiring hook responses to be wrapped in a `hookSpecificOutput` object.
- Tolerates missing `jq` and missing skill file gracefully by emitting valid fallback JSON envelopes.

## Context cost
1392 bytes (~348 tokens) script itself. Loads `skills/using-agent-skills/SKILL.md` (6114 bytes). Total context cost: ~7506 bytes (~1876 tokens).
