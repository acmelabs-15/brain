---
package: addy
name: Shift Left
slug: shift-left
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Shift Left

## Definition — verbatim
> "**Shift Left:** Catch problems as early in the pipeline as possible. A bug caught in linting costs minutes; the same bug caught in production costs hours. Move checks upstream — static analysis before tests, tests before staging, staging before production." — skills/ci-cd-and-automation/SKILL.md:12

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
| README.md | 278 | used here | Listed in the Ship phase catalog summary for ci-cd-and-automation. |
| skills/ci-cd-and-automation/SKILL.md | 12 | defined here | Defined as an overview principle to catch problems as early as possible in the pipeline. |

## Consumes
Quality gates and pipeline stages.

## Produces
Early bug detection at minimum remediation cost.

## When applied
When configuring quality gate pipelines and static analysis.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
defects: doc-drift

## Design notes
The principle of moving verification and quality checks upstream in the delivery pipeline so defects are caught at their lowest-cost interception point.
