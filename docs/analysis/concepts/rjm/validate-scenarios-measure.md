---
package: rjm
name: _validate_scenarios_measure
slug: validate-scenarios-measure
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _validate_scenarios_measure

## Definition — verbatim
(used, not defined)

> "def _validate_scenarios_measure(data: Mapping[str, Any], path: Path) -> None:" — scripts/validation/check_rule_activation_coverage.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 140 | defined here | Private helper function verifying that a scenario file contains at least one positive measurement case. |

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
A private validation function identifier ensuring scenario files define positive measurement cases rather than an agent lifecycle concept.
