# Authoring — building the brain plugin

The words for changing this repo's code: the plugin as an artefact, its parts, and the evidence
that it works. The vocabulary of the record it *produces* is a separate context —
[skills/session/CONTEXT.md](./skills/session/CONTEXT.md), whose definitions `session init` also
wrote into this file's last section — and [CONTEXT-MAP.md](./CONTEXT-MAP.md) says how the two meet.

## The artefact

**Plugin**:
This repo as Claude Code installs it — `brain`: the manifest, one skill, three commands, and (from
PLAN-001 Part 2) every skill, command and agent of the toolset. The unit a marketplace lists and
a version tags.
_Avoid_: package, extension, add-on, the sessions plugin (its name before 2026-08-31)

**Skill**:
The directory `skills/session/` and everything under it. When the subject is the procedure file
alone, say **SKILL.md**; "the skill" never means that file by itself.
_Avoid_: the command, the agent

**Tool**:
`skills/session/scripts/cli.ts` — the Bun CLI the skill runs. Written `session <subcommand>`
in prose. It is run, never read by the model.
_Avoid_: the script, the CLI, the binary

**Act**:
One of the three things the skill does: `start`, `log`, `close` — the same word the shipped
glossary uses. An act is a section of SKILL.md with its own progress list and completion criterion;
the act is inferred from the arguments, and `close` is always named.
_Avoid_: mode (the word before 2026-08-31), subcommand (that is the tool's), phase, step, action

**Subcommand**:
One of the tool's nine verbs: `help`, `init`, `template`, `list`, `new`, `append`, `check`, `close`, `current`. An
act calls subcommands; the two vocabularies do not overlap even where the word matches
(`close` is both, and they are not the same thing).
_Avoid_: command (that is the alias), flag, option

**Alias**:
One of the three files in `commands/` (`/brain:session-start`, `/brain:session-log`,
`/brain:session-close`) that invokes one act with that act's arguments. Typed only —
`disable-model-invocation: true` — and carrying no procedure of its own. The prefix is not
optional: a bare `/session-start` resolves to nothing.
_Avoid_: slash command, shortcut, wrapper

## Bundled files, named by load mode

A bundled file's kind is **what the model does with it**, not what it contains or which directory
it sits in. A `.ts` file the model runs and a `.ts` file it reads for shape are different kinds.
Naming them by load mode is what stops a rule landing in two places.

**Load mode**:
The one thing SKILL.md tells the model to do with a bundled file — run it, read it, or copy it.
The verb in SKILL.md decides a file's kind; the file's type and extension decide nothing.
_Avoid_: file type, category, genre

**Script**:
A file the model **runs**, where only the output enters context and the source never does.
`scripts/` here: `cli.ts` (the CLI), `core.ts` (the model behind it) and their tests.
What the tool does it prints itself (`session help`), so the model never reads a script to find out.
_Avoid_: source, implementation, code

**Reference**:
A file the model **reads in full** for rules, shapes and outputs — prose about the domain, not a
specimen of it. None here since 2026-08-31: the rules of the record live in `SKILL.md` (the one
reference the skill had was read in 0 of the measured runs). When the subject is a pointer
from one document to another, say **link** or **cross-reference**.
_Avoid_: doc, guide, appendix

**Asset**:
A file the model **copies into what it produces**, needing its bytes rather than its meaning.
None here: the documents `session init` writes into a consuming repo are code in
`scripts/core.ts` (`session template <name>` prints them), so they have one home.
_Avoid_: template file, fixture, resource

**Example**:
A file the model **reads as a whole specimen** and imitates the shape of. A permitted fourth kind
this skill does not currently use; a lone specimen belongs at the skill root, not in a directory
of one.
_Avoid_: sample, demo, fixture

The four are not a closed set, but a fifth has to defend itself: it earns its place only when its
contents are one component whose parts mean nothing apart, and a load-mode split would cost that
legibility while changing nothing about what enters context. The test is not whether the four
*could* absorb the files. `~/Dev/ACMElabs/plugin-kit/shared/references/progressive-disclosure.md`
carries the ordered placement rule and the hard cases.

`evals/` is outside this taxonomy rather than a fifth kind of it — see **Evidence** below.

## Loading and invocation

**Injected state**:
The three lines at the top of SKILL.md that the harness executes at load time — branch, tree,
session list — whose output arrives as part of every invocation. Findings, not commands to re-run.
_Avoid_: preamble, context block, header

**Marker**:
The syntax that makes the harness run a command at load time. Recognised only at line start or
after a space; inert inside a code span. Nothing in a skill body may spell one out in prose.
_Avoid_: directive, trigger, injection token

**Invocation**:
One load of the skill — typed, aliased, or chosen by the model. What SKILL.md's body costs is paid
per invocation, which is why the body carries only what every act needs.
_Avoid_: call, run, execution

**Description**:
The frontmatter field Claude matches to decide whether to load a skill. Measured against a
1,024-character limit, never eyeballed. The three aliases and the manifest have their own, and all
five must agree.
_Avoid_: summary, blurb

## What the tool emits

**Skeleton**:
The unfilled entry `session append` writes for a commit — headings and `_(fill in)_` lines, one
per touched file. Becomes an entry once filled.
_Avoid_: stub, template, draft entry

**Placeholder**:
A `_(fill in)_` marker in a session file. The gate counts them; `session current` lists each with
its line number.
_Avoid_: TODO, blank, stub

**Refusal**:
The tool declining to act: one `session: …` line on stderr and exit 1, never a stack trace. Each
has a named cause and states its remedy in the line itself.
_Avoid_: error, failure, crash, exception

**Reply line**:
The one line `start` and `close` post as the entire reply (`started SES-NNN — …`,
`closed SES-NNN — done — …`). The brief — the rehydration reply — is `/plan`'s since ADR-001,
not this skill's.
_Avoid_: brief (for this), summary, report, closing note

## Evidence

`evals/` is not a bundled file of any kind: nothing in it loads at invocation, and it holds the
**evidence** behind the skill's claims rather than material the skill uses. Its layout is
prescribed by skill-creator — `evals.json`, `fixtures/`, `results/iteration-<N>/` — so it is a
followed convention, not a directory this repo invented. It lives in the repo because a number
nobody can re-derive is not evidence.

**Eval**:
One realistic prompt plus the expectations its output must satisfy. Written as a user would type
it, not as an abstraction of one.
_Avoid_: test (that is `bun test`), test case, scenario

**Iteration**:
One numbered round (`results/iteration-N/`) measuring one change to the skill. Prompts do not
carry between iterations; a changed prompt starts a new one. What each measured is `evals/README.md`.
_Avoid_: run, pass, version

**Arm**:
One side of an eval's comparison — `with_skill` against a baseline (`without_skill`, or
`old_skill` for the version arrived with). Both halves of an iteration are spawned in the same
turn, so they finish together.
_Avoid_: variant, condition, branch

**Expectation**:
One objectively checkable claim about an eval's output. Something needing judgement is left to
the human review, because an expectation forced onto it produces a number that means nothing.
_Avoid_: assertion, criterion, requirement

**Trigger set**:
The prompts that measure whether the description fires the skill — should-fire cases and hard
negatives. Measured on the weaker model tier, where a signposting defect actually shows.
_Avoid_: trigger eval, routing test

**Check**:
One of the four things run before a change is finished: `bun run typecheck`, `bun test`,
`bun run validate`, and plugin-kit's skill validator. Static: none of them says whether the skill
helps, which is what an eval is for.
_Avoid_: CI, lint, verification step

## The session log (the docs system)

**Session log**:
The `docs/sessions/` files together: the append-only record of every change that reached `main`
and the narrative around it — what a conversation reads to rehydrate.
_Avoid_: ledger, history, changelog (that is the generated one)

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
