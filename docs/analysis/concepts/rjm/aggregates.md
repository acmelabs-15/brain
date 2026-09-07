---
package: rjm
name: Aggregates
slug: aggregates
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

# Aggregates

## Definition — verbatim
> "## Aggregates" — .claude/skills/software-engineering-library/references/domain-driven-design.md:85

## Also called — verbatim
`Aggregate` — .claude/skills/software-engineering-library/references/domain-driven-design.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 85 | defined here | Section heading establishing pattern guidance for consistency boundaries and transactional change units. |

## Consumes
Cohesive clusters of entities, value objects, and business invariants.

## Produces
Transactional consistency boundaries governed by a single aggregate root.

## When applied
Applied when two entities must always agree on a state transition, an invariant must be strictly enforced at a single point, or change sets risk racing on shared state.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Aggregates enforce transactional consistency and protect invariants across clusters of domain objects. Requiring all external operations to enter exclusively through the aggregate root prevents partial updates and guarantees data integrity under concurrent execution.
