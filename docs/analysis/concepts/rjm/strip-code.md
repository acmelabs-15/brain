---
package: rjm
name: _strip_code
slug: strip-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _strip_code

## Definition — verbatim
(used, not defined)

> "def _strip_code(text: str) -> str:" — scripts/validation/check_skill_md_portability.py:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 338 | defined here | Strips fenced and indented code blocks from Markdown text while preserving line numbers. |

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
`_strip_code` is a Python helper function identifier removing code blocks from Markdown content rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
