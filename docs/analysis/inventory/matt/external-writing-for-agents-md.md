---
package: matt
path: external/writing-for-agents.md
type: doc
bytes: 345577
unit: inv-matt-34
deprecated: false
aliases: []
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/writing-for-agents.md

## Purpose — required, verbatim
> "How to write skills and other documents agents read." — external/writing-for-agents.md:24

## Design intent — required
Establishes the canonical style guide and structural reference for authoring text consumed by AI agents (`AGENTS.md`, `CLAUDE.md`, specs, tickets, skills, prompts). Balances the trade-off between model context load and human cognitive load, advocating aggressive deletion over explanation, the removal of non-behavioral no-ops, progressive disclosure via context pointers, leading words that trigger latent model pretraining, robust completion criteria, and pruning of duplication, sediment, and sprawl.

## Phase — required
matt:Productivity Skills

## Inputs — required
Agent-facing documentation, specs, tickets, system prompts, or skill files being authored or refined.

## Outputs — required
Pruned, predictable agent-facing instructions governed by context-load and cognitive-load principles.

## Invokes — required
- skill grill-with-docs — external/writing-for-agents.md:30
- skill ask-matt — external/writing-for-agents.md:73

## Invoked by — required
none

## Concepts named — required, verbatim
- `spec` — external/writing-for-agents.md:25 — used here
- `AGENTS.md` — external/writing-for-agents.md:25 — used here
- `CLAUDE.md` — external/writing-for-agents.md:25 — used here
- `writing-for-agents` — external/writing-for-agents.md:25 — defined here
- `agent` — external/writing-for-agents.md:25 — used here
- `no-op` — external/writing-for-agents.md:26 — defined here
- `writing-great-skills` — external/writing-for-agents.md:27 — defined here
- `model` — external/writing-for-agents.md:27 — used here
- `tickets` — external/writing-for-agents.md:30 — used here
- `AFK` — external/writing-for-agents.md:30 — used here
- `context load` — external/writing-for-agents.md:34 — defined here
- `turn` — external/writing-for-agents.md:34 — used here
- `context` — external/writing-for-agents.md:34 — used here
- `cognitive load` — external/writing-for-agents.md:35 — defined here
- `context pointers` — external/writing-for-agents.md:40 — defined here
- `progressive disclosure` — external/writing-for-agents.md:41 — defined here
- `completion criteria` — external/writing-for-agents.md:42 — defined here
- `legwork` — external/writing-for-agents.md:42 — defined here
- `premature completion` — external/writing-for-agents.md:42 — defined here
- `leading words` — external/writing-for-agents.md:43 — defined here
- `pruning` — external/writing-for-agents.md:44 — defined here
- `duplication` — external/writing-for-agents.md:44 — defined here
- `sediment` — external/writing-for-agents.md:44 — defined here
- `sprawl` — external/writing-for-agents.md:44 — defined here
- `session` — external/writing-for-agents.md:58 — used here
- `tokens` — external/writing-for-agents.md:64 — used here

## Structure
- # The /writing-for-agents Skill — external/writing-for-agents.md:24
- ## What it does — external/writing-for-agents.md:24
- ## When to reach for it — external/writing-for-agents.md:28
- ## The two loads — external/writing-for-agents.md:31
- ## The levers — external/writing-for-agents.md:38
- ## Common questions — external/writing-for-agents.md:46
- ## It's working if — external/writing-for-agents.md:65
- ## Where it fits — external/writing-for-agents.md:72
- ## You have the skill. Now build the workflow around it. — external/writing-for-agents.md:73
- ## Install the skills — external/writing-for-agents.md:73
- ## Related reading — external/writing-for-agents.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/writing-for-agents.md:27 notes skill-only mechanics are disclosed to a linked `SKILL-MECHANICS.md`, which is referenced without a link on the web page and located at `skills/writing-for-agents/SKILL-MECHANICS.md` in the repository.
- `doc-drift` · external/writing-for-agents.md:5 places writing-for-agents under section "Productivity Skills", whereas internal doc `docs/productivity/writing-for-agents.md:1` places it under "productivity".

## Observations
Treats human authors as indexes managing cognitive load while treating LLMs as readers with vast pretraining who need precise constraints rather than explanatory handholding. Defines the "no-op test" (deleting a sentence and observing if model behavior changes) as the primary empirical standard for instruction pruning.

## Context cost
345577 bytes, ~69000 tokens (HTML snapshot with inline hydration bundle).
