---
package: rjm
name: AsyncFunctionDef
slug: asyncfunctiondef
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_nested_tests.py, sha256: d24df7b8ede26217d2a8aba6b19c32623aa889ac6195f834c25373bae72b4d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AsyncFunctionDef

## Definition — verbatim
(used, not defined)

> "def _visit_function(self, node: ast.FunctionDef | ast.AsyncFunctionDef) -> None:" — scripts/validation/check_nested_tests.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 40 | used here | Python AST node type denoting asynchronous function definitions evaluated for nested test methods. |

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
`AsyncFunctionDef` is a Python standard library AST class inspected by `check_nested_tests.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
