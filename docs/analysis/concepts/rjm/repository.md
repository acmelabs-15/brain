---
package: rjm
name: Repository
slug: repository
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Repository

## Definition — verbatim
> "- **Repository**: a collection-like interface that hides the data store. Returns domain objects, accepts domain objects." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 8 | used here | References the pattern in enterprise-patterns.md for persistence and transactional concerns. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 13 | defined here | Defined in core vocabulary as a collection-like interface that hides the underlying data store. |
| scripts/ci/ruleset_required_contexts.py | 5 | defined here | Identifier constant defining the GitHub repository name for ruleset inspection. |

## Consumes
Domain objects, underlying data stores, query specifications.

## Produces
Collection-style interface providing access to domain entities while completely encapsulating persistence mechanisms.

## When applied
Applied when domain logic needs to retrieve, add, or filter domain entities without coupling to storage engines or SQL queries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Repository provides an in-memory collection abstraction over persistent data stores, allowing domain models and service layers to persist and query domain objects without leaking database rows or query builders across architectural boundaries.
