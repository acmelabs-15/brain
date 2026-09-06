---
package: addy
path: hooks/session-start.sh
type: file
bytes: 1392
unit: inv-addy-33
aliases: []
memo_inputs:
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "agent-skills session start hook" — hooks/session-start.sh:2

## Design intent — required
Acts as an automated session initialization hook for AI coding agent hosts (Claude Code and Codex CLI). Reads the `using-agent-skills` meta-skill guide from `skills/using-agent-skills/SKILL.md` and packages it into a structured JSON envelope, injecting the skill discovery flowchart, operating behaviors, and lifecycle sequence into the model's context window at the start of every session.

## Phase — required
addy:Define

## Inputs — required
- Meta-skill file at `META_SKILL` — hooks/session-start.sh:11
- Environment PATH containing `jq` — hooks/session-start.sh:13

## Outputs — required
- Standard JSON envelope on stdout with `hookSpecificOutput` containing `additionalContext` — hooks/session-start.sh:6, 25

## Invokes — required
- skill using-agent-skills — hooks/session-start.sh:11

## Invoked by — required
- script hooks/session-start-test.sh — hooks/session-start-test.sh:14

## Concepts named — required, verbatim
- `session start hook` — hooks/session-start.sh:2 — defined here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `SessionStart` — hooks/session-start.sh:5 — used here
- `hookSpecificOutput` — hooks/session-start.sh:6 — used here
- `additionalContext` — hooks/session-start.sh:6 — used here
- `Codex CLI` — hooks/session-start.sh:7 — used here
- `Claude Code` — hooks/session-start.sh:7 — used here
- `META_SKILL` — hooks/session-start.sh:11 — defined here
- `jq` — hooks/session-start.sh:13 — used here
- `skill discovery flowchart` — hooks/session-start.sh:22 — used here

## Structure
- Script header and envelope specification — hooks/session-start.sh:1-8
- Path resolution for using-agent-skills — hooks/session-start.sh:9-11
- Fallback check for missing jq dependency — hooks/session-start.sh:13-16
- Meta-skill content injection via jq — hooks/session-start.sh:18-26
- Fallback notice when meta-skill is missing — hooks/session-start.sh:26-28

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start.sh`, language: bash, lines: 29
- documented invocation: `payload="$(bash hooks/session-start.sh)"` — hooks/session-start-test.sh:14
- executed: yes
- actual command run: `bash hooks/session-start.sh`, stdout: `{"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n# Using Agent Skills..."}}`, actual exit code: 0
- documented exit codes: exit 0 on missing jq fallback (hooks/session-start.sh:15) or successful output (hooks/session-start.sh:25)
- for validators/gates: not a validation gate; generates context-injection JSON envelope for host session startup
- does output match documentation: yes, outputs valid SessionStart JSON envelope with meta-skill text

## Defects — required
- script-bug / doc-drift — hooks/session-start.sh:25: outputs `{hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: ...}}` envelope without top-level `priority` and `message` properties, causing regression test `hooks/session-start-test.sh` to crash with exit code 1 ("expected IMPORTANT priority" — hooks/session-start-test.sh:25). Addresses Phase 1V finding.

## Observations
Standardizes on the host platform's native SessionStart envelope (`hookSpecificOutput` with `hookEventName` and `additionalContext`). While compliant with Claude Code and Codex CLI specifications, updating this envelope broke backward compatibility with the legacy regression test suite in `hooks/session-start-test.sh`.

## Context cost
1392 bytes, approximately 350 tokens.
