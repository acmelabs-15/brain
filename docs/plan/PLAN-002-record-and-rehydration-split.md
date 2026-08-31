# Plan: the record with three acts, and rehydration moved to the plan

> Status: in progress · Peter, 2026-08-31 · requirement: ADR-024 in `~/Dev/env-setup/docs/decisions/`, from ANA-011 in `~/Dev/env-setup/docs/analysis/`

## Overview

ADR-024 splits what this plugin does today into two owners. The session skill keeps the record —
three acts (**start · log · close**), one status (`in progress | done`), argument inference, three
scoped commands. Rehydration — new-vs-continue, where the plan stands, which session, what happened,
what comes next, the brief — moves to `/plan [PLAN-NNN]` in `planning-and-task-breakdown`. Sequencing
is decided: **build here, move last** — every step lands in this repo with an entry and the gate, and
the copy into `~/.claude/skills/session` is the final part, once the git-repo question is answered.
Read ANA-011 and ADR-024 in full before any part.

Tasks are listed in execution order inside each part; the first unticked task of the first part
still in progress is the next move. A task's number is its stable name.

## Decisions it relies on

- `~/Dev/env-setup/docs/decisions/ADR-024-rehydration-belongs-to-the-plan.md` — the split, the acts,
  the status vocabulary, the inference, the home and the order. Supersedes the placement and mode
  clauses of ADR-019, ADR-020, ADR-022, ADR-023; ADR-021 (entry grain) stands.
- `~/Dev/env-setup/docs/analysis/ANA-011-rehydration-ownership.md` — the findings, the refuted
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
- [ ] Task 2: status vocabulary. A session is `in progress | done`; `open`/`closed` leave the
  header, the tool (`list`, `check`, `close`, `new`), the templates, the glossary section, the
  reference and the tests. Acceptance: `session list` prints `in progress`/`done`; `parseHeader`
  reads both old and new words for one release (existing files say `open`); the glossary's
  **Open** / **Closed** entry becomes **Status** with the three artefacts' vocabularies side by
  side. Verification: `bun test` with a migration case; the fixture's SES-005/006/007 parse.
- [ ] Task 3: `Open at end` retired. The template, `references/session-log.md`, the gate (it stops
  counting the line at close) and the glossary (**Handoff** retired or redefined as "the plan plus
  the last entries"). `Outcome` stays. Acceptance: `session close` gates on Goal, Narrative,
  entries and Outcome only; `session template session` has no `Open at end`. Verification: tests;
  SES-001's line is left as history, not deleted.
- [ ] Task 4: the three acts in `SKILL.md` — **start** (from a description; asks only for what
  the description lacks; sets the plan part's status line when a part is named), **log** (today's
  `entry`, taking `SES-NNN` explicitly), **close** (explicit; `SES-NNN` required; none → the
  sessions `in progress` through `ask-user-question`; none `in progress` → say so). `start`
  (the walk), `continue`, `end` and step 7's join/open leave. Acceptance: the body has three mode
  sections, each with a progress list and a Done-when; no reading of OVERVIEW, plan or PRD remains
  in the skill. Verification: a `--plugin-dir` render of each act in a scratch repo; the body under
  500 lines; the description under 1,024 characters with room left.
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
`~/.claude/skills/LOCAL-CHANGES.md` and in this part's session Narrative, as PLAN-001 Part 2 did.

- [ ] Task 1: `planning-and-task-breakdown/SKILL.md` § *Continuing a plan* — the eight steps in
  ANA-011 (arguments → order → where it stands → what happened → what comes next → the session →
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
  procedure must reach a skill. Acceptance: `/plan PLAN-001` in this repo posts the brief and names
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
- [ ] Task 2: env-setup ADR-024 committed with its index row; ANA-011 committed with its index
  row; ADR-023's Consequences sentence about the bare `/session` is superseded by ADR-024, not
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
