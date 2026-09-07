---
package: rjm
name: _prepend_marker
slug: prepend-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _prepend_marker

## Definition — verbatim
(used, not defined)

> "def _prepend_marker(body: str, marker_html: str) -> str:" — .github/scripts/post_issue_comment.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/post_issue_comment.py | 125 | defined here | Helper function prepending an HTML comment tracking marker to a comment body. |

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
A Python helper function identifier (`_prepend_marker`) prepending HTML tracking markers to comments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
