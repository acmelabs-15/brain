---
package: rjm
name: select_marker_for_sha
slug: select-marker-for-sha
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_review_marker.py, sha256: 544dafe1234d93afd9cba8b65d80c67fd198918f7a44838a56528ed5256afd11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# select_marker_for_sha

## Definition — verbatim
(used, not defined)

> "def select_marker_for_sha(values: list[str], expected_sha: str) -> ReviewMarker | None:" — scripts/validation/validate_review_marker.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_review_marker.py | 88 | defined here | Function selecting the first valid parsed marker among candidate values binding an expected SHA. |

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
A Python helper function identifier in `validate_review_marker.py`, classified as name-only per D-023.
