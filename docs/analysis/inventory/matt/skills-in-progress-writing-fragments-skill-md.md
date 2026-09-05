---
package: matt
path: skills/in-progress/writing-fragments/SKILL.md
type: skill
bytes: 3558
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-fragments/SKILL.md

## Purpose — required, verbatim
> "Writing, explore: mine raw fragments, no structure yet." — skills/in-progress/writing-fragments/SKILL.md:3

## Design intent — required
Conducts an open-ended exploratory interview ("grilling session") to mine raw writing fragments and noticings from a user without prematurely committing to article structure, outlines, or narrative sequencing. Captures diverse nuggets of thought (sharp sentences, vignettes, claims, metaphors, complaints, and especially high-leverage "leading words") into a single markdown quarry file separated by horizontal rules (`---`), establishing raw material for subsequent exploit skills (`writing-beats` or `writing-shape`).

## Phase — required
none

## Inputs — required
- User conversational input, responses, and brainstorms (`skills/in-progress/writing-fragments/SKILL.md:9,15`)
- Target file path to save raw fragments (`skills/in-progress/writing-fragments/SKILL.md:13`)

## Outputs — required
- Markdown raw fragments file with H1 working title and horizontal-rule-delimited fragment entries (`skills/in-progress/writing-fragments/SKILL.md:17,44-67`)

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/in-progress/README.md:13

## Concepts named — required, verbatim
- `writing-fragments` — skills/in-progress/writing-fragments/SKILL.md:2 — defined here
- `explore` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `exploit` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `grilling session` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `fragment` — skills/in-progress/writing-fragments/SKILL.md:25 — defined here
- `leading word` — skills/in-progress/writing-fragments/SKILL.md:36 — defined here
- `horizontal rule` — skills/in-progress/writing-fragments/SKILL.md:69 — defined here

## Structure
- `name: writing-fragments` — skills/in-progress/writing-fragments/SKILL.md:2
- `<what-to-do>` — skills/in-progress/writing-fragments/SKILL.md:7
- `<supporting-info>` — skills/in-progress/writing-fragments/SKILL.md:21
- `## What is a fragment` — skills/in-progress/writing-fragments/SKILL.md:23
- `## File format` — skills/in-progress/writing-fragments/SKILL.md:42
- `## Writing rhythm` — skills/in-progress/writing-fragments/SKILL.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Adapts the "novelist's diary" paradigm to cleanly separate divergent generation from convergent structuring.
- Highlights "leading words" (e.g. "tracer bullets", "fog of war") as the most valuable fragment type because a single coinage anchors structure, title, and transitions across subsequent exploit phases.
- Mandates appending fragments silently without interactive confirmation dialogs, while continuously re-reading disk state to preserve manual user edits.

## Context cost
3558 bytes (~889 tokens). Standalone interview prompt.
