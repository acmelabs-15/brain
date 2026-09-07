---
package: rjm
name: session validation
slug: session-validation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# session validation

## Definition — verbatim
(used, not defined)

> "AST-based Markdown parsing utilities for session validation." — scripts/utils/markdown_parser.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 1 | used here | Target application context named in the module docstring for markdown parsing tools. |

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
`session validation` is a general operational phrase in `scripts/utils/markdown_parser.py` designating the context in which markdown parsing is applied rather than a discrete lifecycle concept, classified as `kind: name-only` per D-023.
