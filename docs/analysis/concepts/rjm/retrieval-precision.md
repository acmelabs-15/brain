---
package: rjm
name: Retrieval Precision
slug: retrieval-precision
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Retrieval Precision

## Definition — verbatim
> "2. **Retrieval Precision**: Load only what's needed for the current task" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 42 | used here | Established as a decision driver ensuring retrieval loads only task-essential knowledge. |

## Consumes
Task context, search queries, and targeted retrieval indices.

## Produces
Highly specific knowledge injection with zero unrelated context loaded.

## When applied
Applied whenever an agent queries memory or selects skills for an operational task.

## Sub-concepts
activation-vocabulary

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Retrieval precision measures an agent's ability to locate and ingest only the exact skill or memory needed for an active task. High precision avoids diluting LLM attention with irrelevant domain instructions.
