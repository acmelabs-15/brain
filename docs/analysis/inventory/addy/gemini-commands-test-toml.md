---
package: addy
path: .gemini/commands/test.toml
type: command
bytes: 650
unit: inv-addy-1
---

# .gemini/commands/test.toml

## Purpose — required, verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — .gemini/commands/test.toml:1

## Design intent — required
Guides test-driven development (TDD) workflows for both greenfield feature implementation (Red-Green-Refactor) and defect remediation via the "Prove-It pattern" (mandating a failing reproduction test before code modification). It also provides seamless escalation to Chrome DevTools MCP for browser-related issues. Without it, bug fixes are frequently implemented without regression tests or behavioral proofs, and features risk lacking verifiable assertions.

## Phase — required
`addy:Verify`

## Inputs — required
- Feature specifications or bug reports — .gemini/commands/test.toml:6, 11
- Existing test suites, fixtures, and application source code — .gemini/commands/test.toml:7, 12, 16

## Outputs — required
- Failing feature or reproduction test cases — .gemini/commands/test.toml:7, 12
- Minimal passing implementation code — .gemini/commands/test.toml:8, 14
- Clean full-suite test execution results — .gemini/commands/test.toml:16

## Invokes — required
- skill test-driven-development — .gemini/commands/test.toml:4
- skill browser-testing-with-devtools — .gemini/commands/test.toml:18
- external-tool Chrome DevTools MCP — .gemini/commands/test.toml:18

## Invoked by — required
none

## Concepts named — required, verbatim
- `test-driven-development` — .gemini/commands/test.toml:1, 4 — used here
- `Prove-It pattern` — .gemini/commands/test.toml:1, 11 — defined here
- `Red-Green-Refactor` — .gemini/commands/test.toml:7-9 — defined here
- `reproduction test` — .gemini/commands/test.toml:12 — defined here
- `regression testing` — .gemini/commands/test.toml:16 — used here
- `browser-testing-with-devtools` — .gemini/commands/test.toml:18 — used here
- `Chrome DevTools MCP` — .gemini/commands/test.toml:18 — used here

## Structure
- `For new features:` — .gemini/commands/test.toml:6
- `For bug fixes (Prove-It pattern):` — .gemini/commands/test.toml:11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict distinction between greenfield features (descriptive tests that fail first) and defect remediation (the Prove-It pattern reproducing the bug with a failing test before fix) (.gemini/commands/test.toml:6-16).
- Composes with `browser-testing-with-devtools` when issues involve browser interactions or DOM/network behavior (.gemini/commands/test.toml:18).

## Context cost
- File size: 650 bytes (~165 tokens).
- Transitive context cost when invoked: loads `skills/test-driven-development/SKILL.md` (9,840 bytes) and optionally `skills/browser-testing-with-devtools/SKILL.md` (9,120 bytes), totaling ~19,610 bytes (~4,900 tokens) before test execution.
