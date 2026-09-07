---
package: rjm
name: NotGitRepositoryError
slug: notgitrepositoryerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NotGitRepositoryError

## Definition — verbatim
(used, not defined)

> "class NotGitRepositoryError(RuntimeError):" — scripts/validation/check_git_hook_health.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 89 | defined here | Exception raised when the checked directory is not inside a git work tree. |
| scripts/validation/check_repo_health.py | 155 | defined here | Exception raised when the checked path is outside a git repository. |

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
NotGitRepositoryError is a Python exception class identifier raised when a path is not a git repository rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
