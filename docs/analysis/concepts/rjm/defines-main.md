---
package: rjm
name: defines_main
slug: defines-main
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_coverage.py, sha256: 526a9777ae1176bc673bb10e4dff23828612f4ad861882c0bfa79d637f9bdf20}
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# defines_main

## Definition — verbatim
(used, not defined)

> "True when the module body defines a ``main`` function." — scripts/ci/cli_exit_contract_coverage.py:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_coverage.py | 16 | defined here | Exported in `__all__` and implemented to check whether a Python module defines a module-level `main` function. |
| scripts/ci/cli_exit_contract_ratchet.py | 52 | used here | Imported to filter extracted scripts that define a process entry point. |

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
`defines_main` is a Python AST analysis function identifier detecting process entry points rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
