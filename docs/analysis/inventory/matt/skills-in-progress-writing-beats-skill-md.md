---
package: matt
path: skills/in-progress/writing-beats/SKILL.md
type: skill
bytes: 4855
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-beats/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it." — skills/in-progress/writing-beats/SKILL.md:3

## Design intent — required
Structures article composition from raw fragmented material into a step-by-step narrative journey ("choose-your-own-adventure" style). Prevents reader disorientation by enforcing a strict conceptual dependency graph ("grounding"): every concept or term must either be explicitly established as an audience prerequisite upfront or introduced by a preceding beat before any subsequent beat can lean on it. The human user selects between candidate beats at each turn, seeing which narrative branches and concepts each choice unlocks.

## Phase — required
none

## Inputs — required
- Markdown file of raw writing material and fragments (`skills/in-progress/writing-beats/SKILL.md:9`)
- Destination path for the article (`skills/in-progress/writing-beats/SKILL.md:11`)
- User selections among candidate beats and edits to previous beats (`skills/in-progress/writing-beats/SKILL.md:16,63-65`)

## Outputs — required
- Assembled article markdown file created and incrementally updated one beat at a time (`skills/in-progress/writing-beats/SKILL.md:17,62`)

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/in-progress/README.md:12

## Concepts named — required, verbatim
- `writing-beats` — skills/in-progress/writing-beats/SKILL.md:2 — defined here
- `exploit` — skills/in-progress/writing-beats/SKILL.md:9 — defined here
- `beat` — skills/in-progress/writing-beats/SKILL.md:13 — defined here
- `grounded` — skills/in-progress/writing-beats/SKILL.md:15 — defined here
- `starting beats` — skills/in-progress/writing-beats/SKILL.md:16 — defined here
- `next beats` — skills/in-progress/writing-beats/SKILL.md:18 — defined here
- `grounding` — skills/in-progress/writing-beats/SKILL.md:25 — defined here
- `concept` — skills/in-progress/writing-beats/SKILL.md:27 — defined here
- `term` — skills/in-progress/writing-beats/SKILL.md:27 — defined here
- `prerequisite` — skills/in-progress/writing-beats/SKILL.md:31 — defined here
- `introduced` — skills/in-progress/writing-beats/SKILL.md:32 — defined here
- `raw pile` — skills/in-progress/writing-beats/SKILL.md:54 — defined here

## Structure
- `name: writing-beats` — skills/in-progress/writing-beats/SKILL.md:2
- `<what-to-do>` — skills/in-progress/writing-beats/SKILL.md:7
- `<supporting-info>` — skills/in-progress/writing-beats/SKILL.md:23
- `## Grounding` — skills/in-progress/writing-beats/SKILL.md:25
- `## What is a beat` — skills/in-progress/writing-beats/SKILL.md:40
- `## Pulling from the pile` — skills/in-progress/writing-beats/SKILL.md:52
- `## Ending the journey` — skills/in-progress/writing-beats/SKILL.md:56
- `## Writing rhythm` — skills/in-progress/writing-beats/SKILL.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `internal-contradiction` · skills/in-progress/writing-beats/SKILL.md:19 Step 5 instructs "Loop steps 3–5 until the article reaches a natural end", which loops into step 5 recursively rather than cycling back through steps 3–4.

## Observations
- Models article construction as an explicit DAG where vertices are narrative beats and edges are conceptual grounding dependencies.
- Enforces strict single-beat incremental commits to disk, re-reading the article file before every write to preserve manual user edits.

## Context cost
4855 bytes (~1213 tokens). Compact standalone prompt without external dependencies.
