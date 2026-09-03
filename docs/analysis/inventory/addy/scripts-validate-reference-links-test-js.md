---
package: addy
path: scripts/validate-reference-links-test.js
type: script
bytes: 5666
unit: inv-addy-9
---

# scripts/validate-reference-links-test.js

## Purpose — required, verbatim
> "passes when a skill reaches the shared checklist two levels up" (no explicit purpose statement; test suite for validate-reference-links.js) — scripts/validate-reference-links-test.js:43

## Design intent — required
Provides regression and unit tests for `scripts/validate-reference-links.js`. Creates isolated temporary directories mimicking repository file structures, verifies that relative links between skills and shared root checklists (e.g. `../../references/definition-of-done.md`) resolve correctly, and confirms that broken links (`references/definition-of-done.md`), missing files, or bad markdown syntax are caught with actionable error reports and non-zero exit codes.

## Phase — required
cross-phase

## Inputs — required
- Script under test: `scripts/validate-reference-links.js` — scripts/validate-reference-links-test.js:12,19,31

## Outputs — required
- stdout test execution assertions via `node:test` — scripts/validate-reference-links-test.js:10,43

## Invokes — required
- script scripts/validate-reference-links.js — scripts/validate-reference-links-test.js:12,19,31
- package node:assert/strict — scripts/validate-reference-links-test.js:5
- package node:child_process — scripts/validate-reference-links-test.js:9
- package node:fs — scripts/validate-reference-links-test.js:6
- package node:os — scripts/validate-reference-links-test.js:7
- package node:path — scripts/validate-reference-links-test.js:8
- package node:test — scripts/validate-reference-links-test.js:10

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:43 — executed during CI `validate-skills` job (`node --test scripts/validate-reference-links-test.js`)

## Concepts named — required, verbatim
- `node:test` — scripts/validate-reference-links-test.js:10 — used here
- `validate-reference-links` — scripts/validate-reference-links-test.js:12 — used here
- `definition-of-done.md` — scripts/validate-reference-links-test.js:45 — used here
- `references/` — scripts/validate-reference-links-test.js:45 — used here
- `../../references/` — scripts/validate-reference-links-test.js:49 — used here
- `security-checklist.md` — scripts/validate-reference-links-test.js:141 — used here
- `performance-checklist.md` — scripts/validate-reference-links-test.js:142 — used here

## Structure
- `#!/usr/bin/env node`
- Imports and setup
- makeSandbox()
- writeFile()
- run()
- afterEach()
- test('passes when a skill reaches the shared checklist two levels up')
- test('fails when a skill links the shared checklist as if it were colocated')
- test('checks markdown link syntax, not just backtick mentions')
- test('passes when a skill colocates its own references directory')
- test('fails when a link points at a checklist that no longer exists')
- test('ignores paths that are not references/ links')
- test('reports every unresolvable link, not just the first per skill')

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-reference-links-test.js`, language: JavaScript (Node.js/Bun), lines: 154
- documented invocation: `node --test scripts/validate-reference-links-test.js` — .github/workflows/test-plugin-installation.yml:43
- executed: yes
- actual command run: `bun test ./scripts/validate-reference-links-test.js`
- actual exit code: 0
- documented exit codes: exit 0 on pass, exit 1 on failure
- actual exit paths in code: via `node:test` runner
- for validators/gates: can exit 1 on test failure; passes cleanly on default branch (7 pass, 0 fail)
- does the output match what the documentation claims? yes; 7 pass, 0 fail

## Defects — required
none

## Observations
- Cleans up sandbox directories via `afterEach(() => { for (const root of sandboxes.splice(0)) fs.rmSync(root, ...); })`.
- Specifically includes tests to guard against false-positive path matching on non-reference markdown paths like `tasks/todo.md` and `docs/ideas/[idea-name].md`.

## Context cost
5,666 bytes (~1,416 tokens)
