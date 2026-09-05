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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/to-spec/SKILL.md

## Purpose — required, verbatim
> "This skill takes the current conversation context and codebase understanding and produces a spec. Do NOT interview the user; just synthesize what you already know." — skills/engineering/to-spec/SKILL.md:7

## Design intent — required
Synthesizes a settled discussion, codebase context, and domain decisions into a durable, structured specification published to the project's issue tracker. Explicitly forbids re-interviewing the user, acting purely as a summarizer of prior debate. Crucially forces the agent to identify and confirm high-level observable testing seams with the user before drafting the spec, embedding testing decisions that bind downstream implementation (`tdd`) and verification (`code-review`). Applies the `ready-for-agent` triage label so downstream agents can pick it up.

## Phase — required
matt:engineering

## Inputs — required
Current conversation context, codebase understanding, domain glossary and ADRs from `CONTEXT.md`, tracker configuration from `setup-matt-pocock-skills`, user confirmation of test seams.

## Outputs — required
A structured specification published to the configured issue tracker tagged with the `ready-for-agent` label.

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-spec/SKILL.md:9

## Invoked by — required
- doc README.md — README.md:176
- doc README.md — README.md:199
- doc skills/engineering/README.md — skills/engineering/README.md:14
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:29

## Concepts named — required, verbatim
- `to-spec` — skills/engineering/to-spec/SKILL.md:2 — defined here
- `spec` — skills/engineering/to-spec/SKILL.md:3 — defined here
- `issue tracker` — skills/engineering/to-spec/SKILL.md:3 — used here
- `triage label` — skills/engineering/to-spec/SKILL.md:9 — used here
- `domain glossary` — skills/engineering/to-spec/SKILL.md:13 — used here
- `ADRs` — skills/engineering/to-spec/SKILL.md:13 — used here
- `seams` — skills/engineering/to-spec/SKILL.md:15 — defined here
- `ready-for-agent` — skills/engineering/to-spec/SKILL.md:19 — used here
- `spec-template` — skills/engineering/to-spec/SKILL.md:21 — defined here
- `Problem Statement` — skills/engineering/to-spec/SKILL.md:23 — defined here
- `Solution` — skills/engineering/to-spec/SKILL.md:27 — defined here
- `User Stories` — skills/engineering/to-spec/SKILL.md:31 — defined here
- `Implementation Decisions` — skills/engineering/to-spec/SKILL.md:43 — defined here
- `Testing Decisions` — skills/engineering/to-spec/SKILL.md:59 — defined here
- `Out of Scope` — skills/engineering/to-spec/SKILL.md:67 — defined here
- `Further Notes` — skills/engineering/to-spec/SKILL.md:71 — defined here

## Structure
- `## Process` — skills/engineering/to-spec/SKILL.md:11
- `## Problem Statement` — skills/engineering/to-spec/SKILL.md:23
- `## Solution` — skills/engineering/to-spec/SKILL.md:27
- `## User Stories` — skills/engineering/to-spec/SKILL.md:31
- `## Implementation Decisions` — skills/engineering/to-spec/SKILL.md:43
- `## Testing Decisions` — skills/engineering/to-spec/SKILL.md:59
- `## Out of Scope` — skills/engineering/to-spec/SKILL.md:67
- `## Further Notes` — skills/engineering/to-spec/SKILL.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strictly instructs: "Do NOT interview the user; just synthesize what you already know" (line 7), clearly separating the interview/grilling phase from spec synthesis.
- Discourages specific file paths and code snippets in the spec to avoid rapid obsolescence, with a single narrow exception for decision-rich prototype snippets (line 57).

## Context cost
3043 bytes (~760 tokens). Pure markdown skill specification.
