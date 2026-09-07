---
package: rjm
name: Leaky Boundary
slug: leaky-boundary
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

# Leaky Boundary

## Definition — verbatim
> "- **Leaky Boundary**: returning third-party SDK types or ORM entities from a domain method. The boundary exists in name only. Wrap." — .claude/skills/software-engineering-library/references/domain-driven-design.md:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 236 | defined here | Anti-pattern catalog entry warning against exposing external SDK or persistence entities across domain boundaries. |

## Consumes
Domain methods exposing ORM models, persistence types, or vendor SDK classes directly.

## Produces
Architectural instructions to wrap external types in native domain entities and value objects.

## When applied
Identified when foreign types or database entities leak through public interfaces of domain services or aggregates.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Leaky Boundary is an anti-pattern where external representations compromise the independence of a domain layer. Wrapping external SDK types in domain-specific abstractions preserves the integrity and testability of core logic.
