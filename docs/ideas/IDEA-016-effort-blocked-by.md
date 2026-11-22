---
id: IDEA-016
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-016: Align status and waits

## Intent
- Outcome: ideas, specs, phases, an idea's rows and a spec's rows share an aligned way to record their status and what they wait on; ideas and specs keep both in their frontmatter, as `status:` and `blocked-by:`; `brain check` validates them, and Brain's tools read them.
- User: Peter, and anyone who uses Brain on any host. IDEA-015's views read these fields.
- Why now: IDEA-015's views show status columns and dependencies across all these items (DEC-035, DEC-042), while today each item records status and waits in its own way, or not at all (RES-073); Peter sees an alignment opportunity (DEC-050).
- Success: open, row 06.
- Constraint: the format works on every host Brain supports; changes to skills follow `docs/maintainers/changes.md`; IDEA-015's views read every older format (DEC-037); the change ships with a Brain migration that adds, updates and removes, leaving nothing obsolete (Peter, 2026-11-21; IDEA-014).
- Out of scope: the views (IDEA-015).

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for aligned status and waits: the status values and where each item stores them, the form of "blocked by", whether phases become records, the checks, the skills that write the fields, and what `brain status` does with them.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Created 2026-11-20 from IDEA-015#23 (DEC-031) as "Waits between efforts". Widened on 2026-11-21 to "Align status and waits" (DEC-050). IDEA-015's spec waits on this idea.

### Standing preference: how Peter wants interviews run, 2026-11-20
Source: Peter's message in the session of 2026-11-20, for every idea. In short:
- Before a question, read his prompt, AGENTS.md and the idea's notes, and mark every decision they already answer. Ask only about what is still open.
- Cheap, reversible choices that do not change what gets built: the agent makes them, states them in chat with a one-line reason, and adds no row.
- Facts that research can settle: research them; do not ask.
- Ask only about real decisions: trade-offs, taste, direction, or anything hard to reverse. One question at a time, most important first.
- After every answer, evaluate the whole map in a visible step: close settled rows, merge or drop rows, add new rows, work out the frontier, then tell Peter in one or two lines what changed before the next question.
- Keep the idea file current after every answer. A research or do row's progress goes in its own RES record.
- Research only the row in front of the interview, or the few big unknowns that shape the whole map. Ask rows that do not wait on research, and park the ones that do. Review returned research with Peter before a row is decided, dropped or re-scoped.

### Standing preference: the best design, not the easiest, 2026-11-21
Source: Peter, in the session of 2026-11-21, while clarifying IDEA-016#07:

> I want to do the thing that is the BEST idea and not the easiest idea - if aliging status is the best most correct i don't want to not do it for fear of touchign stuff - if it isn't then it isn't - either way we are giong to have to do some amount of migration work on repos that use brain when they update to this newer version - we need to ensure all of these updates get captured by brain migraiton funcitonality that is very well defined and when migrating to the new approach not only that the parts that need to get added get added and the parts that need to be updated get updated - but also the parts that no longer serve any purpose, those parts can not end up just getting left wherte they are, they need to be removed

- Choose the design that is best and most correct. The amount of change, or of migration, is not a reason to reject it.
- Every format change ships with a well-defined Brain migration that adds what is new, updates what changes, and removes what no longer serves a purpose; nothing obsolete stays behind (IDEA-014).

### Resume here, written 2026-11-22

- Read first the note "Row 33 — partial" in IDEA-015. It holds the state of the session, the order of work, and the pending questions to Peter.
- This idea's scope after the talk of 2026-11-22: a status for a spec; Blocked by for ideas and specs; Blocks for every kind; the word "task" for a line of a map or a plan. Peter's proposals are in the two notes below ("Blocked by — Peter's proposal" and "Checkpoints, `blocks` and future items"). None is decided.
- Rows 17 to 33 stay in-progress: Peter and the agent did not go over RES-101, RES-102 or RES-103 by content. RES-102 and RES-103 covered work trackers only; Peter also wants schema packages and community voices in that research (IDEA-017, row 08). The research method is on hold with IDEA-017.

### Session close, 2026-11-21, second session (history; the note above replaces it)
This note is the entry point for a new session; the research notes further down hold the detail.

Where the work stands:
- The research that Peter asked for is complete: an inventory of every file (row 16, RES-086), 14 topic records (rows 17 to 30, RES-087 to RES-100) and one synthesis (row 31, RES-101). Each topic record and the synthesis was checked by three independent agents and repaired. Every record is `status: resolved`, `outcome: answered`.
- Rows 17 to 31 are still in-progress in the map on purpose: Peter reviews returned research before a row closes, and that review has not started. Row 16 is resolved.
- No decide row is answered beyond row 07 (DEC-051). Rows 01 to 04 and 08 to 10 wait on row 31.
- No agent and no workflow is running.

Next steps, in order:
1. Review the research with Peter. Start from the 25-line summary at the top of `docs/research/RES-101-status-waits-synthesis.md`; it also has one section per decide row. Peter wants short, clear text, so give him the summary in a few lines, not the record.
2. On his word, set rows 17 to 31 to resolved, each with its record: 17 RES-089, 18 RES-093, 19 RES-088, 20 RES-087, 21 RES-090, 22 RES-092, 23 RES-091, 24 RES-094, 25 RES-095, 26 RES-096, 27 RES-097, 28 RES-100, 29 RES-098, 30 RES-099, 31 RES-101.
3. Ask the decide rows one at a time, in the order Peter gave: 08, 09, 10, then 01 to 04. For each, take the facts from its section of RES-101 and put a recommendation in the question. Row 08 has a partial answer in the note "Row 08 — partial answer" below.
4. Then row 05 (research), row 06 (success), row 11 (migration), and Finish. The spec waits on IDEA-014's migration design.
5. IDEA-015 row 32 follows this idea's row 08.

Things a new session must know:
- RES numbers RES-078 to RES-085 are claimed and have no file, on purpose. The next free number is RES-102.
- The working data of the research (the per-site inventory, the topic site lists and the check results) is in `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/status-waits/`, which is temporary. The records hold the results; nothing in the records needs that folder.
- The inventory's critic found places outside this worktree that matter for the decisions and for IDEA-014: its text is in RES-086, section "Critic: what lies outside the file list".
- Cost so far: about 40 million subagent tokens in 109 agent runs plus 22 repeated ones. Peter's weekly limit was reached once during the depth run. Ask before another large run.
- The built-in `deep-research` workflow searches the web only. Peter named it as the model for depth; it fits a later question about practice outside this repo.

### Peter's words in IDEA-015's talk, 2026-11-21 (third session)
Kept in full in IDEA-015's Notes, "Peter's talk about the views". What bears on this idea:
- Row 09: on phases, "I'm not totally sold on those and how they work"; he thinks they are "probably a little tied to waves". A doubt, not a decision.
- Row 10: a "wait" in an idea file confused him: "It feels like a blocked by". The agent's prose notes "Wait on IDEA-NNN" and the word "waits" are other wordings of blocked by; one word for the concept is wanted.
- His outline of the detail view gives every item kind Id, Status, Blocked by and Blocks. He sees the detail view's fields and this idea's standardization as one piece of work.

### Research review, third session, 2026-11-21
- Peter, 2026-11-21: "I know that you did a bunch of looking around to try to understand how status and Block Buy works. Get that stuff done because I think it's probably worth hammering out the parts of the details." Settled: this idea's review and decide rows come now, before IDEA-015's detail view (IDEA-015#33).
- The agent asked to close rows 17 to 31 on a nine-line summary. Peter refused: "17 through 31 covers a lot of stuff ... that research was like incredibly comprehensive. We haven't gone over it at all. I'm not just gonna let you resolve all of that." Settled: rows 17 to 31 stay in-progress. No row closes on a summary; a row closes after Peter and the agent went over its record's content. The question is retired.
- Peter's aim for this work, 2026-11-21: "There's a ton of messy, inconsistent, standardized, kind of standardized, all over the place stuff here in this library. I would like to find a way to leverage this mods work to identify a handful of it that we can start to standardize." And: "instead of us jumping into design, what I'm trying to do is identify what that scope is." Settled: the current step is scope, not design.
- His worry about leftovers: earlier changes were integrated, "but there were other things that used to be part of the workflow that no longer were, because our new thing took its place, but we left those old things there, and they didn't break anything, but they added confusion". "whatever we decide - we need to make sure we're actually moving this thing towards a more sane standardized idea and not adding more chaos."
- His wish for the agent: "If you don't agree or we're not aligned, I need you to speak up and say something."
- His plan: he states how blocked by should work; the two go back and forth and agree; then a fan-out of agents, as for status, tests the agreed rule against what is in the codebase.

### Blocked by — Peter's proposal, under discussion (rows 09, 10; DEC-029)
Peter's words, 2026-11-21:

> - Ideas - Ideas can block other ideas via the blocked-by-front-matter property we're considering adding to their documents. Ideas should not be adding specs to their Block By front matter properties, the brain workflow has already established the ideas before spec sequence. The tasks of a specific idea can block other tasks of that same idea - right now the tasks of one idea cannot block the tasks of a different idea - But, I think it would make sense for us to enable that as we do frequently move around between related ideas during the refinement phases.
> - Specs - Specs can block other specs via their blocked by front matter property. A task belonging to a specific spec can block another task of that same spec via the BlockedBy property, but not the tasks of other specs.
>
> I don't have a good enough comprehension of phases or just the craziness of certain parts of the brain implementation to know exactly how they get defined or how their dependency graph gets established - my feelign is probably it is derived but I don't want to guess we'll need to figure that out during the blocked by deep-research

The proposal, in the glossary's words (an idea's "tasks" are its map rows):
- An idea's `blocked-by` names ideas only. A spec's `blocked-by` names specs only.
- A map row may be blocked by a row of the same idea or of another idea.
- A plan row may be blocked by a row of the same spec only.
- Phases: not stated; he expects that their blocks are worked out.

Status: a proposal, not a decision. It changes DEC-029, which lets an idea or a spec name both kinds and rejects a cell that names another effort's row; a new DEC supersedes it when the two agree.

The agent's check against the records, put to Peter 2026-11-21:
- The research of rows 16 to 31 covered blocked by as fully as status: the inventory searched for both, RES-098 lists every form of a block and all 29 that cross a file, RES-093 covers how code reads the Blocked by cell, RES-100 covers phases, checkpoints and waves. The agent's position: no second fan-out of that size; the open work is to go over those records, and later one narrow run for what the agreed rule changes and what it makes obsolete (rows 05 and 11).
- Phases, from RES-100 and RES-101: a phase is the task rows that one checkpoint row names in its Blocked by cell. It stores no ID, no status and no block. A block between phases and the waves are worked out from the rows. No real plan in this repo has a checkpoint row; all 9 specs are layout 1.
- Fits the records: 2 real blocks from a row of one idea to a row of another (RES-098, X1 and X2); blocks between specs (X6, X7, X12); no real block from an idea to an existing spec; no real block from a plan row to a row of another spec.
- Needs a home: 3 real blocks are on "the spec that an idea leads to", written before that spec exists (X3, X4, X13). This is the fog line of this idea: does a spec take over the blocks of the ideas in its `sources:`.
- Stays outside the field: blocks on a thing that is not an item, such as a merge, a release or the user's yes (X13, X14, X15, X27).
- Asked 2026-11-21: where does a block on a future spec go while only the idea exists? Peter's answer is in the next note.

### Checkpoints, `blocks` and future items — Peter's proposal, under discussion (rows 34, 35, 36)
Peter's words, 2026-11-21, in answer to "where does a block on a future spec go, while only the idea exists?":

> Well, I don't know enough about how the checkpoints work, and I don't know if they're specific only to specs. But the way they work right now in specs, I believe that's like the job of a spec point. Now one of the things that I think could help us out a lot here is the basic memory library supports creating future references so I think probably the correct way to do this or the way that I think might make sense to do this is creating a checkpoint around ideas if there are multiple ideas that need to be completed before something else can be started they should be blocked from moving forard by the checkpoint, not each other - Being blocked by a checkpoint allows the two things to potentially be worked on in parallel. Being blocked by the other idea and not by the checkpoint would not allow that. So they are different. Additionally, JIRA uses both 'blocks' and 'blocked-by' - the checkpoint identifying multiple ideas in it's 'blocks' front-mattet property makes more sense then I think then each idea defing the theckpoint or each other in their blocked by property - the checkpoint additionally could define the views spec in its blocks propty before it is created, leaning into basicmemory's allowance of a thing to establish it's relataion to antoher thing before it actually exists.
>
> i think adding/supporting both the 'blocked-by' and the 'blocks' frontmatter properties on ideas, idea tasks, specs, spec tasks and checkpoints as well as enabling them to define a thing as something it blocks or is blocked-by before the other thing exits is likely important as well.  I think this is something we should actually do, some pretty deep-research on So that we can very clearly define when 'blocks' vs 'blocked-by' as well as whatever rules around defining a thing as block or blocks before it exists and the rules around that will be pretty critical to it working.

The proposal, as the agent reads it (not yet confirmed by Peter):
- A checkpoint can stand between ideas, not only inside a plan. Several ideas feed it; later work is blocked by the checkpoint, not by each idea.
- Items store `blocks` as well as `blocked-by`: ideas, map rows, specs, plan rows and checkpoints.
- An item may name, in either field, an item that does not exist yet, as Basic Memory allows for its links.
- He asks for deep research, so that the rule for `blocks` against `blocked-by` and the rules for a not-yet-existing item are clear.

Open in the wording: "the checkpoint identifying multiple ideas in it's 'blocks' front-mattet property". The agent's reading is that the ideas feed the checkpoint (it is blocked by them) and its `blocks` names what comes after, such as the views spec. Peter must confirm the direction.

The agent's points, put to Peter 2026-11-21:
- Parallel work does not need a checkpoint: an item that is blocked by A and by B already lets A and B run side by side. What a checkpoint adds is a gate with its own status and review, one name for the group, and an item that exists before the blocked item does.
- One block stored on both ends is one fact in two places. Brain's rule so far is a link on one end and the other direction worked out (`docs/agents/workspace.md`: "Links run one way"); two stored copies of a spec's state drifted before (RES-101, row 08).
- A not-yet-existing item needs a name. Brain's IDs are numbers that `brain new-doc` claims at creation; a number can be claimed with no file (RES-078 to RES-085 are such numbers).
- The glossary's Checkpoint is a plan row that ends a phase. A checkpoint between ideas is a new item kind, so it adds to the format; it earns its place if it takes over the prose blocks on future specs (RES-098: X3, X4, X13).
- Basic Memory is not used in this repo (searched 2026-11-21: no file names it).

Research started 2026-11-21, one `brain:researcher` each, in the background: row 32 (how work trackers store and name a block, and model a gate) and row 33 (links to an item that does not exist yet, Basic Memory first). Each record is found by its `from:`. Retry condition if one stops: continue its record from its Next action. Row 33 returned 2026-11-21 as RES-102, `outcome: answered`, `status: resolved`; the agent stopped. The row stays in-progress until Peter and the agent go over the record (his rule). Its main facts: Basic Memory does take a relation to a note that does not exist yet ("forward reference"), as Peter said; the relation is a line in the note body, not frontmatter, and it names the target by free text (permalink, title or path), with no ID reserved; a typo and a real future note look the same, and the only signal is a count; Jira and Taskwarrior refuse a missing item; four ways to name a future item are in use (a name, a path, a reserved ID, a stub item), each with a known cost. Row 32 returned 2026-11-21 as RES-103, `outcome: answered`, `status: resolved`; its agent stopped too, so no agent runs. The row stays in-progress until the review with Peter. Its main facts: each of the eight tools stores one block one time; the file tools store it on the item that waits (Taskwarrior `depends`, Beads, Org `BLOCKER`, Backlog.md `dependencies`), and Jira stores one link with two end names; the reverse direction is worked out; Jira, Linear, GitHub, Azure Boards and Beads take entry from either end and write the one stored form; no tool has a checkpoint item whose only job is to join blocks, the nearest forms are a Beads `gate` issue and a parent item, and a milestone groups without a block; contrary evidence: Debbugs and adr-tools store both ends, written by one command, and GitLab moved from two stored forms to one. `brain check` has no finding in 114 files. Pending question to Peter, asked before RES-102 came: does the checkpoint wait on the ideas, and name in `blocks` what comes after?

The repo's side of both questions is in RES-089 and RES-098; no repo fan-out runs. The built-in `deep-research` workflow stays an option if these two records are thin.

### Peter's request that widened this idea, 2026-11-21
Source: Peter's message in the session of 2026-11-21 (kept in full in IDEA-015's Notes):

> is there an oportunity here to align status and status values for ideas, specs and the tasks of both ideas and tasks in addition to status of specs and ideas being in the frontmatter (might already be there for them) - I'm also wondering if there is an oportunity for us to align the blocked-by so it works the same way for ideas, idea tasks, specs, spec tasks and spec phases?  And making sure it is in teh frontmatter for the i think just spec and ideas?  I'm not totally sure if the status valuse need to be the same accropss all of those things - but I feel like there is an alignment oportunity here

What it settles and what it leaves open:
- Settled: ideas and specs keep their status and their `blocked-by` in frontmatter. Ideas already store `status:`; specs store none today (RES-073). [rows 08, DEC-029]
- Settled: "blocked by" should work the same way for ideas, an idea's rows, specs, a spec's rows and phases. How is rows 09 and 10.
- Open: whether the status values are the same for all items; Peter is not sure. [row 07]

### Wait on IDEA-014
Existing repos reach the aligned format through Brain's migration, which IDEA-014 defines (Peter, 2026-11-21), so this idea's spec waits on IDEA-014's migration design. The wait is written here in prose until the `blocked-by` field exists.

### Row 07 — resolved, DEC-051
- Peter's answer, 2026-11-21, to "Should every item share one set of status values?": "One shared set (Recommended)". Settled: ideas, specs and rows share the values open, in-progress, done, parked and superseded, each with one meaning on every item; ready, waiting and in review stay worked out; old values are renamed by migration (IDEA-014).

- Asked 2026-11-21: do ideas, specs, phases and rows share one set of status values, or keep their own values under shared categories?
- Options put: own values under shared categories; one shared set of values; keep the values as they are and only add a spec status.
- First recommendation given: own values under shared categories, partly because no existing record would need new values. Peter chose to clarify, and set the rule that the best design wins over the easiest (standing preference above).
- Asked again 2026-11-21, on merit: one shared set of values, open, in-progress, done, parked and superseded, with the same meaning on every item. Reasons: the glossary keeps one word per concept, and today "resolved" (rows) and "done" (ideas) name the same concept; "define" is a stage name, not a status; "specced" is "done, with `result:` naming the spec". States that other data gives, such as ready, waiting and in review, stay worked out and are never stored. Mapping: idea define → in-progress, specced → done with `result: SPEC-NNN`; row resolved → done.

### Row 08 — partial answer, waits on research
- Asked 2026-11-21: how is a spec's stored `status:` kept? Options put: stored and checked against the plan rows (recommended); store only what rows lack.
- Peter's free-text answer, 2026-11-21:

> so I'm not totally sure - i kind of feel like if the goal is alignment potentially the way a things stored status works and is handled should perhaps be the same accross the board/use the same mechanism - but that being said I'm not 100% sure - I think this alignment part probably requires us to do like a comprehensive deep research analysis of the brain code base to see how status is handled by all of them which will probably help inform us how to move forward around these types of decisions but I think there's probably like a need for a fan out deep intelligence check here

- Leaning, not settled: one mechanism for stored status, and its handling, on every item kind.
- Settled: before the remaining design rows, a fanned-out, deep research pass over how Brain handles status and waits today. It is rows 12 to 15, one researcher agent each, run in parallel. The decide rows 01 to 04 and 08 to 10 wait on them, then on Peter's review of the results.
- Next: start rows 12 to 15 in the next session (Peter asked to clear this session's context first).

### Research — rows 12 to 15, second run stopped, 2026-11-21 (second session)
- An earlier run of rows 12 to 15 was removed on purpose (Peter, 2026-11-21): RES-078 to RES-081 no longer exist, and their numbers stay claimed.
- A second run, four `brain:researcher` agents started in the second session of 2026-11-21, was stopped within minutes and its four stub records (RES-082 to RES-085) were deleted, at Peter's word:

> for the deep analysis of how status is handled accross the codebase - I know you jsu kickdc that off - it's important that that research really be comprehensive, Thoreau and fanout accross teh whole code base in order to identify all the places it to do /deep-research on - you can use dynamic workflows for that workr - might be worth calling those research agents back - throwing their stuff away and taking some time to think about how best to do that wotk begore kickingit ofgf

- Settled: the research is comprehensive and thorough. It first fans out across the whole codebase to identify every place that handles status or waits, then researches each place in depth. A dynamic workflow may run it. Four agents with one brief each are not enough.
- RES-078 to RES-085 stay claimed; new records start at RES-086.
- Sized inline, 2026-11-21: the worktree holds 611 files and about 58,000 lines; 330 files and about 3,000 lines mention a status or wait word.
- Design put to Peter, 2026-11-21 (pending question): three workflows in sequence. (1) Inventory: readers cover every file by a fixed split of the file list, four sweeps search another way (by literal value, by item kind, by command and lifecycle moment, by git history), and a critic looks for gaps until none is found. (2) Depth: one `brain:researcher` per topic the inventory yields, each with interview-me's brief and its own RES record, then an independent check of every finding against its source and against the inventory's sites. (3) Synthesis: one record with the item kind by operation table, the differences between kinds, and the facts for each decide row. Rows 12 to 15 are then superseded by one inventory row, one row per topic and one synthesis row.
- Peter dismissed that question by mistake and asked for it again. He also ran `/deep-research this is the skill` to show which skill he meant. It is Claude Code's built-in `deep-research` workflow. By its own description it splits a question into 5 search angles, runs web searches, fetches the top 15 sources, extracts claims, checks each claim with 3 adversarial votes and writes a cited report. It reads the web, not this repo's files, and it was not run on the words "this is the skill".
- Design change, 2026-11-21: phase 2 follows that workflow's method on the repo's files: per topic, a researcher extracts sourced claims into its RES record, three independent agents check the record through three lenses (each source says what the finding claims; every inventoried site of the topic is covered; contrary evidence in other areas), and the researcher repairs the record. The built-in web workflow itself stays for a question about practice outside this repo, proposed when a decide row needs it.
- Options put again: full with three checks per topic, about 95 agents (recommended); full with one check, about 65 agents; lean with no check, about 25 agents.
- Peter's answer, 2026-11-21: "Full, three checks (Recommended)". Settled: the research runs at full scale, as three workflows in sequence, with three independent checks per topic record.
- Map change, agent's choice within the settled design: row 16 is the inventory; rows 12 to 15 wait on it and are re-cut into one row per topic and one synthesis row when it returns.
- Row 16 started 2026-11-21 as a workflow (`status-waits-inventory`): one reader per slice of the file list reads every file in full, and eight sweeps search by literal value, by item kind, by command and lifecycle moment, and by commit history. Working files: `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/status-waits/` (`slices/`, `inventory/`, `sweeps/`). The main session merges them, checks that every file has an answer, sends the gaps to a critic, and renders the inventory record with `from: IDEA-016#16`. Retry condition if it stops: resume the workflow run, or re-run the slices whose result file is missing or incomplete.
- The run: 25 readers (the slices are cut by size, about 165 kB each) and 8 sweeps, at most 8 at once; run ID `wf_b45aa748-93e`, started 2026-11-21. Its script is `/Users/peterkloss/.claude/projects/-Users-peterkloss-Dev-ACMElabs-brain-views-mod/8f41990c-e539-4b97-b369-e4f4bd8d4c22/workflows/scripts/status-waits-inventory-wf_b45aa748-93e.js`.

### Research — inventory returned, topics cut, 2026-11-21
- Row 16 resolved with RES-086: all 611 files have an entry from a full read; 377 files hold 2,015 sites (72 more hold borderline sites only); 8 sweeps recorded 3,275 sites and agree with the readers but for 5 minor sites; 7 strong search hits outside every site are other meanings. No critic round was needed for those gaps; one critic agent still reviews the inventory inside the depth workflow.
- Rows 12 to 15 are superseded. Row 12 (code and CLI) is now rows 17 to 19; row 13 (skills, commands, hooks, protocol) is rows 21 to 23; row 14 (evals, tests, docs) is rows 24 and 25, with the unit tests inside the code rows; row 15 (the repo's records) is rows 26 and 27; row 20 holds setup and migration. Rows 28 to 30 cut across all areas, and row 31 is the synthesis that the decide rows wait on.
- Topic site files, one per row, are in the scratchpad: `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/status-waits/topics/`. The scratchpad is temporary; RES-086 keeps the per-file index.
- Depth workflow: rows 17 to 27 first, each with a `brain:researcher`, three independent checks (sources, coverage, contrary evidence) and a repair by a researcher; then rows 28 to 30 the same way, starting from the checked records. Row 31 follows as its own run. Each record is found by its `from:`. Retry condition if the run stops: resume the workflow run; a row whose record exists continues from that record's Next action.
- The depth run started 2026-11-21: workflow `status-waits-depth`, run ID `wf_574322c7-907`, 71 agents planned (14 topics times one researcher, three checks and one repair, plus the inventory critic), at most 8 at once. The same run starts rows 28 to 30 when rows 17 to 27 return. Check results go to `checks/` in the scratchpad folder above. Script: `/Users/peterkloss/.claude/projects/-Users-peterkloss-Dev-ACMElabs-brain-views-mod/8f41990c-e539-4b97-b369-e4f4bd8d4c22/workflows/scripts/status-waits-depth-wf_574322c7-907.js`.

### Research — depth run stopped at the usage limit, 2026-11-21
- Run `wf_574322c7-907` ended with 34 of 71 agents done. The other 37 failed with "You've hit your weekly limit · resets Nov 22 at 11pm (America/Los_Angeles)". No row is resolved yet; each record waits on its checks, its repair and Peter's review.
- All 14 topic records exist, each `status: resolved`, `outcome: answered` as its researcher left it, and `brain check` has no finding: row 17 RES-089, row 18 RES-093, row 19 RES-088, row 20 RES-087, row 21 RES-090, row 22 RES-092, row 23 RES-091, row 24 RES-094, row 25 RES-095, row 26 RES-096, row 27 RES-097, row 28 RES-100, row 29 RES-098, row 30 RES-099.
- Checked three ways and repaired: rows 28, 29 and 30. Their researchers built on the topic records of rows 17 to 27 before those were checked, and were told to go back to each source.
- Row 21: the sources check returned (16 issues, 1 blocking), a coverage result file exists though its agent failed before it returned, the contrary check failed, and the repair ran.
- Row 18: all three checks returned (14, 11 and 13 issues; 1, 0 and 4 blocking); the repair failed. Row 17: the sources and coverage checks returned (16 and 15 issues; 1 blocking each); the contrary check and the repair failed.
- Rows 19, 20 and 22 to 27: no check and no repair ran.
- Still to run, about 37 agents: 26 checks (rows 19, 20, 22 to 27 in full; row 17 contrary; row 21 coverage and contrary) and 10 repairs (rows 17 to 20 and 22 to 27), then row 21's repair again if its late checks find more.
- Retry condition: the limit has reset (after 23:00 Pacific on 2026-11-22), or Peter allows extra usage. Then resume run `wf_574322c7-907` from its script; finished agents come from the cache and the failed ones run again. The check results and the topic site files are in the scratchpad, `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/status-waits/`, which a reboot can clear; if it is gone, cut the topics again from a new inventory run before the resume.
- The inventory critic returned 12 misses, 2 of them blocking the claim "every place in the repo". Its text is now in RES-086. Inside the 611 files the inventory is sound. Outside the file list it found: the prototype branch `prototype/views-board`, which is a second implementation of worked-out status and waits (M1); branch `skill-creation`, with real records in the layout-1 tracker format at `docs/tracker/`, a path no migration step names (M2); the ID claim store in the git folder (M3); two other repos on this machine with live layout-2 records, one with 106 decision records (M4); Brain 0.5.0 copies in Gemini CLI and Antigravity (M5); stale command copies and a memory skill that Codex wrote (M6, M7); no ownership label on a site (M8); two small misses in the worktree (M9, M10); the file list is behind the new records (M11); and the history sweep read 312 of 1,087 commits (M12).
- For the decide rows: M2, M4, M5, M6 and M7 are evidence for IDEA-014's migration (rows 07 and 08) and for IDEA-016 row 11; M9 (an external tool owns a spec's storage) bears on row 08.
- Row 31, the synthesis, has not started. It waits on the checks and repairs above.
- Resumed: Peter said "weekly usage got reset", so the retry condition holds. Run `wf_574322c7-907` was resumed from its script, unchanged, so finished agents come from the cache. Row 21's repair is one of the cached agents; if its two late checks report issues, the main session starts one more repair for RES-090.

### Research — depth run finished, synthesis started, 2026-11-21
- The resumed run `wf_574322c7-907` finished with 71 of 71 agents done and no failure. Only 12 results came from the cache (the 11 first researchers and the critic); the other 59 agents ran fresh, among them 22 that had already finished before the limit. The main session had told Peter that all 34 finished agents would come from the cache; that was wrong, because the cache follows the order of calls.
- Subagent tokens so far: inventory 7.8 million, first depth run 12.5 million, resumed depth run 18.2 million.
- All 14 topic records are now checked three ways (sources, coverage, contrary evidence) and repaired by a researcher; each is `status: resolved`, `outcome: answered`, and `brain check` has no finding in 111 files. Issues the checks reported per row, as sources / coverage / contrary: row 17 RES-089 18/19/12; row 18 RES-093 14/13/16; row 19 RES-088 12/14/16; row 20 RES-087 20/14/13; row 21 RES-090 10/13/18; row 22 RES-092 16/20/17; row 23 RES-091 9/11/13; row 24 RES-094 18/14/23; row 25 RES-095 14/10/14; row 26 RES-096 18/20/19; row 27 RES-097 17/14/14; row 28 RES-100 12/10/16; row 29 RES-098 11/18/23; row 30 RES-099 14/9/18. Each record's "Checks" section says which issues its repair confirmed and which it rejected.
- Rows 28 to 30 were researched again in the resumed run, on the repaired records of rows 17 to 27, in the same three records.
- Row 21's repair ran after all three of its checks in the resumed run, so no extra repair is needed.
- Rows 17 to 30 stay in-progress until Peter's review (his rule: review returned research before a row closes). Their records are complete.
- Row 31, the synthesis, started 2026-11-21 on the checked records: one `brain:researcher`, three checks and one repair, as workflow `status-waits-synthesis`. Its record is found by `from: IDEA-016#31`. Retry condition if it stops: continue that record from its Next action.

### Research — synthesis returned, 2026-11-21
- Row 31: RES-101 returned from workflow `wf_b41455bd-8af` (5 agents, 1.75 million subagent tokens), `status: resolved`, `outcome: answered`, and `brain check` has no finding in 112 files. The first version was `partial`; the three checks reported 28, 27 and 23 issues (3, 4 and 4 blocking), and the repair confirmed and fixed all but three details, which its "Checks" section names.
- The record holds a 25-line summary, the item kind table, 34 differences between item kinds, a section per decide row (01 to 04, 08 to 10), the places DEC-051 and DEC-029 change, 19 disagreements between topic records, and its limits (section 8).
- Next: review RES-101 with Peter, then close rows 16 to 31 on his word, then the decide rows 08, 09, 10 and 01 to 04, one at a time. The review waits for the views work that Peter has in hand (IDEA-015).

### For the spec
- `GLOSSARY.md` gets the shared status values when this idea's format is built; until then it describes today's values.

### Already settled
- `blocked-by` lives in each idea's and spec's frontmatter, and names the ideas and specs the effort waits on (DEC-029).
- The work is its own idea, not part of IDEA-015's spec (DEC-031), widened to status and waits (DEC-050).

### Reopened
- DEC-029 rejected a Blocked by cell that names another effort's row, such as `IDEA-007#01`, when this idea covered only waits between efforts. Peter's wish that "blocked by" works the same way for every item makes it worth asking again; row 10 does. If Peter now wants it, a new DEC supersedes that part of DEC-029.

### Agent's choices, cheap and reversible
- The key is `blocked-by`, in the kebab case of the `adr-test` keys. Its value is a list of IDs, as in `evidence: [RES-073]`.
- `brain check` reports a named item that does not exist, an item that names itself, and a loop, as it does for map and plan rows.

### Evidence (RES-073)
- Idea `status:` values: define, specced, done, parked. A spec stores no status; IDEA-015 works one out from plan rows (DEC-035).
- Map rows and plan rows share the status values open, in-progress, resolved and superseded by NN, and a Blocked by column that names rows of the same file.
- A phase is not a record: it is the tasks that one checkpoint row waits on.
- Decision and research records have their own statuses (proposed, accepted, superseded; in-progress, resolved, with an outcome). They are not part of this alignment unless Peter says so.
- Waits between efforts exist today only in prose: IDEA-008 row 02 waits on IDEA-007 row 01; DEC-004's module table has a "Depends on" column, which the layout-1 specs repeat.

## Map

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | When does a named item stop blocking another: only when done, or also when parked or superseded (DEC-051)? | interview | open | 07, 31 | — |
| 02 | Who writes the field, and when: the interview, spec-driven-development, the planning skill, or only the user by hand? | interview | open | 31 | — |
| 03 | What does `brain status` do with an effort that waits on another: mark it, keep it out of "Next step", or nothing? | interview | open | 31 | — |
| 04 | Do the waits written in prose today move into the field: IDEA-008 on IDEA-007, and DEC-004's "Depends on" between the layout-1 specs? | interview | open | 31 | — |
| 05 | Which files, checks and evaluations must change for the decided format, and what does `docs/maintainers/changes.md` require? | research | open | 02, 03, 04, 07, 08, 09, 10, 34, 35, 36 | — |
| 06 | What does success look like for the aligned status and waits? | interview | open | 01, 03, 07 | — |
| 07 | Do ideas, specs, phases and rows share one set of status values, or keep their own values with a shared set of categories, as Jira maps each status to To do, In progress or Done? | interview | resolved | — | DEC-051 |
| 08 | Which status values does a spec store in its frontmatter, and which skills keep them current? | interview | open | 07, 31 | — |
| 09 | Does a phase become a record with its own status and "blocked by", or stay the tasks that its checkpoint waits on? | interview | open | 07, 31 | — |
| 10 | Does "blocked by" take one form everywhere, with IDs such as `IDEA-007` and `SPEC-003#04`, so a row can wait on another effort's row, or do rows keep row numbers inside one file? | interview | open | 31, 32, 33 | — |
| 11 | What does the migration to the aligned format add, change and remove in an existing repo? | interview | open | 07, 08, 09, 10, 34, 35, 36 | — |
| 12 | How do Brain's workspace code and CLI read, write, check and report status and waits for each item kind: idea, spec, phase, map row, plan row, decision and research record (`scripts/workspace/`, `scripts/setup/`, templates, `brain status`, `brain check`, `brain plan`, `brain new-doc`)? | research | superseded by 17 | — | — |
| 13 | How do Brain's skills, commands, hooks and protocol set, change and rely on status and waits for each item kind, and at which moments of the lifecycle? | research | superseded by 21 | — | — |
| 14 | How do Brain's evaluations, test fixtures, docs and glossary describe or test status and waits, and what would a shared mechanism break or need there? | research | superseded by 24 | — | — |
| 15 | How are status and waits used in practice in this repo's records: the values in use, waits written in prose, stale or drifting statuses, and items with no status? | research | superseded by 26 | — | — |
| 16 | Where does Brain handle status or waits: every site in the repo, with its file, item kinds and operation, found by a full read of every file and by independent sweeps? | research | resolved | — | RES-086 |
| 17 | How does Brain's code define, create and validate the stored status and wait fields of each item kind: the schemas, the templates, `brain new-doc` and `brain check`? | research | in-progress | 16 | — |
| 18 | How does Brain's code read rows and their waits: map and plan parsing, Blocked by edges, the frontier, phases, checkpoints, waves and cycles? | research | in-progress | 16 | — |
| 19 | How does Brain's code work out and report state: `brain status`, the stage, effort selection, "waiting on the user", red items and the session-start hook? | research | in-progress | 16 | — |
| 20 | How do setup and migration handle status and waits: the setup code, the layout-1 reader and migration, migrated files and the setup skill? | research | in-progress | 16 | — |
| 21 | How do the interview skills set, change and rely on status and waits: interview-me, idea-refine, prototype, domain-modeling, ask-user-question, wait-what, handoff and the researcher agent? | research | in-progress | 16 | — |
| 22 | How do the spec, plan, build, review and ship instructions set, change and rely on status and waits: those skills, the commands, the references, the personas and the vendored skills' own conventions? | research | in-progress | 16 | — |
| 23 | How do the protocol, the router, the host deliveries and the lifecycle checks carry status and waits into every session and host? | research | in-progress | 16 | — |
| 24 | How do the evals and their code create, assert and depend on status and waits? | research | in-progress | 16 | — |
| 25 | How do the glossary, the docs, the design sources and the changelog describe status and waits, and how did the handling change over time? | research | in-progress | 16 | — |
| 26 | How do this repo's ideas, decision records and research records use status and waits in practice: the values in use, drift, waits written in prose, and items with no status? | research | in-progress | 16 | — |
| 27 | How do this repo's specs, plans and task files carry state and waits in practice: migrated layout-1 files, state known only by inference, and phases? | research | in-progress | 16 | — |
| 28 | How are phases, checkpoints and waves handled everywhere: defined, stored, worked out, instructed, tested and shown? | research | in-progress | 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 | — |
| 29 | Which forms does a wait take everywhere, and where does one cross a file: Blocked by, blocking links, depends on, sources, supersedes, prose waits, cycles and the frontier? | research | in-progress | 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 | — |
| 30 | Who sets or changes each status of an idea, a spec and an effort, at which moment, and who relies on it, end to end across code and instructions? | research | in-progress | 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 | — |
| 31 | Across all topics, how does Brain handle status and waits for each item kind, where do the item kinds differ, and which facts bear on each decide row (01 to 04, 08 to 10)? | research | in-progress | 28, 29, 30 | — |
| 32 | How do tools that track work store and name a block between two items: on one end, on both ends or as one link; what do "blocks" and "is blocked by" mean in each; and how do they model a gate that several items feed? | research | in-progress | — | — |
| 33 | How do file-based knowledge and work tools, Basic Memory first, handle a link to an item that does not exist yet: the name it uses, how it resolves, what checks it, and what goes wrong? | research | in-progress | — | — |
| 34 | Does Brain get a checkpoint outside a plan: an item that several ideas or specs feed, and that blocks later items, also an item that does not exist yet? | interview | open | 32, 33 | — |
| 35 | Which end stores a block: `blocked-by` only, `blocks` only, or both, on ideas, specs, rows and checkpoints, and what keeps the two ends in step? | interview | open | 32 | — |
| 36 | May an item name, as blocked or blocking, an item that does not exist yet, and under which name and rules? | interview | open | 33 | — |

## Not yet specified
- Whether a spec takes over the waits of the ideas in its `sources:`. It becomes a row once row 02 says who writes the field.

## Out of scope
- The views that show these fields: IDEA-015.
