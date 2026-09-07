---
package: rjm
name: Entity
slug: entity
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

# Entity

## Definition — verbatim
> "- **Entity**: a domain object identified by stable identity, not by the values of its fields. Two entities with identical fields are still different if their identities differ." — .claude/skills/software-engineering-library/references/domain-driven-design.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 18 | defined here | Defined in core vocabulary as a domain object identified by stable identity rather than field values. |

## Consumes
Entity identity attributes, domain lifecycle transitions.

## Produces
Domain objects maintaining continuity of identity across attribute mutations.

## When applied
Applied when modeling domain concepts where individual continuity of identity across time and state changes is primary.

## Sub-concepts
none

## Part of
aggregate

## Implementation status
clean

## Design notes
An Entity is a domain object whose distinguishing characteristic is its persistent identity rather than its attributes, allowing it to undergo mutations while remaining recognizably the same distinct concept.
