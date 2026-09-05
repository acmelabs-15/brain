---
package: addy
path: hooks/session-start.sh
type: file
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
verified: 2026-09-05 quote-check+coverage
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "Injects the using-agent-skills meta-skill into every new session" — hooks/session-start.sh:3

## Design intent — required
Session initialization hook for Claude Code and Codex CLI. Automatically injects the `using-agent-skills` guidance and flowchart into context at the beginning of each session so the agent is immediately aware of available skills, core operating behaviors, and the skill discovery flowchart without requiring manual user prompting.

## Phase — required
cross-phase

## Inputs — required
- Meta-skill file at using-agent-skills — hooks/session-start.sh:11

## Outputs — required
- JSON envelope on stdout with hookEventName SessionStart — hooks/session-start.sh:25

## Invokes — required
- reference using-agent-skills — hooks/session-start.sh:11

## Invoked by — required
- script hooks/session-start-test.sh — hooks/session-start-test.sh:14
- doc CONTRIBUTING.md — CONTRIBUTING.md:83
- config hooks/hooks.json — hooks/hooks.json:8

## Concepts named — required, verbatim
- `session start hook` — hooks/session-start.sh:2 — defined here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `SessionStart` — hooks/session-start.sh:5 — used here
- `jq` — hooks/session-start.sh:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start.sh`, language: bash, lines: 29
- documented invocation: `payload="$(bash hooks/session-start.sh)"` — hooks/session-start-test.sh:14
- **executed:** yes
- actual command run: `bash hooks/session-start.sh`, abridged stdout: `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded. Use the skill discovery flowchart...` (truncated), **actual exit code**: 0
- documented exit codes: "Every output path must emit the standard SessionStart envelope" — hooks/session-start.sh:5 vs. actual exit paths in code:
  - `exit 0` — hooks/session-start.sh:15 (missing jq fallback)
  - `exit 0` (implicit zero exit after output generation)
- for validators/gates: not a validation gate; generates context injection payload
- does the output match what the documentation claims? yes, outputs valid SessionStart JSON payload with additionalContext

## Defects — required
none

## Observations
Gracefully handles missing jq and missing meta-skill markdown file by returning valid SessionStart JSON containing an explanatory notice rather than failing, ensuring Claude Code / Codex CLI session startup never crashes.

## Context cost
1392 bytes, plus 10426 bytes from `skills/using-agent-skills/SKILL.md` (approximately 2800 tokens total).
