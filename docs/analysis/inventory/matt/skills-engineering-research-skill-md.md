---
package: matt
path: skills/engineering/research/SKILL.md
type: skill
bytes: 794
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/research/SKILL.md

## Purpose — required, verbatim
> "Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent." — skills/engineering/research/SKILL.md:3

## Design intent — required
Delegates reading legwork and external fact-finding to a background subagent so the primary session context remains uncluttered. Enforces strict primary-source discipline (official docs, source code, specs, first-party APIs) and outputs a cited Markdown file in the repository's notes directory for subsequent grilling, design, or implementation phases.

## Phase — required
none

## Inputs — required
Questions from user or tickets; primary sources (official documentation, source code, specifications, first-party APIs).

## Outputs — required
A single Markdown file saved where the repository keeps notes (or sensible fallback location) citing each claim's source.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:208
- doc skills/engineering/README.md — skills/engineering/README.md:26
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:81
- skill wayfinder — skills/engineering/wayfinder/SKILL.md:115

## Concepts named — required, verbatim
- `research` — skills/engineering/research/SKILL.md:2 — defined here
- `primary sources` — skills/engineering/research/SKILL.md:3 — used here
- `background agent` — skills/engineering/research/SKILL.md:3 — used here
- `docs` — skills/engineering/research/SKILL.md:3 — used here
- `API` — skills/engineering/research/SKILL.md:3 — used here
- `official docs` — skills/engineering/research/SKILL.md:10 — used here
- `source code` — skills/engineering/research/SKILL.md:10 — used here
- `specs` — skills/engineering/research/SKILL.md:10 — used here
- `first-party APIs` — skills/engineering/research/SKILL.md:10 — used here

## Structure
- Its job — skills/engineering/research/SKILL.md:8

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug · docs/engineering/research.md:35 · Spawns general-purpose background agent without agent-type restrictions, leading to runaway nested research agent loops (issue #530).

## Observations
Extremely compact skill prompt (13 lines) relying on prompt instructions to enforce primary-source verification rather than domain allowlisting or programmatic validation.

## Context cost
794 bytes, 13 lines, ~150 tokens. Loads no external files.
