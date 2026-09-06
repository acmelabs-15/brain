---
package: addy
name: compulsory vs advisory deprecation
slug: compulsory-vs-advisory-deprecation
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# compulsory vs advisory deprecation

## Definition — verbatim
(used, not defined)

> "A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — external/deprecation-and-migration.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/deprecation-and-migration.md | 5 | used here | Highlights distinguishing between mandatory (breaking/removal) and informational (warning) deprecation. |
| external/documentation-and-adrs.md | 12 | used here | Cited in the related Ship phase skills grid describing deprecation-and-migration. |
| external/git-workflow-and-versioning.md | 12 | used here | Cited in the related Ship phase skills grid describing deprecation-and-migration. |
| external/observability-and-instrumentation.md | 12 | used here | Cited in the related Ship phase skills grid describing deprecation-and-migration. |
| external/shipping-and-launch.md | 12 | used here | Cited in the related Ship phase skills grid describing deprecation-and-migration. |

## Consumes
Deprecated APIs, legacy features, or migration schedules.

## Produces
Deprecation notices, migration warnings, and enforcement timelines.

## When applied
> "Removing old systems, migrating users, or sunsetting features." — external/deprecation-and-migration.md:5

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
defects: doc-drift, orphan

## Design notes
A governance pattern distinguishing between compulsory deprecation (hard cutoff where deprecated functionality will be removed or fail) and advisory deprecation (soft warning guiding users to preferred alternatives without immediate breakage). It ensures migrations provide clear predictability for downstream consumers.
