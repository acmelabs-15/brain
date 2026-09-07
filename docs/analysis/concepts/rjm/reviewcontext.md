---
package: rjm
name: ReviewContext
slug: reviewcontext
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReviewContext

## Definition — verbatim
(used, not defined)

> "class ReviewContext:" — scripts/gh_retry_helpers.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 33 | used here | Imported dataclass holding assembled review context payload and status. |
| scripts/gh_retry_helpers.py | 78 | defined here | Dataclass encapsulating review context content string and status flags. |

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
`ReviewContext` is a Python dataclass identifier structuring assembled context payloads for AI review scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
