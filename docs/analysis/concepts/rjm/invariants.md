---
package: rjm
name: invariants
slug: invariants
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

# invariants

## Definition — verbatim
> "- The invariants that keep that data consistent." — .claude/skills/software-engineering-library/references/clean-architecture.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 54 | used here | Business consistency rules and validation constraints owned and enforced directly by entities. |

## Consumes
Entity state and proposed state transitions.

## Produces
Guarantees of domain model consistency and valid business state.

## When applied
Applied inside entity methods whenever data is created, mutated, or validated.

## Sub-concepts
none

## Part of
entities

## Implementation status
clean

## Design notes
Invariants are business consistency rules and integrity constraints that an entity must satisfy across every state transition. In rjm, placing invariants directly inside domain entities prevents anemic domain models where external services or hooks make invalid mutations.
