# PRD: the `brain` toolset — the session log, plan rehydration, and the plugin that carries every skill, command and agent

> Status: current as of 2026-08-31 · owner Peter Kloss · last change: the founding conversation (acmelabs-15/sessions SES-002)

## Objective — what, why, for whom

A conversation with Claude Code starts from nothing but the repo. Git says *what* changed; nothing
says what was asked, what was tried and abandoned, what was verified, or what to do next. This
system gives a repo a **record** (the session log) and a **map** (the PRD → plan → part chain) so
that "work on PLAN-NNN" is enough for a new conversation to know where the work stands, what the
last conversation did and left unverified, and what the next task needs — and so that every
commit that reaches `main` has its story written where the next reader looks.

The system ships as **one plugin, `brain`** (ADR-002): the `session` skill and its tool, the
`ask-user-question` skill, every skill, command and agent Peter works with today from
`~/.claude/`, their references and evidence, and this docs system — one versioned home instead of
five, so a change that touches two skills lands in one repo.

For Peter, working alone across several repos on several machines, with many conversations per
day and no memory between them. Success: a fresh conversation rehydrates from the docs in one
typed command, its first commit is recorded without being told to, and every machine env-setup
bootstraps has the same toolset from one plugin.

## The promise — the user-visible contract

- **The plan is the way in.** `/plan PLAN-NNN` (or a description for a new plan) reads the docs
  system, finds the part `in progress` and its first unticked task, reads the session that part
  names, and says where things stand. Nothing about a plan's state is tracked twice.
- **The record has three acts and one status.** `start` opens a session from a description; `log`
  records a commit; `close` finishes a session. A session is `in progress` until it is `done`.
  A conversation that stops does nothing.
- **The gate holds.** No `docs(session)` commit while a commit on the branch has no entry or an
  entry has a placeholder. Its exit status is the verdict.
- **Value only.** A fix-up gets no entry (its parent vouches for it); a commit with nothing to
  record says so in its own message.
- **One vocabulary.** Session, plan and plan part share their status words; the glossary the
  system writes into a repo's `CONTEXT.md` defines every term once.
- **One home.** Every skill, command and agent, with its local edits, is a tracked file in the
  `brain` plugin; installing `brain` is installing the toolset.

## Requirements

1. `/plan PLAN-NNN` in a repo with `docs/plan/` and `docs/sessions/` posts a brief naming the plan,
   the part `in progress`, its first unticked task, the session serving it (`SES-NNN`), what the
   last entries left unverified, and the files the next task needs — after reading every named
   file to its last line.
2. `/plan <description>` with no matching plan writes one from the description in the repo's own
   `docs/plan/` convention, every part `> Status: planned`, and adds it to the PRD's Plans table.
3. `/session start <description> [--plan "PLAN-NNN · part N"]` creates `SES-NNN` with its Goal and
   Plan line and sets the part's status line to `in progress (session SES-NNN)`; it asks only for
   what the description cannot supply.
4. `/session log [SES-NNN]` after a commit appends the commit's skeleton (Summary, Why, one line per
   touched file with +/− counts), is filled with verified claims, ticks the plan's tasks citing
   the sha, updates every document the commit made stale, and commits as `docs(session): …` only
   when the gate is green.
5. `/session close SES-NNN` writes the Outcome from the log and the transcript (a user's report is
   recorded with them as its source), marks the plan part `done (session SES-NNN, sha)`, the plan
   and the PRD row when every part is done, and sets the session `done`. With no id it lists the
   sessions `in progress` and asks; with none it says so.
6. `/session` with arguments and no act infers the act: `SES-NNN` and a landed commit → log; a
   description → start. `close` is never inferred. Three commands `/session-start`,
   `/session-log`, `/session-close` expose one act each with that act's arguments.
7. The tool (`session.ts`, Bun) provides `init`, `list [--plan] [--brief]`, `new`, `append`,
   `current`, `check`, `close`, each refusal one `session: …` line and exit 1; `list --brief`
   prints `unrecorded: <sha>` for every commit no session accounts for.
8. `session init` scaffolds `docs/sessions/README.md` and the glossary section of `CONTEXT.md`, and
   nothing under `docs/plan/`: the PRD and plan shapes have one home, the plan skills.
9. A session file written before this system's status words (`open` / `closed`, an `Open at end`
   line) is still read correctly and never rewritten.
10. Every mode's reply is the template alone (the brief, the one-line confirmations); a step that
    cannot be satisfied stops the act, names itself, and asks where the answer is the user's.
11. Until the move the skill and commands are built and recorded in acmelabs-15/sessions.
12. **The `brain` plugin** (this repo) is the single home of the whole toolset: the `ask-user-question`
    skill, the `session` skill, all 46 skills now under `~/.claude/skills`, the 8 commands under
    `~/.claude/commands` and the 4 agents under `~/.claude/agents` move into it as one plugin, with
    its evidence (`evals/`) and this docs system. Peter, 2026-08-31; the details are a part of PLAN-001.

## Tech stack · Project structure · Code style · Testing strategy

Pure Bun TypeScript for the tool, `bun:test` beside it in `__tests__/`; skills as `SKILL.md` plus
`references/` and `scripts/`; plugin-kit's validator and measurement loops for evidence. Docs
follow `~/.claude/references/project-docs-conventions.md`: `docs/plan/` (PRD, PLAN),
`docs/decisions/` (ADR), `docs/analysis/` (ANA), `docs/sessions/` (SES), each with a README of
rules, index and template. Simplified Technical English, glossary words.

## Boundaries

- **Always:** read every named file to its last line; run the gate bare and read its exit; stage
  by named file; merge PRs with merge commits; decisions that are Peter's go through
  `ask-user-question`.
- **Ask first:** push, PR, merge, release, reinstall; deleting anything under `~/.claude`; any
  change to a settled ADR (supersede, never edit).
- **Never:** `git add -A`; a secret in a tracked file; a second home for a shape (template, rule,
  glossary term); rewriting a session entry.

## Success criteria

- A fresh conversation given only `/plan PLAN-NNN` posts a correct brief and its first commit is
  logged into the right session, measured on plugin-kit's disclosure harness against a fixture.
- The skill description triggers on the user's own words for the tool situations (the append
  says up to date; the gate says NOT ready; a skeleton for a commit I did not make; record that
  commit; close SES-NNN) on Sonnet, with hard negatives declined — measured with
  `measure-triggering.ts`.
- `bun test`, typecheck and the validator green; body under 500 lines; description under 1,024
  characters.

## Non-goals

- Owning the plan's shape or the PRD's (the plan skills do); authoring ADRs, PRDs or `CONTEXT.md`.
- Rewriting the 46 carried skills on the way in — they move as they stand; standardising their
  duplicated shapes is PLAN-001 Part 4 Task 3, after the move is not before.
- A changelog, a release tool, or an issue tracker.
- Portability outside Claude Code (the injected state lines and `${CLAUDE_SKILL_DIR}` are its).

## Open questions

- ~~Does `~/.claude/skills` become a git repo, and is this repo (`brain`) its future home?~~ Decided 2026-08-31: **`brain` is the plugin that holds everything** — the `ask-user-question` skill (`~/Dev/ACMElabs/ask-user-question`), the `session` skill (`~/Dev/ACMElabs/sessions`), every skill in `~/.claude/skills`, every command in `~/.claude/commands`, every agent in `~/.claude/agents`. Requirement 12; [ADR-002](../decisions/ADR-002-brain-is-the-plugin-for-the-whole-toolset.md).
- Which copy of each duplicated shape survives (ADR template, spec template, ticket shape)?

## Plans

| Plan | Implements | Status |
| --- | --- | --- |
| [PLAN-001-record-and-rehydration-split.md](PLAN-001-record-and-rehydration-split.md) | requirements 1–12 (1–2 via Part 3; 12 via Part 5) | in progress — part 1 (session SES-001; the code in acmelabs-15/sessions SES-002) |
