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
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/loop-me/SKILL.md

## Purpose — required, verbatim
> "Grill me about specs for the workflows I want to build, within this workspace." — skills/in-progress/loop-me/SKILL.md:3

## Design intent — required
Facilitates stateful, iterative grilling sessions to discover, design, and specify personal or organizational workflows for delegation to AI agents or automation. Uses the conceptual "loop lens" (viewing professional and personal routines as nested recurring loops) to pinpoint repeatable activities suitable for specification. Introduces workflow vocabulary (event/schedule triggers, checkpoints, pushing checkpoints right to minimize interruptions, decision-ready briefs) and maintains durable workflow specs in `workflows/*.md` and user context in `NOTES.md`. A spec is considered done only when an implementer agent could construct it without asking a single clarifying question.

## Phase — required
none

## Inputs — required
- Optional user arguments indicating a specific workflow topic or prompt (`argument-hint: "A workflow to design, or nothing to go find one"`)
- Workspace context notes in `NOTES.md` documenting user tools, communication channels, and vocabulary
- Existing workflow specifications in `workflows/*.md`
- User responses to round-based relentless grilling

## Outputs — required
- Concrete workflow specifications stored in `workflows/*.md`
- Captured user context, tool inventory, and canonical terminology documented in `NOTES.md`

## Invokes — required
- skill /grilling — skills/in-progress/loop-me/SKILL.md:8

## Invoked by — required
- doc README.md — skills/in-progress/README.md:11

## Concepts named — required, verbatim
- `loop-me` — skills/in-progress/loop-me/SKILL.md:2 — defined here
- `workflow` — skills/in-progress/loop-me/SKILL.md:8 — defined here
- `loop` — skills/in-progress/loop-me/SKILL.md:12 — defined here
- `delegating` — skills/in-progress/loop-me/SKILL.md:12 — defined here
- `Trigger` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `event` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `schedule` — skills/in-progress/loop-me/SKILL.md:20 — defined here
- `Checkpoint` — skills/in-progress/loop-me/SKILL.md:21 — defined here
- `Push right` — skills/in-progress/loop-me/SKILL.md:22 — defined here
- `Brief` — skills/in-progress/loop-me/SKILL.md:23 — defined here
- `Definition of done` — skills/in-progress/loop-me/SKILL.md:25 — defined here
- `NOTES.md` — skills/in-progress/loop-me/SKILL.md:32 — defined here

## Structure
- `## The loop lens` — skills/in-progress/loop-me/SKILL.md:10
- `## Vocabulary` — skills/in-progress/loop-me/SKILL.md:16
- `## Definition of done` — skills/in-progress/loop-me/SKILL.md:25
- `## The workspace` — skills/in-progress/loop-me/SKILL.md:29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the "push right" design pattern: deferring human approval checkpoints to the latest possible stage in an automation pipeline so humans receive tight, decision-ready briefs rather than reviewing in-progress drafts.
- Workflows do not mandate AI, checkpoints, or schedules unless explicitly required by the problem domain.

## Context cost
2522 bytes (~630 tokens). Single-file grilling prompt.
