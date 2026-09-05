---
package: matt
path: docs/engineering/to-tickets.md
type: doc
bytes: 10724
unit: inv-matt-7
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/to-tickets.md

## Purpose — required, verbatim
> "`to-tickets` takes a plan, a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the conversation you are in, and breaks it into a set of **[tickets](https://www.aihero.dev/ai-coding-dictionary/ticket)** on your issue tracker. Each ticket declares its **blocking edges**: the other tickets that have to finish before it can start." — docs/engineering/to-tickets.md:3

## Design intent — required
Decomposes a multi-session spec, plan, or planning conversation into vertically sliced tracer-bullet tickets on an issue tracker, each sized to fit within a single fresh context window. Enforces dependency-ordered execution through explicit blocking edges, exposing a frontier of unblocked tickets that can be executed independently. Prevents horizontal layer-by-layer slicing failure modes by ensuring every ticket represents an end-to-end demonstrable behavior. Without it, multi-session builds would either be tackled monolithically (blowing context limits) or split into horizontal architectural layers that cannot be verified independently and cause massive rework loops.

## Phase — required
matt:main build chain

## Inputs — required
- A spec issue (`/to-tickets #<spec_issue>`), a written plan, or the current conversation thread.
- Configured issue tracker (GitHub, Linear, or local markdown under `.scratch/<feature>/issues/`) via `setup-matt-pocock-skills`.
- User interactive responses to the pre-publication quiz (validating ticket granularity, blocking edges, merges/splits).

## Outputs — required
- Numbered tracer-bullet tickets published on the tracker with explicit blocking edges, tagged with `ready-for-agent`.
- For local trackers: individual markdown files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md` in dependency order.
- Identified prefactoring work ordered ahead of feature tickets.

## Invokes — required
- skill implement — docs/engineering/to-tickets.md:15
- skill grill-with-docs — docs/engineering/to-tickets.md:16
- skill to-spec — docs/engineering/to-tickets.md:16
- skill wayfinder — docs/engineering/to-tickets.md:17
- skill triage — docs/engineering/to-tickets.md:19
- skill setup-matt-pocock-skills — docs/engineering/to-tickets.md:23
- skill tdd — docs/engineering/to-tickets.md:99
- skill code-review — docs/engineering/to-tickets.md:99
- skill ask-matt — docs/engineering/to-tickets.md:99

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:187

## Concepts named — required, verbatim
- `spec` — docs/engineering/to-tickets.md:3 — used here
- `tickets` — docs/engineering/to-tickets.md:3 — defined here
- `blocking edges` — docs/engineering/to-tickets.md:3 — defined here
- `tracer bullet` — docs/engineering/to-tickets.md:5 — defined here
- `context window` — docs/engineering/to-tickets.md:5 — used here
- `session` — docs/engineering/to-tickets.md:5 — used here
- `agent` — docs/engineering/to-tickets.md:9 — used here
- `agent-ready` — docs/engineering/to-tickets.md:19 — defined here
- `triage-label` — docs/engineering/to-tickets.md:23 — used here
- `horizontal` — docs/engineering/to-tickets.md:27 — defined here
- `vertical` — docs/engineering/to-tickets.md:27 — defined here
- `acceptance criteria` — docs/engineering/to-tickets.md:27 — used here
- `prefactoring` — docs/engineering/to-tickets.md:31 — defined here
- `frontier` — docs/engineering/to-tickets.md:40 — defined here
- `wide refactor` — docs/engineering/to-tickets.md:46 — defined here
- `blast radius` — docs/engineering/to-tickets.md:46 — defined here
- `expand–contract` — docs/engineering/to-tickets.md:48 — defined here
- `Expand` — docs/engineering/to-tickets.md:50 — defined here
- `Migrate` — docs/engineering/to-tickets.md:51 — defined here
- `Contract` — docs/engineering/to-tickets.md:52 — defined here
- `integration branch` — docs/engineering/to-tickets.md:54 — defined here
- `model` — docs/engineering/to-tickets.md:59 — used here
- `tool calls` — docs/engineering/to-tickets.md:74 — used here
- `clear` — docs/engineering/to-tickets.md:74 — used here
- `compact` — docs/engineering/to-tickets.md:74 — used here
- `main build chain` — docs/engineering/to-tickets.md:93 — used here

## Structure
- ## What it does — docs/engineering/to-tickets.md:1
- ## When to reach for it — docs/engineering/to-tickets.md:7
- ## Prerequisites — docs/engineering/to-tickets.md:21
- ## Tracer bullets, not layers — docs/engineering/to-tickets.md:25
- ## Blocking edges — docs/engineering/to-tickets.md:33
- ## The wide-refactor exception — docs/engineering/to-tickets.md:44
- ## Common questions — docs/engineering/to-tickets.md:56
- ## It's working if — docs/engineering/to-tickets.md:82
- ## Where it fits — docs/engineering/to-tickets.md:91

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — docs/engineering/to-tickets.md:59 — Models tend toward over-decomposition into excessive atomic tickets for small changes, losing conceptual grouping.
- other — docs/engineering/to-tickets.md:61 — Models periodically revert to horizontal slicing (one ticket per architectural layer) instead of vertical slicing unless steered during the quiz step.
- doc-drift — docs/engineering/to-tickets.md:65 — GitHub integration fails to create tickets as native sub-issues of the parent spec issue despite `gh` CLI v2.94+ support (issue #554).
- doc-drift — docs/engineering/to-tickets.md:68 — Blocking dependencies are written into issue body text rather than using native GitHub blocking relationships via `gh issue create --blocked-by` (issue #513).
- doc-drift — docs/engineering/to-tickets.md:71 — Prior v1.1 implementation wrote tickets to a single shared `tickets.md` causing write races; fixed to individual files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md`.
- other — docs/engineering/to-tickets.md:74 — Large spec issues cause truncation during re-fetching if the context window was cleared or compacted between `/to-spec` and `/to-tickets`.
- doc-drift — docs/engineering/to-tickets.md:77 — Acceptance criteria template lacks a falsifiability check, frequently generating criteria that are already green at the base commit or dependent on other tickets.
- doc-drift — docs/engineering/to-tickets.md:80 — No automated ticket dispatch exists, and `/implement` does not reliably close or check off completed tickets on GitHub or local markdown.

## Observations
Establishes the expand-migrate-contract pattern as the explicit exception to the vertical-slice tracer-bullet rule for wide refactors with large blast radiuses. Mandates an interactive quiz step prior to issue publishing to challenge granularity and blocking relationships. States that tickets output by `to-tickets` are agent-ready by construction and must not be fed into `triage`.

## Context cost
10724 bytes, approximately 2550 tokens.
