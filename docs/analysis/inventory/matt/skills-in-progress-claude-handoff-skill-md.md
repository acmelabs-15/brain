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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/claude-handoff/SKILL.md

## Purpose — required, verbatim
> "Hand the current conversation off to a fresh background agent that picks up the work immediately." — skills/in-progress/claude-handoff/SKILL.md:3

## Design intent — required
Enables an active session to transition its ongoing work directly into an asynchronous background agent without writing an intermediate transit file to disk. Constructs a concise conversation summary containing suggested skill invocations and references to existing artifacts, redacts sensitive secrets, and launches a fresh subagent in the background using `claude --bg --name "<name>" "<summary>"`. Solves the overhead of managing manual handoff files by automating immediate agent-to-agent background dispatch.

## Phase — required
none

## Inputs — required
- Current conversation context (skills/in-progress/claude-handoff/SKILL.md:8).
- Optional user argument specifying next session focus (skills/in-progress/claude-handoff/SKILL.md:4, 18).
- References to existing repo artifacts including specs, plans, ADRs, issues, commits, diffs (skills/in-progress/claude-handoff/SKILL.md:14).

## Outputs — required
- Background agent spawned via `claude --bg --name "<descriptive name>" "<handoff summary>"` (skills/in-progress/claude-handoff/SKILL.md:8).

## Invokes — required
none

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:15

## Concepts named — required, verbatim
- `claude-handoff` — skills/in-progress/claude-handoff/SKILL.md:2 — defined here
- `background agent` — skills/in-progress/claude-handoff/SKILL.md:3 — defined here
- `handoff summary` — skills/in-progress/claude-handoff/SKILL.md:8 — defined here
- `claude --bg` — skills/in-progress/claude-handoff/SKILL.md:8 — used here
- `claude agents` — skills/in-progress/claude-handoff/SKILL.md:8 — used here
- `--name` — skills/in-progress/claude-handoff/SKILL.md:10 — used here
- `suggested skills` — skills/in-progress/claude-handoff/SKILL.md:12 — defined here
- `Skill tool` — skills/in-progress/claude-handoff/SKILL.md:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts with `/handoff` in `skills/productivity/handoff/`: while `/handoff` saves a Markdown handoff file to the OS temporary directory for portability across harnesses or human review, `claude-handoff` bypasses file storage entirely by launching a background agent with the summary passed directly on the command line via `claude --bg`. Explicitly warns against duplicating existing repo artifacts and mandates redacting sensitive data since the summary becomes command-line arguments and agent prompts.

## Context cost
1301 bytes, 19 lines, ~300 tokens. Loads no external files.
