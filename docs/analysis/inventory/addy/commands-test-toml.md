---
package: addy
path: commands/test.toml
type: command
bytes: 650
unit: inv-addy-4
aliases:
  - .gemini/commands/test.toml
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Design intent — required
Provides a slash command entry point (`/test`) for executing the test-driven development workflow on new features (red-green-refactor) and the Prove-It pattern for bug fixes (reproduce with failing test, confirm failure, implement fix, confirm pass, regression run). Without this command, agents tend to implement code before testing or claim bug fixes without automated regression proof.

## Phase — required
addy:Verify

## Inputs — required
- Feature description or bug report — commands/test.toml:6, 11
- Test suite of the target repository — commands/test.toml:16

## Outputs — required
- Failing test, implemented code, passing test verification, regression test results — commands/test.toml:7-9, 12-16

## Invokes — required
- skill test-driven-development — commands/test.toml:4
- skill browser-testing-with-devtools — commands/test.toml:18

## Invoked by — required
- entry point — invoked by the user or harness as a slash command (`/test`)

## Concepts named — required, verbatim
- `TDD` — commands/test.toml:1 — used here
- `Prove-It pattern` — commands/test.toml:1, 11 — used here

## Structure
- description — commands/test.toml:1
- prompt — commands/test.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical canonical file to `.gemini/commands/test.toml` (ledger EXACT group 4). Recommends delegating browser-related verification to `browser-testing-with-devtools` via Chrome DevTools MCP.

## Context cost
650 bytes (approx. 160 tokens) for this command file. Invokes `skills/test-driven-development/SKILL.md` (16,483 bytes) and `skills/browser-testing-with-devtools/SKILL.md` (16,334 bytes).
