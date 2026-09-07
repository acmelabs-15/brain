---
package: rjm
name: Entities
slug: entities
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Entities

## Definition — verbatim
> "4. **Entities** (innermost). Enterprise-wide business rules. The objects, invariants, and policies that would still be true if you replaced the database, the UI, and the framework tomorrow." — .claude/skills/software-engineering-library/references/clean-architecture.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 19 | defined here | Innermost architectural layer encapsulating core enterprise business rules, state, and invariants. |

## Consumes
Primitive types, value objects, and domain identifiers.

## Produces
Invariant-enforcing domain models and business state transitions.

## When applied
Applied to define fundamental domain concepts that exist independently of persistence, frameworks, or delivery channels.

## Sub-concepts
invariants

## Part of
clean-architecture, the-dependency-rule

## Implementation status
clean

## Design notes
Entities constitute the innermost, most stable layer of Clean Architecture, containing core enterprise business rules and data consistency invariants. In rjm, entities represent fundamental concepts such as sessions, agents, runs, and ADRs that remain invariant regardless of whether executed locally, in CI, or across different agent harnesses.
