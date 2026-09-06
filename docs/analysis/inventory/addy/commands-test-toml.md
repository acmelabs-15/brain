---
package: addy
path: commands/test.toml
type: command
bytes: 650
unit: inv-addy-4
aliases:
  - .gemini/commands/test.toml
memo_inputs:
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Design intent — required
Provides the `/test` slash command entry point for test-driven development. Differentiates between new feature implementation (write failing test, implement, refactor) and bug fixes (the Prove-It pattern: reproduce with failing test, confirm failure, implement fix, confirm pass, regression run). Supports browser testing via Chrome DevTools MCP.

## Phase — required
addy:Build

## Inputs — required
- Feature requirements or bug descriptions: "For new features:" — commands/test.toml:6, "For bug fixes (Prove-It pattern):" — commands/test.toml:11

## Outputs — required
- Verified implementation and regression test suite: "5. Run the full test suite for regressions" — commands/test.toml:16

## Invokes — required
- skill test-driven-development — commands/test.toml:4
- skill browser-testing-with-devtools — commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — commands/test.toml:1 — used here
- `Prove-It pattern` — commands/test.toml:1, 11 — defined here
- `browser-testing-with-devtools` — commands/test.toml:18 — used here
- `Chrome DevTools MCP` — commands/test.toml:18 — used here

## Structure
- description — commands/test.toml:1
- prompt — commands/test.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `.gemini/commands/test.toml` (650 bytes, sha256: c54f004d67f9fd4f). Satisfies the manifest row for both paths.

## Context cost
650 bytes, approximately 165 tokens.
