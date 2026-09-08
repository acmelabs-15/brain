---
package: rjm
name: SyntaxError
slug: syntaxerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_python_syntax.py, sha256: cae50f12ab4aab7b54cb7ec16cb66639fed56024af29643a96fc6a935c749c2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SyntaxError

## Definition — verbatim
(used, not defined)

> "which Python 3.14 accepts but 3.13 and earlier reject as a ``SyntaxError``. The" — scripts/validation/validate_python_syntax.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_python_syntax.py | 7 | used here | Named as the Python syntax exception raised when encountering newer grammar on older interpreters. |

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
A standard Python exception identifier, classified as name-only per D-023.
