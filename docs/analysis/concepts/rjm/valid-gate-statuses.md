---
package: rjm
name: VALID_GATE_STATUSES
slug: valid-gate-statuses
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# VALID_GATE_STATUSES

## Definition — verbatim
(used, not defined)

> "VALID_GATE_STATUSES = frozenset({\"passed\", \"failed\", \"in_progress\", \"skipped\"})" — scripts/validate_phase_gates.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_phase_gates.py | 47 | defined here | Constant frozenset defining the recognized status values for phase validation gates. |

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
A constant identifier defining allowed gate status strings rather than an agent lifecycle concept.
