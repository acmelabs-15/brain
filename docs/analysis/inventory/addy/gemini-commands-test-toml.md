---
package: addy
path: .gemini/commands/test.toml
type: command
bytes: 650
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .gemini/commands/test.toml:1

## Design intent — required
Defines `/test` command for Gemini CLI executing disciplined Test-Driven Development loops. Differentiates workflows for new feature development (fail-implement-refactor) from defect remediation using the Prove-It pattern (reproduce-confirm-fix-verify-regressions), with optional DevTools browser integration.

## Phase — required
addy:Test

## Inputs — required
Feature requirements or defect report; codebase and existing test suites (.gemini/commands/test.toml:6,11).

## Outputs — required
Failing tests establishing expectations (.gemini/commands/test.toml:7,12); implementation fixing behavior or adding capability (.gemini/commands/test.toml:8,14); verified passing test suites with no regressions (.gemini/commands/test.toml:15-16).

## Invokes — required
- skill test-driven-development — .gemini/commands/test.toml:4
- skill browser-testing-with-devtools — .gemini/commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — .gemini/commands/test.toml:1 — used here
- `Prove-It pattern` — .gemini/commands/test.toml:1 — defined here
- `test-driven-development` — .gemini/commands/test.toml:4 — used here
- `regressions` — .gemini/commands/test.toml:16 — used here
- `browser-testing-with-devtools` — .gemini/commands/test.toml:18 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/test.toml` (EXACT group 4 in `addy-duplicates.md`, SHA `c54f004d67f9fd4f`).

## Context cost
650 bytes, ~160 tokens.
