---
name: session
argument-hint: "start [PLAN-NNN] | continue [PLAN-NNN] | entry | end | close"
allowed-tools: Bash(git status:*), Bash(git branch:*), Bash(git show:*), Bash(git log:*), Bash(gh pr list:*), Bash(bun "${CLAUDE_PLUGIN_ROOT}/skills/session/scripts/session.ts" *)
license: MIT
compatibility: "Claude Code (the injected state lines and the plugin-root anchor do nothing elsewhere). Needs Bun on PATH and git; `gh` only for the open-PR check at the end of a conversation."
description: "Runs the session ritual of a repo's docs system and produces its artifacts: `/session start [PLAN-NNN]` and `/session continue [PLAN-NNN]` read the docs system in full (OVERVIEW, plan, PRD, the open docs/sessions/SES-NNN serving it, CONTEXT.md), join the session the plan part names or open one and mark the part in progress, and post a brief (`continue` alone asks which plan in progress); `/session entry` after every commit appends and fills the commit's entry, updates what it made stale (plan ticks, OVERVIEW, ADR, PRD, CONTEXT.md) and commits it as docs(session); `/session end` leaves the session open with a handoff; `/session close` closes a session whose Goal is done and marks its plan part done. Use at the start of a conversation in a repo with docs/sessions (or to set one up), after each commit, and before finishing — \"catch me up\", \"record that commit\", \"write the handoff\". Not for authoring an ADR, a PRD or CONTEXT.md, for changing the session tool itself, or for a changelog of recent commits."
---

# Session — start, continue, entry, end, close

Every conversation starts from nothing but the repo; the docs system is the continuity, and only
if each conversation reads it at the start and writes to it as it goes. A **session** is a stream
of work toward one Goal, open until closed, and may outlive many conversations; it usually serves
one **part** of a plan, and that part's status line names it — so "work on PLAN-003" is enough to
rehydrate: the plan says which part is in progress, the part says which session, the session says
what was done and what is next. A conversation joins a session or opens one before its first
commit; a conversation that changes nothing needs none. `references/session-log.md` carries the
rules of the record — the plan part's status line, what an entry and an `Also:` line hold, what
the gate counts, what is never rewritten; `session template <name>` prints the documents themselves.

Arguments: **$ARGUMENTS** — a mode and, for `start` and `continue`, an optional `PLAN-NNN`. When
the mode is missing, infer it: a bare `PLAN-NNN` is `continue` when `docs/plan/PLAN-NNN-*.md`
exists and `start` when it does not; nothing at all and no session joined or opened in this
conversation → `start`; a commit just landed → `entry`; the user is wrapping up and the Goal is
not done → `end`; the Goal is done → `close`. The typed-only aliases `/session-start`,
`/session-continue`, `/session-entry`, `/session-end`, `/session-close` invoke the same modes.

The tool is one exact command, always written this way (quoted path, then the subcommand):

```bash
bun "${CLAUDE_PLUGIN_ROOT}/skills/session/scripts/session.ts" <help | init | template | list | new | append | current | check | close> …
```

It is written `session <subcommand>` below; `session help` prints every subcommand and its output,
and `session template <name>` prints any document `init` writes. It finds the repo on its own
(`CLAUDE_PROJECT_DIR`, else the git toplevel), so it runs from any directory; paths below are
relative to the repo root. Every refusal is one `session: …` line that says what to do.

Live state at invocation (injected; do not re-run these to "confirm"):

- Branch: !`git branch --show-current`
- Tree: !`git status --short`
- Sessions: !`bun "${CLAUDE_PLUGIN_ROOT}/skills/session/scripts/session.ts" list --brief`

## Gotchas

- **The three lines above arrive as output on every path** — a typed `/session …`, a `/session-*`
  alias, the model's own invocation. A marker is recognised only at line start or after a space;
  wrapped in a code span it is inert, which is why an earlier version of this skill never
  rendered. If the lines show markers instead of output, or the policy notice
  `[shell command execution disabled by policy]`, run the three commands once yourself and treat
  their output as the injected state. (This bullet spells no marker: the harness runs any it finds
  in the body, and a failed one aborts the whole invocation.)
- **A Sessions line that says `no session log at …`** means the repo has no docs system yet: run
  `session init` (it writes `docs/sessions/README.md`, `docs/plan/README.md` and the session-log
  section of `CONTEXT.md`, keeping any file that exists), commit that, and continue.
- **No sampling.** Every file a step names is read to its last line; when the Read tool truncates,
  continue with `offset`. A file you did not finish is a file you did not read.
- **Your session is the one you joined or opened, never "the newest".** Another conversation may
  share this checkout with its own open session, so every `session append`, `check` and `close`
  in this conversation takes `--session SES-NNN`; with two sessions open the tool refuses to
  guess. Placeholders in any other session are that conversation's: the gate reports them as
  warnings, and you leave that file untouched. A closed session takes nothing; reopening one is
  `references/session-log.md` § What is never rewritten.
- **Merge PRs with merge commits.** A squash replaces every sha the entries cite with one new
  commit, which the gate then reports as `missing:`.
- **The gate's exit status is the gate.** Run `session check --session SES-NNN` bare and read its
  exit; pipe it through nothing (a `| tail` once hid a failure and a PR merged with an unfilled
  entry). Stage by named file; `git add -A` is how a stray file once got swept in.
- **`docs(session): …` commits are skipped by the tool** — the entry-writing commit never needs an
  entry of its own.
- **The gate counts entries, the Goal and the Narrative; `Outcome` and `Open at end` are
  counted only by `close`.** An open session carries those two as placeholders until it closes
  or a conversation leaves; do not invent an Outcome for a stream that just began.
- **`new` opens a session for a stream of work, not for a conversation.** One session per plan
  part; a conversation continuing that part joins its session with `--session`.
- **A release marker lands only when the release commit's entry is appended.** Tag first, then
  `session append --session SES-NNN`; if the release entry already exists, add
  `> **Released vX.Y.Z** — tag on this commit.` under it by hand.

## start and continue

With a plan id the two modes are one procedure: the part you take is the plan's `in progress`
part if it has one, else the first `planned` part in order. The mode word changes only step 2:
`start` with no id reads OVERVIEW's Next up; `continue` with no id asks which plan in progress;
`start` with a plan that does not exist writes it; `continue` with a plan that does not exist says
so and runs `start PLAN-NNN`.

```text
Progress:
- [ ] 1 OVERVIEW read to the end
- [ ] 2 the plan read to the end (+ the PRD it cites) — or chosen, or written (step 2 says how)
- [ ] 3 sessions index + every open SES serving the plan (else every open SES) read to the end
- [ ] 4 CONTEXT.md read to the end
- [ ] 5 injected state above read as findings (branch, tree, sessions)
- [ ] 6 the ADRs / ANAs the plan cites read
- [ ] 7 session joined, opened (Goal set, Plan line set), or "none" stated; the part marked in progress
- [ ] 8 brief posted in the template
```

1. `docs/OVERVIEW.md` — all of it; hold **Status**, **Next up**, **Key empirical facts**. (A repo
   without one: the README's status section, and say so in the brief.)
2. The plan, by case:
   - **`PLAN-NNN` given and `docs/plan/PLAN-NNN-*.md` exists** — read it in full: every part's
     status line (`planned | in progress (session SES-NNN) | done (session SES-NNN, sha)`) tells
     you where the plan stands and which session holds the story of each part; then the PRD its
     Overview cites, in full.
   - **`continue` with no id** — the injected Sessions line (it is `list --brief`) names every
     open session and the plan part each serves; those plans are the ones in progress. One of them: take it. Several: ask
     which with one question (the `ask-user-question` skill if installed, else the
     AskUserQuestion tool), each option a plan with its in-progress part and that session's
     Goal; none: say so and run `start` instead. Then read the chosen plan as above.
   - **A `PLAN-NNN` with no file** (`start` with a new id, or `continue` on a session whose `Plan:`
     line names a plan that was never written) — finish steps 1, 3–6 first (the read is
     what a plan needs), then say the plan does not exist, invoke `planning-and-task-breakdown`
     (Skill tool) to write it in `docs/plan/` under that number if it is free, else the next free
     one, with every part `> Status: planned`; add it to the PRD's Plans table; then read it as
     above. Where that skill is not installed, stop after the brief and say so.
   - **No plan** — OVERVIEW's **Next up** names the item; if it points at a plan, read that plan
     as above.
3. `docs/sessions/README.md` (the index, with each session's status and plan), then the sessions:
   `session list --plan PLAN-NNN` names the ones serving the plan — every **open** one in full
   (Goal / Outcome / Open at end, Narrative, every entry), and the closed one of the part you
   take, if any. Without a plan: every open session in full, then earlier sessions back to the
   last `> **Released vX.Y.Z**` marker. Collect: unreleased on `main`, parked branches (Status
   names them), what was tried and abandoned, what was verified and how.
4. `CONTEXT.md` — its words from here on, in code labels, prompts, commits, docs.
5. The injected branch / tree / sessions lines are findings for the brief (a branch you did not
   expect, a dirty tree, a second open session, warnings about another session's file). Report
   them; do not tidy anyone's work.
6. Every `ADR-NNN` the plan (or the item) cites, in the repo's decisions directory (settled — a
   change needs a superseding ADR); the `ANA-NNN` analyses it cites for facts you would otherwise
   re-research; search `docs/sessions/` with the Grep tool for the file or keyword. A directory's
   own `CLAUDE.md` loads when you read files there.
7. The session, one of three outcomes:
   - **join** — the part you take is `in progress (session SES-NNN)` and that session is open: it
     is yours from here on (`--session SES-NNN`), say so in the brief. `continue` lands here. A
     session another conversation owns — its placeholders unfilled, its Outcome not yours to
     write — is never joined, whatever its title says: when the user wants work on that part,
     post the brief with a Question line (wait for that conversation, or take its session over —
     fill its placeholders from `git show` and say so in its Narrative) and change nothing until
     answered; and a question that changes nothing is `none`, not a join;
   - **open** — the part is `planned` (or the work has no plan): `session new <slug> --plan
     "PLAN-NNN · part N"` (slug = the work ahead, kebab-case; omit `--plan` only for unplanned
     work), then set the title and `Goal` in the file it names, and change the part's status line
     to `in progress (session SES-NNN)` — that line is how the next conversation finds this
     session. `continue` on a plan whose in-progress part is done lands here for the next planned
     part;
   - **none** — the user asked a question, a review, a check, and nothing will change: say so;
     the moment the work turns into a change, run this step alone (the reading is done) before
     the first commit.
8. Post the brief — this template and nothing after it, every line present, the whole reply under
   ~1,200 characters (one clause per line; the session file and the Narrative hold the detail):

   ```text
   Released: vX.Y.Z (date, sha)
   Unreleased on main: …
   Parked: <branch> — <what, verified or not>
   Findings: <branch/tree/sessions observations, or "clean">
   Open / unverified: …
   Plan: PLAN-NNN · <part> — <its status before this conversation> | none
   Next: <item> — first step: …
   Question: <at most one, or omit the line>
   Session: SES-NNN <joined | opened> — <its Goal> | none — nothing to record yet
   read in full: <every file from steps 1–4 and 6>
   ```

**Done when** the brief is posted in that shape and the session is joined, opened with its Goal
set and its part marked in progress, or stated as none. If the user asked a question rather than
for work, answer it from what you read; open a session before the first change, not before the
answer.

## entry

Right after every commit — the entry is cheapest while the change is in front of you, and the next
conversation's read depends on it.

```text
Entry progress:
- [ ] 1 session append (--session yours) appended the skeleton(s)
- [ ] 2 every placeholder filled; Notes say what was verified and how
- [ ] 3 everything the change made stale updated, citing the sha (the plan's ticks first)
- [ ] 4 Narrative updated
- [ ] 5 gate green (bare command, exit read), then named-file stage + docs(session) commit
```

1. `session append --session SES-NNN` appends one skeleton per commit not yet accounted for
   (`Summary` / `Why` placeholders, one line per touched file with its +/− counts — every file,
   a rename as two lines, none trimmed;
   `session current --session SES-NNN` lists them by line). A skeleton for a commit you did not
   make is a finding: fill what `git show <sha>` supports, say in its Notes that it was not
   verified, or ask. **The session log holds value only**: a skeleton for a fix-up of an earlier
   commit is deleted and that earlier entry gets `- Also: <sha> — <what it fixed>` under its
   `Why`; a commit with nothing to record should have carried the trailer `Session-entry: none`
   when it was made (the tool then appends nothing) — write that trailer yourself on such
   commits. The table of which commits get no entry is in `references/session-log.md`.
2. Fill every placeholder. `Summary` = what the change does as a whole; `Why` = the problem or
   request (name who asked); per file, a phrase that says what changed *in that file* — "updated"
   or "changes" is not a phrase, and `references/session-log.md` shows a filled line beside its
   skeleton; `Notes` = what was verified and how, what is unverified, a follow-up, a decision made
   on the spot. Verify the change's claim yourself (its driver, a test, a byte comparison) before
   writing it down.
3. In this same step, citing the entry's sha: the plan part this session serves → tick its tasks
   (`- [x] … — <sha>`), its status line stays `in progress (session SES-NNN)`; OVERVIEW
   **Status** / **Next up**; a decision → a new ADR (`documentation-and-adrs` if installed, else
   the template in the decisions directory's README); a changed requirement or default → the PRD;
   a finding → an analysis; a new or sharpened term → `CONTEXT.md` (`domain-modeling` if
   installed); a directory convention → that directory's `CLAUDE.md`; any doc that now states
   something the commit made false (grep for the old claim); the README index for any new doc.
4. Add to your session's Narrative what the entry cannot hold: the request, a dead end, a false
   lead, a verification.
5. Gate and commit — three commands, in this order, each on its own:

   ```bash
   session check --session SES-NNN               # prints: session: complete (SES-NNN, open)
   git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md <other docs you touched>
   git commit -m "docs(session): <what the entry records>"
   ```

   `NOT ready` names what is missing or unfilled (`session current --session SES-NNN` lists each
   placeholder with its line number): fill it, run the gate again, and only then stage.

**Done when** the gate printed `session: complete` for your session, the `docs(session)` commit
exists, no placeholder is left in your file, and every stale doc is updated or named in `Open at
end`.

## end

Leaving: the conversation stops, the session stays open for the next one. The check that nothing
slipped, and the handoff.

```text
End progress:
- [ ] 1 log complete for your session (append → up to date; check → complete)
- [ ] 2 Open at end = the handoff: what to pick up first, what is unverified; Narrative whole
- [ ] 3 OVERVIEW Status / Next up match reality; top of Next up = first thing next time
- [ ] 4 handoff committed: docs(session): handoff SES-NNN
- [ ] 5 tree clean on main, or every exception named
- [ ] 6 closing note posted
```

1. `session append --session SES-NNN` (expect `up to date`), then the gate (expect
   `session: complete (SES-NNN, open)`).
2. In your session file: `Open at end` says what the next conversation picks up first and what is
   unverified; the Narrative is whole; every entry's `Notes` names what was verified and what was
   not. `Outcome` stays its placeholder — it is written at `close`. The plan part stays
   `in progress (session SES-NNN)` — that is the pointer `continue` follows.
3. OVERVIEW Status (released / unreleased on `main` / parked with branch names) and Next up match
   reality and cite the shas; the top of Next up is the first thing the next conversation should
   do.
4. Stage by name and commit: `git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md
   docs/OVERVIEW.md` → `git commit -m "docs(session): handoff SES-NNN"`.
5. The tree:

   ```bash
   git status --short             # nothing uncommitted; WIP lives on a named branch cited in Status
   git branch --show-current      # main, after the last PR merged
   gh pr list --state open        # none dangling, or each named in Open at end (skip if origin is not GitHub; say so)
   ```

6. Post the closing note — this template, at most ~60 words:

   ```text
   Shipped: <what landed this conversation — PRs/commits, one line>
   Next time: <the first thing to do, one line>  (SES-NNN stays open)
   ```

**Done when** the gate is green for your session, the handoff commit exists, the tree is clean on
`main` (or every exception is named in `Open at end` and in Status), and the closing note is
posted in that shape.

## close

The Goal is done: everything `end` checks, plus the Outcome and the plan, then the status flips.

```text
Close progress:
- [ ] 1 end's steps 1–3 done (log complete, Narrative whole, OVERVIEW current)
- [ ] 2 Outcome written as the stream actually ended; Open at end = what it leaves behind
- [ ] 3 the plan part → done (session SES-NNN, sha); the plan's own status when every part is; PRD Plans row
- [ ] 4 session close --session SES-NNN printed: session: closed SES-NNN
- [ ] 5 docs(session) commit; tree clean (end step 5); closing note posted
```

1. Run `end` steps 1–3.
2. `Outcome` = what the session delivered (releases, merged PRs, what was verified); `Open at end`
   = what it leaves for a later session, or "nothing".
3. The plan named on the session's `Plan:` line: the part's status line becomes
   `done (session SES-NNN, <sha of the entry that finished it>)`, its remaining ticks cite the
   entry shas; when every part is done, the plan's top status becomes
   `done — shipped in vX.Y.Z (session SES-NNN)` and the PRD's **Plans** row says the same; OVERVIEW
   Status names the session as closed where it named it as in flight.
4. `session close --session SES-NNN` — it runs the gate first, this time counting `Outcome` and
   `Open at end` too, and refuses while anything is unfilled or unrecorded. It prints
   `session: closed SES-NNN`; a `— still open: …` suffix names other conversations' sessions, not
   a problem. Then `git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md
   docs/OVERVIEW.md docs/plan/PLAN-NNN-<feature>.md docs/plan/PRD-NNN-<product>.md` (the part's
   status line and the Plans row travel with the close), commit `docs(session): close SES-NNN`,
   and run `end` step 5 (the tree).
5. Post the closing note as in `end`, with `(SES-NNN closed)` on the second line.

**Done when** the tool printed `session: closed SES-NNN`, the `docs(session)` commit exists, the
tree is clean, and the plan part, the plan and OVERVIEW say the same thing as the session's
Outcome.
