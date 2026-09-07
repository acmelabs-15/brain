---
package: rjm
name: VALID_KINDS
slug: valid-kinds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VALID_KINDS

## Definition — verbatim
(used, not defined)

> "VALID_KINDS: Final[frozenset[str]] = frozenset" — scripts/metrics/kill_criteria.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 77 | defined here | Constant frozenset defining valid kill criteria identifiers for event validation. |

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
VALID_KINDS is a constant set used for runtime validation of kill criteria event kinds in scripts/metrics/kill_criteria.py rather than a lifecycle concept.
