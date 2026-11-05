---
id: RES-037
status: resolved # in-progress | resolved
kind: research
from: IDEA-003#25 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-05
---
# RES-037: The flow and its state

## Question
What is brain's workflow at HEAD: its stages, the state each stage writes, who reads each piece of state to decide something, and what only a check keeps alive? This record is the one correct statement of the flow, its state management and its sequencing. It shows exactly where the built flow falls short of Peter's intended flow.

## Findings

Read this record with five rules.

1. HEAD is `f29cc6b7`. **Built** means what the code, hooks, manifests, skills and protocol do there. **Intended** means what Peter stated: the Intent and Notes of IDEA-003, and the two references in `docs/intent/`. A later statement wins.
2. A skill or protocol line proves only what an agent is told. No live session ran for this record.
3. A "run" was done in a scratch repo, on a copy of a fixture, or on a throwaway clone. No run changed this repo or any earlier project. The plugin at 0.12.1 matches HEAD in `skills/`, `protocol/PROTOCOL.md` and every `scripts/` file except one test.
4. Every tag is provisional until the file audits finish.
5. This record decides nothing for Peter. A line marked PROPOSAL is a need that RES-036 proposed. Section 12 lists every open choice.

Sections 1 to 12 follow these findings. They rest on these lines and on RES-032 to RES-036.

### The intended flow

- The acceptance test: "a user starts a new session and types any word"; with one piece of work available the session says where things stand and picks up the next step; with several it spells them out and asks at once, as a multiple-choice question; everything stays current during the session, and session end leaves it all correct for the next start. Source: docs/ideas/IDEA-003-finish-workflow-changes.md:12, checked 2026-11-05.
- Peter adds that one thing "can be the only option because of dependencies", that the question goes through ask-user-question, and that this "is part of session start". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:46, checked 2026-11-05.
- On migration: "On plugin startup, brain evaluates whether the workspace is outdated or incompatible, tells the user automatically, and offers to migrate safely", it backs up everything first, and afterwards "a mechanism validates that all state in the backup is preserved". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:48, checked 2026-11-05.
- On the skill tree: each skill "says explicitly at its start which skills to load before anything else, always or on a stated condition". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:52, checked 2026-11-05.
- On routing: `using-brain` "evaluates the environment of the session and the user's prompt, and it routes the agent", and "over-triggering is better than under-triggering". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:54, checked 2026-11-05.
- On the install path: "a user installs the plugin, starts a session in a new codebase, and brain must set itself up and then run session start". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:56, checked 2026-11-05.
- On `brain status`: it "is the full context: it shows the edges inside ideas and specs, the edges between specs, and what can run in parallel". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:58, checked 2026-11-05.
- On the note: "the computed state is the real status; the note tracks one in-progress thing, and the point of this update was to have several in progress, so the note is not a reliable state". Source: docs/ideas/IDEA-003-finish-workflow-changes.md:60, checked 2026-11-05.
- The design rule: the protocol "owns how a session runs", `using-brain` "owns routing", and "the protocol points to `using-brain` for routing". Source: docs/intent/workspace-and-stateful-interview.md:944-946, checked 2026-11-05.

### The flow as built

- brain has six stages in this order: define, plan, build, verify, review, ship. Not every task needs every stage. Source: skills/using-brain/SKILL.md:215-226, GLOSSARY.md:10-13, RES-033, checked 2026-11-05.
- One hook event exists, `SessionStart`, and only on Claude Code. Every other step of the flow is agent text. Source: scripts/hooks/claude-code.json:3, .claude-plugin/plugin.json:33, RES-033, checked 2026-11-05.
- `brain` has four commands: `new-doc`, `check`, `plan` and `status`. Source: scripts/brain.ts:32-37, checked 2026-11-05.
- The frontier is computed from the rows on each read and is stored nowhere. `brain status` writes no file. Source: scripts/workspace/map.ts:155-161, scripts/workspace/status.ts:6, RES-006, checked 2026-11-05.

### Session start as built

- Neither the protocol nor the hook names `using-brain`. A search of both files finds nothing. Source: protocol/PROTOCOL.md:1-53, scripts/hooks/session-start.ts:29-33, RES-035, checked 2026-11-05.
- Nothing orders `using-brain`: no skill, command, agent, hook or protocol line. Only the host's match on its description reaches it. Source: skills/using-brain/SKILL.md:3, RES-036, checked 2026-11-05.
- On Claude Code the hook prints the protocol, the `brain` path, the five lines and the full note. It prints nothing from `docs/agents/`. Source: scripts/hooks/session-start.ts:101-102, scripts/hooks/session-start.ts:136-159, checked 2026-11-05.
- The protocol's session start has no branch for several efforts: step 3 opens "the active effort", and step 5 ends in a report and "Continue" resumes "the next approved row or task". No step picks up work or asks. Source: protocol/PROTOCOL.md:7, protocol/PROTOCOL.md:9, checked 2026-11-05.
- The rule to ask does exist, in three other texts: `workspace.md`'s "Otherwise, ask the user", interview-me's resume, and the status skill's "ask the user which one to take up". None says "at once" or "multiple choice". Source: skills/setup-brain/workspace.md:44-49, skills/interview-me/SKILL.md:342, skills/status/SKILL.md:43, checked 2026-11-05.
- The status skill triggers when "no status report is in context yet". On Claude Code the hook puts the report in context, so that trigger does not fire at session start, and its line 43 stays unread. Source: skills/status/SKILL.md:3, skills/status/SKILL.md:43, scripts/hooks/session-start.ts:102, checked 2026-11-05.
- `activeEffort` returns one effort, none, or several. "Several" means more than one effort that is not finished. It says nothing about what can be taken. Source: scripts/workspace/effort.ts:32, scripts/workspace/effort.ts:99-104, checked 2026-11-05.
- In a scratch workspace with three ideas (one decide row on the frontier, one with nothing to take but a do row in progress, one with two research rows), `brain status` counted all three as active and gave one next-step line. No field says how many can be taken. Source: run in a scratch workspace, scripts/workspace/status.ts:212-219, checked 2026-11-05.
- A branch that names one effort hides every other effort, even when the named effort is finished or parked. In a run on `feat/alpha`, a parked idea gave `Stage: finished` and the two open ideas left the report. Source: scripts/workspace/effort.ts:92-98, run in a scratch workspace, checked 2026-11-05.
- A spec with no plan rows counts as finished, so a spec that waits for `/plan` leaves the report. In a run, `brain new-doc SPEC` added a spec, and `brain status` did not name it. `brain plan` on it said "No open rows: every row is resolved or superseded". Source: scripts/workspace/effort.ts:65-73, scripts/workspace/plan.ts:172-175, run in a scratch workspace, checked 2026-11-05.
- The stage has three values: `define`, `build` and `finished`. Plan, verify, review and ship never appear. Source: scripts/workspace/status.ts:42, scripts/workspace/status.ts:116-119, RES-033, checked 2026-11-05.
- `Next:` in the note replaces the whole next-step line, whatever the rows say. Source: scripts/workspace/status.ts:223-226, checked 2026-11-05.
- Live proof in this repo: three ideas are active with 1, 9 and 0 frontier rows, and the report's next step is the note's "finish IDEA-003 rows 02, 03 and 04, then start its audit rows 05 to 09 and 16". Rows 02 to 04 are resolved and rows 05 to 09 and 16 are blocked, so the line names no row that can be taken, and IDEA-002's nine rows do not show. Source: `brain status` and `brain status --json` in this repo, docs/STATUS.md:5, docs/ideas/IDEA-003-finish-workflow-changes.md:72-79, checked 2026-11-05.
- `brain status` exits 0 with findings present, so no step can stop on it. Source: scripts/workspace/status.ts:306-316, RES-034, checked 2026-11-05.
- On Gemini CLI and Antigravity the protocol arrives, no hook runs, and the agent must run `brain status` itself. On Codex nothing arrives until setup-brain writes the blocks. Source: RES-032, docs/install/codex.md:23-29, checked 2026-11-05.

### First run as built

- In a scratch repo that never had brain, `brain status` printed `Stage: no active work`, `Next step: none` and `Red: no docs/agents/workspace.md: run setup-brain`, and the hook text was 4,527 characters. Source: run in a scratch repo, checked 2026-11-05.
- The protocol tells the agent to "tell the user once to run setup-brain". So a first session stops at a message. Source: protocol/PROTOCOL.md:6, checked 2026-11-05.
- setup-brain ends with "start with interview-me, which charts the first idea". It does not go on into session start. Source: skills/setup-brain/SKILL.md:164, checked 2026-11-05.
- An agent may load setup-brain: its frontmatter sets no `disable-model-invocation`, and the shipped protocol names only handoff as a skill the user starts. The draft named setup-brain there too. Source: skills/setup-brain/SKILL.md:1-4, protocol/PROTOCOL.md:16, docs/intent/workspace-and-stateful-interview.md:504, checked 2026-11-05.
- The texts disagree on who runs setup-brain: `using-brain` says run it, and the protocol and 8 skills say tell the user. Source: skills/using-brain/SKILL.md:16, protocol/PROTOCOL.md:6, RES-036, checked 2026-11-05.
- setup-brain's own steps ask the user: the layout, the glossary rename, the Codex scope and the specs folder on their conditions, `capabilities.md` always, and the overlap sections when `AGENTS.md` has some. Source: skills/setup-brain/SKILL.md:51-63, skills/setup-brain/SKILL.md:102-108, skills/setup-brain/SKILL.md:138, checked 2026-11-05.
- The Claude Code hook's command is `bun`, so on a machine with no bun the hook cannot run, and the protocol and its fallback do not arrive. Only setup-brain's step 1 checks for bun. Source: scripts/hooks/claude-code.json:8, skills/setup-brain/SKILL.md:24-30, checked 2026-11-05.

### Outdated detection as built

- `brain status` looks for layout 1 only when `workspace.md` is absent. Source: scripts/workspace/status.ts:278-284, checked 2026-11-05.
- Two detectors exist. `findOldLayout` feeds `brain status` and leaves out ADRs and records with no frontmatter. `findToMigrate` feeds `write.ts --check` and holds both. In a run, a repo whose only sign was `docs/decisions/0001-x.md` got five lines and no migrate line. Source: scripts/workspace/old-layout.ts:53-72, scripts/workspace/old-layout.ts:126-149, scripts/setup/write.ts:187-193, run in a scratch repo, checked 2026-11-05.
- The detector cannot tell a repo that never had brain from a repo on layout 1. In a run, a repo with only `docs/intent/a.md` and `tasks/todo.md` got "This repo is on layout 1 (brain 0.9 and earlier)". Source: scripts/workspace/old-layout.ts:53-60, run in a scratch repo, checked 2026-11-05.
- `layout: 2` is the only marker a repo holds. No field records which brain release wrote the files. Source: skills/setup-brain/workspace.md:2, scripts/workspace/config.ts:15-21, checked 2026-11-05.
- A repo on layout 2 with an older `workspace.md` text, and with no `domain.md` or note, got a clean report from `brain status`, while `write.ts --check` exited 1 with "3 files differ". Nothing runs `--check` at session start. Source: run in a scratch repo, RES-034, checked 2026-11-05.
- A session can run an older brain than the repo holds: the host keeps the plugin version, outside the repo. Source: RES-032, checked 2026-11-05.

### Migrate mode as built

- The migrate mode has a dry run, one commit, and an undo that puts every file back when a step fails. It has no backup step and no step that compares state before and after. A search of `migrate.ts` for a backup finds none. Source: scripts/setup/migrate.ts:4-9, scripts/setup/migrate.ts:824-850, skills/setup-brain/SKILL.md:205-219, checked 2026-11-05.
- It skips a file that git does not track or that has uncommitted changes. Each of six earlier projects holds uncommitted changes today, 1 to 9 entries each. Source: scripts/setup/migrate.ts:14-16, `git status --short` in each earlier project, checked 2026-11-05.
- Its only check afterwards is `brain check`, which reads shapes. Source: skills/setup-brain/SKILL.md:213-219, checked 2026-11-05.
- A repo mid-build loses sight of its work: the layout 1 fixture holds two unticked tasks and a draft intent; after a real migrate, `brain status` said `Stage: no active work`, `Next step: none`, `Red: none`, and `brain check` said no finding. Source: run on a copy of scripts/workspace/__tests__/fixtures/layout-0.8, checked 2026-11-05.
- The cause has two parts. A migrated idea has no `status`, and anything but `define` reads as finished. A migrated plan keeps its old body, which holds no row table, so it gives no rows. Source: scripts/workspace/effort.ts:48-56, scripts/workspace/effort.ts:65-73, scripts/workspace/status.ts:93-100, skills/setup-brain/SKILL.md:195, checked 2026-11-05.
- That behaviour follows Peter's rule that the migrate mode "never rewrites a body". Source: docs/intent/workspace-and-stateful-interview.md:711, docs/intent/workspace-and-stateful-interview.md:735, checked 2026-11-05.
- On throwaway clones of six earlier projects, a real migrate exited 0, and `brain status` then named no open work in any of them: five printed `no active work`, and one printed `finished` for the spec its branch names. Source: run on a clone of each earlier project, checked 2026-11-05.
- In those clones `brain check` gave 152 findings, 13 to 43 per repo. 149 of them are `name: not RES-NNN-<slug>.md`, because the migrate mode has no step for a research file named `01-<slug>.md` or `<slug>.md`. Source: the same runs, scripts/workspace/old-layout.ts:134-147, checked 2026-11-05.
- No code outside tests names `.scratch`, `docs/agents/workflow.md`, `docs/design` or `tasks/done`, and neither `migrate.ts` nor `old-layout.ts` names `docs/STATUS.md`. Those files stay where they are, unread. Source: `git grep` over `scripts/setup/*.ts` and `scripts/workspace/*.ts`, whose only hits are in `overlap.test.ts`, checked 2026-11-05.
- None of the six notes holds a labelled `Next:` or `Waiting:` line. They use headings such as "## Next steps" and "## Waiting on Peter", and they run from 36 to 189 lines. So in those repos the note is the only statement of where the work stands, and `brain status` reads none of it but the first line. Source: `grep` on docs/STATUS.md in each repo, scripts/workspace/status.ts:186-195, scripts/workspace/status.ts:231-235, checked 2026-11-05.

### During a session as built

- The standing rule: "Write each result to disk the moment it exists". Source: skills/using-brain/SKILL.md:182, checked 2026-11-05.
- interview-me re-maps after every resolved row, on disk, and the same list rewrites the note "when the repo has one". Source: skills/interview-me/SKILL.md:179-189, checked 2026-11-05.
- "Close a row" has five steps: tick, set the row, replace the Parallel waves section, run `brain check`, commit two files. It does not name the note. Source: .claude/commands/build.md:98-104, checked 2026-11-05.
- A running build task keeps its row `open`, and no build text writes `in-progress` on a plan row. The planning skill still lists that status. Source: .claude/commands/build.md:59, skills/planning-and-task-breakdown/SKILL.md:225, `grep in-progress` on the build command and skill, checked 2026-11-05.
- No text tells an agent to commit an idea file, a decision record or a research record. Only "Commit the spec", a change made in place, and the build's commits exist. Peter chose to commit `docs/ideas/`, so that "Any clone resumes an interview". Source: `grep -i commit` on skills/interview-me/SKILL.md, skills/interview-me/RESEARCH.md and skills/domain-modeling/SKILL.md, skills/spec-driven-development/SKILL.md:226, RES-033, checked 2026-11-05.
- Live proof: `git ls-files docs/ideas` lists one of this repo's three ideas, and the working tree holds 22 uncommitted entries. Source: `git ls-files docs/ideas` and `git status --short` in this repo, checked 2026-11-05.
- No field holds a spec's or a plan's approval, and no file holds a review verdict or a ship decision. Source: RES-032, RES-033, checked 2026-11-05.
- No step in `/spec`, `/plan`, `/build` or the define, plan and build skills makes the feature branch that the active-effort rule reads. Source: RES-033, `grep` for a branch step on those files, checked 2026-11-05.
- The research brief still calls `brain sdd-cache lookup`, which does not exist. Source: skills/interview-me/RESEARCH.md:51, scripts/brain.ts:32-37, checked 2026-11-05.

### Session end as built

- The protocol has no session-end section. Its last section is Task end, so a session's last write is the last task end. Source: protocol/PROTOCOL.md:47-53, RES-032, checked 2026-11-05.
- No code runs at session end: brain's hook file holds `SessionStart` alone. Source: scripts/hooks/claude-code.json:3, RES-032, checked 2026-11-05.
- interview-me is the one skill with a session-end rule: end between rows, wait for running research sub-agents, tell the user the next frontier row. Source: skills/interview-me/SKILL.md:195-204, checked 2026-11-05.
- interview-me's resume repairs what a crash left: it settles each row left `in-progress` from its record, and it continues a stopped research record. The build has no such step: a stopped fallback worktree gets one question to the user, and a host worktree gets nothing. Source: skills/interview-me/SKILL.md:354-357, .claude/commands/build.md:88, checked 2026-11-05.
- A fresh record fails `brain check` until its agent fills it, so a crashed sub-agent leaves red at the next start. This record gave 3 findings while fresh. Source: `brain status --json` in this repo, RES-034, checked 2026-11-05.
- A row closes after its code commit, so a session that dies between the two leaves the code committed and the row `open`. Only the commit message links them. Source: .claude/commands/build.md:98-104, checked 2026-11-05.

### `brain status` as the full context

- The report and `--json` hold the frontier, the rows in progress, and the decide rows. They hold no blocked row and no `Blocked by` edge. Source: scripts/workspace/status.ts:35-52, scripts/workspace/status.ts:120-130, checked 2026-11-05.
- `brain plan` gives waves, the critical path and shared files for one spec. It refuses an idea, and it stops with several efforts unless a spec is named. Source: scripts/workspace/plan.ts:249-262, checked 2026-11-05.
- No edge between two efforts can be written. A `Blocked by` cell takes only a two-digit row number: in a run, `IDEA-001#01` gave a finding. A new spec field gave "not a field of a spec file". Source: scripts/workspace/map.ts:90-93, scripts/workspace/schema.ts:176-186, scripts/workspace/schema.ts:227, run in a scratch workspace, checked 2026-11-05.
- Dependencies between specs exist only as prose in a capability map's decision record, such as DEC-004's "Depends on" column. Source: docs/decisions/DEC-004-capability-map-brain.md:11-23, skills/spec-driven-development/SKILL.md:57-80, checked 2026-11-05.
- `sources:` is the one link from a spec to its idea, and only `--json` shows it. Source: scripts/workspace/status.ts:155-176, RES-032, checked 2026-11-05.
- The hook has about 6,000 characters for status, because the protocol takes 4,000 of the 10,000 cap. This repo's three active ideas hold 87 rows, about 13,140 characters as one line each. Source: scripts/hooks/session-start.ts:24, docs/intent/workspace-and-stateful-interview.md:756, run on docs/ideas in this repo, checked 2026-11-05.

### Reaching `using-brain`

- `using-brain` is 20,227 bytes, twice the 10,000-character cap on hook text. Source: `wc -c skills/using-brain/SKILL.md`, RES-035, checked 2026-11-05.
- The protocol holds 3,998 of its 4,000 characters, and Peter's rule sends a new rule to `using-brain` or `workspace.md`. Source: `wc -c protocol/PROTOCOL.md`, scripts/plain-talk/__tests__/render.test.ts:318, docs/intent/workspace-and-stateful-interview.md:756, checked 2026-11-05.
- Of every mechanism tested on Claude Code, only a mod's `$.command.run` loads the skill with no choice by the agent. It covers `startup` only, needs 2.1.287 or later, and every test used `--plugin-dir`. Source: RES-035, checked 2026-11-05.
- A loaded skill is not a followed skill: in one test the agent read the skill and refused its instruction. Source: RES-035, checked 2026-11-05.
- Codex hooks need the user's trust in `/hooks`, so on Codex only a skill description reaches the router with no user step. Source: RES-035, checked 2026-11-05.
- `lifecycle:check` fails on `hooks/hooks.json` and on a root `hooks.json`, the fixed paths a Gemini CLI or Antigravity hook would need. Source: scripts/lifecycle/hooks.ts:13, RES-035, checked 2026-11-05.
- `lifecycle/no-overload` lets the router and `status` load: its grader lists only stage skills. So over-triggering `using-brain` fails no eval. Source: evals/lifecycle/no-overload/graders/no-lifecycle-skill.md:3-9, checked 2026-11-05.
- No eval's prompt is an arbitrary first word in a repo with work on the frontier. `fresh-repo-resume` asks where the work stands, and `interview-resume` names the idea. Source: evals/setup/fresh-repo-resume/prompt.md, evals/lifecycle/interview-resume/prompt.md, evals/lifecycle/no-overload/scaffold.sh:1-15, checked 2026-11-05.

### What only a check keeps alive

- Only checks read the Parallel waves section, the ticks, a decision's `kind`, `adr-test`, `from` and `decided`, a research record's `kind` and `date`, `spec:`, and the finding validator. Source: RES-032, checked 2026-11-05.
- `sync --check` keeps the 8 vendored files in `hooks/`, and no manifest loads them. Source: `ls hooks`, RES-034, checked 2026-11-05.
- `version:sync --check` keeps `library_version` and `version` in ask-user-question. Source: RES-034, checked 2026-11-05.
- `fresh-repo-resume`'s grader needs the word `interview-me`, and that word reaches `brain status` only from the note's seed. Source: evals/setup/fresh-repo-resume/graders/next-step.md:4, scripts/workspace/status.ts:231-235, RES-006, checked 2026-11-05.

### `docs/STATUS.md`

- The note began on 2026-10-19 as a hand-kept convention in an earlier project, after Peter asked that a new session initialize itself; no upstream defines it, and setup-brain gained its seed on 2026-10-29. Source: RES-024, checked 2026-11-05.
- Nothing proposed its removal before Peter's view of 2026-11-05. The one record that decides its future keeps it, with "Peter's existing practice" as evidence. Source: RES-006, docs/intent/workspace-and-stateful-interview.md:704, checked 2026-11-05.
- Readers at HEAD: `brain status` for two lines, the hook for the whole text, the protocol's fallback, two eval graders and two scaffolds, and `write.ts --check`. `brain check` does not read it. Source: RES-006, RES-032, checked 2026-11-05.
- What only the note can hold today: a next step with no active effort, work after the last row, a wait with no row, an exact command, and one ranked action among several efforts. Source: RES-006, RES-032, checked 2026-11-05.

### Conflicts between records, checked at HEAD

- "Do not preload using-brain" (RES-033, B1584) against "must almost always trigger" (IDEA-003, 2026-11-05). The later statement sets the need. The way to meet it stays open, so it is a decision for Peter. Source: RES-033, docs/ideas/IDEA-003-finish-workflow-changes.md:54, checked 2026-11-05.
- The intent says the protocol points to `using-brain`; RES-035 and RES-036 say it does not. The file supports RES-035: its draft pointer did not ship. Source: docs/intent/workspace-and-stateful-interview.md:501, docs/intent/workspace-and-stateful-interview.md:946, protocol/PROTOCOL.md:13, checked 2026-11-05.
- RES-032 says a spec's frontmatter holds `spec` and `sources`; RES-034 says `spec:` and `migrated:`. Both hold: the first is a new spec, the second a migrated one. Neither holds a state. Source: scripts/workspace/schema.ts:176-186, scripts/workspace/templates/spec.md:1-4, specs/SPEC-007-source-cache/spec.md:1-4, checked 2026-11-05.
- RES-033 finds "no difference" on Parallel waves, and RES-032 finds a difference from "computed, never written down". Both hold: the section matches Peter's later row 745, which overrides the earlier rule for plans. Source: RES-032, RES-033, docs/intent/workspace-and-stateful-interview.md:148-149, docs/intent/workspace-and-stateful-interview.md:745, checked 2026-11-05.
- RES-009 reports no Antigravity hooks on agy 1.2.7, and RES-035 shows the event on 1.5.1. The docs and the later test support RES-035. A plugin's hook stays unverified. Source: RES-035, checked 2026-11-05.
- RES-033 and RES-034 leave open whether a sub-agent can start sub-agents, and RES-036 cites the host docs that it can, up to a depth limit. `.claude/commands/ship.md:22` still says it cannot. RES-036 is the latest and cites the owner of the fact. Source: RES-036, .claude/commands/ship.md:22, checked 2026-11-05.
- The intent says brain vendors four sdd-cache files, and RES-034 says `hooks/` holds 8 vendored files. `ls hooks` gives 8 files, 3 of them sdd-cache, as the intent's own correction says. Source: `ls hooks`, docs/intent/workspace-and-stateful-interview.md:616-619, checked 2026-11-05.
- `GLOSSARY.md` says "The active effort is the one that is not finished". The code allows several, and Peter's intended flow needs several. The code supports several. Source: GLOSSARY.md:24-26, scripts/workspace/effort.ts:32, docs/ideas/IDEA-003-finish-workflow-changes.md:58, checked 2026-11-05.

## 1. The flow in one page

brain takes work from an idea to shipped code. The files carry the work, not the conversation. A session can end at any moment, and the next session picks up from the files.

This picture is the intended flow. The table below it says how much of each step is built.

```
install the plugin
      │
new session, any first word
      │
using-brain evaluates the repo, the session and the prompt
      │
      ├── never set up ──→ setup-brain ─────────────────────────┐
      ├── outdated ──────→ tell the user, offer to migrate:     │
      │                    back up, migrate, validate ──────────┤
      └── current ←─────────────────────────────────────────────┘
            │
            brain status: what can be worked on now?
            ├── nothing ──→ say so
            ├── one ──────→ say where things stand, pick up the next step
            └── several ──→ spell them out, ask at once, multiple choice
                  │
      define → plan → build → verify → review → ship
      (a stage runs only when the work needs it)
                  │
      each row or task: write to disk as it runs, polish, validate, task end
                  │
      session end: every result is already on disk
```

| Step | What happens | Built today? |
|---|---|---|
| Install | The user installs the plugin on a host. | Yes. Bun is a hidden need: the Claude Code hook runs `bun`. |
| Session start | The session gets the state before the first word. | Claude Code only, through the hook. Elsewhere the agent must run `brain status`. |
| Route | `using-brain` evaluates the repo, the session and the prompt, then routes. | No. Nothing runs `using-brain`. |
| Never set up | brain sets itself up, then runs session start. | No. The agent tells the user to run setup-brain, and setup-brain does not return to session start. |
| Outdated | brain tells the user, offers to migrate, backs up, migrates and validates. | Partly. Layout 1 with no `workspace.md` is named. There is no backup and no validation. |
| One or several | brain knows what can be worked on now. | No. `brain status` counts efforts, not what can be taken. |
| Stages | Define to ship, each with its own skills. | Yes, as agent text. `brain status` names only define, build and finished. |
| During a session | Each result reaches disk the moment it exists. | Mostly. Maps, records and rows are covered. Commits of the map, approvals and verdicts are not. |
| Task end | Update the row, the records, `brain check`, and what is committed. | Yes, as agent text. Its step 4 rewrites the note. |
| Session end | Nothing is left in the conversation alone. | Partly. interview-me has a rule. The build has none, and no code runs. |

### The stages and the state each one writes

| Stage | Starts from | Reads | Writes | Ends when | The next stage reads |
|---|---|---|---|---|---|
| Define | interview-me when what is wanted is unclear; `/spec` when it is clear | The idea file, or the conversation; the DEC and RES files it links | The idea file and its map, a DEC file per decision, a RES file per finding, new words in `GLOSSARY.md`, then `spec.md` | The frontier and the fog are empty and the user says yes; `brain check` is clean for the spec and the user approves | `spec.md` and its `sources:` |
| Plan | `/plan` | `workspace.md`, `spec.md`, the code | The rows and the Parallel waves section of `tasks/plan.md`, one block per row in `tasks/todo.md` | Three questions, the user's approval, a clean `brain check` | The rows and the blocks |
| Build | `/build`, `/build auto` | The next frontier row and its block | Code in one commit per task; then ticks, the row's status and result, the Parallel waves section | No row is `open` or `in-progress` | The commits |
| Verify | `/test`, or a failed step | The error, `domain.md`, the glossary, the seams in `spec.md` | A regression test and a fix. No workspace file. | The fix and the full suite pass | The commit |
| Review | `/review` | The diff since a fixed point, the spec, the task's block, the standards | Nothing on disk. The verdict stays in the reply. | One ranked list and one verdict | Nothing on disk |
| Ship | `/ship` | The staged changes or recent commits | Nothing on disk. The go or no-go stays in the reply. | A go or no-go with a rollback plan | Nothing on disk |

An idea that ends with no spec stops at define: a decision record or a commit is its result. brain's own release runs outside these stages, through changesets and `release.yml`.

### The three rules of state

1. **Stored facts.** Rows, status fields and records are the only stored state. Only the main session writes rows.
2. **Computed facts.** The frontier, the active efforts, the stage and the waves are worked out on each read. They are never stored.
3. **Written continuously.** Work reaches disk while it runs, and the writer may delete or recompose it freely. The end of a row or task is only a polish and a validation (DEC-007). No skill may batch results to the end of a session.

Two things break rule 2 today: the note's `Next:` line, and the Parallel waves section. Peter's Decisions row "Parallel waves in every plan" keeps the section, and Peter decides the note at IDEA-003 row 15.

## 2. First run

A first run is a session in a repo where brain has never run.

### What happens today

1. The user installs the plugin. The README then says "once per repo, run `setup-brain`".
2. The user starts a session. On Claude Code the hook prints the protocol, the `brain` path and five lines: `Stage: no active work`, `Next step: none`, `Red: no docs/agents/workspace.md: run setup-brain`.
3. Protocol step 2 tells the agent to "tell the user once to run setup-brain". The first session stops there.
4. The user runs `/brain:setup-brain`. It checks for bun, explores, asks what it must, shows a dry run and writes `workspace.md`, `domain.md` and the `docs/STATUS.md` seed. After a yes it writes `capabilities.md`.
5. It ends with "start with interview-me". Nothing runs session start again.

| Host | What differs at step 2 |
|---|---|
| Claude Code | The hook gives the state. With no bun, the hook cannot run, so no protocol arrives. |
| Gemini CLI | `GEMINI.md` carries the protocol. The agent must run `brain status`, and must find the plugin folder by a rule that sits in setup-brain's skill. |
| Antigravity | `rules/protocol.md` carries the protocol. The rest is as on Gemini CLI. |
| Codex | Nothing arrives. The protocol reaches Codex only after setup-brain writes its block, so the first run depends on a skill description. |

### What the intended flow needs

Peter's words: a user "installs the plugin, starts a session in a new codebase, and brain must set itself up and then run session start".

| Need | Fact at HEAD | Status |
|---|---|---|
| Tell "never set up" from "outdated" | The detector calls any repo with `docs/intent/*.md` or `tasks/todo.md` layout 1 | Not built |
| The agent starts setup-brain itself | The host allows it. `using-brain` says run it. The protocol and 8 skills say tell the user. | Text conflict |
| setup-brain returns to session start | Its step 8 names interview-me | Not built |
| Setup's questions stay on the path | It asks through ask-user-question: `capabilities.md` always, others on a condition | Built. Which ones run on a first run is open. |
| Bun is present | Only setup-brain's step 1 checks it, and it stops there | Not built. Peter's standing rule is to install transitive prerequisites automatically. |
| Codex gets the flow before its setup | A plugin cannot carry context on Codex. A hook needs the user's trust. | Host limit |
| A repo with no `capabilities.md` stays quiet | With no file, every session reminds the user to run setup-brain | Built that way |
| A next step with no work | `brain status` gets "Start with interview-me" only from the note's seed | Depends on row 15 |

## 3. Session start

Session start is the same on every first word. It has three cases, and the third has three outcomes.

### The three cases

| Case | How brain tells today | What happens today | What the intended flow needs |
|---|---|---|---|
| Never set up | No `workspace.md`, and no layout 1 sign | Red line, then "tell the user once" | brain sets itself up, then runs session start |
| Outdated | No `workspace.md`, and a layout 1 sign | One line: "run setup-brain to migrate". The status skill tells the user. | brain evaluates this on startup, tells the user, offers to migrate safely, and validates |
| Outdated, not detected | `workspace.md` exists with an older text, or setup files are missing | A clean report. Only `write.ts --check` sees it, and nothing runs that at start. | The same evaluation has to reach these repos |
| Current | `workspace.md` exists | The five lines | See below |

"Incompatible" has no meaning in the code yet. `layout: 2` is the only marker, and no field records which brain release wrote a repo's files.

### Within current: nothing, one or several

| Outcome | Intended | Built |
|---|---|---|
| Nothing to work on | Not stated by Peter. The seed says "Start with interview-me". | `Stage: no active work`, and the note's first line |
| One piece of work | Say where things stand, and pick up the next step | The report only. "Continue" waits for the user. |
| Several | Spell them out, and ask at once through ask-user-question, as multiple choice | Each line names each effort. The rule to ask sits in `workspace.md` and the status skill, not in the protocol. Nothing says "at once". |

Three facts stand between the built and the intended flow.

- **Efforts are not available work.** `several` means more than one effort is not finished. An idea with every row blocked still counts, and one idea with nine frontier rows counts as one. IDEA-003 today has 0 frontier rows and 1 row in progress. Peter's "one piece of work" has no computed value.
- **Dependencies stop at a file's edge.** "One thing can be the only option because of dependencies" needs an edge between efforts. No such edge can be written today.
- **The note hides the rows.** With a `Next:` line, the report shows that line alone. In this repo it names no row that can be taken.

### What `using-brain` evaluates

At HEAD it evaluates nothing, because nothing runs it. Its tree has two lines for this moment: "First brain skill in this repo?" and "Starting or resuming a session?".

Peter sets the job: it "evaluates the environment of the session and the user's prompt, and it routes the agent", and it must almost always trigger.

Peter has not listed the inputs. The table below is this record's reading of "the environment": each line is a fact that exists at HEAD.

| Input | Where the fact lives today | What it decides |
|---|---|---|
| Is `workspace.md` there? | The file; `brain status`'s Red line | Never set up, or set up |
| Any layout 1 sign? | `findOldLayout`, `findToMigrate` | Outdated |
| Do the setup files match this plugin? | `write.ts --check`, not run at start | Outdated |
| What can be worked on now? | Not computed. `--json` holds each effort's frontier and rows in progress. | Nothing, one or several |
| Which branch? Is the tree clean? | `git`; the branch picks the active effort | Which effort, and what a crash left |
| How did the session start? | The hook's `source` field, on Claude Code only | Whether the protocol is already in the session |
| What did the user type? | The first prompt. Only `UserPromptSubmit` or the agent sees it. | See below |

### How it routes, on any first word

The order below follows Peter's Notes. The first match wins.

| # | Case | Route | Rule from |
|---|---|---|---|
| 1 | Never set up | setup-brain, then back to the start of this table | IDEA-003:56 |
| 2 | Outdated or incompatible | Tell the user, offer to migrate, back up, migrate, validate, then back to the start | IDEA-003:48 |
| 3 | Current, one piece of work | Say where things stand and pick up the next step | IDEA-003:46 |
| 4 | Current, several | Spell them out and ask at once, as multiple choice | IDEA-003:46 |
| 5 | Current, nothing | Open: Peter has not stated it | None |

The prompt is an input, yet the test says "any first word". So one point is open: whether a first word that is a real request runs that request, or the choice in row 3 or 4 comes first. Section 12 holds it.

### What can carry it, per host

RES-035 lists every mechanism. These are the ones that need no user setup.

| Host | Carries text only | Starts a turn or loads the skill | Limit |
|---|---|---|---|
| Claude Code | `SessionStart` `additionalContext`; `UserPromptSubmit` `additionalContext`, on every prompt; a forced output style; a mod's `prompt.context` | `asyncRewake` starts a turn, and the agent ran the skill in 5 of 5 wakes; a mod's `$.command.run` loads it with no agent choice; `PreToolUse` deny plus `Stop` block got 2 of 2 | The skill is twice the 10,000-character cap. A mod fails where the guard loads. |
| Gemini CLI | `GEMINI.md` with an `@file` import, on every prompt | None proved | A hook needs `hooks/hooks.json`, which `lifecycle:check` fails on. `activate_skill` shows the user a dialog. |
| Antigravity | An `always_on` rule; `SessionStart` `injectSteps` by the docs | None proved | A hook needs a root `hooks.json`, which `lifecycle:check` fails on. A plugin's hook is unverified. |
| Codex | A skill description | None | Hooks and the `AGENTS.md` block each need a user step. |

Text alone can be refused: in one test the agent read the skill and declined its instruction.

## 4. During a session

Most of the logic that keeps state current is already in the skills, as Peter expected. This table says which text keeps which state, and what cruft sits in that same text. The tags stay provisional until the audits finish.

| State | Kept current by | When | Cruft or fault in that text |
|---|---|---|---|
| Map rows | interview-me's re-map | After every resolved row, before the next row | Line 187 rewrites the note, which writes the frontier down |
| Idea `status`, `result`, Intent, Destination | interview-me; spec-driven-development sets `specced` | At Finish | No check that a `specced` idea has a spec |
| Decision records | domain-modeling, interview-me | The moment the user decides | "Every decision" and "a step that names a record" read differently (RES-036) |
| Research records | The research sub-agent | Each finding as it is confirmed | `skills/interview-me/RESEARCH.md:51` calls a command that does not exist |
| `GLOSSARY.md` | domain-modeling | When a term is resolved | The Effort entry says "the one" |
| `spec.md` | spec-driven-development; protocol task end | When its facts change | Nothing checks this |
| Plan rows | "Close a row" in `/build` | After each commit or merge | A running task stays `open`, so a plan row never shows work in progress |
| Parallel waves section | "Close a row" | After each row, because the section goes stale at every close | Written to satisfy `brain check`; `/build auto` reads `brain plan` instead |
| Ticks in `tasks/todo.md` | "Close a row" | After each row | No step reads a tick. One eval grader needs them. |
| The note | Protocol task end step 4; interview-me's re-map | At each task end, if the agent does it | No build text names it. `using-brain:99` and `stage-boundaries.md:16` say the build updates it. |
| Git | The build's commits | Per task | No text commits the idea file, a DEC or a RES |

### What the running logic does not cover

- **The map and its records stay uncommitted.** Peter chose to commit `docs/ideas/`, and no step does.
- **Approvals have no home.** The protocol resumes "the next approved row or task". No field holds an approval, apart from a checkpoint row's Result.
- **Verdicts have no home.** `stage-boundaries.md` says a stage ends when its result is on disk, and it names a verdict and a release. `/review` and `/ship` leave theirs in the reply.
- **The feature branch has no step.** The active-effort rule reads the branch, and nothing makes it.
- **Task end step 5 names no file.** It says to record what is committed, pushed or waiting, and it gives no place.

## 5. Session end

A session can end with no warning: a crash, a closed terminal, a spent budget. Code cannot run after that. So session end cannot be a step. It has to be a set of facts that hold at every moment, and the next session start has to repair what a crash breaks.

Peter's words: "A session end makes sure every piece is correct, so the next start works."

| # | What must be true at every moment | Holds today? | Proof or fault |
|---|---|---|---|
| 1 | Every user decision is in a DEC file | By agent text | The DEC comes "the moment the user decides". An answer lost before the write leaves no trace. |
| 2 | Every confirmed finding is in its RES file | By agent text | The brief says so |
| 3 | Every resolved row is on disk before the next row starts | Map: by agent text. Plan: by "Close a row". | A commit can land before its row closes |
| 4 | Work under way is visible on disk | Map: yes, `in-progress`. Plan: no. | A running build task stays `open` |
| 5 | The next start needs no conversation | Yes for the rows | `brain status` computes from files |
| 6 | The next start needs no last-written summary | Not while the note exists | `Next:` overrides the rows |
| 7 | Stored facts agree with each other | Partly | `brain check` reads shapes and links. It does not compare the note with the rows. |
| 8 | Stored state survives a fresh clone | No | No step commits the map or the records |
| 9 | Approvals and verdicts survive | No | No field and no file holds them |
| 10 | Half-done sub-agent work can be found | Research: yes. Build: partly. | Research: `from:` and `status`. Build: a stopped fallback worktree gets a question, and a host worktree gets nothing. |

### What the next start must repair

- **Map rows left `in-progress`:** built. interview-me settles each one from its record, and a new sub-agent continues a stopped record.
- **Red left by a fresh record:** shown in the Red line. Nothing says what to do with a record that a dead sub-agent left.
- **Committed code with its row still `open`:** not built. The row looks like work still to do.
- **A stopped `/build auto`:** partly built. Leftover worktrees and `build/T<NN>` branches stay until someone asks.
- **Work in the tree:** protocol step 4 says to keep work you did not start. It does not say to report it.

### When a session does get to end normally

Only interview-me says what to do: wait for running research sub-agents, re-map, and tell the user the next frontier row. The protocol's Task end runs after each task, and it is the nearest thing to an end step. Claude Code offers a `SessionEnd` event, and brain does not use it.

## 6. The state ledger

One line per piece of state. RES-032 holds each line's proof, and this table carries it forward. "Agent" means agent text, which proves only what an agent is told. The last group is new: it lists state the intended flow needs and no file holds.

### Setup and rules

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| `docs/agents/workspace.md` | Defines the layout once | `write.ts`, `migrate.ts` | Code: `readConfig`. Agent: 22 files. | live | Hard-coded paths; the tracker-doc pattern | The layout 1 list |
| `layout` | Marks a repo as migrated | Template, migrate mode | Code: run or skip the migration | live | None | None |
| `paths.*` | Names the four folders | Template, first install, user | Code: where to write and scan. Agent: where to look. | live | Fixed `spec/` and `tasks/` | The layout 1 list, `tasks/done/context-scope/` |
| `max_parallel`, `BRAIN_MAX_PARALLEL` | The cap on sub-agents | Template, user, environment | Code: prints it. Agent: how many start. | live | A hand rule of 4, then 8 | Intent text |
| `docs/agents/capabilities.md` | Toolchain checks, library skills, servers | `capabilities.ts` once, then by hand | Agent: the capability check. Code: `overlap.ts` sorts `moved`. | live | Capability text in `AGENTS.md` | The resume fixture |
| `docs/agents/domain.md` | Rules for the glossary and decisions | `write.ts` on each run | Agent: 21 files. No code reads it back. | live; displayed only for `Layout:` | Matt's file | The file itself |
| `GLOSSARY.md`, `GLOSSARY-MAP.md` | The domain words | domain-modeling | Agent: which word to use. Check: 18 terms, brain only. | live | `CONTEXT.md`, `CONTEXT-MAP.md` | Rename code, layout 1 list, guard |
| Protocol, as rendered | The rules on each host | `plain-talk:render` | Host loaders | instruction text | Hand-written `AGENTS.md` | The resume fixture |
| Codex blocks in `AGENTS.md` | Protocol and plain talk on Codex | `write.ts` | Host: Codex | live | Hand-written `AGENTS.md` | The resume fixture |
| Installed plugin version | Which brain runs | User, host | Host | live | None | None |

### Define

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| Idea file | An interview's whole state | `new-doc`; main session; idea-refine; migrate mode | Code: efforts and rows. Agent: resume; the spec. | live | Wayfinder's map; working notes | The retired-name guard |
| Idea `status` | Still in define or not | `new-doc`, spec skill, interview-me | Code: `define` or not. Agent: four ways to resume. | live | Three values, before `done` | None |
| Idea `result` | What a `done` idea produced | interview-me | Check: required, DEC exists. Agent: tells the user. | live, kept by a check | None | None |
| Intent, `Confirmed by` | The confirmed ask; the user's yes | interview-me | Agent: Finish; the spec | live | `docs/intent/[topic].md` | `docs/intent/` |
| Destination, Notes | How the idea ends; standing preferences | interview-me | Agent: Finish; every session | live | Wayfinder; none | None |
| Map rows | One question: type, status, edges, result | Main session | Code: frontier, waiting, last step. Agent: next row. Check: shape, links, cycles. | live | Wayfinder's tickets | Nothing in code |
| Not yet specified, Out of scope | Fog; work beyond the destination | interview-me | Agent: may the interview finish; the next row number | live | Wayfinder's sections | None |

### Records

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| DEC file | One decision | `new-doc`, agent, migrate mode | Agent: `domain.md`, the spec. Check. | live; a record | ADRs; the Decisions table; the Result cell | The layout 1 ADR list; the table in the intent |
| DEC `status` | In force or not | Agent | Agent. Check: the record it names exists. | live | `brain-wrap.md`'s Superseded section | That section, as history |
| DEC `kind`, `adr-test` | Architecture or not | Agent | Check only | kept by a check | `ADR-FORMAT.md`'s tests | None |
| DEC `from`, `decided` | Origin; date and person | Agent | Check: shape only | kept by a check | None | None |
| DEC `evidence` | Records it rests on | Agent | Check: shape only | write-only, kept by a check | The Decisions table's Evidence column | The table |
| RES file | Findings for one row | `new-doc`, sub-agent, main session | Agent: the re-map. Check: shape. | live; a record | `docs/analysis/`; replies | An empty folder on disk |
| RES `status` | Finished or to continue | Sub-agent | Agent: close the row, or continue | live | None | None |
| RES `from` | Which row it answers | Sub-agent | Agent: find the record on resume. Check: shape. | live | None | None |
| RES `kind`, `date` | Research or task; date | Sub-agent, main session | Check: shape only | kept by a check | None | None |
| Finding validator | `etag` or `last-modified` per source | Nothing | Check: regex only | dead, kept by a check | None | The reserved format |
| Claims | One number per agent | `new-doc`, migrate mode | Code: the next number | live | Numbers by hand; the `.ids` draft | An intent line |
| H1 IDs, `id:`, `spec:` | Name the file | `new-doc`, migrate mode | Check. Code: the title only. | kept by a check; displayed only | None | None |
| `migrated: 0.8` | Skips the body of a moved file | Migrate mode | Code: `check`, `status`, `names` | live | None | None |

### Spec and plan

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| `spec.md` body | What to build | spec skill | Agent: plan, build, install command | live | Root `SPEC.md`, `spec/` | The layout 1 list, migrate mode |
| `sources:` | Links a spec to its origins | spec skill | Code: `--json` list. Agent: resume a `specced` idea. Check: IDs exist. | live | None | None |
| Plan rows | The only status of a task | Planning, main session | Code: finished, stage, next, waves. Agent: next task. Check: shape, checkpoints. | live | Root `tasks/plan.md` and ticks | Eight migrated plans |
| Plan row Result | Commit and verification | Main session | Code: prints it | displayed only | The same cell on layout 1 | Migrated plans |
| Checkpoint rows | End a phase; stop the build | Planning, main session | Agent: stop. Check: edges. Code: overlaps. | live | Checkpoint blocks in `todo.md` | Migrated todos |
| Plan Overview, Decisions, Risks, Open questions | Context for the plan | Planning | No proven reader | unverified | Upstream's sections | None |
| Parallel waves section | Text copy of `brain plan` | Planning, main session | Check only | kept by a check, duplicate, displayed only | A hand wave table | SPEC-009's plan |
| `todo.md` blocks | The detail of each row | Planning | Code: files. Agent: criteria, the brief. | live | Upstream's checklist | Migrated todos |
| `Scope:` | Size of a task | Planning | No proven reader | unverified | Upstream's field | Migrated todos |
| Ticks | A box is done | Main session | Check: one eval grader | kept by a check, duplicate | Ticks were the status | The intent's "next unchecked task" |

### Computed, never stored

| Piece | Job | Worked out by | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| Frontier | What can be taken next in one file | `frontier()` | Code and agent | live; written down in the note and the waves | Wayfinder's rule | The same rule |
| Active efforts | Which efforts are not finished | `activeEffort()` | Code: the report. Agent: which effort to open. | live | The intent's order | None |
| Stage | Where an effort stands | `stateFrom()`, three values | Code: the report | live, displayed only | `Phase:` in the report | The guard |
| The five lines, `--json` | The report; the full state | `brain status` | Code: the hook. Agent: session start, the status skill. | live | The note read first; five lines by hand | The protocol's fallback |
| Hook text | Protocol, path and status in the session | `session-start.ts` | Host: transcript. Agent: the session. | live | Session start in `AGENTS.md` | The resume fixture |
| Waves, critical path, shared files | What can run at once in one spec | `brain plan` | Agent: `/build auto` | live | A hand wave table | SPEC-009's plan |

### Session and sub-agent files

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| `docs/STATUS.md` | Handoff note; feeds two report lines | `write.ts` seed; agent at task end and re-map | Code: next-step and waiting lines, hook text. Agent: fallback. Check: two graders, two scaffolds. | live, duplicate, displayed only | A "Current state" block in `AGENTS.md` | The resume fixture |
| Git branch name | Picks the active effort | User, agent | Code: `activeEffort` | live | The intent's order | None |
| Commits, `git status` | What is committed | Agent | Agent: session start | live | None | None |
| Progress file | A sub-agent's step log | Sub-agent | Agent: one failure case | live in one case, write-only otherwise | Peter's brief rule | None |
| Result file | A task's outcome | Task sub-agent | Agent: on fail or a question | live | `build/report-t09.md`; replies | None |
| Worktrees, `build/T<NN>` | Isolate a task | Host or main session | Agent: merge, remove or keep | live | Cherry-pick by hand | None |
| Tree record | Catches a stray write | Main session, in the session | Agent: stop the build | live | None | None |
| Handoff file | Moves to a new harness | handoff skill | The next session | live | Upstream's | The vendored skill |
| Prototype branch | Holds a prototype | prototype skill | Agent, through the DEC | live | None | None |

### Release and other files

| Piece | Job | Writers | Readers: what they decide | Tags | Former owner | What remains |
|---|---|---|---|---|---|---|
| Changesets | One change for the release | Agent, user | Host CI. Code: `breaking-first.ts`. | live | None on `main` | None |
| `CHANGELOG.md`, versions, tags | The release record | Release workflow | Code; the marketplace | live | None on `main` | None |
| `upstream.json`, the lock | Pins and vendored files | `bun run sync` | Check; `names.ts` | live | None on `main` | None |
| Eval results, traces | Scores | CI | `evals:gate` | live | None | None |
| `CONSTRAINTS.md` | The quality bar | constraint-driven-development | Agent, only through a line the repo adds | live where a repo adds it | None | Absent in brain |
| `docs/intent/`, `tasks/done/context-scope/` | Records of past work | By hand | SPEC-009 text; the names guard | records: not tagged | Each is a former owner | The folders |
| `.agents/skills/` | Unknown to brain | Unverified | No brain reader | unverified | None | None |

### What only a check keeps alive

Take away the check, and no step of the flow misses these pieces. This is the question's last part, in one place. A removal test proves only that no check needs a piece, so each line below stays provisional.

| Piece | The check that keeps it | What else reads it |
|---|---|---|
| Parallel waves section | `brain check` | Nothing: `/build auto` reads `brain plan` |
| Ticks in `tasks/todo.md` | One eval grader, `todo-ticked` | Nothing |
| DEC `kind`, `adr-test` | `brain check`, the schema | Nothing: no listing exists |
| DEC `from`, `decided`, `evidence` | The schema, shape only | Nothing |
| RES `kind`, `date` | The schema, shape only | Nothing |
| Finding validator | The finding regex | Nothing writes it |
| `spec:`, the H1 ID, `id:` | `brain check` | `brain status` prints the title |
| `hooks/`, 8 vendored files | `sync --check` | No manifest loads them |
| `library_version`, `version` in ask-user-question | `version:sync --check` | Nothing |
| Script flags used only in tests | Tests | Nothing |
| `--json` fields used only in tests | Tests | Nothing |
| The note's seed | Two `file_exists` graders, two scaffolds, `write.ts --check` | `brain status` quotes its first line with no active work |

### State the intended flow needs and no file holds

| Piece | Job | Would be | Today |
|---|---|---|---|
| Available work | One thing or several | Computed | Not computed |
| Edges between efforts | Dependencies across specs | Stored | No field. `Blocked by` and the spec schema refuse one. |
| Module built state | Is this spec built | Open | Lost with `spec/README.md`'s State column. Unbuilt SPEC-007 reads as finished. |
| Spec or plan approval | The protocol's "approved" | Stored | No field |
| Review verdict, ship decision | A stage's result on disk | Stored | The reply only |
| Setup version | Outdated or current | Stored | `layout: 2` alone |
| Migration backup and inventory | Proof that state survived | Stored | None |

## 7. `brain` commands

Peter doubts that every command still earns its place. This table gives each command's job, its callers, and the step of the flow that needs it. RES-034 holds the full caller lists.

### The four commands and their flags

| Command or flag | Job | Callers | The step that needs it |
|---|---|---|---|
| `brain new-doc <TYPE> <slug>` | Claims a number, writes the file from its template, prints the path | Protocol; `/spec`; interview-me and its brief; idea-refine; domain-modeling; spec and planning skills. The migrate mode calls the same `claim`. | Every numbered file. No other route to a claim exists. |
| `--title` | Sets the H1 title | The same | Every numbered file |
| `brain check` | One line per finding, exit 1 on any | `bun run check`; protocol task end; `/plan`; "Close a row"; migrate step 8; five skills' done conditions. `brain status` calls its function. | Task end, re-map, close a row. `ci.yml` does not run it. |
| `brain plan [<spec>]` | Waves, critical path, shared files, phase overlaps, cap | `/plan`, "Close a row", the planning skill. `brain check` imports its functions. | The build's frontier. It reads a spec only, and no plan in brain's repo has rows. |
| `brain plan --json` | The same data for an agent | `/build auto`, incremental-implementation | `/build auto` reads the first wave, `criticalPath`, `maxParallel`, `sharedFiles` |
| `brain status` | Five lines, or one on layout 1; writes nothing; exit 0 | Protocol step 1; status skill; `commands/status.toml`; `using-brain`; `AGENTS.md:3` | Session start |
| `brain status --json` | Adds efforts, frontier, rows in progress, red items, ideas and specs, the note | The hook, which reads `report` and `note.text`; the status skill | Session start. Most fields have only test readers. |

### What only tests read

- `brain status --json`: `migrate`, `note.path`, `note.next`, `note.waiting`, and `efforts[].id`, `kind`, `stage`, `title`, `path`, `lastStep`, `waiting`.
- `brain plan --json`: `overlaps`, `startAtOnce`, `maxParallelFrom`, `plan`, `waves[].rows[].files`.

### Setup, sync and `package.json`

| Script or flag | Job | Callers | The step that needs it |
|---|---|---|---|
| `write.ts --root`, `--layout`, `--codex-scope`, `--no-codex`, `--rename-glossary`, `--specs-folder`, `--dry-run` | The install files | setup-brain | First run |
| `write.ts --check` | Reports drift, exit 1 on any | setup-brain, on the user's ask only | No step today. The intended outdated check needs this fact at start. |
| `write.ts --migrate`, `--plan-spec`, `--ideas`, `--tracker-files`, `--adr-folder` | Moves a repo off layout 1 | setup-brain's migrate section | Migration |
| `write.ts --codex-home`, `--brain` | Another home or plugin root | Tests only | No step |
| `capabilities.ts --skills`, `--omit`, `--dry-run` | Proposes `capabilities.md` | setup-brain | First run |
| `overlap.ts --remove`, `--dry-run` | Trims a hand-written `AGENTS.md` | setup-brain | First run, on a repo with one |
| `sync.ts --check`, `--report` | Vendored-file drift; upstream's changes | `bun run check`, CI, a maintainer | Outside the flow: upstream sync |
| `sync.ts --seed`, `--only`, `--root`, `BRAIN_SYNC_TARBALL` | Maintainer and test paths | Tests | No step |
| `bun run format`, `test`, `setup:write`, `new-doc`, `plan` | Script aliases | No caller outside records | No step. A person may run them by hand (unverified). |
| `bun run status` | `brain status` in brain's repo | One mention in `AGENTS.md` | Duplicate of the hook's report |

### Commands that text calls and that do not exist

| Command | Where | Status |
|---|---|---|
| `brain sdd-cache lookup <url>` | `skills/interview-me/RESEARCH.md:51`, live text | phantom. Exit 2. The brief says to skip it on that exit. |
| `brain sdd-cache clear` | Records | phantom |
| `brain research recheck` | Records | phantom. Peter deferred it to its own branch. |
| `bun run question:check` | `specs/SPEC-005-question/spec.md:47` | phantom |

### What `brain status` must show to be the full context

Peter's words: it "is the full context: it shows the edges inside ideas and specs, the edges between specs, and what can run in parallel". This table sets that against HEAD.

| It must show | At HEAD | What is missing |
|---|---|---|
| Every active idea and spec | Efforts not finished, unless a branch names one | Specs with no plan rows; a migrated idea or plan; the efforts a branch hides |
| Each one's stage | `define`, `build` or `finished` | Plan, verify, review, ship. No state on disk marks the last three. |
| Edges inside each idea and spec | The first frontier row per effort; `--json` holds the frontier | Every `Blocked by` edge, and what each blocked row waits on. `readRows` holds them, and the report drops them. |
| Edges between specs | Nothing | A place to store them. `sources:` links a spec to its idea only. |
| What can run in parallel | `brain plan` for one spec | Ideas, and work across efforts. An idea's research rows run in parallel too, and no command shows that. |
| One thing or several | Nothing | The computed value that session start routes on |
| Where it stands, with no note | Two lines take the note's text first | A computed line for each job the note still does (section 12) |
| Red | A count of `brain check` findings | Drift that only `--check` sees |

Two limits apply.

- **Size.** The hook has about 6,000 characters for status. This repo's three active ideas hold 87 rows, about 13,140 characters at one line each. So a report that lists every edge cannot fit the hook as it stands. The hook cuts the status text and keeps the protocol.
- **Layers.** Peter's Decisions row on `brain status` sets the default output at five lines (intent line 719). `--json` is the only layer that can grow today.

## 8. The skill dependency tree

RES-036 reads all 34 skills. This section carries its result. Every line under "Proposed tree" is a PROPOSAL for Peter to decide, not a fact. The rest are facts at HEAD.

### Facts at HEAD

- No skill has a block at its start that names both its always loads and its conditional loads. interview-me has the only load block, and it holds always loads alone.
- The tree exists as text in three places: `using-brain`'s routes, the commands, and the orders inside 9 skills. No file holds it whole, and no check reads it.
- interview-me orders 7 skills. All 7 are real needs. 3 sit at its start and 4 do not, and its line 46 argues against conditional loads.
- Nothing orders `using-brain`. handoff can only be started by the user, yet two texts order an agent to call it.
- 20 of the 34 skills are vendored, so no start block can land in them from this repo. A caller that brain owns can carry their loads.
- A sub-agent has no question tool. `/build auto`'s brief lacks the capability check and the progress file.

### Proposed tree: the skills brain owns

PROPOSAL. Each row is a start block: what to load before anything else. Conditions are ones an agent can check at a named step.

| Skill | Load always | Load on a condition | States it at its start today |
|---|---|---|---|
| using-brain | ask-user-question | setup-brain (no `workspace.md`); status (session start, no report in context); domain-modeling (the user decides); context-engineering (budget low at a boundary); each routed skill (its route) | No |
| setup-brain | none | ask-user-question (any run except `--check`) | No |
| status | none | ask-user-question (several efforts active) | No |
| interview-me | ask-user-question, domain-modeling | context-engineering (budget low, or before a session ends); prototype (`prototype` row); idea-refine (`ideate` row); writing-for-agents (before any sub-agent brief); spec-driven-development (ends with a spec); git-workflow-and-versioning (ends with a change in place); incremental-implementation (that change is code) | 3 of 7 |
| idea-refine | ask-user-question | domain-modeling (inside an interview) | Yes |
| spec-driven-development | ask-user-question | interview-me (lacks who or why); domain-modeling (capability map, or a user decision); prototype (runnable answer); constraint-driven-development (no `CONSTRAINTS.md`); codebase-design (a new seam); api-and-interface-design (a module contract); git-workflow-and-versioning (spec commit); planning-and-task-breakdown (Stage 2); incremental-implementation, test-driven-development, context-engineering (Stage 4) | 1 of 6 |
| planning-and-task-breakdown | ask-user-question, writing-for-agents | domain-modeling (a decision while planning); spec-driven-development (no spec folder); deprecation-and-migration (wide refactor of a schema) | No |
| incremental-implementation | test-driven-development, git-workflow-and-versioning, code-review-and-quality (main session) | ask-user-question (out-of-scope items, a checkpoint); writing-for-agents (parallel frontier); debugging-and-error-recovery (a build or test fails); frontend-ui-engineering, api-and-interface-design, codebase-design, source-driven-development, context-engineering (their routes); doubt-driven-development (high stakes, main session only) | No |
| test-driven-development | none | ask-user-question (seams not confirmed in `spec.md`); codebase-design (interface shape); browser-testing-with-devtools (runs in a browser); debugging-and-error-recovery (a bug); git-workflow-and-versioning (commits outside a build); writing-for-agents (reproduction sub-agent) | No |
| debugging-and-error-recovery | none | ask-user-question (no loop, or redacted output not enough); test-driven-development (a correct seam exists); code-review-and-quality (fix done, or no seam); codebase-design (no seam); git-workflow-and-versioning (fix committed); performance-optimization (a regression); browser-testing-with-devtools (UI layer); observability-and-instrumentation (a permanent probe) | No |
| code-review-and-quality | writing-for-agents | ask-user-question (no spec, dead code); security-and-hardening (the diff touches input, auth, secrets, external data or dependencies); performance-optimization (queries, loops, a hot path); code-simplification (a finding asks for it); codebase-design (a depth or seam finding) | No |
| domain-modeling | none | ask-user-question (puts a term or scenario to the user) | No |
| ask-user-question | none | none: a leaf | Yes: nothing to load |
| wait-what | none | none: a leaf | Yes: nothing to load |

### Proposed tree: vendored skills

PROPOSAL. RES-036's table gives all 20. A vendored skill's need needs another route: a pull request upstream, a seed, the caller's text, or a table in `using-brain`. Peter chooses the route. Three needs cost the most if missed:

- documentation-and-adrs needs domain-modeling, for any ADR.
- constraint-driven-development needs ask-user-question in place of interview-me.
- prototype needs git-workflow-and-versioning, because every run commits.

14 of the 20 need ask-user-question, and none names it.

### Sub-agents

PROPOSAL. ask-user-question drops out of every sub-agent's list, because the host removes the tool. Its questions go to its result file or its Follow-ups. doubt-driven-development stays out of every sub-agent's list.

### The order across stages

The steps are facts. The skills in brackets are PROPOSALS: always first, then after the bar, on a condition.

```
first run      setup-brain                  [| ask-user-question]
session start  using-brain -> status        [ask-user-question]
define         interview-me  or  spec-driven-development
                 interview-me               [ask-user-question, domain-modeling |
                                             prototype, idea-refine, writing-for-agents, context-engineering]
                   research row -> sub-agent: source-driven-development
                 spec-driven-development    [ask-user-question | interview-me, domain-modeling, prototype,
                                             constraint-driven-development]
plan           planning-and-task-breakdown  [ask-user-question, writing-for-agents | domain-modeling]
build          incremental-implementation + test-driven-development
                                            [git-workflow-and-versioning | routes for UI, API, module shape,
                                             doc proof, context, high stakes]
                 task end: code-review-and-quality, then the protocol's task end
                 task sub-agent: incremental-implementation, test-driven-development
verify         debugging-and-error-recovery -> test-driven-development
review         code-review-and-quality      [writing-for-agents | security-and-hardening,
                                             performance-optimization, code-simplification]
ship           shipping-and-launch          [| git-workflow-and-versioning, observability-and-instrumentation,
                                             documentation-and-adrs, deprecation-and-migration]
task end       protocol                     [| domain-modeling, git-workflow-and-versioning]
```

`using-brain` on the session-start line is the intended order. At HEAD the protocol leads there, and `using-brain` has no place in the sequence.

### Cycles

interview-me and spec-driven-development order each other. Conditions break the cycle: a finished idea file holds the answers, so the spec asks nothing. One path has no defined entry: when `/spec` starts interview-me, Finish orders spec-driven-development again while it already runs.

## 9. Outside the flow

These pieces have no reader in the intended flow, or only a check reads them. This list is no verdict: row 26 judges each one, and each tag stays provisional until the file audits finish. A record of past work is not a relic, so a record appears here only where a reader can take it for the current rule.

### Files

| Piece | Fact | What replaced it | Tag |
|---|---|---|---|
| `docs/STATUS.md`, and the seed `skills/setup-brain/STATUS.md` | Peter decides at row 15. Section 12 lists its remaining jobs. | Computed state, if it goes | live, duplicate, displayed only |
| `hooks/`, 8 vendored files | No manifest loads them. `sync --check` fails when one goes. | `scripts/hooks/` | kept by a check |
| `docs/analysis/` | Empty, on this disk only, not in git | `docs/research/` | dead |
| `specs/SPEC-007-source-cache/` | Never built. It reads as finished. Peter's source-cache decisions stand unbuilt. | Nothing | record, with no module state |
| The two `upstream.lock.json` seed entries | They name deleted files: `ADR-FORMAT.md` and `idea-refine.sh`. A re-seed reads them. | `DEC-FORMAT.md`; `brain new-doc IDEA` | live for sync only; row 14 |
| `.agents/skills/` | Git-ignored. No brain code reads it. | Unknown | unverified |

### Fields

| Piece | Fact | What replaced it | Tag |
|---|---|---|---|
| Parallel waves section | Only `brain check` reads it. Peter's Decisions row keeps it. | `brain plan` | kept by a check, duplicate |
| Ticks in `tasks/todo.md` | One eval grader reads them. Peter's Decisions row keeps the main session as their writer. | The row's status | kept by a check, duplicate |
| Plan Overview, Decisions, Risks, Open questions | No text proves a reader | Nothing | unverified |
| `Scope:` in a block | No text proves a reader | Nothing | unverified |
| DEC `kind`, `adr-test` | Only the check reads them, and no listing exists. Peter chose this form. | Nothing | kept by a check |
| DEC `from`, `decided`; RES `kind`, `date` | Shape only | Nothing | kept by a check |
| DEC `evidence` | Shape only, and optional | The Decisions table's column | write-only, kept by a check |
| Finding validator `etag`, `last-modified` | Nothing fills it. No record uses it. | Nothing: the cache never shipped | dead, kept by a check |
| `spec:` and the H1 ID check | Catches a file copied from another spec | Nothing | kept by a check |
| `Layout:` line in `domain.md` | `GLOSSARY-MAP.md`'s presence carries the same fact | Nothing | displayed only, duplicate |
| `library_version`, `version` in ask-user-question | `version:sync` writes them, though DEC-006 made the skill brain's own | Nothing | kept by a check |
| `--json` fields that only tests read | Listed in section 7 | Nothing | kept by a check |

### Code

| Piece | Fact | What replaced it | Tag |
|---|---|---|---|
| `readNote`, the note branches of `nextLine` and `fiveLines` | They exist for the note | Depends on row 15 | live |
| The hook's `# docs/STATUS.md` section, and its cut line's advice to read the note | The same | Depends on row 15 | live |
| `writeSeed` in `write.ts`, and the note in `--check` | The same | Depends on row 15 | live |
| `findOldLayout` beside `findToMigrate` | Two lists give two answers on one repo | One detector | duplicate |

### Commands and flags

| Piece | Fact | Tag |
|---|---|---|
| `brain sdd-cache lookup`, `brain sdd-cache clear`, `brain research recheck`, `bun run question:check` | No such command exists | phantom |
| `bun run format`, `test`, `setup:write`, `new-doc`, `plan` | No caller outside records | unverified: a person may run them |
| `bun run status` | One mention in `AGENTS.md` | displayed only, duplicate |
| `--brain`, `--codex-home`, `--only`, `--root` on `sync.ts`, `BRAIN_SYNC_TARBALL`, `--seed` | Tests only | kept by a check |

### Text passages

| Passage | Fact | What holds instead |
|---|---|---|
| `protocol/PROTOCOL.md:5` | Its fallback reads the note | Depends on row 15; the map or `tasks/plan.md` stay |
| `protocol/PROTOCOL.md:9` | "next approved row or task": no field holds an approval | Open |
| `protocol/PROTOCOL.md:52` | Task end step 4 rewrites the note | Depends on row 15 |
| `protocol/PROTOCOL.md:53` | Names no file for what it records | Open |
| `skills/interview-me/SKILL.md:187` | Rewrites the note, and writes the frontier down | Depends on row 15 |
| `skills/interview-me/SKILL.md:46` | Argues against conditional loads, and the skill holds four | Open |
| `skills/interview-me/RESEARCH.md:51` | Calls a phantom command | Nothing: the cache never shipped |
| `skills/using-brain/SKILL.md:16` | Lists the seed, and says run setup-brain | The protocol and 8 skills say tell the user |
| `skills/using-brain/SKILL.md:86`, `skills/spec-driven-development/SKILL.md:109-112` | Order an agent to run handoff, which only the user can start | `protocol/PROTOCOL.md:16` |
| `skills/spec-driven-development/SKILL.md:89` | "its confidence stop": interview-me has no such term | interview-me's Finish |
| `skills/using-brain/SKILL.md:99`, `references/brain/stage-boundaries.md:16` | Say the build updates the note, and no build text does | Depends on row 15 |
| `skills/setup-brain/SKILL.md:3`, `:12`, `:36`, `:45`, `:161`, `:178` | Name the seed | Depends on row 15 |
| `skills/status/SKILL.md:3`, `:29`, `:39`, `:41`, `:45-54`, `:58` | Describe the note | Depends on row 15 |
| `skills/setup-brain/agents/openai.yaml:3` | "0.8 migration": the glossary marks that word _Avoid_ | "layout 1" |
| `.claude/commands/ship.md:22` | Says a sub-agent cannot start one | The host docs (RES-036) |
| `.github/workflows/release.yml:3`, `.changeset/README.md:3` | Name a private repo as the model | Nothing: DEC-006 dropped that upstream |
| `README.md:30` | Tells the user to run setup-brain once per repo | The intended flow sets itself up |
| `GLOSSARY.md:25` | "The active effort is the one": several can be active | Open: a word for the glossary |
| `docs/intent/workspace-and-stateful-interview.md:26`, `:688`, `:793` | Records that state `docs/specs/` as current | `:707`, DEC-003, DEC-005 |
| `references/orchestration-patterns.md:145`, `:166`; `hooks/session-start.sh:16`; `skills/constraint-driven-development/SKILL.md:59`; `skills/prototype/SKILL.md:26` | Vendored lines that conflict with brain | A pull request upstream |

## 10. Migration

Peter's words: other codebases "will not be compatible with the new workflow". The list of old and new pieces feeds "a robust migration".

### What a repo on an older state holds

Six earlier projects print the layout 1 line today. This list comes from `git ls-files` and from a real migrate on a throwaway clone of each. The clones used `--tracker-files keep` and `--rename-glossary`. Two used `--plan-spec none`, and one picked all three intent docs.

- Layout 1 signs: `CONTEXT.md` and tracker files in all six; `spec/`, `tasks/`, `CONTEXT-MAP.md` or `docs/intent/` in some.
- ADRs: 0 to 116 per repo. Research files: 13 to 42 per repo.
- Files with no step: `docs/design` in five, up to 48 files; `.scratch` in four, up to 27; `tasks/done` in two, up to 8; `workflow.md` in three; other files in `spec/` in two.
- Open work in old form: open boxes in `todo.md` or `plan.md` in three, up to 100 in one `todo.md`.
- `brain status` after: `no active work` in five, and `finished` in one, for the spec its branch names.
- `brain check` findings after: 13 to 43 per repo.

Every one also holds `docs/STATUS.md`, 36 to 189 lines, with no labelled line. Every one holds a hand-written `AGENTS.md` and `CLAUDE.md`. Every one has uncommitted changes, which the migrate mode would skip.

RES-024 gives the history. These files grew by hand, repo by repo. `docs/agents/workflow.md` never reached brain. `.scratch/<effort>/map.md` held wayfinder's map. `docs/design/` held interview logs and decisions.

### The old-to-new map

| Old piece | New piece | Migrate mode today | Fault |
|---|---|---|---|
| `CONTEXT.md`, `CONTEXT-MAP.md` | `GLOSSARY.md`, `GLOSSARY-MAP.md` | `git mv`, on a yes | None. A per-context file moves by hand. |
| Root `SPEC.md`, `spec/SPEC*.md` | `specs/SPEC-NNN-<slug>/spec.md` | `git mv`, frontmatter added | Module state is lost: nothing says built or not |
| Capability map in `spec/` | `docs/decisions/DEC-NNN-<slug>.md` | `git mv` | Its `Depends on` column stays prose |
| Other files in `spec/`, such as `spec/README.md` | None | Stays | Unread |
| `tasks/plan.md`, `tasks/todo.md` | The spec's `tasks/` | `git mv`, when a spec owns them | Body kept, so no rows: open work leaves the report. With no spec, they stay in `tasks/`. |
| `tasks/done/<module>/` | Each spec's `tasks/` in brain's own run | No step: brain did it by hand | Stays |
| `docs/decisions/0001-<slug>.md` | `DEC-NNN-<slug>.md`, `kind: architecture` | `git mv` | None |
| ADR folder of another tool | Same, or kept as history | On a yes | None |
| DEC or RES with no frontmatter | Same file, frontmatter added | Yes | Only when named `DEC-NNN-` or `RES-NNN-` |
| `docs/research/NN-<slug>.md`, `<slug>.md` | `RES-NNN-<slug>.md` | No step | 149 of 152 findings on the clones |
| `docs/intent/<name>.md` | `docs/ideas/IDEA-NNN-<name>.md`, when picked | `git mv`, no `status` | Reads as finished, with no map and no rows |
| `docs/ideas/<name>.md` without a number | `IDEA-NNN-<slug>.md` | No step | A check finding on an earlier project |
| `docs/design/*.md` | None defined | No step | Unread. It may hold decisions (unverified). |
| `.scratch/<effort>/map.md`, `issues/*.md` | An idea and its map | No step | Unread |
| `docs/agents/issue-tracker.md`, `triage-labels.md` | Removed | `git rm`, on a yes | None |
| `docs/agents/workflow.md` | `workspace.md`, in part | No step | Its one-owner table has no home |
| `docs/agents/domain.md` | The same file, rewritten | The install step | A hand edit does not last |
| `docs/STATUS.md` | Depends on row 15 | No step | Its text is the only summary of where the work stands |
| Hand-written `AGENTS.md`, `CLAUDE.md` | Protocol, `capabilities.md` | Overlap report, on a yes | Separate step |
| A repo with `layout: 2` and older setup files | The same files, current | `--check` sees it; a re-run fixes it | Nothing runs it at start |

### What Peter's migration needs, against HEAD

| Peter's requirement | At HEAD | Status |
|---|---|---|
| On plugin startup, evaluate whether the workspace is outdated or incompatible | One detector in `brain status`, only with no `workspace.md`, and it has false positives | Partly built |
| Tell the user automatically | The hook prints the line on Claude Code. The agent is told to tell the user. | Partly built |
| Offer to migrate | Agent text says run setup-brain. No question offers it. | Not built |
| Back up everything first | Git history covers committed files. Untracked and uncommitted files are skipped, not backed up. | Not built |
| Change nothing before the backup | The dry run writes nothing | Built |
| Undo on failure | Each write has an undo | Built |
| Validate that all state in the backup is preserved | `brain check` reads shapes only. No inventory of old state exists. | Not built |
| Validate that the codebase migrated successfully | `brain check` passes on a repo whose open work has left the report | Not built |

The hardest point is work in progress. The migrate mode keeps every byte, as Peter set, and so its result holds the old task list in a form no reader can use. A byte-for-byte check would pass. A check that the work is still visible would fail. Peter's "all state" needs a meaning here, and section 12 asks for it.

## 11. Gaps

Each line is a place where the built flow falls short of the intended flow. The rank is how much it blocks Peter's acceptance test in the Intent's Success line. "Row" names the IDEA-003 row that takes it up.

| Rank | Gap | What it blocks | Proof | Row |
|---|---|---|---|---|
| 1 | Nothing computes what can be worked on. `several` counts efforts, not available work. | Both branches of the test: "one" and "several" have no value to read | `effort.ts:32`, the three-idea run | #45, #47 |
| 2 | Nothing runs `using-brain`, and no session-start step depends on the first word | "types any word" | `protocol/PROTOCOL.md`, RES-035, RES-036 | #49 |
| 3 | The protocol's session start stops at a report. It neither picks up a step nor asks at once. On Claude Code the status skill's line to ask stays unread. | "picks up the next step", "asks at once" | `PROTOCOL.md:7`, `:9`, `status/SKILL.md:3` | #47 |
| 4 | The note overrides the rows, and it is stale in this repo now | "says where things stand" | `status.ts:223-226`, the live run | #15 |
| 5 | No edge can exist between efforts | "the only option because of dependencies" | `map.ts:90-93`, `schema.ts:227` | #45 |
| 6 | Efforts drop out of the report: a spec with no plan rows, a migrated idea or plan, anything a branch hides | "spells them out" | `effort.ts:48-56`, `:65-73`, `:92-98` | #45 |
| 7 | A first run stops at a message, and setup-brain does not return to session start | The test on any new repo | `PROTOCOL.md:6`, `setup-brain/SKILL.md:164` | #48 |
| 8 | Outdated detection covers only layout 1 with no `workspace.md`. It has false positives and two detectors. | The test on any older repo | `status.ts:278-284`, the runs | #52 |
| 9 | Migration has no backup and no validation, and open work leaves the report | "offers to migrate safely"; the test after a migration | The fixture run, the six clones | #52 |
| 10 | Session end rests on agent text. No step commits the map or records, and plan rows hide work in progress. | "session end leaves it all correct" | Section 5 | #47 |
| 11 | Approvals and verdicts have no home | The next start cannot tell what was approved or reviewed | RES-032, RES-033 | #47, #11 |
| 12 | The stage shows only define, build and finished | "says where things stand" after the last row | `status.ts:42` | #45 |
| 13 | Off Claude Code, no state arrives at start, and the agent must find the plugin folder from a skill it has not loaded. No live run is recorded. | The test on three of four hosts | RES-032, `docs/install/codex.md:57` | #49 |
| 14 | `brain status` cannot show edges or what runs in parallel across efforts, and the hook has room for about 6,000 characters | "the full context" | Section 7 | #45 |
| 15 | Nothing spells out the flow for agents and people: this record is the first statement, and the skills still hold cruft | "spelled out clearly and correctly" | Section 9 | #46, #26 |
| 16 | No skill states its loads at its start, and 20 vendored skills cannot | The skill tree | RES-036 | #11 |
| 17 | No eval sends an arbitrary first word to a repo with work on the frontier, so nothing would show the test passing | Proof of the test | Eval prompts | #11 |

## 12. Decisions for Peter

Each line is an open choice with the facts behind it. This record chooses none of them.

### What session start means

1. **What counts as one piece of work: an effort, or a frontier row?** `several` counts efforts; IDEA-002 alone has 9 frontier rows; research rows all start at once, and decide rows go one at a time.
2. **Does a first word that is a real request run that request, or does the choice come first?** The test says "any first word"; Peter's Notes make the prompt an input to routing; `lifecycle/no-overload` expects a plain question to get its answer in a repo with no active work.
3. **What does session start do with nothing to work on?** Peter has not said; the seed says "Start with interview-me"; `fresh-repo-resume`'s grader needs that word.
4. **Does the test apply to `resume`, `fork`, `clear` and `compact`?** Peter's B1122 gives `resume` and `fork` the status only; the test says "a new session".
5. **Which mechanism runs `using-brain` on each host?** Section 3 lists them; text can be refused; only a mod's `$.command.run` loads with no agent choice; "Do not preload using-brain" (B1584) stands against "must almost always trigger" (2026-11-05); upstream's warning cites cost, not misrouting (RES-035).
6. **Where does the pointer to `using-brain` go?** The protocol has 2 characters left, Peter's rule sends new rules elsewhere, and the hook's intro sits outside that budget on Claude Code only.
7. **Does `using-brain` stay whole at 20,227 bytes?** RES-035 asks whether a load on every session costs too much; the hook cap is 10,000 characters.

### The state of the work

8. **Does `docs/STATUS.md` stay, change or go?** Peter leans to phasing it out. The table below lists its remaining jobs.
9. **Where do edges between specs live?** A spec field, a row form like `IDEA-001#01`, or the capability map's record; none is built, and `brain check` refuses the first two today.
10. **Do edges also run between ideas, and from an idea to a spec?** `sources:` gives only spec to idea, and Peter names "between specs".
11. **How is each stage worked out?** Plan could read "spec with no rows"; verify, review and ship have no state on disk.
12. **Where does a spec's or plan's approval live?** The protocol says "approved"; layout 1 had a body line; a checkpoint row's Result holds a yes; nothing else does.
13. **Where does a review verdict and a ship decision live?** `stage-boundaries.md` says on disk; `/review` and `/ship` leave them in the reply.
14. **What holds whether a module is built?** `spec/README.md`'s State column is gone, and a spec with no rows reads as finished, SPEC-007 among them.
15. **Does a plan row show work in progress?** `/build auto` keeps it `open`, and the planning skill lists `in-progress`.
16. **Who commits the map and the records, and when?** Peter chose to commit them, and no step does it.
17. **Who makes the feature branch, and does a branch still hide other efforts?** The active-effort rule reads it, no step makes it, and in a run a branch hid two open ideas.
18. **Does the Parallel waves section stay?** Peter's row keeps it; only `brain check` reads it; it goes stale at every row close and costs a step each time.
19. **Do the ticks stay?** Peter's row keeps them; one eval grader reads them.
20. **Does `brain status` stay at five lines, with `--json` as the full context, or gain a third layer?** Intent line 719 sets five lines; the hook has about 6,000 characters; 87 rows need about 13,000.

### First run and migration

21. **Who starts setup-brain?** The host allows the agent; the texts disagree; a first run needs the answer.
22. **Which of setup's questions run on a first run?** `capabilities.md` always asks; the rest ask on a condition; "set itself up" may mean fewer.
23. **What does brain do with no bun?** The hook cannot run; setup-brain stops; Peter's standing rule installs prerequisites automatically.
24. **What does Codex do before its setup?** A plugin carries no context there, and hooks need the user's trust.
25. **What makes a workspace "outdated" or "incompatible"?** A version in `workspace.md`, the `--check` result, or both; `--check` costs a run at every start, and today it also counts a missing note as drift.
26. **What is the backup?** A git branch or tag, a copy outside the repo, or both; uncommitted files are the case git does not cover, and all six earlier projects have some.
27. **What does "all state preserved" mean for work in progress?** Bytes, or work that stays visible; Peter's rule says the migrate mode "never rewrites a body", and that rule hides open tasks.
28. **May a migration convert an old plan to rows, and give a migrated idea a `status`?** The rule above forbids a body change, and "no guessed status" (intent line 735) forbids the second.
29. **Which unhandled files does a migration cover?** `docs/research/NN-*`, `docs/design/`, `.scratch/`, `docs/agents/workflow.md`, `tasks/done/`, `docs/STATUS.md`.
30. **Does a migration run for every older repo, or only on the user's yes each time?** Peter says "offers"; the deprecation skill's default is advisory.

### The skill tree and the build

31. **What is the one format of a skill's start block?** RES-036 proposes always loads, then conditional loads, each with a checkable condition.
32. **Does interview-me keep context-engineering as an always load?** Its one use is where a session ends; line 46 argues for always; the skill is 353 lines.
33. **Does each skill name ask-user-question, or does the protocol's "keep it loaded" cover it?**
34. **Does every answer need a decision record, or only a step that names one?** Read literally, every ask step needs domain-modeling.
35. **Which route carries each vendored skill's need?** A pull request, a seed, the caller's text, or a table in `using-brain`.
36. **Who reviews a parallel task?** The task sub-agent's skill orders a review and its brief forbids sub-agents; the host's depth limit may allow it; Peter's prompt reviews over the branch.
37. **Does `/build`'s brief gain the capability check and the progress file?** The protocol says each brief names them.
38. **Where is the statement of the flow kept?** Row 46 owns this; the protocol has no room; `using-brain` already holds the Lifecycle Sequence.
39. **What becomes of SPEC-007 and the source cache?** Peter's decisions stand unbuilt, and the model rules call that work never shipped.

### What the note's remaining jobs need

If Peter phases out `docs/STATUS.md`, each job below needs a new home. This table gives the facts, and it picks no home.

| Job the note does today | Who depends on it | What a computed or stored replacement would need |
|---|---|---|
| Next step with no active effort | `nextLine`; `fresh-repo-resume`'s grader needs "interview-me" | `brain status` prints it itself |
| Next step after the last row: merge, release | `nextLine` | A stage after build, or a state for it |
| One ranked action among several efforts | The `Next:` line | The ask-at-once choice replaces the ranking |
| A wait with no row, such as a pull request review | The waiting line | A row, or another home |
| The exact command when the next step is the user's | Protocol step 4 | A row has no field for a command |
| Red items that are not check findings | Hook text only, since `Red:` has no parser | A row, or a field |
| Free context: a summary, `Later:` items | Hook text and `--json` | The idea's fog and rows, or nothing |
| Fallback read when `brain status` cannot run | Protocol step 1, status skill line 58 | The map and `tasks/plan.md`, which the fallback already names |
| What is committed, pushed or waiting (task end step 5) | No file named | Git, or a new home |
| Seed text on a new repo | `write.ts`, `--check` counts a missing note as drift, 2 graders, 2 scaffolds, 7 test lines | Remove them with the seed |
| The summary in older repos, 36 to 189 lines each | Six earlier projects | The migration must keep this text somewhere |

The note's readers and writers to change, if it goes, are the rows marked "Depends on row 15" in section 9, plus the evals, fixtures and tests that RES-006 lists. The protocol's render targets follow its source.

## Follow-ups
- UNVERIFIED: A live session on any host acts on the session-start text as it says. This record ran none, and no eval sends an arbitrary first word.
- UNVERIFIED: What a Claude Code user sees when the hook's `bun` command is missing. The code shows only that the hook cannot run.
- UNVERIFIED: Claude Code's `SessionEnd` event fires on a crash or a closed terminal. This record read no host page on that point.
- UNVERIFIED: `docs/design/` in earlier projects holds decisions found nowhere else. This record counted those files and read none.
- UNVERIFIED: Migrating an earlier project with a named `--plan-spec` gives the same report as `--plan-spec none`. The fixture run suggests it, and neither clone that used the flag ran that way.
- UNVERIFIED: The depth limit on Claude Code sub-agents, and whether a task sub-agent can start the five review axes. RES-036 holds the same line.
- UNVERIFIED: Each UNVERIFIED line of RES-035 still stands, above all that no mechanism was tested on a marketplace install.
- UNVERIFIED: A person edits a plan row to `in-progress` by hand. No text does it, and this record found no log of it.
- Glossary gaps for domain-modeling, words this statement needs: available work, built flow, intended flow, session start, task end, session end, first run, first install, outdated workspace, edge between efforts, spec, spec folder, specs folder, plan, task, wave, cap, handoff note, capability check, migrate mode, router, vendored, seeded, upstream.
- The glossary's Effort entry says "the one that is not finished": should domain-modeling change it, now that several can be active?
- `plan.ts` tells a fresh spec "No open rows: every row is resolved or superseded": should that message change?
- `status.ts` and `plan.ts` use a branch match that hides open efforts: should a branch rule stay in a multi-effort flow?
- The migrate mode's research step: should `docs/research/` files get `RES-NNN` names, and in what order?
- `docs/agents/workflow.md` kept one owner per record in three earlier projects: does the map need a row for that job (RES-024 asked this too)?
- Does the flow statement need a host-by-host proof step, since PR 15's live checks stayed undone?
