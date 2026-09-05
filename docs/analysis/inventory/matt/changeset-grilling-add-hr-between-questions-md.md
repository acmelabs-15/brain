---
package: matt
path: .changeset/grilling-add-hr-between-questions.md
type: doc
bytes: 169
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/grilling-add-hr-between-questions.md, sha256: bcc1cc80f58662c9d2b40680bced44da7fa273f689a2b7eaf863a0da65790433}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .changeset/grilling-add-hr-between-questions.md

## Purpose — required, verbatim
> "grilling: update the round template so consecutive questions are separated by a horizontal rule (`---`) instead of running together." — .changeset/grilling-add-hr-between-questions.md:5

## Design intent — required
Changeset entry recording a patch update to the `grilling` skill round template, inserting horizontal rules between consecutive questions to prevent interview prompts from running together and to clarify the question structure for the user.

## Phase — required
none

## Inputs — required
User experience feedback on multi-question rounds in `grilling`.

## Outputs — required
Updated markdown template with horizontal rules (`---`) in `skills/productivity/grilling/SKILL.md`.

## Invokes — required
- skill grilling — .changeset/grilling-add-hr-between-questions.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — .changeset/grilling-add-hr-between-questions.md:5 — used here
- `round template` — .changeset/grilling-add-hr-between-questions.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Visual layout optimization for agent interview protocols: dividing interactive grilling rounds with explicit horizontal rules creates natural perceptual pauses and makes questions easier to read and address sequentially.

## Context cost
169 bytes, ~40 tokens. Self-contained release note.
