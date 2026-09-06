---
package: matt
path: .changeset/wait-what-context-map.md
type: doc
bytes: 191
unit: inv-matt-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/wait-what-context-map.md, sha256: 6a01f1b4b3686179ceca13206e1bf3cb3cc8e1413ba71a47b15ab780ffd04e2a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .changeset/wait-what-context-map.md

## Purpose — required, verbatim
> "wait-what: follow `CONTEXT-MAP.md` to the right `CONTEXT.md` when a repo indexes multiple contexts that way instead of keeping a single root `CONTEXT.md`." — .changeset/wait-what-context-map.md:5

## Design intent — required
Documents a patch changeset adding support in `wait-what` for repositories that organize multiple context files via an index file `CONTEXT-MAP.md`. Instead of assuming a single repository root `CONTEXT.md`, `wait-what` follows the map index to the appropriate contextual documentation.

## Phase — required
none

## Inputs — required
Multi-context repository indexing patterns; `CONTEXT-MAP.md`.

## Outputs — required
Patch version changeset for `mattpocock-skills`; enhanced context discovery logic in `wait-what`.

## Invokes — required
- skill wait-what — .changeset/wait-what-context-map.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `wait-what` — .changeset/wait-what-context-map.md:5 — used here
- `CONTEXT-MAP.md` — .changeset/wait-what-context-map.md:5 — defined here
- `CONTEXT.md` — .changeset/wait-what-context-map.md:5 — used here

## Structure
- Frontmatter
- Changeset summary prose

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Introduces the concept of `CONTEXT-MAP.md` as an index pointing to modular `CONTEXT.md` files in repositories with multiple contexts/domains, extending `wait-what`'s context resolution strategy beyond a single monolithic root context file.

## Context cost
191 bytes, ~50 tokens. Loads no external files.
