---
package: rjm
name: _mapping_lock
slug: mapping-lock
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _mapping_lock

## Definition — verbatim
(used, not defined)

> "def _mapping_lock(project_root: Path) -> Iterator[None]:" — scripts/pr_branch_mapping.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 138 | defined here | Context manager providing process-level advisory locking for concurrent read-modify-write operations on the mapping file. |

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
`_mapping_lock` is a Python context manager identifier coordinating process file locks on shared mapping state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
