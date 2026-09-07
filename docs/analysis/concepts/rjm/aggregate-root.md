---
package: rjm
name: Aggregate Root
slug: aggregate-root
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

# Aggregate Root

## Definition — verbatim
> "- **Aggregate**: a cluster of entities and value objects with one **Aggregate Root**. The aggregate is the unit of consistency and the unit of transactional change." — .claude/skills/software-engineering-library/references/domain-driven-design.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 20 | defined here | Defined within the aggregate entry as the single primary entity root governing aggregate access and consistency. |

## Consumes
Aggregate members, external invocation requests.

## Produces
Guarded entry point enforcing transactional invariants for all internal aggregate entities.

## When applied
Applied to designate the single gateway entity through which external references interact with an aggregate.

## Sub-concepts
none

## Part of
aggregate

## Implementation status
clean

## Design notes
The Aggregate Root is the specific entity within an aggregate that holds global identity and acts as the sole entry point for external callers, protecting internal invariants and ensuring data consistency across all child entities.
