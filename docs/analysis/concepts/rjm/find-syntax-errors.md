---
package: rjm
name: find_syntax_errors
slug: find-syntax-errors
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

# find_syntax_errors

## Definition — verbatim
(used, not defined)

> "def find_syntax_errors(" — scripts/validation/validate_python_syntax.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_python_syntax.py | 127 | defined here | Function parsing tracked Python files against a target support floor to return syntax error failures. |

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
A Python helper function identifier in `validate_python_syntax.py`, classified as name-only per D-023.
