---
package: rjm
name: assert_red
slug: assert-red
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# assert_red

## Definition — verbatim
(used, not defined)

> "def assert_red(result: subprocess.CompletedProcess[str], mutation_name: str) -> None:" — scripts/mutation_test_proc_group.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 55 | defined here | Defines assertion helper verifying that a mutated test run produces a non-zero exit code (kills the mutant). |

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
A Python assertion function identifier confirming that tests fail on mutated code rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
