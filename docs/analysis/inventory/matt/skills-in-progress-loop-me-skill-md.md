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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/loop-me/SKILL.md

## Purpose — required, verbatim
> "Grill me about specs for the workflows I want to build, within this workspace." — skills/in-progress/loop-me/SKILL.md:3

## Design intent — required
Runs a stateful interview loop using the `/grilling` primitive to interrogate the user and define delegatable, recurring processes ("loops") as implementable workflow specifications. Persists specifications to `workflows/*.md` and user background context and terminology to `NOTES.md`. Employs the "push right" heuristic to defer human checkpoints and maximize autonomous execution, and demands concise decision briefs rather than raw drafts.

## Phase — required
matt:in-progress

## Inputs — required
- Optional user argument describing a workflow to design (`skills/in-progress/loop-me/SKILL.md:5`).
- User responses during recursive grilling rounds (`skills/in-progress/loop-me/SKILL.md:8`).
- Workspace notes `NOTES.md` documenting the user's tools, channels, and terminology (`skills/in-progress/loop-me/SKILL.md:32`).

## Outputs — required
- Workflow specification files in `workflows/*.md` (`skills/in-progress/loop-me/SKILL.md:14, 31`).
- Domain notes and canonical terminology recorded in `NOTES.md` (`skills/in-progress/loop-me/SKILL.md:32`).

## Invokes — required
- skill /grilling — skills/in-progress/loop-me/SKILL.md:8

## Invoked by — required
- doc README.md — skills/in-progress/README.md:11

## Concepts named — required, verbatim
- `loop-me` — skills/in-progress/loop-me/SKILL.md:2 — defined here
- `/grilling` — skills/in-progress/loop-me/SKILL.md:8 — used here
- `workflow` — skills/in-progress/loop-me/SKILL.md:8 — defined here
- `grilling discipline` — skills/in-progress/loop-me/SKILL.md:8 — defined here
- `loop` — skills/in-progress/loop-me/SKILL.md:12 — defined here
- `delegating` — skills/in-progress/loop-me/SKILL.md:12 — defined here
- `Trigger` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `event` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `schedule` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `Checkpoint` — skills/in-progress/loop-me/SKILL.md:21 — defined here
- `Push right` — skills/in-progress/loop-me/SKILL.md:22 — defined here
- `Brief` — skills/in-progress/loop-me/SKILL.md:23 — defined here
- `Definition of done` — skills/in-progress/loop-me/SKILL.md:25 — defined here
- `workflows/*.md` — skills/in-progress/loop-me/SKILL.md:31 — defined here
- `NOTES.md` — skills/in-progress/loop-me/SKILL.md:32 — defined here

## Structure
- ## The loop lens — skills/in-progress/loop-me/SKILL.md:10
- ## Vocabulary — skills/in-progress/loop-me/SKILL.md:16
- ## Definition of done — skills/in-progress/loop-me/SKILL.md:25
- ## The workspace — skills/in-progress/loop-me/SKILL.md:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates no structural requirements unless grilling reveals a need: a workflow needs no AI, no checkpoint, and no schedule by default. Spec is complete when an implementer agent can build it without asking questions.

## Context cost
2522 bytes, 33 lines, ~420 tokens. Invokes `/grilling`.
