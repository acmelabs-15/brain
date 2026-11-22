---
id: RES-088
status: resolved # in-progress | resolved
kind: research
from: IDEA-016#19 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-21
outcome: answered
---
# RES-088: How Brain's code works out and reports state

## Question
How does Brain's code work out and report state: brain status, the stage, effort selection, "waiting on the user", red items and the session-start hook?

## Answer
Sufficient answer, with a source per claim:

1. How `brain status` works out each of its five lines and each field of its JSON form.
2. How the stage (define, build, finished) is derived for an idea and for a spec, which stores no status.
3. How the active effort is selected (branch name, unfinished efforts).
4. What "waiting on the user" and "red" contain.
5. What the report cannot know today, such as a wait between efforts.
6. What the session-start hook prints, and on which events.
7. What remains of the old STATUS.md handling.
8. Every literal status value or wait word in this code.
9. What each test and fixture pins.
10. What could not be established, and contrary evidence.

This serves IDEA-016's decide rows 01, 02, 03, 04, 08, 09 and 10, through the synthesis row 31.

**In short.** `brain status` is read-only. Four of its lines (Stage, Last step, Next step, Waiting on the user) and the effort keys of its JSON come from three stored things: an idea's `status:`, the rows of one map or plan, and the frontmatter of research records. Those four lines read no wait between efforts, no spec status, no phase, no decision record and no prose. The Red line and `red[]` are different: they carry every finding of the workspace check, and that check reads every workspace file (section 5).

The stage is the effort kind: `define` for an idea, `build` for a spec, `finished` when a finished effort is named by the git branch. A spec is `build` only while a plan row is open or in progress. "Waiting on the user" holds rows that are ready to ask, not rows that wait. The session-start hook is Claude Code only. It prints the same text on every session source and passes on only the five lines.

This record was repaired on 2026-11-21 from three independent checks. The sub-heading "Checks" at the end of this Answer gives the result of each.

Code read: `scripts/workspace/status.ts` (330 lines), `scripts/workspace/effort.ts` (105), `scripts/hooks/session-start.ts` (131), `scripts/hooks/claude-code.json`, `scripts/brain.ts`, the parts of `scripts/workspace/check.ts` and `scripts/workspace/map.ts` that the report uses, the four test files and the three fixtures. The four test files pass: 107 tests, on Bun 1.4.4, inside the `~1.4.0` range of `package.json`. `scripts/` has no uncommitted change at commit `dfcab49b`.

### 1. The five lines
`brain status` prints the `report` list, one line per entry. `brain status --json` prints the state object; section 2 says which rows it holds. Both exit 0 when a report exists, also when an item is red.

| Line | What it holds | Worked out from |
|---|---|---|
| `Stage:` | For each reported effort: `<stage> (<ID>: <title>)`, joined by `; `. With no reported effort: `no active work` | The effort kind and its `finished` flag; the title from the H1 of the idea or of `spec.md` |
| `Last step:` | For each reported effort: the `resolved` row with the highest row number, as `<ID>#<NN>: <title> (<result>)`. `none` when no reported effort has a resolved row | The rows of the idea's map or the spec's plan. Rows hold no date, so "last" means the highest number |
| `Next step:` | For each reported effort: the first frontier row only; then `in progress: ` with each in-progress row that has no research outcome; then `partial: <row> (<RES>)` or `blocked: <row> (<RES>)` for each in-progress row with such a research record. `none` when all are empty | The frontier (every `open` row whose blockers are all `resolved`, in table order), the `in-progress` rows, and research records |
| `Red:` | Up to three parts: `no docs/agents/workspace.md: run setup-brain`; `<N> brain check finding(s): run brain check`; `<N> blocked research record(s): read brain status --json`. `none` when there is none | The config file's absence, the findings of the workspace check, and blocked research records |
| `Waiting on the user:` | Every frontier row of type `interview`, `prototype` or `ideate`, of every reported effort, joined by `; `. `none` when there is none | The frontier and the row type |

One case prints one line, not five: the repo has no `docs/agents/workspace.md` and holds layout-1 files. The line says to run setup-brain to migrate and names the files found.

Edge rules of the line formats:
- With an empty title, the stage part is `<stage> (<ID>)`, and a step is its ref only (probe R14).
- The `Red:` line gives counts only. The full text of each red item is in `red[]`.
- The repo root is the top of the git work tree. Outside git it is the current folder, so a run from a subfolder finds no `workspace.md` there (probe R13).

### 2. The JSON form

| Key | Value | Notes |
|---|---|---|
| `migrate` | `null`, or the list of layout-1 files found | A list only in the one-line case |
| `report` | The five lines, or the one migrate line | The only key the hook reads |
| `efforts[]` | One state per reported effort | Not every effort: the effort the branch names, else each effort that is not finished |
| `efforts[].id`, `.kind`, `.title`, `.path` | `IDEA-001` or `SPEC-001`; `idea` or `spec`; the H1 title; the idea file or the spec folder | A spec's title comes from `spec.md`, else from `plan.md` |
| `efforts[].stage` | `define`, `build` or `finished` | See section 3 |
| `efforts[].lastStep` | One step, or `null` | The highest-numbered `resolved` row |
| `efforts[].frontier` | Every frontier row, in table order | The text form shows only the first |
| `efforts[].inProgress` | Every row with status `in-progress` | A step here can carry `outcome` and `record` |
| `efforts[].waiting` | The frontier rows of a decide type | Same rows as the fifth line |
| step | `ref` (`IDEA-001#06`), `title`, `type`, `status`, `result`; `outcome` (`partial` or `blocked`) and `record` only on an in-progress row with such a record | No `blockedBy` and no `supersededBy`. `status` is `open`, `in-progress` or `resolved`; no step is `superseded`. `record` is the record's frontmatter `id` as text, not the ID in the file name; a record with no `id` gives the text `undefined` (probe R7b) |
| `ideas[]` | Every idea file: `id`, `title`, `status`, `path`, `specs` | `status` is the frontmatter value as written, any string, or `null`. `specs` lists the specs whose `sources:` name the idea. There is no `result` key |
| `red[]` | One full line per red item | The text form gives counts only |

No key lists every spec. A spec is in the JSON only as a reported effort, or as an ID in an idea's `specs`.

No key lists every row, and no key counts the rows. A step exists only for three groups of rows: the one resolved row with the highest number, the frontier rows, and the in-progress rows. These rows are in no key and in no line:
- A resolved row that is not the last.
- A superseded row.
- An open row with a blocker that is not resolved.

On the idea-mid-define fixture the map has ten rows, and the JSON names five: 04, 05, 06, 07 and 08 (probe R12). Rows 09 and 10 are open and wait on rows 05 and 06. The code knows that wait (`Row.blockedBy`) and reports it nowhere.

### 3. The stage
- An idea gets `define`. A spec gets `build`. An effort with `finished: true` gets `finished`.
- An idea is finished unless its frontmatter `status` is exactly `define`. So `specced`, `done`, `parked`, any other value, a missing status and frontmatter that cannot be read all give `finished`.
- A spec is finished when its `tasks/plan.md` has no row that is `open` or `in-progress`. A spec with no plan file, or with no plan table, is finished. The code reads no frontmatter of the spec for this. A spec's schema has only `spec` and `sources`, so a `status:` key in `spec.md` is a `brain check` finding today.
- So a spec is `build` only while a plan row is open or in progress. Before its first row and after its last row it is finished.
- **A new spec.** `brain new-doc SPEC` writes a plan whose table has the header and no row. The spec is finished at once. With its idea already `specced`, the report says `Stage: no active work` and `Red: none` (probes R3 and R3b). On a branch that names the new spec it says `Stage: finished` (probe R3c). A missing plan file or a missing table gives a check finding; the empty table gives none. The glossary has a `plan` stage, and the code has no word for the time between a spec and its plan.
- **The `migrated:` key.** Two readers treat it in two ways. `effort.ts` does not read it: it sets `finished` from the idea's `status`, or from the rows of the plan text. `status.ts` reads it: a file with the key gives no rows to the report. Section 6 gives the cases where the two disagree.
- An idea's stage comes from its frontmatter `status`, not from its rows. An idea in `define` whose rows are all resolved stays `define` with `Next step: none` (probe P7).
- A finished effort is in the report only when exactly one effort fits the branch name, and that effort is the finished one. Its stage is then `finished`, and its rows still give the other lines.
- The glossary lists six stages: define, plan, build, verify, review, ship. The code gives three words. `finished` is not a glossary stage, and no code works out plan, verify, review or ship.

### 4. Effort selection
1. `listEfforts` lists every `IDEA-NNN-<slug>.md` in the ideas folder and every `SPEC-NNN-<slug>` folder in the specs folder. Ideas come first, each kind in name order.
2. The branch is read with `git symbolic-ref --quiet --short HEAD`. A detached head, or no git, gives no branch.
3. The last part of the branch name, after any `/`, is compared with each effort's name, ID and slug. The match is exact and keeps the case: `feat/IDEA-002` names the idea, and `feat/idea-002` names none (probes R8 and R8b). Exactly one match gives that effort, finished or not.
4. Else, exactly one effort that is not finished gives that effort.
5. Else the answer is `none`, or `several` with every effort that is not finished.

`brain status` reports the one effort, or all of the several, or none. It asks no question and takes no effort name. `brain plan` uses the same function and stops with an error on `several` (row 18).

Two real runs in this repo, on 2026-11-21:

| Run | Reported efforts | Size |
|---|---|---|
| This worktree, branch `feat/views-mod` | IDEA-015 only, because its slug is `views-mod`. Ten ideas have `status: define` | `Next step:` 521 bytes; hook text 1,919 bytes |
| A copy of `docs/` and `specs/` in a new git repo, whose branch names no effort | All ten ideas in define. No spec: eight specs have a plan with no plan table, and SPEC-007 has no plan file | `Next step:` 3,556 bytes; `Waiting on the user:` 1,194 bytes and 12 rows; hook text 6,703 bytes, with no cut |

The sizes of the second run are a reading at one time of day. The first reading gave 3,078 and 6,225 bytes. IDEA-016 then got more rows in progress, and the reading of the repair gave 3,556 and 6,703 bytes. The other values did not change.

### 5. "Waiting on the user" and "red"
"Waiting on the user" holds only the decide rows on the frontier of a reported effort. A frontier row is a row that is ready. So the line holds the questions that are ready to ask, and no row that waits.

It is too wide in one case. A wait on another effort cannot be a blocker, because a `Blocked by` cell takes only row numbers of the same table. A decide row with such a wait has an empty cell, so it is on the frontier. The live case is IDEA-015#32: its idea says in prose that the row waits on IDEA-016#08. The report in this worktree gives row 32 as the first part of `Next step:` and as the only row of `Waiting on the user:`.

It leaves out:
- A research row or a do row on the frontier, and every plan row: a plan has only the types `task` and `checkpoint`. The protocol calls a user-run step a do row, so a step that the user must run is never in this line.
- A checkpoint row on the frontier, also when its block in `todo.md` holds a user review (probe P11).
- A decide row with status `in-progress`. It is not on the frontier, so it moves to `in progress:` in the `Next step:` line (probe R9). The live case is IDEA-015#08, a prototype that waits on the user's review.
- A research row whose record came back and waits on the user's review. The live case is IDEA-015#29: it shows as `in progress:`.
- An open decide row that waits on another row of the same table.
- An intent that the user has not confirmed, and a decision record with `status: proposed`. Neither is in this line. Each can be a red finding (see below).
- A blocked research record that needs the user. It goes to `Red:` and to `Next step:`.
- The choice between several efforts that are not finished.

"Red" holds three kinds of item:
- No `docs/agents/workspace.md`. The report then uses the default folders.
- Each finding of the workspace check. The text line gives the count; `red[]` gives each as `<path>: <problem>`.
- Each research record with `status: in-progress` and `outcome: blocked` whose `from:` is an in-progress row of a reported effort. `red[]` gets `<file>: <row> is blocked; read the record for the retry condition`.

The check findings need care, because they are the one way that other files reach the report. `brain status` runs the full workspace check on every report. The check loads every file in the four workspace folders: decision records, research records, ideas, and each spec's `spec.md`, `tasks/plan.md` and `tasks/todo.md`. Row 17 owns its rules. These rules read what the other four lines do not:

| What the check reads | Finding that becomes red | Proof |
|---|---|---|
| The `status` of a decision record that a resolved map row names | `row NN: DEC-NNN is proposed and cannot resolve a map row` | Probe R4; a test pins it in `red[]` |
| The Intent section of an idea with `status: specced` or `done` | `status: specced, but Intent has no confirmation` | Probe R5 |
| The "Not yet specified" section of such an idea | `status: specced, but Not yet specified still holds fog` | Probe R5b |
| The rows of such an idea's map | `status: specced, but row NN is open` | Code only |
| The phase of each checkpoint in a plan (the tasks that block it) | `row NN: depends on NN, in the phase of checkpoint NN, but NN does not block it` | Code only |
| A plan's "Parallel waves" section and the spec's `tasks/todo.md` | `Parallel waves: stale; …` | Probes R11 and R11b |
| Every frontmatter key of every workspace file | `blocked-by: not a field of a IDEA file` | Probes P1 and P3 |

An idea in `define` gets no finding for an intent without a confirmation or for fog (probe R5c). A file with a `migrated:` key gets none of the row, idea and waves rules.

Three more facts about red:
- `red[]` gives each path from the repo root. `brain check` prints each path from the current folder. From `docs/decisions`, the same finding is `notes.md: …` in the check and `docs/decisions/notes.md: …` in `red[]` (probe R10).
- `brain check` prints one line that is in no key of the status: the count of migrated decisions with no kind. In this repo the check prints "3 migrated decisions have no kind: DEC-001, DEC-002, DEC-004", and the report says `Red: none`.
- Two research records can name the same in-progress row. The record with the later file name sets `outcome` and `record`. Each blocked record adds one red line. So one row can show as `partial:` in `Next step:` while `Red:` counts one blocked record (probe R7).

A record with `outcome: partial` changes the `Next step:` line and is not red. A blocked record is not shown at all when its `from:` names an open row, the effort itself, or a row of an effort that is not reported.

### 6. What the report cannot know today
- **A wait between efforts.** No code path reads one. Selection uses the branch name, an idea's `status` and the rows of one file. A blocker is a two-digit row number of the same table. A `blocked-by:` key in an idea or a spec is a `brain check` finding today, so it shows as one red finding and changes nothing else (probe P1, P3).
- **A wait in prose.** The code of `status.ts`, `effort.ts` and `session-start.ts` reads no Notes, no Intent, no "Not yet specified", no Follow-ups and no Open Questions. IDEA-016's own wait on IDEA-014 is prose under its Notes, and it is in no key of the JSON. IDEA-015#32's wait on IDEA-016#08 is prose too, and the report shows that row as ready (section 5). The one exception is the Red line: the check reads the Intent and "Not yet specified" sections of a specced or done idea (section 5).
- **A wait between rows.** The code reads it and shows it nowhere. An open row with a blocker that is not resolved is in no line and in no JSON key, and a step carries no blockers (section 2). A row behind a superseded row never reaches the frontier; the workspace check names it, and the report shows only the count (probe P6).
- **A spec's stored status.** There is none. A spec is `build` only while a plan row is open or in progress. Before the first row and after the last it is `finished` and out of the report.
- **The time between a spec and its plan.** A new spec with an empty plan table is finished, with nothing red (section 3). The report cannot show that the spec waits for its plan.
- **A migrated file's state.** The two readers disagree on `migrated:` (section 3). This repo's nine specs are finished because eight plans have no plan table and SPEC-007 has no plan file, not because of the key. Three cases follow from the code and from probes:
  - A plan with `migrated:` and a current plan table with an open row: the spec is not finished, so the report names it with `Stage: build`, `Last step: none` and `Next step: none`. `brain check` gives no finding (probe R1). RES-087 saw the same (its F38).
  - An idea with `migrated:` and `status: define`: `Stage: define` and no rows, also when the file has a map. No finding (probe R2).
  - An idea with `migrated:` and no status, as migration writes it: finished, with `status: null` in `ideas[]`. No finding (probe R2b).
- **Phases.** The code of `status.ts` has no word for a phase. A checkpoint is only a row type in a step's `type`. The check works out each checkpoint's phase, and a wrong edge is a red finding (section 5). The fixture plan stores a "Parallel waves" section and the line "Phases that share a wave: none."; the report reads neither. In that fixture, wave 1 holds rows 04 and 05, and the frontier holds row 05 only, because row 04 is in progress. Row 18 owns that difference.
- **An idea's `result`.** The report does not read it. The link from an idea to its spec is worked out from each spec's `sources:`. A `done` idea with `result: DEC-002` shows only its `status` in `ideas[]`.
- **Dates and owners.** A row has no date and no owner. "Last step" is the highest row number. An in-progress row stays "in progress" whatever happened to its record: IDEA-015#29 shows as in progress while RES-077, its record, is resolved.
- **Efforts that are not reported.** When the branch names an effort, the other efforts appear only in `ideas[]`, with a status and no rows. A spec that is not reported appears only as an ID in an idea's `specs` list, when its `sources:` name that idea.
- **A parked idea's reason, and other work trees.** The report reads one work tree's files and no Notes.
- **Values of DEC-051.** Today's code knows none of the new values.
  - An idea with `status: in-progress` is finished: the report says `no active work` and counts one finding (probe P2).
  - A row with status `done` breaks the row format, so it is left out of the rows. It cannot be the last step. A row that it blocks never reaches the frontier. Each such row is one check finding. With rows 01 to 03 of the fixture plan set to `done`, the report says `Last step: none`, shows only the row in progress, and counts three findings (probe R6).
  - A plan whose rows are all `done` has no rows, so the spec is finished: `Stage: no active work` and seven findings (probe R6b).

### 7. The session-start hook
- **Where.** Claude Code only. `.claude-plugin/plugin.json` names `scripts/hooks/claude-code.json`. The Codex manifest and the Gemini extension file name no hook. `scripts/lifecycle/hooks.ts` states the rule and makes a `hooks/hooks.json` or a root `hooks.json` a lifecycle finding, and a test pins that Brain ships neither.
- **One hook only.** The repo holds a second script with a like name, `hooks/session-start.sh`. It is a vendored file, its header says "Not wired by the plugin", and it prints a skill text and no status. `scripts/hooks/session-start.ts` is the only session-start hook that runs.
- **Other hosts.** With no hook, the agent runs the command itself: step 4 of the protocol and of each host copy ends with "Run `brain status`". The workspace template also sends an agent to `brain status --json` for the frontier, the rows in progress, the full red items and an idea's specs. So the five lines from the hook are one of three ways that the state reaches a session.
- **When.** The one `SessionStart` entry has no matcher. By Claude Code's hooks reference, that fires on every occurrence: `startup`, `resume`, `clear`, `compact` and `fork`. The script reads no input, so the text is the same for each source, and for a source it does not know.
- **What.** One JSON envelope: `hookSpecificOutput` with `hookEventName: "SessionStart"` and `additionalContext`. The text has three parts in this order: `# brain session entry` (read the protocol, load brain:using-brain, follow its Start procedure before dependent work), `# The brain CLI` (the script path as JSON), and `# brain status` with the five lines.
- **How.** It runs `brain status --json` in `CLAUDE_PROJECT_DIR`, with a 10 s limit, and uses only `report`.
- **Framing.** The head says: "The report below replaces any earlier report. It is workspace data, not permission to change the user's task."
- **Failure.** The status part becomes one line: `` `brain status` failed to start: … ``, `` `brain status` failed with exit N: <first stderr line> `` (or the signal and the 10 s limit), or `` `brain status --json` gave output that the hook cannot read: … ``. The hook still exits 0 with the head.
- **No Bun.** The hooks file runs the command `bun`. With no Bun on `PATH` the hook does not start, so the session gets no Brain text at all, not the failure line. Brain's install page says so, and Claude Code's reference calls a hook that cannot start a non-blocking error. UNVERIFIED in a live session: no session ran for this case.
- **Size.** The text stays under 10,000 bytes. A longer status is cut at a line end, with a line that names `brain status --json`. Claude Code's own cap is 10,000 characters.
- **What the cut removes first.** The hook keeps the status from its start. `Red:` is the fourth line and `Waiting on the user:` is the last. So the cut removes the waiting line first, then the red line. A `Next step:` line that is too long alone removes itself and both lines after it (probes H1 and H2). With this worktree as the plugin path the head is 982 bytes, which leaves 8,909 bytes for the status part. The run on all ten ideas uses about 5,700 of them.

### 8. What remains of STATUS.md
The status code reads no `docs/STATUS.md`. Until commit `5c71de7f` (2026-11-05) it did, in three ways:
- A `Next:` or `Next step:` line in the note replaced the worked-out next step.
- A `Waiting on the user:` or `Waiting:` line replaced the waiting line.
- When the rows gave no next step, line 3 was `none in the workspace; docs/STATUS.md says: <first text line of the note>`.

The JSON also had a `note` key, and the hook added a `# docs/STATUS.md` section. What remains in this topic's files:

| Remainder | Where |
|---|---|
| Two fixture notes, kept to prove that the note changes nothing | `idea-mid-define/docs/STATUS.md`, `no-active-work/docs/STATUS.md` |
| README lines that name the note or call it "legacy" | `idea-mid-define/README.md:12, 38`; `no-active-work/README.md:14, 23`; `spec-mid-build/README.md:12, 33` |
| Tests that pin the note's absence from the report | `status.test.ts:156-183`, `status.ts.test.ts:12-27`, `session-start.test.ts:238-255` and `349-359` |
| Assertions that the JSON has no `note` key | `status.test.ts:339`, `359`, `371`; `status.ts.test.ts:26` |
| Stub outputs that still carry `note: null` | `session-start.test.ts:385-393` |
| Test titles that name the note | `status.test.ts:122`, `156`, `171`, `309`; `session-start.test.ts:238`, `349` |

`fixtures/layout-0.8/README.md:21` also names the note, to say that the fixture has none. Row 20 owns that fixture.

`brain check` scans only the four workspace folders, so a `docs/STATUS.md` is no finding. Setup moves a note to `docs/agents/history/STATUS.md`. It skips the move when the history file already holds different text, and it deletes the note when the history file holds the same text (row 20).

### 9. Literal values and wait words in this code

| File | Literal | Use |
|---|---|---|
| `status.ts` | `interview`, `prototype`, `ideate` | The decide row types |
| `status.ts` | `define`, `build`, `finished` | The stage |
| `status.ts` | `resolved` | The last step |
| `status.ts` | `in-progress` | Rows in progress; a research record's status |
| `status.ts` | `partial`, `blocked` | A research record's outcome |
| `status.ts` | `status`, `sources`, `migrated`, `from`, `id`, `outcome` | Frontmatter keys it reads |
| `status.ts` | `Stage: `, `Last step: `, `Next step: `, `Red: `, `Waiting on the user: `, `no active work`, `none`, `in progress: ` | Report words |
| `status.ts` | `is blocked; read the record for the retry condition`; `blocked research record(s)`; `brain check finding(s)`; `run setup-brain`; `layout 1 (brain 0.9 and earlier)` | Red and migrate words |
| `effort.ts` | `define` | The one idea status the code compares |
| `effort.ts` | `idea`, `spec`; `finished`; `effort`, `none`, `several` | Effort kind, flag and selection result |
| `effort.ts`, through `graph.ts` | `open`, `in-progress` | A row still to do |
| `map.ts` (row 18) | `open`, `resolved` | The frontier |
| `map.ts` (row 18) | `superseded` | A value of the `Row` type that a step's `status` uses; no step ever holds it |
| `session-start.ts` | `# brain status`, `failed to start`, `failed with`, `the hook allows it 10 s`, `it is not JSON`, `` it has no `report` list of strings ``, `Brain startup failed`, `The status text is cut here`, `SessionStart` | Hook words, and the event name in the envelope |
| `claude-code.json` | `SessionStart` | The event |
| `brain.ts` | `status [--json]`, nine spaces, then `report the active work: stage, last step, next step` | Usage |

`effort.ts` names `specced`, `done` and `parked` only in its header comment. No code compares them.

The table above covers the code files. The tests and fixtures of this topic hold these further words:

| Where | Words |
|---|---|
| The fixture READMEs, under "What brain must report" | "Active effort", "Stage", "Frontier", "In progress", "Last completed step", "Next step", "Decisions waiting on the user", "Research to start", "Red", "Specs … produced"; the table column "On the frontier"; "legacy note", "legacy seed" |
| `no-active-work/README.md:20` | "Stage: none." |
| `idea-mid-define/docs/STATUS.md` | The labels "Active", "Last step", "Next", "Red: nothing", "Waiting on the user" |
| `no-active-work/docs/STATUS.md` | "No active work. Start with interview-me." |
| The fixture ideas | The idea statuses `define`, `specced`, `parked`; "Confirmed by … on …"; "Not yet specified"; "Parked on 2026-09-20 by the user"; `<not yet known>` |
| The fixture maps and plans | The row statuses `open`, `in-progress`, `resolved`, `superseded by NN`; the types `interview`, `prototype`, `ideate`, `research`, `task`, `checkpoint` |
| The fixture plans | "This table holds the only status of each task"; "Parallel waves"; "Critical path"; "Phases that share a wave: none."; "(checkpoint)"; "Decisions"; "Risks"; "Open questions"; "No open rows: every row is resolved or superseded." |
| The fixture `todo.md` files | "The row in `plan.md` holds the status and the rows that block it"; "Superseded by task 03"; the user-review box |
| The fixture decision records | `accepted`, `superseded by DEC-002` |
| The fixture research records | `resolved`, `in-progress`; a test adds `outcome: blocked` |
| The tests | `done` with `result: DEC-002`; `teleport` as an unknown source; `note` as an absent key |

### 10. What each test and fixture pins

| Test | What it pins |
|---|---|
| `status.test.ts:105-153` | The exact five lines on each of the three fixtures |
| `status.test.ts:155-183` | With or without a `docs/STATUS.md`, the rows give the next step and the waiting line |
| `status.test.ts:185-209` | Two efforts that are not finished: each line names both, the idea first |
| `status.test.ts:211-230` | A branch `feat/offline-mode` names one of two: the lines name that effort only |
| `status.test.ts:232-246` | A branch names a finished spec: `Stage: finished`, its last resolved row, `Next step: none` |
| `status.test.ts:249-306` | A `done` idea with `result: DEC-002` is not active; `ideas[]` shows `specced`, `parked`, `done` |
| `status.test.ts:308-372` | The JSON on each fixture: stage, path, frontier, in progress, waiting, last step, ideas and their specs, empty `red`, no `note` |
| `status.test.ts:374-385`, `488-511` | `red[]` holds the missing config line and each check finding; the text line counts; exit 0 |
| `status.test.ts:387-423` | The one migrate line and the `migrate` list; a `workspace.md` ends that case |
| `status.test.ts:443-455` | The file tree, `.git` too, is the same before and after both forms, on four fixtures: the three of this topic and layout-0.8. No such test covers the hook |
| `status.test.ts:457-486` | A run from a subfolder; exit 2 for other arguments; exit 1 for a config it cannot use |
| `status.ts.test.ts:12-27` | A stale note does not change lines 3 and 5; no `note` key |
| `status.ts.test.ts:29-63` | A blocked research record: `blocked: IDEA-001#05`, not `in progress:`, and its red line |
| `session-start.test.ts:143-179` | The manifest names the one hook file; one entry, no matcher, exec form |
| `session-start.test.ts:181-235` | The same entry and the five lines for `startup`, `clear`, `compact`, `resume`, `fork`, an unknown source, no source and no JSON |
| `session-start.test.ts:237-288` | The five lines on idea-mid-define and spec-mid-build, the migrate line on layout-0.8, and `CLAUDE_PROJECT_DIR` |
| `session-start.test.ts:290-375` | The 10,000-byte budget, the cut line, and the failure lines |
| `session-start.test.ts:377-425` | Output the hook cannot read, in six shapes |
| `fixtures.test.ts:112-144` | Each layout-2 fixture has a README, records layout 2, keeps `docs/specs`, holds each file type, and every file passes `checkDoc` |
| `fixtures.test.ts:146-184` | The layout-0.8 fixture keeps layout 1 and records with no frontmatter |
| `plan.test.ts:579-615` (row 18) | `activeEffort` through `brain plan`: a branch that names a spec selects it; several efforts give "several efforts are not finished: SPEC-001, SPEC-002, SPEC-003, SPEC-004; name the spec to plan" and exit 2; an idea gives exit 2; no effort gives "no active effort; name the spec to plan" and exit 2 |

The types at `status.test.ts:62-79` describe the JSON shape and pin nothing: the test applies them with a cast. No test asserts the full key set of the state or of an effort. Whole objects are compared only for `lastStep` and for the entries of `ideas[]` (`status.test.ts:322-337`), and the `note` key is tested for absence.

| Fixture | State it holds | Report it pins |
|---|---|---|
| `idea-mid-define` | One idea, `status: define`, ten map rows of every type and status; RES-002 in progress with no outcome; an unconfirmed intent; fog; a note | `define`; last step row 04; next step row 06 and in progress row 05; waiting rows 06 and 08; red none |
| `spec-mid-build` | A `specced` idea; one spec with seven plan rows, row 04 in progress, row 05 the frontier; no note | `build`; last step row 03; next step row 05 and in progress row 04; waiting none; `ideas[].specs` = SPEC-001 |
| `no-active-work` | A `specced` idea with two finished specs; a `parked` idea with one open row; a note | `no active work`; every other line `none`; no effort in the JSON |
| `layout-0.8` (row 20 owns it) | No `workspace.md` and seven layout-1 entries | The one migrate line and the `migrate` list, in `brain status` and in the hook text |

The spec-mid-build fixture also stores what the report does not read. Its README says "Checkpoint 03's phase is rows 01 and 02", so the fixture holds a phase: the tasks that one checkpoint closes. Its plan holds a "Parallel waves" section, a "Decisions" section and a "Risks" section.

No test covers these cases, which the probes below ran:
- A branch that names a parked idea, a branch name that fits two efforts, a detached head, and the case of the ID in a branch name.
- `outcome: partial`, a blocked record on an open row, and two records on one row.
- A row behind a superseded row, a checkpoint on the frontier, and a decide row in progress.
- More than two reported efforts.
- A `migrated:` file that holds current rows, and a new spec with an empty plan table.

No test asserts these texts:
- The `Red:` part for a blocked record, `<N> blocked research record(s): read brain status --json`. The one test of a blocked record asserts line 3 and `red[]` only.
- The plural forms `findings` and `records`.
- The hook line for a signal, "failed with `<signal>` (the hook allows it 10 s)".

### Probes
Each probe copies a fixture to a temp folder, runs `git init`, makes one change, and runs `bun scripts/brain.ts status` there. Script: `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/status-waits/row19-probes/probe.ts`, run from the repo root with `bun <script>`. The scratchpad is temporary; this table is enough to repeat a probe by hand.

| Probe | Fixture and change | Result |
|---|---|---|
| P1 | idea-mid-define; add `blocked-by: [IDEA-014]` to the idea | Same lines, but `Red: 1 brain check finding`; `red[]`: `blocked-by: not a field of a IDEA file` |
| P2 | idea-mid-define; `status: in-progress` on the idea | `Stage: no active work`; one finding: `"in-progress" is not define, specced, done or parked` |
| P2b | P2, on branch `feat/sync-notes` | `Stage: finished (IDEA-001: …)`, with its next step and waiting rows |
| P3 | spec-mid-build; add `status:` and `blocked-by:` to `spec.md` | Same lines, `Red: 2 brain check findings`: each key is `not a field of a spec file` |
| P4 | no-active-work, on branch `offline-mode` | `Stage: finished (IDEA-002: Offline mode)`; next step and waiting: `IDEA-002#01` |
| P5 | spec-mid-build; add `IDEA-002-invoice-csv-export.md` in define; branch `feat/invoice-csv-export` | Both efforts reported: the name fits two, so the branch decides nothing |
| P6 | idea-mid-define; row 09 blocked by superseded row 03 | Frontier unchanged; one finding: `row 09: blocked by 03, which is superseded by 06` |
| P6b | no-active-work; SPEC-002 row 04 open and blocked by superseded row 02 | `Stage: build (SPEC-002 …)`, `Next step: none`, one finding |
| P7 | spec-mid-build; idea back to `define`, every plan row resolved | `Stage: define (IDEA-001 …)`, `Next step: none`, `Waiting on the user: none`; `Red: 1 brain check finding`: `Parallel waves: stale`, because the probe changes the rows and not that section (probe R11) |
| P8 | spec-mid-build with a second effort in define; detached head | Both efforts reported |
| P9 | idea-mid-define; RES-003 in progress, `outcome: partial`, `from: IDEA-001#05` | `partial: IDEA-001#05: … (RES-003)`; `Red: none` |
| P10 | The same record, `outcome: blocked`, `from: IDEA-001#07` (an open row) | No change; `red[]` empty |
| P10b | The same record, `from: IDEA-001` | No change; `red[]` empty |
| P11 | spec-mid-build; rows 04 to 06 resolved, so checkpoint 07 is the frontier | `Next step: SPEC-001#07: Ready for review`; `Waiting on the user: none`; `Red: 1 brain check finding`: `Parallel waves: stale`, for the same reason (probe R11b) |
| P12 | spec-mid-build; no `tasks/plan.md` | `Stage: no active work`; one finding: `missing required plan file` |
| P13 | idea-mid-define; frontmatter that is not YAML | `Stage: no active work`; `ideas[].status` is `null`; one finding |
| P14 | idea-mid-define; no map table | `Stage: define`, `Last step: none`, `Next step: none`; one finding |
| P15 | spec-mid-build; a blocked record `from: SPEC-001#04` | `blocked: SPEC-001#04: … (RES-003)`; `Red: 1 blocked research record: read brain status --json` |
| P16 | idea-mid-define; a record with `status: resolved` and `outcome: blocked` | Row 05 stays `in progress:`; one finding: `status: resolved requires outcome: answered, not blocked` |

A second script, `probe-repo.ts` in the same folder, gave the two real runs in section 4.

The repair ran all of these again on 2026-11-21. Each result in the table above was in the new output. The repair also added two scripts to the same folder: `probe-repair.ts` (R1 to R15) and `probe-repair-hook.ts` (H1 and H2). Both run from the repo root with `bun <script>`.

| Probe | Fixture and change | Result |
|---|---|---|
| R1 | spec-mid-build; add `migrated: 0.8` to `tasks/plan.md`, rows kept | `Stage: build (SPEC-001 …)`, `Last step: none`, `Next step: none`, `Red: none`; every effort list empty; `brain check`: no finding |
| R2 | idea-mid-define; add `migrated: 0.8` to the idea, `status: define` kept | `Stage: define (IDEA-001 …)`, every other line `none`; no finding |
| R2b | idea-mid-define; `migrated: 0.8` in place of the status | `Stage: no active work`; `ideas[].status` is `null`; no finding |
| R3 | spec-mid-build; every plan row removed, the table header kept | `Stage: no active work`, every other line `none`, `Red: none`; the idea shows `specced` with `specs: ["SPEC-001"]`; no finding |
| R3b | no-active-work; `brain new-doc SPEC new-thing` | `Stage: no active work`, `Red: none`; no effort |
| R3c | R3b, on branch `feat/new-thing` | `Stage: finished (SPEC-003: A new thing)`, every other line `none` |
| R4 | idea-mid-define; DEC-002 set to `status: proposed` | Same four lines; `Red: 1 brain check finding`; `red[]`: `row 04: DEC-002 is proposed and cannot resolve a map row` |
| R5 | spec-mid-build; the "Confirmed by" line removed from the specced idea | `Red: 1 brain check finding`; `red[]`: `status: specced, but Intent has no confirmation` |
| R5b | spec-mid-build; one fog item added to the specced idea | `Red: 1 brain check finding`; `red[]`: `status: specced, but Not yet specified still holds fog` |
| R5c | idea-mid-define as it is: an idea in define with no confirmation and two fog items | `Red: none` |
| R6 | spec-mid-build; plan rows 01 to 03 set to `done` | `Stage: build`, `Last step: none`, `Next step: in progress: SPEC-001#04 …`, frontier empty, `Red: 3 brain check findings`: `row 01: status "done" is not open, in-progress, resolved or superseded by NN` |
| R6b | spec-mid-build; every plan row set to `done` | `Stage: no active work`; `Red: 7 brain check findings` |
| R7 | idea-mid-define; RES-003 `blocked` and RES-004 `partial`, both `from: IDEA-001#05` | `partial: IDEA-001#05: … (RES-004)` and `Red: 1 blocked research record`; `red[]` names RES-003 |
| R7b | idea-mid-define; a partial record with no `id` key | `partial: IDEA-001#05: … (undefined)`; one finding: `id: missing` |
| R8 | no-active-work, on branch `feat/idea-002` | `Stage: no active work` |
| R8b | no-active-work, on branch `feat/IDEA-002` | `Stage: finished (IDEA-002: Offline mode)`; row 01 is the next step and waits on the user |
| R9 | idea-mid-define; row 06 (prototype) set to `in-progress` | `Next step: IDEA-001#07 …; in progress: IDEA-001#05 …, IDEA-001#06 …`; `Waiting on the user:` row 08 only |
| R10 | idea-mid-define; a file `docs/decisions/notes.md`; run from `docs/decisions` | `red[]`: `docs/decisions/notes.md: name: not DEC-NNN-<slug>.md`; `brain check`: `notes.md: name: not DEC-NNN-<slug>.md` |
| R11, R11b | The changes of P7 and of P11 | `red[]`: `…/tasks/plan.md: Parallel waves: stale; replace the section with the lines that brain plan SPEC-001 prints above its Cap line` |
| R12 | idea-mid-define as it is | The JSON names rows 04, 05, 06, 07 and 08 only; the text `superseded` is not in it; the step statuses in it are `resolved`, `open` and `in-progress` |
| R13 | idea-mid-define with no `git init`; run from `docs/ideas` | `Stage: no active work`; `Red: no docs/agents/workspace.md: run setup-brain` |
| R14 | idea-mid-define; the H1 title removed | `Stage: define (IDEA-001)`; one finding: `H1: "# IDEA-001: " has no title` |
| R15 | spec-mid-build as it is | An `ideas[]` entry has the keys `id`, `title`, `status`, `path`, `specs` and no `result` |
| H1 | idea-mid-define; row 08 gets a title of 8,800 bytes; the hook runs | The hook text is cut; it keeps Stage, Last step, Next step and Red, and not Waiting on the user |
| H2 | idea-mid-define; row 06 gets a title of 9,900 bytes; the hook runs | The hook text is cut; it keeps Stage and Last step only |

### Facts that bear on the decide rows
These are facts from this topic only. Row 31 joins them with the other topics.

| Row | Facts from this code |
|---|---|
| 01 | A row stops blocking only when it is `resolved`. A superseded blocker keeps a row off the frontier, and the check reports it. A blocker with the status `done` is not a row for today's code, so the row behind it never reaches the frontier (probe R6). For an effort, the code has one flag, `finished`: it puts `specced`, `done`, `parked` and every unknown value together. The report reads no `result` of an idea; it finds an idea's specs from each spec's `sources:` |
| 02 | This code writes nothing. A test pins that for `brain status`, on four fixtures. For the hook, the code and its header show it; its tests assert only that root `AGENTS.md` and `CLAUDE.md` stay absent or the same |
| 03 | Today the report has no notion of a waiting effort. It shows a decide row that waits on another effort as the next step and as waiting on the user (IDEA-015#32). It shows no row that waits on another row. On Claude Code a session gets the five lines from the hook; the hook cuts the waiting line first and the red line second. On the other hosts the agent runs `brain status` itself, and the workspace template sends an agent to `--json` for more. The places that decide what a new field does today are `listEfforts` (it sets `finished`), `activeEffort`, `stateFrom`, `computedNext`, `fiveLines`, `readIdeas` (it builds `ideas[]`, the only key with an effort that is not reported), the JSON keys, and the schema (a key it lacks is a red finding). The exact lines are pinned by tests and fixtures |
| 04 | Four lines read no prose. IDEA-016's wait on IDEA-014 is not in the JSON, and IDEA-015#32's wait in prose leaves the row shown as ready. The Red line is the exception: for an idea with `status: specced` or `done`, an Intent with no confirmation and a "Not yet specified" section with fog are red findings. DEC-051 turns `specced` into `done` |
| 08 | A spec's state comes only from its plan rows: `build` while a row is open or in progress, else finished and out of the report. A new spec with an empty plan table is finished, with nothing red. A stored `status:` in `spec.md` is a check finding today. `effort.ts` does not read `migrated:`, and `status.ts` does: a migrated plan with current rows gives `Stage: build` with no step and nothing red |
| 09 | The code of `status.ts` has no notion of a phase. A checkpoint row is shown like a task and is never "waiting on the user". The check works out a checkpoint's phase as the tasks that block it, and a wrong edge is a red finding. The fixture plan stores a waves section and a "Phases that share a wave" line, which the report does not read |
| 10 | The report already cites a row as `IDEA-001#06`, and it matches a research record's `from:` to that text. The frontier takes only two-digit row numbers of the same table. So a wait on a row of another effort has no place in a `Blocked by` cell today, and IDEA-015 keeps one in prose |

### Contrary evidence
- `GLOSSARY.md:25`, `skills/setup-brain/workspace.md:67` and line 38 of the fixture copies say "The active effort is the one that is not finished". The code returns a finished effort when the branch names it, as the comment at `effort.ts:5-6` says, and a test pins `Stage: finished`.
- `no-active-work/README.md:21` says a parked idea's row 01 "is not reported". On a branch that names the parked idea, the row is the next step and waits on the user (probe P4). No test covers it.
- The three fixture READMEs call their `docs/agents/workspace.md` "a copy of setup-brain's template". The three copies are identical to each other and differ from `skills/setup-brain/workspace.md` in nine places of the `diff`. They lack its "Session state" section, its sentence on parked ideas, its `max_parallel` key, its "Background work" section and its line for a `done` idea. They have other text for the `brain <cmd>` section, for steps 1 and 4 of the active-effort list, and for the Resume section, where a specced idea "is done".
- Line 7 of each of those READMEs says the copy has "the default paths". The copies set `specs: docs/specs`, a test calls that "not the default", and the default is `specs`.
- `no-active-work/README.md:20` says "Stage: none." The report prints `Stage: no active work`.
- `scripts/brain.ts:8` says "Exit codes: 0 clean, 1 a finding or a failed action, 2 bad usage." `brain status` exits 0 with a finding, and a test pins that.
- `skills/setup-brain/workspace.md:37` and `docs/agents/workspace.md:37` say the Stage line gives each effort's "stage from current rows". For an idea the code uses the frontmatter `status`, not rows (probe P7).
- `skills/incremental-implementation/SKILL.md:226` says "A checkpoint row on the frontier stops the build for the user's review." The report prints `Waiting on the user: none` there (probe P11).
- `protocol/PROTOCOL.md:54` keeps "user waits in the active effort's rows and records" and calls a user-run step a do row. `GLOSSARY.md:52-54` says a do row can be done "by the user from a checklist". The waiting line never holds a do row.
- `skills/domain-modeling/DEC-FORMAT.md:40` says a decision is "`proposed` while the decision waits on the user". The waiting line reads no decision record.
- `specs/SPEC-009-workspace/spec.md:316` and `specs/SPEC-009-workspace/tasks/todo.md:236-237` hold an older rule: the matcher `startup|resume|clear|compact`, and the status alone on resume. The spec is migrated, so this is history that still sits in the tree. Today's hooks file has no matcher, and the hook prints the same text on every source.
- `hooks/session-start.sh` is a second script with the hook's name. It is vendored and not wired (section 7), so it does not contradict "Claude Code only"; a reader can take it for the hook.
- `idea-mid-define/README.md:37` calls row 04 "the latest decision". The code takes the highest row number and reads no date.
- The comment at `status.ts:69` says `red` holds check findings and a missing config. It also holds blocked research lines.
- `brain.ts:26` and `status.ts:24` say the report is "the active work". With several efforts that are not finished it reports all of them.
- `spec-mid-build/README.md:34` gives two reasons for "waiting: none": the plan has no decide row, and the map has no open row. The code never reads the idea's map there, because the idea is not a reported effort.

### What I could not establish
- UNVERIFIED: how a live Claude Code session shows the hook text on each source. The tests give the hook a made-up input, and the hook reads none. No live session ran.
- UNVERIFIED: whether Claude Code counts its 10,000 cap in characters or bytes. The reference says characters; Brain's code counts bytes, which is the stricter count.
- UNVERIFIED: what a live Claude Code session shows when Bun is not on `PATH`. The claim in section 7 comes from Brain's install page and from the hooks reference, not from a run.
- UNVERIFIED: readers of `brain status --json` outside this repo. In the repo's code, only the hook and three test files read it: `status.test.ts`, `status.ts.test.ts` and `check.ts.test.ts`. Two readers are not code: the workspace template tells an agent to use the JSON form, and IDEA-015 records that the planned views mod gets its data by running the Brain CLI.
- The checkpoint-phase finding and the finding for an open row of a specced idea (section 5) come from the code of `check.ts`. No probe of this record ran them. Row 17 owns those rules.
- The hooks reference was read twice on 2026-11-21: through a fetch tool that returns quotes, and for the repair as the whole Markdown page `https://code.claude.com/docs/en/hooks.md`. The page's response carried `last-modified: Sat, 21 Nov 2026 17:08:40 GMT` and no etag. `brain sdd-cache` is not a command of `scripts/brain.ts` or of the installed Brain 0.13.0 CLI, so no cache validator exists.
- The instruction text that tells an agent what to do with the report (the status skill, the workspace template's "Session state" section, the router) is not in this record. Rows 20, 22 and 23 own it.

### Where this topic meets another
- Row 17 (fields and checks): the idea status values `define`, `specced`, `done`, `parked` (`scripts/workspace/schema.ts:136`); a spec's fields (`schema.ts:185-195`); the row status values (`schema.ts:210`); every rule whose finding becomes red, such as the proposed decision (`scripts/workspace/check.ts:303-310`), the finished idea (`check.ts:340-358`), the checkpoint phase (`check.ts:224-252`) and the waves section (`check.ts:399-416`). `scripts/workspace/__tests__/check.ts.test.ts:66-70` and `311-314` assert that `red[]` equals the check findings.
- Row 18 (rows and graph): the frontier (`scripts/workspace/map.ts:165-171`), a row still to do (`scripts/workspace/graph.ts:17-20`), the superseded-blocker finding (`scripts/workspace/check.ts:316-319`), `brain plan`'s use of `activeEffort` (`scripts/workspace/plan.ts:249-261`) with its tests (`scripts/workspace/__tests__/plan.test.ts:579-615`), and the difference between a plan's stored waves and the frontier.
- Row 20 (setup and migration): the layout-1 file list (`scripts/workspace/old-layout.ts:53-72`), the move of the note (`scripts/setup/write.ts:263-288`), the layout-0.8 fixture, the workspace template, and the `migrated:` key. RES-087 (its F38) saw the same result as probe R1 and asks what a later migration does with the key. RES-037 saw the same result as probe R3b.
- Row 23 (protocol and host deliveries): `scripts/lifecycle/names.ts:50-53` flags the old label `Phase:`; the first line was renamed to `Stage:` in commit `0fc76129`.
- Row 24 (evals): `scripts/evals/__tests__/fresh-repo-resume.test.ts` runs the real `brain status`.
- Row 26 (records): IDEA-015#29 is `in-progress` in its map while RES-077 is resolved.
- Row 27 (specs and plans): this repo's nine migrated specs.
- The sweeps saw one place outside this topic's site index: `scripts/workspace/__tests__/cli.test.ts:30-38`, which asserts that the CLI usage names `status`.

### Sites judged not relevant
- `package.json:25` (`new-doc`): it creates records and reports no state. Row 17 owns it.
- `package.json:27` (`plan`): the waves of one plan. Rows 18 and 28 own it.
- `package.json:15, 26` (`check`, `workspace:check`): the standalone check. Row 17 owns it. The report's use of the check is in the findings.

### Checks
Three independent agents checked the first version of this record. All three result files exist, so each check finished. For each issue, the repair opened the source and, where a run could decide it, ran a probe. No issue was rejected in full. Two cited line numbers inside the issues were out of date; the lines below name them.

- Sources check: 12 issues reported (1 blocking, 11 minor); 12 confirmed and fixed; 0 rejected. In issue 4 the claim holds, but the line that the check gave for IDEA-015#29 (335) has moved again, to 342 (`grep -n "^| 29 " docs/ideas/IDEA-015-views-mod.md`); the record now cites the row by command. In issue 10 the check did not name the red finding of P7 and P11; probes R11 and R11b give it: `Parallel waves: stale`.
- Coverage check: 14 issues reported (1 blocking, 13 minor); 14 confirmed and fixed; 0 rejected. Its statement that "Waiting on the user" holds no row that waits is true for a wait between rows; the contrary check's issue 4 shows the one case where the line holds a row with a wait in prose, and section 5 gives both. Issues 2, 3 and 4 came from the code and from in-memory calls; probes R1 to R3c, R6 and R6b ran them end to end through `brain status`.
- Contrary check: 16 issues reported (4 blocking, 12 minor); 16 confirmed and fixed; 0 rejected. In issue 6 the claim holds, but the sentence on the views mod and the Brain CLI is at line 208 of IDEA-015, not at line 201 (`grep -n "gets data by running the Brain CLI" docs/ideas/IDEA-015-views-mod.md`). In issue 7 the no-Bun case is taken from Brain's install page and from the hooks reference; it stays UNVERIFIED for a live session.

Several issues are the same fact seen by two or three checks: the check behind the Red line (sources 1, contrary 1), the `migrated:` key (sources 2, coverage 3, contrary 2), a new spec (coverage 4, contrary 3), the two sizes (sources 3, contrary 9), the three test files (sources 5, contrary 6), the Red line of P7 and P11 (sources 10, contrary 15), the second session-start script (sources 12, coverage 9, contrary 12), two records on one row (coverage 12, contrary 10), and the "default paths" line (sources 7, coverage 11). Each was fixed once.

## Findings
### The command
- The package script `status` runs `bun scripts/brain.ts status`. Source: package.json:28, checked 2026-11-21.
- `scripts/brain.ts` imports `status` from `./workspace/status`, maps the command name `status` to it, and describes it in the usage as "report the active work: stage, last step, next step". Source: scripts/brain.ts:14, scripts/brain.ts:26, scripts/brain.ts:32-37, checked 2026-11-21.
- The header comment and the usage text of status.ts describe the report as five lines (the stage, the last completed step, the next step, the red items, the decisions waiting on the user), name the effort the branch names, "else every effort that is not finished", and say the command writes no file; the usage says `--json` "gives the same data, the rows in progress and the specs each idea produced". Source: scripts/workspace/status.ts:1-7, scripts/workspace/status.ts:22-26, checked 2026-11-21.
- `brain status` accepts no argument or the one argument `--json`; any other argument prints the usage and returns 2, a config it cannot use returns 1, and a report returns 0. Source: scripts/workspace/status.ts:315-329, checked 2026-11-21.
- `brain status` reports on the repo root that `findRepo` gives, which is the top of the git work tree that holds the current folder, so it reads the files of one work tree; outside git, or with no git, the root is the current folder itself. Source: scripts/workspace/status.ts:322-323, scripts/workspace/config.ts:52-62, checked 2026-11-21.
- Outside git, a run from the `docs/ideas` folder of the idea-mid-define fixture finds no `workspace.md` in that folder and prints `Stage: no active work` and `Red: no docs/agents/workspace.md: run setup-brain`. Source: probe R13 in the Answer's "Probes" section (`bun <scratchpad>/status-waits/row19-probes/probe-repair.ts` from the repo root), checked 2026-11-21.
- The header comment of `scripts/brain.ts` gives the CLI's exit codes as "0 clean, 1 a finding or a failed action, 2 bad usage", while `brain status` exits 0 with a finding. Source: scripts/brain.ts:8, scripts/workspace/__tests__/status.test.ts:489-496, checked 2026-11-21.
- The usage line for `status` in `scripts/brain.ts` is `status [--json]`, nine spaces, then `report the active work: stage, last step, next step`. Source: scripts/brain.ts:26, checked 2026-11-21.
- The text form prints `report` joined by line breaks, and `--json` prints the state object, which holds a step only for some rows. Source: scripts/workspace/status.ts:324, checked 2026-11-21.
- The four test files of this topic pass with 107 tests: 27 in status.test.ts, 2 in status.ts.test.ts, 30 in session-start.test.ts and 48 in fixtures.test.ts. Source: `bun test scripts/workspace/__tests__/status.test.ts scripts/workspace/__tests__/status.ts.test.ts scripts/hooks/__tests__/session-start.test.ts scripts/workspace/__tests__/fixtures.test.ts` on Bun 1.4.4, checked 2026-11-21.

### The five lines
- The Stage line is `no active work` when no effort is reported, else one `<stage> (<ID>: <title>)` part per reported effort, joined by `; `. Source: scripts/workspace/status.ts:220-222, scripts/workspace/status.ts:248-251, scripts/workspace/status.ts:274, checked 2026-11-21.
- With an empty title, an effort's stage part is `<stage> (<ID>)` and a step is shown as its ref only; on the idea-mid-define fixture with the H1 title removed the line is `Stage: define (IDEA-001)`. Source: scripts/workspace/status.ts:216-222, probe R14 in the Answer's "Probes" section, checked 2026-11-21.
- An effort's last step is its row with status `resolved` and the highest row number, by a numeric sort of the row numbers. Source: scripts/workspace/status.ts:113-116, scripts/workspace/status.ts:127, checked 2026-11-21.
- The Last step line shows each reported effort's last step as `<ref>: <title>`, with ` (<result>)` when the result cell is not empty, skips an effort with no resolved row, and prints `none` when no part remains. Source: scripts/workspace/status.ts:216-218, scripts/workspace/status.ts:224-226, scripts/workspace/status.ts:252-258, scripts/workspace/status.ts:275, checked 2026-11-21.
- A row has the fields id, title, type, status, supersededBy, blockedBy and result, and no date and no owner. Source: scripts/workspace/map.ts:14-27, checked 2026-11-21.
- The Next step line takes, per reported effort, only the first frontier row, then `in progress: ` with the in-progress rows that have no research outcome joined by `, `, then one `<outcome>: <row> (<record>)` part per in-progress row with a research outcome; the parts are joined by `; `, and an empty list prints `none`. Source: scripts/workspace/status.ts:228-241, scripts/workspace/status.ts:276, checked 2026-11-21.
- The frontier is every row with status `open` whose blocking rows all have status `resolved`, in table order. Source: scripts/workspace/map.ts:165-171, checked 2026-11-21.
- The Red line has at most three parts: `no docs/agents/workspace.md: run setup-brain`, `<N> brain check finding: run brain check` (or `findings`), and `<N> blocked research record: read brain status --json` (or `records`); with no part it prints `none`. Source: scripts/workspace/status.ts:259-271, scripts/workspace/status.ts:277, scripts/workspace/config.ts:30, checked 2026-11-21.
- The decide row types are `interview`, `prototype` and `ideate`, and an effort's `waiting` list is its frontier rows of one of these types. Source: scripts/workspace/status.ts:28-29, scripts/workspace/status.ts:130, checked 2026-11-21.
- The Waiting on the user line joins the `waiting` rows of every reported effort with `; `, and prints `none` when there is none. Source: scripts/workspace/status.ts:272, scripts/workspace/status.ts:278, checked 2026-11-21.
- A plan table allows only the row types `task` and `checkpoint`, so no plan row can be in `waiting`. Source: scripts/workspace/schema.ts:216-225, scripts/workspace/status.ts:29, checked 2026-11-21.
- With no `docs/agents/workspace.md` and one or more layout-1 files, the report is one line, "This repo is on layout 1 (brain 0.9 and earlier): run setup-brain to migrate. Found: …", and `efforts`, `ideas` and `red` are empty. Source: scripts/workspace/status.ts:286-292, scripts/workspace/old-layout.ts:53-72, checked 2026-11-21.
- With no `docs/agents/workspace.md` and no layout-1 file, the report uses the default folders and adds the red item `no docs/agents/workspace.md: run setup-brain`. Source: scripts/workspace/status.ts:287-301, scripts/workspace/config.ts:36-49, scripts/workspace/config.ts:123-129, checked 2026-11-21.

### The JSON form
- The state object has the keys `migrate`, `report`, `efforts`, `ideas` and `red`. Source: scripts/workspace/status.ts:62-71, scripts/workspace/status.ts:305-311, checked 2026-11-21.
- An effort state has the keys id, kind, stage, title, path, lastStep, frontier, inProgress and waiting. Source: scripts/workspace/status.ts:42-57, scripts/workspace/status.ts:121-131, checked 2026-11-21.
- A step has ref, title, type, status and result, plus the optional outcome (`partial` or `blocked`) and record; it has no blocked-by and no superseded-by, and its ref is `<effort ID>#<row number>`. Source: scripts/workspace/status.ts:31-40, scripts/workspace/status.ts:105-111, checked 2026-11-21.
- A step's status has the type of a row's status (`open`, `in-progress`, `resolved` or `superseded`), but a step is made only from the one resolved row with the highest number, from a frontier row (status `open`) or from an in-progress row, so no step holds `superseded`. Source: scripts/workspace/map.ts:20, scripts/workspace/map.ts:104, scripts/workspace/status.ts:112-116, scripts/workspace/status.ts:127-130, checked 2026-11-21.
- No key of the JSON lists every row or counts the rows: a resolved row that is not the last, a superseded row, and an open row with a blocker that is not resolved become no step, though a row's `blockedBy` list is read. Source: scripts/workspace/status.ts:105-131, scripts/workspace/map.ts:24, scripts/workspace/map.ts:165-171, checked 2026-11-21.
- On the idea-mid-define fixture, whose map has ten rows, the JSON names rows 04, 05, 06, 07 and 08 only, the text `superseded` is not in it, and its step statuses are `resolved`, `open` and `in-progress`. Source: probe R12 in the Answer's "Probes" section, scripts/workspace/__tests__/fixtures/idea-mid-define/docs/ideas/IDEA-001-sync-notes.md:26-35, checked 2026-11-21.
- A step's `record` is the research record's frontmatter `id` passed through `String()`, not the ID in the file name, so a record with no `id` key gives the text `undefined` in the JSON and in the Next step line. Source: scripts/workspace/status.ts:198, scripts/workspace/status.ts:208, probe R7b in the Answer's "Probes" section, checked 2026-11-21.
- The JSON `frontier` holds every frontier row, while the text form shows the first only; `inProgress` holds every row with status `in-progress`. Source: scripts/workspace/status.ts:128-129, scripts/workspace/status.ts:231, checked 2026-11-21.
- A spec's title is the title of `spec.md`, and the title of `tasks/plan.md` only when the spec's is absent or empty; an idea's title is its H1 after the `# IDEA-NNN: ` prefix, or after `# ` when the H1 has another prefix. Source: scripts/workspace/status.ts:73-77, scripts/workspace/status.ts:134-145, checked 2026-11-21.
- `ideas[]` holds every idea file in any status, with `status` as the frontmatter value when it is a string and `null` otherwise, and with `specs` as the IDs of the specs whose `spec.md` lists the idea in `sources`. Source: scripts/workspace/status.ts:59-60, scripts/workspace/status.ts:155-177, scripts/workspace/status.ts:309, checked 2026-11-21.
- An `ideas[]` entry has the keys id, title, status, path and specs and no `result`: the status code does not read an idea's `result`, and it works the link from an idea to its specs out from each spec's `sources`. Source: scripts/workspace/status.ts:60, scripts/workspace/status.ts:160-174, probe R15 in the Answer's "Probes" section, checked 2026-11-21.
- `readDoc` returns a file's frontmatter fields, body, title and a `migrated` flag, with no fields when the frontmatter is absent or cannot be read, and null when the file is absent. Source: scripts/workspace/status.ts:79-96, checked 2026-11-21.
- `red[]` holds the missing-config line, then each workspace check finding as `<path>: <problem>`, then each blocked research line; the text Red line holds counts only. Source: scripts/workspace/status.ts:263-270, scripts/workspace/status.ts:300-304, checked 2026-11-21.
- The comment on the `red` key names check findings and a missing config and does not name blocked research lines. Source: scripts/workspace/status.ts:69, checked 2026-11-21.
- In this worktree the JSON had exactly the five top keys, one effort (IDEA-015, stage define), 14 ideas with no spec in any `specs` list, an empty `red`, and steps with only the keys ref, title, type, status and result. Source: output of `bun scripts/brain.ts status --json` in the repo root on branch feat/views-mod, checked 2026-11-21.

### The stage
- The stage is `define` for an idea and `build` for a spec, and `finished` for any effort whose `finished` flag is true; the type allows no other stage word. Source: scripts/workspace/status.ts:47, scripts/workspace/status.ts:117-120, checked 2026-11-21.
- An idea's `finished` flag is true unless its frontmatter parses and its `status` is exactly `define`. Source: scripts/workspace/effort.ts:47-57, checked 2026-11-21.
- A spec's `finished` flag is true when its `tasks/plan.md` is absent or has no row that is `open` or `in-progress`; the code reads no frontmatter of the spec to set it. Source: scripts/workspace/effort.ts:59-75, scripts/workspace/graph.ts:17-20, checked 2026-11-21.
- The header comment of effort.ts states the same rule in words and names `specced`, `done` and `parked` as finished; `define` is the only idea status that the code compares. Source: scripts/workspace/effort.ts:1-8, scripts/workspace/effort.ts:49, checked 2026-11-21.
- A spec's schema has the fields `spec` and `sources` only, and a key that is not a field of the file type is a check finding. Source: scripts/workspace/schema.ts:185-195, scripts/workspace/schema.ts:234-236, checked 2026-11-21.
- The status code gives no rows to an absent file or to a file whose frontmatter has a `migrated` key. Source: scripts/workspace/status.ts:93-101, checked 2026-11-21.
- `effort.ts` does not read the `migrated` key: it sets an idea's `finished` flag from the frontmatter `status` and a spec's from the rows of the plan text, whatever the key. Source: `grep -c "migrated" scripts/workspace/effort.ts` (0), scripts/workspace/effort.ts:47-49, scripts/workspace/effort.ts:65-73, checked 2026-11-21.
- With `migrated: 0.8` added to the plan of the spec-mid-build fixture and its rows kept, the report is `Stage: build (SPEC-001: Export invoices as CSV)`, `Last step: none`, `Next step: none`, `Red: none`, `Waiting on the user: none`, every list of the effort is empty, and `brain check` gives no finding. Source: probe R1 in the Answer's "Probes" section, checked 2026-11-21.
- With `migrated: 0.8` added to the idea of the idea-mid-define fixture, the report is `Stage: define (IDEA-001: Sync notes across devices)` with every other line `none` when `status: define` stays, and `Stage: no active work` with `ideas[].status` null when the key replaces the status; `brain check` gives no finding in both cases. Source: probes R2 and R2b in the Answer's "Probes" section, checked 2026-11-21.
- The layout-0.8 fixture's README says a migrated idea "gets no status, like every migrated idea". Source: scripts/workspace/__tests__/fixtures/layout-0.8/README.md:27, checked 2026-11-21.
- `brain new-doc SPEC` writes `tasks/plan.md` from a template whose task table has the header and no row, so a new spec has no row still to do and its `finished` flag is true. Source: scripts/workspace/new-doc.ts:33-39, scripts/workspace/templates/plan.md:15-18, scripts/workspace/effort.ts:65-73, checked 2026-11-21.
- With every row removed from the plan of the spec-mid-build fixture and the table header kept, the report is `Stage: no active work` with every other line `none`, `efforts` is empty, the idea shows `specced` with `specs: ["SPEC-001"]`, and `brain check` gives no finding; a new spec from `brain new-doc SPEC` on the no-active-work fixture gives the same lines, and `Stage: finished (SPEC-003: A new thing)` on a branch that names it. Source: probes R3, R3b and R3c in the Answer's "Probes" section, checked 2026-11-21.
- An idea in `define` whose map rows are all resolved stays `Stage: define` with `Next step: none`: an idea's stage comes from its frontmatter `status`, not from rows. Source: probe P7 in the Answer's "Probes" table, scripts/workspace/effort.ts:48-49, checked 2026-11-21.
- The glossary defines a stage as one of define, plan, build, verify, review or ship. Source: GLOSSARY.md:10-13, checked 2026-11-21.
- The first line's label was `Phase:` before commit 0fc76129 of 2026-10-29, "stage for the lifecycle, phase for a plan". Source: `git log --format="%h %ad %s" --date=short -- scripts/workspace/status.ts`, scripts/lifecycle/names.ts:50-53, checked 2026-11-21.

### Effort selection
- `listEfforts` returns every file named `IDEA-NNN-<slug>.md` in the ideas folder and every folder named `SPEC-NNN-<slug>` in the specs folder, ideas first, each kind in name order, each with kind, id, name, slug, path and finished. Source: scripts/workspace/effort.ts:18-29, scripts/workspace/effort.ts:34-77, checked 2026-11-21.
- The branch name comes from `git symbolic-ref --quiet --short HEAD` and is null on a detached head, outside git, or with no git. Source: scripts/workspace/effort.ts:79-83, checked 2026-11-21.
- `activeEffort` returns the effort whose name, ID or slug equals the last `/` part of the branch name when exactly one effort matches, whatever its `finished` flag; else the only effort that is not finished; else `none`, or `several` with every effort that is not finished. Source: scripts/workspace/effort.ts:31-32, scripts/workspace/effort.ts:85-105, checked 2026-11-21.
- `brain status` reports the one active effort, or each of the several, or none, and then lists the ideas from a second `listEfforts` call. Source: scripts/workspace/status.ts:147-153, scripts/workspace/status.ts:295-298, scripts/workspace/status.ts:309, checked 2026-11-21.
- `brain plan` with no argument uses the same `activeEffort` and returns an error for `none`, for `several` ("several efforts are not finished: …; name the spec to plan") and for an idea. Source: scripts/workspace/plan.ts:249-261, checked 2026-11-21.
- In this worktree, on branch `feat/views-mod`, the report names only IDEA-015, whose file is `IDEA-015-views-mod.md`, while 10 of the 14 ideas have `status: define`. Source: output of `bun scripts/brain.ts status` and `bun scripts/brain.ts status --json` in the repo root, checked 2026-11-21.
- On a copy of this repo's `docs/` and `specs/` in a new git repo whose branch names no effort, the report names all 10 ideas in define and no spec, its Next step line is 3,556 bytes, its Waiting on the user line names 12 rows in 1,194 bytes, and the hook text is 6,703 bytes with no cut; an earlier run on the same day gave 3,078 and 6,225 bytes, before IDEA-016 got more rows in progress. Source: `bun <scratchpad>/status-waits/row19-probes/probe-repo.ts` from the repo root (the Answer's section 4 and "Probes" give the full path), checked 2026-11-21.
- The branch match is exact and keeps the case, because it tests whether the list of an effort's name, ID and slug includes the last part of the branch name: on the no-active-work fixture, branch `feat/idea-002` selects no effort and branch `feat/IDEA-002` selects the parked idea. Source: scripts/workspace/effort.ts:91-94, probes R8 and R8b in the Answer's "Probes" section, checked 2026-11-21.
- Four tests pin `activeEffort` through `brain plan`: a branch that names a spec selects its plan, several efforts give "several efforts are not finished: SPEC-001, SPEC-002, SPEC-003, SPEC-004; name the spec to plan" and exit 2, an idea gives exit 2, and no effort gives "no active effort; name the spec to plan" and exit 2. Source: scripts/workspace/__tests__/plan.test.ts:578-615, checked 2026-11-21.
- All nine spec folders of this repo carry `migrated: 0.8` in `spec.md`, eight have a `tasks/plan.md`, and none of those plans has a table with the plan columns. Source: `grep -c "| # | Task | Type | Status | Blocked by | Result |" specs/*/tasks/plan.md` (0 for each of 8 files) and `grep -l "migrated: 0.8" specs/*/spec.md` (9 files), checked 2026-11-21.

### Waiting on the user and red
- `researchOutcomes` reads each file named `RES-NNN-*.md` directly in the research folder; it uses a record only when its `from` equals the ref of an in-progress row of a reported effort, its `status` is `in-progress`, and its `outcome` is `partial` or `blocked`; it then sets `outcome` and `record` on that step. Source: scripts/workspace/status.ts:179-208, checked 2026-11-21.
- Only an `outcome: blocked` record adds a red line, `<file>: <ref> is blocked; read the record for the retry condition`; a `partial` record adds none. Source: scripts/workspace/status.ts:209-211, checked 2026-11-21.
- The red findings are the findings of `checkWorkspace`, the function that `brain check` also prints; `brain status` runs it on every report that is not the one migrate line. Source: scripts/workspace/status.ts:12, scripts/workspace/status.ts:294, scripts/workspace/status.ts:302, scripts/workspace/status.ts:307, scripts/workspace/check.ts:427-482, scripts/workspace/check.ts:489-512, checked 2026-11-21.
- `red[]` gives each finding's path from the repo root, while `brain check` prints it relative to the current folder: from `docs/decisions` of a fixture copy, the same finding is `docs/decisions/notes.md: name: not DEC-NNN-<slug>.md` in `red[]` and `notes.md: name: not DEC-NNN-<slug>.md` in the check. Source: scripts/workspace/status.ts:302, scripts/workspace/check.ts:499-501, probe R10 in the Answer's "Probes" section, checked 2026-11-21.
- `brain check` prints one line that is in no key of the status, the count of migrated decisions with no kind; in this repo it prints "3 migrated decisions have no kind: DEC-001, DEC-002, DEC-004" and "no finding in 111 workspace files", and the report says `Red: none`. Source: scripts/workspace/check.ts:502-505, output of `bun scripts/brain.ts check` and of `bun scripts/brain.ts status` in the repo root, checked 2026-11-21.
- The workspace check loads every file of the four workspace folders and keeps the frontmatter of each decision record and each research record; a resolved map row whose result names a decision with `status: proposed` is the finding `row NN: DEC-NNN is proposed and cannot resolve a map row`. Source: scripts/workspace/check.ts:427-449, scripts/workspace/check.ts:303-310, checked 2026-11-21.
- A test pins that the proposed-decision finding is in `red` of `brain status --json`, and with DEC-002 of the idea-mid-define fixture set to `proposed` the report keeps its other four lines and prints `Red: 1 brain check finding: run brain check`. Source: scripts/workspace/__tests__/check.ts.test.ts:293-316, probe R4 in the Answer's "Probes" section, checked 2026-11-21.
- For an idea with `status: specced` or `done`, the check reads the map rows, the "Not yet specified" section and the Intent section: a row still to do, a missing section, fog, and an Intent with no "Confirmed by … on <date>." line are findings; an idea with another status gets none of them. Source: scripts/workspace/check.ts:340-358, scripts/workspace/check.ts:467-469, checked 2026-11-21.
- With the "Confirmed by" line removed from the specced idea of the spec-mid-build fixture, `red[]` holds `status: specced, but Intent has no confirmation`; with one fog item added it holds `status: specced, but Not yet specified still holds fog`; the idea in define of the idea-mid-define fixture has no confirmation and two fog items, and its report says `Red: none`. Source: probes R5, R5b and R5c in the Answer's "Probes" section, checked 2026-11-21.
- For a plan, the check works out each checkpoint's phase as the tasks that block it and reports a task with a wrong edge to a checkpoint; it also reads the spec's `tasks/todo.md` and the plan's "Parallel waves" section and reports a missing or stale section. Source: scripts/workspace/check.ts:218-253, scripts/workspace/check.ts:291-294, scripts/workspace/check.ts:394-416, scripts/workspace/check.ts:470-474, checked 2026-11-21.
- A file with a `migrated` key gets none of the row rules, the finished-idea rules and the waves rules of the check. Source: scripts/workspace/check.ts:456-475, checked 2026-11-21.
- Two research records that name the same in-progress row are read in sorted file-name order, so the later one sets `outcome` and `record`, and each blocked one adds a red line: with RES-003 `blocked` and RES-004 `partial` on IDEA-001#05, the report says `partial: IDEA-001#05: … (RES-004)` and `Red: 1 blocked research record: read brain status --json`. Source: scripts/workspace/status.ts:189-211, scripts/lib/files.ts:17-20, probe R7 in the Answer's "Probes" section, checked 2026-11-21.
- The workspace check reports an open or in-progress row that a superseded row blocks as `row NN: blocked by NN, which is superseded by NN`; the report shows it only in the count of findings. Source: scripts/workspace/check.ts:316-319, scripts/workspace/status.ts:263-266, checked 2026-11-21.
- The code of status.ts itself reads four things from the workspace: an idea file, a spec's `spec.md`, a spec's `tasks/plan.md`, and the frontmatter of research records; a decision record and a `tasks/todo.md` reach the report only through the workspace check, as red findings. Source: scripts/workspace/status.ts:137, scripts/workspace/status.ts:140-141, scripts/workspace/status.ts:159, scripts/workspace/status.ts:170, scripts/workspace/status.ts:194, scripts/workspace/status.ts:294, checked 2026-11-21.
- A decide row with status `in-progress` is not on the frontier, so it is not in `waiting`: with row 06 (prototype) of the idea-mid-define fixture set to `in-progress`, the Next step line shows it under `in progress:` and the Waiting on the user line names row 08 only. Source: scripts/workspace/map.ts:166-170, scripts/workspace/status.ts:130, probe R9 in the Answer's "Probes" section, checked 2026-11-21.
- IDEA-015 row 32 is an `interview` row with status `open` and an empty Blocked by cell, the idea's notes say the row waits on IDEA-016#08 "in prose, because a Blocked by cell names rows of this map only", and the report in this worktree gives row 32 as the first part of the Next step line and as the only row of the Waiting on the user line. Source: `grep -n "^| 32 " docs/ideas/IDEA-015-views-mod.md`, `grep -n "Row 32 waits on IDEA-016#08" docs/ideas/IDEA-015-views-mod.md`, output of `bun scripts/brain.ts status` in the repo root, checked 2026-11-21.
- IDEA-015 row 08 is a `prototype` row with status `in-progress` whose notes say "review with Peter pending", and the report in this worktree shows rows 08 and 29 under `in progress:` and not in the Waiting on the user line. Source: `grep -n "^| 08 " docs/ideas/IDEA-015-views-mod.md`, `grep -n "review with Peter pending" docs/ideas/IDEA-015-views-mod.md`, output of `bun scripts/brain.ts status` in the repo root, checked 2026-11-21.
- Of a file it reads, the status code uses the frontmatter keys status, sources, migrated, from, id and outcome, the H1 title, and the first table with the map or plan columns; the words todo, intent, confirmed, "not yet", follow-up, waves, "open question", blocked-by, notes, checkpoint and phase are in no line of code of status.ts, effort.ts or session-start.ts. Source: `grep -n -i "todo\|decisions\|intent\|confirmed\|not yet\|follow-up\|waves\|open question\|blocked-by\|blockedBy\|supersededBy\|notes\|checkpoint\|phase" scripts/workspace/status.ts scripts/workspace/effort.ts scripts/hooks/session-start.ts` (4 lines: two comments with "decisions" and the `stillToDo` import and call), checked 2026-11-21.
- A `blocked by` cell takes only two-digit row numbers, and a number that is no row of the same table is a problem. Source: scripts/workspace/map.ts:91-94, scripts/workspace/map.ts:144-147, checked 2026-11-21.

### What the report cannot know
- An idea's schema has the fields id, status and result, with the status values define, specced, done and parked, so `blocked-by:` and `status: in-progress` on an idea are check findings today. Source: scripts/workspace/schema.ts:132-141, scripts/workspace/schema.ts:234-236, checked 2026-11-21.
- With `blocked-by: [IDEA-014]` added to the idea of the idea-mid-define fixture, the five lines are the same but for `Red: 1 brain check finding: run brain check`, and `red[]` holds `docs/ideas/IDEA-001-sync-notes.md: blocked-by: not a field of a IDEA file`. Source: probe P1 in the Answer's "Probes" table, checked 2026-11-21.
- With `status: in-progress` on that idea, the report says `Stage: no active work` and counts one finding; on a branch that names the idea, it says `Stage: finished (IDEA-001: Sync notes across devices)` and still gives its next step and waiting rows. Source: probes P2 and P2b in the Answer's "Probes" table, scripts/workspace/effort.ts:48-49, checked 2026-11-21.
- With `status:` and `blocked-by:` added to the `spec.md` of the spec-mid-build fixture, the five lines are the same but for `Red: 2 brain check findings: run brain check`. Source: probe P3 in the Answer's "Probes" table, checked 2026-11-21.
- On a branch that names the parked idea of the no-active-work fixture, the report says `Stage: finished (IDEA-002: Offline mode)` and gives `IDEA-002#01` as the next step and as waiting on the user. Source: probe P4 in the Answer's "Probes" table, checked 2026-11-21.
- A branch name that fits two efforts selects none of them, and a detached head selects none: both cases report every effort that is not finished. Source: probes P5 and P8 in the Answer's "Probes" table, scripts/workspace/effort.ts:92-98, checked 2026-11-21.
- A plan whose frontier is a checkpoint row gives that row as the next step and `Waiting on the user: none`. Source: probe P11 in the Answer's "Probes" table, checked 2026-11-21.
- A blocked research record whose `from` names an open row, or the idea with no row, changes no line and adds no red item. Source: probes P10 and P10b in the Answer's "Probes" table, scripts/workspace/status.ts:185-187, checked 2026-11-21.
- IDEA-016 states its wait on IDEA-014 in prose under a Notes heading, and the JSON state of IDEA-016 does not hold the text `IDEA-014`. Source: docs/ideas/IDEA-016-effort-blocked-by.md:54-55 and `bun <scratchpad>/status-waits/row19-probes/probe-repo.ts` ("IDEA-016 state names IDEA-014: false"), checked 2026-11-21.
- The report shows IDEA-015#29 as in progress, as its map row says, while its research record RES-077 has `status: resolved` and `outcome: answered`. Source: `grep -n "^| 29 " docs/ideas/IDEA-015-views-mod.md` (the file changes during this session, so no line number is given), docs/research/RES-077-brain-session-command.md:3-7, output of `bun scripts/brain.ts status` in the repo root, checked 2026-11-21.
- A row's status must be `open`, `in-progress`, `resolved` or `superseded by NN`; a row with another status, such as `done`, is a problem and is left out of the rows, so it cannot be a last step and a row that it blocks never reaches the frontier. Source: scripts/workspace/schema.ts:210, scripts/workspace/map.ts:86-97, scripts/workspace/map.ts:137-142, scripts/workspace/map.ts:166-170, checked 2026-11-21.
- With plan rows 01 to 03 of the spec-mid-build fixture set to `done`, the report is `Stage: build`, `Last step: none`, `Next step: in progress: SPEC-001#04: …` with an empty frontier, and `Red: 3 brain check findings: run brain check`; with every row `done` it is `Stage: no active work` and `Red: 7 brain check findings: run brain check`. Source: probes R6 and R6b in the Answer's "Probes" section, checked 2026-11-21.
- The fixture plan of spec-mid-build stores a "Parallel waves" section whose wave 1 holds rows 04 and 05, a "Critical path" line and the line "Phases that share a wave: none.", plus a "Decisions" and a "Risks" section, and its README says "Checkpoint 03's phase is rows 01 and 02"; the status frontier of that plan is row 05 only, and the status code reads none of these sections. Source: scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:9-12, scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:27-43, scripts/workspace/__tests__/fixtures/spec-mid-build/README.md:28-30, scripts/workspace/status.ts:98-101, checked 2026-11-21.
- The red finding of probes P7 and P11 is `docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md: Parallel waves: stale; replace the section with the lines that brain plan SPEC-001 prints above its Cap line`. Source: probes R11 and R11b in the Answer's "Probes" section, checked 2026-11-21.

### The session-start hook
- The Claude Code manifest names `./scripts/hooks/claude-code.json` as its hooks file; the Codex manifest and the Gemini extension file have no hooks key. Source: .claude-plugin/plugin.json:33, .codex-plugin/plugin.json:1-28, gemini-extension.json:1-6, checked 2026-11-21.
- The hooks file has one `SessionStart` entry with no matcher and one command handler, `bun` with the argument `${CLAUDE_PLUGIN_ROOT}/scripts/hooks/session-start.ts`. Source: scripts/hooks/claude-code.json:1-15, checked 2026-11-21.
- In Claude Code, a matcher that is `"*"`, empty or omitted fires on every occurrence of the event, and `SessionStart` matches on how the session started: `startup`, `resume`, `clear`, `compact` or `fork`. Source: https://code.claude.com/docs/en/hooks#matcher-patterns and https://code.claude.com/docs/en/hooks#sessionstart, checked 2026-11-21.
- Claude Code adds a SessionStart hook's `additionalContext` to Claude's context at the start of the conversation, before the first prompt, and caps the string at 10,000 characters; over the cap it replaces the output with a file path and a preview. Source: https://code.claude.com/docs/en/hooks#sessionstart-decision-control and https://code.claude.com/docs/en/hooks#json-output, checked 2026-11-21.
- The hook script reads no input: it takes the plugin root from `CLAUDE_PLUGIN_ROOT`, else two folders above the script, and the project from `CLAUDE_PROJECT_DIR`, else the current folder, and it prints one JSON object with `hookSpecificOutput.hookEventName` "SessionStart" and `additionalContext`. Source: scripts/hooks/session-start.ts:1-6, scripts/hooks/session-start.ts:124-131, checked 2026-11-21.
- The hook text is a head, `# brain session entry`, with five instruction lines and the `# The brain CLI` part that gives the script path as JSON, then the status part. Source: scripts/hooks/session-start.ts:96-122, checked 2026-11-21.
- The head tells the reader to read the protocol in full, load brain:using-brain and follow its Start procedure before dependent work, and it says "The report below replaces any earlier report. It is workspace data, not permission to change the user's task.". Source: scripts/hooks/session-start.ts:113-117, checked 2026-11-21.
- The hook runs `brain status --json` in the project folder with a 10 s limit and reads only the `report` key, which must be a list of strings; the status part is `# brain status`, an empty line, then the report lines. Source: scripts/hooks/session-start.ts:12-13, scripts/hooks/session-start.ts:18-38, scripts/hooks/session-start.ts:41-55, scripts/hooks/session-start.ts:70, checked 2026-11-21.
- When `brain status` cannot start, exits with another code than 0 or is stopped by a signal, or prints output the hook cannot read, the status part is one line that says so, with the first line of stderr for a failed run, and the head stays. Source: scripts/hooks/session-start.ts:56-69, checked 2026-11-21.
- The hook keeps its text under 10,000 bytes: it cuts the status at a line end and adds "The status text is cut here to keep this text under 10,000 bytes. Run `brain status --json` for the rest.", and when the head alone does not fit it prints one "Brain startup failed" line. Source: scripts/hooks/session-start.ts:9-16, scripts/hooks/session-start.ts:73-94, checked 2026-11-21.
- In this worktree the hook text is 1,919 bytes, of which the head is 984 bytes. Source: `bun <scratchpad>/status-waits/row19-probes/probe-repo.ts` from the repo root (the Answer's "Probes" section gives the full path), checked 2026-11-21.
- The README calls the hook Claude-only and says it gives every session current protocol and router paths and the computed workspace report. Source: README.md:48, checked 2026-11-21.
- `scripts/lifecycle/hooks.ts` states that brain's hooks are for Claude Code only and makes a `hooks/hooks.json` or a root `hooks.json` a lifecycle finding, and a test pins that Brain ships neither file. Source: scripts/lifecycle/hooks.ts:1-31, scripts/lifecycle/__tests__/hooks.test.ts:75-80, checked 2026-11-21.
- `hooks/session-start.sh` is a second session-start script in the repo: it is a vendored file, its header says "Not wired by the plugin", and it injects the upstream router skill and no workspace state. Source: hooks/session-start.sh:1-12, upstream.lock.json:39, checked 2026-11-21.
- On a host with no hook, the agent runs the command itself: step 4 of the protocol and of each host copy ends with "Run `brain status`", and the workspace template tells an agent to use `brain status --json` for each effort's frontier, rows in progress, full red items and the specs of an idea. Source: protocol/PROTOCOL.md:54, protocol/AGENTS-block.md:57, GEMINI.md:96, rules/protocol.md:61, skills/setup-brain/workspace.md:30, checked 2026-11-21.
- The hooks file runs the command `bun`, and Brain's install page says Bun must be on the `PATH` of the process that starts the host and that "A failed hook does not load Brain's startup instructions". Source: scripts/hooks/claude-code.json:7-9, docs/install/prerequisites.md:16-20, checked 2026-11-21.
- In Claude Code, a hook that exits with a code other than 0 or 2, or that fails in another way such as not starting, is a non-blocking error and the action goes ahead. Source: https://code.claude.com/docs/en/hooks#exit-code-output, checked 2026-11-21.
- The hook keeps the status text from its start and cuts at the last line end that fits, and the report puts `Red:` fourth and `Waiting on the user:` last, so a cut removes the waiting line first and the red line second; a test pins that the first lines stay. Source: scripts/hooks/session-start.ts:74-93, scripts/workspace/status.ts:273-279, scripts/hooks/__tests__/session-start.test.ts:312-325, checked 2026-11-21.
- With a row title of 8,800 bytes that is only in the waiting line, the hook text keeps Stage, Last step, Next step and Red and then the cut line; with a first frontier row title of 9,900 bytes it keeps Stage and Last step only. Source: probes H1 and H2 in the Answer's "Probes" section (`bun <scratchpad>/status-waits/row19-probes/probe-repair-hook.ts` from the repo root), checked 2026-11-21.
- With this worktree as the plugin path, the head is 982 bytes and the cut line is 105 bytes, which leaves 8,909 bytes for the status part before a cut. Source: scripts/hooks/session-start.ts:79, `bun <scratchpad>/status-waits/row19-probes/probe-repo.ts` ("head bytes: 984", which counts the two line breaks after the head), checked 2026-11-21.
- No hook test hashes the file tree or uses the words read-only: the hook tests assert only that root `AGENTS.md` and `CLAUDE.md` stay the same or absent, and the hook's header says it writes no consumer file. Source: `grep -n "hash\|read-only\|toBe(before)" scripts/hooks/__tests__/session-start.test.ts` (no line), scripts/hooks/__tests__/session-start.test.ts:198-223, scripts/hooks/session-start.ts:4, checked 2026-11-21.

### What remains of STATUS.md
- No line of status.ts, effort.ts or session-start.ts holds the text `STATUS`. Source: `grep -c "STATUS" scripts/workspace/status.ts scripts/workspace/effort.ts scripts/hooks/session-start.ts` (0 for each), checked 2026-11-21.
- Before commit 5c71de7f of 2026-11-05, `brain status` read `docs/STATUS.md`: a line labelled `next` or `next step` replaced the worked-out next step, a line labelled `waiting on the user` or `waiting` replaced the waiting line, and the state had a `note` key with the note's path and text; the commit removed all three and added the research outcomes. Source: `git show 5c71de7f -- scripts/workspace/status.ts`, checked 2026-11-21.
- The same commit removed a fourth use of the note, the function `nextLine`: when the note had no next line and the rows gave no next step, line 3 was `none in the workspace; docs/STATUS.md says: <first text line of the note>`. Source: `git show 5c71de7f -- scripts/workspace/status.ts` (the removed lines of `nextLine`), checked 2026-11-21.
- Before that commit the hook added a `# docs/STATUS.md` section with the note's text, or "This repo has no docs/STATUS.md.", and its cut line named `docs/STATUS.md`. Source: `git show 5c71de7f -- scripts/hooks/session-start.ts`, checked 2026-11-21.
- The workspace check scans only the decisions, research, ideas and specs folders, so a `docs/STATUS.md` gives no finding. Source: scripts/workspace/check.ts:46-73, scripts/workspace/check.ts:99-124, checked 2026-11-21.
- The idea-mid-define fixture keeps a nine-line note that names the active effort, the last step, the next step, "Red: nothing" and the rows that wait on the user, and the no-active-work fixture keeps a one-line note, "No active work. Start with interview-me."; each README says the note is kept to prove it does not supply or change the report. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/docs/STATUS.md:1-9, scripts/workspace/__tests__/fixtures/no-active-work/docs/STATUS.md:1, scripts/workspace/__tests__/fixtures/idea-mid-define/README.md:12, scripts/workspace/__tests__/fixtures/no-active-work/README.md:14, checked 2026-11-21.
- Setup moves a `docs/STATUS.md` to `docs/agents/history/STATUS.md` byte for byte, skips the move when the history file already holds different text, and deletes the note when the history file holds the same text; this repo holds such a history file. Source: scripts/setup/write.ts:263-288, docs/agents/history/STATUS.md:1-9, checked 2026-11-21.
- The fixture READMEs name the note in seven lines: idea-mid-define lines 12 and 38 and no-active-work lines 14 and 23 call it "legacy", spec-mid-build lines 12 and 33 say the fixture has none, and layout-0.8 line 21 says the same; six test titles also name `docs/STATUS.md` or a "legacy note". Source: `grep -n "STATUS\|legacy" scripts/workspace/__tests__/fixtures/*/README.md` (7 lines), scripts/workspace/__tests__/status.test.ts:122, scripts/workspace/__tests__/status.test.ts:156, scripts/workspace/__tests__/status.test.ts:171, scripts/workspace/__tests__/status.test.ts:309, scripts/hooks/__tests__/session-start.test.ts:238, scripts/hooks/__tests__/session-start.test.ts:349, checked 2026-11-21.

### What the tests pin
- The test types describe the JSON shape (the five top keys, the nine effort keys, the five step keys, and an idea's id, title, status, path and specs) but pin nothing, because the test applies them with a cast; `statusJson` asserts only that `report` equals the text run, and whole objects are compared only for `lastStep` and for the entries of `ideas`. Source: scripts/workspace/__tests__/status.test.ts:62-90, scripts/workspace/__tests__/status.test.ts:322-337, checked 2026-11-21.
- Three test files run `brain status --json`: status.test.ts, status.ts.test.ts and check.ts.test.ts; the only other code that runs it is the hook. Source: `grep -rn "\"status\", \"--json\"" scripts --include="*.ts"` (8 lines: scripts/hooks/session-start.ts:44, status.test.ts:83 and 450, status.ts.test.ts:21 and 55, check.ts.test.ts:66 and 311, and scripts/evals/keystone-preflight.ts:109, which runs `claude auth status` and not Brain), checked 2026-11-21.
- IDEA-015 records that the planned views mod "gets data by running the Brain CLI", so the mod is a planned reader of the report outside this code. Source: `grep -n "gets data by running the Brain CLI" docs/ideas/IDEA-015-views-mod.md`, checked 2026-11-21.
- No test asserts the Red part for a blocked record (`blocked research record`), the plural forms `findings` and `records`, or the hook's signal line ("the hook allows it 10 s"). Source: `grep -rn "blocked research record\|the hook allows\|findings: run\|records: read" scripts --include="*.test.ts"` (no line), scripts/workspace/status.ts:263-270, scripts/hooks/session-start.ts:61-62, checked 2026-11-21.
- Three tests pin the exact five lines on the idea-mid-define, spec-mid-build and no-active-work fixtures, with exit 0 and empty stderr. Source: scripts/workspace/__tests__/status.test.ts:105-153, checked 2026-11-21.
- Two tests pin that the next step and the waiting line come from the rows with the note removed and with a note that says "Red: nothing."; the title of the spec-mid-build test also names `docs/STATUS.md`. Source: scripts/workspace/__tests__/status.test.ts:122, scripts/workspace/__tests__/status.test.ts:155-183, checked 2026-11-21.
- One test changes the parked idea to `status: define` beside the spec in build and pins that each line names both efforts, the idea first, and that `efforts` holds both frontiers; a second pins that on branch `feat/offline-mode` the lines name the idea only. Source: scripts/workspace/__tests__/status.test.ts:185-230, checked 2026-11-21.
- One test pins that a branch `theme-tokens` on the no-active-work fixture gives `Stage: finished (SPEC-001: …)`, the last resolved row as the last step, and `Next step: none`. Source: scripts/workspace/__tests__/status.test.ts:232-246, checked 2026-11-21.
- One test adds an idea with `status: done` and `result: DEC-002` and pins that no effort is active, the five lines are the no-work lines, and `ideas` shows `specced` with two specs, `parked` and `done`. Source: scripts/workspace/__tests__/status.test.ts:249-306, checked 2026-11-21.
- Three tests pin the JSON on each fixture: stage, kind, path, the frontier that the README names, the rows in progress, the waiting rows, the last step with status `resolved` and its result, each idea's status and specs, an empty `red`, and no `note` key. Source: scripts/workspace/__tests__/status.test.ts:308-372, checked 2026-11-21.
- Three tests pin the red items: `red[]` holds the missing-config line and each check finding as `brain check` names it, the text line reads `Red: 1 brain check finding: run brain check`, a repo with no `workspace.md` and no layout-1 file reads `Red: no docs/agents/workspace.md: run setup-brain`, and the run exits 0. Source: scripts/workspace/__tests__/status.test.ts:374-385, scripts/workspace/__tests__/status.test.ts:488-511, checked 2026-11-21.
- Three tests pin the layout-1 case: the one migrate line, the `migrate` list of seven entries with no effort, and that a `workspace.md` with `layout: 2` gives `Stage: no active work` though the layout-1 files remain. Source: scripts/workspace/__tests__/status.test.ts:387-423, checked 2026-11-21.
- One test on each of four fixtures (idea-mid-define, spec-mid-build, no-active-work and layout-0.8) pins that the file tree, `.git` included, has the same hash before and after `status` and `status --json`. Source: scripts/workspace/__tests__/status.test.ts:425-455, checked 2026-11-21.
- The layout-0.8 fixture's README says `brain status` must report "run setup-brain to migrate", because the repo has no `docs/agents/workspace.md` and holds the 0.8 markers. Source: scripts/workspace/__tests__/fixtures/layout-0.8/README.md:29-31, checked 2026-11-21.
- Tests pin that a run from a folder inside the repo reports on the whole repo, that `--verbose`, `--json --json` and `IDEA-001` print the usage and exit 2, and that a `workspace.md` with a path outside the repo exits 1 and names the file. Source: scripts/workspace/__tests__/status.test.ts:457-486, checked 2026-11-21.
- One test writes a note that says "Next: ask settled row 01." and "Waiting on the user: none." and pins that line 3 still names IDEA-001#06, line 5 still names IDEA-001#08, and the JSON has no `note` key. Source: scripts/workspace/__tests__/status.ts.test.ts:12-27, checked 2026-11-21.
- One test adds a research record with `status: in-progress`, `outcome: blocked` and `from: IDEA-001#05` and pins that line 3 holds `blocked: IDEA-001#05` and not `in progress: IDEA-001#05`, and that `red` holds the record's line. Source: scripts/workspace/__tests__/status.ts.test.ts:29-63, checked 2026-11-21.
- `expectEntry` pins the hook head: the protocol and router paths, "load brain:using-brain", "Follow its Start procedure before dependent work", and the order protocol, `# The brain CLI`, `# brain status`; `noWorkStatus` is the five no-work lines under `# brain status`. Source: scripts/hooks/__tests__/session-start.test.ts:26-46, checked 2026-11-21.
- Two tests pin the wiring: the manifest's `hooks` value, one `SessionStart` entry whose only key is `hooks`, and the exec-form command. Source: scripts/hooks/__tests__/session-start.test.ts:143-179, checked 2026-11-21.
- One test uses a stub whose `brain status --json` prints `{ report: ["Stage: no active work"] }` and pins that the script path is given as JSON data for one argument. Source: scripts/hooks/__tests__/session-start.test.ts:71-81, scripts/hooks/__tests__/session-start.test.ts:182-196, checked 2026-11-21.
- Tests pin that the hook text ends with the five no-work lines for the sources `startup`, `clear`, `compact`, `resume` and `fork`, for the unknown source `teleport`, for an input with no source and for an input that is not JSON, and that resume changes no root `AGENTS.md` or `CLAUDE.md`. Source: scripts/hooks/__tests__/session-start.test.ts:198-235, checked 2026-11-21.
- Tests pin the hook's five lines on the idea-mid-define and spec-mid-build fixtures, the absence of a `# docs/STATUS.md` section, the migrate line on the layout-0.8 fixture, and that the repo is `CLAUDE_PROJECT_DIR` wherever the hook starts. Source: scripts/hooks/__tests__/session-start.test.ts:237-288, checked 2026-11-21.
- Tests pin the size rules: a plugin path too long for the budget gives "Brain startup failed" with no status part; a report of 500 lines is cut at a line end with the cut line; a multibyte report stays under 10,000 bytes. Source: scripts/hooks/__tests__/session-start.test.ts:291-325, checked 2026-11-21.
- Tests pin the failure lines: a project folder that does not exist gives "failed to start", and a `workspace.md` with `max_parallel: 0` gives "failed with exit 1: docs/agents/workspace.md: max_parallel: 0 is not a whole number of 1 or more", on startup and on resume. Source: scripts/hooks/__tests__/session-start.test.ts:327-347, scripts/hooks/__tests__/session-start.test.ts:361-374, checked 2026-11-21.
- One test pins that on resume a note of 1,000 lines is in no part of the hook text. Source: scripts/hooks/__tests__/session-start.test.ts:349-359, checked 2026-11-21.
- Tests pin six shapes of output the hook cannot read, with the problem lines "it is not JSON" and "it has no `report` list of strings"; three of the stub outputs still carry a `note: null` key. Source: scripts/hooks/__tests__/session-start.test.ts:377-425, checked 2026-11-21.
- fixtures.test.ts pins, for each of the three layout-2 fixtures, a README, `layout: 2`, the specs folder `docs/specs`, one or more files of each listed type, and that every workspace file passes `checkDoc`; its header says the frontier each README names is asserted through `brain status`. Source: scripts/workspace/__tests__/fixtures.test.ts:1-8, scripts/workspace/__tests__/fixtures.test.ts:19-25, scripts/workspace/__tests__/fixtures.test.ts:112-144, checked 2026-11-21.
- fixtures.test.ts pins that the layout-0.8 fixture has no workspace config, holds each layout-1 file kind, and keeps its decision and research records without frontmatter. Source: scripts/workspace/__tests__/fixtures.test.ts:146-184, checked 2026-11-21.

### What the fixtures hold
- The idea-mid-define README states the fixture's purpose, what it holds, a table of its ten map rows with the expected frontier answer for each, and what brain must report: check clean, IDEA-001 active in define, frontier rows 06, 07 and 08, waiting rows 06 and 08, research row 07 to start, row 05 in progress, last step row 04, next step row 06, red none, no spec. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/README.md:1-40, checked 2026-11-21.
- The idea of that fixture has `status: define`, an intent with the template comment in place of a "Confirmed by" line, ten map rows (three resolved with result links, one `superseded by 06`, one in-progress, five open), and two fog items of which one says "once the merge rule is known"; the pinned waiting line names rows 06 and 08 only. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/docs/ideas/IDEA-001-sync-notes.md:1-39, scripts/workspace/__tests__/status.test.ts:116, checked 2026-11-21.
- The research records of that fixture are RES-001 (`status: resolved`, `from: IDEA-001#02`, one follow-up line) and RES-002 (`status: in-progress`, `kind: task`, `from: IDEA-001#05`, no outcome), and the pinned next step shows row 05 as `in progress:`. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/docs/research/RES-001-store-change-feed.md:1-18, scripts/workspace/__tests__/fixtures/idea-mid-define/docs/research/RES-002-sync-test-account.md:1-16, scripts/workspace/__tests__/status.test.ts:114, checked 2026-11-21.
- The no-active-work README states the fixture's purpose and holdings and what brain must report: check clean with the one "No open rows" line in each plan's Parallel waves, no active effort, no stage, an empty frontier for both specs, the parked idea's row 01 not reported, no next step, no waiting decision, red none, and the specs each idea produced. Source: scripts/workspace/__tests__/fixtures/no-active-work/README.md:1-26, checked 2026-11-21.
- The ideas of that fixture are IDEA-001 (`status: specced`, intent confirmed by Sam on 2026-09-01, three rows of which row 01 is `superseded by 03` and still names DEC-001) and IDEA-002 (`status: parked`, four intent fields that read `<not yet known>`, the note "Parked on 2026-09-20 by the user: dark mode first.", one open interview row with no blocker, one fog item). Source: scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-001-dark-mode.md:1-33, scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-002-offline-mode.md:1-31, checked 2026-11-21.
- The spec-mid-build README states the fixture's purpose and holdings, a table of its seven plan rows with the expected frontier answer, and what brain must report: check clean, SPEC-001 active in build, frontier row 05, row 04 in progress, last step row 03, no waiting decision, red none, and SPEC-001 as the spec that IDEA-001 produced. Source: scripts/workspace/__tests__/fixtures/spec-mid-build/README.md:1-36, checked 2026-11-21.
- The idea of that fixture has `status: specced`, an intent confirmed by Sam on 2026-10-12, three resolved rows and an empty "Not yet specified" section. Source: scripts/workspace/__tests__/fixtures/spec-mid-build/docs/ideas/IDEA-001-invoice-export.md:1-33, checked 2026-11-21.
- The three `spec.md` files of the fixtures hold `spec` and `sources` in their frontmatter and no status, and each ends with an "Open Questions" section that says "None."; the report uses their `sources` for `ideas[].specs` and their H1 for the title. Source: scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-001-theme-tokens/spec.md:1-43, scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-002-theme-switch/spec.md:1-43, scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/spec.md:1-47, scripts/workspace/status.ts:140-143, scripts/workspace/status.ts:170-174, checked 2026-11-21.
- The three `tasks/plan.md` files of the fixtures say above the task table "This table holds the only status of each task", and hold the task table, a Parallel waves section, an Overview, and an "Open questions" section that says "None."; the report reads only the task table and, as a fallback, the H1. Source: glob scripts/workspace/__tests__/fixtures/*/docs/specs/*/tasks/plan.md (no-active-work SPEC-001 lines 1-30, no-active-work SPEC-002 lines 1-31, spec-mid-build SPEC-001 lines 1-46), scripts/workspace/status.ts:141-144, scripts/workspace/map.ts:118-123, checked 2026-11-21.
- The plan of no-active-work SPEC-002 has row 02 `superseded by 03` and rows 01, 03 and 04 resolved, and the plan of spec-mid-build SPEC-001 has rows 01 to 03 resolved, row 04 in-progress and rows 05 to 07 open, with checkpoint 03 as a blocker of rows 04 and 05. Source: scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-002-theme-switch/tasks/plan.md:15-20, scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:17-25, checked 2026-11-21.
- The three `tasks/todo.md` files of the fixtures say "The row in `plan.md` holds the status and the rows that block it", and hold the ticked and unticked boxes of each block, a "Superseded by task 03" description, and a user-review box in three checkpoint blocks (no-active-work SPEC-001 line 40, no-active-work SPEC-002 line 56, spec-mid-build SPEC-001 line 95); the status code reads no `todo.md`. Source: glob scripts/workspace/__tests__/fixtures/*/docs/specs/*/tasks/todo.md (no-active-work SPEC-001 lines 6-40, no-active-work SPEC-002 lines 6-56, spec-mid-build SPEC-001 lines 6-95), scripts/workspace/status.ts:140-141, checked 2026-11-21.
- The seven decision records of the three fixtures carry `status: accepted` (six) or `status: superseded by DEC-002` (one, whose body repeats the link), a `kind`, a `from` row and in three cases `evidence`; DEC-003 of spec-mid-build is accepted with `from: SPEC-001#04`, a row that is still in-progress; the status code reads no decision record. Source: glob scripts/workspace/__tests__/fixtures/{idea-mid-define,no-active-work,spec-mid-build}/docs/decisions/DEC-*.md (the frontmatter of each; no-active-work DEC-001 line 14), scripts/workspace/status.ts:137-141, scripts/workspace/status.ts:189-194, checked 2026-11-21.
- The research records of the no-active-work and spec-mid-build fixtures are each `status: resolved`, `kind: research`, with a `from` map row and a Follow-ups section; the report uses no resolved record. Source: scripts/workspace/__tests__/fixtures/no-active-work/docs/research/RES-001-system-theme-css.md:1-18, scripts/workspace/__tests__/fixtures/spec-mid-build/docs/research/RES-001-spreadsheet-apps.md:1-17, scripts/workspace/status.ts:199-206, checked 2026-11-21.
- The three fixture copies of `docs/agents/workspace.md` are byte-identical; line 32 says a spec lists its sources and links run one way, line 33 says a resolved map row links to its DEC or RES file, lines 36-43 give the active-effort rule with four steps that end in "Otherwise, ask the user", and lines 45-49 give the frontier rule and say an idea with `status: specced` is done. Source: `cmp` of the three files (no output), scripts/workspace/__tests__/fixtures/idea-mid-define/docs/agents/workspace.md:32-49, checked 2026-11-21.
- Those copies differ from the current template `skills/setup-brain/workspace.md` in nine places of the `diff`: the template has `specs: specs` and a `max_parallel` key where the copies have `specs: docs/specs`, a longer `brain <cmd>` section, a "Session state" section with a table of the five lines' meanings, the sentence that a `parked` idea waits until the user names it, other text for steps 1 and 4 of the active-effort list and for the Resume section, a line for a `done` idea, and a "Background work" section. Source: `diff skills/setup-brain/workspace.md scripts/workspace/__tests__/fixtures/idea-mid-define/docs/agents/workspace.md`, skills/setup-brain/workspace.md:26-41, skills/setup-brain/workspace.md:67, checked 2026-11-21.
- Line 7 of each of the three fixture READMEs says the workspace copy has "the default paths", while the copies set `specs: docs/specs`, a test calls that "not the default", and the default specs folder is `specs`. Source: scripts/workspace/__tests__/fixtures/idea-mid-define/README.md:7, scripts/workspace/__tests__/fixtures/spec-mid-build/README.md:7, scripts/workspace/__tests__/fixtures/no-active-work/README.md:7, scripts/workspace/__tests__/fixtures.test.ts:125-129, scripts/workspace/config.ts:36-41, checked 2026-11-21.
- The no-active-work README says "Stage: none.", while the pinned report line is `Stage: no active work`. Source: scripts/workspace/__tests__/fixtures/no-active-work/README.md:20, scripts/workspace/__tests__/status.test.ts:144, checked 2026-11-21.

### Texts that disagree with the code
- The workspace template and this repo's copy say the Stage line gives each reported effort's "stage from current rows", while an idea's stage comes from its frontmatter `status`. Source: skills/setup-brain/workspace.md:37, docs/agents/workspace.md:37, scripts/workspace/effort.ts:48-49, checked 2026-11-21.
- The incremental-implementation skill says "A checkpoint row on the frontier stops the build for the user's review", while a checkpoint is not a decide type and so is never in the waiting line. Source: skills/incremental-implementation/SKILL.md:226, scripts/workspace/status.ts:29, checked 2026-11-21.
- The protocol keeps "user waits in the active effort's rows and records" and calls a user-run step a do row, and the glossary says a do row can be done "by the user from a checklist", while a do row (type `task`) is not a decide type and so is never in the waiting line. Source: protocol/PROTOCOL.md:54, GLOSSARY.md:52-54, scripts/workspace/status.ts:29, checked 2026-11-21.
- The decision format says a decision is "`proposed` while the decision waits on the user", while the waiting line is made from frontier rows only. Source: skills/domain-modeling/DEC-FORMAT.md:40, scripts/workspace/status.ts:130, checked 2026-11-21.
- The migrated SPEC-009 still holds an older rule for the hook: a user story with `brain status` alone on resume and fork, and a task whose acceptance names the matcher `startup|resume|clear|compact` and the status only on resume; today's hooks file has no matcher and the hook reads no source. Source: specs/SPEC-009-workspace/spec.md:316, specs/SPEC-009-workspace/tasks/todo.md:236-237, scripts/hooks/claude-code.json:1-15, scripts/hooks/session-start.ts:124-131, checked 2026-11-21.

## Follow-ups
- Should a test cover a branch that names a parked idea? Today the report then shows `Stage: finished` with the idea's open row as the next step and as waiting on the user, and `no-active-work/README.md:21` says the row is not reported.
- Should the three fixture copies of `docs/agents/workspace.md` follow the current template? Their READMEs call them a copy of it, and they differ from it.
- Should four texts be corrected to match the code: the exit-code comment at `scripts/brain.ts:8`, "stage from current rows" in the workspace template, "the default paths" in the fixture READMEs, and "Stage: none." in `no-active-work/README.md:20`?
- Should a test cover the three report texts that no test asserts (the Red part for a blocked record, the plural forms, the hook's signal line)?

## Next action
None.
