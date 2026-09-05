---
package: addy
path: scripts/validate-versions.js
type: script
bytes: 949
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-versions.js, sha256: 8bee245140e72ee92df25003f50e9eda0ee1e76d0eeeddf09639ea9bfa25158b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-versions.js

## Purpose — required, verbatim
> "All plugin manifests use version" — scripts/validate-versions.js:36
(no explicit purpose statement)

## Design intent — required
CLI validator script that verifies all five plugin manifests in the repository (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json`) specify a version identical to the latest git release tag (`git describe --tags --abbrev=0`). Throws an error and exits non-zero if any manifest has a mismatched or missing version.

## Phase — required
none

## Inputs — required
Latest git tag retrieved via `git describe --tags --abbrev=0`, and five JSON plugin manifests.

## Outputs — required
Success message logged to stdout (`All plugin manifests use version <version>.`), or an unhandled Error thrown on mismatch.

## Invokes — required
none

## Invoked by — required
- script test-plugin-install.yml — .github/workflows/test-plugin-install.yml:26

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions.js:11 — used here
- `.claude-plugin/marketplace.json` — scripts/validate-versions.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions.js:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-versions.js`, JavaScript (Node.js), 37 lines
- documented invocation: `node scripts/validate-versions.js` — .github/workflows/test-plugin-install.yml:26
- executed: yes
- actual command run: `bun scripts/validate-versions.js`, stdout: `All plugin manifests use version 0.6.8.`, actual exit code: 0; when run with `node scripts/validate-versions.js` under brain-v2, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent repo package.json `"type": "module"`
- documented exit codes: none documented vs. actual exit paths: normal completion exit 0 at scripts/validate-versions.js:36, unhandled Error throw (exit 1) on version mismatch at scripts/validate-versions.js:30
- for validators/gates: can exit non-zero (throws Error if any manifest version differs from git tag); does not fail on default branch (matches version 0.6.8)
- does the output match what the documentation claims: yes, verifies all 5 manifests match release tag 0.6.8

## Defects — required
- other — scripts/validate-versions.js:5: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed where a parent `package.json` specifies `"type": "module"`.

## Observations
- Handles both `manifest.version` and `manifest.plugins?.[0]?.version` (marketplace schema).

## Context cost
949 bytes, ~220 tokens.
