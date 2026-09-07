---
package: rjm
name: uncovered_scripts
slug: uncovered-scripts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# uncovered_scripts

## Definition — verbatim
(used, not defined)

> "Script paths that define ``main`` with no test proving a nonzero exit." — scripts/ci/cli_exit_contract_ratchet.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_ratchet.py | 73 | defined here | Exported in `__all__` and implemented to return a sorted list of uncovered script paths. |

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
`uncovered_scripts` is a Python function identifier returning scripts lacking proven exit contracts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
