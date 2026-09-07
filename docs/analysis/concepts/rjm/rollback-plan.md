---
package: rjm
name: Rollback Plan
slug: rollback-plan
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rollback Plan

## Definition — verbatim
> "### Rollback Plan" — .agents/architecture/ADR-024-github-actions-runner-selection.md:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-024-github-actions-runner-selection.md | 193 | defined here | Specifies recovery procedures if ARM runner compatibility issues emerge in production. |
| .agents/architecture/ADR-025-github-actions-arm-runners.md | 129 | defined here | Defines steps to revert affected Linux workflows to ubuntu-latest upon critical failures. |
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 708 | defined here | Formalizes contingency recovery procedure mandated by Critic review condition C4. |
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 112 | defined here | Review condition identifying lack of a rollback procedure as a blocking implementation defect. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 63 | used here | Synthesizes Critic condition C4 as a blocking requirement prior to PR merge. |
| docs/codeql-rollout-checklist.md | 339 | defined here | Defines tiered rollback stages (immediate, partial, full) for security analysis scanning. |

## Consumes
Identified regression, critical test failures, or operational breakdown during deployment or rollout.

## Produces
Documented sequence of immediate revert operations restoring systems to a known stable baseline.

## When applied
Mandated for all architectural migrations and feature rollouts; triggered immediately when post-deployment verification fails.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An essential operational safety artifact defining unambiguous trigger criteria and concrete git recovery commands to rapidly revert faulty workflow automations or architecture changes without requiring ad-hoc decision-making during production outages.
