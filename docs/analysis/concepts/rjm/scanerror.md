---
package: rjm
name: ScanError
slug: scanerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_duplicate_test_helpers.py, sha256: 8906f18524078aa443be6371e81d6f866fc50df83b93e3be976f4b34b50fc0b5}
  - {path: scripts/validation/check_subprocess_encoding.py, sha256: 843f80d8eb5f5b0075c9f6e94c9fe2018b68c66d22889d0019d5c4c5d8b92c35}
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ScanError

## Definition — verbatim
(used, not defined)

> "class ScanError(Exception):" — scripts/validation/check_doc_interpreter_portability.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 136 | defined here | Exception raised when the validator cannot inspect an in-scope tracked file. |
| scripts/validation/check_duplicate_test_helpers.py | 38 | defined here | Exception raised when the gate cannot inspect its declared test corpus. |
| scripts/validation/check_subprocess_encoding.py | 1645 | defined here | Exception raised when the gate cannot inspect its declared source corpus. |
| scripts/validation/check_unreachable_code.py | 33 | defined here | Exception raised when the gate cannot inspect its declared source corpus. |

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
A Python exception class raised across validation scripts when file corpus inspection fails, classified as name-only per D-023.
