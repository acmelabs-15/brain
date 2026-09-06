---
package: addy
name: SHIP
slug: ship
kind: phase
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SHIP

## Definition — verbatim
> "- SHIP → `shipping-and-launch`" — AGENTS.md:45

## Also called — verbatim
> "**Ship:**" — CLAUDE.md:26

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 45 | defines | Maps SHIP phase to `shipping-and-launch` in OpenCode implicit mapping |
| CLAUDE.md | 26 | defines | Catalogs skills under the Ship phase (`shipping-and-launch`, `git-workflow-and-versioning`, `ci-cd-and-automation`, `observability-and-instrumentation`, `documentation-and-adrs`, `deprecation-and-migration`) |
| docs/comparison.md | 11 | references | Cites Ship as the seventh lifecycle phase in comparison docs |
| docs/opencode-setup.md | 173 | references | Maps Ship phase to `shipping-and-launch` in OpenCode setup |
| external/ci-cd-and-automation.md | 12 | references | Associates CI/CD automation skill with the `/ship` command |
| external/deprecation-and-migration.md | 12 | references | Associates deprecation and migration skill with the `/ship` command |
| external/documentation-and-adrs.md | 12 | references | Associates documentation and ADRs skill with the `/ship` command |
| external/git-workflow-and-versioning.md | 12 | references | Associates git workflow skill with the `/ship` command |
| external/observability-and-instrumentation.md | 5 | references | Marks observability skill as belonging to the Ship phase |
| external/observability-and-instrumentation.md | 12 | references | Associates observability skill with the `/ship` command |
| external/shipping-and-launch.md | 5 | references | Marks `shipping-and-launch` as belonging to the Ship phase |
| external/shipping-and-launch.md | 12 | references | Associates shipping and launch skill with the `/ship` command |
| README.md | 12 | defines | Places SHIP as the final phase in the lifecycle ASCII diagram |
| README.md | 17 | defines | Maps `/ship` command to the Ship phase in the command-to-phase diagram |
| skills/constraint-driven-development/SKILL.md | 195 | references | Specifies SHIP stage in constraint wiring with `/ship` command |
| skills/constraint-driven-development/SKILL.md | 195 | references | Defines SHIP time budget and regression verification guards |

## Consumes
Reviewed and approved code ready for deployment.

## Produces
Pre-launch checklist, rollback strategy, feature flag configuration, and production monitoring setup.

## When applied
Triggered when deploying features to production or preparing release artifacts.

## Sub-concepts
parallel-fan-out-with-a-merge-step

## Part of
lifecycle-mapping-implicit-commands

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path, orphan

## Design notes
The Ship phase governs production readiness, coordinating parallel reviewer persona audits, deployment checklists, staged rollouts, and rollback procedures to ensure safe delivery.
