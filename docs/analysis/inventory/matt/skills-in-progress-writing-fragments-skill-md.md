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
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/writing-fragments/SKILL.md

## Purpose — required, verbatim
> "Writing, explore: mine raw fragments, no structure yet." — skills/in-progress/writing-fragments/SKILL.md:3

## Design intent — required
Implements an unstructured exploratory writing skill designed to widen the conceptual space without committing to outlines, article structure, or narrative sequence. Conducts an intensive grilling and interviewing session with the author to capture raw fragments (vignettes, claims, punchlines, analogies, quotes, and half-thoughts). Places special emphasis on coining "leading words"—compact metaphors that anchor the entire thesis and pay dividends later during the exploit phase.

## Phase — required
none

## Inputs — required
Author dialogue, anecdotes, arguments, and reactions during conversational grilling (`skills/in-progress/writing-fragments/SKILL.md:9, 15`), optional user-designated markdown file path (`skills/in-progress/writing-fragments/SKILL.md:13`).

## Outputs — required
A single markdown file containing a top-level H1 working title followed by unranked, unindexed raw fragments separated by horizontal rules (`\n---\n`) (`skills/in-progress/writing-fragments/SKILL.md:17, 69`).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `writing-fragments` — skills/in-progress/writing-fragments/SKILL.md:2 — defined here
- `explore` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `exploit` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `grilling session` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `fragment` — skills/in-progress/writing-fragments/SKILL.md:9 — defined here
- `What is a fragment` — skills/in-progress/writing-fragments/SKILL.md:23 — defined here
- `leading word` — skills/in-progress/writing-fragments/SKILL.md:36 — defined here
- `File format` — skills/in-progress/writing-fragments/SKILL.md:42 — defined here
- `Working title` — skills/in-progress/writing-fragments/SKILL.md:45 — defined here
- `Writing rhythm` — skills/in-progress/writing-fragments/SKILL.md:71 — defined here

## Structure
- What is a fragment — skills/in-progress/writing-fragments/SKILL.md:23
- File format — skills/in-progress/writing-fragments/SKILL.md:42
- Writing rhythm — skills/in-progress/writing-fragments/SKILL.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses the "novelist's diary" as an explicit mental model. Enforces a non-intrusive append workflow where the agent appends fragments silently without confirmation prompts, while re-reading disk state on every turn to preserve human edits.

## Context cost
3558 bytes, 80 lines, approximately 780 tokens.
