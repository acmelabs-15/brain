# brain

The Claude Code plugin that keeps a repo's **session log** — the record of every commit that
reached `main` and the story around it — and, by [ADR-002](docs/decisions/ADR-002-brain-is-the-plugin-for-the-whole-toolset.md),
the one plugin that will carry Peter's whole toolset: every skill, command and agent. Today it
ships 40 skills, 11 commands (3 typed-only for the session acts, 8 model-invocable), 4 agents and 9
references — the session skill and its Bun tool maintained here, the rest copied in as they stand
(PLAN-001 Part 2); this repo is also the docs system of record for that work (`docs/plan`, `docs/decisions`, `docs/analysis`,
`docs/sessions`), and its own commits are gated by the log it ships.

Start at [docs/plan/PRD-001-session-log-and-rehydration.md](docs/plan/PRD-001-session-log-and-rehydration.md),
then the plan its Plans table names; `docs/sessions/` records every commit here.

## Install

```bash
claude plugin install brain@ACMElabs      # from the ACMElabs marketplace env-setup generates
```

Every form is namespaced — a plugin skill resolves only as `/brain:…` (measured; ANA-002).

## The three acts

| Typed | Act | What it does |
| --- | --- | --- |
| `/brain:session start <description> [--plan "PLAN-NNN · part N"]` | **start** | creates `docs/sessions/SES-NNN` from the description — title, Goal, opening Narrative — and marks the plan part `in progress (session SES-NNN)` |
| `/brain:session log [SES-NNN]` | **log** | right after a commit: appends and fills the commit's entry, ticks the plan, updates what the change made stale, commits it as `docs(session)` once the gate is green |
| `/brain:session close SES-NNN` | **close** | the Goal is done: writes the Outcome, marks the session and its plan part `done`, commits |

`/brain:session` alone infers the act from its arguments (`SES-NNN` and a landed commit → log; a
description → start); `close` is always named. The commands `/brain:session-start`,
`/brain:session-log` and `/brain:session-close` expose one act each. Where a plan stands and what
comes next is `/plan PLAN-NNN`'s to say (PLAN-001 Part 4), not this skill's.

A **session** is a stream of work toward one Goal, `in progress` until `done`; it may span many
conversations and usually serves one part of a plan, whose status line names it. A conversation
that stops does nothing.

## The tool

```bash
bun "<plugin>/skills/session/scripts/cli.ts" <help | init | template | list | new | append | current | check | close>
```

`init` scaffolds `docs/sessions/README.md` and nothing else — nothing under `docs/plan/` (the
plan's shape is the plan skill's) and nothing in `CONTEXT.md` (`domain-modeling`'s; the record's
own words are in `skills/session/CONTEXT.md`, ADR-004). `check` is the gate: exit 0 only when
every commit on the branch is accounted for — by an entry, a parent entry's `Also:` line, a
`Session-entry: none` trailer, a `docs(session)` subject, or an archived log under
`docs/sessions/archive/` — and the session has no placeholder left. The rules of the record — what
an entry holds, which commits get none, what is never rewritten — are in
[skills/session/SKILL.md](skills/session/SKILL.md) itself.

## Working on this repo

`.claude/CLAUDE.md` carries the checks before finishing and the conventions this repo does not
share with its neighbours; `skills/session/CLAUDE.md` loads when you work inside the skill.
The history of the skill before 2026-08-31 came from acmelabs-15/sessions, merged in with its
commits ([ADR-003](docs/decisions/ADR-003-the-session-skill-moves-now-with-its-history.md)); that
repo's docs are under `docs/plan/archive/` and `docs/sessions/archive/`.
