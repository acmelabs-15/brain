---
package: rjm
name: Data Mapper
slug: data-mapper
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

# Data Mapper

## Definition — verbatim
> "- **Data Mapper**: the object that knows how to translate between a domain object and a persistence row, message, or document." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 15 | defined here | Core vocabulary entry defining a data mapper as the translation object between domain objects and persistence rows, messages, or documents. |

## Consumes
In-memory domain objects and database rows, document payloads, or serialization formats.

## Produces
Explicit bidirectional mappings between domain representations and persistence schemas.

## When applied
Applied when the persistence shape differs from the domain shape, or when the database schema must evolve independently of the domain model.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Data Mapper completely decouples domain objects from persistent storage schemas. By managing bidirectional translation outside the domain model, it allows internal agent domain concepts and external database schemas to change independently without polluting entities with database concerns.
