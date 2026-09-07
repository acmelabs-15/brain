---
package: rjm
name: get_feature_review_labels
slug: get-feature-review-labels
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/parse_feature_review.py, sha256: a2dc22ac513a841bb2088d12659ef8126e08cc1bf396f3a5c04b3e72f7938951}
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_feature_review_labels

## Definition — verbatim
(used, not defined)

> "def get_feature_review_labels(output: str) -> str:" — scripts/ai_review_common/feature_review.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/parse_feature_review.py | 24 | used here | Imported from `scripts.ai_review_common` to extract suggested labels from feature review output. |
| scripts/ai_review_common/feature_review.py | 107 | defined here \| used here | Parses suggested PR labels from feature review AI output into a comma-separated string. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, exit-code-mismatch

## Design notes
A parsing function extracting suggested labels from feature review text rather than an independent lifecycle concept.
