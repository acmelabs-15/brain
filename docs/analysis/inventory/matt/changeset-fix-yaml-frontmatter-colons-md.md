---
package: matt
path: .changeset/fix-yaml-frontmatter-colons.md
type: doc
bytes: 387
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .changeset/fix-yaml-frontmatter-colons.md

## Purpose — required, verbatim
> "An unquoted colon-space left over from the em-dash sweep in #905 made each block invalid YAML" — .changeset/fix-yaml-frontmatter-colons.md:5

## Design intent — required
Changeset entry recording a patch release fixing invalid YAML syntax across six skills (`to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, and `wait-what`). Solves an issue where unquoted colons followed by spaces in frontmatter descriptions broke discovery in `skills.sh`, preventing installation via `npx skills`.

## Phase — required
none

## Inputs — required
Skill frontmatter descriptions in affected skills and error reports from `skills.sh` discovery.

## Outputs — required
Properly quoted YAML frontmatter descriptions across six skills.

## Invokes — required
- skill to-spec — .changeset/fix-yaml-frontmatter-colons.md:5
- skill code-review — .changeset/fix-yaml-frontmatter-colons.md:5
- skill setup-matt-pocock-skills — .changeset/fix-yaml-frontmatter-colons.md:5
- skill writing-fragments — .changeset/fix-yaml-frontmatter-colons.md:5
- skill writing-shape — .changeset/fix-yaml-frontmatter-colons.md:5
- skill wait-what — .changeset/fix-yaml-frontmatter-colons.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `front matter` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `skills.sh` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `discovery` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights a subtle multi-harness compatibility requirement: YAML frontmatter descriptions containing `: ` must be wrapped in quotes, or standard YAML parsers misinterpret the text as nested key-value pairs, causing silent discovery failures in `skills.sh`.

## Context cost
387 bytes, ~95 tokens. Self-contained release note.
