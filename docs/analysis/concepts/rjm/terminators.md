---
package: rjm
name: _TERMINATORS
slug: terminators
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_unreachable_code.py, sha256: 1e8ae7aab96a8cc6eab3ea1f5b553811c20ab01b48ad7aca0932ef198e63509e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _TERMINATORS

## Definition — verbatim
(used, not defined)

> "_TERMINATORS = (ast.Return, ast.Raise, ast.Continue, ast.Break)" — scripts/validation/check_unreachable_code.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_unreachable_code.py | 30 | defined here | Tuple of AST statement types representing control-flow terminators that render subsequent statements unreachable. |

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
`_TERMINATORS` is a Python constant tuple in `check_unreachable_code.py` defining control-flow terminating AST types rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
