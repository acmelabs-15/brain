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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/writing-beats/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it." — skills/in-progress/writing-beats/SKILL.md:3

## Design intent — required
Facilitates the exploit phase of authoring by transforming raw notes or fragments into an engaging narrative sequence structured as discrete beats. Adopts an interactive, choose-your-own-adventure loop where each candidate beat is checked against a running set of grounded concepts (established either as audience prerequisites or introduced in preceding beats). By requiring that every concept is grounded before a beat relies on it, the skill prevents conceptual leaps that alienate readers and guides the user down viable narrative branches.

## Phase — required
none

## Inputs — required
Markdown file of raw material provided by the user (`skills/in-progress/writing-beats/SKILL.md:9`), user choice of output article save path (`skills/in-progress/writing-beats/SKILL.md:11`), and user selections among offered candidate starting/next beats (`skills/in-progress/writing-beats/SKILL.md:16, 18`).

## Outputs — required
Progressively assembled article file written incrementally to disk, one beat at a time (`skills/in-progress/writing-beats/SKILL.md:17`).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `writing-beats` — skills/in-progress/writing-beats/SKILL.md:2 — defined here
- `exploit` — skills/in-progress/writing-beats/SKILL.md:9 — defined here
- `beat` — skills/in-progress/writing-beats/SKILL.md:9 — defined here
- `Grounding` — skills/in-progress/writing-beats/SKILL.md:15 — defined here
- `starting beats` — skills/in-progress/writing-beats/SKILL.md:16 — defined here
- `next beats` — skills/in-progress/writing-beats/SKILL.md:18 — defined here
- `term` — skills/in-progress/writing-beats/SKILL.md:27 — defined here
- `Prerequisite` — skills/in-progress/writing-beats/SKILL.md:31 — defined here
- `Introduced` — skills/in-progress/writing-beats/SKILL.md:32 — defined here
- `What is a beat` — skills/in-progress/writing-beats/SKILL.md:40 — defined here
- `Pulling from the pile` — skills/in-progress/writing-beats/SKILL.md:52 — defined here
- `Ending the journey` — skills/in-progress/writing-beats/SKILL.md:56 — defined here
- `Writing rhythm` — skills/in-progress/writing-beats/SKILL.md:60 — defined here

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
Defines a disciplined writing rhythm: the agent appends only one beat at a time, never writes ahead, re-reads the article from disk before every write to preserve human edits, and adapts downstream options if the author substantially rewrites an earlier beat.

## Context cost
4855 bytes, 68 lines, approximately 1050 tokens.
