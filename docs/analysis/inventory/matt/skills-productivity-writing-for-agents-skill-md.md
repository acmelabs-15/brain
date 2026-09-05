---
package: matt
path: skills/productivity/writing-for-agents/SKILL.md
type: skill
bytes: 10886
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/writing-for-agents/SKILL.md

## Purpose — required, verbatim
> "Reference for writing any document an agent consumes: a skill, an `AGENTS.md` / `CLAUDE.md`, a doc reached by a pointer. The packaging differs; the writing does not: the same levers make each one predictable, since the agent takes the same _process_ every run rather than producing the same output." — skills/productivity/writing-for-agents/SKILL.md:6

## Design intent — required
Foundational authoring reference for writing documents consumed by AI coding agents (skills, `AGENTS.md`, `CLAUDE.md`, pointed-at reference documents). It shifts the optimization goal from output determinism to process predictability. Formulates the trade-off between context load (always-in-window token overhead) and cognitive load (human indexing effort), and establishes core authoring levers: context pointers, progressive disclosure across an information hierarchy, behavioral completion criteria to prevent premature completion, leading words to recruit pretrained model priors, and ruthless pruning via the no-op test to prevent sediment and sprawl.

## Phase — required
cross-phase

## Inputs — required
Invoked autonomously by agents when creating or editing skills or modifying `AGENTS.md` / `CLAUDE.md`, or by user invocation via `/writing-for-agents`. Reads drafts or existing agent-facing documents. Discloses skill-specific packaging to `SKILL-MECHANICS.md`.

## Outputs — required
Structured, pruned, predictable agent-facing documents with optimized context/cognitive load trade-offs, clear completion criteria, and progressive disclosure.

## Invokes — required
- reference SKILL-MECHANICS.md — skills/productivity/writing-for-agents/SKILL.md:8

## Invoked by — required
- doc README.md — README.md:231
- doc skills/productivity/README.md — skills/productivity/README.md:20
- reference SKILL-MECHANICS.md — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3
- skill retro — skills/in-progress/retro/SKILL.md:11
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:86
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:3
- doc CHANGELOG.md — CHANGELOG.md:88

## Concepts named — required, verbatim
- `writing-for-agents` — skills/productivity/writing-for-agents/SKILL.md:2 — defined here
- `AGENTS.md` — skills/productivity/writing-for-agents/SKILL.md:6 — used here
- `CLAUDE.md` — skills/productivity/writing-for-agents/SKILL.md:6 — used here
- `SKILL-MECHANICS.md` — skills/productivity/writing-for-agents/SKILL.md:8 — used here
- `Context pointers` — skills/productivity/writing-for-agents/SKILL.md:10 — defined here
- `context pointer` — skills/productivity/writing-for-agents/SKILL.md:12 — defined here
- `branches` — skills/productivity/writing-for-agents/SKILL.md:14 — defined here
- `The two loads` — skills/productivity/writing-for-agents/SKILL.md:20 — defined here
- `Context load` — skills/productivity/writing-for-agents/SKILL.md:24 — defined here
- `Cognitive load` — skills/productivity/writing-for-agents/SKILL.md:25 — defined here
- `Information hierarchy` — skills/productivity/writing-for-agents/SKILL.md:29 — defined here
- `steps` — skills/productivity/writing-for-agents/SKILL.md:31 — defined here
- `reference` — skills/productivity/writing-for-agents/SKILL.md:31 — defined here
- `In-file step` — skills/productivity/writing-for-agents/SKILL.md:33 — defined here
- `In-file reference` — skills/productivity/writing-for-agents/SKILL.md:34 — defined here
- `Disclosed reference` — skills/productivity/writing-for-agents/SKILL.md:35 — defined here
- `Progressive disclosure` — skills/productivity/writing-for-agents/SKILL.md:39 — defined here
- `Co-location` — skills/productivity/writing-for-agents/SKILL.md:41 — defined here
- `Sprawl` — skills/productivity/writing-for-agents/SKILL.md:43 — defined here
- `Steps and completion criteria` — skills/productivity/writing-for-agents/SKILL.md:45 — defined here
- `completion criterion` — skills/productivity/writing-for-agents/SKILL.md:47 — defined here
- `premature completion` — skills/productivity/writing-for-agents/SKILL.md:49 — defined here
- `post-completion steps` — skills/productivity/writing-for-agents/SKILL.md:49 — defined here
- `legwork` — skills/productivity/writing-for-agents/SKILL.md:50 — defined here
- `When to split` — skills/productivity/writing-for-agents/SKILL.md:54 — defined here
- `Leading words` — skills/productivity/writing-for-agents/SKILL.md:61 — defined here
- `leading word` — skills/productivity/writing-for-agents/SKILL.md:63 — defined here
- `Negation` — skills/productivity/writing-for-agents/SKILL.md:74 — defined here
- `Pruning` — skills/productivity/writing-for-agents/SKILL.md:76 — defined here
- `single source of truth` — skills/productivity/writing-for-agents/SKILL.md:78 — defined here
- `Duplication` — skills/productivity/writing-for-agents/SKILL.md:78 — defined here
- `sediment` — skills/productivity/writing-for-agents/SKILL.md:80 — defined here
- `no-ops` — skills/productivity/writing-for-agents/SKILL.md:81 — defined here

## Structure
- Context pointers — skills/productivity/writing-for-agents/SKILL.md:10
- The two loads — skills/productivity/writing-for-agents/SKILL.md:20
- Information hierarchy — skills/productivity/writing-for-agents/SKILL.md:29
- Steps and completion criteria — skills/productivity/writing-for-agents/SKILL.md:45
- When to split — skills/productivity/writing-for-agents/SKILL.md:54
- Leading words — skills/productivity/writing-for-agents/SKILL.md:61
- Pruning — skills/productivity/writing-for-agents/SKILL.md:76

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
This skill is the central intellectual thesis of Matt's entire package. All other skills in `sources/matt/` adhere to its authoring patterns: completion criteria ending on "Done when...", concise context pointers in descriptions, leading words, flat reference rungs, and progressive disclosure to sibling files. Notably, it establishes that prompt evals are ineffective for authoring docs, arguing instead for behavioral tests and model-relative no-op pruning.

## Context cost
10886 bytes, 82 lines, approximately 2600 tokens. Discloses `SKILL-MECHANICS.md` (2629 bytes, ~580 tokens), for total context cost of ~3180 tokens if mechanics are loaded.
