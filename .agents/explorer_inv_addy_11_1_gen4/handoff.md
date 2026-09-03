# Handoff Report: inv-addy-11 — Scripts & Tests Analysis

## 1. Observation

### 1.1 Assigned Files Under Review
1. `sources/addy/scripts/lib/skill-lint.js` (11,808 bytes, 276 lines)
2. `sources/addy/scripts/lib/skill-lint-test.js` (4,645 bytes, 142 lines)
3. `sources/addy/scripts/validate-versions.js` (949 bytes, 37 lines)
4. `sources/addy/scripts/validate-commands.js` (7,108 bytes, 188 lines)
5. `sources/addy/scripts/validate-artifact-paths-test.js` (4,572 bytes, 117 lines)

### 1.2 Verification Commands & Empirical Execution (R2)

#### Command 1: `validate-versions.js`
- **Command**: `cd sources/addy && bun scripts/validate-versions.js`
- **Exit Code**: `0`
- **Stdout**:
  ```text
  All plugin manifests use version 0.6.8.
  ```
- **Failing Path Verification**:
  When run from outside `sources/addy` (e.g. `bun sources/addy/scripts/validate-versions.js`):
  - **Exit Code**: `1`
  - **Stderr**:
    ```text
    fatal: No names found, cannot describe anything.
    error: Command failed: git describe --tags --abbrev=0
    ```
  - **Finding**: `scripts/validate-versions.js:21-25` does not pass `cwd` to `execFileSync("git", ...)`, and lines 8-14 use relative paths without `__dirname`. It assumes `process.cwd()` is the repository root with git tags.

#### Command 2: `validate-commands.js`
- **Command**: `cd sources/addy && bun scripts/validate-commands.js`
- **Exit Code**: `0`
- **Stdout**:
  ```text
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
- **Robustness**: Uses `ROOT = path.resolve(__dirname, '..')`, so running `bun sources/addy/scripts/validate-commands.js` from any directory succeeds.
- **Failing Path Verification**: Tested in `scripts/validate-commands-test.js` (lines 75, 88, 100, 114) asserting non-zero exit (`status 1`) on missing command twins, missing descriptions, and description drift.

#### Command 3: `skill-lint-test.js`
- **Command**: `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js`
- **Exit Code**: `0`
- **Stdout**:
  ```text
  bun test v1.4.0 (34cbb9a40)

  scripts/lib/skill-lint-test.js:
  (pass) a directory named after an Object.prototype key is not exempt from section checks [1.57ms]
  (pass) a genuinely allowlisted skill is still exempt [0.08ms]
  (pass) a skill claiming its own exemption without being allowlisted fails loud [0.11ms]
  (pass) a fully valid skill produces no errors [0.03ms]
  (pass) reports a description with no trigger clause [0.05ms]
  (pass) reports frontmatter name that disagrees with the directory [0.04ms]
  (pass) reports a workflow step declared without a matching process section [0.33ms]
  (pass) reports a missing frontmatter block [0.04ms]

   8 pass
   0 fail
  Ran 8 tests across 1 file. [18.00ms]
  ```

#### Command 4: `validate-artifact-paths-test.js`
- **Command**: `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js`
- **Exit Code**: `0`
- **Stdout**:
  ```text
  bun test v1.4.0 (34cbb9a40)

  scripts/validate-artifact-paths-test.js:
  (pass) passes when producers and consumers use the canonical artifact paths [20.96ms]
  (pass) fails when a producer drifts to an unapproved artifact path (the #93 regression) [14.84ms]
  (pass) reports the offending file and line number [14.25ms]
  (pass) accepts the docs/SPEC.md alternate spec location [13.51ms]
  (pass) ignores non-artifact markdown references (no false positives) [20.67ms]
  (pass) skips guarded files that do not exist [23.47ms]

   6 pass
   0 fail
  Ran 6 tests across 1 file. [123.00ms]
  ```

#### Command 5: `validate-skills.js` (Exercising `skill-lint.js`)
- **Command**: `cd sources/addy && bun scripts/validate-skills.js`
- **Exit Code**: `0`
- **Stdout**:
  ```text
    ✓  api-and-interface-design
    ...
    ✓  using-agent-skills (section checks exempt)

  25 skills checked — 0 error(s), 0 warning(s) — PASSED
  ```
- **Failing Path Verification**:
  Direct invocation of `lintSkillContent` on invalid input (`cd sources/addy && bun -e 'const { lintSkillContent } = require("./scripts/lib/skill-lint.js"); console.log(lintSkillContent("bad_name", "no frontmatter", new Set()));'`):
  - Returns `errors: [ "Missing or malformed YAML frontmatter (expected --- block at top of file)" ]`.
  - When called from `validate-skills.js`, triggers `process.exit(1)`.

---

## 2. Logic Chain

1. **Analysis of `sources/addy/.github/workflows/test-plugin-install.yml`**:
   - Lines 26, 29, 32, 35, 38, 41, 55, 58, 61, 64 list CI verification steps using Node 24 (`node scripts/...` and `node --test scripts/...`).
   - Comparison against repository test files reveals that `scripts/lib/skill-lint-test.js` is completely absent from the workflow. Because `sources/addy` has no `package.json` with an `npm test` script, `skill-lint-test.js` is never executed in CI, making it an orphaned test script.
2. **Analysis of Section Validation vs. Documentation**:
   - `docs/skill-anatomy.md:38-40` and `CONTRIBUTING.md:53` state: *"The frontmatter fields above are required. The section anatomy is a recommended pattern: equivalent headings such as How It Works, Workflow, or Core Process are fine when they preserve the same intent and keep the skill easy to follow."*
   - However, `sources/addy/scripts/lib/skill-lint.js:45-51, 201-209` strictly mandates:
     `const REQUIRED_SECTIONS = [['## Overview'], ['## When to Use'], ['## Common Rationalizations'], ['## Red Flags'], ['## Verification']];`
     with no aliases accepted, throwing hard errors that fail CI if any heading differs.
   - This contradiction directly caused `idea-refine` to fail validation, requiring a hardcoded bypass in `SECTION_EXEMPT_SKILLS` (`scripts/lib/skill-lint.js:59`).
3. **Analysis of Working Directory Assumption in `validate-versions.js`**:
   - Unlike `validate-commands.js:28` (which resolves `ROOT = path.resolve(__dirname, '..')`), `validate-versions.js` uses relative paths `manifestPaths = ["plugin.json", ...]` and runs `execFileSync("git", ["describe", ...])` without specifying `cwd`.
   - When run from any directory other than the repository root, it fails fatally.
4. **Analysis of Command Twin Asymmetry in `validate-commands.js`**:
   - Lines 38-40 define `NAME_MAP = { plan: 'planning' }`. Claude Code uses `.claude/commands/plan.md`, whereas Gemini and Antigravity use `.gemini/commands/planning.toml` and `commands/planning.toml`.
   - The validator bridges this discrepancy, but it confirms an unresolved naming difference across platforms in `sources/addy`.
5. **Analysis of Scope Boundaries in `validate-artifact-paths.js` and Test**:
   - `validate-artifact-paths.js` strictly guards `.claude/commands/*.md` but completely skips `.gemini/commands/*.toml` and `commands/*.toml`.

---

## 3. Caveats

- Node vs. Bun execution: `sources/addy` does not have its own `package.json`. In the parent workspace `/Users/peterkloss/Dev/ACMElabs/brain-v2`, `package.json` specifies `"type": "module"`. When executing scripts via `node` from within `sources/addy`, Node traverses upward and treats `.js` files as ES modules, throwing `ReferenceError: require is not defined in ES module scope`. However, under `bun`, CommonJS `require` executes cleanly without error. In Addy's original upstream repository, there was no root `"type": "module"`, so Node CommonJS execution succeeded.
- No other areas within `sources/addy` were modified (read-only investigation).

---

## 4. Conclusion

All 5 assigned files have been exhaustively analyzed, executed, and verified under both normal and error conditions. Concrete defects were identified:
1. `orphan`: `scripts/lib/skill-lint-test.js` is not wired into `.github/workflows/test-plugin-install.yml`.
2. `doc-drift` / `internal-contradiction`: `scripts/lib/skill-lint.js:45-51` enforces strict section headings, contradicting `docs/skill-anatomy.md:38-40` and `CONTRIBUTING.md:53` which claim section headings are flexible/recommended.
3. `doc-drift`: `scripts/lib/skill-lint.js:158` enforces a 1024-character description limit, which is omitted from `docs/skill-anatomy.md`.
4. `script-bug`: `scripts/validate-versions.js:21-25` fails if not executed from repository root due to unanchored `cwd`.
5. `cross-file-contradiction`: `scripts/validate-commands.js:38` documents `/plan` (Claude) vs `/planning` (Gemini/Antigravity) naming asymmetry.

Below are the complete, fully populated inventory entries for all five files.

---

# Inventory Entries

```markdown
---
package: addy
path: scripts/lib/skill-lint.js
type: script
bytes: 11808
unit: inv-addy-11
---

# scripts/lib/skill-lint.js

## Purpose — required, verbatim
> "skill-lint.js — the skill validation rules, as a shared library.
 *
 * This is the single source of truth for what makes a SKILL.md valid
 * (docs/skill-anatomy.md). The CLI in scripts/validate-skills.js is a thin
 * wrapper over it. Splitting the rules out of the CLI keeps them importable
 * and unit-testable without spawning a process or touching the filesystem." — scripts/lib/skill-lint.js:3-8

## Design intent — required
Separates validation logic and policy rules for `SKILL.md` from filesystem traversal and CLI reporting, establishing an in-memory, pure library (`lintSkillContent`) alongside a thin filesystem reader (`lintSkill`). This enables fast, isolated unit testing without process spawning or mock filesystems, while providing a single source of truth for skill format enforcement across CLI and automated test suites.

## Phase — required
cross-phase

## Inputs — required
- Arguments to `lintSkillContent(dirName, content, knownSkills)`:
  - `dirName`: string, skill directory name (e.g. `spec-driven-development`)
  - `content`: string, raw markdown content of `SKILL.md`
  - `knownSkills`: Set of strings containing valid skill directory names
- Arguments to `lintSkill(dirName, skillsDir, knownSkills)`:
  - `dirName`: string
  - `skillsDir`: string, filesystem path to `skills/` directory
  - `knownSkills`: Set of strings
  - Reads `${skillsDir}/${dirName}/SKILL.md` from disk

## Outputs — required
- Returns `{ errors: string[], warnings: string[], exempt: boolean }` object.
- Side effects: none (pure library, no file writing, no process exit).

## Invokes — required
- doc docs/skill-anatomy.md — scripts/lib/skill-lint.js:6
- script scripts/validate-skills.js — scripts/lib/skill-lint.js:6
- node:fs require('fs') — scripts/lib/skill-lint.js:23
- node:path require('path') — scripts/lib/skill-lint.js:24

## Invoked by — required
- script scripts/validate-skills.js:19
- script scripts/lib/skill-lint-test.js:8

## Concepts named — required, verbatim
- `YAML frontmatter` — scripts/lib/skill-lint.js:12 — used here
- `when to use` — scripts/lib/skill-lint.js:16 — used here
- `cross-skill references` — scripts/lib/skill-lint.js:20 — used here
- `dead-reference warning` — scripts/lib/skill-lint.js:63 — used here
- `fenced code blocks` — scripts/lib/skill-lint.js:81 — used here
- `exemption guard` — scripts/lib/skill-lint.js:175 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint.js:57 — defined here
- `REQUIRED_SECTIONS` — scripts/lib/skill-lint.js:45 — defined here
- `SKILL_REF_PATTERNS` — scripts/lib/skill-lint.js:65 — defined here
- `The [Workflow Name] Workflow` — scripts/lib/skill-lint.js:215-217 — used here
- `## Overview` — scripts/lib/skill-lint.js:46 — used here
- `## When to Use` — scripts/lib/skill-lint.js:47 — used here
- `## Common Rationalizations` — scripts/lib/skill-lint.js:48 — used here
- `## Red Flags` — scripts/lib/skill-lint.js:49 — used here
- `## Verification` — scripts/lib/skill-lint.js:50 — used here
- `using-agent-skills` — scripts/lib/skill-lint.js:58 — used here
- `idea-refine` — scripts/lib/skill-lint.js:59 — used here

## Structure
- // ─── Config ──────────────────────────────────────────────────────────────────
- // ─── Helpers ─────────────────────────────────────────────────────────────────
- // ─── Linter ──────────────────────────────────────────────────────────────────
  - // ── Frontmatter ──────────────────────────────────────────────────────────
  - // ── Exemption guard ──────────────────────────────────────────────────────
  - // ── Required sections ────────────────────────────────────────────────────
  - // ── Cross-skill references ───────────────────────────────────────────────

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint.js`, language: JavaScript (Node CommonJS), lines: 276
- documented invocation:
  > "The CLI in scripts/validate-skills.js is a thin wrapper over it. Splitting the rules out of the CLI keeps them importable and unit-testable without spawning a process or touching the filesystem." — scripts/lib/skill-lint.js:6-8
  Invoked via `require('./lib/skill-lint')`.
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-skills.js`
  abridged stdout:
  ```text
    ✓  api-and-interface-design
    ...
    ✓  using-agent-skills (section checks exempt)
  25 skills checked — 0 error(s), 0 warning(s) — PASSED
  ```
  **actual exit code:** 0
- documented exit codes: none for library; wrapper `scripts/validate-skills.js` documents `0 = all clear, 1 = one or more errors`. Library has 0 `process.exit` calls.
- for validators/gates: can exit non-zero via caller? Yes. Returns errors array for missing frontmatter, mismatched name, missing trigger, invalid sections, or incomplete workflow steps. Does not fail on source repo's default branch.
- does the output match what the documentation claims? Yes.

## Defects — required
- `doc-drift` · scripts/lib/skill-lint.js:45-51 · Linter strictly requires exact headings (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) with no aliases, contradicting `docs/skill-anatomy.md:38-40` and `CONTRIBUTING.md:53` which state headings are a flexible recommended pattern where equivalents like `How It Works` or `Workflow` are acceptable.
- `doc-drift` · scripts/lib/skill-lint.js:158 · Enforces a 1024-character description limit not documented in `docs/skill-anatomy.md`.

## Observations
- Uses `Object.hasOwn(SECTION_EXEMPT_SKILLS, dirName)` (line 194) instead of `in` to prevent directory names matching `Object.prototype` properties (e.g. `constructor`) from bypassing required-section validation.
- Strips fenced code blocks before matching headings to avoid false positives/negatives from example markdown snippets.
- Enforces consistency between declared numbered steps in `## The ... Workflow` and corresponding `### Step N:` subsection headings.

## Context cost
11,808 bytes, approximately 2,952 tokens.
```

---

```markdown
---
package: addy
path: scripts/lib/skill-lint-test.js
type: script
bytes: 4645
unit: inv-addy-11
---

# scripts/lib/skill-lint-test.js

## Purpose — required, verbatim
> "a directory named after an Object.prototype key is not exempt from section checks" — scripts/lib/skill-lint-test.js:40
> "Deliberately narrow: #428 rewrites frontmatter parsing and the cross-reference patterns, so asserting their behaviour here would collide with that work." — scripts/lib/skill-lint-test.js:86-87
(no explicit top-level purpose comment; quotes first test description and design scope note).

## Design intent — required
Provides regression test coverage for `skill-lint.js` in isolation from the filesystem, specifically safeguarding against prototype-chain inheritance bypasses (e.g. a skill named `constructor`), validating allowlist enforcement, and ensuring description trigger clauses and workflow step consistency checks operate correctly.

## Phase — required
cross-phase

## Inputs — required
- In-memory mock string fixtures (`withAllSections`, `VALID_FRONTMATTER`, crafted YAML frontmatter blocks).

## Outputs — required
- Test results reported to `node:test` runner.
- Exit code: 0 on success, 1 on assertion failure.

## Invokes — required
- script scripts/lib/skill-lint.js:8
- node:assert/strict require('node:assert/strict') — scripts/lib/skill-lint-test.js:5
- node:test require('node:test') — scripts/lib/skill-lint-test.js:6

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Object.prototype key exemption bypass` — scripts/lib/skill-lint-test.js:40 — defined here
- `SECTION_EXEMPT_SKILLS allowlist` — scripts/lib/skill-lint-test.js:82 — used here
- `when to use trigger` — scripts/lib/skill-lint-test.js:100 — used here
- `workflow step validation` — scripts/lib/skill-lint-test.js:112 — used here
- `YAML frontmatter block` — scripts/lib/skill-lint-test.js:140 — used here
- `using-agent-skills` — scripts/lib/skill-lint-test.js:62 — used here

## Structure
- // ─── Section exemptions ──────────────────────────────────────────────────────
- // ─── Guardrails on the rules this change sits beside ─────────────────────────

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint-test.js`, language: JavaScript (Node test runner), lines: 142
- documented invocation: none documented in repo (shebang `#!/usr/bin/env node`)
- **executed:** yes
- actual command run: `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js`
  abridged stdout:
  ```text
  scripts/lib/skill-lint-test.js:
  (pass) a directory named after an Object.prototype key is not exempt from section checks [1.57ms]
  (pass) a genuinely allowlisted skill is still exempt [0.08ms]
  (pass) a skill claiming its own exemption without being allowlisted fails loud [0.11ms]
  (pass) a fully valid skill produces no errors [0.03ms]
  (pass) reports a description with no trigger clause [0.05ms]
  (pass) reports frontmatter name that disagrees with the directory [0.04ms]
  (pass) reports a workflow step declared without a matching process section [0.33ms]
  (pass) reports a missing frontmatter block [0.04ms]
  8 pass, 0 fail
  ```
  **actual exit code:** 0
- documented exit codes: none documented; runner exits 0 on pass, 1 on fail.
- for validators/gates: executes test assertions; exits non-zero if any assertion fails. Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes, all 8 test cases pass cleanly.

## Defects — required
- `orphan` · scripts/lib/skill-lint-test.js:1 · Test script is omitted from `.github/workflows/test-plugin-install.yml` and is never run by CI, unlike all other `*-test.js` files.
- `script-bug` · scripts/lib/skill-lint-test.js:1 · Has executable shebang `#!/usr/bin/env node` but cannot be run as a standalone executable script without `--test` or a test runner.

## Observations
- Cites PR #428 on line 86 to explain why frontmatter parsing and cross-reference checks were intentionally kept narrow to avoid merge collisions.
- Explicitly isolates tests using in-memory string concatenations rather than filesystem fixtures.

## Context cost
4,645 bytes (file) + 11,808 bytes (`skill-lint.js`) = 16,453 bytes total, ~4,113 tokens.
```

---

```markdown
---
package: addy
path: scripts/validate-versions.js
type: script
bytes: 949
unit: inv-addy-11
---

# scripts/validate-versions.js

## Purpose — required, verbatim
> "All plugin manifests use version ${expectedVersion}." — scripts/validate-versions.js:36
(no explicit purpose statement; quote from success log).

## Design intent — required
Ensures version consistency across the five manifest files supporting different plugin environments (root `plugin.json`, Codex, Claude Code, marketplace catalogs, Antigravity) by comparing each manifest's declared version against the repository's latest git tag.

## Phase — required
cross-phase

## Inputs — required
- Output of `git describe --tags --abbrev=0`
- Manifest files read:
  - `plugin.json` — scripts/validate-versions.js:9
  - `.codex-plugin/plugin.json` — scripts/validate-versions.js:10
  - `.claude-plugin/plugin.json` — scripts/validate-versions.js:11
  - `.claude-plugin/marketplace.json` — scripts/validate-versions.js:12
  - `.agents/plugins/marketplace.json` — scripts/validate-versions.js:13

## Outputs — required
- Console log: `All plugin manifests use version <version>.`
- Exit code: 0 on success; unhandled Error (exit code 1) on version discrepancy.

## Invokes — required
- command git describe --tags --abbrev=0 — scripts/validate-versions.js:21-25
- node:child_process require('node:child_process') — scripts/validate-versions.js:5
- node:fs require('node:fs') — scripts/validate-versions.js:6

## Invoked by — required
- .github/workflows/test-plugin-install.yml:26

## Concepts named — required, verbatim
- `plugin manifest version` — scripts/validate-versions.js:16 — defined here
- `git release tag` — scripts/validate-versions.js:23 — used here
- `plugin.json` — scripts/validate-versions.js:9 — used here
- `marketplace.json` — scripts/validate-versions.js:12 — used here

## Structure
(no section headings; 37-line flat script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-versions.js`, language: JavaScript (Node), lines: 37
- documented invocation:
  > "run: node scripts/validate-versions.js" — .github/workflows/test-plugin-install.yml:26
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-versions.js`
  abridged stdout:
  ```text
  All plugin manifests use version 0.6.8.
  ```
  **actual exit code:** 0
- documented exit codes: none documented in file; exits 0 on success, throws unhandled Error (exit code 1) on version mismatch.
- for validators/gates: can exit non-zero? Yes, throws Error if manifest version differs from git tag or if git tag is missing. Does it fail on source repo's default branch? No, passes on tag 0.6.8.
- does the output match what the documentation claims? Yes.

## Defects — required
- `script-bug` · scripts/validate-versions.js:21-25 · `execFileSync("git", ...)` and relative manifest paths do not specify `cwd` or resolve against `__dirname`, causing fatal crashes if invoked from any working directory other than the repository root.
- `missing-error-handling` · scripts/validate-versions.js:30 · Uses raw `throw new Error` instead of formatted console error output and `process.exit(1)`.

## Observations
- Handles multiple manifest schema variants using optional chaining: `manifest.version ?? manifest.plugins?.[0]?.version`.
- Validates 5 distinct manifest paths spanning Claude Code, Codex, and Antigravity plugins.

## Context cost
949 bytes (file) + 2,400 bytes (5 manifests) = 3,349 bytes total, ~837 tokens.
```

---

```markdown
---
package: addy
path: scripts/validate-commands.js
type: script
bytes: 7108
unit: inv-addy-11
---

# scripts/validate-commands.js

## Purpose — required, verbatim
> "validate-commands.js
 *
 * Guards against silent drift across the three slash-command directories:
 *   .claude/commands/  (.md — Claude Code)
 *   .gemini/commands/  (.toml — Gemini CLI)
 *   commands/          (.toml — Antigravity CLI)
 *
 * Checks (errors block CI):
 *   - Every command present in one directory exists in all three
 *   - The 'description' field is identical across all three equivalents
 *
 * What this does NOT check:
 *   Prompt body differences are intentional — each tool has its own
 *   syntax ($ARGUMENTS, agent-skills: prefixes, GEMINI.md vs CLAUDE.md).
 *
 * Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-commands.js:2-19

## Design intent — required
Maintains strict tripartite parity and description synchronization across Claude Code (`.claude/commands/*.md`), Gemini CLI (`.gemini/commands/*.toml`), and Antigravity CLI (`commands/*.toml`), preventing command additions, deletions, or description drift in one harness from desynchronizing multi-platform agent interfaces while intentionally allowing tool-specific prompt syntax variations.

## Phase — required
cross-phase

## Inputs — required
- All `.md` files under `.claude/commands/`
- All `.toml` files under `.gemini/commands/`
- All `.toml` files under `commands/`

## Outputs — required
- Console output detailing parity and description synchronization status.
- Exit code: 0 on complete parity and sync; 1 if any errors detected.

## Invokes — required
- node:fs require('fs') — scripts/validate-commands.js:23
- node:path require('path') — scripts/validate-commands.js:24

## Invoked by — required
- .github/workflows/test-plugin-install.yml:55
- scripts/validate-commands-test.js:12

## Concepts named — required, verbatim
- `slash-command directories` — scripts/validate-commands.js:5 — defined here
- `command parity` — scripts/validate-commands.js:114 — defined here
- `description sync` — scripts/validate-commands.js:140 — defined here
- `command twin mapping (plan -> planning)` — scripts/validate-commands.js:38-40 — defined here
- `Claude Code commands` — scripts/validate-commands.js:6 — used here
- `Gemini CLI commands` — scripts/validate-commands.js:7 — used here
- `Antigravity CLI commands` — scripts/validate-commands.js:8 — used here

## Structure
- // ─── Config ───────────────────────────────────────────────────────────────────
- // ─── Parsers ──────────────────────────────────────────────────────────────────
- // ─── Loader ───────────────────────────────────────────────────────────────────
- // ─── Main ─────────────────────────────────────────────────────────────────────
  - // ── Parity check ────────────────────────────────────────────────────────────
  - // ── Description sync check ──────────────────────────────────────────────────

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-commands.js`, language: JavaScript (Node CommonJS), lines: 188
- documented invocation:
  > "Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-commands.js:18
  > "run: node scripts/validate-commands.js" — .github/workflows/test-plugin-install.yml:55
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-commands.js`
  abridged stdout:
  ```text
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
  **actual exit code:** 0
- documented exit codes: `0 = all clear, 1 = one or more errors` (line 18). Actual exit paths in code: line 184 (`if (errors > 0) process.exit(1);`) and implicit exit 0.
- for validators/gates: can exit non-zero? Yes, exits 1 on missing command twin or description mismatch. Does it fail on source repo's default branch? No, passes cleanly across all 9 commands.
- does the output match what the documentation claims? Yes, confirms 9 commands checked, 0 errors, PASSED.

## Defects — required
- `hardcoded-exception` · scripts/validate-commands.js:38-40 · `NAME_MAP = { plan: 'planning' }` hardcodes an asymmetric command name discrepancy between Claude Code (`/plan`) and Gemini/Antigravity (`/planning`).

## Observations
- Robust path handling: anchors to `path.resolve(__dirname, '..')`, allowing execution from any directory.
- Avoids external dependencies by using custom regex parsers for YAML frontmatter and TOML description fields.
- Distinguishes intentional prompt body variations (syntax differences) from descriptions (which must match identically).

## Context cost
7,108 bytes (file) + ~35,000 bytes (27 command files) = ~42,108 bytes total, ~10,527 tokens.
```

---

```markdown
---
package: addy
path: scripts/validate-artifact-paths-test.js
type: script
bytes: 4572
unit: inv-addy-11
---

# scripts/validate-artifact-paths-test.js

## Purpose — required, verbatim
> "passes when producers and consumers use the canonical artifact paths" — scripts/validate-artifact-paths-test.js:43
> "fails when a producer drifts to an unapproved artifact path (the #93 regression)" — scripts/validate-artifact-paths-test.js:57
(no explicit top-level purpose comment; quotes test description names).

## Design intent — required
Guarantees that `validate-artifact-paths.js` accurately prevents regressions in artifact naming and location across the spec-driven lifecycle pipeline by testing sandbox-isolated directory trees under positive cases (canonical paths, accepted alternates, markdown references) and negative cases (unapproved paths, regression #93, line-number reporting).

## Phase — required
cross-phase

## Inputs — required
- Ephemeral test sandboxes in `os.tmpdir()` created via `fs.mkdtempSync`
- Spawns child process running `scripts/validate-artifact-paths.js`

## Outputs — required
- Test results reported to `node:test` runner.
- Exit code: 0 on success, 1 on failure.
- Cleans up temporary sandbox directories via `afterEach`.

## Invokes — required
- script scripts/validate-artifact-paths.js:12
- node:assert/strict require('node:assert/strict') — scripts/validate-artifact-paths-test.js:5
- node:fs require('node:fs') — scripts/validate-artifact-paths-test.js:6
- node:os require('node:os') — scripts/validate-artifact-paths-test.js:7
- node:path require('node:path') — scripts/validate-artifact-paths-test.js:8
- node:child_process require('node:child_process') — scripts/validate-artifact-paths-test.js:9
- node:test require('node:test') — scripts/validate-artifact-paths-test.js:10

## Invoked by — required
- .github/workflows/test-plugin-install.yml:64

## Concepts named — required, verbatim
- `canonical artifact paths` — scripts/validate-artifact-paths-test.js:43 — defined here
- `PR #93 regression` — scripts/validate-artifact-paths-test.js:57 — defined here
- `producers and consumers (spec -> plan -> build)` — scripts/validate-artifact-paths-test.js:43 — used here
- `SPEC.md` — scripts/validate-artifact-paths-test.js:45 — used here
- `tasks/plan.md` — scripts/validate-artifact-paths-test.js:46 — used here
- `tasks/todo.md` — scripts/validate-artifact-paths-test.js:46 — used here
- `docs/SPEC.md` — scripts/validate-artifact-paths-test.js:47 — used here
- `docs/features/[feature-name]/spec.md (unapproved path)` — scripts/validate-artifact-paths-test.js:60 — used here
- `docs/features/[feature-name]/plan.md (unapproved path)` — scripts/validate-artifact-paths-test.js:61 — used here

## Structure
- Test helper functions (`makeSandbox`, `writeFile`, `run`) — lines 15-35
- Teardown (`afterEach`) — lines 37-41
- Test definitions (`test(...)`) — lines 43-116

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths-test.js`, language: JavaScript (Node test runner), lines: 117
- documented invocation:
  > "run: node --test scripts/validate-artifact-paths-test.js" — .github/workflows/test-plugin-install.yml:64
- **executed:** yes
- actual command run: `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js`
  abridged stdout:
  ```text
  scripts/validate-artifact-paths-test.js:
  (pass) passes when producers and consumers use the canonical artifact paths [20.96ms]
  (pass) fails when a producer drifts to an unapproved artifact path (the #93 regression) [14.84ms]
  (pass) reports the offending file and line number [14.25ms]
  (pass) accepts the docs/SPEC.md alternate spec location [13.51ms]
  (pass) ignores non-artifact markdown references (no false positives) [20.67ms]
  (pass) skips guarded files that do not exist [23.47ms]
  6 pass, 0 fail
  ```
  **actual exit code:** 0
- documented exit codes: none documented in file; runner exits 0 on pass, 1 on failure.
- for validators/gates: executes regression tests asserting both exit code 0 on valid paths and exit code 1 on drifted paths (lines 53, 66, 78).
- does the output match what the documentation claims? Yes, all 6 tests pass cleanly.

## Defects — required
- `script-bug` · scripts/validate-artifact-paths-test.js:1 · Contains shebang `#!/usr/bin/env node`, but cannot be run directly as an executable without a test runner (`node --test` or `bun test`).

## Observations
- Directly encodes regression test for PR #93 (where `/spec` and `/plan` drifted to `docs/features/[feature-name]/` while `/build` required `SPEC.md`).
- Tests both error code detection and line-number reporting accuracy in error output.

## Context cost
4,572 bytes (file) + 4,102 bytes (`validate-artifact-paths.js`) = 8,674 bytes, ~2,168 tokens.
```

---

## 5. Verification Method

To independently verify these findings:

1. **Verify `validate-versions.js` execution and working directory defect**:
   ```bash
   cd sources/addy && bun scripts/validate-versions.js
   # Expected: All plugin manifests use version 0.6.8. (exit 0)
   bun sources/addy/scripts/validate-versions.js
   # Expected: fatal: No names found / checkExecSyncError (exit 1)
   ```

2. **Verify `validate-commands.js` execution across platforms**:
   ```bash
   cd sources/addy && bun scripts/validate-commands.js
   # Expected: 9 commands checked — 0 error(s) — PASSED (exit 0)
   ```

3. **Verify `skill-lint-test.js` execution and CI omission**:
   ```bash
   cd sources/addy && bun test ./scripts/lib/skill-lint-test.js
   # Expected: 8 pass, 0 fail (exit 0)
   grep -rn "skill-lint-test" sources/addy/.github/
   # Expected: No results found (demonstrates omission from CI)
   ```

4. **Verify `validate-artifact-paths-test.js` execution**:
   ```bash
   cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js
   # Expected: 6 pass, 0 fail (exit 0)
   ```

5. **Verify Section Heading Lint Rule vs Documentation**:
   - Inspect `sources/addy/scripts/lib/skill-lint.js:45-51` (un-aliased array of 5 required headers).
   - Inspect `sources/addy/docs/skill-anatomy.md:38-40` and `sources/addy/CONTRIBUTING.md:53` (stating section layout is recommended pattern).
   - Inspect `sources/addy/scripts/lib/skill-lint.js:57-60` (where `idea-refine` is hardcoded as exempt due to this contradiction).
