---
name: session
argument-hint: "start <description> [--plan \"PLAN-NNN · part N\"] | log [SES-NNN] | close SES-NNN"
allowed-tools: Bash(git status:*), Bash(git branch:*), Bash(git show:*), Bash(git log:*), Bash(gh pr list:*), Bash(bun "${CLAUDE_SKILL_DIR}/scripts/cli.ts" *)
license: MIT
compatibility: "Claude Code (the injected state lines and the plugin-root anchor do nothing elsewhere). Needs Bun on PATH and git."
description: "Keeps a repo's session log — the record of every commit that reached `main` and the story around it — through three acts: `start` creates a session from a description and marks its plan part in progress; `log` appends and fills a commit's entry, ticks the plan, updates what the change made stale and commits it as docs(session); `close` writes the Outcome and marks the session and its plan part done. The act is inferred from the arguments (`SES-NNN` and a landed commit → log; a description → start); `close` is always named. Use right after a commit in a repo with docs/sessions, when a plan part's work begins, and when a stream of work is finished — \"record that commit\", \"log this\", \"the append says up to date\", \"the gate says NOT ready\", \"a skeleton for a commit I didn't make\", \"close SES-004\", \"start a session for the finder fix\". Not for finding where a plan stands or what to work on next (`/plan PLAN-NNN`), for authoring an ADR, a PRD or CONTEXT.md, or for a changelog of recent commits."
---

# Session — start · log · close

A **session** is a stream of work toward one Goal, `in progress` until `done`; it usually serves
one **part** of a plan, and that part's status line names it. This skill keeps the record only,
through three acts: **start** creates a session from a description, **log** records a commit into
one, **close** finishes one. A conversation that stops does nothing — the session stays
`in progress`. Where a plan stands and what comes next is `/plan PLAN-NNN`'s to say; the
`SES-NNN` it hands over is the session every `log` here writes into. The words — session, entry,
gate, plan part, the acts — are defined once, in the repo's `CONTEXT.md` § The session log; use
them in entries, commits and replies.

## Workflow

1. Determine the act from the arguments — **$ARGUMENTS**. An act word wins when present; otherwise
   the shape of the arguments decides, and `close` is never inferred:

   **`start <description> [--plan "PLAN-NNN · part N"]`, or a description and no `SES-NNN`?** → Follow "start" below
   **`log [SES-NNN]`, or `SES-NNN` alone, or nothing — and the Sessions line shows `unrecorded:`?** → Follow "log" below
   **`close SES-NNN`, or `close` alone?** → Follow "close" below
   **Nothing, and no `unrecorded:` line?** → Reply `up to date` — the entire reply

   **Example 1:** Input: `the finder favourites fix --plan "PLAN-003 · part 2"` → Output: start, the Goal drawn from the description and the part
   **Example 2:** Input: `SES-004`, and the Sessions line shows `unrecorded: 9c1d2e3 fix(finder): …` → Output: log, `--session SES-004`
   **Example 3:** Input: `close` → Output: close, asking which session `in progress` (never inferred, never guessed)

2. Run that act to its **Done when** line. Each act opens with a progress list: copy it into the
   reply and tick it as you go.

The tool is one exact command, always written this way — quoted path, then the subcommand — and
`session <subcommand>` below:

```bash
bun "${CLAUDE_SKILL_DIR}/scripts/cli.ts" <help | init | template | list | new | append | current | check | close> …
```

`session help` prints every subcommand with its output; `session template <name>` prints any document
`init` writes. It finds the repo itself (`CLAUDE_PROJECT_DIR`, else the git toplevel). Every refusal
is one `session: …` line that says what to do.

Injected state (the harness ran these at load; findings, not commands to re-run):

- Branch: !`git branch --show-current`
- Tree: !`git status --short`
- Sessions: !`bun "${CLAUDE_SKILL_DIR}/scripts/cli.ts" list --brief`

## Gotchas

- **The three lines above arrive as output on every path** — typed, aliased, or model-invoked. A
  marker is recognised only at line start or after a space; wrapped in a code span it is inert,
  which is why an earlier version of this skill never rendered. If the lines show markers, or
  `[shell command execution disabled by policy]`, run the three commands once yourself and treat
  the output as the injected state.
- **A Sessions line that says `no session log at …`** means no docs system yet: run
  `session init` (writes `docs/sessions/README.md` and the session-log section of `CONTEXT.md`;
  keeps any file that exists; `docs/plan/` is the plan skill's to create), commit that, continue.
- **No sampling.** Every file a step names is read to its last line (continue with `offset`).
- **Your session is the one named, never "the newest".** `/plan` hands over the `SES-NNN` of the
  part in progress, or the user names one; with neither, the tool takes the single session
  `in progress` and refuses between several — then ask which. Every `append`, `check` and `close`
  carries `--session SES-NNN`. Placeholders in any other session are that conversation's: the gate
  reports them as warnings; leave that file untouched. A done session takes nothing; reopening one
  is § What is never rewritten.
- **The gate's exit status is the gate.** Run `session check --session SES-NNN` bare and read its
  exit; pipe it through nothing (a `| tail` once hid a failure and a PR merged with an unfilled
  entry). Stage by named file; `git add -A` once swept in a stray file.
- **Merge PRs with merge commits.** A squash replaces every sha the entries cite with one new
  commit, which the gate then reports as `missing:`. A merge of another repository's history
  (`--allow-unrelated-histories`) accounts for every commit it brought in — that repository's own
  log, archived under `docs/sessions/archive/`, is their record; the tool reads it, never lists it.
- **`docs(session): …` commits are skipped by the tool** — the entry-writing commit needs no entry.
- **The gate counts entries, the Goal and the Narrative; `Outcome` only at `close`.** A session
  in progress carries it as a placeholder; do not invent an Outcome early.
- **`new` starts a session for a stream of work, not for a conversation.** One session per plan
  part; a conversation continuing that part logs into it with `--session`.
- **A release marker lands only when the release commit's entry is appended.** Tag first, then
  `session append`; if the entry already exists, add `> **Released vX.Y.Z** — tag on this commit.`
  under it by hand. Readers use the last marker as the boundary: everything after it is unreleased.

## The plan part's status line

Each `### Part N` heading in a plan carries one blockquote line under it. It is the pointer `/plan`
follows from the plan to the session that holds the part's story, so its form is exact:

| Status | Written by | Meaning |
| --- | --- | --- |
| `> Status: planned` | the plan's author | no session serves it yet; `start … --plan "PLAN-NNN · part N"` creates one |
| `> Status: in progress (session SES-NNN)` | `start` | the session every `log` on this part writes into, across every conversation until the part is done |
| `> Status: done (session SES-NNN, <sha>)` | `close` | finished; the sha is the entry that finished it, so the line is never self-referential |

The plan's own top status and the PRD's Plans row change only when every part is done. Progress
is read from the entries: a plan's task ticks cite the entry sha that did them, and nothing else
about progress is written into the plan.

## start

From a description and, for planned work, `--plan "PLAN-NNN · part N"`.

```text
Start progress:
- [ ] 1 slug, title and Goal derived from the description; the named part read
- [ ] 2 what the description cannot supply asked; the rest filled
- [ ] 3 session new run; title, Goal and the opening Narrative written
- [ ] 4 the part's status line → in progress (session SES-NNN)
- [ ] 5 the one-line reply posted
```

1. From the description: the slug (the work ahead, kebab-case), the title, and the Goal (what this
   stream of work sets out to deliver, one or two lines). With `--plan`, read that part only —
   `docs/plan/PLAN-NNN-*.md` from its `### Part N` heading to the next part's: its status line and
   its tasks are the Goal's material. The rest of the plan is `/plan`'s walk, not this act's.
2. Ask only for what the description cannot supply — a bare noun ("the finder fix") names no
   Goal — with the `ask-user-question` skill: one question, its options drawn from the part or the
   repo. Everything else you fill yourself.
3. `session new <slug> [--plan "PLAN-NNN · part N"]` prints `started SES-NNN-<slug>.md`. In that
   file write the H1 title, the Goal line, and the Narrative's first lines — what was asked, by
   whom. On unplanned work `note: also in progress — SES-…` is a question: is this a separate
   stream, or that session's own work? The latter → `log` into it and start nothing.
4. The part's status line, ALWAYS this exact form: `> Status: in progress (session SES-NNN)`.
   Unplanned work has no part to mark; its `Plan:` line is `—`.
5. Reply one line — the entire reply:

   ```text
   started SES-NNN — [the Goal, one clause] — [PLAN-NNN · part N | unplanned]
   ```

**Done when** the file exists with its title, Goal and opening Narrative, the part's status line
names it (or the work is unplanned), and the one line is the entire reply. The file and the plan
edit travel with the first `log`'s `docs(session)` commit.

## log

Right after every commit — cheapest while the change is in front of you. `SES-NNN` is the session
`/plan` handed over or the user named; with none, the tool takes the single session `in progress`
and refuses between several — then ask which (the `ask-user-question` skill) and pass it.

```text
Log progress:
- [ ] 1 session append (--session yours) appended the skeleton(s)
- [ ] 2 every placeholder filled; Notes say what was verified and how
- [ ] 3 everything the change made stale updated, citing the sha (the plan's ticks first)
- [ ] 4 Narrative updated
- [ ] 5 gate green (bare command, exit read), then named-file stage + docs(session) commit
```

1. `session append --session SES-NNN`. One skeleton per commit not yet accounted for (`Summary` /
   `Why` placeholders, one line per touched file with +/− counts — every file, a rename as two
   lines, none trimmed; `session current --session SES-NNN` lists them by line). A skeleton for a
   commit you did not make is a finding: fill what `git show <sha>` supports and say in Notes it
   was not verified, or ask. **The log holds value only** — decide at commit time which of these a
   commit is:

   | The commit is | What you write | What the tool does |
   | --- | --- | --- |
   | a change worth reading about | its entry (step 2) | appends the skeleton |
   | a fix-up of an earlier entry's commit | `- Also: <sha> — <what it fixed>` under that entry's `Why`; delete the skeleton | the parent entry vouches for the sha |
   | worth nothing to a reader on its own | the trailer `Session-entry: none` in its message (`git commit -m "style: reformat" -m "Session-entry: none"`) | never appends a skeleton |
   | `docs(session): …` — a log update itself | nothing | skipped outright |

   A valueless commit already pushed without the trailer is vouched for by its nearest parent
   entry with an `Also:` line.
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

   Every claim verified yourself (driver, test, byte comparison) before it is written; "updated"
   or "changes" is not a phrase. A Files line says what changed *in that file*; Summary and Why
   give the whole change, then the cause:

   **Example 1:** Input: `` - `src/items/finder/assets/set-favorites.swift` (+19/−0) — _(fill in)_ `` → Output: `` — re-synced with the embedded SET_FAVORITES_SWIFT constant: gains the `list` mode and the LSSharedFileListItemCopyResolvedURL binding (verified byte-identical by the driver) ``
   **Example 2:** Input: the commit `fix(picker): keep the cursor on the item after a rescan` → Output: `- Summary: the picker keeps its cursor on the same item across a rescan instead of jumping to the top; the rescan now diffs by item id` / `- Why: Peter lost his place every time the picker refreshed (SES-003 request)`

   `git show <sha>` is for a later reader who needs the exact diff; the entry is for the reader
   who does not.
3. Same step, citing the sha: tick the plan part's tasks (`- [x] … — <sha>`; its status line stays
   `in progress`); OVERVIEW **Status** / **Next up** where the repo has one; a decision → an ADR
   (`documentation-and-adrs` if installed, else the decisions README template); a changed
   requirement → the PRD; a finding → an analysis; a new or sharpened term → `CONTEXT.md`
   (`domain-modeling` if installed); a directory convention → its `CLAUDE.md`; any doc the commit
   made false (grep the old claim); the README index for a new doc.
4. Narrative: what the entry cannot hold — the request as it was made, a decision and the
   alternative it rejected, a dead end, a false lead, what was verified and how. Written as things
   happen, citing entries by sha, not as a summary at the end.
5. Gate and commit, three commands in this order, each on its own:

   ```bash
   session check --session SES-NNN               # prints: session: complete (SES-NNN, in progress)
   git add docs/sessions/SES-NNN-<slug>.md docs/sessions/README.md <other docs you touched>
   git commit -m "docs(session): <what the entry records>"
   ```

   `NOT ready` names what is missing or unfilled: fill it, run the gate again, stage only when it
   prints `complete`.

**Done when** the gate printed `session: complete` for your session, the `docs(session)` commit
exists, no placeholder is left in your file, and every stale doc is updated or named as a
follow-up in the entry's Notes.

## close

Always named. `SES-NNN` is required: with none, the injected Sessions line names the sessions
`in progress` — ask which with the `ask-user-question` skill, one option per session with its
Goal; none in progress → say so and stop.

```text
Close progress:
- [ ] 1 append → up to date; gate → complete
- [ ] 2 Outcome written from the log and this transcript
- [ ] 3 the plan part → done (session SES-NNN, sha); the plan's own status and the PRD row when every part is; OVERVIEW Status
- [ ] 4 session close printed: session: closed SES-NNN — done
- [ ] 5 named-file stage; docs(session): close SES-NNN; the one-line reply posted
```

1. `session append --session SES-NNN` (expect `session: up to date` — a skeleton instead means a
   commit is unrecorded: run `log` first), then `session check --session SES-NNN` (expect
   `session: complete`).
2. `Outcome` = what the session delivered (releases, merged PRs, what was verified) — only work
   the log or this transcript shows. Work the user reports is recorded with them as its source
   ("Peter reports the ADR pass found nothing; not verified here").
3. The plan on the session's `Plan:` line: the part's status line →
   `done (session SES-NNN, <sha of the entry that finished it>)`, remaining ticks cite entry shas;
   every part done → the plan's top status `done — shipped in vX.Y.Z (session SES-NNN)` and the
   PRD's **Plans** row say the same; `docs/OVERVIEW.md` Status, where the repo has one, names the
   session as done. Unplanned work has nothing to mark.
4. `session close --session SES-NNN` — the gate again, now counting `Outcome`; prints
   `session: closed SES-NNN — done` (a `still in progress: …` suffix names other sessions).
5. `git add` your session file, the index and every plan or PRD step 3 touched — by name, never
   `-A`; `git commit -m "docs(session): close SES-NNN"`. Reply one line — the entire reply:

   ```text
   closed SES-NNN — done — [the Outcome, one clause]
   ```

**A step that cannot be satisfied stops the close** — the gate stays red after the entries are
filled, a task the part names is visibly unfinished, the log contradicts what you were told. Say
which step stopped and what would satisfy it; the session stays `in progress` and nothing is
rewritten. Where the answer is the user's to give, ask with the `ask-user-question` skill.

**Done when** the tool printed `session: closed SES-NNN — done`, the `docs(session): close` commit
exists, the plan part and the PRD say the same thing as the Outcome, and the one line is the
entire reply.

## What is never rewritten

- **Old entries and old sessions.** A mistake is corrected with a new entry or a dated note, never
  by editing history; `git show <sha>` must keep agreeing with the record.
- **Another conversation's session.** Its placeholders are that conversation's to fill; the gate
  reports them as warnings and you leave the file alone, whatever its title says.
- **A done session's Changes.** Nothing is appended to it. Reopening one means editing its
  `Status:` line back to `in progress` with a dated note in the Narrative saying why — a rare,
  deliberate act.
- **Merge history.** PRs are merged with merge commits, not squashed, so every sha an entry cites
  stays valid.
