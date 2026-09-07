---
package: rjm
name: Advanced Hooks System
slug: advanced-hooks-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Advanced Hooks System

## Definition — verbatim
> "4. **Advanced Hooks System**: Lifecycle automation for pre/post operations" — .agents/analysis/claude-flow-architecture-analysis.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 16 | defined here | Highlights lifecycle automation hooks for pre- and post-operations as a key differentiator. |

## Consumes
Agent tool calls, task start/completion events, and filesystem modification triggers.

## Produces
Automated lifecycle interceptors, checkpointing triggers, and validation handlers.

## When applied
Applied throughout agent execution sessions to automatically enforce protocol invariants and persist state.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A lifecycle automation architecture identified in claude-flow that registers pre-task, post-task, pre-edit, and post-edit hooks, establishing the design precedent for rjm's automated protocol enforcement in ADR-008.
