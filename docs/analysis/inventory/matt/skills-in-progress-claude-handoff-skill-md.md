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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/claude-handoff/SKILL.md

## Purpose — required, verbatim
> "Hand the current conversation off to a fresh background agent that picks up the work immediately." — skills/in-progress/claude-handoff/SKILL.md:3

## Design intent — required
Enables asynchronous conversation continuation by synthesizing a concise handoff summary and launching an unattached background agent seeded with that summary via `claude --bg --name ...`. Bypasses markdown file persistence for ephemeral task handoffs, mandates descriptive naming for UI jobs list discovery, includes suggested skill invocations for the child agent, references external artifacts by URL or path, and enforces redacting credentials and sensitive information from the spawned prompt.

## Phase — required
matt:in-progress

## Inputs — required
- Current conversation state and context (`skills/in-progress/claude-handoff/SKILL.md:8`).
- Optional user arguments specifying the focus of the next session (`skills/in-progress/claude-handoff/SKILL.md:18`).

## Outputs — required
- A spawned background agent running `claude --bg --name "<descriptive name>" "<handoff summary>"` (`skills/in-progress/claude-handoff/SKILL.md:8`).

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/in-progress/README.md:15

## Concepts named — required, verbatim
- `claude-handoff` — skills/in-progress/claude-handoff/SKILL.md:2 — defined here
- `argument-hint` — skills/in-progress/claude-handoff/SKILL.md:4 — defined here
- `disable-model-invocation` — skills/in-progress/claude-handoff/SKILL.md:5 — defined here
- `handoff summary` — skills/in-progress/claude-handoff/SKILL.md:8 — defined here
- `background agent` — skills/in-progress/claude-handoff/SKILL.md:8 — defined here
- `claude --bg` — skills/in-progress/claude-handoff/SKILL.md:8 — used here
- `claude agents` — skills/in-progress/claude-handoff/SKILL.md:8 — used here
- `--name` — skills/in-progress/claude-handoff/SKILL.md:10 — used here
- `suggested skills` — skills/in-progress/claude-handoff/SKILL.md:12 — defined here
- `Skill tool` — skills/in-progress/claude-handoff/SKILL.md:12 — used here
- `specs` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `plans` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `ADRs` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `issues` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `commits` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `diffs` — skills/in-progress/claude-handoff/SKILL.md:14 — used here
- `sensitive information` — skills/in-progress/claude-handoff/SKILL.md:16 — defined here
- `API keys` — skills/in-progress/claude-handoff/SKILL.md:16 — used here
- `passwords` — skills/in-progress/claude-handoff/SKILL.md:16 — used here
- `personally identifiable information` — skills/in-progress/claude-handoff/SKILL.md:16 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Unlike disk-persisted handoffs, this skill passes the summary directly into the CLI command prompt, requiring strict redaction of secrets and credentials.

## Context cost
1301 bytes, 19 lines, ~220 tokens.
