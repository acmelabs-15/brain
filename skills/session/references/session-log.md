# The session log — the rules of the record

What the record is made of and the rules that keep it readable: how a plan points at the session serving each of its parts, what a session file and an entry hold, which commits get no entry, and what is never rewritten. Read this when a step in SKILL.md names a shape or a rule you have not seen. The documents themselves are not quoted here: `session template session | sessions-readme | plan-readme | context` prints each one, and that output is what `init` and `new` write.

## Table of Contents

- [One walk: PRD → plan → part → session](#one-walk-prd--plan--part--session)
- [The plan part's status line](#the-plan-parts-status-line)
- [The session file](#the-session-file)
- [The entry](#the-entry)
- [Which commits get no entry](#which-commits-get-no-entry)
- [What the gate counts](#what-the-gate-counts)
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

Each `### Part N` heading in a plan carries one blockquote line under it, after a blank line:

| Status | Written by | Meaning |
| --- | --- | --- |
| `> Status: planned` | the plan's author | no session serves it yet; `start` or `continue` on this part opens one |
| `> Status: in progress (session SES-NNN)` | the skill, when it opens the part's session | SES-NNN is the session to join for this part; stays this way across every conversation until the part is done |
| `> Status: done (session SES-NNN, <sha>)` | `close` | finished; the sha is the entry that finished it, so the line is never self-referential |

The plan's own top status (`> Status: planned | in progress | done — shipped in vX.Y.Z (session SES-NNN)`) changes only when every part is done, and the PRD's `## Plans` row says the same thing as the plan's top status.

---

## The session file

`docs/sessions/SES-NNN-<slug>.md`, created by `session new <slug> [--plan "PLAN-NNN · part N"]`. Its header lines are read by the tool:

- The H1 `# YYYY-MM-DD HH:MM · Title` records when the session opened and is required — the tool refuses a file without it.
- `SES-NNN` orders sessions; the number never changes.
- `- Status: open` until `session close` writes `closed`. A file without the line (written before the line existed, or another conversation's) reads as open.
- `- Plan: PLAN-NNN · part N`, or `—` for unplanned work; `session list --plan PLAN-NNN` matches on it.
- `- Outcome:` and `- Open at end:` keep their `_(fill in)_` placeholders while the session is open — the gate does not count them; `close` does.
- `## Narrative` and `## Changes (one entry per commit, in order)` follow; the entries are appended under Changes.

---

## The entry

One block per commit worth reading about, appended by `session append` under a heading `### YYYY-MM-DD · type(scope): subject · sha`, and filled by the conversation that made the commit:

- `Summary` — the change as a whole, one or two lines.
- `Why` — the problem or request behind it, naming who asked.
- `Also: <sha> — <what it fixed>` — optional, one line per fix-up commit this entry vouches for (below).
- `Files` — **every** file the commit touched, whatever kind, with the +/− counts git reports; the tool writes the list and it is never trimmed by hand. The conversation writes the phrase after the dash, and it says what changed *in that file*:

  ```text
  Input:  - `src/items/finder/assets/set-favorites.swift` (+19/−0) — _(fill in)_
  Output: - `src/items/finder/assets/set-favorites.swift` (+19/−0) — re-synced with the embedded
            SET_FAVORITES_SWIFT constant: gains the `list` mode and the
            LSSharedFileListItemCopyResolvedURL binding (verified byte-identical by the driver)
  ```

  "updated" or "changes" is not a phrase.
- `Notes` — optional: what was verified and how, what is unverified, a follow-up, a decision made on the spot.

`git show <sha>` is for a later reader who needs the exact diff; the entry is for the reader who does not.

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

## What the gate counts

`session check` (and `close`, which runs it first) is green only when both hold:

- **Every commit on the current branch is accounted for** — by an entry heading carrying its sha, by a parent entry's `Also:` line, by the `Session-entry: none` trailer, or by a `docs(session)` subject. Merges are excluded, and a rename shows as a delete plus an add. Anything else prints `missing: <sha> <subject>`.
- **Your session has no placeholder the gate counts** — `_(fill in)_` on an entry line, the Goal, or the Narrative. `Outcome` and `Open at end` are counted only by `close`. Placeholders in any other session print as warnings and are that conversation's to fill.

Which session is "yours": `--session SES-NNN` (or the number, or the file name); with no flag, the single open session; none or several open is a refusal that says what to do.

---

## Release markers

A release commit (`chore(release): vX.Y.Z` plus its tag) gets one line after its entry: `> **Released vX.Y.Z** — tag on this commit.` The tool inserts it only when it appends that entry and the tag already exists — so tag first, then `session append`. If the entry was appended before the tag, add the line by hand. Readers use the last marker as the boundary: everything after it is unreleased.

---

## The Narrative and the handoff

The Narrative holds what an entry cannot: the request as it was made, a decision and the alternative it rejected, a dead end, a false lead, what was verified and how. Write it as things happen, citing entries by sha, not as a summary at the end.

`Open at end` is the handoff — what the next conversation picks up first and what is unverified — written by `end` when a conversation leaves the session open, and rewritten by `close` as what the finished session leaves behind (or "nothing"). `Outcome` is written only at `close`: what the session delivered, the releases and merged PRs, what was verified.

---

## What is never rewritten

- **Old entries and old sessions.** A mistake is corrected with a new entry or a dated note, never by editing history; `git show <sha>` must keep agreeing with the record.
- **Another conversation's session.** Its placeholders are that conversation's to fill; the gate reports them as warnings and you leave the file alone, whatever its title says.
- **A closed session's Changes.** Nothing is appended to it. Reopening one means editing its `Status:` line back to `open` with a dated note in the Narrative saying why — a rare, deliberate act.
- **Merge history.** PRs are merged with merge commits, not squashed, so every sha an entry cites stays valid.

---

## The words

The repo's `CONTEXT.md` carries the glossary section `init` writes (`session template context` prints it): **Session log**, **Session**, **Conversation**, **Open / Closed**, **Join / Open / Leave / Close**, **Plan part**, **Handoff**, **Gate**, **Entry**, **Record**, each with the synonyms to avoid. Use those words in entries, commits, docs and replies; a term that needs sharpening goes into `CONTEXT.md` in the same step as the entry that needed it.
