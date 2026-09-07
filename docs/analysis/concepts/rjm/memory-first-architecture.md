---
package: rjm
name: Memory-First Architecture
slug: memory-first-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory-First Architecture

## Definition — verbatim
> "# ADR-007: Memory-First Architecture" — .agents/architecture/ADR-007-memory-first-architecture.md:12

## Also called — verbatim
> "ADR-007 (Memory-First Architecture) mandates memory retrieval before reasoning." — .agents/architecture/ADR-037-memory-router-architecture.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 12 | defined here | Founding architecture decision record establishing mandatory memory retrieval before reasoning across all agent operations. |
| .agents/architecture/ADR-037-memory-router-architecture.md | 31 | used here | Reaffirms the memory-first mandate requiring agents to query persistent memory before planning and reasoning. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 65 | used here | Positions context-corpus design on equal footing with ADR-007's foundational memory-first commitment. |

## Consumes
Persistent memory stores, past session retrospectives, and domain knowledge repositories.

## Produces
Context-grounded execution plans, memory retrieval records, and verified decision context.

## When applied
Mandated at the initiation of every agent session prior to any task planning or code generation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A core design principle of rjm dictating that an agent's effectiveness is bounded by what it remembers rather than what it computes from scratch. By requiring memory retrieval before planning or acting, it eliminates repetitive exploratory queries, preserves historical context across sessions, and ensures lessons learned in past tasks inform current execution.
