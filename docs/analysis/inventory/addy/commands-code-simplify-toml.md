---
package: addy
path: commands/code-simplify.toml
type: command
bytes: 1066
unit: inv-addy-11
---

# commands/code-simplify.toml

## Purpose — required, verbatim
> "Simplify code for clarity and maintainability — reduce complexity without changing behavior" — commands/code-simplify.toml:1

## Design intent — required
Guides targeted code simplification on recently modified code or a user-specified scope while guaranteeing zero behavioral regression. It forces the agent to read repository standards, understand callers and test coverage prior to making edits, scan for specific complexity anti-patterns (such as deep nesting, long functions, nested ternaries, and duplicated logic), apply refactorings incrementally with immediate test execution, and run a final quality review pass via `code-review-and-quality`.

## Phase — required
`addy:Build`

## Inputs — required
- Project conventions from `AGENTS.md` — commands/code-simplify.toml:8
- Target code scope: recent changes or user-specified file/module scope — commands/code-simplify.toml:9
- Existing test suite — commands/code-simplify.toml:10, 18-19

## Outputs — required
- Refactored, simplified source code with behavior preserved — commands/code-simplify.toml:6, 18-19
- Clean git diff with passing tests and build verification — commands/code-simplify.toml:19
- Structured code review assessment via `code-review-and-quality` — commands/code-simplify.toml:21

## Invokes — required
- skill code-simplification — commands/code-simplify.toml:4
- skill code-review-and-quality — commands/code-simplify.toml:21

## Invoked by — required
none

## Concepts named — required, verbatim
- `code-simplification` — commands/code-simplify.toml:4 — used here
- `AGENTS.md` — commands/code-simplify.toml:8 — used here
- `guard clauses` — commands/code-simplify.toml:12 — used here
- `incremental simplification` — commands/code-simplify.toml:18 — defined here
- `code-review-and-quality` — commands/code-simplify.toml:21 — used here

## Structure
- `description = "..."` — commands/code-simplify.toml:1
- `prompt = """` — commands/code-simplify.toml:3
  - Skill invocation statement (code-simplification) — commands/code-simplify.toml:4
  - Scope and preservation rule — commands/code-simplify.toml:6
  - 6 numbered process steps (conventions, target, comprehension, scan patterns, incremental application, verification) — commands/code-simplify.toml:8-19
  - Reversion condition and review invocation — commands/code-simplify.toml:21

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides concrete, pattern-based refactoring targets: deep nesting to guard clauses/helpers, long functions split by responsibility, nested ternaries to if/else/switch, generic names to descriptive names, duplicated logic to shared functions, dead code removed after confirmation (`commands/code-simplify.toml:11-17`).
- Fail-safe rollback: mandates reverting any simplification immediately if tests fail, rather than pushing untested adjustments forward (`commands/code-simplify.toml:21`).

## Context cost
1,066 bytes (~267 tokens). Transitive cost: loads `skills/code-simplification/SKILL.md` (13,545 bytes) and `skills/code-review-and-quality/SKILL.md` (20,555 bytes), totaling 35,166 bytes (~8,792 tokens).
