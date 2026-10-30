---
spec: SPEC-003
---
# SPEC-003 plan: A settings page

## Overview
Phase one stores and reads the settings; checkpoint 03 closes it. Phase two draws the page and saves from it; checkpoint 06 closes it. Drawing the page needs nothing from phase one, so it starts at once.

## Decisions
- None.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Store the settings | task | open | — | — |
| 02 | Read the settings | task | open | 01 | — |
| 03 | The settings store works | checkpoint | open | 01, 02 | — |
| 04 | Draw the settings page | task | open | — | — |
| 05 | Save from the settings page | task | open | 01, 03, 04 | — |
| 06 | The settings page works | checkpoint | open | 04, 05 | — |

## Parallel waves
| Wave | Rows |
|---|---|
| 1 | 01, 04 |
| 2 | 02 |
| 3 | 03 (checkpoint) |
| 4 | 05 |
| 5 | 06 (checkpoint) |

Critical path, 5 rows: 01, 02, 03, 05, 06.

Files that more than one task in a wave touches: none.

Phases that share a wave, each named by its checkpoint row:
- 03 and 06: wave 1

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| The page shows a setting the store lacks | low | Task 05 saves through the store only |

## Open questions
- None.
