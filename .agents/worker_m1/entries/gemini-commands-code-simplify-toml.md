---
package: addy
path: .gemini/commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-1
---

# .gemini/commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .gemini/commands/code-simplify.toml:1

## Design intent — required
Guides behavior-preserving refactoring to reduce structural complexity and cognitive load (guard clauses over deep nesting, splitting long functions, converting nested ternaries, eliminating duplication and dead code). It enforces an incremental test-after-each-change loop with automatic reversion on test failures and follow-up quality review. Without it, refactoring is frequently attempted in large unverified batches that introduce unintended behavioral regressions.

## Phase — required
`addy:Build`

## Inputs — required
- Target code (recent changes or user-specified scope) — .gemini/commands/code-simplify.toml:6, 9
- Project conventions in `GEMINI.md` — .gemini/commands/code-simplify.toml:8
- Existing test suites and build configurations — .gemini/commands/code-simplify.toml:10, 18, 19

## Outputs — required
- Simplified source code with passing test suites, successful build, and clean git diff — .gemini/commands/code-simplify.toml:19

## Invokes — required
- skill code-simplification — .gemini/commands/code-simplify.toml:4
- skill code-review-and-quality — .gemini/commands/code-simplify.toml:21
- reference GEMINI.md — .gemini/commands/code-simplify.toml:8

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .gemini/commands/code-simplify.toml:4 — used here
- `behavior-preserving refactoring` — .gemini/commands/code-simplify.toml:1, 6 — defined here
- `GEMINI.md` — .gemini/commands/code-simplify.toml:8 — used here
- `guard clauses` — .gemini/commands/code-simplify.toml:12 — defined here
- `extracted helpers` — .gemini/commands/code-simplify.toml:12 — defined here
- `incremental simplification` — .gemini/commands/code-simplify.toml:18 — defined here
- `automatic revert on failure` — .gemini/commands/code-simplify.toml:21 — defined here
- `code-review-and-quality` — .gemini/commands/code-simplify.toml:21 — used here

## Structure
- Unsectioned 6-step simplification workflow and failure recovery rule in prompt body — .gemini/commands/code-simplify.toml:8-21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Automatic rollback rule: "If tests fail after a simplification, revert that change and reconsider" (.gemini/commands/code-simplify.toml:21).
- Composes directly with `code-review-and-quality` for post-simplification verification (.gemini/commands/code-simplify.toml:21).

## Context cost
- File size: 1,066 bytes (~270 tokens).
- Transitive context cost when invoked: loads `skills/code-simplification/SKILL.md` (8,840 bytes) and optionally `skills/code-review-and-quality/SKILL.md` (9,540 bytes), totaling ~19,446 bytes (~4,860 tokens) before diffs.
