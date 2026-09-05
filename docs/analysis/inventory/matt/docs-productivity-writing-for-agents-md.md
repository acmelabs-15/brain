---
package: matt
path: docs/productivity/writing-for-agents.md
type: doc
bytes: 7784
unit: inv-matt-9
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/writing-for-agents.md

## Purpose — required, verbatim
> "`writing-for-agents` is the reference you write agent-facing documents against: a skill, an `AGENTS.md` / `CLAUDE.md`, a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), a runtime prompt, a README, any doc an [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reads. The packaging differs; the writing does not: the same levers make each one predictable, so the agent takes the same *process* every run rather than producing the same output." — docs/productivity/writing-for-agents.md:3

## Design intent — required
Establishes the canonical style guide and structural reference for authoring text consumed by AI agents (`AGENTS.md`, `CLAUDE.md`, specs, tickets, skills, prompts). Balances the trade-off between model context load and human cognitive load, advocating aggressive deletion over explanation, the removal of non-behavioral no-ops, progressive disclosure via context pointers, leading words that trigger latent model pretraining, robust completion criteria, and pruning of duplication, sediment, and sprawl.

## Phase — required
matt:productivity

## Inputs — required
Agent-facing documentation, specs, tickets, system prompts, or skill files being authored or refined.

## Outputs — required
Pruned, predictable agent-facing instructions governed by context-load and cognitive-load principles.

## Invokes — required
- doc grill-with-docs — docs/productivity/writing-for-agents.md:13
- doc ask-matt — docs/productivity/writing-for-agents.md:70

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec` — docs/productivity/writing-for-agents.md:3 — used here
- `agent` — docs/productivity/writing-for-agents.md:3 — used here
- `writing-for-agents` — docs/productivity/writing-for-agents.md:3 — defined here
- `model` — docs/productivity/writing-for-agents.md:5 — used here
- `no-op` — docs/productivity/writing-for-agents.md:5 — defined here
- `context` — docs/productivity/writing-for-agents.md:5 — used here
- `tickets` — docs/productivity/writing-for-agents.md:13 — used here
- `AFK` — docs/productivity/writing-for-agents.md:13 — used here
- `Context load` — docs/productivity/writing-for-agents.md:19 — defined here
- `turn` — docs/productivity/writing-for-agents.md:19 — used here
- `Cognitive load` — docs/productivity/writing-for-agents.md:20 — defined here
- `Context pointers` — docs/productivity/writing-for-agents.md:26 — defined here
- `Progressive disclosure` — docs/productivity/writing-for-agents.md:27 — defined here
- `completion criteria` — docs/productivity/writing-for-agents.md:28 — defined here
- `legwork` — docs/productivity/writing-for-agents.md:28 — defined here
- `premature completion` — docs/productivity/writing-for-agents.md:28 — defined here
- `Leading words` — docs/productivity/writing-for-agents.md:29 — defined here
- `Pruning` — docs/productivity/writing-for-agents.md:30 — defined here
- `duplication` — docs/productivity/writing-for-agents.md:30 — defined here
- `sediment` — docs/productivity/writing-for-agents.md:30 — defined here
- `sprawl` — docs/productivity/writing-for-agents.md:30 — defined here
- `session` — docs/productivity/writing-for-agents.md:50 — used here
- `tokens` — docs/productivity/writing-for-agents.md:59 — used here

## Structure
- ## What it does — docs/productivity/writing-for-agents.md:1
- ## When to reach for it — docs/productivity/writing-for-agents.md:9
- ## The two loads — docs/productivity/writing-for-agents.md:15
- ## The levers — docs/productivity/writing-for-agents.md:24
- ## Common questions — docs/productivity/writing-for-agents.md:32
- ## It's working if — docs/productivity/writing-for-agents.md:61
- ## Where it fits — docs/productivity/writing-for-agents.md:68

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/productivity/writing-for-agents.md:7 notes skill-only mechanics are disclosed to a linked `SKILL-MECHANICS.md`, which is located in the skill directory at `skills/productivity/writing-for-agents/SKILL-MECHANICS.md` rather than next to this documentation page.

## Observations
Treats human authors as indexes managing cognitive load while treating LLMs as readers with vast pretraining who need precise constraints rather than explanatory handholding. Defines the "no-op test" (deleting a sentence and observing if model behavior changes) as the primary empirical standard for instruction pruning.

## Context cost
7784 bytes (~1946 tokens).
