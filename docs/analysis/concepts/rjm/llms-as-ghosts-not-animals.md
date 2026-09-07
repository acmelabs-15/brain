---
package: rjm
name: LLMs as Ghosts not Animals
slug: llms-as-ghosts-not-animals
kind: pattern
package_phase: none
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

# LLMs as Ghosts not Animals

## Definition — verbatim
> "there is **no learning between runs**. Each invocation is a fresh ghost summoning." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 45 | used here | Foundational mental model positing that models retain no state between runs and require context hydration |

## Consumes
none

## Produces
Guiding mental model for agent architecture and context engineering.

## When applied
Applied as a core architectural constraint when designing context persistence and prompt hydration mechanisms.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
LLMs as Ghosts not Animals is an architectural mental model in rjm establishing that LLMs possess no persistent memory or ongoing organic adaptation; each invocation is an isolated summoning whose behavior depends entirely on the explicit context provided.
