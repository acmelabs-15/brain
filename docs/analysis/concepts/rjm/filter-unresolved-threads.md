---
package: rjm
name: filter_unresolved_threads
slug: filter-unresolved-threads
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# filter_unresolved_threads

## Definition — verbatim
(used, not defined)

> "def filter_unresolved_threads(thread_nodes: list[dict]) -> list[dict]:" — scripts/github_core/review_threads.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/api.py | 50 | used here | Re-exported from `review_threads` for backward compatibility. |
| scripts/github_core/review_threads.py | 46 | defined here | Utility filtering a list of review thread nodes to return only unresolved threads. |

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
`filter_unresolved_threads` is a Python utility function identifier in `review_threads.py` isolating unresolved PR review threads rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
