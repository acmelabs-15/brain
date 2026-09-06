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
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/grill-with-docs.md

## Purpose — required, verbatim
> "interviews you about a plan or design until you and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) share one understanding of it, and writes the vocabulary and the hard decisions into your repo while it does." — docs/engineering/grill-with-docs.md:3

## Design intent — required
Documentation describing the execution model, prerequisites, artifact outputs, and position of the `grill-with-docs` skill. It provides an interactive, single-session planning interview aimed at a codebase, interrogating a fuzzy plan or design until human and agent share an aligned understanding. Distinct from stateless alternatives, it is stateful: it persists settled vocabulary immediately into `CONTEXT.md` and hard decisions into ADRs under `docs/adr/`. It stands at the head of Matt's main build chain, feeding downstream specification (`to-spec`) without requiring re-interviewing.

## Phase — required
matt:main build chain

## Inputs — required
- User plan, architecture idea, or feature description.
- Existing codebase context and domain terminology.
- Existing `CONTEXT.md` glossary and ADRs in `docs/adr/`.

## Outputs — required
- Settled terms written immediately into `CONTEXT.md` at repo root (or per-context `CONTEXT.md` via `CONTEXT-MAP.md`).
- Hard decisions recorded as ADRs under `docs/adr/`.
- Aligned conversational context intended for handoff to `to-spec`.

## Invokes — required
- skill grill-me — docs/engineering/grill-with-docs.md:3
- skill wayfinder — docs/engineering/grill-with-docs.md:17
- skill to-questionnaire — docs/engineering/grill-with-docs.md:19
- skill grilling — docs/engineering/grill-with-docs.md:27
- skill domain-modeling — docs/engineering/grill-with-docs.md:27
- skill to-spec — docs/engineering/grill-with-docs.md:39
- skill improve-codebase-architecture — docs/engineering/grill-with-docs.md:58
- skill implement — docs/engineering/grill-with-docs.md:61
- skill to-tickets — docs/engineering/grill-with-docs.md:79
- skill code-review — docs/engineering/grill-with-docs.md:79
- skill ask-matt — docs/engineering/grill-with-docs.md:82

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grill-with-docs` — docs/engineering/grill-with-docs.md:3 — defined here
- `agent` — docs/engineering/grill-with-docs.md:3 — used here
- `interview` — docs/engineering/grill-with-docs.md:3 — defined here
- `grill-me` — docs/engineering/grill-with-docs.md:3 — used here
- `stateful` — docs/engineering/grill-with-docs.md:5 — defined here
- `session` — docs/engineering/grill-with-docs.md:5 — used here
- `ADR` — docs/engineering/grill-with-docs.md:5 — used here
- `wayfinder` — docs/engineering/grill-with-docs.md:17 — used here
- `to-questionnaire` — docs/engineering/grill-with-docs.md:19 — used here
- `CONTEXT-MAP.md` — docs/engineering/grill-with-docs.md:25 — used here
- `grilling` — docs/engineering/grill-with-docs.md:27 — used here
- `domain-modeling` — docs/engineering/grill-with-docs.md:27 — used here
- `spec` — docs/engineering/grill-with-docs.md:39 — used here
- `context window` — docs/engineering/grill-with-docs.md:39 — used here
- `to-spec` — docs/engineering/grill-with-docs.md:39 — used here
- `clearing` — docs/engineering/grill-with-docs.md:39 — used here
- `model` — docs/engineering/grill-with-docs.md:41 — used here
- `tickets` — docs/engineering/grill-with-docs.md:46 — used here
- `decision` — docs/engineering/grill-with-docs.md:46 — used here
- `effort` — docs/engineering/grill-with-docs.md:52 — used here
- `improve-codebase-architecture` — docs/engineering/grill-with-docs.md:58 — used here
- `implement` — docs/engineering/grill-with-docs.md:61 — used here
- `main build chain` — docs/engineering/grill-with-docs.md:76 — defined here
- `to-tickets` — docs/engineering/grill-with-docs.md:79 — used here
- `code-review` — docs/engineering/grill-with-docs.md:79 — used here
- `ask-matt` — docs/engineering/grill-with-docs.md:82 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- The paper trail
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/engineering/grill-with-docs.md:49 · Running inside an external orchestration layer silently omits file writing (CONTEXT.md and ADRs) while the interview still executes.
- other · docs/engineering/grill-with-docs.md:52 · Agents frequently fail to load dependencies grilling and domain-modeling, resulting in undifferentiated question dumping or a missing paper trail.
- other · docs/engineering/grill-with-docs.md:55 · Non-ADR decisions (ordering guarantees, negative requirements, defaults) exist only in conversational context and soften when handed downstream to specs.
- other · docs/engineering/grill-with-docs.md:60-61 · Open-ended session closing message leaves the user without an automated next-step directive.

## Observations
Acts as the head of the main build chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`). It is distinguished from `grill-me` (stateless interview without repo files) and `wayfinder` (multi-session planning producing an index map and decision tickets). Its implementation in `SKILL.md` delegates directly to `grilling` (interview logic) and `domain-modeling` (state persistence).

## Context cost
9922 bytes, ~2300 tokens. Loads no files directly; depends on `grilling` and `domain-modeling`.
