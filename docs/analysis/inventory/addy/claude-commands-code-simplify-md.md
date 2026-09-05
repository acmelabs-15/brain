---
package: addy
path: .claude/commands/code-simplify.md
type: command
bytes: 1068
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/code-simplify.md, sha256: 71e9e8d38c5cbab5b7ecff324ed4ea0f1aaa4fd053ea6c2b717f2fbadfb65a91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/code-simplify.md

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .claude/commands/code-simplify.md:2

## Design intent — required
Provides an incremental refactoring routine that scans recent changes or specified code for common complexity antipatterns (deep nesting, long functions, nested ternaries, generic names, duplicated logic, dead code) and simplifies them while preserving exact behavior verified by continuous test execution.

## Phase — required
addy:Review

## Inputs — required
- Project conventions in `CLAUDE.md` — .claude/commands/code-simplify.md:9
- Target code (recent changes or specified scope) — .claude/commands/code-simplify.md:10
- Test suite and build system — .claude/commands/code-simplify.md:19, 20

## Outputs — required
- Simplified code preserving exact behavior — .claude/commands/code-simplify.md:7
- Clean diff verified by passing tests and successful build — .claude/commands/code-simplify.md:20

## Invokes — required
- skill agent-skills:code-simplification — .claude/commands/code-simplify.md:5
- skill code-review-and-quality — .claude/commands/code-simplify.md:22

## Invoked by — required
none

## Concepts named — required, verbatim
`CLAUDE.md` — .claude/commands/code-simplify.md:9 — used here
`guard clauses` — .claude/commands/code-simplify.md:13 — used here
`extracted helpers` — .claude/commands/code-simplify.md:13 — used here
`dead code` — .claude/commands/code-simplify.md:18 — used here
`code-review-and-quality` — .claude/commands/code-simplify.md:22 — used here

## Structure
none (flat numbered workflow list under introductory invocation)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directs that if tests fail after any simplification, the change is reverted immediately rather than patched forward. Recommends reviewing the final result with `code-review-and-quality`.

## Context cost
1068 bytes, approximately 250 tokens.
