---
package: rjm
name: _nested_statement_blocks
slug: nested-statement-blocks
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

# _nested_statement_blocks

## Definition — verbatim
(used, not defined)

> "def _nested_statement_blocks(statement: ast.stmt) -> Iterator[list[ast.stmt]]:" — scripts/validation/check_unreachable_code.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_unreachable_code.py | 77 | defined here | Generator yielding nested executable statement lists while isolating nested function and class definitions. |

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
`_nested_statement_blocks` is an internal Python generator function in `check_unreachable_code.py` yielding executable child AST blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
