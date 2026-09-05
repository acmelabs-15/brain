---
package: matt
path: skills/in-progress/claude-handoff/SKILL.md
type: skill
bytes: 1301
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/claude-handoff/SKILL.md

## Purpose — required, verbatim
> "Hand the current conversation off to a fresh background agent that picks up the work immediately." — skills/in-progress/claude-handoff/SKILL.md:3

## Design intent — required
Bridges the current interactive conversation into an asynchronous background agent without saving an intermediate markdown handoff file to disk. Constructs a concise handoff summary describing conversation progress, redacts credentials and personal identifiable information, suggests specific skills for the successor session, and launches a background agent directly using the Claude Code CLI (`claude --bg --name ...`). Allows work to proceed uninterrupted while freeing the human user's interactive session.

## Phase — required
none

## Inputs — required
- Conversation history and working state from the current session
- Optional user arguments indicating what the successor session will focus on (`argument-hint: "What will the next session be used for?"`)
- Paths and URLs to external artifacts (specs, plans, ADRs, issues, commits, diffs)

## Outputs — required
- Asynchronous background agent launched via `claude --bg --name "<descriptive name>" "<handoff summary>"`
- Running agent process inspectable and manageable via `claude agents`

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/in-progress/README.md:15

## Concepts named — required, verbatim
- `claude-handoff` — skills/in-progress/claude-handoff/SKILL.md:2 — defined here
- `handoff summary` — skills/in-progress/claude-handoff/SKILL.md:8 — defined here
- `background agent` — skills/in-progress/claude-handoff/SKILL.md:8 — defined here
- `suggested skills` — skills/in-progress/claude-handoff/SKILL.md:12 — defined here

## Structure
- `name: claude-handoff` — skills/in-progress/claude-handoff/SKILL.md:2
- `disable-model-invocation: true` — skills/in-progress/claude-handoff/SKILL.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Unlike the promoted `handoff` skill which records a persistent markdown document, this skill operates as a process fork into the CLI's background runner (`claude --bg`).
- Explicitly warns against leaking credentials or sensitive tokens, because command arguments passed to `claude --bg` become the seeded prompt visible in system process listings and job logs.

## Context cost
1301 bytes (~325 tokens). Minimal single-screen skill prompt.
