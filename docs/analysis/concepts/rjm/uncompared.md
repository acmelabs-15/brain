---
package: rjm
name: UNCOMPARED
slug: uncompared
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# UNCOMPARED

## Definition — verbatim
(used, not defined)

> "UNCOMPARED = \"UNCOMPARED\"" — scripts/quality_gate/resolve_pytest_signal.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 73 | defined here | Constant indicating that comparison between remote workflow status and local status was not performed. |

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
UNCOMPARED is a string constant identifier in resolve_pytest_signal.py indicating an unperformed comparison between shadow and local test results rather than an autonomous lifecycle concept.
