---
spec: SPEC-001
---
# SPEC-001 plan: Colour tokens for a light and a dark theme

## Overview
Move every colour to tokens, then give each token its dark value.

## Decisions
- DEC-002: Follow the system theme, with a switch that overrides it

## Tasks
This table holds the only status of each task; its block in `todo.md` holds the detail. A resolved row's result is the commit SHA, then the verification command and its outcome.

| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Move every colour literal to a token | task | resolved | — | 51c0e2a; `bun run check`: green |
| 02 | Give each token its dark value | task | resolved | 01 | 9d7f3b4; `bun test src/theme`: 14 pass |
| 03 | Both themes pass the contrast check | checkpoint | resolved | 02 | 9d7f3b4; `bun run check`: green |

## Risks
| Risk | Impact | Mitigation |
|---|---|---|
| A screen keeps a colour literal | low | The lint rule bans colour literals outside `tokens.css` |

## Open questions
- None.
