# Plan: the record with three acts, and rehydration moved to the plan

> This plan is the copy of record. It began as PLAN-002 in acmelabs-15/sessions (commits `3cd33b7`, `0439e58`), where Part 1 Tasks 1–4 were recorded (SES-002, now archived under `docs/sessions/archive/acmelabs-15-sessions/`); that copy is marked superseded by this one. Since ADR-003 (Part 1 Task 5) the code lives here too, and every commit is recorded in this repo's own log.

> Status: in progress · Peter, 2026-08-31 · implements [PRD-001](PRD-001-session-log-and-rehydration.md) requirements 1–12 · decided in [ADR-001](../decisions/ADR-001-rehydration-belongs-to-the-plan.md), argued in [ANA-001](../analysis/ANA-001-rehydration-ownership.md)

## Overview

ADR-001 (brain; ADR-024 in env-setup) splits what this plugin does today into two owners. The session skill keeps the record —
three acts (**start · log · close**), one status (`in progress | done`), argument inference, three
scoped commands. Rehydration — new-vs-continue, where the plan stands, which session, what happened,
what comes next, the brief — moves to `/plan [PLAN-NNN]` in `planning-and-task-breakdown`. Sequencing
was "build in acmelabs-15/sessions, move last" until Part 1 Task 4; ADR-003 (2026-08-31) moves the
session skill into this repo now, with the sessions repo's history merged in (Part 1 Task 5), so from
then on every step lands here with an entry and the gate. The destination for the rest is unchanged
(ADR-002): the `brain` plugin carries the whole toolset — `ask-user-question`, every skill, command
and agent from `~/.claude/` — Part 2 copies those in and Part 6 retires their sources.
Read ANA-001 and ADR-001 (brain; ADR-024 in env-setup) in full before any part; ANA-003 for why
the parts run in the order they do.

## Decisions it relies on

- `../decisions/ADR-001-rehydration-belongs-to-the-plan.md` (the same text stands in env-setup as ADR-001 (brain; ADR-024 in env-setup), uncommitted there) — the split, the acts,
  the status vocabulary, the inference, the home and the order. Supersedes the placement and mode
  clauses of ADR-019, ADR-020, ADR-022, ADR-023; ADR-021 (entry grain) stands.
- `../decisions/ADR-003-the-session-skill-moves-now-with-its-history.md` — the move now, history
  merged; the archive rule for the tool; `brain:`-namespaced forms with `commands/` as the typed
  surface. Supersedes ADR-002's order clause and its open point.
- `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) — the findings, the refuted
  alternatives, the per-file change list.
- Peter's standing rules (`~/CLAUDE.md`): decisions through `ask-user-question`; validate findings
  with him before an edit; verify or say unverified; fix the cause; read named files in full.
- Vocabulary: `CONTEXT-MAP.md` → `CONTEXT.md` (authoring) and `skills/session/CONTEXT.md` (the
  record). Where this plan changes a term (status words, the retired **Handoff**, the act **log**),
  the glossary edit is part of the task that changes the behaviour, never a later pass.

## Parts

Parts and tasks are numbered in execution order — the first unticked task of the first part still
in progress is the next move — and the numbers were made to match that order on 2026-08-31
(ANA-003 § Renumbering has the mapping; the session log's entries and the archived docs cite the
numbers of their day). A task that leaves a part is marked where it left. Peter's items and mine
can run beside each other where the graph allows; sessions still run one part at a time.

### Dependencies between the parts

```text
Part 1 (the record's model; Peter's items left) ──┐
                                                  ├──> Part 3 (the one reinstall; env-setup on it) ──> Part 4 (rehydration into /brain:plan) ──┬──> Part 5 Task 1 (docs say /brain:plan) ──┐
Part 2 (the toolset copied in; needs Part 1's     │                                                                                          │                                          ├──> Part 6 Task 1 (retire the sources) ──> Part 6 checkpoint
        plugin, not its checkpoint) ──────────────┘                                                                                          └──> Part 6 Task 2 (the eval redo) ─────────┘
Part 2 ──> Part 5 Task 2 (the duplicated shapes; independent of Part 4) ─────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

In parallel: Part 1's remaining items (Peter's) with Part 2 (mine); Part 5 Task 2 with anything
after Part 2; Part 6 Task 2 with Part 6 Task 1. Sequential by need: Part 2 → Part 3 → Part 4 →
Part 5 Task 1 → Part 6 Task 1.

### Part 1: the record's model — status, three acts, no handoff

> Status: in progress (session SES-001; Tasks 1–4 recorded in the archived acmelabs-15/sessions SES-002, `docs/sessions/archive/`)

```text
Task 1 ──> Task 2 ──> Task 3 ──> Task 4 ──┬──> Task 5 (the move in; (d) (e) Peter's) ──┐
 init       status    Open at   SKILL.md  │                                            ├──> Checkpoint (Peter reads SKILL.md)
                      end       three acts└──> Task 6 (inference, verified)  ──────────┘
```


- [x] Task 1 (2026-08-31, `f80af22`): `session init` writes nothing under `docs/plan/` (the plan's shape has one home,
  `planning-and-task-breakdown`). Acceptance: `session template` lists `session | sessions-readme |
  context`; a fresh `init` creates `docs/sessions/README.md` and the `CONTEXT.md` section only.
  Verification: `bun test`, a `--plugin-dir` render in a scratch repo; `README.md`, `SKILL.md`,
  `CONTEXT.md`, `references/session-log.md` say the same.
- [x] Task 2 (2026-08-31, `151c456`): status vocabulary. A session is `in progress | done`; `open`/`closed` leave the
  header, the tool (`list`, `check`, `close`, `new`), the templates, the glossary section, the
  reference and the tests. Acceptance: `session list` prints `in progress`/`done`; `parseHeader`
  reads both old and new words for one release (existing files say `open`); the glossary's
  **Open** / **Closed** entry becomes **Status** with the three artefacts' vocabularies side by
  side. Verification: `bun test` with a migration case; the fixture's SES-005/006/007 parse.
- [x] Task 3 (2026-08-31, `3bbcf8c`): `Open at end` retired. The template, `references/session-log.md`, the gate (it stops
  counting the line at close) and the glossary (**Handoff** retired or redefined as "the plan plus
  the last entries"). `Outcome` stays. Acceptance: `session close` gates on Goal, Narrative,
  entries and Outcome only; `session template session` has no `Open at end`. Verification: tests;
  SES-001's line is left as history, not deleted.
- [x] Task 4 (2026-08-31, acmelabs-15/sessions `0caa67c`; body 221 lines, description 1,003 characters; the four renders reached their acts; the retired words left in the shipped surface — README, `.claude/CLAUDE.md`, `CONTEXT.md`, `CONTEXT-MAP.md`, the aliases, `skills/session/CLAUDE.md` — are Part 3 Task 2): the three acts in `SKILL.md`. Read first, in full: `~/Dev/ACMElabs/plugin-kit/skills/skill-creator/SKILL.md`,
  `~/Dev/ACMElabs/plugin-kit/shared/references/description-writing.md` (four criteria: a deliverable
  clause, a negative clause, negatives sharing vocabulary with positives, no "whenever the user
  mentions" pushiness; 1,024-character cliff; ~500 is where each clause must earn its place),
  `~/.claude/skills/writing-for-agents/SKILL.md`, `skills/session/CLAUDE.md`, and the current
  `SKILL.md` and `references/session-log.md`. Then:
  - **Frontmatter.** `argument-hint: "start <description> [--plan \"PLAN-NNN · part N\"] | log [SES-NNN] | close SES-NNN"`;
    `allowed-tools` unchanged; the three injected state lines (Branch, Tree, Sessions) stay — `log`
    and `close` read them. **Description** (draft to measure, not to keep blind): "Keeps a repo's
    session log — the record of every commit that reached `main` and the story around it — through
    three acts: `start` opens a session from a description (Goal, Plan line, the plan part marked
    in progress); `log` appends and fills a commit's entry, ticks the plan, updates what the change
    made stale and commits it as docs(session); `close` writes the Outcome and marks the session
    and its plan part done. The act is inferred from the arguments (`SES-NNN` and a landed commit →
    log; a description → start); `close` is always named. Use right after a commit in a repo with
    docs/sessions, when a plan part's work begins, and when a stream of work is finished — \"record
    that commit\", \"log this\", \"the append says up to date\", \"the gate says NOT ready\", \"a
    skeleton for a commit I didn't make\", \"close SES-004\", \"start a session for the finder
    fix\". Not for finding where a plan stands or what to work on next (`/plan PLAN-NNN`), for
    authoring an ADR, a PRD or CONTEXT.md, or for a changelog of recent commits."
  - **Body** (target under 200 lines): intro — a session is `in progress` until `done`, the record
    only, no handoff, rehydration is `/plan`'s; Workflow step 1 = the inference table with one
    example per act (Task 5); step 2 = run the act to its Done-when with its progress list; the
    tool command line; the injected state; Gotchas trimmed to those that survive (the three lines
    arrive as output; `no session log` → `session init`; no sampling; your session is the one
    named, the tool refuses to guess between several in progress; the gate's exit is the gate,
    pipe nothing, stage by name; merge commits; `docs(session)` skipped; the gate counts entries,
    Goal, Narrative, Outcome only at close; `new` is for a stream of work not a conversation; the
    release marker; a done session takes nothing — reopening is § What is never rewritten).
  - **start**: from a description and an optional `--plan "PLAN-NNN · part N"`: derive slug, title
    and Goal from the description; if it names a plan part, read that part only; ask with the
    `ask-user-question` skill for what the description cannot supply (a Goal when the description
    is a bare noun), fill the rest yourself; `session new <slug> [--plan …]`; set title and Goal in
    the file; the part's status line → `> Status: in progress (session SES-NNN)`; reply one line —
    the id, the Goal, the part — the entire reply. Done when the file exists with its Goal and the
    part points at it.
  - **log**: today's `entry`, steps 1–5 unchanged (append → fill the exact entry template →
    update what the change made stale, plan ticks first → Narrative → gate bare, stage by name,
    `docs(session)` commit), with `--session SES-NNN` explicit: the id `/plan` handed over or the
    user named; one session in progress → the tool selects it; several → the tool refuses → ask.
    Done-when without `Open at end`. The fix-up / `Session-entry: none` rules and the pointer to
    `references/session-log.md` § The entry stay.
  - **close**: always named; `SES-NNN` required — none given → the `ask-user-question` skill over
    the sessions `in progress` (from the injected Sessions line); none in progress → say so and
    stop. Steps: append → up to date; Outcome (only work the log or this transcript shows; work the
    user reports recorded with them as its source); the plan part → `done (session SES-NNN, <sha
    of the entry that finished it>)`, the plan's top status and the PRD Plans row when every part
    is done, OVERVIEW Status; `session close --session SES-NNN` → `closed SES-NNN — done`; `git add`
    by name, commit `docs(session): close SES-NNN`; reply one line — the entire reply. Keep the
    stop condition ("a step that cannot be satisfied stops the close … ask where the answer is the
    user's"). Done when the tool printed `closed … — done` and the commit exists.
  - **Removed**: the `start`/`continue` walk (OVERVIEW → plan → PRD → sessions → CONTEXT → ADRs),
    step 7's join/open table, the brief template, the `end` mode and its closing note, every
    `Open at end`. **Glossary**: in `scripts/templates.ts` the **Join / Open / Leave / Close** entry
    becomes **Start / Log / Close** (the acts, with `_Avoid_`: join, open, leave, end, add, record,
    entry (as the act name)); `skills/session/CONTEXT.md` row 17 likewise;
    `scripts/__tests__/templates.test.ts` term list and `_Avoid_` count follow.
  - **Verification**: `bun ~/Dev/ACMElabs/plugin-kit/shared/validate/validate.ts --target-type skill
    skills/session --extended --with-environment` (the `evals/results/**` noise is PLAN-001 of acmelabs-15/sessions Part 5
    Task 6, not this skill); the description measured under 1,024 characters; `bun test`,
    typecheck, `bun run validate`; a `--plugin-dir` render of each act in a scratch repo
    (`start` with a description; `log` after a commit; `close` with and without an id); body under
    500 lines. The `plugin-kit:skill-reviewer` agent may be run if Peter asks for it. Peter reads
    the new `SKILL.md` before the part's checkpoint.
- [ ] Task 5 (added 2026-08-31 as Task 6, ADR-003; renumbered the same day when the plan's numbers were
  made to match its sequence — ANA-003 § Renumbering. State 2026-08-31: (a) `5b89ce6`, (b) `2322745`, (c) `6b486dd` + `b45bda7`
  done; (d) reduced to the marketplace regeneration, done — the reinstall itself is Part 3 Task 3's,
  one owner (ANA-003 F1); (e) the sessions repo's pointer commit is `ff756dd` there, local — the push and the GitHub
  archive are Peter's): the session skill moves into this repo with its history. (a) `git merge
  --allow-unrelated-histories` of acmelabs-15/sessions `main`; conflicts resolved for this repo's
  `README.md`, `CONTEXT.md`, `docs/plan/README.md`, `docs/sessions/README.md`; the sessions repo's
  docs moved with their numbers to `docs/plan/archive/acmelabs-15-sessions/` and
  `docs/sessions/archive/acmelabs-15-sessions/`, each with a one-line README pointer. (b) The tool
  reads every `SES-*.md` under `docs/sessions/archive/` for the shas it accounts for and never lists,
  selects or writes one — with a test. (c) The plugin renamed: `.claude-plugin/plugin.json` name
  `brain`, version 0.3.0, description in the new words; `package.json`; the five aliases delegate to
  `brain:session`; every `/sessions:session` form in `README.md`, `.claude/CLAUDE.md`, `CONTEXT.md`,
  `CONTEXT-MAP.md`, `skills/session/CLAUDE.md` and the templates becomes `/brain:session`, and the
  five-mode prose there becomes the three acts (Part 3 Task 2's sweep, done here). (d) The marketplace
  regenerated (§ State names the command) so `brain` is listed; the reinstall is Part 3 Task 3. (e) acmelabs-15/sessions gets a final commit pointing here and is archived — the push
  is Peter's. Acceptance: `session check --session SES-001` here is green with the 57 merged commits
  accounted for by the archived log; the marketplace lists `brain`; `grep -rn
  "sessions:session"` over this repo returns history only (`docs/**/archive/`, `evals/results/`).
  Verification: `bun test`, typecheck, `bun run validate`, plugin-kit's validator and the
  `plugin-kit:plugin-reviewer` agent over the plugin.
- [x] Task 6 (2026-08-31, as Task 5 — renumbered with Task 5 above; the three runs on `b45bda7`'s body reached start, log and close — SES-001
  Narrative; the inference rule is step 1 of `SKILL.md`, in the conditional-workflow pattern since
  `e20f7fa`, which also folded `references/` into the body and the four scripts into two — Peter's
  reading of the best-practices page): argument inference for `/brain:session` — `SES-NNN` + a commit → log; a description → start;
  `close` only when named. Acceptance: the mode table in `SKILL.md` step 1 is the inference rule,
  with an example per act. Verification: three headless runs (`claude -p`) with the three argument
  shapes each reach the right act.
- [ ] Checkpoint: `bun test`, typecheck, `bun run validate` green (done); the glossary and the
  skill use the same words for status and acts (done — the reference is folded in); Peter has read
  the new `SKILL.md`; the sessions repo pushed and archived (Task 5 (e)). SES-001 closes here.

### Part 2: the toolset copied into the plugin

> Status: planned

```text
Part 1 Task 5 (a)–(c): the plugin exists ──> Task 1 (layout) ──> Task 2 (the copy, 0.4.0) ──> Checkpoint
Part 1's (d), (e) and its checkpoint are Peter's and run beside this part, not before it.
```

Before Part 3 (ANA-003 F8; Peter, 2026-08-31: "does it not make sense to move the agents,
skills and commands sooner rather than later? … they can be copied over"). Copying is one commit
and changes nothing for daily use: a personal skill or command shadows the plugin's bare name
(ANA-002), so `/plan` keeps resolving to `~/.claude/commands/plan.md` while `brain:plan` is the
tracked copy Part 4 edits. Retiring the sources — the cross-reference sweep, emptying `~/.claude`,
env-setup's part — is Part 6. Measured on a scratch clone before this part was written: a plain
copy of everything passes `claude plugin validate --strict`; a headless `--plugin-dir` load
registers every `brain:` name; no agent uses a field plugins ignore; every skill's `name` matches
its directory; 45 files carry `~/.claude/…` paths and 75 bare skill references for Part 6's sweep.
Read `~/Dev/ACMElabs/plugin-kit/skills/plugin-creator/SKILL.md` first — layout, path anchoring,
one plugin's namespace (`brain:<skill>`). The bare-name question is answered (ADR-003): every
form is `brain:`-namespaced and `commands/` is the typed surface.

- [ ] Task 1: the layout — `agents/` and `references/` directories beside `skills/` and
  `commands/`; `CONTEXT-MAP.md` gains the vocabularies the carried skills bring
  (`codebase-design`, `loop-me`, the triage roles). Acceptance: `validate --strict` green with the
  directories present.
- [ ] Task 2: the copy — every skill under `~/.claude/skills` (24 Addy, 20 Matt, 2 local) as it
  stands with its local edits; the `ask-user-question` skill from `~/Dev/ACMElabs/ask-user-question`
  merged in with its history as the sessions repo was (ADR-003's method), its docs archived under
  `docs/*/archive/acmelabs-15-ask-user-question/`; the 8 commands under `~/.claude/commands`; the 4
  agents under `~/.claude/agents`; the 9 references under `~/.claude/references`.
  `LOCAL-CHANGES.md` comes in as history with a pointer: git takes over its job. Nothing is
  rewritten on the way in (PRD-001 non-goals). Acceptance: `claude plugin validate --strict` green;
  a headless `--plugin-dir` load lists every model-invocable skill and every command as `brain:…`;
  the version is 0.4.0 in both manifests. Verification: the load; `bun test`, typecheck.
- [ ] Checkpoint: `validate --strict` green over the whole plugin; `plugin-kit:plugin-reviewer`
  run once, its Critical findings fixed or given a reason, the rest listed for Part 6.

### Part 3: the three commands, the shipped surface, the one reinstall

> Status: planned

```text
Task 1 (three commands, done) ──┐
Task 2 (shipped surface, done) ─┼──> Task 3 (the reinstall at 0.4.0; needs Part 2) ──> Task 4 (env-setup on it) ──> Checkpoint
                                │                                                       (a) commits ∥ (b) docs
```

- [x] Task 1 (2026-08-31, `6b486dd` + `b45bda7`, landed with Part 1 Task 6 (c) so 0.3.0 ships no
  command pointing at a removed act; the three headless renders are still owed — Part 1 Task 5's
  runs cover them): `/brain:session-start`, `/brain:session-log`, `/brain:session-close` replace the five aliases — each
  takes only its act's arguments (`argument-hint` says which) and infers as the skill does; each
  delegates with `skill: brain:session`. Acceptance: `commands/` holds three files; each renders and reaches its
  act headless. Verification: three `claude -p "/brain:session-<act> …"` runs.
- [x] Task 2 (2026-08-31, done at Part 1 Task 6 (c): `b45bda7`, `e20f7fa`; the acceptance grep
  returns history — `docs/**/archive/`, the ADRs and analyses, SES-001 — and the evals
  (`evals.json`, `evals/README.md`, `fixtures/make-fixture.ts`), which ADR-001 tosses and Part 5
  Task 4 redoes): the shipped surface — `README.md`, `.claude/CLAUDE.md`, `CONTEXT.md`,
  `skills/session/CONTEXT.md`, `CONTEXT-MAP.md` (the "Session log" context no longer describes
  rehydration; the relationship to the plan is the status line and the `SES-NNN` a `/plan`
  hands over), the manifest descriptions. Acceptance: no file in this repo says `start [PLAN-NNN]`,
  `continue`, `end`, join, open or `Open at end` except as history in `docs/sessions/`.
  Verification: grep.
- [ ] Task 3 (state 2026-08-31: version 0.3.0 in both manifests, `b45bda7`; the marketplace
  regenerated with `brain` listed; Part 2 raises the version to 0.4.0 with the toolset copied in):
  the reinstall, once — `claude plugin uninstall sessions@ACMElabs`, `claude plugin install
  brain@ACMElabs`, `/reload-plugins` (Peter's); the installed `skills/session/SKILL.md`
  byte-identical to `main`; a fresh conversation resolves `/brain:session` and `/brain:plan`.
  Acceptance: `claude plugin list` shows `brain` 0.4.0.
- [ ] Task 4 (moved here from the docs sweep, its commit task and the namespace half of its docs task —
  ANA-003 F2): env-setup on the installed plugin. (a) Its overdue commits, through env-setup's own ritual
  (`/brain:session log` there): ADR-024 and ANA-011 with their index rows; the `repo-brain` spec in
  `src/items/repos/repo-factory.ts`; `repo-sessions` removed from `ACMELABS_REPOS` once the
  sessions repo is archived, the marketplace regenerated; ADR-023's Consequences sentence about the
  bare `/session` superseded by ADR-024, not edited. (b) env-setup's docs name the installed forms
  — `CLAUDE.md` § Rehydrating, `README.md`, `OVERVIEW.md`, `docs/sessions/README.md` say
  `/brain:session start | log | close`, and the rehydrate section keeps only the per-repo read
  order until Part 4 gives it `/brain:plan` to delegate to; `~/CLAUDE.md` §1 line 41 likewise.
  Acceptance: env-setup's `docs/decisions/README.md` and `docs/analysis/README.md` list ADR-024
  and ANA-011; `grep -rn 'sessions:session' ~/Dev/env-setup ~/CLAUDE.md` returns history only.
- [ ] Checkpoint: Task 4's conversation in env-setup — a real one — ran `/brain:session-log SES-NNN`
  after a commit and `/brain:session-close` with no id and got the question.

### Part 4: rehydration moves to `/plan`

> Status: planned

```text
Part 3 Task 3 (brain 0.4.0 installed) ──> Task 1 (the section) ──┬──> Task 2 (description, measured)
                                                                  ├──> Task 3 (/brain:plan command)   ──> Checkpoint (a reinstall
                                                                  └──> Task 4 (one line in four files)     with these commits)
```

Every file this part edits is in this repo since Part 2 copied it in (`skills/planning-and-task-breakdown/`,
`commands/plan.md`, `skills/using-agent-skills/`, `skills/context-engineering/`,
`skills/choosing-a-skill/`, `references/project-docs-conventions.md`), so each edit is a tracked
commit with its entry and the gate; the copies under `~/.claude` are left as they are until Part 6
retires them. The door is `/brain:plan` (ADR-003).

- [ ] Task 1: `planning-and-task-breakdown/SKILL.md` § *Continuing a plan* — the eight steps in
  ANA-001 (arguments → order → where it stands → what happened → what comes next → the session →
  the brief → route), each with a completion criterion; the brief template moves here unchanged;
  a Common Rationalizations row for "I'll read `git log` to see where things stand". Acceptance:
  the section reads as Addy's skills read (steps, Verification, Rationalizations). Verification:
  plugin-kit's validator over the skill; a headless `--plugin-dir` run in a scratch clone of this
  repo (PLAN-001 in progress, its own log) reaches the brief with the right part, task and `SES-NNN`.
- [ ] Task 2: the description gains `continue PLAN-NNN`, "work on PLAN-NNN", "catch me up",
  "where were we"; measured on Haiku and Sonnet with `measure-triggering.ts` against a new trigger
  set written for the plan skill. Acceptance: kept only if the should-fire rate is at least the
  session skill's old 5/10 on Sonnet with hard negatives still declined.
- [ ] Task 3: `commands/plan.md` — `/brain:plan [PLAN-NNN | description]`; the file's existence
  and the argument shape decide new-vs-continue; `disable-model-invocation` removed wherever the
  procedure must reach a skill. Acceptance: `/brain:plan PLAN-001` in this repo posts the brief and
  names `SES-NNN`; `/brain:plan` with a description writes a plan.
- [ ] Task 4: one line each — `using-agent-skills` (routing row), `context-engineering` (pointer),
  `choosing-a-skill` (routing row; the session skill as the record), `project-docs-conventions`
  (the `docs/sessions/` paragraph; the status vocabularies with session added; `/brain:plan PLAN-NNN`
  the way in). Acceptance: each file names `/brain:plan PLAN-NNN` once and describes the session skill
  as the record only.
- [ ] Checkpoint: the plugin reinstalled with this part's commits; a fresh conversation in env-setup
  types `/brain:plan PLAN-NNN`, gets the brief with the right part, task and `SES-NNN`, and its
  first `/brain:session-log` lands in that session.

### Part 5: the docs sweep and the duplicated shapes

> Status: planned

```text
Part 4 (the door exists) ──> Task 1 (docs say /brain:plan) ──┐
Part 2 (the shapes' files are tracked here) ──> Task 2 (one home per shape) ──┴──> Checkpoint
The two tasks are independent; Task 2 can run any time after Part 2.
```

After Part 4 and Part 2; ANA-003 F5.

- [ ] Task 1: env-setup root `CLAUDE.md` § Rehydrating — the per-repo read order only, delegating
  the procedure to `/brain:plan PLAN-NNN`; `~/CLAUDE.md` §1; env-setup `README.md`, `OVERVIEW.md`,
  `docs/sessions/README.md` (the namespace rename was Part 3 Task 4 (b); this is the procedure's
  delegation). Acceptance: each names `/brain:plan PLAN-NNN` as the way in; no `/session start`
  remains, bare or namespaced; grep.
- [ ] Task 2 (was Task 3; the commit task between them moved to Part 3 Task 4 (a)): duplicated shapes get one home each — the ADR template (`documentation-and-adrs` vs
  `domain-modeling/ADR-FORMAT.md`), the spec template (`spec-driven-development` vs `to-spec`),
  the ticket shape (`to-tickets` vs `references/issue-tracker.md`) — all in this repo since Part 2.
  Decide each with Peter (`ask-user-question`); the loser becomes a pointer. Tracked commits, an
  entry each.
- [ ] Checkpoint: `grep -rn "/session start\|Open at end\|session end"` over env-setup docs,
  `~/CLAUDE.md` and `~/.claude` returns history only.

### Part 6: retire the sources, and the eval redo

> Status: planned

```text
Part 4 and Part 5 (every tracked copy edited) ──> Task 1 (the sweep, the retirements, env-setup) ──> Checkpoint (a second machine)
Part 4 (real usage of /brain:plan)            ──> Task 2 (the eval redo)  — independent of Task 1
```

The second half of what ADR-002 called the move: once Part 4 and Part 5 have edited the tracked
copies, the copies under `~/.claude` and the two retired plugins go, and env-setup stops putting
them back.

- [ ] Task 1 (the retirement; was Part 5 Task 3 before the reorder of 2026-08-31): retire the sources — the cross-reference sweep over the copied
  files (`~/.claude/…` paths become plugin-root anchors or relative paths; `invoke the X skill` and
  `skill: X` become `brain:X` where the reference is to a sibling; `plugin-kit:skill-reviewer` over
  what changed); `ask-user-question@ACMElabs` uninstalled and its repo archived with a pointer; the
  stale caches deleted (`~/.claude/plugins/cache/ACMElabs/session/`, `sessions/`,
  `ask-user-question/`); env-setup's `claude-settings` item stops copying skills, commands and
  agents into `~/.claude` and installs the plugin instead (ADR-002's consequence; without it the
  next bootstrap restores the copies), committed there through its ritual; then `~/.claude/skills`,
  `commands`, `agents` and `references` emptied of what moved, and a fresh conversation resolves
  `/brain:plan` and `/brain:session` with nothing shadowing them.
- [ ] Task 2 (the eval redo; was Part 5 Task 4 before the reorder of 2026-08-31): evals redone against the plugin layout — trigger sets and
  disclosure scenarios from real usage of `/brain:plan PLAN-NNN`, `/brain:session-log`,
  `/brain:session-close`; measured with plugin-kit pointed at the new homes; the old
  `evals/results/` kept as history with a README line.
- [ ] Checkpoint: a second machine bootstrapped by env-setup has the `brain` plugin and nothing
  under `~/.claude/skills`, `commands` or `agents` that the plugin also ships.

## State at 2026-08-31 and the reading list for a fresh conversation

Read in full, in this order, before touching a part:

1. `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) — findings F1–F8, the refuted
   alternatives, § Decisions, the per-file change table, the eight-step rehydration procedure.
2. `../decisions/ADR-001-rehydration-belongs-to-the-plan.md` (the same text stands in env-setup as ADR-001 (brain; ADR-024 in env-setup), uncommitted there) — the decision;
   then ADR-019, ADR-020, ADR-021, ADR-022, ADR-023 beside it (what stands, what is superseded).
3. This plan; `docs/sessions/SES-001-docs-system.md` (this repo's log); the archived sessions repo
   docs under `docs/plan/archive/acmelabs-15-sessions/` (its PLAN-001 — Part 1 Task 6 and Part 5
   are still open there; PLAN-002, superseded) and `docs/sessions/archive/acmelabs-15-sessions/`
   (SES-002 holds Part 1 Tasks 1–4's entries, SES-001 the founding work).
4. `CONTEXT-MAP.md`, `CONTEXT.md`, `skills/session/CONTEXT.md`, `skills/session/CLAUDE.md`,
   `.claude/CLAUDE.md` — the words and the checks — all in this repo since the merge.
5. For Part 2: `~/Dev/ACMElabs/plugin-kit/skills/plugin-creator/SKILL.md` and
   `~/Dev/ACMElabs/plugin-kit/shared/references/plugin-skills.md`; `../analysis/ANA-003-plan-001-sequencing.md`
   for why the copy comes first. For Part 4 (after the copy, in this repo):
   `skills/planning-and-task-breakdown/SKILL.md`, `commands/plan.md`, `commands/build.md`,
   `skills/using-agent-skills/SKILL.md`, `skills/context-engineering/SKILL.md`,
   `skills/choosing-a-skill/SKILL.md`, `references/project-docs-conventions.md`, and
   `~/.claude/skills/LOCAL-CHANGES.md` as history.

**Open work recorded elsewhere, not to be lost:** acmelabs-15/sessions PLAN-001 — Part 1 Task 6
(env-setup docs, `~/CLAUDE.md` line 41 and ADR-023's false sentence; the stale caches) and Part 5
Tasks 3, 5, 6 (plugin-kit: glossary gaps *tier study*, *measurement model*, *tool trace*, a word for
the `--fixture` repo; `--resume-from` never compares the dead run's envelope and timed-out queries
leave no trace; the validator scans `evals/results/**` and warns on `fixture_notes` /
`hard_negatives` in `evals.json`). This repo's session log opened on 2026-08-31 (`4b7a165`):
`docs/sessions/SES-001` serves the docs system, and the founding commits `4c0c5c2`..`3c940b0` are
its first entries. Reinstalling the plugin, when a part calls for it: regenerate the marketplace
(`cd ~/Dev/env-setup && bun -e 'import { generateMarketplace } from "./src/items/repos/acmelabs-marketplace.ts"; await generateMarketplace("/Users/peterkloss/Dev/ACMElabs")'`
— it reads each plugin's `plugin.json`), then `claude plugin uninstall brain@ACMElabs`,
`claude plugin install brain@ACMElabs`, `/reload-plugins`. `brain` is multi-context since the merge:
its own authoring words and the session-log glossary (`CONTEXT-MAP.md`); the vocabularies the
carried skills bring (`codebase-design`, `loop-me`, the triage roles) join it at Part 2 Task 1.

**Uncommitted at handoff — secure these first:**

- env-setup `src/items/repos/repo-factory.ts` gained a `repo-brain` spec in `ACMELABS_REPOS` on
  2026-08-31 (Part 1 Task 5 (d)): the marketplace generator lists only repos in that array, so
  without it `brain` never reaches the ACMElabs marketplace. Commit it there through env-setup's
  session skill; the `repo-sessions` spec comes out at Part 3 Task 4 (a) when the sessions repo is
  archived. `~/Dev/ACMElabs/.claude-plugin/marketplace.json` is regenerated (generated, not tracked)
  and lists `brain` 0.3.0 and `sessions` 0.2.0 side by side until then.

- `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) and
  `docs/analysis/README.md` (index row); `docs/decisions/ADR-001 (brain; ADR-024 in env-setup)-rehydration-belongs-to-the-plan.md`
  and `docs/decisions/README.md` (index row). env-setup has its own session log and gate: commit
  them there through its session skill (an entry in an env-setup session), not with a bare commit.
  Part 3 Task 4 (a) is that commit.
- `~/CLAUDE.md` §1 gained a first bullet on 2026-08-31 ("A decision that is Peter's goes through
  `ask-user-question`"). `~/CLAUDE.md` is not in a repo; if env-setup's `claude-settings` item
  templates it, the bullet must land in that template too.
- `~/Dev/ACMElabs/.claude-plugin/marketplace.json` was regenerated by env-setup's
  `generateMarketplace` (0.2.0) — generated, not tracked; it regenerates again at Part 3 Task 3.

**Installed state:** until Part 3 Task 3 the plugin installed is `sessions@ACMElabs` 0.2.0,
taken from the sessions repo's `main` at `1ac975d`, with `start`/`continue` and the old words;
Part 3 Task 3 replaces it with `brain@ACMElabs` 0.4.0 from this repo. Stale caches to delete (Part 6
Task 1): `~/.claude/plugins/cache/ACMElabs/session/` (pre-rename plugin) and `sessions/`.

**Decisions taken this day and where each is recorded** — the plan cites, ADR-001 (brain; ADR-024 in env-setup) decides,
ANA-001 argues: the split (ADR-001 (brain; ADR-024 in env-setup) § Decision); three acts start · log · close (ADR-001 (brain; ADR-024 in env-setup); `log` was
Peter's word, ANA-001 § Decisions 2); no join/open/leave and no `Open at end` (ADR-001 (brain; ADR-024 in env-setup); ANA-001
§ Consequences); argument inference and three scoped commands (ADR-001 (brain; ADR-024 in env-setup); ANA-001 change table);
`in progress | done` (ADR-001 (brain; ADR-024 in env-setup) decision 4; Peter's choice between `done` and `closed`, SES-002
entry `151c456`); home `~/.claude/skills`, git question deferred (ADR-001 (brain; ADR-024 in env-setup) § Home and order);
build here, move last (same); evals tossed and redone (ADR-001 (brain; ADR-024 in env-setup) decision 6); `disable-model-invocation`
is ours to remove (ANA-001 F5(c)); Matt's `handoff` not imported (ANA-001 F8); the Brain plugin's
`skills:plan` is ignored (Peter, 2026-08-31 — not a design input); duplicated shapes standardised
(Part 5 Task 2); `session init` writes nothing under `docs/plan/` (`f80af22`); every `/session` form
is namespaced in the plugin and bare `/session` fails (PLAN-001 of acmelabs-15/sessions Part 1 Task 3, `7bd6782`) — the
reason the personal-skill home wins.

**Peter's working rules learned this day, beyond `~/CLAUDE.md`:** validate a finding with him
before an edit; a decision that is his goes through `ask-user-question`, one call, recommendation
inside; when a task finishes, the plan's next unticked task is the next move — the conversation
does not stop and report; read every named file to its last line.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| The `/plan` → `sessions:session` hop is skipped | commits land unrecorded | `disable-model-invocation` removed on the reached skill; `/session-log` names the session explicitly; the gate reports `unrecorded:` at the next run |
| The status rename breaks existing session files | `list`/`check` refuse | `parseHeader` reads `open`/`closed` and the new words for one release; a test with both |
| A copied skill is edited in `~/.claude` instead of here between Part 2 and Part 6 | the edit is lost at retirement | Part 4 and Part 5 edit the tracked copies only; `LOCAL-CHANGES.md` is frozen at the copy; Part 6's sweep diffs the two before emptying `~/.claude` |
| Two copies of a skill answer to one name between Part 2 and Part 6 | the personal copy shadows the plugin's bare name | by design (ANA-002): typed forms are `brain:`-namespaced from Part 3 on; the shadow ends at Part 6 |
| Two vocabularies live during the transition | a doc says `open`, a tool says `in progress` | each task edits behaviour and glossary together; Part 5's grep is the checkpoint |

## Open questions

- ~~The move (Part 2 since the renumbering): does `~/.claude/skills` become a git repo?~~ Answered: `brain` is the plugin home (PRD-001 req. 12). ~~Open: how bare `/session` and `/plan` are kept when every skill is namespaced `brain:`.~~ Answered 2026-08-31 (ADR-003): they are not kept — every form is `brain:`-namespaced and the plugin's `commands/` is the typed surface.
- Part 5 Task 2: which copy of each duplicated shape survives — Peter's, per shape.
