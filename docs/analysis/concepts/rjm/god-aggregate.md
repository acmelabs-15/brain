---
package: rjm
name: God Aggregate
slug: god-aggregate
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

# God Aggregate

## Definition — verbatim
> "- **God Aggregate**: one aggregate root holds half the model and locks the world on every change. Split by invariant; reference siblings by identity." — .claude/skills/software-engineering-library/references/domain-driven-design.md:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 233 | defined here | Anti-pattern catalog entry identifying oversized aggregates that violate transactional isolation and concurrency. |

## Consumes
Oversized aggregates and bloated domain models locking extensive state.

## Produces
Refactoring recommendations to split oversized aggregates by invariant and reference siblings by identity.

## When applied
Identified during architecture reviews and code reviews when a single aggregate root attempts to control too much domain state.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
God Aggregate is an anti-pattern where an aggregate root accumulates excessive domain entities, causing widespread lock contention, memory overhead, and unmanageable transaction boundaries. Enforcing small, invariant-focused aggregates protects system concurrency.
