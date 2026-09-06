---
package: addy
name: Feature Flag Migration
slug: feature-flag-migration
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

# Feature Flag Migration

## Definition — verbatim
> "### Feature Flag Migration" — skills/deprecation-and-migration/SKILL.md:151
> "Use feature flags to switch consumers from old to new system one at a time:" — skills/deprecation-and-migration/SKILL.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 151 | defines | Section heading and technique for user-by-user or tenant-by-tenant system cutover. |

## Consumes
Feature flag configuration infrastructure, legacy service implementation, and replacement service.

## Produces
Dynamic runtime routing allowing selective activation of the new system with instantaneous rollback capability.

## When applied
Applied when transitioning consumers, organizations, or users individually to manage operational risk during major system cutovers.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A migration technique employing conditional feature flag checks to route execution between legacy and new implementations at runtime. This allows granular, consumer-by-consumer migration and provides instant rollback capability without deploying new code.
