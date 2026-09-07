---
package: rjm
name: STATUS_CANCELLED
slug: status-cancelled
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# STATUS_CANCELLED

## Definition — verbatim
(used, not defined)

> "STATUS_CANCELLED = \"CANCELLED\"" — scripts/quality_gate/resolve_pytest_signal.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/quality_gate/resolve_pytest_signal.py | 55 | defined here | Constant identifying a cancelled pytest execution status in the shadow signal resolution state machine. |

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
STATUS_CANCELLED is a string constant identifier in resolve_pytest_signal.py representing a prematurely terminated workflow run rather than an autonomous lifecycle concept.
