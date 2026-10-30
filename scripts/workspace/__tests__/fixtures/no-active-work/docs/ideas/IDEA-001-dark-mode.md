---
id: IDEA-001
status: specced
---
# IDEA-001: Dark mode

## Intent
- Outcome: the app shows a dark theme when the user wants one.
- User: people who use the app at night.
- Why now: the top request in the app store reviews.
- Success: every screen passes a contrast check in both themes.
- Constraint: one set of colour tokens drives both themes.
- Out of scope: custom colour themes.

Confirmed by Sam on 2026-09-01.

## Destination
A spec for the theme tokens and a spec for the theme switch.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Follow the system theme only, or also offer a switch? | interview | superseded by 03 | — | DEC-001 |
| 02 | Which CSS feature reads the system theme? | research | resolved | — | RES-001 |
| 03 | Does a switch in the app override the system theme? | interview | resolved | 02 | DEC-002 |

## Not yet specified

## Out of scope
- Custom colour themes.
