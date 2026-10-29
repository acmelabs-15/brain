---
spec: SPEC-001
---
# SPEC-001 plan: Publish notes as HTML

## Overview
Parse each note, render it, then write the site folder. Each task needs the one before it.

## Decisions
- None.

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Parse the frontmatter of a note | task | resolved | — | a1b2c3d; `bun test src/notes`: 4 pass |
| 02 | Render a note's Markdown as HTML | task | in-progress | 01 | — |
| 03 | Write the site folder | task | open | 02 | — |
| 04 | Ready for review | checkpoint | open | 01, 02, 03 | — |

## Parallel waves
| Wave | Rows |
|---|---|
| 1 | 02 |
| 2 | 03 |
| 3 | 04 (checkpoint) |

Critical path, 3 rows: 02, 03, 04.

Files that more than one task in a wave touches: none.

Phases that share a wave: none.

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| A note with no frontmatter | low | Task 01 gives it an empty one |

## Open questions
- None.
