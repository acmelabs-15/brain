---
package: addy
path: scripts/validate-versions.js
type: script
bytes: 949
unit: inv-addy-11
---

# scripts/validate-versions.js

## Purpose — required, verbatim
> "All plugin manifests use version ${expectedVersion}." — scripts/validate-versions.js:36 (no explicit purpose statement)

## Design intent — required
Enforces multi-harness version alignment across all five plugin manifests (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json`) by comparing each manifest's declared version string against the latest git release tag (`git describe --tags --abbrev=0`), blocking CI releases if version drift or tag discrepancy occurs.

## Phase — required
`cross-phase`

## Inputs — required
- Output of command `git describe --tags --abbrev=0` — scripts/validate-versions.js:21-25
- Five JSON manifest files read via `fs.readFileSync`:
  - `plugin.json` — scripts/validate-versions.js:9
  - `.codex-plugin/plugin.json` — scripts/validate-versions.js:10
  - `.claude-plugin/plugin.json` — scripts/validate-versions.js:11
  - `.claude-plugin/marketplace.json` — scripts/validate-versions.js:12
  - `.agents/plugins/marketplace.json` — scripts/validate-versions.js:13

## Outputs — required
- Console success log: `All plugin manifests use version <version>.` — scripts/validate-versions.js:36
- Exit code: `0` on success, unhandled Error (exit code `1`) on version mismatch or missing git tag.

## Invokes — required
- command git describe --tags --abbrev=0 — scripts/validate-versions.js:21-25
- module node:child_process (require('node:child_process')) — scripts/validate-versions.js:5
- module node:fs (require('node:fs')) — scripts/validate-versions.js:6

## Invoked by — required
- config .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:26
- script scripts/validate-versions-test.js — scripts/validate-versions-test.js:12

## Concepts named — required, verbatim
- `plugin manifest version` — scripts/validate-versions.js:16 — defined here
- `git release tag` — scripts/validate-versions.js:23 — used here
- `plugin.json` — scripts/validate-versions.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions.js:11 — used here
- `marketplace.json` — scripts/validate-versions.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions.js:13 — used here

## Structure
- Imports: execFileSync, readFileSync (lines 5-6)
- Manifest path definitions array (lines 8-14)
- Function getManifestVersion (lines 16-19)
- Git tag retrieval and parsing (lines 21-25)
- Iterative version assertion loop (lines 27-34)
- Success log output (lines 36-37)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-versions.js`
- language: JavaScript (Node.js / Bun)
- lines: 37
- documented invocation:
  > "run: node scripts/validate-versions.js" — .github/workflows/test-plugin-install.yml:26
- **executed:** yes
- actual command run: `cd sources/addy && bun scripts/validate-versions.js`
- abridged stdout:
  ```text
  All plugin manifests use version 0.6.8.
  ```
- **actual exit code:** 0
- documented exit codes: `none` documented in file; exits 0 on success, throws unhandled Error (exit code 1) on version mismatch or missing git tag.
- for validators/gates: can exit non-zero? Yes. Throws error if any manifest version differs from git tag or if git tag resolution fails. Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes.

## Defects — required
- `script-bug` · scripts/validate-versions.js:21-25 · `execFileSync("git", ...)` and relative manifest paths `manifestPaths = ["plugin.json", ...]` omit `cwd` and do not anchor with `__dirname`, causing fatal crashes when executed from any directory other than the repository root.

## Observations
- Flexibly supports both standard manifest schemas (`manifest.version`) and marketplace array schemas (`manifest.plugins?.[0]?.version`).
- Covers Claude Code, OpenAI Codex, and Google Antigravity manifest formats.

## Context cost
949 bytes (file) + 2,400 bytes (5 manifests) = 3,349 bytes total, ~837 tokens.
