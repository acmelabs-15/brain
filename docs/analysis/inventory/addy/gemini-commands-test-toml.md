---
package: addy
path: .gemini/commands/test.toml
type: command
bytes: 650
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .gemini/commands/test.toml:1

## Design intent — required
Gemini/Antigravity slash command executing the TDD workflow for features (failing test -> implementation -> refactor) and bug fixes (Prove-It pattern: failing reproduction test -> confirm failure -> fix -> confirm pass -> full suite regression check), with Chrome DevTools MCP browser testing integration.

## Phase — required
addy:VERIFY

## Inputs — required
- Feature requirements or bug reports
- Existing codebase and test suite

## Outputs — required
- Test suites and implementation code
- Passing regression verification

## Invokes — required
- skill test-driven-development — .gemini/commands/test.toml:4
- skill browser-testing-with-devtools — .gemini/commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `TDD workflow` — .gemini/commands/test.toml:1 — defined here
- `Prove-It pattern` — .gemini/commands/test.toml:1,11 — defined here
- `test-driven-development` — .gemini/commands/test.toml:4 — used here
- `regressions` — .gemini/commands/test.toml:16 — used here
- `browser-testing-with-devtools` — .gemini/commands/test.toml:18 — used here
- `Chrome DevTools MCP` — .gemini/commands/test.toml:18 — used here

## Structure
- `For new features:` steps 1–3
- `For bug fixes (Prove-It pattern):` steps 1–5
- Browser testing directive

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `commands/test.toml`.

## Context cost
650 bytes, ~165 tokens. Transitive cost: loads `test-driven-development` (16483 bytes) and optionally `browser-testing-with-devtools` (14539 bytes), totaling ~31672 bytes (~7920 tokens).
