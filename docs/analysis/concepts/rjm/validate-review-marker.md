---
package: rjm
name: validate_review_marker
slug: validate-review-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_coverage.py, sha256: 1b5a720fe23fc66bb90a5f4646618744fca700376aabaf0f8eb15f8f7deefaea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_review_marker

## Definition — verbatim
(used, not defined)

> "def validate_review_marker(repo_root: Path) -> bool:" — scripts/validation/checks_coverage.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_coverage.py | 54 | defined here | Function performing advisory check for a SHA-bound review marker on HEAD. |

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
defects: script-bug

## Design notes
A Python validation function in `scripts/validation/checks_coverage.py` verifying git review markers, classified as name-only per D-023.
