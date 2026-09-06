---
package: addy
path: .gemini/commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Design intent — required
Provides a command in Gemini CLI for invoking the `code-simplification` skill to refactor recently changed code or targeted scopes without altering external behavior. It guides the agent to read project conventions in `GEMINI.md`, scan for 6 specific code smell patterns (deep nesting, long functions, nested ternaries, generic names, duplicated logic, dead code), apply refactoring steps incrementally with test runs between each edit, revert failing changes, and trigger code review.

## Phase — required
addy:Build

## Inputs — required
- Project conventions in `GEMINI.md` — .gemini/commands/code-simplify.toml:8
- Target code scope (recent changes or specified scope) — .gemini/commands/code-simplify.toml:9
- Existing test suite and build compiler — .gemini/commands/code-simplify.toml:18, 19

## Outputs — required
- Simplified, refactored code preserving behavior — .gemini/commands/code-simplify.toml:6, 19

## Invokes — required
- skill code-simplification — .gemini/commands/code-simplify.toml:4
- skill code-review-and-quality — .gemini/commands/code-simplify.toml:21

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `code-simplification` — .gemini/commands/code-simplify.toml:4 — used here
- `GEMINI.md` — .gemini/commands/code-simplify.toml:8 — used here
- `guard clauses` — .gemini/commands/code-simplify.toml:12 — used here
- `extracted helpers` — .gemini/commands/code-simplify.toml:12 — used here
- `code-review-and-quality` — .gemini/commands/code-simplify.toml:21 — used here

## Structure
- "Simplify recently changed code" — .gemini/commands/code-simplify.toml:6
- "Scan for simplification opportunities" — .gemini/commands/code-simplify.toml:11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Forms variant V2 in the duplication ledger with `commands/code-simplify.toml` (95% shared lines). The only divergence is line 8 referencing `GEMINI.md` instead of `AGENTS.md`. It enforces a strict revert-on-failure policy: if tests fail after a simplification step, the change is reverted immediately before reconsidering.

## Context cost
1,066 bytes (~270 tokens). If invoked skills are loaded: `code-simplification` (12,940 bytes), `code-review-and-quality` (16,344 bytes).
