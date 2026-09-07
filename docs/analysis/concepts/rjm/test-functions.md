---
package: rjm
name: _test_functions
slug: test-functions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_coverage.py, sha256: 526a9777ae1176bc673bb10e4dff23828612f4ad861882c0bfa79d637f9bdf20}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _test_functions

## Definition — verbatim
(used, not defined)

> "Every function body in the file, method or not." — scripts/ci/cli_exit_contract_coverage.py:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_coverage.py | 235 | defined here | Defined as an AST traversal helper extracting all function and method definition nodes from a module. |

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
`_test_functions` is a private Python AST extraction helper function identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
