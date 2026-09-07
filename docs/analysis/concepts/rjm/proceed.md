---
package: rjm
name: PROCEED
slug: proceed
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PROCEED

## Definition — verbatim
> "- PROCEED: at least 80% of skills show improvement >= 0.5 with no skill regressing" — scripts/eval/eval-knowledge-integration.py:365

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 105 | applies | Output format recommendation option indicating immediate acceptance for planning/implementation. |
| scripts/ai_review_common/feature_review.py | 9 | defines | Member of VALID_RECOMMENDATIONS frozenset for automated issue review parsing. |
| scripts/eval/eval-knowledge-integration.py | 365 | defines | Kill gate verdict indicating knowledge integration experiment passes advancement criteria. |

## Consumes
Feature review evaluations with confirmed demand and manageable complexity, or evaluation metrics exceeding 80% improvement threshold.

## Produces
Acceptance verdict advancing an issue or experiment to active backlog planning or deployment.

## When applied
Emitted when evidence strongly justifies immediate work or when evaluation benchmarks pass all advancement criteria.

## Sub-concepts
none

## Part of
issue-feature-review-agent, feature-review

## Implementation status
defects: doc-drift

## Design notes
A formal green-light gate verdict across feature triage and evaluation harnesses in rjm. In feature review, it authorizes advancing a request to active backlog scheduling; in knowledge integration evaluation, it denotes passing the rigorous 80% improvement kill gate threshold.
