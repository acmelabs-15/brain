---
package: rjm
name: Identity Map
slug: identity-map
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

# Identity Map

## Definition — verbatim
> "- **Identity Map**: a per-unit-of-work cache keyed by identity, ensuring you load each entity at most once." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 16 | defined here | Core vocabulary entry defining an identity map as a per-unit-of-work cache keyed by identity. |

## Consumes
Entity identity keys and domain objects retrieved from backing repositories during a unit of work.

## Produces
Singleton domain object instances per unit of work, preventing duplicate reads and divergent in-memory mutations.

## When applied
Applied when a single use case may dereference the same entity through multiple paths, requiring object identity rather than value duplication.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Identity Map maintains a unique reference for every loaded entity within the boundary of a single unit of work. By guaranteeing that multiple queries for the same identity return the identical in-memory instance, it prevents split-brain state mutations and eliminates redundant database queries.
