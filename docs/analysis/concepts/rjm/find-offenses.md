---
package: rjm
name: find_offenses
slug: find-offenses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_offenses

## Definition — verbatim
(used, not defined)

> "def find_offenses(line: str, repo_root: Path, tracked_py: set[str]) -> list[tuple[str, list[str]]]:" — scripts/validation/check_doc_interpreter_portability.py:372

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 372 | defined here | Function identifying unportable python invocations and their third-party modules on a line. |

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
A Python inspection function in `check_doc_interpreter_portability.py` scanning lines for unportable script commands, classified as name-only per D-023.
