---
package: rjm
name: Shift-Left Effectiveness
slug: shift-left-effectiveness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shift-Left Effectiveness

## Definition — verbatim
> "Issues caught during agent review vs. PR review vs. production." — docs/agent-metrics.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 59 | defined here | Baseline report section evaluating issue catch rates across development phases based on historical incident evidence. |
| .agents/metrics/dashboard-template.md | 16 | used here | Executive dashboard summary table entry tracking effectiveness progress against an 80% target. |
| docs/agent-metrics.md | 72 | defined here | Canonical metric definition specifying weighted detection formula and stage categorization. |

## Consumes
Issue tracking records, PR review comments, and security vulnerability reports.

## Produces
Weighted shift-left score and phase detection breakdown.

## When applied
Calculated across sprint or release boundaries to assess early defect detection.

## Sub-concepts
shift-left-score

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Shift-Left Effectiveness quantifies how early defects, bugs, and security risks are discovered in the engineering lifecycle, rewarding detection during pre-commit agent interactions over PR reviews or post-deployment incidents.
