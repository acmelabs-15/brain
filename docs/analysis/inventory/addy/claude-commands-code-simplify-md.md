---
package: addy
path: .claude/commands/code-simplify.md
type: command
bytes: 1068
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/code-simplify.md, sha256: 71e9e8d38c5cbab5b7ecff324ed4ea0f1aaa4fd053ea6c2b717f2fbadfb65a91}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/code-simplify.md

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .claude/commands/code-simplify.md:2

## Design intent — required
Executes an incremental post-implementation refactoring pass on recently changed code to reduce cognitive load and complexity without altering external behavior, systematically applying 6 simplification transformations (guard clauses, splitting long functions, flattening nested ternaries, clarifying names, deduplicating logic, pruning dead code) and verifying tests and build after each edit.

## Phase — required
addy:BUILD

## Inputs — required
- Recent changes or specified target scope
- `CLAUDE.md` and project conventions
- Existing test suite

## Outputs — required
- Refactored code files
- Test and build verification

## Invokes — required
- skill code-simplification — .claude/commands/code-simplify.md:5
- skill code-review-and-quality — .claude/commands/code-simplify.md:22

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .claude/commands/code-simplify.md:5 — used here
- `guard clauses` — .claude/commands/code-simplify.md:13 — used here
- `Dead code` — .claude/commands/code-simplify.md:18 — used here
- `simplification` — .claude/commands/code-simplify.md:12,19,22 — used here
- `code-review-and-quality` — .claude/commands/code-simplify.md:22 — used here

## Structure
- Steps 1–6 numbered list
- Concluding review directive

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandatory rollback on test regression: "If tests fail after a simplification, revert that change and reconsider" (.claude/commands/code-simplify.md:22).

## Context cost
1068 bytes, ~270 tokens. Transitive cost: loads `code-simplification` (13545 bytes) and optionally `code-review-and-quality` (20555 bytes).
