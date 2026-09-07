---
package: rjm
name: Tiered Memory
slug: tiered-memory
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tiered Memory

## Definition — verbatim
(used, not defined)

> "Integration with Tiered Memory" — .agents/architecture/ADR-007-memory-first-architecture.md:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 317 | used here | Section heading outlining integration between agent sidecars, Serena tiers, and vector indexes. |

## Consumes
Repository memory stores, agent sidecars, domain indexes, and local vector embeddings.

## Produces
Hierarchical memory retrieval routing between fast index summaries, full markdown files, and vector searches.

## When applied
When retrieving or persisting memory items across different stages of task execution to balance retrieval speed and context window budget.

## Sub-concepts
serena-memory, sidecar-memories

## Part of
memory-first-architecture

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A multi-level persistence and retrieval pattern that organizes project knowledge across distinct tiers—from global repository-wide Serena files and domain indexes down to private agent sidecars. This tiered structure ensures rapid, targeted lookup while controlling token expenditure in prompt contexts.
