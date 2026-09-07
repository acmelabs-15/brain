---
package: rjm
name: ARM runners
slug: arm-runners
kind: pattern
package_phase: rjm:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ARM runners

## Definition — verbatim
> "GitHub Actions offers multiple runner types with varying costs and capabilities. ARM runners provide significant advantages beyond cost optimization: native architecture performance, faster build cycles, true multi-arch support, ecosystem alignment, and improved power efficiency." — .agents/architecture/ADR-024-github-actions-runner-selection.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 24 | used here | Decision establishing ARM runners as the default execution platform for GitHub Actions CI. |
| .agents/devops/arm-runner-migration-analysis.md | 9 | used here | DevOps migration plan analyzing workflow transition to ARM runners. |

## Consumes
GitHub Actions workflow configurations and Linux build jobs.

## Produces
Cost-optimized (37.5% reduction) and faster CI execution across repository workflows.

## When applied
Specified as the required runner environment for all Linux CI jobs unless an explicit architecture exception is granted.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The virtualized hardware and runner architecture chosen as the standard runtime platform for GitHub Actions workflows in rjm. Selected to reduce CI operational expenditure by 37.5% while providing native execution speed and multi-architecture build verification.
