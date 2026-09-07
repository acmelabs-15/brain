---
package: rjm
name: Domain Events
slug: domain-events
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

# Domain Events

## Definition — verbatim
> "## Domain Events" — .claude/skills/software-engineering-library/references/domain-driven-design.md:126

## Also called — verbatim
`Domain Event` — .claude/skills/software-engineering-library/references/domain-driven-design.md:21

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 126 | defined here | Section heading establishing design rules for publishing and handling past-tense domain facts across aggregates and contexts. |

## Consumes
Committed state transitions within aggregate roots.

## Produces
Immutable past-tense domain event records for decoupled downstream consumption and auditing.

## When applied
Applied when a change in one aggregate triggers actions in another aggregate or context, when an audit trail is required, or when workflows span multiple transactions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Domain Events enable loose coupling and eventual consistency across aggregate boundaries. Expressing business facts in the past tense decouples the initial transaction from subsequent downstream workflows while maintaining an auditable record of system activity.
