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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/teach/SKILL.md

## Purpose — required, verbatim
> "description: Teach the user a new skill or concept, within this workspace." — skills/productivity/teach/SKILL.md:3

## Design intent — required
Defines the architecture and pedagogical workflow for long-term, stateful educational instruction across multiple agent sessions. Organizes the local directory as a dedicated workspace containing core artifacts (`MISSION.md`, `RESOURCES.md`, `NOTES.md`, `learning-records/`, `reference/`, `assets/`, `lessons/`). Grounds teaching in verified external knowledge rather than ungrounded parametric memory, balances immediate fluency strength against durable storage strength via desirable difficulty (retrieval practice, spacing, interleaving), produces standalone HTML lessons built from reusable web components, and routes learners to external communities for real-world wisdom.

## Phase — required
matt:productivity

## Inputs — required
User learning objectives, existing workspace state (`MISSION.md`, `RESOURCES.md`, `learning-records/`, `NOTES.md`), and reusable assets in `./assets/`.

## Outputs — required
Teaching workspace files including `MISSION.md`, `RESOURCES.md`, `NOTES.md`, HTML references in `./reference/`, sequential learning records in `./learning-records/`, reusable web components in `./assets/`, and standalone HTML lessons in `./lessons/`.

## Invokes — required
- template MISSION-FORMAT.md — skills/productivity/teach/SKILL.md:14
- template RESOURCES-FORMAT.md — skills/productivity/teach/SKILL.md:16
- template LEARNING-RECORD-FORMAT.md — skills/productivity/teach/SKILL.md:17

## Invoked by — required
- doc README — skills/productivity/README.md:11
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:85
- doc README — README.md:224

## Concepts named — required, verbatim
- `teach` — skills/productivity/teach/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/teach/SKILL.md:4 — defined here
- `argument-hint` — skills/productivity/teach/SKILL.md:5 — defined here
- `Teaching Workspace` — skills/productivity/teach/SKILL.md:10 — defined here
- `MISSION.md` — skills/productivity/teach/SKILL.md:14 — used here
- `RESOURCES.md` — skills/productivity/teach/SKILL.md:16 — used here
- `learning-records` — skills/productivity/teach/SKILL.md:17 — used here
- `lesson` — skills/productivity/teach/SKILL.md:18 — defined here
- `components` — skills/productivity/teach/SKILL.md:19 — defined here
- `NOTES.md` — skills/productivity/teach/SKILL.md:20 — used here
- `Philosophy` — skills/productivity/teach/SKILL.md:22 — defined here
- `Knowledge` — skills/productivity/teach/SKILL.md:26 — defined here
- `Skills` — skills/productivity/teach/SKILL.md:27 — defined here
- `Wisdom` — skills/productivity/teach/SKILL.md:28 — defined here
- `Fluency strength` — skills/productivity/teach/SKILL.md:38 — defined here
- `Storage strength` — skills/productivity/teach/SKILL.md:39 — defined here
- `Lessons` — skills/productivity/teach/SKILL.md:47 — defined here
- `Assets` — skills/productivity/teach/SKILL.md:63 — defined here
- `The Mission` — skills/productivity/teach/SKILL.md:71 — defined here
- `Zone Of Proximal Development` — skills/productivity/teach/SKILL.md:81 — defined here
- `feedback loop` — skills/productivity/teach/SKILL.md:108 — defined here
- `Acquiring Wisdom` — skills/productivity/teach/SKILL.md:112 — defined here
- `community` — skills/productivity/teach/SKILL.md:116 — defined here
- `Reference Documents` — skills/productivity/teach/SKILL.md:122 — defined here

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

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · skills/productivity/teach/SKILL.md:136: Mentions that glossaries are an essential reference, but fails to link or reference `GLOSSARY-FORMAT.md` which ships in the same skill directory (documented in `docs/productivity/teach.md:38` as issue #559).
- `doc-drift` · skills/productivity/teach/SKILL.md:14: Uses relative `./` syntax for both skill-bundled format specifications (`./MISSION-FORMAT.md`) and workspace target paths (`./lessons/`, `./learning-records/`, `./assets/`), causing some agent harnesses to write course files into the installed skill directory (documented in `docs/productivity/teach.md:59` as issue #377).

## Observations
Incorporates cognitive psychology principles (Bjork's distinction between fluency strength and storage strength; desirable difficulty via retrieval practice, spacing, and interleaving). Mandates that lessons be formatted as self-contained HTML files adhering to clean Edward Tufte styling principles, leveraging shared CSS/widgets from `./assets/`.

## Context cost
9506 bytes (~2375 tokens). Comprehensive multi-session pedagogical skill instruction.
