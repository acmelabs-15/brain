---
package: addy
path: .claude/commands/code-simplify.md
type: command
bytes: 1068
unit: inv-addy-4
---

# .claude/commands/code-simplify.md

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — .claude/commands/code-simplify.md:2

## Design intent — required
Executes an incremental post-implementation refactoring pass on recently changed code to reduce cognitive load and complexity without altering external behavior, systematically applying 6 simplification transformations (guard clauses, splitting long functions, flattening nested ternaries, clarifying names, deduplicating logic, pruning dead code) and verifying tests and build after each edit.

## Phase — required
`addy:Build`

## Inputs — required
- Recent changes or specified target scope
- `CLAUDE.md` and project conventions
- Existing test suite

## Outputs — required
- Refactored code files
- Test and build verification

## Invokes — required
- skill code-simplification — .claude/commands/code-simplify.md:5 (named `agent-skills:code-simplification`)
- skill code-review-and-quality — .claude/commands/code-simplify.md:22

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — .claude/commands/code-simplify.md:5 — used here
- `guard clauses` — .claude/commands/code-simplify.md:13 — used here
- `incremental simplification` — .claude/commands/code-simplify.md:19 — defined here
- `code-review-and-quality` — .claude/commands/code-simplify.md:22 — used here

## Structure
- `---` (frontmatter: description) — .claude/commands/code-simplify.md:1-3
- Steps 1–6 numbered list — .claude/commands/code-simplify.md:9-20
- Concluding review directive — .claude/commands/code-simplify.md:22

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandatory rollback on test regression: "If tests fail after a simplification, revert that change and reconsider" (.claude/commands/code-simplify.md:22).

## Context cost
- File size: 1,068 bytes (~270 tokens).
- Transitive cost when invoked: loads `code-simplification` SKILL.md (13,545 bytes, ~3,385 tokens) and optionally `code-review-and-quality` SKILL.md (20,555 bytes, ~5,140 tokens).
