---
package: rjm
name: get_today_session_logs
slug: get-today-session-logs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/__init__.py, sha256: 6da956883f74db3b17a744d1a96adfc5810f5fe26d04265957dd16aed6688967}
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
