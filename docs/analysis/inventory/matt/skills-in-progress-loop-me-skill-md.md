---
package: matt
path: skills/in-progress/loop-me/SKILL.md
type: skill
bytes: 2522
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/loop-me/SKILL.md

## Purpose — required, verbatim
> "Grill me about specs for the workflows I want to build, within this workspace." — skills/in-progress/loop-me/SKILL.md:3

## Design intent — required
A specialized, stateful interview discipline tailored for designing automated personal and operational workflows. Applies the "loop lens" (analyzing recurring patterns in daily work/life) to discover and formalize automation candidates. Employs a dedicated vocabulary (`trigger`, `checkpoint`, `push right`, `brief`) to produce standalone markdown specification files in `workflows/*.md` and workspace context in `NOTES.md`. Enforces a strict definition of done where specs must be complete enough for an autonomous agent to implement without asking questions.

## Phase — required
none

## Inputs — required
- User answers to iterative grilling rounds (skills/in-progress/loop-me/SKILL.md:8, 27).
- Optional workflow topic passed via argument-hint (skills/in-progress/loop-me/SKILL.md:5).
- Existing workspace files `workflows/*.md` and `NOTES.md` (skills/in-progress/loop-me/SKILL.md:14, 31, 32).

## Outputs — required
- Workflow specification files: `workflows/*.md` (skills/in-progress/loop-me/SKILL.md:14, 31).
- Workspace notes file: `NOTES.md` capturing user tools, channels, and terminology (skills/in-progress/loop-me/SKILL.md:32).

## Invokes — required
- skill grilling — skills/in-progress/loop-me/SKILL.md:8

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:11

## Concepts named — required, verbatim
- `loop-me` — skills/in-progress/loop-me/SKILL.md:2 — defined here
- `grilling` — skills/in-progress/loop-me/SKILL.md:8 — used here
- `workflow` — skills/in-progress/loop-me/SKILL.md:8 — defined here
- `loop` — skills/in-progress/loop-me/SKILL.md:12 — defined here
- `delegating` — skills/in-progress/loop-me/SKILL.md:12 — used here
- `workflows/*.md` — skills/in-progress/loop-me/SKILL.md:14 — defined here
- `Trigger` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `event` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `schedule` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `Checkpoint` — skills/in-progress/loop-me/SKILL.md:21 — defined here
- `Push right` — skills/in-progress/loop-me/SKILL.md:22 — defined here
- `Brief` — skills/in-progress/loop-me/SKILL.md:23 — defined here
- `Definition of done` — skills/in-progress/loop-me/SKILL.md:25 — defined here
- `NOTES.md` — skills/in-progress/loop-me/SKILL.md:32 — defined here

## Structure
- The loop lens — skills/in-progress/loop-me/SKILL.md:10
- Vocabulary — skills/in-progress/loop-me/SKILL.md:16
- Definition of done — skills/in-progress/loop-me/SKILL.md:25
- The workspace — skills/in-progress/loop-me/SKILL.md:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Introduces key workflow automation principles: "Push right" (defer human intervention to the latest possible stage after maximal autonomous preparation) and "Brief" (present decision-ready summaries linking to assets rather than raw drafts). Mandates nothing structural unless justified by the grilling interview.

## Context cost
2522 bytes, 33 lines, ~550 tokens. Invokes `/grilling` (~3500 tokens). Total ~4050 tokens.
