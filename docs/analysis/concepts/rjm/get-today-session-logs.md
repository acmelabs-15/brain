---
package: rjm
name: get_today_session_logs
slug: get-today-session-logs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_today_session_logs

## Definition — verbatim
(used, not defined)

> "def get_today_session_logs(" — scripts/hook_utilities/utilities.py:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 19 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 212 | defined here | Returns a list of all session log files matching today's host-local date in a session directory. |

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
A Python utility function collecting all session logs created on today's host date, classified as name-only per D-023.
