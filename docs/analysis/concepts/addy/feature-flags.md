---
package: addy
name: feature flags
slug: feature-flags
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# feature flags

## Definition — verbatim
> "Feature flags decouple deployment from release. Deploy incomplete or risky features behind flags so you can:" — skills/ci-cd-and-automation/SKILL.md:210-212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 5 | used here | Highlighted in the skill detail summary for ci-cd-and-automation. |
| external/documentation-and-adrs.md | 12 | used here | Listed in the related skills overview for ci-cd-and-automation in the Ship phase. |
| external/git-workflow-and-versioning.md | 12 | used here | Listed in the related skills overview for ci-cd-and-automation in the Ship phase. |
| external/observability-and-instrumentation.md | 12 | used here | Listed in the related skills overview for ci-cd-and-automation in the Ship phase. |
| external/shipping-and-launch.md | 12 | used here | Listed in the related skills overview for ci-cd-and-automation in the Ship phase. |
| skills/ci-cd-and-automation/SKILL.md | 210 | defined here | Section heading introducing the feature flag decoupling pattern and lifecycle. |
| skills/deprecation-and-migration/SKILL.md | 35 | used here | Advised at design time to make systems easier to deprecate. |
| skills/git-workflow-and-versioning/SKILL.md | 32 | used here | Recommended over long-lived feature branches for trunk-based development. |

## Consumes
Configuration management, feature flagging infrastructure.

## Produces
Safe decoupling of code deployment from runtime feature exposure, enabling instant rollbacks.

## When applied
When releasing risky or incomplete features, performing canary deployments, or migrating systems.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
defects: doc-drift

## Design notes
A release mechanism decoupling deployment from activation, enabling dark launching, canary rollouts, and instant flag-based rollback without requiring code redeployments.
