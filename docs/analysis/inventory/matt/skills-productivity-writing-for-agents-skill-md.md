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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/writing-for-agents/SKILL.md

## Purpose — required, verbatim
> "description: Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md." — skills/productivity/writing-for-agents/SKILL.md:3

## Design intent — required
Foundational style and design reference for authoring any document consumed by coding agents (including skills, repository instructions like `AGENTS.md` and `CLAUDE.md`, and documents reached via context pointers). Establishes structural guidelines for prompt and context engineering: designing context pointers with trigger branches, balancing context load against human cognitive load, organizing content across the information hierarchy ladder (in-file steps, in-file reference, disclosed reference), enforcing step completion criteria to prevent premature completion, refactoring behaviors into leading words to recruit pretrained model priors, and practicing relentless pruning (eliminating sediment, duplication, and no-ops).

## Phase — required
matt:productivity

## Inputs — required
Documents to be created, edited, or reviewed for agent consumption (`skills`, `AGENTS.md`, `CLAUDE.md`, pointers).

## Outputs — required
none

## Invokes — required
- skill SKILL-MECHANICS.md — skills/productivity/writing-for-agents/SKILL.md:8

## Invoked by — required
- doc README.md — README.md:231
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:3
- doc skills/productivity/README.md — skills/productivity/README.md:20
- skill skills/engineering/ask-matt/SKILL.md — skills/engineering/ask-matt/SKILL.md:86
- skill skills/in-progress/retro/SKILL.md — skills/in-progress/retro/SKILL.md:11
- doc CHANGELOG.md — CHANGELOG.md:21
- doc docs/engineering/ask-matt.md — docs/engineering/ask-matt.md:76
- skill skills/productivity/writing-for-agents/SKILL-MECHANICS.md — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:3

## Concepts named — required, verbatim
- `writing-for-agents` — skills/productivity/writing-for-agents/SKILL.md:2 — defined here
- `AGENTS.md` — skills/productivity/writing-for-agents/SKILL.md:3 — used here
- `CLAUDE.md` — skills/productivity/writing-for-agents/SKILL.md:3 — used here
- `context pointer` — skills/productivity/writing-for-agents/SKILL.md:12 — defined here
- `variance bug` — skills/productivity/writing-for-agents/SKILL.md:12 — defined here
- `branches` — skills/productivity/writing-for-agents/SKILL.md:14 — defined here
- `Context load` — skills/productivity/writing-for-agents/SKILL.md:24 — defined here
- `Cognitive load` — skills/productivity/writing-for-agents/SKILL.md:25 — defined here
- `steps` — skills/productivity/writing-for-agents/SKILL.md:31 — defined here
- `reference` — skills/productivity/writing-for-agents/SKILL.md:31 — defined here
- `information hierarchy` — skills/productivity/writing-for-agents/SKILL.md:31 — defined here
- `In-file step` — skills/productivity/writing-for-agents/SKILL.md:33 — defined here
- `In-file reference` — skills/productivity/writing-for-agents/SKILL.md:34 — defined here
- `Disclosed reference` — skills/productivity/writing-for-agents/SKILL.md:35 — defined here
- `Progressive disclosure` — skills/productivity/writing-for-agents/SKILL.md:39 — defined here
- `Co-location` — skills/productivity/writing-for-agents/SKILL.md:41 — defined here
- `Sprawl` — skills/productivity/writing-for-agents/SKILL.md:43 — defined here
- `completion criterion` — skills/productivity/writing-for-agents/SKILL.md:47 — defined here
- `premature completion` — skills/productivity/writing-for-agents/SKILL.md:49 — defined here
- `post-completion steps` — skills/productivity/writing-for-agents/SKILL.md:49 — defined here
- `legwork` — skills/productivity/writing-for-agents/SKILL.md:50 — defined here
- `leading word` — skills/productivity/writing-for-agents/SKILL.md:63 — defined here
- `Negation` — skills/productivity/writing-for-agents/SKILL.md:74 — defined here
- `single source of truth` — skills/productivity/writing-for-agents/SKILL.md:78 — defined here
- `Duplication` — skills/productivity/writing-for-agents/SKILL.md:78 — defined here
- `cache` — skills/productivity/writing-for-agents/SKILL.md:79 — defined here
- `relevance` — skills/productivity/writing-for-agents/SKILL.md:80 — defined here
- `sediment` — skills/productivity/writing-for-agents/SKILL.md:80 — defined here
- `no-ops` — skills/productivity/writing-for-agents/SKILL.md:81 — defined here

## Structure
- `## Context pointers` — skills/productivity/writing-for-agents/SKILL.md:10
- `## The two loads` — skills/productivity/writing-for-agents/SKILL.md:20
- `## Information hierarchy` — skills/productivity/writing-for-agents/SKILL.md:29
- `## Steps and completion criteria` — skills/productivity/writing-for-agents/SKILL.md:45
- `## When to split` — skills/productivity/writing-for-agents/SKILL.md:54
- `## Leading words` — skills/productivity/writing-for-agents/SKILL.md:61
- `## Pruning` — skills/productivity/writing-for-agents/SKILL.md:76

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Core architectural cornerstone of the `matt` package. Rather than attempting to control outputs directly, the skill focuses on engineering predictable agent *processes*. Highlights include defining "leading words" as compact cognitive hooks that leverage pretrained model priors, treating environment configuration as a source of truth rather than duplicating it into sediment-prone prompt documentation, and articulating "progressive disclosure" as a variance mitigation technique.

## Context cost
10886 bytes (~2700 tokens); 13515 bytes (~3300 tokens) with referenced SKILL-MECHANICS.md.
