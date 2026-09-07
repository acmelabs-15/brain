---
package: rjm
name: recent_host_session_dates
slug: recent-host-session-dates
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
