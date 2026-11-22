---
id: RES-096
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-016#26
date: 2026-11-21
---
# RES-096: How this repo's ideas, decisions and research records use status and waits

## Question
How do this repo's ideas, decision records and research records use status and waits in practice: the values in use, drift, waits written in prose, and items with no status?

## Answer
Sufficient answer: with a path per claim, and counts made by recorded commands that another agent can repeat. For ideas, map rows, decision records and research records, the record states the count of records per status value and the count that store none, with layout-2 files and migrated files apart. It states every form a wait or a link takes in these records, and lists each prose wait with its file, its words, what waits and on what. It states every status that looks stale, with its evidence. It states every wait that crosses a file. It states what the five values of DEC-051 cannot express, with the example. It names what could not be established and any contrary evidence.

The evidence supports an answer on each point. This version is the repair after three independent checks; the sub-heading "Checks" gives their results.

Scope and time:
- The scope is 14 ideas, 39 decision records and the 18 research records RES-001 to RES-077, in the working tree of this worktree.
- The counts are a snapshot of 2026-11-21, 11:07 Pacific. IDEA-015 was last changed at 10:38 and IDEA-016 at 10:16. Both files change while the main session works, so the map counts of IDEA-016 change as its rows resolve.
- RES-087 to RES-100, the records of IDEA-016 rows 17 to 30, are left out, as the brief says. RES-086 is left out as a record. It enters in one place: the Result cell of IDEA-016#16 names it, so its stored status is one of the 30 Result targets.
- I read every idea and every decision record in full. I read the research records by their index sites, their first and last sections, and word searches, not line by line.
- Section 7 uses files of another worktree of this repository. I read only the lines that it cites.

In short:
- Stored status is uniform where a template wrote it. 14 ideas use two of four values. 113 map rows use four values. 36 layout-2 decisions use two of three values. 13 layout-2 research records all say resolved.
- Seven records store no status. All seven are migrated files: DEC-001, DEC-004 and RES-001 to RES-005.
- The only stored wait in these records that a tool reads is the Blocked by cell: 66 cells, 118 edges, all inside one map. The format has a second stored wait, a research record with `outcome: blocked`, and these records hold 0 cases of it. Every wait that crosses a file is prose.
- `brain check` reports no finding. Each drift item below passes the check today.
- Three rows are `in-progress` while each of their 11 blockers is `in-progress` (IDEA-016#28, #29 and #30).
- Records of this repo exist outside this worktree. Among them are four draft decisions on the same questions as IDEA-016's decide rows (section 7).

### 1. Counts per status value

Ideas (14 files, all layout 2, none migrated):

| Stored value | Count | Files |
|---|---|---|
| `define` | 10 | IDEA-001, 005, 006, 007, 008, 009, 013, 014, 015, 016 |
| `parked` | 4 | IDEA-004, 010, 011, 012 |
| `specced` | 0 | none |
| `done` | 0 | none |
| no status | 0 | none |

No idea has a filled `result:`. 13 hold the empty key with its template comment. IDEA-004 holds no `result:` key and no value comment. The same 13 hold the comment `# define | specced | done | parked` on the status line.

Map rows (113 rows in 13 maps; IDEA-004's map is empty):

| Idea | Idea status | open | in-progress | resolved | superseded by NN | Rows |
|---|---|---|---|---|---|---|
| IDEA-001 | define | 23 | 0 | 0 | 0 | 23 |
| IDEA-004 | parked | 0 | 0 | 0 | 0 | 0 |
| IDEA-005 | define | 1 | 0 | 0 | 0 | 1 |
| IDEA-006 | define | 3 | 0 | 0 | 0 | 3 |
| IDEA-007 | define | 3 | 0 | 0 | 0 | 3 |
| IDEA-008 | define | 2 | 0 | 0 | 0 | 2 |
| IDEA-009 | define | 3 | 0 | 0 | 0 | 3 |
| IDEA-010 | parked | 1 | 0 | 0 | 0 | 1 |
| IDEA-011 | parked | 2 | 0 | 0 | 0 | 2 |
| IDEA-012 | parked | 2 | 0 | 0 | 0 | 2 |
| IDEA-013 | define | 1 | 0 | 5 | 0 | 6 |
| IDEA-014 | define | 8 | 0 | 0 | 0 | 8 |
| IDEA-015 | define | 1 | 2 | 24 | 1 | 28 |
| IDEA-016 | define | 11 | 14 | 2 | 4 | 31 |
| Total | | 61 | 16 | 31 | 5 | 113 |

- Row types: 46 interview, 44 research, 22 task, 1 prototype, 0 ideate. All 22 task rows are in IDEA-001.
- Blocked by: 66 rows have a cell with a value, 47 have `—`. The cells hold 118 edges. Each edge names a row that exists in the same map. 42 edges name an open row, 40 name a resolved row and 36 name an in-progress row. The 40 edges name 12 different resolved rows.
- Worked out from the tables alone: 26 open rows have no blocker or only resolved blockers, and 35 open rows wait on a row that is not resolved.
- Three in-progress rows have blockers that are not resolved: IDEA-016#28, #29 and #30, with 11 in-progress blockers each (33 edges).
- Result: all 31 resolved rows name one record (22 a DEC, 9 a RES). No other row names a record. Two rows, IDEA-015#06 and #26, name the same record, DEC-042. One of the 9 is RES-086, the Result of IDEA-016#16.
- No map row is stored with no status.
- Snapshot note: at 09:04 the totals were 64 open and 13 in-progress. Rows 28, 29 and 30 of IDEA-016 changed from `open` to `in-progress` after that.

Decision records (39 files):

| Group | Count | Status values |
|---|---|---|
| Layout 2 | 36 | 31 `accepted`, 5 `superseded by DEC-NNN` (DEC-028, 034, 038, 040, 046), 0 `proposed` |
| Migrated (`migrated: 0.8`) | 3 | DEC-001 and DEC-004: no status. DEC-002: `superseded by DEC-006`, added in commit c5d76841 on 2026-11-04, after the migration commit 3fc984b4 |

- The two migrated decisions with no status state it in prose: "Decided 2026-09-19 by Peter" (DEC-001:8) and "Approved by Peter on 2026-09-19" (DEC-004:8).
- `kind`: 35 decision, 1 architecture (DEC-051), 3 migrated with none.
- `from:`: 27 name a map row, 2 name an idea (DEC-025 from IDEA-004, DEC-050 from IDEA-016), 7 say user, 3 migrated have none. For three of the 7 (DEC-007, DEC-013, DEC-014), the copy in another worktree names IDEA-003 (section 7).
- `evidence:`: 25 name research records (35 links), 11 are empty, 3 migrated have none. Each named record exists and stores `status: resolved`.
- `decided:`: all 39 hold the key. The 36 layout-2 records say "by Peter". The 3 migrated records hold a date only.
- 33 of the 36 layout-2 decisions keep the comment `# proposed | accepted | superseded by DEC-NNN` on the status line.

Research records (18 files, RES-001 to RES-077):

| Group | Count | Status | Outcome |
|---|---|---|---|
| Layout 2, 0.13.0 form | 7 | `resolved` | `answered` (RES-069, 072, 073, 074, 075, 076, 077) |
| Layout 2, older form | 6 | `resolved` | none (RES-006, 024, 035, 037, 038, 040) |
| Migrated (`migrated: 0.8`) | 5 | none | none (RES-001 to RES-005) |

- No research record in scope stores `in-progress`, `partial` or `blocked`. All 13 with a `kind` say research.
- The migrated five state a status in prose at line 8: "Status: evidence gathered, decision open" (RES-001 to RES-004) and "Status: read-only analysis" (RES-005).
- `from:`: 9 name a map row, 4 say user (RES-006, 024, 037, 069), 5 migrated have none. For three of the 4 (RES-006, 024, 037), the copy in another worktree names an IDEA-003 row (section 7).
- The 7 records of the 0.13.0 form have a `## Next action` section. The other 11 have none.

Values that the schema allows and no record in scope uses: idea `specced` and `done`; decision `proposed`; research `in-progress`, outcome `partial` and `blocked`, kind `task`. So this repo holds no example of a specced idea, a done idea or an idea `result:`.

### 2. Every form a wait or a link takes

Stored forms:

| Form | Where | Count | Crosses a file | Read by a tool |
|---|---|---|---|---|
| Blocked by cell | idea maps | 66 cells, 118 edges | no | yes |
| `superseded by NN` in a row's Status | idea maps | 5 rows | no | yes: `readRows` reads it as a link and reports a cycle (scripts/workspace/map.ts:148-160); the check reports a row blocked by a superseded row (scripts/workspace/check.ts:314-319) |
| Result cell | idea maps | 31 cells | yes, row to DEC or RES | yes |
| `from:` | DEC and RES frontmatter | 36 rows, 2 ideas, 11 user | yes, record to row or idea | `brain check` checks its shape (row 17). `brain status` joins a research record to its in-progress row through it, only for `status: in-progress` with outcome partial or blocked (scripts/workspace/status.ts:179-214) |
| A research record's `status: in-progress` with `outcome: blocked`, and its Next action with the retry condition | RES frontmatter and body | 0 in scope | yes, through `from:` | yes: `brain status` prints a red item "is blocked; read the record for the retry condition" |
| `evidence:` | DEC frontmatter | 35 links in 25 records | yes, DEC to RES | shape only (row 17) |
| `superseded by DEC-NNN` in `status:` | DEC frontmatter | 6 | yes, old DEC to new DEC | yes (row 17) |
| `decided: <date> by Peter` | DEC frontmatter | 36 with a name, 3 with a date only | no | not established here (row 17) |
| `blocked-by:` frontmatter | none | 0 | not built | no |
| A step only the user can run, as a do row that blocks the rows that wait on it (the rule of DEC-014:15) | idea maps | 0 rows | no | it would be a normal row |

Worked out, not stored: `brain status` prints a decide row (interview, prototype or ideate) on the frontier under "Waiting on the user" (scripts/workspace/status.ts:29 and :130). It works this out from Type, Status and Blocked by.

Prose forms, which no tool reads:

| Form | Where | Count or examples | Crosses a file |
|---|---|---|---|
| "supersedes", "replaces" in the body of the newer decision | DEC-006, 038, 040, 041, 042, 048, line 15 | 6 that match a `superseded by` status | yes |
| The same words with no status change | DEC-003:15 (an intent doc), DEC-049:15 (a part of DEC-035) | 2 | yes |
| A decision that retires an item that is not a decision | DEC-002:27 (a spec: "`spec/SPEC-question.md` is superseded"), DEC-004:13 and :19 (a module "dropped ... by DEC-006", "Retired ... by DEC-002"), DEC-041:15 (a row: "and with it the question ... (IDEA-015#21)") | 4 | yes |
| "refines", "changes", "reopened", "a superseding DEC or a note" | DEC-005:15, DEC-020:15, IDEA-016:122, IDEA-015:92 | 4 | yes |
| "Sources:" and "Source:" lines in a migrated body | DEC-004:25, DEC-001:34 | 2 | yes, DEC to RES or intent doc |
| "Depends on" column and "Build order" line | DEC-004:11-21, :23 | 9 module rows | yes, module to module |
| "Row NN was IDEA-004#NN, finding K3" and "moved to IDEA-NNN row NN" | IDEA-004:66-82, IDEA-005 to IDEA-012 | 17 rows | yes |
| A finding ID that ties a row to RES-069 | IDEA-004:32-48, and the "Row NN was" lines | 17 | yes |
| An ID named in body text | every layout-2 decision and both active ideas | the most common link; DEC-042:15 "(DEC-035, DEC-036)", DEC-047:15 "(DEC-048)" | yes |
| A Markdown link to a file | IDEA-004:22, RES-069:170 | 2 | yes |
| A tag in brackets that ties a Notes line to rows or records | IDEA-014:36 "[rows 07, 08]", IDEA-016:50 and :52, IDEA-015:273-279 and :296-297 | 11 lines | no, and yes for a DEC |
| An ID inside a row's Question cell | IDEA-014#08; IDEA-015#02, #12, #25, #26, #29, #32; IDEA-016#01, #04, #10 | 10 rows | yes |
| A hand-over in Intent or Out of scope to another idea | IDEA-014:14 "which IDEA-006 holds", IDEA-015:362, IDEA-016:175 | 3 | yes |
| "This serves", "For IDEA-015#12", "(row 08)" in a research body | RES-077:25, RES-072:15 and :23, RES-074:43-49 | one record serves several rows, and `from:` names one | yes |
| A later research record that closes a claim of an earlier one | RES-038:43 on RES-035:108 and :113; RES-037:908 on RES-035 | 2 | yes |
| A follow-up or an open choice of a research record that became a row | Told only in idea Notes (IDEA-015:203, for rows 27 and 28), or by no link, where only the words match (RES-073:123-124 and IDEA-015#20, #22; RES-037:862-866 and IDEA-014#01, #02, #03, #06; RES-038:46 and IDEA-013#04; RES-040:78 and IDEA-013#05) | 10 rows | yes |
| A link to state outside the workspace: a branch, a commit SHA, a result file in another worktree, a scratchpad path, a page URL, a workflow run ID | IDEA-015:57, :78, :97, :100; IDEA-016:90-91, :96-98, :108 | 10 lines | leaves the repo |
| "waits on", "waits until", "after", "first, then", "pending", "on hold", "for now" | ideas, DEC, RES | section 3 | most do |
| Retry condition of running work | IDEA-015:99, :100; IDEA-016:90, :97, :108 | 5 lines | names an agent, a run, a time or the user |

DEC-032:15 lists the links from an item to its records: a row's Result, an idea's `result:`, a spec's `sources:`, a plan's `## Decisions` lines, and a record's `from:`. Of these, the records in scope use Result and `from:`.

The newer decision's link back to the one it supersedes exists only in prose. No frontmatter key holds it. Each of the 6 newer records names the old one in its body.

The supersede chain DEC-034, DEC-038, DEC-040, DEC-042 has three steps. DEC-038 and DEC-040 are each a target and each superseded.

`from:` and Result do not mirror each other. The repo shows three practices for a `from:` whose row is gone:
- Keep the old link. DEC-042 is the Result of rows 06 and 26, and its `from:` is IDEA-015#21, a row that the map no longer holds. The superseded DEC-028, 034, 038, 040 and 046 keep the `from:` of a row whose Result now names the newer record. DEC-037 has `from: IDEA-015#22`, and row 22's Result names only DEC-036.
- Point at the new row. Commit dfcab49b brought DEC-010, DEC-020, RES-035, RES-038 and RES-040 into this tree with an IDEA-013 row in `from:`. Their copies in another worktree name an IDEA-003 row (section 7). The commit message says "Records whose rows moved now point at IDEA-013".
- Write `user`. The same commit brought DEC-007, DEC-013, DEC-014, RES-006, RES-024 and RES-037 with `from: user`. Their copies in the other worktree name IDEA-003 or one of its rows. So `from: user` does not always mean a direct request of the user.

### 3. Every wait written in prose

Waits between ideas, specs and rows of different files:

| # | File and line | Words | What waits | On what | State of the target today |
|---|---|---|---|---|---|
| W1 | IDEA-008:26 | "Row 02 waits on IDEA-007 row 01 ... A Blocked by cell names rows in its own file only, so this wait sits here." | IDEA-008#02, open, cell `—` (:38) | IDEA-007#01 | open (IDEA-007:36) |
| W2 | IDEA-015:45 | "Row 32 waits on IDEA-016#08 ... Ask it after IDEA-016#08 resolves." | IDEA-015#32, open, cell `—` (:345) | IDEA-016#08 | open (IDEA-016:146) |
| W3 | IDEA-015:13, :46, :51; IDEA-016:24; DEC-031:15; DEC-050:15 | "The views spec waits on IDEA-016's `blocked-by` field"; "IDEA-015's spec waits on this idea" | The spec that IDEA-015 leads to | IDEA-016, its field and its status values | define |
| W4 | IDEA-016:55; IDEA-014:39 | "this idea's spec waits on IDEA-014's migration design"; "it waits on this idea" | IDEA-016:55: the spec that IDEA-016 leads to. IDEA-014:39: IDEA-016 | IDEA-014 | define, 8 open rows |
| W5 | IDEA-005 to IDEA-012, line 24 of each; DEC-025:15 | "The work runs in idea-number order."; "with the source cache first or second" | Each of the 8 split ideas | The ideas before it | no target is named |
| W6 | DEC-004:11-21, :23 | "Depends on" column; "Build order: upstream-sync and host-manifests → plain-talk → ..." | A module, each with its own spec | Other modules | row 27 holds the specs |
| W7 | DEC-010:15 | "Whether the prompt can open on Claude Code is untested, and IDEA-013#03 settles that." | One point of DEC-010 | IDEA-013#03 | resolved, RES-038. The copy of DEC-010 in another worktree names IDEA-003#54 at this place (section 7) |
| W8 | DEC-028:15 | "IDEA-015#20 decides it." | The roadmap's dependency order | IDEA-015#20 | resolved, DEC-029; DEC-028 is superseded |
| W9 | DEC-029:15 | "left to IDEA-015#23 and the spec" | The key's spelling and the change's place | IDEA-015#23 and a spec | row resolved, DEC-031; no spec yet |
| W10 | DEC-037:15 | "a fact for research, IDEA-015#25" | The list of places per version | IDEA-015#25 | resolved, RES-076 |
| W11 | DEC-048:15; DEC-047:15; IDEA-015:12, :158 | "how the mod serves `/brain:session` is IDEA-015#29; if no way works, the name returns to Peter" | The command name, and with it the success line of DEC-047 and the Intent | IDEA-015#29, then the user | in-progress |
| W12 | RES-037:20, :223, :257, :670, :676; 11 table cells "Depends on row 15" (12 lines hold the words; :899 is prose about them); :808-824 | "Every tag is provisional until the file audits finish"; "Peter decides the note at IDEA-003 row 15"; "row 26 judges each one"; "Peter decides at row 15"; a "Row" cell per gap | Tags, table rows and 17 gaps of RES-037 | IDEA-003 rows 11, 15, 26, 45, 46, 47, 48, 49 and 52, and its audit rows | IDEA-003 has no file in this worktree. Section 7: its row 15 is resolved with DEC-014, which this tree holds |
| W13 | RES-024:155 | "Can Peter confirm ... can its text be recovered for IDEA-003#25?" | A follow-up | The user, for IDEA-003#25 | Section 7: row 25 is resolved with RES-037 |

Waits on the user, on an event or on work with no item:

| # | File and line | Words | What waits | On what | State today, where a source shows it |
|---|---|---|---|---|---|
| W14 | IDEA-010:26, IDEA-011:26, IDEA-012:26 | "Peter did not pick these rows for now. This idea waits until he evaluates it." | The idea, stored `parked` | The user | parked |
| W15 | IDEA-001:19 | "built after PR 2 merges" | The idea's spec | A merge | The branch that IDEA-001:9 names merged on 2026-10-29 as pull request #15. UNVERIFIED: that "PR 2" is pull request #15 |
| W16 | IDEA-011:13 | "each upstream pull request needs Peter's approval" | Each upstream fix | The user | no row holds it |
| W17 | IDEA-015:50, :56, :70, :75, :76, :83, :84 | "review with Peter pending"; "Pending question 1 of 3"; "lets hold off on that"; "Row 08's three review questions are on hold"; "Pending: Peter's reaction to the second version" | IDEA-015#08, in-progress | First the user's agreement on the views, then his further questions, then the three review questions | on hold by the user's word (:75) |
| W18 | IDEA-015:86, :92 | "research returned, review pending"; "If Peter accepts: row 29 resolves with RES-077" | IDEA-015#29, in-progress | The user's review of RES-077 | pending |
| W19 | IDEA-016:65, :72 | "partial answer, waits on research"; "The decide rows 01 to 04 and 08 to 10 wait on them, then on Peter's review of the results" | 7 decide rows | Research rows, then the user's review | The research rows are now 17 to 31; the cells name row 31 |
| W20 | IDEA-016:12 | "Success: open, row 06" | A line of the Intent | Row 06 of the same map | open |
| W21 | IDEA-016:172 | "It becomes a row once row 02 says who writes the field." | A fog item | Row 02 of the same map | open |
| W22 | DEC-006:15 | "brain drops the ask-user-question upstream first, and then Peter makes the repo private" | A user step | A Brain change | Brain dropped the upstream in commit c5d76841. The user step has no record |
| W23 | DEC-013:15 | "that skill changes in a later build" | The interview-me text | A later build | not established (row 21) |
| W24 | DEC-014:15 | "The text of notes in older repos is a matter for the migration." | Old status notes | The migration | IDEA-014 is in define |
| W25 | DEC-025:15 | "he evaluates them later" | Rows 02, 11, 13, 16 and 17 of IDEA-004 | The user | The rows are in IDEA-010 to IDEA-012, parked |
| W26 | RES-040:78; RES-072:23; RES-038:46 | "The choice is Peter's."; "stays Peter's decision"; "It needs its own row" | A follow-up of a resolved record | The user or a new row | Taken up: IDEA-013#05 (resolved, DEC-020), IDEA-015#12 (resolved, DEC-048), IDEA-013#04 (resolved, RES-040). The follow-up lines carry no mark of it |
| W27 | RES-072:73 | "Release check before the views ship" | The views' release | A check not yet run | no record |
| W28 | RES-069:182-183 | "The main session completes the final post-harness check and packages this record" | A step named in a resolved record | The main session | no record |
| W29 | IDEA-015:99, :100; IDEA-016:90, :97 | "Retry condition if it stops: ..." | A research or prototype row in progress | A running agent or workflow run | IDEA-015:96 says no agent is running |
| W30 | IDEA-016:108, :112 | "Retry condition: the limit has reset (after 23:00 Pacific on 2026-11-22), or Peter allows extra usage."; "Resumed: ... so the retry condition holds." | A stopped workflow run | A point in time, or a permission of the user | ended (:112). The line also says the check files sit in a scratchpad "which a reboot can clear" |
| W31 | IDEA-016:101, :111 | "each record waits on its checks, its repair and Peter's review"; "Row 31 ... waits on the checks and repairs above" | 14 research rows, in-progress, and row 31 | Check and repair agents, then the user | The cell of row 31 names rows 28, 29 and 30 (:169). The wait on checks and repairs is finer than a row status |
| W32 | RES-037:826-879 | "Each line is an open choice ... This record chooses none of them." | 39 numbered choices in a record that stores `resolved` | The user | 4 are now rows of IDEA-014 with the same words and no link (choices 25, 26, 27, 29; rows 01, 02, 03, 06) |
| W33 | RES-035:101; RES-040:83-84; RES-072:75-77; RES-074:131-133 | "Side effect to review: ..." | 9 follow-up lines in resolved records | The user's review | IDEA-015:210 says of RES-072's and RES-074's "none removed". No row and no state |
| W34 | IDEA-001:48 | "It was a grader bug, fixed before PR 2 ... Confirm it in the next paid run" | IDEA-001#22, open | An event, written in the Question cell | not established |
| W35 | IDEA-014:38 | "Relation to row 03 ... row 03 says what state means" | The rule tagged to rows 07 and 08 | Row 03 of the same map | The cells of rows 07 and 08 hold `—` |
| W36 | DEC-026:15; DEC-043:15; DEC-040:15; IDEA-015:356, :357, :359 | "which can come in a later idea"; "a fallback for them can be its own idea later"; "set aside for later"; "for now" | Work that is put off | Nothing; no item holds it | The lines sit in Out of scope, whose template says it "never graduates back" (scripts/workspace/templates/IDEA.md:35) |
| W37 | IDEA-016:115; IDEA-015:166, :200, :312 | "`GLOSSARY.md` gets the shared status values when this idea's format is built"; "For the spec" | A change or a test | The idea's future spec | no spec yet |
| W38 | IDEA-007:26; IDEA-013:26 | "so check that claim first"; "are unproven" | An order inside a row note; two points with no row | Work with no item | not established |

Where the instructions put a wait that a cell cannot hold:
- The idea template comment that 10 ideas still hold says: "Link in-progress RES records and record waits with their retry condition" (IDEA-005:27, and the same text in IDEA-006 to IDEA-014 at lines 27 to 41).
- The research template gives a second place: the record's `outcome: blocked` and its Next action, "the blocker and retry condition" (scripts/workspace/templates/RES.md:10 and :25).
- DEC-014:15 gives a third place, for a step only the user can run: a do row that blocks the rows that wait on it.
- These records used only the first place. No research record stores `blocked`, and no map holds a user-step row. W16 and W22 are such steps.
- Rows 17 and 21 own the templates and the skill.

### 4. Every wait that crosses a file

- Row to row of another idea: W1 and W2. Both rows show `—` in Blocked by, so a frontier worked out from the table holds them.
- Effort to effort: W3 (IDEA-015's spec on IDEA-016), W4 (IDEA-016 and its spec on IDEA-014), W5 (the order of IDEA-005 to IDEA-012) and W6 (DEC-004's modules).
- Decision to row: W7 to W11. Four of the five targets are resolved, and the decision text still names the wait. W11 also reaches DEC-047 and the Intent of IDEA-015.
- Research record to a row of an idea outside this worktree: W12 and W13.
- Research record to research record: RES-038:43 closes two claims of RES-035, and RES-037:908 says that each such claim of RES-035 still stands.
- Research record to the row that took up its follow-up or its open choice: W26 and W32.
- Idea to its future spec: W37.
- Links that cross a file and do not block: Result cells, `from:`, `evidence:` and `superseded by DEC-NNN`.

One effect is visible in the report. `brain status` on this branch prints IDEA-015#32 as "Next step" and as "Waiting on the user", while IDEA-015:45 says to ask it after IDEA-016#08 resolves. Row 19 owns the report code.

### 5. Status that looks stale or drifting

| # | Item | Stored | Evidence that it drifts |
|---|---|---|---|
| S1 | IDEA-004 | `parked`, no `result:` key, 0 rows | It was `define` with 17 open rows until commit dfcab49b moved every row to IDEA-005 to IDEA-012 (:26, :66-82). Its Success line still says "all 17 remaining findings have an open row" (:11). Also stale: :16 "This file is the map", :51-55 a Resume list that names "each row", and :63 "The map captures the known questions". RES-069:170 still says IDEA-004 gives the findings "separate open rows". |
| S2 | IDEA-010, IDEA-011, IDEA-012 | `parked` | Their 5 rows are `open` with no blocker (IDEA-010:36, IDEA-011:37-38, IDEA-012:37-38). A parked idea holds rows that a table reads as ready. |
| S3 | IDEA-015#29 | `in-progress`, no Result | Its record RES-077 stores `status: resolved`, `outcome: answered` and `from: IDEA-015#29` (map :342). The row waits on the user's review (W18). |
| S4 | IDEA-015#08 | `in-progress`, no Result | The prototype returned (:56). No record exists for it in the workspace. Its result is a file on branch `prototype/views-board` in another worktree (:57). Only Notes show that it is on hold (:75). |
| S5 | IDEA-015 Notes | hand-written row states | :109 says row 26 resolved with DEC-040, :153 says row 12 resolved with DEC-046, :221 says row 06's current record is DEC-040. The map says DEC-042, DEC-048 and DEC-042 (:340, :328, :323). Later lines :121 and :159 give the change. :50 calls the in-progress rows 08 and 29 "open rows". More lines of the same kind: :212-214 "Partial answers on open rows" lists row 15, which is resolved with DEC-047 (:331). :99 says "only rows 08 and 15 remain"; rows 25 and 15 are resolved. :255 "Row 21, partial ... Open" names a dropped row. :285 "row 17 (DEC-028)"; the map names DEC-041 (:332). :200 holds an UNVERIFIED line that RES-077 answered (:88). Seven headings say "answered, decision record(s) next" or "partial answer" for rows that are resolved or dropped (:103, :111, :125, :135, :155, :216, :226). IDEA-016:84 says "(pending question)", answered at :88. The template comment says "Replace settled notes with the resulting DEC/RES link" (IDEA-005:27). |
| S6 | IDEA-015:52, IDEA-016:73 | "IDEA-016 next: rows 12 to 15"; "Next: start rows 12 to 15 in the next session" | Rows 12 to 15 are `superseded by` 17, 21, 24 and 26 (IDEA-016:150-153). IDEA-015:97 says a review "waits for its next report", and :96 says no agent is running. |
| S7 | IDEA-001#15 and #17 | `open` | Row 15 names `readNote`, the parser of the `docs/STATUS.md` note. DEC-014 removed the note, and `grep -rn readNote scripts` finds nothing. Row 17 holds two findings. The first, the hook's note section, is stale in the same way. The second, `folderPath`, still exists (scripts/workspace/config.ts:73). |
| S8 | IDEA-001:12 | Success line | It says a row is resolved by "a commit that fixes it". `brain check` refuses a resolved map row whose Result names no DEC or RES (scripts/workspace/check.ts:297-298). |
| S9 | 11 of the 13 resolved layout-2 research records | `resolved` | Each holds lines with the word UNVERIFIED: RES-035 11, RES-037 8, RES-038 8, RES-040 8, RES-024 6, RES-074 6, RES-006 4, RES-077 4, RES-075 3, RES-076 3, RES-072 1. Only RES-069 and RES-073 hold none. The count is of lines, not of open claims: RES-038 has 7 claims in 8 lines, because :43 says it answers two of RES-035's. RES-035 keeps those two lines (:108, :113), and RES-037:908 says each line of RES-035 still stands. See section 8: the label is an instructed one. |
| S10 | RES-037 | `resolved`, no outcome | :20 says "Every tag is provisional until the file audits finish". :23 says it rests on RES-032 to RES-036, and of those this worktree holds only RES-035. :826-879 hold 39 open choices for the user (W32). :27-34 cite `docs/ideas/IDEA-003-finish-workflow-changes.md`, a file that this worktree does not hold. |
| S11 | RES-069 | `resolved`, `answered` | Its Next action is not "None." alone: it names a step for the main session (W28). |
| S12 | RES-001 to RES-004 | no status; prose "decision open" | DEC-004, approved 2026-09-19, names RES-001 as a source (:25), so that decision is taken. The prose line stays, because a migration changes no body. |
| S13 | DEC-020 | `accepted`, `decided: 2026-11-05 by Peter` (:11) | RES-069:28 says "The other held DEC-012–023 remain unapproved, despite accepted frontmatter in historical copies." RES-069:27 says DEC-013 and DEC-014 are "reapproved", so only DEC-020 of this tree is in doubt. IDEA-004:25 and :84 repeat that held decisions stay held. DEC-020 resolves IDEA-013#05. Section 7 gives the source that calls DEC-012 to DEC-023 drafts. Section 8 gives the contrary evidence. |
| S14 | DEC-048 | `accepted` | RES-077 found that one clause differs ("also works during a turn", IDEA-015:89). IDEA-015:92 says the wording gets "a superseding DEC or a note" if the user accepts. |
| S15 | DEC-035, DEC-029, DEC-007, DEC-003, DEC-033, DEC-036, DEC-042 | `accepted` | Each is changed in part, or put in question, by a later text and keeps its status. DEC-049:15 replaces DEC-035's lanes, which were an agent's choice. IDEA-016:122 reopens part of DEC-029. DEC-020:15 changes the order in DEC-007. DEC-005:15 refines DEC-003. IDEA-015:64, :79 and :82 call the detail view's dependencies "the open question of DEC-033". DEC-035:15 says "A spec stores no status" and gives the ideas board the columns define, specced, done and parked; DEC-036:15 and DEC-042:15 build on it. DEC-050:15 and DEC-051:15 change both points and name none of the three as changed. The only trace is the open row IDEA-015#32 (:345). |
| S16 | DEC-040, DEC-034 | `superseded by DEC-042`, `superseded by DEC-038` | DEC-042:15 says it replaces DEC-040's three levels "and keeps the rest of it". DEC-038:15 says it replaces one rule of DEC-034 and keeps a part "(from DEC-034)". The status says the whole record is superseded. Section 8 gives the method behind it. |
| S17 | RES-073's counts | `resolved`, `answered` | It counts 13 ideas, 68 map rows and 43 edges on 2026-11-20 (:118). The tree now holds 14, 113 and 118. |
| S18 | IDEA-016#28, #29, #30 | `in-progress` | Each names rows 17 to 27 in Blocked by (:166-168), and each of rows 17 to 27 is `in-progress` (:155-165). :103 gives the reason: "Their researchers built on the topic records of rows 17 to 27 before those were checked". The check accepts it. It is the only case in the maps of work that started before its blockers were resolved. |
| S19 | IDEA-016 rows 17 to 30 | `in-progress`, no Result | :102 says all 14 topic records exist, "each `status: resolved`, `outcome: answered` as its researcher left it". :101 says "each record waits on its checks, its repair and Peter's review". So the pair "row in-progress, record resolved" has a second meaning beside S3. This rests on the idea file only. |
| S20 | IDEA-014 | `define`, 8 open rows | :24 says "no row here is decided". :36-37 hold two lines "Settled:" of 2026-11-21, the first with the tag "[rows 07, 08]". The lines state a rule; rows 07 and 08 ask how to meet it and are `open` (:54-55). No decision record holds the rule. DEC-051:15 and IDEA-016:13 cite IDEA-014 for it. |
| S21 | IDEA-001#22 | `open` | The cell says the bug was "fixed before PR 2" and asks to "Confirm it in the next paid run" (:48). The fix is done by its own words, and the row waits on an event (W34). |
| S22 | IDEA-001 | `define`, 23 open rows | Its spec was to be "built after PR 2 merges" (:19). The branch merged on 2026-10-29 (W15). 22 of its rows wait on row 01, an open interview row (:27). |
| S23 | IDEA-015:352 | fog line | "Grouping by product or glossary context: row 30". Row 30 is `superseded by 31` (:343), and :182 says the product grouping "drops". |
| S24 | RES-037, RES-024 | `from: user` | Both name IDEA-003 in the body (RES-037:17, RES-024:155). Their copies in another worktree name an IDEA-003 row in `from:` (section 7). |
| S25 | RES-035 | `from: IDEA-013#01`, `date: 2026-11-04` | IDEA-013 was made on 2026-11-05 (IDEA-013:24), one day after the record's date. The copy in another worktree has `from: IDEA-003#50` (section 7). |

Checks that found nothing:
- No idea in `define` has all its rows resolved. IDEA-013 is nearest, with 5 of 6.
- No resolved row lacks a Result, and no resolved row names a record that is `in-progress` or `proposed`. The 30 records that the 31 Result cells name store `accepted` (21) or `resolved` (9). `brain check` enforces all three points (scripts/workspace/check.ts:297-298, :255-275, :307-308), so with "no finding" they follow and are not separate evidence.
- No Blocked by cell names a missing row or a superseded row, and `brain check` reports no cycle. The check enforces these too (scripts/workspace/map.ts:144-147, scripts/workspace/check.ts:314-319). IDEA-016:72 and :89 show that rows 12 to 15 once waited on row 16 and that the decide rows once waited on rows 12 to 15. Today rows 12 to 15 hold `—`, and the decide rows name row 31. So the cells were rewritten when the rows were superseded.
- No decision's `superseded by` names a missing record, and no `evidence:` names a missing record.

### 6. What DEC-051's five values cannot express

DEC-051 names open, in-progress, done, parked and superseded for ideas, specs and their rows. It names ready, waiting and in review as states that are worked out. These records hold states and links outside that set:

| # | What the records hold | Example | Why the five values do not hold it |
|---|---|---|---|
| X1 | The target of a supersede, inside the status value | `superseded by 31` (IDEA-015:343); `superseded by DEC-041` (DEC-028:3) | DEC-051 names the value `superseded` and does not say where the target goes. |
| X2 | One row superseded by several rows | IDEA-016:95 says row 12 "is now rows 17 to 19"; the cell says `superseded by 17` (:150) | The form names one row. |
| X3 | A row that was dropped | IDEA-015 rows 09, 16, 21 and 27, listed under Out of scope as "dropped 2026-11-20" (:360, :361, :363, :364) and absent from the map. Rows 09 and 16 became an agent's choice; rows 21 and 27 no longer matter. A fifth dropped question is stored in the other form: row 30 is `superseded by 31`, while :182 says its question "drops" and row 31 asks a different one | The row leaves the table, or takes `superseded` with a successor that does not answer it. Two forms hold the same state. |
| X4 | A row that moved to another idea | IDEA-004:66-82, 17 lines "moved to IDEA-NNN row NN"; the new idea notes "Row 01 was IDEA-004#15" (IDEA-005:26). The rows of IDEA-013 came from IDEA-003 in the same commit, whose message says "Records whose rows moved now point at IDEA-013" (section 7) | The row leaves the table. Its successor is a row of another file. |
| X5 | A use of `parked` outside its written meaning | The glossary says an idea is "parked when the user sets it aside" (GLOSSARY.md:21), and `docs/agents/workspace.md:66` says a parked idea "waits until the user names it". IDEA-010 to IDEA-012 fit (:26). IDEA-004 is parked because it was split and emptied (:26). A third use is on rows: "Ask rows that do not wait on research, and park the ones that do" (IDEA-015:34, IDEA-016:34) | One value holds "set aside by the user" and "ended by a split". For the split, the nearest values of DEC-051 are `done` (it ended in DEC-025) or `superseded` (by 8 ideas, with the problem of X1 and X2). DEC-051 makes `parked` a stored value for rows and does not say whether it means "waits on research". |
| X6 | The rows of a parked idea | 5 open rows in IDEA-010 to IDEA-012 | Rows have no parked value today. DEC-051 gives rows one, and no record says whether a parked idea's rows take it. |
| X7 | A decide row with a part answered | IDEA-016#08 is `open` with "partial answer, waits on research" (:65). It is the one live case. IDEA-015's seven headings of this kind are old labels (S5). IDEA-014 holds settled lines for open rows with no record (S20) | The state between an answer and its record lives in Notes. |
| X8 | A returned result that waits | IDEA-015#29: a record that is resolved and answered, under an in-progress row, waits on the user's review (S3). IDEA-016 rows 17 to 30: the same pair waits on checks and a repair first (S19). IDEA-015#08: a returned prototype, with a result file outside the workspace, is on hold (S4) | No tool works out "in review" today: `brain status` skips a record that is not `in-progress` with outcome partial or blocked (scripts/workspace/status.ts:198-206) and prints IDEA-015#29 under "in progress". The pair "row in-progress, record resolved" does not tell "in review" from "waits on checks" or "stopped". The user's rule behind the state is "Review returned research with Peter before a row is decided, dropped or re-scoped" (IDEA-015:34). |
| X9 | An unconfirmed Intent | No idea holds a "Confirmed by" line; 13 keep the template comment (line 16); 10 say "The Intent is a draft" (line 24) | Confirmation is a state of the idea beside `status:`. The check ties the two only for `done` and `specced` (scripts/workspace/check.ts:340-357). |
| X10 | An approval state of a decision that differs from its stored status | S13. The sources use four words: "held" (IDEA-004:25, :84), "reapproved" (RES-069:27), "assistant review under delegation, not Peter's manual review" (RES-069:26, :164) and "drafts" (section 7) | Decisions keep their own values (IDEA-016:132). None means held, draft or delegated. The value `proposed` exists and was not used for the 12 drafts. |
| X11 | A decision changed in part, or with an open question | S15, S16 | A decision is `accepted` or wholly `superseded by` one record. |
| X12 | A resolved research record with open points | S9, S10, S11, W26, W32, W33 | `resolved` plus `answered` does not show unverified claims, open follow-ups, open choices for the user, or a named next step. A follow-up line carries no state, so a taken-up follow-up reads like an open one. |
| X13 | A migrated record's prose state | "Decided ... by Peter", "Approved by Peter", "evidence gathered, decision open", "read-only analysis"; module states "Retired", "dropped", "Added" in DEC-004:13-21 | These files store no status, and their words match no value. |
| X14 | A record that is gone or left behind | RES-078 to RES-085: two research runs were stopped and their records deleted, with the numbers kept (IDEA-016:76-82). IDEA-002, IDEA-003 and other records were left on another branch's worktree, and their names were "pruned from decisions and ideas" (commit dfcab49b) | No record is left in this tree to hold a status. |
| X15 | Decision and research values | 31 `accepted`; outcome `answered` on 7 records | DEC-051 covers ideas, specs and rows. IDEA-016:132 leaves these two record types out "unless Peter says so". |
| X16 | A started item that the user put on hold | IDEA-015#08: "Row 08's three review questions are on hold" (:75); the row stores `in-progress` | `in-progress` and `parked` are the nearest values. No record says which one a held, started row takes. |
| X17 | A wait on a point in time or on a permission | IDEA-016:108: "the limit has reset (after 23:00 Pacific on 2026-11-22), or Peter allows extra usage" | A status value names no target, and "blocked by" names items. A time and a permission are not items. |
| X18 | A choice that the agent made and the user may overrule | 13 decisions hold such a part: DEC-020, 029, 032, 033, 035, 038, 039, 040, 042, 044, 046, 048, 049 (for example DEC-020:15 "The agent chose one detail that Peter may overrule"). Notes hold more, with no row and no record: IDEA-015:259-266, :79, :349-350; IDEA-016:124-126. The user's rule is that such a choice "adds no row" (IDEA-015:29) | The decision stores `accepted` for the whole record. A choice in Notes has no status at all. |
| X19 | Work put off, with no item to hold it | W36, W37 | No row, idea or spec exists yet, so no status applies. The lines sit in Out of scope or in Notes. |
| X20 | Worked-out states that accepted decisions define for the views | DEC-035:15: a spec is "Not planned", "Planned", "Building", "In review" or "Done", and a row is "ready" or "waiting". DEC-036:15: "Migrated". DEC-030:15: a wave is "open, in progress or done" | DEC-051 names ready, waiting and in review as worked out. It does not name "Not planned", "Planned", "Building" or "Migrated". DEC-035's premise "A spec stores no status" no longer holds under DEC-050. |

Where the old values are written in these records:
- Stored values that DEC-051's mapping renames: `define` on 10 ideas and `resolved` on 31 rows.
- Stored values whose new form is open: `superseded by NN` on 5 rows (X1, X2).
- Comments that list the old values: 13 idea status lines, and 13 `result:` lines that say "the DEC-NNN or the commit SHA". DEC-051 says specced becomes done "with `result:` naming the spec", and the schema allows a DEC or a commit SHA today (scripts/workspace/schema.ts:117).
- Prose: the word "resolved" is on 46 lines of IDEA-015 and 9 lines of IDEA-016. DEC-035:15 and IDEA-015:173, :263 and :297 name define, specced, done and parked.
- No idea stores `specced` or `done`, so the repo gives no test case for "specced becomes done with result naming the spec".

### 7. Records of this repository outside this worktree

`git worktree list` names 9 worktrees of this repository. One is `/Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo`, on branch `fix/interview-recovery` at commit d3072e51. "OTHER" stands for that path below.

- OTHER holds IDEA-002 and IDEA-003, DEC-007 to DEC-024 and 54 research records, RES-001 to RES-069. Among them are RES-009, RES-032, RES-033, RES-034, RES-036, DEC-012 and DEC-018, which this worktree names and does not hold. The files are not committed: the tree of d3072e51 holds only IDEA-001, IDEA-004, DEC-001 to DEC-006 and DEC-024. Three more worktrees in the same folder (`checks`, `status`, `eval`) hold the set to DEC-023 and RES-068.
- The stored values there are the same set as here: 4 ideas `define`; 20 decisions `accepted` and 2 `superseded by DEC-NNN`; 49 research records `resolved`. IDEA-002 and IDEA-003 hold 109 rows: 39 open, 53 resolved, 17 `superseded by NN`.
- OTHER's IDEA-003:101 says: "DEC-012 to DEC-023 and the closures in RES-045 stand as drafts until a check against the skills and the code lands. Nothing builds on them." Line 105 repeats it. All 12 store `accepted`. So DEC-020 is one of the drafts by that text.
- Commit dfcab49b brought DEC-020 into this tree. This tree's copy has `from: IDEA-013#05` where OTHER's copy has IDEA-003#99, and its line 15 lacks one clause of OTHER's. The commit message gives a reason for DEC-007, DEC-013 and DEC-014 ("RES-069 names them as the authority for shipped code") and none for DEC-020.
- The same holds for 10 more records. In OTHER, DEC-010, RES-035, RES-038 and RES-040 name an IDEA-003 row in `from:`, and here an IDEA-013 row. In OTHER, DEC-007, DEC-013, DEC-014, RES-006, RES-024 and RES-037 name IDEA-003 or one of its rows, and here `user`. DEC-010:15 names IDEA-003#54 there and IDEA-013#03 here, and DEC-014:15 has three more sentences there.
- I could not establish whether OTHER's copies changed after the commit. The commit message supports the direction: "Records whose rows moved now point at IDEA-013 ... Names of records left behind are pruned from decisions and ideas."
- The targets of W12 and W13 are known there: IDEA-003 row 15 is `resolved` with DEC-014, row 25 is `resolved` with RES-037, and row 26 is `resolved` with RES-047.
- Four draft decisions there are on the same questions as IDEA-016's decide rows. I state what they say; they are drafts by IDEA-003:101, and RES-069:28 calls them unapproved.

| Draft in OTHER | Words at line 15 | Decide row |
|---|---|---|
| DEC-018 (`accepted`) | A spec's status is "held in the frontmatter as a standard set of values, as an idea's status is"; "when the last task row resolves, the spec reads ready for review"; "The exact values go in the spec." | 08 |
| DEC-019 (`accepted`) | "An idea holds `blocked-by` in its frontmatter and names other ideas. A spec holds it in its frontmatter and names other specs. A task names tasks inside the same parent ... An edge from an idea to a spec is not part of this standard." It rejects "edges kept as prose in a capability map record, row edges that cross files, and one file per task." | 04, 10 |
| DEC-022 (`accepted`; it supersedes DEC-021) | "A task is the group that takes the place of a phase ... The words phase and checkpoint go." | 09 |
| DEC-016 (`accepted`) | "A wait such as a pull request review is the same handling: the state records it" | 02, 03 |

DEC-029 in this tree lets an idea or spec name "the ideas and specs it waits on". DEC-019 there leaves an edge from an idea to a spec out. The two differ on that point.

### 8. What I could not establish, and contrary evidence

Not established:
- Whether DEC-020 is approved today. It stores `accepted` and `decided: 2026-11-05 by Peter`. RES-069:28 and OTHER's IDEA-003:101 call DEC-012 to DEC-023 unapproved drafts. No record in either worktree says that DEC-020 was reapproved.
- The full text of the records outside this worktree. I read the lines that section 7 cites and no more. The inventory's critic names two more repos on this machine with Brain records (IDEA-016:109); I opened neither.
- Which decision closed the "decision open" lines of RES-002, RES-003 and RES-004.
- Whether the other 21 rows of IDEA-001 still describe the code. I checked rows 15 and 17 only. Row 13 (link checks in `brain check`) belongs to row 17.
- Whether "PR 2" in IDEA-001 is pull request #15. The branch name fits; the number does not appear.
- Whether DEC-013's "later build" of interview-me happened. Row 21 owns that skill.
- Whether Peter made the ask-user-question repo private (W22).
- Whether a research record holds a prose wait that my searches missed. I did not read RES-001 to RES-077 line by line.
- When each line of IDEA-015, IDEA-016 and DEC-026 to DEC-051 was written. The files are not committed.
- The state of the records of IDEA-016 rows 17 to 30. The brief leaves them out. S19 rests on the idea's Notes only.

Established since the first version: `brain status` treats a parked idea as finished. `scripts/workspace/effort.ts:48-56` sets `finished` for every idea whose status is not `define`, so the open rows of a parked idea are not the active effort unless the branch or the user names it. Row 19 owns the detail.

Contrary evidence:
- `brain check` reports "no finding in 111 workspace files" and "3 migrated decisions have no kind". By Brain's own rules, nothing in section 5 is an error.
- S9: the label is an instructed one. `skills/interview-me/RESEARCH.md:44` says "Label unsupported claims UNVERIFIED in Answer; keep them out of Findings." So a resolved record may hold the label. What differs is the place: the five records of the 0.13.0 form with such lines hold them under Answer, and the six older records hold them under Follow-ups (RES-038 holds one under Findings).
- S13: DEC-020:11 stores `decided: 2026-11-05 by Peter`, and DEC-020:15 opens "Peter decided that brain uses a mod". Commit dfcab49b chose DEC-020 as a record to keep. RES-069:28 speaks of "historical copies", which were outside the tree when it was written.
- S16 and X11: a successor repeats what stands, so the old record is superseded whole on purpose. DEC-040:15 says "The rest of DEC-038 stands, so this record replaces it whole", and DEC-048:15 says the same of DEC-046. DEC-042 repeats the kept parts without those words. DEC-038 does not repeat all of DEC-034.
- S5 and W7 to W10, two readings. One reading: decision records are records of a moment and idea Notes are a log, so an old line is history. IDEA-015 keeps an older line and adds the change below it (:109 then :121). The other reading has evidence against the first: this tree's DEC-010:15, DEC-014:15 and DEC-020:15 differ from their copies in OTHER, so decision text was edited after the decision date, and the template asks to "Replace settled notes with the resulting DEC/RES link".
- RES-073:35 and IDEA-016:133 name waits between efforts in prose: IDEA-008 on IDEA-007, DEC-004's column, and (RES-073 only) IDEA-004's lines on where each row went. They are examples; "only" in IDEA-016:133 and RES-073:123 goes with "in prose". Section 3 finds more of the same kind: W2 to W5 and W12. W2 to W4 are newer than RES-073.
- RES-075:87 and :151 say DEC-002 has `status: superseded`. The file says `status: superseded by DEC-006`.
- IDEA-016:132 lists `proposed` among the decision statuses. The schema allows it, and no record uses it, here or in OTHER.
- S20: the "Settled" lines of IDEA-014 state a rule and do not answer rows 07 and 08, which ask how. So :24 "no row here is decided" is still true by its words.

### 9. Facts for the decide rows

These are facts only. Row 31 joins them with the other topics.

| Row | Facts from these records |
|---|---|
| 01 | 40 edges name a resolved row (12 different rows). No edge names a superseded row; the check forbids it (scripts/workspace/check.ts:314-319). A superseded DEC still counts as a past resolution (scripts/workspace/check.ts:306), and rows 06 and 26 moved their Result to the newest DEC. 5 open rows sit in parked ideas (S2). Three rows started while their 11 blockers were in-progress, and the check accepts it (S18). A resolved, answered record under an in-progress row means "waits on review" in one idea and "waits on checks and a repair" in another (S3, S19). |
| 02 | Today the writer of a prose wait is the main session, in Notes, by the template comment (section 3). The same wait is written in two to six places (W3, W4). The format has two more places that these records do not use: a research record's `outcome: blocked` with its Next action, and DEC-014's do row for a user step. |
| 03 | The report prints a row with a prose wait as the next step (section 4). It reads one stored wait across files today: a research record's `outcome: blocked`, through `from:` (section 2). It treats a parked idea as finished (section 8). |
| 04 | The prose waits between items are W1 to W6. W5 names no target. W6 is between modules, and row 27 holds their specs. W12 and W13 name an idea that is outside this worktree. A draft decision outside this worktree, DEC-019, rejects "edges kept as prose in a capability map record" (section 7). |
| 08 | No idea stores `specced`, so no idea here points at a spec. Three ideas show `parked` with open rows and one shows `parked` for a split (S1, S2, X5). Three accepted decisions rest on "A spec stores no status" and on the idea values define, specced, done and parked (S15). The views' worked-out spec states are Not planned, Planned, Building, In review, Done and Migrated (X20). A draft decision outside this worktree, DEC-018, stores a spec's status in frontmatter (section 7). |
| 09 | These records hold no phase. DEC-030, DEC-033, DEC-035 and DEC-042 describe phases for the views; rows 27 and 28 own phases. A draft decision outside this worktree, DEC-022, says "The words phase and checkpoint go" (section 7). |
| 10 | Row-to-row waits across files exist twice (W1, W2), and both state that a cell cannot hold them. DEC-029 rejected that form and IDEA-016:122 reopened it. `from:` already uses the form `IDEA-015#20`. The draft DEC-019 outside this worktree rejects "row edges that cross files" and leaves an idea-to-spec edge out, where DEC-029 allows it (section 7). |

### 10. Where this topic meets other rows

- Row 17: the schema that allows the values (scripts/workspace/schema.ts:136, :149, :175-177), the migrated exemption, the link checks, and the `decided:` key.
- Row 18: how `readRows` and the frontier treat a `—` cell, a superseded row, and a started row with open blockers (S18).
- Row 19: the report lines for W2, for parked ideas, and for a blocked research record.
- Row 20: why a migrated file keeps a prose status (S12, X13).
- Row 21: the template comment and the skill that put waits and row states in Notes; the UNVERIFIED label (S9).
- Row 25: the history of the status note that IDEA-001 rows 15 and 17 and RES-006 describe.
- Row 27: the specs behind DEC-004's modules and DEC-002:27 ("`spec/SPEC-question.md` is superseded").
- Row 28: the worked-out states of X20.
- Row 29: the full list of wait forms; sections 2 to 4 give this topic's part.

### Checks

Three independent agents checked the first version of this record. All three result files exist. I opened each cited source and decided each issue.

- Sources check: 18 issues reported, 0 blocking. 18 confirmed and fixed, 0 rejected. The fixes: the line numbers of IDEA-015 and IDEA-016, the map counts, the file count of `brain check`, W4, W12, W17, S6, S7, S9, S13, S16, the rename list, "added by hand", the scope sentence, the edge count for row 01, and real commands for C4, C5, C6 and C9.
- Coverage check: 20 issues reported, 1 blocking. 20 confirmed and fixed; two parts of them rejected. Rejected part of issue 10: it calls IDEA-014's lines "settled answers" to rows 07 and 08. The lines state a rule, and the rows ask how to meet it (docs/ideas/IDEA-014-migration.md:36 against :54-55), so I added S20 in that narrower form. Rejected part of issue 18: the words "so check that claim first" are at docs/ideas/IDEA-007-build-and-review-orchestration.md:26, not :28. The blocking issue (rows 28 to 30 of IDEA-016, and X8) holds; S18, S19 and X8 fix it.
- Contrary-evidence check: 19 issues reported, 3 blocking. 19 confirmed and fixed; five parts of them rejected. Issue 1: the "drafts" line is at IDEA-003:101 of the other worktree, not :100. Issue 4: docs/ideas/IDEA-015-views-mod.md:309 names the row statuses, not the idea statuses. Issue 6: it asks to drop the two "records of a moment" sentences; I kept them as one of two readings and put its evidence beside them, because both readings have a source. Issue 11: it calls IDEA-004's `parked` "a misuse"; I state the glossary's meaning and the difference (GLOSSARY.md:21) and leave the verdict to the decide rows. Issue 19: docs/research/RES-072-mod-packaging.md:78 says "Side effect, scratchpad only", not "to review", so the count is 9 lines, not 10. The three blocking issues hold: section 7 (records outside this worktree), section 2 (a second stored wait that a tool reads), and X20 with S15 (the spec states of accepted decisions).

### Commands

Run each from the repo root.

- C1, idea status: `grep -h '^status:' docs/ideas/IDEA-*.md | sed 's/ # .*//' | sort | uniq -c`; comments: `grep -l '^status: .*# define | specced | done | parked' docs/ideas/IDEA-*.md | wc -l`
- C2, rows per status: `awk -F'|' 'FNR==1{m=0} /^## Map/{m=1;next} /^## /{m=0} m && /^\| [0-9][0-9] \|/{s=$(NF-3); gsub(/^ +| +$/,"",s); sub(/by [0-9]+/,"by NN",s); print s}' docs/ideas/IDEA-*.md | sort | uniq -c`. Print `FILENAME, s` for the count per idea, and `$(NF-4)` for the row types.
- C3, blockers: `awk -F'|' 'FNR==1{m=0} /^## Map/{m=1;next} /^## /{m=0} m && /^\| [0-9][0-9] \|/{b=$(NF-2); gsub(/ /,"",b); if(b!="—"){c++; e+=split(b,a,",")}} END{print c" cells, "e" edges"}' docs/ideas/IDEA-*.md`
- C4, results per status: `awk -F'|' 'FNR==1{m=0} /^## Map/{m=1;next} /^## /{m=0} m && /^\| [0-9][0-9] \|/{s=$(NF-3); r=$(NF-1); gsub(/^ +| +$/,"",s); gsub(/^ +| +$/,"",r); sub(/ by [0-9]+/,"",s); print s, substr(r,1,3)}' docs/ideas/IDEA-*.md | sort | uniq -c`
- C5, edge targets, the frontier and started rows with open blockers:

```sh
awk -F'|' 'FNR==1{m=0} /^## Map/{m=1;next} /^## /{m=0} m && /^\| [0-9][0-9] \|/{id=$2; s=$(NF-3); b=$(NF-2); gsub(/ /,"",id); gsub(/^ +| +$/,"",s); gsub(/ /,"",b); k=FILENAME"#"id; st[k]=s; bl[k]=b; f[k]=FILENAME} END{for(k in st){n=(bl[k]=="—")?0:split(bl[k],a,","); w=0; for(i=1;i<=n;i++){t=st[f[k]"#"a[i]]; if(t=="")t="missing"; sub(/ by [0-9]+/,"",t); e[t]++; if(t=="resolved")d[f[k]"#"a[i]]=1; else w++} if(st[k]=="open"){if(w)wait++; else ready++} if(st[k]=="in-progress"&&w)print "started with "w" blockers not resolved: "k} for(t in e)print e[t]" edges to a row that is "t; for(k in d)c++; print c" different resolved rows"; print ready" open rows ready, "wait" open rows waiting"}' docs/ideas/IDEA-*.md
```

- C6, status of each Result target:

```sh
for id in $(awk -F'|' 'FNR==1{m=0} /^## Map/{m=1;next} /^## /{m=0} m && /^\| [0-9][0-9] \|/{r=$(NF-1); gsub(/ /,"",r); if(r!="—")print r}' docs/ideas/IDEA-*.md | sort -u); do grep -h -m1 '^status:' docs/*/"$id"-*.md | sed 's/ # .*//'; done | sort | uniq -c
```

- C7, decisions: `grep -h '^status:' docs/decisions/DEC-*.md | sed 's/ # .*//; s/DEC-[0-9]*/DEC-NNN/' | sort | uniq -c`; `grep -L '^status:' docs/decisions/DEC-*.md`; `grep -n '^migrated:' docs/decisions/DEC-*.md`; `grep -h '^from:' docs/decisions/DEC-*.md | sed 's/ # .*//; s/IDEA-[0-9]*#[0-9]*/a row/; s/IDEA-[0-9]*$/an idea/' | sort | uniq -c`; `grep -h '^evidence:' docs/decisions/DEC-*.md | grep -o 'RES-[0-9]*' | wc -l`; `grep -h '^evidence:' docs/decisions/DEC-*.md | grep -c '\[\]'`; `grep -h '^decided:' docs/decisions/DEC-*.md | sed 's/[0-9-]*//' | sort | uniq -c`
- C8, research: `grep -h '^status:' docs/research/RES-0[0-7]*.md | sed 's/ # .*//' | sort | uniq -c`; `grep -L '^status:' docs/research/RES-0[0-7]*.md`; `grep -h '^outcome:' docs/research/RES-0[0-7]*.md | sort | uniq -c`; `grep -h '^from:' docs/research/RES-0[0-7]*.md | sed 's/ # .*//; s/IDEA-[0-9]*#[0-9]*/a row/' | sort | uniq -c`; `grep -c 'UNVERIFIED' docs/research/RES-0[0-7]*.md`; `grep -c '^- Side effect' docs/research/RES-0[0-7]*.md`
- C9, IDs with no file. It prints 13 IDs: the 9 that section 7 names, and RES-078, RES-081, RES-082 and RES-085, the ends of the two deleted ranges (X14):

```sh
for id in $(grep -ohE '\b(IDEA|DEC|RES|SPEC)-[0-9]{3}\b' docs/ideas/IDEA-*.md docs/decisions/DEC-*.md docs/research/RES-0[0-7]*.md | sort -u); do [ -n "$(find docs/ideas docs/decisions docs/research specs -maxdepth 1 -name "$id-*" -print -quit)" ] || echo "$id"; done
```

- C10: `bun <plugin>/scripts/brain.ts check` and `bun <plugin>/scripts/brain.ts status`, with the 0.13.0 plugin. `diff -rq <plugin>/scripts/workspace scripts/workspace` prints nothing, so the plugin's workspace code is the worktree's.
- C11, agent's choices in decisions: `grep -c 'agent chose\|agent added\|agent proposes\|agent.s \(earlier \|argument \)' docs/decisions/DEC-*.md`
- C12, records outside this worktree: `git worktree list`; `ls <OTHER>/docs/ideas <OTHER>/docs/decisions <OTHER>/docs/research`; `git ls-tree --name-only d3072e51 docs/ideas/ docs/decisions/`; `diff <OTHER>/docs/decisions/DEC-020-status-then-prompt-then-router.md docs/decisions/DEC-020-status-then-prompt-then-router.md`

A plain `grep '^| [0-9][0-9] |'` over IDEA-004 counts 17 lines of a Notes table (:32-48). They are not map rows, so the commands start at `## Map`.

### Coverage of the site index

The two tables below name each site by the line numbers of the index. The index was made before later edits, so its numbers are behind the files: up to 15 lines low in IDEA-015 and up to 36 lines low in IDEA-016. Sections 1 to 9 cite the current lines.

| Index sites | Covered in |
|---|---|
| Idea frontmatter: IDEA-001:1-5, IDEA-004:1-4, IDEA-005 to IDEA-016:1-5 | Section 1; S1; the rename list in section 6 |
| Idea map tables: IDEA-001:25-49, IDEA-004:57-60, IDEA-005:32-34, IDEA-006:34-38, IDEA-007:34-38, IDEA-008:35-38, IDEA-009:34-38, IDEA-010:34-36, IDEA-011:35-38, IDEA-012:35-38, IDEA-013:32-39, IDEA-014:46-55, IDEA-015:301-332, IDEA-016:114-133 | Section 1; S2, S3, S4, S18, S19 |
| "Confirmed by" comment: line 16 of IDEA-001 and IDEA-005 to IDEA-016 | X9 |
| Notes and map template comments: IDEA-005:27, :30; IDEA-006:29, :32; IDEA-007:29, :32; IDEA-008:30, :33; IDEA-009:29, :32; IDEA-010:29, :32; IDEA-011:30, :33; IDEA-012:30, :33; IDEA-013:27, :30; IDEA-014:41, :44 | Section 3, last list; S5 |
| Split notes: IDEA-005:24-26, IDEA-006:24-28, IDEA-007:24-28, IDEA-008:24, IDEA-009:24-28, IDEA-010:24, IDEA-011:24, IDEA-012:24, IDEA-013:24-26, IDEA-014:24-30 | W5; W38; X4; X9; S20; S25 |
| IDEA-001:12, :16, :19, :39, :41,43, :45-49 | S7, S8, S21, S22, W15, W34, section 8 |
| IDEA-004:11,16, :23-25, :26, :30-48, :50-55, :62-63, :66-82, :84 | S1, S13, X4, X10, section 2 (finding IDs) |
| IDEA-008:26, :35-38; IDEA-010:26; IDEA-011:13, :26; IDEA-012:26; IDEA-014:31-39 | W1, W14, W16, W4, W35, S20 |
| IDEA-015:8-14, :13, :16, :26-34, :36-42, :44-46, :48-54, :56-66, :68-71, :73-79, :81-88, :90-96, :98-108, :110-120, :122-146, :148-153, :155-160, :162-164, :166-173, :184-187, :189-197, :199-201, :203-220, :222-244, :246-253, :255-272, :282-288, :295-299, :334-339, :341-351 | W2, W3, W11, W17, W18, W29, W33, W36, W37, S3 to S6, S15, S23, X2, X3, X5, X7, X8, X16, X18, the rename list, section 2 (bracket tags, links outside the workspace) |
| IDEA-016:1-5, :6-14, :16, :18-19, :24, :26-34, :36-42, :44-52, :54-55, :57-63, :65-73, :75-82, :83-89, :90-91, :93-94, :96-101, :103-105, :107-112, :135-136, :138-139 | W3, W4, W19 to W21, W29 to W31, W37, S5, S6, S18, S19, X2, X5, X7, X14, X15, X17, X18 |
| Decision frontmatter: DEC-001:1-5, DEC-002:1-6, DEC-004:1-5 and lines 1-12 of the other 36 records | Section 1; section 2 |
| Decision bodies with a state, a link or a wait: DEC-001:8; DEC-002:24-27; DEC-003:15; DEC-004:8, :11-21, :23, :25; DEC-005:15; DEC-006:15; DEC-007:15; DEC-010:15; DEC-013:15; DEC-014:15; DEC-020:15; DEC-025:15; DEC-026:15; DEC-028:15; DEC-029:15; DEC-030:15; DEC-031:15; DEC-032:15; DEC-033:15; DEC-034:15; DEC-035:15; DEC-036:15; DEC-037:15; DEC-038:15; DEC-039:15; DEC-040:15; DEC-041:15; DEC-042:15; DEC-043:15; DEC-047:15; DEC-048:15; DEC-049:15; DEC-050:15; DEC-051:15 | Sections 2, 3, 5 and 6 |
| Research frontmatter: RES-001 to RES-005:1-5; RES-006:1-7, :5; RES-024:1-7, :5; RES-035:1-7, :5; RES-037:3-5; RES-038:3-5; RES-040:3-5; RES-069, 072, 073, 074, 075, 076, 077:1-8 | Section 1; S24; S25 |
| Research records' own prose state: RES-001:8, :92-119, :23, 121-125; RES-002:8; RES-003:8, :12, :86-95; RES-004:8, 12, :16, :82-100; RES-005:8, :106 | S12, X13 |
| Research records' open points: RES-006:111-114, :115, 118, :117, :119, :116, 120; RES-024:149-154, :155, :156-157; RES-035:85, 101, :102-107, :108-118, 125, 135, 141, 151; RES-037:15-23, :27-34, :257, :670-681, :802-824, :826-838, :840-854, :856-867, :869-879, :901-908, :909-916; RES-038:43, :45-56; RES-040:77-82, :85-92; RES-069:182-185; RES-072:15, 23, :20, 25, :71-78, :80-81; RES-073:122-124, :126-127; RES-074:66-72, :130-133, :135-136; RES-075:51, 154-155, :96-99, :156, :158-159; RES-076:281-285; RES-077:25-27, :56-61, :99-104 | S9, S10, S11, W12, W13, W26 to W28, W32, W33, X12 |
| Research lines that this record relies on or corrects: RES-069:21-27, 29, :28, :168-170; RES-073:35, :50-56, :80-83, :118-119, and :109 inside the range ":84 to :117"; RES-075:87, 151; RES-076:103-113, :115-127, :136-145 | S1, S13, S17, X10, section 2, section 8 |

### Sites judged not relevant

These index sites hold no status, link or wait of the record they are in. Each describes how other files, other tools or a design handle status. The topic rows named own them.

- Idea lines that describe code, evals or a design: IDEA-001:37-38, :40, :44; IDEA-007:9-12; IDEA-008:9-13, :28-29; IDEA-009:9-13; IDEA-010:12; IDEA-012:9,28; IDEA-013:12-13; IDEA-014:9-13 (rows 17 to 24). IDEA-015:18-19, :175-182, :274-278, :280 (the views' design, the user's words and a prototype, IDEA-015's own topic).
- Decision bodies that state a design and hold no state, link or wait of the record: DEC-024:15, DEC-027:15, DEC-045:15 (rows 19 and 27, and IDEA-015).
- Research on other skill packs and the question skill, before Brain's workspace: RES-002:25, 29, 32, 41, 43; :26-28, 41, 43; :30, 37, 43; :50, 52-53, 59; :54, 62; :56-57, 60, 64; :72, 80-81, 83, 85, 87; :117, 121-122, 125, 134-136; :143-152, 154, 156; :160-170. RES-003:27-29, 37; :41; :45-48; :49-50; :51-58; :62, 74-84. RES-004:22-25, 32; :33-34, 38; :35-37; :39-43; :44-50; :52-66; :74-80. RES-005:26, 29-31, 36; :53, 70, 74, 81; :18, 33, 48, 51, 83; :38, 63, 98; :65; :97-98, 100 (row 25).
- Research on the removed status note and on where state files came from: RES-006:8-18 to :93-108 (22 sites); RES-024:8-11, :23-32, :35-39, 41-44, 47-48, :40, :45-46, :51-55, 137-138, :78, 100, 129, 131, :91-96, :99-102, :118-125; RES-035:15 (row 25).
- RES-037's statement of the flow at commit f29cc6b7: the sites from :27-34 to :881-899 that describe code, skills, the report and the migration, and the ledger tables :399-401, :409-419, :421-437, :439-452, :465-477, with :57-58 (rows 17 to 23 and 25). W12 covers :27-34, the "Depends on row 15" cells and the gap table inside these sites.
- Research on the opening question's dialog: RES-038:11-16, :20-24, :25-27, :28-31, :32-34, :35-41, :42; RES-040:11-16, :20-24, :25-30, :31-34, :35-38, :39-41, :42-45, :54-60, :61-65, :66-75 (a wait on the user inside a host dialog; row 23).
- RES-069's repairs, ownership table, findings and probes: :15-19, :51, 61, :53, :56-57, :58-59, :63, :73-75, :76 to :83, :89 to :95, :100, :102-109, :111-113, :115, :124-126, :133, :161, 177, :172-180 (rows 17, 19, 21, 22 and 24).
- Research on the mod and on git: RES-072:18, 47, 49, :40-42, :19, 50, 53; RES-074:15, 42-50, :12, 46, 105-106, :17, 43-45, 91, :47, 110-112; RES-075:11-15, :26, :32-40, :42, :88, 139, :127, :136, 138, 140, 143-144 (IDEA-015's topic).
- RES-073's and RES-076's descriptions of parsers, schemas and formats: RES-073:11-15, :23 to :28, :30, :32-33, :37-38, :40-48, :58-65, :67, :70 to :79, :84 to :117 apart from :109; RES-076:19-30, :36-52, :54-64, :66-79, :81-92, :94-101, :147-178, :180-190, :192-199, :201-209, :211-279 (rows 17, 18, 20 and 27).

## Findings
- The repo holds 14 idea files, none with `migrated:`; 10 store `status: define`, 4 store `status: parked`, and none stores specced or done. Source: `grep -h '^status:' docs/ideas/IDEA-*.md` and `grep -l '^migrated:' docs/ideas/IDEA-*.md`, checked 2026-11-21.
- No idea has a filled `result:`; 13 ideas hold the empty key with the template comment, and IDEA-004 holds no key and no value comment. Source: `grep -n '^result:' docs/ideas/IDEA-*.md` and docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:1-4, checked 2026-11-21.
- 13 idea files hold the comment `# define | specced | done | parked` on the status line. Source: command C1 under Answer, checked 2026-11-21.
- On 2026-11-21 at 11:07 Pacific the idea maps hold 113 rows: 61 open, 16 in-progress, 31 resolved and 5 superseded by NN; IDEA-004's map holds no row. Source: command C2 under Answer, and docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:57-60, checked 2026-11-21.
- IDEA-016's map holds 31 rows: 11 open, 14 in-progress, 2 resolved and 4 superseded by NN. Source: command C2 under Answer with the file name, and docs/ideas/IDEA-016-effort-blocked-by.md:139-169, checked 2026-11-21.
- The 113 rows are 46 interview, 44 research, 22 task and 1 prototype rows; no row is of type ideate, and all 22 task rows are in IDEA-001. Source: command C2 under Answer with the type column, checked 2026-11-21.
- 66 rows hold a Blocked by value, with 118 edges; each edge names a row that exists in the same map. Source: commands C3 and C5 under Answer, checked 2026-11-21.
- 42 edges name an open row, 40 name a resolved row and 36 name an in-progress row; the 40 edges name 12 different resolved rows. Source: command C5 under Answer, checked 2026-11-21.
- Worked out from the tables alone, 26 open rows have no blocker or only resolved blockers, and 35 open rows wait on a row that is not resolved. Source: command C5 under Answer, checked 2026-11-21.
- IDEA-016 rows 28, 29 and 30 store `in-progress`, and each names rows 17 to 27 in Blocked by, which all store `in-progress`; no other in-progress row has a blocker that is not resolved. Source: command C5 under Answer and docs/ideas/IDEA-016-effort-blocked-by.md:155-168, checked 2026-11-21.
- IDEA-016's Notes say that the researchers of rows 28 to 30 built on the records of rows 17 to 27 before those were checked. Source: docs/ideas/IDEA-016-effort-blocked-by.md:103, checked 2026-11-21.
- IDEA-016's Notes say that all 14 topic records store resolved and answered while no row is resolved, and that each record waits on its checks, its repair and the user's review. Source: docs/ideas/IDEA-016-effort-blocked-by.md:101-102, checked 2026-11-21.
- All 31 resolved rows name one record in Result, 22 a DEC and 9 a RES, and no row with another status names a record. Source: command C4 under Answer, checked 2026-11-21.
- The 30 records that the Result cells name store `status: accepted` (21) or `status: resolved` (9); one of the 9 is RES-086, the Result of IDEA-016#16. Source: command C6 under Answer and docs/ideas/IDEA-016-effort-blocked-by.md:154, checked 2026-11-21.
- Of 39 decision records, 31 store `accepted`, 6 store `superseded by DEC-NNN`, none stores `proposed`, and DEC-001 and DEC-004 store no status. Source: `grep -h '^status:' docs/decisions/DEC-*.md` and `grep -L '^status:' docs/decisions/DEC-*.md`, checked 2026-11-21.
- Three decision records carry `migrated: 0.8`: DEC-001, DEC-002 and DEC-004. Source: `grep -n '^migrated:' docs/decisions/DEC-*.md`, checked 2026-11-21.
- DEC-002 is a migrated record that stores `status: superseded by DEC-006`; commit c5d76841 of 2026-11-04 added the line after the migration commit 3fc984b4 of 2026-10-29. Source: docs/decisions/DEC-002-ask-user-question-upstream.md:3-4 and `git log --follow -- docs/decisions/DEC-002-ask-user-question-upstream.md`, checked 2026-11-21.
- DEC-001 and DEC-004 state their decision state only in body prose: "Decided 2026-09-19 by Peter" and "Approved by Peter on 2026-09-19". Source: docs/decisions/DEC-001-lint-and-format.md:8 and docs/decisions/DEC-004-capability-map-brain.md:8, checked 2026-11-21.
- Of the 36 decision records with `from:`, 27 name a map row, 2 name an idea (DEC-025, DEC-050) and 7 say user. Source: command C7 under Answer, checked 2026-11-21.
- 25 decision records name research records in `evidence:`, with 35 links, and 11 hold an empty list; each named record exists and stores `status: resolved`. Source: command C7 under Answer and `grep -h -m1 '^status:'` over each named record, checked 2026-11-21.
- All 39 decision records hold `decided:`; the 36 layout-2 records say "by Peter" and the 3 migrated records hold a date only. Source: command C7 under Answer, checked 2026-11-21.
- Of the 18 research records RES-001 to RES-077, 13 store `status: resolved` and 5 store no status. Source: `grep -h '^status:' docs/research/RES-0[0-7]*.md` and `grep -L '^status:' docs/research/RES-0[0-7]*.md`, checked 2026-11-21.
- 7 of the 13 resolved research records store `outcome: answered`, and 6 store no outcome: RES-006, RES-024, RES-035, RES-037, RES-038 and RES-040. Source: `grep -h '^outcome:' docs/research/RES-0[0-7]*.md` and `grep -L '^outcome:' docs/research/RES-0[0-7]*.md` less the 5 migrated files, checked 2026-11-21.
- The schema makes a research record's `outcome` optional and refuses `status: resolved` only with outcome partial or blocked. Source: scripts/workspace/schema.ts:100-105 and scripts/workspace/schema.ts:176, checked 2026-11-21.
- The 5 research records with no status are the migrated RES-001 to RES-005; line 8 of each holds a prose status, "evidence gathered, decision open" in four and "read-only analysis" in RES-005. Source: `grep -n 'Status:' docs/research/RES-00[1-5]*.md`, checked 2026-11-21.
- The schema allows idea `specced` and `done`, decision `proposed`, research `in-progress`, outcome `partial` and `blocked`, and kind `task`; no record in scope stores one of them. Source: scripts/workspace/schema.ts:136, scripts/workspace/schema.ts:149 and scripts/workspace/schema.ts:175-177 and commands C1, C7 and C8 under Answer, checked 2026-11-21.
- `brain check` reports no finding in 111 workspace files and names 3 migrated decisions with no kind. Source: output of `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts check`, checked 2026-11-21.
- `brain status` joins a research record to its in-progress row through `from:` only when the record stores `in-progress` with outcome partial or blocked, and for blocked it adds a red item that names the retry condition. Source: scripts/workspace/status.ts:179-214, checked 2026-11-21.
- `brain status` prints a decide row on the frontier under "Waiting on the user"; it works this out from the row's Type, Status and Blocked by. Source: scripts/workspace/status.ts:29 and scripts/workspace/status.ts:130, checked 2026-11-21.
- The research template names `outcome: blocked` and a Next action with "the blocker and retry condition" as the record's place for a wait. Source: scripts/workspace/templates/RES.md:10 and scripts/workspace/templates/RES.md:25, checked 2026-11-21.
- `readRows` reads `superseded by NN` as a link and reports a replacement cycle, and the check reports a row that is blocked by a superseded row. Source: scripts/workspace/map.ts:148-160 and scripts/workspace/check.ts:314-319, checked 2026-11-21.
- The check itself refuses a resolved row with no Result, a Result that names research that is not answered, and a Result that names a proposed decision. Source: scripts/workspace/check.ts:297-298, scripts/workspace/check.ts:255-275 and scripts/workspace/check.ts:307-308, checked 2026-11-21.
- `brain status` treats every idea whose status is not `define` as finished, so a parked idea's open rows are not the active effort by default. Source: scripts/workspace/effort.ts:48-56, checked 2026-11-21.
- DEC-014 says that a step only the user can run becomes a do row that blocks the rows that wait on it; the 22 task rows in the maps are code tasks in IDEA-001, and none is a user step. Source: docs/decisions/DEC-014-remove-the-handoff-note.md:15 and docs/ideas/IDEA-001-review-follow-ups.md:28-49, checked 2026-11-21.
- The link from a newer decision back to the one it supersedes exists only in body prose, in DEC-006, DEC-038, DEC-040, DEC-041, DEC-042 and DEC-048. Source: line 15 of docs/decisions/DEC-006-drop-ask-user-question-upstream.md, DEC-038-board-levels-and-filter.md, DEC-040-board-one-type-for-now.md, DEC-041-no-roadmap-view.md, DEC-042-board-type-and-scope.md and DEC-048-brain-session-command.md, checked 2026-11-21.
- Decisions retire items that are not decisions in prose only: a spec in DEC-002, two modules in DEC-004 and a row in DEC-041. Source: docs/decisions/DEC-002-ask-user-question-upstream.md:27, docs/decisions/DEC-004-capability-map-brain.md:13 and :19, and docs/decisions/DEC-041-no-roadmap-view.md:15, checked 2026-11-21.
- DEC-034, DEC-038, DEC-040 and DEC-042 form a supersede chain of three steps. Source: docs/decisions/DEC-034-one-item-type-per-view.md:3, docs/decisions/DEC-038-board-levels-and-filter.md:3 and docs/decisions/DEC-040-board-one-type-for-now.md:3, checked 2026-11-21.
- Four texts change an accepted decision in part and leave its status as it is: DEC-005 refines DEC-003, DEC-020 changes the order in DEC-007, DEC-049 replaces part of DEC-035, and IDEA-016 reopens part of DEC-029. Source: docs/decisions/DEC-005-specs-folder-of-a-first-install.md:15, docs/decisions/DEC-020-status-then-prompt-then-router.md:15, docs/decisions/DEC-049-board-group-by.md:15 and docs/ideas/IDEA-016-effort-blocked-by.md:122, checked 2026-11-21.
- DEC-035 says "A spec stores no status" and gives the ideas board the columns define, specced, done and parked, and DEC-036 and DEC-042 build on it; DEC-050 and DEC-051 change both points, and all five store `accepted`. Source: line 15 of docs/decisions/DEC-035-board-columns.md, DEC-036-migrated-column.md, DEC-042-board-type-and-scope.md, DEC-050-widen-idea-016.md and DEC-051-shared-status-values.md, checked 2026-11-21.
- DEC-035, DEC-036 and DEC-030 define worked-out states for the views: Not planned, Planned, Building, In review and Done for a spec, Migrated, ready and waiting for a row, and open, in progress or done for a wave. Source: docs/decisions/DEC-035-board-columns.md:15, docs/decisions/DEC-036-migrated-column.md:15 and docs/decisions/DEC-030-fixed-and-live-waves.md:15, checked 2026-11-21.
- DEC-033 stores `accepted`, and IDEA-015 calls the detail view's dependencies "the open question of DEC-033". Source: docs/decisions/DEC-033-detail-view-contents.md:3 and docs/ideas/IDEA-015-views-mod.md:64, :79 and :82, checked 2026-11-21.
- DEC-042 says it replaces DEC-040's three levels "and keeps the rest of it", while DEC-040 stores `superseded by DEC-042`; DEC-038 replaces one rule of DEC-034, which stores `superseded by DEC-038`. Source: docs/decisions/DEC-042-board-type-and-scope.md:15, docs/decisions/DEC-040-board-one-type-for-now.md:3, docs/decisions/DEC-038-board-levels-and-filter.md:15 and docs/decisions/DEC-034-one-item-type-per-view.md:3, checked 2026-11-21.
- DEC-040 and DEC-048 each say that the rest of the older record stands, "so this record replaces it whole". Source: docs/decisions/DEC-040-board-one-type-for-now.md:15 and docs/decisions/DEC-048-brain-session-command.md:15, checked 2026-11-21.
- 13 decision records hold a part that the agent chose: DEC-020, 029, 032, 033, 035, 038, 039, 040, 042, 044, 046, 048 and 049. Source: command C11 under Answer, checked 2026-11-21.
- The user's standing rule says the agent makes cheap, reversible choices and "adds no row"; both active ideas hold sections of such choices in Notes. Source: docs/ideas/IDEA-015-views-mod.md:29 and :259-266, and docs/ideas/IDEA-016-effort-blocked-by.md:29 and :124-126, checked 2026-11-21.
- DEC-042 has `from: IDEA-015#21`, a row that the map no longer holds, and it is the Result of rows 06 and 26. Source: docs/decisions/DEC-042-board-type-and-scope.md:9 and docs/ideas/IDEA-015-views-mod.md:323, :340 and :360, checked 2026-11-21.
- DEC-037 has `from: IDEA-015#22`, and row 22's Result names only DEC-036. Source: docs/decisions/DEC-037-read-every-format.md:9 and docs/ideas/IDEA-015-views-mod.md:336, checked 2026-11-21.
- IDEA-008 writes in Notes that its row 02 waits on IDEA-007 row 01, and the row's Blocked by cell is empty. Source: docs/ideas/IDEA-008-stage-state-and-handoffs.md:26 and :38, checked 2026-11-21.
- IDEA-015 writes in Notes that its row 32 waits on IDEA-016#08, and the row's Blocked by cell is empty. Source: docs/ideas/IDEA-015-views-mod.md:45 and :345, checked 2026-11-21.
- `brain status` prints IDEA-015#32 as the next step and under "Waiting on the user", and IDEA-015#29 under "in progress", while the Notes say to ask row 32 after IDEA-016#08 resolves. Source: output of `bun /Users/peterkloss/.claude/plugins/cache/acmelabs/brain/0.13.0/scripts/brain.ts status` on branch feat/views-mod and docs/ideas/IDEA-015-views-mod.md:45, checked 2026-11-21.
- The wait of IDEA-015's spec on IDEA-016 is written in six places and in no field. Source: docs/ideas/IDEA-015-views-mod.md:13, :46 and :51, docs/ideas/IDEA-016-effort-blocked-by.md:24, docs/decisions/DEC-031-effort-field-own-idea.md:15 and docs/decisions/DEC-050-widen-idea-016.md:15, checked 2026-11-21.
- The wait on IDEA-014 is written in prose in two places: IDEA-016 says its spec waits "until the `blocked-by` field exists", and IDEA-014 says IDEA-016 "waits on this idea"; DEC-051 names IDEA-014 and states no wait. Source: docs/ideas/IDEA-016-effort-blocked-by.md:55, docs/ideas/IDEA-014-migration.md:39 and docs/decisions/DEC-051-shared-status-values.md:15, checked 2026-11-21.
- IDEA-005 to IDEA-012 each say "The work runs in idea-number order", an order between 8 ideas that names no target. Source: line 24 of each of docs/ideas/IDEA-005-source-cache.md to docs/ideas/IDEA-012-model-output-checks.md, checked 2026-11-21.
- IDEA-010, IDEA-011 and IDEA-012 store `parked` and say in Notes that the idea "waits until he evaluates it"; their 5 rows are open with no blocker. Source: docs/ideas/IDEA-010-external-specs.md:3, :26 and :36, docs/ideas/IDEA-011-upstream-reference-fixes.md:26 and :37-38, docs/ideas/IDEA-012-model-output-checks.md:26 and :37-38, checked 2026-11-21.
- The glossary gives `parked` one meaning, "when the user sets it aside", and the workspace document says a parked idea "waits until the user names it". Source: GLOSSARY.md:21 and docs/agents/workspace.md:66, checked 2026-11-21.
- The user's standing rule uses "park" for a row that waits on research. Source: docs/ideas/IDEA-015-views-mod.md:34 and docs/ideas/IDEA-016-effort-blocked-by.md:34, checked 2026-11-21.
- IDEA-001's Destination waits on a merge, "built after PR 2 merges"; the branch that its Intent names merged on 2026-10-29 as pull request #15. Source: docs/ideas/IDEA-001-review-follow-ups.md:9 and :19 and `git log --all -i --grep='workspace-layout'`, checked 2026-11-21.
- IDEA-001 row 22 is open, says its bug was "fixed before PR 2" and asks to "Confirm it in the next paid run". Source: docs/ideas/IDEA-001-review-follow-ups.md:48, checked 2026-11-21.
- DEC-004 holds a "Depends on" column over 9 module rows and a "Build order" line, the only table of waits between modules in these records. Source: docs/decisions/DEC-004-capability-map-brain.md:11-21 and :23, checked 2026-11-21.
- Five decisions name a map row that settles an open point; four of those rows are resolved and IDEA-015#29 is in-progress. Source: line 15 of DEC-010, DEC-028, DEC-029, DEC-037 and DEC-048 in docs/decisions, docs/ideas/IDEA-013-session-start-prompt-via-mod.md:36 and docs/ideas/IDEA-015-views-mod.md:335, :337, :339 and :342, checked 2026-11-21.
- DEC-047 accepts the success line "with the command named `/brain:session` (DEC-048)", and DEC-048 says the name returns to the user if no way works. Source: docs/decisions/DEC-047-views-success.md:15 and docs/decisions/DEC-048-brain-session-command.md:15, checked 2026-11-21.
- RES-037 makes its tags wait on file audits and on rows of IDEA-003: 11 table cells say "Depends on row 15" (12 lines hold the words), two lines say Peter decides at row 15, and its gap table names IDEA-003 rows 11, 15, 26, 45, 46, 47, 48, 49 and 52. Source: docs/research/RES-037-flow-statement.md:20, :223, :257, :670, :676 and :808-824, and `grep -n 'Depends on row 15' docs/research/RES-037-flow-statement.md`, checked 2026-11-21.
- RES-037 stores `status: resolved` and holds 39 numbered open choices for the user under "12. Decisions for Peter", with the words "This record chooses none of them". Source: docs/research/RES-037-flow-statement.md:3, :826-828 and `sed -n '826,879p' docs/research/RES-037-flow-statement.md | grep -c '^[0-9][0-9]*\. \*\*'`, checked 2026-11-21.
- Four of RES-037's open choices are rows of IDEA-014 with the same words, and IDEA-014 does not name RES-037. Source: docs/research/RES-037-flow-statement.md:862-866, docs/ideas/IDEA-014-migration.md:48-50 and :53, and `grep -n RES-037 docs/ideas/IDEA-014-migration.md`, checked 2026-11-21.
- This worktree names IDEA-002, IDEA-003, RES-009, RES-032, RES-033, RES-034, RES-036, DEC-012 and DEC-018 and holds no file for them; no commit on any branch holds IDEA-002, IDEA-003, RES-032, RES-033, RES-034, RES-036, DEC-012 or DEC-018. Source: command C9 under Answer and `git log --all -- 'docs/ideas/IDEA-002*' 'docs/ideas/IDEA-003*' 'docs/research/RES-032*' 'docs/research/RES-033*' 'docs/research/RES-034*' 'docs/research/RES-036*' 'docs/decisions/DEC-012*' 'docs/decisions/DEC-018*'`, checked 2026-11-21.
- Another worktree of this repository holds those records as files that are not committed: IDEA-002, IDEA-003, DEC-007 to DEC-024 and 54 research records. Source: `git worktree list`, `ls /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/ideas /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/decisions /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/research` and `git ls-tree --name-only d3072e51 docs/ideas/ docs/decisions/`, checked 2026-11-21.
- In that worktree IDEA-003 says that DEC-012 to DEC-023 "stand as drafts until a check against the skills and the code lands", and all 22 decisions with a status store `accepted` (20) or `superseded by DEC-NNN` (2). Source: /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/ideas/IDEA-003-finish-workflow-changes.md:101 and :105, and `grep -h '^status:'` over that worktree's docs/decisions, checked 2026-11-21.
- In that worktree IDEA-003 row 15 is resolved with DEC-014, row 25 with RES-037 and row 26 with RES-047. Source: /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/ideas/IDEA-003-finish-workflow-changes.md:145, :154 and :155, checked 2026-11-21.
- Four draft decisions in that worktree are on the questions of IDEA-016's decide rows: DEC-018 stores a spec's status in frontmatter, DEC-019 sets one `blocked-by` standard and rejects row edges that cross files, DEC-022 drops the words phase and checkpoint, and DEC-016 says the state records a wait such as a pull request review. Source: line 15 of DEC-016-each-stage-names-the-next.md, DEC-018-a-spec-carries-a-status.md, DEC-019-one-dependency-standard.md and DEC-022-spec-task-subtask.md in /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/decisions, checked 2026-11-21.
- 11 records differ in `from:` between the two worktrees: DEC-010, DEC-020, RES-035, RES-038 and RES-040 name an IDEA-003 row there and an IDEA-013 row here, and DEC-007, DEC-013, DEC-014, RES-006, RES-024 and RES-037 name IDEA-003 or one of its rows there and `user` here. Source: `grep -H '^from:'` over the same files in /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs and in this worktree's docs, checked 2026-11-21.
- Three decisions differ in body text between the two worktrees: DEC-010 names IDEA-003#54 there and IDEA-013#03 here, DEC-014 has three more sentences there, and DEC-020 has one more clause there. Source: `diff` of DEC-010, DEC-014 and DEC-020 in /Users/peterkloss/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/decisions against docs/decisions, checked 2026-11-21.
- The message of commit dfcab49b says "Records whose rows moved now point at IDEA-013" and "Names of records left behind are pruned from decisions and ideas", and gives a reason to bring DEC-007, DEC-013 and DEC-014 and none for DEC-020. Source: `git show --stat dfcab49b`, checked 2026-11-21.
- 10 ideas keep the template comment that tells the writer to "record waits with their retry condition" in Notes and to "Replace settled notes with the resulting DEC/RES link". Source: docs/ideas/IDEA-005-source-cache.md:27 and `grep -n 'record waits with their retry condition' docs/ideas/IDEA-*.md`, checked 2026-11-21.
- IDEA-004 changed from `define` with 17 open rows to `parked` with an empty map in commit dfcab49b; its Out of scope lists where each row moved, and its Success line still says each finding has an open row. Source: `git show d3072e51:docs/ideas/IDEA-004-keystone-workflow-follow-ups.md` and docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:3, :11, :26 and :66-82, checked 2026-11-21.
- IDEA-015#29 is in-progress with no Result, while RES-077 stores `status: resolved`, `outcome: answered` and `from: IDEA-015#29`; the Notes say the review with the user is pending. Source: docs/ideas/IDEA-015-views-mod.md:342 and :86-92 and docs/research/RES-077-brain-session-command.md:1-8, checked 2026-11-21.
- IDEA-015#08 is an in-progress prototype row; its result is a file on branch `prototype/views-board` in another worktree, and the Notes say its three review questions are on hold by the user's word. Source: docs/ideas/IDEA-015-views-mod.md:325, :57 and :75, checked 2026-11-21.
- IDEA-015's Notes hold a chain of waits on the user for row 08: a pending question, the user's reaction to a second mockup, his further questions, then the three review questions. Source: docs/ideas/IDEA-015-views-mod.md:70, :76, :83 and :84, checked 2026-11-21.
- IDEA-015's Notes keep three older row results that differ from the map: row 26 with DEC-040, row 12 with DEC-046 and row 06 with DEC-040, where the map names DEC-042, DEC-048 and DEC-042. Source: docs/ideas/IDEA-015-views-mod.md:109, :153 and :221 against :340, :328 and :323, checked 2026-11-21.
- IDEA-015 holds seven Notes headings that say "answered, decision record next", "answered, decision records next" or "partial answer" for rows that the map stores as resolved or that are dropped. Source: `grep -n '^### Row' docs/ideas/IDEA-015-views-mod.md` and docs/ideas/IDEA-015-views-mod.md:323, :328, :331, :336, :340, :341 and :360, checked 2026-11-21.
- More Notes lines in IDEA-015 state a row state that the map no longer holds: "Partial answers on open rows" lists resolved row 15, a line says only rows 08 and 15 remain, a line gives row 21 as partial, and a line ties row 17 to DEC-028. Source: docs/ideas/IDEA-015-views-mod.md:212-214, :99, :255 and :285 against :331, :332, :339 and :360, checked 2026-11-21.
- Two Notes lines name rows 12 to 15 of IDEA-016 as the next step, and those rows are superseded. Source: docs/ideas/IDEA-015-views-mod.md:52, docs/ideas/IDEA-016-effort-blocked-by.md:73 and :150-153, checked 2026-11-21.
- IDEA-001 rows 15 and 17 are open and name the code of the `docs/STATUS.md` note, which DEC-014 removed; the scripts hold no `readNote`, and the second finding of row 17, `folderPath`, still exists. Source: docs/ideas/IDEA-001-review-follow-ups.md:41 and :43, docs/decisions/DEC-014-remove-the-handoff-note.md:15, `grep -rn readNote scripts` and scripts/workspace/config.ts:73, checked 2026-11-21.
- IDEA-001's Success line lets a row resolve with "a commit that fixes it", and the check refuses a resolved map row whose Result names no DEC or RES. Source: docs/ideas/IDEA-001-review-follow-ups.md:12 and scripts/workspace/check.ts:297-298, checked 2026-11-21.
- 11 of the 13 resolved research records hold lines with the word UNVERIFIED, from 1 line (RES-072) to 11 lines (RES-035); RES-069 and RES-073 hold none. Source: `grep -c 'UNVERIFIED' docs/research/RES-0[0-7]*.md`, checked 2026-11-21.
- The research instruction says "Label unsupported claims UNVERIFIED in Answer; keep them out of Findings", so the label is an instructed one. Source: skills/interview-me/RESEARCH.md:44, checked 2026-11-21.
- RES-038 says it answers two UNVERIFIED lines of RES-035; RES-035 keeps both lines, and RES-037 says each UNVERIFIED line of RES-035 still stands. Source: docs/research/RES-038-opening-question.md:43, docs/research/RES-035-auto-start-mechanisms.md:108 and :113, and docs/research/RES-037-flow-statement.md:908, checked 2026-11-21.
- Nine follow-up lines in four resolved research records ask the user to review a side effect, and IDEA-015 says of the reported side effects "none removed". Source: `grep -h '^- Side effect' docs/research/RES-0[0-7]*.md | grep -c 'to review'` and docs/ideas/IDEA-015-views-mod.md:210, checked 2026-11-21.
- Three open points of resolved research records were taken up by rows that are now resolved, and the lines carry no mark of it: the words of RES-038's follow-up match IDEA-013#04, those of RES-040's match IDEA-013#05, and RES-072 leaves a choice to IDEA-015#12. Source: docs/research/RES-038-opening-question.md:46, docs/research/RES-040-ui-ask-opening-question.md:78, docs/research/RES-072-mod-packaging.md:23, docs/ideas/IDEA-013-session-start-prompt-via-mod.md:37-38 and docs/ideas/IDEA-015-views-mod.md:328, checked 2026-11-21.
- RES-037 stores `status: resolved` and says that every tag is provisional until the file audits finish, and that it rests on RES-032 to RES-036. Source: docs/research/RES-037-flow-statement.md:3, :20 and :23, checked 2026-11-21.
- RES-069 stores `resolved` and `answered`, and its Next action names a step that the main session still completes. Source: docs/research/RES-069-keystone-workflow-audit.md:1-8 and :182-183, checked 2026-11-21.
- RES-069 says that DEC-013 and DEC-014 are reapproved and that "The other held DEC-012–023 remain unapproved, despite accepted frontmatter in historical copies"; DEC-020 stores `accepted` and `decided: 2026-11-05 by Peter` and is the Result of IDEA-013#05. Source: docs/research/RES-069-keystone-workflow-audit.md:27-28, docs/decisions/DEC-020-status-then-prompt-then-router.md:3 and :11, and docs/ideas/IDEA-013-session-start-prompt-via-mod.md:38, checked 2026-11-21.
- RES-069 and IDEA-004 call the approval of the completed repairs a delegated review, "not Peter's manual review". Source: docs/research/RES-069-keystone-workflow-audit.md:26 and :164 and docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:25, checked 2026-11-21.
- DEC-007, DEC-010, DEC-013, DEC-014, DEC-020 and DEC-025 entered the tree in commit dfcab49b, the same commit that kept IDEA-004's line on held decisions. Source: `git show --stat dfcab49b` and docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:84, checked 2026-11-21.
- RES-073 counts 13 ideas, 68 map rows and 43 edges on 2026-11-20, and the tree now holds 14 ideas, 113 rows and 118 edges. Source: docs/research/RES-073-view-data.md:118 and commands C1, C2 and C3 under Answer, checked 2026-11-21.
- RES-073 names three cases of waits between efforts in prose, and IDEA-016 says such waits "exist today only in prose" with two cases. Source: docs/research/RES-073-view-data.md:35 and docs/ideas/IDEA-016-effort-blocked-by.md:133, checked 2026-11-21.
- IDEA-015's map has no row 09, 16, 21 or 27; its Out of scope lists each as dropped on 2026-11-20, and rows 09 and 16 became an agent's choice. Source: docs/ideas/IDEA-015-views-mod.md:360, :361, :363 and :364 and command C2 under Answer, checked 2026-11-21.
- IDEA-015 row 30 stores `superseded by 31`, and its Notes say that its question "drops" and that row 31 asks about a Group by select. Source: docs/ideas/IDEA-015-views-mod.md:182-183, :343 and :344, checked 2026-11-21.
- IDEA-016 says row 12 "is now rows 17 to 19", and the row's Status cell names one row, `superseded by 17`. Source: docs/ideas/IDEA-016-effort-blocked-by.md:95 and :150, checked 2026-11-21.
- IDEA-016#08 is stored `open` while its Notes heading says "partial answer, waits on research". Source: docs/ideas/IDEA-016-effort-blocked-by.md:65 and :146, checked 2026-11-21.
- IDEA-014's Notes say "no row here is decided" and hold two later lines "Settled:", the first with the tag "[rows 07, 08]"; rows 07 and 08 are open, and line 38 names a relation to row 03 that no cell holds. Source: docs/ideas/IDEA-014-migration.md:24, :36-38 and :54-55, checked 2026-11-21.
- IDEA-016 holds a retry condition whose target is a point in time or a permission of the user, and a later line says the run resumed. Source: docs/ideas/IDEA-016-effort-blocked-by.md:108 and :112, checked 2026-11-21.
- Three decisions and three Out of scope lines put work off "for now" or to "a later idea" with no item to hold it, and the idea template says Out of scope "never graduates back". Source: line 15 of docs/decisions/DEC-026-views-show-only.md, DEC-040-board-one-type-for-now.md and DEC-043-views-claude-code-only.md, docs/ideas/IDEA-015-views-mod.md:356, :357 and :359, and scripts/workspace/templates/IDEA.md:35, checked 2026-11-21.
- No idea holds a "Confirmed by" line outside the template comment, and 10 ideas say "The Intent is a draft"; the check asks for the line only when an idea stores done or specced. Source: `grep -n 'Confirmed by' docs/ideas/IDEA-*.md`, `grep -l 'The Intent is a draft' docs/ideas/IDEA-*.md` and scripts/workspace/check.ts:340-357, checked 2026-11-21.
- IDEA-016 records that two research runs were stopped and their records RES-078 to RES-085 deleted, with the numbers kept. Source: docs/ideas/IDEA-016-effort-blocked-by.md:76-82, checked 2026-11-21.
- RES-075 says DEC-002 has `status: superseded`, and the file stores `status: superseded by DEC-006`. Source: docs/research/RES-075-git-item-history.md:87 and docs/decisions/DEC-002-ask-user-question-upstream.md:3, checked 2026-11-21.
- The links in these records include two Markdown links to a file and 10 rows that name a record ID inside the Question cell. Source: `grep -n '\]([^)]*\.md)' docs/ideas/IDEA-*.md docs/decisions/DEC-*.md docs/research/RES-0[0-7]*.md` and docs/ideas/IDEA-014-migration.md:55, docs/ideas/IDEA-015-views-mod.md:319, :328, :339, :340, :342 and :345, and docs/ideas/IDEA-016-effort-blocked-by.md:139, :142 and :148, checked 2026-11-21.
- The word "resolved" is on 46 lines of IDEA-015 and 9 lines of IDEA-016. Source: `grep -c -i '\bresolved\b' docs/ideas/IDEA-015-views-mod.md docs/ideas/IDEA-016-effort-blocked-by.md`, checked 2026-11-21.

## Follow-ups
- Is DEC-020 approved today, or is it one of the drafts that RES-069:28 and the other worktree's IDEA-003:101 name? IDEA-013#05 rests on it.
- Do IDEA-001's 23 open rows still describe the code? Rows 15 and 17 name code that DEC-014 removed.
- Do the draft decisions DEC-016, DEC-018, DEC-019 and DEC-022 in the `interview-repair` worktree count as input for IDEA-016's decide rows 02 to 04 and 08 to 10? They are not committed and not approved.

## Next action
None.
