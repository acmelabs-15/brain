---
package: rjm
name: delete_orphans
slug: delete-orphans
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# delete_orphans

## Definition — verbatim
(used, not defined)

> "def delete_orphans(" — scripts/traceability/resolve_orphaned_specs.py:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 162 | defined here | Maintenance function permanently deleting confirmed orphaned specification files. |

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
A Python utility function deleting unreferenced specification files with confirmation, classified as `name-only` per D-023.
