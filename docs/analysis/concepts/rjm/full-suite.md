---
package: rjm
name: FULL_SUITE
slug: full-suite
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/test_selection/select_tests.py, sha256: 55afa726a2f4e6a81d372ad357019fb4af318250ffd3c84775545b54f076c03c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FULL_SUITE

## Definition — verbatim
(used, not defined)

> "FULL_SUITE = \"FULL_SUITE\"" — scripts/test_selection/select_tests.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 30 | defined here | Constant string sentinel signaling to test runners that the full pytest test suite must be executed. |

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
`FULL_SUITE` is a string constant identifier in `scripts/test_selection/select_tests.py` signaling fallback execution of all tests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
