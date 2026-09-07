---
package: rjm
name: RepoInfo
slug: repoinfo
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RepoInfo

## Definition — verbatim
(used, not defined)

> "class RepoInfo:" — scripts/github_core/api.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/measure_workflow_coalescing.py | 34 | used here | Imported from `scripts.github_core.api` to type repository owner and repository name context. |
| scripts/github_core/__init__.py | 16 | used here | Re-exported in package `__init__.py` interface for GitHub core utilities. |
| scripts/github_core/api.py | 65 | defined here | Frozen dataclass encapsulating repository owner and repository name strings. |
| scripts/validation/pr_description.py | 33 | used here | Imported from `scripts.github_core.api` to represent resolved repository coordinates during PR description checks. |

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
defects: doc-drift, orphan, exit-code-mismatch

## Design notes
A data transfer class containing repository owner and name coordinates rather than an independent lifecycle concept.
