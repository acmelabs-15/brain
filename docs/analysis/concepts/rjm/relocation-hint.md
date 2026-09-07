---
package: rjm
name: _relocation_hint
slug: relocation-hint
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

# _relocation_hint

## Definition — verbatim
(used, not defined)

> "def _relocation_hint(anchors: list[str], cited_lines: list[str]) -> str:" — scripts/validation/check_citation_freshness.py:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 174 | defined here | Helper function scanning cited files for moved anchor text to provide corrected line hints. |

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
An internal Python helper function identifier in `check_citation_freshness.py` locating shifted anchor text to suggest updated line citations, classified as `name-only` per D-023.
