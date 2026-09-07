---
package: rjm
name: _paginated_items
slug: paginated-items
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _paginated_items

## Definition — verbatim
(used, not defined)

> "Fetch every page of a gh api array endpoint as one flat list." — scripts/analyze_pr_failure.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/analyze_pr_failure.py | 52 | defined here | Helper function fetching and flattening multi-page GitHub REST API array responses. |

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
defects: exit-code-mismatch, orphan

## Design notes
`_paginated_items` is an internal helper function identifier in `analyze_pr_failure.py` for paginating GitHub API responses rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
