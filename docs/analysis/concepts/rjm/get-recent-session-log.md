---
package: rjm
name: get_recent_session_log
slug: get-recent-session-log
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_recent_session_log

## Definition — verbatim
(used, not defined)

> "def get_recent_session_log(" — scripts/hook_utilities/utilities.py:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 17 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 231 | defined here | Discovers the newest session log file across host-local and UTC date candidate prefixes. |

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
A Python utility function finding the latest session log using prioritized date prefixes, classified as name-only per D-023.
