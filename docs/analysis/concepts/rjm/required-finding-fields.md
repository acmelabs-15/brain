---
package: rjm
name: REQUIRED_FINDING_FIELDS
slug: required-finding-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REQUIRED_FINDING_FIELDS

## Definition — verbatim
(used, not defined)

> "REQUIRED_FINDING_FIELDS = frozenset({\"severity\", \"category\", \"description\"})" — scripts/validate_quality_gate_output.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 45 | defined here | Constant frozenset defining required field names on quality gate finding objects. |

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
defects: orphan, script-bug

## Design notes
REQUIRED_FINDING_FIELDS is a constant set identifier defining mandatory finding fields in scripts/validate_quality_gate_output.py rather than an SDLC lifecycle concept.
