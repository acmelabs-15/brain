---
spec: SPEC-001
---
# SPEC-001 plan: Export invoices as CSV

## Overview
Build the CSV writer first, then the range export, then the Export button on the invoices page. A checkpoint follows the range export, and a review closes the plan.

## Decisions
- DEC-001: Export the number, date, customer, net, tax and total
- DEC-002: Export CSV in UTF-8 with a byte order mark
- DEC-003: Put the Export button in the invoices page header

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Write one invoice as a CSV row | task | resolved | — | 3f2a9c1; `bun test src/export`: 6 pass |
| 02 | Export every invoice in a date range | task | resolved | 01 | 8b41d07; `bun test src/export`: 11 pass |
| 03 | Export works end to end | checkpoint | resolved | 01, 02 | 8b41d07; `bun run check`: green |
| 04 | Add the Export button to the invoices page | task | in-progress | 02, 03 | — |
| 05 | Quote customer names that hold commas or quotes | task | open | 01, 03 | — |
| 06 | Show progress for an export of more than 1,000 invoices | task | open | 04 | — |
| 07 | Ready for review | checkpoint | open | 04, 05, 06 | — |

## Parallel waves
| Wave | Rows |
|---|---|
| 1 | 04, 05 |
| 2 | 06 |
| 3 | 07 (checkpoint) |

Critical path, 3 rows: 04, 06, 07.

Files that more than one task in a wave touches: none.

Phases that share a wave: none.

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| A long range blocks the page | medium | Stream the rows; task 06 shows progress |

## Open questions
- None.
