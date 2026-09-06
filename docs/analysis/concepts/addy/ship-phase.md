---
package: addy
name: Ship phase
slug: ship-phase
kind: phase
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
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

# Ship phase

## Definition — verbatim
> "Deploy with confidence - rollout, rollback, observe." — external/ci-cd-and-automation.md:12

## Also called — verbatim
> "Ship" — external/ci-cd-and-automation.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 5 | used here | Displays phase chip categorizing ci-cd-and-automation within the Ship phase |
| external/ci-cd-and-automation.md | 12 | used here | Labels sidebar container and related skills grid for the Ship phase |
| external/deprecation-and-migration.md | 5 | used here | Categorizes deprecation-and-migration in the Ship phase via header chip |
| external/documentation-and-adrs.md | 5 | used here | Badges documentation-and-adrs under the Ship phase |
| external/git-workflow-and-versioning.md | 5 | used here | Categorizes git-workflow-and-versioning within the Ship phase |
| external/observability-and-instrumentation.md | 5 | used here | Displays phase chip for observability-and-instrumentation under Ship phase |
| external/shipping-and-launch.md | 5 | used here | Header chip identifying shipping-and-launch in the Ship phase |
| external/shipping-and-launch.md | 12 | used here | Sidebar heading defining the Ship phase purpose and related skills |

## Consumes
Reviewed and approved code changes, passing test suites, and deployment configurations.

## Produces
Production deployments, semantic version tags, human-curated changelogs, runtime telemetry, and rollback procedures.

## When applied
When preparing to deploy code to production, cutting releases, managing migrations, or sunsetting features.

## Sub-concepts
`trunk-based-development`, `quality-gate-pipelines`, `architecture-decision-records`, `zombie-code-removal`

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
The Ship phase is the final stage of Addy's development lifecycle, dedicated to deploying code with confidence through staged rollouts, rollback strategies, observability, automated CI/CD pipelines, and disciplined version control.
