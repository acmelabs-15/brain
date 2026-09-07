---
package: rjm
name: error_and_exit
slug: error-and-exit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# error_and_exit

## Definition — verbatim
(used, not defined)

> "def error_and_exit(message: str, exit_code: int) -> NoReturn:" — scripts/github_core/api.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/post_issue_comment.py | 35 | used here | Imported from `scripts.github_core.api` to emit an error message to stderr and terminate execution. |
| scripts/github_core/api.py | 82 | defined here | Utility function writing an error message to stderr and terminating process with a given status code. |
| scripts/github_core/validation.py | 176 | used here | Imported lazily to terminate with an exit code when validation of the comment body file fails. |

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
A Python helper function identifier (`error_and_exit`) for stderr output and process termination rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
