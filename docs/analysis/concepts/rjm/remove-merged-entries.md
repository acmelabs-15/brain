---
package: rjm
name: remove_merged_entries
slug: remove-merged-entries
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# remove_merged_entries

## Definition — verbatim
(used, not defined)

> "def remove_merged_entries(mapping: PRBranchMapping) -> int:" — scripts/pr_branch_mapping.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 285 | defined here | Cleanup function pruning mapping entries that have been merged or closed. |

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
defects: orphan

## Design notes
`remove_merged_entries` is a Python function identifier cleaning up obsolete entries from mapping state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
