---
package: rjm
name: format_work_item
slug: format-work-item
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# format_work_item

## Definition — verbatim
(used, not defined)

> "def format_work_item(" — scripts/hook_utilities/utilities.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 15 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 309 | defined here | Formats a session work item dictionary into a human-readable string supporting current and legacy schemas. |

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
A Python formatting helper converting session work item dictionaries into readable text, classified as name-only per D-023.
