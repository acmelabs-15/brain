---
package: rjm
name: MISSED
slug: missed
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MISSED

## Definition — verbatim
> "It is ``MISSED`` when the command succeeds, because the mutant survived." — scripts/testing/mutation_harness.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 21 | defined here | Mutation battery evaluation verdict indicating the test command passed despite mutation and the mutant survived undetected. |

## Consumes
Mutated source code in isolated workspace and test execution command.

## Produces
Failing mutation test verdict exposing absent or ineffective test assertions.

## When applied
Emitted when a test command exits zero against a mutated source anchor during mutation battery evaluation.

## Sub-concepts
none

## Part of
mutation_harness

## Implementation status
defects: orphan

## Design notes
`MISSED` is a negative mutation verification verdict in `mutation_harness.py` indicating that an intentional defect survived test suite execution without triggering a failure. It flags dead or ineffective tests in rjm:test, preventing false confidence in test coverage.
