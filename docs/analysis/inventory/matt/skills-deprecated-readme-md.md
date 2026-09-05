---
package: matt
path: skills/deprecated/README.md
type: skill
bytes: 160
unit: inv-matt-37
deprecated: true
aliases: []
memo_inputs:
  - {path: skills/deprecated/README.md, sha256: 8b2009e31b7353f318a4321901b1141377e4d395f092934bacde7e9c5b070e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/deprecated/README.md

## Purpose — required, verbatim
> "Skills I no longer use. This bucket is currently empty: a retired skill is deleted, and the changeset that removes it names whatever replaced it." — skills/deprecated/README.md:3

## Design intent — required
Defines the policy governing deprecated skills within the repository. Specifies that skills removed from active use are permanently deleted rather than left as decaying files in the `deprecated/` bucket, with historical rationale and replacement recommendations tracked via Changeset release entries. Confirms that this bucket is currently empty.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:7
- script scripts/link-skills.sh — scripts/link-skills.sh:25

## Concepts named — required, verbatim
- `Deprecated` — skills/deprecated/README.md:1 — defined here
- `retired skill` — skills/deprecated/README.md:3 — defined here
- `changeset` — skills/deprecated/README.md:3 — used here

## Structure
- `# Deprecated` — skills/deprecated/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides formal architectural clarification on lifecycle retirement for the repository: deprecated skills are not preserved in-tree, keeping the active codebase free of obsolete implementations.

## Context cost
160 bytes, 4 lines, approximately 40 tokens.
