---
package: rjm
name: VALID_RECOMMENDATIONS
slug: valid-recommendations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_RECOMMENDATIONS

## Definition — verbatim
(used, not defined)

> "VALID_RECOMMENDATIONS = frozenset(" — scripts/ai_review_common/feature_review.py:7

## Also called — verbatim
> "    VALID_RECOMMENDATIONS," — scripts/ai_review_common/__init__.py:6

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/__init__.py | 6 | used here | Imported and exported in package init for feature review modules. |
| scripts/ai_review_common/feature_review.py | 7 | defined here | Defined as a frozenset of valid verdict recommendation tokens for feature review. |

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
defects: orphan

## Design notes
VALID_RECOMMENDATIONS is a Python constant identifier enumerating allowed recommendation strings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
