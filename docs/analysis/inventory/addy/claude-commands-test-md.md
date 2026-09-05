---
package: addy
path: .claude/commands/test.md
type: command
bytes: 665
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 62f72b64cfac6db984db072fdc987a23e6049876191297da5f37367def986ff2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .claude/commands/test.md:2

## Design intent — required
Encapsulates test-driven development into actionable sequences for new features (write failing test, implement, refactor) and bug fixes (the Prove-It pattern: reproduce bug with failing test, confirm failure, fix, confirm pass, check regression). Connects browser testing to Chrome DevTools MCP.

## Phase — required
addy:Build

## Inputs — required
- Feature requirements or bug reports — .claude/commands/test.md:7, 12
- Existing codebase and test suite — .claude/commands/test.md:17

## Outputs — required
- Failing test demonstrating expected behavior or reproducing bug — .claude/commands/test.md:8, 13
- Implementation or bug fix passing tests — .claude/commands/test.md:9, 15
- Test suite verification showing no regressions — .claude/commands/test.md:17

## Invokes — required
- skill agent-skills:test-driven-development — .claude/commands/test.md:5
- skill agent-skills:browser-testing-with-devtools — .claude/commands/test.md:19

## Invoked by — required
none

## Concepts named — required, verbatim
`TDD workflow` — .claude/commands/test.md:2 — defined here
`Prove-It pattern` — .claude/commands/test.md:2, 12 — defined here
`Chrome DevTools MCP` — .claude/commands/test.md:19 — used here

## Structure
none (flat lists for new features and bug fixes)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The Prove-It pattern mandates explicit confirmation of test failure before attempting any bug fix, preventing false positives and unverified fixes.

## Context cost
665 bytes, approximately 160 tokens.
