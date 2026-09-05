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
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-commands-test.js

## Purpose — required, verbatim
> "test('passes matching command twins and maps plan to planning', () => {" — scripts/validate-commands-test.js:61 (no explicit purpose statement)

## Design intent — required
Automated test suite for `scripts/validate-commands.js`. Uses Node's test runner (`node:test`) and temporary directory sandboxes to verify slash-command cross-tool parity and description synchronization across `.claude/commands/`, `.gemini/commands/`, and `commands/`. Verifies that the validator handles command name mapping (`plan` to `planning`), detects missing command twins, detects commands in TOML missing from Claude, reports drift between descriptions, produces actionable errors on malformed descriptions, and correctly parses escaped quotes in TOML double-quoted strings.

## Phase — required
none

## Inputs — required
Code and child-process execution of `scripts/validate-commands.js` via `spawnSync` (scripts/validate-commands-test.js:12,49). Mock command files generated in temporary sandbox directories across `.claude/commands/`, `.gemini/commands/`, and `commands/` (scripts/validate-commands-test.js:16,33,39).

## Outputs — required
Test runner reports to stdout/stderr. Exits 0 on test success, non-zero on assertion failure.

## Invokes — required
- script validate-commands.js — scripts/validate-commands-test.js:12

## Invoked by — required
- config test-plugin-install.yml — .github/workflows/test-plugin-install.yml:58

## Concepts named — required, verbatim
- `validate-commands.js` — scripts/validate-commands-test.js:12 — used here
- `makeSandbox` — scripts/validate-commands-test.js:15 — defined here
- `writeClaudeCommand` — scripts/validate-commands-test.js:30 — defined here
- `writeTomlCommand` — scripts/validate-commands-test.js:38 — defined here
- `writeMatchingCommands` — scripts/validate-commands-test.js:42 — defined here
- `command twins` — scripts/validate-commands-test.js:61 — defined here
- `planning` — scripts/validate-commands-test.js:61 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-commands-test.js`, JavaScript (Node.js CommonJS test script), 151 lines
- documented invocation: "node --test scripts/validate-commands-test.js" — .github/workflows/test-plugin-install.yml:58
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun test ./scripts/validate-commands-test.js`, stdout `scripts/validate-commands-test.js:\n(pass) passes matching command twins and maps plan to planning\n(pass) fails when a Claude command is missing a TOML twin\n(pass) fails when a TOML command has no Claude twin\n(pass) reports all descriptions when command twins drift\n(pass) fails with an actionable error for a malformed description\n(pass) parses escaped quotes in double-quoted TOML descriptions\n\n 6 pass\n 0 fail`, actual exit code: 0. Direct execution via `node --test scripts/validate-commands-test.js` fails with exit code 1 due to parent monorepo `package.json` `"type": "module"`. Direct execution via `bun scripts/validate-commands-test.js` fails with exit code 1 requiring `bun test`.
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: none explicitly documented in comments; standard test runner exit codes (0 on pass, 1 on failure).
  - Actual exit paths: Relies on `node:assert/strict` assertion throws and test runner process termination (zero explicit `process.exit()` calls).
- for validators/gates: can it exit non-zero? Yes, exits non-zero on assertion failure. Does it fail on the source repo's own default branch? No, passes all 6 tests.
- does the output match what the documentation claims? Yes, all 6 test scenarios execute and pass.

## Defects — required
- `script-bug` · `scripts/validate-commands-test.js:5` · Uses CommonJS `require()` without a local `package.json` specifying `"type": "commonjs"`, failing with `ReferenceError: require is not defined in ES module scope` when executed under Node.js in parent directories configured with `"type": "module"`.

## Observations
Provides automated test coverage for `scripts/validate-commands.js`, validating cross-tool command parity, the `plan` to `planning` stem translation (line 61), missing twin detection, description drift reporting, and TOML quote escaping (line 130).

## Context cost
5471 bytes + 7108 bytes (`validate-commands.js`) = 12579 bytes, ~3100 tokens.
