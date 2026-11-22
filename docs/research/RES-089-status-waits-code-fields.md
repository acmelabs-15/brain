---
id: RES-089
status: resolved # in-progress | resolved
kind: research
from: IDEA-016#17 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-21
outcome: answered
---
# RES-089: How Brain's code defines, creates and checks status and wait fields

## Question
How does Brain's code define, create and validate the stored status and wait fields of each item kind: the schemas, the templates, `brain new-doc` and `brain check`?

## Answer
Sufficient answer: for each item kind (idea, spec, map row, plan row, checkpoint, decision record, research record), with a source per claim: the stored status and wait fields (frontmatter key or table column) or that it stores none; the allowed values and the exact code that defines and validates them; what each template writes at creation and what `brain new-doc` fills in; every `brain check` rule on status, results, Blocked by, supersession and record links, and what no rule checks; every place in this code that holds a status value or a wait word as a literal, as a list a later change can work from; what each unit test pins; each place where two item kinds use a different mechanism for the same concept. The record states what it could not establish and names contrary evidence.

The condition is met. Each claim below has a finding with its source, under Findings, by its label (A01, B03 and so on). The code is the worktree at commit `dfcab49b`; `scripts/` has no uncommitted change. The 16 non-test files that this record cites under `scripts/workspace` and `scripts/lib` are byte-identical to the installed plugin 0.13.0 (L03).

Three independent checks read the first version of this record on 2026-11-21. This version holds their corrections; the sub-heading "Checks" at the end of the Answer gives the count.

### The answer in short
- Status is stored in three ways. Ideas, decision records and research records store a `status` key in frontmatter. Map rows, plan rows and checkpoints store it in the Status column of a table. A spec, a plan file, a todo file and a phase store none (A01, A11, A13, A24).
- A fourth state exists by design: no status. A file with a `migrated` key may omit `status`. Seven records of this repo store none, and each reader treats the absent value in its own way (A25, A30).
- What an item waits on, with its target, is stored in one place only: the Blocked by column of a map or plan table. It holds two-digit row numbers of the same table. No file type has a wait key in its frontmatter (A04, A11, A20, A21).
- That an item waits, with no target, is stored in three status values. `outcome: blocked` on an in-progress research record: `brain status` reads it and shows the row as blocked (A26). `status: proposed` on a decision record: the format guide says that the decision waits on the user, and the code has two rules on it (A27). `status: parked` on an idea: the workspace template says that the idea waits until the user names it, and the code counts it as finished (A28). The code itself calls only the first of these blocked; the word "waits" for the other two is in the instruction files.
- A plan stores a worked-out copy of its wait order: the Parallel waves section. `brain check` keeps it equal to what `brain plan` prints. A map has no such copy (C17).
- Four value sets exist, each defined by different code: idea (define, specced, done, parked), row (open, in-progress, resolved, superseded by NN), decision (proposed, accepted, superseded by DEC-NNN) and research (in-progress, resolved, with outcome answered, partial, blocked) (A02, A05, A09, A13).
- The schema rejects every key that it does not list. Today `blocked-by` on an idea or a spec, and `status` on a spec or a plan, are findings (A16).
- `brain new-doc` fills the ID, the date and the title only. Each first status is the template's own text: define, accepted, in-progress, and no status for a spec (B01, B04, B05, B07, B11).
- No code under `scripts/workspace` changes a status after creation. `brain check` only reads. Under `scripts/setup`, the migrate mode also writes frontmatter; it writes no status (B14, B16).
- `brain check` has many rules for map rows and for a finished idea, and few for a plan row. One rule compares a row's status with a blocker's status: a row still to do must not wait on a superseded row. No rule requires a blocker to be resolved before its row is in-progress or resolved (C05 to C11, D01 to D19).

### Each item kind
The column "Stored status" is for a file with no `migrated` key. A file with that key may store no status (A25).

| Item kind | Stored status | Allowed values, and the code | Stored wait | Result or link fields | First value at creation |
|---|---|---|---|---|---|
| Idea | `status` in frontmatter | define, specced, done, parked: `oneOf` at `schema.ts:136` (A02) | No field (A04). The value `parked` is a wait with no target (A28). Pending questions and waits are prose in Notes (B03) | `result`: DEC-NNN or a commit SHA, required when status is done (A03) | `status: define`, empty `result:` (B01) |
| Spec (`spec.md`) | None (A11). Its state is worked out: finished when no row of its plan is open or in-progress (A29) | None | None | `sources`: list of IDEA, DEC and RES IDs (A12) | `sources: []` (B07) |
| Plan and todo files | None (A11) | None | The plan stores the Parallel waves section, a worked-out copy (C17) | `spec` only | `spec` only (B08, B10) |
| Map row | Status column | open, in-progress, resolved, superseded by NN: `rowStatus` at `schema.ts:210` (A13) | Blocked by column: row numbers of the same map (A20, A21) | Result column: free text; DEC and RES IDs are read from it (C05) | An agent writes the row; the template comment shows `open`, `—`, `—` (B02) |
| Plan row (task) | Status column | Same regex as a map row (A13, A14) | Blocked by column: row numbers of the same plan | Result column: free text; no rule of `brain check` reads it (C08, D04) | An agent writes the row; the template comment shows `open`, `—`, `—` (B08) |
| Checkpoint | Status column of a plan row with type `checkpoint` (A23) | Same regex as a task row | Blocked by column; its blockers that are tasks are its phase (A24, C09) | Result column, as a task row | As a plan row (B08); a block of unticked boxes in `todo.md` (B10) |
| Phase | None: worked out from a checkpoint's Blocked by cell (A24) | None | None | None | None |
| Decision record | `status` in frontmatter | proposed, accepted, superseded by DEC-NNN: regex at `schema.ts:149` (A05) | No field. The value `proposed` is a wait on the user with no target (A27) | `from`, `evidence`, `decided` (A06, A07, A08) | `status: accepted`, `decided: <today> by <name>` (B04) |
| Research record | `status` in frontmatter, with optional `outcome` | in-progress, resolved; outcome answered, partial, blocked: `oneOf` at `schema.ts:175-176` (A09, A10) | `outcome: blocked` marks the record, and through `from` its row, as blocked (A26). The blocker and the retry condition are prose under Next action (B06) | `from`, `evidence`, `date` (A07, A08) | `status: in-progress`, no `outcome` line (B05) |

### Every `brain check` rule on status, results, Blocked by, supersession and links
| Rule | Applies to | Finding text | Code | Label |
|---|---|---|---|---|
| The frontmatter is absent or cannot be read | every file type | `frontmatter: missing`; `frontmatter: missing closing delimiter`; `frontmatter: not valid YAML (…)`; `frontmatter: not a map of fields` | `schema.ts:297-314`, `321-328` | A33 |
| A required field is absent | IDEA, DEC, RES `status`; DEC, RES `from`; spec `sources`. Not on a migrated file | `<key>: missing` | `schema.ts:240-247` | A16 |
| A decision that is not proposed has no `decided` | DEC. Not on a migrated file | `decided: missing` | `schema.ts:157-166`, `244-245` | A06 |
| A value is not allowed | every frontmatter field that is present, on a migrated file too | `status: "closed" is not define, specced, done or parked` and the like | `schema.ts:249-252` | A16, A17 |
| A key is not in the schema | every file type | `<key>: not a field of a <type> file` | `schema.ts:234-236` | A16 |
| The `migrated` value is not 0.8 | every file type | `migrated: 0.9 is not 0.8` | `schema.ts:237-238` | A16 |
| Resolved research with a partial or blocked outcome | RES, on a migrated file too | `status: resolved requires outcome: answered, not <outcome>` | `schema.ts:100-105` | A10 |
| A done idea has no result | IDEA. Not on a migrated file | `result: missing` | `schema.ts:138` | A03 |
| An idea's result is a number | IDEA | `result: 4417305 is a number: put the commit SHA in quotes` | `schema.ts:124-128` | A03 |
| A superseding decision does not exist | DEC | `status: superseded by DEC-NNN, which does not exist` | `check.ts:178-184` | C04 |
| An idea's result decision does not exist | IDEA | `result: DEC-NNN does not exist` | `check.ts:186-189` | C04 |
| A source does not exist | spec | `sources: <ID> does not exist` | `check.ts:190-201` | C04 |
| A spec folder lacks a fixed file | spec folder | `file: missing required plan file` and the like | `check.ts:127-154` | C03 |
| The file holds no table with the exact header | idea, plan | `map: no table with the columns …`; `plan: no table with the columns …` | `map.ts:48-56`, `118-123` | A32 |
| A row breaks the format | map row, plan row | `row NN: status "done" is not open, in-progress, resolved or superseded by NN`; `row NN: blocked by "8" is not a two-digit row number`; and the like | `map.ts:73-97` | A20 |
| A row repeats a number | map row, plan row | `row NN: an earlier row has the same number` | `map.ts:130-132` | A21 |
| A blocker or a replacement names no row of the table | map row, plan row | `row NN: blocked by MM, which is not a row in this map`; `row NN: superseded by MM, which is not a row in this map` | `map.ts:144-153` | A21 |
| Replacement links form a loop | map row, plan row | `row NN: superseded-by cycle (01 -> 02 -> 01)` | `map.ts:154-161` | A21 |
| A resolved map row names no record | map row | `row NN: resolved, but its result names no DEC or RES file` | `check.ts:296-299` | C05 |
| A Result names a record that does not exist | map row, any status | `row NN: result DEC-NNN does not exist` | `check.ts:300-302` | C05 |
| A resolved map row names research that is not answered | map row | `row NN: RES-NNN is not answered research (status: …, outcome: …)` | `check.ts:255-276`, `303-304` | C06, C18 |
| A resolved map row names a proposed decision | map row | `row NN: DEC-NNN is proposed and cannot resolve a map row` | `check.ts:305-310` | C05 |
| Blocked by edges form a loop | map; plan | `cycle: 08 is blocked by 10, 10 by 08` | map: `check.ts:314-323`; plan: `plan.ts:133-136` through `check.ts:405-408` | C07, C10 |
| A row still to do waits on a superseded row | map row; plan row | `row NN: blocked by MM, which is superseded by KK` | map: `check.ts:316-320`; plan: `plan.ts:137-145` | C07, C10 |
| A checkpoint blocks a task that does not depend on its phase | plan | `row NN: blocked by checkpoint MM, but depends on no task in the phase of MM` | `check.ts:241-244` | C09 |
| A task depends on a phase whose checkpoint does not block it | plan | `row NN: depends on KK, in the phase of checkpoint MM, but MM does not block it` | `check.ts:245-249` | C09 |
| The Parallel waves section is absent or old | plan with one row or more | `Parallel waves: missing; …`; `Parallel waves: stale; …` | `check.ts:399-416` | C10 |
| A finished idea has a row still to do | IDEA with done or specced | `status: done, but row NN is open` | `check.ts:344-346` | C11 |
| A finished idea has fog | IDEA with done or specced | `status: done, but Not yet specified still holds fog` (or `is missing`) | `check.ts:347-352` | C11 |
| A finished idea has no confirmed intent | IDEA with done or specced | `status: done, but Intent has no confirmation` | `check.ts:353-356` | C11 |

How the rules combine:
- The order per file. A file whose frontmatter cannot be read gets that one finding, and no link, row, finished-idea or waves rule runs on it (A33).
- A migrated file. The switch is the presence of the key `migrated`, with any value. Such a file gets the frontmatter rules for the fields it carries, the rules across fields and the link rules. Its H1, its finding lines, its rows, the finished-idea rules and the waves rule are skipped. The file name rule, the repeated-ID rule and the rule that `spec.md` exists still apply. Only the rule on a spec's plan and todo tests the value `0.8` (A16, A18, C12, C20).
- The order in a plan. One row problem of any kind stops the checkpoint rule and the waves rule. A plan's loop and its superseded-blocker finding come only through the waves rule. So a plan gets no loop finding while one row has a problem, and a plan with no row gets no waves finding. A map differs: its Result rules and its loop check run on the rows that are left (C08, C10, C19).
- What "exists" means. A link exists when a workspace file whose name carries the ID is in its folder, whatever the file holds. The research rule and the proposed-decision rule then read the frontmatter of the named record, also of a migrated one (C18).
- Exit codes. 0 with no finding; 1 with a finding, or with a workspace config it cannot use; 2 with an argument (C13).

### What no rule checks
"No rule" means no rule of `brain check`. Eval graders outside `scripts/` check items 4 and 12 for their own fixtures (L04).

1. An idea with status define or parked: it may hold rows still to do, fog and no confirmation. The row rules still apply to its map (D01).
2. A specced idea: it needs no `result`, and no rule looks for a spec whose `sources` names it (D02).
3. A `result` that names a spec: `result: SPEC-001` is a finding today (D03).
4. A plan row's Result: empty on a resolved row, a link to a missing record, or a value on an open row all pass (D04).
5. A status against a blocker that is open, in-progress or resolved: a row may be in-progress or resolved while a blocker is open. The one rule that reads both statuses is the superseded-blocker rule, and it tests only rows still to do and only direct blockers (D05).
6. An open or in-progress map row with a Result: allowed; only the existence of a DEC or RES it names is checked (D06).
7. Decision supersession: a decision may name itself, two decisions may name each other, and the status of the replacement is free (D07).
8. `from` and `evidence`: the form is checked; the idea, spec, row or research record they name need not exist (D08).
9. A row in progress against its research record: a row may stay in-progress when its record is resolved and answered; an in-progress record may carry `outcome: answered` (D09).
10. The value lists in the template comments: no test compares them with the schema (D10).
11. The prose places for a wait or an open question: Notes, Follow-ups, Next action, Open questions and the Decisions list are read by no code under `scripts/` (D11).
12. The tick boxes of a task or checkpoint block (D12).
13. A spec's state: a spec has no status, so no rule compares anything with its plan rows (D13).
14. Any wait between two files: a Blocked by cell that names `IDEA-003#02` is a format finding (A20).
15. The status of the decision that an idea's `result` names: it may be proposed. A resolved map row may not name a proposed decision (D15).
16. The type of a map row against its record: a resolved research row may name only a DEC, and a resolved interview row only a RES. A record's `from` is not compared with the row that names the record (D16).
17. The blocks of `todo.md` against the rows of `plan.md`: a block with no row, or a row with no block, passes (D17).
18. A resolved research record: it needs no `outcome`, no finding line and no answer text (D18).
19. A superseded row: it may keep its Blocked by cell and a Result (D19).

Three of these gaps are pinned by a test: the three clean fixtures hold items 1, 2 (first part) and 6 (for a superseded row), and `check.test.ts:145-157` asserts no finding for them (E17). The other gaps rest on the code lines cited and on the probes named below.

### Every literal status value and wait word in this code
The table gives value literals, messages, comment lines, field names and key reads for the non-test files. Lines are in the worktree. Rows 18, 19, 20 and 24 own the depth of the files marked with their row.

| File | Lines | Literal |
|---|---|---|
| `scripts/workspace/schema.ts` | 102-103 | `resolved`, `partial`, `blocked`, and the message `status: resolved requires outcome: answered` |
| | 110-111 | the `from` forms: IDEA-NNN, SPEC-NNN, with `#NN`, and `user` |
| | 114 | `evidence`: RES-NNN |
| | 117 | `result`: DEC-NNN or a commit SHA |
| | 136, 138 | `define`, `specced`, `done`, `parked`; `done` again for the result rule |
| | 149-150, 165 | `proposed`, `accepted`, `superseded by DEC-NNN`, in the regex and in the message; `proposed` again for the decided rule |
| | 175-176 | `in-progress`, `resolved`; `answered`, `partial`, `blocked` |
| | 191 | `sources`: IDEA, DEC, RES |
| | 210 | `open`, `in-progress`, `resolved`, `superseded by NN` |
| | 218-219, 222-223 | the column names `Status`, `Blocked by`, `Result`; the row types `interview`, `prototype`, `ideate`, `research`, `task`, `checkpoint` |
| | 237-238 | `0.8` |
| | 10, 29, 100, 120, 137, 209 | comments that name `status`, a proposed decision, a partial or blocked outcome, a done idea and `superseded by NN` |
| `scripts/workspace/check.ts` | 88 | which file types hold a row table: IDEA, plan |
| | 145 | `0.8` |
| | 179-180, 183 | the read of `data.status`; `superseded by DEC-NNN`, in the regex and in the message |
| | 187-188, 195-198 | DEC-NNN as a result; IDEA, DEC, RES as a source |
| | 215, 225, 228 | `task`, `superseded`, `checkpoint` |
| | 231, 241 | the field name `blockedBy` |
| | 243, 247 | the messages with `blocked by checkpoint`, `depends on`, `phase` |
| | 266, 268-269, 273 | the read of `status` and `outcome`; `resolved`, `answered`, `absent`, and the message `is not answered research` |
| | 296-298, 301, 303 | DEC or RES in a Result; `resolved` |
| | 307-308 | `proposed` |
| | 318 | the message `blocked by …, which is superseded by …`; the field name `supersededBy` |
| | 341, 346, 349, 351, 355 | `done`, `specced`, and the four finished-idea messages |
| | 347, 350, 353-354 | `Not yet specified`, `None`, `Intent`, `Confirmed by <name> on <date>.` |
| | 360, 412, 415 | `## Parallel waves`, `missing`, `stale` |
| | 468 | the read of `data.status` for the finished-idea rules |
| | 5, 173-174, 185, 219-222, 255, 279-281, 306, 339 | comments that name a superseded-by, a done idea, blocked-by, a phase, resolved and proposed |
| `scripts/workspace/new-doc.ts` | 29-40, 65-68 | no status value; the four types and the four placeholders |
| `scripts/workspace/templates/IDEA.md` | 3-4, 8, 16, 23, 26, 28, 31 | the status line and its comment; the result comment; the heading `## Intent`; the confirmation line; the Notes comment with "pending questions", the labels Settled, Source, Conditions, Open and Next, `in-progress` and "waits with their retry condition"; the row form with `open`; the table header; the heading `## Not yet specified` |
| `scripts/workspace/templates/DEC.md` | 3, 9-11 | the status line and its comment; `from`, `evidence`, `decided` |
| `scripts/workspace/templates/RES.md` | 3, 5, 10, 22, 25 | the status line and its comment; `from`; the outcome comment; Follow-ups; Next action with "blocker and retry condition" |
| `scripts/workspace/templates/plan.md` | 13, 15, 17, 20-21, 29 | "the only status of each task", `resolved`; the row form with `open`; the table header; the heading `## Parallel waves` and its placeholder; an open question |
| `scripts/workspace/templates/todo.md` | 6, 8, 13, 16, 18, 23-24 | "holds the status and the rows that block it"; the block headings `## Task 01:` and `## Checkpoint 02:`; the tick boxes; `**Files likely touched:**` |
| `scripts/workspace/templates/spec.md` | 3, 43 | `sources`; Open Questions |
| `scripts/workspace/map.ts` (row 18) | 20, 37-38, 88, 93, 98, 104, 146, 150, 160, 167-169 | the status union type; the empty-cell values; the status message, which repeats the value list by hand; the blocked-by messages; `superseded by NN`; the frontier's `resolved` and `open` |
| | 22, 24, 75, 91, 105-106, 145, 148, 156 | the field names `blockedBy` and `supersededBy` |
| `scripts/workspace/graph.ts` (row 18) | 19, 89, 110 | `open`, `in-progress`; `resolved`; `superseded` |
| | 28, 73, 95, 108, 126, 129 | the field name `blockedBy` |
| `scripts/workspace/plan.ts` (rows 18 and 28) | 47, 58, 77, 99, 101, 105, 142, 174, 178, 211 | the block headings `Task` and `Checkpoint`; `**Files likely touched:**`; `is blocked by`; `task`, `checkpoint`, `superseded`; `blockedBy`; the superseded-blocker message; `No open rows: every row is resolved or superseded.` |
| `scripts/workspace/status.ts` (row 19) | 29, 38, 47, 114, 117, 119, 129, 160, 198-199, 202-203, 209-210, 232-237, 269, 278 | the decide types; `partial`, `blocked`; the stages `define`, `build`, `finished`; `resolved`, `in-progress`; the reads of `status`, `from` and `outcome`; the texts `is blocked; read the record for the retry condition`, `in progress:`, `blocked research` and `Waiting on the user:` |
| `scripts/workspace/effort.ts` (row 19) | 3-4, 49 | the comment that names define, specced, done and parked; `define` |
| `scripts/setup/migrate.ts` (row 20) | 13, 39, 261, 371, 391, 638 | comments that say it writes no status; `migrated: 0.8`, `decided` and the date field in template strings |
| `scripts/evals/interview-cases.ts` (row 24) | 23, 38-40, 56-58, 81-82, 104-106, 114, 134-135, 139, 160, 207, 275 | `status: accepted`; a record builder with a status parameter; hand-written rows with open, in-progress, resolved, `superseded by 03` and Blocked by cells; `status: define` |
| `scripts/evals/keystone-cases.ts` (row 24) | 13, 15, 106, 172 | hand-written rows with `open`; `status: accepted`; `status: define` |

Other holders, with the command that lists their lines:
- The six test files of this topic hold 211 lines that match a status value or a wait word (L06). Many tests replace an exact fixture string that holds a value, such as `check.test.ts:241`, `349` and `check.ts.test.ts:154`. A change of a value in a fixture breaks those lines too.
- Other TypeScript under `scripts/`: five eval tests, `scripts/lifecycle/__tests__/names.test.ts`, `scripts/setup/__tests__/migrate.test.ts`, and in `scripts/workspace/__tests__` the files `plan.test.ts`, `status.test.ts` and `status.ts.test.ts` (L05). Rows 18, 19, 20, 23 and 24 own them.
- The fixture files under `scripts/workspace/__tests__/fixtures` store status values too. Row 18 owns `plan-shapes`, row 20 owns `layout-0.8`, and row 19 owns `idea-mid-define`, `spec-mid-build` and `no-active-work`.
- Outside `scripts/`: five regex graders with a status value, one grader with tick boxes, and four `scaffold.sh` files under `evals/lifecycle` (L04). Row 24 owns them.
- The marker `0.8` has three holders: `schema.ts:237-238`, `check.ts:145` and four template strings in `scripts/setup/migrate.ts` (L08).

### What each unit test pins
All 245 tests of the six files pass at `dfcab49b` (E15).

| Test file and lines | What it pins | Label |
|---|---|---|
| `scripts/lib/__tests__/table.test.ts:6-20` | A table line splits into trimmed cells; an escaped pipe stays; a line with no closing pipe is read; a line with no first pipe is not a table line | E01 |
| `schema.test.ts:102-117` | Each template holds only the placeholders that `new-doc` fills | E02 |
| `schema.test.ts:119-136` | The IDEA, spec, plan and todo templates pass their schema as filled; a fresh DEC fails only on kind, adr-test, from and decided; a fresh RES only on kind, from and finding. So each template's status is valid as written | E02 |
| `schema.test.ts:138-169` | A DEC and a RES pass once the agent fills them, with `from: user` valid; the map and plan headers equal `tables`; a todo block has no Status line and no Dependencies field | E02 |
| `schema.test.ts:172-224` | `status` is required on IDEA, DEC and RES; `from` on DEC and RES; `decided` on an accepted DEC; `sources` on a spec; plan and todo need only `spec`; an empty value is missing; `evidence` is optional; an accepted decision needs "date by name"; a proposed one needs no `decided` | E03 |
| `schema.test.ts:227-272` | Wrong values fail on their field: idea status `closed`, decision status bare `superseded`, research status `done`, a malformed `from`, `evidence`, `sources`; an unknown key fails; `superseded by DEC-040` is valid; the four forms of `from` are valid | E03 |
| `schema.test.ts:369-439` | A migrated file needs only its identity field and the marker `0.8`; each field it carries is checked; a decided date may stand with no name; its body is not checked | E04 |
| `schema.test.ts:441-457` | The three frontmatter findings: missing, not valid YAML, not a map of fields | E18 |
| `schema.test.ts:459-470` | Row status: open, in-progress, resolved and `superseded by 03` are valid; `done`, bare `superseded`, `superseded by 3` and `superseded by DEC-031` are not | E04 |
| `schema.ts.test.ts:5-45` | Resolved research passes with no outcome or with answered; partial and blocked are valid only with in-progress; the frontmatter reader takes LF and CRLF | E05 |
| `check.test.ts:145-157` | The three clean fixtures have no finding. They hold two specced ideas with no result, a parked idea with an open row, fog and no confirmation, a define idea with open rows and fog, and a superseded row with a Result | E06, E17 |
| `check.test.ts:237-376` | A resolved map row with no record; a dangling result; a dangling blocker in a map and in a plan; a map cycle; a dangling source; a dangling `superseded by` row; a dangling superseding decision | E06 |
| `check.test.ts:476-553` | Row format: the status message, the map and plan row types, two-digit numbers, six cells, a repeated row number, and the "no table" finding for a changed header in a map and in a plan | E07 |
| `check.test.ts:556-780` | The two checkpoint findings; the waves section missing, stale (after an edge change, after a row moves to resolved, after a block's files change) and current; a padded section is current; a plan with no rows needs no section; a plan cycle; a plan row that a superseded row blocks | E08 |
| `check.test.ts:783-843` | A done idea needs a result; a DEC result must exist; a commit SHA passes; a SHA that YAML reads as a number must be quoted | E09 |
| `check.test.ts:845-921` | Migrated files keep old bodies with no row finding; migrated decisions with no kind give one line and exit 0; a layout-0.8 repo fails on missing frontmatter | E09, E18 |
| `check.test.ts:936-952` | Exit 1 with no finding line on a config it cannot use; exit 2 on an argument | E18 |
| `check.ts.test.ts:47-123` | A spec folder needs its three files; the findings reach the `red` list of `brain status --json`; a migrated spec may lack plan and todo | E10 |
| `check.ts.test.ts:125-246` | An open or in-progress map row that a superseded row blocks; a done or specced idea with a settled map passes; the three finished-idea findings; a replacement loop fails and a chain that ends in a resolved row passes | E11 |
| `check.ts.test.ts:249-355` | A row resolved by research needs status resolved and outcome answered or absent; a proposed decision cannot resolve a row, the finding reaches the `red` list of `brain status --json`, and the decision file is unchanged after `brain check`; an accepted or superseded decision can; a proposed decision beside an open row is valid | E12 |
| `new-doc.test.ts:90-152`, `224-247`, `272-281` | Each type is written from its template; a fresh DEC holds `decided: <today> by <name>` and a fresh RES holds `date: <today>`; a fresh IDEA and SPEC pass `brain check`; a fresh DEC and RES fail only on the agent's fields; a migrated file counts for the next number | E13 |

The other tests of the six files pin nothing on status or waits: file names, repeated file numbers, a wrong `kind`, the H1, the finding line, the placeholder title, the config folders, `kind` against the ADR test, and in `new-doc.test.ts` the numbers, the title, the config, parallel runs and usage (E20).

Not pinned by these six files:
- The word `parked`. The five workspace test files of this topic do not hold it; the clean fixture `no-active-work` covers it, and row 19's `status.test.ts` pins how `brain status` treats a parked idea (E16).
- The gaps under "What no rule checks", apart from the three that the clean fixtures hold (E17).
- The comment text of the templates (D10).

Tests outside the six files also fail when a status value or a row word changes: `scripts/evals/__tests__/interview-resume.test.ts`, `interview-parallel-research.test.ts`, `adr-is-dec.test.ts`, `interview-cases.ts.test.ts`, `scripts/workspace/__tests__/fixtures.test.ts` and `scripts/setup/__tests__/migrate.test.ts` (E19).

### Where two item kinds use a different mechanism for one concept
| Concept | Mechanisms today | Label |
|---|---|---|
| Where status lives | Frontmatter key (idea, DEC, RES); table column (rows, checkpoint); nowhere (spec, plan file, phase) | G01 |
| No status at all | A migrated idea, decision or research record may omit `status`. Readers differ: an idea counts as finished, a research record as not answered, a decision may resolve a row, `brain status` reports null | A25, A30 |
| How the allowed values are defined | A `oneOf` list (idea, RES); a regex through `like` (DEC); an exported regex plus a TypeScript union plus a hand-written message (rows) | G02 |
| Where the writer sees the allowed values | In a template comment (idea, DEC, RES). For a row only the types and the value `open` are in the template; `in-progress` and `superseded by NN` are in the finding text | G17 |
| Not started | `open` (rows only). An idea starts at `define`, a research record at `in-progress`, a decision at `accepted`; `proposed` is the value before the user decides | G12 |
| The word for in work | `define` (idea); `in-progress` (row, RES); none for a spec | G03 |
| The word for finished | `done` or `specced` (idea); `resolved` (row); `resolved` with outcome `answered` or none (RES); `accepted` (DEC) | G03 |
| Whether an effort is finished | Idea: the stored status, each value but `define`. Spec: worked out, no plan row is open or in-progress | G16 |
| Set aside | `parked` (idea only) | G03, A28 |
| Superseded | Inside the status value with the target: `superseded by DEC-NNN` (DEC), `superseded by NN` (row). No value for an idea, a spec or a research record | G04 |
| Check of a supersession | DEC: the target exists. Row: the target is in the table, and no loop | G04 |
| What an item produced | Frontmatter `result` (idea); Result cell with a required DEC or RES (map row); Result cell with no rule (plan row); `outcome` (RES), which is also a state; nothing (spec, DEC) | G05 |
| The status of a decision that a result names | Map row: not proposed. Idea `result`: free | D15 |
| What an item waits on, with a target | Blocked by cell (rows); nothing (idea, spec, DEC, RES) | G06 |
| That an item waits, with no target | `outcome: blocked` (RES); `proposed` (DEC); `parked` (idea); prose (idea Notes with five labels per row, RES Next action, plan and spec open questions) | G06, A26, A27, A28 |
| A stored copy of worked-out waits | Plan: the Parallel waves section, checked by `brain check`. Map: none | C17 |
| How an item names another item | A two-digit number local to the table (Blocked by, `superseded by NN`); a row of another file as `IDEA-NNN#NN` (`from`); a bare record ID (`sources`, `evidence`, `result`, `superseded by DEC-NNN`); an ID found in free text (Result cell) | G14 |
| The empty value | A cell: `—`, `-` or no text. A frontmatter key: absent or null. A list: `[]` | G15 |
| Link to the origin | `from` (DEC, RES); `sources` (spec); `result` (idea) | G07 |
| Check that a link exists | Yes: `sources`, an idea's DEC result, a map row's Result, a superseding DEC. No: `from`, `evidence`, a plan row's Result | G07 |
| Loop of waits | Map: `rowProblems`, also when another row has a problem. Plan: `brain plan`'s code through the waves rule, only when no row has a problem. Replacement loop: the row parser. DEC: none | G08, C19 |
| Finished needs settled content | Idea: yes, three rules. Map row: a record. RES: only no partial or blocked outcome. Plan row, spec: none | G09 |
| The user's approval, with name and date | DEC: the frontmatter field `decided`. Idea: the body line "Confirmed by <name> on <date>.", read by a regex | G13 |
| A stored date | `decided` (DEC): the date and the person of the decision, written at creation. `date` (RES): the day of creation. The confirmation line (idea). Nothing (rows, spec) | G10 |

### Where this topic meets another row
- Row 18 owns `map.ts`, `graph.ts` and `plan.ts`. This record uses their row format rules (A20, A21, A32), `stillToDo`, `findCycle` and `layWaves` (C07, C10, C11).
- Row 19 owns `status.ts` and `effort.ts`. `brain status` calls `checkWorkspace` for its red list (C14), reads `outcome` through `from` (A26), and `effort.ts` treats an idea as not finished only when its status is `define` (G03, A28, A29). Its `status.ts.test.ts:29-63` pins the blocked research report.
- Row 20 owns the migration. The schema's rules for a `migrated` file are here (A15, A16, A18, A25, C12, C20), and the fact that `migrate.ts` writes no status (B16).
- Row 21 owns idea-refine. Its text writes `None yet.` under Not yet specified, which the finished-idea rule reads as fog (D14).
- Row 23 owns the lifecycle checks. No topic list holds `.github/workflows/ci.yml`, so C15 is recorded here.
- Row 24 owns the evals: the graders and scaffolds that hold copies of the values (L04).
- Row 26 owns the records. 13 of the 14 idea files in the worktree carry the template's status comment (B15).
- Row 28 owns phases and waves. The checkpoint and waves rules are here as rules of `brain check` only (C09, C10, C17).

### What this record could not establish, and contrary evidence
- Outside `scripts/`, this record read only the `evals/lifecycle` graders and scaffolds (L04) and three instruction lines (A27, A28, D14). UNVERIFIED: that no hook, skill text or other file outside `scripts/` holds one more rule on these fields. Rows 21 to 25 own those files.
- The fixture files and the test files `cli.test.ts`, `fixtures.test.ts`, `plan.test.ts`, `status.test.ts` and `status.ts.test.ts` were searched by pattern and read only at the lines cited (rows 18 and 19; `cli.test.ts` is in no topic list and holds no status value).
- The claims under "What no rule checks" and the claims C18 and C19 rest on the code lines cited and on three probe scripts. The scripts run `checkDoc`, `readRows`, `layWaves` and `checkWorkspace` on changed copies of the fixtures. They are in the temporary scratchpad: `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/res-089-probe/probe.ts`, `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/res-089-probe/probe2.ts` and `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/res-089-probe/probe3.ts`. A reboot can remove them.
- Agreement with RES-090 line 280: that record says that `status: proposed` and `outcome: blocked` already name a wait. The first version of this record said that a wait is stored in one place only. That was too wide; A26 to A28 correct it.
- Contrary to DEC-051 as settled context ("waiting is never stored"): three stored values name a wait today, and code reads one of them as blocked (A26). DEC-051 names ideas, specs and rows; it does not name the two record kinds.
- Contrary to RES-073 line 103 ("no code reads a plan row's Result"): `brain status` copies each row's Result into its steps, for plan rows too (`scripts/workspace/status.ts:105-111`). `brain check` reads no plan row Result (C08); that part holds. An eval grader checks a plan row's Result for one fixture (L04).
- Contrary to the header of `schema.ts` ("new-doc, check and the migrate mode share them"): `new-doc.ts` imports nothing from `schema.ts`, and `migrate.ts` imports only `readFrontmatter`. Of the three users, only `check` uses the schemas; the templates and the schema agree only through the tests (G11, D10, E02).
- The header of `check.ts` lists "a superseded-by" among the links it checks. For a decision the check is existence only (D07).
- A trap for a wait in frontmatter (DEC-029): YAML reads a bare two-digit row number as a number, so `[01, 08, 10]` becomes 1, 8 and 10. A row number in frontmatter must be quoted or carry its file ID (A31). The schema has the same trap for a commit SHA (A03).

### Checks
Three checks ran on the first version of this record, and all three result files are present. Each issue was opened at its source again before a change. Of 49 issues, 49 hold and are fixed; two details inside confirmed issues do not hold.

- Sources check: 18 issues reported (1 blocking, 17 minor); 18 confirmed and fixed; none rejected.
- Coverage check: 19 issues reported (1 blocking, 18 minor); 19 confirmed and fixed; none rejected. Its one note outside the count, on YAML numbers, also holds and is A31.
- Contrary-evidence check: 12 issues reported (2 blocking, 10 minor); 12 confirmed and fixed; none rejected as a whole. Two details are not taken as written. Issue 7 says that five `scaffold.sh` files write rows and status lines; four do (`grep -lE 'status:|\| *(open|in-progress|resolved|superseded by [0-9]+) *\|' evals/lifecycle/*/scaffold.sh`). Issue 1 calls `proposed` and `parked` stored waits; the word "waits" for them is in two instruction files (`skills/domain-modeling/DEC-FORMAT.md:40`, `skills/setup-brain/workspace.md:67`), not in this code, and the Answer says so.

Where each issue is fixed:

| Check | Issue | Fix |
|---|---|---|
| Sources | 1 | A26, the short answer, the item table, G05, G06 |
| Sources | 2 | D05, item 5, the short answer |
| Sources | 3 | E17, the text below the test table |
| Sources | 4 | `rejected` removed; E16 |
| Sources | 5 | L02 |
| Sources | 6 | the literal table, both eval files |
| Sources | 7 | the literal table: comment lines, field names, key reads; L07 |
| Sources | 8 | the rule table: three rows; A32 |
| Sources | 9 | A25, C12, C20, C18, the rule table, "How the rules combine" |
| Sources | 10 | D11, item 11 |
| Sources | 11 | D14 |
| Sources | 12 | E14 |
| Sources | 13 | E06, E17 |
| Sources | 14 | "Where this topic meets another row", the literal notes |
| Sources | 15 | G10 |
| Sources | 16 | B15 |
| Sources | 17 | C13 |
| Sources | 18 | D01, item 1 |
| Coverage | 1 | A26, the literal table for `status.ts` |
| Coverage | 2 | C17 |
| Coverage | 3 | D05 |
| Coverage | 4 | C18 |
| Coverage | 5 | the rule table; A06 |
| Coverage | 6 | A32, the rule table |
| Coverage | 7 | A33, the rule table |
| Coverage | 8 | C08, C10, C19, G08 |
| Coverage | 9 | C13 |
| Coverage | 10 | C12, C20 |
| Coverage | 11 | D15, D16 |
| Coverage | 12 | G12, G13, G14, G15, G16 |
| Coverage | 13 | L02, G17 |
| Coverage | 14 | the literal table |
| Coverage | 15 | L05, B16 |
| Coverage | 16 | L06, L07, the literal table |
| Coverage | 17 | E01, E08, E12, E13, E18, E20 |
| Coverage | 18 | E16 |
| Coverage | 19 | B03 |
| Contrary | 1 | A26, A27, A28, G06, the short answer |
| Contrary | 2 | A25, A30 |
| Contrary | 3 | D05 |
| Contrary | 4 | the rule table: five rows; C13 |
| Contrary | 5 | D15, D16, D17, D18, D19, G09 |
| Contrary | 6 | C12, C18 |
| Contrary | 7 | L04, the scope line of "What no rule checks" |
| Contrary | 8 | the literal table, L02, L08 |
| Contrary | 9 | E16 |
| Contrary | 10 | E19 |
| Contrary | 11 | G10, G11 |
| Contrary | 12 | A29, G16 |

### Site coverage
Each site of the index `17-code-fields-sites.jsonl`, by file and lines, with the finding that covers it.

| File | Site lines and finding |
|---|---|
| `scripts/lib/__tests__/table.test.ts` | 6-8, 10-20: E01 |
| `scripts/lib/table.ts` | 1-17: A22 |
| `scripts/workspace/__tests__/check.test.ts` | 71-74, 76-130: E14. 145-157: E06, E17. 175-218: E14. 237-269, 271-290, 292-309, 311-330, 332-343, 345-359, 361-376: E06. 476-529, 531-553: E07. 556-634, 636-758, 760-780: E08. 783-843, 845-906, 908-921: E09, E18 |
| `scripts/workspace/__tests__/check.ts.test.ts` | 27-37: E14. 47-123: E10. 125-143, 145-206, 208-246: E11. 249-291, 293-355: E12 |
| `scripts/workspace/__tests__/new-doc.test.ts` | 90-152, 224-247, 272-281: E13 |
| `scripts/workspace/__tests__/schema.test.ts` | 39-99: E14. 119-136, 138-159, 161-164, 166-169: E02. 172-200, 202-224, 227-249, 265-268, 270-272: E03. 369-439, 459-470: E04 |
| `scripts/workspace/__tests__/schema.ts.test.ts` | 5-18, 20-33: E05 |
| `scripts/workspace/check.ts` | 1-11: C01, C13. 87-88: C02. 127-154: C03. 172-203: C04, D15. 214-253: C09. 255-276: C06, C18. 278-325: C05, C07, C08, C19. 327-358: C11. 360-416: C10, C17. 426-482: C01, C12, C18, C20. 488-517: C13 |
| `scripts/workspace/config.ts` | 117-159: C16 in part; all four sites are under "Sites judged not relevant" |
| `scripts/workspace/new-doc.ts` | 1-99: B11, B12, B13 |
| `scripts/workspace/schema.ts` | 1-13, 20-41: A15. 100-105: A10, A26. 107-115: A07, A08, A26. 117-128: A03. 131-141: A02, A03, A04. 142-170: A05, A06, A27. 171-184: A09, A10, A26. 185-198: A11, A12, A29. 209-210: A13. 212-225: A14. 227-258: A16, A17, A25. 292-314: A19, A33. 316-340: A18, A33 |
| `scripts/workspace/templates/DEC.md` | 3, 9-10, 11: B04, G13 |
| `scripts/workspace/templates/IDEA.md` | 3-4: B01. 16, 21-23, 31-32: B03. 25-29: B02 |
| `scripts/workspace/templates/RES.md` | 3, 5: B05, A26. 10, 21-22, 24-25: B06, A26 |
| `scripts/workspace/templates/plan.md` | 1-3, 9-10, 12-18: B08. 20-21: B09, C17. 28-29: B09 |
| `scripts/workspace/templates/spec.md` | 1-4, 42-43: B07 |
| `scripts/workspace/templates/todo.md` | 1-6, 8-21, 23-24: B10 |

The sweeps file `17-code-fields-sweeps.jsonl` was compared with the index by line range. It names no file outside the index. The one range that only the sweeps hold, `check.ts:79-85`, is the result type of `checkWorkspace` and holds no status rule.

### Sites judged not relevant
- `scripts/workspace/config.ts:1-21`, `32-49`, `84-115`: the cap on parallel sub-agents (`max_parallel`, `BRAIN_MAX_PARALLEL`). It limits how many rows of a wave start at once. It is not a stored status or wait of an item. Row 28 owns waves.
- `scripts/workspace/config.ts:117-159`: `readConfig` reads the layout number, the four folders and the cap. The layout number is the repo's migration state, which row 20 owns. The one fact this topic needs is that `brain check` reads its folders from here (C16).

## Findings

### A. The stored fields and their values
- A01: One object, `schemas`, holds the frontmatter schema of each of the six file types: IDEA, DEC, RES, spec, plan and todo. Source: scripts/workspace/schema.ts:130-198, checked 2026-11-21.
- A02: An idea's `status` is required on a new file and must be one of define, specced, done or parked, given as a `oneOf` list. Source: scripts/workspace/schema.ts:136, checked 2026-11-21.
- A03: An idea's `result` must be DEC-NNN or a commit SHA of 7 to 64 lowercase hex characters, a number gets the advice to quote it, and the field is required only when status is done. Source: scripts/workspace/schema.ts:117-128 and 138, checked 2026-11-21.
- A04: The idea schema has three fields, `id`, `status` and `result`, so an idea has no stored wait field. Source: scripts/workspace/schema.ts:132-141, checked 2026-11-21.
- A05: A decision record's `status` is required on a new file and must match the regex `^(?:proposed|accepted|superseded by DEC-\d{3})$`. Source: scripts/workspace/schema.ts:146-152, checked 2026-11-21.
- A06: A decision record's `decided` must be "YYYY-MM-DD by <name>", a migrated file may give the date alone, and a new file may leave it out only when status is proposed, so an accepted or superseded decision with no `decided` gets the finding `decided: missing`. Source: scripts/workspace/schema.ts:157-166 and 240-247, checked 2026-11-21.
- A07: `from` is one shared field of DEC and RES, required on a new file, and must name a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea, a spec or the word user; it cannot name a DEC or a RES. Source: scripts/workspace/schema.ts:107-113, 155 and 178, checked 2026-11-21.
- A08: `evidence` is an optional list of RES-NNN IDs on DEC and RES. Source: scripts/workspace/schema.ts:114, 156 and 179, checked 2026-11-21.
- A09: A research record's `status` is required on a new file and is in-progress or resolved; its optional `outcome` is answered, partial or blocked; both are `oneOf` lists. Source: scripts/workspace/schema.ts:175-176, checked 2026-11-21.
- A10: The only rule across the two research fields is that status resolved with outcome partial or blocked is a finding; no other pair is rejected. Source: scripts/workspace/schema.ts:100-105 and 183, checked 2026-11-21.
- A11: A `spec.md` has the fields `spec` and `sources` only, and a plan and a todo file have `spec` only, so none of the three stores a status or a wait. Source: scripts/workspace/schema.ts:185-197, checked 2026-11-21.
- A12: A spec's `sources` is required on a new file and is a list of IDEA-NNN, DEC-NNN or RES-NNN; a SPEC ID is not allowed. Source: scripts/workspace/schema.ts:189-192, checked 2026-11-21.
- A13: The status of a map row and of a plan row is one exported regex, `rowStatus`: `^(?:open|in-progress|resolved|superseded by \d{2})$`. Source: scripts/workspace/schema.ts:209-210, checked 2026-11-21.
- A14: `tables` gives both tables the columns Status, Blocked by and Result, gives a map row the types interview, prototype, ideate, research and task, and gives a plan row the types task and checkpoint. Source: scripts/workspace/schema.ts:212-225, checked 2026-11-21.
- A15: A field is `always`, `new` or `optional`; a file with `migrated: 0.8` needs only its identity field, because the migration writes no guessed kind or status. Source: scripts/workspace/schema.ts:1-13 and 20-31, checked 2026-11-21.
- A16: `checkFields` reports each key that the schema does not list as "<key>: not a field of a <type> file", reports a `migrated` value other than 0.8, reports a missing required field as "<key>: missing", and lets a migrated file omit every field with need `new`. Source: scripts/workspace/schema.ts:227-258, checked 2026-11-21.
- A17: A field that is present is always checked against its rule, also when its `unless` condition lets the file omit it and also on a migrated file, so a `result` on an idea with status define or specced must still be a DEC ID or a commit SHA. Source: scripts/workspace/schema.ts:240-252, checked 2026-11-21.
- A18: `checkDoc` checks the frontmatter fields, then the H1, then a research record's finding lines; for a file with a `migrated` key it returns after the field check. Source: scripts/workspace/schema.ts:316-340, checked 2026-11-21.
- A19: `readFrontmatter` parses the frontmatter with `Bun.YAML.parse`, so the comment after a value, such as the value list after `status: define`, is not part of the value. Source: scripts/workspace/schema.ts:284-314, checked 2026-11-21.
- A20: `readRow` reports a row whose number is not two digits, whose cell count is not six, whose type is not in `tables`, whose status fails `rowStatus`, or whose Blocked by cell holds a part that is not a two-digit number; the cell is split at commas, and an empty cell, `—` and `-` mean no blocker. Source: scripts/workspace/map.ts:36-38 and 73-97, checked 2026-11-21.
- A21: `readRows` reports a blocker or a replacement that names no row of the same table, a second row with a number already used ("row NN: an earlier row has the same number"), and a loop of `superseded by` links; a parsed row with `superseded by NN` gets the status `superseded` and the field `supersededBy`. Source: scripts/workspace/map.ts:98-108 and 118-163, checked 2026-11-21.
- A22: `tableCells` splits one Markdown table line into trimmed cells and returns null for a line that does not start with a pipe; every Status, Blocked by and Result cell is read through it. Source: scripts/lib/table.ts:1-17 and scripts/workspace/map.ts:49-70, checked 2026-11-21.
- A23: A checkpoint is a plan row whose type is `checkpoint`; it has no schema of its own and uses the Status and Blocked by cells of a plan row. Source: scripts/workspace/schema.ts:221-224 and scripts/workspace/map.ts:73-90, checked 2026-11-21.
- A24: A phase has no stored field: `checkpointProblems` works it out as the task rows that a checkpoint's Blocked by cell names. Source: scripts/workspace/check.ts:218-234, checked 2026-11-21.
- A25: `status` has need `new` on IDEA, DEC and RES, so a file with a `migrated` key may store no status; eight records of this repo carry the key and seven of them store no status (RES-001 to RES-005, DEC-001 and DEC-004). Source: scripts/workspace/schema.ts:136, 146-147, 175 and 243 and `grep -L "^status:" docs/ideas/*.md docs/decisions/*.md docs/research/*.md`, checked 2026-11-21.
- A26: A research record stores a blocked state with no target: `outcome: blocked` (or `partial`) on a record with `status: in-progress`; `brain status` matches the record's `from` with a row in progress, shows that row as "blocked: <row> (<record>)" in place of "in progress", and for `blocked` adds the red item "<file>: <row> is blocked; read the record for the retry condition". Source: scripts/workspace/schema.ts:100 and 176, scripts/workspace/templates/RES.md:10 and scripts/workspace/status.ts:179-213, 229-238 and 267-270, checked 2026-11-21.
- A27: `status: proposed` on a decision record has two rules in code: the record may omit `decided`, and it cannot resolve a map row; the format guide of the domain-modeling skill defines the value as "`proposed` while the decision waits on the user". Source: scripts/workspace/schema.ts:165, scripts/workspace/check.ts:305-310 and skills/domain-modeling/DEC-FORMAT.md:40, checked 2026-11-21.
- A28: `status: parked` on an idea has one effect in code: `listEfforts` counts each idea whose status is not `define` as finished, so a parked idea is not in the list of efforts that are not finished; the workspace template of setup-brain says that "a `parked` idea waits until the user names it". Source: scripts/workspace/effort.ts:2-7 and 48-56 and skills/setup-brain/workspace.md:67, checked 2026-11-21.
- A29: A spec's state is worked out, not stored: `listEfforts` counts a spec as finished when no row of its plan is open or in-progress, also when the plan file is absent or has no row, and `brain status` names its stage `build` or `finished` from that. Source: scripts/workspace/effort.ts:59-74 and scripts/workspace/status.ts:117-120, checked 2026-11-21.
- A30: Each reader treats an absent `status` in its own way: `listEfforts` counts an idea with no status as finished, the research rule counts a record with no status as not answered, the proposed rule lets a decision with no status resolve a map row, and `brain status` reports the idea's status as null. Source: scripts/workspace/effort.ts:48-56, scripts/workspace/check.ts:266-270 and 307 and scripts/workspace/status.ts:160, checked 2026-11-21.
- A31: `Bun.YAML.parse` reads a bare two-digit row number as a number, so `[01, 08, 10]` becomes 1, 8 and 10 and `08` becomes 8, while `IDEA-003#02` stays text. Source: `bun -e 'console.log(JSON.stringify(Bun.YAML.parse("a: [01, 08, 10]\nb: 08\nc: IDEA-003#02")))'`, checked 2026-11-21.
- A32: The row table is the first table whose header equals the six column names exactly; a file with no such table gets "map: no table with the columns ..." (or "plan: ...") and has no rows, so a renamed or added column is a finding on each current idea and plan. Source: scripts/workspace/map.ts:48-56 and 118-123, checked 2026-11-21.
- A33: A file with no frontmatter, an unclosed frontmatter, YAML that is not valid or a frontmatter that is not a map of fields gets one `frontmatter:` finding, and `brain check` then runs no link, row, finished-idea or waves check on that file. Source: scripts/workspace/schema.ts:297-314 and 321-328 and scripts/workspace/check.ts:451-454, checked 2026-11-21.

### B. The templates and brain new-doc
- B01: The idea template writes `status: define` with the comment "define | specced | done | parked", and an empty `result:` with a comment that names the DEC or commit SHA of a done idea. Source: scripts/workspace/templates/IDEA.md:3-4, checked 2026-11-21.
- B02: The idea template writes an empty Map table with the six-column header, and a comment that gives the form of a new row: a type from the five map types, then `open`, `—` and `—`. Source: scripts/workspace/templates/IDEA.md:25-29, checked 2026-11-21.
- B03: The idea template has three prose places that a status rule or a wait uses: the comment about the line "Confirmed by <name> on <YYYY-MM-DD>.", the Not yet specified section for fog, and the Notes comment, which tells the agent to save partial answers and pending questions under "Row NN" with the labels Settled, Source, Conditions, Open and Next, to link in-progress RES records and to "record waits with their retry condition". Source: scripts/workspace/templates/IDEA.md:16, 21-23 and 31-32, checked 2026-11-21.
- B04: The decision template writes `status: accepted` with the comment "proposed | accepted | superseded by DEC-NNN", a `from` placeholder, `evidence: []` and `decided: {{date}} by <name>`. Source: scripts/workspace/templates/DEC.md:3 and 9-11, checked 2026-11-21.
- B05: The research template writes `status: in-progress` with the comment "in-progress | resolved", a `kind` placeholder, a `from` placeholder and `date: {{date}}`; it writes no `outcome` line. Source: scripts/workspace/templates/RES.md:3-6, checked 2026-11-21.
- B06: The research template tells the agent in a comment to add `outcome: answered, partial or blocked` to the frontmatter "when an answer or a block is known", and has a Follow-ups section and a Next action section that holds "the blocker and retry condition". Source: scripts/workspace/templates/RES.md:10 and 21-25, checked 2026-11-21.
- B07: The spec template writes `spec` and `sources: []` and no status; its Open Questions section holds what still needs the user. Source: scripts/workspace/templates/spec.md:1-4 and 42-43, checked 2026-11-21.
- B08: The plan template writes `spec` only in frontmatter, a Decisions list, the sentence "This table holds the only status of each task", the rule that a resolved row's result is the commit SHA with the verification command and its outcome, a comment with the form of a new row (`open`, `—`, `—`), and the empty six-column table. Source: scripts/workspace/templates/plan.md:1-3 and 9-18, checked 2026-11-21.
- B09: The plan template has a Parallel waves section with a placeholder for the lines that `brain plan` prints, and an Open questions list for the user. Source: scripts/workspace/templates/plan.md:20-21 and 28-29, checked 2026-11-21.
- B10: The todo template writes `spec` only in frontmatter, states that the row in `plan.md` holds the status and the rows that block it, and gives a Task block and a Checkpoint block with unticked boxes. Source: scripts/workspace/templates/todo.md:1-24, checked 2026-11-21.
- B11: `fill` replaces only `{{id}}`, `{{spec}}`, `{{date}}` and `{{title}}`, so every status line of a new file is the template's text unchanged. Source: scripts/workspace/new-doc.ts:58-69, checked 2026-11-21.
- B12: `brain new-doc` takes a type, a slug and an optional `--title`; no argument sets a status, a kind, a `from` link or a wait. Source: scripts/workspace/new-doc.ts:15-19 and 114-139, checked 2026-11-21.
- B13: `brain new-doc` writes four types: IDEA, DEC and RES as one file each, and SPEC as a folder with `spec.md`, `tasks/plan.md` and `tasks/todo.md`; it writes no row, checkpoint or phase. Source: scripts/workspace/new-doc.ts:29-40 and 71-99, checked 2026-11-21.
- B14: Under `scripts/workspace`, the only non-test code that writes a workspace file is `new-doc.ts:91`; `plan.ts` writes to standard output only and `claims.ts` only makes claim folders, so no code there changes a status after a file exists. Source: `grep -rnE 'Bun\.write\(|writeFile\(|appendFile\(|rename\(' scripts/workspace --include='*.ts' --exclude-dir=__tests__`, checked 2026-11-21.
- B15: The status comment of the idea template is copied into each record: 13 of the 14 files in `docs/ideas` of the worktree hold the text "define | specced | done | parked"; 12 of the 14 files are tracked, 11 of those hold the text at HEAD, and the one file without it is `docs/ideas/IDEA-004-keystone-workflow-follow-ups.md`. Source: `grep -rl "define | specced | done | parked" docs/ideas`, `git ls-files docs/ideas` and `git grep -c "define | specced | done | parked" HEAD -- docs/ideas`, checked 2026-11-21.
- B16: Under `scripts/setup`, `migrate.ts` is a second writer of workspace frontmatter: it writes the ID, `migrated: 0.8` and, in a DEC or RES, a date, from template strings, and it writes no status; it imports only `readFrontmatter` from `schema.ts`. Source: scripts/setup/migrate.ts:13, 39, 76, 261, 371, 391, 638, 765, 775, 805 and 807, checked 2026-11-21.

### C. The rules of brain check
- C01: `checkWorkspace` runs, for each file, the schema check, then the link check, then, for a file with no `migrated` key, the placeholder-title check, the row check of an idea or a plan, the finished-idea check and the waves check of a plan. Source: scripts/workspace/check.ts:1-11 and 426-482, checked 2026-11-21.
- C02: Only two file types hold a row table for the row check: an IDEA holds a map and a plan holds plan rows. Source: scripts/workspace/check.ts:87-88, checked 2026-11-21.
- C03: Each spec folder must hold `spec.md`, `tasks/plan.md` and `tasks/todo.md`; a spec whose frontmatter has `migrated: 0.8` may lack the plan and the todo. Source: scripts/workspace/check.ts:127-154, checked 2026-11-21.
- C04: `linkProblems` checks three links for existence: the decision in a DEC status "superseded by DEC-NNN", the DEC in an idea's `result` (a commit SHA is not checked), and each ID in a spec's `sources`; it runs on migrated files too. Source: scripts/workspace/check.ts:172-203 and 457, checked 2026-11-21.
- C05: For a map, a resolved row must name a DEC or RES ID in its Result, each DEC or RES ID in the Result of any row must exist, and a resolved row must not name a decision whose status is proposed. Source: scripts/workspace/check.ts:295-312, checked 2026-11-21.
- C06: A resolved map row may name a research record only when the record's status is resolved and its outcome is answered or absent; an absent outcome passes for records written before the field existed. Source: scripts/workspace/check.ts:255-276, checked 2026-11-21.
- C07: For a map, `rowProblems` reports one loop of Blocked by edges, or, with no loop, each row still to do whose direct blocker is superseded. Source: scripts/workspace/check.ts:313-323 and scripts/workspace/graph.ts:27-57 and 88-114, checked 2026-11-21.
- C08: For a plan, `rowProblems` returns every problem of `readRows` when there is one (a format problem, a repeated number, a blocker or a replacement that names no row, a replacement loop), and only with none does it run the checkpoint rule; it returns before the code that reads a Result cell. Source: scripts/workspace/check.ts:290-294, checked 2026-11-21.
- C09: `checkpointProblems` drops superseded rows, then reports a task that a checkpoint blocks but that depends on no task of the checkpoint's phase, and a task that depends on a task of a phase whose checkpoint does not block it. Source: scripts/workspace/check.ts:214-253, checked 2026-11-21.
- C10: `wavesProblems` returns nothing when `readRows` gives a problem or the plan has no row; otherwise it reports `brain plan`'s problem when the rows cannot be ordered, which is a loop or a row still to do that a superseded row blocks, or else the Parallel waves section as missing or stale against what `brain plan` renders now. Source: scripts/workspace/check.ts:394-416 and scripts/workspace/plan.ts:125-145, checked 2026-11-21.
- C11: An idea with status done or specced must have no map row that is open or in-progress, a Not yet specified section that is empty or "None", and an Intent line "Confirmed by <name> on <date>." outside a comment. Source: scripts/workspace/check.ts:327-358, checked 2026-11-21.
- C12: The switch for a migrated file is the presence of the key `migrated`, with any value: `brain check` then skips the H1, the finding lines, the placeholder-title, row, finished-idea and waves checks, and lists a migrated decision with no `kind` in one line that leaves the exit code alone; only the rule on a spec's plan and todo tests the value `0.8`. Source: scripts/workspace/schema.ts:330-334 and scripts/workspace/check.ts:144-145, 456-475 and 502-505, checked 2026-11-21.
- C13: `brain check` prints one line per finding and exits 0 on no finding, 1 on a finding or on a workspace config it cannot use (with the text on standard error and no finding line), and 2 on an argument. Source: scripts/workspace/check.ts:10 and 488-517, checked 2026-11-21.
- C14: `brain status` calls `checkWorkspace` and reports the findings as red items, so each rule above also reaches `brain status`. Source: scripts/workspace/status.ts:294-304, checked 2026-11-21.
- C15: `bun run check` runs `brain check` on this repo's records through the script `workspace:check`; the CI workflow lists its steps one by one and has no `workspace:check` step. Source: package.json:15 and 26 and .github/workflows/ci.yml:16-27, checked 2026-11-21.
- C16: `brain check` takes the four workspace folders from `readConfig`, which reads `docs/agents/workspace.md`. Source: scripts/workspace/check.ts:495-498 and scripts/workspace/config.ts:117-159, checked 2026-11-21.
- C17: A plan stores a worked-out copy of its wait order: the Parallel waves section holds the lines that `brain plan` prints, wave 1 is the rows still to do whose blockers are all resolved, and a plan with no row still to do stores the line "No open rows: every row is resolved or superseded."; two fixture plans hold that line, and a map has no such section. Source: scripts/workspace/templates/plan.md:20-21, scripts/workspace/graph.ts:83-105, scripts/workspace/plan.ts:168-175 and `grep -rn "No open rows" scripts`, checked 2026-11-21.
- C18: A link exists when a workspace file whose name carries the ID is in its folder; the research rule and the proposed rule read the frontmatter of the named record, also of a migrated one, so a resolved map row that names a migrated research record with no status gets "is not answered research (status: undefined, outcome: absent)", a migrated decision with no status passes, and a research record with no readable frontmatter is not tested by the row rule. Source: scripts/workspace/check.ts:428-430, 439-448, 261-274 and 307, checked 2026-11-21.
- C19: The rule order differs by table: a map with a row that breaks the format still gets its Result rules and its loop check on the rows that are left, while a plan with any `readRows` problem gets neither the checkpoint rule nor the waves rule, so its loop is not reported until the row problem is fixed. Source: scripts/workspace/check.ts:290-294, 313-323 and 400-404, checked 2026-11-21.
- C20: On a file with a `migrated` key these rules still apply: the file name, the repeated ID, the presence of `spec.md`, the unknown-key rule, the rule of each field that the file carries, and the rules across fields such as the research outcome rule. Source: scripts/workspace/check.ts:107-116, 148 and 157-170 and scripts/workspace/schema.ts:234-257, checked 2026-11-21.

### D. What no rule checks
- D01: The finished-idea check returns nothing unless the status is done or specced, so an idea with status define or parked may hold rows still to do, fog and no confirmation; the row rules still run on its map, whatever its status. Source: scripts/workspace/check.ts:340-343 and 461-466, checked 2026-11-21.
- D02: A specced idea needs no `result`, and the link check looks at a spec's `sources` only for existence, so no rule requires a spec that names a specced idea. Source: scripts/workspace/schema.ts:138 and scripts/workspace/check.ts:186-201, checked 2026-11-21.
- D03: The regex for an idea's `result` has no SPEC form, so `result: SPEC-001` is a finding. Source: scripts/workspace/schema.ts:117, checked 2026-11-21.
- D04: No rule of `brain check` reads the Result cell of a plan row: a resolved plan row with an empty Result, or with a link to a record that does not exist, has no finding. Source: scripts/workspace/check.ts:290-294, checked 2026-11-21.
- D05: One rule compares a row's status with a blocker's status: a row that is open or in-progress must not have a direct blocker that is superseded; no rule rejects a row that is in-progress or resolved while a blocker is open or in-progress, or a resolved row that a superseded row blocks. Source: scripts/workspace/graph.ts:88-114, scripts/workspace/check.ts:224-253 and 313-323 and scripts/workspace/plan.ts:137-145, checked 2026-11-21.
- D06: A map row that is not resolved may hold a Result; the only rule on it is that a DEC or RES ID it names exists. Source: scripts/workspace/check.ts:296-302, checked 2026-11-21.
- D07: For a superseded decision, the only check is that the named decision exists; no rule rejects a decision that names itself, a loop of decisions, or a replacement that is proposed. Source: scripts/workspace/check.ts:178-184, checked 2026-11-21.
- D08: `linkProblems` names neither `from` nor `evidence`, so the idea, spec, row or research record that these fields name need not exist. Source: scripts/workspace/check.ts:176-203, checked 2026-11-21.
- D09: The research check runs only for a resolved row, so a row may stay in-progress while its record is resolved and answered; the schema also accepts an in-progress record with outcome answered. Source: scripts/workspace/check.ts:303-304 and scripts/workspace/schema.ts:100-105, checked 2026-11-21.
- D10: No test compares the value lists in the template comments with the schema: no TypeScript file under `scripts/` holds the comment text of the three status lines. Source: `grep -rn "define | specced\|proposed | accepted\|in-progress | resolved" scripts --include='*.ts'` (no line), checked 2026-11-21.
- D11: Of the sections that hold a wait or an open question (Notes, Follow-ups, Next action, Open questions and the Decisions list), no non-test code under `scripts/` reads one; the sections that code reads are Intent and Not yet specified of an idea, Findings of a research record, Parallel waves of a plan and the "Files likely touched" list of each todo block, and the only other hits are eval case texts that write such sections. Source: `grep -rnE 'Open [Qq]uestions|Next action|Follow-ups|## Notes|## Decisions|Not yet specified|"Intent"|## Findings|Parallel waves|Files likely touched' scripts --include='*.ts' --exclude-dir=__tests__ --exclude-dir=node_modules`, checked 2026-11-21.
- D12: No non-test TypeScript file under `scripts/` holds a tick box, so no code there reads the boxes of a task or checkpoint block. Source: `grep -rnE '\[x\]|\[ \]' scripts --include='*.ts' --exclude-dir=__tests__ --exclude-dir=node_modules` (no line), checked 2026-11-21.
- D13: The checks on a spec are its three files, its frontmatter, the existence of its sources and its H1; with no stored status, no rule compares a spec's state with its plan rows. Source: scripts/workspace/check.ts:127-154 and 190-201 and scripts/workspace/schema.ts:185-197, checked 2026-11-21.
- D14: The fog rule accepts only an empty section, "None", "None.", "- None" or "- None.", in any letter case, so the text "None yet." is a finding on a done or specced idea; idea-refine tells the agent to write that text. Source: scripts/workspace/check.ts:350 and skills/idea-refine/SKILL.md:185, checked 2026-11-21.
- D15: The decision that an idea's `result` names is tested for existence only, so it may be proposed, while a resolved map row must not name a proposed decision. Source: scripts/workspace/check.ts:186-189 and 305-310, checked 2026-11-21.
- D16: No rule ties the type of a map row to the record in its Result, or a record's `from` to the row that names the record: the Result rules never read the row type, so a resolved research row may name only a DEC and a resolved interview row only a RES. Source: scripts/workspace/check.ts:176-203 and 295-311 and scripts/workspace/schema.ts:212-215, checked 2026-11-21.
- D17: No rule compares the blocks of `todo.md` with the rows of `plan.md`: `brain check` reads the todo file only for the files that each block names. Source: scripts/workspace/check.ts:470-473 and scripts/workspace/plan.ts:46-71, checked 2026-11-21.
- D18: A resolved research record needs no `outcome`, no finding line and no text under Answer: `outcome` is optional and the finding rule tests only the lines that exist. Source: scripts/workspace/schema.ts:176 and 271-282 and scripts/workspace/__tests__/schema.ts.test.ts:21-23, checked 2026-11-21.
- D19: A superseded row may keep its Blocked by cell and a Result; the only rules on them are the form of the cell, that each blocker is a row of the table and, in a map, that a DEC or RES ID in the Result exists, and two clean fixtures hold such rows. Source: scripts/workspace/map.ts:91-94 and 144-147, scripts/workspace/check.ts:295-302, scripts/workspace/__tests__/fixtures/idea-mid-define/docs/ideas/IDEA-001-sync-notes.md:28 and scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-001-dark-mode.md:26, checked 2026-11-21.

### E. What the unit tests pin
- E01: The table tests pin that a table line gives trimmed cells, that an escaped pipe stays in its cell, that a line with no closing pipe is read, and that a line with no first pipe is not a table line. Source: scripts/lib/__tests__/table.test.ts:5-21, checked 2026-11-21.
- E02: The template tests pin the placeholders of each template, that the IDEA, spec, plan and todo templates pass their schema as `new-doc` fills them, that a fresh DEC fails only on kind, adr-test, from and decided and a fresh RES only on kind, from and finding, that both table headers equal `tables`, and that a todo block has no Status line and no Dependencies field. Source: scripts/workspace/__tests__/schema.test.ts:101-170, checked 2026-11-21.
- E03: The field tests pin each required field (status on IDEA, DEC and RES; from on DEC and RES; decided on an accepted DEC; sources on a spec), that a proposed decision needs no `decided`, the wrong values `status: closed` on an idea, bare `status: superseded` on a decision and `status: done` on a research record, the unknown-key finding, the valid value `superseded by DEC-040` and the four valid forms of `from`. Source: scripts/workspace/__tests__/schema.test.ts:172-273, checked 2026-11-21.
- E04: The schema tests pin that a migrated 0.8 file needs only its identity field, and that the row statuses open, in-progress, resolved and "superseded by 03" are valid while done, bare superseded, "superseded by 3" and "superseded by DEC-031" are not. Source: scripts/workspace/__tests__/schema.test.ts:369-439 and 459-470, checked 2026-11-21.
- E05: The outcome tests pin that resolved research passes with no outcome or with answered, and that partial and blocked are valid only with in-progress. Source: scripts/workspace/__tests__/schema.ts.test.ts:5-33, checked 2026-11-21.
- E06: The CLI tests pin that the three clean fixtures have no finding, and pin the finding text for a resolved map row with no record, a dangling Result, a dangling blocker in a map and in a plan, a map loop, a dangling source, a dangling "superseded by" row and a dangling superseding decision. Source: scripts/workspace/__tests__/check.test.ts:145-157 and 237-376, checked 2026-11-21.
- E07: The row-format tests pin the text "is not open, in-progress, resolved or superseded by NN" for a row with status done, the lists of map and plan row types, the two-digit rules, the six-cell rule, the finding for a repeated row number, and the "no table" finding for a changed header in a map and in a plan. Source: scripts/workspace/__tests__/check.test.ts:476-554, checked 2026-11-21.
- E08: The checkpoint and waves tests pin both checkpoint findings, the missing and the stale waves finding, that a row that moves from in-progress to resolved or a change of a block's files makes the section stale, that a section padded by a formatter is current, that a plan with no rows needs no section, the plan loop finding, and the finding for a plan row that a superseded row blocks. Source: scripts/workspace/__tests__/check.test.ts:556-781, checked 2026-11-21.
- E09: The done-idea tests pin that a done idea needs a result, that a DEC result must exist, that a commit SHA passes and that a number must be quoted; the migrated tests pin that an old plan with tick boxes and an old idea table with a State column have no row finding. Source: scripts/workspace/__tests__/check.test.ts:783-921, checked 2026-11-21.
- E10: The spec-file tests pin the finding for a missing plan or todo, that the same lines appear in the `red` list of `brain status --json`, and that a migrated spec may lack both. Source: scripts/workspace/__tests__/check.ts.test.ts:47-123, checked 2026-11-21.
- E11: The finished-idea tests pin that a done or specced idea with a settled map passes, the three finished-idea findings, the finding for an open or in-progress map row that a superseded row blocks, and that a replacement loop fails while a chain that ends in a resolved row passes. Source: scripts/workspace/__tests__/check.ts.test.ts:125-247, checked 2026-11-21.
- E12: The resolution tests pin that a row resolved by research needs status resolved and outcome answered or absent, that a proposed decision cannot resolve a row, that this finding is in the `red` list of `brain status --json`, that the decision file has the same text after `brain check`, that an accepted or a superseded decision keeps a resolved row valid, and that a proposed decision beside an open row is valid. Source: scripts/workspace/__tests__/check.ts.test.ts:249-355, checked 2026-11-21.
- E13: The new-doc tests pin that each type is written from its template, that a fresh DEC holds "decided: <today> by <name>" and a fresh RES holds "date: <today>", that a fresh IDEA and SPEC pass `brain check`, that a fresh DEC and RES fail only on the fields the agent fills, and that a migrated file counts for the next number. Source: scripts/workspace/__tests__/new-doc.test.ts:90-152, 224-247 and 272-281, checked 2026-11-21.
- E14: The test helpers and two inline fixtures write status and wait literals by hand: a migrated decision with no status, an idea with a one-row map and DEC-003 with `status: accepted`, a map header for changed maps, one valid sample text per file type, and in the two repeated-number tests a DEC-002 with `status: accepted`, a spec with `sources: [IDEA-001]` and an empty plan table. Source: scripts/workspace/__tests__/check.test.ts:71-130 and 175-218, scripts/workspace/__tests__/check.ts.test.ts:27-37 and scripts/workspace/__tests__/schema.test.ts:39-99, checked 2026-11-21.
- E15: The six test files of this topic hold 245 tests, and all pass at commit dfcab49b with Bun 1.4.4. Source: `bun test scripts/lib/__tests__/table.test.ts scripts/workspace/__tests__/schema.test.ts scripts/workspace/__tests__/schema.ts.test.ts scripts/workspace/__tests__/check.test.ts scripts/workspace/__tests__/check.ts.test.ts scripts/workspace/__tests__/new-doc.test.ts`, checked 2026-11-21.
- E16: The five workspace test files of this topic do not hold the word parked, and no file of the six holds the word rejected, which is no status value in this code; parked is covered through the clean fixture `no-active-work`, and row 19's `status.test.ts` pins how `brain status` treats a parked idea. Source: `grep -c parked scripts/workspace/__tests__/check.test.ts scripts/workspace/__tests__/check.ts.test.ts scripts/workspace/__tests__/schema.test.ts scripts/workspace/__tests__/schema.ts.test.ts scripts/workspace/__tests__/new-doc.test.ts`, scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-002-offline-mode.md:3 and 26 and scripts/workspace/__tests__/status.test.ts:138, 186-191, 212-216, 302 and 362-368, checked 2026-11-21.
- E17: The clean-fixture test pins three gaps, because its fixtures hold them with no finding: a parked idea with a commented confirmation, an open row and fog, and a define idea with open rows and fog (D01); two specced ideas with no `result`, and no `result` line in any fixture (D02, first part); a superseded map row with the Result DEC-001 (D06 and D19). Source: scripts/workspace/__tests__/check.test.ts:145-157, scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-002-offline-mode.md:3, 15, 26 and 29, scripts/workspace/__tests__/fixtures/idea-mid-define/docs/ideas/IDEA-001-sync-notes.md:3 and 30-39, scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-001-dark-mode.md:3 and 26 and scripts/workspace/__tests__/fixtures/spec-mid-build/docs/ideas/IDEA-001-invoice-export.md:3, checked 2026-11-21.
- E18: The frontmatter tests pin the findings "frontmatter: missing", not valid YAML and "frontmatter: not a map of fields", also for a layout-0.8 repo at the CLI; the exit tests pin exit 1 with no finding line on a config that `brain check` cannot use, and exit 2 on an argument. Source: scripts/workspace/__tests__/schema.test.ts:441-457 and scripts/workspace/__tests__/check.test.ts:908-921 and 936-952, checked 2026-11-21.
- E19: Tests outside the six files use this topic's exports and fail when a status value or a row word changes: `interview-resume.test.ts` and `interview-parallel-research.test.ts` import `rowStatus`, `tables` and `checkDoc`, and the first holds its own copy of the frontier rule; `adr-is-dec.test.ts` runs `checkDoc` on a decision with "superseded by DEC-007" and with `status: done`; `interview-cases.ts.test.ts` runs `checkWorkspace` on each eval fixture and skips case 3; `fixtures.test.ts` runs `checkDoc` on each fixture file; `migrate.test.ts` runs `brain check` on a migrated repo. Source: scripts/evals/__tests__/interview-resume.test.ts:13, 146, 157-162 and 284-316, scripts/evals/__tests__/interview-parallel-research.test.ts:17, scripts/evals/__tests__/adr-is-dec.test.ts:12, 254 and 306-349, scripts/evals/__tests__/interview-cases.ts.test.ts:19-27, scripts/workspace/__tests__/fixtures.test.ts:137-143 and scripts/setup/__tests__/migrate.test.ts:401-412, checked 2026-11-21.
- E20: The other tests of the six files pin nothing on status or waits, by their names and the lines read: file names, repeated file numbers and a wrong `kind` (check.test.ts:159-235), the H1, the spec field, the finding line and the placeholder title (check.test.ts:378-474), the config folders (check.test.ts:923-934), a wrong ID, `kind` against the ADR test, the H1 and the finding line (schema.test.ts:251-255 and 275-367), and in new-doc.test.ts the numbers, the title, the config, parallel runs and usage. Source: `grep -nE '^\s*(test|describe)\(' scripts/workspace/__tests__/check.test.ts scripts/workspace/__tests__/schema.test.ts scripts/workspace/__tests__/new-doc.test.ts`, checked 2026-11-21.

### G. Where the item kinds differ
- G01: Status has three storage forms: a frontmatter key on IDEA, DEC and RES, the Status column of the map and plan tables, and no stored form for a spec, a plan file and a todo file. Source: scripts/workspace/schema.ts:136, 146, 175, 185-197 and 216-225, checked 2026-11-21.
- G02: The allowed values are defined by three mechanisms: a `oneOf` list for an idea and a research record, a regex passed to `like` for a decision, and for rows an exported regex in `schema.ts`, a TypeScript union in `map.ts` and a message in `map.ts` that repeats the four values by hand. Source: scripts/workspace/schema.ts:136, 148-151, 175 and 210 and scripts/workspace/map.ts:20 and 86-89, checked 2026-11-21.
- G03: The word for finished differs by kind: done or specced for an idea, resolved for a row and for a research record, accepted for a decision; the word for work in hand is define for an idea and in-progress for a row and a research record; parked exists for an idea only and proposed for a decision only. Source: scripts/workspace/schema.ts:136, 149, 175 and 210 and scripts/workspace/effort.ts:48-49, checked 2026-11-21.
- G04: Supersession is written inside the status value, with its target, for a decision and for a row, and has no form for an idea, a spec or a research record; the row parser checks the target and a loop, and the decision check tests existence only. Source: scripts/workspace/schema.ts:149 and 210, scripts/workspace/map.ts:148-161 and scripts/workspace/check.ts:178-184, checked 2026-11-21.
- G05: What an item produced is stored in four ways: the frontmatter `result` of an idea, the Result cell of a map row with a required DEC or RES, the Result cell of a plan row with no rule, and the `outcome` of a research record, whose values partial and blocked are a state of the work and not a product. Source: scripts/workspace/schema.ts:100, 138 and 176 and scripts/workspace/check.ts:290-299, checked 2026-11-21.
- G06: What an item waits on, with its target, is stored for rows only, as two-digit row numbers of the same table, and a cell that names a row of another file, such as IDEA-003#02, is a format finding; a wait with no target is a status value on three kinds, `outcome: blocked` on a research record, `proposed` on a decision and `parked` on an idea. Source: scripts/workspace/map.ts:91-94 and 144-147 and scripts/workspace/schema.ts:136, 149 and 176, checked 2026-11-21.
- G07: The link from an item to its origin has three forms, `from` on DEC and RES, `sources` on a spec and `result` on an idea; `brain check` tests that `sources` and a DEC `result` exist and does not test `from` or `evidence`. Source: scripts/workspace/schema.ts:107-115, 138 and 189-192 and scripts/workspace/check.ts:176-203, checked 2026-11-21.
- G08: A loop of waits is found by three code paths: `rowProblems` for a map, `parallelWaves` through the waves rule for a plan, and `readRows` for a loop of "superseded by" links in either table; the map path runs also when another row has a problem, and the plan path does not. Source: scripts/workspace/check.ts:313-323 and 399-408, scripts/workspace/plan.ts:133-136 and scripts/workspace/map.ts:154-161, checked 2026-11-21.
- G09: A finished state needs settled content for an idea (three rules) and for a map row (a record); for a research record the only rule is that a resolved record has no partial or blocked outcome; a resolved plan row and a spec have no such rule. Source: scripts/workspace/check.ts:290-299 and 340-358 and scripts/workspace/schema.ts:100-105, checked 2026-11-21.
- G10: A stored date has three forms: a decision stores `decided`, the date and the person of the decision, which the template writes at creation with `status: accepted` and which no rule changes when the status becomes superseded; a research record stores `date`, which `new-doc` sets to the day of creation and the migration to the day of the first commit; an idea stores a date only in the body line "Confirmed by <name> on <date>."; a spec and a row store none. Source: scripts/workspace/schema.ts:7-10, 157-166 and 180, scripts/workspace/templates/DEC.md:3 and 11, scripts/workspace/templates/RES.md:6, scripts/workspace/new-doc.ts:67 and 85 and scripts/workspace/check.ts:353-356, checked 2026-11-21.
- G11: `new-doc.ts` imports nothing from `schema.ts` and `migrate.ts` imports only `readFrontmatter`, so the templates and the schema are kept in step by the template tests alone. Source: scripts/workspace/new-doc.ts:8-13, scripts/setup/migrate.ts:76 and scripts/workspace/__tests__/schema.test.ts:119-164, checked 2026-11-21.
- G12: A value for "not started" exists for rows only (`open`): a new idea starts at `define`, which is also its word for work in hand, a new research record starts at `in-progress`, and a new decision starts at `accepted` in the template, with `proposed` as the value before the user decides. Source: scripts/workspace/schema.ts:136, 149, 175 and 210, scripts/workspace/templates/IDEA.md:3, scripts/workspace/templates/DEC.md:3 and scripts/workspace/templates/RES.md:3, checked 2026-11-21.
- G13: The user's approval with name and date is stored in two forms: the frontmatter field `decided: <date> by <name>` of a decision, which the schema checks, and the body line "Confirmed by <name> on <date>." of an idea, which a regex reads only when the idea is done or specced. Source: scripts/workspace/schema.ts:157-166, scripts/workspace/check.ts:353-356 and scripts/workspace/templates/IDEA.md:16, checked 2026-11-21.
- G14: An item names another item in four forms: a two-digit number local to the table (Blocked by, `superseded by NN`), a row of another file as IDEA-NNN#NN or SPEC-NNN#NN (`from`), a bare record ID (`sources`, `evidence`, `result`, `superseded by DEC-NNN`), and an ID found by a word search in free text (the Result cell). Source: scripts/workspace/map.ts:15, 38 and 98, scripts/workspace/schema.ts:110, 114, 117, 149 and 191 and scripts/workspace/check.ts:296, checked 2026-11-21.
- G15: The empty value has three forms: a table cell is empty with `—`, `-` or no text, a frontmatter key is empty when it is absent or null, and a list is empty as `[]`. Source: scripts/workspace/map.ts:36-37 and 107, scripts/workspace/schema.ts:242, scripts/workspace/templates/IDEA.md:4, scripts/workspace/templates/DEC.md:10 and scripts/workspace/templates/spec.md:3, checked 2026-11-21.
- G16: Whether an effort is finished comes from two mechanisms: for an idea it is the stored status, each value but `define`; for a spec it is worked out from its plan rows. Source: scripts/workspace/effort.ts:48-56 and 65-73, checked 2026-11-21.
- G17: The templates show the allowed values of the frontmatter kinds (IDEA, DEC, RES) in a comment, but no template holds the row status list: the row comments give the row types and the one value `open`, `plan.md` names `resolved` in its text, and a writer gets `in-progress` and `superseded by NN` only from the finding text or a skill. Source: scripts/workspace/templates/IDEA.md:3 and 26, scripts/workspace/templates/DEC.md:3, scripts/workspace/templates/RES.md:3 and 10, scripts/workspace/templates/plan.md:13 and 15 and scripts/workspace/map.ts:88, checked 2026-11-21.

### L. The literals
- L01: In the non-test TypeScript under `scripts/`, nine files hold a status value in double quotes or a wait word: `workspace/schema.ts`, `workspace/check.ts`, `workspace/map.ts`, `workspace/graph.ts`, `workspace/plan.ts`, `workspace/status.ts`, `workspace/effort.ts`, `evals/interview-cases.ts` and `evals/keystone-cases.ts`; the pattern does not find a value in a template string or in a table line. Source: `grep -rlE '"(open|in-progress|resolved|superseded|define|specced|done|parked|proposed|accepted|answered|partial|blocked)"|superseded by|Blocked by|blocked by|blockedBy|supersededBy' scripts --include='*.ts' --exclude-dir=__tests__ --exclude-dir=node_modules`, checked 2026-11-21.
- L02: Four of the six templates (IDEA, DEC, RES and plan) hold status values a second time, in the comments after the status lines, in the outcome comment, in the comments that give the form of a new row and in the text of `plan.md`; `spec.md` and `todo.md` hold none. Source: scripts/workspace/templates/IDEA.md:3 and 26, scripts/workspace/templates/DEC.md:3, scripts/workspace/templates/RES.md:3 and 10 and scripts/workspace/templates/plan.md:13 and 15, checked 2026-11-21.
- L03: The 11 non-test files of this topic, and `map.ts`, `graph.ts`, `plan.ts`, `status.ts` and `effort.ts`, are byte-identical in the worktree and in the installed plugin 0.13.0, and `scripts/` has no uncommitted change. Source: `cmp -s` of each file against `~/.claude/plugins/cache/acmelabs/brain/0.13.0/` and `git status --short scripts`, checked 2026-11-21.
- L04: Outside `scripts/`, regex graders under `evals/lifecycle` hold copies of these values and check what `brain check` does not: `plan-rows-resolved` (each plan row is resolved and its Result opens with a SHA of 7 to 40 hex characters), `todo-ticked` (a ticked box and no open box), `passes-check` (a hand-written copy of the DEC schema that allows accepted and superseded by DEC-NNN and not proposed) and `rows-in-progress` (in-progress or resolved); five grader files there hold a row status or a frontmatter status value, and four `scaffold.sh` files write rows or status lines by hand. Source: evals/lifecycle/build-clean-context/graders/plan-rows-resolved.md:6, evals/lifecycle/build-clean-context/graders/todo-ticked.md:6, evals/lifecycle/adr-is-dec/graders/passes-check.md:6-9, evals/lifecycle/interview-parallel-research/graders/rows-in-progress.md:6, `grep -lE 'resolved|in-progress|superseded by|status: ' evals/lifecycle/*/graders/*.md` and `grep -lE 'status:|\| *(open|in-progress|resolved|superseded by [0-9]+) *\|' evals/lifecycle/*/scaffold.sh`, checked 2026-11-21.
- L05: In TypeScript under `scripts/`, outside the files of this topic and besides `map.ts` and `effort.ts`, these files hold a status value in a frontmatter line, a row line or an outcome line: the two eval case files, five eval tests (`adr-is-dec`, `build-clean-context`, `keystone-policy.ts`, `plan-three-questions`, `spec-underspecified`), `scripts/lifecycle/__tests__/names.test.ts`, `scripts/setup/__tests__/migrate.test.ts`, and in `scripts/workspace/__tests__` the files `plan.test.ts`, `status.test.ts` and `status.ts.test.ts`. Source: `grep -rlE 'status: (define|specced|done|parked|proposed|accepted|superseded|in-progress|resolved)|\| (open|in-progress|resolved|superseded by [0-9]{2}) \||Blocked by|outcome: (answered|partial|blocked)' scripts --include='*.ts' --exclude-dir=node_modules`, checked 2026-11-21.
- L06: The six test files of this topic hold 211 lines that match a status value or a wait word: 1 in `table.test.ts`, 25 in `schema.test.ts`, 9 in `schema.ts.test.ts`, 104 in `check.test.ts`, 63 in `check.ts.test.ts` and 9 in `new-doc.test.ts`; the same pattern with `-n` lists each line. Source: `grep -cE 'open|in-progress|resolved|superseded|define|specced|done|parked|proposed|accepted|answered|partial|blocked|Blocked by|outcome' scripts/lib/__tests__/table.test.ts scripts/workspace/__tests__/schema.test.ts scripts/workspace/__tests__/schema.ts.test.ts scripts/workspace/__tests__/check.test.ts scripts/workspace/__tests__/check.ts.test.ts scripts/workspace/__tests__/new-doc.test.ts`, checked 2026-11-21.
- L07: The field names `blockedBy` and `supersededBy` are on 24 lines of four files: 13 in `map.ts`, 3 in `check.ts`, 6 in `graph.ts` and 2 in `plan.ts`. Source: `grep -nE 'blockedBy|supersededBy' scripts/workspace/check.ts scripts/workspace/map.ts scripts/workspace/graph.ts scripts/workspace/plan.ts`, checked 2026-11-21.
- L08: The marker `0.8` of a migrated file has three holders: the schema rule, the spec-files rule of `brain check`, and four template strings of the migrate mode. Source: scripts/workspace/schema.ts:237-238, scripts/workspace/check.ts:145 and scripts/setup/migrate.ts:261, 371, 391 and 638, checked 2026-11-21.

## Follow-ups
None.

## Next action
None.
