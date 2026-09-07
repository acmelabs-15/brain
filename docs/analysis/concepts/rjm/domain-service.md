---
package: rjm
name: Domain Service
slug: domain-service
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

# Domain Service

## Definition — verbatim
> "- **Domain Service**: a stateless operation that does not naturally belong on a single entity or value object." — .claude/skills/software-engineering-library/references/domain-driven-design.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 22 | defined here | Core vocabulary entry defining a domain service as a stateless operation across domain objects. |

## Consumes
Domain models, entities, or value objects requiring cross-aggregate orchestration.

## Produces
Stateless business evaluations, calculation outputs, or domain operation outcomes.

## When applied
Applied when behavior is significant in the domain but does not naturally belong on a single entity or value object.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Domain Service provides a dedicated structural home for domain operations that span multiple entities or calculate values without owning persistent state. By isolating such operations from entity lifecycles, it keeps entities focused on their own state invariants while avoiding god entities.
