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
verified: 2026-09-04 quote-check+coverage
---

# .changeset/grilling-add-hr-between-questions.md

## Purpose — required, verbatim
> "grilling: update the round template so consecutive questions are separated by a horizontal rule (`---`) instead of running together." — .changeset/grilling-add-hr-between-questions.md:5 (no explicit purpose statement)

## Design intent — required
Documents a formatting patch for the `grilling` skill round template. Ensures consecutive interview questions in an interactive grilling round are visually delimited with horizontal rules (`---`) rather than running together as continuous text.

## Phase — required
matt:Grilling

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — .changeset/grilling-add-hr-between-questions.md:5 — used here
- `round template` — .changeset/grilling-add-hr-between-questions.md:5 — defined here

## Structure
- Changeset package bump header — .changeset/grilling-add-hr-between-questions.md:1
- Formatting update summary — .changeset/grilling-add-hr-between-questions.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/grilling-add-hr-between-questions.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Improves conversational interface UX by introducing visual boundaries between multi-part grilling questions.

## Context cost
169 bytes, ~40 tokens.
