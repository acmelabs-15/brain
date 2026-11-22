---
id: RES-073
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-015#03
date: 2026-11-20
---
# RES-073: What the views need from the workspace

## Question
What does each view need from the workspace, what do Brain's parsers already give (statuses, stages, rows, blocking edges, result links, sections, `sources:`), and what is missing?

## Answer
Sufficient answer: a table with one line per item kind (idea, spec, map row, plan row, DEC, RES). Each line gives the fields the views need, the code that parses each field, whether `brain status --json` exposes it, and what is missing. The answer also says directly: (a) whether a blocking edge exists between two efforts; (b) how a plan row links to its task block and result; (c) the full set of statuses and stages a column can follow; (d) how many items of each kind this repo has. It names contrary evidence and unknowns.

Capability check: this run loaded brain:source-driven-development. The sources are the repo's own code, templates, skills and records, read with file reads and the Brain CLI 0.13.0. The workspace code in the installed plugin is byte-identical to the worktree's `scripts/workspace/` and `scripts/lib/`. No web source was needed.

### Item kinds

| Kind | Fields the views need, and where they live | Exported parser | In `brain status --json` | Missing |
|---|---|---|---|---|
| Idea | ID and slug (file name); title (H1); `status` and `result` (frontmatter); `## Intent` and `## Destination` (sections); map rows | `listEfforts` (effort.ts): ID, slug, path, finished. `readFrontmatter` (schema.ts): status, result. `readRows("map", …)` (map.ts): rows | `ideas[]`: id, title, status, path, `specs` for every idea. `efforts[]`: stage and some rows for the reported effort only | `result`; section text (`ideaSection` in check.ts is not exported); all rows with their edges |
| Spec | ID and slug (folder name); title (H1 of spec.md); no status field; `sources:`; `## Objective` and `## Success Criteria` (the nearest sections to Intent and Destination); plan rows | `listEfforts`: ID, slug, path, finished. `readFrontmatter`: `sources`. `readRows("plan", …)`: rows | Only when the spec is a reported effort: id, title, path, stage (`build` or `finished`). `ideas[].specs` gives the reverse of `sources:` | A list of all specs; a status; `sources:` itself; section text. In this repo, every spec is layout 1: no `sources:`, no plan row in the current format |
| Map row | Number (cited `IDEA-NNN#NN`); question; type; status; Blocked by (row numbers); Result (text that names a DEC or RES) | `readRows("map", …)` gives `Row`; `frontier`; `findCycle`, `blockersOf`, `layWaves`, `criticalPath` (graph.ts) | `Step` (ref, title, type, status, result, and outcome and record for partial or blocked research) for frontier, in-progress, waiting and last-step rows of the reported effort only | All rows; `blockedBy`; `supersededBy`; the DEC and RES IDs in Result (the regex sits inside `rowProblems` in check.ts); records whose `from:` names the row |
| Plan row | Number (`SPEC-NNN#NN`); task; type; status; Blocked by; Result (commit SHA, then the verification command and outcome); its task block in todo.md under the same number | `readRows("plan", …)`; `parallelWaves` (plan.ts): waves, critical path, files per row | Same `Step` subsets when the spec is reported. `brain plan --json` gives the waves of rows still to do, without edges and without resolved rows | A task block parser (only "Files likely touched" is read, by `filesByRow`, not exported); a parse of the commit SHA in Result |
| DEC | ID; title (H1); `status`; `kind`; `from:`; `evidence:`; `decided` | `readFrontmatter`; `schemas.DEC` and `checkDoc` validate | No | A list of decisions; title; links back from a row or effort to the DEC |
| RES | ID; title (H1); `status`; `outcome`; `kind`; `from:`; `evidence:` (optional); `date`; sections Question, Answer, Findings | `readFrontmatter`; `schemas.RES` and `checkDoc` validate; `findingLine` (schema.ts) reads one finding | Only as `outcome` and `record` on an in-progress `Step` with a partial or blocked outcome | A list of research records; title; links back from a row or effort to the RES |

The exported functions are enough to build every field above except section text, task block text and titles. `checkWorkspace` (check.ts) returns findings only, not the parsed data. Functions that do the missing reads exist but are not exported: `titleOf` and `readDoc` (status.ts), `ideaSection` and `linkProblems` (check.ts), `filesByRow` (plan.ts).

### (a) Blocking edges between efforts
No. A Blocked by cell names only two-digit rows of the same map or plan; any other value is a check finding, and the parser drops that row. Edges exist only between rows of one file. Four links do cross efforts, but none of them blocks: a spec's `sources:` (spec to idea, DEC or RES), an idea's `result:` (idea to DEC or commit), a record's `from:` (DEC or RES to a row or an effort), and a DEC's `evidence:` (DEC to RES).

Contrary evidence: the repo records waits between efforts in prose. IDEA-008 Notes says its row 02 waits on IDEA-007 row 01, and says why the wait is not in the table. DEC-004 has a "Depends on" column between modules, and each layout-1 spec repeats its module's "Depends on" in prose. IDEA-004 names, in prose, the idea that took each of its rows. No parser reads these.

### (b) Plan row, task block and result
The link is the row number only. Plan row `NN` has one block in `tasks/todo.md` under `## Task NN: <title>` or `## Checkpoint NN: <title>`. A resolved plan row's Result is the commit SHA or SHAs, then the verification command and its outcome, for example `3f2a91c; bun test src: 4 pass`. A plan row's Result names no DEC or RES by rule. A RES with `from: SPEC-NNN#NN` can point at a plan row, because the schema allows it, but no rule asks for one, and no record in this repo does. Sub-agent result files such as `T01-result.md` are not workspace records.

### (c) Values a column can follow
- Idea status: define, specced, done, parked.
- Spec status: none is stored. Effort state: finished or not finished. `brain status` stage: define (idea), build (spec), finished.
- Lifecycle stage in the glossary: define, plan, build, verify, review, ship. No code works it out; `brain status` gives only define, build and finished.
- Row status: open, in-progress, resolved, superseded by NN.
- Row type: interview, prototype, ideate, research, task (map); task, checkpoint (plan). Decide rows are interview, prototype and ideate.
- Row state worked out from rows: on the frontier, waiting on the user (a decide row on the frontier), wave number, on the critical path. "Blocked" (open with a blocker not resolved) is not computed by name, but it follows from `frontier`.
- DEC status: proposed, accepted, superseded by DEC-NNN. DEC kind: decision, architecture.
- RES status: in-progress, resolved. RES outcome: answered, partial, blocked. RES kind: research, task.

### (d) Size of this repo, 2026-11-20
- 13 ideas: 9 define, 4 parked.
- 9 specs. All 9 carry `migrated: 0.8` and no `sources:`. 8 have `tasks/plan.md` in the layout-1 table; SPEC-007 has no `tasks/` folder.
- 68 map rows with 43 blocked-by edges. 38 rows have at least one blocker. IDEA-004 has 0 rows, and IDEA-001 has 23.
- 0 plan rows in the current format. The layout-1 plans hold 48 numbered component rows. The layout-1 todo files hold 121 checkboxes, all ticked.
- 14 DEC files (13 committed and DEC-026 new today) and 15 RES files (12 committed and 3 new today, this record among them).
- The top level of a view therefore has 22 cards. IDEA-015's "Not yet specified" says 14 ideas and hundreds of rows; the count above does not support that, unless the layout-1 items count as rows.

### What the views do not get today
- A list of every spec with its title and state. `brain status --json` lists every idea, but a spec only when it is the reported effort.
- A stored spec status, and any lifecycle stage past define and build.
- All rows of an effort with their edges. `readRows` gives them, but no command prints them.
- Section text: Intent, Destination, Objective, Success Criteria, and the task block parts.
- An index of DEC and RES files, and links back from a row or effort to the records whose `from:` names it.
- Blocking edges between efforts.
- In this repo, plan rows: every spec is layout 1, so a drill-in to a spec finds no row that the parser reads.

Unknown: which of the prose links in "Contrary evidence" the views should show is a design choice for rows 06, 08 and 11. This record does not propose a design.

## Findings
- An idea's frontmatter `status` is define, specced, done or parked, and `result` is a DEC-NNN or a commit SHA, required only when the status is done. Source: scripts/workspace/schema.ts:132-141, checked 2026-11-20.
- A decision record's `status` is proposed, accepted or superseded by DEC-NNN; it also has `kind` (decision or architecture), `from`, `evidence` (a list of RES IDs) and `decided`. Source: scripts/workspace/schema.ts:142-170, checked 2026-11-20.
- A research record's `status` is in-progress or resolved, `outcome` is answered, partial or blocked, `kind` is research or task, and it may carry `from`, `evidence` and `date`. Source: scripts/workspace/schema.ts:171-184, checked 2026-11-20.
- `from:` names a row (IDEA-NNN#NN or SPEC-NNN#NN), an idea or spec, or user. Source: scripts/workspace/schema.ts:107-113, checked 2026-11-20.
- A spec.md frontmatter has only `spec` and `sources` (a list of IDEA, DEC and RES IDs), and plan.md and todo.md have only `spec`, so a spec has no status field. Source: scripts/workspace/schema.ts:185-197, checked 2026-11-20.
- A row status is open, in-progress, resolved or superseded by NN; map row types are interview, prototype, ideate, research and task; plan row types are task and checkpoint. Source: scripts/workspace/schema.ts:209-225, checked 2026-11-20.
- The exported `readRows` returns each row's number, title, type, status, `supersededBy`, `blockedBy` and the Result cell as raw text. Source: scripts/workspace/map.ts:14-27, checked 2026-11-20.
- A Blocked by value that is not a two-digit number is a problem and drops the row, and a number that names no row in the same table is a problem. Source: scripts/workspace/map.ts:91-97, checked 2026-11-20.
- The same rule appears in the parser's check: a blocker must be a row in this map or plan. Source: scripts/workspace/map.ts:144-153, checked 2026-11-20.
- The planning skill says each Blocked by number names a row in the same table. Source: skills/planning-and-task-breakdown/SKILL.md:226, checked 2026-11-20.
- IDEA-008 records in Notes that its row 02 waits on IDEA-007 row 01, because a Blocked by cell names rows in its own file only. Source: docs/ideas/IDEA-008-stage-state-and-handoffs.md:26, checked 2026-11-20.
- DEC-004 holds a module table with a Depends on column, and each module has its own spec. Source: docs/decisions/DEC-004-capability-map-brain.md:8-21, checked 2026-11-20.
- Layout-1 specs state their module dependencies in prose, such as "Depends on `plain-talk` and `lifecycle`" in SPEC-001. Source: specs/SPEC-001-evals/spec.md:7, checked 2026-11-20.
- IDEA-004's Out of scope names, in prose, the idea and row that took each of its 17 rows. Source: docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:66-82, checked 2026-11-20.
- A spec lists the ideas, decisions and research it comes from in `sources:`, links run one way, and an idea holds no list of its specs. Source: docs/agents/workspace.md:61, checked 2026-11-20.
- `brain status --json` prints the keys migrate, report, efforts, ideas and red. Source: scripts/workspace/status.ts:62-71, checked 2026-11-20.
- `efforts` holds only the reported efforts: the effort the branch names, else every effort that is not finished. Source: scripts/workspace/status.ts:147-153, checked 2026-11-20.
- In this worktree on branch `feat/views-mod`, `brain status --json` reported one effort, IDEA-015, with stage define, 2 frontier rows and 3 rows in progress. Source: output of `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts status --json` in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- An effort state has id, kind, stage, title, path, lastStep, frontier, inProgress and waiting. Source: scripts/workspace/status.ts:43-57, checked 2026-11-20.
- A `Step` has ref, title, type, status and result, plus outcome and record for partial or blocked research, and it carries no blocked-by or superseded-by. Source: scripts/workspace/status.ts:32-40, checked 2026-11-20.
- `brain status` gives an idea the stage define, a spec the stage build, and either one the stage finished when the effort is finished. Source: scripts/workspace/status.ts:117-120, checked 2026-11-20.
- `ideas[]` holds every idea with id, title, status, path and the specs whose `sources:` name it; no key lists every spec. Source: scripts/workspace/status.ts:155-177, checked 2026-11-20.
- An idea is finished unless its status is define, and a spec is finished when its plan has no open or in-progress row. Source: scripts/workspace/effort.ts:47-74, checked 2026-11-20.
- The exported `listEfforts` gives every idea and spec with kind, id, name, slug, path and finished, and no title or status. Source: scripts/workspace/effort.ts:18-39, checked 2026-11-20.
- The glossary's stages are define, plan, build, verify, review and ship. Source: GLOSSARY.md:10-13, checked 2026-11-20.
- `brain plan --json` reads one spec and gives the waves of rows still to do (id, title, type, status, files), the critical path, shared files and overlaps, with no blocked-by edges. Source: scripts/workspace/plan.ts:32-44, checked 2026-11-20.
- `brain plan` refuses an idea as the active effort, because an idea has no plan. Source: scripts/workspace/plan.ts:258-262, checked 2026-11-20.
- A task block in todo.md opens with `## Task NN:` or `## Checkpoint NN:`, and `filesByRow`, which is not exported, reads only its "Files likely touched" list. Source: scripts/workspace/plan.ts:46-71, checked 2026-11-20.
- Each plan row gets one block in todo.md under the row's number. Source: skills/planning-and-task-breakdown/SKILL.md:233, checked 2026-11-20.
- A resolved plan row's Result is the integrated commit or commits, then the verification command and its outcome, such as `3f2a91c; bun test src: 4 pass`. Source: skills/planning-and-task-breakdown/SKILL.md:227, checked 2026-11-20.
- The todo template's task block holds Description, Acceptance criteria, Verification, Files likely touched and Scope. Source: scripts/workspace/templates/todo.md:8-24, checked 2026-11-20.
- A plan lists the decisions it follows as `- DEC-NNN: <title>` lines under `## Decisions`, and no code reads that section. Source: skills/planning-and-task-breakdown/SKILL.md:205, checked 2026-11-20.
- `brain check` takes the DEC and RES IDs out of a map row's Result with a regex inside `rowProblems`, which is not exported, and a resolved map row must name one. Source: scripts/workspace/check.ts:283-299, checked 2026-11-20.
- For a plan, the row check covers only the checkpoint edges, and no code reads a plan row's Result. Source: scripts/workspace/check.ts:290-294, checked 2026-11-20.
- `ideaSection`, which reads one level-two section without comments, is not exported and serves only the Not yet specified and Intent confirmation checks. Source: scripts/workspace/check.ts:327-357, checked 2026-11-20.
- An idea has the sections Intent (Outcome, User, Why now, Success, Constraint, Out of scope), Destination, Notes, Map, Not yet specified and Out of scope. Source: scripts/workspace/templates/IDEA.md:8-35, checked 2026-11-20.
- A spec has Objective, Tech Stack, Commands, Project Structure, Code Style, Testing Strategy, Boundaries, User Stories, Out of scope, Prior-art tests, Success Criteria and Open Questions, and no Intent or Destination. Source: scripts/workspace/templates/spec.md:7-43, checked 2026-11-20.
- Every spec in this repo has `## Objective` and `## Success Criteria` headings, such as SPEC-009 at lines 15 and 371. Source: specs/SPEC-009-workspace/spec.md:15, checked 2026-11-20.
- `titleOf`, which is not exported, takes the title after the H1's ID prefix, or after `# ` when the prefix differs. Source: scripts/workspace/status.ts:73-77, checked 2026-11-20.
- `brain status` reads a research record's `from:` only to put a partial or blocked outcome on a row in progress. Source: scripts/workspace/status.ts:179-214, checked 2026-11-20.
- The checks that a DEC's superseded-by, an idea's DEC result and a spec's `sources:` exist sit in `linkProblems`, which is not exported. Source: scripts/workspace/check.ts:172-203, checked 2026-11-20.
- The exported `checkWorkspace` returns findings, a file count and the unclassified decisions, not the parsed records. Source: scripts/workspace/check.ts:78-85, checked 2026-11-20.
- All 9 specs carry `migrated: 0.8` and no `sources:`, and their H1 reads `# Spec: <module>`. Source: specs/SPEC-001-evals/spec.md:1-5, checked 2026-11-20.
- The migrated plans use the layout-1 table `| # | Component | Depends on | Risk |`, not the current plan table. Source: specs/SPEC-001-evals/tasks/plan.md:11, checked 2026-11-20.
- `brain plan SPEC-009 --json` exits 1 with "plan: no table with the columns # | Task | Type | Status | Blocked by | Result". Source: output of `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts plan SPEC-009 --json`, checked 2026-11-20.
- Migrated todo files hold checkbox lines such as `- [x] Task 1: gate script`, not task blocks under `## Task NN:`. Source: specs/SPEC-001-evals/tasks/todo.md:7, checked 2026-11-20.
- A migrated spec states its status only in body prose, such as "Status: superseded on 2026-10-28 by …" in SPEC-005. Source: specs/SPEC-005-question/spec.md:8, checked 2026-11-20.
- A current-format plan row carries a commit SHA and a verification result, such as row 01 of the spec-mid-build fixture. Source: scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:19, checked 2026-11-20.
- The repo has 13 ideas (9 define, 4 parked), 68 map rows, 43 blocked-by edges, 0 current-format plan rows, 48 layout-1 component rows and 121 ticked todo checkboxes. Source: `readRows` and `readFrontmatter` run over docs/ideas, plus a line count over specs/*/tasks, in /Users/peterkloss/Dev/ACMElabs/brain-views-mod, checked 2026-11-20.
- `brain check` reports no finding in 67 workspace files and 3 migrated decisions with no kind (DEC-001, DEC-002, DEC-004). Source: output of `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts check`, checked 2026-11-20.
- The workspace code in the installed plugin 0.13.0 is the same as the worktree's scripts/workspace and scripts/lib. Source: `diff -r` of both folders, checked 2026-11-20.

## Follow-ups
- Does the workspace need a field for a wait between efforts, such as IDEA-008 row 02 on IDEA-007 row 01, or do the views show only the edges inside one map or plan? Today such waits exist only in prose.
- What does a drill-in show for a spec whose plan is layout 1? All 9 specs in this repo are migrated, so the current parser finds no plan row in any of them. IDEA-015's fog names a layout-1 repo, but not a layout-2 repo with migrated specs.

## Next action
None.
