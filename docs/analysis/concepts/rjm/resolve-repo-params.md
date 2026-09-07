---
package: rjm
name: resolve_repo_params
slug: resolve-repo-params
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_repo_params

## Definition — verbatim
(used, not defined)

> "Resolve owner and repo, inferring from git remote if not provided." — scripts/github_core/api.py:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_comment_processing.py | 33 | used here | Imported from scripts.github_core.api to parse and validate repository coordinates. |
| .github/scripts/measure_workflow_coalescing.py | 36 | used here | Imported from scripts.github_core.api to resolve target repository for workflow coalescing measurement. |
| .github/scripts/post_issue_comment.py | 37 | used here | Imported from scripts.github_core.api to determine repository parameters before posting comments. |
| scripts/github_core/api.py | 138 | defined here | Core utility function resolving owner and repo names from arguments or git remote configuration. |
| scripts/update_reviewer_signal_stats.py | 38 | used here | Imported to resolve repository parameters for reviewer signal metrics calculation. |
| scripts/validation/pr_commit_count.py | 70 | used here | Imported to resolve repository parameters during PR commit count validation. |

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
defects: orphan, script-bug, doc-drift, exit-code-mismatch

## Design notes
`resolve_repo_params` is a core utility function identifier in `scripts/github_core/api.py` resolving repository owner and name from CLI arguments or git remotes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
