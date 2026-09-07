---
package: rjm
name: assert_green
slug: assert-green
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# assert_green

## Definition — verbatim
(used, not defined)

> "def assert_green(result: subprocess.CompletedProcess[str], label: str) -> None:" — scripts/mutation_test_proc_group.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 69 | defined here | Defines assertion helper verifying that baseline tests pass with exit code 0. |

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
A Python assertion function identifier confirming that tests pass on unmodified code rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
