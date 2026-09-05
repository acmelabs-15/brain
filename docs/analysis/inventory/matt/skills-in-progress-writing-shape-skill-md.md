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
verified: 2026-09-05 quote-check+coverage
---

# skills/in-progress/writing-shape/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit: shape raw material into an article, paragraph by paragraph." — skills/in-progress/writing-shape/SKILL.md:3

## Design intent — required
Shapes a fixed input pile of raw material (notes, fragments, transcripts) into a structured article document through an iterative paragraph-by-paragraph dialogue described as an "inverted grilling session." Rather than asking open-ended questions as in ideation, it challenges the author on argumentation order, paragraph utility, and transition rigor. Employs concept grounding to ensure that every necessary foundation is established either as a prerequisite or in preceding blocks, forces the author to choose among competing thesis-defining openings, and actively debates structural format choices (prose vs. list, inline vs. callout, table vs. repeated structure, quote vs. paraphrase, code block vs. inline code).

## Phase — required
none

## Inputs — required
- Markdown file of raw material (read-only input pile) (skills/in-progress/writing-shape/SKILL.md:9, 11).
- Target article document save path specified by user (skills/in-progress/writing-shape/SKILL.md:13).
- Author decisions on audience prerequisites, candidate opening thesis, paragraph sequencing, and block formatting (skills/in-progress/writing-shape/SKILL.md:21-26).

## Outputs — required
- Structured article markdown file appended paragraph by paragraph (skills/in-progress/writing-shape/SKILL.md:11, 25).

## Invokes — required
none

## Invoked by — required
- doc skills/in-progress/README.md — skills/in-progress/README.md:14

## Concepts named — required, verbatim
- `writing-shape` — skills/in-progress/writing-shape/SKILL.md:2 — defined here
- `input pile` — skills/in-progress/writing-shape/SKILL.md:9 — defined here
- `exploit` — skills/in-progress/writing-shape/SKILL.md:11 — used here
- `grounded` — skills/in-progress/writing-shape/SKILL.md:22 — defined here
- `Grounding` — skills/in-progress/writing-shape/SKILL.md:28 — defined here
- `concept` — skills/in-progress/writing-shape/SKILL.md:30 — used here
- `term` — skills/in-progress/writing-shape/SKILL.md:30 — used here
- `Prerequisite` — skills/in-progress/writing-shape/SKILL.md:34 — defined here
- `Introduced` — skills/in-progress/writing-shape/SKILL.md:35 — defined here
- `grilling session inverted` — skills/in-progress/writing-shape/SKILL.md:43 — defined here
- `quarry` — skills/in-progress/writing-shape/SKILL.md:55 — defined here
- `Prose vs. list` — skills/in-progress/writing-shape/SKILL.md:63 — defined here
- `Inline vs. callout` — skills/in-progress/writing-shape/SKILL.md:64 — defined here
- `Table vs. repeated structure` — skills/in-progress/writing-shape/SKILL.md:65 — defined here
- `Quote vs. paraphrase` — skills/in-progress/writing-shape/SKILL.md:66 — defined here
- `Code block vs. inline code` — skills/in-progress/writing-shape/SKILL.md:67 — defined here

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
Contrasts with `writing-beats` by shaping traditional paragraph/block structures rather than branchable narrative beats, and by explicitly verbalizing formatting tradeoffs out loud with the user at each step. Explicitly marks the raw input pile as read-only.

## Context cost
5922 bytes, 80 lines, ~1300 tokens. Loads no external files.
