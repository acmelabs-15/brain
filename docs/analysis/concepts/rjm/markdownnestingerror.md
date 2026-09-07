---
package: rjm
name: MarkdownNestingError
slug: markdownnestingerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MarkdownNestingError

## Definition — verbatim
(used, not defined)

> "class MarkdownNestingError(ValueError):" — scripts/utils/markdown_parser.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 83 | defined here | Exception class raised when markdown input exceeds recursion or token nesting limits. |
| scripts/validation/check_skill_md_portability.py | 91 | used here | Imported to catch nesting truncation errors and handle deeply nested documents fail-closed. |

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
`MarkdownNestingError` is a Python exception class identifier in `scripts/utils/markdown_parser.py` signaling parser nesting limit exhaustion rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
