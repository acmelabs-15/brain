---
package: matt
path: docs/engineering/code-review.md
type: doc
bytes: 10553
unit: inv-matt-4
deprecated: false
aliases: []

memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/code-review.md

## Purpose — required, verbatim
> "`code-review` reviews the diff between `HEAD` and a fixed point you name (a commit, a branch, a tag, `main`, `HEAD~5`) along two axes. **Standards** asks whether the code follows how this repo writes code. **Spec** asks whether the code does what the originating issue or [spec](https://www.aihero.dev/ai-coding-dictionary/spec) asked for. Each axis runs in its own [sub-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) so neither sees the other's reasoning." — docs/engineering/code-review.md:3

## Design intent — required
Reviews git diffs against two unmerged, parallel axes: Standards (conformance to repository coding standards and Fowler code smells) and Spec (conformance to originating requirements and issues), running each in an isolated subagent to prevent cross-contamination. By refusing to combine findings into an averaged score or single winner, it ensures that passing on coding conventions cannot conceal failure to satisfy specifications, and vice versa.

## Phase — required
cross-phase

## Inputs — required
A diff between `HEAD` and a specified fixed point (`commit`, `branch`, `tag`, `main`, `HEAD~5`), repository documentation (`CODING_STANDARDS.md`, `CONTRIBUTING.md`), and originating issue/spec (discovered via commit message issue references, path argument, local spec files under `docs/`, `specs/`, or `.scratch/`, or user prompts).

## Outputs — required
Dual-axis review report divided into independent `## Standards` and `## Spec` sections, identifying specific cited breaches, code smells with diff hunks, spec deviations, and the worst issue per axis without a blended summary.

## Invokes — required
- skill tdd — docs/engineering/code-review.md:15
- skill implement — docs/engineering/code-review.md:16
- skill improve-codebase-architecture — docs/engineering/code-review.md:17
- skill diagnosing-bugs — docs/engineering/code-review.md:18
- skill setup-matt-pocock-skills — docs/engineering/code-review.md:33
- skill to-spec — docs/engineering/code-review.md:91
- skill to-tickets — docs/engineering/code-review.md:91
- skill ask-matt — docs/engineering/code-review.md:94

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `sub-agent` — docs/engineering/code-review.md:3 — used here
- `ticket` — docs/engineering/code-review.md:5 — used here
- `commit messages` — docs/engineering/code-review.md:28 — used here
- `primary source` — docs/engineering/code-review.md:44 — used here
- `smell baseline` — docs/engineering/code-review.md:46 — defined here
- `code smells` — docs/engineering/code-review.md:46 — used here
- `context` — docs/engineering/code-review.md:52 — used here
- `harness` — docs/engineering/code-review.md:52 — used here
- `session` — docs/engineering/code-review.md:58 — used here
- `merge-base` — docs/engineering/code-review.md:76 — used here
- `build chain` — docs/engineering/code-review.md:88 — defined here

## Structure
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## The two axes
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/code-review.md:52 Command name collision with Claude Code built-in `/code-review`, which hunts bugs in diffs rather than verifying standards and specs.
- `script-bug` · docs/engineering/code-review.md:56 Sub-agents lack delegation guards and can recursively invoke `/code-review`, creating runaway agent spawning trees.
- `other` · docs/engineering/code-review.md:76 Three-dot diff excludes unstaged and working-tree changes, making uncommitted work invisible to review.

## Observations
Establishes a baseline of twelve Martin Fowler code smells from _Refactoring_ ch.3 as heuristics for the Standards axis. Strongly recommends running review in a clean, separate session to eliminate author confirmation bias.

## Context cost
10,553 bytes (~2,638 tokens). Documentation page for `code-review` skill.
