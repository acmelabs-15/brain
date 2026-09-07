---
package: rjm
name: AST
slug: ast
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

# AST

## Definition — verbatim
(used, not defined)

> "AST ancestor chain. Nested *classes* (``TestSomething.TestInner``) are collected" — scripts/validation/check_nested_tests.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_nested_tests.py | 12 | used here | Refers to Python Abstract Syntax Tree structures walked to detect nested test function declarations. |

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
`AST` (Abstract Syntax Tree) is a standard Python parsing structure referenced in validation tooling rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
