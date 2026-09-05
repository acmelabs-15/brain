---
package: addy
path: .gemini/commands/test.toml
type: command
bytes: 650
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .gemini/commands/test.toml:1

## Design intent — required
Guides test-driven engineering workflows for new capabilities (write failing test, implement, refactor) and defect fixes (reproduce with failing test via the Prove-It pattern, fix, verify), with DevTools integration for browser issues.

## Phase — required
addy:test

## Inputs — required
Feature specification, expected behavior, or defect reports (.gemini/commands/test.toml:6, 11).

## Outputs — required
Automated test suite additions and code implementations or bug fixes (.gemini/commands/test.toml:7-9, 12-16).

## Invokes — required
- skill test-driven-development — .gemini/commands/test.toml:4
- skill browser-testing-with-devtools — .gemini/commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `Refactor` — .gemini/commands/test.toml:9 — used here
- `Prove-It pattern` — .gemini/commands/test.toml:11 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/test.toml` (canonical member of EXACT group 4 in `docs/analysis/manifest/addy-duplicates.md`). Defines the Prove-It reproduction pattern before bug fixing.

## Context cost
650 bytes, ~165 tokens.
