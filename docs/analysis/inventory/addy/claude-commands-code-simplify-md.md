---
package: addy
path: .claude/commands/code-simplify.md
type: command
bytes: 1068
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/code-simplify.md, sha256: 71e9e8d38c5cbab5b7ecff324ed4ea0f1aaa4fd053ea6c2b717f2fbadfb65a91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/code-simplify.md

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .claude/commands/code-simplify.md:2

## Design intent — required
Provides an automated code refinement pass on recent changes or a target scope to reduce structural complexity (deep nesting, long functions, nested ternaries, generic names, duplication, dead code) while strictly guaranteeing behavior preservation through continuous test validation and immediate rollback on test failure.

## Phase — required
addy:Build

## Inputs — required
- Project conventions in `CLAUDE.md`
- Target codebase: recent changes (default) or user-specified scope
- Test runner and build tooling

## Outputs — required
- Simplified source code
- Clean git diff passing all tests and build checks

## Invokes — required
- skill agent-skills:code-simplification — .claude/commands/code-simplify.md:5
- skill code-review-and-quality — .claude/commands/code-simplify.md:22

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .claude/commands/code-simplify.md:5 — used here
- `CLAUDE.md` — .claude/commands/code-simplify.md:9 — used here
- `code-review-and-quality` — .claude/commands/code-simplify.md:22 — used here

## Structure
Numbered workflow (steps 1–6) covering convention discovery, scope identification, understanding callers, structural scan, incremental application with test runs, and final verification.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a non-destructive revert rule: if any test fails following a simplification edit, the agent must revert that change immediately and reconsider before moving on. Suggests reviewing final output with `code-review-and-quality`.

## Context cost
1068 bytes (~267 tokens). Invocations load `code-simplification` and `code-review-and-quality` skills.
