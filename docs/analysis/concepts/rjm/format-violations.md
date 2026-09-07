---
package: rjm
name: _format_violations
slug: format-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _format_violations

## Definition — verbatim
(used, not defined)

> "def _format_violations(violations: list[GateViolation]) -> str:" — scripts/validation/check_build_gates.py:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 176 | defined here | Formats gate violation objects into human-readable multi-line terminal output. |

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
`_format_violations` is an internal Python helper function identifier in `check_build_gates.py` formatting diagnostic output strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
