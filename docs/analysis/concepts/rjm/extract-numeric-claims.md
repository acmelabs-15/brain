---
package: rjm
name: extract_numeric_claims
slug: extract-numeric-claims
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# extract_numeric_claims

## Definition — verbatim
(used, not defined)

> "def extract_numeric_claims(text: str) -> dict[str, set[int]]:" — scripts/validation/spec_contradiction.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/spec_contradiction.py | 194 | defined here | Extracts numeric key-value threshold claims from specification text. |

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
A Python parsing helper function in `scripts/validation/spec_contradiction.py`, classified as name-only per D-023.
