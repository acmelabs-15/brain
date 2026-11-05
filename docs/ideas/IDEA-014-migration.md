---
id: IDEA-014
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-014: Migration

## Intent
- Outcome: a repo on an older brain moves to the current workflow safely, with a backup and proof that its state survived.
- User: anyone with a repo on an older brain.
- Why now: other codebases are not compatible with the new workflow, and setup says it gives no whole-repo backup.
- Success: brain detects an outdated workspace, offers to migrate, backs up first, and proves afterwards that all state is preserved.
- Constraint: a migration runs only on the user's yes.
- Out of scope: recovery from a failed ordinary setup write, which IDEA-006 holds.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the migration.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Peter made this its own idea on 2026-11-05. The Intent is a draft, and no row here is decided.

Peter on migration, 2026-11-05: other codebases will not be compatible with the new workflow. The list of old and new pieces feeds a robust migration. On plugin startup, brain evaluates whether the workspace is outdated or incompatible, tells the user automatically, and offers to migrate safely. The migration backs up everything in its current state before it changes anything. Afterwards a mechanism validates that all state in the backup is preserved and that the codebase migrated successfully.

At 0.13.0, `skills/setup-brain/MIGRATION.md` covers layout 1 and says it is no whole-repo backup. The layout version stays 2 (`scripts/workspace/old-layout.ts:17`), so row 01 also asks what brings a migration to a repo already on layout 2.

Row 04 asks only about proof: `skills/setup-brain/MIGRATION.md` already says what happens to uncommitted files, and the workspace's Session state covers a host with no hook.
<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | What makes a workspace "outdated" or "incompatible"? | interview | open | — | — |
| 02 | What is the backup? | interview | open | — | — |
| 03 | What does "all state preserved" mean for work in progress? | interview | open | — | — |
| 04 | How does a migration prove that state survived? | interview | open | — | — |
| 05 | Which files must a migration handle that no record names, such as hand-written files under `docs/agents/` and session-start reading lists? | research | open | — | — |
| 06 | Which unhandled files does a migration cover? | interview | open | 05 | — |

## Not yet specified
None.

## Out of scope
None yet.
