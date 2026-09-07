---
package: rjm
name: DEFAULT_BASELINE
slug: default-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DEFAULT_BASELINE

## Definition — verbatim
(used, not defined)

> "DEFAULT_BASELINE = Path" — scripts/validation/check_adr_links.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 102 | defined here | Constant defining the default file path for the ADR links baseline. |

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
`DEFAULT_BASELINE` is a Python module constant identifier defining the default filesystem path to `check_adr_links_baseline.txt` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
