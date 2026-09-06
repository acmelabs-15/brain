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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/teach/SKILL.md

## Purpose — required, verbatim
> "Teach the user a new skill or concept, within this workspace." — skills/productivity/teach/SKILL.md:3

## Design intent — required
Provides a multi-session pedagogical skill that turns the current working directory into a stateful teaching workspace. Centers learning around three pillars: Knowledge (curated from trusted sources), Skills (acquired through interactive lessons and immediate feedback loops), and Wisdom (developed through external communities). Emphasizes storage strength over fluency strength via desirable difficulty (retrieval practice, spacing, interleaving). Organizes workspace state into `MISSION.md`, `RESOURCES.md`, `./learning-records/`, `./lessons/`, `./reference/`, `./assets/`, and `NOTES.md`.

## Phase — required
matt:productivity

## Inputs — required
- User's learning request and argument (`argument-hint: "What would you like to learn about?"`) — skills/productivity/teach/SKILL.md:5
- `MISSION.md` (why the user wants to learn, success criteria, constraints) — skills/productivity/teach/SKILL.md:14
- `RESOURCES.md` (curated high-trust resources) — skills/productivity/teach/SKILL.md:16
- `./learning-records/*.md` (past insights and evidence of mastery) — skills/productivity/teach/SKILL.md:17
- `./assets/*` (reusable components, shared stylesheets, quiz widgets) — skills/productivity/teach/SKILL.md:19, 65
- `NOTES.md` (user preferences and working notes) — skills/productivity/teach/SKILL.md:20, 140
- User feedback from interactive lesson tasks and quizzes — skills/productivity/teach/SKILL.md:108

## Outputs — required
- `MISSION.md` (created or updated) — skills/productivity/teach/SKILL.md:14, 79
- `RESOURCES.md` (created or updated) — skills/productivity/teach/SKILL.md:16, 30
- `./learning-records/*.md` (incrementally numbered insights) — skills/productivity/teach/SKILL.md:17, 49
- `./lessons/*.html` (beautiful, self-contained HTML lessons) — skills/productivity/teach/SKILL.md:18, 49
- `./reference/*.html` (compressed quick-reference cheat sheets, algorithms, glossaries) — skills/productivity/teach/SKILL.md:15, 124
- `./assets/*` (shared reusable lesson components) — skills/productivity/teach/SKILL.md:19, 65
- `NOTES.md` (user preferences) — skills/productivity/teach/SKILL.md:20, 140

## Invokes — required
- reference MISSION-FORMAT.md — skills/productivity/teach/SKILL.md:14
- reference RESOURCES-FORMAT.md — skills/productivity/teach/SKILL.md:16
- reference LEARNING-RECORD-FORMAT.md — skills/productivity/teach/SKILL.md:17

## Invoked by — required
- doc skills/productivity/README.md — skills/productivity/README.md:11
- doc README.md — README.md:224
- doc docs/productivity/teach.md — docs/productivity/teach.md:20

## Concepts named — required, verbatim
- `teach` — skills/productivity/teach/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/teach/SKILL.md:4 — used here
- `argument-hint` — skills/productivity/teach/SKILL.md:5 — used here
- `Teaching Workspace` — skills/productivity/teach/SKILL.md:10 — defined here
- `teaching workspace` — skills/productivity/teach/SKILL.md:12 — defined here
- `MISSION.md` — skills/productivity/teach/SKILL.md:14 — used here
- `MISSION-FORMAT.md` — skills/productivity/teach/SKILL.md:14 — used here
- `./reference/*.html` — skills/productivity/teach/SKILL.md:15 — defined here
- `RESOURCES.md` — skills/productivity/teach/SKILL.md:16 — used here
- `RESOURCES-FORMAT.md` — skills/productivity/teach/SKILL.md:16 — used here
- `./learning-records/*.md` — skills/productivity/teach/SKILL.md:17 — defined here
- `learning records` — skills/productivity/teach/SKILL.md:17 — used here
- `architectural decision records` — skills/productivity/teach/SKILL.md:17 — used here
- `zone of proximal development` — skills/productivity/teach/SKILL.md:17 — defined here
- `LEARNING-RECORD-FORMAT.md` — skills/productivity/teach/SKILL.md:17 — used here
- `./lessons/*.html` — skills/productivity/teach/SKILL.md:18 — defined here
- `lesson` — skills/productivity/teach/SKILL.md:18 — defined here
- `./assets/*` — skills/productivity/teach/SKILL.md:19 — defined here
- `components` — skills/productivity/teach/SKILL.md:19 — defined here
- `NOTES.md` — skills/productivity/teach/SKILL.md:20 — defined here
- `Philosophy` — skills/productivity/teach/SKILL.md:22 — defined here
- `Knowledge` — skills/productivity/teach/SKILL.md:26 — defined here
- `Skills` — skills/productivity/teach/SKILL.md:27 — defined here
- `Wisdom` — skills/productivity/teach/SKILL.md:28 — defined here
- `Fluency vs Storage Strength` — skills/productivity/teach/SKILL.md:34 — defined here
- `Fluency strength` — skills/productivity/teach/SKILL.md:38 — defined here
- `Storage strength` — skills/productivity/teach/SKILL.md:39 — defined here
- `desirable difficulty` — skills/productivity/teach/SKILL.md:41 — defined here
- `retrieval practice` — skills/productivity/teach/SKILL.md:43 — defined here
- `Spacing` — skills/productivity/teach/SKILL.md:44 — defined here
- `Interleaving` — skills/productivity/teach/SKILL.md:45 — defined here
- `Lessons` — skills/productivity/teach/SKILL.md:47 — defined here
- `Assets` — skills/productivity/teach/SKILL.md:63 — defined here
- `The Mission` — skills/productivity/teach/SKILL.md:71 — defined here
- `Zone Of Proximal Development` — skills/productivity/teach/SKILL.md:81 — defined here
- `feedback loop` — skills/productivity/teach/SKILL.md:108 — defined here
- `Acquiring Wisdom` — skills/productivity/teach/SKILL.md:112 — defined here
- `community` — skills/productivity/teach/SKILL.md:116 — defined here
- `Reference Documents` — skills/productivity/teach/SKILL.md:122 — defined here
- `Glossaries` — skills/productivity/teach/SKILL.md:134 — defined here

## Structure
- `## Teaching Workspace` — skills/productivity/teach/SKILL.md:10
- `## Philosophy` — skills/productivity/teach/SKILL.md:22
- `### Fluency vs Storage Strength` — skills/productivity/teach/SKILL.md:34
- `## Lessons` — skills/productivity/teach/SKILL.md:47
- `## Assets` — skills/productivity/teach/SKILL.md:63
- `## The Mission` — skills/productivity/teach/SKILL.md:71
- `## Zone Of Proximal Development` — skills/productivity/teach/SKILL.md:81
- `## Knowledge` — skills/productivity/teach/SKILL.md:91
- `## Skills` — skills/productivity/teach/SKILL.md:99
- `## Acquiring Wisdom` — skills/productivity/teach/SKILL.md:112
- `## Reference Documents` — skills/productivity/teach/SKILL.md:122
- `## \`NOTES.md\`` — skills/productivity/teach/SKILL.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · skills/productivity/teach/SKILL.md:14-17 · `teach/SKILL.md` links to `MISSION-FORMAT.md`, `RESOURCES-FORMAT.md`, and `LEARNING-RECORD-FORMAT.md`, but omits any link to `GLOSSARY-FORMAT.md` which ships in the same directory and defines the required format for glossaries discussed in lines 15 and 134.
- `other` · skills/productivity/teach/SKILL.md:85-90 · Lack of an initial knowledge assessment step causes the skill to make assumptions about user starting knowledge in session one before learning records exist (documented as an open issue #725 in `docs/productivity/teach.md:71`).

## Observations
The skill uniquely produces self-contained HTML lessons with embedded components rather than plain markdown documents. Its pedagogical model draws heavily on cognitive psychology (Bjork's storage vs retrieval strength, Vygotsky's zone of proximal development, interleaving, and desirable difficulty).

## Context cost
9506 bytes, 141 lines, approximately 2000 tokens. (Total with loaded format templates: ~19k bytes, ~4200 tokens).
