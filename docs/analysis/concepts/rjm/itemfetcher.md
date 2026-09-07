---
package: rjm
name: ItemFetcher
slug: itemfetcher
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/discourse_traversal.py, sha256: 5feb6527764f4d50aa181cb0f50362ff3c4eda2820147b349b5a6ad3ab35ffd3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ItemFetcher

## Definition — verbatim
(used, not defined)

> "class ItemFetcher(Protocol):" — scripts/github_core/discourse_traversal.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/discourse_traversal.py | 162 | defined here | Protocol defining the fetch_body interface for retrieving issue and PR text bodies. |

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
defects: orphan

## Design notes
A Python Protocol defining the interface for fetching issue and pull request bodies during discourse traversal, classified as name-only per D-023.
