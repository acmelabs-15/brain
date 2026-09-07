---
package: rjm
name: UNBOUND
slug: unbound
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/_main_binding.py, sha256: 1009fe6ae95a4957bbb97bd561b2d48ac998636732375b335c3ef32dadacd60d}
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UNBOUND

## Definition — verbatim
(used, not defined)

> "- UNBOUND: main has never been bound; sole-fallback logic applies separately" — scripts/ci/_main_binding.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/_main_binding.py | 12 | defined here | State in the binding state model where main has never been bound. |
| scripts/validation/check_skill_contract_tests.py | 63 | defined here | Dataclass representing an in-scope skill with documented contracts but no binding test. |

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
defects: orphan

## Design notes
`UNBOUND` represents an initial unbound state in static AST binding tracking and an unbound contract test failure record in validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
