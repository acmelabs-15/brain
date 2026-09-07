---
package: rjm
name: archive_orphans
slug: archive-orphans
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# archive_orphans

## Definition — verbatim
(used, not defined)

> "def archive_orphans(" — scripts/traceability/resolve_orphaned_specs.py:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 118 | defined here | Maintenance function moving orphaned specification files into an archive directory. |

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
A Python maintenance function relocating orphaned specification files to `.archive/`, classified as `name-only` per D-023.
