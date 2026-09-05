---
package: matt
path: .changeset/grilling-remove-em-dashes.md
type: doc
bytes: 162
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/grilling-remove-em-dashes.md, sha256: 149094700d65fd5a4660e710603a70d65e24a3e12b755ffb54b51eaf0534303f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .changeset/grilling-remove-em-dashes.md

## Purpose — required, verbatim
> "grilling: remove em-dashes from `SKILL.md`, replacing them with colons and semicolons so the instructions read as plain text." — .changeset/grilling-remove-em-dashes.md:5 (no explicit purpose statement)

## Design intent — required
Documents a stylistic patch to the `grilling` skill instructions. Removes typographical em-dashes across `SKILL.md`, substituting colons and semicolons so the prompt instructions read as plain ASCII text.

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
- `grilling` — .changeset/grilling-remove-em-dashes.md:5 — used here
- `SKILL.md` — .changeset/grilling-remove-em-dashes.md:5 — used here

## Structure
- Changeset package bump header — .changeset/grilling-remove-em-dashes.md:1
- Instruction cleanup summary — .changeset/grilling-remove-em-dashes.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/grilling-remove-em-dashes.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Part of a repo-wide initiative to standardize prompt instructions on plain punctuation.

## Context cost
162 bytes, ~40 tokens.
