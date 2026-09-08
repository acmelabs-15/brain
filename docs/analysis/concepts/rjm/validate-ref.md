---
package: rjm
name: validate_ref
slug: validate-ref
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

# validate_ref

## Definition — verbatim
(used, not defined)

> "def validate_ref(ref: str, repo_root: Path) -> ValidationOutcome:" — scripts/validation/validate_review_marker.py:320

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_review_marker.py | 320 | defined here | Function checking that a target ref is an empty marker commit binding its parent SHA. |

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
A Python validation function identifier in `validate_review_marker.py`, classified as name-only per D-023.
