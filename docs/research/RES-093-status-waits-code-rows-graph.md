---
id: RES-093
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-016#18
date: 2026-11-21
---
# RES-093: How Brain's code reads rows, waits, phases and waves

## Question
How does Brain's code read rows and their waits: map and plan parsing, Blocked by edges, the frontier, phases, checkpoints, waves and cycles?

## Answer
Sufficient answer: with a source per claim, the record states how a map table and a plan table are parsed, how blocking edges are built and validated, which statuses of a blocker end a wait in each code path, how the frontier is worked out, how a phase is derived from a checkpoint, how waves are laid, what brain plan prints or writes, every literal status value or wait word in this code, what each unit test and fixture pins, and the limits. It names what could not be established and any contrary evidence. The record meets this condition.

Source version: commit dfcab49b on branch feat/views-mod. No file under `scripts/`, `skills/`, `commands/` or `.claude/` has an uncommitted change (`git status --short`, 2026-11-21). Ten code files read here are byte-equal to the installed plugin 0.13.0 (`cmp`, 2026-11-21): map.ts, graph.ts, plan.ts, schema.ts, check.ts, status.ts, effort.ts, config.ts, lib/table.ts and brain.ts. Two cited records are not part of that commit: `docs/decisions/DEC-030-fixed-and-live-waves.md` and `docs/research/RES-073-view-data.md` are untracked, and were read from the working tree. The map of IDEA-016 is also uncommitted and changes while the interview runs. Six test files pass at this commit: plan, check, check.ts, schema, status and fixtures, 294 tests.

This is the second version of the record. Three independent checks read the first version. Their results are under "Checks" at the end of this Answer.

### Summary
Three files hold this logic. `scripts/workspace/map.ts` reads the rows of a map or a plan and works out the frontier. `scripts/workspace/graph.ts` holds the cycle search, the waves, the critical path and the transitive blockers. `scripts/workspace/plan.ts` is `brain plan`: it prints the waves and writes nothing.

In these three files a wait has one form only: a two-digit row number in the Blocked by cell of a row, which names a row of the same table. Other code works out or stores more waits for a row; "Waits outside the three files" lists them.

Only one status of a blocker ends a wait in `frontier` and in `layWaves`: `resolved`. A `superseded` blocker never ends a wait there. While the waiting row is `open` or `in-progress`, `brain plan` and `brain check` report that edge as an error, and `brain status` counts the finding on its Red line. An `open` or `in-progress` blocker keeps the row off the frontier and puts it in a later wave. Two paths read no status at all: the cycle search and the transitive blockers.

A phase is not a record and has no status in the code. Two functions work it out from the Blocked by cell of a checkpoint row. A wave is not a record and has no status in the code. The code works out the waves of the rows still to do only. A layout-2 plan with one row or more, which `brain plan` can put in order, must store a copy of that output, and `brain check` reports the copy when it is missing or stale.

The row code reads no row of a file with `migrated` in its frontmatter. All eight plans of this repo are such files, so no real plan here has a row that this code reads.

### How a table is parsed
The table below gives each step of `readRows` with its source line.

| Step | Rule | Source |
|---|---|---|
| Find the table | The first line of the text whose cells equal the six columns, in count, order, spelling and case. Each line is trimmed first, so an indented table is read. No heading is needed | map.ts:49-57, lib/table.ts:8 |
| Columns, map | #, Question, Type, Status, Blocked by, Result | schema.ts:217-220 |
| Columns, plan | #, Task, Type, Status, Blocked by, Result | schema.ts:221-224 |
| End of the table | The first line that is not a table line; a blank line ends it | map.ts:59-63 |
| Delimiter row | Skipped only on the line below the header. A table with no delimiter row is read too | map.ts:64-67 |
| Row number | Two digits, `00` to `99`, or the row is a problem. A table holds 100 rows at most | map.ts:38, 76-78 |
| Cell count | Six, or the row is a problem | map.ts:79-81 |
| Type | interview, prototype, ideate, research or task in a map; task or checkpoint in a plan | map.ts:83-85, schema.ts:219 and 223 |
| Status | `open`, `in-progress`, `resolved` or `superseded by NN` | map.ts:86-90, schema.ts:210 |
| Blocked by | Empty for an empty cell, an em dash or a hyphen; else a comma list of two-digit numbers. An en dash or `--` is a problem | map.ts:37-38, 91-94 |
| Result | Empty for an empty cell, an em dash or a hyphen; else the text as written | map.ts:107 |
| Repeated number | The later row is left out. The rule applies to two-digit numbers only. It applies also when the earlier row was left out for its format | map.ts:130-136 |
| Order | None is checked. Rows need no number order, gaps are valid, and a Blocked by cell can name a row below it | map.ts:126-147 |
| Unknown blocker | A problem; the row stays in `rows` | map.ts:144-147 |
| Unknown replacement | A problem; the row stays in `rows` | map.ts:148-152 |
| Replacement cycle | A problem | map.ts:154-161 |

A row with a format problem is left out of `rows`. Its number still counts as a known row, so a row that names it gets no "not a row" problem. `readRows` returns `rows` and `problems` together, and each caller decides what to do with the problems.

The reader's problem texts are these: `<table>: no table with the columns ...` (map.ts:122), `row "N": the number is not two digits` (77), `row NN: N cells, not 6` (80), `row NN: type "x" is not ...` (84), `row NN: status "x" is not open, in-progress, resolved or superseded by NN` (88), `row NN: blocked by "x" is not a two-digit row number` (93), `row NN: an earlier row has the same number` (131), `row NN: blocked by MM, which is not a row in this map` (146), `row NN: superseded by MM, which is not a row in this map` (150) and `row NN: superseded-by cycle (...)` (160).

### What each caller does with the reader's problems

| Caller | Rows it uses | Problems | Migrated file | Source |
|---|---|---|---|---|
| `brain plan` | `rows`, only when there is no problem | Prints each to stderr, exit 1 | No guard: it exits 1 with "no table" | plan.ts:129-132, 305-314 |
| `brain check` | `rows` | Each is a finding, exit 1 | Skips the row check and the waves check | check.ts:290-293, 456-475 |
| `brain status` | `rows` for the stage, the last step, the frontier, the rows in progress and the waiting list | Drops them in `rowsOf`, but runs `checkWorkspace` and counts each finding on the Red line | Reads no row | status.ts:93-100, 263-265, 294, 300-302 |
| The effort finder | `rows` | Drops them, with no report | No guard: no table gives no row, and the spec counts as finished | effort.ts:65-73 |

### Which status of a blocker ends a wait, by code path

| Code path | Used by | Blocker `resolved` | Blocker `open` or `in-progress` | Blocker `superseded` | Source |
|---|---|---|---|---|---|
| `frontier` | `brain status` | Ends the wait | Row is off the frontier | Row is never on the frontier; no error from this function | map.ts:166-171 |
| `layWaves` | `brain plan`; `brain check` for a plan and a map | Ends the wait | Row goes to a later wave than the blocker | Row is in no wave and is named as stuck | graph.ts:88-113 |
| `parallelWaves` | `brain plan`; `brain check` (Parallel waves) | As `layWaves` | As `layWaves` | Exit 1 with `row NN: blocked by MM, which is superseded by KK` | plan.ts:137-145 |
| `rowProblems`, map branch | `brain check` | No finding | No finding | The same finding text | check.ts:314-320 |
| `findCycle` | `brain plan`, `brain check`, `readRows` | Status is not read | Status is not read | Status is not read | graph.ts:27-57 |
| `blockersOf` | `brain check`, checkpoint rule | Status is not read | Status is not read | Superseded rows are removed before the call, so a superseded row cuts the chain | graph.ts:64-81, check.ts:225 |
| Frontier copies in two eval tests | Eval tests | Ends the wait | Row is off the frontier | Row is never on the frontier | interview-resume.test.ts:157-163, interview-parallel-research.test.ts:211-217 |

Three more cases have no status column, because the blocker is not in `rows` or the status is not read.

| Case | `frontier` | `layWaves` | Message |
|---|---|---|---|
| The blocker's number is not a row of the table | The waiting row is off the frontier | In no wave, not named as stuck | `readRows`: "which is not a row in this plan" |
| The blocker's own row has a format problem and is left out, even when its cell says `resolved` | The waiting row is off the frontier | In no wave, not named as stuck | A problem for the blocker's row only; no line names the waiting row |
| The row is in a blocked-by cycle | Off the frontier; `frontier` and `readRows` run no check for this cycle | The callers run `findCycle` first and do not call `layWaves` on a cycle | `brain plan` and `brain check`: `cycle: ...` |

In each of these cases `brain status` shows no line for the waiting row, and its Red line counts the `brain check` finding.

No code follows `supersededBy` from a superseded blocker to the row that replaced it. A resolved replacement row does not free the rows that still name the old row. The status of the waiting row matters too: `frontier` takes `open` rows only, and `layWaves` takes `open` and `in-progress` rows. A `resolved` row behind a superseded blocker gives no finding. The cycle search counts every row: two `resolved` rows that block each other are a cycle.

### Waits outside the three files
Other code works out or stores a wait for a row. This record names each one; other rows of IDEA-016 own the depth.

| Wait | Where | Owner |
|---|---|---|
| "Waiting on the user": each frontier row of type interview, prototype or ideate. A checkpoint row is never in this list | status.ts:29, 130, 272-278 | Row 19 |
| Blocked research: a research record with `status: in-progress`, `outcome: blocked` and `from: IDEA-NNN#NN` is shown against that in-progress row as a red item | status.ts:179-213, schema.ts:176 | Rows 17 and 19 |
| A spec on its plan rows: a spec is finished when no plan row is still to do | effort.ts:65-73 | Row 19 |
| A finished idea on its map rows: a `done` or `specced` idea with an `open` or `in-progress` row is a finding | check.ts:340-346 | Row 17 |
| A wait in prose: the idea template tells the writer to record waits with their retry condition in Notes, and IDEA-008 holds one that crosses files | templates/IDEA.md:23, docs/ideas/IDEA-008-stage-state-and-handoffs.md:26 | Rows 26 and 29 |

### Phases and checkpoints
A phase is the task rows that one checkpoint row names directly in its Blocked by cell. `overlaps` in plan.ts and `checkpointProblems` in check.ts each work it out. The phase has no name in the code: the output names it by the number of its checkpoint row. It has no status, no field and no type in the code.

These facts follow from the two functions:
- Only direct blockers count. A task that blocks a checkpoint through another row is not in the phase.
- Only rows of type `task` count. A checkpoint in a checkpoint's Blocked by cell is not in the phase.
- A task that no checkpoint names is in no phase. A plan with no checkpoint row has no phase; SPEC-002 of the fixture is such a plan.
- A superseded checkpoint gives no phase. A resolved checkpoint still gives one.
- One task can be in the phase of two checkpoints. Nothing in the two functions prevents it.
- `brain plan` uses the phase for one thing: the list of two phases whose tasks share a wave.
- `brain check` uses the phase for one rule: a checkpoint blocks every later task that depends on a task in its phase, and no other task.

A phase has a name in prose only. The fixture plan SPEC-003 calls its phases "Phase one" and "Phase two" in its Overview, and only that sentence ties each name to a checkpoint row. The migrated plan of SPEC-009 holds a table of seven numbered and named phases with a "Depends on" column. No code reads either text.

A review by the user is stored today as a checkpoint row with the status `open`, plus tick boxes in its block of `todo.md`. The code has no "in review" and no "waiting" value for a plan row. For `frontier` and `layWaves` a checkpoint is a row like any other. `brain plan` leaves it out of the task count only, because the main session runs it and not a sub-agent.

Row 17 owns the depth of `brain check`. Row 28 owns phases and checkpoints across all areas.

### Waves, live and fixed
`layWaves` takes the rows that are `open` or `in-progress`. Wave 1 holds each such row whose blockers are all `resolved`. Each later wave holds each row whose blockers are `resolved` or in a wave above. A `resolved` or `superseded` row is in no wave.

DEC-030 names two things. A fixed wave comes from the edges of all rows, done or not. "The live wave" is one wave: "the rows that can start now, as `brain plan` prints it". This record uses "the waves of rows still to do" for all waves of `brain plan`; wave 1 is the nearest thing to DEC-030's live wave. No file under `scripts/` works out fixed waves, and the words "fixed wave" and "live wave" are not in `scripts/`. DEC-030 also decides a worked-out wave status, "open, in progress or done". No code works that out.

A row's wave number changes when an earlier row resolves. In the `spec-mid-build` fixture, row 06 is in wave 2; when row 04 becomes `resolved`, row 06 moves to wave 1.

The stored "Parallel waves" section of a plan must equal what `brain plan` prints above its Cap line. `brain check` compares the two texts after it drops the spaces around lines and cells, the dashes of a delimiter row and runs of blank lines. The section ends at the next H1 or H2, so a line of prose inside it makes it stale. `brain check` reports a missing or a stale section, with three exceptions: a plan with a row problem, a plan with no row, and a migrated plan get no waves finding. A plan with a cycle or a superseded blocker gets that problem text in place of "missing" or "stale".

A change from `open` to `in-progress` does not change the printed waves, because the text leaves statuses out. A change to `resolved` does, so the section must be written again each time a row resolves. `brain plan` does not write it; the instructions do (rows 22 and 28). A plan whose rows are all resolved must store the one line `No open rows: every row is resolved or superseded.` So the plan file of a finished spec keeps no wave of any row.

Waves come from the Blocked by edges of task and checkpoint rows. Phases do not shape the waves. Two phases overlap when one wave holds a task of each.

### What brain plan prints and writes
`brain plan [<spec>] [--json]` writes no file. It prints to stdout on success and to stderr on a problem.

| Case | Output | Exit |
|---|---|---|
| Waves exist | Table `Wave, Rows` with `NN (checkpoint)` marks; `Critical path, N rows: ...`; shared files; phases that share a wave; then `Cap: N tasks at once (<source>).` (`1 task` for a cap of 1) and `Tasks that start at once, by wave:` | 0 |
| No row still to do, or a table with no row | `No open rows: every row is resolved or superseded.` then the Cap line | 0 |
| `--json` | `plan`, `maxParallel`, `maxParallelFrom`, `waves` (each with `wave`, `startAtOnce` and its rows with id, title, type, status, files), `criticalPath`, `sharedFiles`, `overlaps` | 0 |
| No table with the plan's columns, such as a migrated plan | `<plan>: plan: no table with the columns # \| Task \| Type \| Status \| Blocked by \| Result` | 1 |
| Format problem, unknown blocker, unknown replacement, replacement cycle | One line per problem, each with the plan's path first | 1 |
| Blocked-by cycle | `<plan>: cycle: 02 is blocked by 04, 04 by 03, 03 by 02` | 1 |
| Superseded blocker | `<plan>: row NN: blocked by MM, which is superseded by KK` | 1 |
| A problem with `--json` | The same text lines on stderr; stdout is empty | 1 |
| A workspace config it cannot use: a bad cap, a bad `layout` or `paths` value, frontmatter it cannot read | The error text. `readConfig` runs before the spec is chosen, so this exit comes first | 1 |
| No active effort, several efforts, an idea as the active effort, unknown spec ID, an ID that two folders take, no plan file | The reason, then the usage text | 2 |
| Bad usage: an unknown option or two specs | The usage text only | 2 |

The checks run in a fixed order, and the first class that finds a problem ends the run: first the problems of `readRows`, then a blocked-by cycle, then superseded blockers. In `--json` output a row's status is `open` or `in-progress` only, because a wave holds only rows still to do. The JSON holds no Blocked by edges.

### Every literal status value and wait word in this code
The table gives each word with its kind. "Stored" is a value that a file holds. "In memory" is a value that only the code holds. "Printed" is text that a command prints. "Name" is an identifier in the code. "Comment" is text that only a reader of the code sees.

| Literal | Kind | Where | Meaning there |
|---|---|---|---|
| `open` | Stored | schema.ts:210 (pattern), map.ts:20 (type), 88 (problem text), 169; graph.ts:19 | The only status on the frontier |
| `in-progress` | Stored | schema.ts:210, map.ts:20, 88; graph.ts:19 | Still to do, with `open` |
| `resolved` | Stored | schema.ts:210, map.ts:20, 88, 167; graph.ts:89; plan.ts:174 | The only status that ends a wait |
| `superseded by NN` | Stored | schema.ts:210; map.ts:88, 98 | NN is two digits |
| `superseded` | In memory | map.ts:20, 104; graph.ts:110; plan.ts:101; check.ts:225 | The status of a row in memory for the stored form `superseded by NN` |
| `task`, `checkpoint` | Stored | schema.ts:223; plan.ts:99, 101, 178, 211 | Plan row types; a checkpoint is not counted as a task |
| `Task`, `Checkpoint` | Stored | plan.ts:47 | The heading of a block in `todo.md`: `## Task NN:` |
| Empty cell, em dash, hyphen | Stored | map.ts:37 | No blocker, or no result |
| `blocked by` | Printed | map.ts:93, 146; plan.ts:77, 142 | Problem texts |
| `superseded by`, `superseded-by cycle` | Printed | map.ts:150, 160; plan.ts:142 | Problem texts |
| `cycle:` and `is blocked by` | Printed | plan.ts:77 | The text for a blocked-by cycle |
| `Wave`, `Critical path`, `Phases that share a wave` | Printed | plan.ts:176-203 | Output of `brain plan` |
| `No open rows: every row is resolved or superseded.` | Printed | plan.ts:174 | Output when no wave exists |
| `Cap`, `Tasks that start at once, by wave`, `no task` | Printed | plan.ts:228-235 | Output of the cap |
| "can start at once", "when the waves above it are done" | Printed | plan.ts:24-25 | The usage text of `brain plan`; "done" here means resolved |
| `several efforts are not finished`, `no active effort`, `an idea, which has no plan`, `name the spec to plan` | Printed | plan.ts:247-261 | Errors when no spec is named |
| `stillToDo`, `stuck`, `ready`, `pending`, `placed`, `blocker`, `blockers`, `blockedBy`, `supersededBy` | Name | graph.ts:14, 18, 90-94, 107; map.ts:22-24 | Worked-out states and edges; none is stored |
| "still to do", "in progress" (with a space), "done", "drops out" | Comment | graph.ts:4-5, 11, 17 | A resolved row "is done"; a superseded row "drops out" |
| "the rows a row waits on", "can never start", "never reaches a wave", "depends on" | Comment | graph.ts:4, 9, 13, 62 | Wait words |
| "the rows that block it", "block this one", "blocking rows" | Comment | map.ts:4, 23, 165 | Wait words |
| "a current row", "dangling", "clean" | Comment | map.ts:116, 126; plan.ts:9 | A row that is not superseded; a reference to no row; exit 0 |

The code has no stored value `done`, `parked`, `blocked`, `waiting` or `ready` for a row. `blocked` is a stored value of a research record's `outcome` (schema.ts:176), and `brain status` shows it against a row. The fixture's workspace file holds two idea status words in prose, `status: define` and `status: specced` (lines 44 and 55); no code reads that prose.

### Edge cases confirmed by a probe
A probe script fed small tables to `readRows`, `frontier`, `findCycle`, `layWaves` and `parallelWaves` on 2026-11-21. Each result agrees with the source lines in Findings. The probe is repeatable from the repo root with a one-line `bun -e` command, for example:

```
bun -e 'import {readRows,frontier} from "./scripts/workspace/map.ts";import {layWaves} from "./scripts/workspace/graph.ts";const h="| # | Task | Type | Status | Blocked by | Result |\n|---|---|---|---|---|---|\n";const r=readRows("plan",h+"| 01 | a | task | superseded by 03 | — | — |\n| 02 | b | task | open | 01 | — |\n| 03 | c | task | resolved | — | x |\n| 04 | d | task | open | 02 | — |\n").rows;const w=layWaves(r);console.log(frontier(r).map(x=>x.id),w.waves.map(x=>x.map(y=>y.id)),w.stuck.map(s=>s.row.id+"<"+s.blocker.id))'
```

It prints `[] [] [ "02<01" ]`.

| Input | Result |
|---|---|
| Row 01 `in-progress`; row 02 `open`, blocked by 01 | Frontier: empty. Waves: 01, then 02 |
| Row 01 `superseded by 03`; row 02 `open`, blocked by 01; row 03 `resolved`; row 04 `open`, blocked by 02 | Frontier: empty. No wave. Stuck: 02 only. Row 04 is in no wave and is not named |
| Row 01 `superseded by 03`; row 02 `resolved`, blocked by 01; row 03 `open` | No problem and no stuck row. Frontier and wave 1: 03 |
| Row 01 `open`; row 02 `resolved`, blocked by 01; row 03 `open`, blocked by 02 | No problem. Frontier and wave 1: 01 and 03 |
| Row 01 `open`; row 02 `in-progress`, blocked by 01 | No problem. Frontier: 01. Waves: 01, then 02 |
| Row 01 with status `done`; row 02 `open`, blocked by 01; row 03 `open` | One problem, for row 01. `rows`: 02 and 03. Frontier and wave 1: 03. Row 02 is in no wave and is not named |
| Row 01 with type `bug` and status `resolved`; row 02 `open`, blocked by 01 | One problem, for row 01. Row 02 is off the frontier and in no wave |
| Row 01 `open`, blocked by 09; row 02 `open` | One problem: 09 is not a row. Frontier and wave 1: 02 |
| Rows 01 and 02 `open` block each other; row 03 `open` | No problem from `readRows`. Frontier: 03. `findCycle`: 01, 02, 01 |
| Rows 01 and 02 `resolved` block each other | `findCycle`: 01, 02, 01 |
| Status `done`, `superseded`, `in progress`, `Open`, `parked`, `blocked`, or `open` in backticks | Each row is a problem and is left out of `rows` |
| Blocked by `01,03` | Valid: two blockers |
| Blocked by `01, 01` | Valid: the same blocker twice, no problem |
| Blocked by `01 02`, `IDEA-004#03`, `SPEC-003`, `1`, `#01`, `none`, `01 and 02`, an en dash or `--` | Each is the problem `is not a two-digit row number` |
| Blocked by `01,` with a comma at the end | The problem `blocked by "" is not a two-digit row number` |
| `superseded by 4`, `Superseded by 01` | Status problem |
| Rows 01 and 02 supersede each other; row 03 is `superseded by 03` | One problem: `row 01: superseded-by cycle (01 -> 02 -> 01)`. The loop of row 03 is not named, because the search returns the first cycle only |
| Row 01 with status `done`, then a valid row 01 | `rows` is empty. Two problems: the status, then "an earlier row has the same number" |
| Two rows with the number `1` | Two "not two digits" problems, and no "same number" problem |
| Row `00`; row `100` | Row 00 is valid. Row 100 is the problem "not two digits" |
| Row 05 blocked by 02, with row 02 below it | No problem. Frontier: 02. Waves: 02, then 05 |
| Rows 05, 02 and 32 in that order, no blockers | No problem. Frontier: 05, 02, 32, in table order |
| Header `Blocked By`, or a seventh column | No table found |
| Header with no spaces around the pipes; a table with two leading spaces; a table with no delimiter row | Table found |
| A plan table read as a map, or a map table read as a plan | No table found: the second column name differs |
| Two tables with the header | Only the first is read |
| An example table inside an HTML comment or a code fence, above the real table | The example is read, the real table is not, and no problem shows |
| A blank line inside the table | The rows below it are not read |
| A second delimiter row below a data row | The problem `row "---": the number is not two digits` |
| A plan table with a header and no row | No problem. `brain plan` prints `No open rows: every row is resolved or superseded.` |
| A resolved checkpoint; a checkpoint blocked by a checkpoint and a task | The phase holds the task only; the resolved checkpoint's resolved tasks have no wave |
| One task in the Blocked by cell of two checkpoints | Both phases hold it, and the two phases share its wave |
| Row 01 `open`; row 02 `superseded by 05`, blocked by 01; row 03 blocked by 02 | `blockersOf` gives 02 and 01 for row 03 on all rows, and nothing after the superseded row is removed |

#### Probes used in this repair
The Findings cite probes A to H. One command runs them from the repo root:

```
bun -e 'import {readRows,frontier} from "./scripts/workspace/map.ts";import {layWaves,findCycle} from "./scripts/workspace/graph.ts";const h="| # | Task | Type | Status | Blocked by | Result |\n|---|---|---|---|---|---|\n";const p=(n,b)=>{const r=readRows("plan",b.includes("| # |")?b:h+b);const c=findCycle(r.rows);const w=c?{waves:[],stuck:[]}:layWaves(r.rows);console.log(n+": rows "+r.rows.map(x=>x.id)+"; problems "+r.problems.length+"; frontier "+frontier(r.rows).map(x=>x.id)+"; waves "+w.waves.map(v=>v.map(y=>y.id).join("+")).join(" > ")+"; cycle "+(c?c.join(">"):"none"))};p("A","| 01 | a | task | done | — | — |\n| 02 | b | task | open | 01 | — |\n| 03 | c | task | open | — | — |\n");p("B","| 01 | a | task | open | 09 | — |\n| 02 | b | task | open | — | — |\n");p("C","| 01 | a | task | open | 02 | — |\n| 02 | b | task | open | 01 | — |\n| 03 | c | task | open | — | — |\n");p("D","| 01 | a | task | done | — | — |\n| 01 | b | task | open | — | — |\n");p("E","| 00 | a | task | open | — | — |\n| 100 | b | task | open | — | — |\n");p("F","| 05 | a | task | open | 02 | — |\n| 02 | b | task | open | — | — |\n");p("G","<!--\n"+h+"| 01 | example | task | resolved | — | x |\n-->\n\n"+h+"| 01 | real | task | open | — | — |\n");p("H","| 01 | a | task | resolved | 02 | x |\n| 02 | b | task | resolved | 01 | x |\n")'
```

It prints:

```
A: rows 02,03; problems 1; frontier 03; waves 03; cycle none
B: rows 01,02; problems 1; frontier 02; waves 02; cycle none
C: rows 01,02,03; problems 0; frontier 03; waves ; cycle 01>02>01
D: rows ; problems 2; frontier ; waves ; cycle none
E: rows 00; problems 1; frontier 00; waves 00; cycle none
F: rows 05,02; problems 0; frontier 02; waves 02 > 05; cycle none
G: rows 01; problems 0; frontier ; waves ; cycle none
H: rows 01,02; problems 0; frontier ; waves ; cycle 01>02>01
```

| Probe | Case |
|---|---|
| A | The blocker's row has the status `done` and is left out |
| B | The blocker's number is not a row |
| C | Two open rows block each other |
| D | A valid row repeats the number of a row left out for its format |
| E | Row `00` and row `100` |
| F | A Blocked by cell names a row below it |
| G | An example table inside an HTML comment, above the real table |
| H | Two resolved rows block each other |

A run on a scratch copy of the `spec-mid-build` fixture, with row 04 changed from `in-progress` to `done`, gave this. `brain status` exits 0 with `Next step: SPEC-001#05` and `Red: 1 brain check finding: run brain check`. Row 04 is not listed as in progress. Row 06, which waits on row 04, is on no line. `--json` holds the problem text in `red`. `brain plan SPEC-001` and `brain check` print the problem and exit 1. With rows 05 to 07 also changed to unknown words, `brain status` prints `Stage: no active work` and `Red: 4 brain check findings: run brain check`. The scratch copy was deleted after the run.

### Limits
- A Blocked by cell names rows of one file only. The entry must be two digits, and it must be a row number of the same table. A value such as `IDEA-004#03` or `SPEC-003` is a format problem, and the reader then leaves the row out.
- The form `IDEA-NNN#NN` does exist in the code today. The Row type names it in a comment, the `from` field of a decision or research record accepts it and `SPEC-NNN#NN`, and `brain status` builds it for each step and matches a research record's `from` against it. Only the Blocked by cell refuses it.
- The graph functions key each row by its two-digit number (`row.id`). They take the rows of one table. One table holds 100 rows at most.
- A row with a format problem is left out. `brain status` and the effort finder work out the stage, the frontier and the rows in progress from `rows` only. A row with an unknown status word is absent from all three, and each row that waits on it never reaches the frontier or a wave. No line names the waiting row. `brain status` still counts the problem on its Red line. `brain plan` and `brain check` print the problem. Only the effort finder is silent: a plan whose rows still to do are all left out makes its spec "finished".
- A spec with no plan file, no table, no row, or only left-out rows counts as finished. A plan from `brain new-doc SPEC` is in that state until its first row.
- Two of the four readers skip the rows of a `migrated` file, and two do not. `brain check` and `brain status` skip it. The effort finder counts its spec as finished. `brain plan` exits 1 with "no table". Rows 20 and 27 own the old forms.
- A row that waits on a stuck row is in no wave and is not named. Only a row with a direct superseded blocker is named.
- `findCycle` returns one cycle. A second cycle shows after the first is fixed.
- `readRows` makes no finding for a resolved row whose blocker is not resolved, or for an in-progress row whose blocker is not resolved.
- The reader takes the first table with the right header anywhere in the text. It does not skip an HTML comment or a code fence, and it ties the table to no heading.
- The reader checks no order. Rows can be out of number order, numbers can have gaps, and a Blocked by cell can name a later row.
- No code checks the Result of a resolved plan row. A resolved plan row with `—` as its result is valid. A resolved map row must name a DEC or RES file.
- `map.ts` and `graph.ts` have no test file of their own. Tests reach them through `brain plan`, `brain check` and `brain status`, or through a direct call of `checkWorkspace`.
- `brain plan` reads a spec's plan only. With an idea as the active effort it exits 2. No command prints waves for a map, though `layWaves` accepts map rows and `brain check` calls it for a map to find stuck rows.

### What each test and fixture pins
The Findings give one line per test group and per fixture file. In short:

| Subject | Pinned by |
|---|---|
| The exact text of `brain plan` for a chain, a wide plan and a two-phase plan | plan.test.ts:100-194 |
| An in-progress row is in wave 1 beside an open row | plan.test.ts:196-224, 300-323 |
| The line for a plan with no row still to do | plan.test.ts:226-238 |
| The `--json` shape, with each row's status | plan.test.ts:252-331 |
| The cap and the count of tasks that start at once; a checkpoint is no task; no workspace file; a cap of 1; a bad `max_parallel` under a good variable | plan.test.ts:334-493 |
| The live template `skills/setup-brain/workspace.md` in place of the fixture's copy | plan.test.ts:413-424 |
| Cycle text, with and without `--json`; a row that names itself; an unknown blocker; a superseded blocker | plan.test.ts:495-576 |
| Which spec is read; exit 2 cases; bad usage; brain's own usage names `plan` | plan.test.ts:578-665 |
| `brain plan` writes nothing | plan.test.ts:667-676 |
| The frontier, through `brain status --json`: rows 06, 07 and 08 of the idea fixture with row 05 in progress; row 05 of the spec fixture with row 04 in progress | status.test.ts:309-360 |
| Each `brain check` finding is a red item of `brain status` | status.test.ts:374-384, 489-496; check.ts.test.ts:66-70 |
| The row format problems, through `brain check`: seven cases in a map and two in a plan. The first pins that the status `done` is not valid | check.test.ts:476-554 |
| The checkpoint rule | check.test.ts:556-634 |
| The stored section is stale after an edge change, a row resolved or a file change | check.test.ts:680-713 |
| A section with padded table cells is current; a plan with no row needs no section | check.test.ts:715-746 |
| A cycle and a superseded blocker in a plan, through `brain check` | check.test.ts:748-781 |
| A migrated plan and a migrated idea get no row finding | check.test.ts:845-871 |
| The four valid status forms; `done` and bare `superseded` are not valid | schema.test.ts:459-469 |
| A row that a superseded row blocks, in a map, for `open` and `in-progress` | check.ts.test.ts:125-143 |
| A superseded-by loop of one row and of two rows; a replacement chain that ends in a resolved row is accepted | check.ts.test.ts:208-246 |
| Eval dry checks that run the real `brain plan` | build-parallel.test.ts:838-860, plan-three-questions.test.ts:207-219, build-clean-context.test.ts:216-234 |

Rows 17, 19 and 24 own the depth of the tests outside `plan.test.ts`.

### Facts that bear on the decide rows
These are facts from this topic only. Row 31 joins them with the other topics.

| Row | Facts |
|---|---|
| 01 | Today only `resolved` ends a wait, in `frontier` and in `layWaves`. A `superseded` blocker never ends a wait and is an error while the waiting row is still to do; the code does not follow the replacement row. The instructions follow it by hand: interview-me tells the agent to redirect each link to the replacement or to remove it, and an eval case starts in the state that the code refuses. A row has no `parked` status today. A blocker whose row has a format problem never ends a wait |
| 02 | No code in this topic writes a status or a wait. `brain plan` is read-only, and a test pins that |
| 03 | `brain plan` has no notion of a wait between efforts. With no spec named, it picks the active effort and exits 2 when it is an idea, when several efforts are not finished or when none is active. Row 19 owns `brain status` |
| 04 | The Blocked by reader accepts row numbers of the same table only. A wait written in prose is not read by this code. One real wait across files sits in prose for that reason (IDEA-008, Notes) |
| 08 | `brain plan` reads `tasks/plan.md` and `tasks/todo.md` and never `spec.md`. The four fixture specs store `spec` and `sources` only. `effort.ts` works out "finished" from the plan rows with `stillToDo`. A spec with no plan file, no table, no row or only left-out rows is "finished" today. All eight plans of this repo are migrated, so all nine specs here count as finished |
| 09 | A phase exists only as the direct task blockers of a checkpoint row, worked out in two functions. It has no status and no name in the code; the output names it by its checkpoint row. One task can be in two phases, and a task can be in none. Plan prose and one migrated plan name and number phases. DEC-030 speaks of "each task's and phase's detail" |
| 10 | The two-digit row number is fixed in four patterns in three files: `rowNumber` for the row number and each blocker (map.ts:38), the replacement number (map.ts:98 and schema.ts:210) and the block heading of `todo.md` (plan.ts:47). A fifth pattern, the `from` field, holds the form `IDEA-NNN#NN` (schema.ts:110). Edges are checked against the row numbers of the same table. The graph functions key rows by that number. One table holds 100 rows at most. Two eval tests hold their own reader with no digit rule |

A status word that the reader does not know has a cost that bears on the migration (IDEA-014): the row is left out, each row that waits on it stops with no line of its own, and the effort finder can count the spec as finished.

### Contrary evidence
- The code and the fixture call a wave "the frontier once the waves above it are done" (graph.ts:11, fixture README.md:19). The two rules differ: `frontier` takes `open` rows only, and wave 1 also holds `in-progress` rows. For SPEC-001 of the fixture, wave 1 is row 02, which is in-progress, while the frontier of the same rows is empty.
- The instructions state the same equation. `/build` says of `brain plan --json`: "its first wave is every `open` row whose `Blocked by` rows are all `resolved`" (.claude/commands/build.md:58, commands/build.toml:56). The planning skill and the build skill call wave 1 the frontier (skills/planning-and-task-breakdown/SKILL.md:237 and 259, skills/incremental-implementation/SKILL.md:213). `/build` also says "A running task keeps its row `open`, so the frontier still lists it" (.claude/commands/build.md:61). Rows 22 and 28 own the instructions.
- Two tests pin the two rules on one fixture. For `spec-mid-build`, status.test.ts:342-360 pins the frontier as row 05 with row 04 in progress, and plan.test.ts:196-224 pins wave 1 as `04, 05`.
- DEC-030 gives a wave a status that follows from its rows: "open, in progress or done". The code works out no wave status. DEC-030 writes "in progress" with a space and "done", where a row stores `in-progress` and `resolved`. DEC-030 calls one wave "the live wave"; wave 1 of `brain plan` can hold a row that has started.
- The glossary defines a phase as the tasks "that one checkpoint waits on" (GLOSSARY.md:69-70). The code takes the direct task blockers only. A checkpoint also waits on rows through other rows, which `checkpointProblems` holds apart as `before` (check.ts:233).
- The one real plan with a "Parallel waves" section, the migrated plan of SPEC-009, gives its waves status words: "A (running)" and "Then (done)". The section is made by hand, and no code compares it.
- The comment in graph.ts:5 says a superseded row "drops out". That holds for the row itself. As a blocker it does not drop out in `frontier` and `layWaves`: it holds each row that names it. In the checkpoint rule it does drop out, and it cuts the chain of blockers.
- The line `No open rows: every row is resolved or superseded.` uses "open" for "open or in-progress". The line prints only when no row is `open` or `in-progress`. For a table with no row, its second half is false.
- The header comment of plan.ts names exit 1 for "a cycle, an unknown blocker" and a bad cap. Exit 1 also covers every format problem, a missing table, a superseded blocker and each config error.
- The fixture README and plan.test.ts:97 call the fixture's `docs/agents/workspace.md` a copy of setup-brain's template. It is not byte-equal today: `diff` gives seven hunks. Three of them are about status: the fixture names the idea statuses `define` and `specced` only, says "is done" where the template says "is finished", and has no `parked`, no `status: done` and no `result:`.
- The fixture README says a test that changes "a row's status" leaves the stored section stale. That holds for a change to `resolved`. A change between `open` and `in-progress` leaves the printed waves equal.
- The first version of this record said that it found no evidence against the main claims. The lines above replace that sentence. The code facts stand; the evidence is against the wording "in every code path" and "one form only", and it shows that instructions and one decision use the words in a second sense.

### What could not be established
- Practice in consumer repos: whether they hold rows that are `in-progress` with a blocker that is not resolved, or resolved rows with open blockers. The code accepts both; rows 26 and 27 own practice. One real case in this repo exists: at the time of this repair, rows 28, 29 and 30 of the map of IDEA-016 are `in-progress` and blocked by rows 17 to 27, which are `in-progress`. `brain check` has no finding for it. The frontier of that map is empty while wave 1 holds 11 rows. This state changes as the interview goes on.
- Why the reader takes only the first table and why a hyphen counts as an empty cell. No comment or test states the reason.
- The full test suite was not run. Six test files were run: 294 pass. The eval tests named above were read, not run.
- Whether the records of rows 19, 20, 27, 28 and 29 state the facts that this record points to them. They were not read.

### Site coverage
The site index holds 84 sites in 18 files. Each is covered as follows.

| Sites | Covered by |
|---|---|
| map.ts 1-6, 11-34, 36-38, 48-70 with 112-163, 72-110, 165-171 | The findings under "Parsing", "Edges and their checks" and "The frontier" |
| graph.ts 1-15, 17-20, 22-57, 59-81, 83-114, 116-132 | The findings under "Edges and their checks" and "Waves" |
| plan.ts 1-30, 32-44, 46-71, 73-78, 80-94, 96-118, 120-162, 168-207, 209-238, 240-285, 287-332 | The findings under "Phases", "Waves" and "brain plan" |
| plan.test.ts 92-95, 100-172, 183-194, 196-224, 226-238, 252-298, 300-323, 325-331, 334-493, 495-531, 533-551, 553-575, 578-615, 667-676 | The findings under "Tests" |
| Fixture README.md 3, 7-11, 13-15, 17-28, 30-36 | The findings under "Fixture" |
| Fixture docs/agents/workspace.md 8 and 16, 42-49, 51-55 | The findings under "Fixture" |
| The four spec.md files, lines 1-4 | The finding on the spec frontmatter under "Fixture" |
| The four spec.md files, line 8; SPEC-001, SPEC-003 and SPEC-004 plan.md, line 7 | The two findings on fixture prose under "Phases": phase names, and the words for an edge |
| The four plan.md files: the template sentences (12-13), the row table, the Parallel waves section | The findings under "Fixture", and the finding on the Result of a resolved plan row under "brain plan" |
| The four todo.md files: the template sentence (6), the task blocks with their tick boxes, the checkpoint blocks | The findings on `filesByRow`, on the todo files under "Fixture" and on the checkpoint as a review by the user under "Phases" |

### Sites judged not relevant
These sites are prose that no code in this topic reads, and they add no fact on status or waits. The finding on what `brain plan` reads covers them as a group.

| Site | Reason |
|---|---|
| Fixture docs/agents/workspace.md 38 | The rule on a spec's `sources:`. It names no row status and no wait. Rows 17 and 23 own it |
| Fixture docs/agents/workspace.md 39 | The rule that a resolved map row links to its DEC or RES. The fixture has no map. Row 17 owns the check |
| SPEC-002 plan.md, line 41 | A Risks row on parallel work. No code reads it |
| The four plan.md files, the "Open questions" section | Each holds "None". No code under `scripts/workspace/` reads the section |

### Checks
All three checks finished. Each issue was opened at its source again before the record changed.

- Sources check: 14 issues reported (1 blocking, 13 minor); 14 confirmed and fixed. Two details inside confirmed issues were rejected. Issue 2 counts six hunks in the diff of the fixture's workspace file; `diff scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md skills/setup-brain/workspace.md` gives seven. Issue 12 says the eval reader "skips two lines below the header"; `lines.slice(2)` drops the header and one line below it (scripts/evals/__tests__/interview-resume.test.ts:147).
- Coverage check: 13 issues reported (0 blocking, 13 minor); 13 confirmed and fixed. One sentence inside issue 4 was rejected: it says `brain status` "gives no message in any of these cases". `brain status` runs `checkWorkspace` and counts each finding on its Red line (scripts/workspace/status.ts:263-265, 294, 300-302), and a run on a scratch copy of a fixture showed the line. The rest of issue 4 holds: no line names the waiting row.
- Contrary check: 16 issues reported (4 blocking, 12 minor); 16 confirmed and fixed. None rejected.

The checks marked five issues as blocking, on four subjects. Each is fixed above:
- `brain status` does carry the reader's problems as red items, and a row behind a left-out row is held with no line (sources 1, contrary 3).
- `migrated` files and plans with no row were not named, and "each plan stores a copy" was false (contrary 1).
- "One form only" held for three files and not for Brain's code (contrary 2).
- The two-digit rule is in more than one pattern, and a row reference that crosses files exists in `from` (contrary 4).

## Findings

### Parsing
- A map and a plan share one table format and one reader, and the frontier is worked out from the rows each time and never written down. Source: scripts/workspace/map.ts:1-6, checked 2026-11-21.
- `readRows(table, text)` takes `map` or `plan` as the table and returns `rows` and `problems`. Source: scripts/workspace/map.ts:118-124, checked 2026-11-21.
- A row in memory has an id, a title, a type, a status, `supersededBy`, `blockedBy` and a result; the status is one of open, in-progress, resolved and superseded. Source: scripts/workspace/map.ts:14-27, checked 2026-11-21.
- The map header is `#, Question, Type, Status, Blocked by, Result` with the row types interview, prototype, ideate, research and task; the plan header is `#, Task, Type, Status, Blocked by, Result` with the row types task and checkpoint. Source: scripts/workspace/schema.ts:216-225, checked 2026-11-21.
- The reader takes the first table whose header cells equal those six columns exactly, skips a delimiter row only on the line below the header, and stops at the first line that is not a table line. Source: scripts/workspace/map.ts:49-70, checked 2026-11-21.
- A table line is a line that starts with a pipe after the line is trimmed, so an indented table is read; its cells are split on pipes that are not escaped, and each cell is trimmed. Source: scripts/lib/table.ts:7-17, checked 2026-11-21.
- The reader finds the table anywhere in the text: it ties the table to no heading, and it does not skip an HTML comment or a code fence, so an example table above the real one is read in its place with no problem. Source: scripts/workspace/map.ts:49-57 and probe G (the command under "Probes used in this repair" in this record's Answer runs probes A to H), checked 2026-11-21.
- A text with no such table gives no rows and one problem, `<table>: no table with the columns ...`. Source: scripts/workspace/map.ts:120-123, checked 2026-11-21.
- A row is left out of `rows` and named in `problems` when its number is not two digits, its cell count is not six, its type is not a type of the table, its status breaks `rowStatus`, or a Blocked by entry is not two digits. Source: scripts/workspace/map.ts:73-97, checked 2026-11-21.
- `rowStatus` accepts four forms only, case-sensitive: `open`, `in-progress`, `resolved` and `superseded by NN` with a two-digit NN. Source: scripts/workspace/schema.ts:209-210, checked 2026-11-21.
- The problem text for a status that breaks the pattern is `row NN: status "x" is not open, in-progress, resolved or superseded by NN`, so the three status words are literals in the pattern and in this text. Source: scripts/workspace/map.ts:86-90 and scripts/workspace/schema.ts:210, checked 2026-11-21.
- The reader stores `superseded by NN` as status `superseded` plus `supersededBy: "NN"`. Source: scripts/workspace/map.ts:98-105, checked 2026-11-21.
- A Blocked by cell is empty when it is an empty string, an em dash or a hyphen; any other cell is split on commas, each part is trimmed, and each part must match the two-digit pattern `rowNumber`. Source: scripts/workspace/map.ts:36-38 and 91-94, checked 2026-11-21.
- A Result cell that is empty, an em dash or a hyphen is stored as an empty string; any other cell is stored as written. Source: scripts/workspace/map.ts:107, checked 2026-11-21.
- A row whose two-digit number an earlier table line has is left out, with the problem `row NN: an earlier row has the same number`; this holds also when the earlier line was left out for its format, and it does not apply to a number that is not two digits. Source: scripts/workspace/map.ts:128-136 and probe D, checked 2026-11-21.
- The reader collects every two-digit row number, a malformed row's too, so a reference to a malformed row is not reported as dangling. Source: scripts/workspace/map.ts:126-136, checked 2026-11-21.
- The reader collects all row numbers before it checks an edge and checks no order, so a Blocked by cell can name a row below it, and rows need no number order. Source: scripts/workspace/map.ts:126-147 and probe F, checked 2026-11-21.
- The pattern `rowNumber` allows `00` to `99`, and a number is taken once, so one table holds 100 rows at most; a row `100` is the problem "the number is not two digits". Source: scripts/workspace/map.ts:38 and 130-133 and probe E, checked 2026-11-21.
- Four patterns in three files fix a row number at two digits (map.ts:38, map.ts:98, schema.ts:210 and plan.ts:47), and a fifth holds the row part of the form `IDEA-NNN#NN` (schema.ts:110). Source: `grep -rn -F 'd{2}' scripts --include='*.ts' --exclude-dir=__tests__` (the other hits are date patterns), checked 2026-11-21.
- The form `IDEA-NNN#NN` for a row of another file exists in the code: the Row type names it in a comment, the `from` field accepts `IDEA-NNN#NN` and `SPEC-NNN#NN`, and `brain status` builds it for each step and matches a research record's `from` against it. Source: scripts/workspace/map.ts:15, scripts/workspace/schema.ts:107-113 and scripts/workspace/status.ts:106 and 199, checked 2026-11-21.
- `brain status` takes `rows` from `readRows` for the stage, the last step, the frontier and the rows in progress and drops `problems` there, and it returns no row for a migrated file. Source: scripts/workspace/status.ts:93-101 and 112-130, checked 2026-11-21.
- `brain status` runs `checkWorkspace` on each run, counts the findings on its Red line as `N brain check findings: run brain check`, and puts each finding in `red` of `--json`, so a reader problem is a red item. Source: scripts/workspace/status.ts:263-265, 294 and 300-302, checked 2026-11-21.
- On a scratch copy of the `spec-mid-build` fixture with row 04 changed to the status `done`, `brain status` exits 0, names row 05 as the next step, lists no row in progress, has no line for row 06, and prints `Red: 1 brain check finding: run brain check`. Source: `bun scripts/brain.ts status` and `status --json` in a copy of scripts/workspace/__tests__/fixtures/spec-mid-build outside any git repo, checked 2026-11-21.
- The effort finder takes `rows` from `readRows`, drops `problems` with no report, and has no guard for a migrated file. Source: scripts/workspace/effort.ts:65-73, checked 2026-11-21.
- `brain check` runs no row check and no waves check for a file with `migrated` in its frontmatter, and a test pins that for a plan and an idea. Source: scripts/workspace/check.ts:7-9 and 456-475 and scripts/workspace/__tests__/check.test.ts:845-871, checked 2026-11-21.
- The word `migrated` is not in `plan.ts`, `effort.ts`, `map.ts` or `graph.ts`. Source: `grep -n migrated scripts/workspace/plan.ts scripts/workspace/effort.ts scripts/workspace/map.ts scripts/workspace/graph.ts` (no output), checked 2026-11-21.
- All eight plans of this repo hold `migrated: 0.8` at line 3, and SPEC-007 has no `tasks` folder. Source: `grep -n '^migrated' specs/*/tasks/plan.md` (eight hits) and `ls specs/SPEC-007-source-cache` (spec.md only), checked 2026-11-21.
- The effort finder gives `finished: true` for each of SPEC-001 to SPEC-009 of this repo. Source: `bun -e` call of `listEfforts(root, (await readConfig(root)).paths)` from scripts/workspace/effort.ts in the repo root, checked 2026-11-21.

### Edges and their checks
- A Blocked by entry that names no row of the same table gives the problem `row NN: blocked by MM, which is not a row in this map` (or `plan`). Source: scripts/workspace/map.ts:144-147, checked 2026-11-21.
- A `superseded by MM` that names no row of the same table gives the problem `row NN: superseded by MM, which is not a row in this map` (or `plan`). Source: scripts/workspace/map.ts:148-152, checked 2026-11-21.
- The reader runs `findCycle` on the superseded-by links only, and reports `row NN: superseded-by cycle (a -> b -> a)`; it does not check the blocked-by edges for a cycle. Source: scripts/workspace/map.ts:154-161, checked 2026-11-21.
- The graph module states its terms: a row still to do is open or in progress, a resolved row is done, a superseded row drops out, and the `Waves` type holds the waves and the stuck rows. Source: scripts/workspace/graph.ts:1-15, checked 2026-11-21.
- The comments of `graph.ts` and `map.ts` hold these wait words: "the rows a row waits on", "can never start", "never reaches a wave", "depends on", "the rows that block it" and "blocking rows". Source: scripts/workspace/graph.ts:4, 9, 13 and 62 and scripts/workspace/map.ts:4, 23 and 165, checked 2026-11-21.
- `findCycle` returns one cycle of blocked-by edges or null; it walks the rows in table order, depth first, and counts every row and every edge whatever its status. Source: scripts/workspace/graph.ts:22-57, checked 2026-11-21.
- Two `resolved` rows that block each other are a cycle for `findCycle`. Source: probe H, checked 2026-11-21.
- A row that names itself in its Blocked by cell is a cycle of one row, and `brain plan` prints `cycle: 03 is blocked by 03` for it; there is no separate check or message for a row that names itself. Source: scripts/workspace/graph.ts:35-38 and scripts/workspace/__tests__/plan.test.ts:516-531, checked 2026-11-21.
- `cycleProblem` writes a cycle as `cycle: 02 is blocked by 04, 04 by 03, 03 by 02`, and `brain plan` and `brain check` both use it. Source: scripts/workspace/plan.ts:73-78 and scripts/workspace/check.ts:22 and 322, checked 2026-11-21.
- The blocked-by cycle check runs in `parallelWaves` for a plan and in `rowProblems` for a map. Source: scripts/workspace/plan.ts:133-136 and scripts/workspace/check.ts:313-323, checked 2026-11-21.
- `blockersOf` returns the numbers of all rows that block a row, directly or through other rows; it takes a filter that limits the rows a path may step on, leaves out a blocker that names no row, and reads no status. Source: scripts/workspace/graph.ts:59-81, checked 2026-11-21.
- The graph functions key rows by `row.id`, the two-digit number that is local to one table. Source: scripts/workspace/graph.ts:28, 69 and 106, checked 2026-11-21.

### The frontier and which status ends a wait
- A row is still to do when its status is open or in-progress. Source: scripts/workspace/graph.ts:17-20, checked 2026-11-21.
- The frontier is every open row whose blockers all have the status resolved, in table order; an in-progress row is never on it, and a row with a superseded blocker never reaches it. Source: scripts/workspace/map.ts:165-171, checked 2026-11-21.
- `frontier` builds its set of resolved rows from `rows` only, so a row never reaches the frontier when its blocker is an unknown number, a row left out for its format, or a row in a blocked-by cycle with it. Source: scripts/workspace/map.ts:167-169 and probes A, B and C, checked 2026-11-21.
- With row 01 at the status `done`, row 02 open and blocked by 01, and row 03 open, the reader gives one problem for row 01, the frontier and wave 1 hold row 03 only, and row 02 is in no wave and not named as stuck. Source: probe A, checked 2026-11-21.
- `brain status` takes its frontier rows from `frontier`, lists in-progress rows apart from them, and works out a `waiting` list: each frontier row of type interview, prototype or ideate. Source: scripts/workspace/status.ts:29 and 112-130, checked 2026-11-21.
- `brain status` prints the `waiting` list as `Waiting on the user:`. Source: scripts/workspace/status.ts:272-278, checked 2026-11-21.
- `brain status` gives an in-progress row the outcome `blocked` or `partial` when an in-progress research record names the row in `from`, and prints `<file>: IDEA-NNN#NN is blocked; read the record for the retry condition` as a red item. Source: scripts/workspace/status.ts:179-213 and scripts/workspace/schema.ts:176, checked 2026-11-21.
- `layWaves` counts a blocker as passed when its status is resolved or when it sits in an earlier wave; no other status of a blocker ends a wait. Source: scripts/workspace/graph.ts:89-96, checked 2026-11-21.
- `layWaves` names as stuck each row still to do that is left in no wave and has a direct blocker with the status superseded; it does not follow the blocker's `supersededBy` to the replacement row. Source: scripts/workspace/graph.ts:106-113, checked 2026-11-21.
- `layWaves` takes only rows still to do as waiting rows, so a `resolved` row with a superseded blocker is not stuck and gives no problem. Source: scripts/workspace/graph.ts:92 and 107, checked 2026-11-21.
- A row left in no wave without a direct superseded blocker, such as a row that waits on a stuck row, is in neither `waves` nor `stuck`. Source: scripts/workspace/graph.ts:97-113, checked 2026-11-21.
- `brain plan` turns each stuck row into the problem `row NN: blocked by MM, which is superseded by KK` and prints no waves. Source: scripts/workspace/plan.ts:137-145, checked 2026-11-21.
- `brain check` reports the same text for a map, where it calls `layWaves` only when the map has no blocked-by cycle. Source: scripts/workspace/check.ts:314-323, checked 2026-11-21.
- A unit test pins that an open row and an in-progress row of a map are each reported when a superseded row blocks them, although the replacement row is resolved. Source: scripts/workspace/__tests__/check.ts.test.ts:125-143, checked 2026-11-21.
- The interview-me skill tells the agent to repair by hand each blocking link that names a superseded row: redirect it to the replacement, or remove it with the reason in Notes. Source: skills/interview-me/SKILL.md:119, checked 2026-11-21.
- The planning skill says that an exit of 1 from `brain plan` names a cycle, a blocker that is not a row, or a row that a superseded row blocks, and tells the agent to fix those rows. Source: skills/planning-and-task-breakdown/SKILL.md:245, checked 2026-11-21.
- An eval case starts with an open row 02 blocked by row 01, which is `superseded by 03`, and expects that the obsolete link "is repaired using the replacement decision". Source: scripts/evals/interview-cases.ts:99-127, checked 2026-11-21.
- Two eval test files hold their own map reader and their own frontier function; the frontier rule is the same, and the reader is looser: it reads the table under `## Map` only, drops the header and the line below it with no test of that line, takes only an em dash as an empty Blocked by cell, splits on a comma with spaces, and checks no number, type or status. Source: scripts/evals/__tests__/interview-resume.test.ts:138-163 and scripts/evals/__tests__/interview-parallel-research.test.ts:192-217, checked 2026-11-21.
- The effort finder calls a spec finished when no plan row is still to do; it reads no Blocked by edge; a spec with no plan file, no table, no row or only left-out rows is finished. Source: scripts/workspace/effort.ts:65-74, checked 2026-11-21.
- The plan template holds the table header with no row, so a plan from `brain new-doc SPEC` has no row until its first task is written; an earlier record found by a run that such a spec leaves the `brain status` report. Source: scripts/workspace/templates/plan.md:15-18 and docs/research/RES-037-flow-statement.md:55, checked 2026-11-21.
- `brain check` reports a `done` or `specced` idea whose map has an open or in-progress row, as `status: <status>, but row NN is <row status>`. Source: scripts/workspace/check.ts:340-346, checked 2026-11-21.
- The idea template tells the writer to record waits with their retry condition in Notes, and IDEA-008 holds such a wait on a row of another idea, with the reason that a Blocked by cell names rows in its own file only. Source: scripts/workspace/templates/IDEA.md:23 and docs/ideas/IDEA-008-stage-state-and-handoffs.md:26, checked 2026-11-21.
- In the uncommitted map of IDEA-016 at the time of this repair, rows 28, 29 and 30 are in-progress and blocked by rows 17 to 27, which are in-progress; the reader has no problem, the frontier is empty, and `layWaves` gives five waves with rows 17 to 27 in wave 1. Source: `bun -e` call of `readRows("map", ...)`, `frontier` and `layWaves` on docs/ideas/IDEA-016-effort-blocked-by.md, checked 2026-11-21.
- The map of IDEA-015 holds 28 rows numbered up to 32, and `brain check` has no finding for the gaps. Source: `bun -e` call of `readRows("map", ...)` on docs/ideas/IDEA-015-views-mod.md and `bun scripts/brain.ts check`, checked 2026-11-21.

### Phases
- `overlaps` builds one phase for each checkpoint row that is not superseded: the waves of the task rows that the checkpoint names directly in its Blocked by cell. Source: scripts/workspace/plan.ts:96-107, checked 2026-11-21.
- `overlaps` returns each two phases that have a wave in common, named by their two checkpoint row numbers, with the shared wave numbers. Source: scripts/workspace/plan.ts:108-117, checked 2026-11-21.
- `checkpointProblems` uses the same phase: the task rows that a checkpoint's Blocked by cell names directly, after superseded rows are removed. Source: scripts/workspace/check.ts:224-234, checked 2026-11-21.
- The checkpoint rule removes superseded rows before it calls `blockersOf`, so in this path a superseded row cuts the chain of blockers. Source: scripts/workspace/check.ts:225 and a `bun -e` call of `blockersOf` (rows 01 open, 02 `superseded by 05` blocked by 01, 03 blocked by 02: `02, 01` on all rows, nothing with row 02 removed), checked 2026-11-21.
- The checkpoint rule reports a task that a checkpoint blocks though it depends on no task in the phase, and a task that depends on a task in the phase though the checkpoint does not block it. Source: scripts/workspace/check.ts:236-251, checked 2026-11-21.
- `checkpointProblems` holds the rows that a checkpoint waits on through any rows apart from its phase, as `before`. Source: scripts/workspace/check.ts:218-233, checked 2026-11-21.
- A task row that no checkpoint names is in no phase, and a plan with no checkpoint row has no phase; SPEC-002 of the fixture has six task rows and no checkpoint. Source: scripts/workspace/plan.ts:99-107 and scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-002-wide/tasks/plan.md:17-22, checked 2026-11-21.
- In the files of `scripts/workspace/` that are not tests, the word phase is in `plan.ts` and `check.ts` only. Source: `grep -li phase scripts/workspace/*.ts` (prints check.ts and plan.ts only), checked 2026-11-21.
- Outside `scripts/workspace/`, the word phase is in the lifecycle name check, which keeps it for "a plan's tasks that one checkpoint waits on" and retires `Phase:` as the first line of `brain status`. Source: `grep -rli phase scripts --include='*.ts'` (six files) and scripts/lifecycle/names.ts:27-28, 50-58 and 84, checked 2026-11-21.
- The glossary defines a phase as the tasks in a plan that one checkpoint waits on. Source: GLOSSARY.md:69-72, checked 2026-11-21.
- The glossary defines a checkpoint as "A row in a plan that ends a phase: the work stops there until the phase's tasks are verified and reviewed. It blocks every later task that builds on its phase, and no other task". Source: GLOSSARY.md:74-77, checked 2026-11-21.
- The glossary defines the frontier as every open row whose blocking rows are all resolved, worked out each time and never written down. Source: GLOSSARY.md:57-60, checked 2026-11-21.
- The glossary has no entry for wave. Source: `grep -c -i wave GLOSSARY.md` (prints 0), checked 2026-11-21.
- The fixture names phases in prose by order: the Overview of SPEC-003's plan says "Phase one ... checkpoint 03 closes it. Phase two ... checkpoint 06 closes it", its spec says "Each phase ends with a checkpoint row", and the README says "Row 04 needs nothing from phase one"; no code reads these lines. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-003-checkpoints/tasks/plan.md:7, SPEC-003-checkpoints/spec.md:8 and scripts/workspace/__tests__/fixtures/plan-shapes/README.md:10, checked 2026-11-21.
- The fixture prose states an edge with the words "needs", "closes", "starts at once", "run at once" and "block each other", where the table stores a Blocked by cell; no code reads this prose. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:8-11, SPEC-001-linear/spec.md:8 and tasks/plan.md:7, SPEC-002-wide/spec.md:8, SPEC-003-checkpoints/tasks/plan.md:7 and SPEC-004-cycle/spec.md:8 and tasks/plan.md:7, checked 2026-11-21.
- The migrated plan of SPEC-009 holds a table `Phase, Tasks, What it delivers, Depends on` with seven numbered and named phases, where a phase depends on other phases by number; no code reads it. Source: specs/SPEC-009-workspace/tasks/plan.md:27-35, checked 2026-11-21.
- The fixture stores a review by the user as an open checkpoint row named "Ready for review" plus tick boxes in its block, such as "The user reviews the site" and "The user saves a setting on the page". Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md:20 and tasks/todo.md:56-58 and SPEC-003-checkpoints/tasks/todo.md:73-75, checked 2026-11-21.

### Waves
- `layWaves` puts each row still to do in the first wave where each of its blockers is resolved or sits in an earlier wave; rows keep their table order inside a wave. Source: scripts/workspace/graph.ts:83-105, checked 2026-11-21.
- `criticalPath` starts at the first row of the last wave and steps back, each time to the first row in table order that blocks the current row and sits one wave above. Source: scripts/workspace/graph.ts:116-132, checked 2026-11-21.
- `parallelWaves` runs its checks in this order and returns at the first that finds a problem: the problems of `readRows`, a blocked-by cycle, then stuck rows. Source: scripts/workspace/plan.ts:120-145, checked 2026-11-21.
- `parallelWaves` returns the waves with each wave's number and each row's id, title, type, status and files, the critical path as row numbers, the shared files and the overlaps; it returns no Blocked by edge. Source: scripts/workspace/plan.ts:32-44 and 146-161, checked 2026-11-21.
- `filesByRow` reads `todo.md` blocks that open with `## Task NN:` or `## Checkpoint NN:` and collects the list items under `**Files likely touched:**`. Source: scripts/workspace/plan.ts:46-71, checked 2026-11-21.
- `sharedFiles` lists each file that more than one row of a wave touches, in wave order, then path order. Source: scripts/workspace/plan.ts:80-94, checked 2026-11-21.
- No file under `scripts/` holds the words "fixed wave" or "live wave". Source: `grep -rniE "fixed wave|live wave" scripts` (no output), checked 2026-11-21.
- DEC-030, an accepted and uncommitted decision, says that each task's and phase's detail shows its fixed wave from the edges of all rows, done or not; that "the live wave" is "the rows that can start now, as `brain plan` prints it"; that "A wave's status follows from its rows: open, in progress or done"; and that `brain plan` waves hold only rows still to do. Source: docs/decisions/DEC-030-fixed-and-live-waves.md:3 and 15 (working tree), checked 2026-11-21.
- RES-073, an uncommitted record, lists the row states that the code works out from rows: on the frontier, waiting on the user, wave number and on the critical path; and says `brain plan --json` gives the waves of rows still to do with no edges. Source: docs/research/RES-073-view-data.md:25-26, 46 and 95 (working tree), checked 2026-11-21.
- `brain check` compares a plan's "Parallel waves" section with the text `renderParallelWaves` gives now, and reports `Parallel waves: missing` or `Parallel waves: stale`. Source: scripts/workspace/check.ts:394-416, checked 2026-11-21.
- The compare runs after a cleanup of both texts: each line and each cell is trimmed, a delimiter row is written as `---` cells, and runs of blank lines are joined; the section ends at the next H1 or H2. Source: scripts/workspace/check.ts:360-392 and 414, checked 2026-11-21.
- `brain check` gives no waves finding for a plan with a reader problem or with no row, and gives the problems of `brain plan` in place of "missing" or "stale" for a plan with a cycle or a superseded blocker. Source: scripts/workspace/check.ts:399-408, checked 2026-11-21.
- A test pins that the stored section is stale after an edge changes, after row 04 changes from in-progress to resolved, and after a block's files change. Source: scripts/workspace/__tests__/check.test.ts:680-713, checked 2026-11-21.
- Tests pin that a section whose table a formatter padded is still current, and that a plan with no row needs no section. Source: scripts/workspace/__tests__/check.test.ts:715-746, checked 2026-11-21.
- For the `spec-mid-build` plan, the rendered waves are equal when row 04 is `in-progress` or `open`, and differ when row 04 is `resolved`: row 06 then moves from wave 2 to wave 1. Source: `bun -e` run of `parallelWaves` and `renderParallelWaves` on scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md with that one cell replaced, checked 2026-11-21.
- The two plans of the `no-active-work` fixture, whose rows are all resolved, store the one line `No open rows: every row is resolved or superseded.` as their "Parallel waves" section. Source: scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-001-theme-tokens/tasks/plan.md:21-22 and SPEC-002-theme-switch/tasks/plan.md:22-23, checked 2026-11-21.
- Only one plan of this repo has a "Parallel waves" section: the migrated plan of SPEC-009, where the section is made by hand with the wave names "A (running)" and "Then (done)" and task IDs such as T53. Source: `grep -ln '^## Parallel waves' specs/*/tasks/plan.md` (one file) and specs/SPEC-009-workspace/tasks/plan.md:50-61, checked 2026-11-21.
- The `/build` command says that the first wave of `brain plan --json` is every `open` row whose Blocked by rows are all `resolved`, and that a running task keeps its row `open`. Source: .claude/commands/build.md:58 and 61 and commands/build.toml:56, checked 2026-11-21.
- The planning skill says "each wave is the frontier once the waves above it are done" and "The plan's Parallel waves section shows the frontier as wave 1", and the build skill says `brain plan --json` gives "the frontier (its first wave)". Source: skills/planning-and-task-breakdown/SKILL.md:237 and 259 and skills/incremental-implementation/SKILL.md:213, checked 2026-11-21.

### brain plan
- `brain plan [<spec>] [--json]` prints the waves, the critical path, the shared files, the phases that share a wave and the cap; its header says it writes nothing and names the exit codes 0, 1 and 2. Source: scripts/workspace/plan.ts:1-30, checked 2026-11-21.
- The usage text that `brain plan` prints holds the words "can start at once" and "when the waves above it are done". Source: scripts/workspace/plan.ts:22-30, checked 2026-11-21.
- The CLI maps the command `plan` to the `plan` function of this file. Source: scripts/brain.ts:32-37, checked 2026-11-21.
- `renderParallelWaves` writes the table `Wave, Rows`, marks a checkpoint as `NN (checkpoint)`, leaves statuses out, and writes the critical path, the shared files and the phases that share a wave. Source: scripts/workspace/plan.ts:168-207, checked 2026-11-21.
- With no wave, `renderParallelWaves` writes the one line `No open rows: every row is resolved or superseded.`; a plan table with a header and no row gets the same line. Source: scripts/workspace/plan.ts:173-175 and a `bun -e` call of `parallelWaves` and `renderParallelWaves` on the plan header alone, checked 2026-11-21.
- A checkpoint is not counted as a task, because the main session runs it and not a sub-agent: the count of tasks that start at once in a wave is the wave's task rows, up to the cap, and a wave of checkpoints only prints `no task`. Source: scripts/workspace/plan.ts:209-238, checked 2026-11-21.
- With no spec named, `brain plan` reads the active effort; it returns an error when no effort is active, when several efforts are not finished, or when the active effort is an idea. Source: scripts/workspace/plan.ts:240-263, checked 2026-11-21.
- A named spec is a SPEC ID, a spec folder or a path to `tasks/plan.md`; an unknown ID, an ID that two folders take and a folder with no plan are errors. Source: scripts/workspace/plan.ts:264-285, checked 2026-11-21.
- `brain plan` reads `tasks/plan.md` and, when present, `tasks/todo.md` of the chosen folder; it does not read `spec.md`. Source: scripts/workspace/plan.ts:305-308, checked 2026-11-21.
- `brain plan` prints each problem to stderr with the plan's path first and exits 1, with `--json` too; no spec to read prints the reason and the usage text and exits 2; bad usage prints the usage text only and exits 2; a thrown error exits 1. Source: scripts/workspace/plan.ts:287-332, checked 2026-11-21.
- `brain plan` reads the workspace config before it chooses the spec, and `readConfig` throws for a bad cap, a bad `layout` or `paths` value and frontmatter it cannot read, so each of these gives exit 1. Source: scripts/workspace/plan.ts:298-299 and 328-331 and scripts/workspace/config.ts:123-158, checked 2026-11-21.
- The `--json` output adds the plan's path, `maxParallel`, `maxParallelFrom` and `startAtOnce` per wave to the data of `parallelWaves`. Source: scripts/workspace/plan.ts:316-327, checked 2026-11-21.
- In this repo, `brain plan` with no spec exits 2 with `the active effort is IDEA-015, an idea, which has no plan; name the spec to plan`, and `brain plan --foo` prints the usage text with no reason line and exits 2. Source: `bun scripts/brain.ts plan` and `bun scripts/brain.ts plan --foo` in the repo root, checked 2026-11-21.
- In this repo, `brain plan SPEC-009` exits 1 with `specs/SPEC-009-workspace/tasks/plan.md: plan: no table with the columns # | Task | Type | Status | Blocked by | Result`, because that plan is a migrated file with no layout-2 table. Source: `bun scripts/brain.ts plan SPEC-009` in the repo root and specs/SPEC-009-workspace/tasks/plan.md:3, checked 2026-11-21.
- The reader stores a plan row's Result as written, and for a plan `rowProblems` returns the reader's problems or the checkpoint problems only; the check "resolved, but its result names no DEC or RES file" runs for a map only. Source: scripts/workspace/map.ts:107 and scripts/workspace/check.ts:290-299, checked 2026-11-21.

### Tests
- `plan.test.ts` tests `brain plan` at the CLI: each test copies a fixture into a temp git repo, runs the command and asserts the exit code and the printed lines. Source: scripts/workspace/__tests__/plan.test.ts:1-6 and 19-73, checked 2026-11-21.
- Six test files pass at this commit: 294 tests, 667 expect calls, of which `plan.test.ts` holds 42 tests. Source: `bun test scripts/workspace/__tests__/plan.test.ts scripts/workspace/__tests__/check.test.ts scripts/workspace/__tests__/check.ts.test.ts scripts/workspace/__tests__/schema.test.ts scripts/workspace/__tests__/status.test.ts scripts/workspace/__tests__/fixtures.test.ts`, checked 2026-11-21.
- The helper `task` builds an open task row in the shape `--json` prints: id, title, type `task`, status `open` and files. Source: scripts/workspace/__tests__/plan.test.ts:92-95, checked 2026-11-21.
- Three constants hold the exact text `brain plan` must print for the linear, the wide and the checkpoint plan, with the Cap line and the tasks that start at once per wave. Source: scripts/workspace/__tests__/plan.test.ts:100-172, checked 2026-11-21.
- A test asserts that text and exit 0 for SPEC-001, SPEC-002 and SPEC-003 of the plan-shapes fixture. Source: scripts/workspace/__tests__/plan.test.ts:183-194, checked 2026-11-21.
- A test on the `spec-mid-build` fixture pins that, with no spec named, `brain plan` reads the active effort's plan and that wave 1 holds the in-progress row 04 beside the open row 05. Source: scripts/workspace/__tests__/plan.test.ts:196-224 and scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:19-25, checked 2026-11-21.
- A test pins the output for a plan whose rows are all resolved: the line `No open rows: every row is resolved or superseded.` and the Cap line, exit 0. Source: scripts/workspace/__tests__/plan.test.ts:226-238, checked 2026-11-21.
- A test pins that a path to the spec folder or to its plan file reads the same plan as the spec ID. Source: scripts/workspace/__tests__/plan.test.ts:240-249, checked 2026-11-21.
- A test pins the full `--json` value for the wide plan: each wave with its number, each row with id, title, type, status `open` and files, `startAtOnce`, `criticalPath`, `sharedFiles`, `overlaps` and the cap with its source. Source: scripts/workspace/__tests__/plan.test.ts:252-298, checked 2026-11-21.
- A test removes one blocker from a Blocked by cell and pins that `--json` gives the in-progress row 04 the status `in-progress` in wave 1, a new critical path and a shared file. Source: scripts/workspace/__tests__/plan.test.ts:300-323, checked 2026-11-21.
- A test pins that `--json` lists the two phases of SPEC-003 as `{ phases: ["03", "06"], waves: [1] }`. Source: scripts/workspace/__tests__/plan.test.ts:325-331, checked 2026-11-21.
- A test group pins the cap: the default 8 with no key and with no workspace file, `max_parallel`, `BRAIN_MAX_PARALLEL` over it, an empty variable as unset, the count of tasks that start at once, a wave of one checkpoint that starts no task, `Cap: 1 task at once` for a cap of 1, and exit 1 for a bad value, a bad `max_parallel` under a good variable too. Source: scripts/workspace/__tests__/plan.test.ts:334-493, checked 2026-11-21.
- One test of that group writes the live template `skills/setup-brain/workspace.md` over the fixture's copy and asserts the full output, so a change to the template's frontmatter reaches this test. Source: scripts/workspace/__tests__/plan.test.ts:413-424, checked 2026-11-21.
- Tests pin that a cycle exits 1 with the text `cycle: 02 is blocked by 04, 04 by 03, 03 by 02`, that with `--json` stdout is empty and the text is on stderr, and that a row blocked by itself is a cycle of one row. Source: scripts/workspace/__tests__/plan.test.ts:495-531, checked 2026-11-21.
- A test pins that an unknown blocker exits 1 with `row 03: blocked by 09, which is not a row in this plan`. Source: scripts/workspace/__tests__/plan.test.ts:533-551, checked 2026-11-21.
- A test changes row 02 to `superseded by 05`, adds row 05, and pins exit 1 with one line for each row that still names row 02, the checkpoint too. Source: scripts/workspace/__tests__/plan.test.ts:553-575, checked 2026-11-21.
- A test group pins which spec is read: the spec the git branch names; exit 2 when several efforts are not finished, when the active effort is an idea, when none is active, for an unknown spec ID, for an ID that two folders take, for a path with no plan and for bad usage; and that brain's own usage names the `plan` command. Source: scripts/workspace/__tests__/plan.test.ts:578-665, checked 2026-11-21.
- A test pins that `brain plan` is read-only: one hash over every file of the repo, `.git` included, is the same before and after four kinds of run. Source: scripts/workspace/__tests__/plan.test.ts:667-676, checked 2026-11-21.
- No test file imports `map.ts` or `graph.ts`; the tests reach them through the CLI, or through a direct call of `checkWorkspace` in `check.ts.test.ts`. Source: `grep -rnE "/(map|graph)\"" scripts --include='*.ts'` (hits in status.ts, effort.ts, map.ts, graph.ts, plan.ts and check.ts only) and scripts/workspace/__tests__/check.ts.test.ts:5 and 22-25, checked 2026-11-21.
- Two `brain status --json` tests pin the frontier: rows 06, 07 and 08 of the idea fixture with row 05 in progress and rows 06 and 08 waiting on the user; and row 05 of the `spec-mid-build` plan with row 04 in progress, where row 06, which waits on row 04, is absent. Source: scripts/workspace/__tests__/status.test.ts:309-360, checked 2026-11-21.
- The README of the idea fixture gives each row's place on the frontier with the reason, such as row 09: "no: 05 is in progress and 06 is open". Source: scripts/workspace/__tests__/fixtures/idea-mid-define/README.md:16-27, checked 2026-11-21.
- Tests pin that each `brain check` finding is a red item of `brain status`: in `red` of `--json`, and as `Red: 1 brain check finding: run brain check`. Source: scripts/workspace/__tests__/status.test.ts:374-384 and 489-496 and scripts/workspace/__tests__/check.ts.test.ts:66-70, checked 2026-11-21.
- A `brain check` test group pins nine reader problems: in a map, a status `done` (`row 08: status "done" is not open, in-progress, resolved or superseded by NN`), a type that is not a map type, a number that is not two digits, a missing cell, a blocked-by that is not a row number, a repeated number and a header that is not the map's; in a plan, the type `bug` and a header that is not the plan's. Source: scripts/workspace/__tests__/check.test.ts:476-554, checked 2026-11-21.
- A unit test pins the four valid row status forms, and that `done`, `superseded`, `superseded by 3` and `superseded by DEC-031` are not valid. Source: scripts/workspace/__tests__/schema.test.ts:459-469, checked 2026-11-21.
- A unit test pins the problem `row 01: superseded-by cycle (...)` for a row that replaces itself and for two rows that replace each other, and a second pins that a replacement chain that ends in a resolved row gives no finding. Source: scripts/workspace/__tests__/check.ts.test.ts:208-246, checked 2026-11-21.
- `brain check` tests on the plan-shapes fixture pin the checkpoint rule's two findings and the cycle finding in the words of `brain plan`. Source: scripts/workspace/__tests__/check.test.ts:556-634 and 748-758, checked 2026-11-21.
- A `brain check` test pins the superseded-blocker finding for a plan: `row 07: blocked by 05, which is superseded by 08`. Source: scripts/workspace/__tests__/check.test.ts:760-781, checked 2026-11-21.
- Three eval tests run the real `brain plan`: one pins the `--json` waves of its scaffold, and two write the "Parallel waves" section from the lines above the Cap line. Source: scripts/evals/__tests__/build-parallel.test.ts:838-860, scripts/evals/__tests__/plan-three-questions.test.ts:207-219 and scripts/evals/__tests__/build-clean-context.test.ts:216-234, checked 2026-11-21.

### Fixture
- The plan-shapes fixture is a layout-2 repo with four specs and no idea; each spec.md has `sources: []` because only the plan and the task blocks matter. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:3, checked 2026-11-21.
- The README lists the four shapes: a chain with one resolved and one in-progress row, a wide plan with four tasks behind one resolved row, two phases each closed by a checkpoint row, and a cycle of rows 02, 03 and 04. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:7-11, checked 2026-11-21.
- The README says the plans of SPEC-001 to SPEC-003 each store the "Parallel waves" lines that `brain plan` prints above its Cap line, that SPEC-004 stores none, and that all four specs are efforts that are not finished. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:13-15, checked 2026-11-21.
- The README defines a wave as the frontier once the waves above it are done, the critical path as the longest chain of rows still to do, and a phase as the tasks its checkpoint row is blocked by, and gives the expected result per spec. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:17-28, checked 2026-11-21.
- The README says `brain check` must report one finding, the cycle in the words of `brain plan`, no checkpoint finding and no Parallel waves finding. Source: scripts/workspace/__tests__/fixtures/plan-shapes/README.md:30-36, checked 2026-11-21.
- The fixture's workspace file sets `max_parallel: 8` and describes it as the most sub-agents at once, 8 when absent, with `BRAIN_MAX_PARALLEL` over it; `readConfig` reads only the frontmatter of this file. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md:8 and 16 and scripts/workspace/config.ts:123-155, checked 2026-11-21.
- The fixture's workspace file says that rows have two-digit numbers local to their file and tells the reader to cite a row as `IDEA-004#03`. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md:36, checked 2026-11-21.
- The fixture's workspace file states the active effort rule (an idea with `status: define`, or a spec whose plan has a row that is open or in-progress; else "ask the user") and the frontier rule (every open row whose Blocked by rows are all resolved), and says "An idea with `status: specced` is done". Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md:42-49 and 51-55, checked 2026-11-21.
- The fixture's workspace file differs from setup-brain's template in seven hunks: `specs: docs/specs`; no "Session state" section; no sentence on `specced`, `done` and `parked` ideas; older text for steps 1 and 4 of the selection order; older Resume lines with "is done" and no line for `status: done` with `result:`; and no "Background work" section. Source: `diff scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md skills/setup-brain/workspace.md`, checked 2026-11-21.
- Each of the four spec.md files stores `spec` and `sources: []` in its frontmatter and no status field. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/spec.md:1-4 (the same lines in SPEC-002-wide, SPEC-003-checkpoints and SPEC-004-cycle), checked 2026-11-21.
- Each of the four plans says above its table that the table holds the only status of each task and that "A resolved row's result is the commit SHA, then the verification command and its outcome", and each todo file says the row in plan.md holds the status and the rows that block it. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md:13 and tasks/todo.md:6 (the same lines in the other three specs), checked 2026-11-21.
- SPEC-001's table holds row 01 resolved, row 02 in-progress and blocked by 01, row 03 open and blocked by 02, and checkpoint 04 open and blocked by 01, 02 and 03; its stored section puts the in-progress row 02 in wave 1. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md:15-33, checked 2026-11-21.
- SPEC-002's table holds row 01 resolved, rows 02 to 05 open and each blocked by 01, and row 06 open and blocked by all four; it has no checkpoint row, and its stored section names two shared files in wave 1. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-002-wide/tasks/plan.md:15-36, checked 2026-11-21.
- SPEC-003's table holds six open rows: checkpoint 03 blocked by 01 and 02, row 05 blocked by 01, 03 and 04, and checkpoint 06 blocked by 04 and 05; its stored section has five waves and the line `03 and 06: wave 1`. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-003-checkpoints/tasks/plan.md:15-38, checked 2026-11-21.
- SPEC-004's table holds four open rows where row 02 is blocked by 01 and 04, row 03 by 02 and row 04 by 03; the plan stores no "Parallel waves" section. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-004-cycle/tasks/plan.md:15-28, checked 2026-11-21.
- The todo files hold one block per row under `## Task NN:` or `## Checkpoint NN:`; the ticks follow the row status (ticked for resolved row 01 of SPEC-001 and SPEC-002, open elsewhere), and two checkpoint blocks hold a step for the user. Source: scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/todo.md:8-58, SPEC-002-wide/tasks/todo.md:8-102, SPEC-003-checkpoints/tasks/todo.md:8-75 and SPEC-004-cycle/tasks/todo.md:8-66, checked 2026-11-21.
- No code under `scripts/workspace/` reads a tick box. Source: `grep -n '\[x\]\|\[ \]\|- \[' scripts/workspace/*.ts` (no output), checked 2026-11-21.
- `brain plan` on the fixture's SPEC-001 and SPEC-003 folders prints, above its Cap line, the same lines that each plan stores, and on SPEC-004 it exits 1 with the cycle text. Source: `bun scripts/brain.ts plan scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear` (and the same command for SPEC-003-checkpoints and SPEC-004-cycle), checked 2026-11-21.
- `fixtures.test.ts` holds the fixtures idea-mid-define, spec-mid-build, no-active-work and layout-0.8 to their contract; plan-shapes is not in its list. Source: scripts/workspace/__tests__/fixtures.test.ts:19-25, checked 2026-11-21.

## Follow-ups
- Does the glossary get entries for wave and critical path? The code, the fixture and DEC-030 use both words, and GLOSSARY.md defines neither.
- Is the plan-shapes copy of `docs/agents/workspace.md` to be brought back in step with setup-brain's template, which the fixture README says it copies? Its status text is older than the template's.
- Do the instructions keep the sentence "its first wave is every `open` row whose Blocked by rows are all `resolved`"? Wave 1 of `brain plan` also holds `in-progress` rows.

## Next action
None.
