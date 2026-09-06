---
package: matt
path: skills/engineering/resolving-merge-conflicts/SKILL.md
type: skill
bytes: 918
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/SKILL.md

## Purpose — required, verbatim
> "Use when you need to resolve an in-progress git merge/rebase conflict." — skills/engineering/resolving-merge-conflicts/SKILL.md:3

## Design intent — required
Establishes an intentional 5-step engineering discipline for resolving in-flight git merge or rebase conflicts without aborting or losing intent. Instructs the agent to inspect git state, trace each side of a conflict back to its primary sources (commit messages, PRs, original tickets) to uncover intent, resolve hunks to preserve both intents without inventing unrequested behavior, discover and run automated project checks (typecheck, tests, format), and conclude by staging and committing all files or advancing the rebase process.

## Phase — required
matt:Build

## Inputs — required
Current git repository merge/rebase state, conflicting files, commit history, commit messages, pull requests, and original issues/tickets.

## Outputs — required
Resolved conflict hunks, staged and committed files, finished merge or completed rebase sequence.

## Invokes — required
none

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:79
- doc README.md — README.md:213
- doc skills/engineering/README.md — skills/engineering/README.md:31

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — skills/engineering/resolving-merge-conflicts/SKILL.md:2 — defined here
- `merge/rebase` — skills/engineering/resolving-merge-conflicts/SKILL.md:6 — used here
- `primary sources` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `automated checks` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `typecheck` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `tests` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `format` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `--abort` — skills/engineering/resolving-merge-conflicts/SKILL.md:10 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
A thin-margin discipline skill designed to counteract common agent failure modes: blind textual resolution (`--ours`/`--theirs`) and skipping verification passes. Standalone and decoupled from the linear lifecycle flow.

## Context cost
918 bytes, 15 lines, approximately 200 tokens.
