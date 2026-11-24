---
id: RES-101
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-016#31
date: 2026-11-21
---
# RES-101: How Brain handles status and waits today: the synthesis

## Question
Across all topics, how does Brain handle status and waits for each item kind, where do the item kinds differ, and which facts bear on each decide row (01 to 04, 08 to 10)?

## Answer
Sufficient answer, with a source per claim: (1) a summary of at most 25 short lines; (2) one table, item kind by aspect; (3) every difference between item kinds; (4) one section of facts per decide row 01, 02, 03, 04, 08, 09 and 10; (5) what DEC-051's values and DEC-029's field break, with counts; (6) where two topic records disagree; (7) what lies outside this worktree. Facts only: no recommendation and no design.

How to read the sources. Each claim names its finding here (S01 to S110, under Findings) or the finding of the topic record that holds the depth. The topic records are RES-087 to RES-100; the inventory is RES-086. Source version: commit `dfcab49b` on branch `feat/views-mod`, with the uncommitted records of this session.

State of the answer: answered. All seven parts are written, and this version repairs each issue that held in three independent checks; the results are under "Checks". A claim with an S-finding was opened at its source for this record. A claim that cites only a topic record rests on that record's finding, which names its own source and passed that record's three checks; section 8 gives the limits.

### 1. Summary

1. Code reads a stored status in two places: a `status:` key in frontmatter, and the Status cell of a row (S01, S04, S07, S08).
2. A spec, a phase and a wave store no status. The code works a spec's state out from its plan rows (S03, S12).
3. Code holds four sets of values: for ideas, rows, decision records and research records (S01, S04, S07, S08).
4. One stored wait names its target: the Blocked by cell, with two-digit row numbers of the same table (S05).
5. No frontmatter key names what an item waits on. A wait between two efforts is prose (S02, S40).
6. Three stored values mean "this item waits" and name no target: `parked`, `proposed` and `outcome: blocked` (S01, S07, S08).
7. A row that waits on a row is free only when the blocker is `resolved` (S10, S30).
8. A superseded blocker is a check finding. No code repairs the cell (S15, S24).
9. No rule compares a row's own status with its blockers. Four rows of IDEA-016 show it (S16).
10. 15 rows stay `in-progress` after their record is answered, until the user's review. No value holds that state (S70).
11. `brain new-doc` writes the first status. After that only agents write one (S17, S18).
12. No instruction writes `parked`, `proposed`, a plan row back to `open`, or any state of a spec (S19, S20, S25).
13. Resume can reopen a resolved map row (S57).
14. Two instructions set an idea to `specced` on the same trigger. The spec skill does it before the user approves the spec (S21, S22).
15. A started research row becomes `in-progress`. A started build task keeps its row `open` (S23, S26).
16. The code has one flag per effort, `finished`. It is true for each idea that is not `define`, and for a spec with no row (S11, S12).
17. `brain status` shows no wait between efforts. "Waiting on the user" is the decide rows that are ready to ask (S27, S28).
18. A checkpoint is a plan row. A phase is the tasks that it names, with no ID, status or wait of its own (S06, S29).
19. `brain plan` works the waves out. A layout-2 plan with rows stores a text copy that `brain check` compares (S30, S31).
20. By its edges a checkpoint blocks only tasks of its phase. The build texts stop every new task; no file stores that (S32, S92).
21. No real plan here has the layout-2 row table. The code reads all nine specs as finished (S33, S34).
22. DEC-050 puts phases and a stored spec status in scope. DEC-051's text names no phase (S45, S68).
23. `brain check` rejects each new key and each renamed value today (S35, S36, S88).
24. `define` is the idea status that is renamed, and also the stage word that stays. The renames touch 10 ideas and 31 rows here (S37, S83).
25. Not established: what a live session does with these rules. Outside this worktree are a prototype, other repos and held drafts (sections 7 and 8).

### 2. Item kind by aspect

Short forms: "main session" is the session that talks to the user. "Still to do" is `open` or `in-progress`.

| Item kind | Status stored | Values | Who sets and changes it, and when | What checks it | What reads and reports it | Waits stored | What ends a wait on it |
|---|---|---|---|---|---|---|---|
| Idea | `status:` in frontmatter (S01) | define, specced, done, parked (S01) | `brain new-doc` writes `define`; idea-refine's save keeps it. Interview-me's Finish writes `specced`, or `done` with `result:`. The spec skill writes `specced` when `sources:` names the idea; the planner reaches the same step for a spec from the chat. No instruction writes `parked` or any way back; real commits do (S17, S19, S21, S22, S77; RES-099, findings A23 and B16) | The value list. `done` needs `result:`. `done` and `specced` need no row still to do, no fog and a confirmed Intent. No check ties `specced` to a spec (S01, S14; RES-098, J04) | `effort.ts` tests only for `define`. `brain status` gives the stage, and its JSON lists each idea with its status and its specs. Interview-me's Resume reads all four values (S11, S27, S76, S21) | None with a target. `parked` with no target. Prose in Notes (S02, S40) | No stored wait names an idea. The code's `finished` is true for each value but `define`. The workspace file says a parked idea "waits until the user names it" (S11, S56) |
| Spec | Not stored. A `status` key is a finding (S03, S35) | None. Worked out: `build` or `finished` (S12, S27) | No writer. Each of the nine real specs holds a prose `Status:` line from layout 1 that no code reads (S25, S34) | No rule on a spec's state (S03) | `effort.ts`: finished when no plan row is still to do. `brain status`: the stage (S12, S27) | None. `sources:` is a link, not a wait. A "Depends on" column in the capability map's decision record, by instruction of the spec skill; prose in spec and plan heads (S03, S40, S72) | No stored wait names a spec. Finished is also true for a spec with no plan row (S12) |
| Phase | Not stored. Worked out: the task rows that a checkpoint's cell names (S29) | None | Nobody. The planner writes the checkpoint row that defines it (S29) | The checkpoint rule of `brain check` (S29, S62) | `brain plan`: "Phases that share a wave". `brain status`: nothing (S29, S28) | None. Its tasks hold their own cells (S29) | Not defined. The checkpoint row's `resolved` is the only stored mark of its review (S29) |
| Wave | Not stored as an item. A text copy sits under "Parallel waves" in a layout-2 plan with rows (S30, S31) | None. The copy holds no status | The planner writes the copy. The main session writes it again at each row close (S31, S26) | The copy must equal what `brain plan` prints. A plan with no row, a row problem or the `migrated` key is skipped (S31, S89) | `brain plan`; `/build auto` through `brain plan --json` (S30, S26) | The waves are the worked-out order of the rows' waits | Not defined. A row's wave number changes when an earlier row resolves (S30) |
| Map row | Status cell (S04) | open, in-progress, resolved, superseded by NN (S04) | Only the main session. `open` at Chart or at idea-refine's save. `in-progress` when a research or do row starts. `resolved` when its record has no finding. `superseded by NN` in a whole-map pass. Resume reopens a resolved row whose record does not settle it. A row beyond the destination leaves the table (S23, S24, S57, S67, S77) | The value. A resolved row names a record that exists; a research record is `resolved` with the outcome `answered` or none; a decision is not proposed. A cycle. A superseded blocker (S13, S15, S85) | `frontier`; the five lines of `brain status`; interview-me (S10, S27) | Blocked by cell: two-digit numbers of the same map (S05) | Only `resolved`. A superseded blocker is a finding (S10, S15) |
| Plan row (task) | Status cell, the same pattern; also the ticks of its block in `tasks/todo.md`, which no workspace code reads (S04, S26; RES-099, C03) | The same four | The planner writes `open`. The main session of a build ticks the boxes and sets `resolved` at "Close a row". The planning skill lists `in-progress` and `superseded by NN` as values; no instruction writes either, and none sets a row back (S26, S20, S75; RES-099, C09 and C10) | The format, the checkpoint rule and the waves copy. One row with a format problem stops both rules for the whole plan. No rule reads its Result (S13, S29, S31, S89) | `frontier`, `layWaves`, `brain plan`, `brain status`, `effort.ts` (S10, S30, S12) | Blocked by cell: numbers of the same plan (S05) | Only `resolved`. In a build a task can also wait for the cap or a sign-off; no field stores that (S10, S20) |
| Checkpoint | A plan row with the type `checkpoint`, and a block of boxes in `tasks/todo.md` (S06, S26) | The same four | The planner writes the row. The main session closes it after the user's yes; the value `resolved` is an inference from "Close a row" (S32) | The checkpoint rule. No rule ties its status to its tasks (S29) | `brain plan` marks it; the build stops at it; `brain status` shows it as a step and never under "Waiting on the user" (S28, S32, S55) | Its cell lists the phase's tasks, and it may name another checkpoint. Its wait on the user is not stored (S29, S32, S62) | A later task is free when the row is `resolved`. The build stop ends at the user's yes (S32) |
| Decision record | `status:` in frontmatter (S07) | proposed, accepted, superseded by DEC-NNN. A vendored skill teaches a `## Status` body section with "Deprecated" (S07, S74) | The template writes `accepted`. The session that records a new decision sets `superseded by DEC-NNN` on the old one, also on a migrated record. No instruction names a step that writes `proposed` (S17, S19, S95) | The value. The replacing record exists. `decided:` is needed unless `proposed`. A proposed record cannot resolve a map row (S07, S13) | `brain check`. By instruction interview-me's Resume reads `proposed`. The four state lines of `brain status` read no decision record (S27, S57) | None with a target. `proposed` is a wait on the user; `decided:` stores its end (S07) | A row that names the record stays `resolved` after the record is superseded (S13) |
| Research record | `status:` and `outcome:` in frontmatter (S08) | in-progress, resolved; outcome answered, partial, blocked. `outcome` is optional (S08, S85) | The template writes `in-progress`. A research row's sub-agent writes its own record. For a do row the session that runs the work creates the record and sets `answered` and `resolved`. On Resume the main session may repair a record (S17, S23, S57, S66) | `resolved` cannot go with `partial` or `blocked`. A resolved map row needs a record that is `resolved` with the outcome `answered` or none (S08, S13, S85) | `brain status` joins it to its row by `from:`: a partial or blocked record marks "Next step", and a blocked one adds to "Red" (S09) | `outcome: blocked`, with no target. The blocker and the retry condition are prose under Next action (S08, S09) | By instruction the row stays `in-progress` while the record is partial or blocked. In the real records 15 rows also stay `in-progress` after the record is answered (S09, S70) |

### 3. Differences between item kinds

Each line gives the concept, then each mechanism and where it is. RES-089 (its table "Where two item kinds use a different mechanism") and RES-098 hold the depth.

1. **Where status lives.** Frontmatter key: idea, decision record, research record. Table cell: map row, plan row, checkpoint. Nowhere: spec, phase, wave (S01, S03, S04, S07, S08).
2. **The set of values.** Four sets, in four pieces of code: a list for ideas and research records, a pattern for decision records, and a pattern plus a hand-written message for rows. A fifth set is in the vendored ADR skill (S01, S04, S07, S08, S74).
3. **The word for work in hand.** `define` on an idea. `in-progress` on a row and on a research record. None on a spec (S01, S04, S08).
4. **The word for finished.** `done` or `specced` on an idea. `resolved` on a row. `resolved` with `answered` on a research record. `accepted` on a decision record. Worked out for a spec (S01, S04, S07, S08, S12).
5. **Not started.** `open` exists on rows only. An idea starts at `define`, a research record at `in-progress`, a decision record at `accepted` (S17).
6. **Set aside.** `parked` exists on an idea only. The glossary says "when the user sets it aside". The real records show two more states: split and emptied (IDEA-004), and split off and not picked yet (IDEA-010 to IDEA-012). A standing preference also says to "park" rows that wait on research (S38, S105, S110).
7. **Superseded.** A row and a decision record hold the target inside the value. An idea, a spec and a research record have no such value. The row form names one row, and four real rows were each replaced by two or three rows (S04, S07, S39).
8. **The check of a supersession.** Row: the target is in the table, and no loop. Decision record: the target exists; no loop check (S15, S90).
9. **What `superseded` does to a wait.** For a row that waits on a row it is an error. For a finished idea or spec it counts as not still to do. The checkpoint rule drops the row; `brain plan` drops only a superseded checkpoint (S12, S14, S15, S29).
10. **Whether an effort is finished.** Idea: the stored status, each value but `define`; its rows do not count. Spec: worked out from plan rows. The workspace file puts a parked idea in a group of its own; the code has one flag (S11, S12, S56).
11. **Whether "finished" needs settled content.** Idea: three rules, for `done` and `specced` only. Map row: a valid record. Research record: no partial or blocked outcome. Plan row and spec: none (S13, S14).
12. **What an item produced.** `result:` on an idea. A checked Result cell on a map row. An unchecked Result cell on a plan row. `outcome:` on a research record. Nothing on a spec. The Result has three forms: a DEC or RES ID, a commit SHA with a command and its outcome, and "DEC-NNN or a commit SHA" (S01, S13; RES-095, row 10 facts).
13. **A started item.** A research or do row of a map is set to `in-progress`. A build task keeps its row `open`. So the frontier cannot tell a running build task from one that did not start. Against this, a reference says the build keeps the rows "current throughout each task", the planning skill lists `in-progress` for a plan row, two fixtures hold one, and one grader accepts it on a checkpoint (S23, S26, S75).
14. **A returned result in review.** Stored as `in-progress` on the row, with a record that is `resolved` and `answered`. `brain status` prints the row as "in progress", not as waiting on the user (S43, S70).
15. **Who writes.** The main session writes ideas and rows. A sub-agent writes its own research record. The CLI writes first values. Nobody writes a spec state (S17, S18, S23, S25).
16. **Two marks for one finished task.** A plan row has the row status and the ticks. A map row has one mark (S26; RES-099, C03).
17. **A wait with a target.** Blocked by cell: rows only. No form for an idea, a spec, a phase or a record (S02, S05).
18. **A wait with no target.** `parked`, `proposed`, `outcome: blocked`, and prose in Notes, in Next action and in Open Questions (S01, S07, S08, S40).
19. **A wait on the user, as shown.** A decide row on the frontier: shown in the report. A checkpoint row and a do row for a step of the user: stored, not shown as a wait on the user. A proposed decision, an unconfirmed Intent and a pending question in Notes: not shown (S28, S32).
20. **A wait on the user, as instructed.** Four texts name four places: the active effort's rows and records (protocol), the idea's Notes (interview-me), the spec's Open Questions (spec skill), and the vendored context-engineering skill, which says to persist "required approvals" and names no place for them (S94).
21. **A stored copy of worked-out waits.** A layout-2 plan with rows stores "Parallel waves", kept current by a check. A map stores none; the glossary says the frontier is "never written down" (S31).
22. **Frontier and wave 1.** The frontier takes `open` rows. Wave 1 also takes `in-progress` rows. Five instruction sites call wave 1 the frontier (S10, S30, S91).
23. **How an item names another item.** A two-digit number local to the table (Blocked by, `superseded by NN`). `IDEA-NNN#NN` or `SPEC-NNN#NN` (`from:`). A bare ID (`sources:`, `evidence:`, `result:`). An ID found in free text (Result cell). A module id (capability map) (S05, S41, S72).
24. **The check that a link's target exists.** Yes for `sources`, an idea's DEC `result`, a map row's Result and a superseding DEC. No for `from`, `evidence` and a plan row's Result (RES-089, G07).
25. **The status of a decision that a result names.** A resolved map row may not name a proposed decision. An idea's `result:` may (RES-089, D15).
26. **The empty value.** `—` in a cell, `[]` in a frontmatter list, `none` in the capability map example, an absent key (S72; RES-098, H02).
27. **The user's approval.** `decided:` on a decision record. A "Confirmed by" line in an idea's body. Free text in a checkpoint row's Result. A decision record for an approved capability map and for the approval source of a plan answer. No file for the approval of a spec (S07, S14, S72; skills/planning-and-task-breakdown/SKILL.md:153; RES-099, E10).
28. **A stored date.** `decided` on a decision record, `date` on a research record, the confirmation line of an idea. None on a row or a spec (RES-089, G10).
29. **Where the writer sees the allowed values.** A template comment for an idea and both record kinds. For a row only the finding text or a skill (S17; RES-089, G17).
30. **No status at all.** A migrated file may omit `status`. An idea with none reads as finished, a research record with none cannot resolve a row, and a decision record with none can (S42).
31. **A migrated file.** `effort.ts` does not look at the `migrated` key; `brain check` and the report lines of `brain status` do (S42).
32. **What a checkpoint holds back.** By its edges: the later tasks that depend on its phase. By the build texts: every new task (S32, S92).
33. **How a phase is defined.** Layout 2: by its checkpoint row. Layout 1 and the real plans: by a heading or a plain line (S29, S33).
34. **A loop of waits.** Found between rows of one table only. Two decision records can supersede each other with no finding. In a plan, one row problem hides the loop until it is fixed (S15, S89).

### 4. Facts for each decide row

Each row has four parts: the facts, what any design must handle, the contrary evidence, and what is unknown. "Must handle" lists cases that exist today. It is not a design.

#### Row 01: when does a named item stop blocking another?

Facts:
- A row that waits on a row is free only when the blocker is `resolved`. The frontier and the waves use the same test (S10, S30).
- For a spec the code reads its own rows: it is finished when no row is `open` or `in-progress`, so `superseded` counts as not still to do (S12).
- For an idea the code reads only the stored status. A `define` idea with every row resolved is not finished, and a parked idea with open rows is. The row rule for an idea is the check on `done` and `specced`, and interview-me's Finish (S11, S14; skills/interview-me/SKILL.md:175).
- A superseded blocker is a `brain check` finding while the waiting row is still to do. The code does not follow the link to the new row. For a map the main session redirects the wait or removes it with a reason; for a plan no instruction covers it (S15, S24; RES-099, C10).
- For an effort the code has one flag. `finished` is true for `specced`, `done`, `parked`, an unknown value, an idea with no status, and a spec with no plan row. The nine migrated specs here are finished because no plan has the row table, not because of the `migrated` key (S11, S12, S33, S42).
- A row cannot hold `parked` today. Four ideas hold it, and three of them hold five open rows (S04, S110).
- A map row cannot be `resolved` without a valid record. A plan row's Result has no check (S13).
- A decision record that is superseded later still resolves its row. In the real records a person moves the row's Result to the new decision; no resolved row names one of the six superseded decisions (S13, S104; RES-098, J29).
- A checkpoint has two scopes: its edges, and the stop of every new task in a build until the user's yes (S32, S92).
- The end of a wait does not change the cell. 40 of the 118 edges in the real maps name a row that is `resolved` (S59).
- By instruction the end of a wait is not final. A resolved row is replaced when its evidence changes, and Resume reopens a resolved row whose record does not settle it. No line says what the Result cell of a reopened row holds (S57; RES-098, J02; RES-090, "Not established").
- A shipped rule says a task is done only after a review: "Declare the task done only after the review passes" (S93).

What any design must handle:
- Two end rules exist today, by kind of wait. DEC-051 renames `resolved` to `done` and adds `parked` and `superseded` to every item (S45, S69).
- `superseded by NN` names one row. Four rows of IDEA-016 were each replaced by two or three rows (S39).
- `parked` covers several states in the records, and a parked idea can hold open rows. A rename gives each old word one new word (S38, S105, S110; RES-099, section 8).
- A started item that the user put on hold stores `in-progress`: IDEA-015#08 (S105).
- The stored pair "row `in-progress`, record answered" has two meanings in the real records: it waits on the user's review, or on checks and a repair (S70; RES-096, X8).
- "Finished" in the code is no proof that a spec is built. SPEC-007 has no plan and reads as finished (S12; RES-097, row 08 facts).
- Under the mapping in IDEA-016's notes an idea becomes `done` when its spec exists, before the spec is built (S22, S69).
- The prose waits between efforts name six end points: resolves, ships, settled, built, merges, a release. Some end on a thing that is not an item (RES-098, B15 and F18).
- A blocker can leave the table: IDEA-015 dropped four rows, and IDEA-004 moved 17 rows to other ideas (RES-096, section 6, X3 and X4).
- A blocker's record may store no status: 5 research records and 2 decision records of this repo store none (S37, S42).
- One real blocker is both built and superseded: SPEC-005 (RES-097, F18).

Contrary evidence:
- Practice differs from the written rule. Rows 28 to 31 of IDEA-016 are `in-progress` while their blockers are `in-progress`. The reason is in the idea's notes: each blocker's record was answered, and the rows stay `in-progress` until the user's review (S16, S70).
- The workspace file says a parked idea "waits until the user names it"; the code reads it as finished (S56).
- The prototype on `prototype/views-board` calls a row "waiting" when a blocker is not `resolved`. A superseded blocker gives "waiting" with no error (S50).
- The user's reference board on that branch ends a wait on four words: done, closed, resolved or complete. It is evidence of his picture of a view, not a decision (RES-098, J01; not opened for this record).
- Held drafts outside this worktree hold earlier answers. DEC-023: a task that fails its review "stays unresolved, so the tasks blocked by it do not unblock". DEC-016 left open whether a spec is done at its last row, and DEC-018 closed it there: "a spec is not done at its last task row" (S58, S79).
- In a second repo, 8 ideas went from `parked` back to `define` with no instruction (RES-099, A23; that repo's history was not opened for this record).

Unknown:
- Whether `superseded` keeps its target under DEC-051. DEC-051 lists the bare word (S45).
- Which meaning of `parked` the shared value keeps, and whether the rows of a parked idea take it.
- Whether a spec is "done" at its last row or at a merge and a release. The only answers are in the held drafts (S79).
- Whether a real run ever reopened or replaced a resolved row (RES-098, "What could not be established").

#### Row 02: who writes the field, and when?

Facts:
- Writers of a stored status today: the CLI at creation; a standalone idea-refine run (the first idea file, its `open` rows and their cells); the main session of an interview (idea, map rows); the spec agent and, for a spec from the chat, the planner (`specced` on the idea); the planner (plan rows, the waves copy); the main session of a build (row close); a sub-agent (its own research record); the session that does a do row (its record); the session that records a decision (`accepted`, and `superseded by DEC-NNN` on the old record) (S17, S21, S22, S23, S26, S66, S77, S95; RES-099, B16).
- No code writes a status after creation. `brain check`, `brain status` and `brain plan` only read (S18).
- No instruction names a step that writes `parked` or `proposed`. None writes `in-progress` or `superseded by NN` on a plan row, and none sets a plan row or an `in-progress` row back to `open` (S19, S20; RES-090, finding at line 407; RES-099, C09).
- One instruction sets a resolved map row back: Resume reopens it when its record does not settle it (S57).
- No instruction and no code writes a state of a spec at any moment (S25).
- One shipped instruction writes waits between specs. The spec skill tells the agent to propose a capability map with a "Depends on" column and a build order, to get the user's approval, and to record it in a decision record before the first module spec. No code reads it, and no check tests its no-cycle rule (S72).
- Apart from that, no shipped instruction, template or command names a place for a wait on another idea, another effort or a row of another file (RES-098, J16).
- The user writes no field. An agent applies the user's reply. A spec's approval is a chat reply that no file records (RES-099, section 8).
- The protocol's "Task end" gives every session one rule: update the row's status and result link, and keep user waits "in the active effort's rows and records". Three host copies repeat it. Three other texts name other places for a wait on the user (S44, S94).
- The migration writes frontmatter once and never a status; its stated reason is that a guessed status "would pass the check and hide the gap". One rule writes a status into a migrated record: the supersede rule, which DEC-002 shows (S42, S95).

What any design must handle:
- The single-writer rules: only the main session writes ideas, plan rows and todo ticks; a build sub-agent writes no state file (S23, S26).
- The moments with no writer in the spec folder: approval, the start of the first task, review, verify and ship (RES-099, section 8, the moments table).
- The spec skill's `specced` line has no condition on the idea's current status, and it comes before the user's approval of the spec (S22).
- A spec kept in another spec tool has no file of Brain to hold a field (S53).
- One idea can produce several specs: a fixture idea has two. The idea is `specced` at the first (S65; RES-099, B18).
- No instruction commits the idea file after a status change (RES-099, A20).
- No instruction names the step that gives a row added after Chart its Blocked by cell (RES-090, "Not established").
- In conversation mode no file exists: "the map lives in the conversation". A sub-agent gets no protocol text unless its brief repeats it (RES-091, "How each host gets the text").
- The protocol has 50 characters of room: a test keeps it at 4,000 characters, and it has 3,950 (S86).
- IDEA-016's own fog: whether a spec takes over the waits of the ideas in its `sources:` (docs/ideas/IDEA-016-effort-blocked-by.md:181).

Contrary evidence:
- Real commits write `parked` with no instruction: 3 ideas here were created as `parked`, and RES-099 counts 9 in a second repo (RES-099, A23; S100 confirms one parked idea there today).
- In the one real case of a spec that names an idea, in the second repo, the idea stores `define` after the user rejected the draft. The spec skill's text would give `specced` (S100).
- A reference says the build keeps the plan's rows "current throughout each task", against "A running task keeps its row `open`" (S75).

Unknown:
- What an agent does in a live session with the step order for `specced`. No session was run.
- Who runs the review of a task in a build. IDEA-007#01 is the open row (RES-099, C12).
- Who decides each write of `parked`, and why eight ideas went back to `define` (RES-099, section 11).

#### Row 03: what does `brain status` do with an effort that waits?

Facts:
- The report has five lines. Four of them come from an idea's `status:`, the rows of one map or plan, and research records. They read no wait between efforts, no spec status, no phase and no prose. The Red line is the exception: it carries the check findings, and the check reads the Intent and the fog of a specced or done idea (S27; RES-088, section 6).
- "Waiting on the user" is the decide rows on the frontier. A checkpoint row and a do row for a step of the user are never in it (S28).
- The report shows no row that waits on another row. Such a row is in no line and in no JSON key, and a step carries no blockers (RES-088, section 6).
- Two things that the user must act on are in the report today: the decide rows above, and a research record that is `partial` or `blocked`. A blocked record adds to "Red" (S09).
- A decide row that is `in-progress` leaves the waiting line (IDEA-015#08). A research row whose record came back shows as "in progress" (IDEA-015#29) (S43, S70).
- The report takes its efforts from the `finished` flag and the git branch. A parked idea and a spec with no plan row show only when the branch names them, as `finished`. The JSON key `ideas` lists every idea in any status, with the specs whose `sources:` name it (S11, S12, S76).
- A new spec with an empty plan table gives "Stage: no active work" and "Red: none" (RES-088, section 3, probes R3 and R3b).
- Real case: IDEA-015#32 waits on IDEA-016#08 in prose. The report prints it as the next step and as waiting on the user (S43).
- A key that the schema lacks is a finding, and each finding adds to "Red" (S35).
- On Claude Code a hook prints the five lines at session start. On other hosts the agent runs `brain status` itself (RES-088, section 7; RES-091, "How each host gets the text").
- A handoff outranks the report by instruction, and no code reads a handoff (RES-099, E12).

What any design must handle:
- The places in code that decide what a new field does: `listEfforts`, `activeEffort`, `stateFrom`, `computedNext`, `fiveLines`, `readIdeas`, the JSON keys and the schema (RES-088, row 03 facts).
- Tests and fixtures pin the exact five lines (RES-088, section 10).
- The hook keeps its text under 10,000 bytes. It cuts a long report from the end at a line end, so the waiting line goes first (S64).
- `brain plan` with no spec named exits 2 when several efforts are not finished (S63).
- A second reader of dependencies is named by DEC-020: the session-start prompt of IDEA-013 gets "the dependencies". DEC-020 stores `accepted`; RES-069 calls the held DEC-012 to DEC-023 unapproved, and no record says that DEC-020 was approved again (S78; RES-096, section 8).
- With today's code an idea with `status: in-progress` gives "Stage: no active work" and one finding. A plan row with `done` is left out, and the rows behind it never become the next step (S88).

Contrary evidence:
- A free-text `Waiting on the user:` line existed from 0.10.0 to 0.12.x, written by hand in a status note. Release 0.13.0 removed it. DEC-014 gives the user's reason: "it's not an accurate snapshot of the actual status" (RES-098, H06).
- "Waiting on the user" holds rows that are ready to ask, not rows that wait (S28; RES-088, section 5).
- A held draft outside this worktree, DEC-008, defines available work as "every idea or spec, active or not started, that nothing blocks" (S79).

Unknown:
- How a live session uses the report. RES-069 found that resumes often leave the five lines out of what the user sees (RES-094, row 03 facts).

#### Row 04: do the prose waits move into the field?

Facts:
- No field holds a wait between two efforts or between rows of two files. RES-098 lists 29 such waits (X1 to X29): 26 in real records, 2 in fixtures (X17, X28) and 1 that the migration code works out (X29). RES-096 lists 38 prose waits of all kinds in the ideas and records (W1 to W38) (S40; RES-098, "Every wait that crosses a file").
- The two that row 04 names exist as written: IDEA-008's row 02 on IDEA-007 row 01, and DEC-004's "Depends on" column (S40).
- DEC-004's column holds 10 edges between modules, and its build-order line 5 more orders. Each module ID equals a spec folder slug. All are met (RES-097, row 04 facts).
- The capability map is a current instruction, not only an old record: each repo that follows the spec skill gets a "Depends on" table in a decision record, with module ids and the word `none` (S72).
- Two notes already state the intent to move. IDEA-016 says its wait "is written here in prose until the `blocked-by` field exists", and IDEA-015 says the same of its own wait (S40).
- DEC-029's field names ideas and specs. This record's reading: such a field has no place for a wait on a row of another idea, or for a wait on a pull request, a release or a later ask (S46; RES-098, row 04 facts).
- Inside the layout-1 plans the waits are prose too: 52 `Depends on` cells of components in 8 tables, 7 of phases, and 58 `- Depends:` lines in the SPEC-009 todo (RES-098, F15).
- The migration moves no prose into a field today. One rule moves waits by hand: before the old status note is retired, an agent saves "each live action, condition and wait" in an idea, plan or record (RES-087, row 04 facts).

What any design must handle:
- The prose waits do not agree with each other. One criterion-level wait runs against DEC-004, so a field made from every prose wait holds a loop between SPEC-004 and SPEC-006 (RES-097, row 04 facts).
- Waits that are already met, and one whose note still stands after its blocker was met (RES-098, row 04 facts).
- One wait is written in two to six places. The wait of IDEA-015's spec on IDEA-016 is in six, two of them decision records (RES-096, section 9).
- The two sides of IDEA-016's wait on IDEA-014 do not state the same wait (RES-098, J31).
- A pending question, a wait and a failed prerequisite in Notes have no heading and no line form. Only the partial-answer block can be found by form (RES-090, row 04 facts).
- Values that are not a list of IDs: a range ("5 to 11"), the word "all", and free text (RES-098, J13).
- Targets outside this worktree: older records wait on IDEA-003, which is in another worktree and in no commit (RES-098, H15).
- A current fixture holds a parked idea whose prose reason names another effort, "dark mode first" (RES-098, X17).
- The eval `setup/migrate-08` pins the migrated output with its prose waits unchanged (RES-094, row 04 facts).
- Any new key on a migrated file is a finding today, as on a new file (S35).

Contrary evidence:
- RES-095 calls the capability map "a table form of a wait between specs", which limits DEC-029's sentence that such waits "exist only in prose". No code reads the table (RES-095, row 04 facts).
- A held draft outside this worktree, DEC-019, rejects "edges kept as prose in a capability map record" and says "The `Depends on` columns in the older plan files go" (S58, S79).

Unknown:
- Whether the lists of prose waits are complete. RES-098 states its list as found, not as proven complete.
- The prose waits of the two other repos on this machine. The inventory critic counts 10 lines in 6 files in one of them; no topic record lists them (RES-086, M4).
- Whether a consumer repo holds a wait form that this repo lacks (RES-098, "What could not be established").

#### Row 08: which status does a spec store, and which skills keep it current?

Facts:
- A spec stores no status. Its frontmatter holds `spec:` and `sources:`. A `status` key is a finding (S03, S35).
- The stored status of a spec is decided by DEC-050, not by DEC-029: "a status stored in the frontmatter of ideas and specs". DEC-029 decides the wait field only (S46, S68).
- The code works out one flag: finished when no plan row is still to do. A spec with no plan row is finished (S12).
- Accepted decisions for the views already define worked-out states of a spec: Not planned, Planned, Building, In review and Done (DEC-035), and Migrated (DEC-036). DEC-051 names ready, waiting and in review as worked out; it does not name the others (S45, S71).
- "In review" in DEC-035 is "a checkpoint row is in progress or next". No instruction writes `in-progress` on a checkpoint row, so today only "next" gives that state. "Not planned" is a spec with no row, which the code reads as finished (S12, S71; RES-100, section 8).
- No shipped code works out "waiting" or "in review". The prototype is the only code that names them (S50; RES-086, M1).
- No skill writes a spec status. An agent already edits a file of the spec folder at these moments: creation, spec writing, planning, the plan commit of `/build auto`, each row close, a replan, and the migration (RES-099, section 8).
- Approval, the review as a whole, verify and ship have no writer and no file (RES-099, section 8).
- The idea's `specced` is the only stored mark that a spec exists. The link runs one way: the spec lists the idea in `sources:`. No check ties `specced` to a spec, and the JSON of `brain status` works the reverse link out (S21, S56, S76; RES-098, J04).
- `result:` on an idea takes a decision record or a commit SHA. `result: SPEC-001` is a finding (S01, S35).
- Each of the nine real specs holds a prose `Status:` line: four say "draft for review", four "approved", one "superseded". No code reads it. None of the nine holds `sources:`, so no idea here reaches a spec (S34, S106).
- By their files, 7 of the 9 real specs give `done` by ticks, 2 of those with one success criterion that has no recorded run. SPEC-007 gives `open`: approved and not built. SPEC-005 is not settled: done or superseded. A done spec's text still changes: SPEC-006 has 12 amendments (RES-097, short answer and row 08 facts).
- A new required field is not required on a file with the `migrated` key, and all nine specs here carry it (S34, S42).
- The views decisions rest on "A spec stores no status" (DEC-035). IDEA-015#32 asks for their columns again and waits on this row (S43, S71).

What any design must handle:
- By design the plan is "the only status" of a task, with the reason that status never disagrees with itself (S55; RES-095, row 08 facts).
- Two earlier stored spec states drifted: the prose `Status:` line and a hand-kept spec index disagreed with each other (RES-099, section 7).
- One existing case of a stored, worked-out state is kept in step by a check: the "Parallel waves" section of a layout-2 plan with rows (S31).
- None of DEC-051's five values is "approved", and instructions rely on approval as a state (RES-099, E10).
- Two open rows of another idea ask an overlapping question. IDEA-008#01: "How does a spec awaiting approval or planning remain visible and resumable?" IDEA-008#02 asks for the handoff of each planning, review and shipping stage. The audit RES-069 named the gap as K3 and adopted no new status (S73).
- For a migrated spec no field holds a first value. The hand-made marks can each be stale (RES-099, section 8).
- A spec in another spec tool has no file for a status (S53).
- Under the mapping, one idea with several specs is `done` at the first spec. Resume treats `done` and `specced` in two ways today, and both become `done` (S21, S65; RES-099, B18).
- A `result:` that names a spec is a second link, in the direction that the design avoided with the reason "Prevents drift" (RES-095, contrary evidence).
- A replan with new rows is the one instructed way from a finished spec back to build (RES-099, C10).
- Three eval graders need the literal `resolved` in a plan row (S47).

Contrary evidence:
- A held draft outside this worktree, DEC-018, stored a spec's status in frontmatter and moved it at each stage end to "ready for the next stage". DEC-051 keeps "in review" worked out (S58, S45).
- The same draft says "a spec is not done at its last task row"; the code's `finished` is true at the last row (S12, S79).
- The drafts are a real case of a stored status that differs from the real state: each file stores `accepted`, and RES-069 calls them unapproved (S78).
- The spec index was removed for the move to spec folders, not for drift. At its end it was the more current of the two stored copies (RES-099, section 11).
- RES-037 says the "Parallel waves" section "goes stale at every close", and lists "Does the Parallel waves section stay?" as an open decision for Peter (S103).
- RES-069, finding K3: "No new stage/status/schema from held DEC-018 is adopted" (S73).

Unknown:
- Whether `specced` and `done` work in a real session. No idea in the repos that the topic records read holds either value, and no eval covers `specced` (S37; RES-099, section 11).
- Whether the user holds SPEC-007 as parked, and which value SPEC-005 takes. DEC-051 does not say when a spec is `open` and when `in-progress` (RES-097, short answer).
- Whether IDEA-016's stored spec status answers IDEA-008#01 and #02, or they stay work of IDEA-008 (RES-099, follow-ups).

#### Row 09: does a phase become a record?

Facts:
- A phase is the task rows that one checkpoint row names directly. It has no ID, no name, no status and no wait of its own. The output names it by the number of its checkpoint row (S29).
- Phases are in the decided scope. DEC-050 widens IDEA-016 to "ideas, specs, phases, an idea's rows and a spec's rows": their status values, and "one way for 'blocked by' to work for all of them". The question that DEC-051 resolved named phases; the text of DEC-051 names no phase (S45, S68).
- The user's words behind DEC-029: "phases also have the deps on each other defined", and phases "use these deps graphs to define parallel working waves" (docs/ideas/IDEA-015-views-mod.md:289).
- DEC-042 holds a worked-out rule for a wait between phases, as an agent's choice: "phase B waits on phase A when a task of B waits on A's checkpoint" (S71).
- Membership is not exclusive and not complete: a task can be in two phases or in none, and a plan can have no checkpoint (RES-100, section 8).
- The checkpoint row is the stored thing: Status, Blocked by, Result and a block of boxes. Its `resolved` is the only stored mark that a phase was reviewed (S06, S32).
- No shipped code works out a phase's status, a wait between two phases or a fixed wave. Waves come from rows, so two phases can share a wave (S30; RES-100, short answer).
- `brain check` reports a task that names a checkpoint and depends on no task of its phase. So a task cannot wait on a phase that it does not depend on. A checkpoint can name another checkpoint with no finding; that orders the two reviews, not the tasks of the phases (S62; RES-100, section 3).
- No real plan in this repo has a checkpoint row. In the layout-1 plans a phase is a heading or a plain line. The SPEC-009 plan stores a phase's members, its "Depends on" and a wave status by hand, and each hand-kept copy differs from another source (S33; RES-100, section 7).
- In SPEC-009 the phase table says only that phase 6 depends on phase 5, while at task level each of the two waits on the other (RES-100, C18).
- No grader and no test names a phase (RES-094, row 09 facts).

What any design must handle:
- The checkpoint's Blocked by cell has two jobs: it lists the phase's members, and it makes the checkpoint wait (RES-100, row 10 facts).
- The stop of a build at a checkpoint has no stored form. The two readings do not have the same support: the reading by edges has two dated decisions by Peter, and the stop has no row in the Decisions table. The stop is in three texts (S32, S92; RES-100, C13).
- The lifecycle check requires the glossary entry Phase, and a test pins that. A label `Phase:` on a scanned line fails that check unless the line also holds `Stage:` (S61; RES-100, F142).
- The stored "Parallel waves" text holds the words "Phases" and `(checkpoint)`. A change of either word makes each stored section stale until it is written again (S31, S55).
- The critic's reading: a new item kind with its own ID needs a claim type in the ID claim store (RES-086, M3; the main session did not check it).
- The accepted views decisions build on phases: DEC-030 gives a phase several waves, DEC-042 gives it one wave from a phase graph, and DEC-048 gives phases the argument `phases SPEC-NNN`. The prototype gives a phase the ID `<spec ID>/P<n>` (S71, S80, S102; RES-100, C7).
- In the real SPEC-009 build, four of seven approvals at a checkpoint carried open items. No row status has a form for a yes with conditions (S98).

Contrary evidence:
- Three held drafts outside this worktree answered this question before. DEC-021 made a phase "a real group that holds tasks" with "its own `Blocked by`". DEC-022 replaced it with task and subtask and removed the words phase and checkpoint. DEC-023 gave every task a review, in place of the checkpoint rows. Each file stores `accepted` (DEC-021: `superseded by DEC-022`), and RES-069 calls them unapproved (S58, S78).
- The prototype works out a phase's status and a wait between phases with no stored field. Its sample plan gets six checkpoint findings from the shipped `brain check` (RES-100, C22).
- Peter's words in IDEA-015 treat checkpoint and phase as one thing: "checkpoints (phases)" (docs/ideas/IDEA-015-views-mod.md:289).

Unknown:
- Whether a checkpoint on the frontier holds every new task or only the tasks that it blocks. No test tells the two readings apart (S32, S92).
- What a session does at a checkpoint when the reply is not a yes. No instruction covers it (RES-100, section 4).
- Whether the held drafts still reflect Peter's view.

#### Row 10: does "blocked by" take one form everywhere?

Facts:
- A Blocked by cell takes two-digit row numbers of the same table. An entry such as `SPEC-002#03` is a format finding, and the reader then leaves the whole row out (S05, S36).
- The two-digit rule is fixed in several patterns: the row number and each blocker, the `superseded by` number, the todo block heading and `from:`. So one table holds 100 rows at most (S04, S05, S41, S101; scripts/workspace/plan.ts:47).
- A cycle, a wave and the frontier are worked out per table. The graph code keys each row by its local number (S10, S30).
- The form `IDEA-004#03` already exists. `from:` takes a row, an idea, a spec or `user`, and no check tests that its target exists. `brain status` prints each row in that form (S41, S43; RES-089, G07).
- No reference field but `from:` and `spec:` can name a spec. `sources:` and `result:` refuse a spec ID (S01, S03).
- The stored fields use five shapes for a reference: a comma list in a cell, a YAML list, one ID, an ID inside a status text, and an ID in free text (RES-098, row 10 facts).
- DEC-029 chose a frontmatter property on ideas and specs and rejected a cell that names another effort's row. IDEA-016 reopened that part. DEC-029 names two readers, the roadmap and the top-level board; DEC-041 then removed the roadmap view (S46, S102, S109).
- IDEA-016 records the agent's choices for the field: the key `blocked-by`, a list of IDs, and three checks, "as it does for map and plan rows". Rows have no separate self-link rule: a self-link is a cycle of one row (S109; RES-098, contrary evidence).
- Row-to-row waits across two files exist twice in the records, and both notes say that a cell cannot hold them (S40).

What any design must handle:
- YAML reads `[01, 08, 10]` as the numbers 1, 8 and 10, and a space before `#` starts a comment, so `IDEA-003 #02` parses as `IDEA-003` (S60).
- A reference such as `IDEA-007#01` is stable only while row numbers are never reused. No code checks that (RES-098, J18).
- The views need both directions of a wait. The reverse direction is in no file and no code (RES-098, G13).
- A phase has no ID, so a wait on a phase can name only its checkpoint row today (S29).
- Every Blocked by cell in a fixture, an eval scaffold or a skill example is `—` or a list of two-digit numbers. Two eval tests parse the cell with their own code (RES-094, row 10 facts).
- The empty value differs by carrier: `—`, `[]`, `none` (RES-098, H02).
- "Blocked" has six meanings in the texts, and one is a stored value, `outcome: blocked` (RES-098, "Where the topic records differ"; not opened at each site for this record).

Contrary evidence:
- A held draft outside this worktree, DEC-019, sets one term, `blocked-by`, and rejects "row edges that cross files". It also says an idea "names other ideas", a spec "names other specs", and "An edge from an idea to a spec is not part of this standard". DEC-029 lets an idea or a spec name both (S46, S58, S79).
- The prototype shows each row under the key `<effort ID>#<row number>`, made in memory from the local cell. Its waits between efforts come from a sample file, part of which is made up. It reads no stored cross-file form (S80).
- The user's reference board lets a row wait on a row of another card through one list. He called it a concept to refine (RES-098, J01; not opened for this record).

Unknown:
- Whether Peter now wants a cell that names another effort's row. His answer behind DEC-029 did not speak about the cell form (RES-098, "What DEC-029 decided and rejected").

### 5. What DEC-051's values and DEC-029's field break or change today

DEC-051's text states the reasons and says the migration "renames the old values". The mapping itself (define to in-progress, specced to done with `result: SPEC-NNN`, row resolved to done) is in IDEA-016's notes. The stored spec status comes from DEC-050 (S45, S68, S69).

Schema rules that reject the new keys or values, each shown by a probe (S35, S36, S88):

| New key or value | Today's finding | Rule |
|---|---|---|
| `status: open`, `in-progress` or `superseded` on an idea | "is not define, specced, done or parked" | `schema.ts:136` |
| `result: SPEC-001` on an idea | "is not DEC-NNN or a commit SHA" | `schema.ts:117` |
| `status:` on a spec | "not a field of a spec file" | `schema.ts:235-236` |
| `blocked-by:` on an idea or a spec | "not a field of a IDEA file", "of a spec file" | `schema.ts:235-236` |
| `done` on a row; also `parked` and a bare `superseded` | "is not open, in-progress, resolved or superseded by NN" | `schema.ts:210`, `map.ts:88` |
| A Blocked by entry such as `SPEC-002#03` | "is not a two-digit row number" | `map.ts:38`, `map.ts:93` |

Values that pass today: `done` and `parked` on an idea, and `open` and `in-progress` on a row.

Counts by place, run on 2026-11-21 (S48, S83). "Literal" is the word in quotes, in backticks, in a table cell or after `status:`. "Word" is any line with the word; it also holds other senses, such as "the resolved `brain` path". Both are upper bounds.

| Place | `resolved` literal | `resolved` word | `define` literal | `specced` literal | `done` literal | `parked` literal |
|---|---|---|---|---|---|---|
| Code, non-test | 14 lines in 6 files | 29 in 9 | 7 in 5 | 2 in 2 | 3 in 2 | 1 in 1 |
| Tests | 33 in 7 | 64 in 11 | 10 in 5 | 6 in 2 | 20 in 5 | 5 in 1 |
| Fixtures | 35 in 18 | 69 in 24 | 6 in 6 | 8 in 8 | 0 | 2 in 2 |
| Templates | 0 | 3 in 2 | 1 in 1 | 0 | 2 in 1 | 0 |
| Instructions | 16 in 9 | 60 in 26 | 5 in 4 | 6 in 3 | 8 in 4 | 2 in 2 |
| Evals | 13 in 5 | 20 in 8 | 2 in 2 | 0 | 0 | 0 |
| Docs | 1 in 1 | 8 in 3 | 1 in 1 | 2 in 1 | 2 in 1 | 1 in 1 |

Code that tests a literal value:
- The 14 `resolved` lines are three things: a row's status, tested or typed (6: `status.ts:114`, `graph.ts:89`, `map.ts:20`, `map.ts:167`, `check.ts:297`, `check.ts:303`); a research record's status, which DEC-051 does not name (4: `schema.ts:102`, `schema.ts:103`, `schema.ts:175`, `check.ts:268`); and fixture text inside eval code (4) (S82).
- The 7 `define` lines are: the idea status (`schema.ts:136`, `effort.ts:49`, and a comment at `effort.ts:3`); the stage word (`status.ts:47`, `status.ts:117`); and fixture text inside eval code (2) (S82).
- The count pattern misses the two places that define the row value: `schema.ts:210` (a pattern) and `map.ts:88` (the message) (S04, S82).
- Tests of `superseded`: `map.ts:98-104` (needs `superseded by NN`), `graph.ts:110`, `check.ts:225`, `plan.ts:101`. Tests of `in-progress`: `graph.ts:19`, `status.ts:129`, `status.ts:202`. Others: `check.ts:341` (`done`, `specced`), `schema.ts:138` (`done` needs `result`), `check.ts:307` (`proposed`), `map.ts:169` (`open`) (S82).
- Side effects, by probe. An idea with `status: in-progress` reads as finished. A row with `done` is left out of the reader's result, and a row that it blocks never reaches the frontier. One such row also stops the checkpoint rule and the waves rule for the whole plan (S88, S89).
- One rendered text holds the old words: "No open rows: every row is resolved or superseded." (S55).

The stage word:
- `define` is both the idea status that DEC-051 renames and a stage word that stays. `brain status` prints `Stage: define` for an idea; the text is on 13 lines of 4 files under `scripts`. The glossary lists define as a stage. RES-094 counts 10 eval places where the word names the stage, such as "The idea stays in define" (S83; RES-094, summary; RES-099, D13).
- Two words get a new use. `in-progress` is today a row status and a research record status; it becomes an idea status too. `done` is today an idea status; it becomes a row status (RES-090, section 8).

Templates:
- `templates/IDEA.md:3-4` (the value list and the `result:` comment) and `templates/plan.md:13` ("A resolved row's result") (S17, S55).

Instructions that name old values:
- RES-090 counts for the interview skills: `define` in 4 lines, `specced` in 4 lines, `resolved` as a row status in 14 lines, and 14 lines with a verb form.
- The protocol's source and its three host copies name the row's "status and result link" (S44).
- The workspace template names seven stored values. A consumer's installed copy changes only on a new setup run, and nothing at session start finds an older copy. The Codex block changes only on a run with `--codex-scope` (S56; RES-087, F11, F61 and F85).
- `GLOSSARY.md:19-21` holds the four idea values. The lifecycle check does not catch a stale value there (S38; RES-091, "Files to edit").
- The spec skill's capability map is an instruction site that a wait field between specs meets (S72).
- No vendored file names an old status value. 6 vendored files hold the word `resolved` in another sense, on 9 lines; these are part of the 60 word lines. The 14 vendored files with 37 inventory sites hold other status or wait conventions, and a vendored file keeps byte identity by AGENTS.md. One of them is the ADR skill with its own decision status (S74, S81; RES-086, M8).
- One shipped reference still names the layout-1 label `ready-for-agent`, a stored "ready" (S97).

Tests, fixtures, evals and CI:
- Three graders need the literal `resolved` in a plan row, and a fourth accepts `in-progress` or `resolved` in a map row (S47).
- Each stored "Parallel waves" section in a fixture or scaffold is text that `brain check` compares with what the code renders (S31).
- Nine dry checks run the workspace check on fixed scaffold text in `bun test`. So a stricter check fails the pull request that ships it, unless the scaffolds change with it (RES-094, summary).
- The pull-request workflow does not run `brain check` on this repo's own records; only the release job does, through `bun run check` (S87).
- One grader needs the line `layout: 2`, and keystone case 3 uses `layout: 3` as "newer than this plugin supports" (RES-094, summary).
- A `superseded by NN` cell is on 8 lines of 3 test files, 4 lines of 4 fixture files and 2 lines of eval files (S83).

Real records in this repo (S37, S84, S104, S106):
- 10 ideas store `define`; 4 store `parked`; none stores `specced` or `done`.
- 13 of the 14 idea files hold the old value list as a comment on the status line, and 13 hold the `result:` comment "the DEC-NNN or the commit SHA".
- 113 map rows: 60 `open`, 17 `in-progress`, 31 `resolved`, 5 `superseded by NN`. 66 rows hold 118 edges. The count script prints 130 lines; 17 of them are the moved-row table of IDEA-004, which is not a map.
- 0 of 9 spec files store a frontmatter status, and 0 hold `sources:`. 0 of the 8 spec plans and 0 of the 1 old plan under `tasks/done` hold the layout-2 row table. SPEC-007 has no plan. 33 files carry the `migrated` key.
- 0 files hold a `blocked-by` key.
- Outside DEC-051's stated scope: 28 research records store `resolved` (22 with `answered`, 6 with no outcome), 1 stores `in-progress` at the time of the count (this record), and 5 store no status. 31 decision records store `accepted`, 6 store `superseded by DEC-NNN`, and 2 store no status. No record stores `proposed` or `outcome: blocked`.

Real records outside this repo:
- The second repo holds 12 ideas with `define`, 1 with `parked`, and 106 decision records. The critic counts 154 rows `resolved` and 14 `superseded by NN` there (S100; RES-086, M4).
- Another worktree of this repo holds 4 ideas with `define` and 109 rows, 53 of them `resolved` and 17 `superseded by NN`, in no commit (RES-096, section 7; not opened for this record).

Today's migration, which DEC-051 rests on (IDEA-014):
- One migrate mode exists, from layout 1 to layout 2. A repo on layout 2 gets "nothing moves". No step is keyed to a version (RES-087, F42 and F44).
- Five changes reached layout-2 repos so far, none with a migration step (RES-087, F82).
- The marker accepts only the value `0.8` (S107).
- The design rule of the layout-1 migration is "moves with `git mv` only, never deletes, never rewrites a body", with two exceptions so far. DEC-051's renames sit in table cells of a body: 31 rows here (RES-095, row 04 facts).
- A stored status and stored waits were left behind once by decision: "Maps on an issue tracker are not migrated" (RES-087, F63).
- No eval covers a migration between two layout-2 formats (RES-094, summary).
- A migration that removes `migrated` from a plan or todo and keeps its body makes `bun run check` fail on 21 lines (RES-097, "Effects in this repo").

Decisions and words that rest on the old model:
- DEC-035 says "A spec stores no status" and names define, specced, done and parked. RES-096 counts three accepted decisions that rest on these, and IDEA-015#32 is the open row for them (S71; RES-096, row 08 facts).
- The glossary marks "item" as a word to avoid for Row, "ready list" for Frontier and "board" for Map. DEC-051 uses "item" (S96).

### 6. Where two topic records disagree

| Point | Records | Which one the source supports |
|---|---|---|
| Wave 1 and the frontier | RES-092 says "wave 1 is the frontier". RES-093 and RES-095 say they differ for an `in-progress` row | RES-093 and RES-095: `frontier` takes `open` rows; `layWaves` takes rows still to do (S10, S30) |
| A checkpoint as "Next step" | RES-092 says a checkpoint on the frontier shows as "Next step". RES-088 says the line takes the first frontier row only | RES-088 (RES-100, section 11, probe B; not run again for this record) |
| "The frontier is the only reader of the cell" | RES-090 against RES-093 | RES-093: the waves, the cycle search and the checkpoint rule also read it (S13, S29, S30) |
| "No instruction reopens a resolved row" | RES-092 says it for the plan, build, review and spec texts. RES-090, RES-098 and RES-099 name the reopen in Resume | Both hold in their scope: no instruction for a plan row; one for a map row (S57) |
| The two setters of `specced` | RES-090 says "with different conditions". RES-099 says the same condition, with a different precondition and scope | RES-099: both lines have the trigger that a spec's `sources:` names the idea (S21, S22) |
| "Neither file exists" (IDEA-003, RES-068) | RES-091 against RES-096 | RES-096: the files are in another worktree, in no commit. The sentence holds for this worktree only (RES-098, "Where the topic records differ") |
| "No code reads a plan row's Result" | RES-073 against RES-089 and RES-100 | RES-089 and RES-100: `brain status` prints it as "Last step" (S43 shows the line for a map row; S88 shows it for a plan row) |
| A layout-2 phase is "the rows in the checkpoint's Blocked by" | RES-076 against RES-093 | RES-093: only rows of the type `task` count (S29) |
| SPEC-008's phases | RES-076 says "None named". RES-097 and RES-100 find three lines `Phase N: <name>` | RES-097 and RES-100 (RES-100, section 11; not opened for this record) |
| How many stored forms hold a wait | RES-089, RES-090, RES-093 and RES-096 each count in their own scope | No contradiction. The union is the Blocked by cell, `parked`, `proposed`, `outcome: blocked`, the confirmation line and the row type (RES-098, "Where the topic records differ") |
| How many older wait forms | RES-087 lists 12, with the tracker forms from git history. RES-097 lists ten, in the spec files | Both hold in their scope (RES-098, "Where the topic records differ") |
| Stale prose `Status:` lines: four or five | RES-095 says four. RES-097 says five of nine | Both hold. RES-097 adds SPEC-005, whose line says "superseded" while its plan is ticked |
| SPEC-009 checkpoints with open items | RES-097 says three of seven. RES-100 says four of seven | RES-100: four (S98) |
| DEC-002's status | RES-087: "through a written rule". RES-095 and RES-099: "by hand" | Both: a hand edit that follows the supersede rule (S95) |
| Commits on the spec index | RES-099: 12. RES-095: 10. RES-097: 9 | They agree once the scope is stated: 10 on this branch, 2 more on another ref (RES-099, section 10; not opened for this record) |
| Counts of map rows and edges | RES-073: 68 rows and 43 edges. RES-096: 113 and 118 | Both were true at their time. Today's count is 113 and 118 (S37) |
| "Waits between efforts exist only in two places" | IDEA-016's Evidence and RES-073 against RES-096, RES-097 and RES-098 | The later records: more prose waits exist (S40) |
| Capability map: "prose" or a table | RES-095 against RES-096, RES-097 and RES-098 | The same fact in two words: a table in a record's body that a current skill writes and no code reads (S40, S72) |
| `parked` in instruction lines: four or five | This record's search gives four. RES-099 gives five | A difference of scope: RES-099 also searches `docs/agents/workspace.md` (S19) |

RES-073 and RES-076 are not topic records. RES-073 is in the `evidence:` line of 13 decision records, DEC-029 and DEC-051 among them (RES-100, section 11).

### 7. What lies outside this worktree

The inventory critic's list is in RES-086. The main session did not check each line. For this record the places marked "seen" were opened or listed (S49 to S54, S80, S99, S100).

The column "Bears on" is this record's reading; RES-086 names no row for any item. IDEA-016's own note gives one mapping: M2, M4, M5, M6 and M7 are evidence for IDEA-014 rows 07 and 08 and for IDEA-016 row 11, and M9 bears on row 08 (S108).

| ID | What | Bears on |
|---|---|---|
| M1 | Branch `prototype/views-board`: a second implementation that works out ready, waiting, "In review", a phase's status, a wait between phases and fixed waves. It gives a record with `migrated:` and no status the status `migrated`, and reads an idea with no status as `define`, where `effort.ts` reads it as finished (seen) | Rows 01, 08, 09 and 10; IDEA-014; IDEA-015 |
| M2 | Branch `skill-creation`: 24 ticket files in the layout-1 tracker form under `docs/tracker/`, a path that no migration step names. All hold `Status: resolved`; 6 hold a plain `Blocked by:` line. One ID names two records across branches (seen) | IDEA-014 rows 05 to 08; IDEA-016 rows 04, 10 and 11 |
| M3 | The ID claim store in the git folder, shared by all worktrees; a claim is never removed (folders seen) | Row 09 (the critic's reading: a new item kind with its own ID); IDEA-014 row 07 |
| M4 | Two other repos on layout 2. One holds 106 decision records, prose waits in its idea notes, 14 rows `superseded by NN`, and the one real spec that names an idea. 6 of the 10 repos with Brain 0.13.0 are on layout 1 (status values and one spec seen; the rest not opened) | IDEA-014 rows 07 and 08; IDEA-016 rows 01, 02, 04, 08 and 11 |
| M5 | Brain 0.5.0 copies in Gemini CLI and Antigravity; no migration reaches a host's copy (version seen) | IDEA-014 rows 05, 07 and 08; rows 02 and 11 |
| M6 | Stale command copies that Codex wrote, hidden by `.gitignore` (8 folders seen) | IDEA-014 rows 05, 07 and 08; rows 02 and 11 |
| M7 | A Codex memory skill that still tells the agent to keep `docs/STATUS.md` (lines seen) | IDEA-014 rows 05, 07 and 08; rows 03 and 11 |
| M8 | No site of the inventory says who may change its file: vendored, seeded or generated | IDEA-016 rows 05 and 11 |
| M9 | The line that lets an external spec tool own a spec's storage (seen) | Rows 02 and 08 |
| M10 | Two graders bound to the shape of a decision record's frontmatter | IDEA-016 row 05, only if a decision record's format changes |
| M11 | The inventory's file list is behind the records written after its cut | No decide row; a limit of RES-086 |
| M12 | The history sweep read 312 of 1,087 commits; branch `v2` holds older status forms | No decide row; IDEA-014 row 01 if older repos count |

Not in the critic's list: the held drafts.
- Four other worktrees of this repo, and one folder beside them, hold the draft decisions DEC-008, DEC-016, DEC-018, DEC-019 and DEC-021 to DEC-023. The topic records say they are in no commit; this record ran no git command there (S58, S78, S79).
- Each file stores `accepted` and `decided: 2026-11-05 by Peter` (DEC-021: `superseded by DEC-022`). RES-069 says they "remain unapproved, despite accepted frontmatter", and the idea beside them says they "stand as drafts". No record says which statement holds today (S78).
- By row: DEC-023 and DEC-016 with DEC-018 bear on row 01; DEC-016 on rows 02 and 03; DEC-008 on row 03; DEC-019 on rows 04 and 10; DEC-018 on row 08; DEC-021 to DEC-023 on row 09 (S79; RES-096, section 7).
- The same worktrees hold IDEA-002, IDEA-003, DEC-007 to DEC-024 and 54 research records (RES-096, section 7; not opened for this record).

### 8. What no record establishes

- **Live behavior.** No topic record ran a session, a build or a model-calling eval. Each claim about an instruction is a reading of its text.
- **Whether `specced` or `done` was ever written by an agent.** No idea in the repos that the topic records read holds either value.
- **Whether an agent ever writes `in-progress` or `superseded by NN` on a plan row, or `proposed` on a decision.** No record of a real run shows one (RES-092, section 17; RES-098).
- **Whether a real run ever reopened or replaced a resolved row** (RES-098).
- **Who decides each write of `parked`,** and why eight ideas of the second repo went back to `define` (RES-099, section 11).
- **Which status a parked idea takes when the user resumes it,** and what Resume does with an idea that has no status (RES-090, "Not established").
- **The scope of the stop at a checkpoint.** No test or eval settles it; the two readings have unequal support (RES-100, C13).
- **Completeness of the prose waits.** The lists are what the readers found.
- **Consumer repos.** Whether one holds a wait form that this repo lacks, and whether its installed copies are current (RES-098; RES-091, "What I could not establish").
- **The two other repos (M4).** RES-099 and RES-100 read some of their files, and this record opened the status lines and one spec of one of them. No record holds their full list of statuses and waits.
- **The held drafts.** Whether DEC-008 to DEC-023 still reflect Peter's view, and whether DEC-020 is approved today.
- **Decision and research records.** DEC-051 does not name them. No record says whether their values change.
- **Old values beside new ones.** Whether `brain check` will accept both during the change. RES-094 marks it as a design choice for rows 05 and 11.
- **The score rule of `claude plugin eval`.** RES-094 marks its reading as UNVERIFIED, so the effect of one stale grader on the weekly check is not established.
- **Limits of this record.** It read each topic record at its short answer, its facts for the decide rows, its contrary evidence, its limits and, for RES-087 to RES-100 as far as this repair reached, its "Checks" section; it did not read every finding line. RES-089, RES-092, RES-093 and RES-096 were read least: by their cited findings and by search. A claim marked "not opened for this record" rests on the topic record alone. The lines of IDEA-015 and IDEA-016 move while the main session works; this record cites them as read on 2026-11-21.

### Checks

Three independent agents checked the first version of this record. All three result files exist, so each check finished. For each issue this repair opened the source; a check result is evidence, not an instruction.

- Sources check: 28 issues reported (3 blocking). 28 confirmed and fixed. Rejected: one detail of issue 8, which cites RES-099:440 for the two readings of `parked`; the sentence is at docs/research/RES-099-status-waits-status-lifecycle.md:445.
- Coverage check: 27 issues reported (4 blocking). 26 confirmed and fixed in full, and issue 10 in part. Rejected: one part of issue 10, which says the vendored context-engineering skill names "the spec or plan" as the place for a wait on the user; that place is for "the accepted scope and decisions", and the line for "required approvals" names no place (skills/context-engineering/SKILL.md:126-131). Also, the approximate `define` counts of issue 4 are replaced by the count script's numbers (S83).
- Contrary check: 23 issues reported (4 blocking). 22 confirmed and fixed in full, and issue 22 in part. Rejected from issue 22: that four instruction sites, not five, call wave 1 the frontier; its search for "wave 1" and "first wave" misses skills/planning-and-task-breakdown/SKILL.md:237, "each wave is the frontier once the waves above it are done" (S91). Its second part holds as a difference of scope and is now in section 6.

The blocking issues were: the reopen of a resolved map row (all three checks); DEC-050 and the decided scope for phases; the worked-out spec states of DEC-035; the counts for `define` and the stage word; the vendored-files count; DEC-018, which closes DEC-016's doubt; the 15 rows that stay `in-progress` after an answered record; the spec skill's capability map as a writer of waits; and the open rows of IDEA-008. Each is fixed above.

## Findings

Each finding was opened at its source for this record on 2026-11-21. The count scripts (`counts.sh`, `counts2.sh`, `counts3.sh`, `lits.sh`, `vendored.sh`, `rows.ts`, `verify.sh`) and the probe folders are in the session scratchpad, `<scratchpad of session 8f41990c>/res101/`; a reboot can clear it. The numbers run from S01 to S110.

### Stored fields and values
- S01: An idea's `status` is one of define, specced, done and parked; `result` is needed when the status is `done`, and it takes a decision record ID or a commit SHA. Source: scripts/workspace/schema.ts:117-138, checked 2026-11-21.
- S02: The schema lists no key for a wait on any file type, and a key that it does not list is a finding. Source: scripts/workspace/schema.ts:235-236, checked 2026-11-21.
- S03: The schema of `spec.md` holds the fields `spec` and `sources` only; `sources` takes IDEA, DEC and RES IDs. Source: scripts/workspace/schema.ts:185-195, checked 2026-11-21.
- S04: One pattern holds the status of a map row and of a plan row: open, in-progress, resolved or superseded by NN. Source: scripts/workspace/schema.ts:210, checked 2026-11-21.
- S05: A Blocked by cell is empty or a comma list, and each entry must be a two-digit row number. Source: scripts/workspace/map.ts:38 and scripts/workspace/map.ts:91-94, checked 2026-11-21.
- S06: A plan row has the type `task` or `checkpoint`, and a map row one of five types. Source: scripts/workspace/schema.ts:212-225, checked 2026-11-21.
- S07: A decision record's `status` is proposed, accepted or superseded by DEC-NNN; `decided` may stay out only while the status is proposed; the format guide says `proposed` is used "while the decision waits on the user". Source: scripts/workspace/schema.ts:146-165 and skills/domain-modeling/DEC-FORMAT.md:40, checked 2026-11-21.
- S08: A research record's `status` is in-progress or resolved, its `outcome` is answered, partial or blocked, and `resolved` cannot go with partial or blocked. Source: scripts/workspace/schema.ts:100-105 and scripts/workspace/schema.ts:175-176, checked 2026-11-21.
- S09: `brain status` marks a row whose research record is in-progress with the outcome partial or blocked, and adds a blocked one to its red items; interview-me keeps such a row in-progress. Source: scripts/workspace/status.ts:196-210 and skills/interview-me/SKILL.md:155, checked 2026-11-21.
- S85: A research record's `outcome` is optional, the row check counts a record that is `resolved` with no outcome as answered, and 6 research records of this repo are `resolved` with no outcome. Source: scripts/workspace/schema.ts:176, scripts/workspace/check.ts:266-269 and the script rows.ts, line "research records by status / outcome", checked 2026-11-21.
- S74: The vendored skill documentation-and-adrs teaches a `## Status` section with "Accepted | Superseded by ADR-XXX | Deprecated" and the order "PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)"; the format guide sends a record of the architecture kind to that skill for its body. Source: skills/documentation-and-adrs/SKILL.md:53-54 and :96, upstream.lock.json:139 and skills/domain-modeling/DEC-FORMAT.md:56, checked 2026-11-21.
- S101: A row number must match two digits, so one table holds at most the numbers 00 to 99. Source: scripts/workspace/map.ts:38 and scripts/workspace/map.ts:76-78, checked 2026-11-21.
- S107: A `migrated` value other than 0.8 is a finding. Source: scripts/workspace/schema.ts:237-238, checked 2026-11-21.

### Rules in code
- S10: The frontier is every `open` row whose blockers are all `resolved`. Source: scripts/workspace/map.ts:165-171, checked 2026-11-21.
- S11: An idea is finished unless its `status` is exactly `define`. Source: scripts/workspace/effort.ts:48-56, checked 2026-11-21.
- S12: A spec is finished when no row of its plan is `open` or `in-progress`, and a spec with no plan file has no rows. Source: scripts/workspace/effort.ts:65-73 and scripts/workspace/graph.ts:18-19, checked 2026-11-21.
- S13: For a map row, `resolved` needs a DEC or RES in the Result that exists, a research record that is `resolved` with the outcome `answered` or none, and a decision that is not proposed; a later supersession keeps the resolution; for a plan row the check returns only format problems or checkpoint problems. Source: scripts/workspace/check.ts:256-311, checked 2026-11-21.
- S14: An idea with the status `done` or `specced` gets a finding for each row still to do, for fog and for an Intent with no confirmation line; the rule returns nothing for any other status. Source: scripts/workspace/check.ts:339-358, checked 2026-11-21.
- S15: A row still to do that a superseded row blocks is a finding, a cycle is searched in the rows of one table, and for a decision record the check tests only that the replacing record exists. Source: scripts/workspace/check.ts:176-184 and scripts/workspace/check.ts:312-324, checked 2026-11-21.
- S16: Rows 28, 29, 30 and 31 of IDEA-016 are `in-progress`, each blocker of each of them is `in-progress`, and `brain check` reports no finding in 112 workspace files. Source: docs/ideas/IDEA-016-effort-blocked-by.md:164-178, the script rows.ts, line "in-progress behind unresolved blocker", and the command `bun scripts/brain.ts check`, checked 2026-11-21.
- S29: A phase is worked out in two functions as the rows of the type `task` that a checkpoint row names; the checkpoint rule drops every superseded row first, `brain plan` drops only a superseded checkpoint, and `brain plan` prints "Phases that share a wave". Source: scripts/workspace/plan.ts:96-107, scripts/workspace/plan.ts:197-204 and scripts/workspace/check.ts:214-234, checked 2026-11-21.
- S30: `layWaves` places the rows that are `open` or `in-progress`; a row enters a wave when each blocker is `resolved` or in a wave above. Source: scripts/workspace/graph.ts:88-116, checked 2026-11-21.
- S31: A plan with rows and no row problem must hold a "Parallel waves" section whose text equals what `brain plan` renders, and the glossary says the frontier is "never written down". Source: scripts/workspace/check.ts:399-417 and GLOSSARY.md:57-59, checked 2026-11-21.
- S42: A field with the need `new` is skipped when it is absent on a file with the `migrated` key; `effort.ts` does not read that key, and `status.ts` reads no rows from a migrated file. The schema comment gives the reason for no status on a migrated file: a guessed status "would pass the check and hide the gap". Source: scripts/workspace/schema.ts:7-10, scripts/workspace/schema.ts:243, scripts/workspace/effort.ts:48-73 and scripts/workspace/status.ts:93-100, checked 2026-11-21.
- S55: `brain plan` renders "No open rows: every row is resolved or superseded." for a finished plan and marks a checkpoint row as `(checkpoint)`, and the plan template says its table "holds the only status of each task". Source: scripts/workspace/plan.ts:172-179 and scripts/workspace/templates/plan.md:13, checked 2026-11-21.
- S89: For a plan with any row problem the row check returns the row problems and skips the checkpoint rule, the waves rule returns nothing, and a migrated file gets neither rule. Source: scripts/workspace/check.ts:290-294, scripts/workspace/check.ts:400-404 and scripts/workspace/check.ts:462-466, checked 2026-11-21.
- S90: For a row the reader tests that a `superseded by` target is a row of the same table and searches the replacement links for a cycle. Source: scripts/workspace/map.ts:144-161, checked 2026-11-21.

### Writers
- S17: The templates give the first values: `status: define` for an idea, `status: accepted` for a decision record, `status: in-progress` for a research record, and `sources: []` with no status for a spec. Source: scripts/workspace/templates/IDEA.md:3, scripts/workspace/templates/DEC.md:3, scripts/workspace/templates/RES.md:3 and scripts/workspace/templates/spec.md:3, checked 2026-11-21.
- S18: Under `scripts/workspace` only `new-doc.ts` writes a file; `plan.ts` writes to standard output. Source: the command `grep -rn "writeFile\|Bun.write\|rename(" scripts/workspace/*.ts`, checked 2026-11-21.
- S19: The word `parked` is in four instruction lines of the searched folders, and each describes or reads the value; none tells an agent to set it. No instruction names a step that writes `proposed`: the format guide says when the value applies, the template lists it in a comment, and Resume reads it. Source: the command `grep -rnw "parked" skills commands .claude/commands protocol rules references agents`, skills/domain-modeling/DEC-FORMAT.md:40, scripts/workspace/templates/DEC.md:3 and skills/interview-me/SKILL.md:198, checked 2026-11-21.
- S20: The build command says "A running task keeps its row `open`", names a sign-off for a high-risk task, and its row-close steps set a row to `resolved`. Source: .claude/commands/build.md:51, .claude/commands/build.md:61 and .claude/commands/build.md:98-106, checked 2026-11-21.
- S21: Interview-me defines the four idea values, sets `specced` "once a spec lists the idea in `sources`", and on resume reports a `done` idea, routes a `specced` idea to its spec and resumes a parked idea "only at the user's request". Source: skills/interview-me/SKILL.md:28, skills/interview-me/SKILL.md:187 and skills/interview-me/SKILL.md:197, checked 2026-11-21.
- S22: The spec skill sets the idea's status to `specced` "When `sources:` names an idea", inside its step 5, "Write the spec"; the line names no condition on the idea's current status. Source: skills/spec-driven-development/SKILL.md:149-159, checked 2026-11-21.
- S23: Only the main session writes the idea; each sub-agent writes its own record; a started research row and a started do row are set to in-progress. Source: skills/interview-me/SKILL.md:86, skills/interview-me/SKILL.md:145 and skills/interview-me/SKILL.md:163, checked 2026-11-21.
- S24: A changed question gets a new row, and the old row is marked `superseded by NN`; the agent redirects each link to a superseded or removed row, or removes it with the reason in Notes. Source: skills/interview-me/SKILL.md:118-119, checked 2026-11-21.
- S25: The spec template holds no status line, and the only `status` that the spec skill names is the idea's. Source: scripts/workspace/templates/spec.md:3 and the command `grep -n "status" skills/spec-driven-development/SKILL.md`, checked 2026-11-21.
- S26: "Close a row" names the main session as the only writer of the plan and the ticks; it ticks the boxes of the task's block in `tasks/todo.md`, sets the row to `resolved`, writes the result, writes the "Parallel waves" section again, runs `brain check` and commits. Source: .claude/commands/build.md:98-106, checked 2026-11-21.
- S44: The protocol's "Task end" tells a session to update the row's "status and result link" and to keep "user waits in the active effort's rows and records"; three host files repeat the text. Source: protocol/PROTOCOL.md:51-54 and the command `grep -rl "its status and result link" .`, which names GEMINI.md, protocol/AGENTS-block.md and rules/protocol.md, checked 2026-11-21.
- S57: Resume, step 2, says "A proposed DEC remains a proposal" and tells the main session to validate the records that resolved rows link, to "repair an incomplete record from saved evidence, or reopen its row when the evidence does not settle it". Source: skills/interview-me/SKILL.md:198, checked 2026-11-21.
- S66: For a do row the session that runs the work creates the research record with `kind: task`, sets the row in-progress, and at the end sets `outcome: answered` and `status: resolved`. Source: skills/interview-me/SKILL.md:163-169, checked 2026-11-21.
- S67: A decide row is marked resolved once its decision record has no finding, a research row is resolved when its record is answered and sufficient, and a row beyond the destination is removed with its number, question and reason under Out of scope. Source: skills/interview-me/SKILL.md:82, skills/interview-me/SKILL.md:121 and skills/interview-me/SKILL.md:154, checked 2026-11-21.
- S72: The spec skill tells the agent to propose a capability map with a "Depends on" column and a "Build order" line, with the rule "Dependency direction, no cycles", to put it to the user for approval, and to record it in a decision record that each module spec lists in `sources:`; its example uses `none` for an empty cell. Source: skills/spec-driven-development/SKILL.md:57-80, checked 2026-11-21.
- S75: A reference says the build keeps "the plan's rows and result records" current "throughout each task"; the planning skill lists `in-progress` and `superseded by NN` as plan row values; two fixtures hold an `in-progress` plan row; one grader accepts `open` or `in-progress` on a checkpoint row. Source: references/brain/stage-boundaries.md:16, skills/planning-and-task-breakdown/SKILL.md:225, scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md:18, scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:22 and evals/lifecycle/build-parallel/graders/stops-at-checkpoint.md:6, checked 2026-11-21.
- S77: A standalone idea-refine run writes each map row with the status `open`, gives each row its Blocked by cell in a second pass, writes the fog "None yet." and keeps `status: define`; the finished-idea rule accepts only an empty fog or "None". Source: skills/idea-refine/SKILL.md:184-186 and scripts/workspace/check.ts:347-351, checked 2026-11-21.
- S91: Five instruction sites call wave 1 the frontier. Source: .claude/commands/build.md:58, commands/build.toml:56, skills/planning-and-task-breakdown/SKILL.md:237, skills/planning-and-task-breakdown/SKILL.md:259 and skills/incremental-implementation/SKILL.md:213, checked 2026-11-21.
- S92: Three texts stop every new task while a checkpoint row is on the frontier: "Start no new task" in both build commands, and "No new task starts until the user says yes" in the build skill. Source: .claude/commands/build.md:80, commands/build.toml:80 and skills/incremental-implementation/SKILL.md:226, checked 2026-11-21.
- S93: The build skill says "The task is not done until code-review-and-quality has run on its diff" and "Declare the task done only after the review passes". Source: skills/incremental-implementation/SKILL.md:254 and skills/incremental-implementation/SKILL.md:278, checked 2026-11-21.
- S94: Four texts name a place for a wait on the user: the protocol names "the active effort's rows and records"; interview-me names the idea's Notes for "pending questions and waits"; the spec skill says an unanswered binding assumption "stays in Open Questions, and the spec waits on it"; the vendored context-engineering skill says to persist "unresolved questions, risks, and required approvals" and names "the spec or plan" only for the accepted scope and decisions. Source: protocol/PROTOCOL.md:54, skills/interview-me/SKILL.md:31, skills/spec-driven-development/SKILL.md:93 and skills/context-engineering/SKILL.md:126-131, checked 2026-11-21.
- S95: The format guide says to set an old record's `status` to `superseded by DEC-NNN` and that a migrated record "keeps the marker"; DEC-002 stores `status: superseded by DEC-006` beside `migrated: 0.8`. Source: skills/domain-modeling/DEC-FORMAT.md:47, skills/domain-modeling/DEC-FORMAT.md:84 and docs/decisions/DEC-002-ask-user-question-upstream.md:1-6, checked 2026-11-21.

### The report
- S27: The stage is `define` for an idea and `build` for a spec, and `finished` for a finished effort; the workspace file gives the meaning of the five lines. Source: scripts/workspace/status.ts:117-119 and docs/agents/workspace.md:35-41, checked 2026-11-21.
- S28: "Waiting on the user" holds the open frontier rows of the types interview, prototype and ideate only. Source: scripts/workspace/status.ts:28-29 and scripts/workspace/status.ts:130, checked 2026-11-21.
- S32: The build command stops at a checkpoint row on the frontier "for the user's review" and says "Start no new task"; the glossary says a checkpoint blocks every later task that builds on its phase "and no other task". Source: .claude/commands/build.md:80 and GLOSSARY.md:74-77, checked 2026-11-21.
- S43: On this repo `brain status` prints IDEA-015#32 as "Next step" and under "Waiting on the user", and prints IDEA-015#08 and IDEA-015#29 as "in progress", while the idea's notes say that row 32 waits on IDEA-016#08 in prose. Source: the command `bun scripts/brain.ts status` and docs/ideas/IDEA-015-views-mod.md:45, checked 2026-11-21.
- S56: The workspace file says "Links run one way: an idea holds no list of its specs", defines the active effort by an idea's `define` and a plan's open or in-progress rows, and says "a `parked` idea waits until the user names it", while the comment of `effort.ts` says "a specced, done or parked idea is finished"; the setup template is the same file byte for byte. Source: docs/agents/workspace.md:61, docs/agents/workspace.md:67, scripts/workspace/effort.ts:3-5 and the command `cmp skills/setup-brain/workspace.md docs/agents/workspace.md`, checked 2026-11-21.
- S76: The JSON of `brain status` holds a key `ideas` that lists every idea in any status, with its stored `status` or null and the specs whose `sources:` name it. Source: scripts/workspace/status.ts:59-60, scripts/workspace/status.ts:155-177 and scripts/workspace/status.ts:309, checked 2026-11-21.

### Real records
- S33: None of the 9 plan files under `specs/` and `tasks/` holds the layout-2 table header; the 9 are 8 plans of specs and `tasks/done/context-scope/plan.md`. Source: the script counts.sh, line "plan.md with layout-2 row table", checked 2026-11-21.
- S34: 33 workspace files carry the `migrated` key, no `spec.md` holds a frontmatter status, and each of the nine specs holds a prose "Status:" line in its body. Source: the script counts.sh and the command `grep -n "Status:" specs/*/spec.md`, checked 2026-11-21.
- S37: The ideas store `define` 10 times and `parked` 4 times; the shipped row reader gives 113 map rows (60 open, 17 in-progress, 31 resolved, 5 superseded) and 118 edges on 66 rows; research records store `resolved` 28 times, `in-progress` once (this record, at the time of the count) and no status 5 times; decision records store `accepted` 31 times and no status 2 times; no file holds a `blocked-by` key. Source: the scripts counts.sh and rows.ts, checked 2026-11-21.
- S38: IDEA-004 is `parked` after all 17 of its rows moved to other ideas; IDEA-010, IDEA-011 and IDEA-012 are `parked` with the note "Peter did not pick these rows for now"; the glossary says an idea is parked "when the user sets it aside". Source: docs/ideas/IDEA-004-keystone-workflow-follow-ups.md:26, docs/ideas/IDEA-010-external-specs.md:26, docs/ideas/IDEA-011-upstream-reference-fixes.md:26, docs/ideas/IDEA-012-model-output-checks.md:26 and GLOSSARY.md:19-21, checked 2026-11-21.
- S39: Rows 12 to 15 of IDEA-016 each store `superseded by` one row, and the notes say row 12 became rows 17 to 19 and row 14 became rows 24 and 25. Source: docs/ideas/IDEA-016-effort-blocked-by.md:95 and docs/ideas/IDEA-016-effort-blocked-by.md:159-162, checked 2026-11-21.
- S40: Waits between items are prose: "Row 02 waits on IDEA-007 row 01" in IDEA-008, the wait of IDEA-015's row 32 and of its spec on IDEA-016, the "Wait on IDEA-014" note of IDEA-016, and the "Depends on" column of DEC-004. Source: docs/ideas/IDEA-008-stage-state-and-handoffs.md:26, docs/ideas/IDEA-015-views-mod.md:45-46, docs/ideas/IDEA-016-effort-blocked-by.md:54-55 and docs/decisions/DEC-004-capability-map-brain.md:11, checked 2026-11-21.
- S41: `from:` takes `IDEA-NNN#NN`, `SPEC-NNN#NN`, `IDEA-NNN`, `SPEC-NNN` or `user`. Source: scripts/workspace/schema.ts:107-113, checked 2026-11-21.
- S70: 15 map rows are `in-progress` while the research record that names each in `from:` is `resolved` and `answered`: IDEA-015#29 and rows 17 to 30 of IDEA-016, counted while this record was still `in-progress`, so row 31 becomes the sixteenth when this record is resolved; the idea's notes say "Rows 17 to 30 stay in-progress until Peter's review" and that their records are complete, and the standing preference says "Review returned research with Peter before a row is decided". Source: the script rows.ts, list "in-progress rows and their record", docs/ideas/IDEA-016-effort-blocked-by.md:34 and docs/ideas/IDEA-016-effort-blocked-by.md:120, checked 2026-11-21.
- S73: IDEA-008 holds two open rows, "How does a spec awaiting approval or planning remain visible and resumable?" and "What durable handoff does each planning, review, performance and shipping stage return?"; the audit names the first as K3 and says "No new stage/status/schema from held DEC-018 is adopted". Source: docs/ideas/IDEA-008-stage-state-and-handoffs.md:37-38 and docs/research/RES-069-keystone-workflow-audit.md:91, checked 2026-11-21.
- S84: 13 of the 14 idea files hold the comment "define | specced | done | parked" on the status line, 13 hold the `result:` comment "the DEC-NNN or the commit SHA", and one skill example holds the first comment. Source: the commands `grep -l "define | specced | done | parked" docs/ideas/*.md` and `grep -l "the DEC-NNN or the commit SHA" docs/ideas/*.md`, and skills/idea-refine/examples.md:184, checked 2026-11-21.
- S98: Four of the seven checkpoint approvals in the SPEC-009 todo carry an open item or a check that moves to a later phase. Source: specs/SPEC-009-workspace/tasks/todo.md:157, :216, :250 and :344, checked 2026-11-21.
- S104: 6 decision records store `superseded by DEC-NNN` (DEC-002, DEC-028, DEC-034, DEC-038, DEC-040 and DEC-046), none stores `proposed`, no research record stores `outcome: blocked`, and no resolved map row names one of the six superseded records. Source: the script counts.sh, lines "decisions by status" and "research by outcome", and the command `grep -n "^| [0-9][0-9] |.*resolved.*DEC-\(002\|028\|034\|038\|040\|046\)" docs/ideas/*.md`, which prints nothing, checked 2026-11-21.
- S105: IDEA-015#08 is a prototype row that stores `in-progress` while its notes say "review with Peter pending" and record Peter's words "lets hold off on that"; the standing preference in two ideas says "Ask rows that do not wait on research, and park the ones that do". Source: docs/ideas/IDEA-015-views-mod.md:34, :50, :75 and :325, and docs/ideas/IDEA-016-effort-blocked-by.md:34, checked 2026-11-21.
- S106: None of the 9 real `spec.md` files holds a `sources:` key. Source: the command `grep -c "^sources:" specs/*/spec.md`, checked 2026-11-21.
- S110: The parked ideas hold these open rows: IDEA-010 one, IDEA-011 two, IDEA-012 two, and IDEA-004 none. Source: the script rows.ts, line "parked ideas", checked 2026-11-21.

### DEC-050, DEC-051, DEC-029 and what they meet
- S45: DEC-051 gives ideas, specs and their rows the values open, in-progress, done, parked and superseded; it says "resolved" and "done" name the same concept, that "define" is "a stage name rather than a status" and that "specced" is done with `result:` naming the spec; it says the migration "renames the old values"; it keeps ready, waiting and in review worked out; its text names no phase, no decision record and no research record, and it gives no new value for `define`. Source: docs/decisions/DEC-051-shared-status-values.md:15, checked 2026-11-21.
- S46: DEC-029 puts a "blocked by" property in the frontmatter of each idea and spec, naming ideas and specs, names the roadmap and the top-level board as its readers, and rejects a Blocked by cell that names another effort's row. Source: docs/decisions/DEC-029-effort-blocked-by.md:15, checked 2026-11-21.
- S68: DEC-050, which is accepted, widens IDEA-016 to "the alignment of status and waits across ideas, specs, phases, an idea's rows and a spec's rows: their status values, a status stored in the frontmatter of ideas and specs, and one way for 'blocked by' to work for all of them"; the question that DEC-051 resolved was "Do ideas, specs, phases and rows share one set of status values". Source: docs/decisions/DEC-050-widen-idea-016.md:15 and docs/ideas/IDEA-016-effort-blocked-by.md:60 and :154, checked 2026-11-21.
- S69: IDEA-016's notes hold the mapping: "idea define → in-progress, specced → done with `result: SPEC-NNN`; row resolved → done". Source: docs/ideas/IDEA-016-effort-blocked-by.md:63, checked 2026-11-21.
- S71: DEC-035 gives a spec the worked-out states "Not planned (no rows), Planned (none started), Building, In review (a checkpoint row is in progress or next), and Done", and says "A spec stores no status"; DEC-036 adds a "Migrated" column; DEC-030 gives a wave the status "open, in progress or done"; DEC-042, as an agent's choice, says "phase B waits on phase A when a task of B waits on A's checkpoint". Source: line 15 of docs/decisions/DEC-035-board-columns.md, docs/decisions/DEC-036-migrated-column.md, docs/decisions/DEC-030-fixed-and-live-waves.md and docs/decisions/DEC-042-board-type-and-scope.md, checked 2026-11-21.
- S102: DEC-041 says "there is no roadmap view", and DEC-048 keeps the argument form `phases SPEC-NNN` for the panel command. Source: docs/decisions/DEC-041-no-roadmap-view.md:15 and docs/decisions/DEC-048-brain-session-command.md:15, checked 2026-11-21.
- S109: IDEA-016 records the agent's choices for the field (the key `blocked-by`, a list of IDs, and checks for a missing item, a self-link and a loop "as it does for map and plan rows") and notes under "Reopened" that row 10 asks again for the cell form that DEC-029 rejected. Source: docs/ideas/IDEA-016-effort-blocked-by.md:131 and :134-135, checked 2026-11-21.
- S35: On a copy of the fixture `spec-mid-build`, `brain check` reports `blocked-by` on an idea and on a spec, `status` on a spec and `result: SPEC-001` on an idea as findings, and `brain status` then counts them on its Red line. Source: probe P1, the command `bun scripts/brain.ts check` in the scratchpad folder `res101/b`, checked 2026-11-21.
- S36: In the same probe a plan row with the status `done` and a row with the blocker `SPEC-002#03` are findings, and `brain status` no longer lists the second row as a next step; in a second folder an idea with `status: superseded` is a finding. Source: probes P1 and P4, the command `bun scripts/brain.ts check` in the scratchpad folders `res101/b` and `res101/c`, checked 2026-11-21.
- S88: In a fresh copy of the fixture `spec-mid-build` with row 04 set to `done`, `brain check` reports one finding, and `brain status` gives row 03 as the last step and row 05 as the only next step, so rows 06 and 07 behind row 04 never show; in a copy of `idea-mid-define` with `status: in-progress`, `brain check` reports one finding and `brain status` prints "Stage: no active work". Source: probes P5 and P6, the commands `bun scripts/brain.ts check` and `bun scripts/brain.ts status` in the scratchpad folders `res101/d` and `res101/e`, checked 2026-11-21.
- S47: Four grader files and four scaffolds under `evals/lifecycle` hold `resolved`; three patterns need it in a plan row, and one accepts `in-progress` or `resolved` in a map row. Source: evals/lifecycle/build-clean-context/graders/plan-rows-resolved.md:6, evals/lifecycle/build-parallel/graders/rows-resolved.md:6, evals/lifecycle/build-parallel/graders/stops-at-checkpoint.md:6 and evals/lifecycle/interview-parallel-research/graders/rows-in-progress.md:6, checked 2026-11-21.
- S48: The word `resolved` is on 29 lines of 9 non-test code files, 64 lines of 11 test files, 69 lines of 24 fixture files, 60 lines of 26 instruction files, 20 lines of 8 eval files and 8 lines of 3 doc files; as a quoted or cell literal it is on 14 lines of 6 non-test code files, 33 lines of 7 test files, 35 lines of 18 fixture files, 16 lines of 9 instruction files and 13 lines of 5 eval files; `specced` as a literal is on 2 lines of 2 code files, 6 lines of 2 test files, 8 lines of 8 fixture files and 6 lines of 3 instruction files. Source: the scripts counts.sh and counts2.sh, checked 2026-11-21.
- S82: The 14 literal `resolved` lines in non-test code are 6 for a row status, 4 for a research record and 4 of fixture text in `scripts/evals/interview-cases.ts`; the 7 literal `define` lines are 2 for the idea status, 1 comment, 2 for the stage word and 2 of fixture text in eval code; the code also tests `superseded`, `in-progress`, `done`, `specced`, `proposed` and `open` at the lines that section 5 names. Source: the script lits.sh, checked 2026-11-21.
- S83: `define` as a literal is on 7 lines of 5 non-test code files, 10 lines of 5 test files, 6 lines of 6 fixture files, 1 template line, 5 lines of 4 instruction files, 2 lines of 2 eval files, 1 doc line and 11 lines of 10 idea files; `done` as a literal is on 3 code lines, 20 test lines, 2 template lines, 8 instruction lines and 2 doc lines; `parked` is on 1 code line, 5 test lines, 2 fixture lines, 2 instruction lines and 1 doc line; "Stage: define" is on 13 lines of 4 files under `scripts`; a `superseded by NN` cell is on 8 lines of 3 test files, 4 lines of 4 fixture files and 2 lines of eval files. Source: the scripts counts.sh and counts3.sh, checked 2026-11-21.
- S81: Of the 53 vendored files, none holds `specced`, `parked`, "status: define" or `define` in backticks, and 6 hold the word `resolved` on 9 lines, each in another sense. Source: the script vendored.sh, which reads the `files` key of upstream.lock.json, checked 2026-11-21.
- S86: A test keeps the protocol at 4,000 characters at most, and the protocol has 3,950. Source: scripts/plain-talk/__tests__/render.test.ts:315 and the command `wc -m protocol/PROTOCOL.md`, checked 2026-11-21.
- S87: The pull-request workflow runs no workspace check; the release workflow runs `bun run check`, which holds `workspace:check`. Source: .github/workflows/ci.yml:16-27, .github/workflows/release.yml:53 and package.json:15, checked 2026-11-21.
- S96: The glossary marks "board" as a word to avoid for Map, "item" for Row and "ready list" for Frontier, and DEC-051 says "each with the same meaning on every item". Source: GLOSSARY.md:36, GLOSSARY.md:41, GLOSSARY.md:60 and docs/decisions/DEC-051-shared-status-values.md:15, checked 2026-11-21.
- S97: One shipped reference names the tracker label `ready-for-agent` as a state of an issue. Source: references/brain/agent-brief.md:5 and references/brain/agent-brief.md:13, checked 2026-11-21.
- S103: RES-037 says "Two things break rule 2 today: the note's `Next:` line, and the Parallel waves section", that the section "goes stale at every close", and lists "Does the Parallel waves section stay?" as an open decision. Source: docs/research/RES-037-flow-statement.md:223, :346 and :852, checked 2026-11-21.
- S108: IDEA-016's notes say "M2, M4, M5, M6 and M7 are evidence for IDEA-014's migration (rows 07 and 08) and for IDEA-016 row 11", and that M9 bears on row 08; IDEA-014's rows 07 and 08 ask how a migration removes obsolete parts and how each format change adds its own step. Source: docs/ideas/IDEA-016-effort-blocked-by.md:110 and docs/ideas/IDEA-014-migration.md:54-55, checked 2026-11-21.

### Outside this worktree
- S49: This repository has nine worktrees, among them `prototype/views-board` at `1381391c` and `skill-creation` at `f4d361a1`. Source: the command `git worktree list`, checked 2026-11-21.
- S50: The prototype calls a row "ready" when each blocker is `resolved` and "waiting" in every other case, and it works out "In review" for a spec. Source: ~/Dev/ACMElabs/brain-views-proto/prototypes/views-board-mod/proto-data.ts:154 and :264-277, checked 2026-11-21.
- S51: The branch `skill-creation` holds 24 ticket files under `docs/tracker/skill-creation/issues`. Source: the command `ls ~/Dev/ACMElabs/brain-skill-creation/docs/tracker/skill-creation/issues`, checked 2026-11-21.
- S52: The ID claim store holds the folders DEC, IDEA, RES and SPEC in the git folder of the main checkout. Source: the command `ls ~/Dev/ACMElabs/brain/.git/brain/ids`, checked 2026-11-21.
- S53: The spec skill lets an external spec tool own "how the approved spec is represented". Source: skills/spec-driven-development/SKILL.md:163, checked 2026-11-21.
- S54: The migration code and the layout-1 reader name neither `docs/tracker` nor `.scratch`. Source: the command `grep -n "docs/tracker\|\.scratch" scripts/setup/migrate.ts scripts/workspace/old-layout.ts`, which prints nothing, checked 2026-11-21.
- S58: Draft decision records DEC-016, DEC-018, DEC-019, DEC-021, DEC-022 and DEC-023 are in five folders under `interview-repair`, four of them worktrees of this repository; DEC-018 holds a spec's status "in the frontmatter as a standard set of values", DEC-019 sets the term `blocked-by`, DEC-021 gives a phase "its own `Blocked by`", and DEC-023 says a task that fails its review "stays unresolved, so the tasks blocked by it do not unblock". DEC-019 also rejects "row edges that cross files" and "edges kept as prose in a capability map record", and DEC-022 says "The words phase and checkpoint go". Source: ~/Documents/Codex/2026-11-05/pl/work/interview-repair/checks/docs/decisions/DEC-018-a-spec-carries-a-status.md:15 and the files DEC-019, DEC-021, DEC-022 and DEC-023 in the same folder, checked 2026-11-21.
- S78: In that folder DEC-008, DEC-016, DEC-018, DEC-019, DEC-022 and DEC-023 store `status: accepted` and `decided: 2026-11-05 by Peter`, and DEC-021 stores `superseded by DEC-022`; RES-069 says "The other held DEC-012–023 remain unapproved, despite accepted frontmatter in historical copies" and that DEC-013 and DEC-014 are reapproved; the idea beside the drafts says DEC-012 to DEC-023 "stand as drafts"; DEC-020 of this worktree stores `accepted` and `decided: 2026-11-05 by Peter`. Source: the command `grep -n "^status:\|^decided:"` on those files, docs/research/RES-069-keystone-workflow-audit.md:27-28, ~/Documents/Codex/2026-11-05/pl/work/interview-repair/repo/docs/ideas/IDEA-003-finish-workflow-changes.md:101 and docs/decisions/DEC-020-status-then-prompt-then-router.md:3 and :11, checked 2026-11-21.
- S79: The draft DEC-016 says "a spec is not fully done until" a merge and a release happen and that "Peter said he is not totally sure of this point, so row 64 confirms it"; the draft DEC-018, from IDEA-003#64, says "This confirms the point DEC-016 left open: a spec is not done at its last task row"; the draft DEC-019 says an idea "names other ideas", a spec "names other specs", "An edge from an idea to a spec is not part of this standard" and "The `Depends on` columns in the older plan files go"; the draft DEC-008 says "Available work is every idea or spec, active or not started, that nothing blocks". Source: line 15 of the files DEC-016-each-stage-names-the-next.md, DEC-018-a-spec-carries-a-status.md (also line 9), DEC-019-one-dependency-standard.md and DEC-008-available-work-at-session-start.md in ~/Documents/Codex/2026-11-05/pl/work/interview-repair/checks/docs/decisions, checked 2026-11-21.
- S80: The prototype makes the key `<scope>#<row number>` in memory from the local Blocked by cell, gives a phase the ID `<scope>/P<n>`, gives a record with `migrated` and no status the status `migrated`, and reads an idea with no status as `define`; the note of its sample file says the waits between ideas and specs "are sample data" and "the rest are made up". Source: ~/Dev/ACMElabs/brain-views-proto/prototypes/views-board-mod/proto-data.ts:108, :190, :209 and :302, and line 2 of samples/sample-effort-waits.json in the same folder, checked 2026-11-21.
- S99: On the branch `skill-creation` all 24 ticket files hold `Status: resolved` and 6 hold a `Blocked by:` line; the Gemini copy of Brain is version 0.5.0; 8 folders `source-command-*` exist in the main checkout; the Codex memory skill tells the agent to read and update `docs/STATUS.md`. Source: the commands `grep -l "^Status: resolved"` and `grep -l "^Blocked by:"` on ~/Dev/ACMElabs/brain-skill-creation/docs/tracker/skill-creation/issues/*.md, ~/.gemini/extensions/brain/gemini-extension.json, the command `ls -d ~/Dev/ACMElabs/brain/.agents/skills/source-command-*`, and ~/.codex/memories/skills/brain-workflow-build/SKILL.md:17 and :35, checked 2026-11-21.
- S100: The second repo holds 12 ideas with `status: define` and 1 with `parked`, and 106 decision records (102 `accepted`, 4 `superseded by DEC-NNN`); its SPEC-001 lists IDEA-001 first in `sources:`, and IDEA-001 stores `status: define` with the note that Peter "rejected the first draft of SPEC-001" and that "SPEC-001 stays on hold". Source: the command `grep -h "^status:"` on ~/Dev/peterkloss.dev/docs/ideas/*.md and docs/decisions/*.md, ~/Dev/peterkloss.dev/specs/SPEC-001-core-experience/spec.md:1-4 and line 3 and lines 50-51 of that repo's IDEA-001 file, checked 2026-11-21.

### Added after a second pass at the sources
- S59: The real maps hold 118 edges; 40 name a row that is `resolved`, and none names a superseded row. Source: the scripts verify.sh, part "edges that name a resolved row", and rows.ts, checked 2026-11-21.
- S60: `Bun.YAML.parse` reads `[01, 08, 10]` as the numbers 1, 8 and 10, keeps `IDEA-003#02` and a quoted `"01"` as text, and reads `IDEA-003 #02` as `IDEA-003`. Source: the script verify.sh, part "YAML", run on Bun in this worktree, checked 2026-11-21.
- S61: A test of the lifecycle check expects the finding "no entry for Phase" for a glossary with no Phase entry. Source: scripts/lifecycle/__tests__/names.test.ts:377, checked 2026-11-21.
- S62: `brain check` reports a task that names a checkpoint in its Blocked by cell and depends on no task in that checkpoint's phase, and a task that depends on a phase's task while the checkpoint does not block it; the rule loops over task rows only, so a checkpoint that names another checkpoint gets no finding from it. Source: scripts/workspace/check.ts:236-252, checked 2026-11-21.
- S63: `brain plan` with no spec named returns an error and the exit code 2 when several efforts are not finished. Source: scripts/workspace/plan.ts:254-256 and scripts/workspace/plan.ts:293-303, checked 2026-11-21.
- S64: The session-start hook keeps its text under 10,000 bytes and cuts the status text at a line end, with a line that names `brain status --json`. Source: scripts/hooks/session-start.ts:10-16 and scripts/hooks/session-start.ts:73-93, checked 2026-11-21.
- S65: In the fixture `no-active-work`, two specs list IDEA-001 in `sources:`. Source: the command `grep -rln "IDEA-001" scripts/workspace/__tests__/fixtures/*/docs/specs/*/spec.md`, checked 2026-11-21.

## Follow-ups
- Do decision records and research records take the shared status values? DEC-051 names neither, and IDEA-016's Evidence leaves them out "unless Peter says so".
- Does a checkpoint row on the frontier hold every new task of a build, or only the tasks that it blocks? RES-100 raises the same question; row 09 meets it.
- Do the held drafts DEC-008, DEC-016, DEC-018, DEC-019 and DEC-021 to DEC-023 count as input to rows 01, 03, 04, 08, 09 and 10? RES-096 asks this for four of them.
- Does IDEA-016's stored spec status answer IDEA-008#01 and IDEA-008#02, or do they stay work of IDEA-008? RES-099 asks the same.
- GLOSSARY.md has no entry for a wait, a link or a wave, and it marks "item" as a word to avoid, which DEC-051 uses. This is a gap for the domain-modeling skill.

## Next action
None.
