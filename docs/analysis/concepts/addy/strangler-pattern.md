---
package: addy
name: Strangler Pattern
slug: strangler-pattern
kind: pattern
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

# Strangler Pattern

## Definition — verbatim
> "### Strangler Pattern" — skills/deprecation-and-migration/SKILL.md:122
> "Run old and new systems in parallel. Route traffic incrementally from old to new. When the old system handles 0% of traffic, remove it." — skills/deprecation-and-migration/SKILL.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 122 | defines | Section heading and architectural pattern for incremental parallel migration. |

## Consumes
Legacy system in production alongside a replacement implementation, connected via a routing or proxy layer.

## Produces
Phased traffic cutover (0% → canary 10% → 50% → 100%) and safe decommissioning of the legacy service with zero downtime.

## When applied
Applied when replacing complex or mission-critical services where big-bang cutovers introduce excessive operational risk.

## Sub-concepts
canary

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
An architectural migration pattern running legacy and replacement systems in parallel and gradually shifting traffic via reverse proxies or routing layers. By verifying behavior at increasing percentages (canary, partial, full), the pattern eliminates big-bang cutover risks.
