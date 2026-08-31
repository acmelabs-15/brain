---
name: session
argument-hint: "start [PLAN-NNN] | continue [PLAN-NNN] | entry | end | close"
allowed-tools: Bash(git status:*), Bash(git branch:*), Bash(git show:*), Bash(git log:*), Bash(gh pr list:*), Bash(bun "${CLAUDE_SKILL_DIR}/scripts/session.ts" *)
license: MIT
compatibility: "Claude Code (the injected state lines and the plugin-root anchor do nothing elsewhere). Needs Bun on PATH and git; `gh` only for the open-PR check at the end of a conversation."
description: "Runs the session ritual of a repo's docs system and produces its artifacts: `/session start [PLAN-NNN]` and `/session continue [PLAN-NNN]` read the docs system in full (OVERVIEW, plan, PRD, the open docs/sessions/SES-NNN serving it, CONTEXT.md), join the session the plan part names or open one and mark the part in progress, and post a brief (`continue` alone asks which plan in progress); `/session entry` after every commit appends and fills the commit's entry, updates what it made stale (plan ticks, OVERVIEW, ADR, PRD, CONTEXT.md) and commits it as docs(session); `/session end` leaves the session open with a handoff; `/session close` closes a session whose Goal is done and marks its plan part done. Use at the start of a conversation in a repo with docs/sessions (or to set one up), after each commit, and before finishing — \"catch me up\", \"record that commit\", \"write the handoff\". Not for authoring an ADR, a PRD or CONTEXT.md, for changing the session tool itself, or for a changelog of recent commits."
---

# Session — start, continue, entry, end, close

A **session** is a stream of work toward one Goal, open until closed, that may outlive many
conversations; it usually serves one **part** of a plan, and that part's status line names it. A
conversation joins a session or opens one before its first commit; one that changes nothing needs
none. The rules of the record are `references/session-log.md`; `session template <name>` prints
the documents themselves.

## Workflow

1. Determine the mode from the arguments — **$ARGUMENTS** — a mode word and, for `start` and
   `continue`, an optional `PLAN-NNN` (the aliases `/session-start` … `/session-close` pass the
   same words):

   **`start` or `continue`, with or without a plan id?** → Follow "start and continue" below
   **A bare `PLAN-NNN`, no mode word?** → `docs/plan/PLAN-NNN-*.md` exists → "start and continue" as `continue`; no such file → as `start`
   **Nothing, and no session joined or opened in this conversation?** → "start and continue" as `start`
   **`entry`, or a commit just landed?** → Follow "entry" below
   **`end`, or wrapping up with the Goal not done?** → Follow "end" below
   **`close`, or the Goal done?** → Follow "close" below

   **Example 1:** Input: `/session PLAN-003`, and `docs/plan/PLAN-003-search.md` exists → Output: "start and continue" as `continue PLAN-003`
   **Example 2:** Input: `/session PLAN-009`, no such file → Output: "start and continue" as `start PLAN-009`
   **Example 3:** Input: `/session` right after `git commit` → Output: "entry"

2. Run that mode to its **Done when** line. Each mode opens with a progress checklist: copy it into
   the reply and tick it as you go.

The tool is one exact command, always written this way — quoted path, then the subcommand — and
`session <subcommand>` below:

```bash
bun "${CLAUDE_SKILL_DIR}/scripts/session.ts" <help | init | template | list | new | append | current | check | close> …
```

`session help` prints every subcommand with its output. It finds the repo itself
(`CLAUDE_PROJECT_DIR`, else the git toplevel); paths below are relative to the repo root. Every
refusal is one `session: …` line that says what to do.

Injected state (the harness ran these at load; findings, not commands to re-run):

- Branch: !`git branch --show-current`
- Tree: !`git status --short`
- Sessions: !`bun "${CLAUDE_SKILL_DIR}/scripts/session.ts" list --brief`

## Gotchas

- **The three lines above arrive as output on every path** — typed, aliased, or model-invoked. A
  marker is recognised only at line start or after a space; wrapped in a code span it is inert,
  which is why an earlier version of this skill never rendered. If the lines show markers, or
  `[shell command execution disabled by policy]`, run the three commands once yourself and treat
  the output as the injected state. (This bullet spells no marker: the harness runs any it finds
  in the body, and a failed one aborts the whole invocation.)
- **A Sessions line that says `no session log at …`** means no docs system yet: run
  `session init` (writes `docs/sessions/README.md`, `docs/plan/README.md` and the session-log
  section of `CONTEXT.md`; keeps any file that exists), commit that, continue.
- **No sampling.** Every file a step names is read to its last line; when the Read tool
  truncates, continue with `offset`.
- **Your session is the one you joined or opened, never "the newest".** Another conversation may
  share this checkout with its own open session, so every `session append`, `check` and `close`
  takes `--session SES-NNN`; with two open the tool refuses to guess. Placeholders in any other
  session are that conversation's: the gate reports them as warnings; leave that file untouched.
  A closed session takes nothing; reopening one is `references/session-log.md` § What is never
  rewritten.
- **The gate's exit status is the gate.** Run `session check --session SES-NNN` bare and read its
  exit; pipe it through nothing (a `| tail` once hid a failure and a PR merged with an unfilled
  entry). Stage by named file; `git add -A` once swept in a stray file.
- **Merge PRs with merge commits.** A squash replaces every sha the entries cite with one new
  commit, which the gate then reports as `missing:`.
- **`docs(session): …` commits are skipped by the tool** — the entry-writing commit needs no entry.
- **The gate counts entries, the Goal and the Narrative; `Outcome` and `Open at end` only at
  `close`.** An open session carries those two as placeholders; do not invent an Outcome early.
- **`new` opens a session for a stream of work, not for a conversation.** One session per plan
  part; a conversation continuing that part joins with `--session`.
- **A release marker lands only when the release commit's entry is appended.** Tag first, then
  `session append`; if the entry already exists, add `> **Released vX.Y.Z** — tag on this commit.`
  under it by hand.

## start and continue

With a plan id the two modes are one procedure: the part you take is the plan's `in progress` part
if it has one, else the first `planned` part. The mode word changes only the decision in step 2.

```text
Progress:
- [ ] 1 OVERVIEW read to the end
- [ ] 2 the plan read to the end (+ the PRD it cites) — chosen or written as step 2 says
- [ ] 3 sessions index + every open SES serving the plan (else every open SES) read to the end
- [ ] 4 CONTEXT.md read to the end
- [ ] 5 injected state read as findings (branch, tree, sessions)
- [ ] 6 the ADRs / ANAs the plan cites read
- [ ] 7 session joined, opened (Goal set, Plan line set), or "none" stated; the part marked in progress
- [ ] 8 brief posted in the template
```

1. `docs/OVERVIEW.md` — all of it; hold **Status**, **Next up**, **Key empirical facts**. (No
   OVERVIEW: the README's status section, and say so in the brief.)
2. Determine which plan, then read it:

   **`PLAN-NNN` given and `docs/plan/PLAN-NNN-*.md` exists?** → Follow "Read the plan" below
   **`continue` with no id?** → Follow "Choose the plan" below, then "Read the plan"
   **A `PLAN-NNN` with no file?** (`start` with a new id, or `continue` on a session whose `Plan:` line names a plan never written) → Follow "Write the plan" below, then "Read the plan"
   **No plan at all?** → OVERVIEW's **Next up** names the item; if it points at a plan, "Read the plan"

   - **Read the plan** → read it in full — each part's
     status line (`planned | in progress (session SES-NNN) | done (session SES-NNN, sha)`) says
     where the plan stands and which session holds each part — then the PRD its Overview cites.
   - **Choose the plan** → the injected Sessions line (it is `list --brief`) names every
     open session and the plan part it serves; those plans are in progress. One → take it.
     Several → one question (the `ask-user-question` skill if installed, else the AskUserQuestion
     tool), each option a plan with its in-progress part and that session's Goal. None → say so
     and run `start`.
   - **Write the plan** → finish steps 1, 3–6 first, say the plan does not
     exist, invoke `planning-and-task-breakdown` (Skill tool) to write it in `docs/plan/` under
     that number if free, else the next free one, every part `> Status: planned`; add it to the
     PRD's Plans table. Skill not installed → stop after the brief, say so.
3. `docs/sessions/README.md` (the index), then the sessions: `session list --plan PLAN-NNN` names
   the ones serving the plan — every **open** one in full, and the closed one of the part you
   take, if any. No plan: every open session, then earlier ones back to the last
   `> **Released vX.Y.Z**` marker. Collect: unreleased on `main`, parked branches, what was tried
   and abandoned, what was verified and how.
4. `CONTEXT.md` — its words from here on, in code labels, prompts, commits, docs.
5. The injected lines are findings for the brief (an unexpected branch, a dirty tree, a second
   open session, warnings about another session's file). Report them; tidy nothing.
6. Every `ADR-NNN` the plan cites (settled — a change needs a superseding ADR); the `ANA-NNN` it
   cites; search `docs/sessions/` with the Grep tool for the file or keyword. A directory's own
   `CLAUDE.md` loads when you read files there.
7. Determine the session outcome:

   **The part is `in progress (session SES-NNN)` and that session is open?** → join
   **The part is `planned`, or the work has no plan?** → open
   **A question, a review, a check — nothing will change?** → none

   - **join** — the part is `in progress (session SES-NNN)` and that session is open: it is yours
     (`--session SES-NNN`); say so in the brief. A session another conversation owns —
     placeholders unfilled, Outcome not yours — is never joined: when the user wants work on that
     part, post the brief with a Question line (wait for that conversation, or take its session
     over — fill its placeholders from `git show`, say so in its Narrative) and change nothing
     until answered;
   - **open** — the part is `planned` (or the work has no plan): `session new <slug> --plan
     "PLAN-NNN · part N"` (slug = the work ahead, kebab-case; omit `--plan` only for unplanned
     work); set the title and `Goal` in the file it names; then the part's status line, ALWAYS
     this exact form: `> Status: in progress (session SES-NNN)` — how the next conversation finds
     this session;
   - **none** — a question, a review, a check; nothing will change. Say so. The moment the work
     turns into a change, run this step alone before the first commit.
8. Post the brief. ALWAYS use this exact template structure — square brackets mark what you write,
   every line present, nothing after it, under ~1,200 characters (one clause per line; the session
   file and the Narrative hold the detail):

   ```text
   Released: [vX.Y.Z (date, sha)]
   Unreleased on main: [commits since the last release marker]
   Parked: [branch — what, verified or not]
   Findings: [branch/tree/sessions observations, or "clean"]
   Open / unverified: [what the log names as unverified]
   Plan: [PLAN-NNN · part — its status before this conversation] | none
   Next: [item] — first step: [the first move]
   Question: [at most one, or omit the line]
   Session: [SES-NNN joined | SES-NNN opened — its Goal] | none — nothing to record yet
   read in full: [every file from steps 1–4 and 6]
   ```

**Done when** the brief is posted in that shape and the session is joined, opened with its Goal
set and its part marked in progress, or stated as none. A question is answered from what you read;
the session opens before the first change, not before the answer.

## entry

Right after every commit — cheapest while the change is in front of you.

```text
Entry progress:
- [ ] 1 session append (--session yours) appended the skeleton(s)
- [ ] 2 every placeholder filled; Notes say what was verified and how
- [ ] 3 everything the change made stale updated, citing the sha (the plan's ticks first)
- [ ] 4 Narrative updated
- [ ] 5 gate green (bare command, exit read), then named-file stage + docs(session) commit
```

1. `session append --session SES-NNN` — one skeleton per commit not yet accounted for (`Summary` /
   `Why` placeholders, one line per touched file with +/− counts — every file, a rename as two
   lines, none trimmed; `session current --session SES-NNN` lists them by line). A skeleton for a
   commit you did not make is a finding: fill what `git show <sha>` supports and say in Notes it
   was not verified, or ask. **The log holds value only:** a fix-up's skeleton is deleted and its
   parent entry gets `- Also: <sha> — <what it fixed>` under `Why`; a commit with nothing to
   record carries the trailer `Session-entry: none` (write it yourself on such commits). The table
   is in `references/session-log.md`.
2. Fill every placeholder. ALWAYS use this exact entry structure (the tool wrote the headings and
   the file lines; you write what follows each dash):

   ```markdown
   ### YYYY-MM-DD · type(scope): subject · sha

   - Summary: [what the change does as a whole, one or two lines]
   - Why: [the problem or request behind it, naming who asked]
   - Also: [sha] — [what that fix-up fixed]            (only when a fix-up is vouched for)
   - Files:
     - `path/to/file` (+a/−d) — [what changed in this file]
   - Notes: [verified how; unverified what; follow-ups; a decision made on the spot]
   ```

   Write the phrases like these — every claim verified yourself (driver, test, byte comparison)
   before it is written:

   **Example 1:** Input: a Files line `(+19/−0) — _(fill in)_` for `set-favorites.swift`
   Output:
   ```markdown
   - `src/items/finder/assets/set-favorites.swift` (+19/−0) — re-synced with the embedded
     SET_FAVORITES_SWIFT constant: gains the `list` mode (verified byte-identical by the driver)
   ```

   **Example 2:** Input: the commit `fix(picker): keep the cursor on the item after a rescan`
   Output:
   ```markdown
   - Summary: the picker keeps its cursor on the same item across a rescan instead of jumping
     to the top; the rescan now diffs by item id
   - Why: Peter lost his place every time the picker refreshed (SES-003 request)
   ```

   **Example 3:** Input: a `Notes:` placeholder on a commit whose test suite ran but whose PTY path did not
   Output:
   ```markdown
   - Notes: `bun test` 111 pass; the PTY path is unverified — the expect harness was not run
   ```

   "updated" or "changes" is not a phrase.
3. Same step, citing the sha: tick the plan part's tasks (`- [x] … — <sha>`; its status line stays
   `in progress`); OVERVIEW **Status** / **Next up**; a decision → an ADR (`documentation-and-adrs`
   if installed, else the decisions README template); a changed requirement → the PRD; a finding →
   an analysis; a new or sharpened term → `CONTEXT.md` (`domain-modeling` if installed); a
   directory convention → its `CLAUDE.md`; any doc the commit made false (grep the old claim); the
   README index for a new doc.
4. Narrative: what the entry cannot hold — the request, a dead end, a false lead, a verification.
5. Gate and commit, three commands in this order, each on its own:

   ```bash
   session check --session SES-NNN               # prints: session: complete (SES-NNN, open)
   git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md <other docs you touched>
   git commit -m "docs(session): <what the entry records>"
   ```

   `NOT ready` names what is missing or unfilled: fill it, run the gate again, stage only when it
   prints `complete`.

**Done when** the gate printed `session: complete` for your session, the `docs(session)` commit
exists, no placeholder is left in your file, and every stale doc is updated or named in
`Open at end`.

## end

Leaving: the conversation stops, the session stays open for the next one.

```text
End progress:
- [ ] 1 log complete for your session (append → up to date; check → complete)
- [ ] 2 Open at end = the handoff: what to pick up first, what is unverified; Narrative whole
- [ ] 3 OVERVIEW Status / Next up match reality; top of Next up = first thing next time
- [ ] 4 handoff committed: docs(session): handoff SES-NNN
- [ ] 5 tree clean on main, or every departure named
- [ ] 6 closing note posted
```

1. `session append --session SES-NNN` (expect `up to date`), then the gate (expect
   `session: complete (SES-NNN, open)`).
2. `Open at end` = what the next conversation picks up first and what is unverified; the Narrative
   whole; every entry's `Notes` says what was verified. `Outcome` stays its placeholder; the plan
   part stays `in progress (session SES-NNN)` — the pointer `continue` follows.
3. OVERVIEW Status (released / unreleased on `main` / parked, with branch names) and Next up match
   reality and cite shas; the top of Next up is the next conversation's first move.
4. `git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md docs/OVERVIEW.md` →
   `git commit -m "docs(session): handoff SES-NNN"`.
5. The tree:

   ```bash
   git status --short             # nothing uncommitted; WIP lives on a named branch cited in Status
   git branch --show-current      # main, after the last PR merged
   gh pr list --state open        # none dangling, or each named in Open at end (no GitHub origin: say so)
   ```

6. The closing note. ALWAYS use this exact template, at most ~60 words:

   ```text
   Shipped: [what landed this conversation — PRs/commits, one line]
   Next time: [the first thing to do, one line]  (SES-NNN stays open)
   ```

**Done when** the gate is green, the handoff commit exists, the tree is clean on `main` (or every
departure is named in `Open at end` and in Status), and the closing note is posted in that shape.

## close

The Goal is done: everything `end` checks, plus the Outcome and the plan; then the status flips.

```text
Close progress:
- [ ] 1 end's steps 1–3 done
- [ ] 2 Outcome written as the stream actually ended; Open at end = what it leaves behind
- [ ] 3 the plan part → done (session SES-NNN, sha); the plan's own status when every part is; PRD Plans row
- [ ] 4 session close --session SES-NNN printed: session: closed SES-NNN
- [ ] 5 docs(session) commit; tree clean (end step 5); closing note posted
```

1. `end` steps 1–3.
2. `Outcome` = what the session delivered (releases, merged PRs, what was verified);
   `Open at end` = what it leaves for a later session, or "nothing".
3. The plan on the session's `Plan:` line: the part's status line →
   `done (session SES-NNN, <sha of the entry that finished it>)`, remaining ticks cite entry shas;
   every part done → the plan's top status `done — shipped in vX.Y.Z (session SES-NNN)` and the
   PRD's **Plans** row say the same; OVERVIEW Status names the session as closed.
4. `session close --session SES-NNN` — the gate again, now counting `Outcome` and `Open at end`;
   prints `session: closed SES-NNN` (a `— still open: …` suffix names other conversations'
   sessions). Then `git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md
   docs/OVERVIEW.md docs/plan/PLAN-NNN-<feature>.md docs/plan/PRD-NNN-<product>.md`, commit
   `docs(session): close SES-NNN`, and run `end` step 5.
5. The closing note as in `end`, with `(SES-NNN closed)` on the second line.

**Done when** the tool printed `session: closed SES-NNN`, the `docs(session)` commit exists, the
tree is clean, and the plan part, the plan and OVERVIEW say the same thing as the Outcome.
