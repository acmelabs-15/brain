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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/teach/LEARNING-RECORD-FORMAT.md

## Purpose — required, verbatim
> "Learning records live in `./learning-records/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc. Create the directory lazily: only when the first record is written." — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:3

## Design intent — required
Establishes the architecture and lifecycle for learning records in a `teach` workspace. Adapts the Architectural Decision Record (ADR) pattern to education, capturing demonstrated insights, disclosed prior knowledge, corrected misconceptions, and mission shifts as decision-grade signals to calculate the user's zone of proximal development and steer future lessons without re-teaching established topics.

## Phase — required
matt:productivity

## Inputs — required
Evidence of non-trivial understanding, user disclosure of prior knowledge, corrected misconceptions, or mission adjustments.

## Outputs — required
Sequential learning record files saved to `./learning-records/0001-<slug>.md`.

## Invokes — required
none

## Invoked by — required
- skill teach — skills/productivity/teach/SKILL.md:17

## Concepts named — required, verbatim
- `Learning Record` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:1 — defined here
- `ADRs` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — used here
- `zone of proximal development` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:5 — used here
- `Template` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:7 — defined here
- `Status` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:21 — defined here
- `Evidence` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:22 — defined here
- `Implications` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:23 — defined here
- `Numbering` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:25 — defined here
- `MISSION.md` — skills/productivity/teach/LEARNING-RECORD-FORMAT.md:36 — used here
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
Draws a direct analogy between learning records and Architecture Decision Records (ADRs), establishing decision-grade tracking for learning. Explicitly states that coverage is not learning ("Coverage is not learning. Wait for evidence."). Supersession maintains a historical trail of evolving comprehension rather than deleting prior misconceptions.

## Context cost
2747 bytes (~685 tokens). Format specification for learning records.
