---
package: rjm
name: FetchStatus
slug: fetchstatus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FetchStatus

## Definition — verbatim
(used, not defined)

> "class FetchStatus(enum.StrEnum):" — scripts/github_core/review_threads.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 11 | used here | Re-exported in the public module interface. |
| scripts/github_core/api.py | 45 | used here | Re-exported from `review_threads` to maintain backward-compatible import surface. |
| scripts/github_core/review_threads.py | 136 | defined here | StrEnum defining page fetch result statuses (OK, TRANSPORT_ERROR, STRUCTURAL_MISSING). |

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
`FetchStatus` is a Python StrEnum in `review_threads.py` classifying page fetch outcomes for GitHub PR review threads rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
