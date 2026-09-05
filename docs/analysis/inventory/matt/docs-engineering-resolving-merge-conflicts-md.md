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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/resolving-merge-conflicts.md

## Purpose — required, verbatim
> "works through an in-progress git merge or rebase, hunk by hunk, then runs the project's own checks and finishes the operation with a commit." — docs/engineering/resolving-merge-conflicts.md:3

## Design intent — required
Documentation detailing the principles and workflow for the `resolving-merge-conflicts` skill. It prevents mechanical or flag-driven merge resolutions (`--ours`, `--theirs`, or naive text splicing) by requiring the agent to inspect the primary source intent behind each conflicting hunk (commit logs, PR descriptions, and issue tickets) before reconciling code. It also enforces running the repository's native test/lint/format verification suites prior to committing the resolution, refusing to abort the merge.

## Phase — required
none

## Inputs — required
In-progress git merge or rebase with conflict markers in the working tree; commit history, PR descriptions, and issue tickets for both parent branches; repository test and lint check configurations.

## Outputs — required
Committed merge or rebase resolution with a clean working tree; verified green automated check run.

## Invokes — required
- skill diagnosing-bugs — docs/engineering/resolving-merge-conflicts.md:16
- skill ask-matt — docs/engineering/resolving-merge-conflicts.md:51

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `resolving-merge-conflicts` — docs/engineering/resolving-merge-conflicts.md:3 — defined here
- `primary source` — docs/engineering/resolving-merge-conflicts.md:5 — used here
- `agent` — docs/engineering/resolving-merge-conflicts.md:9 — used here
- `tickets` — docs/engineering/resolving-merge-conflicts.md:23 — used here
- `automated checks` — docs/engineering/resolving-merge-conflicts.md:23 — used here
- `model` — docs/engineering/resolving-merge-conflicts.md:29 — used here
- `sessions` — docs/engineering/resolving-merge-conflicts.md:35 — used here
- `context` — docs/engineering/resolving-merge-conflicts.md:35 — used here

## Structure
- What it does
- When to reach for it
- Primary sources over ours and theirs
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Argues against rigid file-zoning across parallel agent worktrees, asserting that agents handle merge conflicts effectively if large refactorings are performed first. Recommends that sibling sessions merge their own branch back rather than dumping all conflicts onto a single aggregator agent, which loses crucial local intent context.

## Context cost
5326 bytes, ~1250 tokens. Loads no external files.
