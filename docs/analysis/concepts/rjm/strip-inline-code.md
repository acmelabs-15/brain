---
package: rjm
name: _strip_inline_code
slug: strip-inline-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _strip_inline_code

## Definition — verbatim
(used, not defined)

> "def _strip_inline_code(text: str) -> str:" — scripts/validation/check_skill_md_portability.py:360

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 360 | defined here | Removes inline code spans from Markdown text to prevent false positive marker matches. |

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
`_strip_inline_code` is a Python helper function identifier stripping backtick-enclosed inline code spans rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
