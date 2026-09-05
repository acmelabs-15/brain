---
package: addy
path: scripts/validate-commands-test.js
type: script
bytes: 5471
unit: inv-addy-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-commands-test.js

## Purpose — required, verbatim
> "passes matching command twins and maps plan to planning" — scripts/validate-commands-test.js:61
(no explicit purpose statement)

## Design intent — required
Provides the automated test suite for `scripts/validate-commands.js`. Using Node's native `node:test` runner and hermetic sandboxes, it tests that the slash-command parity validator correctly verifies command twins across `.claude/commands/`, `.gemini/commands/`, and `commands/`, enforces the name mapping of `plan` to `planning`, detects missing TOML twins, flags orphan TOML commands without Claude counterparts, reports drifted descriptions across tool directories, catches malformed descriptions, and correctly parses escaped quotes in TOML double-quoted strings.

## Phase — required
none

## Inputs — required
- Validator script under test: reads and copies `scripts/validate-commands.js` via `VALIDATOR` — scripts/validate-commands-test.js:12.
- Hermetic test file systems: generates temporary directory structures via `makeSandbox` — scripts/validate-commands-test.js:15 containing synthetic slash commands created with `writeClaudeCommand` — scripts/validate-commands-test.js:30, `writeTomlCommand` — scripts/validate-commands-test.js:38, and `writeMatchingCommands` — scripts/validate-commands-test.js:42.

## Outputs — required
- Assertion results and process exit code via `node:test` runner: 0 if all tests pass, non-zero on test assertion failure.

## Invokes — required
- script validate-commands.js — scripts/validate-commands-test.js:12

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:58

## Concepts named — required, verbatim
- `command twins` — scripts/validate-commands-test.js:61 — used here
- `maps plan to planning` — scripts/validate-commands-test.js:61 — defined here
- `missing a TOML twin` — scripts/validate-commands-test.js:75 — defined here
- `no Claude twin` — scripts/validate-commands-test.js:88 — defined here
- `reports all descriptions when command twins drift` — scripts/validate-commands-test.js:100 — defined here
- `malformed description` — scripts/validate-commands-test.js:114 — defined here
- `parses escaped quotes in double-quoted TOML descriptions` — scripts/validate-commands-test.js:130 — defined here
- `makeSandbox` — scripts/validate-commands-test.js:15 — defined here
- `writeFile` — scripts/validate-commands-test.js:24 — defined here
- `writeClaudeCommand` — scripts/validate-commands-test.js:30 — defined here
- `writeTomlCommand` — scripts/validate-commands-test.js:38 — defined here
- `writeMatchingCommands` — scripts/validate-commands-test.js:42 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands-test.js`, language: JavaScript (Node.js test runner), lines: 151
- documented invocation: `node --test scripts/validate-commands-test.js` — .github/workflows/test-plugin-install.yml:58
- **executed:** yes
- actual command run: `bun test ./scripts/validate-commands-test.js` (in `sources/addy`), abridged stdout: `scripts/validate-commands-test.js:\n(pass) passes matching command twins and maps plan to planning\n(pass) fails when a Claude command is missing a TOML twin\n(pass) fails when a TOML command has no Claude twin\n(pass) reports all descriptions when command twins drift\n(pass) fails with an actionable error for a malformed description\n(pass) parses escaped quotes in double-quoted TOML descriptions\n\n 6 pass\n 0 fail\nRan 6 tests across 1 file.`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths in code: Node/Bun test runner exits 0 when all tests pass, non-zero if assertions fail (`node:assert/strict`).
- for validators/gates: test suite validating the slash-command parity validator.
- does the output match what the documentation claims? Yes, all 6 test scenarios pass.

## Defects — required
none

## Observations
- Tests the bidirectional parity requirements across three command directory trees: `.claude/commands/`, `.gemini/commands/`, and `commands/`.
- Verifies special handling of stem mapping (`plan` in Claude vs. `planning` in TOML).

## Context cost
5,471 bytes (~1,368 tokens). Loads `validate-commands.js` (7,108 bytes), totaling 12,579 bytes (~3,145 tokens).
