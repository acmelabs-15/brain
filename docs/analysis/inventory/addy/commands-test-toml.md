---
package: addy
path: commands/test.toml
type: command
bytes: 650
unit: inv-addy-11
---

# commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Design intent — required
Enforces a test-first engineering workflow for both new feature development and bug resolution. For new capabilities, it mandates the standard RED-GREEN-Refactor cycle. For bug fixes, it enforces the "Prove-It pattern", requiring the creation and confirmation of a reproducing failing test before any production code modification is allowed, followed by verification of the fix and a full regression run. For browser-facing problems, it integrates Chrome DevTools MCP testing via `browser-testing-with-devtools`.

## Phase — required
`addy:Verify`

## Inputs — required
- Feature requirement or bug report/reproduction steps — commands/test.toml:6, 11
- Existing test suite and execution tooling — commands/test.toml:16
- Chrome DevTools MCP tools (for browser issues) — commands/test.toml:18

## Outputs — required
- Test suites and test cases (initially failing, then passing) — commands/test.toml:7, 12, 15
- Production code implementation or bug fix — commands/test.toml:8, 14
- Browser verification telemetry / reports — commands/test.toml:18

## Invokes — required
- skill test-driven-development — commands/test.toml:4
- skill browser-testing-with-devtools — commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `test-driven-development` — commands/test.toml:4 — used here
- `TDD workflow` — commands/test.toml:1 — used here
- `Prove-It pattern` — commands/test.toml:1, 11 — defined here
- `browser-testing-with-devtools` — commands/test.toml:18 — used here
- `Chrome DevTools MCP` — commands/test.toml:18 — used here

## Structure
- `description = "..."` — commands/test.toml:1
- `prompt = """` — commands/test.toml:3
  - Skill invocation statement (test-driven-development) — commands/test.toml:4
  - Feature TDD loop (3 numbered steps) — commands/test.toml:6-9
  - Bug fix Prove-It pattern (5 numbered steps) — commands/test.toml:11-16
  - Browser verification integration clause — commands/test.toml:18

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The "Prove-It pattern" provides a formal protocol for bug fixes: Step 1 write failing test reproducing bug, Step 2 confirm it fails, Step 3 implement fix, Step 4 confirm test passes, Step 5 run full suite for regressions (commands/test.toml:11-16).
- Directly references Chrome DevTools MCP for browser-level issues via `browser-testing-with-devtools` (commands/test.toml:18).

## Context cost
650 bytes (~163 tokens). Transitive cost: loads `skills/test-driven-development/SKILL.md` (16,483 bytes) and `skills/browser-testing-with-devtools/SKILL.md` (14,539 bytes), totaling 31,672 bytes (~7,918 tokens).
