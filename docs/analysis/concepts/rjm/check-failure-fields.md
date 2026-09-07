---
package: rjm
name: CHECK_FAILURE_FIELDS
slug: check-failure-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_pr_review_config.py, sha256: 6ecb12ec366c7eabe944f9e19f33e45d830ff1783fd7e899fcc516bae7dbeb79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CHECK_FAILURE_FIELDS

## Definition — verbatim
(used, not defined)

> "CHECK_FAILURE_FIELDS = [\"check_type\", \"action\"]" — scripts/validate_pr_review_config.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_pr_review_config.py | 91 | defined here | Constant list defining required schema field names for check failure entries. |

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
CHECK_FAILURE_FIELDS is a constant list identifier defining schema field names for check failure entries in scripts/validate_pr_review_config.py rather than an SDLC lifecycle concept.
