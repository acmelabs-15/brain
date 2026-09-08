---
package: rjm
name: ChangedPathMissingError
slug: changedpathmissingerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_changed_paths.py, sha256: dac06c7d9d9bd8e4359cb319cbfc994b45046be9130a022bc8469fda73c1ec29}
  - {path: scripts/validation/checks_workflow_targets.py, sha256: 4b80c0e4c0e0bfe2052d15a8318cfa758fb70d424f1a14c0139a7cf57620d795}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ChangedPathMissingError

## Definition — verbatim
(used, not defined)

> "class ChangedPathMissingError(RuntimeError):" — scripts/validation/checks_changed_paths.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_changed_paths.py | 102 | defined here | Custom RuntimeError raised when a path reported as changed by git is absent from the worktree. |
| scripts/validation/checks_workflow_targets.py | 14 | used here | Imported to enforce fail-closed behavior when detected changed workflow files are missing from disk. |

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
`ChangedPathMissingError` is a Python exception class in `checks_changed_paths.py` enforcing fail-closed validation when changed paths are absent on disk, classified as `kind: name-only` per D-023.
