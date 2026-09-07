---
package: rjm
name: AGENTS.md contract
slug: agents-md-contract
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AGENTS.md contract

## Definition — verbatim
(used, not defined)

> "Exit codes (AGENTS.md contract):" — scripts/ci/cli_exit_contract_ratchet.py:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/cli_exit_contract_ratchet.py | 37 | used here | Section header in module docstring establishing standard script exit codes. |
| scripts/ci/combine_pin_coverage.py | 53 | used here | Section header in module docstring documenting standard CLI exit code definitions. |

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
`AGENTS.md contract` is a docstring heading label designating standard CLI exit code conventions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
