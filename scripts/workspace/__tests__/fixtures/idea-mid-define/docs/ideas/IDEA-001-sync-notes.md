---
id: IDEA-001
status: define
---
# IDEA-001: Sync notes across devices

## Intent
- Outcome: a note written on one device shows up on the user's other devices within a minute.
- User: people who write notes on a phone and read them on a laptop.
- Why now: sync is the most requested feature in the last two support surveys.
- Success: 95% of edits reach a second device within 60 seconds, and no edit is lost.
- Constraint: notes stay readable offline; the team runs no new server.
- Out of scope: sharing notes between users.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for sync: the devices it covers, the service it runs on, and how two edits to one note merge.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering. The user wants the cheapest service that meets the 60-second target.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which devices sync at launch: phones, laptops, or both? | interview | resolved | — | DEC-001 |
| 02 | Can the local note store emit a change feed? | research | resolved | — | RES-001 |
| 03 | Last write wins, or merge, for two edits to one note? | interview | superseded by 06 | 01 | — |
| 04 | Sync through a hosted service, or peer to peer? | ideate | resolved | 01, 02 | DEC-002 |
| 05 | Set up a test account on the sync service | task | in-progress | 04 | — |
| 06 | How do two edits to one note merge? Pick one of two prototypes | prototype | open | 04 | — |
| 07 | What does the sync service cost per active user per month? | research | open | 02, 04 | — |
| 08 | Must notes be end-to-end encrypted at launch? | interview | open | — | — |
| 09 | How long may a device stay offline before a full resync? | interview | open | 05, 06 | — |
| 10 | Measure the sync time on the test account | task | open | 05 | — |

## Not yet specified
- How the app shows sync state to the user, once the merge rule is known.
- What happens to a note deleted on one device while another device is offline.

## Out of scope
- Sharing notes between users.
