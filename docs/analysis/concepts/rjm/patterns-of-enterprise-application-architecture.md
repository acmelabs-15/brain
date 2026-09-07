---
package: rjm
name: Patterns of Enterprise Application Architecture
slug: patterns-of-enterprise-application-architecture
kind: reference
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

# Patterns of Enterprise Application Architecture

## Definition — verbatim
> "This rule consolidates the patterns from Martin Fowler's _Patterns of Enterprise Application Architecture_ (PEAA) that recur in this codebase." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4

## Also called — verbatim
`PEAA` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 4 | used here | Foundational reference text cited as the source for repository, unit of work, data mapper, and service layer patterns. |

## Consumes
Classical enterprise architecture literature and proven design patterns for business applications.

## Produces
Architectural standards for data persistence, transactional boundaries, and service orchestration in agent systems.

## When applied
Consulted when modifying persistence, transactional, or orchestration code, or when adding components interacting with data stores or external services.

## Sub-concepts
domain-object, data-mapper, identity-map, active-record, transaction-script, smart-ui

## Part of
none

## Implementation status
clean

## Design notes
Patterns of Enterprise Application Architecture provides the foundational design literature for structuring persistence and business transactions in rjm. Adapting Fowler's patterns ensures that agent state, session records, and external tool calls maintain clean separation between domain logic and persistence plumbing.
