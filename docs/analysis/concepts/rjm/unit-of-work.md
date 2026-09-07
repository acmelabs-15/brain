---
package: rjm
name: unit of work
slug: unit-of-work
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# unit of work

## Definition — verbatim
> "- **Unit of Work**: an object that tracks the changes you intend to commit, then writes them as a single transaction." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:14

## Also called — verbatim
`Unit of Work` — .claude/skills/software-engineering-library/references/domain-driven-design.md:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 81 | used here | Transactional boundary opened and committed or rolled back by a use case. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 8 | used here | Cited transactional pattern referenced from enterprise-patterns.md. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 14 | defined here | Enterprise pattern tracking dirty domain objects and committing them as a single atomic transaction. |

## Consumes
Mutated domain entities, repository references, transaction boundaries.

## Produces
Atomic transactional persistence and coordinated state commits or rollbacks.

## When applied
Applied during use case execution to aggregate pending changes and commit them atomically at the boundary.

## Sub-concepts
none

## Part of
use-cases, enterprise-patterns

## Implementation status
clean

## Design notes
Unit of Work is an enterprise architecture pattern that maintains a list of objects affected by a business transaction and coordinates writing out changes. In rjm, use cases manage the unit of work directly, ensuring atomic commits and preventing ambient global transaction handles.
