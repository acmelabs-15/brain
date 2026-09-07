---
package: rjm
name: Bounded Context
slug: bounded-context
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bounded Context

## Definition — verbatim
> "- **Bounded Context**: an explicit boundary inside which a single model is valid and a single ubiquitous language applies. The same word can mean different things in two contexts; that is normal and the boundary is what makes it safe." — .claude/skills/software-engineering-library/references/domain-driven-design.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 16 | defined here | Defined in core vocabulary as an explicit boundary for a single model and ubiquitous language. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 26 | defined here | Section heading introducing rules and guidelines for establishing bounded context boundaries. |

## Consumes
Subdomain models, ubiquitous language glossaries, integration boundary requirements.

## Produces
An explicit architectural perimeter that encapsulates a unified domain model and shields it from foreign semantic assumptions.

## When applied
Applied when distinct parts of a system use the same term with different semantics, or when decoupled evolution of system modules is required.

## Sub-concepts
ubiquitous-language

## Part of
none

## Implementation status
clean

## Design notes
A Bounded Context defines the explicit boundary within which a specific domain model and its ubiquitous language apply uniformly, ensuring that concepts evolve independently and semantic ambiguities are resolved at explicit integration seams.
