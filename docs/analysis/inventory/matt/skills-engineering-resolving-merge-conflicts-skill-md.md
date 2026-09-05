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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/SKILL.md

## Purpose — required, verbatim
> "Use when you need to resolve an in-progress git merge/rebase conflict." — skills/engineering/resolving-merge-conflicts/SKILL.md:3

## Design intent — required
Guides an agent through a disciplined 5-step procedure for resolving an in-progress git merge or rebase conflict hunk by hunk. Enforces finding primary sources (commits, PRs, issues/tickets) to deeply understand the original intent of both sides, preserving both intents where possible, strictly forbidding invented behavior, running project automated checks (typecheck, tests, format), and forbidding aborts (`never --abort`).

## Phase — required
none

## Inputs — required
In-progress git merge or rebase conflict; conflicting files; git history; commit messages; pull requests; issues/tickets.

## Outputs — required
Resolved conflict hunks staged and committed; rebase continuation until completion.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:213
- doc skills/engineering/README.md — skills/engineering/README.md:31
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:79

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — skills/engineering/resolving-merge-conflicts/SKILL.md:2 — defined here
- `git merge/rebase conflict` — skills/engineering/resolving-merge-conflicts/SKILL.md:3 — used here
- `git history` — skills/engineering/resolving-merge-conflicts/SKILL.md:6 — used here
- `primary sources` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `commit messages` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `PRs` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `tickets` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `--abort` — skills/engineering/resolving-merge-conflicts/SKILL.md:10 — used here
- `automated checks` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `typecheck` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `tests` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here
- `format` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — used here

## Structure
- See the current state — skills/engineering/resolving-merge-conflicts/SKILL.md:6
- Find the primary sources — skills/engineering/resolving-merge-conflicts/SKILL.md:8
- Resolve each hunk — skills/engineering/resolving-merge-conflicts/SKILL.md:10
- automated checks — skills/engineering/resolving-merge-conflicts/SKILL.md:12
- Finish the merge/rebase — skills/engineering/resolving-merge-conflicts/SKILL.md:14

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise standalone skill establishing invariant rules for conflict resolution: "Always resolve; never `--abort`" and "Do not invent new behaviour." Requires verifying resolution via the repo's own automated checks.

## Context cost
918 bytes, 15 lines, ~180 tokens. Loads no external files.
