---
package: rjm
name: select
slug: select
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# select

## Definition — verbatim
(used, not defined)

> "def select(" — scripts/test_selection/select_tests.py:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 117 | defined here | Core function determining which pytest test files to execute based on changed files and import graph closure. |

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
`select` is the primary entrypoint function identifier in `scripts/test_selection/select_tests.py` executing the test selection algorithm rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
