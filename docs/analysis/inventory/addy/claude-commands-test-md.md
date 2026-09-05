---
package: addy
path: .claude/commands/test.md
type: command
bytes: 665
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 62f72b64cfac6db984db072fdc987a23e6049876191297da5f37367def986ff2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/test.md

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .claude/commands/test.md:2

## Design intent — required
Orchestrates test-driven development workflows for both new capabilities (Red-Green-Refactor) and bug remediation (Prove-It pattern). It guarantees that code changes are driven by failing automated tests and verified against regressions, including browser-level verification via Chrome DevTools MCP.

## Phase — required
addy:Test

## Inputs — required
- Feature descriptions, bug reports, or error logs
- Existing project test suite and execution runner

## Outputs — required
- Failing behavior-describing tests or bug-reproducing tests
- Source code implementing features or bug fixes
- Passing test results and regression test suite run outputs

## Invokes — required
- skill agent-skills:test-driven-development — .claude/commands/test.md:5
- skill agent-skills:browser-testing-with-devtools — .claude/commands/test.md:19

## Invoked by — required
none

## Concepts named — required, verbatim
- `test-driven-development` — .claude/commands/test.md:5 — used here
- `Prove-It pattern` — .claude/commands/test.md:12 — defined here
- `browser-testing-with-devtools` — .claude/commands/test.md:19 — used here

## Structure
Dual workflow branches: New features (steps 1–3: write failing test, implement, refactor) and Bug fixes (steps 1–5: reproduce bug with failing test, confirm failure, implement fix, confirm pass, regression run), followed by DevTools browser testing integration.

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Formalizes the "Prove-It" pattern for defects: requiring agents to verify that the reproducing test actually fails prior to authoring any fix logic, preventing speculative fixes.

## Context cost
665 bytes (~166 tokens). Invocations load `test-driven-development` and `browser-testing-with-devtools`.
