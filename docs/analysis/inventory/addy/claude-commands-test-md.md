---
package: addy
path: .claude/commands/test.md
type: command
bytes: 665
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 62f72b64cfac6db984db072fdc987a23e6049876191297da5f37367def986ff2}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .claude/commands/test.md:2

## Design intent — required
Drives the test-driven development workflow for new features (failing test -> minimum implementation -> refactor) and bug fixes (Prove-It pattern: failing reproduction test -> confirm failure -> fix -> confirm pass -> regression suite), integrating Chrome DevTools MCP for browser-related testing.

## Phase — required
addy:VERIFY

## Inputs — required
- Feature requirements or bug reports
- Codebase and test suite

## Outputs — required
- Test files
- Code implementation / bug fixes
- Regression suite verification

## Invokes — required
- skill test-driven-development — .claude/commands/test.md:5
- skill browser-testing-with-devtools — .claude/commands/test.md:19

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — .claude/commands/test.md:2 — defined here
- `Prove-It pattern` — .claude/commands/test.md:2,12 — defined here
- `test-driven-development` — .claude/commands/test.md:5 — used here
- `browser-testing-with-devtools` — .claude/commands/test.md:19 — used here
- `Chrome DevTools MCP` — .claude/commands/test.md:19 — used here

## Structure
- `For new features:` steps 1–3
- `For bug fixes (Prove-It pattern):` steps 1–5
- Browser testing directive

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly codifies the Prove-It pattern for bug reproduction as a first-class lifecycle technique.

## Context cost
665 bytes, ~170 tokens. Transitive cost: loads `test-driven-development` (16483 bytes) and optionally `browser-testing-with-devtools` (14539 bytes), totaling ~31687 bytes (~7920 tokens).
