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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/resolving-merge-conflicts/SKILL.md

## Purpose — required, verbatim
> "description: \"Use when you need to resolve an in-progress git merge/rebase conflict.\"" — skills/engineering/resolving-merge-conflicts/SKILL.md:3

## Design intent — required
Defines an intent-driven 5-step loop for resolving in-progress git merge and rebase conflicts. Mandates investigating primary sources (commit messages, PRs, original issues/tickets) to understand why each conflicting change was originally made, preserving both intents across hunks wherever possible, forbidding invented behavior or aborting (`--abort`), executing automated project checks (typecheck, tests, format), and completing the merge or rebase.

## Phase — required
matt:engineering

## Inputs — required
An in-progress git merge or rebase, conflicting files, git history, commit messages, PR descriptions, and linked issues/tickets.

## Outputs — required
Resolved conflicting files with tests passing, staged changes, and completed merge or rebase commits.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:213
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:38
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:79
- doc skills/engineering/README.md — skills/engineering/README.md:31
- doc CHANGELOG.md — CHANGELOG.md:113
- doc CHANGELOG.md — CHANGELOG.md:264

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — skills/engineering/resolving-merge-conflicts/SKILL.md:2 — defined here
- `merge/rebase` — skills/engineering/resolving-merge-conflicts/SKILL.md:6 — used here
- `git history` — skills/engineering/resolving-merge-conflicts/SKILL.md:6 — used here
- `primary sources` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — defined here
- `commit messages` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `PRs` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `issues/tickets` — skills/engineering/resolving-merge-conflicts/SKILL.md:8 — used here
- `hunk` — skills/engineering/resolving-merge-conflicts/SKILL.md:10 — used here
- `--abort` — skills/engineering/resolving-merge-conflicts/SKILL.md:10 — used here
- `automated checks` — skills/engineering/resolving-merge-conflicts/SKILL.md:12 — defined here

## Structure
- `1. **See the current state** of the merge/rebase. Check git history, and the conflicting files.` — skills/engineering/resolving-merge-conflicts/SKILL.md:6
- `2. **Find the primary sources** for each conflict. Understand deeply why each change was made, and what the original intent was. Read the commit messages, check the PRs, check original issues/tickets.` — skills/engineering/resolving-merge-conflicts/SKILL.md:8
- `3. **Resolve each hunk.** Preserve both intents where possible. Where incompatible, pick the one matching the merge's stated goal and note the trade-off. Do **not** invent new behaviour. Always resolve; never `--abort`.` — skills/engineering/resolving-merge-conflicts/SKILL.md:10
- `4. Discover the project's **automated checks** and run them, typically typecheck, then tests, then format. Fix anything the merge broke.` — skills/engineering/resolving-merge-conflicts/SKILL.md:12
- `5. **Finish the merge/rebase.** Stage everything and commit. If rebasing, continue the rebase process until all commits are rebased.` — skills/engineering/resolving-merge-conflicts/SKILL.md:14

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strictly prohibits aborting operations: "Always resolve; never `--abort`."
- Focuses on semantic resolution derived from original developer intent rather than textual diff line-picking.
- A standalone, model-invoked utility accessible both on-demand and autonomously during conflict states.

## Context cost
918 bytes (~230 tokens). Compact procedural guidance.
