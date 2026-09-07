---
package: rjm
name: _reciprocity_findings
slug: reciprocity-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _reciprocity_findings

## Definition — verbatim
(used, not defined)

> "def _reciprocity_findings(by_number: dict[int, Record], graph: _Graph) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:774

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 774 | defined here | Validation function identifying non-reciprocal supersession links across both edge directions as well as cycles. |

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
`_reciprocity_findings` is a Python validation helper function checking bidirectional supersession reciprocity rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
