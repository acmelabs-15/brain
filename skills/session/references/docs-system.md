# The docs system the session log lives in

What the record is made of and the rules that keep it readable: how a plan points at the session serving each of its parts, what a session file holds, what an entry is and when a commit gets none, and what is never rewritten. Read this when you are about to write into one of these files and the procedure in SKILL.md names a shape you have not seen — the status line of a plan part, the entry of a commit, the `Also:` line of a fix-up.

## Table of Contents

- [One walk: PRD → plan → part → session](#one-walk-prd--plan--part--session)
- [The plan part's status line](#the-plan-parts-status-line)
- [The session file](#the-session-file)
- [The entry](#the-entry)
- [Which commits get no entry](#which-commits-get-no-entry)
- [Release markers](#release-markers)
- [The Narrative and the handoff](#the-narrative-and-the-handoff)
- [What is never rewritten](#what-is-never-rewritten)
- [The words](#the-words)

---

## One walk: PRD → plan → part → session

A new conversation has nothing but the repo, and "work on PLAN-003" has to be enough. Four documents point at each other so that it is:

```text
docs/plan/PRD-NNN-<product>.md     ## Plans table — every plan implementing it, with its status
  └─ docs/plan/PLAN-NNN-<feature>.md   > Status line for the plan as a whole
       └─ ### Part N: <title>          > Status: planned | in progress (session SES-NNN) | done (session SES-NNN, sha)
            └─ docs/sessions/SES-NNN-<slug>.md   - Plan: PLAN-NNN · part N   (points back)
```

The plan says where the work stands and which session holds the story of each part; the session says what was done, why, and what is next. Progress is read from the session's entries, not tracked twice: a plan's task ticks cite the entry sha that did them, and nothing else about progress is written into the plan.

**One session per part.** A part is the unit a session serves; a second conversation on the same part joins that part's session rather than opening another. A session may outlive many conversations and stays open until its Goal is done.

Unplanned work — a fix, a chore, a question that turned into a change — opens a session with `Plan: —`. It still gets entries; it simply has no part pointing at it.

---

## The plan part's status line

Each `### Part N` heading in a plan carries one blockquote line directly under it:

```markdown
### Part 2: The tool finds the repo on its own

> Status: in progress (session SES-006)
```

| Status | Written by | Meaning |
| --- | --- | --- |
| `planned` | the plan's author | no session serves it yet; `/session start PLAN-NNN` on this part opens one |
| `in progress (session SES-NNN)` | `/session start` when it opens the session | SES-NNN is the session to join for this part; stays this way across every conversation until the part is done |
| `done (session SES-NNN, <sha>)` | `/session close` | finished; the sha is the entry that finished it |

The plan's own top status (`> Status: planned | in progress | done — shipped in vX.Y.Z (session SES-NNN)`) changes only when every part is done, and the PRD's `## Plans` row says the same thing as the plan's top status.

---

## The session file

`docs/sessions/SES-NNN-<slug>.md`, created by `session new <slug> [--plan "PLAN-NNN · part N"]` from the template the tool carries (the same template is shown in `docs/sessions/README.md` for people):

```markdown
# YYYY-MM-DD HH:MM · Title of the session

- Goal: what this session set out to do
- Status: open | closed
- Plan: PLAN-NNN · part N, or —
- Outcome: what it actually delivered (releases, merged PRs) — written when it closes
- Open at end: the handoff — what the next conversation picks up first, what is unverified

## Narrative

What was asked, decided, tried and abandoned, verified (and how); cite entries by sha.

## Changes (one entry per commit, in order)
```

- The H1 records when the session opened and is required — the tool refuses a file without it.
- `SES-NNN` orders sessions; the number never changes.
- `Status: open` until `session close` writes `closed`. A file without the line (written before the line existed, or another conversation's) reads as open.
- `Outcome` and `Open at end` keep their `_(fill in)_` placeholders while the session is open — the gate does not count them; `close` does.

---

## The entry

One block per commit worth reading about, appended by `session append` and filled by the conversation that made the commit:

```markdown
### YYYY-MM-DD · type(scope): subject · sha

- Summary: one or two lines — what this change does as a whole
- Why: one line — the problem or request that caused it (name who asked)
- Also: <sha> — a fix-up this entry vouches for (optional; one line per fix-up; it gets no entry)
- Files:
  - `src/thing.ts` (+12/−3) — what changed in this file
  - `docs/OVERVIEW.md` (+4/−1) — what changed in this file
- Notes: optional — gotchas, follow-ups, what was verified and how
```

`Files` lists **every** file the commit touched, whatever kind — source, tests, docs, config, CI, scripts, assets — with the +/− counts git reports; the tool writes the list and it is never trimmed by hand. What the conversation writes is the phrase after the dash, and it says what changed *in that file*:

```text
Input:  - `src/items/finder/assets/set-favorites.swift` (+19/−0) — _(fill in)_
Output: - `src/items/finder/assets/set-favorites.swift` (+19/−0) — re-synced with the embedded
          SET_FAVORITES_SWIFT constant: gains the `list` mode and the
          LSSharedFileListItemCopyResolvedURL binding (verified byte-identical by the driver)
```

"updated" or "changes" is not a phrase. `Summary` is the change as a whole, `Why` the problem or request behind it, `Notes` what was verified and how, what is unverified, a follow-up, a decision made on the spot. `git show <sha>` is for a later reader who needs the exact diff; the entry is for the reader who does not.

---

## Which commits get no entry

The session log holds value only. A commit that adds nothing a reader would want — a fix-up to the previous commit, a formatting pass, a fixture, a version bump — gets **no entry**, and the gate reads two ways of saying so:

| The commit is | What you write | What the tool does |
| --- | --- | --- |
| a fix-up of an earlier entry's commit | `- Also: <sha> — <what it fixed>` under that entry's `Why`; delete the skeleton the tool appended | the parent entry vouches for the sha; `check` stops reporting it missing |
| worth nothing to a reader on its own | the trailer `Session-entry: none` in the commit message, at commit time (`git commit -m "style: reformat" -m "Session-entry: none"`) | never appends a skeleton for it |
| `docs(session): …` — a log update itself | nothing | skipped outright, so the entry-writing commit never chases its own sha |

Decide at commit time. A valueless commit already pushed without the trailer is vouched for by its nearest parent entry with an `Also:` line.

---

## Release markers

A release commit (`chore(release): vX.Y.Z` plus its tag) gets one line after its entry:

```markdown
> **Released vX.Y.Z** — tag on this commit.
```

The tool inserts it only when it appends that entry and the tag already exists — so tag first, then `session append`. If the entry was appended before the tag, add the line by hand. Readers use the last marker as the boundary: everything after it is unreleased.

---

## The Narrative and the handoff

The Narrative holds what an entry cannot: the request as it was made, a decision and the alternative it rejected, a dead end, a false lead, what was verified and how. Write it as things happen, citing entries by sha, not as a summary at the end.

`Open at end` is the handoff — what the next conversation picks up first and what is unverified — written by `/session end` when a conversation leaves the session open, and rewritten by `/session close` as what the finished session leaves behind (or "nothing"). `Outcome` is written only at close: what the session delivered, the releases and merged PRs, what was verified.

---

## What is never rewritten

- **Old entries and old sessions.** A mistake is corrected with a new entry or a dated note, never by editing history; `git show <sha>` must keep agreeing with the record.
- **Another conversation's session.** Its placeholders are that conversation's to fill; the gate reports them as warnings and you leave the file alone, whatever its title says.
- **A closed session's Changes.** Nothing is appended to it. Reopening one means editing its `Status:` line back to `open` with a dated note in the Narrative saying why — a rare, deliberate act.
- **Merge history.** PRs are merged with merge commits, not squashed, so every sha an entry cites stays valid.

---

## The words

The repo's `CONTEXT.md` carries the glossary section `init` writes (**Session log**, **Session**, **Conversation**, **Open / Closed**, **Join / Open / Leave / Close**, **Plan part**, **Handoff**, **Gate**, **Entry**, **Record**), each with the synonyms to avoid. Use those words in entries, commits, docs and replies; a term that needs sharpening goes into `CONTEXT.md` in the same step as the entry that needed it.
