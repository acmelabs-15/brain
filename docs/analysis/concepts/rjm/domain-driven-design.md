---
package: rjm
name: Domain-Driven Design
slug: domain-driven-design
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain-Driven Design

## Definition — verbatim
> "This rule consolidates the Domain-Driven Design patterns from Eric Evans's _Domain-Driven Design_ (the \"Blue Book\"), Vaughn Vernon's _Domain-Driven Design Distilled_, and _Implementing Domain-Driven Design_." — .claude/skills/software-engineering-library/references/domain-driven-design.md:4

## Also called — verbatim
> "# Domain-Driven Design" — .claude/skills/software-engineering-library/references/domain-driven-design.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 52 | used here | Cited as reference for bounded-context and ubiquitous language review. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 2 | defined here | Reference document heading defining DDD patterns for the codebase. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 134 | used here | Domain modeling guideline informing Step 1 ontology creation in specifications. |
| scripts/eval/software_engineering_library_activation_ci.py | 16 | used here | Configuration entry tracking activation evaluation of DDD patterns. |
| scripts/eval/software_engineering_library_activation_gate.py | 22 | used here | Gate tracking activation and quality metrics for domain-driven design. |

## Consumes
Problem domain requirements, agent boundaries, and system integration contracts.

## Produces
Explicit bounded contexts, ubiquitous language definitions, aggregates, entities, and value objects.

## When applied
Applied when modifying agent definitions, orchestration boundaries, or cross-boundary handoffs.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
A software design methodology in rjm establishing bounded contexts, ubiquitous language, and domain models to structure multi-agent coordination, session lifecycles, and cross-boundary translations.
