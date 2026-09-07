---
package: rjm
name: GhAuthResult
slug: ghauthresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GhAuthResult

## Definition — verbatim
(used, not defined)

> "class GhAuthResult:" — scripts/github_core/api.py:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 12 | used here | Re-exported in the public module interface. |
| scripts/github_core/api.py | 265 | defined here | Frozen dataclass representing the outcome of `check_gh_auth` with status and sanitized diagnostic detail. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`GhAuthResult` is a Python dataclass identifier in `api.py` encapsulating GitHub authentication preflight check results rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
