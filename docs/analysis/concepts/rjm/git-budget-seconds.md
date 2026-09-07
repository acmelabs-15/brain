---
package: rjm
name: GIT_BUDGET_SECONDS
slug: git-budget-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GIT_BUDGET_SECONDS

## Definition — verbatim
(used, not defined)

> "GIT_BUDGET_SECONDS" — scripts/validation/check_repo_health.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 50 | defined here | Referenced in module docstring as the execution budget limit ensuring diagnosis completes before hook timeouts. |

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
`GIT_BUDGET_SECONDS` is a Python timing constant defining the total execution budget allocated to Git subprocess calls within the repository health gate, classified as `kind: name-only` per D-023.
