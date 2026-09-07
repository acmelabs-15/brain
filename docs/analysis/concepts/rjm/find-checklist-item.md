---
package: rjm
name: find_checklist_item
slug: find-checklist-item
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_checklist_item

## Definition — verbatim
(used, not defined)

> "def find_checklist_item(markdown: str, pattern: str) -> ChecklistMatch:" — scripts/utils/markdown_parser.py:950

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 950 | defined here | Function searching parsed markdown table rows for a regex pattern match alongside a checked checkbox. |

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
`find_checklist_item` is a Python utility function identifier in `scripts/utils/markdown_parser.py` verifying table checklist items rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
