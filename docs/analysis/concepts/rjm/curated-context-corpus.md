---
package: rjm
name: curated context corpus
slug: curated-context-corpus
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# curated context corpus

## Definition — verbatim
> "The Curated Context Corpus IS the Product, Orchestration Is Plumbing" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 21 | defined here | Core thesis defining the curated collection of context artifacts as the primary product of the repository |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 81 | defined here | Research frontier thesis framing the corpus as the single durable asset across model generations |

## Consumes
Architectural decision records, memory notes, agent definitions, guidelines, and project specifications.

## Produces
Rich, high-fidelity prompt contexts assembled dynamically for LLM task execution.

## When applied
Maintained continuously across the repository lifecycle and referenced during context assembly for agent operations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
The curated context corpus is rjm's central architectural concept: because LLMs do not learn between invocations, the repository's primary durable asset is its structured body of instructions, memories, and decisions assembled into prompt context rather than ephemeral orchestration frameworks.
