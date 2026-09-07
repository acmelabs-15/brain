---
package: rjm
name: maxNesting
slug: maxnesting
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# maxNesting

## Definition — verbatim
(used, not defined)

> "Raised when input nests past the parser's ``maxNesting`` limit." — scripts/utils/markdown_parser.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 84 | used here | Mentioned in docstring explaining parser configuration options and container nesting cutoffs. |

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
`maxNesting` is a configuration property identifier of the `markdown-it-py` parser governing recursion depth rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
