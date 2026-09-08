---
package: rjm
name: _ALL_SUBPROCESS_CALLS
slug: all-subprocess-calls
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _ALL_SUBPROCESS_CALLS

## Definition — verbatim
(used, not defined)

> "_ALL_SUBPROCESS_CALLS: frozenset[str] = _TEXT_CAPTURING_CALLS | _UNCONDITIONAL_DECODE_CALLS" — scripts/validation/check_subprocess_encoding.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_subprocess_encoding.py | 34 | defined here | Constant set union combining text-capturing and unconditional decode subprocess entry points. |

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
A module-level constant set combining subprocess function identifiers in check_subprocess_encoding.py, classified as name-only per D-023.
