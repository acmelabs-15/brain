---
package: rjm
name: _unwrap_review_threads
slug: unwrap-review-threads
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _unwrap_review_threads

## Definition — verbatim
(used, not defined)

> "def _unwrap_review_threads(" — scripts/github_core/review_threads.py:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/review_threads.py | 170 | defined here | Extracts the reviewThreads connection object from a parsed GraphQL payload. |

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
An internal helper function (`_unwrap_review_threads`) for parsing GraphQL connection nodes rather than an SDLC lifecycle concept, classified as `name-only` per D-023.
