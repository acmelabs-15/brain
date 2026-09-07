---
package: rjm
name: run_tests
slug: run-tests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# run_tests

## Definition — verbatim
(used, not defined)

> "def run_tests(" — scripts/mutation_test_proc_group.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 42 | defined here | Defines test execution helper running pytest with bytecode purging. |

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
A Python helper function identifier executing a pytest test file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
