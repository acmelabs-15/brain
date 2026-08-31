# Plan: the record with three acts, and rehydration moved to the plan

> This plan is the copy of record. It began as PLAN-002 in acmelabs-15/sessions (commits `3cd33b7`, `0439e58`), where Part 1's session SES-002 and its entries live; that copy is marked superseded by this one. Work on the code still lands in acmelabs-15/sessions until Part 5 (build here, move last).

> Status: in progress · Peter, 2026-08-31 · implements [PRD-001](PRD-001-session-log-and-rehydration.md) requirements 3–11 · decided in [ADR-001](../decisions/ADR-001-rehydration-belongs-to-the-plan.md), argued in [ANA-001](../analysis/ANA-001-rehydration-ownership.md)

## Overview

ADR-001 (brain; ADR-024 in env-setup) splits what this plugin does today into two owners. The session skill keeps the record —
three acts (**start · log · close**), one status (`in progress | done`), argument inference, three
scoped commands. Rehydration — new-vs-continue, where the plan stands, which session, what happened,
what comes next, the brief — moves to `/plan [PLAN-NNN]` in `planning-and-task-breakdown`. Sequencing
is decided: **build here, move last** — every step lands in this repo with an entry and the gate, and
the copy into `~/.claude/skills/session` is the final part, once the git-repo question is answered.
Read ANA-001 and ADR-001 (brain; ADR-024 in env-setup) in full before any part.

Tasks are listed in execution order inside each part; the first unticked task of the first part
still in progress is the next move. A task's number is its stable name.

## Decisions it relies on

- `../decisions/ADR-001-rehydration-belongs-to-the-plan.md` (the same text stands in env-setup as ADR-001 (brain; ADR-024 in env-setup), uncommitted there) — the split, the acts,
  the status vocabulary, the inference, the home and the order. Supersedes the placement and mode
  clauses of ADR-019, ADR-020, ADR-022, ADR-023; ADR-021 (entry grain) stands.
- `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) — the findings, the refuted
  alternatives, the per-file change list.
- Peter's standing rules (`~/CLAUDE.md`): decisions through `ask-user-question`; validate findings
  with him before an edit; verify or say unverified; fix the cause; read named files in full.
- Vocabulary: `CONTEXT-MAP.md` → `CONTEXT.md` (authoring) and `skills/session/CONTEXT.md` (the
  record). Where this plan changes a term (status words, the retired **Handoff**, the act **log**),
  the glossary edit is part of the task that changes the behaviour, never a later pass.

## Parts

### Part 1: the record's model — status, three acts, no handoff

> Status: in progress (session SES-002)

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
- [ ] Task 4: the three acts in `SKILL.md`. Read first, in full: `~/Dev/ACMElabs/plugin-kit/skills/skill-creator/SKILL.md`,
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
- [ ] Task 5: argument inference for `/session` — `SES-NNN` + a commit → log; a description → start;
  `close` only when named. Acceptance: the mode table in `SKILL.md` step 1 is the inference rule,
  with an example per act. Verification: three headless runs (`claude -p`) with the three argument
  shapes each reach the right act.
- [ ] Checkpoint: `bun test`, typecheck, `bun run validate` green; the glossary, the reference and
  the skill use the same words for status and acts; Peter has read the new `SKILL.md`.

### Part 2: the three commands and the shipped surface

> Status: planned

- [ ] Task 1: `/session-start`, `/session-log`, `/session-close` replace the five aliases — each
  takes only its act's arguments (`argument-hint` says which) and infers as the skill does; each
  delegates with `skill:`. Acceptance: `commands/` holds three files; each renders and reaches its
  act headless. Verification: three `claude -p "/sessions:session-<act> …"` runs.
- [ ] Task 2: the shipped surface — `README.md`, `.claude/CLAUDE.md`, `CONTEXT.md`,
  `skills/session/CONTEXT.md`, `CONTEXT-MAP.md` (the "Session log" context no longer describes
  rehydration; the relationship to the plan is the status line and the `SES-NNN` a `/plan`
  hands over), the manifest descriptions. Acceptance: no file in this repo says `start [PLAN-NNN]`,
  `continue`, `end`, join, open or `Open at end` except as history in `docs/sessions/`.
  Verification: grep.
- [ ] Task 3: version 0.3.0; marketplace regenerated (`generateMarketplace` in env-setup);
  reinstall; the installed `SKILL.md` byte-identical to `main`; `/reload-plugins`. Acceptance:
  `claude plugin list` shows 0.3.0.
- [ ] Checkpoint: a real conversation in env-setup runs `/sessions:session-log SES-NNN` after a
  commit and `/sessions:session-close` with no id and gets the question.

### Part 3: rehydration moves to `/plan`

> Status: planned

Outside this repo (`~/.claude`, not a repo): each edit is recorded in
`~/.claude/skills/LOCAL-CHANGES.md` and in this part's session Narrative, as PLAN-001 of acmelabs-15/sessions Part 2 did.

- [ ] Task 1: `planning-and-task-breakdown/SKILL.md` § *Continuing a plan* — the eight steps in
  ANA-001 (arguments → order → where it stands → what happened → what comes next → the session →
  the brief → route), each with a completion criterion; the brief template moves here unchanged;
  a Common Rationalizations row for "I'll read `git log` to see where things stand". Acceptance:
  the section reads as Addy's skills read (steps, Verification, Rationalizations). Verification:
  plugin-kit's validator over the skill; a headless run against the env-setup fixture reaches the
  brief.
- [ ] Task 2: the description gains `continue PLAN-NNN`, "work on PLAN-NNN", "catch me up",
  "where were we"; measured on Haiku and Sonnet with `measure-triggering.ts` against a new trigger
  set written for the plan skill. Acceptance: kept only if the should-fire rate is at least the
  session skill's old 5/10 on Sonnet with hard negatives still declined.
- [ ] Task 3: `~/.claude/commands/plan.md` — `/plan [PLAN-NNN | description]`; the file's existence
  and the argument shape decide new-vs-continue; `disable-model-invocation` removed wherever the
  procedure must reach a skill. Acceptance: `/plan PLAN-001 of acmelabs-15/sessions` in this repo posts the brief and names
  SES-NNN; `/plan` with a description writes a plan.
- [ ] Task 4: one line each — `using-agent-skills` (routing row), `context-engineering` (pointer),
  `choosing-a-skill` (routing row; the session skill as the record), `project-docs-conventions`
  (the `docs/sessions/` paragraph; the status vocabularies with session added; `/plan PLAN-NNN`
  the way in). Acceptance: each file names `/plan PLAN-NNN` once and describes the session skill
  as the record only.
- [ ] Checkpoint: a fresh conversation in env-setup types `/plan PLAN-NNN`, gets the brief with the
  right part, task and `SES-NNN`, and its first `/session-log` lands in that session.

### Part 4: the docs sweep and the duplicated shapes

> Status: planned

- [ ] Task 1: env-setup root `CLAUDE.md` § Rehydrating — the per-repo read order only, delegating
  the procedure to `/plan PLAN-NNN`; `~/CLAUDE.md` §1 line 41; env-setup `README.md`, `OVERVIEW.md`,
  `docs/sessions/README.md`. Acceptance: no bare or namespaced `/session start` remains; grep.
- [ ] Task 2: env-setup ADR-001 (brain; ADR-024 in env-setup) committed with its index row; ANA-001 committed with its index
  row; ADR-023's Consequences sentence about the bare `/session` is superseded by ADR-001 (brain; ADR-024 in env-setup), not
  edited. Acceptance: `docs/decisions/README.md` and `docs/analysis/README.md` list them.
- [ ] Task 3: duplicated shapes get one home each — the ADR template (`documentation-and-adrs` vs
  `domain-modeling/ADR-FORMAT.md`), the spec template (`spec-driven-development` vs `to-spec`),
  the ticket shape (`to-tickets` vs `issue-tracker.md`). Decide each with Peter
  (`ask-user-question`); the loser becomes a pointer. Recorded in `LOCAL-CHANGES.md`.
- [ ] Checkpoint: `grep -rn "/session start\|Open at end\|session end"` over env-setup docs,
  `~/CLAUDE.md` and `~/.claude` returns history only.

### Part 5: the move and the eval redo

> Status: planned

Blocked on the deferred question: does `~/.claude/skills` become a git repo? Decide it with Peter
before Task 1.

- [ ] Task 1: copy `skills/session/` to `~/.claude/skills/session/` (the tool inside via
  `${CLAUDE_SKILL_DIR}`); the three commands to `~/.claude/commands/`; bare `/session` and
  `/session-start` resolve. Acceptance: `claude -p "/session"` in a scratch repo runs the skill.
- [ ] Task 2: uninstall `sessions@ACMElabs`; remove the plugin from the ACMElabs marketplace
  generator's repo list or archive this repo with a pointer; delete the stale caches
  (`~/.claude/plugins/cache/ACMElabs/session/`, `sessions/0.1.0`, `0.2.0`).
- [ ] Task 3: evals redone against the new layout — a trigger set and disclosure scenarios written
  from real usage of `/plan PLAN-NNN`, `/session-log`, `/session-close`; measured with plugin-kit
  pointed at the new homes; the old `evals/results/` kept as history with a README line saying
  they describe the old layout.
- [ ] Checkpoint: a fresh conversation on a second machine (env-setup bootstrap) has `/plan` and
  `/session` without the marketplace.

## State at 2026-08-31 and the reading list for a fresh conversation

Read in full, in this order, before touching a part:

1. `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) — findings F1–F8, the refuted
   alternatives, § Decisions, the per-file change table, the eight-step rehydration procedure.
2. `../decisions/ADR-001-rehydration-belongs-to-the-plan.md` (the same text stands in env-setup as ADR-001 (brain; ADR-024 in env-setup), uncommitted there) — the decision;
   then ADR-019, ADR-020, ADR-021, ADR-022, ADR-023 beside it (what stands, what is superseded).
3. This plan; `docs/plan/PLAN-001-session-plan-relationship-and-re-evaluation.md (acmelabs-15/sessions)` (Part 1 Task 6
   and Part 5 are still open there, not here); `docs/sessions/SES-002-record-model.md` and
   `SES-001-handoff-session-plan-relationship.md`.
4. `CONTEXT-MAP.md`, `CONTEXT.md`, `skills/session/CONTEXT.md`, `skills/session/CLAUDE.md`,
   `.claude/CLAUDE.md` — the words and the checks.
5. For Part 3: `~/.claude/skills/planning-and-task-breakdown/SKILL.md`, `~/.claude/commands/plan.md`,
   `~/.claude/commands/build.md`, `~/.claude/skills/using-agent-skills/SKILL.md`,
   `~/.claude/skills/context-engineering/SKILL.md`, `~/.claude/skills/choosing-a-skill/SKILL.md`,
   `~/.claude/references/project-docs-conventions.md`, `~/.claude/skills/LOCAL-CHANGES.md`.

**Uncommitted at handoff — secure these first:**

- `../analysis/ANA-001-rehydration-ownership.md` (also ANA-001 in env-setup, uncommitted there) and
  `docs/analysis/README.md` (index row); `docs/decisions/ADR-001 (brain; ADR-024 in env-setup)-rehydration-belongs-to-the-plan.md`
  and `docs/decisions/README.md` (index row). env-setup has its own session log and gate: commit
  them there through its session skill (an entry in an env-setup session), not with a bare commit.
  Part 4 Task 2 is that commit.
- `~/CLAUDE.md` §1 gained a first bullet on 2026-08-31 ("A decision that is Peter's goes through
  `ask-user-question`"). `~/CLAUDE.md` is not in a repo; if env-setup's `claude-settings` item
  templates it, the bullet must land in that template too.
- `~/Dev/ACMElabs/.claude-plugin/marketplace.json` was regenerated by env-setup's
  `generateMarketplace` (0.2.0) — generated, not tracked; it regenerates again at Part 2 Task 3.

**Installed state:** the plugin installed is `sessions@ACMElabs` 0.2.0, taken from `main` at
`1ac975d`; `main` is ahead by everything since. The installed skill still has `start`/`continue`
and the old words until Part 2 Task 3 reinstalls 0.3.0. Stale caches to delete (Part 5 Task 2):
`~/.claude/plugins/cache/ACMElabs/session/` (pre-rename plugin) and `sessions/0.1.0`.

**Decisions taken this day and where each is recorded** — the plan cites, ADR-001 (brain; ADR-024 in env-setup) decides,
ANA-001 argues: the split (ADR-001 (brain; ADR-024 in env-setup) § Decision); three acts start · log · close (ADR-001 (brain; ADR-024 in env-setup); `log` was
Peter's word, ANA-001 § Decisions 2); no join/open/leave and no `Open at end` (ADR-001 (brain; ADR-024 in env-setup); ANA-001
§ Consequences); argument inference and three scoped commands (ADR-001 (brain; ADR-024 in env-setup); ANA-001 change table);
`in progress | done` (ADR-001 (brain; ADR-024 in env-setup) decision 4; Peter's choice between `done` and `closed`, SES-002
entry `151c456`); home `~/.claude/skills`, git question deferred (ADR-001 (brain; ADR-024 in env-setup) § Home and order);
build here, move last (same); evals tossed and redone (ADR-001 (brain; ADR-024 in env-setup) decision 6); `disable-model-invocation`
is ours to remove (ANA-001 F5(c)); Matt's `handoff` not imported (ANA-001 F8); the Brain plugin's
`skills:plan` is ignored (Peter, 2026-08-31 — not a design input); duplicated shapes standardised
(Part 4 Task 3); `session init` writes nothing under `docs/plan/` (`f80af22`); every `/session` form
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
| The move lands in an untracked directory | history and evals lost | Part 5 waits for the repo decision; everything before it is committed here |
| Two vocabularies live during the transition | a doc says `open`, a tool says `in progress` | each task edits behaviour and glossary together; Part 4's grep is the checkpoint |

## Open questions

- Part 5: does `~/.claude/skills` become a git repo (Peter deferred it on 2026-08-31)?
- Part 4 Task 3: which copy of each duplicated shape survives — Peter's, per shape.
