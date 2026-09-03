# Work Unit Report & Inventory Extraction: `inv-addy-10` (Explorer 2)

**Session**: 006  
**Unit**: `inv-addy-10`  
**Package**: `addy` (`github.com/addyosmani/agent-skills` @ `d2c37ef6225dd8726cdd369a8030307f48592d26`)  
**Investigator**: Explorer 2 (`.agents/explorer_inv_addy_10_2`)  
**Focus Files**:
1. `sources/addy/scripts/validate-skills.js` (2,401 bytes, 70 lines)
2. `sources/addy/scripts/validate-commands-test.js` (5,471 bytes, 151 lines)

---

## 1. Executive Summary

This report delivers the complete inventory extraction and deep technical analysis for two core scripts in Addy's skill catalog:
- **`scripts/validate-skills.js`**: The primary CLI entry point for Tier 1 structural validation of all skills against `docs/skill-anatomy.md`. It delegates validation logic to `scripts/lib/skill-lint.js` and formats terminal output for local development and CI.
- **`scripts/validate-commands-test.js`**: An automated regression test suite using `node:test` that validates the multi-platform command parity and description synchronization tool (`scripts/validate-commands.js`) across Claude Code, Gemini CLI, and Antigravity.

### Key Discoveries & Defects
1. **Module System Collision (`execution-environment-leak` / `other`)**:
   - `sources/addy/` does not include a `package.json` file.
   - In its native repository or standalone CI container, Node.js defaults `.js` files to CommonJS, allowing `require(...)` to succeed.
   - When nested within the `brain-v2` workspace, Node traverses upward to `/Users/peterkloss/Dev/ACMElabs/brain-v2/package.json` (which declares `"type": "module"`). Node then treats all `.js` files in `sources/addy/scripts/` as ES modules and crashes with `ReferenceError: require is not defined in ES module scope`.
   - Both scripts run cleanly and completely under Bun (`bun scripts/validate-skills.js` and `bun test ./scripts/validate-commands-test.js`), as well as under Node in an isolated environment lacking the parent `package.json`.
2. **Documentation Drift (`doc-drift`)**:
   - `CLAUDE.md:43` asserts `- npm test — Not applicable (this is a documentation project)`.
   - However, `.github/workflows/test-plugin-install.yml` executes multiple test suites via `node --test` (including `validate-commands-test.js`).
   - `CLAUDE.md:44` mentions `Validate: Check that all SKILL.md files have valid YAML frontmatter with name and description` under `## Commands`, but omits the actual command (`node scripts/validate-skills.js`), whereas `docs/developer-onboarding.md:56, 100` and CI explicitly require it.

---

## 2. Technical Evaluation: `scripts/validate-skills.js`

### 2.1 Checklist Evaluation (METHOD.md §4)

- **Existence**:
  - `path.resolve(__dirname, '..', 'skills')` resolves to `sources/addy/skills` (verified via `ls`: directory exists with 25 skills).
  - `./lib/skill-lint` resolves to `sources/addy/scripts/lib/skill-lint.js` (verified via `ls`: 11,808 bytes).
  - `docs/skill-anatomy.md` referenced in header comment exists (verified via `ls`: 8,849 bytes).
- **Execution & Exit Paths**:
  - Code exit paths:
    - Line 28: `process.exit(1)` when `!fs.existsSync(SKILLS_DIR)`.
    - Line 59: `process.exit(1)` when `totalErrors > 0`.
    - Line 68: `process.exit(1)` in top-level `catch (err)` block on unexpected exceptions.
    - Line 56-59: Implicit exit code 0 when `totalErrors === 0` (even when `totalWarnings > 0`, prints `PASSED WITH WARNINGS` and does not call `process.exit(1)`).
  - Documented exit codes (`validate-skills.js:11`):
    `Exit codes: 0 = all clear, 1 = one or more errors`
  - Actual runs:
    1. `bun scripts/validate-skills.js` in `sources/addy`:
       - Exit code: `0`
       - Output: Checked 25 skills, 0 errors, 0 warnings, `PASSED`. Both `idea-refine` and `using-agent-skills` correctly tagged as `(section checks exempt)`.
    2. Isolated Node run (in standalone temp directory without parent `package.json`):
       - Exit code: `0`
       - Output: Exactly matches Bun run (`25 skills checked — 0 error(s), 0 warning(s) — PASSED`).
    3. Nested Node run within `brain-v2`:
       - Exit code: `1`
       - Stderr: `ReferenceError: require is not defined in ES module scope ... /Users/peterkloss/Dev/ACMElabs/brain-v2/package.json contains "type": "module"`.
    4. Failing Path Test 1 (Missing `skills/` directory):
       - Exit code: `1`
       - Stderr: `ERROR: skills directory not found at /path/to/skills`.
    5. Failing Path Test 2 (Malformed skill):
       - Exit code: `1`
       - Stdout: `1 skills checked — 7 error(s), 0 warning(s) — FAILED`.
    6. Warning Path Test 3 (Dead cross-reference warning):
       - Exit code: `0`
       - Stdout: `1 skills checked — 0 error(s), 1 warning(s) — PASSED WITH WARNINGS`.
  - Gate evaluation: Reliable gate. Can exit non-zero on structural failures. Does not fail on repository default branch.
- **Documentation Drift**:
  - `CLAUDE.md:44` does not document `node scripts/validate-skills.js` explicitly under `## Commands`, whereas `docs/developer-onboarding.md:56, 100` and `.github/workflows/test-plugin-install.yml:23` document it as the mandatory Tier 1 pre-PR and CI gate.
- **Internal Consistency**:
  - Internally consistent. Accurately counts errors and warnings, aggregates them per skill directory, displays appropriate terminal glyphs (`✓`, `✗`, `⚠`), and prints an abridged summary.
- **Cross-File Consistency**:
  - Perfectly matches `scripts/lib/skill-lint.js` lines 5–8, which state: `The CLI in scripts/validate-skills.js is a thin wrapper over it. Splitting the rules out of the CLI keeps them importable and unit-testable...`.
- **Composition**:
  - Invokes: `scripts/lib/skill-lint.js` (`lintSkill`), `skills/*/SKILL.md`.
  - Invoked by: `.github/workflows/test-plugin-install.yml:23`, `docs/developer-onboarding.md:56, 100`, `evals/README.md:18`.
  - Consumes: Directory listing of `skills/` and file contents of `skills/*/SKILL.md`.
  - Produces: Console output and process exit code (0 or 1).
- **Context Cost**:
  - File size: 2,401 bytes (~600 tokens).
  - Runtime dependency size: `scripts/lib/skill-lint.js` is 11,808 bytes (~2,950 tokens). Total loaded footprint: ~14,209 bytes (~3,550 tokens).
- **Design Intent**:
  - Automated enforcement of skill structural integrity. Ensures agent discovery descriptions contain actionable "Use when" triggers, directory names match frontmatter names, mandatory sections are populated, and dead references are caught. Decouples CLI execution from pure linting logic.

---

## 3. Technical Evaluation: `scripts/validate-commands-test.js`

### 3.1 Checklist Evaluation (METHOD.md §4)

- **Existence**:
  - `VALIDATOR` points to `path.join(__dirname, 'validate-commands.js')` (`sources/addy/scripts/validate-commands.js`, verified: exists, 7,108 bytes).
  - Referenced command directories (`.claude/commands`, `.gemini/commands`, `commands`) exist in `sources/addy/` (verified via `ls`).
- **Execution & Exit Paths**:
  - Code exit paths:
    - No explicit `process.exit()` calls in test code.
    - Exits via `node:test` runner / `bun test` runner: exit 0 when all tests pass; exit 1 on any assertion failure (`assert.equal`, `assert.match`).
  - Documented invocation:
    - `.github/workflows/test-plugin-install.yml:58`: `node --test scripts/validate-commands-test.js`.
  - Actual runs:
    1. `bun test ./scripts/validate-commands-test.js` in `sources/addy`:
       - Exit code: `0`
       - Output: `6 pass, 0 fail, Ran 6 tests across 1 file. [105.00ms]`.
    2. Isolated Node run (`node --test scripts/validate-commands-test.js` in standalone temp directory):
       - Exit code: `0`
       - Output: `ℹ tests 6, ℹ pass 6, ℹ fail 0, ℹ duration_ms 259.309542`.
    3. Direct Node execution (`node scripts/validate-commands-test.js` in standalone temp directory without `--test` flag):
       - Exit code: `0` (built-in `node:test` runs tests directly).
    4. Nested Node run within `brain-v2`:
       - Exit code: `1`
       - Stderr: `ReferenceError: require is not defined in ES module scope` due to `brain-v2/package.json` `"type": "module"`.
    5. Direct Bun execution (`bun scripts/validate-commands-test.js` without `bun test`):
       - Exit code: `1`
       - Stderr: `error: Cannot use test outside of the test runner. Run "bun test" to run tests.`
    6. Assertion failure test (mutated status assertion `0` -> `999`):
       - Exit code: `1`
       - Output: Reports `AssertionError: 0 !== 999` and lists failed test.
  - Test Suite Coverage (6 tests):
    1. `passes matching command twins and maps plan to planning`: tests positive command parity and stem mapping.
    2. `fails when a Claude command is missing a TOML twin`: tests negative case (missing twin in `commands/`).
    3. `fails when a TOML command has no Claude twin`: tests negative case (missing twin in `.claude/commands/`).
    4. `reports all descriptions when command twins drift`: tests drift detection when descriptions differ across platforms.
    5. `fails with an actionable error for a malformed description`: tests error reporting on missing description key.
    6. `parses escaped quotes in double-quoted TOML descriptions`: tests regex unescaping of `\"` in TOML descriptions.
- **Documentation Drift**:
  - `CLAUDE.md:43` claims `npm test — Not applicable (this is a documentation project)`. Does not mention that regression tests exist for validators under `scripts/*-test.js`.
  - CI (`.github/workflows/test-plugin-install.yml`) treats this test suite as a required blocking gate on pull requests.
- **Internal Consistency**:
  - Consistently uses sandboxed temp directories (`fs.mkdtempSync`), copies the validator, creates mock directory trees, executes `validate-commands.js` in a child process, and cleans up temp files in `afterEach`.
- **Cross-File Consistency**:
  - Accurately mirrors all behavior and edge cases handled by `scripts/validate-commands.js` (including `NAME_MAP = { plan: 'planning' }` and regex for escaped quotes).
- **Composition**:
  - Invokes: `scripts/validate-commands.js` (via spawned child process).
  - Invoked by: `.github/workflows/test-plugin-install.yml:58`.
  - Consumes: `validate-commands.js` script.
  - Produces: Test execution reports and exit code (0 or 1).
- **Context Cost**:
  - File size: 5,471 bytes (~1,368 tokens).
  - Runtime dependency size: `scripts/validate-commands.js` is 7,108 bytes (~1,777 tokens). Total loaded footprint: ~12,579 bytes (~3,145 tokens).
- **Design Intent**:
  - Verifies the integrity and edge-case handling of `validate-commands.js`. Protects against regressions in multi-platform command synchronization across Claude Code, Gemini CLI, and Antigravity.

---

## 4. Proposed Inventory Entry: `scripts/validate-skills.js`

```markdown
---
package: addy
path: scripts/validate-skills.js
type: script
bytes: 2401
unit: inv-addy-10
deprecated: false
---

# scripts/validate-skills.js

## Purpose — required, verbatim
> "CLI that validates every skill in skills/ against the rules in
 * docs/skill-anatomy.md. The rules themselves live in scripts/lib/skill-lint.js
 * (a single source of truth, importable and unit-testable); this file is a thin
 * wrapper that walks the skills directory, runs the linter, prints the report,
 * and sets the exit code." — scripts/validate-skills.js:5-9

## Design intent — required
Enforces repository-wide structural compliance for every skill in `skills/` against the canonical schema specified in `docs/skill-anatomy.md`. By serving as a CLI entry point for CI and pre-commit checks while delegating validation rules to `scripts/lib/skill-lint.js`, it ensures automated quality gates for skill discovery, agent routing (trigger phrasing), section completeness, and cross-skill references, preventing invalid skill definitions from entering the catalog.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Directory tree: `skills/` (`path.resolve(__dirname, '..', 'skills')`)
- Skill markdown files: `skills/*/SKILL.md` (read via `lintSkill`)
- In-memory set of known skill directory names (`knownSkills` set)

## Outputs — required
- Formatted console output per skill: `  ✓  <name>`, `  ✗  <name>`, or `  ⚠  <name>` with error and warning details
- Summary status line: `<count> skills checked — <errors> error(s), <warnings> warning(s) — <status>`
- Exit code: 0 on pass or warnings-only; 1 on one or more errors or unexpected runtime exceptions

## Invokes — required
- script `scripts/lib/skill-lint.js` — scripts/validate-skills.js:19
- directory `skills/` — scripts/validate-skills.js:21
- function `lintSkill` — scripts/validate-skills.js:19, 41
- doc `docs/skill-anatomy.md` — scripts/validate-skills.js:6

## Invoked by — required
- doc `docs/developer-onboarding.md` — docs/developer-onboarding.md:56, 100
- doc `evals/README.md` — evals/README.md:18
- config `.github/workflows/test-plugin-install.yml` — .github/workflows/test-plugin-install.yml:23

## Concepts named — required, verbatim
- `validate-skills.js` — scripts/validate-skills.js:3 — defined here
- `docs/skill-anatomy.md` — scripts/validate-skills.js:6 — used here
- `scripts/lib/skill-lint.js` — scripts/validate-skills.js:6 — used here
- `SKILLS_DIR` — scripts/validate-skills.js:21 — defined here
- `lintSkill` — scripts/validate-skills.js:19, 41 — used here
- `section checks exempt` — scripts/validate-skills.js:46 — used here

## Structure
- Header block comment (lines 2-12)
- Configuration & imports (lines 14-21)
- `// ─── Main ────────────────────────────────────────────────────────────────────` (line 23)
- `main()` function definition (lines 25-60)
- Execution try/catch wrapper (lines 64-69)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-skills.js`, language: JavaScript (Node.js/Bun), lines: 70
- documented invocation: `node scripts/validate-skills.js` — docs/developer-onboarding.md:56, 100; .github/workflows/test-plugin-install.yml:23; evals/README.md:18
- **executed:** yes
- actual command run: `bun scripts/validate-skills.js`, abridged stdout: `  ✓  api-and-interface-design ... 25 skills checked — 0 error(s), 0 warning(s) — PASSED`, **actual exit code: 0**
- actual command run in isolated standalone repo: `node scripts/validate-skills.js`, abridged stdout: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`, **actual exit code: 0**
- actual command run in brain-v2 nested worktree: `node scripts/validate-skills.js`, abridged stderr: `ReferenceError: require is not defined in ES module scope ... /Users/peterkloss/Dev/ACMElabs/brain-v2/package.json contains "type": "module"`, **actual exit code: 1**
- documented exit codes: `Exit codes: 0 = all clear, 1 = one or more errors` (`scripts/validate-skills.js:11`) vs actual exit paths: `process.exit(1)` on missing `SKILLS_DIR` (`scripts/validate-skills.js:28`), `process.exit(1)` on `totalErrors > 0` (`scripts/validate-skills.js:59`), `process.exit(1)` on unexpected catch (`scripts/validate-skills.js:68`), implicit exit 0 on clean pass or warnings-only (`scripts/validate-skills.js:56-59`).
- for validators/gates: can exit non-zero (exits 1 on missing directory, lint errors, unhandled exceptions); does not fail on source repository default branch (passes all 25 skills with 0 errors).
- does output match documentation: yes, matches documented Tier 1 structural validation output.

## Defects — required
- `other` — scripts/validate-skills.js:16: When executed with Node.js in an enclosing ESM parent workspace (`brain-v2/package.json` contains `"type": "module"`), Node treats `validate-skills.js` as ESM and fails on `require()` because `sources/addy/` lacks its own `package.json` declaring CommonJS. Runs cleanly with `bun` or in standalone repo.
- `doc-drift` — CLAUDE.md:44 vs docs/developer-onboarding.md:56 and .github/workflows/test-plugin-install.yml:23: `CLAUDE.md` lists `Validate: Check that all SKILL.md files have valid YAML frontmatter with name and description` under `Commands` without the exact CLI command, whereas onboarding guide and GitHub Actions specify `node scripts/validate-skills.js`.

## Observations
- Clean architectural decoupling between the CLI wrapper (`validate-skills.js`) and the validation engine (`scripts/lib/skill-lint.js`).
- Warnings (such as dead cross-references) correctly do not trigger CI failure (exits 0 with `PASSED WITH WARNINGS`).
- Supports exemption labeling: skills in `SECTION_EXEMPT_SKILLS` (`using-agent-skills`, `idea-refine`) receive `(section checks exempt)` notice.

## Context cost
2,401 bytes (~600 tokens) file size; ~14,209 bytes (~3,550 tokens) including loaded `scripts/lib/skill-lint.js`.
```

---

## 5. Proposed Inventory Entry: `scripts/validate-commands-test.js`

```markdown
---
package: addy
path: scripts/validate-commands-test.js
type: script
bytes: 5471
unit: inv-addy-10
deprecated: false
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
`addy:VERIFY`

## Inputs — required
- Target script under test: `scripts/validate-commands.js` (`VALIDATOR` at line 12)
- Ephemeral filesystem test sandboxes created via `fs.mkdtempSync`

## Outputs — required
- Child process executions of `scripts/validate-commands.js`
- Test assertions via `node:assert/strict`
- Test suite status and summary report (via `node:test` or `bun test`)

## Invokes — required
- script `scripts/validate-commands.js` — scripts/validate-commands-test.js:12, 19, 49
- Node built-ins: `node:assert/strict`, `node:fs`, `node:os`, `node:path`, `node:child_process`, `node:test` — scripts/validate-commands-test.js:5-10

## Invoked by — required
- config `.github/workflows/test-plugin-install.yml` — .github/workflows/test-plugin-install.yml:58

## Concepts named — required, verbatim
- `validate-commands-test.js` — scripts/validate-commands-test.js:16 — defined here
- `validate-commands.js` — scripts/validate-commands-test.js:12 — used here
- `makeSandbox` — scripts/validate-commands-test.js:15 — defined here
- `writeClaudeCommand` — scripts/validate-commands-test.js:30 — defined here
- `writeTomlCommand` — scripts/validate-commands-test.js:38 — defined here
- `writeMatchingCommands` — scripts/validate-commands-test.js:42 — defined here
- `command twins` — scripts/validate-commands-test.js:61, 75, 100 — defined here / used here
- `plan` to `planning` mapping — scripts/validate-commands-test.js:61 — used here
- `escaped quotes in double-quoted TOML descriptions` — scripts/validate-commands-test.js:130 — defined here / used here
- `.claude/commands` — scripts/validate-commands-test.js:33, 96 — used here
- `.gemini/commands` — scripts/validate-commands-test.js:44 — used here
- `commands` — scripts/validate-commands-test.js:45, 84 — used here

## Structure
- Imports and setup (lines 1-13)
- Helper: `makeSandbox` (lines 15-22)
- Helper: `writeFile` (lines 24-28)
- Helper: `writeClaudeCommand` (lines 30-36)
- Helper: `writeTomlCommand` (lines 38-40)
- Helper: `writeMatchingCommands` (lines 42-46)
- Helper: `run` (lines 48-53)
- Teardown: `afterEach` (lines 55-59)
- `test('passes matching command twins and maps plan to planning')` (lines 61-73)
- `test('fails when a Claude command is missing a TOML twin')` (lines 75-86)
- `test('fails when a TOML command has no Claude twin')` (lines 88-98)
- `test('reports all descriptions when command twins drift')` (lines 100-112)
- `test('fails with an actionable error for a malformed description')` (lines 114-128)
- `test('parses escaped quotes in double-quoted TOML descriptions')` (lines 130-150)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands-test.js`, language: JavaScript (Node.js/Bun), lines: 151
- documented invocation: `node --test scripts/validate-commands-test.js` — .github/workflows/test-plugin-install.yml:58
- **executed:** yes
- actual command run: `bun test ./scripts/validate-commands-test.js`, abridged stdout: `6 pass, 0 fail, Ran 6 tests across 1 file. [105.00ms]`, **actual exit code: 0**
- actual command run in isolated standalone repo: `node --test scripts/validate-commands-test.js`, abridged stdout: `ℹ tests 6, ℹ pass 6, ℹ fail 0, ℹ duration_ms 259.309542`, **actual exit code: 0**
- actual command run in brain-v2 nested worktree: `node --test ./scripts/validate-commands-test.js`, abridged stderr: `ReferenceError: require is not defined in ES module scope ... /Users/peterkloss/Dev/ACMElabs/brain-v2/package.json contains "type": "module"`, **actual exit code: 1**
- documented exit codes vs actual exit paths: no explicit `process.exit()` calls; exit code determined by test runner (0 for all pass, 1 on assertion failure / unhandled exception).
- for validators/gates: test suite for validator; exits non-zero on assertion failure; all 6 tests pass on default branch.
- does output match documentation: yes, passes 6 tests matching CI expectations.

## Defects — required
- `other` — scripts/validate-commands-test.js:5: When executed with `node --test` within an enclosing ESM parent workspace (`brain-v2/package.json` `"type": "module"`), fails due to `require()` in `.js` file. Runs cleanly with `bun test` or in standalone repo.
- `doc-drift` — CLAUDE.md:43 vs .github/workflows/test-plugin-install.yml:58: `CLAUDE.md:43` asserts `npm test — Not applicable (this is a documentation project)`, but GitHub Actions CI runs test suites including `node --test scripts/validate-commands-test.js`.

## Observations
- Exemplary hermetic test design: builds clean scratch directories with `fs.mkdtempSync`, copies validator, populates mock command files for all three tools, invokes validator via child process, and thoroughly cleans up via `afterEach`.
- Directly tests multi-platform parity contract between Claude Code (`.claude/commands`), Gemini CLI (`.gemini/commands`), and Antigravity (`commands/`).

## Context cost
5,471 bytes (~1,368 tokens) file size; ~12,579 bytes (~3,145 tokens) including tested `scripts/validate-commands.js`.
```

---

## 6. Work-Unit Report for Focus Files

```markdown
---
unit: inv-addy-10 (Explorer 2 Focus Files)
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-10 (Focus Files)

## Files assigned
- [x] sources/addy/scripts/validate-skills.js (2,401 bytes, 70 lines) — read in full
- [x] sources/addy/scripts/validate-commands-test.js (5,471 bytes, 151 lines) — read in full

## Outputs produced
- `.agents/explorer_inv_addy_10_2/report.md` (detailed technical report and proposed inventory entries)
- `.agents/explorer_inv_addy_10_2/handoff.md` (5-component completion handoff)
- `.agents/explorer_inv_addy_10_2/progress.md` (heartbeat log)
- `.agents/explorer_inv_addy_10_2/BRIEFING.md` (situational awareness)
- `.agents/explorer_inv_addy_10_2/DISPATCH.md` (dispatch log)

## Scripts executed
- `sources/addy/scripts/validate-skills.js`:
  - Command: `bun scripts/validate-skills.js` | Exit code: `0`
  - Command: `node scripts/validate-skills.js` (isolated environment) | Exit code: `0`
  - Command: `node scripts/validate-skills.js` (nested in brain-v2) | Exit code: `1` (ESM resolution defect)
  - Failing test 1 (missing skills dir): `bun .../validate-skills.js` | Exit code: `1`
  - Failing test 2 (malformed skill): `bun .../validate-skills.js` | Exit code: `1`
  - Warning test 3 (dead cross-ref): `bun .../validate-skills.js` | Exit code: `0` (`PASSED WITH WARNINGS`)
- `sources/addy/scripts/validate-commands-test.js`:
  - Command: `bun test ./scripts/validate-commands-test.js` | Exit code: `0` (6 pass, 0 fail)
  - Command: `node --test scripts/validate-commands-test.js` (isolated environment) | Exit code: `0` (6 pass, 0 fail)
  - Command: `node --test ./scripts/validate-commands-test.js` (nested in brain-v2) | Exit code: `1` (ESM resolution defect)
  - Command: `node scripts/validate-commands-test.js` (standalone) | Exit code: `0`
  - Failing test (assertion mismatch): `bun test .../scripts/test.js` | Exit code: `1`

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validate-skills.js` delegates all validation logic to `scripts/lib/skill-lint.js`. The findings here should be synthesized with whichever unit inventories `skill-lint.js` and `skill-lint-test.js`.
- `scripts/validate-commands-test.js` directly tests `scripts/validate-commands.js`. Findings here should be coupled with the inventory entry for `validate-commands.js`.
- Both scripts expose an environment sensitivity: nested inside an ESM package root without their own `package.json`, Node fails on `require()`. Bun succeeds unconditionally.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~2,500 tokens (7,872 bytes of primary source + ~35,000 bytes of supporting documentation and scripts).
- Tokens of output written: ~3,800 tokens.
```
