---
package: rjm
name: pinned_contract_error
slug: pinned-contract-error
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pinned_contract_error

## Definition — verbatim
(used, not defined)

> "def pinned_contract_error(args: argparse.Namespace) -> str | None:" — scripts/bulk_cancel_guard.py:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bulk_cancel_guard.py | 274 | defined here | Validation function checking whether target coordinates adhere to the pinned ruleset contract. |

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
defects: doc-drift

## Design notes
pinned_contract_error is a Python validation function identifier enforcing branch ruleset contract constraints rather than a lifecycle concept.
