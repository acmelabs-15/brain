---
package: rjm
name: ReviewMarker
slug: reviewmarker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReviewMarker

## Definition — verbatim
(used, not defined)

> "class ReviewMarker:" — .claude/skills/review/scripts/validate_review_marker.py:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_review_marker.py | 66 | defined here | Dataclass representing a parsed review marker containing evaluated axes and the target commit SHA. |
| scripts/validation/validate_review_marker.py | 66 | defined here | Dataclass definition in canonical marker validation script. |

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
A Python dataclass identifier representing parsed review marker trailer data structures, classified as name-only per D-023.
