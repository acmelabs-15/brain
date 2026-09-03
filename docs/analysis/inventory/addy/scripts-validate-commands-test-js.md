---
package: addy
path: scripts/validate-commands-test.js
type: script
bytes: 5471
unit: inv-addy-10
---

# scripts/validate-commands-test.js

## Purpose — required, verbatim
> "const VALIDATOR = path.join(__dirname, 'validate-commands.js');
const sandboxes = [];

function makeSandbox() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'agent-skills-validate-commands-test-'));" — scripts/validate-commands-test.js:12-16 (no explicit purpose statement)

## Design intent — required
Provides automated regression testing for the slash-command validator (`scripts/validate-commands.js`). It verifies that command parity and description synchronization across the three target platforms (Claude Code `.claude/commands/*.md`, Gemini CLI `.gemini/commands/*.toml`, and Antigravity `commands/*.toml`) are accurately enforced, validating both success paths (including the `plan` -> `planning` file-stem alias and escaped TOML quotes) and failure modes (missing twins, command drift, malformed descriptions).

## Phase — required
`cross-phase` (developer test suite verifying slash command definitions that span all lifecycle stages: `addy:Define`, `addy:Plan`, `addy:Build`, `addy:Verify`, `addy:Review`, `addy:Ship`)

## Inputs — required
- Script under test: `scripts/validate-commands.js` (`VALIDATOR` at line 12)
- Ephemeral filesystem test sandboxes created via `fs.mkdtempSync` in `os.tmpdir()` — scripts/validate-commands-test.js:15-22

## Outputs — required
- Child process executions of `scripts/validate-commands.js` in temporary sandboxes
- Test assertions via `node:assert/strict`
- Test suite status and summary report (via `node:test` or `bun test`)
- Exit code: `0` on all tests passing, `1` on assertion failure

## Invokes — required
- script `scripts/validate-commands.js` — scripts/validate-commands-test.js:12, 19, 49
- module `node:assert/strict` — scripts/validate-commands-test.js:5
- module `node:fs` — scripts/validate-commands-test.js:6
- module `node:os` — scripts/validate-commands-test.js:7
- module `node:path` — scripts/validate-commands-test.js:8
- module `node:child_process` — scripts/validate-commands-test.js:9
- module `node:test` — scripts/validate-commands-test.js:10

## Invoked by — required
- config `.github/workflows/test-plugin-install.yml` — .github/workflows/test-plugin-install.yml:58

## Concepts named — required, verbatim
- `VALIDATOR` — scripts/validate-commands-test.js:12 — defined here
- `validate-commands.js` — scripts/validate-commands-test.js:12, 19, 49 — used here
- `validate-commands-test.js` — scripts/validate-commands-test.js:16 — defined here
- `makeSandbox` — scripts/validate-commands-test.js:15-22 — defined here
- `writeFile` — scripts/validate-commands-test.js:24-28 — defined here
- `writeClaudeCommand` — scripts/validate-commands-test.js:30-36 — defined here
- `writeTomlCommand` — scripts/validate-commands-test.js:38-40 — defined here
- `writeMatchingCommands` — scripts/validate-commands-test.js:42-46 — defined here
- `command twins` — scripts/validate-commands-test.js:61, 75, 100 — defined here / used here
- `plan to planning` — scripts/validate-commands-test.js:61 — used here
- `escaped quotes in double-quoted TOML descriptions` — scripts/validate-commands-test.js:130 — defined here
- `.claude/commands` — scripts/validate-commands-test.js:33, 96 — used here
- `.gemini/commands` — scripts/validate-commands-test.js:44, 79, 90, 103, 119, 135 — used here
- `commands` — scripts/validate-commands-test.js:45, 84, 91, 104, 141 — used here

## Structure
- Imports and setup (lines 1-13)
- Helper: `makeSandbox` (lines 15-22)
- Helper: `writeFile` (lines 24-28)
- Helper: `writeClaudeCommand` (lines 30-36)
- Helper: `writeTomlCommand` (lines 38-40)
- Helper: `writeMatchingCommands` (lines 42-46)
- Helper: `run` (lines 48-53)
- Teardown: `afterEach` hook removing sandboxes (lines 55-59)
- `test('passes matching command twins and maps plan to planning')` (lines 61-73)
- `test('fails when a Claude command is missing a TOML twin')` (lines 75-86)
- `test('fails when a TOML command has no Claude twin')` (lines 88-98)
- `test('reports all descriptions when command twins drift')` (lines 100-112)
- `test('fails with an actionable error for a malformed description')` (lines 114-128)
- `test('parses escaped quotes in double-quoted TOML descriptions')` (lines 130-150)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands-test.js`
- language: JavaScript (Node.js / Bun CommonJS)
- lines: 151
- documented invocation: `node --test scripts/validate-commands-test.js` — .github/workflows/test-plugin-install.yml:58
- **executed:** yes
- actual command run: `bun test ./scripts/validate-commands-test.js`
- actual stdout (abridged):
  ```
  scripts/validate-commands-test.js:
  (pass) passes matching command twins and maps plan to planning [17.89ms]
  (pass) fails when a Claude command is missing a TOML twin [14.94ms]
  (pass) fails when a TOML command has no Claude twin [14.48ms]
  (pass) reports all descriptions when command twins drift [15.21ms]
  (pass) fails with an actionable error for a malformed description [15.21ms]
  (pass) parses escaped quotes in double-quoted TOML descriptions [15.14ms]

   6 pass
   0 fail
  Ran 6 tests across 1 file. [108.00ms]
  ```
- **actual exit code: 0**
- documented exit codes vs actual exit paths: No explicit exit code documented in header; test runner managed. No explicit `process.exit()` calls in test code; exits 0 on all tests passing, exits non-zero on assertion failure (`assert.equal`, `assert.match`).
- for validators/gates: test suite for validator; exits non-zero on assertion failure; all 6 tests pass on default branch.
- does the output match what the documentation claims? Yes, all 6 test cases pass matching CI expectations.

## Defects — required
- `doc-drift` — CLAUDE.md:43: Asserts `npm test — Not applicable (this is a documentation project)` despite the existence of this test suite actively executed in GitHub Actions CI (`.github/workflows/test-plugin-install.yml:58`).
- `other` — scripts/validate-commands-test.js:5: CommonJS script without `.cjs` extension fails when run with Node inside an ESM parent workspace (`brain-v2/package.json` contains `"type": "module"`), crashing with `ReferenceError: require is not defined in ES module scope`. Runs cleanly with `bun test` or in a standalone checkout.

## Observations
- Exemplary hermetic test design: builds clean scratch directories with `fs.mkdtempSync`, copies validator, populates mock command files for all three tools, invokes validator via child process, and thoroughly cleans up via `afterEach`.
- Directly tests multi-platform parity contract between Claude Code (`.claude/commands`), Gemini CLI (`.gemini/commands`), and Antigravity (`commands/`).
- Validates the `plan` -> `planning` file-stem mapping alias between markdown slash commands and TOML commands.

## Context cost
- File size: 5,471 bytes (151 lines, ~1,368 tokens).
- Dynamic load: Imports tested script `scripts/validate-commands.js` (7,108 bytes). Total context footprint: ~12,579 bytes (~3,145 tokens).
