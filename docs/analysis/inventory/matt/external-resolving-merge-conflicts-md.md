---
package: matt
path: external/resolving-merge-conflicts.md
type: doc
bytes: 339023
unit: inv-matt-23
deprecated: false
aliases: []
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/resolving-merge-conflicts.md

## Purpose — required, verbatim
> "Finish a merge or rebase conflict, hunk by hunk." — external/resolving-merge-conflicts.md:24

## Design intent — required
Resolves in-progress git merge or rebase conflicts hunk by hunk by treating conflict resolution as intent reconciliation rather than mechanical diff editing. Before editing conflict markers, the skill traces both conflicting branches back to primary sources (commit messages, pull requests, issue descriptions) to discern authorial intent, preserving both behaviors when compatible or explicitly selecting the merge goal's side when mutually exclusive. Requires executing local automated verification checks (typecheck, tests, lint) prior to committing, and strictly forbids `--abort`, guaranteeing that work concludes on a clean, functioning tree.

## Phase — required
matt:Upkeep

## Inputs — required
Active repository paused in an in-progress merge or rebase conflict with markers in the tree (external/resolving-merge-conflicts.md:25, 29, 30); explicit user invocation via `/resolving-merge-conflicts` or automatic activation when an agent encounters conflict markers (external/resolving-merge-conflicts.md:28); git commit logs, PR descriptions, and issue tickets explaining the rationale behind both branches (external/resolving-merge-conflicts.md:26, 33); project test runner, typechecker, and formatting tools (external/resolving-merge-conflicts.md:25, 33, 47).

## Outputs — required
Reconciled source files with conflict markers removed and combined logic preserved (external/resolving-merge-conflicts.md:25, 48); user-visible commentary quoting commit messages, PRs, and issues justifying resolution choices (external/resolving-merge-conflicts.md:44); explicit documentation of any dropped behaviors or trade-offs when branches clash incompatibly (external/resolving-merge-conflicts.md:45); completed git merge or rebase commit restoring a clean working tree (external/resolving-merge-conflicts.md:25, 48).

## Invokes — required
- skill diagnosing-bugs — external/resolving-merge-conflicts.md:30
- skill ask-matt — external/resolving-merge-conflicts.md:51
- skill triage — external/resolving-merge-conflicts.md:51

## Invoked by — required
none

## Concepts named — required, verbatim
- `primary source` — external/resolving-merge-conflicts.md:26 — defined here
- `agent` — external/resolving-merge-conflicts.md:28 — used here
- `--ours` — external/resolving-merge-conflicts.md:32 — used here
- `--theirs` — external/resolving-merge-conflicts.md:32 — used here
- `automated checks` — external/resolving-merge-conflicts.md:33 — used here
- `reach-for-it-anytime standalone` — external/resolving-merge-conflicts.md:51 — defined here

## Structure
- # The /resolving-merge-conflicts Skill — external/resolving-merge-conflicts.md:24
- ## What it does — external/resolving-merge-conflicts.md:24
- ## When to reach for it — external/resolving-merge-conflicts.md:27
- ## Primary sources over ours and theirs — external/resolving-merge-conflicts.md:31
- ## Common questions — external/resolving-merge-conflicts.md:34
- ## It's working if — external/resolving-merge-conflicts.md:42
- ## Where it fits — external/resolving-merge-conflicts.md:50
- ## Install the skills — external/resolving-merge-conflicts.md:51

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/resolving-merge-conflicts.md:36: The skill documentation notes that advancing model capabilities may eventually render its thin margin over native model abilities redundant as models learn to consult commit histories automatically.
- `doc-drift` · external/resolving-merge-conflicts.md:39: Parallel worktree workflows that centralize merge conflict resolution onto an uncontextualized cleaner agent lose local session context, forcing expensive reconstruction of intent from commit logs.
- `internal-contradiction` · external/resolving-merge-conflicts.md:41: Unconditional prohibition against `--abort` creates operational deadlocks when a user discovers during resolution that a branch is obsolete and should simply be discarded.

## Observations
Represents the web documentation snapshot of `/resolving-merge-conflicts` from `aihero.dev/skills-resolving-merge-conflicts`. Focuses on treating merge conflicts as intent reconciliation rather than text matching, mandating that the agent read commit messages, PRs, and issues to understand why lines changed. Emphasizes running full project validation loops (tests, types, lint) before committing to catch subtle behavioral regressions where merged code compiles but violates either branch's intent.

## Context cost
339023 bytes, ~68000 tokens (HTML snapshot including full inline hydration payload).
