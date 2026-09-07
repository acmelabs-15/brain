---
package: rjm
name: _WORK_TREE_FATAL
slug: work-tree-fatal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_repo_health_report.py, sha256: 740b36ed275f8f61a8db2b37fa1c1fc738a7b050c8306cb0c00e5e8b1055fdbf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _WORK_TREE_FATAL

## Definition — verbatim
(used, not defined)

> "_WORK_TREE_FATAL = " — scripts/validation/check_repo_health_report.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 54 | defined here | Constant string representing Git's fatal error message when a worktree operation fails on a bare repository. |

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
`_WORK_TREE_FATAL` is a Python string constant representing Git's fatal error message emitted when worktree operations fail on bare repositories, classified as `kind: name-only` per D-023.
