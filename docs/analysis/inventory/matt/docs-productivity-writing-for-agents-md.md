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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/writing-for-agents.md

## Purpose — required, verbatim
> "`writing-for-agents` is the reference you write agent-facing documents against: a skill, an `AGENTS.md` / `CLAUDE.md`, a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), a runtime prompt, a README, any doc an [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reads. The packaging differs; the writing does not: the same levers make each one predictable, so the agent takes the same *process* every run rather than producing the same output." — docs/productivity/writing-for-agents.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-writing-for-agents`) for the foundational `writing-for-agents` authoring reference (formerly `writing-great-skills`). Establishes the governing principles for creating and maintaining documents consumed by agents (skills, `AGENTS.md`, `CLAUDE.md`, specs, tickets, prompts). Formulates the trade-off between context load (always-in-window token cost) and cognitive load (human indexing effort), introducing key authoring levers: context pointers, information hierarchy / progressive disclosure, behavioral completion criteria (preventing premature completion), pre-trained leading words, and ruthless pruning via the no-op test to eliminate duplication, sediment, and sprawl.

## Phase — required
cross-phase

## Inputs — required
User invocation via `/writing-for-agents` or model invocation when creating/editing skills or `AGENTS.md` / `CLAUDE.md`; any draft or existing agent-facing document (skills, specs, tickets, prompts, READMEs); and the linked `SKILL-MECHANICS.md` for skill-specific rules.

## Outputs — required
Pruned, predictable agent-facing documents with minimized context load, clear completion criteria, leading words, and progressive disclosure via context pointers.

## Invokes — required
- reference SKILL-MECHANICS.md — docs/productivity/writing-for-agents.md:7
- skill grill-with-docs — docs/productivity/writing-for-agents.md:13
- skill ask-matt — docs/productivity/writing-for-agents.md:70

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `writing-for-agents` — docs/productivity/writing-for-agents.md:3 — defined here
- `AGENTS.md` — docs/productivity/writing-for-agents.md:3 — used here
- `CLAUDE.md` — docs/productivity/writing-for-agents.md:3 — used here
- `spec` — docs/productivity/writing-for-agents.md:3 — used here
- `agent` — docs/productivity/writing-for-agents.md:3 — used here
- `no-op` — docs/productivity/writing-for-agents.md:5 — defined here
- `context` — docs/productivity/writing-for-agents.md:5 — used here
- `model` — docs/productivity/writing-for-agents.md:5 — used here
- `writing-great-skills` — docs/productivity/writing-for-agents.md:7 — defined here
- `SKILL-MECHANICS.md` — docs/productivity/writing-for-agents.md:7 — used here
- `ticket` — docs/productivity/writing-for-agents.md:13 — used here
- `AFK` — docs/productivity/writing-for-agents.md:13 — used here
- `grill-with-docs` — docs/productivity/writing-for-agents.md:13 — used here
- `Context load` — docs/productivity/writing-for-agents.md:19 — defined here
- `turn` — docs/productivity/writing-for-agents.md:19 — used here
- `Cognitive load` — docs/productivity/writing-for-agents.md:20 — defined here
- `Context pointers` — docs/productivity/writing-for-agents.md:26 — defined here
- `Information hierarchy` — docs/productivity/writing-for-agents.md:27 — defined here
- `Progressive disclosure` — docs/productivity/writing-for-agents.md:27 — defined here
- `Completion criteria` — docs/productivity/writing-for-agents.md:28 — defined here
- `legwork` — docs/productivity/writing-for-agents.md:28 — defined here
- `premature completion` — docs/productivity/writing-for-agents.md:28 — defined here
- `Leading words` — docs/productivity/writing-for-agents.md:29 — defined here
- `Pruning` — docs/productivity/writing-for-agents.md:30 — defined here
- `duplication` — docs/productivity/writing-for-agents.md:30 — defined here
- `sediment` — docs/productivity/writing-for-agents.md:30 — defined here
- `sprawl` — docs/productivity/writing-for-agents.md:30 — defined here
- `session` — docs/productivity/writing-for-agents.md:50 — used here
- `tokens` — docs/productivity/writing-for-agents.md:59 — used here
- `reach-for-it-anytime standalone` — docs/productivity/writing-for-agents.md:70 — used here
- `CONTEXT.md` — docs/productivity/writing-for-agents.md:70 — used here
- `ask-matt` — docs/productivity/writing-for-agents.md:70 — used here

## Structure
- What it does — docs/productivity/writing-for-agents.md:1
- When to reach for it — docs/productivity/writing-for-agents.md:9
- The two loads — docs/productivity/writing-for-agents.md:15
- The levers — docs/productivity/writing-for-agents.md:24
- Common questions — docs/productivity/writing-for-agents.md:32
- It's working if — docs/productivity/writing-for-agents.md:61
- Where it fits — docs/productivity/writing-for-agents.md:68

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the fundamental tension in coding agent systems between context load (tokens consumed in the model's active window unconditionally) and cognitive load (human memory and indexing overhead). Recommends progressive disclosure: placing detailed procedures behind context pointers so they are pulled only when needed. Formalizes the no-op test as a strictly behavioral deletion criterion: if removing a line does not change the agent's behavior during execution, the line is dead weight and must be deleted rather than polished. Explains why automated evals fail for agent documentation, relying instead on manual testing and a specific vocabulary of failure modes.

## Context cost
7784 bytes, approximately 1850 tokens. Discloses skill-specific mechanics to `SKILL-MECHANICS.md` (3047 bytes).
