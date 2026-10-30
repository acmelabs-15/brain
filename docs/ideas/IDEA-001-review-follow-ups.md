---
id: IDEA-001
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-001: Follow-ups from the phase 6 review

## Intent
- Outcome: each non-blocking finding of the phase 6 review of `feat/workspace-layout` is either fixed or rejected with its reason.
- User: brain's maintainers, and the agents that build brain.
- Why now: the review of 4f0f3d25...cb74f69c found them, and Peter kept them out of PR 2 so it stops growing (2026-10-29).
- Success: every row below is resolved: a commit that fixes it, or a decision record that rejects it.
- Constraint: no behaviour change without a test first; the protocol keeps its 4,000-character budget.
- Out of scope: the required fixes, the shared helpers and the overlap match, which land in PR 2 (T53 to T57).

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec with a plan for the rows Peter keeps, built after PR 2 merges.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering. The rows come from the merged review (B, D and the other non-blocking items); each names the axis that found it, and its file and line at cb74f69c, which T53 to T57 may shift.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which of rows 02 to 18 are worth doing, and in what order? | interview | open | — | — |
| 02 | Split `scripts/setup/migrate.ts` (893 lines) by step (spec, decisions, intent, tracker, workspace), with the undo writer (`commitWrites`, `apply`, `undoAll`) in its own file (architecture 6, readability 2) | task | open | 01 | — |
| 03 | Split `scripts/setup/overlap.ts` (829 lines) into its text, Markdown and report parts (architecture 6, readability 2) | task | open | 01 | — |
| 04 | Give the migrate mode its own entry file, not `write.ts --migrate`, with its own usage text; `write.ts`'s header is about 45 lines and `SetupInput` has 14 fields (readability 4) | task | open | 01 | — |
| 05 | Move `UsageError` out of `setup/migrate.ts`, so `setup/overlap.ts:37` stops importing from a sibling CLI (architecture 6) | task | open | 01 | — |
| 06 | Replace the four-way `instanceof UsageError` chain in `setup/migrate.ts` (about lines 720 to 740) with one helper (readability 3) | task | open | 01 | — |
| 07 | Move `scripts/workspace/old-layout.ts` to `scripts/setup/`, so `workspace/status.ts:18` imports only a `needsMigration` check (architecture 4) | task | open | 01 | — |
| 08 | One constant for an effort folder's inner paths (`spec.md`, `tasks/plan.md`, `tasks/todo.md`), now written out in `workspace/plan.ts:280-305`, `new-doc.ts:35`, `status.ts:139` and `old-layout.ts:32` (architecture 5) | task | open | 01 | — |
| 09 | Move `/build`'s worktree fallback to a reference file behind a pointer: `.claude/commands/build.md`, `commands/build.toml` (readability 5) | task | open | 01 | — |
| 10 | interview-me states "load three skills" in three places: `skills/interview-me/SKILL.md` lines 49 to 55, 83 and 146 (readability 7) | task | open | 01 | — |
| 11 | `brain status` reads each workspace file about four times: `workspace/status.ts:287-299` (performance 1; 150 ms on 1,252 files) | task | open | 01 | — |
| 12 | The scans await each file read in turn: `workspace/check.ts:327-349`, `status.ts:157-175`, `effort.ts:48-80`, `lifecycle/names.ts:118-126` (performance 2) | task | open | 01 | — |
| 13 | `brain check` does not check that `evidence:` and `from:` links exist, and accepts a DEC superseded by itself: `workspace/check.ts` `linkProblems` (correctness 6) | task | open | 01 | — |
| 14 | Rows behind a stuck row drop out of `brain plan`'s waves with no line: `workspace/graph.ts` `layWaves` (correctness 7) | task | open | 01 | — |
| 15 | The `docs/STATUS.md` note parser takes the first label anywhere, code blocks included: `workspace/status.ts` `readNote` (correctness 8) | task | open | 01 | — |
| 16 | Two functions named `titleOf` mean different things: `workspace/status.ts:73` and `setup/migrate.ts:286`; and `check.ts`'s `slug` constant holds a pattern (readability 8, 9) | task | open | 01 | — |
| 17 | The hook puts `docs/STATUS.md` into the session's context: frame it as text from the repo, not instructions (`hooks/session-start.ts:75`); `folderPath` does not resolve symlinks (`workspace/config.ts:75`) (security notes) | task | open | 01 | — |
| 18 | `workspace/graph.ts`, `map.ts` and `effort.ts` load only in spawned `brain` processes, so coverage cannot measure them; decide whether they get direct unit tests (main session's test review) | task | open | 01 | — |

## Not yet specified
- Whether the glossary needs an entry for "gate" in the sense of a repo's check command, which brain's `AGENTS.md` uses.

## Out of scope
- The required fixes, the shared helpers (A) and the overlap match (C): T53 to T57, in PR 2.
