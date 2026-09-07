---
package: rjm
name: INVOCATION_LIMIT_FIELDS
slug: invocation-limit-fields
kind: name-only
package_phase: cross-phase
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

# INVOCATION_LIMIT_FIELDS

## Definition — verbatim
(used, not defined)

> "INVOCATION_LIMIT_FIELDS = [" — scripts/validate_pr_review_config.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_pr_review_config.py | 47 | defined here | Constant list defining required fields within the invocation_limits configuration section. |

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
A Python schema constant identifier defining required invocation limit fields rather than an agent lifecycle concept.
