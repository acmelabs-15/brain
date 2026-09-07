---
package: rjm
name: PEAA
slug: peaa
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

# PEAA

## Definition — verbatim
> "This rule consolidates the patterns from Martin Fowler's _Patterns of Enterprise Application Architecture_ (PEAA) that recur in this codebase." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4

## Also called — verbatim
`Patterns of Enterprise Application Architecture` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 4 | used here | Standard architectural acronym for Martin Fowler's Patterns of Enterprise Application Architecture. |

## Consumes
Enterprise software architecture concepts and pattern classifications.

## Produces
Established pattern terminology for transactional boundaries, repositories, and persistence mappings.

## When applied
Referenced when designing persistence infrastructure or service layer boundaries across agent subsystems.

## Sub-concepts
none

## Part of
patterns-of-enterprise-application-architecture

## Implementation status
clean

## Design notes
PEAA is the common acronym for Martin Fowler's Patterns of Enterprise Application Architecture, used in rjm as shorthand for its suite of transactional, persistence, and domain design patterns.
