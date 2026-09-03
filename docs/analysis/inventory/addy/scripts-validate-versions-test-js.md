---
package: addy
path: scripts/validate-versions-test.js
type: script
bytes: 957
unit: inv-addy-9
---

# scripts/validate-versions-test.js

## Purpose — required, verbatim
> "all plugin manifests use the latest release tag" (no explicit purpose statement; test case name) — scripts/validate-versions-test.js:21

## Design intent — required
Test suite verifying that all plugin and marketplace manifest files across Claude Code, Codex, and Antigravity plugin targets maintain version parity with the repository's latest git release tag (`git describe --tags --abbrev=0`). Prevents release drift where one manifest is bumped while others remain on older version numbers.

## Phase — required
addy:Ship

## Inputs — required
- Command: `git describe --tags --abbrev=0` — scripts/validate-versions-test.js:23
- Files listed in `manifestPaths`:
  - `plugin.json` — scripts/validate-versions-test.js:9
  - `.codex-plugin/plugin.json` — scripts/validate-versions-test.js:10
  - `.claude-plugin/plugin.json` — scripts/validate-versions-test.js:11
  - `.claude-plugin/marketplace.json` — scripts/validate-versions-test.js:12
  - `.agents/plugins/marketplace.json` — scripts/validate-versions-test.js:13

## Outputs — required
- stdout test execution assertions via `node:test` — scripts/validate-versions-test.js:21

## Invokes — required
- command git describe --tags --abbrev=0 — scripts/validate-versions-test.js:23
- file plugin.json — scripts/validate-versions-test.js:9
- file .codex-plugin/plugin.json — scripts/validate-versions-test.js:10
- file .claude-plugin/plugin.json — scripts/validate-versions-test.js:11
- file .claude-plugin/marketplace.json — scripts/validate-versions-test.js:12
- file .agents/plugins/marketplace.json — scripts/validate-versions-test.js:13
- package node:assert/strict — scripts/validate-versions-test.js:3
- package node:child_process — scripts/validate-versions-test.js:4
- package node:fs — scripts/validate-versions-test.js:5
- package node:test — scripts/validate-versions-test.js:6

## Invoked by — required
- .github/workflows/test-plugin-installation.yml:29 — executed during CI `validate-skills` job (`node --test scripts/validate-versions-test.js`)

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions-test.js:9 — used here
- `marketplace.json` — scripts/validate-versions-test.js:12 — used here
- `latest release tag` — scripts/validate-versions-test.js:21 — used here
- `manifestPaths` — scripts/validate-versions-test.js:8 — defined here

## Structure
- "use strict";
- Imports
- manifestPaths
- readManifestVersion(manifestPath)
- test("all plugin manifests use the latest release tag", ...)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-versions-test.js`, language: JavaScript (Node.js/Bun), lines: 36
- documented invocation: `node --test scripts/validate-versions-test.js` — .github/workflows/test-plugin-installation.yml:29
- executed: yes
- actual command run: `bun test ./scripts/validate-versions-test.js`
- actual exit code: 0
- documented exit codes: exit 0 on pass, exit 1 on assertion error
- actual exit paths in code: via `node:test` runner
- for validators/gates: can exit 1 if any manifest version differs from latest git tag. Passes cleanly on default branch (all 5 manifests match tag 0.6.8).
- does the output match what the documentation claims? yes; 1 pass, 0 fail.

## Defects — required
none

## Observations
- Inspects 5 multi-host manifests: root plugin (`plugin.json`), Codex plugin (`.codex-plugin/plugin.json`), Claude Code plugin (`.claude-plugin/plugin.json`), Claude Code marketplace (`.claude-plugin/marketplace.json`), and Antigravity marketplace (`.agents/plugins/marketplace.json`).
- Demonstrates active multi-host packaging support in Addy's repository.

## Context cost
957 bytes (~239 tokens)
