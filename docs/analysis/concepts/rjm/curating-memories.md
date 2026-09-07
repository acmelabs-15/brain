---
package: rjm
name: curating-memories
slug: curating-memories
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/integration-and-design.md, sha256: 37a4ebbbef480bfe271c45cbd567a65f527f81114f9f955e9ec7f8de6b401624}
  - {path: scripts/eval/examples/example-overlap-pairs.json, sha256: 77d2b12aee62aa503e2ce7b72d57abc2568f642f0719a2063254d825fbb0e0cd}
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# curating-memories

## Definition — verbatim
(used, not defined)

> "### Relationship to `curating-memories`" — .claude/skills/reflect/references/integration-and-design.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/integration-and-design.md | 62 | used here | Section explaining relationship between session reflection and external memory curation. |
| scripts/eval/examples/example-overlap-pairs.json | 4 | used here | Live evaluated skill pair testing pairwise overlap against memory-enhancement. |
| scripts/eval/examples/overlap-pairs-issue-1949.json | 4 | used here | Pairwise overlap evaluation dataset testing content curation boundary distinctions. |

## Consumes
Stale, conflicting, or duplicated memory entries and observation sidecars.

## Produces
Consolidated, pruned, or linked memory artifacts with superseded markers.

## When applied
When sidecar observation files accumulate conflicting guidance or during periodic memory hygiene passes.

## Sub-concepts
none

## Part of
memory-system

## Implementation status
out-of-scope

## Design notes
An excluded memory maintenance skill responsible for linking, consolidating, and pruning knowledge graph memories, referenced in reflection integration and skill overlap evaluation fixtures.
