---
package: addy
path: scripts/validate-versions-test.js
type: script
bytes: 957
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-versions-test.js, sha256: 04eb5b55f0be0fa9e807b07ce349cd8993939ca80f3144e14176bf3019086390}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-versions-test.js

## Purpose — required, verbatim
> "all plugin manifests use the latest release tag" — scripts/validate-versions-test.js:21
*(no explicit purpose statement; test verifying manifest version synchronization)*

## Design intent — required
Automated test verifying that `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json` all declare a version string matching the repository's latest git release tag (`git describe --tags --abbrev=0`). Without this test, publishing or release automation could drift, releasing manifests with mismatched or stale version numbers across different agent plugin ecosystems.

## Phase — required
none

## Inputs — required
- Git repository tag metadata retrieved via `git describe --tags --abbrev=0` (`scripts/validate-versions-test.js:22-26`)
- Manifest JSON files: `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json` (`scripts/validate-versions-test.js:9-13`)

## Outputs — required
- Test runner output to stdout/stderr via `node:test`
- Exit status code (0 for pass, 1 for fail)

## Invokes — required
- file plugin.json — scripts/validate-versions-test.js:9
- file .codex-plugin/plugin.json — scripts/validate-versions-test.js:10
- file .claude-plugin/plugin.json — scripts/validate-versions-test.js:11
- file .claude-plugin/marketplace.json — scripts/validate-versions-test.js:12
- file .agents/plugins/marketplace.json — scripts/validate-versions-test.js:13

## Invoked by — required
- file .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:29

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions-test.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions-test.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions-test.js:11 — used here
- `.claude-plugin/marketplace.json` — scripts/validate-versions-test.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions-test.js:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-versions-test.js`, JavaScript (Node.js/Bun), 36 lines
- documented invocation: `"node --test scripts/validate-versions-test.js"` — .github/workflows/test-plugin-install.yml:29
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `bun test ./scripts/validate-versions-test.js`
  - Output: `(pass) all plugin manifests use the latest release tag [81.20ms] ... 1 pass, 0 fail`
  - Exit code: 0
  - Note: In this worktree environment, running under `node --test` fails because parent root `package.json` specifies `"type": "module"`. Executing with `bun test ./scripts/validate-versions-test.js` passes.
- documented exit codes vs. actual exit paths:
  - Documented: not documented in file comments; standard test runner convention (0 on pass, 1 on fail)
  - Actual exit paths: handled by test runner runtime via assertion assertions (`assert.equal` at `scripts/validate-versions-test.js:29`). Exit code 0 if all assertions pass, 1 if assertion throws or git execution fails.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: Yes, if any manifest version differs from git tag or git command fails.
  - Default branch check: Passes with exit code 0 on default branch.
- does the output match what the documentation claims?
  - Yes, asserts that all 5 manifests match latest release tag (0.6.8).

## Defects — required
none

## Observations
Tests the exact same condition that `scripts/validate-versions.js` enforces in CI, serving as a test-runner-wrapped validation check.

## Context cost
957 bytes (~240 tokens). Reads 5 manifest JSON files (~3 KB total).
