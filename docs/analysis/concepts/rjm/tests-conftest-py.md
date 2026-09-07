---
package: rjm
name: tests/conftest.py
slug: tests-conftest-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# tests/conftest.py

## Definition — verbatim
(used, not defined)

> "tests/conftest.py" — scripts/test_selection/runtime_read_patterns.txt:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/runtime_read_patterns.txt | 5 | defined here | Pattern entry requiring a full test run whenever the tests directory conftest fixture file is modified. |

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
`tests/conftest.py` is a pytest test suite fixture file path in `scripts/test_selection/runtime_read_patterns.txt` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
