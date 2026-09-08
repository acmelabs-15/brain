---
package: rjm
name: DEFAULT_RESERVE_BYTES
slug: default-reserve-bytes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/instruction_budget_constants.py, sha256: 99655c21bc59157ba59e66b88e9a14f44ac814438ede31a67c62bd55f1a6a1a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DEFAULT_RESERVE_BYTES

## Definition — verbatim
(used, not defined)

> "DEFAULT_RESERVE_BYTES = 600" — scripts/validation/instruction_budget_constants.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget_constants.py | 7 | defined here | Constant defining the default 600-byte reserve buffer required to safeguard concurrent branch merges. |

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
A Python constant in `instruction_budget_constants.py` setting the default headroom reserve buffer in bytes, classified as name-only per D-023.
