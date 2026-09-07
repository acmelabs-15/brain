---
package: rjm
name: citation-freshness: ignore
slug: citation-freshness-ignore
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

# citation-freshness: ignore

## Definition — verbatim
(used, not defined)

> "hatch: ``citation-freshness: ignore`` (with a reason) on the citing line" — scripts/validation/check_citation_freshness.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 24 | defined here | Documented inline directive comment used as an escape hatch to exempt specific citations from freshness validation. |

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
An in-source directive marker string (`citation-freshness: ignore`) used to suppress freshness checks on specific lines, classified as `name-only` per D-023.
