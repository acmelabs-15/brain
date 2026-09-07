---
package: rjm
name: ChecklistMatch
slug: checklistmatch
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ChecklistMatch

## Definition — verbatim
(used, not defined)

> "class ChecklistMatch:" — scripts/utils/markdown_parser.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 21 | defined here | Frozen dataclass returning completion status and evidence text from markdown table checklist matching. |

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
`ChecklistMatch` is an internal Python dataclass identifier in `scripts/utils/markdown_parser.py` encapsulating checklist query results rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
