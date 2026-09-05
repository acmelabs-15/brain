---
package: addy
path: scripts/validate-reference-links-test.js
type: script
bytes: 5666
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-reference-links-test.js

## Purpose — required, verbatim
> "passes when a skill reaches the shared checklist two levels up" — scripts/validate-reference-links-test.js:43
*(no explicit purpose statement; unit test suite for `validate-reference-links.js`)*

## Design intent — required
Automated test suite verifying the behavior of `scripts/validate-reference-links.js`. Uses isolated temporary sandboxes to exercise seven distinct scenarios: resolving repo-root shared checklists via relative paths (`../../references/*.md`), catching broken links that omit the directory ascent, parsing markdown link syntax, permitting colocated references within skill directories (`references/*.md`), detecting nonexistent checklists, ignoring non-reference paths (such as task plans or ideas), and reporting all unresolvable references within a skill rather than stopping at the first. Without this test suite, regressions in reference link validation could permit broken documentation links or falsely flag legitimate artifacts.

## Phase — required
none

## Inputs — required
- Sandboxed directory structures created in `os.tmpdir()` (`makeSandbox` in `scripts/validate-reference-links-test.js:16`)
- Copied validator script: `scripts/validate-reference-links.js` (`scripts/validate-reference-links-test.js:19`)
- Mocked files: `references/definition-of-done.md`, `skills/using-agent-skills/SKILL.md`, `skills/dataviz/references/palette.md`, `skills/dataviz/SKILL.md`, `skills/shipping-and-launch/SKILL.md`, `skills/planning-and-task-breakdown/SKILL.md`, `references/security-checklist.md`, `references/performance-checklist.md`, `skills/code-review-and-quality/SKILL.md`

## Outputs — required
- Test execution reporting via `node:test` runner to stdout/stderr
- Process exit status code (0 for pass, 1 for fail)

## Invokes — required
- script validate-reference-links.js — scripts/validate-reference-links-test.js:12

## Invoked by — required
- file .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:41

## Concepts named — required, verbatim
- `validate-reference-links.js` — scripts/validate-reference-links-test.js:12 — used here
- `references/definition-of-done.md` — scripts/validate-reference-links-test.js:45 — used here
- `skills/using-agent-skills/SKILL.md` — scripts/validate-reference-links-test.js:48 — used here
- `CLAUDE.md` — scripts/validate-reference-links-test.js:92 — used here
- `skills/shipping-and-launch/SKILL.md` — scripts/validate-reference-links-test.js:107 — used here
- `skills/planning-and-task-breakdown/SKILL.md` — scripts/validate-reference-links-test.js:123 — used here
- `tasks/todo.md` — scripts/validate-reference-links-test.js:125 — used here
- `tasks/plan.md` — scripts/validate-reference-links-test.js:125 — used here
- `PERF.md` — scripts/validate-reference-links-test.js:126 — used here
- `skills/incremental-implementation/SKILL.md` — scripts/validate-reference-links-test.js:127 — used here
- `skills/code-review-and-quality/SKILL.md` — scripts/validate-reference-links-test.js:145 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-reference-links-test.js`, JavaScript (Node.js/Bun), 154 lines
- documented invocation: `"node --test scripts/validate-reference-links-test.js"` — .github/workflows/test-plugin-install.yml:41
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `bun test ./scripts/validate-reference-links-test.js`
  - Output: `(pass) passes when a skill reaches the shared checklist two levels up ... 7 pass, 0 fail, Ran 7 tests across 1 file. [321.00ms]`
  - Exit code: 0
  - Note: In this worktree environment, running `node --test` fails because parent root `package.json` specifies `"type": "module"`, causing Node to treat `.js` files as ES modules where `require` is undefined. Executing with `bun test ./scripts/validate-reference-links-test.js` passes all 7 tests.
- documented exit codes vs. actual exit paths:
  - Documented: not documented in file comments; standard test runner convention (0 on pass, 1 on fail)
  - Actual exit paths: handled by test runner runtime via assertion calls (`assert.equal` at `scripts/validate-reference-links-test.js:54`, `71`, `87`, `100`, `111`, `135`, `151`). Exit code 0 if all tests pass, 1 if any assert throws.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: Yes, exits with code 1 if any test assertion fails.
  - Default branch check: Passes with exit code 0 (7 passed, 0 failed).
- does the output match what the documentation claims?
  - Yes, exercises and verifies all 7 test cases.

## Defects — required
none

## Observations
Provides regression testing specifically preventing relative link resolution errors from nested skill markdown directories (`skills/<name>/SKILL.md`) to repo-level `references/` directory.

## Context cost
5666 bytes (~1416 tokens) + `scripts/validate-reference-links.js` (3832 bytes / ~958 tokens) = 9498 bytes (~2374 tokens).
