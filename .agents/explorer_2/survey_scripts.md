# Survey of Executable Scripts, CLI Commands, Entrypoints, and Test Runners

## Overview & Scope Summary

This survey provides a comprehensive catalog of all executable scripts, CLI commands, entrypoints, and test runners within the scope of work unit `inv-addy-1` (28 files: 9 `.gemini/commands/*.toml` slash command definitions and 19 `evals/cases/*.json` eval suite cases) as well as the repository-level tooling (`brain-v2`), the `sources/addy` package scripts, and test runners.

---

## 1. Inventory Unit `inv-addy-1` Scope & Referenced Executables

### 1.1 Direct Files in `inv-addy-1` (28 Files)
None of the 28 files in `inv-addy-1` are standalone executable scripts themselves. Rather, they represent two categories of declarative/config artifacts:
- **9 Slash Command Definitions (`sources/addy/.gemini/commands/*.toml`)**: Define prompt instructions and command behavior for Gemini CLI and Antigravity CLI.
- **19 Skill Evaluation Cases (`sources/addy/evals/cases/*.json`)**: Define positive/negative trigger prompts and behavioral evaluation fixtures/expectations for the `run-evals.js` test runner.

### 1.2 Commands & Tools Referenced Within `inv-addy-1` Files

| File / Component | Referenced Command / Tool / Entrypoint | Documented Usage Example | Purpose & Execution Context |
|---|---|---|---|
| `.gemini/commands/ship.toml` | Subagents: `code-reviewer`, `security-auditor`, `test-engineer` | Issue subagent tool calls concurrently: `code-reviewer`, `security-auditor`, `test-engineer` | Parallel fan-out review for launch decisions; fallback: sequential execution in main context |
| `.gemini/commands/webperf.toml` | Lighthouse CLI | `npx lighthouse <url> --output json --output-path ./report.json` | Deep mode web performance audit from generated Lighthouse report |
| `.gemini/commands/webperf.toml` | Chrome DevTools MCP CLI | `npx -p chrome-devtools-mcp chrome-devtools lighthouse_audit --output-format=json`<br>`npx -p chrome-devtools-mcp chrome-devtools <tool>` | Capture live runtime audit data via Chrome DevTools MCP |
| `.gemini/commands/constraints.toml` | Code scanning, secrets, deps, a11y, vitals | `Semgrep`, `gitleaks --redact`, `osv-scanner`, `axe-core`, `Lighthouse`, `size-limit`, `dependency-cruiser`, `Stryker` | Sane quality floor enforcement tools configured in `CONSTRAINTS.md` |
| `.gemini/commands/constraints.toml` | Package script hooks | `bun run check:fast`, `bun run check:task`, `bun run check:full` (added to `package.json`) | Fast edit-loop checks, task-end checks, and full CI validation |
| `.gemini/commands/constraints.toml` | Subcommands | `/constraints check`<br>`/constraints guard`<br>`/constraints ratchet` | Check current branch, guard against weakened bar in diff, ratchet floor |
| `.gemini/commands/build.toml` | Git baseline check | `git status --porcelain` | Clean working tree verification before starting autonomous loop |
| `.gemini/commands/build.toml` | Slash command modes | `/build`<br>`/build auto`<br>`/build all` | Single-task step vs. autonomous multi-task execution loop |
| `evals/cases/test-driven-development.json` | Python unittest runner (in fixture) | `python3 -m unittest` | Ecosystem-aware test execution for Python ledger fixture |
| `evals/cases/ci-cd-and-automation.json` | Node CI script pipeline | `npm install`, `npm run lint`, `npm test` | CI PR validation pipeline gates |

---

## 2. Scripts and Validators in `sources/addy` Package

The `sources/addy` repository includes a test and validation suite located under `sources/addy/scripts/`, `sources/addy/hooks/`, and `sources/addy/skills/idea-refine/scripts/`. The 28 files of `inv-addy-1` serve as the direct inputs to several of these scripts.

### 2.1 Evals Runner: `sources/addy/scripts/run-evals.js`
- **Purpose**: Skill evaluation runner for agent-skills. Runs Tier 2 trigger routing, negative prompt ownership, cosine similarity collision checks, and schema validity across all 25 skills and 25 eval case files (including the 19 in `inv-addy-1`). Also supports Tier 3 behavioral grading via headless `claude`.
- **Location**: `sources/addy/scripts/run-evals.js`
- **Dependencies**: Node/Bun standard libraries (`fs`, `os`, `path`, `child_process`). Zero third-party dependencies.
- **Documented Usage Examples** (from `sources/addy/evals/README.md` and `sources/addy/CLAUDE.md`):
  ```bash
  # Tier 2 — deterministic CI-safe trigger and routing evals
  node scripts/run-evals.js
  node scripts/run-evals.js --min-rank1 80

  # Tier 3 — behavioral eval via headless Claude
  node scripts/run-evals.js --behavioral test-driven-development
  node scripts/run-evals.js --behavioral test-driven-development --dry-run
  ```
- **Exact Bun Execution Command**:
  ```bash
  bun run sources/addy/scripts/run-evals.js
  bun run sources/addy/scripts/run-evals.js --min-rank1 80
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Output:
    ```
    Running skill evals across 25 skills, 25 case files

    136 checks passed — 0 error(s), 0 warning(s)
    trigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)
    PASSED
    ```
- **Side Effects**: Reads `skills/` and `evals/cases/*.json`. Tier 3 writes results to `evals/results/`.

### 2.2 Command Validator: `sources/addy/scripts/validate-commands.js`
- **Purpose**: Guards against drift across the 3 slash-command directories (`.claude/commands/*.md`, `.gemini/commands/*.toml`, and `commands/*.toml`). Asserts full command parity and checks that the `description` string is identical across all 3 variants. Directly validates the 9 command files in `inv-addy-1`.
- **Location**: `sources/addy/scripts/validate-commands.js`
- **Dependencies**: Node/Bun standard libraries (`fs`, `path`). Zero third-party dependencies.
- **Documented Usage Example**:
  ```bash
  node scripts/validate-commands.js
  ```
- **Exact Bun Execution Command**:
  ```bash
  bun run sources/addy/scripts/validate-commands.js
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Output:
    ```
    Checking command parity...
      ✓  build
      ✓  code-simplify
      ✓  constraints
      ✓  plan (planning in toml dirs)
      ✓  review
      ✓  ship
      ✓  spec
      ✓  test
      ✓  webperf

    Checking description sync...
      ✓  build
      ✓  code-simplify
      ✓  constraints
      ✓  plan
      ✓  review
      ✓  ship
      ✓  spec
      ✓  test
      ✓  webperf

    9 commands checked — 0 error(s) — PASSED
    ```
- **Side Effects**: Read-only inspection of `.claude/commands/`, `.gemini/commands/`, and `commands/`.

### 2.3 Skill Structure Validator: `sources/addy/scripts/validate-skills.js`
- **Purpose**: Validates every `SKILL.md` in `skills/` against `docs/skill-anatomy.md` rules (frontmatter, name, description, required sections, trigger clauses).
- **Location**: `sources/addy/scripts/validate-skills.js` (uses helper `scripts/lib/skill-lint.js`)
- **Documented Usage Example**:
  ```bash
  node scripts/validate-skills.js
  ```
- **Exact Bun Execution Command**:
  ```bash
  bun run sources/addy/scripts/validate-skills.js
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED

### 2.4 Artifact Paths Validator: `sources/addy/scripts/validate-artifact-paths.js`
- **Purpose**: Validates that producer and consumer skills/commands reference canonical artifact paths (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`) without drift.
- **Location**: `sources/addy/scripts/validate-artifact-paths.js`
- **Exact Bun Execution Command**:
  ```bash
  bun run sources/addy/scripts/validate-artifact-paths.js
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Output: 7 files checked — 0 error(s) — PASSED

### 2.5 Reference Links Validator: `sources/addy/scripts/validate-reference-links.js`
- **Purpose**: Checks that markdown links from skills to `references/*.md` resolve correctly without broken links or improper colocation assumptions.
- **Location**: `sources/addy/scripts/validate-reference-links.js`
- **Exact Bun Execution Command**:
  ```bash
  bun run sources/addy/scripts/validate-reference-links.js
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Output: 25 skills checked — 0 error(s) — PASSED

### 2.6 Version Validator: `sources/addy/scripts/validate-versions.js`
- **Purpose**: Ensures plugin manifest files (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`) all match the latest git tag from `git describe --tags --abbrev=0`.
- **Location**: `sources/addy/scripts/validate-versions.js`
- **Exact Bun Execution Command**:
  ```bash
  # Must be run from sources/addy directory where git tags exist:
  (cd sources/addy && bun run scripts/validate-versions.js)
  ```
- **Observed Output & Return Code**:
  - Exit code: `0` (when executed in `sources/addy`)
  - Output: `All plugin manifests use version 0.6.8.`
  - Defect / Note: When executed from `brain-v2` root, exits with code 1 / status 128 because `git describe --tags --abbrev=0` has no tags in `brain-v2`.

### 2.7 Unit & Regression Test Suites in `sources/addy/scripts/`
All `-test.js` files in `sources/addy/scripts/` are written using `node:test` and `node:assert/strict`. When executed via `bun test ./sources/addy/scripts/<name>-test.js`, Bun natively runs the tests:

| Test File | Bun Execution Command | Tests Passed | Exit Code |
|---|---|---|---|
| `validate-commands-test.js` | `bun test ./sources/addy/scripts/validate-commands-test.js` | 6 pass, 0 fail | `0` |
| `validate-artifact-paths-test.js` | `bun test ./sources/addy/scripts/validate-artifact-paths-test.js` | 6 pass, 0 fail | `0` |
| `validate-reference-links-test.js` | `bun test ./sources/addy/scripts/validate-reference-links-test.js` | 7 pass, 0 fail | `0` |
| `run-evals-test.js` | `bun test ./sources/addy/scripts/run-evals-test.js` | 15 pass, 0 fail | `0` |
| `lib/skill-lint-test.js` | `bun test ./sources/addy/scripts/lib/skill-lint-test.js` | 8 pass, 0 fail | `0` |
| `validate-versions-test.js` | `(cd sources/addy && bun test ./scripts/validate-versions-test.js)` | 1 pass, 0 fail | `0` |

### 2.8 Helper Script: `sources/addy/skills/idea-refine/scripts/idea-refine.sh`
- **Purpose**: Helper script for the `idea-refine` skill to create and initialize the `docs/ideas/` directory.
- **Location**: `sources/addy/skills/idea-refine/scripts/idea-refine.sh`
- **Exact Execution Command**:
  ```bash
  bash sources/addy/skills/idea-refine/scripts/idea-refine.sh
  ```
- **Observed Output & Return Code**:
  - Exit code: `0`
  - Stderr: `Created directory: docs/ideas` (or `Directory already exists: docs/ideas`)
  - Stdout: `{"status": "ready", "directory": "docs/ideas"}`
  - Side effects: Creates `docs/ideas` directory if not present.

### 2.9 Session Start Hook & Test: `sources/addy/hooks/`
- **Hook Script**: `sources/addy/hooks/session-start.sh`
  - Purpose: SessionStart hook emitting `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`.
  - Execution: `bash sources/addy/hooks/session-start.sh`
  - Exit code: `0`
  - Dependency: Requires `jq` (falls back to guidance message if missing).
- **Hook Regression Test**: `sources/addy/hooks/session-start-test.sh`
  - Documented Usage Example (from `CONTRIBUTING.md:87`): `bash hooks/session-start-test.sh`
  - Execution Result: Exits with code `1` (`Error: expected IMPORTANT priority, got undefined`).
  - **Defect Identified**: Doc/code drift between hook output envelope (migrated to `hookSpecificOutput`) and regression test assertions (still expecting legacy `priority` and `message` properties).

---

## 3. Project Tooling in Repository (`brain-v2`)

All project tooling for `brain-v2` synthesis is written in Bun/TypeScript under `scripts/synthesis/` in accordance with Rule R9.

| Script / Tool | Location | Documented Usage Example | Exact Bun Execution Command | Expected Output & Exit Code | Side Effects & Dependencies |
|---|---|---|---|---|---|
| **Package Test Runner** | `package.json:7` | `bun test` | `bun test` | Exit `0`. Runs 89 tests across 15 files in `sources/rjm`. | Discovers and executes `*.test.ts` files not excluded in `bunfig.toml`. |
| **Package Typecheck** | `package.json:8` | `npm run typecheck` / `bun run typecheck` | `bun run typecheck` (or `bunx tsc --noEmit`) | Exit `0` when clean. Runs `tsc --noEmit` against `tsconfig.json`. | Typechecks repository TypeScript files. |
| **Manifest Generator** | `scripts/synthesis/manifest.ts` | `bun run scripts/synthesis/manifest.ts` | `bun run scripts/synthesis/manifest.ts` | Exit `0`. Stdout: `Manifests generated.` | Walks `sources/{addy,matt,rjm}`, calculates byte counts, fetches external docs into `sources/{addy,matt}-external/`, and emits `docs/analysis/manifest/{addy,matt,rjm,rjm-excluded}.md`. |
| **Coverage Verifier** | `scripts/synthesis/coverage.ts` | `bun run scripts/synthesis/coverage.ts` | `bun run scripts/synthesis/coverage.ts` | Exit `1` if unchecked manifest rows or empty fields exist; Exit `0` when complete (`Coverage: clean`). | Read-only check of manifest files and inventory entries. |
| **Glossary Linter** | `scripts/synthesis/glossary-lint.ts` | `bun run scripts/synthesis/glossary-lint.ts` | `bun run scripts/synthesis/glossary-lint.ts` | Exit `0`. Stdout: `Glossary lint: clean`. | Checks for undefined canonical terms in `docs/`. |
| **Partitioning Helper** | `scripts/synthesis/partition.ts` | `bun run scripts/synthesis/partition.ts` | `bun run scripts/synthesis/partition.ts` | Exit `0`. Emits formatted Markdown table rows partitioning manifests into ~50KB work units. | Read-only utility reading manifest files. |

---

## 4. Test Runners & Execution Environment Catalog

| Test Runner | Command | Configuration File | Scope & Behavior |
|---|---|---|---|
| **Bun Test (Repo)** | `bun test` | `bunfig.toml` | Discovers unit tests across the workspace; ignores `**/evals/fixtures/**` and `**/__tests__/**`. |
| **Bun Test (Addy scripts)** | `bun test ./sources/addy/scripts/<file>-test.js` | Direct path invocation | Executes `node:test` based test suites with high performance and zero external dependencies. |
| **TypeScript Compiler** | `bunx tsc --noEmit` | `tsconfig.json` | Strict type checking with `Preserve` module, `bundler` resolution, Bun/Node types. |

---

## 5. Summary Matrix of All Executables

| Executable / Entrypoint | Category | Location | Runtime | Status / Exit Code |
|---|---|---|---|---|
| `manifest.ts` | Repository Tool | `scripts/synthesis/manifest.ts` | Bun | Pass (0) |
| `coverage.ts` | Repository Tool | `scripts/synthesis/coverage.ts` | Bun | Pass/Fail (1 on uncompleted inventory) |
| `glossary-lint.ts` | Repository Tool | `scripts/synthesis/glossary-lint.ts` | Bun | Pass (0) |
| `partition.ts` | Repository Tool | `scripts/synthesis/partition.ts` | Bun | Pass (0) |
| `bun test` | Repository Runner | `package.json` | Bun Test | Pass (0, 89 tests) |
| `run-evals.js` | Addy Evals Runner | `sources/addy/scripts/run-evals.js` | Bun / Node | Pass (0, 136 checks passed, 86% rank-1) |
| `validate-commands.js` | Addy Command Validator | `sources/addy/scripts/validate-commands.js` | Bun / Node | Pass (0, 9 commands validated) |
| `validate-skills.js` | Addy Skill Validator | `sources/addy/scripts/validate-skills.js` | Bun / Node | Pass (0, 25 skills checked) |
| `validate-artifact-paths.js` | Addy Artifact Validator | `sources/addy/scripts/validate-artifact-paths.js` | Bun / Node | Pass (0, 7 files checked) |
| `validate-reference-links.js` | Addy Links Validator | `sources/addy/scripts/validate-reference-links.js` | Bun / Node | Pass (0, 25 skills checked) |
| `validate-versions.js` | Addy Version Validator | `sources/addy/scripts/validate-versions.js` | Bun / Node | Pass (0 in addy cwd; fails in repo root) |
| `validate-commands-test.js` | Addy Test Suite | `sources/addy/scripts/validate-commands-test.js` | Bun Test | Pass (0, 6 tests) |
| `validate-artifact-paths-test.js` | Addy Test Suite | `sources/addy/scripts/validate-artifact-paths-test.js` | Bun Test | Pass (0, 6 tests) |
| `validate-reference-links-test.js` | Addy Test Suite | `sources/addy/scripts/validate-reference-links-test.js` | Bun Test | Pass (0, 7 tests) |
| `run-evals-test.js` | Addy Test Suite | `sources/addy/scripts/run-evals-test.js` | Bun Test | Pass (0, 15 tests) |
| `skill-lint-test.js` | Addy Test Suite | `sources/addy/scripts/lib/skill-lint-test.js` | Bun Test | Pass (0, 8 tests) |
| `validate-versions-test.js` | Addy Test Suite | `sources/addy/scripts/validate-versions-test.js` | Bun Test | Pass (0 in addy cwd) |
| `idea-refine.sh` | Addy Skill Helper | `sources/addy/skills/idea-refine/scripts/idea-refine.sh` | Bash | Pass (0) |
| `session-start.sh` | Addy Hook | `sources/addy/hooks/session-start.sh` | Bash / jq | Pass (0) |
| `session-start-test.sh` | Addy Hook Test | `sources/addy/hooks/session-start-test.sh` | Bash / Node | Defect (1, assertion expectation drift) |
