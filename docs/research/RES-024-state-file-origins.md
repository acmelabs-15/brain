---
id: RES-024
status: resolved # in-progress | resolved
kind: research
from: user
date: 2026-11-04
---
# RES-024: Where each state file came from

## Question
Where did each state file come from, in older sessions and other repos, and why was each one added? For `docs/STATUS.md`, `docs/agents/workspace.md`, `docs/agents/capabilities.md`, `docs/agents/domain.md`, `GLOSSARY.md`, the idea file and its map, `tasks/plan.md`, `tasks/todo.md`, `docs/intent/`, `docs/decisions/`, `docs/research/`, `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`, and any other state file: the first time it appears, who introduced it, what gap it was meant to fill, and how it reached brain. Also: where was `docs/intent/workspace-and-stateful-interview.md` first written?

## Findings

### The evidence base
- This repo holds four unrelated root histories: `bfd80fac` (2026-03-07), `b8583360` (2026-08-23), `d194e3ef` (2026-08-31) and `c9b16072` (2026-09-19, the root of `main`). The commit shows no shared parent, so "first time" below is given per line of history. Source: `git rev-list --all --max-parents=0`, checked 2026-11-04.
- `.mailmap` maps author `test <test@example.com>` to Peter Kloss, so every `main` commit before about 2026-10-19 shows Peter Kloss. The git author does not separate Peter's own typing from an agent's. Source: .mailmap:1, checked 2026-11-04.
- Local logs cover different windows. Session transcripts run from 2026-09-08 on. A log of Peter's typed prompts runs from 2026-08-26, and it holds no typed prompt from 2026-09-12 to 2026-10-19. The transcripts of that window show `entrypoint: claude-desktop`. Source: a local log, checked 2026-11-04.
- The transcripts of four sessions of 2026-10-20 in earlier projects are gone. Only Peter's prompts remain, in a local log. Source: a local log, checked 2026-11-04.
- This record reads three sources the brief does not list, read-only, because the question asks about other repos and about any local log: `git log` in earlier projects, and two local logs. Source: this row's commands, checked 2026-11-04.

### `docs/intent/workspace-and-stateful-interview.md`
- The commit shows its first version entered git on 2026-10-29 at 10:26:54 -0700, 993 lines, together with `spec/SPEC-workspace.md` and the approved plan. Source: commit fa268bdc, checked 2026-11-04.
- The doc says of itself "Drafted 2026-10-29 from a design conversation with Peter". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:3, checked 2026-11-04.
- None of the three sessions shows the drafting. Each opens with Peter pasting a brief that already names the doc as "the design in `docs/intent/workspace-and-stateful-interview.md`", and the agent then only reads it. Source: session 657c2610, 2026-10-29T15:43; session edcc9768, 2026-10-29T15:44; session d65d2eac, 2026-10-29T15:52, checked 2026-11-04.
- The first commit is not the first draft. The earliest text in any log is the read in session edcc9768: 862 lines, with "**Not yet confirmed.**" in its opening. The commit has 993 lines and says "Confirmed by Peter on 2026-10-29". Source: session edcc9768, 2026-10-29T15:44:33Z; commit fa268bdc, checked 2026-11-04.
- No local log shows the drafting. The first mention of the file name in any local transcript is Peter's paste at 2026-10-29T15:43:18Z. The log of typed prompts holds no prompt in any project from 2026-10-29T04:24:44Z to that paste. Source: a local log, checked 2026-11-04.
- Other stores show no drafting either. No Codex log before 2026-10-29 names the file, compressed logs included. The Codex rollouts dated 2026-10-29 start at 11:24 local, after the first commit, and open with the same messages as the Claude Code sessions. The other local tool folders hold no text file that names it. Source: a local log, checked 2026-11-04.
- One pointer leads off this machine. The prompt that names the doc was downloaded from claude.ai on 2026-10-29T15:53:05Z. `docs/intent/brain-workspace-prompt.md` has the same bytes. No local file from that origin is the design doc. Source: docs/intent/brain-workspace-prompt.md; a local log, checked 2026-11-04.
- Peter changed the prompt between sessions. His pastes at 15:43Z and 15:44Z have no glossary-rename bullet, and his paste at 15:52Z adds "The glossary rename from `CONTEXT.md` to `GLOSSARY.md`". Source: sessions 657c2610, edcc9768 and d65d2eac, 2026-10-29, checked 2026-11-04.
- The doc gives its own reason: "agent-skills' define phase writes files only when a skill ends, so a long interview loses its progress between sessions", and Peter's earlier systems "showed which parts worked and which grew out of control". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:15, checked 2026-11-04.
- The phrase is older than the doc. The agent wrote "stateful interview when a repo is present" in the lifecycle spec on 2026-09-19. Source: session d71891a9, 2026-09-19T16:33:05Z, checked 2026-11-04.

### `docs/STATUS.md`
- First commit anywhere: an earlier project, 2026-10-19. The file began there as a hand-kept handoff note, before brain carried it. Source: an earlier project, checked 2026-11-04.
- Peter said the need about two minutes before that commit: a new conversation should initialize itself and check its state. Source: a local log, 2026-10-20T05:56:05Z, checked 2026-11-04.
- Peter's prompt names no file. The name and the path first show in the commit, and the transcript of that session is gone, so no source shows who chose them. Source: a local log, checked 2026-11-04.
- The commit gives the gap: a new session should initialize itself without a kickoff prompt, and state moves out of `AGENTS.md` into `docs/STATUS.md`, so the rules file stays stable and state has one home. Source: an earlier project, checked 2026-11-04.
- The state text was already in that project's `AGENTS.md`, and the commit moved it to the new file. The agent wrote the file. Source: an earlier project, checked 2026-11-04.
- The same commit holds the first session-start and session-end routine: six steps at start, and at end a rewrite of `docs/STATUS.md` with the date, phase, last completed task, next task, anything red, and what waits on Peter. Source: an earlier project, checked 2026-11-04.
- The file then spread by hand to five more earlier projects, from 2026-10-20 to 2026-10-28. Source: an earlier project, checked 2026-11-04.
- Peter said he did not know who owned the mechanism: it was not clear to him how much was built into the plugins and how much came from how a project was set up. Source: a local log, 2026-10-21T22:03:29Z, checked 2026-11-04.
- Peter again said he did not know what put the file in a repo for the first time, and that the file lets a new conversation pick up where the last one stopped. Source: a local log, 2026-10-28T22:38:37Z, checked 2026-11-04.
- The agent said brain was not the source, and proposed the path into brain: nothing in brain wrote the first note, and the cause-level fix was for setup-brain to write a starter `docs/STATUS.md` and `docs/agents/workflow.md` in every repo. Source: a local log, 2026-10-28T22:46:19Z, checked 2026-11-04.
- Peter said that the need covered the whole lifecycle: "I also hope you're capturing somewhere like where we are in terms of like the overall life cycle flow of the brain frameworks workflow. So that when a new conversation starts, you can pick up right where we left off". Source: a local log, 2026-10-29T04:20:01Z, checked 2026-11-04.
- The design doc shows how it reached brain: its table moves "Current work belongs to `docs/STATUS.md`" to the protocol, and its decisions row keeps the file with the evidence "Peter's existing practice". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md, sections "Where each part of the hand-written `AGENTS.md` goes" and "Decisions", checked 2026-11-04.
- The commit shows `setup-brain` gained the seed on 2026-10-29: "a docs/STATUS.md seed only when the file is absent, since it is the agent's handoff note". Brain's own `docs/STATUS.md` came that night. Source: commits 03f2d3e4 (14:01:20 -0700) and fb5cacd4 (23:39:22 -0700), checked 2026-11-04.
- Upstream does not define the file. No text from agent-skills or mattpocock/skills at the first sync names `STATUS.md`. Source: `git grep -n STATUS.md de241b38 -- skills references .claude commands`, checked 2026-11-04.

### `docs/STATUS.md`: what came before it
- Peter asked for a similar thing seven weeks earlier, for an earlier project, under other words: guidance for agents to digest the docs and rehydrate context in new conversations. Source: a local log, 2026-08-31T01:11Z and 2026-08-31T02:25Z, checked 2026-11-04.
- The commit shows that idea entered this repo's older history as a docs system: "the session-log and rehydration docs system — PRD-001, PLAN-001, ADR-001, ANA-001", carried from earlier projects. Source: commit 4c0c5c22, 2026-08-31 06:52:33 -0700, checked 2026-11-04.
- The commit shows a file with the same role on the lifecycle branch: `docs/plan/STATE.md`, "the single source of truth for where the project is", with fields `phase` and `next_action`. Source: 3bc3ff73:docs/plan/STATE.md:3, 2026-09-01, checked 2026-11-04.
- Peter said why it mattered there: "the markdown files are The memory for all this work", and a new agent is "100% reliant on them". Source: a local log, session 01af4d9f, 2026-09-01T21:18Z, checked 2026-11-04.
- The evidence shows no link from `docs/plan/STATE.md` to `docs/STATUS.md`. Peter set the lifecycle and v2 work aside on 2026-09-19 ("Please ignore the other work trees"), the root of `main` shares no history with it, and the first commit of `docs/STATUS.md` does not name it. The likeness is in role; no source says one came from the other. Source: session d71891a9 summary, 2026-09-19T17:15:51Z; `git rev-list --max-parents=0`, checked 2026-11-04.

### `docs/agents/workspace.md`
- The first mention anywhere is Peter's pasted brief: "One workspace layout: `docs/decisions/`, `docs/research/`, `docs/ideas/`, and `specs/SPEC-NNN-<slug>/`, defined once in `docs/agents/workspace.md`". Source: session 657c2610, 2026-10-29T15:43:18Z, checked 2026-11-04.
- The design doc gives the gap: every skill refers to the workspace "instead of hard-coding paths, the same way skills read `docs/agents/issue-tracker.md` today. A later layout change then touches one file". Its decisions row names the evidence "Matt's tracker-doc pattern". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md, section "`docs/agents/workspace.md`", and :696, checked 2026-11-04.
- The commit shows the template entered at `skills/setup-brain/workspace.md` on 2026-10-29, and brain's own file that night. Source: commits 6b69a75e (10:36:01 -0700) and f6f785d3 (23:31:27 -0700), checked 2026-11-04.

### `docs/agents/workflow.md` (another state file)
- The file began by hand in an earlier project on 2026-10-21, and by 2026-10-28 three earlier projects held it. A table in it mapped each record to one place, to keep one owner for each fact. Source: an earlier project, checked 2026-11-04.
- It never reached brain. No commit on any branch of this repo holds it, and the design doc does not name it, although the agent proposed a starter copy from setup-brain and an earlier project listed that as an open choice. Source: `git log --all -- docs/agents/workflow.md`; fa268bdc:docs/intent/workspace-and-stateful-interview.md; an earlier project, checked 2026-11-04.
- `docs/agents/workspace.md` and `docs/agents/workflow.md` overlap in role: each says where records live. No source says one came from the other, and no log between 2026-10-28T22:50Z and 2026-10-29T15:43Z follows up that open choice. Source: a local log, checked 2026-11-04.

### `docs/agents/capabilities.md`
- The content starts as Peter's pasted checklist, "Required capabilities: check before work, keep checking during work", with four sections and the words "A tool name in your list does not prove the server works". He pasted it twice. Source: a local log, 2026-10-27T17:06:43Z and 17:47:00Z, checked 2026-11-04.
- The gap, as an earlier project's record states it: the checklist lived only in the conversation. The recommendation was a split between a user-level rules file and `AGENTS.md`, and Peter chose to keep it all in that repo's `AGENTS.md`. Source: an earlier project, checked 2026-11-04.
- It entered that repo's `AGENTS.md` on 2026-10-27, and a second earlier project carried it by 2026-10-28. Source: an earlier project, checked 2026-11-04.
- The file name first appears in Peter's pasted brief: "`setup-brain` writing `docs/agents/capabilities.md` so no repo needs a hand-written brain section in its `AGENTS.md`". Earlier log matches on `capabilities.md` are other file names. Source: session 657c2610, 2026-10-29T15:43:18Z; a local log, checked 2026-11-04.
- The design doc gives the gap: "Every repo that uses brain ends up with a medium-sized hand-written `AGENTS.md`", and "Almost all of it is the same in every repo". It splits the check: the rule goes to the protocol, and the library skills and servers go to the new file. Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:428, section "Where each part of the hand-written `AGENTS.md` goes", checked 2026-11-04.
- The commit shows the template and proposer on 2026-10-29, and brain's own file that night. Source: commits c119e17b (14:35:14 -0700) and fb5cacd4 (23:39:22 -0700), checked 2026-11-04.
- Neither upstream defines the file. The design doc lists it as "**New.**" and no text at the first sync names it. Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md, section "Three layers"; `git grep capabilities.md de241b38`, checked 2026-11-04.

### `docs/agents/domain.md`
- The path is mattpocock/skills text: `setup-matt-pocock-skills` writes it, with the two tracker files. The design doc's table says the same. Source: docs/research/RES-002-matt-over-addy.md:160; fa268bdc:docs/intent/workspace-and-stateful-interview.md, section "What other frameworks install", checked 2026-11-04.
- The agent proposed it in brain's first setup spec as "the rule that every brain skill reads CONTEXT.md before it names a domain concept", and Peter chose "Approve the spec (Recommended)". Source: session d71891a9, 2026-09-19T15:46:16Z, checked 2026-11-04.
- The commit shows the template on 2026-09-19. The first repo outside brain to hold it is an earlier project, on 2026-10-19, after Peter ran `/brain:setup-brain`. Brain's own copy reached `main` on 2026-10-29; an earlier copy on `skill-creation` did not. Source: commit 991f3e07; an earlier project; a local log, 2026-10-20T06:28:06Z; commits fb5cacd4 and e67a66e7, checked 2026-11-04.
- The commit shows a defect found in that first use: a repo that used `docs/decisions/` "had to hand-edit docs/agents/domain.md after setup, the next setup run reverted that edit". Source: commit d199426e, 2026-10-19 23:40:07 -0700, checked 2026-11-04.

### `GLOSSARY.md`
- The file began as `CONTEXT.md`, mattpocock/skills text: "One `CONTEXT.md` at the repo root". Source: de241b38:skills/domain-modeling/CONTEXT-FORMAT.md:34, checked 2026-11-04.
- Peter worked with it before `main` existed, on 2026-08-31, and the first `CONTEXT.md` in this repo's older history is from that day. On 2026-09-19 he said "One of the things I'd specifically like to have is the CONTEXT.md established by the domain model skill". Source: a local log, 2026-08-31T02:13Z; commit 4014c980; session d71891a9, 2026-09-19T14:54:41Z, checked 2026-11-04.
- The rename began upstream: commit `d80fa0f` of 2026-09-17 says "rename CONTEXT.md/CONTEXT-MAP.md convention to GLOSSARY.md/GLOSSARY-MAP.md". An audit report read in an earlier project's session names it first, as a change since brain's pin. Source: session f6a5f091, tool result 2026-10-29T00:44:10Z; a local log, 2026-10-23T14:59:14Z, checked 2026-11-04.
- The design doc gives the reason: "Following him keeps one name across both packs", with the evidence "Peter; Matt renamed the same convention upstream (mattpocock/skills PR #1120)". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:704, section "Glossary rename", checked 2026-11-04.
- The commits show brain's rename and its pin bump on 2026-10-29, and brain's own first glossary the same day, "It defines the words the workspace design brings in". Brain had no glossary before that. Source: commits 97cd61de, 68022160 and 6fee65d9, checked 2026-11-04.
- `docs/plan/GLOSSARY.md` on the lifecycle branch has the same name, from 2026-09-01. No source links it to the rename. Source: commit 3bc3ff73, checked 2026-11-04.

### `tasks/plan.md` and `tasks/todo.md`: upstream text
- The commit shows both paths are agent-skills text: `planning-and-task-breakdown` says "Save the implementation plan to `tasks/plan.md`" and "Default: a checklist-style markdown file at `tasks/todo.md`", and names `/build` as the reader. Source: de241b38:skills/planning-and-task-breakdown/SKILL.md:145,161, checked 2026-11-04.
- Peter brought agent-skills in on 2026-09-19: "I'd like you to install the following to my claude-code and claude-desktop globally https://skills.addy.ie/". Source: session 1954857a, 2026-09-19T14:26Z, checked 2026-11-04.
- The commit shows both files at the root of `main` on 2026-09-19, from the agent-skills plan step. That is the earliest commit of either path in any repo read here. Source: commit c9b16072; `git log --reverse -- tasks/plan.md tasks/todo.md` in each repo, checked 2026-11-04.
- Peter said the layout was the model for specs: "it would be nice if the specs were organized in a directory. Just like the plans are in tasks or the other notes are in docs". Source: session d71891a9, 2026-09-19T16:00:13Z, checked 2026-11-04.
- The design doc gives the gap in the root files: "Only one effort at a time; the spec is cut off from its history". The commit shows them moved under `specs/SPEC-NNN-<slug>/tasks/` on 2026-10-29. Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md, section "Rejected options"; commit f6f785d3, checked 2026-11-04.
- The first use outside brain was in an earlier project on 2026-10-19, driven by `/agent-skills:plan`. Source: an earlier project, checked 2026-11-04.

### `docs/intent/`: upstream text
- The commit shows the folder name is agent-skills text: `interview-me` says "If the user wants the intent to persist (a multi-session project, a handoff to another collaborator), offer to save it to `docs/intent/[topic].md`". Source: de241b38:skills/interview-me/SKILL.md:138, checked 2026-11-04.
- The commit shows brain's first file there on 2026-09-19: `docs/intent/brain-wrap.md`, the output of the first agent-skills interview, which Peter confirmed with "Confirm this intent (Recommended)". Source: commit c9b16072; session d71891a9, 2026-09-19T15:20:02Z, checked 2026-11-04.
- The folder was not the default in every repo. Three earlier projects used `docs/design/`. In another, Peter said the folder name did not matter to him, and the agent chose `docs/intent/` as "the default in interview-me and using-brain". Source: an earlier project; a local log, 2026-10-28T22:48:40Z and 22:48:58Z, checked 2026-11-04.
- The commit shows the workspace layout treats `docs/intent/*.md` as old layout: a migrate step turns intent docs into ideas. Source: commit 6322ef9d, 2026-10-29; fa268bdc:docs/intent/workspace-and-stateful-interview.md, decisions row "Migrating brain's history", checked 2026-11-04.

### `docs/decisions/`
- The folder name is agent-skills text: "Store ADRs in `docs/decisions/`". The mattpocock/skills text uses `docs/adr/` instead. Source: de241b38:skills/documentation-and-adrs/SKILL.md:48; de241b38:skills/domain-modeling/ADR-FORMAT.md:3, checked 2026-11-04.
- The commit shows the folder first in this repo's older history on 2026-08-31, as `ADR-001`, and on the `main` line on 2026-09-19, as `DEC-001`. Source: commits 4c0c5c22 and 51b30beb, checked 2026-11-04.
- The commit shows why brain settled on it: brain named `docs/adr/` while agent-skills stored ADRs in `docs/decisions/`, a clash found while setting up an earlier project. Source: commit d199426e, 2026-10-19 23:40:07 -0700, checked 2026-11-04.
- The design doc gives the gap for one file per decision: "Peter wanted individual files; MADR 'Any Decision Records'", and the commit shows it on `main` on 2026-10-29. An earlier commit on `skill-creation` says "brain shipped three decision-record formats", but it never reached `main`. Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md, decisions row "Decision files"; commits 98f5cada and e67a66e7, checked 2026-11-04.

### `docs/research/`
- Neither upstream names the folder. The text at the first sync has no match for `docs/research`. Source: `git grep docs/research de241b38 -- skills references .claude commands`, checked 2026-11-04.
- It came from one interview answer. Peter said "I think we need to do more research on this", and the agent then reported "The research note is at docs/research/RES-001-wrap-layout.md in the wrap worktree". Source: session d71891a9, 2026-09-19T15:09:21Z and 15:16:47Z, checked 2026-11-04.
- The commit shows the folder at the root of `main`. `RES-001` has no earlier match in any line of history, so the agent's note in that session is the first use of the prefix. Source: commit c9b16072; `git log --all -S RES-001`, checked 2026-11-04.
- An older folder had the same role: Peter said "Analysis is where analysis and research markdown documents should go". The commit shows `docs/analysis/` on 2026-08-31. Source: a local log, 2026-08-31T01:20Z; commit 4c0c5c22, checked 2026-11-04.
- Peter gave the reason for sub-agents to write files: "have those sub agents write its research to markdown files that it can then read as opposed to asking them to return a message to itself because those often fail". Source: a local log, 2026-10-20T07:47:57Z, checked 2026-11-04.

### Idea file: upstream text
- The commit shows `docs/ideas/[idea-name].md` is agent-skills text: `idea-refine` saves its one-pager there after the user confirms. Source: de241b38:skills/idea-refine/SKILL.md:32,140, checked 2026-11-04.

### Idea file and its map
- The numbered name is older than `main`. Peter typed "idea-refine docs/ideas/IDEA-NNN-<slug>.md" while he reviewed the lifecycle map, and the commit shows it in that map's source the same day. No source links that use to the name on `main`. Source: a local log, session af966e75, 2026-09-01T08:47:11Z; commit f5d041f6, checked 2026-11-04.
- The map is mattpocock/skills text, seeded into brain: "The map is a single issue on this repo's issue tracker", and "The map is an **index**, not a store". Source: 359eba94^:skills/wayfinder/SKILL.md:28,30, checked 2026-11-04.
- The first real use was in an earlier project: a one-pager and a map under `.scratch/` on 2026-10-21, and `/brain:wayfinder` in 16 sessions on 2026-10-22. Source: an earlier project; a local log, checked 2026-11-04.
- The design doc gives the gap: "Matt's `wayfinder` keeps state, but it sizes one decision to a whole session and keeps the map on an issue tracker". Its rows add "Peter: the end is unknown at the start", and "Peter does not like the convention" for tracker storage. Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:15,744, decisions row "When the map is written", checked 2026-11-04.
- The commits show the idea template and the end of wayfinder on 2026-10-29, and brain's first real idea file that evening. Source: commits 9841268c, 359eba94 and fb59f745, checked 2026-11-04.

### `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`
- Both paths are mattpocock/skills text: "matt's setup also writes `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`". Brain's templates say "Adapted from mattpocock/skills, MIT, commit c55ee46". Source: docs/research/RES-002-matt-over-addy.md:160; bb3e479e:skills/setup-brain/issue-tracker-local.md:3, checked 2026-11-04.
- Brain first left them out. The agent wrote "No issue-tracker choice. brain's lifecycle uses addy's tasks folder", and Peter approved that spec. Source: session d71891a9, 2026-09-19T15:46:16Z, checked 2026-11-04.
- They came in with the two on-ramps. The agent said triage and wayfinder need "an issue tracker choice at setup", and Peter said "I like your first option. I just want to make sure that whatever we pull in from Wayfinder respects the ask user question one question at a time". Source: session d71891a9, 2026-09-19T16:26:13Z; docs/research/RES-003-triage-wayfinder.md:62,89, checked 2026-11-04.
- The commit shows the two files and the tracker question on 2026-09-19, with the spec "Amended 2026-09-19, by the on-ramps decision". Source: commit bb3e479e, 09:47:00 -0700, checked 2026-11-04.
- Both files then appear in six earlier projects. Source: an earlier project, checked 2026-11-04.
- The design doc shows the removal: "**`docs/agents/issue-tracker.md`.** Peter wants it removed", and its row retires triage too, with the evidence "acmelabs-15/brain has no issues and no outside PRs". Source: fa268bdc:docs/intent/workspace-and-stateful-interview.md:782, decisions row "`docs/agents/issue-tracker.md` and triage", checked 2026-11-04.
- The commits show the end on 2026-10-29: triage retired, setup-brain without a tracker, and a migrate step that removes the files on a yes. Brain's own `main` never held either file. Source: commits 7052ad31, 28d917e6 and 6322ef9d; `git log main -- docs/agents/issue-tracker.md docs/agents/triage-labels.md`, checked 2026-11-04.

### Other state files
- `docs/plan/STATE.md`, `docs/plan/METHOD.md` and `docs/plan/sessions/` held the state of the lifecycle-branch work; see "what came before it" above. They are not on `main`. Source: commit 3bc3ff73; `git ls-tree main docs/plan`, checked 2026-11-04.
- `.scratch/<effort>/map.md` held the wayfinder map in repos on a local tracker, and git tracked it there. Source: an earlier project, checked 2026-11-04.
- `docs/design/` held briefs, interview answers and numbered decision records in earlier projects. Source: an earlier project, checked 2026-11-04.
- `CONSTRAINTS.md` is agent-skills text, vendored at the first sync, and a skill writes it. Source: de241b38:skills/constraint-driven-development/SKILL.md, checked 2026-11-04.

### Where the evidence stops
- `docs/STATUS.md`: the evidence stops at Peter's prompt and the commit. The transcript of that session is gone, so the talk between the prompt and the commit is lost. Source: a local log, checked 2026-11-04.
- `docs/intent/workspace-and-stateful-interview.md`: the evidence stops at the text in session edcc9768 and at the claude.ai origin of the prompt file. Source: the findings under that heading, checked 2026-11-04.
- The older line: the earlier projects behind it are not on this machine, and transcripts before 2026-09-08 are gone, so only Peter's prompts and the carried-over commit message show that work. Source: a local log; commit 4c0c5c22, checked 2026-11-04.
- Upstream: the mattpocock/skills clone used on 2026-09-19 was in a scratch folder and is gone, so its text here comes through RES-002, RES-003, the seeded files and the logs. Source: docs/research/RES-002-matt-over-addy.md:18, checked 2026-11-04.

## Follow-ups
- UNVERIFIED: The design conversation behind `docs/intent/workspace-and-stateful-interview.md` took place on claude.ai. The prompt file came from there; no source shows that the doc did.
- UNVERIFIED: `docs/STATUS.md` descends from `docs/plan/STATE.md` or from a ledger in an earlier project. The roles match; no source states the link.
- UNVERIFIED: `docs/agents/workspace.md` descends from `docs/agents/workflow.md`. The roles overlap; the design doc credits Matt's tracker doc instead.
- UNVERIFIED: The agent, not Peter, chose the name `docs/STATUS.md`. The transcript of that session is gone.
- UNVERIFIED: Peter's old `PLAN-001` reached 3,429 lines, as the design doc says. The largest `PLAN-001` in this repo has 616 lines, and the earlier project that held it is not on this machine.
- UNVERIFIED: Peter wrote the "Required capabilities" checklist himself. The logs show his paste, not where the text was first written.
- Can Peter confirm where the design conversation took place, and can its text be recovered for IDEA-003#25?
- Does the map need a row for what `docs/agents/workflow.md` did, since brain has no file with its one-owner-per-record table?
- Do the earlier projects behind the older line still exist anywhere, so that line can be read at its source?
