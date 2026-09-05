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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/grill-me.md

## Purpose — required, verbatim
> "`grill-me` takes a **loose idea** and interviews you until you can commit to it. You do not need a worked-out plan to start: producing one is what the [session](https://www.aihero.dev/ai-coding-dictionary/session) is for. It asks in **rounds**: each round is the whole **frontier** (every question whose prerequisites you have already settled), so you are never asked something that hinges on an answer it hasn't heard yet." — docs/productivity/grill-me.md:3

## Design intent — required
Documentation page for the user-invoked `grill-me` productivity skill published on aihero.dev. Explains the purpose of the stateless grilling interview: refining loose, uncommitted ideas into defended decisions through rounds of frontier questioning without creating files or requiring a repository. Warns against user passivity ("nodding along"), distinguishes grillable questions from ungrillable questions that require a fast prototype, and establishes the relationship to the underlying `grilling` primitive and stateful counterpart `grill-with-docs`.

## Phase — required
matt:productivity

## Inputs — required
Loose idea or rough concept provided by user in conversation; user responses to successive rounds of frontier questions.

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
- `rounds` — docs/productivity/grill-me.md:3 — defined here
- `frontier` — docs/productivity/grill-me.md:3 — defined here
- `stateless` — docs/productivity/grill-me.md:5 — defined here
- `fresh conversation` — docs/productivity/grill-me.md:9 — used here
- `stateful` — docs/productivity/grill-me.md:16 — used here
- `plan mode` — docs/productivity/grill-me.md:19 — used here
- `passivity` — docs/productivity/grill-me.md:25 — defined here
- `grillable` — docs/productivity/grill-me.md:31 — defined here
- `ungrillable` — docs/productivity/grill-me.md:35 — defined here
- `dumb zone` — docs/productivity/grill-me.md:52 — defined here
- `standalone you can run anywhere, on anything` — docs/productivity/grill-me.md:72 — defined here
- `primitive` — docs/productivity/grill-me.md:74 — defined here
- `user-invoked front door` — docs/productivity/grill-me.md:74 — defined here

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
Highlights user passivity as the primary failure mode ("Nothing was actually decided, and the result carries a certainty it hasn't earned." — docs/productivity/grill-me.md:25). Recommends breaking ungrillable design questions ("how should this interaction feel?") out of conversation by switching to `prototype`. Warns of long sessions entering the "dumb zone" as LLM context windows saturate.

## Context cost
6489 bytes, ~1500 tokens.
