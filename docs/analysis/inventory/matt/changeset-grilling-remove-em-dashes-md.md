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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/grilling-remove-em-dashes.md

## Purpose — required, verbatim
> "grilling: remove em-dashes from `SKILL.md`, replacing them with colons and semicolons so the instructions read as plain text." — .changeset/grilling-remove-em-dashes.md:5

## Design intent — required
Changeset documentation recording typographical cleanup in `grilling/SKILL.md`. Eliminates unicode em-dashes in favor of ASCII colons and semicolons, ensuring plain text terminal compatibility across diverse developer environments and harnesses.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill grilling — .changeset/grilling-remove-em-dashes.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — .changeset/grilling-remove-em-dashes.md:5 — used here
- `em-dashes` — .changeset/grilling-remove-em-dashes.md:5 — used here
- `SKILL.md` — .changeset/grilling-remove-em-dashes.md:5 — used here
- `plain text` — .changeset/grilling-remove-em-dashes.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Precursor cleanup to the subsequent em-dash removal sweep that inadvertently introduced colon-space YAML frontmatter syntax errors documented in `#905`.

## Context cost
162 bytes, 6 lines, approximately 40 tokens.
