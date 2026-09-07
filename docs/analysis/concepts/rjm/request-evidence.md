---
package: rjm
name: REQUEST_EVIDENCE
slug: request-evidence
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

# REQUEST_EVIDENCE

## Definition — verbatim
(used, not defined)
> "RECOMMENDATION: [PROCEED | DEFER | REQUEST_EVIDENCE | NEEDS_RESEARCH | DECLINE]" — .claude/agents/issue-feature-review.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 105 | applies | Output format recommendation option prompting submitter for customer validation or use cases. |
| scripts/ai_review_common/feature_review.py | 11 | defines | Member of VALID_RECOMMENDATIONS frozenset for automated feature review parsing. |

## Consumes
Feature requests with ambiguous user need or internal requests lacking external validation.

## Produces
Information request specifying exactly what data (usage metrics, reproducible use cases, prospect signals) the submitter must provide.

## When applied
Emitted during issue review when a request lacks empirical demand or user evidence before it can be scheduled.

## Sub-concepts
none

## Part of
issue-feature-review-agent, feature-review

## Implementation status
clean

## Design notes
An intake gate verdict that shifts the burden of proof back to the requester. When an internal team or user requests functionality without demonstrating real customer need, this verdict halts speculative design and explicitly asks for empirical validation before resources are spent.
