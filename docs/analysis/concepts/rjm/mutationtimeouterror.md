---
package: rjm
name: MutationTimeoutError
slug: mutationtimeouterror
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationTimeoutError

## Definition — verbatim
(used, not defined)

> "class MutationTimeoutError(RuntimeError):" — scripts/testing/mutation_harness.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 68 | defined here | Exception class raised when a mutation child test execution command exceeds its configured timeout budget. |

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
MutationTimeoutError is a Python exception class identifier for timing out test execution commands rather than a lifecycle concept.
