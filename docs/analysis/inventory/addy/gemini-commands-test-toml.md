---
package: addy
path: .gemini/commands/test.toml
type: command
bytes: 650
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .gemini/commands/test.toml:1

## Design intent — required
Executes the test-driven development workflow via `test-driven-development` in Gemini CLI. It distinguishes between new feature development (Red-Green-Refactor loop) and bug fixing (Prove-It pattern: reproducing failing test, confirming failure, implementing fix, verifying green, running regression suite). For web/browser defects, it additionally directs the agent to invoke `browser-testing-with-devtools` using Chrome DevTools MCP.

## Phase — required
addy:Verify

## Inputs — required
- Feature specification or bug description — .gemini/commands/test.toml:6, 11
- Test suite — .gemini/commands/test.toml:16

## Outputs — required
- Failing test demonstrating expected behavior or reproducing bug — .gemini/commands/test.toml:7, 12
- Implementation code passing tests — .gemini/commands/test.toml:8, 14
- Regression test suite execution results — .gemini/commands/test.toml:16

## Invokes — required
- skill test-driven-development — .gemini/commands/test.toml:4
- skill browser-testing-with-devtools — .gemini/commands/test.toml:18

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `test-driven-development` — .gemini/commands/test.toml:4 — used here
- `Prove-It pattern` — .gemini/commands/test.toml:1, 11 — defined here
- `browser-testing-with-devtools` — .gemini/commands/test.toml:18 — used here
- `Chrome DevTools MCP` — .gemini/commands/test.toml:18 — used here

## Structure
- "For new features:" — .gemini/commands/test.toml:6
- "For bug fixes (Prove-It pattern):" — .gemini/commands/test.toml:11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `commands/test.toml` (hash `c54f004d67f9fd4f`, 650 bytes). Defines the "Prove-It pattern" as an explicit 5-step discipline for defect remediation to guarantee every bug fix starts with an observable reproduction test before source code modification.

## Context cost
650 bytes (~160 tokens). If invoked skills are loaded: `test-driven-development` (17,994 bytes), `browser-testing-with-devtools` (17,665 bytes).
