---
package: rjm
name: ValidationProblem
slug: validationproblem
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# ValidationProblem

## Definition — verbatim
(used, not defined)

> "class ValidationProblem:" — scripts/testing/mutation_harness.py:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 104 | defined here | Dataclass capturing configuration errors and invalid anchors discovered before battery execution. |

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
ValidationProblem is a Python dataclass identifier used for pre-execution battery validation errors rather than a lifecycle concept.
