---
package: rjm
name: GateViolation
slug: gateviolation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GateViolation

## Definition — verbatim
(used, not defined)

> "class GateViolation:" — scripts/validation/check_build_gates.py:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 65 | defined here | Dataclass representing a missing required exit gate or section in build.md. |

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
defects: missing-path

## Design notes
`GateViolation` is a Python dataclass identifier in `check_build_gates.py` encapsulating missing exit gate violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
