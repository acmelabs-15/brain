---
package: addy
name: migration
slug: migration
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# migration

## Definition — verbatim
> "Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new." — skills/deprecation-and-migration/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 10 | defines | Defined as the process of safely transitioning users from an old system to a new one. |

## Consumes
Deprecated system, production-proven replacement, and inventory of active consumers.

## Produces
Updated consumer implementations, zero active usage on legacy system, and clean code deletion.

## When applied
Applied when transitioning users from a sunsetted API, system, or library to its replacement.

## Sub-concepts
strangler-pattern, adapter-pattern, feature-flag-migration, expand-contract

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
The operational engineering process of moving consumers from legacy systems to replacements without downtime or behavioral breakages. It relies on incremental transition patterns (adapters, feature flags, strangler, expand/contract) and rigorous verification before the old system is removed.
