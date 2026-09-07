---
package: rjm
name: hidden_criteria
slug: hidden-criteria
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/examples/e2e-delivery-fixtures.json, sha256: b4cfa4a94ba048652e53a1e8b9fc021f704c4e43273e9a40ec5723dfc8afd874}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hidden_criteria

## Definition — verbatim
(used, not defined)

> "hidden_criteria are NOT shown to the agent." — scripts/eval/examples/e2e-delivery-fixtures.json:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 16 | defined here | Core module docstring explaining ground-truth criteria derivation from merged PRs. |
| scripts/eval/examples/e2e-delivery-fixtures.json | 3 | defined here | Top-level fixture comment specifying that hidden criteria are withheld from the agent under test. |

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
A JSON fixture schema field identifier in `e2e-delivery-fixtures.json` and `_e2e_delivery_core.py` holding withheld PR acceptance criteria, classified as `kind: name-only` per D-023.
