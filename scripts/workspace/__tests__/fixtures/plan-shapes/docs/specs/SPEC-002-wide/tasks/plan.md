---
spec: SPEC-002
---
# SPEC-002 plan: Import contacts from four formats

## Overview
Add the contact model, then one importer per format, then pick the importer from the file type.

## Decisions
- None.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Add the contact model | task | resolved | — | 5e6f7a8; `bun test src/contacts`: 3 pass |
| 02 | Import contacts from CSV | task | open | 01 | — |
| 03 | Import contacts from vCard | task | open | 01 | — |
| 04 | Import contacts from JSON | task | open | 01 | — |
| 05 | Import contacts from a spreadsheet | task | open | 01 | — |
| 06 | Pick the importer from the file type | task | open | 02, 03, 04, 05 | — |

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| Two importers edit the importer list at once | low | The main session merges one task at a time |

## Open questions
- None.
