---
package: rjm
name: host_session_date
slug: host-session-date
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# host_session_date

## Definition — verbatim
(used, not defined)

> "def host_session_date(now: Callable[[], datetime] = datetime.now) -> str:" — scripts/hook_utilities/utilities.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 30 | defined here | Function returning the host local calendar date string formatted as YYYY-MM-DD. |

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
A Python utility function identifier that returns host-local date strings rather than an agent lifecycle concept.
