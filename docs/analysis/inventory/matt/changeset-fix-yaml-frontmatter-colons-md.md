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
verified: 2026-09-04 quote-check+coverage
---

# .changeset/fix-yaml-frontmatter-colons.md

## Purpose — required, verbatim
> "Quote the `description` front matter in `to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, and `wait-what`. An unquoted colon-space left over from the em-dash sweep in #905 made each block invalid YAML, so `skills.sh` skipped all six during discovery and they couldn't be listed or installed via `npx skills`." — .changeset/fix-yaml-frontmatter-colons.md:5 (no explicit purpose statement)

## Design intent — required
Documents a bugfix changeset quoting the YAML `description` frontmatter across six skills (`to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, `wait-what`). Explains the root cause and downstream defect: unquoted colon-space sequences introduced by an em-dash replacement script produced invalid YAML, which caused `skills.sh` to silently skip all six skills during discovery.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `description` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `to-spec` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `code-review` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `setup-matt-pocock-skills` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `writing-fragments` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `writing-shape` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `wait-what` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `skills.sh` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here

## Structure
- Changeset package bump header — .changeset/fix-yaml-frontmatter-colons.md:1
- Bugfix description — .changeset/fix-yaml-frontmatter-colons.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/fix-yaml-frontmatter-colons.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Illustrates how strict YAML frontmatter parsers in skill distribution tools (`skills.sh`) fail when unquoted colons appear in description text.

## Context cost
387 bytes, ~90 tokens.
