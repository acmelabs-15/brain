# Session log — the words the plugin ships

The vocabulary of the record the plugin produces: what a session is, what an entry holds, what the
gate counts, how a plan part points at a session. These are the words used *in a repo that
installed the plugin* — and in this repo's own `docs/sessions/`, which the tool it ships gates
(ADR-003).

**The definitions live in one file and are not repeated here:**
`scripts/core.ts` (`contextSection`, printed by `session template context`) — the section
`session init` appends to a consuming repo's `CONTEXT.md`. It defines:

| Term | What it names |
| --- | --- |
| **Session log** | the record as a whole |
| **Session** | one bounded stream of work toward one Goal |
| **Conversation** | one exchange with Claude; many may share a session |
| **Status** | one vocabulary: a session is `in progress` or `done`; a plan part `planned` / `in progress (session SES-NNN)` / `done (session SES-NNN, sha)`; a plan `planned` / `in progress` / `done` |
| **Start** / **Log** / **Close** | the three acts: a session from a description; a commit's entry; the Goal done |
| **Plan part** | the unit of a plan a session serves |
| **Gate** | `session check` — its exit status is the verdict |
| **Entry** | one commit's block in a session file |
| **Record** (verb) | to write something into the log |

Read that output for the definition and its `_Avoid_` line; edit it there. A copy here would be a
second home for a rule, and the shipped section is the one a user actually receives.

## Where the shapes are written

The glossary defines the words; the shapes those words name have one home each, and
[`CLAUDE.md`](./CLAUDE.md) says which:

- **The session file, its header and its entries** — `scripts/core.ts` (`template`,
  `parseHeader`, `knownShas`, `placeholderCount`, `render`, the documents `init` writes); the
  rules in `SKILL.md` (§ log, § What is never rewritten).
- **The plan part's status line** — its grammar and its use in `SKILL.md` (§ The plan part's
  status line). The plan's own shape is not this plugin's: `planning-and-task-breakdown` and
  `spec-driven-development` carry the PLAN and PRD templates; `session init` writes nothing under
  `docs/plan/`.

## The boundary with the authoring context

`session` is the one word both contexts use. Here it is a stream of work; in
[`../../CONTEXT.md`](../../CONTEXT.md) it is the product being built. In a sentence that could be
read either way, say "a session (the stream of work)" or "the session skill".

`ledger` was an earlier name for the session log. It is an `_Avoid_` synonym now; the one place
the tool still knows it is the skip list (`docs(ledger)` commit subjects get no entry), so a log
that predates the rename still gates green.
