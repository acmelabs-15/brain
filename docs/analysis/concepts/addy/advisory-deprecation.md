---
package: addy
name: advisory deprecation
slug: advisory-deprecation
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

# advisory deprecation

## Definition — verbatim
> "## Compulsory vs Advisory Deprecation" — skills/deprecation-and-migration/SKILL.md:58
> "| **Advisory** | Migration is optional, old system is stable | Warnings, documentation, nudges. Users migrate on their own timeline. |" — skills/deprecation-and-migration/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 58 | defines | Contrasted with compulsory deprecation as the default non-blocking migration mode. |

## Consumes
Stable legacy system whose ongoing maintenance cost is sustainable and which poses no active security risk.

## Produces
Non-blocking deprecation warnings, documentation nudges, and voluntary user migration timelines.

## When applied
Applied when migration is optional, the old system remains stable, and consumers can migrate on their own schedule.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A non-blocking deprecation pattern where migration is voluntary and the old system remains operational without a hard deadline. It uses compiler warnings, runtime logs, and documentation nudges to guide users toward the replacement without breaking existing builds or workflows.
