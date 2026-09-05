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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/ask-matt.md

## Purpose — required, verbatim
> "`ask-matt` is the router over the skills in this repo. You describe the situation you are in (an idea you cannot start, a pile of incoming bug reports, a [session](https://www.aihero.dev/ai-coding-dictionary/session) that has run long), and it names the skill or the sequence of skills that fits, plus where the human decisions in that sequence sit." — docs/engineering/ask-matt.md:3

## Design intent — required
Interactive routing layer over the `mattpocock/skills` repository that maps user situations to structured skill sequences ("flows") rather than isolated keyword matches. Distinguishes four routing topologies (the main idea-to-ship flow, situational on-ramps, standalone tools, and the underlying vocabulary layer) and enforces clear decision heuristics at phase boundaries (`continue`, `/clear`, `/handoff`, `subagent`, `/compact`). Without this router, users face cognitive overload selecting from 20+ skills, fail to recognize necessary prerequisites, and mishandle context lifecycle across multi-session builds.

## Phase — required
cross-phase

## Inputs — required
User-provided natural language descriptions of their current task, dilemma, or project state (e.g., an unformed idea, incoming bug reports, interchangeable skills, or an expiring context window).

## Outputs — required
Actionable recommendations naming the next skill command to execute, recommended sequences/flows, and guidance on where human decision points, branching, and context management actions should occur. Produces no persistent code or specification files directly.

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
- skill grilling — docs/engineering/ask-matt.md:52
- skill resolving-merge-conflicts — docs/engineering/ask-matt.md:52
- config .claude-plugin/plugin.json — docs/engineering/ask-matt.md:56
- doc CLAUDE.md — docs/engineering/ask-matt.md:72
- doc AGENTS.md — docs/engineering/ask-matt.md:72
- skill writing-for-agents — docs/engineering/ask-matt.md:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ask-matt` — docs/engineering/ask-matt.md:3 — defined here
- `session` — docs/engineering/ask-matt.md:3 — used here
- `spec` — docs/engineering/ask-matt.md:5 — used here
- `triage` — docs/engineering/ask-matt.md:14 — used here
- `tickets` — docs/engineering/ask-matt.md:14 — used here
- `grill-me` — docs/engineering/ask-matt.md:15 — used here
- `grill-with-docs` — docs/engineering/ask-matt.md:15 — used here
- `wayfinder` — docs/engineering/ask-matt.md:15 — used here
- `context` — docs/engineering/ask-matt.md:16 — used here
- `setup-matt-pocock-skills` — docs/engineering/ask-matt.md:23 — used here
- `to-spec` — docs/engineering/ask-matt.md:23 — used here
- `to-tickets` — docs/engineering/ask-matt.md:23 — used here
- `implement` — docs/engineering/ask-matt.md:23 — used here
- `flow` — docs/engineering/ask-matt.md:27 — defined here
- `main flow` — docs/engineering/ask-matt.md:29 — defined here
- `prototype` — docs/engineering/ask-matt.md:29 — used here
- `On-ramps` — docs/engineering/ask-matt.md:30 — defined here
- `Standalones` — docs/engineering/ask-matt.md:31 — defined here
- `vocabulary layer` — docs/engineering/ask-matt.md:32 — defined here
- `phase boundary` — docs/engineering/ask-matt.md:34 — defined here
- `phase` — docs/engineering/ask-matt.md:36 — defined here
- `grilling` — docs/engineering/ask-matt.md:36 — used here
- `subagents` — docs/engineering/ask-matt.md:36 — used here
- `smart zone` — docs/engineering/ask-matt.md:40 — used here
- `primary source` — docs/engineering/ask-matt.md:40 — used here
- `handoff` — docs/engineering/ask-matt.md:42 — used here
- `harness` — docs/engineering/ask-matt.md:42 — used here
- `away from the keyboard` — docs/engineering/ask-matt.md:43 — used here
- `code-review` — docs/engineering/ask-matt.md:52 — used here
- `resolving-merge-conflicts` — docs/engineering/ask-matt.md:52 — used here
- `disable-model-invocation` — docs/engineering/ask-matt.md:56 — used here
- `plan mode` — docs/engineering/ask-matt.md:60 — used here
- `model` — docs/engineering/ask-matt.md:60 — used here
- `writing-for-agents` — docs/engineering/ask-matt.md:76 — used here
- `standalone router` — docs/engineering/ask-matt.md:88 — defined here
- `secondary source` — docs/engineering/ask-matt.md:90 — defined here

## Structure
- What it does — docs/engineering/ask-matt.md:1
- When to reach for it — docs/engineering/ask-matt.md:7
- Prerequisites — docs/engineering/ask-matt.md:19
- Flows, not skills — docs/engineering/ask-matt.md:25
- The phase boundary — docs/engineering/ask-matt.md:34
- Common questions — docs/engineering/ask-matt.md:48
- It's working if — docs/engineering/ask-matt.md:78
- Where it fits — docs/engineering/ask-matt.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/ask-matt.md:52 — Router is manually maintained and lags repository updates, failing to route newly shipped skills such as `/grilling` and `/resolving-merge-conflicts` until updated.
- doc-drift — docs/engineering/ask-matt.md:56 — Thirteen of twenty-two skills set `disable-model-invocation: true`, which causes Claude Code to omit them from the context skill listing, leading the agent to falsely report installed skills as missing.
- doc-drift — docs/engineering/ask-matt.md:60 — Router generates recommendations from static one-line summaries rather than opening `SKILL.md` files, occasionally giving incorrect behavioral summaries (such as suggesting skipping `/to-spec`).

## Observations
Defines the authoritative decision tree for managing conversation context at phase boundaries: continue (if smart zone remains or verbatim context needed), `/clear` (if prior work disposable), `/handoff` (if migrating to a new harness/directory/colleague), `subagent` (if task is bounded and AFK-capable), and `/compact` as the final fallback. Clarifies that `ask-matt` is deliberately a secondary source over individual `SKILL.md` files and does not route over custom or third-party skills.

## Context cost
10723 bytes, ~2500 tokens. Standalone reference document.
