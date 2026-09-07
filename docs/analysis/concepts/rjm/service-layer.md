---
package: rjm
name: Service Layer
slug: service-layer
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Service Layer

## Definition — verbatim
> "- **Service Layer**: the use-case boundary. Orchestrates repositories, domain logic, and external collaborators on behalf of a single request or task." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 8 | used here | References the pattern in enterprise-patterns.md for handling use-case orchestration boundaries. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 17 | defined here | Defined in core vocabulary as the use-case boundary orchestrating repositories, domain logic, and collaborators. |

## Consumes
Incoming user or agent requests, domain repositories, external collaborators.

## Produces
Coordinated use-case execution, transaction boundary management, and task response structures.

## When applied
Applied when establishing the operational application boundary that coordinates business transactions and orchestrates domain models on behalf of specific use cases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Service Layer encapsulates the application's use-case boundary, orchestrating repositories, domain entities, and external dependencies while managing transaction lifecycles without leaking transactional complexity into callers.
