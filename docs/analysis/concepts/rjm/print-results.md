---
package: rjm
name: print_results
slug: print-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# print_results

## Definition — verbatim
(used, not defined)

> "def print_results(self) -> None:" — scripts/validate_workflows.py:578

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 578 | defined here | Method printing workflow validation warnings, errors, and summary status to standard output. |
| scripts/validation/pr_description.py | 1020 | defined here | Function printing PR description validation issues and mapping critical severity counts to exit codes. |

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
clean in scripts/validate_workflows.py; defects: doc-drift in scripts/validation/pr_description.py

## Design notes
`print_results` is a Python function and method identifier implemented in `validate_workflows.py` and `pr_description.py` to format validation diagnostics and return exit codes rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
