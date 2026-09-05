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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/writing-fragments/SKILL.md

## Purpose — required, verbatim
> "Writing, explore: mine raw fragments, no structure yet." — skills/in-progress/writing-fragments/SKILL.md:3

## Design intent — required
Facilitates an open-ended exploratory writing interview ("grilling session") to extract heterogeneous text fragments from an author before committing to any narrative structure, outline, or article layout. Captures raw insights, vignettes, half-thoughts, quotes, and coined "leading words" into a single markdown file where items are delimited purely by horizontal rules (`---`). Appends silently to avoid interrupting creative flow while continuously re-reading the file from disk to preserve human edits.

## Phase — required
none

## Inputs — required
- Conversational statements, answers, and reflections provided by the user during interviewing (skills/in-progress/writing-fragments/SKILL.md:9, 15).
- Destination markdown document file path (skills/in-progress/writing-fragments/SKILL.md:13).

## Outputs — required
- Raw material markdown file initialized with an H1 working title and fragments separated by `\n---\n` (skills/in-progress/writing-fragments/SKILL.md:17, 44-69).

## Invokes — required
none

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:13

## Concepts named — required, verbatim
- `writing-fragments` — skills/in-progress/writing-fragments/SKILL.md:2 — defined here
- `explore` — skills/in-progress/writing-fragments/SKILL.md:9 — used here
- `exploit` — skills/in-progress/writing-fragments/SKILL.md:9 — used here
- `grilling session` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `working title` — skills/in-progress/writing-fragments/SKILL.md:17 — defined here
- `fragment` — skills/in-progress/writing-fragments/SKILL.md:25 — defined here
- `leading word` — skills/in-progress/writing-fragments/SKILL.md:36 — defined here
- `horizontal rule` — skills/in-progress/writing-fragments/SKILL.md:69 — defined here

## Structure
- What is a fragment — skills/in-progress/writing-fragments/SKILL.md:23
- File format — skills/in-progress/writing-fragments/SKILL.md:42
- Writing rhythm — skills/in-progress/writing-fragments/SKILL.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses the novelist's diary as a mental model for collecting unstructured noticings. Highlights the "leading word"—a compact coinage or metaphor—as the highest-value artifact of exploration because it anchors the structure, transitions, and title during downstream exploit work.

## Context cost
3558 bytes, 80 lines, ~780 tokens. Loads no external files.
