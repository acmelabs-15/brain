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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/LEARNING-RECORD-FORMAT.md

## Purpose — required, verbatim
> "They are the teaching equivalent of ADRs: they capture non-obvious lessons, key insights, and stated prior knowledge that will steer future sessions. They are used to calculate the zone of proximal development." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5

## Design intent — required
Specification and structural format for learning records stored sequentially in `./learning-records/0001-<slug>.md`. Serves as the pedagogical counterpart to Architectural Decision Records (ADRs) by logging proven conceptual breakthroughs, declared prior knowledge, corrected misconceptions, and mission shifts across multi-session learning trajectories. Enforces conciseness (a single 1–3 sentence paragraph) to maintain high signal and explicitly bans journal-style activity logging or duplicating glossary definitions. Defines non-destructive supersession rules (`Status: superseded by LR-NNNN`) to maintain an auditable trace of user conceptual development.

## Phase — required
cross-phase

## Inputs — required
- Observed user demonstrations of non-trivial understanding in exercises or responses (skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22, 33).
- User disclosures regarding prior knowledge and depth (skills/productivity/teach/LEARNING-RECORD-FORMAT.md:34).
- Corrected user misconceptions during instruction (skills/productivity/teach/LEARNING-RECORD-FORMAT.md:35).
- Highest existing numeric prefix in `./learning-records/` (skills/productivity/teach/LEARNING-RECORD-FORMAT.md:27).

## Outputs — required
- Sequentially numbered markdown records in `./learning-records/NNNN-<slug>.md` (skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3).

## Invokes — required
- file MISSION.md — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:36
- file GLOSSARY.md — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:41

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:17

## Concepts named — required, verbatim
- `Learning Record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:1 — defined here
- `ADRs` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — used here
- `zone of proximal development` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — used here
- `Template` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:7 — defined here
- `Optional sections` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:17 — defined here
- `Status` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:21 — defined here
- `Evidence` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22 — defined here
- `Implications` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:23 — defined here
- `Numbering` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:25 — defined here
- `When to write a learning record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:29 — defined here
- `What does _not_ qualify` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:38 — defined here
- `Supersession` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:44 — defined here

## Structure
- Learning Record Format — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:1
- Template — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:7
- Optional sections — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:17
- Numbering — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:25
- When to write a learning record — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:29
- What does _not_ qualify — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:38
- Supersession — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Treats human learning increments with the rigor of architectural decision logging. The negative qualification rule ("Material that was merely covered. Coverage is not learning. Wait for evidence", line 40) prevents agents from logging superficial topic exposure.

## Context cost
2747 bytes, 47 lines, approximately 650 tokens.
