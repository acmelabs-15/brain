---
package: rjm
name: find_section
slug: find-section
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_section

## Definition — verbatim
(used, not defined)

> "def find_section(markdown: str, heading: str, level: int = 2) -> str | None:" — scripts/utils/markdown_parser.py:1055

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 1055 | defined here | Function locating and returning the body text of a section matching a specified heading and level. |

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
defects: doc-drift

## Design notes
`find_section` is a Python utility function identifier in `scripts/utils/markdown_parser.py` extracting markdown section bodies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
