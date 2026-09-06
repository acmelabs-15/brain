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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/to-spec/SKILL.md

## Purpose — required, verbatim
> "This skill takes the current conversation context and codebase understanding and produces a spec. Do NOT interview the user; just synthesize what you already know." — skills/engineering/to-spec/SKILL.md:7

## Design intent — required
Synthesizes prior conversation context and repository exploration into a comprehensive specification document and publishes it as an issue to the project's issue tracker with the `ready-for-agent` triage label. Strictly forbids re-interviewing the user, acting purely as a compiler of already-discussed decisions. Mandates confirming testing seams with the user prior to publication, preferring existing and high-level seams, and requires adherence to project domain glossary vocabulary and ADRs while forbidding fragile file paths or code snippets in the spec unless derived from a prototype.

## Phase — required
cross-phase

## Inputs — required
Current conversation context, repository exploration findings, project domain glossary vocabulary (`CONTEXT.md`), existing ADRs, and issue tracker configuration from `/setup-matt-pocock-skills`.

## Outputs — required
Published specification issue on the configured tracker with `ready-for-agent` label, structured into Problem Statement, Solution, extensive numbered User Stories, Implementation Decisions, Testing Decisions, Out of Scope, and Further Notes.

## Invokes — required
- skill setup-matt-pocock-skills — skills/engineering/to-spec/SKILL.md:9

## Invoked by — required
- doc README.md — README.md:176
- doc README.md — README.md:199
- doc skills/engineering/README.md — skills/engineering/README.md:14
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:23
- doc docs/engineering/to-spec.md — docs/engineering/to-spec.md:3
- doc docs/engineering/to-tickets.md — docs/engineering/to-tickets.md:99
- doc docs/engineering/code-review.md — docs/engineering/code-review.md:88
- doc docs/engineering/grill-with-docs.md — docs/engineering/grill-with-docs.md:79

## Concepts named — required, verbatim
- `spec` — skills/engineering/to-spec/SKILL.md:3 — defined here
- `disable-model-invocation` — skills/engineering/to-spec/SKILL.md:4 — defined here
- `issue tracker` — skills/engineering/to-spec/SKILL.md:9 — used here
- `triage label` — skills/engineering/to-spec/SKILL.md:9 — used here
- `domain glossary` — skills/engineering/to-spec/SKILL.md:13 — used here
- `ADRs` — skills/engineering/to-spec/SKILL.md:13 — used here
- `seams` — skills/engineering/to-spec/SKILL.md:15 — used here
- `spec-template` — skills/engineering/to-spec/SKILL.md:21 — defined here
- `ready-for-agent` — skills/engineering/to-spec/SKILL.md:19 — used here
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
- missing-path — skills/engineering/to-spec/SKILL.md:9: Mentions `/setup-matt-pocock-skills` as a command to tell the user to run, but no command exists under `commands/` (it is a skill at `skills/engineering/setup-matt-pocock-skills/`).

## Observations
Enforces durability in specifications by deliberately excluding file paths and implementation code snippets (which rot quickly as codebases evolve). Permits code snippets exclusively when they originate from a throwaway prototype that settled a tricky state machine, reducer, schema, or type shape.

## Context cost
3043 bytes, 76 lines, approximately 750 tokens.
