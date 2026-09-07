---
package: rjm
name: inverted-control
slug: inverted-control
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# inverted-control

## Definition — verbatim
> "Exit 0 = all mutations killed, inverted-control green, baseline green." — scripts/mutation_test_proc_group.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 14 | defined here | used here | Requires verifying that unmutated correct code passes tests as a baseline control during mutation testing. |

## Consumes
Target test suites and unmodified source files.

## Produces
Confirmation that the baseline test suite passes when no mutations are active.

## When applied
Run before, during, and after mutation iterations to verify tests only fail due to injected faults.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A mutation testing verification technique ensuring that test suites remain green on unmodified code so test failures are accurately attributed to mutants.
