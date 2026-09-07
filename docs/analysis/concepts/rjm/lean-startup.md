---
package: rjm
name: Lean Startup
slug: lean-startup
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/blue-ocean-strategy.md, sha256: 9f5a1527f097649ba4c0e23d32a8df724e8df7a4e5acc0cc7d406de94a1d3740}
  - {path: .claude/skills/business-strategy/references/crossing-the-chasm.md, sha256: 0e83c9e9ba5da03e71119e2521b0bb544f1e9f5f3111fc53b7e1736cfaa4d95a}
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
  - {path: .claude/skills/business-strategy/references/traction.md, sha256: 2f8e8bcb6eb1f87e80aee296179b4ce681a9ea641bac43930d093f9c0d369f2b}
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Lean Startup

## Definition — verbatim
> "# Lean Startup: Validate Before You Scale" — .claude/skills/business-strategy/references/lean-startup.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/blue-ocean-strategy.md | 66 | used here | Framework reconciliation resolving uncertainty by using lean validation to test divergent value curve hypotheses before capital commitment. |
| .claude/skills/business-strategy/references/crossing-the-chasm.md | 88 | used here | Framework reconciliation using Lean discovery prior to product-market fit, then switching to chasm beachhead focus. |
| .claude/skills/business-strategy/references/four-steps.md | 91 | used here | Framework conflict resolution balancing rapid MVP metric loops against upfront qualitative customer discovery interviews. |
| .claude/skills/business-strategy/references/lean-startup.md | 1 | defined here | Reference guide establishing hypothesis-driven experimentation and validated learning for venture creation. |
| .claude/skills/business-strategy/references/mom-test.md | 85 | used here | Framework reconciliation sequencing Mom Test problem interviews in discovery before shipping Lean MVPs. |
| .claude/skills/business-strategy/references/traction.md | 103 | used here | Balances product iteration loops against traction channel testing via the 50 percent rule. |
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 21 | used here | References innovation accounting and per-cohort improvement targets as a pre-commitment mechanism justifying pivots. |

## Consumes
Riskiest venture assumptions, value hypotheses, and customer behavior metrics.

## Produces
Minimum viable products, validated learning, actionable metrics, and pivot-or-persevere decisions.

## When applied
Applied when building under extreme uncertainty to validate whether customer demand exists before scaling operations.

## Sub-concepts
build-measure-learn

## Part of
business-strategy

## Implementation status
defects: missing-path, doc-drift

## Design notes
Eric Ries's scientific methodology for venture creation distilled in rjm. It replaces deterministic execution plans with iterative hypothesis testing, using fast Build-Measure-Learn cycles and actionable metrics to maximize validated learning per unit of capital spent.
