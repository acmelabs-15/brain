---
package: rjm
name: Anti-Corruption Layer
slug: anti-corruption-layer
kind: pattern
package_phase: cross-phase
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

# Anti-Corruption Layer

## Definition — verbatim
> "- **Anti-Corruption Layer (ACL)**: a translation layer at the boundary between two bounded contexts that prevents the model of one from leaking into the other." — .claude/skills/software-engineering-library/references/domain-driven-design.md:23

## Also called — verbatim
`ACL` — .claude/skills/software-engineering-library/references/domain-driven-design.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 23 | defined here | Core vocabulary entry defining an anti-corruption layer as a translation boundary between bounded contexts. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 165 | defined here | Dedicated pattern section specifying application rules, constraints, translation symmetry, and removal criteria for anti-corruption layers. |

## Consumes
Foreign data models, third-party API payloads, or legacy system schemas.

## Produces
Translated domain entities, value objects, and native domain error types conforming to the local ubiquitous language.

## When applied
Applied when integrating with an external system whose data model does not fit the domain, bridging two bounded contexts that evolved separately, or migrating off an old model.

## Sub-concepts
none

## Part of
context-mapping

## Implementation status
clean

## Design notes
An Anti-Corruption Layer acts as an insulating membrane preserving the purity of a bounded context's domain model. By encapsulating all schema translation, field mapping, and foreign protocol semantics within dedicated boundary adapters, it prevents foreign data representations from leaking into core application logic.
