---
package: rjm
name: Evaluation Criteria
slug: evaluation-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evaluation Criteria

## Definition — verbatim
(used, not defined)

> "## Evaluation Criteria" — .claude/agents/issue-feature-review.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 16 | defined here | Defines the five evaluation dimensions (Completeness, Feasibility, Risk Management, Acceptance Criteria, Dependencies) used to critique the PR-60 remediation plan. |
| .claude/agents/issue-feature-review.md | 34 | defined here | Establishes the assessment rubric (User Impact, Implementation Complexity, Maintenance Burden, Strategic Alignment, Trade-offs) for evaluating incoming feature requests. |
| templates/agents/issue-feature-review.shared.md | 46 | defined here | Mirrors the feature request evaluation criteria table across shared agent prompt templates. |

## Consumes
Plans, proposals, feature requests, or pull request remediation documentation.

## Produces
Scored assessments, review verdicts, and structured trade-off evaluations.

## When applied
When reviewing incoming feature requests or assessing the readiness of remediation plans.

## Sub-concepts
feasibility, completeness, risk-management, dependencies

## Part of
review-rubric

## Implementation status
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95); clean in .claude/agents/issue-feature-review.md and templates/agents/issue-feature-review.shared.md

## Design notes
`Evaluation Criteria` establishes a structured multidimensional rubric for reviewing plans and feature requests, ensuring that evaluations assess feasibility, impact, maintenance burden, and dependencies systematically rather than relying on subjective impressions.
