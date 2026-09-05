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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/writing-beats/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it." — skills/in-progress/writing-beats/SKILL.md:3

## Design intent — required
Transforms a raw material document into a finished article by navigating an interactive, branching sequence of narrative beats. Operates strictly in an "exploit" mode where exploration is finished and the raw material pile is treated as a quarry. Solves reader disorientation by maintaining a rigorous concept-grounding graph: every concept must either be established as an initial prerequisite or introduced by a preceding beat before subsequent prose can rely on it. Progresses one beat at a time, providing candidate branches and re-reading the disk file to respect manual user revisions.

## Phase — required
none

## Inputs — required
- Markdown file of raw material (skills/in-progress/writing-beats/SKILL.md:9).
- Destination article file path from user (skills/in-progress/writing-beats/SKILL.md:11).
- Initial set of audience prerequisite concepts agreed with user (skills/in-progress/writing-beats/SKILL.md:15).

## Outputs — required
- Incrementally written article markdown document constructed beat by beat (skills/in-progress/writing-beats/SKILL.md:17).

## Invokes — required
none

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:12

## Concepts named — required, verbatim
- `writing-beats` — skills/in-progress/writing-beats/SKILL.md:2 — defined here
- `exploit` — skills/in-progress/writing-beats/SKILL.md:9 — used here
- `choose-your-own-adventure` — skills/in-progress/writing-beats/SKILL.md:13 — defined here
- `grounded` — skills/in-progress/writing-beats/SKILL.md:15 — defined here
- `starting beats` — skills/in-progress/writing-beats/SKILL.md:16 — defined here
- `next beats` — skills/in-progress/writing-beats/SKILL.md:18 — defined here
- `Grounding` — skills/in-progress/writing-beats/SKILL.md:25 — defined here
- `concept` — skills/in-progress/writing-beats/SKILL.md:27 — used here
- `term` — skills/in-progress/writing-beats/SKILL.md:27 — used here
- `Prerequisite` — skills/in-progress/writing-beats/SKILL.md:31 — defined here
- `Introduced` — skills/in-progress/writing-beats/SKILL.md:32 — defined here
- `beat` — skills/in-progress/writing-beats/SKILL.md:40 — defined here
- `quarry` — skills/in-progress/writing-beats/SKILL.md:54 — defined here

## Structure
- Grounding — skills/in-progress/writing-beats/SKILL.md:25
- What is a beat — skills/in-progress/writing-beats/SKILL.md:40
- Pulling from the pile — skills/in-progress/writing-beats/SKILL.md:52
- Ending the journey — skills/in-progress/writing-beats/SKILL.md:56
- Writing rhythm — skills/in-progress/writing-beats/SKILL.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Treats raw fragments as a quarry that does not need to be emptied; leftover fragments are expected when the journey naturally concludes. Enforces an append-only, one-beat-at-a-time cadence with mandatory re-reading before writing to keep the agent from outpacing or overwriting the user.

## Context cost
4855 bytes, 68 lines, ~1050 tokens. Loads no external files.
