---
package: rjm
name: _has_ignore_marker
slug: has-ignore-marker
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

# _has_ignore_marker

## Definition — verbatim
(used, not defined)

> "def _has_ignore_marker(citing_lines: list[str] | None, line_number: int, line_text: str) -> bool:" — scripts/validation/check_citation_freshness.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_citation_freshness.py | 106 | defined here | Helper function checking if the citing line or preceding line contains an ignore marker with reason. |

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
An internal Python helper function identifier in `check_citation_freshness.py` detecting inline ignore directives, classified as `name-only` per D-023.
