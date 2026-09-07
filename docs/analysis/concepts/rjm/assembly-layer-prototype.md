---
package: rjm
name: Assembly-layer prototype
slug: assembly-layer-prototype
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Assembly-layer prototype

## Definition — verbatim
> "What does a context-assembly layer look like in practice (RAG, rule-based, agent-mediated, hybrid)? Likely needs prototyping before deciding." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 70 | defined here | Named as an open downstream question requiring practical prototyping of context assembly mechanisms. |

## Consumes
Catalogued context artifacts and candidate retrieval/assembly mechanisms (RAG, rule-based, agent-mediated).

## Produces
Working prototype and architectural evaluation of context assembly layers.

## When applied
When designing automated context ingestion and prompt assembly pipelines.

## Sub-concepts
none

## Part of
context-corpus

## Implementation status
not-implemented (ADR-069 open question deferred to downstream prototyping)

## Design notes
An experimental prototype evaluating how best to assemble disparate context files into prompts (via RAG, rules, or agents) before committing to a system-wide assembly architecture.
