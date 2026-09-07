---
package: rjm
name: ParityConfigError
slug: parityconfigerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ParityConfigError

## Definition — verbatim
(used, not defined)

> "class ParityConfigError(ValueError):" — scripts/eval/_runtime_parity.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 26 | defined here | Custom ValueError raised on invalid fixture schemas, malformed assertions, or invalid controls. |

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
A custom Python exception class raised when parity fixture definitions or runtime parameters are malformed, classified as name-only per D-023.
