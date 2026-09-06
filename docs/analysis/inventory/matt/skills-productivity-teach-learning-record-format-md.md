---
package: matt
path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md
type: skill
bytes: 2747
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/LEARNING-RECORD-FORMAT.md, sha256: 701fa34b6748aa89e6c960ffb815257f481a7d77fb2900f9028f7edf3fdd6052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/LEARNING-RECORD-FORMAT.md

## Purpose — required, verbatim
> "They are the teaching equivalent of ADRs: they capture non-obvious lessons, key insights, and stated prior knowledge that will steer future sessions. They are used to calculate the zone of proximal development." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5

## Design intent — required
Specifies the schema, authoring rules, and criteria for learning records in `./learning-records/0001-<slug>.md`. Serves as the pedagogical equivalent of architectural decision records (ADRs), recording non-obvious lessons, disclosed prior knowledge, corrected misconceptions, and mission shifts. Enables calculation of the learner's zone of proximal development across multiple sessions while explicitly barring session journals or mere content coverage logs.

## Phase — required
matt:productivity

## Inputs — required
- User demonstrations of understanding (questions answered, exercises completed) — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22, 33
- Disclosed prior knowledge and claimed depth — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:34
- Corrected misconceptions — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:35
- Shifts in user learning mission — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:36

## Outputs — required
- Numbered markdown learning records in `./learning-records/` (e.g. `0001-slug.md`) — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3

## Invokes — required
- reference MISSION.md — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:36
- reference GLOSSARY.md — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:41

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:17

## Concepts named — required, verbatim
- `Learning Record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:1 — defined here
- `./learning-records/` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3 — defined here
- `ADRs` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — used here
- `zone of proximal development` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — defined here
- `Status` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:21 — defined here
- `Evidence` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22 — defined here
- `Implications` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:23 — defined here
- `Numbering` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:25 — defined here
- `When to write a learning record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:29 — defined here
- `MISSION.md` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:36 — used here
- `What does _not_ qualify` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:38 — defined here
- `GLOSSARY.md` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:41 — used here
- `Supersession` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:44 — defined here

## Structure
- `# Learning Record Format` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:1
- `## Template` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:7
- `## Optional sections` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:17
- `## Numbering` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:25
- `## When to write a learning record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:29
- `### What does _not_ qualify` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:38
- `## Supersession` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The analogy to ADRs provides a structured historical ledger for knowledge state. Supersession (`Status: superseded by LR-NNNN`) allows understanding to evolve without deleting the historical progression.

## Context cost
2747 bytes, 47 lines, approximately 550 tokens.
