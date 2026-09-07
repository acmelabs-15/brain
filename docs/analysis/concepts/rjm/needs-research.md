---
package: rjm
name: NEEDS_RESEARCH
slug: needs-research
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# NEEDS_RESEARCH

## Definition — verbatim
(used, not defined)
> "RECOMMENDATION: [PROCEED | DEFER | REQUEST_EVIDENCE | NEEDS_RESEARCH | DECLINE]" — .claude/agents/issue-feature-review.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 105 | applies | Recommendation verdict assigning exploratory research or architectural investigation. |
| scripts/ai_review_common/feature_review.py | 12 | defines | Member of VALID_RECOMMENDATIONS frozenset for automated feature review parsing. |

## Consumes
Feature requests involving novel technical territory, unknown dependency feasibility, or strategic architectural conflicts.

## Produces
Research spike assignment directing an analyst or architect to investigate feasibility.

## When applied
Emitted when technical feasibility or strategic alignment cannot be determined without dedicated exploratory investigation.

## Sub-concepts
none

## Part of
issue-feature-review-agent, feature-review

## Implementation status
clean

## Design notes
A triage verdict that routes high-uncertainty requests to exploratory investigation. Instead of guessing feasibility or rejecting potentially valuable ideas, it commissions a focused spike or architectural analysis to resolve technical unknowns.
