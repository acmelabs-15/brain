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
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/grill-me.md

## Purpose — required, verbatim
> "`grill-me` takes a **loose idea** and interviews you until you can commit to it. You do not need a worked-out plan to start: producing one is what the [session](https://www.aihero.dev/ai-coding-dictionary/session) is for. It asks in **rounds**: each round is the whole **frontier** (every question whose prerequisites you have already settled), so you are never asked something that hinges on an answer it hasn't heard yet." — docs/productivity/grill-me.md:3

## Design intent — required
Provides a stateless, repository-independent interview tool that interrogates and sharpens unformed, ambiguous ideas across any domain (software, product, business strategy, prose) through batched frontier rounds. Enforces active human steering and surfaces hidden assumptions while leaving zero workspace residue, preventing passive nod-along sessions that create unearned confidence.

## Phase — required
matt:productivity

## Inputs — required
User's unrefined idea or direction, and responses to iterative question rounds in an interactive conversational session.

## Outputs — required
none

## Invokes — required
- doc grill-with-docs — docs/productivity/grill-me.md:16
- doc wayfinder — docs/productivity/grill-me.md:17
- doc prototype — docs/productivity/grill-me.md:35
- doc to-spec — docs/productivity/grill-me.md:65
- doc grilling — docs/productivity/grill-me.md:74
- doc ask-matt — docs/productivity/grill-me.md:76

## Invoked by — required
- doc grill-me — docs/productivity/grilling.md:15
- doc grill-me — docs/productivity/teach.md:18
- doc grill-me — docs/productivity/to-questionnaire.md:15

## Concepts named — required, verbatim
- `loose idea` — docs/productivity/grill-me.md:3 — defined here
- `session` — docs/productivity/grill-me.md:3 — used here
- `rounds` — docs/productivity/grill-me.md:3 — defined here
- `frontier` — docs/productivity/grill-me.md:3 — defined here
- `stateless` — docs/productivity/grill-me.md:5 — defined here
- `agent` — docs/productivity/grill-me.md:9 — used here
- `stateful` — docs/productivity/grill-me.md:16 — used here
- `plan mode` — docs/productivity/grill-me.md:19 — used here
- `passivity` — docs/productivity/grill-me.md:25 — defined here
- `ungrillable` — docs/productivity/grill-me.md:35 — defined here
- `dumb zone` — docs/productivity/grill-me.md:52 — used here
- `context window` — docs/productivity/grill-me.md:52 — used here
- `context` — docs/productivity/grill-me.md:65 — used here
- `model` — docs/productivity/grill-me.md:68 — used here
- `grilling` — docs/productivity/grill-me.md:74 — used here

## Structure
- ## What it does — docs/productivity/grill-me.md:1
- ## When to reach for it — docs/productivity/grill-me.md:7
- ## It's a conversation, not an interview — docs/productivity/grill-me.md:21
- ## Grillable and ungrillable — docs/productivity/grill-me.md:31
- ## It's working if — docs/productivity/grill-me.md:39
- ## Common questions — docs/productivity/grill-me.md:46
- ## Where it fits — docs/productivity/grill-me.md:70

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly identifies "passivity" as the primary failure mode of AI-assisted planning: nodding along to forty agreeable questions generates false certainty. Distinguishes grillable questions (solvable by talking and reasoning) from ungrillable questions (interaction feel, visual aesthetics) which require throwaway prototyping via `prototype` before returning to the conversation.

## Context cost
6489 bytes (~1620 tokens).
