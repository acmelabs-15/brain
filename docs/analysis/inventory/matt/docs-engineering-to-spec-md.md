---
package: matt
path: docs/engineering/to-spec.md
type: doc
bytes: 8790
unit: inv-matt-7
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/to-spec.md, sha256: 47dbcde3e8ba381dc6650206bf36c64336c91f2d9de86ab1898355155081fe5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/to-spec.md

## Purpose — required, verbatim
> "`to-spec` turns the conversation you have just had into a **[spec](https://www.aihero.dev/ai-coding-dictionary/spec)**, and publishes it to your issue tracker as a single issue." — docs/engineering/to-spec.md:3

## Design intent — required
Synthesizes a completed discussion, codebase conventions, and architectural context into a durable, self-contained specification published as a single issue on the configured tracker. Explicitly avoids interviewing or making fresh decisions, capturing settled agreements so multi-session builds survive context window boundaries. Crucially agrees on and sketches high-level public testing seams prior to writing prose, passing those seams downstream to `tdd` (for implementation) and `code-review` (for verification). Serves as a disposable milestone artifact that feeds `to-tickets` before shipping.

## Phase — required
matt:engineering

## Inputs — required
Active conversation history (grilling session, settled design debate), repository codebase, `CONTEXT.md` / ADRs, or a cleared wayfinder map issue (`/to-spec #<map_issue>`).

## Outputs — required
A single published issue on the configured issue tracker (or local markdown under `.scratch/`) containing the comprehensive feature specification, pre-agreed testing seams, and out-of-scope boundaries.

## Invokes — required
- doc grill-with-docs — docs/engineering/to-spec.md:15
- doc implement — docs/engineering/to-spec.md:16
- doc to-tickets — docs/engineering/to-spec.md:17
- doc wayfinder — docs/engineering/to-spec.md:18
- doc setup-matt-pocock-skills — docs/engineering/to-spec.md:22
- doc tdd — docs/engineering/to-spec.md:34
- doc code-review — docs/engineering/to-spec.md:34
- doc ask-matt — docs/engineering/to-spec.md:81

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:187

## Concepts named — required, verbatim
- `to-spec` — docs/engineering/to-spec.md:3 — defined here
- `spec` — docs/engineering/to-spec.md:3 — used here
- `agent` — docs/engineering/to-spec.md:9 — used here
- `session` — docs/engineering/to-spec.md:11 — used here
- `context window` — docs/engineering/to-spec.md:16 — used here
- `grilling` — docs/engineering/to-spec.md:26 — used here
- `seams` — docs/engineering/to-spec.md:32 — defined here
- `tickets` — docs/engineering/to-spec.md:39 — used here
- `ready-for-agent` — docs/engineering/to-spec.md:41 — used here
- `AFK` — docs/engineering/to-spec.md:42 — used here
- `model` — docs/engineering/to-spec.md:45 — used here
- `clear` — docs/engineering/to-spec.md:63 — used here
- `compact` — docs/engineering/to-spec.md:63 — used here

## Structure
- ## What it does — docs/engineering/to-spec.md:1
- ## When to reach for it — docs/engineering/to-spec.md:7
- ## Prerequisites — docs/engineering/to-spec.md:20
- ## The spec is a decision record — docs/engineering/to-spec.md:24
- ## Seams before prose — docs/engineering/to-spec.md:30
- ## Common questions — docs/engineering/to-spec.md:36
- ## It's working if — docs/engineering/to-spec.md:65
- ## Where it fits — docs/engineering/to-spec.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/to-spec.md:41-43 documents label ambiguity where applying `ready-for-agent` to parent specs causes autonomous AFK agents to attempt implementing the whole spec at once rather than sliced tickets.
- `other` · docs/engineering/to-spec.md:59-61 documents lack of issue tracker search or ADR cross-linking before drafting specs, risking unnoticed duplicate work.

## Observations
Formerly named `/to-prd` prior to v1.1. Establishes the distinction between the spec (durable destination and decisions) and tickets (disposable execution slices). Notes that for single-session changes that fit within one context window, `to-spec` and `to-tickets` should be skipped entirely in favor of moving directly from grilling to `/implement`.

## Context cost
8790 bytes (~2200 tokens).
