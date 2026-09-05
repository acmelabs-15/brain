---
package: matt
path: docs/engineering/ask-matt.md
type: doc
bytes: 10723
unit: inv-matt-4
deprecated: false
aliases: []

memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/ask-matt.md

## Purpose — required, verbatim
> "`ask-matt` is the router over the skills in this repo. You describe the situation you are in (an idea you cannot start, a pile of incoming bug reports, a [session](https://www.aihero.dev/ai-coding-dictionary/session) that has run long), and it names the skill or the sequence of skills that fits, plus where the human decisions in that sequence sit." — docs/engineering/ask-matt.md:3

## Design intent — required
Provides situational guidance across Matt Pocock's skills catalog by framing engineering activities as "flows" (multi-step paths with branches and decision points) rather than isolated keyword-matched commands. By recommending the next command to type and stopping immediately without taking action or executing skills itself, it preserves human agency and enforces deliberate context boundary management across phases.

## Phase — required
cross-phase

## Inputs — required
User description of their development situation (such as starting an idea, processing incoming bug reports, resolving interchangeable skills, or managing session context) provided to the `/ask-matt` invocation.

## Outputs — required
Human-facing recommendations specifying the next skill or sequence of skills to execute, identifying where human decisions belong, and advising on context management options (`/clear`, `/compact`, `handoff`, subagent).

## Invokes — required
- skill triage — docs/engineering/ask-matt.md:14
- skill grill-me — docs/engineering/ask-matt.md:15
- skill grill-with-docs — docs/engineering/ask-matt.md:15
- skill wayfinder — docs/engineering/ask-matt.md:15
- skill setup-matt-pocock-skills — docs/engineering/ask-matt.md:23
- skill to-spec — docs/engineering/ask-matt.md:23
- skill to-tickets — docs/engineering/ask-matt.md:23
- skill implement — docs/engineering/ask-matt.md:23
- skill handoff — docs/engineering/ask-matt.md:42
- skill code-review — docs/engineering/ask-matt.md:52
- skill grilling — docs/engineering/ask-matt.md:56
- skill tdd — docs/engineering/ask-matt.md:56
- skill writing-for-agents — docs/engineering/ask-matt.md:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `router` — docs/engineering/ask-matt.md:3 — defined here
- `spec` — docs/engineering/ask-matt.md:5 — used here
- `tickets` — docs/engineering/ask-matt.md:14 — used here
- `context` — docs/engineering/ask-matt.md:16 — used here
- `flow` — docs/engineering/ask-matt.md:27 — defined here
- `main flow` — docs/engineering/ask-matt.md:29 — defined here
- `on-ramps` — docs/engineering/ask-matt.md:30 — defined here
- `standalones` — docs/engineering/ask-matt.md:31 — defined here
- `vocabulary layer` — docs/engineering/ask-matt.md:32 — defined here
- `phase boundary` — docs/engineering/ask-matt.md:36 — defined here
- `subagents` — docs/engineering/ask-matt.md:36 — used here
- `smart zone` — docs/engineering/ask-matt.md:40 — used here
- `primary source` — docs/engineering/ask-matt.md:40 — used here
- `harness` — docs/engineering/ask-matt.md:42 — used here
- `disable-model-invocation` — docs/engineering/ask-matt.md:56 — used here
- `plan mode` — docs/engineering/ask-matt.md:60 — used here
- `standalone router` — docs/engineering/ask-matt.md:88 — defined here
- `secondary source` — docs/engineering/ask-matt.md:90 — defined here

## Structure
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## Flows, not skills
- ## The phase boundary
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/engineering/ask-matt.md:52 Hand-maintained router lags repository releases; skills like `/grilling` and `/resolving-merge-conflicts` shipped well before inclusion in router maps.
- `other` · docs/engineering/ask-matt.md:56 Agent falsely reports promoted skills as missing because `disable-model-invocation: true` excludes them from the harness-injected skill list.
- `doc-drift` · docs/engineering/ask-matt.md:60 Router operates from internal one-line glosses rather than opening target `SKILL.md` files, generating inaccurate behavioral assertions.

## Observations
Defines an ordered decision tree for context handling at phase boundaries: Continue > `/clear` > `handoff` > Subagent > `/compact`. Clarifies that `/handoff` is specifically for environment portability rather than generic session bridging. Notes the outright retirement of four skills (`ubiquitous-language`, `design-an-interface`, `qa`, `request-refactor-plan`).

## Context cost
10,723 bytes (~2,680 tokens). Documentation page for `ask-matt` router skill.
