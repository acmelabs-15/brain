---
package: matt
path: skills/productivity/teach/SKILL.md
type: skill
bytes: 9506
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/teach/SKILL.md

## Purpose — required, verbatim
> "description: Teach the user a new skill or concept, within this workspace." — skills/productivity/teach/SKILL.md:3

## Design intent — required
Orchestrates an interactive, stateful learning environment within the current directory across multiple sessions. Implements cognitive science principles including desirable difficulty, retrieval practice, spaced repetition, interleaving, and working memory constraints (explicitly contrasting transient fluency strength with durable storage strength). Decomposes workspace state into dedicated tracking documents (`MISSION.md`, `RESOURCES.md`, `NOTES.md`), modular subdirectories (`./learning-records/`, `./lessons/`, `./reference/`, `./assets/`), and reusable HTML/CSS components. Emphasizes beautiful, self-contained HTML lessons adhering to Tufte design principles, objective-calibrated quizzes with uniform answer formatting to eliminate bias, and tightly compressed reference sheets designed for long-term recall.

## Phase — required
matt:Productivity

## Inputs — required
- User topic request and interactive responses (skills/productivity/teach/SKILL.md:5, 8).
- Template format contracts: `MISSION-FORMAT.md`, `RESOURCES-FORMAT.md`, `LEARNING-RECORD-FORMAT.md` (skills/productivity/teach/SKILL.md:14, 16, 17).
- Persistent workspace state: `MISSION.md`, `RESOURCES.md`, `NOTES.md`, `./learning-records/`, `./lessons/`, `./assets/`, `./reference/` (skills/productivity/teach/SKILL.md:12-20).
- Curated high-trust resources rather than parametric model memory (skills/productivity/teach/SKILL.md:30).

## Outputs — required
- Seeded and updated workspace files: `MISSION.md`, `RESOURCES.md`, `NOTES.md` (skills/productivity/teach/SKILL.md:14, 16, 20).
- Standalone HTML lessons in `./lessons/0001-<dash-case-name>.html` (skills/productivity/teach/SKILL.md:18, 49).
- Reusable UI components and course stylesheets in `./assets/*` (skills/productivity/teach/SKILL.md:19, 65).
- Reference sheets and glossaries in `./reference/*.html` (skills/productivity/teach/SKILL.md:15, 122).
- Sequentially numbered learning records in `./learning-records/0001-<dash-case-name>.md` (skills/productivity/teach/SKILL.md:17).

## Invokes — required
- doc MISSION-FORMAT.md — skills/productivity/teach/SKILL.md:14
- doc RESOURCES-FORMAT.md — skills/productivity/teach/SKILL.md:16
- doc LEARNING-RECORD-FORMAT.md — skills/productivity/teach/SKILL.md:17

## Invoked by — required
- doc README.md — README.md:224
- doc skills/productivity/README.md — skills/productivity/README.md:11
- doc docs/productivity/teach.md — docs/productivity/teach.md:3

## Concepts named — required, verbatim
- `teach` — skills/productivity/teach/SKILL.md:2 — defined here
- `Teaching Workspace` — skills/productivity/teach/SKILL.md:10 — defined here
- `MISSION.md` — skills/productivity/teach/SKILL.md:14 — used here
- `reference` — skills/productivity/teach/SKILL.md:15 — used here
- `RESOURCES.md` — skills/productivity/teach/SKILL.md:16 — used here
- `learning-records` — skills/productivity/teach/SKILL.md:17 — used here
- `lessons` — skills/productivity/teach/SKILL.md:18 — used here
- `assets` — skills/productivity/teach/SKILL.md:19 — used here
- `NOTES.md` — skills/productivity/teach/SKILL.md:20 — used here
- `Knowledge` — skills/productivity/teach/SKILL.md:26 — defined here
- `Skills` — skills/productivity/teach/SKILL.md:27 — defined here
- `Wisdom` — skills/productivity/teach/SKILL.md:28 — defined here
- `Fluency strength` — skills/productivity/teach/SKILL.md:38 — defined here
- `Storage strength` — skills/productivity/teach/SKILL.md:39 — defined here
- `retrieval practice` — skills/productivity/teach/SKILL.md:43 — used here
- `Spacing` — skills/productivity/teach/SKILL.md:44 — used here
- `Interleaving` — skills/productivity/teach/SKILL.md:45 — used here
- `zone of proximal development` — skills/productivity/teach/SKILL.md:53 — used here
- `feedback loop` — skills/productivity/teach/SKILL.md:108 — defined here
- `community` — skills/productivity/teach/SKILL.md:116 — defined here

## Structure
- Teaching Workspace — skills/productivity/teach/SKILL.md:10
- Philosophy — skills/productivity/teach/SKILL.md:22
- Fluency vs Storage Strength — skills/productivity/teach/SKILL.md:34
- Lessons — skills/productivity/teach/SKILL.md:47
- Assets — skills/productivity/teach/SKILL.md:63
- The Mission — skills/productivity/teach/SKILL.md:71
- Zone Of Proximal Development — skills/productivity/teach/SKILL.md:81
- Knowledge — skills/productivity/teach/SKILL.md:91
- Skills — skills/productivity/teach/SKILL.md:99
- Acquiring Wisdom — skills/productivity/teach/SKILL.md:112
- Reference Documents — skills/productivity/teach/SKILL.md:122
- `NOTES.md` — skills/productivity/teach/SKILL.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/productivity/teach/SKILL.md:136 · discusses glossaries as essential references but fails to link to GLOSSARY-FORMAT.md (which exists in the same directory and is documented in docs/productivity/teach.md:38 and issue #559).

## Observations
Treats human learning with deep structural sophistication, rejecting single-turn explanations in favor of cumulative workspace state. Emphasizes Bjork's desirable difficulty framework and requires uniform character and word counts in quiz choices to eliminate accidental cues.

## Context cost
9506 bytes, 141 lines, approximately 2200 tokens. Total loaded with format templates (`MISSION-FORMAT.md`, `RESOURCES-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`, `GLOSSARY-FORMAT.md`, `openai.yaml`): ~17,978 bytes, ~4200 tokens.
