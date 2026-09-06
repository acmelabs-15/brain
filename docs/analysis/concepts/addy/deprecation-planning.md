---
package: addy
name: deprecation planning
slug: deprecation-planning
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

# deprecation planning

## Definition — verbatim
> "### Deprecation Planning Starts at Design Time" — skills/deprecation-and-migration/SKILL.md:33
> "Systems designed with clean interfaces, feature flags, and minimal surface area are easier to deprecate than systems that leak implementation details everywhere." — skills/deprecation-and-migration/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 33 | defines | Defined as an architectural principle that begins at initial design time. |

## Consumes
System architecture proposals, interface designs, and dependency plans.

## Produces
Modular designs with minimal surface area, clear boundaries, and decoupled implementations that simplify future sunsetting.

## When applied
Applied during initial design and planning of new features, APIs, and systems.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
An architectural design discipline mandating that teams plan for eventual system decommissioning at initial construction time. Designing clean interfaces, avoiding leaked internals, and isolating integrations behind feature flags dramatically lowers the future cost of migration and sunsetting.
