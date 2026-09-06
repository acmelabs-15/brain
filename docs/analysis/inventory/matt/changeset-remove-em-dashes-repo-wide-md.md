---
package: matt
path: .changeset/remove-em-dashes-repo-wide.md
type: doc
bytes: 350
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .changeset/remove-em-dashes-repo-wide.md

## Purpose — required, verbatim
> "Remove every em-dash from the repo's prose (docs, `SKILL.md` files, ADRs, `README.md`, scripts, JSON/YAML metadata), hand-rewriting each sentence with a comma, colon, period, parentheses, or conjunction rather than mechanically substituting the character." — .changeset/remove-em-dashes-repo-wide.md:5

## Design intent — required
Documents a repository-wide patch changeset eliminating em-dashes across all documentation, skill markdown files, ADRs, README files, scripts, and JSON/YAML metadata. Instead of mechanical substitution, prose was rewritten by hand using alternative punctuation or conjunctions to improve readability and prevent encoding issues. It also notes that `CLAUDE.md`/`AGENTS.md` was updated to instruct agents not to reintroduce them.

## Phase — required
none

## Inputs — required
Existing prose across repository files: documentation, `SKILL.md` files, ADRs, `README.md`, scripts, JSON and YAML metadata.

## Outputs — required
Patch version changeset for `mattpocock-skills`; updated prose across repository files; updated instructions in `CLAUDE.md` and `AGENTS.md`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `em-dash` — .changeset/remove-em-dashes-repo-wide.md:5 — defined here
- `SKILL.md` — .changeset/remove-em-dashes-repo-wide.md:5 — used here
- `ADRs` — .changeset/remove-em-dashes-repo-wide.md:5 — used here
- `README.md` — .changeset/remove-em-dashes-repo-wide.md:5 — used here
- `CLAUDE.md` — .changeset/remove-em-dashes-repo-wide.md:5 — used here
- `AGENTS.md` — .changeset/remove-em-dashes-repo-wide.md:5 — used here

## Structure
- Frontmatter
- Changeset summary prose

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly references `AGENTS.md`, which is a symlink pointing to `CLAUDE.md` in `sources/matt/` (as catalogued in Unit Facts §1.1). Establishes a style guideline prohibiting em-dashes in repository prose and instructions.

## Context cost
350 bytes, ~80 tokens. Loads no external files.
