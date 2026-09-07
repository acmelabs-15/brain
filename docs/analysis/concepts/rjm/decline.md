---
package: rjm
name: DECLINE
slug: decline
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

# DECLINE

## Definition — verbatim
(used, not defined)
> "RECOMMENDATION: [PROCEED | DEFER | REQUEST_EVIDENCE | NEEDS_RESEARCH | DECLINE]" — .claude/agents/issue-feature-review.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 105 | applies | Terminal recommendation rejecting a request due to duplication, infeasibility, or product drift. |
| scripts/ai_review_common/feature_review.py | 13 | defines | Member of VALID_RECOMMENDATIONS frozenset for automated feature review parsing. |

## Consumes
Feature requests that duplicate existing functionality, are technically infeasible, or violate strategic product goals.

## Produces
Respectful rejection verdict with explicit rationale and pointers to alternatives or documentation.

## When applied
Emitted when a proposed feature should definitively not be built.

## Sub-concepts
none

## Part of
issue-feature-review-agent, feature-review

## Implementation status
clean

## Design notes
The terminal negative gate verdict in feature triage. It decisively closes requests that duplicate existing capabilities, contradict strategic goals, or are technically impossible, providing clear rationale to the submitter while protecting the repository from bloat.
