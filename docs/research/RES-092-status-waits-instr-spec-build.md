---
id: RES-092
status: resolved # in-progress | resolved
kind: research
from: IDEA-016#22 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-21
outcome: answered
---
# RES-092: How the spec, plan, build, review and ship instructions handle status and waits

## Question
How do the spec, plan, build, review and ship instructions set, change and rely on status and waits: those skills, the commands, the references, the personas and the vendored skills' own conventions?

## Answer
Sufficient answer: with a source per claim, for a spec, a plan row, a checkpoint, a phase and a wave, each instruction that sets or changes a status or a wait (file, value, moment, writer); each instruction that relies on reading them; each moment where no instruction keeps a status current; how the Claude and Gemini command copies differ in their status words; the commit contract and stage boundaries; each vendored skill, reference or hook that carries its own convention for task state and whether it conflicts with Brain's rows; every literal status value or wait word in these texts; and for each file, whether it is vendored or Brain-owned. The record states what could not be established and names contrary evidence.

Three independent agents checked this record (sources, coverage, contrary evidence). The record is repaired from their results. The section "Checks" gives the count for each check.

### Short answer
- Of the five item kinds in the question (spec, plan row, checkpoint, phase, wave), only the plan row has a stored status. Its home is the Status cell of the row table in `tasks/plan.md`. A checkpoint is a plan row.
- These instructions write two more stored statuses, on other item kinds. The spec skill sets an idea to `specced`. A decision record gets `accepted` from its template when the spec skill or the planning skill tells the agent to write one.
- In this topic's files, only two moments write a row status. The planner writes `open` when it writes the plan. The main session of the build writes `resolved` in "Close a row", after the task's commit or merge.
- The protocol adds a general rule for every session, "Task end": update the row's status and result link. It names no value. Row 23 owns the protocol.
- The values `in-progress` and `superseded by NN` are defined for a plan row. No instruction has a step that sets either value. For `superseded by NN` the planning skill gives the condition ("when row NN replaced it") and a general writer rule. For `in-progress` it gives neither, and the build text says a running task keeps its row `open`.
- A spec stores no status and no wait. The idea goes to `specced` when the spec is written, which is before the user approves the spec.
- A checkpoint row is closed after the user's yes. Its Result cell holds the checks and that yes. No instruction covers a "no".
- A phase and a wave have no row, no status and no field of their own. A phase is the tasks in one checkpoint's Blocked by. A worked-out copy of the waves, and of the phases that share a wave, is stored as text in the plan's Parallel waves section.
- The only stored wait of this topic is the Blocked by cell, which names rows of the same table. A checkpoint on the frontier also holds back every new task of an autonomous build, and that wait is in no cell. Every other wait is prose in a section, a table in a decision record, or a question in chat.
- Review, verify and ship write no status of any Brain item. Their results are a verdict in chat.
- The Claude and Gemini command copies use the same status words. One pair differs in a status word: the description of the status command.
- The vendored files carry their own checklists, an ADR status vocabulary, rules on TODO comments and a "check the task off" wording. None of them names a Brain row. One of them, the context-engineering skill, tells the agent to persist a task status and the required approvals before a session ends, and names no home for the status. Some vendored files use "phase" and "checkpoint" for a concept other than the glossary's.

The evidence answers the question for the named decide rows. What stays unknown is outside these instruction files, and section 17 names the row that owns each part.

### 1. A spec
| Moment | Instruction | What is written | Value | Writer | Source |
|---|---|---|---|---|---|
| Capability map (only for a bundled request) | Propose the map, get the user's approval, record it | A decision record with a module table ("Depends on" column) and a build order | no status of a spec; the record's own `status: accepted` comes from the DEC template | the spec agent, after the user's yes | `skills/spec-driven-development/SKILL.md:57-80`, `scripts/workspace/templates/DEC.md:3` |
| Spec creation | `brain new-doc SPEC <slug>` | `spec.md`, `tasks/plan.md`, `tasks/todo.md` from templates | frontmatter `spec:` and `sources: []`; no status | the spec agent, through the CLI | `skills/spec-driven-development/SKILL.md:149-155`, `scripts/workspace/templates/spec.md:1-4` |
| Spec creation for a spec that came in chat, or from a file outside the workspace | `brain new-doc SPEC`, then put the spec into `spec.md` "as spec-driven-development's step 5 says" | the same three files | the same | the planner, through the CLI | `skills/planning-and-task-breakdown/SKILL.md:184-190`, `.claude/commands/plan.md:7` |
| Spec writing | Fill `sources:` | every IDEA, DEC and RES file the spec comes from | a list of IDs | the spec agent | `skills/spec-driven-development/SKILL.md:158` |
| Spec writing | Set the idea's status | the idea file's `status` | `specced` | the spec agent | `skills/spec-driven-development/SKILL.md:159` |
| Spec writing | Keep an unanswered binding assumption | the spec's Open Questions section | prose | the spec agent | `skills/spec-driven-development/SKILL.md:93` |
| Spec approval | "Confirm the spec with the user before proceeding" | nothing | none | the user, in chat | `.claude/commands/spec.md:23` |
| A decision, the scope, a prototype result or a seam changes | "Keeping the Spec Alive": update the spec | the body of `spec.md` | no status | the agent that works on it | `skills/spec-driven-development/SKILL.md:210-219`, `:104` |
| Planning, build, review, ship | none | no status in `spec.md` | none | none | sections 2, 6 and 9 |

Four facts go with the table:
- **The order of `specced` and the approval.** The step that fills `spec.md` also sets the idea to `specced` (`skills/spec-driven-development/SKILL.md:155-159`). The user's review and approval of the completed spec come after that step (`:84`, `:95`, `:263`, `.claude/commands/spec.md:23`). No instruction tells the agent to wait with `specced` until the approval, and none sets the idea back.
- **Two instructions for one write.** The interview skill also says "Set `specced` once a spec lists the idea in `sources`" (`skills/interview-me/SKILL.md:187`). Row 21 owns that file.
- **Several specs from one idea.** A bundled request gets one spec per module (`skills/spec-driven-development/SKILL.md:80`). Each IDEA file that a spec uses goes into its `sources:` (`:88`). So the idea is `specced` at the first module spec that names it. No instruction marks a module of the map as specced or built.
- **An external spec tool.** When the project uses OpenSpec or another specification system, the skill keeps that system's format and creates no spec folder (`skills/spec-driven-development/SKILL.md:163`). The texts do not say where status and waits then live. No `sources:` field exists on that path, and the `specced` step reads `sources:`.

The waits a spec has in these texts:
- on the user: each gate of the four stages, the capability map, each binding assumption, each new test seam, the reframed success criteria and the final approval;
- on an interview: an unfinished row, a partial answer or a pending confirmation keeps the interview open;
- on a prototype: a design question that needs a runnable answer;
- on another spec: the capability map's "Depends on" column and build order, kept in a decision record body.

None of these waits is a field. The spec's only stored link is `sources:`, and the skill says that links run one way.

### 2. A plan row
| Moment | Instruction | What is written | Value | Writer | Source |
|---|---|---|---|---|---|
| Spec creation | the plan template writes the table header | no row | none | the CLI | `scripts/workspace/templates/plan.md:15-18` |
| Spec creation | the todo template writes two sample blocks | "## Task 01" and "## Checkpoint 02" with unticked boxes, for rows that do not exist yet | `- [ ]` | the CLI | `scripts/workspace/templates/todo.md:8-24` |
| Planning | write one row per task | Status | `open` | the planner | `skills/planning-and-task-breakdown/SKILL.md:225` |
| Planning | write the blocking edges | Blocked by | row numbers of the same table, or `—` | the planner; the user approves the edges | `skills/planning-and-task-breakdown/SKILL.md:58`, `:226`, `:150` |
| Planning | write one block per row | `tasks/todo.md`, unticked boxes | `- [ ]`; no status line, no dependencies | the planner | `skills/planning-and-task-breakdown/SKILL.md:94-117` |
| Planning, each answer of the user | apply the answer to the rows and blocks; write Parallel waves again | rows, edges, blocks | not stated | the planner | `skills/planning-and-task-breakdown/SKILL.md:153` |
| Replanning the same work | update rows and blocks in place | rows | not stated | the planner | `skills/planning-and-task-breakdown/SKILL.md:194` |
| A task starts | none | nothing | the row stays `open` | none | `.claude/commands/build.md:61` |
| A sub-agent ends a task | write a result file outside the repo, reply pass or fail | `T<NN>-result.md` | pass, fail, a question | the sub-agent | `.claude/commands/build.md:70-72` |
| After the task's commit (`/build`) or merge (`/build auto`) | "Close a row" | ticks in the task's block; Status; Result; the Parallel waves section | `resolved`; commit SHA, verification command and outcome | the main session only | `.claude/commands/build.md:100-106` |
| After "Close a row" | commit the two state files alone | a state-record commit | none | the main session | `.claude/commands/build.md:106`, `references/brain/commit-contract.md:9` |
| Task end, in any session (the protocol) | "Update the row in the map or in `tasks/plan.md`: its status and result link" | Status and Result | no value named | the main session; "a sub-agent reports instead" | `protocol/PROTOCOL.md:51` |
| A task fails | keep the worktree and the branch | nothing in the plan | the row stays `open` | none | `.claude/commands/build.md:96` |
| A row is replaced | no step; the Status rule gives the condition "when row NN replaced it" | Status | `superseded by NN` | by the general rule, the planner, or the main session during the build | `skills/planning-and-task-breakdown/SKILL.md:225`, `:229` |
| The user turns noticed work into tasks | none | no rule for the new row, its status or its edges | not stated | not stated | `skills/incremental-implementation/SKILL.md:134-143` |

The conditions before a task counts as done, in order:
1. Each slice is tested, verified and committed (`skills/incremental-implementation/SKILL.md:40-46`).
2. The full suite passes once and the build is clean (`skills/incremental-implementation/SKILL.md:275-276`).
3. `code-review-and-quality` has run on the task's diff and the review passes (`skills/incremental-implementation/SKILL.md:278`).
4. The Definition of Done holds (`skills/incremental-implementation/SKILL.md:283`).
5. In `/build auto`: the main session reads the result file, the diff and the evidence, merges, and runs the repo check (`.claude/commands/build.md:73-75`).
6. "Close a row" (`.claude/commands/build.md:76`).

### 3. A checkpoint and its phase
| Moment | Instruction | Value | Writer | Source |
|---|---|---|---|---|
| Planning | add a row of type `checkpoint` after every 2 to 3 tasks, with a block of unticked boxes | `open` | the planner | `skills/planning-and-task-breakdown/SKILL.md:126-137` |
| Planning | list the phase's tasks in the checkpoint's Blocked by; list the checkpoint in the Blocked by of each later task that depends on the phase, "and of no other task" | row numbers | the planner | `skills/planning-and-task-breakdown/SKILL.md:139` |
| Build, the checkpoint reaches the frontier | start no new task; finish and merge the running tasks; run the block's checks; present what the phase built | none yet | the main session | `.claude/commands/build.md:80` |
| The user's unambiguous yes | "close the checkpoint row, its result the checks and the user's yes" | closed; the value `resolved` is not named for a checkpoint | the main session | `.claude/commands/build.md:80` |
| A failed check, or a reply that is not a yes | none | the row stays `open`; the phase's task rows stay `resolved` | none | `.claude/commands/build.md:80`, `skills/incremental-implementation/SKILL.md:226` |

A phase has no file, no status and no Blocked by of its own. It exists as the task numbers in one checkpoint's Blocked by cell.

The checkpoint row is the only stored sign that a phase was reviewed. The sign has three parts: the row's Status, its Result cell (the checks and the user's yes) and the ticks of its block, which holds the box "Review with human before proceeding" (`skills/planning-and-task-breakdown/SKILL.md:136`). The Result cell is where the user's yes for a phase is stored. Two other approvals of this topic reach a record: the capability map gets a decision record (`skills/spec-driven-development/SKILL.md:78`), and the plan's three dimensions keep their "approval source in the existing decision records" (`skills/planning-and-task-breakdown/SKILL.md:153`). The approval of a spec and the single approval of `/build auto` reach none.

The value `resolved` for a checkpoint is an inference. The build text says "close the checkpoint row". "Close a row" names "a task's commit", "the task's block" and "the task's row" (`.claude/commands/build.md:100-103`).

A checkpoint blocks two different sets of tasks today:
- **Stored.** The plan puts the checkpoint into the Blocked by of the later tasks that depend on its phase, and of no other task. "A checkpoint that blocks more holds back work it never reviewed" (`skills/planning-and-task-breakdown/SKILL.md:139`; `GLOSSARY.md:75-76` says the same).
- **Not stored.** In a build, a checkpoint row on the frontier stops every new task: "Start no new task" (`.claude/commands/build.md:80`), "No new task starts until the user says yes" (`skills/incremental-implementation/SKILL.md:226`). A task that no Blocked by cell ties to the checkpoint is free in the plan and held in the build.

### 4. A wave and the frontier
- `brain plan --json` works out the frontier: its first wave is every `open` row whose Blocked by rows are all `resolved`. It also gives `criticalPath` and `maxParallel` (`.claude/commands/build.md:58`).
- The plan stores a copy of the waves in its "Parallel waves" section. The section also holds the critical path, the files that tasks in one wave share and the phases that share a wave (`skills/planning-and-task-breakdown/SKILL.md:237`). The planner writes it. The main session replaces it at every "Close a row", because a resolved row leaves the waves (`.claude/commands/build.md:104`).
- "Close a row" also repairs the format: "A plan without the section gets one, below the Tasks table" (`.claude/commands/build.md:104`, `commands/build.toml:104`). So a plan from an older format gets the section by instruction at its first closed row, not by a migration.
- `brain check` reports a section that differs from what `brain plan` prints (`skills/planning-and-task-breakdown/SKILL.md:247`).
- A wave has no status and no field. The build reports, at its end, how many tasks started at once in each wave (`.claude/commands/build.md:54`).
- The one-task mode names no `brain plan` call and no order among several frontier rows. The order rule (`criticalPath` first, then table order) is in "Run the frontier" (`.claude/commands/build.md:61`), which only the autonomous mode cites (`:47`).

### 5. Instructions that rely on reading a status or a wait
| Reader | What it reads | What it does with it | Source |
|---|---|---|---|
| `/build`, one task | the frontier of `tasks/plan.md` | takes the next row | `.claude/commands/build.md:28` |
| `/build auto` | "no spec is active" | stops and sends the user to `/spec` | `.claude/commands/build.md:43` |
| `/build auto` | "`tasks/plan.md` holds no task row yet" | runs the planning skill | `.claude/commands/build.md:45` |
| `/build auto` | the frontier, `criticalPath`, `sharedFiles`, the cap | starts every frontier task at once up to the cap | `.claude/commands/build.md:61-62` |
| `/build auto` | a closed row | runs `brain plan --json` again and starts the new frontier tasks | `.claude/commands/build.md:79` |
| `/build auto` | a checkpoint row on the frontier | stops the build for the user's review | `.claude/commands/build.md:80` |
| `/build auto`, resumed | the frontier | continues after a blocker or on a host with no sub-agent | `.claude/commands/build.md:53`, `:82` |
| `/plan` | "no spec exists in the specs folder or in the conversation" | stops and sends the user to `/spec` | `.claude/commands/plan.md:7`, `commands/planning.toml:6` |
| `/plan` | the plan "already holds task rows" | stops and asks before writing | `.claude/commands/plan.md:26` |
| planning skill | a row that is `open` or `in-progress` | calls the plan incomplete; the same work is updated in place; different work stops for one question with three ways out: finish the old plan, discard it explicitly, or give the new work its own spec folder | `skills/planning-and-task-breakdown/SKILL.md:192-195` |
| planning skill | exit 1 of `brain plan` | fixes a cycle, a blocker that is not a row, or a row that a superseded row blocks | `skills/planning-and-task-breakdown/SKILL.md:245` |
| build and plan commands | "the active spec" | name `docs/agents/workspace.md` and its section "Find the active effort" | `.claude/commands/build.md:9`, `.claude/commands/plan.md:7` |
| planning, incremental-implementation and test-driven-development skills | "the active spec" | name `docs/agents/workspace.md` only, not the section | `skills/planning-and-task-breakdown/SKILL.md:28`, `skills/incremental-implementation/SKILL.md:21`, `skills/test-driven-development/SKILL.md:44` |
| review skill | the spec of the change | looks in its own order: an issue reference in the commit messages (`gh issue view`), then a path from the user, then a spec folder "whose slug or `spec.md` title matches the branch name or the feature", then one question | `skills/code-review-and-quality/SKILL.md:43-48` |
| `/status` | the report of `brain status` | reports it | `.claude/commands/status.md:5` |
| spec skill | the idea file "of a finished interview" and its DEC and RES files | writes the spec from them | `skills/spec-driven-development/SKILL.md:88` |
| spec skill | the capability map's module ids | "Specs, plans, and downstream commands select work by these ids"; no command of this topic takes a module id | `skills/spec-driven-development/SKILL.md:72` |

The review skill reads no row status. So it finds its spec when every row is `resolved`, at which point the spec is finished by the rule of `docs/agents/workspace.md:67`.

### 6. Moments where no instruction keeps a status current
- **A spec, at every moment.** No instruction writes a status of a spec at creation, approval, planning, build, review or ship. Its state is worked out from its plan rows (`docs/agents/workspace.md:67`).
- **A spec that is written and not approved.** The idea is already `specced`. No instruction changes it back when the user rejects the spec or asks for changes.
- **Between spec creation and the first plan row.** The idea is `specced`, so it is finished. The new spec has no row, and the code counts a spec with no row still to do as finished (`scripts/workspace/effort.ts:73`). So no stored status marks this effort as active in that gap. The branch name or the user's naming can still select it (`docs/agents/workspace.md:69-70`, `scripts/workspace/effort.ts:91-98`). The depth is in row 19.
- **The spec's approval.** The command and the skill name the approval. No instruction names a place that stores it.
- **A bundled request.** The idea is `specced` at the first module spec. Which modules still wait for a spec or a build is stored nowhere.
- **An external spec tool.** No instruction keeps any Brain status current on that path (section 1).
- **A task that runs.** The row stays `open`. `in-progress` is defined, and `docs/agents/workspace.md:39` reports "rows in progress", but no instruction of this topic writes the value. So the frontier cannot tell a startable row from a running row. A resumed build, or a second session, reads both as startable (`.claude/commands/build.md:53`, `:61`, `:82`). The planning skill names the risk itself: "The open rows may be mid-build in another session" (`skills/planning-and-task-breakdown/SKILL.md:195`, `:269`).
- **A task that failed, or that waits on a question.** The row stays `open`, so it is on the frontier again at the next invocation. The facts are in a result file outside the repo and in the kept worktree (`.claude/commands/build.md:70`, `:96`).
- **A stop-and-ask wait of the build.** The build texts name no place for it. The protocol says to keep user waits "in the active effort's rows and records" (`protocol/PROTOCOL.md:54`).
- **A row that another row replaces.** `superseded by NN` is defined with its condition. No instruction has a step that sets it.
- **A plan the user discards.** "Discard it explicitly" is one of three ways out (`skills/planning-and-task-breakdown/SKILL.md:195`). No instruction says what its rows become. They stay `open` or `in-progress`, and `superseded by NN` needs a row NN that replaces each one.
- **A checkpoint in `/build` one-task mode.** The one-task mode says "Take the next row on the frontier" (`.claude/commands/build.md:28`), and that row can be a checkpoint row. Its steps 1 to 8 describe a task only (`:30-37`). The checkpoint rule is item 7 of "Run the frontier" (`:80`); the autonomous section points to it (`:47`), and the skill repeats it in its parallel section (`skills/incremental-implementation/SKILL.md:226`).
- **A checkpoint that the user does not approve, or whose check fails.** The row stays `open` and the phase's rows stay `resolved`. No instruction says what to write.
- **A row that is `resolved` and later proves wrong.** No instruction of this topic sets a row from `resolved` back to `open`: not after a failed checkpoint, a review verdict of Request changes or Reject, or a revert. The word "reopen" is used only for approval dimensions and choices.
- **New tasks from noticed work.** Whether noticed work becomes tasks is the user's decision. No text says who writes the new row, with which status and edges, or how a sub-agent, which writes no row, passes it on.
- **The last row is resolved.** No instruction marks the spec, or its idea, as built.
- **A review verdict and a ship decision.** Neither is written to a row, a spec or an idea.
- **The two marks of a done task.** The ticks in `tasks/todo.md` and the row status are both written in "Close a row". No workspace code reads a tick, so only that instruction keeps the two in step.
- **The plan's approval.** The planning skill keeps "its approval source in the existing decision records". The single approval of `/build auto` is a reply in chat. After a blocker the user re-invokes `/build auto`; step 4 has no exception for a build that was approved before, and no file stores that approval.
- **A build that a later session resumes.** The instruction that makes up for a row that is not current is in `docs/agents/workspace.md:77`: "Reconcile completed work with actual changes and verification evidence before repeating a task", from the plan, the todo file and "relevant result records". The build writes the result files "in a folder outside the repo" (`.claude/commands/build.md:70`), so a later session may not find them. Row 23 owns that file.

### 7. The Claude and Gemini command copies
| Pair | Status and wait words | Difference |
|---|---|---|
| `.claude/commands/build.md`, `commands/build.toml` | the same: `open`, `resolved`, `Blocked by`, frontier, pending, checkpoint row, wave, "Close a row" | host mechanics only. Claude tells a running task to rebase (`.claude/commands/build.md:77`). Gemini rebases a finished task itself before the merge (`commands/build.toml:74`), and runs every task through the worktree fallback (`commands/build.toml:58`). |
| `.claude/commands/plan.md`, `commands/planning.toml` | the same | how to run `brain` |
| `.claude/commands/spec.md`, `commands/spec.toml` | the same | the plan command's name, `/plan` and `/planning` (`:21`, `:20`), and how to run `brain` (`:19`, `:18`) |
| `.claude/commands/status.md`, `commands/status.toml` | the bodies use the same status words; the plugin path is written per host (`:7`, `:6`) | the descriptions differ. Claude: "Report the active work from the workspace's rows and records". Gemini: "Report the active work in five lines: stage, last step, next step, red items, decisions waiting on the user". |
| `.claude/commands/review.md`, `commands/review.toml` | the same verdict words | "where the host has them" for sub-agents |
| `.claude/commands/test.md`, `commands/test.toml` | the same | none in these words |
| `.claude/commands/ship.md`, `commands/ship.toml` | the same: GO, NO-GO, Blockers | host mechanics only |

Neither copy of any command names `in-progress`, `specced` or `superseded`.

### 8. The commit contract and the stage boundaries
- The commit contract (`references/brain/commit-contract.md`, Brain-owned) is read by the build command and by the incremental-implementation skill before the build. Other texts name it too: the planning skill's Result rule (`skills/planning-and-task-breakdown/SKILL.md:227`), the router (`skills/using-brain/SKILL.md:63`, `:96`), the protocol's "Task end" (`protocol/PROTOCOL.md:55` and its rendered copies), `AGENTS.md:23` and `docs/maintainers/changes.md:20`.
- Its five rules set the order: verified slice commits; checks and review before a task is declared complete; the main session reads every result file before integration; one task integrated at a time; the main session alone updates plan rows and task ticks, in a separate commit after the named commit exists.
- It names four kinds of commit: a preparatory plan commit, implementation commits, an integration commit and a state-record commit.
- It names one wait: an approved build continues within that approval, but a new product choice or outward action still follows the user's decision.
- The stage boundaries reference (`references/brain/stage-boundaries.md`, Brain-owned, adapted from mattpocock/skills) defines the six stages. It says a stage ends when its result is on disk, and its list of results holds "a verdict". It names no status value. It says the plan's rows and result records carry the state of a build.

### 9. Review, verify and ship
- The review skill gives one verdict: Approve, Request changes or Reject. Reject means "re-spec before rework". The verdict is reported. No instruction writes it to a plan, a spec or an idea.
- The review skill reads the spec it finds and the task's block in `tasks/todo.md`. It reads no status.
- The test command and the test-driven-development skill write no status. A new test seam waits on the user, and dependent tests stay pending.
- The ship command gives GO or NO-GO as "a single output". A Critical finding makes NO-GO the default "unless the user explicitly accepts the risk". The ship texts name no spec, plan, row or idea.
- The three ship personas return reports. They read no Brain status and write none.

### 10. Conventions of vendored and adapted files
This table covers the 33 files of the topic and the files read beside them. Its last vendored row names the vendored files that are in no topic's file list.

| File | Owner | Its convention | Conflict with Brain's rows |
|---|---|---|---|
| `references/definition-of-done.md` | vendored | a standing checklist of 20 unticked boxes at three levels: per task ("before checking the task off"), per feature ("before considering the feature complete") and per release | No write. "Checking the task off" assumes one mark per task; Brain has a row status and ticks. The text expects a done state per feature; Brain stores none for a spec. |
| `references/orchestration-patterns.md` | vendored | the lifecycle is user-driven commands with "human checkpoints" between them; an agent that runs `/spec`, `/plan`, `/build` in turn is an anti-pattern; Agent Teams have a "shared task list"; a table row "Status" with `Stable` and `Experimental` | No write. "Checkpoint" here is a human review between stages, not a checkpoint row. `/build auto` collapses plan and build into one run, which is close to the anti-pattern. The "Status" row is the state of a host feature. |
| `skills/documentation-and-adrs/SKILL.md` | vendored | an ADR with a `## Status` body section: `Accepted`, `Superseded by ADR-XXX`, `Deprecated`; lifecycle `PROPOSED → ACCEPTED → (SUPERSEDED or DEPRECATED)`; default folder `docs/decisions/`; file name `ADR-001` | A second status vocabulary for decisions, in the same default folder as the DEC files. It is a body section, not frontmatter. `Deprecated` has no DEC value. The template's status line has no Proposed, but the lifecycle starts with it. The skill says an established convention overrides its defaults. The depth is in rows 21 and 26. |
| `skills/documentation-and-adrs/SKILL.md`, `skills/constraint-driven-development/SKILL.md`, `skills/shipping-and-launch/SKILL.md` | vendored | TODO as a code comment for unfinished work: do not leave one for work to do now; one that stays for weeks is a red flag; one "standing where the implementation should be" is unfinished work; no TODO to resolve before launch | No write. A TODO comment is not a task state and conflicts with no row. Only the name is shared with `tasks/todo.md`. |
| `skills/deprecation-and-migration/SKILL.md` | vendored | expand, migrate, contract "phases"; rollout "Phase 1" to "Phase 5" | No write. "Phase" here is a deploy step, not a plan phase. The planning skill takes the same order as blocking edges. |
| `skills/constraint-driven-development/SKILL.md` | vendored | a table with a "Phase" column that lists the stages BUILD, VERIFY, REVIEW, SHIP | No write. The glossary avoids "phase" for the lifecycle. |
| `skills/doubt-driven-development/SKILL.md` | vendored | `/review` is "a verdict on a finished artifact" and "a final gate"; a loop of at most 3 cycles, then the user | No write. |
| `skills/browser-testing-with-devtools/SKILL.md` | vendored | a checklist: "All DevTools findings are addressed before marking complete"; sample requests with `{ status: "completed" }` and `{ status: "pending" }` | No write. The sample status is a sample app's. |
| `skills/source-driven-development/SKILL.md` | vendored | asks the user in chat on a version gap or a conflict | No write. |
| `skills/git-workflow-and-versioning/SKILL.md` | vendored | one worktree per branch for parallel agents; a change summary with "separate task" | No write. The build command sets its own worktree rules. |
| `skills/codebase-design/DESIGN-IT-TWICE.md` | vendored | shows the user a text, then proceeds at once with parallel sub-agents | No write and no wait. |
| `skills/context-engineering/SKILL.md` | vendored, topic of row 23 | a write rule that names no Brain field. Before leaving a session, persist five things: the accepted scope and decisions "in the spec or plan"; "the current task status and the next pending task" (no place named); the files changed; the verification commands and outcomes; "unresolved questions, risks, and required approvals". The fresh session reads "task status". "Do not infer approval from a previous conversation unless the durable artifact records it." | It conflicts in three ways. A running task keeps its row `open`, and only "Close a row" changes a row. Only the main session writes plan rows, but this text speaks to any agent that leaves a session. The approval of a spec and of `/build auto` live only in chat. The spec skill sends the build to this skill (`skills/spec-driven-development/SKILL.md:208`). "Pending" stands for a row that is `open`. |
| `skills/shipping-and-launch/SKILL.md` | vendored, borderline in the inventory | 49 unticked boxes; rollout advance, hold or roll back | No write. It names no Brain item. |
| `agents/*.md` (4 personas) | vendored, borderline in the inventory | a verdict `APPROVE | REQUEST CHANGES`; severities Critical, High, Medium, Low; "block release"; a report line `- [X] tests covering [Y] functions/components`, which is a placeholder and not a tick | No write. |
| `hooks/*` | vendored | no task state | None. |
| Vendored files in no topic's file list: `references/performance-checklist.md`, `security-checklist.md`, `observability-checklist.md`, `accessibility-checklist.md`; `skills/api-and-interface-design/SKILL.md`; `references/testing-patterns.md`; `skills/constraint-driven-development/references/floor-guard.md`; the `SKILL.md` of security-and-hardening, performance-optimization, code-simplification, observability-and-instrumentation, frontend-ui-engineering and ci-cd-and-automation | vendored | checklists of unticked boxes (88, 49, 46 and 30 in the four references; 7 to 13 in the six skills); sample task statuses `"IN_PROGRESS"`, `"COMPLETED"`, `'in_progress'`, `'pending'`; a guard that counts `TODO`, `.skip` and `.todo` as unfinished or skipped work | No write of a Brain row. `in_progress` and `IN_PROGRESS` are two more spellings of a status word in shipped text. |
| `references/brain/agent-brief.md` | Brain-owned, adapted from mattpocock/skills | a brief posted "when it moves to `ready-for-agent`"; unticked acceptance boxes; a `wontfix` label | A tracker state that no current Brain file defines. The label was part of the old layout: its fixture holds `ready-for-agent`, and the migration removes the legacy tracker files when approved. The research brief reads the file for its principles only. |
| `skills/planning-and-task-breakdown/SKILL.md` | Brain-owned, seeded | unticked boxes in each task block and checkpoint block | A second mark of a done task beside the row status. |
| `scripts/workspace/templates/todo.md` | Brain-owned, topic of row 17 | two sample blocks with unticked boxes in a new spec folder | Two blocks with no rows until the planner writes the plan. `brain check` passes the files as the templates wrote them. |
| `skills/test-driven-development/SKILL.md` | Brain-owned, seeded | sample code with `status: 'pending'` and `'completed'` | None. It is the status of a sample app's object. |
| `skills/debugging-and-error-recovery/SKILL.md` and its `hitl-loop.template.sh` | Brain-owned; the template is adapted from mattpocock/skills | "A bug without a loop stays open"; a shell prompt that waits for Enter; a "cheap checkpoint" | No record. The wait is in chat or in a terminal. |

No instruction file of this topic holds a ticked box. Every checklist is a template or a skill's own list. No vendored file keeps a list of done tasks; the nearest thing is the "shared task list" of Agent Teams, which is a host feature.

### 11. Waits on the user that store nothing
- Ten command files state one standing rule: a decision that is the user's goes through the host's user-question tool, one question per call. The ship and status commands do not state it.
- The build texts name four kinds of stop:

| Kind | Conditions | Retry rule | Source |
|---|---|---|---|
| Stop and ask, then re-invoke | a test that cannot pass, a merge conflict larger than a small overlap, a broken build, an ambiguous spec, a decision the spec does not cover, a high-risk or irreversible task | the user resolves the blocker and re-invokes `/build auto`, which resumes from the frontier | `.claude/commands/build.md:48-53` |
| Stop and ask | uncommitted changes outside the spec folder | none stated | `.claude/commands/build.md:44` |
| Ask and go on | a leftover worktree folder from a stopped build | none; it is a question, not a stop | `.claude/commands/build.md:90` |
| Stop and tell | a foreign line in the session's tree: "stop the build, merge nothing, and tell the user" | none stated | `.claude/commands/build.md:93` |

- A host with no sub-agent tool has its own re-invoke rule: do one task, close the row, clear the context and re-invoke (`.claude/commands/build.md:82`).
- The other skills ask in chat: review (no spec found; dead code), incremental-implementation (new tasks for noticed work), test-driven-development (a new seam), debugging (no feedback loop), doubt-driven-development (cross-model; 3 cycles), constraint-driven-development (four questions), source-driven-development (versions; a conflict), browser testing (navigation; a DOM change).
- No instruction of this topic's files writes one of these waits to a record. In these files, a wait that outlives the session lives only in the spec's Open Questions, the plan's Open questions, or a checkpoint row.
- The protocol says the opposite in general terms: "Keep the next action, red items and user waits in the active effort's rows and records. A user-run step is a do row with its exact command, blocking rows that need it." It also says to record what is "waiting for approval" (`protocol/PROTOCOL.md:54-55`). A plan's row types are `task` and `checkpoint` only, and the build texts name no row for a stop-and-ask wait. Row 23 owns the protocol.

### 12. Literal values and wait words in these texts
| Kind | Words | Where |
|---|---|---|
| Stored status of a plan row | `open`, `in-progress`, `resolved`, `superseded by NN` | `skills/planning-and-task-breakdown/SKILL.md:225`; every line is in the list below this table |
| Stored status of an idea | `specced` | `skills/spec-driven-development/SKILL.md:159` |
| Stored status of a decision record | `accepted`, through the DEC template | `scripts/workspace/templates/DEC.md:3`; the instructions to write one are `skills/spec-driven-development/SKILL.md:78` and `skills/planning-and-task-breakdown/SKILL.md:205` |
| Row type | `task`, `checkpoint` | `skills/planning-and-task-breakdown/SKILL.md:224` |
| Empty cell | `—` in a plan; `none` in the "Depends on" cell of a capability map | `skills/planning-and-task-breakdown/SKILL.md:226-227`, `skills/spec-driven-development/SKILL.md:64` |
| Boxes | `- [ ]`, "tick" | `skills/planning-and-task-breakdown/SKILL.md:101-108`, `.claude/commands/build.md:102` |
| Sub-agent reply | pass, fail, question | `.claude/commands/build.md:71` |
| States that are worked out or only said | active, pending, running, failed, skipped, flagged, complete, completed, closed, incomplete, mid-build, stale, approved, not approved, settled, unresolved, reopen, discard, validated, verified, living, outdated, "waiting on the user" | `.claude/commands/build.md:9`, `:21`, `:46`, `:54`, `:61`, `:79`, `:96`; `skills/planning-and-task-breakdown/SKILL.md:145`, `:192-195`, `:247`; `skills/spec-driven-development/SKILL.md:25`, `:91-97`, `:212`, `:228`; `references/brain/commit-contract.md:5-6`; `commands/status.toml:1` |
| More of the same kind | finished; done; started, kept; "rows still to do"; "newly reached the frontier"; "wait to merge"; "red items"; "feature complete"; deferred; AFK | finished: `skills/spec-driven-development/SKILL.md:88`, `:159`. done: `skills/planning-and-task-breakdown/SKILL.md:249`, `skills/spec-driven-development/SKILL.md:161`, `skills/incremental-implementation/SKILL.md:268`, `:278`. The others: `.claude/commands/build.md:54`, `:58`, `:79`; `skills/incremental-implementation/SKILL.md:217`; `commands/status.toml:1`; `references/definition-of-done.md:56`; `skills/code-review-and-quality/SKILL.md:304`; `references/brain/stage-boundaries.md:49` |
| The states DEC-051 names as worked out: ready, waiting, in review | "ready" is used six times and names no stored state of a Brain item; "waiting" as a state is used once; "in review" is not used as a state | ready: `references/definition-of-done.md:11`, `skills/code-review-and-quality/SKILL.md:249`, `skills/doubt-driven-development/SKILL.md:189`, `skills/incremental-implementation/SKILL.md:159`, `references/brain/agent-brief.md:5`, `:13`. waiting: `commands/status.toml:1` |
| Row status words used with another meaning | "open": open findings, a judgement that "stays open", an interview kept open, "every open task" in a sample. "resolved": review issues, "resolves a blocker", "Resolve a failure, missing evidence or question" | `skills/code-review-and-quality/SKILL.md:99`, `:107`, `:303-304`; `skills/spec-driven-development/SKILL.md:89`; `references/brain/agent-brief.md:27`; `.claude/commands/build.md:53`, `:73` |
| Test states | RED, GREEN; "red" for a feedback loop | `.claude/commands/build.md:32-33`, `skills/debugging-and-error-recovery/SKILL.md:10` |
| Review | Approve, Request changes, Reject; "Ready to merge"; Critical, Required, Nit, Optional, Consider, FYI; hard, judgement; APPROVE, REQUEST CHANGES; "Presumptive blockers" | `skills/code-review-and-quality/SKILL.md:89-109`, `:249`, `:310`; `agents/code-reviewer.md:64` |
| Ship | GO, NO-GO, Blockers, Recommended fixes, Acknowledged risks; Critical, Important, High; "launch blockers"; High, Medium, Low in the security persona | `commands/ship.toml:31-32`, `:43-52`; `.claude/commands/ship.md:32-33`, `:50`; `agents/security-auditor.md:61-64` |
| Stage names | define, plan, build, verify, review, ship; SPECIFY, PLAN, TASKS, IMPLEMENT; DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP | `references/brain/stage-boundaries.md:5`, `skills/spec-driven-development/SKILL.md:28`, `references/orchestration-patterns.md:88` |
| ADR (vendored) | Accepted, Superseded by ADR-XXX, Deprecated; PROPOSED, ACCEPTED, SUPERSEDED, DEPRECATED | `skills/documentation-and-adrs/SKILL.md:54`, `:96` |
| Host feature state (vendored) | Stable, Experimental, in a table row named "Status" | `references/orchestration-patterns.md:134` |
| Tracker (adapted) | `ready-for-agent`, `wontfix` | `references/brain/agent-brief.md:5`, `:125` |
| Sample code | `'pending'`, `'completed'`; `"completed"`, `"pending"` | `skills/test-driven-development/SKILL.md:75`, `:91`, `:143`, `:150`; `skills/browser-testing-with-devtools/SKILL.md:199`, `:204` |
| Wait words | Blocked by, blocking edges, blocks, blocker, task blockers, depends on, Depends on, dependency graph, dependency order, build order, frontier, wave, first wave, `criticalPath`, `sharedFiles`, checkpoint, phase, gate, gated, "the gate before implementation starts", "waits on", "Hypotheses wait for the loop", "stop and ask", "block or warn", sign-off, "until the user says yes", Open Questions, `sources:` | sections 1 to 5; `skills/planning-and-task-breakdown/SKILL.md:153`; `skills/debugging-and-error-recovery/SKILL.md:100`; `skills/constraint-driven-development/SKILL.md:74` |

Lines that hold a stored row value as a row status. A rename of a value touches each of them:
- `resolved`, 13 lines in 4 files: `.claude/commands/build.md:12`, `:58`, `:103`, `:104`; `commands/build.toml:11`, `:56`, `:103`, `:104`; `skills/incremental-implementation/SKILL.md:21`; `skills/planning-and-task-breakdown/SKILL.md:225`, `:227`, `:229`, `:259`.
- `open`: `.claude/commands/build.md:12`, `:58`, `:61`; `commands/build.toml:11`, `:56`, `:61`; `skills/incremental-implementation/SKILL.md:21`; `skills/planning-and-task-breakdown/SKILL.md:192`, `:195`, `:216-220`, `:225`, `:259`, `:269`, `:277`, `:301`.
- `in-progress`: `skills/planning-and-task-breakdown/SKILL.md:192`, `:225`, `:269`, `:277`, `:301`.
- `superseded`: `skills/planning-and-task-breakdown/SKILL.md:225`, `:245`.
- `specced`: `skills/spec-driven-development/SKILL.md:159`.

The same files use "resolve", "resolved" and "open" with other meanings on other lines, so a rename cannot be a plain replace. Outside the topic, the plan template (`scripts/workspace/templates/plan.md:13`, `:15`) and the lifecycle test of section 15 hold the same words.

### 13. Owner of each file
`AGENTS.md:14-15` gives the rule: a file under the `files` key of `upstream.lock.json` is vendored; the `seeds` key records provenance for Brain-owned files; an unlisted file is Brain-owned.

| Owner | Files of this topic |
|---|---|
| Vendored (`files` key), 10 | `references/definition-of-done.md`, `references/orchestration-patterns.md`, `skills/browser-testing-with-devtools/SKILL.md`, `skills/codebase-design/DESIGN-IT-TWICE.md`, `skills/constraint-driven-development/SKILL.md`, `skills/deprecation-and-migration/SKILL.md`, `skills/documentation-and-adrs/SKILL.md`, `skills/doubt-driven-development/SKILL.md`, `skills/git-workflow-and-versioning/SKILL.md`, `skills/source-driven-development/SKILL.md` |
| Brain-owned, seeded (`seeds` key), 17 | `.claude/commands/build.md`, `plan.md`, `review.md`, `spec.md`, `test.md`; `commands/build.toml`, `planning.toml`, `review.toml`, `ship.toml`, `spec.toml`, `test.toml`; the `SKILL.md` of code-review-and-quality, debugging-and-error-recovery, incremental-implementation, planning-and-task-breakdown, spec-driven-development, test-driven-development |
| Brain-owned, unlisted, 6 | `.claude/commands/status.md`, `commands/status.toml`, `references/brain/agent-brief.md`, `references/brain/commit-contract.md`, `references/brain/stage-boundaries.md`, `skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh` |
| Read beside the topic, vendored | `agents/code-reviewer.md`, `agents/security-auditor.md`, `agents/test-engineer.md`, `agents/web-performance-auditor.md`, `skills/shipping-and-launch/SKILL.md`, `skills/context-engineering/SKILL.md`, `hooks/*`, and the vendored files of the last vendored row of section 10 |
| Read beside the topic, Brain-owned | `.claude/commands/ship.md` (seeded) |

All 53 files under the `files` key match the hash that the lock holds.

Three of the six unlisted files are adapted from mattpocock/skills: `references/brain/stage-boundaries.md`, `references/brain/agent-brief.md` and the loop template. Each carries the line "Adapted from mattpocock/skills, MIT, commit c55ee46" in the file. The lock holds none of the three under `files` or `seeds`.

Every instruction that sets or reads a row status, a Blocked by cell, a checkpoint row or the Parallel waves section is in a Brain-owned file. No vendored file names `tasks/plan.md`, `tasks/todo.md`, a row table, Blocked by, the frontier or a `brain` command. Two vendored files still tell the agent to write state in their own terms. The ADR skill tells the agent to write a decision status in its own form, unless the repo has an established convention. The context-engineering skill tells the agent to persist a task status before a session ends.

### 14. Facts by decide row
- **Row 01, when an item stops blocking.** For a plan row, only `resolved` unblocks: the frontier is an `open` row whose Blocked by rows are all `resolved`. A superseded blocker does not unblock: `brain plan` exits 1 and names the row. A checkpoint unblocks after the user's yes, and no instruction covers a "no". No instruction reopens a `resolved` row, so a blocker never blocks again by instruction. No row status in these texts means "parked". A checkpoint has two blocking scopes (section 3), and only one of them is in a Blocked by cell.
- **Row 02, who writes, and when.** Today's writers in this topic are: the spec agent (the spec's `sources:`, the idea's `specced`, a decision record for the capability map), the planner (rows, edges, blocks, Parallel waves, a decision record for a planning decision, and the spec folder for a spec that came in chat), and the main session of a build ("Close a row"). A sub-agent writes no state file. The user writes nothing; the user's answers are applied by the agent. Outside the topic, the protocol's "Task end" tells the main session of every session to update the row's status and result link, and the interview skill repeats the `specced` write. The idea gets `specced` before the spec's approval.
- **Row 03, `brain status`.** The status commands hand the whole report to `docs/agents/workspace.md` and `brain status`. No other text of this topic reports on an effort that waits. The one stored user wait of a build, a checkpoint row on the frontier, is not in the "Waiting on the user" line: that line holds "Decide rows on the frontier" (`docs/agents/workspace.md:41`), and the code counts only `interview`, `prototype` and `ideate` rows (`scripts/workspace/status.ts:28-29`, `:130`). The checkpoint shows as "Next step". Row 19 owns the code.
- **Row 04, waits in prose.** The prose waits of this topic are: the spec's Open Questions, the plan's Open questions, the capability map's "Depends on" column and build order in a decision record, "keep dependent work pending" for a seam, the prototype detour, and the build's stop conditions. The protocol says to keep user waits in rows and records; the build texts name no row for them.
- **Row 08, a spec's status and the skills that keep it.** No skill writes a spec status today. The moments at which an agent already edits a file of the spec folder are:
  - `spec.md`: spec creation and spec writing; "Keeping the Spec Alive" (a decision, the scope, a prototype result or a seam changes); the prototype verdict; the protocol's "Update the spec when its facts change" at task end (`protocol/PROTOCOL.md:52`).
  - `tasks/plan.md` and `tasks/todo.md`: the written plan; each Step 6 answer applied to the rows; a replan in place; the preparatory plan commit; each "Close a row".
  - Review, verify and ship edit none.
- **Row 09, a phase as a record.** A phase is the tasks in a checkpoint's Blocked by. The checkpoint row carries the only stored sign of the review of a phase: its Status, its Result and its ticks. `brain plan` prints the phases that share a wave, and the Parallel waves section stores that text. Waves cross phase lines in the plan; the build still stops every new task at a checkpoint on the frontier.
- **Row 10, one form of "blocked by".** A plan's Blocked by cell takes row numbers of the same table only. A task block holds no dependency. The capability map names module ids, with `none` for an empty cell where a plan has `—`. `sources:` names record IDs. The build's checkpoint stop is a wait with no stored form.

### 15. Where this topic meets another
- `protocol/PROTOCOL.md:47-55` holds the "Task end" rule: update the row's status and result link; keep user waits in the effort's rows and records; record what waits for approval. The same text is in `rules/protocol.md:58-62`, `protocol/AGENTS-block.md:54-58` and `GEMINI.md:93-97`. Row 23 owns them.
- `docs/agents/workspace.md:67` defines the active effort: an idea with `status: define`, or a spec whose plan has a row that is `open` or `in-progress`. Lines 69-72 give the selection order, and line 77 gives the resume rule. Row 23 owns that file.
- `skills/interview-me/SKILL.md:187` is a second instruction that sets `specced`. Row 21 owns it.
- `scripts/workspace/effort.ts:73` and `scripts/workspace/graph.ts:18-20` work out a finished spec and treat `in-progress` as still to do. `scripts/workspace/graph.ts:88-106` puts rows that are `open` or `in-progress` into the waves. Rows 18 and 19 own that code.
- `scripts/workspace/status.ts:129` reports rows with `in-progress`. Two test fixtures hold a plan row with `in-progress`, and one grader accepts `open` or `in-progress` for a checkpoint that waits (section 16). Rows 19 and 24 own them.
- `scripts/workspace/schema.ts:210` accepts the four row status values. Row 17 owns it.
- `scripts/workspace/templates/spec.md`, `plan.md`, `todo.md` and `DEC.md` are the templates the commands and skills name. Row 17 owns them.
- `skills/domain-modeling/DEC-FORMAT.md:40` holds the decision status values that differ from the vendored ADR template. Rows 21 and 26 own them.
- This repo's own nine specs and eight plans use an older form (all nine carry `migrated: 0.8`). Each `spec.md` holds a "Status:" line as prose in its body, such as "Status: approved by Peter on 2026-10-29." (`specs/SPEC-009-workspace/spec.md:9`). No plan of this repo has a row in the row table form. `specs/SPEC-009-workspace/tasks/plan.md` stores its approval as prose, its phases as numbered rows with a "Depends on" column, and its wave state as prose; its todo file stores task state as ticked boxes with a "Depends:" line. Row 27 owns this repo's specs.
- `scripts/lifecycle/__tests__/parallel-build.test.ts:35-37` matches words of the build texts, such as "only writer" and "checkpoint row on the frontier stops the build". Rows 23 and 24 own the checks and the evals.
- `docs/decisions/DEC-004-capability-map-brain.md:11` is a real capability map with a "Depends on" column. Row 26 owns it.

### 16. Contrary evidence
- **"The only status of each task" against the ticks.** The texts call the row table the only status. "Close a row" also ticks boxes in `tasks/todo.md`, which is a second mark.
- **"A running task keeps its row `open`" against `in-progress` in the code, the fixtures and a grader.** The build text keeps a running row `open` (`.claude/commands/build.md:61`). The code reports rows with `in-progress` (`scripts/workspace/status.ts:129`), two test fixtures hold a task row with that value, and the grader `evals/lifecycle/build-parallel/graders/stops-at-checkpoint.md:6` accepts `open` or `in-progress` for the checkpoint that waits. No instruction writes the value.
- **"Every `open` row" against the waves in the code.** The build text says the first wave is every `open` row whose blockers are resolved (`.claude/commands/build.md:58`). The code lays the waves from every row that is `open` or `in-progress` (`scripts/workspace/graph.ts:88-106`).
- **The frontier is "never written down" against the Parallel waves section.** `GLOSSARY.md:58-59` says of the frontier: "It is worked out from the map each time, never written down." The entry names the map and sits under "Defining work". The plan-side definition is in `skills/planning-and-task-breakdown/SKILL.md:259` and `.claude/commands/build.md:12`. The plan stores the waves, and wave 1 is the frontier. So the contrast holds only if the glossary entry also covers a plan.
- **A checkpoint blocks "no other task" against "Start no new task".** The plan rule and the glossary limit a checkpoint to the later tasks that depend on its phase. The build rule stops every new task while a checkpoint is on the frontier. The code lets waves cross phase lines: `brain plan` prints "Phases that share a wave, each named by its checkpoint row" (`scripts/workspace/plan.ts:198-200`).
- **"Keeps current throughout each task" against "keeps its row open".** `references/brain/stage-boundaries.md:16` says the build keeps the plan's rows and result records current throughout each task. The build command changes a row only after the task's commit or merge, and the result file is outside the repo.
- **"A stage ends when its result is on disk" against a verdict in chat.** The list of results in `references/brain/stage-boundaries.md:5` holds "a verdict". The review verdict and the ship decision are reported, and no text names a file for them.
- **User waits "in the active effort's rows and records" against the build's stops.** The protocol tells every session to keep user waits in rows and records (`protocol/PROTOCOL.md:54`). The build texts name no row or record for a stop-and-ask wait.
- **"Persist the current task status" against the one writer.** The vendored context-engineering skill tells any agent that leaves a session to persist the task status and the required approvals (`skills/context-engineering/SKILL.md:125-131`). Brain keeps a running row `open`, lets only the main session write rows, and stores no approval of a spec or of `/build auto`.
- **"Execute tasks one at a time" against the parallel frontier.** The spec skill's Stage 4 says one at a time. `/build auto` starts every frontier task at once.
- **"No spec is active" against "the plan holds no task row yet".** Step 1 of `/build auto` stops when no spec is active, and step 3 plans when the plan holds no row (`.claude/commands/build.md:43`, `:45`). The plan command also finds "the active spec" and runs on a plan with no row (`.claude/commands/plan.md:7`). By the row rule of `docs/agents/workspace.md:67` a spec with no row is finished. So these steps reach such a spec only through the user's naming or the branch name (`docs/agents/workspace.md:69-70`).
- **Select by module id against select by the active effort.** The spec skill says specs, plans and downstream commands select work by module id "instead of guessing which spec is active" (`skills/spec-driven-development/SKILL.md:72`). The build and plan commands select through "Find the active effort", and no command takes a module id.
- **Two overwrite guards.** The plan command stops when the plan "already holds task rows". The planning skill stops only when a row is `open` or `in-progress`.
- **"A single approval" against the three approval questions.** `/build auto` promises "a single approval" (`.claude/commands/build.md:22`, `:46`). With no plan it first runs the planning skill, whose Step 6 puts up to three questions to the user and calls their approval "the gate before implementation starts" (`skills/planning-and-task-breakdown/SKILL.md:141-153`).
- **"An already approved build continues within that approval" against the re-invoke.** The commit contract says this (`references/brain/commit-contract.md:11`). After a blocker the user re-invokes `/build auto`, and its step 4 asks for an unambiguous yes with no exception for an approved build. No file stores the approval. The texts do not say which rule wins.
- **"Checkpoint" with four uses.** A checkpoint row; the "Single checkpoint" of `/build auto`, which is the plan's approval; the vendored "human checkpoints" (`references/orchestration-patterns.md:92`, `:321`); and the "cheap checkpoint" of the Brain-owned debugging skill (`skills/debugging-and-error-recovery/SKILL.md:181`). Two of the four are in Brain-owned text and are not a checkpoint row.
- **"Gate" and "phase".** The glossary lists "gate" under Avoid for a checkpoint and "phase" under Avoid for the lifecycle. The spec skill has "The Gated Workflow". A vendored table has a "Phase" column for the stages BUILD, VERIFY, REVIEW and SHIP (`skills/constraint-driven-development/SKILL.md:190-195`); this is the real conflict with `GLOSSARY.md:13`. The ship commands' "Phase A" to "Phase C" and the debugging skill's "Phase 1" are not contrary: `GLOSSARY.md:71` lets a skill number its own sections as phases.
- **"Pending".** The build commands say "the next pending task" for the next `open` row on the frontier.
- **"Wave" has no glossary entry.** The commands and the planning skill use it as a term.
- **"Links run one way."** The spec skill says an idea holds no list of its specs (`skills/spec-driven-development/SKILL.md:158`). DEC-051 says "specced" is done with `result:` naming the spec (`docs/decisions/DEC-051-shared-status-values.md:15`). That `result:` names one spec; the capability map path gives several specs from one idea. `docs/agents/workspace.md:78` says "Resume the spec that lists it" (one), and `:30` says "the specs produced by an idea" (several).
- **The vendored anti-pattern.** `references/orchestration-patterns.md:316-326` warns against an agent that runs the stages for the user. `/build auto` runs the planning skill when the plan has no row, with one approval.
- **"A spec stores no status" against this repo's own specs.** The instructions and the template give a spec no status. All nine specs of this repo hold a "Status:" line in the body, and their plans hold approvals, phases and wave state as prose (section 15). They are in an older form; row 27 owns the detail.

### 17. What I could not establish
- Whether an agent ever writes `in-progress` or `superseded by NN` on a plan row in a real run. Two fixtures and one grader hold or accept `in-progress`; I ran no eval and read no run. Rows 24 and 27 hold the evals and the records.
- Whether any instruction outside this topic has a step that sets those two values on a plan row. My search covered `skills/`, `commands/`, `.claude/commands/`, `references/`, `agents/`, `protocol/`, `rules/`, `hooks/` and `docs/agents/workspace.md`, with interview-me, idea-refine and ask-user-question left to row 21. It found the protocol's "Task end" rule, which names no value.
- Whether the protocol's "Task end" rule and the build's "Close a row" are meant as one rule or two. The texts do not link them. Row 23 owns the protocol.
- Where status and waits live when a project uses an external spec tool. The texts do not say.
- Which rule wins for a task that no Blocked by cell ties to a checkpoint on the frontier: the plan's "no other task" or the build's "Start no new task".
- How the vendored and adapted files compare with their upstream today. I checked only that each vendored file matches its lock hash.
- What `brain plan` and `brain check` do beyond the lines cited. Rows 17 to 19 own the code.
- Whether the absence of a checkpoint step in the one-task mode changes behaviour. No eval was read.

### 18. Sites judged not relevant
- `skills/codebase-design/DESIGN-IT-TWICE.md:17-21`: it tells the agent not to wait on the user, and its parallel sub-agents are a design fan-out, not a wave.
- `skills/git-workflow-and-versioning/SKILL.md:3, 129, 147-171`: the git worktree mechanism for parallel agents. It names no row, status or wait.
- `skills/git-workflow-and-versioning/SKILL.md:311`: a pointer to the shipping-and-launch skill.

### 19. Coverage of the site index
Each of the 177 sites has one group. A group is a section of this Answer, and the Findings under the same name cite its sources.

Groups: SPEC is section 1; ROW is section 2; CP is section 3; WAVE is section 4; READ is section 5; CMD is section 7; CC is section 8; REV is section 9; VEN is section 10; USER is section 11; NR is section 18.

| File | Sites | Lines and group |
|---|---|---|
| `.claude/commands/build.md` | 22 | 5 USER; 9 READ; 11-13 ROW; 17 CC; 21-24 ROW; 26-37 ROW; 43 READ; 44 USER; 45 READ; 46 ROW; 47 WAVE; 48-53 USER; 54 WAVE; 56-58 WAVE; 60-62 WAVE; 63-72 ROW; 73-78 ROW; 79 WAVE; 80 CP; 82 ROW; 84-96 ROW; 98-106 ROW |
| `.claude/commands/plan.md` | 6 | 2, 5 USER; 7 READ; 11-16 ROW; 18-22 ROW; 24 ROW; 26 READ |
| `.claude/commands/review.md` | 1 | 5 USER |
| `.claude/commands/spec.md` | 4 | 5-7 USER; 15 SPEC; 17-21 SPEC; 23 SPEC |
| `.claude/commands/status.md` | 1 | 1-7 CMD |
| `.claude/commands/test.md` | 1 | 5-12 USER |
| `commands/build.toml` | 22 | 1, 4 USER; 8 READ; 10-12 ROW; 16 CC; 18-23 ROW; 25-36 ROW; 40-42 READ; 43 USER; 44 READ; 45 ROW; 46 WAVE; 47-51 USER; 52 WAVE; 54-56 WAVE; 58-62 WAVE; 63-72 ROW; 73-78 ROW; 79 WAVE; 80 CP; 82 ROW; 84-96 ROW; 98-108 ROW |
| `commands/planning.toml` | 8 | 1, 4 USER; 6 READ; 10-15 ROW; 17-19 ROW; 20 WAVE; 21 ROW; 23 ROW; 25 READ |
| `commands/review.toml` | 1 | 4 USER |
| `commands/ship.toml` | 1 | 69-70 REV |
| `commands/spec.toml` | 5 | 4-6 USER; 14 SPEC; 16-20 SPEC; 19 SPEC; 22 SPEC |
| `commands/status.toml` | 2 | 1 CMD; 3-7 CMD |
| `commands/test.toml` | 2 | 4 USER; 11 USER |
| `references/brain/agent-brief.md` | 1 | 30-35, 65-68, 104-109, 147-153, 191-195 VEN |
| `references/brain/commit-contract.md` | 6 | 3-5 CC; 6 CC; 7 CC; 8 CC; 9 CC; 11 CC |
| `references/brain/stage-boundaries.md` | 5 | 5 CC; 7 CC; 9-18 CC; 20-53 CC; 55-64 CC |
| `references/definition-of-done.md` | 4 | 1-15 VEN; 17-51 VEN; 53-59 VEN; 61-67 VEN |
| `references/orchestration-patterns.md` | 4 | 48-74, 168-170 VEN; 78-92 VEN; 271-276, 316-326 VEN; 343-357 VEN |
| `skills/browser-testing-with-devtools/SKILL.md` | 2 | 78-80, 90, 288, 301-303 USER; 306-317 VEN |
| `skills/code-review-and-quality/SKILL.md` | 6 | 43-48, 78 READ; 48-50 USER; 10-12, 84-111 REV; 127-141 USER; 196-252 REV; 296-310 REV |
| `skills/codebase-design/DESIGN-IT-TWICE.md` | 1 | 17-21 NR |
| `skills/constraint-driven-development/SKILL.md` | 3 | 36-38 USER; 57-91 USER; 27, 186-195 VEN |
| `skills/debugging-and-error-recovery/SKILL.md` | 6 | 29 USER; 31-45 VEN; 98-100 USER; 181 USER; 350 USER; 357-364 USER |
| `skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh` | 1 | 10-45 USER |
| `skills/deprecation-and-migration/SKILL.md` | 1 | 164-190 VEN |
| `skills/documentation-and-adrs/SKILL.md` | 2 | 46-57 VEN; 93-100 VEN |
| `skills/doubt-driven-development/SKILL.md` | 5 | 12, 200, 216, 225 REV; 44-47 USER; 112-166 USER; 181-191 USER; 204-205, 211, 215, 217-219 USER |
| `skills/git-workflow-and-versioning/SKILL.md` | 3 | 3, 129, 147-171 NR; 191-209 USER; 311 NR |
| `skills/incremental-implementation/SKILL.md` | 13 | 3 ROW; 15-21 READ; 23 CC; 134-143 USER; 209-213 WAVE; 215-217 WAVE; 218-221 ROW; 222-223 ROW; 224 ROW; 225 ROW; 226 CP; 227 ROW; 268-283 ROW |
| `skills/planning-and-task-breakdown/SKILL.md` | 19 | 3-18 ROW; 24-34 READ; 36-58 ROW; 82-88 ROW; 94-117 ROW; 119-137 CP; 139 CP; 141-155 ROW; 175-190 ROW; 192-195 READ; 197-209 ROW; 211-221 ROW; 223-227 ROW; 229 ROW; 231-233 ROW; 235-249 WAVE; 251-259 WAVE; 261-287 ROW; 289-309 ROW |
| `skills/source-driven-development/SKILL.md` | 1 | 61; 95; 125-139 USER |
| `skills/spec-driven-development/SKILL.md` | 17 | 23-35 SPEC; 57-74 SPEC; 76-78 SPEC; 80 SPEC; 86-89 SPEC; 91-95 SPEC; 97 SPEC; 99-106 SPEC; 149-155 SPEC; 158 SPEC; 159 SPEC; 161 SPEC; 165-176 SPEC; 178-192 SPEC; 194-204 SPEC; 206-208 SPEC; 221-268 SPEC |
| `skills/test-driven-development/SKILL.md` | 1 | 38-44; 408; 415; 431 USER |

The sweeps file agrees with these sites. Its 319 entries name 20 of the 33 files and no other file.

One difference from the inventory: the reader gave `.claude/commands/ship.md` one borderline site and gave its Gemini copy, `commands/ship.toml:69-70`, one site that is not borderline. The two files hold the same rule, at `.claude/commands/ship.md:70-71` and `commands/ship.toml:69-70`.

### Checks
All three check results were present, so each check finished. I opened the source of every issue before I changed the record. Some issues overlap between the checks; each is counted in the check that reported it. The sources that the repair adds from outside the 33 topic files (the protocol, the interview skill, the workspace code, the fixtures, the grader and this repo's specs) are not sites of this topic's index; section 15 names the row that owns each.

- Sources check: 16 issues reported (16 minor); 16 confirmed and fixed; none rejected.
- Coverage check: 20 issues reported (20 minor); 20 confirmed and fixed, one of them with one part rejected. Rejected in issue 20: the statement that a checkpoint's Result cell is "the only place in this topic where a user approval is written to a record"; the capability map's approval gets a decision record (`skills/spec-driven-development/SKILL.md:78`), and the plan's approval source is kept in decision records (`skills/planning-and-task-breakdown/SKILL.md:153`). Two line numbers inside the check differ from the source and change no fix: issue 1 puts two sentences of `skills/context-engineering/SKILL.md` at `:131` and `:133`, and they are at `:133` and `:135`; issue 19 puts the seeds rule at `AGENTS.md:16`, and it is at `AGENTS.md:15`.
- Contrary check: 17 issues reported (3 blocking, 14 minor); 17 confirmed and fixed, two of them with one part rejected. Rejected in issue 12: the word "merged" at `.claude/commands/build.md:54`; that line holds "started" and "kept" and not "merged", which is at `.claude/commands/build.md:75` ("the merged head") and names no state of an item. Rejected in issue 7: the statement that the idea "stays `define`" with an external spec tool; `skills/spec-driven-development/SKILL.md:159` and `:163` do not say what the idea's status becomes on that path, so the record says only that the texts do not say.

Where the three blocking issues of the contrary check are fixed:

| Blocking issue | Fixed in |
|---|---|
| The protocol's "Task end" rule writes a row status and stores user waits | Short answer; sections 2, 6, 8, 11, 14 (rows 02, 04, 08), 15, 16 and 17 |
| The context-engineering rule was misquoted and is a write rule | Short answer; sections 10, 13 and 16 |
| A checkpoint blocks two different sets of tasks | Short answer; sections 3, 14 (rows 01, 09, 10), 16 and 17 |

## Findings

### Owner (section 13)
- AGENTS.md says a file under the `files` key of the lock is vendored, the `seeds` key records provenance for Brain-owned files, and unlisted files are maintained in this repo. Source: AGENTS.md:14-15, checked 2026-11-21.
- Of the 33 files of this topic, 10 are under the `files` key, 17 are under the `seeds` key and 6 are under neither key. Source: jq -r '.files | keys[]' upstream.lock.json and jq -r '.seeds | keys[]' upstream.lock.json, checked 2026-11-21.
- The four persona files under `agents/` are under the `files` key. Source: upstream.lock.json:3-18, checked 2026-11-21.
- `skills/shipping-and-launch/SKILL.md` and `skills/context-engineering/SKILL.md` are under the `files` key. Source: upstream.lock.json:195 and upstream.lock.json:131, checked 2026-11-21.
- All 53 files under the `files` key match the sha256 that the lock holds for them. Source: shasum -a 256 -c on the output of jq -r '.files | to_entries[] | "\(.value.sha256)  \(.key)"' upstream.lock.json, checked 2026-11-21.
- Three of the six unlisted files of this topic carry the line "Adapted from mattpocock/skills, MIT, commit c55ee46" in their own text. Source: references/brain/stage-boundaries.md:1 and references/brain/agent-brief.md:3 and skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh:2, checked 2026-11-21.
- Thirteen more vendored files hold a checklist, a sample status or a TODO rule, and each is under the `files` key and in no topic's file list. Source: jq -r --arg f PATH '.files | has($f)' upstream.lock.json (true) and grep -c -x -F PATH over the 14 topic file lists (0) for each PATH of the last vendored row of section 10, checked 2026-11-21.

### SPEC (section 1)
- `brain new-doc SPEC` claims the next spec number and writes `spec.md`, `tasks/plan.md` and `tasks/todo.md` from the templates, and the spec skill tells the agent to create the folder this way and never by hand. Source: skills/spec-driven-development/SKILL.md:149-155, checked 2026-11-21.
- The spec template's frontmatter holds `spec:` and `sources:` only, so a new spec stores no status and no wait field. Source: scripts/workspace/templates/spec.md:1-4, checked 2026-11-21.
- The spec agent fills `sources:` with every IDEA, DEC and RES file the spec comes from, and the skill says links run one way: an idea holds no list of its specs. Source: skills/spec-driven-development/SKILL.md:158, checked 2026-11-21.
- The spec skill sets the status of an idea, not of a spec: when `sources:` names an idea, the agent sets that idea's `status` to `specced`, and the idea is then finished. Source: skills/spec-driven-development/SKILL.md:159, checked 2026-11-21.
- Neither copy of the spec command names `specced`; the step is in the skill only. Source: grep -n specced .claude/commands/spec.md commands/spec.toml (no output), checked 2026-11-21.
- Stage 1 ends with "then write the spec for review", the step that fills `spec.md` holds the `specced` bullet, and the user's review and approval of the completed spec is named as a later act. Source: skills/spec-driven-development/SKILL.md:84 and skills/spec-driven-development/SKILL.md:155-159 and skills/spec-driven-development/SKILL.md:95, checked 2026-11-21.
- One line in this topic's files names `specced`, so no text of the topic sets an idea back or tells the agent to wait for the approval. Source: grep -rn specced skills/spec-driven-development skills/planning-and-task-breakdown skills/incremental-implementation skills/code-review-and-quality skills/test-driven-development skills/debugging-and-error-recovery commands .claude/commands references agents (one hit at skills/spec-driven-development/SKILL.md:159), checked 2026-11-21.
- The interview skill holds a second instruction for the same write: "Set `specced` once a spec lists the idea in `sources`". Source: skills/interview-me/SKILL.md:187, checked 2026-11-21.
- When the project uses OpenSpec or another specification system, the spec skill keeps that system's format and storage and creates no duplicate spec folder, and it names no place for status or waits on that path. Source: skills/spec-driven-development/SKILL.md:163, checked 2026-11-21.
- The spec skill says specs, plans and downstream commands select work by module id "instead of guessing which spec is active". Source: skills/spec-driven-development/SKILL.md:72, checked 2026-11-21.
- The workspace guide says "Resume the spec that lists it in `sources:`" for a `specced` idea and also speaks of "the specs produced by an idea". Source: docs/agents/workspace.md:78 and docs/agents/workspace.md:30, checked 2026-11-21.
- When a spec has no spec folder yet, the planner runs `brain new-doc SPEC` and puts the spec into `spec.md` as the spec skill's step 5 says. Source: skills/planning-and-task-breakdown/SKILL.md:184-190, checked 2026-11-21.
- Both plan commands stop and send the user to the spec command when no spec exists in the specs folder or in the conversation, and a spec given in the conversation gets its folder through the planning skill. Source: .claude/commands/plan.md:7 and commands/planning.toml:6, checked 2026-11-21.
- The DEC template writes `status: accepted` into a new decision record. Source: scripts/workspace/templates/DEC.md:3, checked 2026-11-21.
- A decision the user makes during planning gets its own decision record first. Source: skills/planning-and-task-breakdown/SKILL.md:205, checked 2026-11-21.
- Stage 4 of the spec skill sends the agent to the context-engineering skill. Source: skills/spec-driven-development/SKILL.md:208, checked 2026-11-21.
- The empty "Depends on" cell of the capability map sample is `none`. Source: skills/spec-driven-development/SKILL.md:64, checked 2026-11-21.
- Both spec commands tell the agent to run `brain new-doc SPEC`, to list the source records in `sources:` and to leave the plan files for the plan command. Source: .claude/commands/spec.md:17-21 and commands/spec.toml:16-20, checked 2026-11-21.
- Both spec commands end with "Confirm the spec with the user before proceeding" and name no place that stores the approval. Source: .claude/commands/spec.md:23 and commands/spec.toml:22, checked 2026-11-21.
- The spec skill's checklist has the box "The human has reviewed and approved the spec", and the skill names no field or record for that approval. Source: skills/spec-driven-development/SKILL.md:263, checked 2026-11-21.
- `spec.md` is done when `brain check` reports no finding for it, and the plan and todo files pass `brain check` as the templates wrote them. Source: skills/spec-driven-development/SKILL.md:161, checked 2026-11-21.
- The spec skill has four gated stages after a Stage 0 scope check, says not to advance until the current stage is validated, and makes every gate the human's decision through one question per call. Source: skills/spec-driven-development/SKILL.md:23-35, checked 2026-11-21.
- The capability map is a module table with a "Depends on" column and a build order line, with one-way dependencies and no cycles. Source: skills/spec-driven-development/SKILL.md:57-74, checked 2026-11-21.
- No module spec is written before the human approves the capability map, and the approval gets a decision record that holds the module table and the build order in its body. Source: skills/spec-driven-development/SKILL.md:76-78, checked 2026-11-21.
- Each module gets its own spec in dependency order, and the capability map's decision record goes into that spec's `sources:`. Source: skills/spec-driven-development/SKILL.md:80, checked 2026-11-21.
- Both spec commands repeat the capability map rule: propose the map, get it approved, then spec each module in dependency order. Source: .claude/commands/spec.md:15 and commands/spec.toml:14, checked 2026-11-21.
- A spec may be written from the idea file of a finished interview, and an unfinished row, a partial answer or a pending confirmation keeps the interview open. Source: skills/spec-driven-development/SKILL.md:86-89, checked 2026-11-21.
- An unanswered binding assumption stays in the spec's Open Questions section, and the spec waits on it. Source: skills/spec-driven-development/SKILL.md:91-95, checked 2026-11-21.
- The spec template has an Open Questions section for anything that needs the user or a runnable answer from a prototype. Source: scripts/workspace/templates/spec.md:42-43, checked 2026-11-21.
- For a new or changed test seam the spec agent asks the user and keeps dependent work pending until the choice is settled. Source: skills/spec-driven-development/SKILL.md:97, checked 2026-11-21.
- A design question that needs a runnable answer takes the prototype detour, and the verdict is recorded in the spec. Source: skills/spec-driven-development/SKILL.md:99-106, checked 2026-11-21.
- Reframed success criteria go to the user as one question. Source: skills/spec-driven-development/SKILL.md:165-176, checked 2026-11-21.
- Stage 2 and Stage 3 of the spec skill summarize the plan (dependencies, order, parallel or sequential work, verification checkpoints between phases) and say the planning skill takes precedence. Source: skills/spec-driven-development/SKILL.md:178-204, checked 2026-11-21.
- Stage 4 of the spec skill says "Execute tasks one at a time". Source: skills/spec-driven-development/SKILL.md:206-208, checked 2026-11-21.
- "Keeping the Spec Alive" tells the agent to update the spec when a decision, the scope, a prototype result or a seam changes, and it names no status. Source: skills/spec-driven-development/SKILL.md:210-219, checked 2026-11-21.
- The rationalizations, red flags and Verification list of the spec skill restate these rules, and their unticked boxes are the skill's own list. Source: skills/spec-driven-development/SKILL.md:221-268, checked 2026-11-21.

### ROW (section 2)
- The row table has the columns #, Task, Type, Status, Blocked by and Result. Source: skills/planning-and-task-breakdown/SKILL.md:214-215, checked 2026-11-21.
- The planning skill lists four row status values, `open`, `in-progress`, `resolved` and `superseded by NN`, and every row of a new plan starts `open`. Source: skills/planning-and-task-breakdown/SKILL.md:225, checked 2026-11-21.
- The planning skill names `tasks/plan.md` as the only status of every task and the only place for its blocking edges. Source: skills/planning-and-task-breakdown/SKILL.md:175-190, checked 2026-11-21.
- The build command names the row table of `tasks/plan.md` as the only status of each task, and defines the frontier as an `open` row whose `Blocked by` rows are all `resolved`. Source: .claude/commands/build.md:12, checked 2026-11-21.
- The plan template says its table holds the only status of each task, and a new plan holds the table header and no row. Source: scripts/workspace/templates/plan.md:13-18, checked 2026-11-21.
- A task block holds no status line and no dependencies; its row holds both. Source: skills/planning-and-task-breakdown/SKILL.md:117, checked 2026-11-21.
- Both plan commands fix the same format: the row table with the only status of each task, the Parallel waves section, and blocks with no status line and no dependencies field. Source: .claude/commands/plan.md:18-22 and commands/planning.toml:17-21, checked 2026-11-21.
- A task's blocking edges are the tasks that must complete before it can start, and they live only in the Blocked by column. Source: skills/planning-and-task-breakdown/SKILL.md:58, checked 2026-11-21.
- A Blocked by cell holds row numbers such as `01, 02`, or `—`, and each number names a row in the same table. Source: skills/planning-and-task-breakdown/SKILL.md:226, checked 2026-11-21.
- A wide refactor is written as edges: each migrate batch is blocked by the expand task, and the contract task is blocked by every migrate batch. Source: skills/planning-and-task-breakdown/SKILL.md:82-88, checked 2026-11-21.
- The task block template has unticked boxes for acceptance criteria and verification. Source: skills/planning-and-task-breakdown/SKILL.md:94-115, checked 2026-11-21.
- Each row gets one block in `tasks/todo.md` under the row's number, with a Task or a Checkpoint heading. Source: skills/planning-and-task-breakdown/SKILL.md:231-233, checked 2026-11-21.
- The example table shows five rows, all `open`, with a checkpoint row blocked by `01, 02, 03` and a later task blocked by `01, 04`. Source: skills/planning-and-task-breakdown/SKILL.md:211-221, checked 2026-11-21.
- The Result cell is `—` until the row is resolved, then the commit or commits, the verification command and its outcome. Source: skills/planning-and-task-breakdown/SKILL.md:227, checked 2026-11-21.
- The planner writes the rows, and during the build the main session is their only writer: after each task it ticks the boxes, updates Status and Result and rewrites Parallel waves, and a sub-agent ticks nothing. Source: skills/planning-and-task-breakdown/SKILL.md:229, checked 2026-11-21.
- The planning skill puts three questions to the user before the build (granularity, blocking edges, merge or split), reuses a valid approval, reopens only the affected dimensions of a changed plan, and keeps the approval source in the existing decision records. Source: skills/planning-and-task-breakdown/SKILL.md:141-155, checked 2026-11-21.
- Both plan commands list the same steps: the dependency graph, checkpoints between phases, and the three approval questions, one per call. Source: .claude/commands/plan.md:11-16 and commands/planning.toml:10-15, checked 2026-11-21.
- Both plan commands run `brain check` after the plan is written. Source: .claude/commands/plan.md:24 and commands/planning.toml:23, checked 2026-11-21.
- The plan is done when every row has its block, Parallel waves matches `brain plan`, `brain check` reports no finding in the spec folder and the user approved all three dimensions. Source: skills/planning-and-task-breakdown/SKILL.md:249, checked 2026-11-21.
- The plan's Decisions section holds one link per decision record, and its Open questions section holds the questions for the user. Source: skills/planning-and-task-breakdown/SKILL.md:197-209, checked 2026-11-21.
- The planning skill's description and When to Use name blocking edges, the approval before build and parallel work. Source: skills/planning-and-task-breakdown/SKILL.md:3-18, checked 2026-11-21.
- The rationalizations, red flags and Verification list of the planning skill restate the status and wait rules, and line 309 points to the Definition of Done. Source: skills/planning-and-task-breakdown/SKILL.md:261-309, checked 2026-11-21.
- The build command has two modes, and it says "the next pending task" for the default mode. Source: .claude/commands/build.md:21-24, checked 2026-11-21.
- In the default mode the agent takes the next row on the frontier, builds it test-first, commits, closes the row and stops. Source: .claude/commands/build.md:26-37, checked 2026-11-21.
- The single approval of `/build auto` needs an unambiguous yes, a hedged reply counts as not approved, and a plan the agent wrote is committed as one preparatory commit. Source: .claude/commands/build.md:46, checked 2026-11-21.
- A running task keeps its row `open`, so the frontier still lists it. Source: .claude/commands/build.md:61, checked 2026-11-21.
- A sub-agent leaves `tasks/plan.md` and `tasks/todo.md` to the main session, writes `T<NN>-result.md` in a folder outside the repo, and replies with pass or fail, the commit SHA and any question. Source: .claude/commands/build.md:63-72, checked 2026-11-21.
- The main session reads the result file, resolves a failure, missing evidence or a question before integration, merges one task at a time and then closes the row. Source: .claude/commands/build.md:73-78, checked 2026-11-21.
- On a host with no sub-agent tool the session runs the frontier's tasks one at a time and closes the row after each. Source: .claude/commands/build.md:82, checked 2026-11-21.
- In the worktree fallback a leftover folder makes the agent ask the user, a foreign line in the session's tree stops the build with nothing merged, and a failed task keeps its worktree and its branch. Source: .claude/commands/build.md:84-96, checked 2026-11-21.
- "Close a row" is the one procedure in the build command that changes a row: the main session ticks the boxes in `tasks/todo.md`, sets the row to `resolved`, writes the result, rewrites Parallel waves, runs `brain check` and commits the two state files alone. Source: .claude/commands/build.md:98-106, checked 2026-11-21.
- The Gemini build command holds the same row rules at its own line numbers. Source: commands/build.toml:10-12 and commands/build.toml:18-36 and commands/build.toml:45 and commands/build.toml:63-108, checked 2026-11-21.
- No text under the planning skill, the incremental-implementation skill, the commands or the references tells an agent to set a plan row to `in-progress`; the value appears only in the planning skill, as a listed value and in its overwrite guard. Source: grep -rn "in-progress" skills/planning-and-task-breakdown skills/incremental-implementation commands .claude/commands references (five hits in the planning skill at lines 192 225 269 277 and 301 and one other meaning in a code comment), checked 2026-11-21.
- `superseded` appears in these texts only as a listed row value with the condition "when row NN replaced it" and as an exit reason of `brain plan`; no text has a step that sets it. Source: grep -rn -i superseded skills/planning-and-task-breakdown skills/incremental-implementation skills/spec-driven-development commands .claude/commands references/brain (two hits at skills/planning-and-task-breakdown/SKILL.md:225 and 245), checked 2026-11-21.
- The todo template writes two sample blocks, "## Task 01" and "## Checkpoint 02", with unticked boxes into a new spec folder whose plan has no row. Source: scripts/workspace/templates/todo.md:8-24, checked 2026-11-21.
- The planner applies each Step 6 answer to the plan's rows and task blocks before the next question, and the approval of all three dimensions is "the gate before implementation starts". Source: skills/planning-and-task-breakdown/SKILL.md:153, checked 2026-11-21.
- The protocol's "Task end" rule tells every session to update the row in the map or in `tasks/plan.md`, "its status and result link", and it names no status value; only the main session writes rows. Source: protocol/PROTOCOL.md:47-51, checked 2026-11-21.
- The same rule says "Update the spec when its facts change". Source: protocol/PROTOCOL.md:52, checked 2026-11-21.
- The same rule says to keep the next action, red items and user waits in the active effort's rows and records, and that a user-run step is a do row with its exact command that blocks the rows that need it. Source: protocol/PROTOCOL.md:54, checked 2026-11-21.
- The same rule says to record what is committed, pushed or waiting for approval. Source: protocol/PROTOCOL.md:55, checked 2026-11-21.
- The "Task end" rule is rendered with the same words into three host files. Source: rules/protocol.md:58-62 and protocol/AGENTS-block.md:54-58 and GEMINI.md:93-97, checked 2026-11-21.
- "Close a row" is worded for a task: "After a task's commit", "the task's block", "the task's row"; the checkpoint rule says "close the checkpoint row" and names no status value. Source: .claude/commands/build.md:100-103 and .claude/commands/build.md:80, checked 2026-11-21.
- Step 3 of "Close a row" gives a plan without a Parallel waves section one, below the Tasks table. Source: .claude/commands/build.md:104 and commands/build.toml:104, checked 2026-11-21.
- For different work on an incomplete plan the planning skill names three ways out: finish the old plan first, discard it explicitly, or give the new work its own spec folder; it says "The open rows may be mid-build in another session". Source: skills/planning-and-task-breakdown/SKILL.md:195, checked 2026-11-21.
- No text of this topic sets a plan row back from `resolved`; "reopen" is used for an approval dimension, for a choice and in a sample only. Source: grep -rn -i reopen skills/planning-and-task-breakdown skills/spec-driven-development skills/incremental-implementation skills/code-review-and-quality .claude/commands commands references (four hits at skills/planning-and-task-breakdown/SKILL.md:145 and skills/spec-driven-development/SKILL.md:91 and 230 and references/brain/agent-brief.md:157), checked 2026-11-21.
- The one-task section of the build command names no `brain plan` call and no order among frontier rows. Source: grep -n "brain plan" .claude/commands/build.md (hits at lines 58, 79 and 104 only), checked 2026-11-21.
- Step 4 of `/build auto` names no exception for a build that the user approved before. Source: .claude/commands/build.md:46, checked 2026-11-21.
- `resolved` names the row status on 13 lines of 4 files of this topic. Source: .claude/commands/build.md:12 and .claude/commands/build.md:58 and .claude/commands/build.md:103-104 and commands/build.toml:11 and commands/build.toml:56 and commands/build.toml:103-104 and skills/incremental-implementation/SKILL.md:21 and skills/planning-and-task-breakdown/SKILL.md:225 and skills/planning-and-task-breakdown/SKILL.md:227 and skills/planning-and-task-breakdown/SKILL.md:229 and skills/planning-and-task-breakdown/SKILL.md:259, checked 2026-11-21.
- `open` names the row status in the two build commands, the incremental-implementation skill and the planning skill. Source: .claude/commands/build.md:12 and .claude/commands/build.md:58 and .claude/commands/build.md:61 and commands/build.toml:11 and commands/build.toml:56 and commands/build.toml:61 and skills/incremental-implementation/SKILL.md:21 and skills/planning-and-task-breakdown/SKILL.md:192-195 and skills/planning-and-task-breakdown/SKILL.md:216-220 and skills/planning-and-task-breakdown/SKILL.md:225 and skills/planning-and-task-breakdown/SKILL.md:259 and skills/planning-and-task-breakdown/SKILL.md:269 and skills/planning-and-task-breakdown/SKILL.md:277 and skills/planning-and-task-breakdown/SKILL.md:301, checked 2026-11-21.
- Two test fixtures hold a task row with the status `in-progress`. Source: scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md:22 and scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md:18, checked 2026-11-21.
- The status code reports the rows whose status is `in-progress`, and a test pins "in progress: SPEC-001#04". Source: scripts/workspace/status.ts:129 and scripts/workspace/__tests__/status.test.ts:130, checked 2026-11-21.
- One grader of the parallel build eval accepts `open` or `in-progress` for the checkpoint row that waits for the user. Source: evals/lifecycle/build-parallel/graders/stops-at-checkpoint.md:6, checked 2026-11-21.
- The code lays the waves from every row that is `open` or `in-progress`. Source: scripts/workspace/graph.ts:88-106 and scripts/workspace/graph.ts:18-20, checked 2026-11-21.
- No plan of this repo has a row in the row table form. Source: grep -c -E "^\| *[0-9]{2} *\|[^|]*\| *(task|checkpoint) *\|" specs/*/tasks/plan.md (0 for each of the eight plans), checked 2026-11-21.
- Each of the nine specs of this repo holds one "Status:" line as prose, and each carries `migrated: 0.8`. Source: grep -c "Status: " specs/*/spec.md (1 for each of the nine files) and grep -l "migrated: 0.8" specs/*/spec.md (nine files), checked 2026-11-21.
- The plan of SPEC-009 stores its approval as prose, its phases as numbered rows with a "Depends on" column and its wave state as prose. Source: specs/SPEC-009-workspace/tasks/plan.md:11-12 and specs/SPEC-009-workspace/tasks/plan.md:27-35 and specs/SPEC-009-workspace/tasks/plan.md:52-56, checked 2026-11-21.
- The todo file of SPEC-009 stores task state as ticked boxes with a "Depends:" line per task. Source: specs/SPEC-009-workspace/tasks/todo.md:14-18 and grep -c -- "- \[x\]" specs/SPEC-009-workspace/tasks/todo.md (73), checked 2026-11-21.
- The incremental-implementation skill's description names the frontier, parallel work and the gate before a task is done: the full suite once, then code-review-and-quality. Source: skills/incremental-implementation/SKILL.md:3, checked 2026-11-21.
- In the skill's parallel section a foreign write in the main tree stops the build, a failed task keeps its worktree, and the main session reads every result before integration and merges one task at a time. Source: skills/incremental-implementation/SKILL.md:218-223, checked 2026-11-21.
- Only the main session writes plan rows and todo ticks, and it closes each row in a commit of its own after the task's merge. Source: skills/incremental-implementation/SKILL.md:224, checked 2026-11-21.
- A merge that changes a file or an interface that a running task uses makes the main session tell that task to rebase. Source: skills/incremental-implementation/SKILL.md:225, checked 2026-11-21.
- A sub-agent's result file is named after the task, and its reply is the path plus one line with pass or fail, the commit SHA and any question. Source: skills/incremental-implementation/SKILL.md:227, checked 2026-11-21.
- A task is declared done only after the full suite passes, the review passes and the Definition of Done holds. Source: skills/incremental-implementation/SKILL.md:268-283, checked 2026-11-21.
- No file of the workspace code reads a tick or a box. Source: grep -rn -i "\[x\]\|\[ \]\|tick\|checkbox" scripts/workspace/*.ts (one unrelated comment in plan.ts:62), checked 2026-11-21.

### CP (section 3)
- A checkpoint is a row of type `checkpoint` with its own block of unticked boxes, one of which is "Review with human before proceeding", and the skill asks for one after every 2 to 3 tasks. Source: skills/planning-and-task-breakdown/SKILL.md:119-137, checked 2026-11-21.
- A checkpoint's phase is the tasks in its Blocked by, the checkpoint goes into the Blocked by of every later task that depends on a task of its phase and of no other task, and `brain check` reads a task's dependency from its task blockers alone. Source: skills/planning-and-task-breakdown/SKILL.md:139, checked 2026-11-21.
- A checkpoint row on the frontier stops the build: no new task starts, running tasks finish and merge, the block's checks run, and after the user's unambiguous yes the row is closed with the checks and the yes as its result. Source: .claude/commands/build.md:80 and commands/build.toml:80, checked 2026-11-21.
- The incremental-implementation skill repeats that a checkpoint row on the frontier stops the build until the user says yes. Source: skills/incremental-implementation/SKILL.md:226, checked 2026-11-21.
- The default one-task section of the build command names no checkpoint. Source: grep -n -i checkpoint .claude/commands/build.md (hits at lines 46, 47 and 80 only), checked 2026-11-21.
- The glossary defines a phase as the tasks in a plan that one checkpoint waits on, and a checkpoint as a row that ends a phase. Source: GLOSSARY.md:69-76, checked 2026-11-21.
- The glossary says a checkpoint "blocks every later task that builds on its phase, and no other task". Source: GLOSSARY.md:75-76, checked 2026-11-21.
- The checkpoint rule of the build names the path after the user's unambiguous yes, and names no step for a failed check or for a reply that is not a yes. Source: .claude/commands/build.md:80 and commands/build.toml:80 and skills/incremental-implementation/SKILL.md:226, checked 2026-11-21.
- `brain plan` prints "Phases that share a wave, each named by its checkpoint row", so waves cross phase lines in the code. Source: scripts/workspace/plan.ts:198-200 and scripts/workspace/__tests__/plan.test.ts:161-162, checked 2026-11-21.
- The "Waiting on the user" line of the status report holds "Decide rows on the frontier", and the code counts only `interview`, `prototype` and `ideate` rows for it, so a checkpoint row is not in that line. Source: docs/agents/workspace.md:41 and scripts/workspace/status.ts:28-29 and scripts/workspace/status.ts:130, checked 2026-11-21.

### WAVE (section 4)
- `brain plan --json` works out the frontier, whose first wave is every `open` row whose Blocked by rows are all `resolved`, the `criticalPath` and the cap `maxParallel`. Source: .claude/commands/build.md:56-58 and commands/build.toml:54-56, checked 2026-11-21.
- `/build auto` runs the frontier in parallel until no task is left on it or a checkpoint row stops the build. Source: .claude/commands/build.md:47 and commands/build.toml:46, checked 2026-11-21.
- The build starts every frontier task at once up to the cap, takes `criticalPath` rows first when the cap bites, and starts fewer only for a stated reason such as files in `sharedFiles`. Source: .claude/commands/build.md:60-62 and commands/build.toml:58-62, checked 2026-11-21.
- After each closed row the build runs `brain plan --json` again and starts each task that newly reached the frontier. Source: .claude/commands/build.md:79 and commands/build.toml:79, checked 2026-11-21.
- The end summary of `/build auto` names the tasks completed, how many tasks started at once in each wave, each kept worktree and anything left for the user. Source: .claude/commands/build.md:54 and commands/build.toml:52, checked 2026-11-21.
- The Parallel waves section holds what `brain plan` prints above its `Cap:` line; it is replaced whenever a row, an edge or a block's files change, and `brain check` reports a stale or missing section. Source: skills/planning-and-task-breakdown/SKILL.md:235-249, checked 2026-11-21.
- The planning skill defines the frontier as every `open` row whose Blocked by rows are all `resolved`, and says the Parallel waves section shows it as wave 1. Source: skills/planning-and-task-breakdown/SKILL.md:251-259, checked 2026-11-21.
- The Gemini plan command stores the same Parallel waves section. Source: commands/planning.toml:20, checked 2026-11-21.
- The incremental-implementation skill's parallel section takes the frontier, the critical path and the cap from `brain plan --json`, with a cap of 8 by default. Source: skills/incremental-implementation/SKILL.md:209-217, checked 2026-11-21.
- The glossary has no entry for "wave". Source: grep -n -i wave GLOSSARY.md (no output), checked 2026-11-21.
- The glossary says of the frontier "It is worked out from the map each time, never written down", in an entry under "Defining work" that names the map and not a plan. Source: GLOSSARY.md:57-59 and GLOSSARY.md:15, checked 2026-11-21.
- The Parallel waves section holds the waves, the critical path, the files that tasks in one wave share and the phases that share a wave. Source: skills/planning-and-task-breakdown/SKILL.md:237, checked 2026-11-21.

### READ (section 5)
- The build and plan commands find the active spec through `docs/agents/workspace.md` and its "Find the active effort" section. Source: .claude/commands/build.md:9 and .claude/commands/plan.md:7 and commands/build.toml:8 and commands/planning.toml:6, checked 2026-11-21.
- `/build auto` stops when no spec is active, and plans when the plan holds no task row yet. Source: .claude/commands/build.md:43-45 and commands/build.toml:40-44, checked 2026-11-21.
- Both plan commands stop and ask before writing when the plan already holds task rows. Source: .claude/commands/plan.md:26 and commands/planning.toml:25, checked 2026-11-21.
- The planning skill reads the spec of the active spec folder and writes rows, blocks and the Parallel waves section, not code. Source: skills/planning-and-task-breakdown/SKILL.md:24-34, checked 2026-11-21.
- The planning skill calls a plan incomplete when a row is `open` or `in-progress`, updates the same work in place and stops for one question on different work. Source: skills/planning-and-task-breakdown/SKILL.md:192-195, checked 2026-11-21.
- The incremental-implementation skill takes a task from a row on the frontier of the active spec folder's plan. Source: skills/incremental-implementation/SKILL.md:15-21, checked 2026-11-21.
- The review skill finds its spec in its own order: an issue reference in the commit messages, fetched with `gh issue view`, then a path from the user, then a spec folder whose slug or title matches the branch or the feature, then one question; it gives the task's block to the correctness sub-agent. Source: skills/code-review-and-quality/SKILL.md:43-48 and skills/code-review-and-quality/SKILL.md:78, checked 2026-11-21.
- The planning, incremental-implementation and test-driven-development skills name `docs/agents/workspace.md` as the place that finds the active spec, and do not name its section "Find the active effort". Source: skills/planning-and-task-breakdown/SKILL.md:28 and skills/incremental-implementation/SKILL.md:21 and skills/test-driven-development/SKILL.md:44, checked 2026-11-21.
- The workspace guide selects an effort first by the user's or the handoff's naming, then by the git branch name, and only then as the only idea or spec that is not finished; the code returns a spec that the branch names before it reads `finished`. Source: docs/agents/workspace.md:69-72 and scripts/workspace/effort.ts:91-98, checked 2026-11-21.
- The workspace guide's resume rule for a spec is to read `spec.md`, the plan, the todo file and relevant result records, and to reconcile completed work with actual changes and verification evidence before a task is repeated. Source: docs/agents/workspace.md:77, checked 2026-11-21.
- `docs/agents/workspace.md` defines the active effort as an idea with `status: define` or a spec whose plan has a row that is `open` or `in-progress`. Source: docs/agents/workspace.md:67, checked 2026-11-21.
- The effort code marks a spec as finished when no row is still to do, and a row is still to do when it is `open` or `in-progress`. Source: scripts/workspace/effort.ts:73 and scripts/workspace/graph.ts:18-20, checked 2026-11-21.
- The workspace guide's "Next step" line reports the first frontier row, followed by rows in progress. Source: docs/agents/workspace.md:39, checked 2026-11-21.

### CMD (section 7)
- Each status word has the same count in the two build commands, except "frontier" (16 and 17), and neither holds `in-progress`. Source: grep -o -i -- WORD FILE piped to wc -l for each WORD of "`open`" and "`resolved`" and "Blocked by" and "frontier" and "pending" and "checkpoint" and "wave" and "in-progress" and "Close a row" and each FILE of .claude/commands/build.md and commands/build.toml, checked 2026-11-21.
- The Claude build command tells a running task to rebase through a message, and the Gemini build command rebases a finished task itself before its merge because Gemini CLI cannot message a running subagent. Source: .claude/commands/build.md:77 and commands/build.toml:74, checked 2026-11-21.
- On Gemini CLI every task runs through the worktree fallback. Source: commands/build.toml:58, checked 2026-11-21.
- The spec commands name the plan command differently: `/plan` on Claude and `/planning` on Gemini. Source: .claude/commands/spec.md:21 and commands/spec.toml:20, checked 2026-11-21.
- The spec commands also differ in how to run `brain`: the Claude copy gives the plugin path, and the Gemini copy points to `docs/agents/workspace.md`. Source: .claude/commands/spec.md:19 and commands/spec.toml:18, checked 2026-11-21.
- The two status commands have different descriptions: the Gemini description names five lines (stage, last step, next step, red items, decisions waiting on the user), and the Claude description does not. Source: .claude/commands/status.md:1-7 and commands/status.toml:1-7, checked 2026-11-21.
- The bodies of the two status commands use the same status words and differ in one phrase, the path of the plugin's workspace reference. Source: .claude/commands/status.md:7 and commands/status.toml:6, checked 2026-11-21.

### CC (section 8)
- The build command and the incremental-implementation skill tell the agent to read the commit contract before the build. Source: .claude/commands/build.md:17 and commands/build.toml:16 and skills/incremental-implementation/SKILL.md:23, checked 2026-11-21.
- The contract covers intermediate work, completed tasks and integration, and its rule 1 is to commit each complete, verified slice. Source: references/brain/commit-contract.md:3-5, checked 2026-11-21.
- Rule 2: before a task is declared complete, its acceptance checks and review finish, and its result file names the final verified implementation commit, the slice commits, the verification commands, the outcomes and the remaining limits. Source: references/brain/commit-contract.md:6, checked 2026-11-21.
- Rule 3: before integration the main session reads every result file, and a pass line is an index into the evidence, not permission to skip it. Source: references/brain/commit-contract.md:7, checked 2026-11-21.
- Rule 4: integrate one task at a time and run the integration checks before closing the task. Source: references/brain/commit-contract.md:8, checked 2026-11-21.
- Rule 5: the main session alone updates plan rows and task ticks, and commits that state update separately after the named commit exists. Source: references/brain/commit-contract.md:9, checked 2026-11-21.
- The contract keeps the plan, implementation, integration and state-record commits apart, and says an approved build continues within that approval while a new product choice still follows the user's decision. Source: references/brain/commit-contract.md:11, checked 2026-11-21.
- A stage is one of define, plan, build, verify, review or ship, and it ends when its result is on disk. Source: references/brain/stage-boundaries.md:5, checked 2026-11-21.
- The same sentence lists the results that are on disk: "the map and its records, the spec, the plan, a commit, a verdict, a release". Source: references/brain/stage-boundaries.md:5, checked 2026-11-21.
- Besides the build command and the incremental-implementation skill, five more texts name the commit contract: the planning skill's Result rule, the router, the protocol's "Task end", the maintainer file and the maintainer change guide. Source: skills/planning-and-task-breakdown/SKILL.md:227 and skills/using-brain/SKILL.md:63 and skills/using-brain/SKILL.md:96 and protocol/PROTOCOL.md:55 and AGENTS.md:23 and docs/maintainers/changes.md:20, checked 2026-11-21.
- The gap between two rows of a map or two tasks of a plan works like a stage boundary. Source: references/brain/stage-boundaries.md:7, checked 2026-11-21.
- The stage boundaries reference says the state of the work lives in the map, the DEC and RES files, the spec, and "the plan's rows and result records, which the build keeps current throughout each task". Source: references/brain/stage-boundaries.md:9-18, checked 2026-11-21.
- The five options, the decision tree and the note on primary sources name no status value of an item; they say how a session carries state across a boundary. Source: references/brain/stage-boundaries.md:20-64, checked 2026-11-21.

### REV (section 9)
- The review skill labels each finding (Critical blocks merge; no prefix must be addressed before merge; Nit, Optional and FYI are not required) and gives one verdict: Approve, Request changes or Reject, where Reject means re-spec before rework. Source: skills/code-review-and-quality/SKILL.md:84-111, checked 2026-11-21.
- The review skill's overview says every change gets reviewed before merge and gives the approval standard. Source: skills/code-review-and-quality/SKILL.md:10-12, checked 2026-11-21.
- The review checklist template holds unticked boxes for the context, the five axes and the verdict, and the Verification list asks that Critical issues are resolved and Required changes are resolved or deferred with a reason. Source: skills/code-review-and-quality/SKILL.md:196-252 and skills/code-review-and-quality/SKILL.md:296-310, checked 2026-11-21.
- The review texts name `tasks/todo.md` only as an input, and name no `plan.md`, no `status` and no `brain` command. Source: grep -n -E "plan\.md|todo\.md|status|resolved|specced|brain " skills/code-review-and-quality/SKILL.md skills/code-review-and-quality/REVIEW-CRITERIA.md .claude/commands/review.md commands/review.toml (five hits: the input at lines 47 and 78 and the plugin root at line 74 and review issues that are resolved at lines 303 and 304), checked 2026-11-21.
- The ship rule makes NO-GO the default verdict on a Critical finding "unless the user explicitly accepts the risk", and makes the rollback plan mandatory before any GO. Source: commands/ship.toml:69-70 and .claude/commands/ship.md:70-71, checked 2026-11-21.
- The ship commands and the shipping-and-launch skill name no spec file, plan file, row, idea or `brain` command. Source: grep -n -E "tasks/|spec\.md|plan\.md|brain |IDEA|SPEC-|status|frontier|resolved" skills/shipping-and-launch/SKILL.md .claude/commands/ship.md commands/ship.toml (three hits with other meanings: TODO comments that are resolved and an HTTP status in sample code and the plugin's plain-talk path), checked 2026-11-21.
- The code-reviewer persona gives the verdict `APPROVE | REQUEST CHANGES` and labels a Critical finding as "Blocks merge". Source: agents/code-reviewer.md:51 and agents/code-reviewer.md:64, checked 2026-11-21.
- The security-auditor persona gives a Critical finding the action "Fix immediately, block release". Source: agents/security-auditor.md:61, checked 2026-11-21.
- The security-auditor persona also has the severities High, Medium and Low. Source: agents/security-auditor.md:62-64, checked 2026-11-21.
- The ship commands use the severities Critical, Important and High, and promote a Critical or High security finding to "launch blockers". Source: commands/ship.toml:31-32 and commands/ship.toml:49 and .claude/commands/ship.md:32-33 and .claude/commands/ship.md:50, checked 2026-11-21.
- The ship command's decision is "a single output" in the reply, with the headings Blockers, Recommended fixes and Acknowledged risks. Source: commands/ship.toml:40-52, checked 2026-11-21.
- The review checklist glosses the Approve verdict as "Ready to merge", and the Verification list lets a Required change be "explicitly deferred with justification". Source: skills/code-review-and-quality/SKILL.md:249 and skills/code-review-and-quality/SKILL.md:304, checked 2026-11-21.
- The one-task steps of the build commands name the test states RED and GREEN. Source: .claude/commands/build.md:32-33 and commands/build.toml:31-32, checked 2026-11-21.
- The four persona files name no plan file, no todo file, no frontier, no Blocked by, no `status:` field and no `brain` command. Source: grep -n -E "plan\.md|todo\.md|tasks/|frontier|Blocked by|status:|brain " agents/*.md (no output), checked 2026-11-21.
- No command file of either host names `in-progress`, `specced` or `superseded`. Source: grep -n -i -E "in-progress|specced|superseded" .claude/commands/*.md commands/*.toml (no output), checked 2026-11-21.
- The doubt-driven-development skill calls `/review` a verdict on a finished artifact, a final gate and a post-hoc PR verdict. Source: skills/doubt-driven-development/SKILL.md:12 and skills/doubt-driven-development/SKILL.md:200 and skills/doubt-driven-development/SKILL.md:225, checked 2026-11-21.

### VEN (section 10)
- The Definition of Done is a standing bar used as the final gate in the planning, incremental-implementation and shipping skills, and a task is done only when its acceptance criteria are met and the standing bar holds. Source: references/definition-of-done.md:1-15, checked 2026-11-21.
- The standing checklist is unticked boxes, and its last box is "The human has reviewed and approved before merge or deploy". Source: references/definition-of-done.md:17-51, checked 2026-11-21.
- "How to Apply" has three levels: per task, confirm Correctness and Quality "before checking the task off"; per feature, confirm Integration and Documentation "before considering the feature complete"; per release, the full checklist is the floor. Source: references/definition-of-done.md:53-59, checked 2026-11-21.
- The Definition of Done says the standing bar answers "Is it *ready*?". Source: references/definition-of-done.md:11, checked 2026-11-21.
- The red flags of the Definition of Done name work called done before it ran or before human review. Source: references/definition-of-done.md:61-67, checked 2026-11-21.
- Pattern 3 of the orchestration reference is a parallel fan-out of personas for `/ship`, allowed only when the sub-tasks have no ordering dependency. Source: references/orchestration-patterns.md:48-74 and references/orchestration-patterns.md:168-170, checked 2026-11-21.
- Pattern 4 is the lifecycle as commands that the user runs in order, with "human checkpoints" between the steps. Source: references/orchestration-patterns.md:78-92, checked 2026-11-21.
- The orchestration reference keeps the sequential lifecycle as user-driven commands, and calls an agent that runs `/spec`, `/plan` and `/build` for the user an anti-pattern. Source: references/orchestration-patterns.md:271-276 and references/orchestration-patterns.md:316-326, checked 2026-11-21.
- The decision flow sends dependent sub-tasks to sequential commands and independent sub-tasks to a parallel fan-out. Source: references/orchestration-patterns.md:343-357, checked 2026-11-21.
- The orchestration reference names a "shared task list" of Claude Code Agent Teams. Source: references/orchestration-patterns.md:131 and references/orchestration-patterns.md:246, checked 2026-11-21.
- The orchestration reference has a table row named "Status" with the values Stable and Experimental, for two host features. Source: references/orchestration-patterns.md:134, checked 2026-11-21.
- The orchestration reference says "human checkpoints" twice. Source: references/orchestration-patterns.md:92 and references/orchestration-patterns.md:321, checked 2026-11-21.
- No vendored file keeps a list of done tasks; the search finds the shared task list of Agent Teams, one changelog sample and one "backlog" in a security pattern. Source: jq -r '.files | keys[]' upstream.lock.json piped through xargs to grep -n -i -E "done list|backlog|task list" (five hits at references/orchestration-patterns.md:131 and 197 and 246 and skills/documentation-and-adrs/SKILL.md:247 and skills/security-and-hardening/references/hardening-patterns.md:232), checked 2026-11-21.
- The build command says `/build auto` collapses plan and build into one run. Source: .claude/commands/build.md:41, checked 2026-11-21.
- The vendored ADR template stores status in a `## Status` body section with the values `Accepted | Superseded by ADR-XXX | Deprecated`. Source: skills/documentation-and-adrs/SKILL.md:46-57, checked 2026-11-21.
- The vendored ADR lifecycle is PROPOSED, then ACCEPTED, then SUPERSEDED or DEPRECATED, and a new ADR supersedes the old one. Source: skills/documentation-and-adrs/SKILL.md:93-100, checked 2026-11-21.
- The vendored ADR skill says an established convention in the repo overrides its defaults. Source: skills/documentation-and-adrs/SKILL.md:38, checked 2026-11-21.
- The vendored ADR skill stores ADRs in `docs/decisions/` by default, with file names such as `ADR-001`, and its template's status line has no Proposed value although its lifecycle starts with PROPOSED. Source: skills/documentation-and-adrs/SKILL.md:48 and skills/documentation-and-adrs/SKILL.md:51 and skills/documentation-and-adrs/SKILL.md:54 and skills/documentation-and-adrs/SKILL.md:96, checked 2026-11-21.
- Three vendored files of this topic hold a rule on TODO comments as marks of unfinished work in code. Source: skills/documentation-and-adrs/SKILL.md:130-131 and skills/documentation-and-adrs/SKILL.md:275 and skills/constraint-driven-development/SKILL.md:211 and skills/shipping-and-launch/SKILL.md:28, checked 2026-11-21.
- Brain's decision format has the status values `proposed`, `accepted` and `superseded by DEC-NNN` in frontmatter. Source: skills/domain-modeling/DEC-FORMAT.md:40, checked 2026-11-21.
- The deprecation skill orders a schema change as expand, migrate, contract "phases" and says to treat each phase as a thin vertical slice. Source: skills/deprecation-and-migration/SKILL.md:164-190, checked 2026-11-21.
- The deprecation skill also numbers a rollout as "Phase 1" to "Phase 5". Source: skills/deprecation-and-migration/SKILL.md:127-131, checked 2026-11-21.
- The shipping-and-launch skill holds 49 unticked boxes, and its rollout table has the columns "Advance (green)", "Hold and investigate (yellow)" and "Roll back (red)". Source: grep -c -- "- \[ \]" skills/shipping-and-launch/SKILL.md and skills/shipping-and-launch/SKILL.md:146, checked 2026-11-21.
- All eight files under `hooks/` are under the `files` key. Source: upstream.lock.json:19-50, checked 2026-11-21.
- DEC-051 says "specced" is done with `result:` naming the spec. Source: docs/decisions/DEC-051-shared-status-values.md:15, checked 2026-11-21.
- The constraint-driven-development skill names `/build auto` as a trigger and has a table whose "Phase" column lists BUILD, VERIFY, REVIEW and SHIP. Source: skills/constraint-driven-development/SKILL.md:27 and skills/constraint-driven-development/SKILL.md:186-195, checked 2026-11-21.
- The glossary lists "phase" under Avoid for the lifecycle and "gate" under Avoid for a checkpoint. Source: GLOSSARY.md:13 and GLOSSARY.md:77, checked 2026-11-21.
- The ship commands name their sections "Phase A", "Phase B" and "Phase C". Source: commands/ship.toml:8 and commands/ship.toml:27 and commands/ship.toml:38, checked 2026-11-21.
- The Stop-the-Line rule stops feature work on anything unexpected and resumes only after verification passes. Source: skills/debugging-and-error-recovery/SKILL.md:31-45, checked 2026-11-21.
- The browser testing skill's Verification list is unticked boxes, one of which is "All DevTools findings are addressed before marking complete". Source: skills/browser-testing-with-devtools/SKILL.md:306-317, checked 2026-11-21.
- The agent brief reference says a brief is posted when an issue or PR "moves to `ready-for-agent`", and its template and examples hold unticked acceptance boxes. Source: references/brain/agent-brief.md:5 and references/brain/agent-brief.md:65-68, checked 2026-11-21.
- The research brief reads the agent brief reference for its principles only. Source: skills/interview-me/RESEARCH.md:3, checked 2026-11-21.
- The context-engineering skill tells the agent to persist five things before it leaves a session; item 1 is the accepted scope and decisions "in the spec or plan", and item 2 is "the current task status and the next pending task", for which it names no place. Source: skills/context-engineering/SKILL.md:125-131, checked 2026-11-21.
- Item 5 of that list is "unresolved questions, risks, and required approvals", the fresh session reads "task status", and the skill says "Do not infer approval from a previous conversation unless the durable artifact records it". Source: skills/context-engineering/SKILL.md:131 and skills/context-engineering/SKILL.md:135, checked 2026-11-21.
- The test-driven-development skill's sample code gives a sample task object the status `'pending'` and `'completed'`, in two assertions and two object literals. Source: skills/test-driven-development/SKILL.md:75 and skills/test-driven-development/SKILL.md:91 and skills/test-driven-development/SKILL.md:143 and skills/test-driven-development/SKILL.md:150, checked 2026-11-21.
- The browser testing skill's sample checks hold `{ status: "completed" }` and `{ status: "pending" }`. Source: skills/browser-testing-with-devtools/SKILL.md:199 and skills/browser-testing-with-devtools/SKILL.md:204, checked 2026-11-21.
- The test-engineer persona's report format holds the line "- [X] tests covering [Y] functions/components", which is a placeholder and not a tick. Source: agents/test-engineer.md:67, checked 2026-11-21.
- Four vendored checklist references outside the topic hold 88, 49, 46 and 30 unticked boxes, and six vendored skills outside the topic hold 7 to 13. Source: grep -c -- "- \[ \]" references/performance-checklist.md references/security-checklist.md references/observability-checklist.md references/accessibility-checklist.md skills/security-and-hardening/SKILL.md skills/performance-optimization/SKILL.md skills/code-simplification/SKILL.md skills/observability-and-instrumentation/SKILL.md skills/frontend-ui-engineering/SKILL.md skills/ci-cd-and-automation/SKILL.md, checked 2026-11-21.
- Two vendored files outside the topic hold sample task statuses with the spellings `"IN_PROGRESS"`, `"COMPLETED"`, `'in_progress'` and `'pending'`. Source: skills/api-and-interface-design/SKILL.md:154 and skills/api-and-interface-design/SKILL.md:277-286 and references/testing-patterns.md:29 and references/testing-patterns.md:174, checked 2026-11-21.
- The vendored floor guard counts `TODO` as a stub and `.skip` and `.todo` as skipped tests. Source: skills/constraint-driven-development/references/floor-guard.md:59-61, checked 2026-11-21.
- The old layout's label table holds `ready-for-agent`, the old-layout code lists the tracker files, and the migration removes the legacy tracker files only when approved. Source: scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/triage-labels.md:11 and scripts/workspace/old-layout.ts:38-41 and skills/setup-brain/MIGRATION.md:17, checked 2026-11-21.
- The glossary lets a skill number its own sections as phases, and the debugging skill has a section "Phase 1". Source: GLOSSARY.md:71 and skills/debugging-and-error-recovery/SKILL.md:47, checked 2026-11-21.
- "Ready" is used on six lines of the 33 topic files and names no stored state of a Brain item; "waiting" names a state on one line; "in review" names no state. Source: grep -n -i -w -E "ready|ready-for-agent" and grep -n -i -w waiting and grep -n -i "in review" over the 33 files of the topic's file list (ready at references/brain/agent-brief.md:5 and 13 and references/definition-of-done.md:11 and skills/code-review-and-quality/SKILL.md:249 and skills/doubt-driven-development/SKILL.md:189 and skills/incremental-implementation/SKILL.md:159; waiting as a state at commands/status.toml:1), checked 2026-11-21.
- No instruction file under skills, commands, references or agents holds a ticked box. Source: grep -rn -- "- \[x\]" skills commands .claude/commands references agents (no output), checked 2026-11-21.
- No vendored file names `tasks/plan.md`, `tasks/todo.md`, Blocked by, the frontier, a checkpoint row, a row table or the `brain` commands plan, check and status. Source: jq -r '.files | keys[]' upstream.lock.json piped through xargs to grep -n -E "tasks/plan\.md|tasks/todo\.md|Blocked by|frontier|checkpoint row|row table|brain plan|brain check|brain status" (no output), checked 2026-11-21.
- No file under `hooks/` names a todo file, a plan file or a task state. Source: grep -n -i -E "todo|tasks/|plan\.md|\[ \]|\[x\]|in.progress|pending" hooks/*.sh hooks/*.md (one hit, `isPending` in a sample payload), checked 2026-11-21.

### USER (section 11)
- Ten command files state the standing rule "one question per call" for a decision that is the user's, and the ship, status, code-simplify, constraints and webperf commands do not. Source: grep -c "one question per call" .claude/commands/*.md commands/*.toml, checked 2026-11-21.
- The standing rule is in the build, plan, review, spec and test commands of both hosts. Source: .claude/commands/build.md:5 and .claude/commands/plan.md:5 and .claude/commands/review.md:5 and .claude/commands/spec.md:5-7 and .claude/commands/test.md:5 and commands/build.toml:4 and commands/planning.toml:4 and commands/review.toml:4 and commands/spec.toml:4-6 and commands/test.toml:4, checked 2026-11-21.
- `/build auto` stops and asks the user on uncommitted changes outside the active spec's folder. Source: .claude/commands/build.md:44 and commands/build.toml:43, checked 2026-11-21.
- `/build auto` stops and asks the user on a test that cannot pass, a large merge conflict, a broken build, an ambiguous spec, an uncovered decision or a high-risk task, and after the user resolves the blocker the user re-invokes the command, which resumes from the frontier. Source: .claude/commands/build.md:48-53 and commands/build.toml:47-51, checked 2026-11-21.
- For a bug fix the test commands run the debugging skill first, which stops to ask when no feedback loop can be built. Source: .claude/commands/test.md:12 and commands/test.toml:11, checked 2026-11-21.
- When the review finds no spec, the spec's location is the user's decision, asked as one question. Source: skills/code-review-and-quality/SKILL.md:48-50, checked 2026-11-21.
- The review skill asks the user before it deletes dead code. Source: skills/code-review-and-quality/SKILL.md:127-141, checked 2026-11-21.
- Work noticed outside a task's scope is noted, and whether it becomes tasks is the user's decision, asked as one question. Source: skills/incremental-implementation/SKILL.md:134-143, checked 2026-11-21.
- The test-driven-development skill reuses a seam approval, asks one question about a new or changed seam, and keeps dependent tests pending until the choice is settled. Source: skills/test-driven-development/SKILL.md:38-44 and skills/test-driven-development/SKILL.md:415 and skills/test-driven-development/SKILL.md:431, checked 2026-11-21.
- The debugging skill asks the user when redacted output is not enough, and when no loop can be built it stops, asks one question and says "A bug without a loop stays open until one exists". Source: skills/debugging-and-error-recovery/SKILL.md:29 and skills/debugging-and-error-recovery/SKILL.md:98-100 and skills/debugging-and-error-recovery/SKILL.md:350, checked 2026-11-21.
- The debugging skill shows its ranked hypotheses to the user as a "cheap checkpoint" and does not block on it. Source: skills/debugging-and-error-recovery/SKILL.md:181, checked 2026-11-21.
- The debugging skill runs no command from an error message without user confirmation. Source: skills/debugging-and-error-recovery/SKILL.md:357-364, checked 2026-11-21.
- The loop template waits in a terminal: `step` waits for Enter and `capture` waits for an answer, and it writes no record. Source: skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh:10-45, checked 2026-11-21.
- The doubt-driven-development skill surfaces to the user when it runs inside a subagent, asks the user about a cross-model review, never runs an external CLI without authorization, and escalates to the user after 3 cycles. Source: skills/doubt-driven-development/SKILL.md:44-47 and skills/doubt-driven-development/SKILL.md:112-166 and skills/doubt-driven-development/SKILL.md:181-191 and skills/doubt-driven-development/SKILL.md:204-219, checked 2026-11-21.
- The constraint-driven-development skill needs a live user for its interview, flags the rest for a human in a non-interactive run, and asks four questions one at a time, each with a default. Source: skills/constraint-driven-development/SKILL.md:36-38 and skills/constraint-driven-development/SKILL.md:57-91, checked 2026-11-21.
- The source-driven-development skill asks the user when versions are missing, surfaces a conflict between sources and puts a docs-against-code conflict to the user as two options. Source: skills/source-driven-development/SKILL.md:61 and skills/source-driven-development/SKILL.md:95 and skills/source-driven-development/SKILL.md:125-139, checked 2026-11-21.
- The browser testing skill asks for user confirmation before it navigates to a URL from page content or changes the DOM. Source: skills/browser-testing-with-devtools/SKILL.md:78-80 and skills/browser-testing-with-devtools/SKILL.md:90 and skills/browser-testing-with-devtools/SKILL.md:301, checked 2026-11-21.
- The change summary of the git workflow skill lists what the agent left alone as a "separate task" and a concern for the user to confirm. Source: skills/git-workflow-and-versioning/SKILL.md:191-209, checked 2026-11-21.

### NR (section 18)
- DESIGN-IT-TWICE tells the agent to show the problem text and then proceed at once, while three or more sub-agents work in parallel. Source: skills/codebase-design/DESIGN-IT-TWICE.md:17-21, checked 2026-11-21.
- The git workflow skill gives each branch its own worktree for parallel agents and hands the release to the shipping-and-launch skill. Source: skills/git-workflow-and-versioning/SKILL.md:147-171 and skills/git-workflow-and-versioning/SKILL.md:311, checked 2026-11-21.

### Other topics (section 15)
- The row status rule in the schema accepts `open`, `in-progress`, `resolved` and `superseded by NN`. Source: scripts/workspace/schema.ts:210, checked 2026-11-21.
- A spec of this repo holds its approval as prose in its body: "Status: approved by Peter on 2026-10-29.". Source: specs/SPEC-009-workspace/spec.md:9, checked 2026-11-21.
- A lifecycle test matches words of the build texts, such as "only writer" and "checkpoint row on the frontier stops the build". Source: scripts/lifecycle/__tests__/parallel-build.test.ts:35-37, checked 2026-11-21.
- This repo's capability map decision has a "Depends on" column. Source: docs/decisions/DEC-004-capability-map-brain.md:11, checked 2026-11-21.

## Follow-ups
- Does an agent write `in-progress` or `superseded by NN` on a plan row in a real run? Two fixtures hold `in-progress` and one grader accepts it; no instruction has a step that writes it, and no real plan of this repo has a row table. Row 24 can answer from the eval runs; row 31 needs the answer for decide row 08.
- Which rule holds for a task that no Blocked by cell ties to a checkpoint on the frontier: the plan's "no other task" or the build's "Start no new task"? Row 28 owns phases and checkpoints; decide rows 01 and 09 need the answer.
- Does the protocol's "Task end" rule put a build's stop-and-ask wait into a plan row, and with which row type? Row 23 owns the protocol; decide row 04 needs the answer.
- Should the glossary get an entry for "wave"? The term is in the commands and the planning skill, and the glossary has none. This is a gap for the domain-modeling skill.

## Next action
None.
