---
package: rjm
name: _parse_baseline_payload
slug: parse-baseline-payload
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _parse_baseline_payload

## Definition — verbatim
(used, not defined)

> "def _parse_baseline_payload(text: str, source: str) -> dict[str, int] | str:" — scripts/validation/check_adr_lifecycle.py:879

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 879 | defined here | Validation function verifying baseline JSON schema and returning per-check count mappings or a failure description. |

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
`_parse_baseline_payload` is a Python validation function in check_adr_lifecycle.py parsing baseline JSON payload mappings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
