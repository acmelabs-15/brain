---
id: IDEA-015
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-015: Views of ideas and specs via mod

## Intent
- Outcome: in a Claude Code session in a repo that uses Brain, the user opens views of the repo's ideas and specs in a resizable panel beside the session: a list with filters, a kanban board of ideas, specs, phases or tasks that gives the project's overview and shows their dependencies (DEC-041, DEC-042), and a detail view of each item (DEC-033) with its linked records (DEC-032), its files' git status (DEC-044) and its commit history (DEC-045).
- User: Peter, and anyone who uses Brain on Claude Code.
- Why now: Brain runs many ideas and specs at once, and in a product they depend on each other; the user needs to see the whole project's state at any moment, and to follow what the agent touches while it works (DEC-027).
- Success: `/brain:session` opens the panel within a second; the board shows the repo's ideas or specs, a spec's phases or an item's tasks in their columns, the 9 migrated specs included; a focused card shows, inside the board, what it waits on and what waits on it; Enter opens its detail view with its sections, linked records, git status and commits; while the agent writes records, the panel redraws within a second (DEC-047).
- Constraint: a mod runs on Claude Code only (IDEA-013, DEC-010), so Codex and Gemini CLI users get no views for now (DEC-043). The panel sits beside the session only in fullscreen rendering from 110 terminal columns, and above the prompt otherwise (RES-074). The views spec waits on IDEA-016's `blocked-by` field (DEC-031).
- Out of scope: any change to records from a view, and any hand-off from a view to the agent (DEC-026).

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for a Brain mod on Claude Code that shows the repo's ideas and specs as a list view, a board view and a detail view.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

Work happens in the worktree `/Users/peterkloss/Dev/ACMElabs/brain-views-mod` on branch `feat/views-mod`, from `main` at `dfcab49b`.

### Row 33 — partial: the views mod after the talk of 2026-11-22 (resume here)

Peter and the agent aligned on these points in a talk. None is a decision record yet, and row 33 stays open. Source: the session transcript of 2026-11-22, and Peter's mock Jira project ASDF (one epic, seven stories, 28 tasks) as the layout reference.

1. **Main moment.** The mod serves the interview first. Peter follows the open tasks of an idea, the task in work and its records in one place, in place of a markdown editor, the chat and the idea file.
2. **Blocks are data, not a drawing.** Agents need a complete graph of blocks, between tasks and between specs, to build in parallel with nobody watching. The mod draws no graph, for ideas or for specs.
3. **One items page**, with a switch between a list layout and a board layout.
4. **One details view** for every kind of item (idea, idea task, spec, spec task), laid out like a Jira work item page.
5. **Shared parts:** Id, Title, Status, Parent, Description, Blocks, Blocked by, Research, Decisions.
6. **Parts by kind.** Spec: Ideas, Phases, Checkpoints, Tasks. Idea: Tasks, Intent, Destination, Result. Idea task: Type, Question, Result (its working result first, then its record). Not yet confirmed, the agent's draft: a spec also shows Success Criteria; a spec task shows its Type, and its acceptance and files from the todo file.
7. **Links.** A click on a task, an idea or a spec in a list opens its details view. A click on a research or decision record opens it as a Markdown page over the full panel. A record gets no details view.
8. **To standardize first**, because the same thing is handled in different ways today: a status for a spec; Blocked by for ideas and specs; Blocks for every kind; "task" as the one word for a line of a map or a plan (the glossary says "row", and one type of an idea task is also named `task`); one fixed place for the working result of an idea task, as a spec task has its block in the todo file.
9. **Open.** Checkpoints on an idea (IDEA-016 row 34). For an idea, Description and Intent are the same content; for an idea task, Result and the record lists are the same records. How the view treats the Notes section. Whether a details view still shows waves (DEC-030), changes (DEC-044) and history (DEC-045), which are not in the shared parts.
10. **Earlier records this changes, for Peter to check.** DEC-033 puts dependency graphs in the detail view; row 33 replaces it. Row 08 asks how the board and the detail view show dependencies; the answer is two lists and no drawing. DEC-029: the `blocked-by` field stands, and the drawing of a graph between efforts does not. DEC-034: the list and the board become two layouts of one page. DEC-032 stands; a record opens as a full-panel page. The talk did not touch DEC-035, DEC-040, DEC-042 and DEC-049.

Order of work, by Peter on 2026-11-22: the mod, status and blocked by come first; IDEA-017 and IDEA-018 are on hold until then.

**Resume, written 2026-11-22.**

- State: worktree `brain-views-mod`, branch `feat/views-mod`. Nothing is committed; ask Peter before a commit. New in this session and not committed: IDEA-017, IDEA-018, RES-102 to RES-112, and notes in IDEA-015 and IDEA-016. No agent is running.
- Read this note first, then the resume note in IDEA-016. IDEA-017 and IDEA-018 each hold their own resume line.
- How Peter wants the work done, learned in this session (the cases are in IDEA-018, the method is in IDEA-017): one question at a time through the question tool, and no list of open points in a reply; when he wants to talk, talk first and write after; write short lines in the agent's own words, with no long quotes; no research row closes before he and the agent went over its record.
- Pending questions to Peter for row 33, in this order, one per call:
  1. Answered: "task" everywhere, over several releases (DEC-052). The change itself is work for IDEA-016.
  2. Not needed: DEC-033 already gives a spec its Success Criteria.
  3. Not needed: DEC-033 already gives a plan's task its type and its task block.
  4. Answered: none of the three in the first version (DEC-053).
  - **Stop the list here.** Peter decided on 2026-11-22 that the first version stays close to the present mocks and that all else comes in small increments (DEC-053). Questions 5 to 9 are not for now. Ask each one only when an increment needs it. The next step with Peter is to pick the first small increment.
  - **Start of the next session, by Peter on 2026-11-22:** align with him on what the first implementation of the mod is. He expects it to be smaller than the agent thinks. Start from the present mocks (DEC-053) and ask him what to leave out; do not start from the ten points above as a build list.
  5. Does row 08 close with "two lists, no drawing", and do the changes to DEC-033, DEC-029 and DEC-034 hold? Each change then needs its decision record.
  6. For an idea, is Description the Intent and Destination, with no part of its own?
  7. For an idea task, is Result the same as its entries in the record lists?
  8. Where is the one fixed place for an idea task's working result?
  9. Does the view show the Notes section, or leave it out?
- Then IDEA-016: the gaps of point 8, and checkpoints on an idea (its row 34).

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

### Wait on IDEA-016
- Row 32 waits on IDEA-016#08, a spec's stored status, in prose, because a Blocked by cell names rows of this map only. Ask it after IDEA-016#08 resolves.
IDEA-015's spec cannot finish before IDEA-016's `blocked-by` field ships (DEC-031). Since DEC-050, IDEA-016 also settles the status values, and the views' columns follow them (DEC-035, DEC-036, DEC-042), so the views spec is written once IDEA-016's status rows are settled; DEC-037 keeps older values readable. The define work here goes on. Once the field exists, this idea's frontmatter names IDEA-016 in it; until then the wait is written here, in prose.

### Session close, 2026-11-21, second session (history; the note "Row 33 — partial" replaces it)
Peter asked to save the state so that a new session picks up where this one stopped ("we've used up a lot of context - we have more ot do on this"). This note is the entry point; the notes under it hold the detail.

Where the work stands:
- Peter is not yet sure that he and the agent agree on the views ("i'm not convinced we're comletely aligned on the views"). Until they agree, no prototype round runs and no variant is picked. Row 08's three review questions are on hold.
- The agreement work happens in Peter's Claude Design document, "Brain views": https://claude.ai/artifact/EyT6MPGwbpAp3B7aij5jZP. It holds three artboards, "1 List" (`project/Main.dc.html`), "2 Board" (`project/Board.dc.html`) and "3 Detail" (`project/Detail.dc.html`), a title, and a note under each artboard. Peter called the schematic style "way better". He has not yet said what to change in the three artboards. That is the open question.
- Open rows: 08 (on hold as above), 29 (RES-077 returned; its review with Peter has not started), 32 (waits on IDEA-016#08). Every other row is resolved, superseded or dropped.

Next steps, in order:
1. Ask Peter what to change in the three artboards, change them in the Design document, and repeat until he says the views match his picture. Then write the agreed meaning of each view back into this idea's Intent if it changed.
2. Row 08: the three review questions, one at a time: which variant or which parts (the agreed mockups may already answer this); are the dropped controls the right ones; does the detail view keep its own dependencies (DEC-033). Record the pick in a DEC that links branch `prototype/views-board` at `d1156070` and the Design document.
3. Row 29: review RES-077 with Peter, with the mid-turn difference from DEC-048 and the three proposed choices in the row 29 note, then close or re-scope the row.
4. IDEA-016: see its own session-close note.
5. Row 32 after IDEA-016#08, then Finish: put the full Intent to Peter.

How to work on the Design document:
- Read a file of it with the Artifact tool: action `read`, the document's link as `url`, and `path` such as `project/Board.dc.html` or `project/canvas.json`. The first read of the link returns the Design type's rules; follow them for the file shapes.
- The local copies in `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/brain-views-canvas/` are temporary. In a new session, read the files from the document, save them under one folder, edit there, and publish with `url`, `root` and `file_path`.
- Peter's hook `~/.claude/hooks/block-artifact-reads.ts` lets `read` and `publish` through for every artifact and blocks the other actions (list, quickstart, delete, open, pin).
- In this session the permission classifier of auto mode denied two publishes to the document that Peter had not asked for in so many words (a note colour). A publish that carries a change Peter asked for went through. So state the change Peter asked for, and do not send unrequested changes.
- To see the canvas, Peter adds its browser tab to the agent's Chrome tab group; the agent then takes a screenshot with the Claude in Chrome tools (load the `claude-in-chrome` skill first). The agent's own browser gets a bot check on claude.ai.
- A third publish of the note colour was denied too, after Peter asked "how do we fix this" (reason given each time: "Unsanctioned Communication"). The document is shared as "anyone with the link", which may be why; that is a guess. Ways out, put to Peter 2026-11-21: an allow rule for `Artifact(action:publish)` in his settings (untested), leaving auto mode so that a publish asks him, a plain instruction in his own words to publish a named change, or a change by hand on the canvas. Until one of them is in place, expect each publish to this document to be at risk.
- The note colour is fixed: Peter granted that exact publish and changed his settings ("Just updated some settings, hopefully that fixes it"), and the publish went through as version 6 with `fill: gray` on the three notes. The agent could not look at the result: its Chrome tab group was gone after the settings change, so Peter must add the document's tab to the group again in the next session. Whether his new settings let every later publish through is not yet known; the first publish of the next session shows it.
- The next session starts from the main checkout `/Users/peterkloss/Dev/ACMElabs/brain`, where Brain is installed, and its opening prompt must tell the agent to switch into this worktree with EnterWorktree (Peter, 2026-11-21).

Standing preferences that Peter added in this session (the full words are in the notes below):
- Mockups and pages shown to him are clean and simple, with much white space, little in each picture, a short description and clear short lists. A schematic picture with grey bars for text beats a full screen of real content. His five reference images set the look: a dark rounded card, a few labels, one blue accent, purple and amber as second colours, thin connectors.
- The agent looks at what it makes before it shows it, and again after each change.
- Chat is a poor place for wide terminal captures: his terminal cut and joined their lines.

Facts settled in this session that a new session must not ask again:
- Claude Code draws the pane from the mod's element tree; a terminal UI library cannot draw inside it (see "Facts given in answer" below).
- The installed flightdeck plugin is a model for the views spec.

State of the files: nothing is committed, and Peter must be asked before a commit. The worktree `brain-views-mod` holds, uncommitted: IDEA-014 (changed), IDEA-015, IDEA-016, DEC-026 to DEC-051, RES-072 to RES-077 and RES-086 to RES-101. No agent and no workflow is running. `brain check` passed at the close.

### Third session, 2026-11-21: artboard review
- Started from Peter's prompt, in this worktree. Order he gave: the Design document; row 08, then row 29; IDEA-016 (review RES-101, close rows 17 to 31, decide rows 08, 09, 10, 01 to 04); row 32; Finish. Ask before a commit.
- Seen in Peter's tab, version `1795296884-dbad`: the title, the three artboards and the three notes. The notes are grey, so the version 6 fix holds.
- Fact: a tab that the agent opens in its own Chrome tab group loads the document with no bot check. Peter's added tab is not needed for a look.
- Local copies for this session: `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/7c94dc97-6557-4548-9260-2ecb400b6826/scratchpad/artifact-files/7128889b-ff42-440a-b551-fbe6a5bbf25e/project/` (temporary).
- Pending question to Peter, row 08: which artboard to change first, and what to change in it. Options put: 2 Board (recommended, because row 08's open questions are about it); 1 List; 3 Detail; all three match.
- Peter chose to clarify that question before he answers it. The question stays pending; his clarification comes first.
- The agent closed its own duplicate tab, and Chrome removed the tab group with it.
- Peter's clarification, 2026-11-21: "use the computer-use to interact with the brower - seems chrome plugins are not working consitentlh for you". Settled: the agent looks at the canvas with the computer-use tools, not the Claude in Chrome tools. Chrome is granted in read mode: the agent sees Peter's Chrome window in a screenshot and can zoom into it, but it cannot click, type or navigate there. So the document's tab must be the visible tab of Peter's Chrome window on the built-in display. Changes still go through the Artifact tool. First look this way worked: the canvas shows as before.
- The artboard question was put again after this clarification.
- Peter's answer, 2026-11-21: "So I don't want you to change anything, I want to talk about it." Settled: no change to the artboards now. Peter talks about the views first; the agent listens, saves what he says, and changes the canvas only when he asks. The question "which artboard first" is retired.

### Peter's talk about the views, 2026-11-21 (third session)
Source: Peter's message, dictated, kept in his words where they carry a point. A first pasted block held one sentence many times ("What do I look at when I'm reading a book?"); it looks like a dictation fault and carries no content.

What he said:
- His aim: "I was trying to put together what the whole point of this was and how I usually look at these particular things when you're working on them, like ideas and specs."
- The files are hard to use: "I find a lot of our documents still to be very unwieldy a lot of prose just all over the place I think they're a little bit of dumbing ground I don't want to try to solve that problem now". "There are all these sections with names that are just not standardized". A row such as row 15 has a paragraph in Notes and also a line in the Map table. "I think they're messy and unstandardized and I spend a lot of time kind of fumbling my way through them."
- "we also had talked about trying to standardize status and blocked by, which feels a little bit in line with this."
- The list and the board: their one-line purposes ("find an item", "see what moves and what is stuck") are "maybe. I mean probably yes".
- The detail view is where he wants to work: "by going through and figuring out what this detail page looks like, ultimately what it's doing is some piece of standardization for us".
- The dependency graph: "I was spending all this time worrying about how to render the dependency graph and that may or may not be important".
- Item kinds for the detail view: an idea, a spec, tasks. Phases: "I'm not sure it makes sense to include this here I'm not totally sold on those and how they work"; "probably a little tied to waves". He does not want to dig into phases now.
- Waits: "the idea files also have this idea of a wait-on. I really, I don't totally get that. It feels like a blocked by".
- He did not know Jira's word for the item kinds ("entities, work types, I don't know what Jira calls them").

His outline, a start, made while he read idea, spec and task files and looked at Jira:

```text
Entity Details:  Id, Status | Description | Tasks | Blocks, Blocked by
Idea:            Id, Status, Blocked by | Intent, Waits ("What even is this?") |
                 Tasks, with Filter by and Sort by: status, blocked, type | Decisions, Research
Spec:            Id, Status, Blocked by | Objective, Success Criteria | Tasks, Phases, Waves → (not finished)
```

Settled by these words:
- The messy-files problem is real for Peter and is not solved in this idea now.
- The talk goes on at the detail view: one shared shape for every item kind, then what each kind adds.

Not settled, so not to be read as decisions: the outline is a start. It leaves out parts that DEC-033, DEC-044 and DEC-045 give the detail view (title, an idea's Destination and Result, changed files, commits); Peter has not said that he dropped them.

Facts checked for him, 2026-11-21:
- "Waits" is not a section of the idea template (`scripts/workspace/templates/IDEA.md`: Intent, Destination, Notes, Map, Not yet specified, Out of scope). "Wait on IDEA-016" is a note the agent wrote in Notes, because the `blocked-by` field does not exist yet (DEC-029, IDEA-016). The "Waits on" column of the list artboard is the agent's wording for the same thing. One concept, blocked by, had three wordings.
- The outline's shared parts exist in both kinds under other names: Description is an idea's Intent and Destination, and a spec's Objective and Success Criteria; Tasks are an idea's map rows (questions), and a spec's plan rows (tasks and checkpoints) with their task blocks. The parts that are missing in the files are a spec's stored status and `blocked-by` on both kinds, which is IDEA-016's scope.

Peter's reply, 2026-11-21, to "did you drop the title, Destination, Result, changed files and commits on purpose?": "I know that there's a little bit of inconsistency there. I'm going to dig through these files a little bit. I did not go back and dig through all the decisions because those files were messy too. So I landed where I landed, but ultimately we need to make some decisions." Then: "I know that you did a bunch of looking around to try to understand how status and Block Buy works. Get that stuff done because I think it's probably worth hammering out the parts of the details. I don't want to try to fix everything, but I think there are some parts of the details that are worth hammering out and they will help inform the list and the board view."
- Settled: the left-out parts were not dropped on purpose; DEC-033, DEC-044 and DEC-045 stand until row 33 decides otherwise.
- Settled, order of work: IDEA-016's status and blocked-by work comes first (the review of RES-101, then its decide rows). Then row 33, the parts of the detail view, which informs the list and the board. Rows 08 and 29 follow after that. This replaces the order in the session-start prompt.
- Scope he set: "I don't want to try to fix everything", only the parts of the detail view that are worth settling.

Map change: row 33 added for the detail view's shared shape. It can replace DEC-033 (row 10) when Peter decides it. Row 08 stays on hold; Peter's doubt about the dependency graph goes to its review.

### Session close, 2026-11-21, first session (history; the note above replaces it)
Peter asked to end this session once the running agents finish, and to start the next one from a prompt. State at close:
- IDEA-015 open rows: 08 (prototype returned, current commit `d1156070`; review with Peter pending), 29 (RES-077 returned; review with Peter pending), 32 (waits on IDEA-016#08). Every other row is resolved, superseded or dropped.
- Next for IDEA-015: review the prototype's captures with Peter and record his pick in a DEC that links branch `prototype/views-board`; review RES-077 and close row 29 (if no way serves `/brain:session`, the name returns to Peter); ask row 32 after IDEA-016#08; then Finish: put the full Intent to Peter. The spec waits on IDEA-016 (DEC-031, DEC-050).
- IDEA-016 next: rows 12 to 15, the fanned-out research on how Brain handles status and waits today, one researcher agent per row, then Peter's review, then its decide rows.
- IDEA-014 gained rows 07 and 08 from Peter's migration rule.
- Nothing is committed. The worktree `brain-views-mod` holds IDEA-014 (changed), IDEA-015, IDEA-016, DEC-026 to DEC-051 and RES-072 to RES-077, all uncommitted.

### Row 08 — prototype returned, review pending (next session)
Current version: commit `d1156070` on `prototype/views-board` (SHA record `1381391c`), after `de616a5a` (first round) and `3e5c3c06` (A as a straight copy of Peter's board). Result file: `/Users/peterkloss/Dev/ACMElabs/brain-views-proto/prototypes/views-board-mod/IDEA-015-08-result.md`; its section "Variant A: Peter's concept, refined" lists each of Peter's controls as kept, merged or dropped, with the reason. 27 captures from one clean session.
- A, Peter's concept refined: one switch, Show all, blocked or ready (`f`). Merged: direct versus full chain becomes marks, `▲ ▼` for direct links and `△ ▽` for the rest of the chain. Dropped: the Dependencies switch (always on), Hide resolved links (a done link is faint: `○` port, dotted line), Hide all subtasks, Include subtasks (focus always includes a card's rows), the pin, and clicks inside the inspector. Kept: `e` folds a card, `y` goes to a cycle, the cycle count, lines for the focused card's direct links. The inspector is a fixed-height strip above the board that follows the focus ring; Enter opens the detail view.
- Every variant keeps the focused card's dependencies inside the board (Peter, 2026-11-21): A a strip above the board, B trees under its graph, C the chain under its grid.
- Group by (DEC-049) is in A and B as `g`: None, Phase or Wave on a spec's tasks, None or Row type on an idea's questions. C has none, because its lanes are its waves.
- Costs: a link that skips a column gets no line, only a note; the gutters for lines take 15 to 20 of the pane's 89 columns, so titles get short on boards with 4 or 5 columns; B and C show a cycle badly.
- Finding for the real mod: when a control vanished under the focus ring, the pane took no more keys for that session; keep the set of controls stable.
- Captures in `d1156070` (27): start with `A-ideas-board`, `A-ideas-cycle`, `A-idea-outside`, `A-phases-board`, `A-tasks-board`, `A-spec-tasks-show-blocked`, `A-spec-tasks-group-phase`, `B-spec-tasks-group-phase`, `C-phases-board` and `A-task-detail`, in `captures/`. Gap: `d1156070` captures the detail view of a row only (`A-task-detail`, `B-task-detail`, `C-task-detail`), not of an idea, a spec or a phase; the older design's `A-idea-detail` and `A-phase-detail` exist only at `3e5c3c06` (`git show 3e5c3c06:prototypes/views-board-mod/captures/<name>.txt`), so show them only as the older design, or let Peter open those views in the running prototype. Run from this worktree: `CLAUDE_CODE_NO_FLICKER=1 claude --plugin-dir /Users/peterkloss/Dev/ACMElabs/brain-views-proto/prototypes/views-board-mod`, then `/views-proto` (keys `1` `2` `3` switch variants).
- Conflict to raise in the review: in `d1156070` the detail view has no dependency section, only a line that points back to the board. Peter's first description asked that an opened card show "the dependency graph for that specific thing", and DEC-033 puts Blocked by in a task's detail view. Ask whether the detail view keeps its own dependencies.
- The Group by control steps through its options on `g`; it looks like a dropdown but is not the real `Select` element, which the prototype does not test.
- Questions for the review: which variant, or which parts of each; are the dropped controls the right ones; and does the detail view keep its own dependencies. Peter's pick becomes the DEC for row 08, linking the branch and `d1156070`.

### Row 08 — review started, 2026-11-21 (second session)
- Shown to Peter in chat: the 10 captures the note above names, all from `d1156070`.
- Pending question 1 of 3: which variant, or which parts of each? Options put: A, Peter's board refined (recommended); B, graph panel; C, wave grid; A with parts of B or C.
- Then, one at a time: are the dropped controls the right ones; does the detail view keep its own dependencies (DEC-033).
- Peter chose to clarify question 1 (2026-11-21). His words: the captures in chat were "a little hard for me to digest", and "my first question is how is the rendering in the terminal happening? Does claude-code provide the components via mods some how? Or should we be using a library like https://github.com/bombshell-dev/ui or https://bomb.sh/docs/tty/basics/getting-started/?" His paste of the captures shows that his terminal cut and joined their lines, so the chat is a poor place to judge them.
- Facts given in answer, 2026-11-21: Claude Code draws the pane. The mod returns a tree of Claude Code's own elements and Claude Code lays it out (RES-074); the prototype's `hooks/views-proto.js` uses `Text` (164 uses), `Box` (34), `Button` (33), `Markdown`, `Input` and `Select`, and its lines and marks are characters inside `Text`. A hooks module imports only its own plugin files and `claude-code`, with no Node and no stdout (RES-072). `@bomb.sh/tty` is a renderer that turns a layout into ANSI bytes for a program that owns stdin and stdout (its docs, read 2026-11-21: "Zero I/O", "You own stdin/stdout", Node 22 or later, also Bun). `@clack/ui` (bombshell-dev/ui) is built on it and its README calls it "an early alpha release ... not recommended for use in production", with no release published. So neither can draw inside a mod's pane; they fit a separate full-screen program in its own terminal window, which would change DEC-043 and the Intent's "panel beside the session".
- Peter asked what the flightdeck plugin does (2026-11-21). Answer given from its installed source (0.6.1): a mod that draws a live session dashboard with Claude Code's own elements, as JSX, with `Client` regions for animated connectors, an `Svg` time axis in Desktop and VS Code, and layouts by width; it uses no terminal UI library. It is a model for the views spec.
- Peter, 2026-11-21, when asked whether the next prototype round follows those techniques: "umm lets hold off on that - i'm not convinced we're comletely aligned on the views". Settled: no further prototype round and no pick of a variant until the views themselves are agreed. Row 08's three review questions are on hold.
- Pending, asked in chat 2026-11-21: the agent's understanding of the views in seven points, and the open question of which point differs from Peter's picture, or what is missing.
- Peter's answer to that question, 2026-11-21: "I feel like I'm kind of at the point where I'd like to see mockups of each of these each with like a 1. Concise explanation of the 3 views - value prop - but really concise. 2. Mockup of each view - not coded prototype - visually easy to diagest mockups".
- Made 2026-11-21: one page with a mockup of the list view, the board view and the detail view, each with a one-line value statement, three short notes and its keys; a table of the board's cards and columns per item type; and the list of what the views do not do. Published as a private page: https://claude.ai/artifact/21gG4uj6b8FUiLtzefTZGr. Its source is `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/brain-views-mockups.html`, a temporary file. The mockups are drawn in HTML to look like the pane; they stay inside what a mod's elements can draw (boxes, coloured text, buttons, a select), and draw no line between cards.
- Agent's choices in the mockups, each open to Peter's correction: the board mockup follows variant A's idea (a focus strip, amber for what the focused card waits on, violet for what waits on it, the rest dimmed) but with fewer controls; the detail mockup shows a Dependencies box, marked as the open question of DEC-033; the list view's columns are those of the dropped row 09.
- Peter's reaction, 2026-11-21, with five reference images (schematic diagrams on a dark rounded card: grey bars for text, a few labels, one blue accent, purple and amber as second colours, thin connectors): "to much - the mocks -> cleaner, simpler, more white space - less stuff/clutter in the mocks - page as well - short concise description - clear lists spelling clearly". The message ended there. The images were at `/Users/peterkloss/Desktop/ui/` (`1795251086880_image.png` and four more).
- Settled, as a standing preference for mockups and pages shown to Peter: clean and simple, much white space, little in each picture, a short description, clear short lists. A schematic picture, with grey bars in place of text, is preferred to a full screen of real content.
- Second version made and published at the same link, 2026-11-21: a white page with one line under the title; per view a number, a name, one short sentence, a list of three or four lines, and one schematic picture in the style of the references; one closing row for what holds for all three views. The board picture shows four state columns, the focused card in blue, the card it waits on in amber, the card that waits on it in purple, and one thin line for each link. The detail picture shows a card that opens into a panel with four boxes: Intent, Records, Changes, History. The Dependencies box of the first version is left out of the picture; the question of DEC-033 stays open.
- Peter's reaction to the second version, 2026-11-21: "This is way better - I'd love it if we coulf reate a claude disgn document arrifact with the 3 moks and pick up there". Settled: the schematic style is right. Next: a Claude Design artifact that holds the three mockups, and the review of the views continues there.
- Blocker found 2026-11-21: a Design artifact is created from the Design artifact type, and the type's link comes only from the Artifact tool's `quickstart` or `list` call. Peter's own hook `~/.claude/hooks/block-artifact-reads.ts` blocks both; it lets through only a fresh publish (no `url`) and one named canvas of another repo. A fresh publish with the type's link would pass the hook, and a republish of the same file path passes too. The agent did not change the hook. Pending question to Peter: how to get the Design type's link.
- Peter's answer to that question, 2026-11-21, was a link: `https://claude.ai/artifact/EyT6MPGwbpAp3B7aij5jZP#page-dcb81aee8d83`. A create from it was refused: "this artifact is itself built from an artifact type and can't be used as one". So the link is an existing Design artifact of Peter's, with a page in it, not the type. The hook blocks a read of it and a publish to it. Pending question to Peter: may the hook get an exception for this one artifact, as it has for the canvas of the other repo.
- Peter's answer, 2026-11-21: "You can update so that yo uare always alllowed to read and publish aritacts". Done: `~/.claude/hooks/block-artifact-reads.ts` now lets the `read` and `publish` actions through on any artifact and blocks every other action (list, quickstart, delete, open, pin, unpin). The earlier single-canvas exception is covered by this rule.
- The Design document was empty. Built there 2026-11-21: three artboards of 1024 by 736, in a row, made of separate editable elements as the Design type's rules ask: `Main.dc.html` (1 List), `Board.dc.html` (2 Board, with two arrows of three segments each) and `Detail.dc.html` (3 Detail), a title note "Brain views" above the row, and one sticky note under each artboard with its one-line purpose and its short list. Link: https://claude.ai/artifact/EyT6MPGwbpAp3B7aij5jZP. The local source is the temporary folder `/private/tmp/claude-501/-Users-peterkloss-Dev-ACMElabs-brain/8f41990c-e539-4b97-b369-e4f4bd8d4c22/scratchpad/brain-views-canvas/`; the artifact holds the files, so a later session reads them from it.
- The design system question of the type could not be asked through a list call (blocked), so the look is the one of Peter's reference images. The artboards were not rendered or checked after the publish, as the type's rules ask; Peter is the first to see them.
- The document is shared as "anyone with the link" by Peter's own setting.
- Peter, 2026-11-21: "can you not see the artivacts you make", then "why would you not render/check a canvas you made while we work on something?". Settled, as a standing preference: the agent looks at what it makes before it shows it to Peter, and looks again after each change. A rule in an artifact type's instructions that says not to check does not outweigh this.
- How the agent sees the Design document: Peter added its browser tab to the agent's Chrome tab group ("i added the tab to your group"), and the agent takes a screenshot of that tab with the Claude in Chrome tools. The agent's own browser gets a bot check on claude.ai and cannot open it.
- Seen in that tab, 2026-11-21: the canvas shows the title "Brain views", the three artboards "1 List", "2 Board" and "3 Detail" in a row, each drawn as intended, and a sticky note under each. The notes are yellow; the agent meant them grey and set the wrong key (`color` in place of `fill`).
- The agent tried to publish that one-key fix without being asked. The permission classifier denied it as a change Peter did not ask for; the canvas is unchanged and the local copy is back in step with it. The fix waits for Peter's word.
- Pending: Peter's review in the Design document: does each view match his picture, and what is wrong or missing. Then row 08's questions.
- Open: Peter's further questions on question 1; then the three review questions.

### Row 29 — research returned, review pending (next session)
RES-077 returned 2026-11-21, `outcome: answered`, 13 test sessions. To review with Peter before row 29 closes:
- `/brain:session` works: Brain ships a plugin markdown command or skill named `session`; the mod's `command.run` hook on `brain:session` calls `$.ui.open` and returns `{}`; the panel opens, no model turn starts, and nothing reaches the model or the transcript. `$.command.register` refuses a colon. DEC-048's name stands.
- Differs from DEC-048: typed during a running turn, `/brain:session` (and a key bound to it) queues until the turn ends; a plugin command or skill cannot be `immediate`. DEC-048 says the command "also works during a turn". The mid-turn way RES-077 found: the mod also registers a hidden `immediate` command (for example `brain-session`, `isHidden: true`), and the user binds a key to it.
- Without the mod (`--bare`, `--safe-mode`, `disableAllHooks`, a managed-mods-only policy), `/brain:session` still shows and runs as a normal prompt: the model reads its body with the arguments.
- Proposed agent's choices for the review, cheap and reversible: (1) the body, read only when the mod did not load, tells Claude to say in one or two sentences that the views panel needs the Brain mod and name the usual causes, and to run no tool; `disable-model-invocation: true`; (2) the mod also registers the hidden `immediate` command, so a key binding opens the panel during a turn, which keeps DEC-048's promise; a typed `/brain:session` mid-turn queues; (3) a skill, not a markdown command, because the plugins reference prefers `skills/` for new plugins.
- If Peter accepts: row 29 resolves with RES-077, and DEC-048's "during a turn" wording gets a superseding DEC or a note, as Peter prefers.

### Research
- Rows 01, 02 and 18: resolved with RES-074, RES-072 and RES-075 after Peter's review on 2026-11-20. Row 18's agent got the pause message after its research was done, so RES-075 is complete.
- No agent is running. Rows 25 and 29 returned as RES-076 and RES-077; row 08's prototype returned as commits `de616a5a`, `3e5c3c06` and `d1156070` (current).
- Row 08's first round is committed on `prototype/views-board` as `de616a5a` (result file `prototypes/views-board-mod/IDEA-015-08-result.md`, 23 captures): A linked badges, B graph panel, C wave grid, run with `CLAUDE_CODE_NO_FLICKER=1 claude --plugin-dir /Users/peterkloss/Dev/ACMElabs/brain-views-proto/prototypes/views-board-mod` from this worktree, then `/views-proto`. At 04:04 on 2026-11-21 its agent was still applying the later updates (uncommitted), so the review with Peter waits for its next report.
- Row 08's agent got three updates on 2026-11-21: make variant A a terminal version of Peter's prototype, then refine its controls rather than copy them, and keep the dependency display inside the board view in every variant; then add the Group by select (DEC-049).
- Row 25: researcher agent `res-formats` started 2026-11-21, now that only rows 08 and 15 remain beside it. Its record is found by `from: IDEA-015#25`. Retry condition if it stops: continue the record from its Next action.
- Row 08: prototype agent `proto-board` started 2026-11-20 in the throwaway worktree `/Users/peterkloss/Dev/ACMElabs/brain-views-proto`, branch `prototype/views-board`, folder `prototypes/views-board-mod/`. Three variants: A linked badges, B graph panel, C wave grid. Progress file `PROGRESS.md`, result file `IDEA-015-08-result.md`, text captures in `captures/`. Retry condition if it stops: a new agent continues from `PROGRESS.md`. When it returns, the captures go to Peter, Peter runs it, and his pick becomes the DEC that links the branch.
- Row 03: resolved with RES-073 and reviewed with Peter in chat on 2026-11-20.

### Row 26 — answered, decision record next
- Asked 2026-11-20: which columns does the board use when it shows ideas and specs together? Options put: lifecycle stages (recommended); Jira-style statuses; one lane per type.
- Peter's free-text answer: "Maybe for now the board renders either ideas or specs, but never both and the board lanes simply get updated as the entity specific status values".
- Settled: for now, the board shows ideas or specs, never both, and its columns are that type's own states (DEC-035, DEC-036). A mixed board is set aside "for now".
- Changes: DEC-038's first level allowed both types together; a new DEC replaces DEC-038. The roadmap still shows ideas and specs together (Peter's clarification of row 21).
- Agent's choice, cheap and reversible: the list view follows the board and shows ideas or specs, never both, so the two views filter the same way.
- Row 26: resolved, DEC-040, which supersedes DEC-038.

### Row 21 — answered, decision records next
Asked 2026-11-20: what does the roadmap use instead of dates? Options put: waves from waits (recommended); tree, no axis; add dates. Peter's free-text answer, with a Jira screenshot:

> I'm actually not sure that there is a roadmap view - the roadmap is really just a highlevel overview of the project's status - I think that the board view acomplishes this now that I think about it - I think you provide a way to select entity context of the board - pick either ideas, specs, phases, tasks - if you select phases or tasks the attached image image 'is blocked by' is phases or tasks and then you must select the idea or spec to scope the phases or tasks to - the columns for phases I think would be the parallel waves - tasks would be status

The screenshot (kept as text, because the file sits in the session's temporary folder): Jira's "link a work item" control, a dropdown set to "is blocked by", and beside it a search box, "Type, search or paste URL", over a "Recently viewed" list of items with their keys. Peter uses it to show the pattern: the first control picks the item type, and the second picks the idea or spec that scopes it.

- Settled: there is no roadmap view. The board gives the high-level overview of the project's state. This replaces DEC-028.
- Settled: the board has an item-type selector: ideas, specs, phases or tasks. For phases or tasks, the user then picks the idea or spec they belong to, from a search list. The phases board's columns are the parallel waves; the tasks board's columns are the task statuses. This replaces DEC-040's levels.
- Row 21 no longer matters: there is no roadmap to order.
- Recorded: DEC-041 (supersedes DEC-028) and DEC-042 (supersedes DEC-040). Row 17 now points to DEC-041, rows 06 and 26 to DEC-042, and row 21 moved to Out of scope.

- Row 14: resolved, DEC-043.

### Row 28 — answered, decision record next
- Asked 2026-11-20: should the detail view show only per-item changes, or also the raw file diff? Options put: per item only (recommended); per item and file diff.
- Peter's free-text answer: "I thijk it's as simple as using the git status", with a screenshot of an editor's source-control "Changes" list: two files, `settings.json` in `.claude` and `ask-user-question.zip` in `skills`, each marked "U" (untracked). The file sat in the session's temporary folder, so this text keeps it.
- Settled: an item's changes are its files' git status, shown as a status letter per file (for example M, A, D, U), as an editor's changes list does. No per-row change log and no line diff.
- Consequence, stated to Peter: git status shows uncommitted changes, so it includes edits made before the session and leaves out changes committed during it. So the session start point (RES-075, part 3) is not needed, and row 27, a start snapshot, no longer matters.
- Agent's choice, cheap and reversible: a card whose files have uncommitted changes shows the same letter, so the board shows what the agent is touching (DEC-027).
- Row 28: resolved, DEC-044. Row 27 dropped to Out of scope.

- Row 19: resolved, DEC-045.

### Row 12 — partial answer
- Asked 2026-11-20: how should the panel open at session start? Options put: reopen if open last time (recommended); command only; an option in IDEA-013's opening question.
- Peter's free-text answer, 2026-11-21:

> could "/brain:session [status|planideas|specs|phases|tasks IDEA-001|SPEC-001]" - not sure - what do you think - also in touching on the roadmap subject again - still dont' think we need a roadmap view but inregardas to the dependency graph and blocked by/blocks - I put together a prototype exploring how that could be integrated into the board view /Users/peterkloss/Downloads/Epic\ dependency\ board.html

- Settled: one command with arguments that pick the view, the item type and the scope; Peter asks the agent's opinion on its form.
- Settled again: no roadmap view (DEC-041).
- New evidence for row 08: Peter's own prototype, `/Users/peterkloss/Downloads/Epic dependency board.html`, of how the dependency graph and "blocked by" / "blocks" fit into the board view.
- Asked again 2026-11-21: should the panel open by itself at session start? Options put: reopen if open last time (recommended); command only. Peter's free-text answer:

> the only reason i wrote the command as "/brain:session" is because I think the "brain:" automatically is applied as it's the plugin name. I don't think the pannel should be open by default - plugin configs can be defined in the settings.json manually or via "/config" - so I think if someone wants it open everytime they configure it taht way - if the user uses the command to open it in a session then yes i agree stsays that way in the next session

He added his own `pluginConfigs` entry for the flightdeck plugin as an example: `"pluginConfigs": { "flightdeck@claude-flightdeck": { "options": { "statusLine": false, "motion": "while-active", "matchDescriptions": false, "maxCards": 6, "layout": "wide", "palette": "theme", "architectPattern": "advisor|architect|reviewer" } } }`.
- Settled: the panel is closed by default. A user who wants it open every session sets a plugin option, in settings.json or through `/config`. When the user opens the panel with the command, it opens again in the next session.
- Checked against Peter's belief about the prefix, 2026-11-21: a command a mod registers runs as `/<name>` with no plugin prefix (`CommandSpec` in the `claude-code/index.d.ts` that Claude Code 2.1.330 writes: "the person runs it as `/<name>`"; RES-072's `/r72-views` and `/r72-graph` ran without one). So the command stays `/brain-session`; told to Peter.
- Checked, plugin options: a plugin declares fields in its manifest's `userConfig`; Claude Code stores their values in settings.json `pluginConfigs[<plugin>].options`, `/config` draws a string field with `options` as a picker, and the mod receives them in `register(on, options)` (same type file, `PluginOptions`).
- Agent's choice, cheap and reversible: one `userConfig` field, `panel`, with the options `remember` (the default: closed until the user opens it, then it reopens next session until closed) and `always`.
- Row 12: resolved, DEC-046.

### Row 15 — answered, decision records next
- Peter's free-text answer, 2026-11-21: "the only thing I do n't like is "/brain-session" - every other brain slash command, skill is formatted "/brain:session"  - you might not even need to include "brain:" as claude-code might just do taht sutomatically with plugin slash commands - if it doesn't for the sake of consistency we should add the "brain:" - everytyhihgn else is great".
- Settled: the success line below is accepted, with the command named `/brain:session`, for consistency with Brain's other commands and skills. This changes DEC-046's command name.
- Fact to settle by research, row 29: a command a mod registers cannot hold a colon and runs without a plugin prefix (RES-072, type file). A plugin command or skill named `session` shows as `/brain:session`; can the mod take over its run, open the panel and start no model turn? If no way works, the name returns to Peter.
- Recorded: row 15 resolved with DEC-047; DEC-048 supersedes DEC-046, and row 12 now points to it; row 29 started.

### Row 25 — reviewed and resolved
- RES-076 returned 2026-11-21, `outcome: answered`. Formats: layout 1 in 0.2.0 to 0.9.0 (ADRs move from `docs/adr/` to `docs/decisions/` in 0.6.0); layout 2 in 0.10.0 to 0.13.0, with only the RES record changing (0.13.0 adds `outcome`); migrated files keep a layout-1 body under frontmatter with `migrated: 0.8`. The mod detects the format by `layout:`, then `migrated:`, then table headers. Layout-1 files follow no fixed shape: this repo has three plan shapes and two todo shapes, and unmigrated repos add intent docs, one-pagers, `.scratch/` maps and `docs/adr/`. No Brain code reads a layout-1 body today.
- Asked with the review, 2026-11-21: how far back does DEC-037's reading go? Options put: layout 2 and migrated files, with a pointer to setup-brain's migration for an unmigrated layout-1 repo; every version, unmigrated layout 1 included.
- Recommendation given: layout 2 and migrated files, because setup-brain already migrates a layout-1 repo, every shape inside a migrated body is still read, and the mod needs fewer readers.
- Peter's answer, 2026-11-21: "For now lets not put a limit on it - it's not like there are 30 layout versions at the moment". Settled: DEC-037 stands as written; the mod reads every Brain version's format, unmigrated layout 1 included, with RES-076's detection order and fallback table. Row 25 resolved with RES-076 after this review.
- For the spec, from RES-076's follow-up: the glossary has no word for a migrated file, an intent doc, a one-pager or a task block; the spec settles these words through domain-modeling.

### Peter's request: align status and blocked-by, 2026-11-21
Source: Peter's message in the session of 2026-11-21:

> I did want to add one more thing to the scope of this work as it's touching on status - is there an oportunity here to align status and status values for ideas, specs and the tasks of both ideas and tasks in addition to status of specs and ideas being in the frontmatter (might already be there for them) - I'm also wondering if there is an oportunity for us to align the blocked-by so it works the same way for ideas, idea tasks, specs, spec tasks and spec phases?  And making sure it is in teh frontmatter for the i think just spec and ideas?  I'm not totally sure if the status valuse need to be the same accropss all of those things - but I feel like there is an alignment oportunity here

Facts checked (RES-073): ideas store `status:` (define, specced, done, parked); specs store none; map and plan rows share open, in-progress, resolved, superseded by NN and a Blocked by column inside one file; phases are not records, only the tasks a checkpoint waits on; `blocked-by:` in idea and spec frontmatter is IDEA-016 (DEC-029).

### Scope question — answered
- Asked 2026-11-21: which idea owns the status and blocked-by alignment? Options put: widen IDEA-016 (recommended); a new idea; inside IDEA-015.
- Peter's answer: "Widen IDEA-016 (Recommended)". Settled: IDEA-016 becomes the idea that aligns status and waits across ideas, specs, phases and rows (DEC-050). IDEA-016's intent and map were rewritten on 2026-11-21.

### Row 30 — answered with a different meaning
- Asked 2026-11-21: do the views group items by product or glossary context? Options put: not now (recommended); add a product filter.
- Peter's free-text answer: "I was likely refering to the jira board's 'group' select - lets say you're looking at the tasks for a spec, a specific spec, if you wanted to see them on a status board view GROUPED by phase you'd select phase to do taht".
- Settled: the board has a "Group by" select, as Jira's board does. With a spec's tasks on the status board, choosing "phase" puts the cards in lanes, one per phase. Product grouping was a misreading of Peter's earlier words, so it drops.
- Row 30 is superseded by row 31, resolved with DEC-049.
- The question asked: is this the success line? "In a Claude Code session in a Brain repo, `/brain-session` opens the panel within a second. The board shows the repo's ideas or specs, a spec's phases or an item's tasks in their columns, the 9 migrated specs included. A focused card shows, inside the board, what it waits on and what waits on it. Enter opens its detail view with its sections, linked records, git status and commits. While the agent writes records, the panel redraws within a second."
- Options put: accept; change it.
- Recommendation given: accept, because each clause traces to a decision, and the times rest on RES-072 (about 60 ms for the data), RES-074 (redraws throttled to 30 a second) and RES-075 (60 to 150 ms for a detail view's git data).

### Peter's prototype for row 08, read 2026-11-21
`/Users/peterkloss/Downloads/Epic dependency board.html` (60 KB, Peter's own file; the prototype agent copies it to `prototypes/views-board-mod/reference/` on `prototype/views-board`). What it shows:
- A board with status columns; story cards (titled IDEA-00N) hold their subtasks with a done/total count, collapsible.
- A "Dependencies" switch draws SVG lines between cards and subtask rows, routed in the gaps between columns; the arrow points at the blocked item. Colours: amber for "blocked by" (upstream), violet for "blocks" (downstream), red for a cycle, dashed for a resolved link.
- Controls: Chain, Direct or Full chain; Show, All, Blocked or Ready; Hide resolved links; a count of dependency cycles.
- Focus by hover or click: the focused item blue, its upstream amber, its downstream violet, an item in both red, the rest dimmed.
- An inspector panel: key, status, title, parent; a verdict ("Blocked by N open issues" with the longest open chain, "Ready to start", "Done", "Part of a dependency cycle"); upstream and downstream counts; "Blocked by" and "Blocks" lists with each item's status, "via" the subtask that carries the link, and "Outside this epic" for keys not on the board.
- The terminal cannot draw its SVG lines (RES-074). The prototype agent was told on 2026-11-21 to make variant A a terminal version of this design, and to try box-drawing connectors in the column gaps as a stretch.

### Agent's choice: the command, 2026-11-21
- Peter proposed `/brain:session [status|planideas|specs|phases|tasks IDEA-001|SPEC-001]` and asked the agent's opinion. A command that a mod registers allows letters, digits, `_` and `-` only (RES-072), so the colon form cannot be registered by the mod.
- Choice, cheap and reversible: `/brain-session` with one argument: `status` (Brain's five-line report, the default), `ideas`, `specs`, `phases SPEC-NNN`, `tasks IDEA-NNN` or `tasks SPEC-NNN`, or an item ID alone for its detail view. "plan" is left out, because phases cover a spec's plan and there is no roadmap (DEC-041); Peter can say if "plan" meant more.
- UNVERIFIED: a mod may hook `command.run` for a plugin command such as `/brain:session` (the built-in diff mod hooks `clear` and `resume`, RES-075); the spec can test it if Peter wants the colon form.

### Research review — answered
- Settled: RES-074, RES-072 and RES-075 hold. Rows 01, 02 and 18 closed on them; row 13 closed with DEC-039; rows 27 and 28 come from RES-075's follow-ups; the Constraint has the fullscreen rule.
- Source: Peter's answer on 2026-11-20 to "Do these results hold for you?": "Accept and close (Recommended)".

### Research results, reviewed with Peter on 2026-11-20
- RES-074 (row 01): a pane docks beside the transcript only in fullscreen from 110 columns; otherwise it sits above the prompt. The user resizes it with Ctrl+X and an arrow or the mouse, and the size is kept for all mods' panes. The pane stays open and re-draws while a turn runs, through `watchPaths` and `classic.FileChanged`; where the built-in guard loads, a poll replaces them. The prompt stays usable. A registered slash command opens it, also during a turn, and the user can bind a key to that command. No element draws a line between cards: in the terminal a graph is text, box-drawing characters or `Raster` cells; Desktop and VS Code draw `Svg`. Columns side by side work; each column scrolls only if the mod moves it itself. Left and Right do nothing in a pane, so card moves need letter hotkeys; VS Code has no hotkeys. Feeds rows 08, 12, 13 and 14.
- RES-072 (row 02): a plugin has one hooks module, so one Brain mod serves both IDEA-013's question and the views. The mod cannot import most of Brain's parsers (they use `node:` modules or `Bun`), so it gets data by running the Brain CLI through `$.process.run`, about 60 ms for `brain status --json`. A marketplace install loads a mod by the docs; a real install stays to test at release. A command name cannot carry a `brain:` prefix, and `status` is a built-in name. Feeds row 12 and the spec's architecture; with RES-073, the CLI needs a command that prints all the views' data, and DEC-037's fallback reading then sits in that CLI code.
- RES-075 (row 18): git gives each item's changes and history in about 60 to 150 ms per detail view, with no cache at this repo's size. A row's history is best found by parsing the table at each revision. The session start is the launch time plus HEAD and the dirty files at start. Its two follow-ups are real decisions for row 19: may the mod write its own start snapshot (git objects or a copy in the plugin's data folder), given DEC-026; and do the views show per-file session changes, which `/diff` already shows.
- Side effects the agents reported in Peter's own config, none removed: `~/.claude.json` gained a trust entry for a throwaway folder and a `pluginPanes.asked` entry; `~/.claude/projects` gained transcripts in 2 folders named for `res072`; an empty folder `~/.claude/plugins/data/r72both-inline` appeared; a built-in mod's store file holds one test run's session id.

### Partial answers on open rows
- Row 08. Settled: the dependency graph and its controls are part of the board view, not a separate view, because the board is read-only (Peter, 2026-11-21: "in regards to the dependency graph and blocked controls from the prototype i made - they are not perfect and the concept should be refined/cleaned up - but i thought basically as the board is readonly jsut having it be part of the board view made sense"). His prototype's controls are a starting concept to refine, not a spec. The dependency graph of a spec's phases is visible somewhere (Peter's answer to row 20). The prototype also covers the tasks inside a phase card, the phases board's wave columns, and how a board of one type shows a wait on the other type, because `blocked-by` can name ideas and specs (DEC-029, DEC-042). RES-074: no element draws a line between two cards; the terminal draws a graph as text, box-drawing characters or `Raster` cells, and Desktop and VS Code draw `Svg`.
- Row 15. Settled: success includes grasping the project's state at any moment, and seeing what the agent is doing (Peter's answer to row 04). Open: which questions and how fast.

### Row 06 — answered, decision record next
Source: Peter's free-text answer on 2026-11-20 to "How should a specced idea and its spec appear?" (options put: one card, recommended; two linked cards; separate boards). His words:

> I think there should be 2 linked cards - the backlog and board views I don't think should show multiple entity types at the same time - I think the backlog/board view is either showing ideas, specs or the tasks for a specific idea or task - I guess you could also define this as a filter - I think there should only be one  backlog component/view, board component/view and entity details component/view - but they are only able to render one type of thing at a time

- Row 06: resolved. DEC-034 was replaced by DEC-038 after Peter's clarification of row 21, and DEC-038 by DEC-040 after his answer to row 26. Its current record is DEC-040.
- Interpretation: "the tasks for a specific idea or task" is read as "for a specific idea or spec", because a task has no rows of its own.

- Row 07: resolved, DEC-035.

### Row 22 — answered, decision records next
Source: Peter's free-text answer on 2026-11-20 to "How should the views show migrated specs?" (options put: Migrated column, recommended; read old plans too; convert the specs). His words:

> I think a migrated column is fine - but I also think the mod should be built so taht it knows all of the different locations in a idea/spec/task file where information it's looking for can be found and if it can't find what it's looking for in the first place it checks the next so that mod is compatible with file formats from the differeence versions of the brain plugin

- Settled: migrated specs go in a "Migrated" column on the specs board.
- Settled: the mod knows every place in an idea, spec or task file where each piece of information can be, for each Brain version. It looks in the first place, then in the next, so that it reads the file formats of every Brain version.
- Row 22: resolved, DEC-036. The fallback reading is DEC-037; its list of places per version is row 25.

### Peter's clarification of row 21, 2026-11-20
Asked: does the roadmap show ideas and specs together (DEC-028), or one type at a time, like the list and the board (DEC-034)? Peter chose to clarify, then sent three Jira screenshots (plan view, board view, details view) and these words:

> I've provided 3 images here from jira project - first is the project's plan view, then it's board view, and finally details view - and ignoring the details view for a moment, I think what I'm realizing about the board view is that single view should be able to render all of the following:
> - All of a projects ideas and specs OR just all of the ideas OR just all of the specs - so filtering I guess
> - A specific spec and all of it's phases (potentially could render the phases tasks the way the 2 stories render their tasks)
> - A specific idea or spec and all of it's tasks
>
> The plan view should be able to render:
> - All ideas and specs as well as all of their phases and tasks
>
> The detail view can be used to render a spec, an idea, a phase, a task

What the screenshots show (the files were in the session's temporary folder, so this text keeps them):
- Plan view: a tree of an epic, its stories and their subtasks, each with a key, a title and a status; a timeline of bars by date on the right, with lines between bars for dependencies.
- Board view: columns To Do, In Progress, In Review and Done with a count each; a lane per epic; story cards with status, a date and the parent epic, and inside each story card its subtasks, a "0/3" count and a progress bar.
- Details view: a story's description; its subtasks as a table with a progress bar; "Linked work items" split into "blocks" and "is blocked by"; a side panel with parent, priority, dates and people. Peter set this one aside for now.

How it applies:
- Row 06, changed: the board can show all ideas and specs together, only ideas or only specs, by a filter. It also shows one spec's phases as cards, maybe with each phase's tasks inside its card, and one idea's or spec's rows as cards. This replaces DEC-034's "one type at a time" for the board: DEC-038, with DEC-034 superseded.
- Row 21, partial. Settled: the roadmap shows all ideas and specs together with all their phases and tasks, as a tree. Open: the order and the axis, because Brain records no dates.
- Detail view: it renders an idea, a spec, a phase or a task. DEC-033 already covers these.
- Row 08: the prototype also covers the dependency lines of the roadmap and the tasks inside a phase card.

### Agent's choices, cheap and reversible
- View names: the views keep Peter's names, list view, board view, roadmap view and detail view, and use the glossary's words inside them: an idea's rows are questions, a spec's rows are tasks and checkpoints. The spec adds the view names to `GLOSSARY.md` when it defines them. This dropped row 16.
- DEC-032: the detail view also lists the records whose `from:` names the item, because research still in progress has no Result link yet.
- DEC-033: a spec's detail shows its Objective as "what it delivers", and a plan row's detail shows its task block.
- Row 07, ideas board: the columns are the idea statuses define, specced, done and parked, because they are the only state an idea records.
- Row 07, rows board: the columns are the row statuses, with open split into "ready" (on the frontier) and "waiting" (a blocker not resolved), because the frontier is how Brain picks the next row. Superseded rows sit in their own column.
- Row 07, a spec's rows board: the cards are grouped in lanes by phase, because Peter wants a spec's tasks grouped by phase (DEC-033).
- List view: Peter calls it the "backlog view"; the name stays "list view", because the glossary avoids "backlog" for fog.

### Peter's words
Source: Peter's messages in the session of 2026-11-20, kept as he wrote them. The brackets name the rows each part feeds.

First description:
- The list view and the board view are the same for ideas and for specs.
- A list view of all ideas and specs, "almost like a backlog view", with a filter on status or progress. [row 09]
- A kanban board with "workflow stage swimlanes". "cards rendered by the board can either be all of the projects ideas/specs - and if you drill into one then the cards are the tasks of the specific idea/spec". [rows 06, 07]
- The board shows the dependency graph between ideas and specs, or between tasks. [row 08]
- Any card opens to show its ID, status, result (ideas only), title, an intent section and a destination section. [DEC-033]
- An idea or spec card also shows all its tasks and their dependency graph. Every card shows the dependency graph for that one item. [row 08, DEC-033]
- Peter has not fully worked out the UI yet.
- Added later the same day: "it might also be nice to be able to see all of the research/decision docs referenced in the idea/spec/task". [DEC-032]

Answer to row 04, given as free text to a multi-select question; he picked no listed option:

> Brain has the ability to have multiple ideas and specs in progress at the same time - often a codebase isn't really just code, they are usually a product(s) and the workflows that drive the lifecycles of these products/codebases can end up having a lot of moving pieces that are all related/have dependencies on each other (which reminds me, a plan view would be nice as well - as these views are effectively shapshots of the product - put all the snapshots together and its the projects roadmap - these views make it much easier to wrap your arms around what the status of a project is at any moment in time) - being able to have a resizeable pannel in the terminal of a project's working session also makes it a bit easier to get a sense of what the ai is actually doing as they are able to/tend to be toucshing a lot of different things all at once) - it would also be nice to be able leverage git to allow the view to show the changes that hve been made to a thing in the on going session, as well as leverage git to enable the view to show the history of the thing

Applied: row 04 (DEC-027); row 17 (DEC-028); partial answers on rows 12, 13 and 15; rows 18 and 19; the fog line on products.

Answer to row 20, given as free text (options put: effort field, recommended; cross-effort rows; no new field):

> I think the deps graph for ideas/specs that establishes the deps they have on each other should be defined by a blocked by property in the respective idea/spec's frontmatter - additionally tasks should also display their type as well and both ideas and tasks should display their result (when viewing their details) - specs when looking at their details should also render their checkpoints (phases) - phases also have the deps on each other defined so also have a deps graph which should also be visible somewhere, and phases use these deps graphs to define parallel working waves - might be nice if phase and task details showed what wave they are a part of and what the status of that wave is - spec details should include it's tasks - should be able to view it's tasks grouped by phase as well as deps graph of the phasses, parallel waves, and their status as well as wht the spec will have delivered when ac has been met and all is done, it's seccess criteria,

Applied: row 20 (DEC-029); row 24 (DEC-030); row 10 (DEC-033); the partial answer on row 08.

Row 24's evidence, checked inline 2026-11-20: a phase is the tasks its checkpoint row is blocked by (`scripts/workspace/plan.ts` header; `skills/planning-and-task-breakdown/SKILL.md` Step 5). Waves come from the Blocked by edges of tasks and checkpoints (`layWaves` in `scripts/workspace/graph.ts`), and two phases can share a wave (`overlaps` in `ParallelWaves`). Waves hold only rows still to do, so wave numbers shift as rows resolve (planning skill, "The Parallel waves section").

### Words checked against the glossary
- "tasks" of an idea: an idea has map rows, which are questions; a spec's plan has task and checkpoint rows. [row 06]
- "workflow stage": the glossary's stage is define, plan, build, verify, review or ship. Ideas have a status (define, specced, done, parked), and rows have a status (open, in-progress, resolved, superseded). [row 07]
- "board" and "backlog": the glossary marks "board" _Avoid_ for the map and "backlog" _Avoid_ for fog. The board view is not the map, so its name stays; see the agent's choices.
- "plan view" and "roadmap": the glossary's plan is a spec's `tasks/plan.md`. Peter's "plan view" was a roadmap view (DEC-028), which DEC-041 replaced with the board.
- "entity": Peter's word for an item type on the board; the idea uses "item type": idea, spec, phase or task (DEC-042).
- "checkpoints (phases)": in the glossary, a checkpoint is the row that ends a phase, and a phase is the tasks that checkpoint waits on.

### Evidence read inline, 2026-11-20
- The mods API page lists `$.ui.status`, `$.ui.toast`, `$.ui.log` and `$.ui.notify` as display calls. Source: https://code.claude.com/docs/en/plugins/mods/api, checked 2026-11-20.
- The mods reference lists more `$.ui` calls, among them `open`, `close`, `panes`, `place`, `focus`, `scroll` and `view`, render sites `Pane` and `AbovePrompt`, elements such as `Box`, `Text`, `Markdown`, `Select`, `Link`, `Raster`, `Image` and `Client`, and `$.command.register`. Row 01 confirms the details. Source: https://code.claude.com/docs/en/plugins/mods/reference, checked 2026-11-20.
- Installed Claude Code is 2.1.330.

### What RES-073 gives the open rows
- Rows 06, 07, 09: a spec stores no status. `brain status` gives define, build or finished; no code works out the six glossary stages. Row statuses: open, in-progress, resolved, superseded by NN.
- Row 22: all 9 specs in this repo are migrated layout 1, so the current parser finds no plan row in any of them.
- Waits between efforts exist only in prose today: IDEA-008 row 02 waits on IDEA-007 row 01; DEC-004's module table has a "Depends on" column, which layout-1 specs repeat. IDEA-016 takes these up.
- For the spec, not a user decision: the views need data no command prints today: every spec, all rows with their edges, section text, and an index of DEC and RES records with links back. Brain's exported parsers give most of it; `titleOf`, `ideaSection`, `filesByRow` and the Result regex are not exported.

## Map

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | What UI can a mod draw in a Claude Code session: its render sites, elements, focus, scrolling, key input and registered commands, and their limits in the terminal, VS Code and Desktop? Can it lay out board columns and draw a dependency graph? | research | resolved | — | RES-074 |
| 02 | How does a plugin ship a mod, can one Brain mod serve both IDEA-013's opening question and these views, and does a marketplace install load it? | research | resolved | — | RES-072 |
| 03 | What does each view need from the workspace, what do Brain's parsers already give (statuses, stages, rows, blocking edges, result links, sections, `sources:`), and what is missing? | research | resolved | — | RES-073 |
| 04 | Why now: what does Peter use today to see where ideas and specs stand, and what does that miss? | interview | resolved | — | DEC-027 |
| 05 | Do the views only show records, or can the user act on an item from a view? | interview | resolved | — | DEC-026 |
| 06 | Which items are the board's cards at each level: ideas and specs together or apart, and on a drill-in an idea's map rows and a spec's plan rows? | interview | resolved | 03 | DEC-042 |
| 07 | Which values do the board's columns or swimlanes follow: lifecycle stage, effort status or row status? | interview | resolved | 03, 06 | DEC-035 |
| 08 | How does the board show the dependencies between its cards, and how does a detail view show one item's dependencies? | prototype | in-progress | 01, 06, 20 | — |
| 10 | What does the detail view show for a spec and for a row, where an idea has Intent, Destination and Result? | interview | resolved | 03 | DEC-033 |
| 11 | Which linked records does the detail view list (row results, a spec's `sources:`, a decision's evidence), and does it open their text? | interview | resolved | 03 | DEC-032 |
| 12 | How does the user open the views, and how do they relate to IDEA-013's opening question? | interview | resolved | 01, 02 | DEC-048 |
| 13 | Do the views update while the agent changes records in the same session? | interview | resolved | 01 | DEC-039 |
| 14 | What do Codex and Gemini CLI users get, given that a mod runs only on Claude Code? | interview | resolved | 01 | DEC-043 |
| 15 | What does success look like: which questions must the views answer for the user, and how fast? | interview | resolved | 05, 06 | DEC-047 |
| 17 | What does the "plan view" show: a roadmap of all ideas and specs in dependency order, one spec's plan with its phases and checkpoints, or another layout? | interview | resolved | — | DEC-041 |
| 18 | What can git give a view per item: the changes to an idea, spec, row or record in the current session, and the item's history; how does the mod know where the session started; and what does it cost in a repo of this size? | research | resolved | — | RES-075 |
| 19 | Which session changes and which history does the detail view show for each kind of item? | interview | resolved | 18, 28 | DEC-045 |
| 20 | How does Brain record that one idea or spec waits on another, so that the roadmap and the board can show dependencies between efforts? | interview | resolved | 03 | DEC-029 |
| 22 | What does a drill-in show for a migrated spec whose layout-1 plan the parser cannot read? In this repo that is all 9 specs. | interview | resolved | 06 | DEC-036 |
| 23 | Does the record-format change from row 20 go into this idea's spec, or into its own idea that this one waits on? | interview | resolved | 20 | DEC-031 |
| 24 | Which waves do the spec, phase and task details show: the live waves of rows still to do, whose numbers shift as rows resolve, or fixed waves worked out over all rows? What is a wave's status? | interview | resolved | — | DEC-030 |
| 25 | For each Brain version, in which places do ideas, specs, plans, task blocks and records keep each field the views show, so the mod can look in each place in turn (DEC-037)? | research | resolved | — | RES-076 |
| 26 | Which columns does the board use when it shows ideas and specs together, given that each type has its own states (DEC-035)? | interview | resolved | — | DEC-042 |
| 28 | Do the views show session changes per file, which `/diff` already shows, or only per idea, spec, record and row? | interview | resolved | 18 | DEC-044 |
| 29 | Can the Brain mod serve `/brain:session` (DEC-048): a plugin command or skill named `session` whose run the mod takes over to open the panel with no model turn, or another way? | research | in-progress | — | — |
| 30 | Do the views group items by product or glossary context, for a repo that holds several products or several contexts (`GLOSSARY-MAP.md`)? | interview | superseded by 31 | — | — |
| 31 | Which groupings does the board's Group by select offer, such as a spec's tasks in lanes by phase? | interview | resolved | — | DEC-049 |
| 32 | Which columns do the boards use under IDEA-016's shared status values (DEC-051), and is the Migrated column still needed once migration stores each spec's status? | interview | open | — | — |
| 33 | Which one shape does the detail view give every item kind, and which parts does each kind (idea, spec, task) add to it, in place of or in line with DEC-033? | interview | open | — | — |

## Not yet specified
None. On 2026-11-21 the four fog items became these:
- Many items: an agent's choice. Each column shows a window of its cards and scrolls on its own, by wheel or hotkey, which RES-074 showed a mod can do; the tree stays under the 20,000-element limit.
- A repo with no Brain workspace: an agent's choice. `/brain:session` reports that the repo has no Brain workspace and names setup-brain; no panel opens.
- The visual design (colours, symbols, keys): part of row 08's prototype result.
- Grouping by product or glossary context: row 30.

## Out of scope
- A view that changes records, such as a status change or a card moved between columns. It goes around Brain's write rules (DEC-026).
- A view that hands an item to the agent, such as "continue IDEA-013". It can come in a later idea (DEC-026).
- A board or list that shows ideas and specs together. Peter set it aside "for now" (DEC-040, kept in DEC-042).
- A roadmap view: the board gives the overview (DEC-041).
- Views on Codex and Gemini CLI, for now. A text or HTML fallback can be its own idea (DEC-043).
- Row 21, dropped 2026-11-20: "What order and grouping does the roadmap use, and how does it differ from the board?" There is no roadmap view (DEC-041).
- Row 09, dropped 2026-11-20: "Which filters and columns does the list view have?" It is a cheap, reversible choice, so the agent makes it (Peter's interview rules): the list has the board's type selector and scope, a status filter, and the columns ID, title, status, waits on, and progress (rows done of all rows), following Peter's first want of a filter on "status/progress".
- Building the `blocked-by` field for waits between efforts: it is IDEA-016 (DEC-031).
- Row 16, dropped 2026-11-20: "Which glossary words name the views and their parts, given that the glossary avoids 'board' for the map and 'backlog' for fog?" Naming is a cheap, reversible choice that does not change what gets built, so the agent makes it (Peter's interview rules); see the agent's choices in Notes.
- Row 27, dropped 2026-11-20: "May the mod write its own snapshot at session start, so that session changes leave out edits made before the session?" Changes are the item's git status (DEC-044), which needs no session start point.
