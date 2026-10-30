---
spec: SPEC-004
---
# SPEC-004 plan: Undo and redo

## Overview
Record each edit, then undo, redo and clear. Rows 02, 03 and 04 block each other, so no order can start them.

## Decisions
- None.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Record each edit | task | open | — | — |
| 02 | Undo an edit | task | open | 01, 04 | — |
| 03 | Redo an edit | task | open | 02 | — |
| 04 | Clear the history on save | task | open | 03 | — |

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| A long history uses much memory | low | Keep the last 100 edits |

## Open questions
- None.
