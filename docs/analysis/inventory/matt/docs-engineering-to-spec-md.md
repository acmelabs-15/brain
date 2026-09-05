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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/to-spec.md

## Purpose — required, verbatim
> "`to-spec` turns the conversation you have just had into a **[spec](https://www.aihero.dev/ai-coding-dictionary/spec)**, and publishes it to your issue tracker as a single issue." — docs/engineering/to-spec.md:3

## Design intent — required
Synthesizes an already-settled planning conversation, codebase context, project glossary (`CONTEXT.md`), and ADRs into a durable, multi-session specification issue published to a tracker. Solves the problem of context window loss across large tasks by locking decisions, non-goals (out-of-scope), and testing seams before implementation begins. It deliberately avoids re-interviewing the user, acting as a pure synthesis and decision record rather than a decision-making tool. Without it, multi-session efforts would lose architectural decisions and agreed testing boundaries across session resets or context compaction, forcing repetitive re-explanation or risking implementation drift.

## Phase — required
matt:main build chain

## Inputs — required
- Current conversation or thread containing settled decisions from prior grilling.
- Codebase context, project glossary (`CONTEXT.md`), and relevant ADRs.
- Tracker configuration and triage-label vocabulary (`setup-matt-pocock-skills`, `docs/agents/triage-labels.md`).
- Optional map issue reference when invoked from a cleared wayfinder map (`/to-spec #<map_issue>`).

## Outputs — required
- A single spec issue published to the configured issue tracker (GitHub, Linear, or local markdown under `.scratch/`) labeled `ready-for-agent`.
- Pre-agreed candidate testing seams negotiated with the user prior to drafting prose.
- Explicit out-of-scope non-goals section.

## Invokes — required
- skill grill-with-docs — docs/engineering/to-spec.md:15
- skill implement — docs/engineering/to-spec.md:16
- skill to-tickets — docs/engineering/to-spec.md:17
- skill wayfinder — docs/engineering/to-spec.md:18
- skill setup-matt-pocock-skills — docs/engineering/to-spec.md:22
- skill tdd — docs/engineering/to-spec.md:34
- skill code-review — docs/engineering/to-spec.md:34
- skill ask-matt — docs/engineering/to-spec.md:81

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:187

## Concepts named — required, verbatim
- `spec` — docs/engineering/to-spec.md:3 — defined here
- `issue tracker` — docs/engineering/to-spec.md:3 — used here
- `CONTEXT.md` — docs/engineering/to-spec.md:5 — used here
- `ADRs` — docs/engineering/to-spec.md:5 — used here
- `agent` — docs/engineering/to-spec.md:9 — used here
- `session` — docs/engineering/to-spec.md:11 — used here
- `context window` — docs/engineering/to-spec.md:16 — used here
- `triage-label` — docs/engineering/to-spec.md:22 — used here
- `grilling` — docs/engineering/to-spec.md:26 — used here
- `seams` — docs/engineering/to-spec.md:32 — defined here
- `tickets` — docs/engineering/to-spec.md:39 — used here
- `to-prd` — docs/engineering/to-spec.md:39 — used here
- `ready-for-agent` — docs/engineering/to-spec.md:42 — used here
- `AFK` — docs/engineering/to-spec.md:42 — used here
- `model` — docs/engineering/to-spec.md:45 — used here
- `map` — docs/engineering/to-spec.md:48 — used here
- `user stories` — docs/engineering/to-spec.md:57 — used here
- `clear` — docs/engineering/to-spec.md:63 — used here
- `compact` — docs/engineering/to-spec.md:63 — used here
- `out-of-scope` — docs/engineering/to-spec.md:71 — used here
- `main build chain` — docs/engineering/to-spec.md:75 — defined here
- `tracer-bullet` — docs/engineering/to-spec.md:81 — used here

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
- doc-drift — docs/engineering/to-spec.md:42 — Spec issue is created with `ready-for-agent` label, which causes AFK agents polling for that label to prematurely attempt implementing the entire spec rather than waiting for ticket slices.
- doc-drift — docs/engineering/to-spec.md:57 — Spec template leans heavily on user stories, making it ill-suited for architectural refactorings or module boundary adjustments.
- missing-path — docs/engineering/to-spec.md:60 — Skill does not link referenced ADRs or search the tracker for overlapping issues before drafting, risking duplication.
- other — docs/engineering/to-spec.md:63 — Very large specs can exceed issue tracker payload limits, causing `/to-tickets` truncation errors if context was cleared or compacted.

## Observations
Documents the spec as an ephemeral snapshot and decision record designed specifically to survive context window limits. Emphasizes that testing seams must be negotiated before writing prose, with the target of having as few seams as possible (ideally one). Highlights that specs should not be maintained or updated once implementation starts—durable knowledge belongs in `CONTEXT.md` and ADRs. Documents that `/to-spec` replaced `/to-prd` in v1.1 to unify terminology around "spec" and "tickets".

## Context cost
8790 bytes, approximately 2100 tokens.
