# sessions

A Claude Code plugin: one skill, `/sessions:session`, that keeps a **session log** a fresh
conversation can rehydrate from — and the tool that gates every commit against it.

The problem it solves: a conversation starts from nothing but the repo. Git says *what* changed;
nothing says what was asked, what was tried and abandoned, what was verified, or what to do next.
The session log does, and the plan points at it:

```text
PRD  →  plan  →  part (status: in progress (session SES-006))  →  docs/sessions/SES-006-….md
```

so "work on PLAN-003" is enough for a new conversation to find where the work stands and the
whole story of how it got there.

## What it produces

| You type | It does |
| --- | --- |
| `/sessions:session start [PLAN-NNN]` | a conversation's first read: OVERVIEW → the plan and its PRD → every open session serving it → `CONTEXT.md` → the ADRs it cites; joins the session the plan part names or opens one and marks the part `in progress (session SES-NNN)`; posts a brief. A `PLAN-NNN` that does not exist is written first with `planning-and-task-breakdown` |
| `/sessions:session continue [PLAN-NNN]` | picks a plan part already in progress back up; with no id, lists the plans in progress and asks which |
| `/sessions:session entry` | right after every commit: appends the commit's entry (Summary, Why, a line per touched file), fills it, updates what the change made stale (plan ticks, OVERVIEW, ADR, PRD, `CONTEXT.md`), gates, commits `docs(session): …` |
| `/sessions:session end` | leaving: log complete, handoff written in `Open at end`, tree clean; the session stays in progress |
| `/sessions:session close` | the Goal is done: Outcome written, plan part `done (session SES-NNN, sha)`, `Status: done` |

`/sessions:session-start`, `/sessions:session-continue`, `/sessions:session-entry`,
`/sessions:session-end`, `/sessions:session-close` are typed-only aliases of the five modes, for
the `/` menu rather than for brevity; a bare `PLAN-NNN` is `continue` when the plan exists and
`start` when it does not. **Every form carries the `sessions:` prefix** — a bare `/session` or
`/session-start` resolves to nothing (measured 2026-08-31, CLI 2.1.251). The skill is also
invoked by Claude itself when a conversation in a repo with `docs/sessions/` is about to commit.

A **session** is a bounded stream of work toward one Goal, `in progress` until `done`, spanning any number
of conversations; a conversation joins one or opens one before its first commit, and one that
changes nothing needs none. The log holds value only: a fix-up commit gets no entry (its parent's
`Also:` line vouches for it) and a commit with nothing to record carries the trailer
`Session-entry: none`.

## Install

This repo is its own marketplace (`.claude-plugin/marketplace.json`):

```bash
claude plugin marketplace add acmelabs-15/sessions   # or, in a session: /plugin marketplace add acmelabs-15/sessions
claude plugin install sessions@acmelabs-sessions
```

It is also listed in Peter's ACMElabs marketplace, which `envsetup` generates over the ACMElabs
repos it clones. Either way the plugin needs [Bun](https://bun.sh) on `PATH` and git; the tool is
a Bun script, no `node`, no install step.

In a repo that has no session log yet, type `/sessions:session start`: its Sessions line says
`no session log at …`, and the skill runs `session init`, which writes `docs/sessions/README.md`
(purpose, index, the session file template) and the session-log section of `CONTEXT.md`, keeping
any file that already exists. It writes nothing under `docs/plan/`: the PRD and plan shapes belong
to the plan skills (`planning-and-task-breakdown`, `spec-driven-development`), and this plugin only
reads a plan's part status lines. The documents it does write are code in
`skills/session/scripts/templates.ts`; `session template <name>` prints any of them.

## The tool

`skills/session/scripts/session.ts` — `session` below; the skill runs it as
`bun "${CLAUDE_SKILL_DIR}/scripts/session.ts"`, and by hand it is
`bun <this checkout>/skills/session/scripts/session.ts`. It finds the repo from
`CLAUDE_PROJECT_DIR`, else the git toplevel, else the working directory. `session help` prints
every subcommand with its output; the short form:

```bash
session init                             # scaffold docs/sessions and the CONTEXT.md section (keeps existing files)
session template <session | sessions-readme | context>   # print one of the documents init writes
session list [--plan PLAN-NNN] [--brief] # SES-NNN  in progress|done  title · plan, its Goal (--brief: no Goal line); then "in progress: …"
session new <slug> [--plan "PLAN-NNN · part N"]   # start SES-<next>-<slug>.md (Status: in progress) and regenerate the index
session append --session SES-NNN         # skeletons for commits no session accounts for → "session: up to date" when none
session current --session SES-NNN        # the file, status, Goal, every placeholder with its line number
session check --session SES-NNN          # the gate: exit 0 + "session: complete (SES-NNN, in progress)"; exit 1 + missing:/unfilled: lines
session close --session SES-NNN          # gate (now counting Outcome / Open at end), then Status: done
```

The rules the gate enforces — what counts as accounted for, what a placeholder is, what is never
rewritten — are `skills/session/references/session-log.md`.

## Developing

```bash
bun install
bun test              # scripts/__tests__/ — header parsing, selection, the gate's counting, plan matching, paths, templates
bun run typecheck
bun run validate      # claude plugin validate . --strict
claude --plugin-dir . # load it from this checkout; /help lists /sessions:session and the five aliases
```

`skills/session/evals/` holds the skill-creator evidence (eval prompts, four measured iterations,
the trigger set); results are committed, fixture repositories are not — its README says what each
iteration measured. Two things the layout decides: the skill's `allowed-tools` means a headless
run (`claude -p`) must pass `--allowedTools Skill` or the skill never loads; and the repo's
developer guidance is `.claude/CLAUDE.md` rather than a root `CLAUDE.md`, because
`claude plugin validate --strict` rejects the latter.

## Licence

MIT — see [LICENSE](LICENSE).
