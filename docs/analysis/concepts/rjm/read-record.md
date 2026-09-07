---
package: rjm
name: _read_record
slug: read-record
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _read_record

## Definition — verbatim
(used, not defined)

> "def _read_record(path: Path, number: int, rel: str) -> tuple[Record, Violation | None]:" — scripts/validation/check_adr_lifecycle.py:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 376 | defined here | Function reading an individual ADR file, parsing frontmatter, and producing a Record tuple with any parsing violation. |

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
A Python function identifier in `check_adr_lifecycle.py` that reads an individual ADR file into a Record dataclass, classified as `name-only` per D-023 because it is a code function identifier rather than a development lifecycle concept.
