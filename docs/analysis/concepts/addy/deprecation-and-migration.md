---
package: addy
name: deprecation-and-migration
slug: deprecation-and-migration
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/deprecation-and-migration.json, sha256: 9ee13965566161b30f3bf73f4d8d6f9e243f910f4d661d9f0835902714ecc6ec}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deprecation-and-migration

## Definition — verbatim
> "Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new." — skills/deprecation-and-migration/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/deprecation-and-migration.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/documentation-and-adrs.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| external/git-workflow-and-versioning.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| external/observability-and-instrumentation.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| external/shipping-and-launch.md | 12 | used here | Related skill card in the Ship phase on external web catalog. |
| README.md | 279 | used here | Catalogs skill scope, code-as-liability mindset, and sunsetting triggers under Ship phase. |
| skills/deprecation-and-migration/SKILL.md | 2 | defined here | Defines deprecation principles, migration patterns, and zombie code removal. |
| skills/git-workflow-and-versioning/SKILL.md | 311 | used here | References deprecation-and-migration when releasing breaking changes with deprecation periods. |

## Consumes
Obsolete systems, deprecated APIs, duplicate implementations, and consumer usage telemetry.

## Produces
Deprecation notices, transition timelines, dual-run migration adapters, and dead code elimination PRs.

## When applied
When removing old systems, migrating users between implementations, or retiring dead code.

## Sub-concepts
none

## Part of
addy:Ship

## Implementation status
clean

## Design notes
deprecation-and-migration instills the mindset that code is an ongoing maintenance liability rather than an asset. It provides structured mechanisms (dual-run adapters, compulsory deprecation warnings, telemetry-backed usage verification, and sunsetting schedules) that enable engineering teams to safely decommission obsolete software without breaking consumers.
