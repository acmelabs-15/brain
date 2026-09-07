---
package: rjm
name: Memory evolution
slug: memory-evolution
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory evolution

## Definition — verbatim
> "Memory evolution: New memories trigger updates to existing memory attributes" — .agents/architecture/ADR-007-memory-first-architecture.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 74 | used here | Highlighted as an A-MEM capability where adding new memories dynamically updates existing memory attributes. |

## Consumes
Newly extracted operational learnings, existing memory entries, and relational graph schemas.

## Produces
Updated attributes, revised tags, and recalibrated relationship weights on existing memory nodes.

## When applied
Triggered whenever a new memory entry is incorporated into the memory graph that alters or refines prior understandings.

## Sub-concepts
none

## Part of
a-mem

## Implementation status
not-implemented

## Design notes
An advanced memory maintenance technique from A-MEM research where the ingestion of new operational learnings actively updates the attributes, summaries, and associations of pre-existing memory nodes. This ensures that institutional knowledge stays accurate and contextualized as the codebase evolves over time.
