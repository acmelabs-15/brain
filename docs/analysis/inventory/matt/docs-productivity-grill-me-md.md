---
package: matt
path: docs/productivity/grill-me.md
type: doc
bytes: 6489
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/productivity/grill-me.md

## Purpose — required, verbatim
> "`grill-me` takes a **loose idea** and interviews you until you can commit to it." — docs/productivity/grill-me.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-grill-me` and `docs/productivity/grill-me.md`) for the user-invoked `grill-me` productivity skill. Describes a stateless, conversational interview designed to take vague, unstructured ideas (software, business, writing, or life decisions) and stress-test them into concrete commitments. By operating in question rounds corresponding to the frontier of already-settled decisions, it prevents circular or premature inquiry while leaving no files or workspace sediment behind.

## Phase — required
matt:Productivity

## Inputs — required
- User invocation via `/grill-me` in a fresh conversation (with plan mode explicitly disabled).
- Unstructured loose idea provided by the user.
- User steering, pushback, and numbered answers to round-based questions.

## Outputs — required
none

## Invokes — required
- skill grill-with-docs — docs/productivity/grill-me.md:16
- skill wayfinder — docs/productivity/grill-me.md:17
- skill prototype — docs/productivity/grill-me.md:35
- skill to-spec — docs/productivity/grill-me.md:65
- skill grilling — docs/productivity/grill-me.md:74
- skill ask-matt — docs/productivity/grill-me.md:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grill-me` — docs/productivity/grill-me.md:3 — defined here
- `loose idea` — docs/productivity/grill-me.md:3 — defined here
- `session` — docs/productivity/grill-me.md:3 — used here
- `rounds` — docs/productivity/grill-me.md:3 — defined here
- `frontier` — docs/productivity/grill-me.md:3 — defined here
- `stateless` — docs/productivity/grill-me.md:5 — defined here
- `agent` — docs/productivity/grill-me.md:9 — used here
- `grill-with-docs` — docs/productivity/grill-me.md:16 — used here
- `stateful` — docs/productivity/grill-me.md:16 — defined here
- `CONTEXT.md` — docs/productivity/grill-me.md:16 — used here
- `ADRs` — docs/productivity/grill-me.md:16 — used here
- `wayfinder` — docs/productivity/grill-me.md:17 — used here
- `plan mode` — docs/productivity/grill-me.md:19 — used here
- `passivity` — docs/productivity/grill-me.md:25 — defined here
- `ungrillable` — docs/productivity/grill-me.md:35 — defined here
- `prototype` — docs/productivity/grill-me.md:35 — used here
- `dumb zone` — docs/productivity/grill-me.md:52 — used here
- `context window` — docs/productivity/grill-me.md:52 — used here
- `context` — docs/productivity/grill-me.md:65 — used here
- `to-spec` — docs/productivity/grill-me.md:65 — used here
- `model` — docs/productivity/grill-me.md:68 — used here
- `grilling` — docs/productivity/grill-me.md:74 — used here
- `ask-matt` — docs/productivity/grill-me.md:76 — used here

## Structure
- What it does — docs/productivity/grill-me.md:1
- When to reach for it — docs/productivity/grill-me.md:7
- It's a conversation, not an interview — docs/productivity/grill-me.md:21
- Grillable and ungrillable — docs/productivity/grill-me.md:31
- It's working if — docs/productivity/grill-me.md:39
- Common questions — docs/productivity/grill-me.md:46
- Where it fits — docs/productivity/grill-me.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts user passivity ("agreed, agreed, agreed" nodding) with active human steering, identifying that unearned certainty from passive agreement is the primary failure mode of AI-assisted planning. Highlights the boundary between grillable conceptual questions and "ungrillable" aesthetic or tactile questions (e.g. form layout, interaction feel), prescribing throwaway spikes via `prototype` rather than prolonged discursive guessing. Documents the context degradation risk ("dumb zone") when sessions exceed reasonable lengths (e.g., 200 questions).

## Context cost
6489 bytes, approximately 1500 tokens. Standalone doc; loads no secondary references.
