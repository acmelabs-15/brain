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
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/code-review.md

## Purpose — required, verbatim
> "`code-review` reviews the diff between `HEAD` and a fixed point you name (a commit, a branch, a tag, `main`, `HEAD~5`) along two axes. **Standards** asks whether the code follows how this repo writes code. **Spec** asks whether the code does what the originating issue or [spec](https://www.aihero.dev/ai-coding-dictionary/spec) asked for. Each axis runs in its own [sub-agent](https://www.aihero.dev/ai-coding-dictionary/subagent) so neither sees the other's reasoning." — docs/engineering/code-review.md:3

## Design intent — required
Two-axis code review methodology for git diffs (`<fixed-point>...HEAD`) that evaluates codebase conventions and requirements fidelity in complete isolation. By delegating the Standards axis (repository conventions and Martin Fowler smell baseline) and Spec axis (originating specification or ticket requirements) to independent sub-agents, it prevents trade-offs where clean code masks incorrect features or functional code excuses architectural degradation. Refuses to blend results into a single composite score or declare an overall winner across axes.

## Phase — required
matt:code-review

## Inputs — required
A fixed git reference point (commit SHA, branch, tag, `main`, `HEAD~5`), repository standards documentation (`CODING_STANDARDS.md`, `CONTRIBUTING.md`), git commit messages referencing issue numbers, and the originating issue or specification file (discovered via `docs/agents/issue-tracker.md`, explicit path argument, or matching files in `docs/`, `specs/`, or `.scratch/`).

## Outputs — required
A structured two-axis report with distinct `## Standards` and `## Spec` sections citing specific rule violations, smells with diff hunks, or spec lines, concluding with a worst issue identified per axis without an overall winner. Produces no persistent code changes or commits.

## Invokes — required
- skill tdd — docs/engineering/code-review.md:15
- skill implement — docs/engineering/code-review.md:16
- skill improve-codebase-architecture — docs/engineering/code-review.md:17
- skill diagnosing-bugs — docs/engineering/code-review.md:18
- doc CODING_STANDARDS.md — docs/engineering/code-review.md:24
- doc CONTRIBUTING.md — docs/engineering/code-review.md:24
- doc docs/agents/issue-tracker.md — docs/engineering/code-review.md:28
- skill setup-matt-pocock-skills — docs/engineering/code-review.md:33
- skill grill-with-docs — docs/engineering/code-review.md:88
- skill to-spec — docs/engineering/code-review.md:88
- skill to-tickets — docs/engineering/code-review.md:88
- skill ask-matt — docs/engineering/code-review.md:94

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `code-review` — docs/engineering/code-review.md:3 — defined here
- `Standards` — docs/engineering/code-review.md:3 — defined here
- `Spec` — docs/engineering/code-review.md:3 — defined here
- `sub-agent` — docs/engineering/code-review.md:3 — used here
- `ticket` — docs/engineering/code-review.md:5 — used here
- `tdd` — docs/engineering/code-review.md:15 — used here
- `implement` — docs/engineering/code-review.md:16 — used here
- `improve-codebase-architecture` — docs/engineering/code-review.md:17 — used here
- `diagnosing-bugs` — docs/engineering/code-review.md:18 — used here
- `primary source` — docs/engineering/code-review.md:44 — used here
- `smell baseline` — docs/engineering/code-review.md:46 — defined here
- `Mysterious Name` — docs/engineering/code-review.md:46 — used here
- `Duplicated Code` — docs/engineering/code-review.md:46 — used here
- `Feature Envy` — docs/engineering/code-review.md:46 — used here
- `Data Clumps` — docs/engineering/code-review.md:46 — used here
- `Primitive Obsession` — docs/engineering/code-review.md:46 — used here
- `Repeated Switches` — docs/engineering/code-review.md:46 — used here
- `Shotgun Surgery` — docs/engineering/code-review.md:46 — used here
- `Divergent Change` — docs/engineering/code-review.md:46 — used here
- `Speculative Generality` — docs/engineering/code-review.md:46 — used here
- `Message Chains` — docs/engineering/code-review.md:46 — used here
- `Middle Man` — docs/engineering/code-review.md:46 — used here
- `Refused Bequest` — docs/engineering/code-review.md:46 — used here
- `context` — docs/engineering/code-review.md:52 — used here
- `harness` — docs/engineering/code-review.md:52 — used here
- `session` — docs/engineering/code-review.md:58 — used here
- `grill-with-docs` — docs/engineering/code-review.md:88 — used here
- `to-spec` — docs/engineering/code-review.md:88 — used here
- `to-tickets` — docs/engineering/code-review.md:88 — used here
- `ask-matt` — docs/engineering/code-review.md:94 — used here

## Structure
- What it does — docs/engineering/code-review.md:1
- When to reach for it — docs/engineering/code-review.md:7
- Prerequisites — docs/engineering/code-review.md:22
- The two axes — docs/engineering/code-review.md:35
- Common questions — docs/engineering/code-review.md:48
- It's working if — docs/engineering/code-review.md:78
- Where it fits — docs/engineering/code-review.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/code-review.md:52 — Command name collides with Claude Code's built-in `/code-review`, which hunts bugs in diffs rather than evaluating standards and spec compliance, causing local shadowing or plugin marketplace prefix requirement (`mattpocock-skills:`).
- script-bug — docs/engineering/code-review.md:56 — Prompts for the Standards and Spec sub-agents do not prohibit task delegation, causing recursive agent re-invocation loops that have spawned over 50 runaway agents in unattended runs.
- cross-file-contradiction — docs/engineering/code-review.md:76 — Evaluates git three-dot diff `<fixed-point>...HEAD`, completely blinding the review to uncommitted or staged work, which directly contradicts `implement`'s workflow step of invoking review prior to creating a commit.

## Observations
Enforces that repository-documented coding conventions always override general best practices or the Fowler smell baseline. Notes that reviews conducted in the same context session that wrote the implementation suffer from confirmation bias, recommending fresh sessions for rigorous evaluations. Points out the lack of convergence when repeatedly looping review and refactoring passes.

## Context cost
10553 bytes, ~2500 tokens. Standalone documentation file.
