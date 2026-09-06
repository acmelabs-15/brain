---
package: matt
name: DDD
slug: ddd
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# DDD

## Definition — verbatim
(used, not defined)

> "DDD gets less useful the closer it gets to the implementation: the payoff is upstream, in naming and concept alignment, not in aggregates and layer ceremony." — docs/engineering/domain-modeling.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/domain-modeling.md | 70 | used here | Evaluated as an architectural approach whose primary value is upstream in naming and concept alignment rather than aggregate layers. |
| external/domain-modeling.md | 58 | used here | Analyzed in external documentation regarding the pragmatic limits of domain-driven design in agent workflows. |

## Consumes
Business domain requirements, problem domain concepts, and ubiquitous language discussions.

## Produces
Conceptual models, ubiquitous language glossaries (`CONTEXT.md`), and bounded contexts.

## When applied
During system design and domain modeling to align terminology before writing code.

## Sub-concepts
bounded-area, ubiquitous-language

## Part of
domain-modeling

## Implementation status
clean in methodology reference; documented limitation in docs/engineering/domain-modeling.md:70 regarding diminishing returns of tactical DDD ceremonies

## Design notes
Domain-Driven Design (Eric Evans). In Matt's philosophy, DDD is valued almost entirely for its strategic upstream capabilities (ubiquitous language, bounded contexts, concept alignment) rather than tactical implementation ceremonies (aggregates, repositories, entities).
