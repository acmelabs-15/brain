---
package: rjm
name: Runner type optimization
slug: runner-type-optimization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Runner type optimization

## Definition — verbatim
> "1. **Runner type optimization**: ubuntu-latest (x64) runners cost 37.5% more than ubuntu-24.04-arm runners" — .agents/architecture/ADR-025-github-actions-arm-runners.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 26 | defined here | Identified as the primary cost reduction strategy to cut CI monthly spend below $100. |

## Consumes
Workflow job runner configurations, platform dependencies, and runner pricing models.

## Produces
Optimized workflow job definitions targeting the lowest-cost viable architecture runner.

## When applied
Applied during CI cost audits and workflow creation to minimize execution minute expenditures.

## Sub-concepts
none

## Part of
runner-selection-policy

## Implementation status
clean

## Design notes
An infrastructure cost reduction technique that systematically audits CI workload requirements and assigns jobs to lower-cost runner architectures (such as ARM64 over standard x64) without sacrificing execution speed or build reliability.
