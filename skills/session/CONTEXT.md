# Session log — the words the plugin ships

The vocabulary of the record the plugin produces: what a session is, what an entry holds, what the
gate counts, how a plan part points at a session, the three acts. These are the words used *in a
repo that installed the plugin* and in this repo's own `docs/`. They are defined here and nowhere
else (ADR-004): the tool writes nothing into a repo's `CONTEXT.md` — that file is
`domain-modeling`'s — and the skill reads a repo's `CONTEXT-MAP.md` and `CONTEXT.md` to write
that repo's entries in its own words.

## The words

**Session log**:
The `docs/sessions/` files together: the append-only record of every change that reached `main`
and the narrative around it — what a conversation reads to rehydrate.
_Avoid_: ledger (former name, retired 2026-08-30), history, changelog (that is the generated one)

**Session**:
A bounded stream of work toward one Goal, recorded in one `docs/sessions/SES-NNN` file;
`in progress` from `start` until `close` writes `done` with its Outcome. It may span any
number of conversations and may serve a plan part (its `Plan:` line).
_Avoid_: conversation (for this), sitting, chat, the newest file (as the definition of current)

**Conversation**:
One agent context or one human sitting. A participant in a session: it names the session in
progress it logs into, or starts one, before its first commit; a conversation that changes nothing
needs none.
_Avoid_: session (for this)

**Status** (one vocabulary for session, plan and plan part):
A session is `in progress` from `session new` until `session close` writes `done` — the Outcome says
whether the Goal was met or abandoned; nothing is appended to a done session. A plan part is
`planned`, `in progress (session SES-NNN)` or `done (session SES-NNN, sha)`; a plan is `planned`,
`in progress` or `done`. Tickets and ADRs carry their own words (triage roles; Accepted / Superseded).
_Avoid_: open, closed (the pre-ADR-024 session words, still read), active, current, finished, complete (as a status)

**Start** / **Log** / **Close** (the three acts of the session skill):
Start — a new session from a description: its Goal, its `Plan:` line, its plan part marked in
progress. Log — a commit's entry into a session in progress, with everything the change made
stale. Close — the Goal is done: Outcome written, status `done`, the plan part done. The act is
inferred from the arguments; close is always named. A conversation that stops does nothing.
_Avoid_: join, open, leave, end, add, record, entry (as the act name)

**Plan part**:
One `### Part N` of a plan in `docs/plan/`, with its own status line — `planned`, `in progress
(session SES-NNN)` or `done (session SES-NNN, sha)` — the pointer a new conversation follows from
the plan to the session that holds its story. One session per part.
_Avoid_: phase (as the heading word), step, milestone, ticket

**Gate**:
`session check`: exit 0 only when every commit on the branch is accounted for and your session has
no placeholder the gate counts. Its exit status is the verdict; nothing is piped after it.
_Avoid_: check (as the noun), lint, validation

**Entry**:
The block a change worth reading about gets in a session file — Summary, Why, one line per
touched file, Notes — written by the `log` act right after the commit. The session log holds
value only: a fix-up commit gets no entry and is vouched for by its parent's `Also:` line; a commit
with nothing to record says so itself (`Session-entry: none`) and gets none.
_Avoid_: log entry, note, update, record (as the noun), commit (as the unit — a commit is git's)

**Record** (verb):
To write the entry and update everything the commit made stale, in the same step; the practice
the docs system depends on.
_Avoid_: update, log, document (as the verb for this)

## Where the shapes are written

The glossary defines the words; the shapes those words name have one home each, and
[`CLAUDE.md`](./CLAUDE.md) says which:

- **The session file, its header and its entries** — `scripts/core.ts` (`template`,
  `parseHeader`, `knownShas`, `placeholderCount`, `render`, the documents `init` writes); the
  rules in `SKILL.md` (§ log, § What is never rewritten).
- **The plan part's status line** — its grammar and its use in `SKILL.md` (§ The plan part's
  status line). The plan's own shape is not this plugin's: `planning-and-task-breakdown` and
  `writing-specs` carry the PLAN and PRD templates; `session init` writes nothing under
  `docs/plan/`.

## The boundary with the authoring context

`session` is the one word both contexts use. Here it is a stream of work; in
[`../../CONTEXT.md`](../../CONTEXT.md) it is the product being built. In a sentence that could be
read either way, say "a session (the stream of work)" or "the session skill".

`ledger` was an earlier name for the session log. It is an `_Avoid_` synonym now; the one place
the tool still knows it is the skip list (`docs(ledger)` commit subjects get no entry), so a log
that predates the rename still gates green.
