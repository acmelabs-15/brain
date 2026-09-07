---
package: rjm
name: coerce_to_list
slug: coerce-to-list
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# coerce_to_list

## Definition — verbatim
(used, not defined)

> "def coerce_to_list(" — scripts/hook_utilities/utilities.py:276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 14 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 276 | defined here | Normalizes heterogeneous work/outcomes data structures across multiple session schemas into a list. |

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
A Python data transformation helper normalizing session log work items into lists, classified as name-only per D-023.
