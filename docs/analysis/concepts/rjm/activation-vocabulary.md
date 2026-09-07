---
package: rjm
name: Activation Vocabulary
slug: activation-vocabulary
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

# Activation Vocabulary

## Definition — verbatim
> "3. **Activation Vocabulary**: LLMs match on keyword associations, not symbolic lookup" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 43 | defined here | Defined as the associative keyword pattern enabling lexical LLM retrieval without vector embeddings. |

## Consumes
Domain-specific compound keywords, action verbs, and skill functionality summaries.

## Produces
High-density keyword lookup tables mapping associative terms to memory files.

## When applied
Applied when designing Level 1 domain indices for skill retrieval in Serena memory.

## Sub-concepts
pure-lookup-table-format

## Part of
tiered-index-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Activation vocabulary provides clusters of 10-15 associative keywords per skill in domain index tables. Because Serena lacks vector embeddings, these carefully curated keywords trigger LLM associative pattern matching during memory routing.
