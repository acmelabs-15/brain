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
> "fails when a producer drifts to an unapproved artifact path (the #93 regression)" — scripts/validate-artifact-paths-test.js:57 (no explicit top-level purpose comment; quotes test description names)

## Design intent — required
Guarantees that `scripts/validate-artifact-paths.js` accurately detects and blocks artifact-path drift across the spec-driven lifecycle pipeline. Uses ephemeral filesystem sandboxes to verify positive cases (canonical paths `SPEC.md`, `tasks/plan.md`, `tasks/todo.md`, accepted alternate `docs/SPEC.md`, and benign markdown citations) and negative cases (unapproved paths like `docs/features/[feature-name]/spec.md` from the PR #93 regression, with file and line reporting).

## Phase — required
`cross-phase`

## Inputs — required
- Ephemeral test sandboxes in `os.tmpdir()` created via `fs.mkdtempSync` — scripts/validate-artifact-paths-test.js:15-21
- Child process execution of `scripts/validate-artifact-paths.js` — scripts/validate-artifact-paths-test.js:28-35

## Outputs — required
- Child process runs of `validate-artifact-paths.js` in temporary sandboxes
- Test assertions via `node:assert/strict`
- Clean directory teardown via `afterEach` (`fs.rmSync(sandbox, { recursive: true, force: true })`) — scripts/validate-artifact-paths-test.js:37-41
- Exit code: `0` on test pass, `1` on failure

## Invokes — required
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths-test.js:12, 30
- module node:assert/strict (require('node:assert/strict')) — scripts/validate-artifact-paths-test.js:5
- module node:fs (require('node:fs')) — scripts/validate-artifact-paths-test.js:6
- module node:os (require('node:os')) — scripts/validate-artifact-paths-test.js:7
- module node:path (require('node:path')) — scripts/validate-artifact-paths-test.js:8
- module node:child_process (require('node:child_process')) — scripts/validate-artifact-paths-test.js:9
- module node:test (require('node:test')) — scripts/validate-artifact-paths-test.js:10

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:64

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
- Imports: assert, fs, os, path, child_process, test, afterEach (lines 5-10)
- Helper functions: makeSandbox, writeFile, run (lines 15-35)
- Teardown: afterEach cleanup (lines 37-41)
- Test 1: passes on canonical artifact paths (lines 43-55)
- Test 2: fails on unapproved artifact path drift (PR #93 regression) (lines 57-68)
- Test 3: reports offending file and line number (lines 70-80)
- Test 4: accepts docs/SPEC.md alternate spec location (lines 82-93)
- Test 5: ignores non-artifact markdown references (no false positives) (lines 95-107)
- Test 6: skips guarded files that do not exist (lines 109-116)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-artifact-paths-test.js`
- language: JavaScript (Node.js test runner)
- lines: 117
- documented invocation:
  > "run: node --test scripts/validate-artifact-paths-test.js" — .github/workflows/test-plugin-install.yml:64
- **executed:** yes
- actual command run: `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js`
- abridged stdout:
  ```text
  scripts/validate-artifact-paths-test.js:
  (pass) passes when producers and consumers use the canonical artifact paths [23.86ms]
  (pass) fails when a producer drifts to an unapproved artifact path (the #93 regression) [25.41ms]
  (pass) reports the offending file and line number [24.99ms]
  (pass) accepts the docs/SPEC.md alternate spec location [21.32ms]
  (pass) ignores non-artifact markdown references (no false positives) [17.53ms]
  (pass) skips guarded files that do not exist [23.65ms]

   6 pass
   0 fail
  Ran 6 tests across 1 file. [156.00ms]
  ```
- **actual exit code:** 0
- documented exit codes: `none` documented in file; test runner exits 0 on pass, 1 on failure.
- for validators/gates: executes regression tests asserting both exit code 0 on valid paths and exit code 1 on drifted paths (lines 53, 66, 78). Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes, all 6 tests pass cleanly.

## Defects — required
- `script-bug` · scripts/validate-artifact-paths-test.js:1 · Contains executable shebang `#!/usr/bin/env node` on line 1, but cannot be run directly as an executable without a test runner (`node --test` or `bun test`).

## Observations
- Directly encodes regression test for PR #93 (where `/spec` and `/plan` drifted to `docs/features/[feature-name]/` while `/build` required `SPEC.md`).
- Tests both error code detection and line-number reporting accuracy in error output.

## Context cost
4,572 bytes (file) + 4,102 bytes (`validate-artifact-paths.js`) = 8,674 bytes, ~2,168 tokens.
