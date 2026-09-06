---
package: matt
path: skills/in-progress/writing-shape/SKILL.md
type: skill
bytes: 5922
unit: inv-matt-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/in-progress/writing-shape/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit: shape raw material into an article, paragraph by paragraph." — skills/in-progress/writing-shape/SKILL.md:3

## Design intent — required
Guides an author through the exploit stage of writing by methodically shaping an unstructured raw material pile (notes, fragments, transcripts) into a coherent, structured article block by block. Operates as an inverted grilling session where the agent rigorously challenges narrative flow, cuts weak transitions, and enforces grounding rules so that no block references an unintroduced concept. Actively debates formatting tradeoffs (prose vs list, inline vs callout, table vs repeated structure, quote vs paraphrase, code block vs inline code) while maintaining the raw material as strictly read-only.

## Phase — required
none

## Inputs — required
Markdown file of raw material (the input pile; treated as read-only) (`skills/in-progress/writing-shape/SKILL.md:9, 11`), target article save path (`skills/in-progress/writing-shape/SKILL.md:13`), and author decisions on openings, block sequence, and formatting tradeoffs (`skills/in-progress/writing-shape/SKILL.md:23-26, 61`).

## Outputs — required
Separately created and progressively appended article markdown file (`skills/in-progress/writing-shape/SKILL.md:11, 25`).

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `writing-shape` — skills/in-progress/writing-shape/SKILL.md:2 — defined here
- `input pile` — skills/in-progress/writing-shape/SKILL.md:9 — defined here
- `exploit` — skills/in-progress/writing-shape/SKILL.md:11 — defined here
- `The loop` — skills/in-progress/writing-shape/SKILL.md:19 — defined here
- `Grounding` — skills/in-progress/writing-shape/SKILL.md:22 — defined here
- `Prerequisite` — skills/in-progress/writing-shape/SKILL.md:34 — defined here
- `Introduced` — skills/in-progress/writing-shape/SKILL.md:35 — defined here
- `Conversational feel` — skills/in-progress/writing-shape/SKILL.md:41 — defined here
- `grilling session` — skills/in-progress/writing-shape/SKILL.md:43 — defined here
- `Pulling from the pile` — skills/in-progress/writing-shape/SKILL.md:53 — defined here
- `Format arguments to actually have` — skills/in-progress/writing-shape/SKILL.md:59 — defined here
- `Prose vs. list` — skills/in-progress/writing-shape/SKILL.md:63 — defined here
- `Inline vs. callout` — skills/in-progress/writing-shape/SKILL.md:64 — defined here
- `Table vs. repeated structure` — skills/in-progress/writing-shape/SKILL.md:65 — defined here
- `Quote vs. paraphrase` — skills/in-progress/writing-shape/SKILL.md:66 — defined here
- `Code block vs. inline code` — skills/in-progress/writing-shape/SKILL.md:67 — defined here
- `Writing rhythm` — skills/in-progress/writing-shape/SKILL.md:69 — defined here
- `Out of scope` — skills/in-progress/writing-shape/SKILL.md:73 — defined here

## Structure
- The loop — skills/in-progress/writing-shape/SKILL.md:19
- Grounding — skills/in-progress/writing-shape/SKILL.md:28
- Conversational feel — skills/in-progress/writing-shape/SKILL.md:41
- Pulling from the pile — skills/in-progress/writing-shape/SKILL.md:53
- Format arguments to actually have — skills/in-progress/writing-shape/SKILL.md:59
- Writing rhythm — skills/in-progress/writing-shape/SKILL.md:69
- Out of scope — skills/in-progress/writing-shape/SKILL.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts with `writing-beats` by focusing on paragraph-level prose construction and visual formatting rather than beat-by-beat game-like branching. Explicitly identifies what is out of scope (mining new fragments, editing the raw material file, publishing/formatting for specific platforms).

## Context cost
5922 bytes, 80 lines, approximately 1250 tokens.
