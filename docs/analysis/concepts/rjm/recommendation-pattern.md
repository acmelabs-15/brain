---
package: rjm
name: _RECOMMENDATION_PATTERN
slug: recommendation-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _RECOMMENDATION_PATTERN

## Definition — verbatim
(used, not defined)

> "_RECOMMENDATION_PATTERN = re.compile(" — scripts/ai_review_common/feature_review.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/feature_review.py | 21 | defined here | Compiled regex pattern extracting canonical RECOMMENDATION strings from review comments. |

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
clean

## Design notes
_RECOMMENDATION_PATTERN is a Python regular expression constant identifier parsing recommendation tokens rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
