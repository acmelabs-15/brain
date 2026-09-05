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
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-versions-test.js

## Purpose — required, verbatim
> "all plugin manifests use the latest release tag" — scripts/validate-versions-test.js:21
(no explicit purpose statement)

## Design intent — required
Automated test suite using `node:test` and `node:assert/strict` that verifies all five plugin manifests (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json`) contain the exact version string matching the latest git release tag (`git describe --tags --abbrev=0`). Prevents shipping mismatched manifest versions during releases.

## Phase — required
none

## Inputs — required
Git tag metadata via `git describe --tags --abbrev=0`, and JSON contents from five manifest files: `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`.

## Outputs — required
Test assertions verifying manifest version consistency against git release tag.

## Invokes — required
none

## Invoked by — required
- script test-plugin-install.yml — .github/workflows/test-plugin-install.yml:29

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions-test.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions-test.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions-test.js:11 — used here
- `.claude-plugin/marketplace.json` — scripts/validate-versions-test.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions-test.js:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-versions-test.js`, JavaScript (Node.js test runner `node:test`), 36 lines
- documented invocation: none
- executed: yes
- actual command run: `bun test ./scripts/validate-versions-test.js`, stdout: `1 pass\n0 fail\nRan 1 test across 1 file. [42.00ms]`, actual exit code: 0; when run with `node --test scripts/validate-versions-test.js`, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent repo package.json `"type": "module"`
- documented exit codes: none vs. actual exit paths: `node:test` exits 0 if assertions pass, exits 1 on assertion failure or missing git tag
- for validators/gates: not a gate (test runner for manifest versions)
- does the output match what the documentation claims: yes, verifies that all 5 manifests match version 0.6.8

## Defects — required
- other — scripts/validate-versions-test.js:3: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed where a parent `package.json` specifies `"type": "module"`.

## Observations
- Relies on `git describe --tags --abbrev=0` via synchronous child process execution, requiring git tags in the checkout.

## Context cost
957 bytes, ~220 tokens.
