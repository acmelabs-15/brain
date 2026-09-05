---
package: matt
path: skills/engineering/to-spec/SKILL.md
type: skill
bytes: 3043
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/to-spec/SKILL.md

## Purpose — required, verbatim
> "Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed." — skills/engineering/to-spec/SKILL.md:3

## Design intent — required
Synthesizes conversational consensus and codebase exploration into a structured feature specification without re-interviewing the user. Anchors implementation quality early by requiring the agent to identify and confirm test seams (aiming for a single high-level seam) before drafting. Publishes the resulting spec directly to the configured issue tracker tagged `ready-for-agent`, allowing downstream implementation or ticketing to proceed without redundant triage passes. Configured with `disable-model-invocation: true` to require explicit invocation.

## Phase — required
none

## Inputs — required
- Conversation context — skills/engineering/to-spec/SKILL.md:7
- Tracker and triage label configuration (from `setup-matt-pocock-skills`) — skills/engineering/to-spec/SKILL.md:9
- Codebase context, project domain glossary, and ADRs — skills/engineering/to-spec/SKILL.md:13
- Confirmed test seams agreed with the user — skills/engineering/to-spec/SKILL.md:17

## Outputs — required
- Feature specification published to the project issue tracker with the `ready-for-agent` label — skills/engineering/to-spec/SKILL.md:19

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-spec/SKILL.md:9

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23

## Concepts named — required, verbatim
- `to-spec` — skills/engineering/to-spec/SKILL.md:2 — defined here
- `spec` — skills/engineering/to-spec/SKILL.md:3 — defined here
- `issue tracker` — skills/engineering/to-spec/SKILL.md:3 — used here
- `domain glossary` — skills/engineering/to-spec/SKILL.md:13 — used here
- `ADRs` — skills/engineering/to-spec/SKILL.md:13 — used here
- `seams` — skills/engineering/to-spec/SKILL.md:15 — used here
- `ready-for-agent` — skills/engineering/to-spec/SKILL.md:19 — used here
- `Problem Statement` — skills/engineering/to-spec/SKILL.md:23 — defined here
- `Solution` — skills/engineering/to-spec/SKILL.md:27 — defined here
- `User Stories` — skills/engineering/to-spec/SKILL.md:31 — defined here
- `Implementation Decisions` — skills/engineering/to-spec/SKILL.md:43 — defined here
- `Testing Decisions` — skills/engineering/to-spec/SKILL.md:59 — defined here
- `Out of Scope` — skills/engineering/to-spec/SKILL.md:67 — defined here
- `Further Notes` — skills/engineering/to-spec/SKILL.md:71 — defined here

## Structure
- Process
- Problem Statement
- Solution
- User Stories
- Implementation Decisions
- Testing Decisions
- Out of Scope
- Further Notes

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly bans re-interviewing the user, requiring pure synthesis of already-agreed context. Forbids inclusion of ephemeral file paths or code snippets in the spec unless derived from a decision-rich prototype snippet.

## Context cost
3043 bytes, 76 lines, ~760 tokens. Loads no external files.
