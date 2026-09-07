---
package: rjm
name: RAG
slug: rag
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RAG

## Definition — verbatim
(used, not defined)

> "- Not \"RAG is dead.\" The model should handle retrieval decisions in large context windows." — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 29 | used here | Clarifies that retrieval-augmented generation remains valid provided the model itself controls context selection within expanded context windows. |

## Consumes
External document repositories, embeddings, and searchable knowledge bases.

## Produces
Context-augmented prompts combining external factual data with model reasoning.

## When applied
Applied when models need up-to-date facts, codebase specifics, or private documentation outside their weights.

## Sub-concepts
none

## Part of
retrieval-architecture

## Implementation status
defects: missing-path

## Design notes
RAG (Retrieval-Augmented Generation) in rjm's architecture framework represents grounding model operations in dynamic document retrieval. The Bitter Lesson notes that rather than declaring RAG dead in the era of multi-million-token contexts, retrieval architecture should evolve to let the model decide what to retrieve and inspect rather than relying on deterministic pre-processing.
