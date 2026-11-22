---
id: RES-097
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-016#27
date: 2026-11-21
---
# RES-097: How this repo's specs, plans and task files carry state and waits

## Question
How do this repo's specs, plans and task files carry state and waits in practice: migrated layout-1 files, state known only by inference, and phases?

## Answer
Sufficient answer: with a path per claim, and counts made by recorded commands that another agent can repeat. For each spec folder under specs/ and for tasks/, the record states its format (layout 2 or migrated layout 1, and which plan and todo shape). It states what state a reader can infer and from what (ticked boxes, plan tables, checkpoints, phases, a done folder). It states the stored status that each spec would have today under DEC-051 if one were written, as a fact from its files, and names the specs where the files do not settle it. It lists every wait in these files (Blocked by, Dependencies or "Depends on" lines and columns, the module order from DEC-004 that the specs repeat). It lists every phase, checkpoint or wave that a real plan in this repo holds, or states that none holds one. It states what the current parser reads from each of these files and what it misses. It names what could not be established and any contrary evidence.

This record was repaired on 2026-11-21 from three independent checks. The section "Checks" gives the result of each check.

### Short answer

- Every spec file in this repo is a migrated layout-1 file. All 25 files under `specs/` hold `spec:` and `migrated: 0.8` and no other field. No real plan in this repo has the layout-2 row table, so no real spec has a stored status, a `Blocked by` cell, a checkpoint row or a `sources:` list (F03 to F05).
- State is known only by inference today. Layout 1 had one stored state per spec, in the `State` column of `spec/README.md`. A commit of the migration day removed that file, and nothing that holds a spec's state replaced it (F65, F66).
- Four main carriers of state remain, and no code reads them: ticked boxes in `tasks/todo.md`, a prose `Status:` line in `spec.md`, a prose "approved" line and sometimes a "Done" line in `tasks/plan.md`, and the folder `tasks/done/`. Smaller carriers are wave labels, dated notes in checkpoint boxes, prefixes on closed open questions, and commit subjects (F11 to F21, F86).
- The `Status:` line disagrees with the plan and the ticks in 5 of 9 specs. One more spec, SPEC-009, holds other stale marks in its plan (F14, F15, F21).
- Under DEC-051 the files give `done` for 7 of 9 specs, by their ticks. For 2 of the 7 (SPEC-002 and SPEC-006) one success criterion has no recorded run. The files give `open` for SPEC-007: it is approved and not built, and no file says `parked`. The files do not settle SPEC-005: done or superseded (F18, F19, F69, F77).
- Waits take ten written forms in these files. None is a `Blocked by` field. Only one form names another spec as a blocker in a fixed place: the module "Depends on", which five spec heads and four plan heads repeat by module ID. DEC-004 holds that order twice, in a "Depends on" column and in a build-order line, and the line holds more order than the column. Every one of those waits is already met (F24 to F36, F67, F68).
- Prose waits and references also cross files, at the level of one success criterion or one task. One of them points against the direction of DEC-004, and one adds a wait where DEC-004 has none (F34, F78).
- Two of the nine real plans have phases (SPEC-008 and SPEC-009). Only SPEC-009 has checkpoints with boxes and a wave table, all written by hand. In SPEC-009 a phase is the tasks under a heading; no checkpoint lists the tasks that it waits on. Only the number of a phase is the same in every place (F37 to F45, F80 to F83).
- Brain's workspace code reads no status and no wait below the frontmatter of these files. It searches the plan body for a table that is not there, finds no row, and counts all nine specs as finished. `brain status` reports a spec only on a branch whose name equals that spec's ID or slug, and then as `finished` (F46 to F55, F71 to F73).

### Format of each folder

`docs/agents/workspace.md` records `layout: 2`. The table gives the format of the files inside each folder.

| Folder | Files | Format | Plan shape | Todo shape |
|---|---|---|---|---|
| `specs/SPEC-001-evals` | spec, plan, todo | migrated layout 1 | table `# \| Component \| Depends on \| Risk`, 5 rows; one order line; 3 "After N" bullets; "Not in this plan"; a "Done" line | 5 lines `- [x] Task N: <title>` with Acceptance, Verify, Files |
| `specs/SPEC-002-host-manifests` | spec, plan, todo | migrated layout 1 | same table, 6 rows; one order line; 3 bullets; "Not in this plan" | 6 task lines, same shape |
| `specs/SPEC-003-lifecycle` | spec, plan, todo | migrated layout 1 | same table, 16 rows; one order line; 3 bullets; "Not in this plan" | 16 task lines, same shape |
| `specs/SPEC-004-plain-talk` | spec, plan, todo | migrated layout 1 | same table, 4 rows; one order line; 2 bullets and 1 "Manual, later"; "Not in this plan" | 4 task lines, same shape |
| `specs/SPEC-005-question` | spec, plan, todo | migrated layout 1 | same table, 4 rows; one order line; 3 bullets; "Not in this plan" | 4 task lines, same shape |
| `specs/SPEC-006-setup` | spec, plan, todo | migrated layout 1 | same table, 3 rows; one order line; 2 bullets and 1 "Manual, later"; "Not in this plan" | 3 task lines, same shape |
| `specs/SPEC-007-source-cache` | spec only | migrated layout 1 | no `tasks/` folder | none |
| `specs/SPEC-008-upstream-sync` | spec, plan, todo | migrated layout 1 | same table, 10 rows; one order line; 4 bullets; "What is not in this plan" | 10 task lines under 3 plain lines `Phase N: <name>` |
| `specs/SPEC-009-workspace` | spec, plan, todo | migrated layout 1 | table `Phase \| Tasks \| What it delivers \| Depends on`, 7 rows; a branch table; a hand-made `Wave \| Tasks` table; 7 checkpoint bullets; risks; open questions | 58 lines `- [x] TNN: <title>` with Acceptance, Verify, Files and `Depends: … Scope: …`, under 7 headings `## Phase N`; 7 headings `### Checkpoint: phase N` with 15 boxes |
| `tasks/done/context-scope` | plan, todo | layout 1, not migrated: no frontmatter, outside the workspace | same Component table, 4 rows; one order line; 3 bullets; a "Done" line; no "Not in this plan" | 4 task lines, same shape as SPEC-001 |

No folder is in the layout-2 format. For comparison, a layout-2 plan holds the table `# | Task | Type | Status | Blocked by | Result` and a todo holds blocks `## Task NN:` (`scripts/workspace/templates/plan.md:17`, `scripts/workspace/templates/todo.md:8`). The depth of those templates belongs to row 17.

### State a reader can infer, and the status under DEC-051

The column "Files support" is the DEC-051 value that the files give as a fact. It is not a proposal for the format. It reads a spec's status as the state of its build; DEC-051 does not say when a spec is `open` and when `in-progress`, and row 08 decides that.

| Spec | Ticks | `Status:` in spec.md | Last State in the removed index | plan.md head | Other marks | Files support |
|---|---|---|---|---|---|---|
| SPEC-001 evals | 5 of 5 | draft for review, 2026-09-19 | approved, built; the first run is Peter's task 5 | approved 2026-09-19 | plan.md:31 "Done 2026-09-19"; 6 amendments, 2 of them dated 2026-10-29 | done |
| SPEC-002 host-manifests | 6 of 6 | draft for review, 2026-09-19 | approved, built | approved 2026-09-19 | plan.md:28-30 leaves the manual install runs for the first release; the Codex install page records no live run for criterion 3 | done by ticks; one criterion has no recorded run on one host |
| SPEC-003 lifecycle | 16 of 16 | draft for review, 2026-09-19 | approved, built | approved 2026-09-19 | todo.md:68 "plan archived"; SPEC-009 later removed the results of tasks 13, 14 and 15 | done |
| SPEC-004 plain-talk | 4 of 4 | approved 2026-09-19; amended | approved, built | approved 2026-09-19 | plan.md:24 one manual check "later", with no box; the install pages record the runs | done |
| SPEC-005 question | 4 of 4 | superseded on 2026-10-28 by DEC-002 | approved, built | approved 2026-09-19 | DEC-004:19 "Retired 2026-10-28 by DEC-002"; DEC-002 is itself superseded by DEC-006 | not settled: done or superseded |
| SPEC-006 setup | 3 of 3 | approved 2026-09-19; amended since | approved, built | approved 2026-09-19 | 12 amendments, 8 of them dated 2026-10-29; plan.md:23 one manual check "later"; the Codex install page records no run of it | done by ticks; one criterion has no recorded run |
| SPEC-007 source-cache | no todo | approved by Peter on 2026-10-29; "Built on its own branch … with its own plan" | approved 2026-10-29; own branch, `feat/source-cache` | no plan | no Bun port, no branch and no CLI command exist; IDEA-005 is an open idea with the same slug | open; no file says parked |
| SPEC-008 upstream-sync | 10 of 10 | draft for review, 2026-09-19 | approved, built | approved 2026-09-19 | open question 1 closed 2026-11-04 by DEC-006 | done |
| SPEC-009 workspace | 73 of 73 (58 tasks, 15 checkpoint boxes) | approved by Peter on 2026-10-29 | approved 2026-10-29 | approved 2026-10-29 | plan.md:60 still labels wave A "(running)"; 3 checkpoint boxes carry open items forward | done |
| `tasks/done/context-scope` | 4 of 4 | no spec of its own | not in the index | none | the folder name; plan.md:22 "Done 2026-09-19" | done; it is a plan with no spec, so no spec status exists to store |

No spec in this repo is in-progress or parked by its files. So this repo holds no real example of a spec in build.

**The removed spec index.** `spec/README.md` held a table `Module | Spec | State` with one row per spec (F65). Its values over time were "not yet written", "draft; lifecycle cases are placeholders", "approved", "approved, in build", "approved, built", "approved <date>" and "approved <date>; own branch" (F66). So the value had two parts: an approval state and a build state. Nine commits touched the file before its removal, eight of them on 2026-09-19 during the builds. Commit `16e2e36d` of 2026-10-29 removed the file; its message names "the specs/ folder and brain status in its place". At removal two cells were stale: `question` said "approved, built" one day after the spec said "superseded", and `evals` still named a first run that was recorded on 2026-09-19.

**What a tick does not show.**
- A tick shows that a task was built. It does not show that the result is still in the tree. SPEC-003 tasks 13, 14 and 15 built `triage`, `wayfinder` and the tracker question; SPEC-009 tasks T23, T24 and T25 removed all three (F84).
- A ticked box can have a Verify line that could not run as written. SPEC-002 todo.md:21 says the check runs "once the branch shares history with main" (F75).
- All boxes of SPEC-002 and SPEC-006 are ticked, and one success criterion of each has no recorded run. SPEC-006 criterion 3 and the Codex part of SPEC-002 criterion 3 name the Codex install page, which says "No live installation or context-loading test is recorded" (F77).
- A ticked checkpoint box does not mean that no work is left. Three of the seven SPEC-009 checkpoints carry open items forward in prose (F80).

### Where the carriers of state disagree

- SPEC-001, 002, 003 and 008: `spec.md` says "draft for review". The plan beside it says "approved", the removed index said "approved, built", and every box is ticked.
- SPEC-005: `spec.md` says "superseded". The plan says "approved", the removed index said "approved, built", and every box is ticked.
- SPEC-007: no carrier disagrees. "Built on its own branch" states how the spec is to be built. The sentence is in the commit that created the spec, and DEC-004 and the SPEC-009 records state the same plan (F69).
- SPEC-009: the plan's progress note says T28, T38 and T52 run, its wave table says wave A runs, and its critical-path line names T38. The todo ticks all of them. Two of the plan's three open questions have no answer mark, and their tasks are ticked.
- The spec text changed after the plan was done in six specs. SPEC-001 and SPEC-006 record it in dated amendments. SPEC-003, SPEC-004 and SPEC-005 changed on 2026-10-19, 2026-10-28 and 2026-10-29 with no amendment heading for those changes. SPEC-008 changed on 2026-11-04 with none. So the count of amendment headings (C12) is not a count of changes (F22).
- The text of the superseded spec changed too: two commits of 2026-10-29 edited SPEC-005 after it was superseded on 2026-10-28 (F87).
- The prose uses state words with no fixed set. The files use eight: "draft for review", "approved", "amended", "built", "Done", "superseded", "retired" and "proposed". The removed index added "not yet written", "draft", "in build" and "own branch" (F64, F66).
- `AGENTS.md:30` says each module has a spec folder with `spec.md`, `tasks/plan.md` and `tasks/todo.md`. SPEC-007 has no `tasks/` folder.

### Waits in these files

No file under `specs/` or `tasks/` holds a `Blocked by` column, a `blocked-by` field or a `**Dependencies:**` field. The words "blocked by" occur six times, only where a spec or a task's acceptance line describes the layout-2 design (C17).

**The module order in DEC-004.** DEC-004 holds the order of the modules in two forms, and line 8-9 says each spec is "written and built in the order below".

- The "Depends on" column (DEC-004:13-21) holds 10 edges.
- The build-order line (DEC-004:23) says: "Build order: upstream-sync and host-manifests → plain-talk → setup → lifecycle and question, either order → evals. Then workspace; source-cache any time, on its own branch."
- The line holds order that the column lacks: plain-talk after upstream-sync, question after setup, evals after question, and workspace after evals and question.
- The line holds one pair with no order ("lifecycle and question, either order") and one explicit "no wait" ("source-cache any time").
- No edge of the column contradicts the line. The line holds more order than the column.

**Waits between specs (they cross a file)**

| Wait | Where it is written | Blocker's state |
|---|---|---|
| plain-talk waits on host-manifests | DEC-004:15 and :23; SPEC-004 spec.md:7; plan.md:7 | SPEC-002, all ticked |
| setup waits on plain-talk | DEC-004:16 and :23; SPEC-006 spec.md:7; plan.md:7 | SPEC-004, all ticked |
| lifecycle waits on upstream-sync and setup | DEC-004:17 and :23; SPEC-003 spec.md:7; plan.md:7 | SPEC-008 and SPEC-006, all ticked |
| evals waits on plain-talk and lifecycle | DEC-004:18 and :23; SPEC-001 spec.md:7; plan.md:7 | SPEC-004 and SPEC-003, all ticked |
| evals waits on question | DEC-004:23 (build-order line) and SPEC-001 plan.md:7; not in the "Depends on" column and not in SPEC-001 spec.md:7 | SPEC-005, all ticked, and superseded |
| workspace waits on upstream-sync, plain-talk, setup and lifecycle | DEC-004:20; SPEC-009 spec.md:7-8 | all ticked |
| workspace comes after evals and question | DEC-004:23 only ("Then workspace"); no spec or plan repeats it | all ticked |
| plain-talk comes after upstream-sync; question comes after setup | DEC-004:23 only; no spec or plan repeats it | all ticked |
| lifecycle and question in either order | DEC-004:23; SPEC-003 spec.md:144-145 ("can be built before or after this module") | no wait |
| source-cache any time, on its own branch | DEC-004:23; SPEC-007 spec.md:8-9; SPEC-009 spec.md:64 and :354; SPEC-009 plan.md:8-9 | no wait |

The files name a blocker by its module ID, such as `plain-talk`, never by `SPEC-004`. The nine module IDs of DEC-004 equal the nine spec folder slugs. A second name form is the old file name, such as `spec/SPEC-setup.md` and `SPEC-workspace.md`; it occurs 34 times in 16 of these files (C21). SPEC-005 and SPEC-007 say "Depends on nothing". SPEC-002 and SPEC-008 have no "Depends on" words in `spec.md`.

The SPEC-002 plan head says "Depends on nothing; the vendored tree from upstream-sync is present" (plan.md:7). The first clause equals the dash in DEC-004:14. The second clause states a met precondition on another module's result. Neither form of DEC-004 puts upstream-sync before host-manifests.

The words "Depends on" carry two senses in the spec heads. Seven heads give no reason. SPEC-009 gives one: "it changes files those modules own" (spec.md:7-8). So one sense is "build this after", and the other is "this changes files of". The plan heads add the blocker's state: "built", "all built", "is present".

Other waits and references that point at another spec, in prose:
- SPEC-001 spec.md:21: objective 3 is a "Placeholder until `lifecycle` is specified".
- SPEC-003 spec.md:144-145: the question module "can be built before or after this module".
- SPEC-004 spec.md:186: criterion 4 is "Verified in the `setup` module". DEC-004:16 says setup waits on plain-talk. So the two specs point at each other: one for a criterion, one for the module.
- SPEC-008 spec.md:210: criterion 6 "is verified in `host-manifests`, not here". DEC-004 gives upstream-sync no wait.
- SPEC-008 spec.md:30: the vendored hooks "do nothing until a later module wires them".
- SPEC-007 spec.md:50-51: "Whichever branch lands first creates `scripts/brain.ts`"; the other adds to it.
- SPEC-009 plan.md:7-9: the source cache "is not in this plan".
- Five "Not in this plan" sections hand work to another module by its ID: SPEC-003 plan.md:40 (`question`, and the evals), SPEC-004 plan.md:28-29 (`setup`, `evals`), SPEC-005 plan.md:28 (`evals`), SPEC-006 plan.md:27 (`evals`, `lifecycle`), SPEC-008 plan.md:35-36 (`host-manifests`, `lifecycle`).
- A task of one spec names another spec's file: SPEC-003 plan.md:27 and todo.md:63-64 amend `spec/SPEC-setup.md`.
- An amendment names the task of another spec that caused it: six amendments of SPEC-006 say "(`SPEC-workspace.md`, task T33)" and the like (spec.md:53, 61, 69, 78, 92, 100).
- A checkpoint hands open items to an idea: SPEC-009 todo.md:342-344 names IDEA-001.

These files link records with three words: "superseded", "amends" (or "Amended … by") and "refines" (SPEC-006 spec.md:111; SPEC-009 spec.md:81 and :87; context-scope plan.md:3). DEC-051 has a value for "superseded" only (F79).

**Waits between tasks (inside one plan)**

| Form | Where | Count and values |
|---|---|---|
| `Depends on` cell in the Component table | 7 migrated plans and `tasks/done/context-scope/plan.md` | 52 cells: `—` 11 times; one number 26 times; a list such as `1, 2` 12 times; a range, `5 to 11` and `1 to 4`; the word `all` once |
| One order line below the table | the same 8 plans | such as "Sequential 1 to 4." and "Parallel: 2 and 3 after 1; 4 beside 3. Sequential from 5 on." |
| `- Depends:` line in a task | SPEC-009 todo only | 58 lines: `none` 13 times; task IDs 44 times; "the 0.10.0 release" once. They give 85 task edges |
| `Depends on` cell of a phase | SPEC-009 plan.md:29-35 | phase numbers, and "6 and a second ask (T39); the 0.10.0 release (T40)" |
| Prose order rule | SPEC-009 plan.md:37-45 | "Prefactors, each before the task that needs it"; each eval case is "written first" |
| Checkpoint as a wait | SPEC-009 plan.md:56 and todo.md:105 | "a task waits for every checkpoint whose phase it depends on", as a dated rule in prose |
| File conflict | SPEC-009 plan.md:65-71; todo.md:246 | "the later one waits"; "T48, T49 (both edit the hook script)" |

The order line and the table of one plan disagree, in both directions, in six of the eight Component plans. No rule in the files says which one wins. They agree in SPEC-001 and SPEC-006.

| Plan | Table | Order line | Difference |
|---|---|---|---|
| SPEC-002 plan.md:15, 17, 20 | rows 3 and 5 depend on 1 | "Sequential from 1 to 6, except 4 and 5 … after 2" | the line adds 3 on 2 and 5 on 2 |
| SPEC-003 plan.md:15, 25, 30 | row 3 depends on 1; row 13 depends on 2 | "Sequential 1 to 4 … then 12 to 16" | the line adds 3 on 2 and 13 on 12 |
| SPEC-003 plan.md:18, 21, 30 | row 6 depends on 5; row 9 depends on 8 | "then 5 to 11 in any order" | the line drops two waits |
| SPEC-004 plan.md:15-16, 18 | rows 3 and 4 depend on 2 | "Sequential 1 to 4" | the line adds 4 on 3 |
| SPEC-005 plan.md:14-15, 18 | row 2 `—`; row 3 depends on 2 | "Sequential 1, then 2 and 3 in parallel" | the line adds 2 on 1 and drops 3 on 2 |
| SPEC-008 plan.md:18, 24 | row 6 depends on 4 | "Sequential from 5 on" | the line adds 6 on 5 |
| context-scope plan.md:12, 14 | row 4 depends on 3 | "1 → 2 and 3 in parallel → 4" | the line adds 4 on 2 |

A wait can also sit in a Risk cell or in a Verify line, where the table gives no edge:
- SPEC-005 plan.md:13: the check fails "until Task 2 lands, so it joins the gates only at Task 4".
- SPEC-001 todo.md:13: Task 2's Verify is "the case test from Task 3's suite check".
- SPEC-003 todo.md:13: Task 2's check "passes after Task 3". The table has no edge between rows 2 and 3.
- SPEC-001 plan.md:16: component 4 "needs an API key secret in the repo, which is Peter's". A wait on the user.
- SPEC-001 plan.md:17: component 5 is "First run, by Peter, after `claude update` to 2.1.269". The user does the task, and it waits on a tool version.
- SPEC-002 plan.md:17: an install is "untested until the branch is pushed".
- SPEC-002 todo.md:21: Verify "once the branch shares history with main".
- SPEC-002 todo.md:29: Verify "CI green on the branch after push". SPEC-008 todo.md:53 says "CI green on the `wrap` branch".

A `Depends:` line can carry a reason or a dated change in brackets, such as SPEC-009 todo.md:283.

**Waits on something that is not a task, a spec or an idea**

- The user's yes: SPEC-009 spec.md:65 ("Every push and pull request waits for Peter's yes"); plan.md:18-21; todo.md:57, 344 and 361; todo.md:43 ("Ask first"); todo.md:349 ("run only after Peter's yes").
- A release: T40 waits on "the 0.10.0 release" (todo.md:358; plan.md:21 and 35).
- A merged pull request: plan.md:19 ("from `main` after PR 1 merges").
- A push: SPEC-002 plan.md:17 and todo.md:29.
- A tool version: SPEC-001 plan.md:17 and spec.md:61-62.
- The network: plan.md:93 ("Run them when online").
- A later run or a later ask: SPEC-002 plan.md:28-30; SPEC-004 plan.md:24; SPEC-006 plan.md:23; SPEC-001 spec.md:62; SPEC-009 spec.md:360.

**Open questions as pending items.** All nine specs and the SPEC-009 plan have an "Open Questions" section; SPEC-007's says "None". A closed question keeps its place and gets a prefix: "Resolved <date>" (SPEC-004, SPEC-006), "Closed <date>" (SPEC-005), "Closed <date> by DEC-006" (SPEC-008) or "Answered:" (SPEC-009 plan). An open one has no mark. Eleven items in SPEC-001 to SPEC-008 have no mark, and three of them ask the user ("Say if…", "Peter's call"). SPEC-009 spec.md:470 holds one more bullet with no mark; it says open question 18 "is not part of this build". Two more in the SPEC-009 plan have no mark, and their tasks are ticked. So 14 items have no mark.

The lack of a mark does not show that an item is pending. Later work answered at least 3 of the 11: the first run of the evals answered SPEC-001 questions 1 and 2 (`docs/evals/first-run.md:3`), and an install "from the acmelabs marketplace" answered SPEC-002 question 1 (`docs/install/claude-code.md:90`) (F85).

### Phases, checkpoints and waves in real plans

| Plan | Phases | Checkpoints | Waves |
|---|---|---|---|
| SPEC-001 to 006 | none | a list "Verification checkpoints": bullets that start with "After", with no box, no status and no review | none; one order line |
| SPEC-008 | 3 plain lines `Phase N: <name>` in the todo (lines 7, 26, 41); the plan has none | the same bullet list in the plan, 4 bullets; 3 of them name the last task of a phase | none; one order line |
| SPEC-009 | 7 headings `## Phase N` in the todo; a 7-row phase table and a branch table in the plan | 7 headings `### Checkpoint: phase N` in the todo with 15 boxes; each checkpoint has a review with the user in one of its boxes; 7 bullets in the plan | one hand-made section `## Parallel waves` with a `Wave \| Tasks` table, a dated progress note and a critical-path line |
| `tasks/done/context-scope` | none | the bullet list, 3 bullets | none; one order line |

**SPEC-008.** Phase 1 holds tasks 1 to 4, phase 2 tasks 5 to 7 and phase 3 tasks 8 to 10 (todo.md:7-54). The plan's bullets are "After 4", "After 7", "After 9" and "After 10" (plan.md:28-31). So each phase ends where a bullet names its last task, and one more bullet sits inside phase 3. The link is by task number only; no bullet names a phase.

**What a SPEC-009 phase carries.** A number. A name, which differs between the plan and the todo for phases 4 and 6 (plan.md:32 "Build-phase paths and parallel work", todo.md:159 "build-phase paths and the router"; plan.md:34 "Install and the router", todo.md:252 "install"). A branch and a pull request, which do not map one to one: phases 2 to 6 share one branch and PR 2, and phase 7 has two branches and two pull requests (plan.md:19-21). A "Depends on" list of phases and of things that are not phases (plan.md:29-35). A pass condition (plan.md:77-86). A checkpoint with boxes. Only the number is the same in every place.

**What a SPEC-009 checkpoint box holds.** A check result with a count or a date ("10 of 10, 2026-10-29", "710 pass"). A review with a dated approval ("approved 2026-10-29") and, once, a verdict: "request changes" at todo.md:342, then "approved 2026-10-30" at todo.md:344. Links to results: "PR #13" and the merge commit "80aaef91" at todo.md:57-58, and fix commits at todo.md:157 and :216. Open items handed forward: "a follow-up for interview-me and the grader" (todo.md:157), "The real run moves to Linux CI at phase 6" (todo.md:216), "Open for phase 6: the hook in a live Claude Code session …" (todo.md:250), and "open items are in IDEA-001" (todo.md:344). DEC-051 says "in review" is never stored; these boxes store the outcome of a review, in prose.

**What a SPEC-009 phase is in the files.** The tasks under one heading. No checkpoint lists the tasks that it waits on; five boxes name single tasks in a note (todo.md:105, 215, 249, 342, 343). No `Depends:` line names a checkpoint. The plan's phase table names 46 tasks; the todo holds 58. T47 to T58 were added under the headings of phases 4, 5 and 6 and are not in the table. T28 moved from phase 4 to phase 6 at plan review. Of the 85 task edges, 54 stay inside one phase, 30 point to an earlier phase, and one points to a later phase (T50, under phase 5, on T49, under phase 6).

**The phase's "Depends on" cell against the task edges.** The cell is written by hand and does not equal the sum of the task edges (C18).

| Phase | Plan's "Depends on" cell | Phases that its tasks name |
|---|---|---|
| 2 | 1 | 1; T15 says `Depends: none` |
| 3 | 2 | 1 and 2 (T18 names T08) |
| 4 | 3 | 2 and 3 |
| 5 | 2, 4 | 2 and 6; no task names a phase 4 task, and only T50 reaches one, through T49; T30 says `Depends: none` |
| 6 | 3, 5 | 1 to 5; T53 to T57 say `Depends: none` |
| 7 | 6 and a second ask; the 0.10.0 release | 6; T40 names only the release |

At task level phases 5 and 6 wait on each other: T33 names T31 and T32, and T50 names T49.

**The wave table.** The table at plan.md:58-61 names 7 of the 58 tasks (T53 to T57, T39 and T40) and omits T58. It is a view of the work that was left, rewritten in place: four commits have the subject "refresh the waves", and an earlier version held the waves A, B, C and "Then" (`git show 4bf82672:tasks/plan.md`). No file holds the full list of waves of the build (F81).

The SPEC-009 plan says of itself that `brain plan` "cannot read this plan, which is in the old layout, until T39 migrates it" (plan.md:52-53). T39 is ticked, the migration added only frontmatter, and `brain plan SPEC-009` still exits 1. The phase 2 checkpoint records that waves "ran past this checkpoint", because "the hand-made waves treated checkpoints as reviews, not as edges" (todo.md:105).

### What the parser reads from these files, and what it misses

| File | What Brain's code reads | What it misses |
|---|---|---|
| a spec folder's name | the ID and the slug, compared with the last part of the git branch name (`effort.ts:89-98`) | nothing |
| migrated `spec.md` | `spec:` against the folder name; `migrated: 0.8`; the H1 for a title in `brain status` (only for a reported effort); `sources:`, which is absent in all nine; every body line, by the retired-name check of `bun run check`, for five name patterns | the `Status:` line, the "Depends on" line, amendments, open questions, prose sources |
| migrated `tasks/plan.md` | `spec:` and `migrated: 0.8`; then a search for the layout-2 header, which fails, so 0 rows; the retired-name check reads the frontmatter and skips the body because of `migrated` | the Component table and its `Depends on` cells, the order line, the phase table, the wave table, checkpoint bullets, "approved" and "Done" lines |
| migrated `tasks/todo.md` | `spec:` and `migrated: 0.8`; `brain plan` would read "Files likely touched" under `## Task NN:`, and no such heading exists here; the retired-name check skips the body | every tick, the `Depends:` lines, phase headings, checkpoint headings and their boxes, `Scope:` |
| `tasks/done/context-scope/*` | nothing: the folder is outside the four workspace paths, the layout-1 detector runs only when `workspace.md` is absent, and the retired-name check keeps every path under `tasks/` "as written" | all of it |

Effects in this repo:
- `brain check` reports no finding in any file of this topic. One run of 2026-11-21 printed "3 migrated decisions have no kind: DEC-001, DEC-002, DEC-004" and "no finding in 111 workspace files", exit 0. The output moves with the other records of this session: the first run of this record saw 108 files, and a later run printed two findings in RES-091, which another agent owns. On a migrated file the check tests only the fields the file has; it skips the H1 and the rows, and it lets a migrated spec lack its plan and todo.
- `brain plan SPEC-NNN` exits 1 for the eight specs with a plan ("no table with the columns …") and exits 2 for SPEC-007 ("no tasks/plan.md").
- The effort code counts a spec as finished when its plan has no row still to do. A plan with no rows, and a spec with no plan, therefore count as finished. All nine specs do, SPEC-007 included.
- `brain status` on this branch reports IDEA-015 only, because the branch `feat/views-mod` names that idea's slug. Its JSON has no list of specs, and every one of the 14 ideas has an empty `specs` list, because no spec has `sources:`.
- The branch rule comes before the "not finished" rule. On a branch whose last part equals a spec's ID, name or slug, that spec is the active effort, and the report says `Stage: finished`. This repo has a local branch `lifecycle` and `remotes/origin/lifecycle`; that name equals the slug of SPEC-003. On `feat/source-cache`, the branch that SPEC-007 names, two efforts match (IDEA-005 and SPEC-007), so the branch selects neither. I read the code and ran the match (C19); I did not change the branch.
- Two code paths treat the `migrated` marker differently. `effort.ts:66` and `plan.ts:129` read the rows of a plan and do not look at the marker. `status.ts:98-101` and `check.ts:462-466` give a migrated file no rows. So a migrated plan that gains a layout-2 table and keeps the marker gets rows in the effort code and in `brain plan`, and no rows in the `brain status` lines or in `brain check`.
- The retired-name check has the reverse dependence on the marker. With the skip off, 22 pattern matches on 21 lines in five migrated plan and todo files name a retired name (C19). Each `spec.md` gives 0. So a migration that removes `migrated` from a plan or todo and keeps its body makes `bun run check` fail on those lines. This is a fact for IDEA-014.
- The schema allows only `spec` and `sources` on a spec file, and only `spec` on a plan or todo. A `status:` or `blocked-by:` key written today is a check finding: "not a field of a spec file". Rows 17 and 20 own the depth of that.
- The migrate code has no step for `tasks/done/`. Commit `ac7be413` moved seven done plans into the spec folders, and no script at that commit names `tasks/done` outside a test (F86).

### Facts for the decide rows

These are facts from the files of this topic. They are not a recommendation.

- Row 01 (when a named item stops blocking). The plans state a met wait with the word "built": "Depends on plain-talk, built" (SPEC-006 plan.md:7), "all built" (SPEC-001 plan.md:7), "is present" (SPEC-002 plan.md:7). One real blocker is both done and superseded: SPEC-005, which SPEC-001's plan and DEC-004:23 name. One real checkpoint did not block in practice (SPEC-009 todo.md:105). A ticked blocker can have a criterion with no recorded run (SPEC-002, SPEC-006) or a result that is gone (SPEC-003 tasks 13 to 15).
- Row 02 (who writes the field, and when). Four writers appear. The capability map step wrote the module order (DEC-004), in two forms, and each spec and plan repeats it by hand. No plan head contradicts DEC-004: one repeats the build-order line where the column has no edge, and one adds a state note. The planning step wrote the task waits, and plan review changed them (SPEC-009 todo.md:283). The main session wrote the ticks (SPEC-009 plan.md:67-69). The migration wrote no status and no wait. The prose `Status:` line was written with the spec and was not updated in 4 of 9 specs; the spec index was updated during the September builds and then removed.
- Row 03 (what `brain status` does with a waiting effort). No real spec waits on another today: every blocker is ticked. On this branch `brain status` shows no spec. It shows a spec only on a branch that names it, as `finished`. SPEC-007 is the one unbuilt spec; it depends on nothing, the code calls it finished, and the open idea IDEA-005 has the same slug.
- Row 04 (prose waits into the field). The table "Waits between specs" lists every such wait. DEC-004's column holds 10 edges; 5 spec heads repeat all 10 and 4 plan heads repeat 6 of them. DEC-004's build-order line holds 5 more orders; one plan head repeats one of them (evals on question). One plan head states a precondition that neither form has. All are met. They name module IDs, which equal the spec folder slugs. The words "Depends on" have two senses. One prose wait at criterion level points against DEC-004's direction (SPEC-004 on `setup`), so spec-level fields made from every prose wait would hold a cycle between SPEC-004 and SPEC-006. One more adds a wait where DEC-004 has none (SPEC-008 on `host-manifests`).
- Row 08 (which status a spec stores). See the table above: 7 specs give `done` by ticks, 2 of them with one criterion not recorded; SPEC-007 gives `open`; SPEC-005 is not settled; no spec gives `in-progress` or `parked`. A done spec's text still changes: SPEC-006 has 12 amendments, and three specs changed with no amendment heading. A superseded spec's text changed too. The removed index stored approval and build state as two parts of one value.
- Row 09 (does a phase become a record). See "Phases, checkpoints and waves". In the one real plan with full phases, a phase carries a number, a name that differs by file, a branch and pull request that are shared or split, its own "Depends on" that differs from the task edges, a pass condition and a review. Its task list changed during the build. Its checkpoint boxes hold results, a review verdict and open items. The wave table held only the waves that were left.
- Row 10 (one form of "blocked by"). The files hold ten forms of wait: the module "Depends on" in prose, the build-order line of DEC-004, the `Depends on` cell, the order line, the `- Depends:` line, the phase's `Depends on` cell, the prose order rule, the checkpoint rule, the file-conflict wait, and a wait on something that is not an item. Values include one ID, a list, a range, the words `all`, `none`, "either order", "Then" and "any time", and free text. Two carriers of one plan disagree in six of eight plans. Real files already cite another spec's task: an old file name plus a task ID, such as "`SPEC-workspace.md`, task T36".

### Site coverage

The site index for this topic has 195 sites. Each group below names its findings. Line numbers are those of the files at commit `dfcab49b`.

| Group | Sites (path and lines) | Findings |
|---|---|---|
| Frontmatter of the 25 migrated files | lines 1-4 of every file under `specs/` | F03, F04 |
| Head of each `spec.md`: `Status:`, "Depends on", prose sources | SPEC-001:7-9; 002:7; 003:7-8; 004:7-8; 005:7-8; 006:7-8; 007:7-14; 008:7; 009:7-13 | F14, F19, F24, F35, F65, F68, F69, F88 |
| Head of each plan | plan.md:7 of SPEC-001 to 006 and 008; SPEC-009 plan.md:7-12 | F15, F24, F26, F35, F68 |
| Component tables and order lines | SPEC-001 plan.md:11-19; 002:11-20; 003:11-30; 004:11-18; 005:11-18; 006:11-17; 008:11-24; context-scope plan.md:5-14 | F09, F12, F28, F29, F45, F74, F75 |
| "Verification checkpoints" lists | SPEC-001 plan.md:21-25; 002:22-26; 003:32-36; 004:20-24; 005:20-24; 006:19-23; 008:26-31; context-scope plan.md:16-20 | F42, F77, F83 |
| "Done" lines, the done folder, "archive", "Not in this plan" | SPEC-001 plan.md:31; context-scope plan.md:1-3, 9, 22 and todo.md:1-18; SPEC-002 plan.md:28-30; SPEC-003 plan.md:28, 40 and todo.md:67-70; SPEC-005 plan.md:16 | F06, F07, F16, F17, F53, F76, F86 |
| State words for a module in prose | SPEC-001 spec.md:7-9; SPEC-003 spec.md:53, 140-145 and plan.md:40; SPEC-005 spec.md:8; the plan heads | F64, F66 |
| Task lines and ticks | todo.md of SPEC-001:7-26; 002:7-30; 003:7-70; 004:7-22; 005:7-22; 006:7-18; 008:7-54; SPEC-009 todo.md:14-358 | F10, F11, F13, F75, F84 |
| SPEC-009 plan: branches, phase table, prose order, waves, checkpoints, risks, open questions | plan.md:14-23, 25-35, 37-45, 50-56, 58-63, 65-71, 73-86, 88-98, 101-106 | F09, F21, F23, F31, F32, F33, F38, F41, F43, F44, F81, F82 |
| SPEC-009 todo: header rule, phase headings, `Depends:` lines, checkpoints | todo.md:7-10; 12, 60, 107, 159, 218, 252, 305-307, 346; 18-358; 55-58, 103-105, 155-157, 214-216, 248-250, 341-344, 346-361 | F30, F31, F36, F37, F39, F40, F41, F80, F82 |
| SPEC-008 phase lines | todo.md:7, 26, 41 | F37, F83 |
| Open questions and other pending items in spec bodies | SPEC-001 spec.md:20-21, 61-62, 130-138; 002:128-135; 003:140-152; 004:190-194; 005:90-95; 006:245-250; 007:50-51, 140-142; 008:24-25, 210-215; 009:59-65, 352-360, 468-470 | F23, F31, F34, F78, F85 |
| Spec bodies that state Brain's design of status and waits, not the state of their own spec | SPEC-001 spec.md:40-47, 51, 164-219; SPEC-003 spec.md:12, 29-39, 49-58, 62-77, 137 and todo.md:15-34, 43-46; SPEC-005 spec.md:23-36, 74-88 and todo.md:11-18; SPEC-006 spec.md:53-120, 125-141; SPEC-009 spec.md:17-25, 42-57, 72-118, 136-156, 194-219, 243-244, 259-276, 289-299, 307-350, 375-466; SPEC-009 todo.md acceptance lines at 44-48, 67-101, 109-138, 161-212, 225-246, 254-303, 314-339 | F56 to F63, F78, F79 |

### Sites judged not relevant

- `specs/SPEC-001-evals/spec.md:44` (eval case adr-is-dec): it tests the fields of a decision record. Row 26 owns decision records, and row 24 the evals.
- `specs/SPEC-001-evals/spec.md:50` (eval case no-overload): "lifecycle stage" names the stages of the lifecycle there. It is not a status or a wait of a spec.
- `specs/SPEC-003-lifecycle/tasks/plan.md:24` and `specs/SPEC-003-lifecycle/tasks/todo.md:51-54`: "phase-boundaries" is the old name of the stage-boundaries reference. The word has the lifecycle sense there, not the sense of a plan's phase. Row 25 owns the change of that word. The retired-name check would flag these lines if the file lost its `migrated` marker (F72).
- `specs/SPEC-004-plain-talk/spec.md:170-171`: a character budget for the session-start text. "status" there is the status report, which row 19 owns.
- `specs/SPEC-006-setup/spec.md:164-166`: "resolved" there is a glossary term or decision being settled, which makes domain-modeling create a folder. It is not a row status.
- `specs/SPEC-007-source-cache/spec.md:43, 110, 115`: the validator of a research finding and `brain research recheck`. Row 26 owns research records.
- `specs/SPEC-009-workspace/spec.md:119-124`: the researcher agent and the research brief. Row 21 owns them.
- `specs/SPEC-009-workspace/spec.md:88-89, 300-306`: number claims, and a research file whose existence shows a started run. Rows 17 and 26 own them.

### Checks

Three independent agents checked the first version of this record. I opened the source for every issue. All three check results were present.

- Sources check: 17 issues reported; 17 confirmed and fixed; none rejected.
- Coverage check: 14 issues reported; 14 confirmed and fixed. I rejected five parts of them:
  - Issue 1 says the index was the maintained carrier. It was updated during the September builds, and two cells were stale at removal: `question` and `evals`. Source: `git show 16e2e36d^:spec/README.md`, `specs/SPEC-005-question/spec.md:8`, and `git merge-base --is-ancestor 7023e445 19295e6b` (exit 0).
  - Issue 2 says the files settle SPEC-007 as `open`. I state `open` with two limits: only the user can say `parked`, and DEC-051 does not say when a spec is `open`. Source: `docs/decisions/DEC-051-shared-status-values.md:15`.
  - Issue 7 quotes SPEC-008 todo.md:53 as "CI green on the branch after push". The line says "CI green on the `wrap` branch". The issue also says the SPEC-003 table has "the reverse edge"; the table has no edge between rows 2 and 3. Source: `specs/SPEC-008-upstream-sync/tasks/todo.md:53`, `specs/SPEC-003-lifecycle/tasks/plan.md:14-15`.
  - Issue 8 calls "PR #13" and "80aaef91" the only result links in these files. Other boxes name commits (`specs/SPEC-009-workspace/tasks/todo.md:157`, `:216`), and the plan names PR #18 (`specs/SPEC-009-workspace/tasks/plan.md:61`).
  - Issue 12 says seven amendments of SPEC-006 name a task of another spec. Six do; the seventh names the spec without a task. Source: `specs/SPEC-006-setup/spec.md:47-51, 53, 61, 69, 78, 92, 100`.
- Contrary check: 14 issues reported; 14 confirmed and fixed. I rejected three parts of them:
  - Issue 4 keeps SPEC-007 "not settled" between `open` and `parked`. The files give `open`; `parked` is a statement that only the user can make, and no file makes it. Source: `specs/SPEC-007-source-cache/spec.md:8-9`, `git show fa268bdc:spec/SPEC-source-cache.md`.
  - Issue 8 says no phase 5 task depends on a phase 4 task "directly or through other tasks". No task names one directly; T50 reaches T43 through T49. Source: `specs/SPEC-009-workspace/tasks/todo.md:246, 268` and command C18.
  - Issue 10 calls commit `023d94f3` the one case where a prose `Status:` line was kept current. The `Status:` lines of SPEC-004 and SPEC-006 also record a later change ("amended"). Source: `specs/SPEC-004-plain-talk/spec.md:8`, `specs/SPEC-006-setup/spec.md:8`.

### Commands

Run each from the repo root, `/Users/peterkloss/Dev/ACMElabs/brain-views-mod`, at commit `dfcab49b` with the uncommitted records of this session. `brain` means `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts`. `diff -rq scripts/workspace <that plugin folder>/scripts/workspace` prints nothing, so the repo's parser and the installed one are the same.

- C1: `ls specs/*/spec.md specs/*/tasks/*.md | wc -l` prints 25. `grep -L '^migrated: 0.8$' specs/*/spec.md specs/*/tasks/*.md` prints nothing.
- C2: `grep -nE '^(status|sources|blocked-by|blocked_by|result):' specs/*/spec.md specs/*/tasks/*.md tasks/done/context-scope/*.md` prints nothing.
- C3: `grep -rnE '^\| *# *\| *Task *\| *Type *\| *Status' specs tasks` prints nothing.
- C4: `grep -nE '^\| *(#|Phase|Wave|Risk) ' specs/*/tasks/plan.md tasks/done/context-scope/plan.md` lists every table header.
- C5: for each todo, `grep -c '^- \[x\]' <file>` gives 5, 6, 16, 4, 4, 3, 10 and 73 under `specs/`, and 4 for context-scope. `grep -rn '\[ \]' specs tasks` prints nothing.
- C6: for each plan, `grep -cE '^\| [0-9]+ \|' <file>` gives 5, 6, 16, 4, 4, 3, 10, then 0 for SPEC-009 and 4 for context-scope. `grep -cE '^\| [0-9]\. ' specs/SPEC-009-workspace/tasks/plan.md` gives 7.
- C7: `grep -cE '^- \[[x ]\] T[0-9]{2}:' specs/SPEC-009-workspace/tasks/todo.md` gives 58. `grep -n '^### ' specs/SPEC-009-workspace/tasks/todo.md` lists 7 checkpoint headings and "Review fixes".
- C8: on `specs/SPEC-009-workspace/tasks/todo.md`, `grep -c '^  - Depends:'` gives 58; `grep -c '^  - Depends: none'` gives 13; `grep -cE '^  - Depends: T[0-9]{2}'` gives 44; `grep -c 'Depends:.*[Cc]heckpoint'` gives 0. `grep -c 'Depends' <file>` gives 0 for each of the other eight todo files.
- C9: `grep -hE '^\| [0-9]+ \|' specs/*/tasks/plan.md tasks/done/context-scope/plan.md | awk -F'|' '{gsub(/^ +| +$/,"",$4); print $4}' | sort | uniq -c` counts the `Depends on` cells.
- C10: `grep -n 'Status: ' specs/*/spec.md`; `grep -n 'approved \|Approved by\|^Done ' specs/*/tasks/plan.md tasks/done/context-scope/plan.md`; `grep -n 'Depends on' specs/*/spec.md`.
- C11: for each plan, `grep -cE '^- After ' <file>`, `grep -cE '^- After [0-9]' <file>`, `grep -cE '^- Manual, later' <file>` and `grep -cE '^- Phase [0-9]:' <file>`.
- C12: `grep -cE '^\*\*Amended|^## Amendment' specs/*/spec.md` gives 6 for SPEC-001, 1 for SPEC-003, 1 for SPEC-004, 12 for SPEC-006 and 0 for the rest.
- C13: `brain check`; `brain status`; `brain status --json`; `brain plan SPEC-001` to `brain plan SPEC-009`, one call each.
- C14: `git show --stat f6f785d3`; `git show --stat ac7be413`; `git show --stat 0f91f6be`; `git show --stat 16e2e36d`.
- C15: `git branch -a` lists no branch with "cache" in its name. `git log --all --oneline -- scripts/sdd-cache` prints nothing. `ls scripts/sdd-cache` fails, and `ls hooks` lists `sdd-cache-pre.sh`, `sdd-cache-post.sh` and `SDD-CACHE.md`. `brain sdd-cache lookup https://example.com` prints "unknown command: sdd-cache".
- C16: `grep -rn 'todo\.md\|\[x\]\|\[ \]' scripts hooks --include='*.ts' --include='*.sh' | grep -v __tests__` prints 11 lines; each is a path name or the reader of "Files likely touched", and none reads a tick. The same search with `-E 'Depends|Dependencies|"Status:|Status: '` prints only package-dependency names and hook comments. `grep -c '^## Task\|^## Checkpoint' specs/*/tasks/todo.md tasks/done/context-scope/todo.md` gives 0 for every todo.
- C17: `grep -n -i 'blocked by\|blocked-by' specs/*/tasks/*.md tasks/done/context-scope/*.md` gives 2 lines, both in the SPEC-009 todo (68 and 325). `grep -n -i 'blocked by\|blocked-by' specs/*/spec.md` gives 4 lines (SPEC-001:42; SPEC-009:307, 383, 386). Each of the 6 describes the layout-2 design.
- C18: the Python script below prints the phase and edge counts of the SPEC-009 todo. Save it outside the repo and run `python3 <file>` from the repo root.
- C19: the Bun script below prints the efforts that a branch name selects and the retired-name matches. Save it outside the repo and run `bun <file>`.
- C20: `git show 16e2e36d^:spec/README.md`; `git show a17d3359:spec/README.md`; `git show 98ad5d1b:spec/README.md`; `git show e35ac9bc:spec/README.md`; `git show 7023e445:spec/README.md`; `git log --format='%h %ad %s' --date=short --follow -- spec/README.md`.
- C21: `grep -o 'SPEC-[a-z][a-z-]*\.md' specs/*/spec.md specs/*/tasks/*.md tasks/done/context-scope/*.md | wc -l` gives 34. The same search with `grep -l` gives 16 files.
- C22: `git log --follow --format='%h %ad %s' --date=short -- <file>`, one call each for the nine `spec.md` files, `specs/SPEC-009-workspace/tasks/plan.md` and `docs/install/codex.md`. `git log --format='%h %ad %s' --date=short -- tasks specs` lists the commit subjects that carry state.
- C23: `git grep -n "tasks/done" ac7be413 -- scripts` prints one line, in a test. `grep -n 'tasks/done' scripts/setup/*.ts scripts/workspace/*.ts` prints nothing.

C18:

```python
import re
from collections import Counter

phase, task, tasks, order = None, None, {}, []
for line in open("specs/SPEC-009-workspace/tasks/todo.md").read().split("\n"):
    if m := re.match(r"^## Phase (\d)", line):
        phase = int(m.group(1))
    elif m := re.match(r"^- \[.\] (T\d\d):", line):
        task = m.group(1)
        tasks[task] = {"phase": phase, "deps": []}
        order.append(task)
    elif (m := re.match(r"^  - Depends: (.*)$", line)) and task:
        head = re.sub(r"\(.*?\)", "", m.group(1).split(". Scope")[0].split(". Ask first")[0])
        for a, b in re.findall(r"T(\d\d) to T(\d\d)", head):
            tasks[task]["deps"] += ["T%02d" % n for n in range(int(a), int(b) + 1)]
        tasks[task]["deps"] += re.findall(r"T\d\d", re.sub(r"T\d\d to T\d\d", "", head))
edges = [(a, b) for a in order for b in tasks[a]["deps"]]
print("tasks", len(tasks), "per phase", sorted(Counter(t["phase"] for t in tasks.values()).items()))
print("edges", len(edges), "unknown", [e for e in edges if e[1] not in tasks])
print("same phase", sum(tasks[a]["phase"] == tasks[b]["phase"] for a, b in edges))
print("earlier phase", sum(tasks[a]["phase"] > tasks[b]["phase"] for a, b in edges))
print("later phase", [(a, b) for a, b in edges if tasks[a]["phase"] < tasks[b]["phase"]])
for p in range(1, 8):
    named = sorted({tasks[b]["phase"] for a, b in edges if tasks[a]["phase"] == p and tasks[b]["phase"] != p})
    none = [t for t in order if tasks[t]["phase"] == p and not tasks[t]["deps"]]
    print("phase", p, "tasks name phases", named, "tasks with no task edge", none)


def reach(t, seen=None):
    seen = set() if seen is None else seen
    for d in tasks[t]["deps"]:
        if d not in seen:
            seen.add(d)
            reach(d, seen)
    return seen


print({t: sorted(d for d in reach(t) if tasks[d]["phase"] == 4) for t in order if tasks[t]["phase"] == 5})
```

It prints: 58 tasks; per phase 8, 8, 9, 10, 5, 16 and 2; 85 edges, none unknown; 54 in the same phase; 30 to an earlier phase; one to a later phase, T50 on T49. Per phase, the tasks name the phases: none; 1; 1 and 2; 2 and 3; 2 and 6; 1 to 5; 6. The tasks with no task edge are T01 to T06, T15, T30, T53 to T57 and T40. Of the phase 5 tasks only T50 reaches a phase 4 task (T27, T41, T42, T43).

C19:

```ts
import { listEfforts } from "/Users/peterkloss/Dev/ACMElabs/brain-views-mod/scripts/workspace/effort";
import { readConfig } from "/Users/peterkloss/Dev/ACMElabs/brain-views-mod/scripts/workspace/config";
import { retiredNames } from "/Users/peterkloss/Dev/ACMElabs/brain-views-mod/scripts/lifecycle/names";

const root = "/Users/peterkloss/Dev/ACMElabs/brain-views-mod";
const efforts = await listEfforts(root, (await readConfig(root)).paths);
for (const branch of ["lifecycle", "feat/source-cache", "feat/views-mod", "main"]) {
  const named = branch.split("/").at(-1);
  const hit = efforts.filter((e) => [e.name, e.id, e.slug].includes(named ?? ""));
  console.log(branch, "->", hit.map((e) => `${e.id} finished=${e.finished}`).join(", ") || "no match");
}
const found: string[] = [];
for (const pattern of ["specs/*/spec.md", "specs/*/tasks/plan.md", "specs/*/tasks/todo.md"]) {
  found.push(...(await Array.fromAsync(new Bun.Glob(pattern).scan({ cwd: root }))));
}
for (const file of found.toSorted()) {
  const lines = (await Bun.file(`${root}/${file}`).text()).split("\n");
  const hits: number[] = [];
  for (const [i, line] of lines.entries()) {
    for (const n of retiredNames) {
      if (n.pattern.test(line) && !n.allowLine.test(line)) hits.push(i + 1);
    }
  }
  if (hits.length > 0) console.log(file, hits.length, hits.join(","));
}
```

It prints: `lifecycle` selects SPEC-003 (finished); `feat/source-cache` selects IDEA-005 (not finished) and SPEC-007 (finished); `feat/views-mod` selects IDEA-015; `main` selects none. The matches are: SPEC-003 plan 3 (lines 24 to 26) and todo 6; SPEC-004 todo 1; SPEC-009 plan 2 (both on line 81) and todo 10. No `spec.md` has a match.

### What I could not establish

- Which DEC-051 value SPEC-005 gets. Its plan is built, and its result is superseded by a decision record. The files give both facts and no rule to pick one. DEC-051 does not say what a superseded spec names as its replacement.
- Whether the user holds SPEC-007 as `parked`. The files give "approved, not built, no plan", which is `open`. No file states the user's intent for it. I did not fetch the remote, so a branch that only the remote holds would not show; the remote-tracking refs of this clone hold none.
- Whether the Codex checks of SPEC-002 and SPEC-006 were run and not recorded. The install page says no live run is recorded.
- How a real spec in build carries state in layout 2. No spec of this repo is in layout 2. Only the fixtures and the eval scaffolds show that format; rows 17, 18 and 24 own them.
- Whether `tasks/done/context-scope` would get a status at all. It has no spec, and DEC-051 names ideas, specs and rows.
- What `brain status` prints on the branches `lifecycle` and `feat/source-cache`. I read the code and a test and ran the match; I did not change the branch.

### Contrary evidence

- GLOSSARY.md defines a phase as "the tasks in a plan that one checkpoint waits on". In SPEC-009 a phase is the tasks under a heading, and no checkpoint lists its tasks. SPEC-008 fits the glossary more: three of its four checkpoint bullets name the last task of a phase, by task number (F37, F39, F83).
- SPEC-009's own spec says "`plan.md` to hold the only status" (spec.md:312). The same spec has the main session tick boxes in `todo.md` (spec.md:116-118), and its task T26 says the sub-agent "ticks only its own boxes" (todo.md:162). The real SPEC-009 plan holds no status; its todo ticks hold it (F57).
- The code calls all nine specs finished. For SPEC-007 the other evidence says it was never built (F19, F20, F47, F69).
- Commit `16e2e36d` names `brain status` as the replacement of the spec index. `brain status` reports no state of a spec on this branch, and its JSON has no list of specs (F50, F65).
- RES-073 counts "121 checkboxes, all ticked" and 48 component rows. Both counts hold under `specs/`. With `tasks/done/context-scope` the counts are 125 and 52 (C5, C6).
- RES-073 says each layout-1 spec repeats its module's "Depends on" in prose. SPEC-002 and SPEC-008 state nothing in `spec.md` (their DEC-004 cell is a dash). One plan head repeats DEC-004's build-order line where the column has no edge, and one plan head states a precondition that DEC-004 lacks (F24, F26, F67).
- The first version of this record said "DEC-004 does not have" the wait of evals on question. DEC-004:23 has it. The first version also left open whether SPEC-007's "Built on its own branch" reports a build; git settles it as a plan (F67, F69).

## Findings
- F01: The repo's workspace config records `layout: 2` and names `specs` as the specs folder. Source: docs/agents/workspace.md:1-9, checked 2026-11-21.
- F02: The repo holds nine spec folders, SPEC-001 to SPEC-009, and one plan folder outside the workspace, `tasks/done/context-scope`. Source: `ls specs tasks tasks/done`, checked 2026-11-21.
- F03: All 25 files under `specs/` carry the marker `migrated: 0.8`, and the frontmatter of each is exactly `spec: SPEC-NNN` and `migrated: 0.8`. Source: command C1 in Answer, and lines 1-4 of each file under specs/*/spec.md and specs/*/tasks/*.md, checked 2026-11-21.
- F04: No file under `specs/` or `tasks/` stores a status, sources, blocked-by or result key. Source: command C2 in Answer (prints nothing), checked 2026-11-21.
- F05: No file under `specs/` or `tasks/` holds a table with the layout-2 plan header, so no real plan in this repo is in the layout-2 shape. Source: command C3 in Answer (prints nothing), checked 2026-11-21.
- F06: Two commits of 2026-10-29 put the layout-1 files into spec folders and added frontmatter only: f6f785d3 moved nine specs and the SPEC-009 plan and todo, and ac7be413 moved seven finished plans and todos from `tasks/done/<module>/`. Source: `git show --stat f6f785d3` and `git show --stat ac7be413`, checked 2026-11-21.
- F07: `tasks/done/context-scope/` stayed outside the workspace because it amends two specs and has none of its own, and its two files have no frontmatter. Source: the message of commit ac7be413 (`git show --stat ac7be413`) and tasks/done/context-scope/plan.md:1-3, checked 2026-11-21.
- F08: SPEC-007 holds only `spec.md`; it has no `tasks/` folder, no plan and no todo. Source: `ls specs/SPEC-007-source-cache`, checked 2026-11-21.
- F09: Seven migrated plans (SPEC-001 to 006 and 008) and the context-scope plan use the table `# | Component | Depends on | Risk`; the SPEC-009 plan uses `Phase | Tasks | What it delivers | Depends on`, with a branch table, a wave table and a risk table. Source: command C4 in Answer, checked 2026-11-21.
- F10: Seven migrated todos and the context-scope todo hold one line `- [x] Task N: <title>` per task with Acceptance, Verify and Files sub-lines and no dependency line; the SPEC-009 todo holds `- [x] TNN: <title>` with a fourth sub-line `Depends: … Scope: …`. Source: specs/SPEC-001-evals/tasks/todo.md:7-10, specs/SPEC-009-workspace/tasks/todo.md:14-18 and command C8 in Answer, checked 2026-11-21.
- F11: Every box in every todo is ticked: 121 boxes under `specs/` (5, 6, 16, 4, 4, 3, 10 and 73) and 4 in `tasks/done/context-scope/todo.md`, with no open box in either folder. Source: command C5 in Answer, checked 2026-11-21.
- F12: The number of component rows equals the number of task lines in each of the seven Component plans and in context-scope: 5, 6, 16, 4, 4, 3, 10 and 4. Source: commands C5 and C6 in Answer, checked 2026-11-21.
- F13: The SPEC-009 todo holds 58 task boxes and 15 checkpoint boxes, which give its 73 ticks. Source: commands C5 and C7 in Answer and specs/SPEC-009-workspace/tasks/todo.md:55-58, 103-105, 155-157, 214-216, 248-250, 341-344, 360-361, checked 2026-11-21.
- F14: Each `spec.md` states its status only in a body line: "draft for review" in SPEC-001, 002, 003 and 008; "approved" in SPEC-004, 006, 007 and 009; "superseded" in SPEC-005. Source: `grep -n 'Status: ' specs/*/spec.md` (command C10 in Answer), checked 2026-11-21.
- F15: Each of the eight migrated plans says in its head that its spec is approved, on 2026-09-19 for seven plans and on 2026-10-29 for SPEC-009, whose plan also records the user's approval of the plan after three rounds. Source: line 7 of each specs/*/tasks/plan.md and specs/SPEC-009-workspace/tasks/plan.md:11-12 (command C10 in Answer), checked 2026-11-21.
- F16: Only two plans end with a closing "Done" line, both dated 2026-09-19; the context-scope line points to the install page for one confirmation, and that page records it. Source: specs/SPEC-001-evals/tasks/plan.md:31, tasks/done/context-scope/plan.md:22 and docs/install/antigravity.md:93-96, checked 2026-11-21.
- F17: Under layout 1 a finished plan was marked by a move into `tasks/done/<module>/`, and two plans name that step as "archive". Source: `git show --stat 0f91f6be`, specs/SPEC-003-lifecycle/tasks/plan.md:28, specs/SPEC-003-lifecycle/tasks/todo.md:68 and specs/SPEC-005-question/tasks/plan.md:16, checked 2026-11-21.
- F18: SPEC-005 is superseded in prose by a decision record while all four of its tasks are ticked and its plan says approved; DEC-004 calls the module retired, and the superseding DEC-002 is itself superseded by DEC-006. Source: specs/SPEC-005-question/spec.md:8, specs/SPEC-005-question/tasks/plan.md:7, docs/decisions/DEC-004-capability-map-brain.md:19 and docs/decisions/DEC-002-ask-user-question-upstream.md:3, checked 2026-11-21.
- F19: SPEC-007's spec says "approved by Peter on 2026-10-29. Built on its own branch, `feat/source-cache`, with its own plan"; this worktree has no such branch, no `scripts/sdd-cache` folder and no `sdd-cache` command, and the vendored bash hooks that the spec wants to port exist under `hooks/`. Source: specs/SPEC-007-source-cache/spec.md:8-9 and command C15 in Answer, checked 2026-11-21.
- F20: An earlier research record lists `specs/SPEC-007-source-cache/` as "Never built. It reads as finished.", asks what becomes of it, and says the module built state was "Lost with `spec/README.md`'s State column". Source: docs/research/RES-037-flow-statement.md:679, docs/research/RES-037-flow-statement.md:879 and docs/research/RES-037-flow-statement.md:516, checked 2026-11-21.
- F21: The SPEC-009 plan's hand-written progress is out of date: its note says T28, T38 and T52 are running, its wave table labels T53 to T57 "A (running)" and its critical-path line names T38, while the todo ticks all of these tasks. Source: specs/SPEC-009-workspace/tasks/plan.md:53-54, specs/SPEC-009-workspace/tasks/plan.md:60, specs/SPEC-009-workspace/tasks/plan.md:63 and command C5 in Answer, checked 2026-11-21.
- F22: The spec text changed after its plan was done in six specs: SPEC-001 has six amendments, two dated 2026-10-29, and SPEC-006 has twelve, eight dated 2026-10-29; SPEC-003, SPEC-004 and SPEC-005 have later commits of 2026-10-19 to 2026-10-29 with no amendment heading for them; SPEC-008 changed on 2026-11-04 with none; SPEC-002 did not change after 2026-09-19 except by the migration. Source: commands C12 and C22 in Answer, specs/SPEC-001-evals/spec.md:179, specs/SPEC-006-setup/spec.md:47-111, specs/SPEC-003-lifecycle/spec.md:155, specs/SPEC-004-plain-talk/spec.md:35 and specs/SPEC-008-upstream-sync/spec.md:24-25, checked 2026-11-21.
- F23: Open questions are kept as numbered or bulleted lists with no status field; a closed one keeps its place and takes a prefix that differs by file ("Resolved <date>", "Closed <date>", "Closed <date> by DEC-006", "Answered:"), and an open one has no mark. Source: specs/SPEC-001-evals/spec.md:130-138, specs/SPEC-002-host-manifests/spec.md:128-135, specs/SPEC-003-lifecycle/spec.md:147-152, specs/SPEC-004-plain-talk/spec.md:190-194, specs/SPEC-005-question/spec.md:90-95, specs/SPEC-006-setup/spec.md:245-250, specs/SPEC-007-source-cache/spec.md:140-142, specs/SPEC-008-upstream-sync/spec.md:212-215, specs/SPEC-009-workspace/spec.md:468-470 and specs/SPEC-009-workspace/tasks/plan.md:101-106, checked 2026-11-21.
- F24: Seven of nine specs state a module-level "Depends on" in the first body line, by module ID: evals on plain-talk and lifecycle; lifecycle on upstream-sync and setup; plain-talk on host-manifests; setup on plain-talk; workspace on upstream-sync, plain-talk, setup and lifecycle; question and source-cache on nothing. SPEC-002 and SPEC-008 state none. Source: `grep -n 'Depends on' specs/*/spec.md` (command C10 in Answer) and specs/SPEC-009-workspace/spec.md:7-8, checked 2026-11-21.
- F25: DEC-004's module table holds nine modules whose IDs equal the nine spec folder slugs and a "Depends on" column with 10 edges; below the table a build-order line gives the order of all nine modules, and the record says each spec is "written and built in the order below". Source: docs/decisions/DEC-004-capability-map-brain.md:8-23 and `ls specs`, checked 2026-11-21.
- F26: No plan head contradicts DEC-004: the evals plan head adds "question", which DEC-004's "Depends on" column lacks and its build-order line has; the host-manifests plan head says "Depends on nothing", as the column does, and adds that "the vendored tree from upstream-sync is present", a precondition that neither form of DEC-004 holds. Source: specs/SPEC-001-evals/tasks/plan.md:7, specs/SPEC-002-host-manifests/tasks/plan.md:7, docs/decisions/DEC-004-capability-map-brain.md:14-18 and docs/decisions/DEC-004-capability-map-brain.md:23, checked 2026-11-21.
- F27: Every module that another spec waits on (host-manifests, plain-talk, setup, upstream-sync, lifecycle, question) has all its task boxes ticked, so no wait between specs is unmet in the files today. Source: docs/decisions/DEC-004-capability-map-brain.md:13-23 and command C5 in Answer, checked 2026-11-21.
- F28: The `Depends on` cells of the Component tables take five value forms across 52 rows: a dash (11), one row number (26), a list of numbers (12), a range ("5 to 11", "1 to 4") and the word "all" (1). Source: command C9 in Answer, checked 2026-11-21.
- F29: Each Component plan states its order in one prose line below the table, and that line can add a wait the table lacks: the plain-talk table lets rows 3 and 4 both follow row 2, while the line says "Sequential 1 to 4"; a wait can also sit in a Risk cell ("until Task 2 lands, so it joins the gates only at Task 4") or in a Verify sub-line ("the case test from Task 3's suite check") where the table gives no edge. Source: specs/SPEC-004-plain-talk/tasks/plan.md:15-18, specs/SPEC-008-upstream-sync/tasks/plan.md:24, specs/SPEC-001-evals/tasks/plan.md:19, specs/SPEC-005-question/tasks/plan.md:13, specs/SPEC-001-evals/tasks/todo.md:13 and specs/SPEC-001-evals/tasks/plan.md:14, checked 2026-11-21.
- F30: The SPEC-009 todo holds 58 `Depends:` lines: 13 say none, 44 name tasks and one names a release. They give 85 edges between tasks, 54 inside one phase, 30 to an earlier phase and one to a later phase (T50, under phase 5, on T49, under phase 6). Source: commands C8 and C18 in Answer and specs/SPEC-009-workspace/tasks/todo.md:246, checked 2026-11-21.
- F31: The SPEC-009 records hold waits on things that are not tasks: the user's yes before a push or a pull request, a second ask before T39, the 0.10.0 release before T40, a merged pull request before a branch, an "Ask first" on T06, and the network for two tasks. Source: specs/SPEC-009-workspace/tasks/plan.md:16-21, specs/SPEC-009-workspace/tasks/plan.md:35, specs/SPEC-009-workspace/tasks/plan.md:92-93, specs/SPEC-009-workspace/tasks/todo.md:43, 57, 344, 349, 358, 361 and specs/SPEC-009-workspace/spec.md:65, checked 2026-11-21.
- F32: The SPEC-009 plan gives each phase its own "Depends on" cell, with phase numbers and, for phase 7, "6 and a second ask (T39); the 0.10.0 release (T40)". Source: specs/SPEC-009-workspace/tasks/plan.md:27-35, checked 2026-11-21.
- F33: The SPEC-009 plan also states order in prose outside any dependency field: three prefactor tasks come "each before the task that needs it", each eval case is "written first", and a task waits when another task of its wave edits the same function. Source: specs/SPEC-009-workspace/tasks/plan.md:37-45 and specs/SPEC-009-workspace/tasks/plan.md:65-71, checked 2026-11-21.
- F34: Spec bodies hold prose waits on another spec or on later work that no field carries: a "Placeholder until `lifecycle` is specified", a module that "can be built before or after", a criterion "verified in" another module, hooks that "do nothing until a later module wires them", "Whichever branch lands first", upstream lines that "wait for their own bump", a first run that needs the user's `claude update`, and work left for "the first release". Source: specs/SPEC-001-evals/spec.md:21, specs/SPEC-001-evals/spec.md:61-62, specs/SPEC-003-lifecycle/spec.md:144-145, specs/SPEC-004-plain-talk/spec.md:186, specs/SPEC-008-upstream-sync/spec.md:210, specs/SPEC-008-upstream-sync/spec.md:30, specs/SPEC-007-source-cache/spec.md:50-51, specs/SPEC-009-workspace/spec.md:360 and specs/SPEC-002-host-manifests/tasks/plan.md:28-30, checked 2026-11-21.
- F35: No spec has a `sources:` list; six files name their sources in prose instead, and `brain status --json` gives each of the 14 ideas an empty `specs` list. Source: command C2 in Answer, specs/SPEC-003-lifecycle/spec.md:26-27, specs/SPEC-005-question/spec.md:15-16, specs/SPEC-005-question/tasks/plan.md:7, specs/SPEC-007-source-cache/spec.md:11-14, specs/SPEC-009-workspace/spec.md:11-13, specs/SPEC-009-workspace/tasks/plan.md:7-8 and `brain status --json`, checked 2026-11-21.
- F36: The SPEC-009 plan and todo state one end condition for every task in prose (a test or eval case first, the check green, one commit), and the phase 6 checkpoint hands the open items to IDEA-001 in prose. Source: specs/SPEC-009-workspace/tasks/plan.md:23, specs/SPEC-009-workspace/tasks/todo.md:7-10 and specs/SPEC-009-workspace/tasks/todo.md:342-344, checked 2026-11-21.
- F37: Two real plans have phases: the SPEC-008 todo groups its ten tasks under three plain lines `Phase N: <name>`, with no phase in its plan, and the SPEC-009 todo groups its tasks under seven `## Phase N` headings. The other six plans and context-scope have none. Source: specs/SPEC-008-upstream-sync/tasks/todo.md:7, 26, 41, specs/SPEC-009-workspace/tasks/todo.md:12, 60, 107, 159, 218, 252, 346 and command C11 in Answer, checked 2026-11-21.
- F38: The SPEC-009 plan's phase table names 46 tasks, and the todo holds 58: T47 to T58 sit under the todo's phase 4, 5 and 6 headings and are absent from the table, and T28 was moved to phase 6 at plan review. Source: specs/SPEC-009-workspace/tasks/plan.md:29-35, specs/SPEC-009-workspace/tasks/todo.md:279-283 and command C18 in Answer, checked 2026-11-21.
- F39: In the SPEC-009 todo a checkpoint is a heading `### Checkpoint: phase N` below the phase's tasks with one to three boxes; there are seven, with 15 boxes, and each has a review with the user in one of its boxes; no checkpoint lists the tasks it waits on, five boxes name single tasks in a note, and no `Depends:` line names a checkpoint. Source: commands C7 and C8 in Answer and specs/SPEC-009-workspace/tasks/todo.md:55-58, 105, 215, 249, 342-343, 361, checked 2026-11-21.
- F40: Phase 6 of the SPEC-009 todo gained a block "Review fixes" with tasks T53 to T58 after its review, so the tasks of a phase changed while the phase was in build. Source: specs/SPEC-009-workspace/tasks/todo.md:305-339, checked 2026-11-21.
- F41: The rule that a checkpoint holds later tasks is prose in the SPEC-009 records, dated 2026-10-29, and the phase 2 checkpoint records that waves ran past it because the hand-made waves treated checkpoints as reviews, not as edges. Source: specs/SPEC-009-workspace/tasks/plan.md:56 and specs/SPEC-009-workspace/tasks/todo.md:105, checked 2026-11-21.
- F42: Seven migrated plans and context-scope hold a "Verification checkpoints" list of 23 bullets that start with "After" (22 are "After N", and one is "After each combined skill") and two bullets "Manual, later"; a bullet has no box, no status and no review, and it sits outside the table. Source: command C11 in Answer, specs/SPEC-001-evals/tasks/plan.md:21-25 and specs/SPEC-003-lifecycle/tasks/plan.md:35, checked 2026-11-21.
- F43: The SPEC-009 plan holds a "Checkpoints" section with one pass condition per phase, seven bullets, and says every phase ends with a checkpoint row in `tasks/todo.md` and a review with the user. Source: specs/SPEC-009-workspace/tasks/plan.md:73-86, checked 2026-11-21.
- F44: Only the SPEC-009 plan has a "Parallel waves" section; it is hand-made, it stores status words in the wave labels ("A (running)", "Then (done)"), and it says `brain plan` cannot read this plan, "which is in the old layout, until T39 migrates it"; T39 is ticked, and `brain plan SPEC-009` still exits 1. Source: specs/SPEC-009-workspace/tasks/plan.md:50-63, specs/SPEC-009-workspace/tasks/todo.md:348 and `brain plan SPEC-009` (command C13 in Answer), checked 2026-11-21.
- F45: The other eight plans state their order in one prose line; six of them name parallel work or a free order, such as "1 to 3 in parallel; 4 after 1; 5 is Peter's" and "1 → 2 and 3 in parallel → 4", and two say only "Sequential". Source: specs/SPEC-001-evals/tasks/plan.md:19, tasks/done/context-scope/plan.md:14, specs/SPEC-004-plain-talk/tasks/plan.md:18 and specs/SPEC-006-setup/tasks/plan.md:17, checked 2026-11-21.
- F46: The row parser reads the first table whose header equals the layout-2 columns exactly, and returns no rows and one problem when no such table exists. Source: scripts/workspace/map.ts:48-57 and scripts/workspace/map.ts:118-123, checked 2026-11-21.
- F47: The effort code calls a spec finished when its plan has no open or in-progress row, does not read the `migrated` marker, and gives an absent plan no rows; so a migrated plan and a spec with no plan both count as finished. Source: scripts/workspace/effort.ts:59-75 and scripts/workspace/graph.ts:17-20, checked 2026-11-21.
- F48: `brain plan` exits 1 with "plan: no table with the columns # | Task | Type | Status | Blocked by | Result" for SPEC-001 to 006, 008 and 009, and exits 2 with "no tasks/plan.md in SPEC-007" for SPEC-007. Source: `brain plan SPEC-001` to `brain plan SPEC-009` (command C13 in Answer), checked 2026-11-21.
- F49: `brain check` reports no finding in any file under `specs/`; one run printed "3 migrated decisions have no kind: DEC-001, DEC-002, DEC-004" and "no finding in 111 workspace files" (the count and the findings in other records move during this session): on a file with `migrated` it checks only the fields the file carries, skips the H1, the rows and the waves, and lets a migrated spec lack its plan and todo. Source: `brain check` (command C13 in Answer), scripts/workspace/schema.ts:330-334, scripts/workspace/check.ts:127-154 and scripts/workspace/check.ts:456-475, checked 2026-11-21.
- F50: `brain status` on the branch `feat/views-mod` reports IDEA-015 only; it gives a migrated file no rows, it reads a spec's H1 for a title only when the spec is a reported effort, and its JSON has the keys migrate, report, efforts, ideas and red, with no list of specs. Source: `brain status` and `brain status --json` (command C13 in Answer), scripts/workspace/status.ts:98-101, scripts/workspace/status.ts:134-145 and scripts/workspace/status.ts:62-71, checked 2026-11-21.
- F51: The schema gives a spec file the fields `spec` and `sources` and a plan or todo file the field `spec` only, and any other key except `migrated` is the finding "not a field of a <type> file"; so a `status:` or `blocked-by:` key on a spec fails `brain check` today. Source: scripts/workspace/schema.ts:185-197 and scripts/workspace/schema.ts:234-236, checked 2026-11-21.
- F52: From a todo, Brain's workspace code reads only the "Files likely touched" list under a heading `## Task NN:` or `## Checkpoint NN:`, and no real todo in this repo has such a heading; no code outside tests reads a ticked box, a `Depends` line or a prose `Status:` line. Source: scripts/workspace/plan.ts:46-71 and command C16 in Answer, checked 2026-11-21.
- F53: No Brain code reads `tasks/done/context-scope/`: `brain check` scans only the four workspace folders, the layout-1 detector looks for `tasks/plan.md` and `tasks/todo.md` at the root and only when `workspace.md` is absent, and the retired-name check keeps every path under `tasks/` as written. Source: scripts/workspace/check.ts:46-73, scripts/workspace/check.ts:107-109, scripts/workspace/old-layout.ts:31-32, scripts/workspace/old-layout.ts:53-60, scripts/workspace/status.ts:287-292 and scripts/lifecycle/names.ts:88, checked 2026-11-21.
- F54: The migrated bodies still cite paths from before the migration, such as `spec/SPEC-evals.md`, and the folder `spec/` no longer exists; an old spec file name occurs 34 times in 16 of these files. Source: command C21 in Answer and `ls spec`, checked 2026-11-21.
- F55: The maintainer guide says each module has a spec folder with `spec.md`, `tasks/plan.md` and `tasks/todo.md`, which SPEC-007 contradicts. Source: AGENTS.md:30 and `ls specs/SPEC-007-source-cache`, checked 2026-11-21.
- F56: The SPEC-009 spec records why plan rows and map rows share one status set: "plan rows use the map's statuses (`open`, `in-progress`, `resolved`, `superseded by NN`), so one parser reads both", as a choice of the build agent that is cheap to change. Source: specs/SPEC-009-workspace/spec.md:216-219, checked 2026-11-21.
- F57: The SPEC-009 records give three statements on where a task's status lives and who writes it: a user story wants `plan.md` to hold the only status; a decided detail has the sub-agent tick nothing while the main session ticks the block's boxes and updates the plan row; and task T26 says the sub-agent ticks only its own boxes. Source: specs/SPEC-009-workspace/spec.md:312, specs/SPEC-009-workspace/spec.md:116-118 and specs/SPEC-009-workspace/tasks/todo.md:162, checked 2026-11-21.
- F58: Task T10 of SPEC-009 set the layout-2 formats: plan rows carry ID, task, type, status, blocked by and result, and todo blocks carry "no status line and no Dependencies field"; the todo template follows it, with no such line or field, and says "The row in `plan.md` holds the status and the rows that block it". Source: specs/SPEC-009-workspace/tasks/todo.md:68 and scripts/workspace/templates/todo.md:6, checked 2026-11-21.
- F59: The SPEC-006 spec records the migration rule that produced these files: specs, plans and todos move "with `git mv` and frontmatter added, no byte below it changed", and a migrated idea "gets no status, since only the user knows it". Source: specs/SPEC-006-setup/spec.md:61-72, checked 2026-11-21.
- F60: The SPEC-009 spec says a migrated file needs only its identity field, that every other field is optional and checked when present, and that its body is not checked. Source: specs/SPEC-009-workspace/spec.md:90-98, checked 2026-11-21.
- F61: The SPEC-009 spec body and the acceptance lines of its todo state the design of layout-2 status and waits as requirements (the row statuses, the frontier, `brain check` findings, `brain status` lines, `brain plan` waves, checkpoint rows, the parallel build) and hold no state of SPEC-009 itself; parts are out of date, since the spec still lists `skills/status/SKILL.md` and a `STATUS.md` seed, which the tree no longer has. Source: specs/SPEC-009-workspace/spec.md:17-25, 42-57, 72-156, 194-219, 243-244, 259-276, 289-350, 375-466, specs/SPEC-009-workspace/tasks/todo.md:44-48, 67-101, 109-138, 161-212, 225-246, 254-303, 314-339 and `ls skills/status docs/STATUS.md` (both absent), checked 2026-11-21.
- F62: The SPEC-001 spec's case table and amendments describe eval scaffolds and graders in layout-2 words (two open plan rows with row 02 blocked by row 01, a frontier five tasks wide then checkpoint row 06, rows `resolved` with a commit SHA, a ticked box in `todo.md`), as requirements on the evals and not as state of SPEC-001. Source: specs/SPEC-001-evals/spec.md:40-47, specs/SPEC-001-evals/spec.md:51 and specs/SPEC-001-evals/spec.md:164-219, checked 2026-11-21.
- F63: The SPEC-003, SPEC-005 and SPEC-006 bodies and task lines state rules for waits on the user (one question per call, the frontier-empty test plus an explicit yes, `build auto` stops on a failed test, a spec gap or a one-way step, the waiting rule of the question skill, a setup script that exits 2 until it has an answer) as design of those modules, not as state of their own spec. Source: specs/SPEC-003-lifecycle/spec.md:12, 29-39, 49-58, 62-77, 137, specs/SPEC-003-lifecycle/tasks/todo.md:15-34, 43-46, specs/SPEC-005-question/spec.md:23-36, 74-88, specs/SPEC-005-question/tasks/todo.md:11-18 and specs/SPEC-006-setup/spec.md:53-120, 125-141, checked 2026-11-21.
- F64: The prose of these files uses eight state words for a spec or its module, with no fixed set: "draft for review", "approved", "amended", "built", "Done", "superseded", "retired" and "proposed". Source: specs/SPEC-001-evals/spec.md:7-9, specs/SPEC-004-plain-talk/spec.md:8, specs/SPEC-005-question/spec.md:8, specs/SPEC-003-lifecycle/spec.md:53, specs/SPEC-003-lifecycle/spec.md:140-145, specs/SPEC-003-lifecycle/tasks/plan.md:40, specs/SPEC-001-evals/tasks/plan.md:7 and specs/SPEC-001-evals/tasks/plan.md:31, checked 2026-11-21.
- F65: Layout 1 held one stored state per spec in the `State` column of `spec/README.md`; at its removal the column said "approved, built" for seven modules (with "the first run is Peter's task 5" for evals), "approved 2026-10-29" for workspace and "approved 2026-10-29; own branch, `feat/source-cache`" for source-cache; commit 16e2e36d of 2026-10-29 removed the file and names "the specs/ folder and brain status in its place". Source: `git show 16e2e36d^:spec/README.md` and `git show --stat 16e2e36d`, checked 2026-11-21.
- F66: Nine commits touched the spec index before its removal, eight of them on 2026-09-19 during the builds, and its State cells took the values "not yet written", "draft; lifecycle cases are placeholders", "approved", "approved, in build" and "approved, built"; at removal the cells for question and evals were stale, since the question spec was superseded on 2026-10-28 and the evals first run was recorded after the last index update. Source: command C20 in Answer, specs/SPEC-005-question/spec.md:8 and `git merge-base --is-ancestor 7023e445 19295e6b` (exit 0), checked 2026-11-21.
- F67: DEC-004's build-order line says "upstream-sync and host-manifests → plain-talk → setup → lifecycle and question, either order → evals. Then workspace; source-cache any time, on its own branch"; it holds order that the "Depends on" column lacks (plain-talk after upstream-sync, question after setup, evals after question, workspace after evals and question), one pair with no order and one explicit "any time", and no edge of the column contradicts it. Source: docs/decisions/DEC-004-capability-map-brain.md:13-23, checked 2026-11-21.
- F68: Specs and plans repeat the build-order line as well as the column: the evals plan head names question, the lifecycle spec says the question module "can be built before or after this module", and the source-cache spec and the workspace spec and plan say the source cache is built on its own branch. Source: specs/SPEC-001-evals/tasks/plan.md:7, specs/SPEC-003-lifecycle/spec.md:144-145, specs/SPEC-007-source-cache/spec.md:8-9, specs/SPEC-009-workspace/spec.md:64, specs/SPEC-009-workspace/spec.md:354 and specs/SPEC-009-workspace/tasks/plan.md:8-9, checked 2026-11-21.
- F69: SPEC-007's sentence "Built on its own branch, `feat/source-cache`, with its own plan" states a plan and reports no build: it is already in the commit that created the spec, the file has only that commit and the migration in its history, and no local or remote-tracking ref holds a commit that touches `scripts/sdd-cache`. Source: `git show fa268bdc:spec/SPEC-source-cache.md`, `git log --format='%h %ad %s' --date=short --follow -- specs/SPEC-007-source-cache/spec.md`, `git log --all --oneline -- scripts/sdd-cache` (prints nothing) and `git branch -a`, checked 2026-11-21.
- F70: An open idea has the same slug as SPEC-007: IDEA-005 "Source cache" has `status: define` and one open research row on the cache guidance, and says the cache "remains unwired"; it does not name SPEC-007, and SPEC-007 has no `sources:`, so no field links the two. Source: docs/ideas/IDEA-005-source-cache.md:1-6, docs/ideas/IDEA-005-source-cache.md:26, docs/ideas/IDEA-005-source-cache.md:34 and command C2 in Answer, checked 2026-11-21.
- F71: The active effort is the one whose name, ID or slug equals the last part of the branch name, when exactly one effort matches; this rule comes before the "not finished" rule, so a branch that names a finished spec gives the stage `finished`. In this repo the branch name `lifecycle` selects SPEC-003, and `feat/source-cache` matches both IDEA-005 and SPEC-007, so it selects neither. Source: scripts/workspace/effort.ts:85-104, scripts/workspace/status.ts:117-120, scripts/workspace/__tests__/status.test.ts:232-246, `git branch -a` and command C19 in Answer, checked 2026-11-21.
- F72: `bun run check` runs a second reader of these files, the retired-name check: it reads every line of each `spec.md` for five name patterns, two of them status words (`Phase:` and "phase boundary"), skips a plan or todo under `specs/` whose frontmatter has `migrated`, and keeps every path under `tasks/` as written; with the skip off, 22 matches on 21 lines in five migrated plan and todo files name a retired name, and no `spec.md` line does. Source: package.json:15, package.json:24, scripts/lifecycle/check-refs.ts:148, scripts/lifecycle/names.ts:32-60, scripts/lifecycle/names.ts:88, scripts/lifecycle/names.ts:133-151, scripts/lifecycle/names.ts:160-167 and command C19 in Answer, checked 2026-11-21.
- F73: Two code paths treat the `migrated` marker of a plan differently: the effort code and `brain plan` read the plan's rows without a look at the marker, and `brain status` and `brain check` give a file with the marker no rows. Source: scripts/workspace/effort.ts:65-66, scripts/workspace/plan.ts:129, scripts/workspace/status.ts:98-101 and scripts/workspace/check.ts:456-466, checked 2026-11-21.
- F74: The order line and the `Depends on` cells of one plan disagree in six of the eight Component plans, in both directions: the line adds a wait in SPEC-002, 003, 004, 005, 008 and context-scope, and drops a wait in SPEC-003 (row 6 on 5, row 9 on 8, against "5 to 11 in any order") and SPEC-005 (row 3 on 2, against "2 and 3 in parallel"); the two agree in SPEC-001 and SPEC-006. Source: specs/SPEC-002-host-manifests/tasks/plan.md:15-20, specs/SPEC-003-lifecycle/tasks/plan.md:15-30, specs/SPEC-004-plain-talk/tasks/plan.md:15-18, specs/SPEC-005-question/tasks/plan.md:14-18, specs/SPEC-008-upstream-sync/tasks/plan.md:18-24, tasks/done/context-scope/plan.md:12-14, specs/SPEC-001-evals/tasks/plan.md:13-19 and specs/SPEC-006-setup/tasks/plan.md:13-17, checked 2026-11-21.
- F75: Six more waits sit in Risk cells and Verify lines where the table gives no edge: a secret "which is Peter's", a first run "by Peter, after `claude update`", an install "untested until the branch is pushed", a Verify "once the branch shares history with main", a Verify "CI green on the branch after push", and a check that "passes after Task 3"; each of these tasks is ticked. Source: specs/SPEC-001-evals/tasks/plan.md:16, specs/SPEC-001-evals/tasks/plan.md:17, specs/SPEC-002-host-manifests/tasks/plan.md:17, specs/SPEC-002-host-manifests/tasks/todo.md:21, specs/SPEC-002-host-manifests/tasks/todo.md:29, specs/SPEC-003-lifecycle/tasks/todo.md:13 and command C5 in Answer, checked 2026-11-21.
- F76: Each of the seven Component plans under `specs/` ends with a section "Not in this plan" (SPEC-008: "What is not in this plan"), and five of them hand work to another module by its ID; the context-scope plan has no such section. Source: specs/SPEC-001-evals/tasks/plan.md:27-29, specs/SPEC-002-host-manifests/tasks/plan.md:28-30, specs/SPEC-003-lifecycle/tasks/plan.md:38-40, specs/SPEC-004-plain-talk/tasks/plan.md:26-29, specs/SPEC-005-question/tasks/plan.md:26-28, specs/SPEC-006-setup/tasks/plan.md:25-27, specs/SPEC-008-upstream-sync/tasks/plan.md:33-36 and `grep -c 'ot in this plan' tasks/done/context-scope/plan.md` (0), checked 2026-11-21.
- F77: Two specs with every box ticked have a success criterion with no recorded run: SPEC-006 criterion 3 and the Codex part of SPEC-002 criterion 3 name the Codex install page, which says "No live installation or context-loading test is recorded" and said "Not yet run" on 2026-10-29; the manual checks of SPEC-004 have a recorded run of 2026-09-19 on the Claude Code, Gemini CLI and Antigravity pages. Source: specs/SPEC-006-setup/spec.md:242, specs/SPEC-002-host-manifests/spec.md:123-124, docs/install/codex.md:86-88, `git show 03f2d3e4:docs/install/codex.md`, docs/install/claude-code.md:90-93, docs/install/gemini-cli.md:58-60 and docs/install/antigravity.md:93-96, checked 2026-11-21.
- F78: Prose waits and references cross files at the level of one criterion or one task: plain-talk criterion 4 is "Verified in the `setup` module" while DEC-004 has setup wait on plain-talk; upstream-sync criterion 6 "is verified in `host-manifests`" while DEC-004 gives upstream-sync no wait; six SPEC-006 amendments name a task of another spec as "`SPEC-workspace.md`, task TNN"; and a lifecycle task amends the setup spec. Source: specs/SPEC-004-plain-talk/spec.md:186, docs/decisions/DEC-004-capability-map-brain.md:16, specs/SPEC-008-upstream-sync/spec.md:210, docs/decisions/DEC-004-capability-map-brain.md:13, specs/SPEC-006-setup/spec.md:53, 61, 69, 78, 92, 100, specs/SPEC-003-lifecycle/tasks/plan.md:27 and specs/SPEC-003-lifecycle/tasks/todo.md:63-64, checked 2026-11-21.
- F79: These files link records with "amends" and "refines" beside "superseded": "DEC-005, which refines DEC-003", "DEC-003, which amends the Decisions row", and a plan that "Amends" two specs. Source: specs/SPEC-006-setup/spec.md:111, specs/SPEC-009-workspace/spec.md:81, specs/SPEC-009-workspace/spec.md:87 and tasks/done/context-scope/plan.md:3, checked 2026-11-21.
- F80: Ticked checkpoint boxes of SPEC-009 hold more than a tick: links to results ("PR #13", the merge commit "80aaef91"), a review verdict ("request changes", then "approved 2026-10-30"), and open items handed forward in three of seven checkpoints ("a follow-up for interview-me and the grader", "The real run moves to Linux CI at phase 6", "Open for phase 6"). Source: specs/SPEC-009-workspace/tasks/todo.md:57-58, specs/SPEC-009-workspace/tasks/todo.md:157, specs/SPEC-009-workspace/tasks/todo.md:216, specs/SPEC-009-workspace/tasks/todo.md:250 and specs/SPEC-009-workspace/tasks/todo.md:342-344, checked 2026-11-21.
- F81: The hand-made wave table of SPEC-009 is a view of the work that was left, rewritten in place: it names 7 of the 58 tasks and omits T58, four commits have the subject "refresh the waves", and an earlier version held the waves A, B, C and "Then"; no file holds the full list of waves of the build. Source: specs/SPEC-009-workspace/tasks/plan.md:58-61, `grep -n 'T58' specs/SPEC-009-workspace/tasks/plan.md` (prints nothing), `git log --follow --format='%h %ad %s' --date=short -- specs/SPEC-009-workspace/tasks/plan.md` and `git show 4bf82672:tasks/plan.md`, checked 2026-11-21.
- F82: Only the number of a SPEC-009 phase is the same in every place: the names of phases 4 and 6 differ between plan and todo; phases 2 to 6 share one branch and pull request, and phase 7 has two of each; and the phase's "Depends on" cell differs from the task edges (phase 3 names phase 1, no phase 5 task names a phase 4 task, phases 5 and 6 name each other, and seven tasks in phases 2, 5 and 6 say `Depends: none`). Source: specs/SPEC-009-workspace/tasks/plan.md:19-21, specs/SPEC-009-workspace/tasks/plan.md:29-35, specs/SPEC-009-workspace/tasks/todo.md:159, specs/SPEC-009-workspace/tasks/todo.md:252 and command C18 in Answer, checked 2026-11-21.
- F83: In SPEC-008 each phase ends where a checkpoint bullet names its last task: the phases hold tasks 1 to 4, 5 to 7 and 8 to 10, and the bullets are "After 4", "After 7", "After 9" and "After 10"; the link is by task number, and no bullet names a phase. Source: specs/SPEC-008-upstream-sync/tasks/todo.md:7-54 and specs/SPEC-008-upstream-sync/tasks/plan.md:28-31, checked 2026-11-21.
- F84: Three ticked tasks of SPEC-003 built things that SPEC-009 later removed: Task 13 (triage), Task 14 (wayfinder) and Task 15 (the tracker question); the lifecycle spec says the tracker question and files "were removed by `SPEC-workspace.md`", and `skills/` holds no triage or wayfinder folder. Source: specs/SPEC-003-lifecycle/tasks/todo.md:55, 59, 63, specs/SPEC-003-lifecycle/spec.md:54, specs/SPEC-009-workspace/tasks/todo.md:139, 144, 149 and `ls skills` (no triage, no wayfinder), checked 2026-11-21.
- F85: Fourteen open-question items have no mark (11 in SPEC-001 to SPEC-008, one in the SPEC-009 spec, two in the SPEC-009 plan), and the lack of a mark does not show that an item is pending: the evals first run answered SPEC-001 questions 1 and 2, and an install from the acmelabs marketplace answered SPEC-002 question 1. Source: specs/SPEC-001-evals/spec.md:132-136, docs/evals/first-run.md:3-15, specs/SPEC-002-host-manifests/spec.md:128-130, docs/install/claude-code.md:90-91, specs/SPEC-009-workspace/spec.md:470 and specs/SPEC-009-workspace/tasks/plan.md:103-105, checked 2026-11-21.
- F86: Commit subjects carry state per task and per plan ("(lifecycle task 12)", "tasks: archive the finished lifecycle plan", "chore: tick T39 and T40 in the workspace plan", "docs: close the phase 7 checkpoint and hand off to IDEA-001"), and the migrate code has no step for `tasks/done/`: no script names that path outside a test, at HEAD or at the commit that moved the seven done plans. Source: commands C22 and C23 in Answer, checked 2026-11-21.
- F87: The text of the superseded spec changed after it was superseded: SPEC-005 was marked superseded by commit 023d94f3 on 2026-10-28, and two commits of 2026-10-29 edited it, one of which closed its open question 2. Source: `git log --follow --format='%h %ad %s' --date=short -- specs/SPEC-005-question/spec.md` and specs/SPEC-005-question/spec.md:95, checked 2026-11-21.
- F88: The words "Depends on" carry two senses in the spec heads: SPEC-009 gives the reason "it changes files those modules own", the other heads give no reason, and the plan heads add the blocker's state ("built", "all built", "is present"). Source: specs/SPEC-009-workspace/spec.md:7-8, specs/SPEC-004-plain-talk/spec.md:7, specs/SPEC-006-setup/tasks/plan.md:7, specs/SPEC-001-evals/tasks/plan.md:7 and specs/SPEC-002-host-manifests/tasks/plan.md:7, checked 2026-11-21.

## Follow-ups
- Which status does the migration store for SPEC-005, whose plan is built and whose result a decision record superseded?
- Does the user hold SPEC-007 as open or as parked, and what links it to IDEA-005, which has the same slug?
- What does a superseded spec name as its replacement when the replacement is a decision record and not a spec?
- Does a layout-1 plan with no spec, `tasks/done/context-scope/`, move into the workspace, stay outside it, or get removed by the migration?
- What does a wait on something that is not an item become: the user's yes, a release, a merged pull request, a push?
- Which carrier wins when a migration fills "blocked by" for a plan whose `Depends on` cells and order line disagree?
- Does a migration that stores `done` from ticks keep a mark for a success criterion with no recorded run?

## Next action
None.
