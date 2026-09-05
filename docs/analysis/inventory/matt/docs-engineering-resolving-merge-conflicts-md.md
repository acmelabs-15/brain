---
package: matt
path: docs/engineering/resolving-merge-conflicts.md
type: doc
bytes: 5326
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/resolving-merge-conflicts.md, sha256: 08e538aa0d35e65e26063ad44351cb429d84afb5eae5b3add02f6a08cba868f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/resolving-merge-conflicts.md

## Purpose — required, verbatim
> "`resolving-merge-conflicts` works through an in-progress git merge or rebase, hunk by hunk, then runs the project's own checks and finishes the operation with a commit." — docs/engineering/resolving-merge-conflicts.md:3

## Design intent — required
Treats merge conflicts as clashes of human intent rather than simple textual collisions. Mandates inspecting primary sources (commits, pull requests, and original issue tickets) before touching diff hunks to understand why each side exists. Preserves both intents when compatible, explicitly documents trade-offs when conflicting, prohibits blind `--ours`/`--theirs` flags or inventing unrequested behavior, and verifies all local automated checks (typecheck, tests, linter) pass before creating the resolution commit. Disallows `--abort` to ensure operations complete forward.

## Phase — required
matt:engineering

## Inputs — required
An in-progress git merge or rebase state with conflict markers in the working tree, repository git history (commits, PR descriptions, issue tickets), and the repository's existing automated check commands.

## Outputs — required
A clean git working tree with all conflict hunks resolved according to primary source intent, passing automated checks, and a completed merge or rebase commit.

## Invokes — required
- doc diagnosing-bugs — docs/engineering/resolving-merge-conflicts.md:16
- doc ask-matt — docs/engineering/resolving-merge-conflicts.md:51

## Invoked by — required
none

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — docs/engineering/resolving-merge-conflicts.md:3 — defined here
- `primary source` — docs/engineering/resolving-merge-conflicts.md:5 — used here
- `agent` — docs/engineering/resolving-merge-conflicts.md:9 — used here
- `tickets` — docs/engineering/resolving-merge-conflicts.md:23 — used here
- `automated checks` — docs/engineering/resolving-merge-conflicts.md:23 — used here
- `model` — docs/engineering/resolving-merge-conflicts.md:29 — used here
- `sessions` — docs/engineering/resolving-merge-conflicts.md:35 — used here
- `context` — docs/engineering/resolving-merge-conflicts.md:35 — used here
- `reach-for-it-anytime standalone` — docs/engineering/resolving-merge-conflicts.md:51 — defined here

## Structure
- ## What it does — docs/engineering/resolving-merge-conflicts.md:1
- ## When to reach for it — docs/engineering/resolving-merge-conflicts.md:7
- ## Primary sources over `ours` and `theirs` — docs/engineering/resolving-merge-conflicts.md:19
- ## Common questions — docs/engineering/resolving-merge-conflicts.md:25
- ## It's working if — docs/engineering/resolving-merge-conflicts.md:41
- ## Where it fits — docs/engineering/resolving-merge-conflicts.md:49

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Identifies a key failure mode in agentic merge resolution: agents resolving conflicts purely at the diff level often produce syntactically valid code that satisfies compiler syntax while silently dropping deliberate logic or failing test suites. Recommends having the original authoring session resolve conflicts from parallel worktrees rather than delegating batch merge resolution to an un-contextualized downstream agent.

## Context cost
5326 bytes (~1330 tokens).
