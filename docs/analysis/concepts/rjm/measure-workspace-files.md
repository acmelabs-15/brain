---
package: rjm
name: measure_workspace_files
slug: measure-workspace-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workspace_budget.py, sha256: 5d0155b8ada925ac4e13f5f662812bbe8d8d5aa79e289536d08af70250d0aecc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# measure_workspace_files

## Definition — verbatim
(used, not defined)

> "def measure_workspace_files(" — scripts/validate_workspace_budget.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 81 | defined here | Inspects the filesystem to measure actual byte sizes and existence of specified workspace context files. |

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
`measure_workspace_files` is a Python function identifier in `validate_workspace_budget.py` calculating byte sizes of context files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
