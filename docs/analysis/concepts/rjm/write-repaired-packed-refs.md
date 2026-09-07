---
package: rjm
name: _write_repaired_packed_refs
slug: write-repaired-packed-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _write_repaired_packed_refs

## Definition — verbatim
(used, not defined)

> "def _write_repaired_packed_refs(packed_refs_path: Path, repaired: bytes) -> None:" — scripts/maintenance/repair_packed_refs.py:199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 199 | defined here | Internal helper writing normalized packed-refs data to a temporary file, fsyncing, and atomically replacing destination. |

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
An internal helper function identifier in `repair_packed_refs.py` implementing atomic file replacement rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
