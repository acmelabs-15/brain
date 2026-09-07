---
package: rjm
name: Active Record
slug: active-record
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Active Record

## Definition — verbatim
> "Active Record (the domain object knows its own persistence) is acceptable for small, stable schemas." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 77 | used here | Pattern comparison noting Active Record is acceptable for small, stable schemas before migrating to Data Mapper. |

## Consumes
Entity data attributes directly corresponding to database table columns.

## Produces
Objects that encapsulate both domain logic and direct database access operations.

## When applied
Applied for small, stable database schemas where domain modeling requirements are simple and 1:1 with persistence structures.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Active Record co-locates business logic and database persistence within a single class. While acceptable for straightforward schemas, rjm recommends transitioning to Data Mapper as soon as schema evolution and domain logic require independent variation.
