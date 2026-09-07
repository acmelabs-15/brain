---
package: rjm
name: 4-tier memory architecture
slug: 4-tier-memory-architecture
kind: pattern
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

# 4-tier memory architecture

## Definition — verbatim
> "4-tier memory architecture (AgentDB, ReasoningBank, SQLite, JSON fallback)" — .agents/architecture/ADR-007-memory-first-architecture.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 41 | used here | Cited from ruvnet/claude-flow research as a prior architectural pattern for memory persistence. |

## Consumes
Agent reasoning steps, vector embeddings, and structured problem-solving context.

## Produces
Tiered data representations across database and file-based fallback stores.

## When applied
Evaluated during architectural research into memory-first agent workflows to enable cross-session pattern discovery.

## Sub-concepts
none

## Part of
memory-first-architecture

## Implementation status
not-implemented

## Design notes
A layered persistence model researched from ruvnet/claude-flow comprising AgentDB, ReasoningBank, SQLite, and JSON fallback. It served as background research during the formulation of ADR-007, illustrating how vector acceleration and tiered storage backends support high solve rates in coding agents.
