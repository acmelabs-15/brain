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
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/writing-shape/SKILL.md

## Purpose — required, verbatim
> "Writing, exploit: shape raw material into an article, paragraph by paragraph." — skills/in-progress/writing-shape/SKILL.md:3

## Design intent — required
Takes a markdown file of raw writing material (the "pile") and shapes it into a cohesive article paragraph by paragraph through an adversarial editorial dialogue ("grilling session inverted"). Enforces conceptual grounding: prerequisites are established upfront, openings define the core thesis, and each subsequent block can only build on already-grounded concepts while explicitly debating format choices (prose vs list, inline vs callout, table vs repeated structure, quote vs paraphrase, code block vs inline code).

## Phase — required
none

## Inputs — required
- Markdown file of raw material (fragments, transcript, notes) (`skills/in-progress/writing-shape/SKILL.md:9`)
- Destination path for the article (`skills/in-progress/writing-shape/SKILL.md:13`)
- User decisions on candidate openings, block progression, and format arguments (`skills/in-progress/writing-shape/SKILL.md:23-24`)

## Outputs — required
- Finished article document grown incrementally without overwriting the input pile (`skills/in-progress/writing-shape/SKILL.md:11,25`)

## Invokes — required
none

## Invoked by — required
- doc README.md — skills/in-progress/README.md:14

## Concepts named — required, verbatim
- `writing-shape` — skills/in-progress/writing-shape/SKILL.md:2 — defined here
- `input pile` — skills/in-progress/writing-shape/SKILL.md:9 — defined here
- `exploit` — skills/in-progress/writing-shape/SKILL.md:11 — defined here
- `prerequisites` — skills/in-progress/writing-shape/SKILL.md:22 — defined here
- `grounded` — skills/in-progress/writing-shape/SKILL.md:22 — defined here
- `candidate openings` — skills/in-progress/writing-shape/SKILL.md:23 — defined here
- `grounding` — skills/in-progress/writing-shape/SKILL.md:28 — defined here
- `concept` — skills/in-progress/writing-shape/SKILL.md:30 — defined here
- `term` — skills/in-progress/writing-shape/SKILL.md:30 — defined here
- `prerequisite` — skills/in-progress/writing-shape/SKILL.md:34 — defined here
- `introduced` — skills/in-progress/writing-shape/SKILL.md:35 — defined here
- `grilling session inverted` — skills/in-progress/writing-shape/SKILL.md:43 — defined here

## Structure
- `name: writing-shape` — skills/in-progress/writing-shape/SKILL.md:2
- `<what-to-do>` — skills/in-progress/writing-shape/SKILL.md:7
- `<supporting-info>` — skills/in-progress/writing-shape/SKILL.md:17
- `## The loop` — skills/in-progress/writing-shape/SKILL.md:19
- `## Grounding` — skills/in-progress/writing-shape/SKILL.md:28
- `## Conversational feel` — skills/in-progress/writing-shape/SKILL.md:41
- `## Pulling from the pile` — skills/in-progress/writing-shape/SKILL.md:53
- `## Format arguments to actually have` — skills/in-progress/writing-shape/SKILL.md:59
- `## Writing rhythm` — skills/in-progress/writing-shape/SKILL.md:69
- `## Out of scope` — skills/in-progress/writing-shape/SKILL.md:73

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pairs with `writing-fragments` as the exploit phase to its explore phase.
- Frames editorial assistance as an argumentative partner ("grilling session inverted") that challenges weak transitions, tests paragraph necessity ("If I cut this, what breaks?"), and forces deliberate formatting decisions (e.g. prose vs list).

## Context cost
5922 bytes (~1480 tokens). Self-contained prompt without external dependencies.
