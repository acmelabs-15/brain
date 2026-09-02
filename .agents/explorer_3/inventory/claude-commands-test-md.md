---
package: addy
path: .claude/commands/test.md
type: command
bytes: 665
unit: inv-addy-4
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .claude/commands/test.md:2

## Design intent — required
Drives the test-driven development workflow for new features (failing test -> minimum implementation -> refactor) and bug fixes (Prove-It pattern: failing reproduction test -> confirm failure -> fix -> confirm pass -> regression suite), integrating Chrome DevTools MCP for browser-related testing.

## Phase — required
`addy:Build`

## Inputs — required
- Feature requirements or bug reports
- Codebase and test suite

## Outputs — required
- Test files
- Code implementation / bug fixes
- Regression suite verification

## Invokes — required
- skill test-driven-development — .claude/commands/test.md:5 (named `agent-skills:test-driven-development`)
- skill browser-testing-with-devtools — .claude/commands/test.md:19 (named `agent-skills:browser-testing-with-devtools`)

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — .claude/commands/test.md:2 — defined here
- `Prove-It pattern` — .claude/commands/test.md:2, 12 — defined here
- `test-driven-development` — .claude/commands/test.md:5 — used here
- `browser-testing-with-devtools` — .claude/commands/test.md:19 — used here
- `Chrome DevTools MCP` — .claude/commands/test.md:19 — used here

## Structure
- `---` (frontmatter: description) — .claude/commands/test.md:1-3
- `For new features:` steps 1–3 — .claude/commands/test.md:7-10
- `For bug fixes (Prove-It pattern):` steps 1–5 — .claude/commands/test.md:12-17
- Browser testing directive — .claude/commands/test.md:19

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly codifies the Prove-It pattern for bug reproduction as a first-class lifecycle technique.

## Context cost
- File size: 665 bytes (~170 tokens).
- Transitive cost when invoked: loads `test-driven-development` SKILL.md (16,483 bytes) and optionally `browser-testing-with-devtools` SKILL.md (14,539 bytes), totaling ~31,687 bytes (~7,920 tokens).
