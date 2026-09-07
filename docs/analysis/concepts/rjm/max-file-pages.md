---
package: rjm
name: MAX_FILE_PAGES
slug: max-file-pages
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MAX_FILE_PAGES

## Definition — verbatim
(used, not defined)

> "    MAX_FILE_PAGES, PERMANENT_AUTH_FAILURE, PrMetadata, ReviewContext," — scripts/ci/build_ai_review_context.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 33 | used here | Imported constant defining the maximum page count for paginated file listings. |

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
`MAX_FILE_PAGES` is a numeric constant setting pagination page bounds for GitHub PR file retrieval rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
