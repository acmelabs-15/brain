---
package: rjm
name: _scope_invocations
slug: scope-invocations
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

# _scope_invocations

## Definition — verbatim
(used, not defined)

> "(stems this scope drives, names it binds to the result of driving one)." — scripts/ci/cli_exit_contract_coverage.py:362

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_coverage.py | 356 | defined here | Defined to inspect an AST scope and return script stems driven along with bound result variables. |

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
`_scope_invocations` is a private AST analysis function identifier in `cli_exit_contract_coverage.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
