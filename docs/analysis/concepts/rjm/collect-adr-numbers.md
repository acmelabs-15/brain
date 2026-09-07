---
package: rjm
name: collect_adr_numbers
slug: collect-adr-numbers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# collect_adr_numbers

## Definition — verbatim
(used, not defined)

> "def collect_adr_numbers(adr_dir: Path) -> dict[int, list[Path]]:" — scripts/validation/check_adr_uniqueness.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 46 | defined here | Function scanning the architecture directory to map ADR numbers to their file paths. |

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
`collect_adr_numbers` is a Python helper function identifier in `check_adr_uniqueness.py` collecting ADR numbers from filesystem paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
