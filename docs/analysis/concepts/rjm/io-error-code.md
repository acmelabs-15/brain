---
package: rjm
name: _IO_ERROR_CODE
slug: io-error-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _IO_ERROR_CODE

## Definition — verbatim
(used, not defined)

> "_IO_ERROR_CODE = \"E902\"" — scripts/ci/ruff_count_ratchet.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruff_count_ratchet.py | 81 | defined here | Constant identifying ruff's E902 diagnostic code to distinguish file access I/O errors from lint debt. |

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
`_IO_ERROR_CODE` is an internal string constant in `ruff_count_ratchet.py` representing ruff's diagnostic code for file read errors rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
