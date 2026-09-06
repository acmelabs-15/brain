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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/fix-yaml-frontmatter-colons.md

## Purpose — required, verbatim
> "Quote the `description` front matter in `to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, and `wait-what`." — .changeset/fix-yaml-frontmatter-colons.md:5

## Design intent — required
Changeset documentation recording a patch fix for YAML parsing failures across six skills (`to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, and `wait-what`). Unquoted colons followed by spaces—introduced during an em-dash removal sweep—caused YAML frontmatter syntax errors. Consequently, the `skills.sh` discovery crawler silently skipped all six skills, preventing them from being listed or installed via `npx skills`.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

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
- `description` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `front matter` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `to-spec` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `code-review` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `setup-matt-pocock-skills` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `writing-fragments` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `writing-shape` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `wait-what` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `em-dash sweep` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `invalid YAML` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `skills.sh` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here
- `npx skills` — .changeset/fix-yaml-frontmatter-colons.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights parser fragility in ecosystem tooling: `skills.sh` fails silently on malformed YAML frontmatter rather than issuing validation warnings or errors.

## Context cost
387 bytes, 6 lines, approximately 90 tokens.
