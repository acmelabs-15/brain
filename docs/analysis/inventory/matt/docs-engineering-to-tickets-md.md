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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/to-tickets.md

## Purpose — required, verbatim
> "`to-tickets` takes a plan, a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), or the conversation you are in, and breaks it into a set of **[tickets](https://www.aihero.dev/ai-coding-dictionary/ticket)** on your issue tracker. Each ticket declares its **blocking edges**: the other tickets that have to finish before it can start." — docs/engineering/to-tickets.md:3

## Design intent — required
Decomposes a spec, plan, or conversation into discrete, dependency-linked implementation tickets sized for a single fresh context window. Enforces vertical slicing (tracer bullets) across all architectural layers (schema, API, UI, tests) so every ticket yields a demonstrable behavior, forbidding horizontal layer-by-layer slicing. Orders prefactoring first and models wide, high-blast-radius refactors as expand-migrate-contract sequences to preserve continuous integration greenness. Quizzes the user on ticket granularity and blocking edges before publishing to GitHub, Linear, or local markdown files.

## Phase — required
matt:engineering

## Inputs — required
A specification issue (`/to-tickets #<spec_issue>`), a cleared wayfinder map collapsed into a spec, active conversation context, and tracker configuration from `setup-matt-pocock-skills`.

## Outputs — required
Published dependency-linked tickets with native blocking relationships and parent-issue links on the issue tracker, or individual markdown ticket files under `.scratch/<feature-slug>/issues/<NN>-<slug>.md` ordered blockers-first.

## Invokes — required
- doc implement — docs/engineering/to-tickets.md:15
- doc grill-with-docs — docs/engineering/to-tickets.md:16
- doc to-spec — docs/engineering/to-tickets.md:16
- doc wayfinder — docs/engineering/to-tickets.md:17
- doc triage — docs/engineering/to-tickets.md:19
- doc setup-matt-pocock-skills — docs/engineering/to-tickets.md:23
- doc tdd — docs/engineering/to-tickets.md:99
- doc code-review — docs/engineering/to-tickets.md:99
- doc ask-matt — docs/engineering/to-tickets.md:99

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:187

## Concepts named — required, verbatim
- `to-tickets` — docs/engineering/to-tickets.md:3 — defined here
- `spec` — docs/engineering/to-tickets.md:3 — used here
- `tickets` — docs/engineering/to-tickets.md:3 — used here
- `blocking edges` — docs/engineering/to-tickets.md:3 — defined here
- `tracer bullet` — docs/engineering/to-tickets.md:5 — defined here
- `context window` — docs/engineering/to-tickets.md:5 — used here
- `session` — docs/engineering/to-tickets.md:5 — used here
- `agent` — docs/engineering/to-tickets.md:9 — used here
- `Horizontal` — docs/engineering/to-tickets.md:27 — defined here
- `Vertical` — docs/engineering/to-tickets.md:27 — defined here
- `frontier` — docs/engineering/to-tickets.md:40 — defined here
- `wide refactor` — docs/engineering/to-tickets.md:46 — defined here
- `blast radius` — docs/engineering/to-tickets.md:46 — defined here
- `expand–contract` — docs/engineering/to-tickets.md:48 — defined here
- `Expand` — docs/engineering/to-tickets.md:50 — defined here
- `Migrate` — docs/engineering/to-tickets.md:51 — defined here
- `Contract` — docs/engineering/to-tickets.md:52 — defined here
- `model` — docs/engineering/to-tickets.md:59 — used here
- `tool calls` — docs/engineering/to-tickets.md:74 — used here
- `clearing` — docs/engineering/to-tickets.md:74 — used here
- `compaction` — docs/engineering/to-tickets.md:74 — used here

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
- `script-bug` · docs/engineering/to-tickets.md:64-66 documents open issue #554 where tickets fail to link as native sub-issues of the parent spec issue via `gh issue create --parent`.
- `script-bug` · docs/engineering/to-tickets.md:67-69 documents open issue #513 where blocking relationships are emitted as markdown body text instead of native tracker blocking edges (`gh issue create --blocked-by`).
- `other` · docs/engineering/to-tickets.md:79-81 documents manual dispatch limitation where downstream `implement` runs do not reliably close or check off completed tickets on GitHub or local markdown.

## Observations
Warns that over-decomposition into microscopic atomic tickets is the primary model failure mode; the mandatory interactive quiz step enables users to request grouping before publishing. Establishes the rule that tickets published by `to-tickets` are agent-ready by construction and must never be routed through `triage`.

## Context cost
10724 bytes (~2680 tokens).
