---
spec: SPEC-002
---
# SPEC-002 plan: A theme switch in the app

## Overview
Build the switch, keep the choice on the device, then review.

## Decisions
- DEC-002: Follow the system theme, with a switch that overrides it

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Add the switch to the settings page | task | resolved | — | c4e81f0; `bun test src/settings`: 5 pass |
| 02 | Keep the choice in a cookie | task | superseded by 03 | 01 | — |
| 03 | Keep the choice in local storage | task | resolved | 01 | 27ab9e5; `bun test src/settings`: 8 pass |
| 04 | Ready for review | checkpoint | resolved | 01, 03 | 27ab9e5; `bun run check`: green |

## Parallel waves
No open rows: every row is resolved or superseded.

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| Local storage is cleared | low | The switch falls back to "system" |

## Open questions
- None.
