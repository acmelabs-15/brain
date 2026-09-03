# Comprehensive Analysis Report: Unit `inv-addy-9`
**Agent**: `explorer_inv_addy_9_2`  
**Working Directory**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_9_2`  
**Target Package**: `sources/addy/` (`github.com/addyosmani/agent-skills`)  
**Commit SHA**: `d2c37ef6225dd8726cdd369a8030307f48592d26`  
**Date**: 2026-09-03  

---

## 1. Executive Summary & Problem Boundary

Work unit `inv-addy-9` encompasses 10 files totaling 42,248 bytes within `sources/addy/`, spanning core repository validation scripts, test harnesses, and lifecycle hook integration assets. The assigned files divide cleanly into two architectural families:
1. **Validation & Integrity Scripts (4 files, 14,557 bytes)**:
   - `scripts/validate-reference-links-test.js` (5,666 bytes) — Unit test suite for reference link validation in isolated temporary directory sandboxes.
   - `scripts/validate-reference-links.js` (3,832 bytes) — Static analyzer enforcing valid relative paths from `skills/*/SKILL.md` to `references/*.md`.
   - `scripts/validate-artifact-paths.js` (4,102 bytes) — Pipeline contract guard enforcing an allowlist of canonical spec/plan/todo artifact paths across 7 pipeline files.
   - `scripts/validate-versions-test.js` (957 bytes) — Unit test checking that all 5 plugin manifests match the git repository release tag.
2. **Lifecycle Hooks & Documentation (6 files, 27,691 bytes)**:
   - `hooks/sdd-cache-post.sh` (4,567 bytes) — Claude Code `PostToolUse` hook capturing WebFetch responses and origin HTTP validators (`ETag`, `Last-Modified`).
   - `hooks/sdd-cache-pre.sh` (4,261 bytes) — Claude Code `PreToolUse` hook issuing conditional HTTP revalidations, short-circuiting fetches with exit code 2 on HTTP 304.
   - `hooks/session-start.sh` (1,392 bytes) — `SessionStart` hook injecting `using-agent-skills/SKILL.md` into the standard JSON envelope.
   - `hooks/simplify-ignore-test.sh` (8,709 bytes) — Shell test harness verifying ignore-block filtering in `hooks/simplify-ignore.sh` across 10 scenarios.
   - `hooks/SDD-CACHE.md` (8,398 bytes) — Architecture specification, configuration guide, and testing protocol for `sdd-cache`.
   - `hooks/hooks.json` (364 bytes) — Hook registration manifest mapping `SessionStart` to `hooks/session-start.sh`.

All 10 files were read completely from line 1 to EOF. All scripts and tests were executed in `sources/addy/` using Bun/Node and Bash. Every referenced target was inspected with `ls`. All tests passed with 100% success rate (exit code 0).

---

## 2. Empirical Execution & Verification Matrix

All commands were executed with working directory `sources/addy/`.

| File | Command Run | Exit Code | Verified Output / Summary | Status |
|---|---|---|---|---|
| `scripts/validate-reference-links.js` | `bun scripts/validate-reference-links.js` | `0` | `Checking references/ links in skills...`<br>25 skills checked — 0 error(s) — PASSED | PASS |
| `scripts/validate-reference-links-test.js` | `bun test ./scripts/validate-reference-links-test.js` | `0` | 7 pass, 0 fail. Ran 7 tests across 1 file. [125.00ms] | PASS |
| `scripts/validate-artifact-paths.js` | `bun scripts/validate-artifact-paths.js` | `0` | `Checking spec/plan/todo artifact paths...`<br>7 files checked — 0 error(s) — PASSED | PASS |
| `scripts/validate-versions-test.js` | `bun test ./scripts/validate-versions-test.js` | `0` | 1 pass, 0 fail. Ran 1 test across 1 file. [34.00ms] | PASS |
| `hooks/simplify-ignore-test.sh` | `bash hooks/simplify-ignore-test.sh` | `0` | 10 test sections, 21 assertions.<br>Results: 21 passed, 0 failed | PASS |
| `hooks/session-start.sh` | `bash hooks/session-start.sh` | `0` | Valid JSON envelope outputting `hookSpecificOutput` with `hookEventName: SessionStart` and `using-agent-skills` content embedded | PASS |
| `hooks/sdd-cache-post.sh` | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' \| bash hooks/sdd-cache-post.sh` | `0` | Created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json` with captured ETag and timestamp | PASS |
| `hooks/sdd-cache-pre.sh` (cache hit) | `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' \| bash hooks/sdd-cache-pre.sh` | `2` | Cache HIT via HTTP 304. Emitted `[sdd-cache] Cache hit for ...` with cached content to stderr. Exited with code `2` | PASS |
| `hooks/sdd-cache-pre.sh` (stale/invalidation) | Forced stale ETag mismatch in JSON entry, re-ran pre-hook payload | `0` | Origin returned HTTP 200 (not 304). Pre-hook silently exited `0`, allowing WebFetch through | PASS |

---

## 3. Referenced Path Existence Matrix

Every path cited by the 10 files was verified via `ls` in `sources/addy/`:

| Path Cited | Cited In | Line(s) | Status | Notes |
|---|---|---|---|---|
| `scripts/validate-reference-links.js` | `validate-reference-links-test.js` | 12, 19, 31 | EXISTS | Validated target script |
| `references/definition-of-done.md` | `validate-reference-links-test.js` | 45, 62, 82, 120 | EXISTS | Shared root reference |
| `skills/using-agent-skills/SKILL.md` | `validate-reference-links-test.js`, `session-start.sh` | 48, 64, 83; 11 | EXISTS | Meta-skill file (10,426 bytes) |
| `references/security-checklist.md` | `validate-reference-links-test.js` | 141 | EXISTS | Shared root reference |
| `references/performance-checklist.md` | `validate-reference-links-test.js` | 142 | EXISTS | Shared root reference |
| `skills/code-review-and-quality/SKILL.md` | `validate-reference-links-test.js` | 145 | EXISTS | Skill markdown file |
| `skills/planning-and-task-breakdown/SKILL.md` | `validate-reference-links-test.js`, `validate-artifact-paths.js` | 123; 49 | EXISTS | Skill markdown file |
| `skills/shipping-and-launch/SKILL.md` | `validate-reference-links-test.js` | 107 | EXISTS | Skill markdown file |
| `skills/` | `validate-reference-links.js` | 37 | EXISTS | Root directory containing 25 skills |
| `references/` | `validate-reference-links.js` | 7, 18, 97 | EXISTS | Root directory containing 7 checklists |
| `.claude/commands/spec.md` | `validate-artifact-paths.js` | 45 | EXISTS | Pipeline command (913 bytes) |
| `.claude/commands/plan.md` | `validate-artifact-paths.js` | 46 | EXISTS | Pipeline command (805 bytes) |
| `.claude/commands/build.md` | `validate-artifact-paths.js` | 47 | EXISTS | Pipeline command (3,959 bytes) |
| `skills/spec-driven-development/SKILL.md` | `validate-artifact-paths.js`, `SDD-CACHE.md` | 48; 3 | EXISTS | Skill markdown file (12,163 bytes) |
| `docs/getting-started.md` | `validate-artifact-paths.js` | 50 | EXISTS | Documentation file (7,104 bytes) |
| `docs/adoption-guide.md` | `validate-artifact-paths.js` | 51 | EXISTS | Documentation file (11,197 bytes) |
| `plugin.json` | `validate-versions-test.js` | 9 | EXISTS | Root manifest (version: 0.6.8) |
| `.codex-plugin/plugin.json` | `validate-versions-test.js` | 10 | EXISTS | Codex manifest (version: 0.6.8) |
| `.claude-plugin/plugin.json` | `validate-versions-test.js` | 11 | EXISTS | Claude manifest (version: 0.6.8) |
| `.claude-plugin/marketplace.json` | `validate-versions-test.js` | 12 | EXISTS | Marketplace catalog (0.6.8) |
| `.agents/plugins/marketplace.json` | `validate-versions-test.js` | 13 | EXISTS | Agent marketplace catalog (0.6.8) |
| `hooks/simplify-ignore.sh` | `simplify-ignore-test.sh` | 34, 243 | EXISTS | Hook script (12,173 bytes, inv-addy-8) |
| `hooks/sdd-cache-pre.sh` | `SDD-CACHE.md` | 24, 105, 135 | EXISTS | Hook script (4,261 bytes) |
| `hooks/sdd-cache-post.sh` | `SDD-CACHE.md` | 36, 93 | EXISTS | Hook script (4,567 bytes) |
| `hooks/session-start.sh` | `hooks.json` | 8 | EXISTS | Hook script (1,392 bytes) |
| `.claude/sdd-cache/` | `sdd-cache-pre.sh`, `sdd-cache-post.sh`, `SDD-CACHE.md` | passim | RUNTIME | Gitignored cache directory |

---

## 4. Complete Inventory Entries (10 Files)

### Entry 1: `scripts/validate-reference-links-test.js`

```markdown
---
package: addy
path: scripts/validate-reference-links-test.js
type: script
bytes: 5666
unit: inv-addy-9
deprecated: false
---

# scripts/validate-reference-links-test.js

## Purpose — required, verbatim
> "const VALIDATOR = path.join(__dirname, 'validate-reference-links.js');
const sandboxes = [];

function makeSandbox() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'agent-skills-validate-reference-links-test-'));
  const scriptsDir = path.join(root, 'scripts');
  fs.mkdirSync(scriptsDir, { recursive: true });
  fs.copyFileSync(VALIDATOR, path.join(scriptsDir, 'validate-reference-links.js'));
  sandboxes.push(root);
  return root;
}" — scripts/validate-reference-links-test.js:12-22 (no explicit purpose statement)

## Design intent — required
Automated regression test suite for `validate-reference-links.js`. It isolates test runs inside temporary directories created with `fs.mkdtempSync` and verifies both valid relative references (e.g. `../../references/definition-of-done.md`, colocated `references/palette.md`, unreferenced user artifacts) and invalid references (colocated references linking to root, broken/renamed checklists, multiple violations per file, markdown link syntax).

## Phase — required
addy:Verify

## Inputs — required
- `scripts/validate-reference-links.js` (copied into each temporary sandbox)
- Synthetic markdown files created in sandbox directories via `writeFile()`

## Outputs — required
- Test execution results via `node:test` runner. Exit code 0 on all tests passing, 1 on any assertion failure.

## Invokes — required
- script scripts/validate-reference-links.js — scripts/validate-reference-links-test.js:12
- Node.js built-ins: `node:assert/strict`, `node:fs`, `node:os`, `node:path`, `node:child_process`, `node:test`

## Invoked by — required
- .github/workflows/test-plugin-install.yml:41 (`node --test scripts/validate-reference-links-test.js`)

## Concepts named — required, verbatim
- `sandbox` — scripts/validate-reference-links-test.js:15 — defined here
- `references/definition-of-done.md` — scripts/validate-reference-links-test.js:45 — used here
- `skills/using-agent-skills/SKILL.md` — scripts/validate-reference-links-test.js:48 — used here
- `references/security-checklist.md` — scripts/validate-reference-links-test.js:141 — used here
- `references/performance-checklist.md` — scripts/validate-reference-links-test.js:142 — used here
- `skills/code-review-and-quality/SKILL.md` — scripts/validate-reference-links-test.js:145 — used here
- `skills/planning-and-task-breakdown/SKILL.md` — scripts/validate-reference-links-test.js:123 — used here
- `skills/shipping-and-launch/SKILL.md` — scripts/validate-reference-links-test.js:107 — used here
- `tasks/todo.md` — scripts/validate-reference-links-test.js:125 — used here
- `tasks/plan.md` — scripts/validate-reference-links-test.js:125 — used here
- `PERF.md` — scripts/validate-reference-links-test.js:126 — used here

## Structure
- (no markdown headings — JavaScript test suite)
- Helper: `makeSandbox()` (lines 15-22)
- Helper: `writeFile(root, relativePath, content)` (lines 24-28)
- Helper: `run(root)` (lines 30-35)
- Lifecycle: `afterEach(...)` (lines 37-41)
- Test 1: `passes when a skill reaches the shared checklist two levels up` (lines 43-56)
- Test 2: `fails when a skill links the shared checklist as if it were colocated` (lines 58-78)
- Test 3: `checks markdown link syntax, not just backtick mentions` (lines 80-89)
- Test 4: `passes when a skill colocates its own references directory` (lines 91-102)
- Test 5: `fails when a link points at a checklist that no longer exists` (lines 104-114)
- Test 6: `ignores paths that are not references/ links` (lines 116-137)
- Test 7: `reports every unresolvable link, not just the first per skill` (lines 139-153)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links-test.js`, language: JavaScript (Node.js/Bun), lines: 154
- documented invocation: `node --test scripts/validate-reference-links-test.js` — .github/workflows/test-plugin-install.yml:41
- **executed:** yes
- actual command run: `bun test ./scripts/validate-reference-links-test.js`
- abridged stdout: `7 pass, 0 fail. Ran 7 tests across 1 file. [125.00ms]`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: `node:test` exits 0 when all tests pass, 1 when any assert throws. Code throws via `assert.equal` and `assert.match` (lines 54, 71, 87, 100, 111, 134, 151).
- for validators/gates: Can it exit non-zero? Yes, exits 1 on test assertion failure. Does it fail on default branch? No, passes 7/7 tests.
- does the output match what the documentation claims? Yes, all 7 tests pass clean.

## Defects — required
none

## Observations
- Demonstrates hermetic testing practice: uses `fs.mkdtempSync` and cleans up sandboxes in `afterEach`.
- When running with Bun, path must be provided as `./scripts/validate-reference-links-test.js` so Bun's test runner treats it as an explicit file path rather than a filter pattern.

## Context cost
5,666 bytes (~1,416 tokens). Loads `scripts/validate-reference-links.js` (3,832 bytes) during execution, total 9,498 bytes (~2,375 tokens).
```

---

### Entry 2: `scripts/validate-reference-links.js`

```markdown
---
package: addy
path: scripts/validate-reference-links.js
type: script
bytes: 3832
unit: inv-addy-9
deprecated: false
---

# scripts/validate-reference-links.js

## Purpose — required, verbatim
> "Guards links from skills to the shared `references/` checklists.

Those checklists live in the repo-root `references/` directory, but every
SKILL.md used to link them as `references/<file>.md` — a path relative to
the skill's own directory, which is two levels below the root. All 18 links
across 11 skills resolved to files that do not exist, in the repo and in
every plugin-install layout (~/.claude/plugins/cache/..., ~/.codex/...).
Agents that followed the guidance — for example using-agent-skills pointing
at the Definition of Done — hit a file-not-found and stalled." — scripts/validate-reference-links.js:5-13

## Design intent — required
Static analysis validator that scans every `skills/*/SKILL.md` file for relative links pointing to `references/*.md` and verifies that they resolve to actual files on disk relative to the skill's directory. It prevents broken agent guidance caused by path-level mismatch (shared checklists living at repository root requiring `../../references/`, while self-contained skills may colocate `references/`) without falsely failing on legitimate future user artifacts like `tasks/todo.md`.

## Phase — required
addy:Verify

## Inputs — required
- Directory: `skills/` (traverses each subdirectory looking for `SKILL.md`)
- Files: `skills/*/SKILL.md` (all 25 skill definitions)
- Reference files: `references/*.md` (root shared checklists) or `skills/<name>/references/*.md`

## Outputs — required
- Console output: formatted report of verified skills (`✓`) or failed links (`✗`) with line numbers and resolved paths
- Exit code: `0` on success, `1` on unresolvable links

## Invokes — required
- Node.js built-ins: `fs`, `path`

## Invoked by — required
- .github/workflows/test-plugin-install.yml:38 (`node scripts/validate-reference-links.js`)
- scripts/validate-reference-links-test.js:12

## Concepts named — required, verbatim
- `references/` — scripts/validate-reference-links.js:5 — used here
- `SKILL.md` — scripts/validate-reference-links.js:8 — used here
- `using-agent-skills` — scripts/validate-reference-links.js:12 — used here
- `Definition of Done` — scripts/validate-reference-links.js:13 — used here
- `validate-artifact-paths.js` — scripts/validate-reference-links.js:15 — used here
- `CLAUDE.md` — scripts/validate-reference-links.js:20 — used here
- `tasks/todo.md` — scripts/validate-reference-links.js:25 — used here
- `PERF.md` — scripts/validate-reference-links.js:25 — used here
- `docs/ideas/[idea-name].md` — scripts/validate-reference-links.js:26 — used here

## Structure
- (no markdown headings — JavaScript validator)
- Header documentation & rationale (lines 2-29)
- Constants & regex: `ROOT`, `SKILLS_DIR`, `REFERENCE_LINK_RE` (lines 33-42)
- Function: `findViolations(skillDir, skillFile)` (lines 44-58)
- Function: `main()` (lines 60-101)
- Invocation: `main()` (line 103)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links.js`, language: JavaScript (Node.js/Bun), lines: 104
- documented invocation: `node scripts/validate-reference-links.js` — .github/workflows/test-plugin-install.yml:38
- **executed:** yes
- actual command run: `bun scripts/validate-reference-links.js`
- abridged stdout: `Checking references/ links in skills...\n  ✓  skills/api-and-interface-design/SKILL.md\n  ...\n25 skills checked — 0 error(s) — PASSED`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: documented "Exit codes: 0 = all clear, 1 = one or more unresolvable links" (line 28). In code: line 65 `return` (exit 0), line 99 `process.exit(1)` when errors > 0, implicit exit 0.
- for validators/gates: Can it exit non-zero? Yes, `process.exit(1)` when violations exist. Does it fail on default branch? No, passes 25/25 skills with 0 errors.
- does the output match what the documentation claims? Yes, checked 25 skills with 0 errors.

## Defects — required
none

## Observations
- Uses a regex with a negative lookbehind: `/(?<![A-Za-z0-9._/-])((?:\.\.\/)*references\/[A-Za-z0-9._-]+\.md)/g`. This prevents false matches on arbitrary identifiers containing the substring `references`.
- Deliberately narrow scope: avoids becoming an over-broad markdown linter that would fail on uncreated user artifacts.

## Context cost
3,832 bytes (~958 tokens).
```

---

### Entry 3: `scripts/validate-artifact-paths.js`

```markdown
---
package: addy
path: scripts/validate-artifact-paths.js
type: script
bytes: 4102
unit: inv-addy-9
deprecated: false
---

# scripts/validate-artifact-paths.js

## Purpose — required, verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift.

The `/spec` and `/plan` commands (producers) write their artifacts to a set
of paths that the `/build` command and the spec/plan skills (consumers) read
back. When a producer moves an artifact without updating the consumers — as
in PR #93, which pointed `/spec` and `/plan` at docs/features/[name]/ while
`/build` still required SPEC.md and tasks/plan.md — the pipeline breaks, and
nothing else in CI catches it (command parity only compares descriptions)." — scripts/validate-artifact-paths.js:5-13

## Design intent — required
Static analysis pipeline contract validator that enforces strict adherence to an allowlist of spec/plan/todo artifact paths across all files defining the lifecycle pipeline. It ensures producers (`/spec`, `/plan`) and consumers (`/build`, `spec-driven-development`, `planning-and-task-breakdown`) agree on artifact locations (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), preventing silent workflow breaks caused by isolated path changes.

## Phase — required
addy:Verify

## Inputs — required
- 7 guarded files:
  - `.claude/commands/spec.md`
  - `.claude/commands/plan.md`
  - `.claude/commands/build.md`
  - `skills/spec-driven-development/SKILL.md`
  - `skills/planning-and-task-breakdown/SKILL.md`
  - `docs/getting-started.md`
  - `docs/adoption-guide.md`

## Outputs — required
- Console output: formatted verification report (`✓` or `✗`) with line numbers of unapproved artifact paths
- Exit code: `0` on clean pass, `1` on unapproved/drifted paths

## Invokes — required
- Node.js built-ins: `fs`, `path`

## Invoked by — required
- .github/workflows/test-plugin-install.yml:61 (`node scripts/validate-artifact-paths.js`)
- scripts/validate-artifact-paths-test.js:12

## Concepts named — required, verbatim
- `spec -> plan -> build pipeline` — scripts/validate-artifact-paths.js:5 — used here
- `/spec` — scripts/validate-artifact-paths.js:7 — used here
- `/plan` — scripts/validate-artifact-paths.js:7 — used here
- `/build` — scripts/validate-artifact-paths.js:8 — used here
- `SPEC.md` — scripts/validate-artifact-paths.js:11 — defined here (allowlist entry)
- `tasks/plan.md` — scripts/validate-artifact-paths.js:11 — defined here (allowlist entry)
- `tasks/todo.md` — scripts/validate-artifact-paths.js:39 — defined here (allowlist entry)
- `docs/SPEC.md` — scripts/validate-artifact-paths.js:37 — defined here (allowlist entry)
- `ARTIFACT_ALLOWLIST` — scripts/validate-artifact-paths.js:35 — defined here
- `GUARDED_FILES` — scripts/validate-artifact-paths.js:44 — defined here

## Structure
- (no markdown headings — JavaScript validator)
- Header documentation & rationale (lines 2-23)
- Canonical configuration: `ARTIFACT_ALLOWLIST`, `GUARDED_FILES`, `ARTIFACT_RE` (lines 35-58)
- Function: `findViolations(relPath)` (lines 60-76)
- Function: `main()` (lines 78-109)
- Invocation: `main()` (line 111)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths.js`, language: JavaScript (Node.js/Bun), lines: 112
- documented invocation: `node scripts/validate-artifact-paths.js` — .github/workflows/test-plugin-install.yml:61
- **executed:** yes
- actual command run: `bun scripts/validate-artifact-paths.js`
- abridged stdout: `Checking spec/plan/todo artifact paths...\n  ✓  .claude/commands/spec.md\n  ...\n7 files checked — 0 error(s) — PASSED`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: documented "Exit codes: 0 = all clear, 1 = one or more drifted paths" (line 22). In code: line 107 `process.exit(1)` if errors > 0, implicit exit 0.
- for validators/gates: Can it exit non-zero? Yes, `process.exit(1)` if any match is not in allowlist. Does it fail on default branch? No, passes 7/7 files with 0 errors.
- does the output match what the documentation claims? Yes, all 7 guarded files checked and passed.

## Defects — required
none

## Observations
- Cites real-world regression PR #93 where `/spec` moved paths to `docs/features/[name]/` while `/build` required `SPEC.md`.
- Gracefully handles absent files (`if (!fs.existsSync(abs)) return null;`) so that path syntax checking is decoupled from file presence.

## Context cost
4,102 bytes (~1,025 tokens).
```

---

### Entry 4: `scripts/validate-versions-test.js`

```markdown
---
package: addy
path: scripts/validate-versions-test.js
type: script
bytes: 957
unit: inv-addy-9
deprecated: false
---

# scripts/validate-versions-test.js

## Purpose — required, verbatim
> "all plugin manifests use the latest release tag" — scripts/validate-versions-test.js:21

## Design intent — required
Automated unit test that verifies version synchronization across all 5 plugin manifest files (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`) by comparing each manifest's version field against the latest git release tag returned by `git describe --tags --abbrev=0`.

## Phase — required
addy:Verify

## Inputs — required
- Git release tag: output of `git describe --tags --abbrev=0`
- Manifest files:
  - `plugin.json`
  - `.codex-plugin/plugin.json`
  - `.claude-plugin/plugin.json`
  - `.claude-plugin/marketplace.json`
  - `.agents/plugins/marketplace.json`

## Outputs — required
- Test execution output via `node:test`. Exit code 0 on all manifests matching git tag, assertion error/exit 1 on mismatch.

## Invokes — required
- `git describe --tags --abbrev=0` via `node:child_process.execFileSync` — scripts/validate-versions-test.js:22
- Node.js built-ins: `node:assert/strict`, `node:fs`, `node:test`

## Invoked by — required
- .github/workflows/test-plugin-install.yml:29 (`node --test scripts/validate-versions-test.js`)

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions-test.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions-test.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions-test.js:11 — used here
- `.claude-plugin/marketplace.json` — scripts/validate-versions-test.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions-test.js:13 — used here
- `manifestPaths` — scripts/validate-versions-test.js:8 — defined here
- `latest release tag` — scripts/validate-versions-test.js:21 — used here

## Structure
- (no markdown headings — JavaScript test)
- Imports: `assert`, `execFileSync`, `readFileSync`, `test` (lines 3-6)
- Configuration: `manifestPaths` (lines 8-14)
- Function: `readManifestVersion(manifestPath)` (lines 16-19)
- Test: `all plugin manifests use the latest release tag` (lines 21-35)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-versions-test.js`, language: JavaScript (Node.js/Bun), lines: 36
- documented invocation: `node --test scripts/validate-versions-test.js` — .github/workflows/test-plugin-install.yml:29
- **executed:** yes
- actual command run: `bun test ./scripts/validate-versions-test.js`
- abridged stdout: `1 pass, 0 fail. Ran 1 test across 1 file. [34.00ms]`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: `node:test` exits 0 on pass, 1 on fail. `assert.equal` throws on version mismatch (line 29).
- for validators/gates: Can it exit non-zero? Yes, if git tag does not match manifest versions. Does it fail on default branch? No, passes (version 0.6.8 matched across all 5 manifests).
- does the output match what the documentation claims? Yes, 1 pass, 0 fail.

## Defects — required
none

## Observations
- Directly corresponds to the script `scripts/validate-versions.js` (inventoried in `inv-addy-10`), providing unit test validation for the same 5 manifest files.
- Handles schema variance between single-plugin manifests (`manifest.version`) and marketplace catalogs (`manifest.plugins[0].version`).

## Context cost
957 bytes (~239 tokens).
```

---

### Entry 5: `hooks/sdd-cache-post.sh`

```markdown
---
package: addy
path: hooks/sdd-cache-post.sh
type: script
bytes: 4567
unit: inv-addy-9
deprecated: false
---

# hooks/sdd-cache-post.sh

## Purpose — required, verbatim
> "After WebFetch, stores the response body in .claude/sdd-cache/<sha>.json
with the current ETag / Last-Modified captured via a HEAD request so the
pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:5-6

## Design intent — required
PostToolUse hook for Claude Code's `WebFetch` tool that implements the write half of an HTTP-revalidating cache. After a WebFetch call finishes, this script intercepts the response body, performs an origin HTTP HEAD request to extract the current `ETag` or `Last-Modified` validator, and writes an atomic JSON entry into `.claude/sdd-cache/<hash>.json`. Without origin validators, it refuses to cache, upholding the guarantee that documentation is never served from unverified memory.

## Phase — required
addy:Build

## Inputs — required
- Stdin JSON payload: `{"tool_input": {"url": "...", "prompt": "..."}, "tool_response": ...}`
- Environment variable: `CLAUDE_PROJECT_DIR` (defaults to `$PWD`)
- Environment variable: `SDD_CACHE_DEBUG` or sentinel file `.claude/sdd-cache/.debug`
- Origin HTTP HEAD response via `curl -sI -L --max-time 5 "$URL"`

## Outputs — required
- Cache file: `.claude/sdd-cache/<hash>.json` containing `{url, prompt, etag, last_modified, content, fetched_at}`
- Debug log file: `.claude/sdd-cache/.debug.log` (when debug active)
- Exit code: `0` always

## Invokes — required
- CLI tools: `jq`, `curl`, `shasum` or `sha256sum`, `awk`, `date`, `cut`, `tr`

## Invoked by — required
- Claude Code `PostToolUse` hook runner configured in `.claude/settings.json` (matcher: `WebFetch`) — hooks/SDD-CACHE.md:30-42

## Concepts named — required, verbatim
- `PostToolUse` — hooks/sdd-cache-post.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-post.sh:2 — used here
- `sdd-cache` — hooks/sdd-cache-post.sh:2 — defined here
- `ETag` — hooks/sdd-cache-post.sh:5 — used here
- `Last-Modified` — hooks/sdd-cache-post.sh:5 — used here
- `CLAUDE_PROJECT_DIR` — hooks/sdd-cache-post.sh:25 — used here
- `SDD_CACHE_DEBUG` — hooks/sdd-cache-post.sh:26 — defined here
- `tool_input` — hooks/sdd-cache-post.sh:32 — used here
- `tool_response` — hooks/sdd-cache-post.sh:37 — used here

## Structure
- (no markdown headings — Shell script)
- Header documentation (lines 1-13)
- Guard checks: dependencies `jq`, `curl`, `shasum` (lines 14-19)
- Input reading and debug helper `dbg()` (lines 20-30)
- URL & prompt extraction (lines 32-36)
- Defensive `tool_response` content extraction (lines 37-64)
- Hash key calculation: `hash_key()` (lines 66-73)
- Cache path resolution (lines 75-78)
- Origin HEAD request and header extraction (lines 79-107)
- Validator presence check and stale cleanup (lines 109-113)
- Atomic JSON write via temporary file (lines 115-134)
- Normal termination `exit 0` (line 135)

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-post.sh`, language: Bash, lines: 136
- documented invocation: `bash hooks/sdd-cache-post.sh` — hooks/SDD-CACHE.md:36, 93
- **executed:** yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"},"tool_response":"useActionState(action, initialState) returns [state, formAction, isPending]"}' | bash hooks/sdd-cache-post.sh`
- abridged stdout: (stdout empty; created `.claude/sdd-cache/f77331825765034146fe02281d8bd2cb.json`)
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: Always exits `0` (lines 16, 17, 18, 34, 63, 112, 135). Gracefully degrades by exiting 0 on missing dependencies, missing URL, unextractable content, or missing origin validators.
- for validators/gates: Non-blocking hook; never halts agent execution.
- does the output match what the documentation claims? Yes, created valid JSON cache entry containing url, prompt, etag, and content.

## Defects — required
none

## Observations
- Content extraction handles multiple Claude Code response shapes defensively: `.tool_response.result`, `.output`, `.text`, `.content`, `.body`, or string.
- Follows HTTP redirects with `curl -L` and isolates the final response headers via `awk 'BEGIN { RS = ""; last = "" } { last = $0 } END { print last }'`.
- Uses atomic writes (`TMP="${CACHE_FILE}.$$.tmp"` then `mv`) to prevent partial cache reads.

## Context cost
4,567 bytes (~1,142 tokens).
```

---

### Entry 6: `hooks/sdd-cache-pre.sh`

```markdown
---
package: addy
path: hooks/sdd-cache-pre.sh
type: script
bytes: 4261
unit: inv-addy-9
deprecated: false
---

# hooks/sdd-cache-pre.sh

## Purpose — required, verbatim
> "HTTP resource cache keyed by URL. Freshness is delegated to the origin via
HTTP validators; 304 Not Modified is the only signal to serve from cache.
On hit, exits 2 and writes the cached body to stderr so Claude Code can
deliver it to the agent in place of the WebFetch result. Otherwise exits 0." — hooks/sdd-cache-pre.sh:4-8

## Design intent — required
PreToolUse hook for Claude Code's `WebFetch` tool that intercepts documentation fetches and checks whether a cached response can be safely reused. It queries the origin server using an HTTP conditional HEAD request (`If-None-Match`, `If-Modified-Since`). If the origin responds `304 Not Modified`, the hook short-circuits the fetch by writing the cached body to stderr and exiting with code `2`, avoiding redundant model inference and network bandwidth while guaranteeing that stale content is never served.

## Phase — required
addy:Build

## Inputs — required
- Stdin JSON payload: `{"tool_input": {"url": "...", "prompt": "..."}}`
- Cache file: `.claude/sdd-cache/<hash>.json`
- Environment variable: `CLAUDE_PROJECT_DIR` (defaults to `$PWD`)
- Origin HTTP status code via conditional `curl -sI` HEAD request

## Outputs — required
- Cache hit: Exits `2` with cached body and metadata on stderr (`[sdd-cache] Cache hit for <url>`)
- Cache miss / stale / error: Exits `0` (silent bypass)
- Debug logging to `.claude/sdd-cache/.debug.log` (when active)

## Invokes — required
- CLI tools: `jq`, `curl`, `shasum` or `sha256sum`, `cut`, `date`, `printf`

## Invoked by — required
- Claude Code `PreToolUse` hook runner configured in `.claude/settings.json` (matcher: `WebFetch`) — hooks/SDD-CACHE.md:18-29

## Concepts named — required, verbatim
- `PreToolUse` — hooks/sdd-cache-pre.sh:2 — used here
- `WebFetch` — hooks/sdd-cache-pre.sh:2 — used here
- `sdd-cache` — hooks/sdd-cache-pre.sh:2 — defined here
- `304 Not Modified` — hooks/sdd-cache-pre.sh:5 — used here
- `If-None-Match` — hooks/sdd-cache-pre.sh:68 — used here
- `If-Modified-Since` — hooks/sdd-cache-pre.sh:69 — used here
- `CLAUDE_PROJECT_DIR` — hooks/sdd-cache-pre.sh:30 — used here
- `SDD_CACHE_DEBUG` — hooks/sdd-cache-pre.sh:31 — defined here

## Structure
- (no markdown headings — Shell script)
- Header documentation (lines 1-17)
- Tool dependency checks: `jq`, `curl`, `shasum` (lines 18-24)
- Input reading and debug logger `dbg()` (lines 25-36)
- URL extraction and hash key calculation (lines 37-49)
- Cache file resolution and existence check (lines 50-55)
- Validator retrieval: `ETAG`, `LAST_MOD`, `FETCHED_AT` (lines 56-65)
- Origin revalidation via conditional `curl -sI` HEAD (lines 67-75)
- Revalidation status check: `304` vs others (lines 77-80)
- Cached content extraction & date formatting (lines 82-90)
- Payload emission to stderr and `exit 2` (lines 92-106)

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/sdd-cache-pre.sh`, language: Bash, lines: 107
- documented invocation: `bash hooks/sdd-cache-pre.sh` — hooks/SDD-CACHE.md:24, 105, 135
- **executed:** yes
- actual command run: `echo '{"tool_input":{"url":"https://react.dev/reference/react/useActionState","prompt":"extract the signature"}}' | bash hooks/sdd-cache-pre.sh`
- abridged stdout: (stderr output): `[sdd-cache] Cache hit for https://react.dev/reference/react/useActionState\nRevalidated via HTTP 304; unchanged since ...\n----- BEGIN CACHED CONTENT -----\nuseActionState(action, initialState) returns [state, formAction, isPending]\n----- END CACHED CONTENT -----`
- **actual exit code:** `2` (on hit); `0` (on miss/stale)
- documented exit codes vs actual exit paths: documented "On hit, exits 2 and writes the cached body to stderr... Otherwise exits 0" (lines 6-7). In code: lines 21, 22, 23, 38, 53, 64, 79, 84 all `exit 0`; line 106 `exit 2`.
- for validators/gates: Tool-interception gate. Exiting 2 delivers the stderr content as a tool response to Claude Code while aborting the network tool call.
- does the output match what the documentation claims? Yes, exit 2 on HTTP 304 match, exit 0 on mismatch.

## Defects — required
none

## Observations
- Surfaces original prompt: `Original WebFetch prompt: "..."` allows subsequent agents to evaluate whether the cached summary matches their current analytical angle.
- Uses `printf` rather than unquoted heredocs to prevent accidental shell variable expansion inside cached code blocks.

## Context cost
4,261 bytes (~1,065 tokens).
```

---

### Entry 7: `hooks/session-start.sh`

```markdown
---
package: addy
path: hooks/session-start.sh
type: script
bytes: 1392
unit: inv-addy-9
deprecated: false
---

# hooks/session-start.sh

## Purpose — required, verbatim
> "Injects the using-agent-skills meta-skill into every new session" — hooks/session-start.sh:3

## Design intent — required
Session initialization lifecycle hook that automatically injects the `using-agent-skills` meta-skill into every new agent session. It ensures that the skill discovery flowchart, core operating behaviors (surface assumptions, manage confusion, push back, enforce simplicity, maintain scope, verify), and full lifecycle sequence are loaded into the agent's context window before any user prompts are executed.

## Phase — required
cross-phase

## Inputs — required
- File: `skills/using-agent-skills/SKILL.md` (read via `cat`)

## Outputs — required
- Stdout JSON envelope conforming to host requirements:
  `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "..."}}`
- Exit code: `0` always

## Invokes — required
- skill using-agent-skills — hooks/session-start.sh:11
- CLI tools: `jq`, `cat`, `dirname`, `cd`, `pwd`

## Invoked by — required
- config hooks/hooks.json — hooks/hooks.json:8

## Concepts named — required, verbatim
- `session start hook` — hooks/session-start.sh:2 — defined here
- `using-agent-skills` — hooks/session-start.sh:3 — used here
- `SessionStart` — hooks/session-start.sh:6 — used here
- `hookSpecificOutput` — hooks/session-start.sh:6 — used here
- `additionalContext` — hooks/session-start.sh:6 — used here
- `skill discovery flowchart` — hooks/session-start.sh:22 — used here

## Structure
- (no markdown headings — Shell script)
- Header documentation & envelope specification (lines 1-8)
- Path resolution: `SCRIPT_DIR`, `SKILLS_DIR`, `META_SKILL` (lines 9-11)
- `jq` dependency check with fallback JSON (lines 13-16)
- Meta-skill check & JSON envelope formatting via `jq` (lines 18-28)

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/session-start.sh`, language: Bash, lines: 29
- documented invocation: `bash hooks/session-start.sh` — hooks/hooks.json:8
- **executed:** yes
- actual command run: `bash hooks/session-start.sh`
- abridged stdout: `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": "agent-skills loaded. Use the skill discovery flowchart to find the right skill for your task.\n\n# using-agent-skills\n..."}}`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: documented "Every output path must emit the standard SessionStart envelope... exit 0" (lines 5-15). In code: line 15 `exit 0`, line 28 implicit exit 0.
- for validators/gates: Never exits non-zero; always produces valid JSON envelope.
- does the output match what the documentation claims? Yes, properly formatted SessionStart JSON envelope containing complete meta-skill content.

## Defects — required
none

## Observations
- Follows strict host schema compliance: Claude Code and Codex CLI validate hook outputs against the `SessionStart` envelope schema and reject plain text or malformed JSON.
- Provides informative fallback JSON instructions if `jq` is missing or if `META_SKILL` is absent, preventing silent session initialization failures.

## Context cost
1,392 bytes (~348 tokens). When executed, embeds `skills/using-agent-skills/SKILL.md` (10,426 bytes), generating ~11,818 bytes (~2,955 tokens) of context.
```

---

### Entry 8: `hooks/simplify-ignore-test.sh`

```markdown
---
package: addy
path: hooks/simplify-ignore-test.sh
type: script
bytes: 8709
unit: inv-addy-9
deprecated: false
---

# hooks/simplify-ignore-test.sh

## Purpose — required, verbatim
> "Tests for the simplify-ignore hook

Exercises filter_file by extracting function definitions from the hook.
Run: bash hooks/simplify-ignore-test.sh" — hooks/simplify-ignore-test.sh:2-5

## Design intent — required
Unit test harness for the `simplify-ignore` hook script (`hooks/simplify-ignore.sh`). It isolates and tests the internal `filter_file` function across 10 functional scenarios: single-line comment blocks, multi-line comment blocks, multiple blocks in a single file, preserving reason strings, preserving trailing newlines, returning exit code 1 when no blocks exist, emitting warnings on unclosed blocks, single-line blocks with reason strings, HTML comment syntax, and error handling on malformed JSON inputs.

## Phase — required
addy:Verify

## Inputs — required
- Script: `hooks/simplify-ignore.sh` (extracts `filter_file()` via `sed` at line 34, invokes directly at line 243)
- Synthetic test fixtures generated inside temporary directory `$TMPDIR`

## Outputs — required
- Test results logged to stdout/stderr (`PASS: ...` / `FAIL: ...`)
- Summary: `Results: 21 passed, 0 failed`
- Exit code: `0` on all passing, `1` on any failure

## Invokes — required
- script hooks/simplify-ignore.sh — hooks/simplify-ignore-test.sh:34, 243
- CLI tools: `shasum` or `sha1sum`, `sed`, `grep`, `wc`, `cat`, `ls`, `mktemp`, `tail`, `tr`

## Invoked by — required
- orphan (not referenced in CI workflow `.github/workflows/test-plugin-install.yml`)

## Concepts named — required, verbatim
- `simplify-ignore hook` — hooks/simplify-ignore-test.sh:2 — used here
- `filter_file` — hooks/simplify-ignore-test.sh:4 — used here
- `hooks/simplify-ignore.sh` — hooks/simplify-ignore-test.sh:34 — used here
- `simplify-ignore-start` — hooks/simplify-ignore-test.sh:57 — used here
- `simplify-ignore-end` — hooks/simplify-ignore-test.sh:57 — used here
- `BLOCK_` placeholder — hooks/simplify-ignore-test.sh:64 — used here
- `perf-critical` reason — hooks/simplify-ignore-test.sh:135 — used here
- `session-start-test.sh` — hooks/simplify-ignore-test.sh:242 — used here

## Structure
- (no markdown headings — Shell script)
- Header & instructions (lines 1-8)
- Setup & trap: `TMPDIR`, `CACHE` (lines 9-15)
- Extracted helper functions: `hash_cmd`, `file_id`, `block_hash`, `escape_glob` (lines 17-31)
- Dynamic function extraction: `eval "$(sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh)"` (lines 33-35)
- Assertion helper: `assert_eq()` (lines 36-47)
- Test 1: Single-line block (start+end on same line) (lines 49-76)
- Test 2: Multi-line block (lines 77-100)
- Test 3: Multiple blocks in one file (lines 101-127)
- Test 4: Reason string in placeholder (lines 128-148)
- Test 5: Trailing newline preservation (lines 149-164)
- Test 6: No blocks returns 1 (lines 165-180)
- Test 7: Unclosed block (lines 181-197)
- Test 8: Single-line block with reason (lines 198-216)
- Test 9: HTML comment syntax (lines 217-237)
- Test 10: Malformed JSON input produces warning (lines 238-249)
- Results summary and exit code calculation (lines 250-254)

## Scripts — required if type is script or the skill ships scripts
- path: `hooks/simplify-ignore-test.sh`, language: Bash, lines: 254
- documented invocation: `bash hooks/simplify-ignore-test.sh` — hooks/simplify-ignore-test.sh:5
- **executed:** yes
- actual command run: `bash hooks/simplify-ignore-test.sh`
- abridged stdout: `Test 1: Single-line block ... Results: 21 passed, 0 failed`
- **actual exit code:** `0`
- documented exit codes vs actual exit paths: line 253 `[ "$FAIL" -eq 0 ] && exit 0 || exit 1`.
- for validators/gates: Exits 1 if any assertion fails.
- does the output match what the documentation claims? Yes, all 21 assertions pass.

## Defects — required
- orphan — hooks/simplify-ignore-test.sh:1 — File is not registered in GitHub Actions workflow `.github/workflows/test-plugin-install.yml`.

## Observations
- Uses an unconventional testing technique: uses `sed -n '/^filter_file()/,/^}/p' hooks/simplify-ignore.sh` passed to `eval` to extract and test a single shell function in isolation.
- Cross-unit coupling: This script in unit `inv-addy-9` directly tests `hooks/simplify-ignore.sh` from unit `inv-addy-8`.

## Context cost
8,709 bytes (~2,177 tokens). Evaluates `hooks/simplify-ignore.sh` (12,173 bytes), total ~20,882 bytes (~5,220 tokens).
```

---

### Entry 9: `hooks/SDD-CACHE.md`

```markdown
---
package: addy
path: hooks/SDD-CACHE.md
type: doc
bytes: 8398
unit: inv-addy-9
deprecated: false
---

# hooks/SDD-CACHE.md

## Purpose — required, verbatim
> "Cross-session citation cache for [`source-driven-development`](../skills/source-driven-development/SKILL.md). Skips redundant `WebFetch` calls without weakening the skill's "verify against current docs" guarantee." — hooks/SDD-CACHE.md:3

## Design intent — required
Architectural specification, configuration manual, and testing guide for the `sdd-cache` hook subsystem. Explains why traditional TTL-based or memory-based caching violates the core principle of `source-driven-development` ("docs change, and a stale cache hides that"), details the HTTP conditional revalidation protocol (`If-None-Match`, `If-Modified-Since`), documents Claude Code PreToolUse/PostToolUse configuration, and outlines smoke, end-to-end, and invalidation test procedures.

## Phase — required
addy:Build

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill source-driven-development — hooks/SDD-CACHE.md:3
- script hooks/sdd-cache-pre.sh — hooks/SDD-CACHE.md:24
- script hooks/sdd-cache-post.sh — hooks/SDD-CACHE.md:36

## Invoked by — required
- orphan (not referenced by `skills/source-driven-development/SKILL.md` or repository README)

## Concepts named — required, verbatim
- `sdd-cache hook` — hooks/SDD-CACHE.md:1 — defined here
- `source-driven-development` — hooks/SDD-CACHE.md:3 — used here
- `WebFetch` — hooks/SDD-CACHE.md:3 — used here
- `ETag` — hooks/SDD-CACHE.md:9 — used here
- `Last-Modified` — hooks/SDD-CACHE.md:9 — used here
- `If-None-Match` — hooks/SDD-CACHE.md:9 — used here
- `If-Modified-Since` — hooks/SDD-CACHE.md:9 — used here
- `304 Not Modified` — hooks/SDD-CACHE.md:9 — used here
- `PreToolUse` — hooks/SDD-CACHE.md:18 — used here
- `PostToolUse` — hooks/SDD-CACHE.md:30 — used here
- `CLAUDE_PROJECT_DIR` — hooks/SDD-CACHE.md:24 — used here
- `SDD_CACHE_DEBUG` — hooks/SDD-CACHE.md:145 — used here
- `DETECT → FETCH → IMPLEMENT → CITE` — hooks/SDD-CACHE.md:79 — used here

## Structure
- `# sdd-cache hook` (line 1)
- `## Why` (line 5)
- `## Setup` (line 11)
- `## Mental model` (line 53)
- `## How it works` (line 59)
- `## Local testing` (line 81)
  - `### 1. Smoke test the scripts directly` (line 83)
  - `### 2. End-to-end in a real session` (line 114)
  - `### 3. Freshness verification` (line 123)
  - `### 4. Debugging` (line 139)
- `## Known limitations` (line 154)
- `## Requirements` (line 162)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — hooks/SDD-CACHE.md:1 — Neither `skills/source-driven-development/SKILL.md` nor the repository README references `hooks/SDD-CACHE.md`.

## Observations
- Documents the design rationale rejecting client-side AI memory: "Caching the content as local memory would contradict the skill — docs change, and a stale cache hides that" (lines 7-8).
- Details the mechanism of Claude Code's PreToolUse exit code 2: delivering cached content as a simulated tool error so the model consumes it without triggering outbound HTTP traffic.

## Context cost
8,398 bytes (~2,100 tokens).
```

---

### Entry 10: `hooks/hooks.json`

```markdown
---
package: addy
path: hooks/hooks.json
type: config
bytes: 364
unit: inv-addy-9
deprecated: false
---

# hooks/hooks.json

## Purpose — required, verbatim
> ""command": "SCRIPT=\"${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ] || SCRIPT=\"${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh\"; [ -f \"$SCRIPT\" ]&& bash \"$SCRIPT\" || true"" — hooks/hooks.json:8 (no explicit purpose statement)

## Design intent — required
Configuration manifest declaring the plugin's lifecycle hooks for Claude Code. Binds the `SessionStart` event to execute `hooks/session-start.sh` with dual path resolution: first trying `${CLAUDE_PLUGIN_ROOT}/hooks/session-start.sh` (when installed as a plugin), and falling back to `${CLAUDE_PROJECT_DIR}/.claude/hooks/session-start.sh` (when copied locally into a project).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script hooks/session-start.sh — hooks/hooks.json:8

## Invoked by — required
- orphan (not referenced by `.claude-plugin/plugin.json`, `plugin.json`, or `.codex-plugin/plugin.json`)

## Concepts named — required, verbatim
- `SessionStart` — hooks/hooks.json:3 — used here
- `CLAUDE_PLUGIN_ROOT` — hooks/hooks.json:8 — used here
- `CLAUDE_PROJECT_DIR` — hooks/hooks.json:8 — used here

## Structure
- (no markdown headings — JSON configuration)
- Root object: `hooks.SessionStart[0].hooks[0]` (lines 1-14)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — hooks/hooks.json:1 — Not registered in `.claude-plugin/plugin.json` or `.codex-plugin/plugin.json`, and located in `hooks/hooks.json` rather than plugin root or `.claude/hooks.json`.

## Observations
- Includes resilient inline bash fallback logic in the command definition (`SCRIPT=...; [ -f "$SCRIPT" ] || SCRIPT=...; [ -f "$SCRIPT" ] && bash "$SCRIPT" || true`) to support both global plugin installation and local project repository layouts.

## Context cost
364 bytes (~91 tokens).
```

---

## 5. Architectural Synthesis & Cross-Unit Insights

### 5.1 Validation Script Archetypes & Invariant Enforcement
The validation scripts in `inv-addy-9` exemplify three fundamental static analysis archetypes:
1. **Contract Allowlisting (`validate-artifact-paths.js`)**: Instead of generic path checking, it explicitly allowlists 4 canonical artifact paths (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`) across 7 guarded pipeline files. This guarantees that artifact producers (`/spec`, `/plan`) and consumers (`/build`, skills) never drift in their disk contracts.
2. **Relative Reference Resolution (`validate-reference-links.js`)**: Uses a negative lookbehind regular expression to isolate markdown links to `references/*.md` and verifies their existence on disk relative to each skill directory. This enforces the distinction between shared repository checklists (`../../references/`) and colocated skill checklists (`references/`).
3. **Multi-Harness Release Synchronization (`validate-versions-test.js` & `validate-versions.js`)**: Ensures that all five manifest entry points (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`) are updated simultaneously on release tags.

### 5.2 Lifecycle Hook Architecture & Tool Short-Circuiting
The `sdd-cache` subsystem (`sdd-cache-pre.sh`, `sdd-cache-post.sh`, `SDD-CACHE.md`) introduces an advanced pattern for agent tool optimization:
- **HTTP Conditional Revalidation over LLM Memory**: Rather than caching documentation in agent memory (which quickly goes stale), it delegates freshness to origin servers via `If-None-Match` (`ETag`) and `If-Modified-Since`. Content is reused only on HTTP `304 Not Modified`.
- **Exit Code 2 Short-Circuiting**: Claude Code interprets exit code 2 from a `PreToolUse` hook as a signal to abort the tool execution and return the hook's stderr output directly to the agent as the tool result. This allows local cache hits to completely bypass network API token consumption.
- **Context Injection via SessionStart**: `session-start.sh` leverages the `SessionStart` hook event to automatically inject `using-agent-skills/SKILL.md` into the agent's context window, establishing operating guidelines and discovery mechanisms before execution begins.

### 5.3 Cross-Unit Dependencies
- **`hooks/simplify-ignore-test.sh` (Unit 9) ↔ `hooks/simplify-ignore.sh` (Unit 8)**: The test suite in Unit 9 tests the hook script in Unit 8, dynamically extracting `filter_file()` via `sed` and invoking the full script on malformed JSON inputs.
- **`scripts/validate-versions-test.js` (Unit 9) ↔ `scripts/validate-versions.js` (Unit 10)**: Unit 9 contains the test file, while Unit 10 contains the implementation script for manifest version validation.
- **`scripts/validate-artifact-paths.js` (Unit 9) ↔ Slash Commands (Unit 1) & Skills (Unit 3)**: Validates artifact path conventions across `.claude/commands/{spec,plan,build}.md` (Unit 1) and `skills/{spec-driven-development,planning-and-task-breakdown}/SKILL.md` (Unit 3).
- **`scripts/validate-reference-links.js` (Unit 9) ↔ Reference Checklists (Units 1-2)**: Verifies that relative links in all 25 skills resolve to shared checklists in `references/` (Units 1-2).

---

## 6. Defect Catalog

| File | Defect Type | Location | Description |
|---|---|---|---|
| `scripts/validate-reference-links-test.js` | `none` | — | Clean (invoked in CI at `.github/workflows/test-plugin-install.yml:41`) |
| `scripts/validate-reference-links.js` | `none` | — | Clean (invoked in CI at `.github/workflows/test-plugin-install.yml:38`) |
| `scripts/validate-artifact-paths.js` | `none` | — | Clean (invoked in CI at `.github/workflows/test-plugin-install.yml:61`) |
| `scripts/validate-versions-test.js` | `none` | — | Clean (invoked in CI at `.github/workflows/test-plugin-install.yml:29`) |
| `hooks/sdd-cache-post.sh` | `none` | — | Clean (fully operational, graceful fallbacks) |
| `hooks/sdd-cache-pre.sh` | `none` | — | Clean (fully operational, verified exit code 2 on HTTP 304) |
| `hooks/session-start.sh` | `none` | — | Clean (valid JSON envelope produced) |
| `hooks/simplify-ignore-test.sh` | `orphan` | `hooks/simplify-ignore-test.sh:1` | Test file is not registered or run in `.github/workflows/test-plugin-install.yml` |
| `hooks/SDD-CACHE.md` | `orphan` | `hooks/SDD-CACHE.md:1` | Unreferenced documentation file; not linked from `skills/source-driven-development/SKILL.md` or README |
| `hooks/hooks.json` | `orphan` | `hooks/hooks.json:1` | Located at `hooks/hooks.json` and not referenced by any plugin manifest (`plugin.json` or `.claude-plugin/plugin.json`) |
