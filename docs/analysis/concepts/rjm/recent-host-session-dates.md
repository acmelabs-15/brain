---
package: rjm
name: recent_host_session_dates
slug: recent-host-session-dates
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# recent_host_session_dates

## Definition — verbatim
(used, not defined)

> "def recent_host_session_dates(now: Callable[[], datetime] = datetime.now) -> tuple[str, str]:" — scripts/hook_utilities/utilities.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 43 | defined here | Function returning a tuple of today and yesterday host local date strings. |

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
A Python utility function identifier returning a two-day host date window rather than an agent lifecycle concept.
