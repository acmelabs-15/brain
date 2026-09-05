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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/grill-with-docs.md

## Purpose — required, verbatim
> "`grill-with-docs` interviews you about a plan or design until you and the [agent](https://www.aihero.dev/ai-coding-dictionary/agent) share one understanding of it, and writes the vocabulary and the hard decisions into your repo while it does." — docs/engineering/grill-with-docs.md:3

## Design intent — required
Human-facing documentation and operational guide for `grill-with-docs`, the stateful single-session interrogation skill positioned at the head of matt's primary build chain. It explains how the skill combines the conversational questioning of `grilling` with the file persistence of `domain-modeling` to anchor terms in `CONTEXT.md` and decisions in ADRs. Without this guide, users would expect `grill-with-docs` to persist full specifications or tickets, struggle when unwritten decisions remain only in conversation, or fail to debug missing dependency loads between `grilling` and `domain-modeling`.

## Phase — required
none

## Inputs — required
A repository codebase, user-provided plan, design concept, or brownfield codebase lacking documentation. Consumes existing `CONTEXT.md`, `CONTEXT-MAP.md`, and `docs/adr/`.

## Outputs — required
Settled domain vocabulary persisted in `CONTEXT.md` (or per-context `CONTEXT.md`), Architecture Decision Records in `docs/adr/`, and agreed conversation context ready for downstream specification.

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
- `agent` — docs/engineering/grill-with-docs.md:3 — used here
- `stateful` — docs/engineering/grill-with-docs.md:5 — defined here
- `session` — docs/engineering/grill-with-docs.md:5 — used here
- `CONTEXT.md` — docs/engineering/grill-with-docs.md:5 — used here
- `ADR` — docs/engineering/grill-with-docs.md:5 — used here
- `CONTEXT-MAP.md` — docs/engineering/grill-with-docs.md:25 — used here
- `spec` — docs/engineering/grill-with-docs.md:39 — used here
- `context window` — docs/engineering/grill-with-docs.md:39 — used here
- `clearing` — docs/engineering/grill-with-docs.md:39 — used here
- `domain language` — docs/engineering/grill-with-docs.md:41 — defined here
- `tickets` — docs/engineering/grill-with-docs.md:46 — used here
- `effort` — docs/engineering/grill-with-docs.md:52 — used here
- `build chain` — docs/engineering/grill-with-docs.md:76 — defined here

## Structure
- What it does — docs/engineering/grill-with-docs.md:1
- When to reach for it — docs/engineering/grill-with-docs.md:7
- Prerequisites — docs/engineering/grill-with-docs.md:23
- The paper trail — docs/engineering/grill-with-docs.md:29
- Common questions — docs/engineering/grill-with-docs.md:43
- It's working if — docs/engineering/grill-with-docs.md:66
- Where it fits — docs/engineering/grill-with-docs.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
`grill-with-docs` acts as the head of matt's primary build sequence (`grill-with-docs → to-spec → to-tickets → implement → code-review`, line 79). Its `SKILL.md` is a one-line delegation to `grilling` and `domain-modeling`, and docs document that partial or failed loading of either dependency causes silent degradation (either an unstructured question dump or missing file persistence, line 52). Only vocabulary (`CONTEXT.md`) and high-threshold architectural decisions (`docs/adr/`) land on disk; all other decisions remain in conversation memory and must be handed immediately to `to-spec` before clearing context (line 39, line 55).

## Context cost
9922 bytes, ~2300 tokens.
