---
package: rjm
name: validate_marker_commit_shape
slug: validate-marker-commit-shape
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

# validate_marker_commit_shape

## Definition — verbatim
(used, not defined)

> "def validate_marker_commit_shape(" — scripts/validation/validate_review_marker.py:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_review_marker.py | 275 | defined here | Function verifying that a review marker commit is a single-parent empty commit matching its parent tree. |

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
