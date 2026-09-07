---
package: rjm
name: citation_anchors
slug: citation-anchors
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# citation_anchors

## Definition — verbatim
(used, not defined)

> "from citation_anchors import (" — scripts/validation/check_citation_freshness.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 52 | used here | Sibling validation module imported for extracting citation anchor tokens. |
| scripts/validation/check_citation_freshness.py | 150 | defined here | Helper function collecting anchor tokens from citing lines. |

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
A Python module import and helper function identifier for citation anchor extraction in `check_citation_freshness.py`, classified as `name-only` per D-023.
