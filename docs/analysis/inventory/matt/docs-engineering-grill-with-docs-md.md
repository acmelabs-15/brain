---
package: matt
path: docs/engineering/grill-with-docs.md
type: doc
bytes: 9922
unit: inv-matt-5
deprecated: false
aliases: []

memo_inputs:
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/grill-with-docs.md

## Purpose — required, verbatim
> "`grill-with-docs` interviews you about a plan or design until you and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) share one understanding of it, and writes the vocabulary and the hard decisions into your repo while it does. It is the same interview [grill-me](https://aihero.dev/skills-grill-me) runs (a round of questions, then wait, then the next round), pointed at a codebase." — docs/engineering/grill-with-docs.md:3

## Design intent — required
Conducts an interactive, single-session Socratic interview at the head of the software build flow to forge a shared understanding between developer and agent before writing specifications. Unlike ephemeral grilling skills, it is stateful and produces concrete repo artifacts on disk: updating `CONTEXT.md` inline as domain terms resolve and recording qualifying architectural decisions under `docs/adr/`.

## Phase — required
cross-phase

## Inputs — required
Developer proposals or feature concepts, repository codebase context, existing `CONTEXT.md` glossary, and `docs/adr/` records.

## Outputs — required
Immediate updates to `CONTEXT.md` (or context-mapped `CONTEXT.md` file), qualifying ADRs in `docs/adr/`, and conversation consensus ready for `to-spec`.

## Invokes — required
- skill grill-me — docs/engineering/grill-with-docs.md:15
- skill wayfinder — docs/engineering/grill-with-docs.md:17
- skill to-questionnaire — docs/engineering/grill-with-docs.md:19
- skill grilling — docs/engineering/grill-with-docs.md:27
- skill domain-modeling — docs/engineering/grill-with-docs.md:27
- skill to-spec — docs/engineering/grill-with-docs.md:39
- skill improve-codebase-architecture — docs/engineering/grill-with-docs.md:58
- skill implement — docs/engineering/grill-with-docs.md:61
- skill ask-matt — docs/engineering/grill-with-docs.md:82

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `agent` — docs/engineering/grill-with-docs.md:3 — used here
- `stateful` — docs/engineering/grill-with-docs.md:5 — defined here
- `session` — docs/engineering/grill-with-docs.md:5 — used here
- `spec` — docs/engineering/grill-with-docs.md:39 — used here
- `context window` — docs/engineering/grill-with-docs.md:39 — used here
- `clearing` — docs/engineering/grill-with-docs.md:39 — used here
- `model` — docs/engineering/grill-with-docs.md:41 — used here
- `tickets` — docs/engineering/grill-with-docs.md:46 — used here
- `effort` — docs/engineering/grill-with-docs.md:52 — used here
- `build chain` — docs/engineering/grill-with-docs.md:76 — defined here

## Structure
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## The paper trail
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/grill-with-docs.md:27 Implementation is a one-line delegation that fails or degrades into an undifferentiated question dump if `grilling` or `domain-modeling` is missing.
- `other` · docs/engineering/grill-with-docs.md:49 Silent failure to persist `CONTEXT.md` and ADRs when executed within nested agent frameworks or orchestration wrappers.
- `other` · docs/engineering/grill-with-docs.md:54 Non-glossary and non-ADR decisions live solely in transient session context with no persistent ledger linking them to downstream tickets.

## Observations
Functions as the head of the main build flow. Clarifies that single-session planning uses `grill-with-docs`, whereas efforts spanning multiple sessions belong in `wayfinder`.

## Context cost
9,922 bytes (~2,480 tokens). Documentation page for `grill-with-docs` skill.
