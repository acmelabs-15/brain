---
package: rjm
name: _format_dupes
slug: format-dupes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _format_dupes

## Definition — verbatim
(used, not defined)

> "def _format_dupes(dupes: list[tuple[int, list[Path]]], repo_root: Path) -> list[str]:" — scripts/validation/check_adr_uniqueness.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 75 | defined here | Formats duplicate ADR numbers into human-readable reporting strings. |

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
A helper function identifier in check_adr_uniqueness.py for formatting duplicate ADR collision reports, classified as name-only per D-023.
