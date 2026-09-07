---
package: rjm
name: Serena memory system
slug: serena-memory-system
kind: reference
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena memory system

## Definition — verbatim
> "The Serena memory system stores learned skills and patterns in `.serena/memories/`." — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 24 | used here | Introduced as the repository memory subsystem storing learned skills and patterns in .serena/memories/. |

## Consumes
Learned skills, patterns, session context, and markdown memory files.

## Produces
Persistent memory files, domain indices, and keyword-indexed skill retrieval.

## When applied
Invoked when agents need to store or retrieve cross-session memories, patterns, or skills.

## Sub-concepts
tiered-index-architecture, activation-vocabulary

## Part of
none

## Implementation status
out-of-scope

## Design notes
The Serena memory system is an external persistent memory architecture in rjm excluded from the lifecycle scope under METHOD.md §1.2. In architectural discussions it represents the persistent knowledge storage backing learned skills and retrieval indices.
