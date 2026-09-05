---
package: addy
path: commands/test.toml
type: command
bytes: 650
unit: inv-addy-4
deprecated: false
aliases:
  - .gemini/commands/test.toml
memo_inputs:
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Design intent — required
Provides a slash command `/test` guiding test-driven development for new features (red, green, refactor) and bug fixes (the reproduction-first Prove-It pattern), with optional delegation to Chrome DevTools for browser-related verifications.

## Phase — required
`addy:Test`

## Inputs — required
- Task requirements or defect reproduction steps: `new features` — commands/test.toml:6 or `bug fixes (Prove-It pattern)` — commands/test.toml:11

## Outputs — required
- Automated test suites: `Write tests that describe the expected behavior (they should FAIL)` — commands/test.toml:7
- Implementation code: `Implement the code to make them pass` — commands/test.toml:8

## Invokes — required
- skill test-driven-development — commands/test.toml:4
- skill browser-testing-with-devtools — commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — commands/test.toml:1 — defined here
- `Prove-It pattern` — commands/test.toml:1, 11 — defined here
- `test-driven-development` — commands/test.toml:4 — used here
- `browser-testing-with-devtools` — commands/test.toml:18 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `.gemini/commands/test.toml` (EXACT duplicate ledger group 4). Emphasizes strict verification by requiring explicit confirmation of test failure before attempting any implementation or bug fix.

## Context cost
650 bytes (~165 tokens). Loads `test-driven-development` and optionally `browser-testing-with-devtools`.
