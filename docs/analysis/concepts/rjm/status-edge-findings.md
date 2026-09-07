---
package: rjm
name: _status_edge_findings
slug: status-edge-findings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _status_edge_findings

## Definition — verbatim
(used, not defined)

> "def _status_edge_findings(by_number: dict[int, Record], graph: _Graph) -> list[Violation]:" — scripts/validation/check_adr_lifecycle.py:804

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 804 | defined here | Validation function enforcing status-edge-consistency by verifying status: superseded iff a resolved superseded-by edge exists. |

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
`_status_edge_findings` is a Python validation function in check_adr_lifecycle.py verifying status-edge consistency rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
