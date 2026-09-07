---
package: rjm
name: validate_battery
slug: validate-battery
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# validate_battery

## Definition — verbatim
(used, not defined)

> "def validate_battery(entries: Sequence[MutationEntry]) -> list[ValidationProblem]:" — scripts/testing/mutation_harness.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 166 | defined here | Function validating mutation entries against target source files for identity mutations or ambiguous anchors. |

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
validate_battery is a Python function identifier validating mutation definitions against target source files rather than a lifecycle concept.
