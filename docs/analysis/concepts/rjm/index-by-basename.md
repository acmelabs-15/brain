---
package: rjm
name: index_by_basename
slug: index-by-basename
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# index_by_basename

## Definition — verbatim
(used, not defined)

> "def index_by_basename(memories_root: Path) -> dict[str, list[str]]:" — scripts/validation/check_skill_memory_references.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 219 | defined here | Function mapping each memory's file stem to the list of scoped memory names sharing that stem. |

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
A Python helper function identifier in `check_skill_memory_references.py`, classified as name-only per D-023.
