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
verified: 2026-09-04 quote-check+coverage
---

# .changeset/wait-what-context-map.md

## Purpose — required, verbatim
> "wait-what: follow `CONTEXT-MAP.md` to the right `CONTEXT.md` when a repo indexes multiple contexts that way instead of keeping a single root `CONTEXT.md`." — .changeset/wait-what-context-map.md:5 (no explicit purpose statement)

## Design intent — required
Documents a patch to the `wait-what` skill adding support for routing through `CONTEXT-MAP.md` index files to locate module-specific `CONTEXT.md` documentation in multi-context codebases, rather than assuming only a single root `CONTEXT.md` exists.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `mattpocock-skills` — .changeset/wait-what-context-map.md:2 — used here
- `wait-what` — .changeset/wait-what-context-map.md:5 — used here
- `CONTEXT-MAP.md` — .changeset/wait-what-context-map.md:5 — used here
- `CONTEXT.md` — .changeset/wait-what-context-map.md:5 — used here

## Structure
- (no headings)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates context map indexing in agent workflows: larger projects can partition context into modular files indexed by `CONTEXT-MAP.md` to avoid single-file context bloat.

## Context cost
191 bytes (~48 tokens). Changeset documentation.
