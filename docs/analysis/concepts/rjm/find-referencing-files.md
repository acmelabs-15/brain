---
package: rjm
name: find_referencing_files
slug: find-referencing-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_referencing_files

## Definition — verbatim
(used, not defined)

> "def find_referencing_files(spec_id: str, base_path: Path) -> list[Path]:" — scripts/traceability/rename_spec_id.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/rename_spec_id.py | 39 | defined here | Function discovering all specification files that reference a target spec ID in their related list. |

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
defects: script-bug

## Design notes
A Python helper function in `rename_spec_id.py` scanning specification directories for files referencing a spec ID, classified as `name-only` per D-023.
