---
package: matt
path: scripts/sync-plugin-version.mjs
type: script
bytes: 1429
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/sync-plugin-version.mjs, sha256: 1ef892ec79e2f41ffe4c4d051f0e29d70401219499b6a11e717e5db337d78984}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/sync-plugin-version.mjs

## Purpose — required, verbatim
> "Copies package.json's version into .claude-plugin/plugin.json." — scripts/sync-plugin-version.mjs:2

## Design intent — required
Synchronizes the release version string from root `package.json` into `.claude-plugin/plugin.json` to keep Claude Code plugin metadata aligned with npm and Changesets during release workflows. Provides a non-mutating `--check` mode for CI pipelines to verify that both version fields match before publishing.

## Phase — required
cross-phase

## Inputs — required
- `package.json` at repository root (`version` field)
- `.claude-plugin/plugin.json` at repository root (`version` field)
- Optional CLI argument: `--check`

## Outputs — required
- Updated `.claude-plugin/plugin.json` with synchronized version field (when mutating and versions differ)
- Verification messages logged to stdout and stderr

## Invokes — required
- config .claude-plugin/plugin.json — scripts/sync-plugin-version.mjs:2

## Invoked by — required
- config package.json — package.json:13
- config package.json — package.json:14

## Concepts named — required, verbatim
- `package.json` — scripts/sync-plugin-version.mjs:2 — used here
- `.claude-plugin/plugin.json` — scripts/sync-plugin-version.mjs:2 — used here
- `npm run version` — scripts/sync-plugin-version.mjs:3 — used here
- `changeset version` — scripts/sync-plugin-version.mjs:3 — used here
- `--check` — scripts/sync-plugin-version.mjs:4 — defined here

## Structure
- `#!/usr/bin/env node` — scripts/sync-plugin-version.mjs:1
- `// Copies package.json's version into .claude-plugin/plugin.json.` — scripts/sync-plugin-version.mjs:2
- `const repo = join(dirname(fileURLToPath(import.meta.url)), "..");` — scripts/sync-plugin-version.mjs:10
- `if (plugin.version === version) {` — scripts/sync-plugin-version.mjs:17
- `if (process.argv.includes("--check")) {` — scripts/sync-plugin-version.mjs:22
- `const updated = source.replace(` — scripts/sync-plugin-version.mjs:30
- `writeFileSync(pluginPath, updated);` — scripts/sync-plugin-version.mjs:40

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/sync-plugin-version.mjs`
- language: JavaScript (Node.js ESM)
- lines: 42
- documented invocation: `node scripts/sync-plugin-version.mjs` — scripts/sync-plugin-version.mjs:24
- **executed:** yes
- actual command run: `node sources/matt/scripts/sync-plugin-version.mjs --check`
- abridged stdout: `plugin.json version is 1.2.3 (already in sync)`
- **actual exit code**: 0
- documented exit codes:
> "With --check it changes nothing and exits 1 if the two versions differ." — scripts/sync-plugin-version.mjs:4
- actual exit paths:
  - `process.exit(0)` — scripts/sync-plugin-version.mjs:19
  - `process.exit(1)` — scripts/sync-plugin-version.mjs:26
  - `process.exit(1)` — scripts/sync-plugin-version.mjs:37
  - implicit exit 0 on write completion
- for validators/gates: can exit non-zero (exit 1) on version divergence or replacement error; does not fail on default branch (both currently 1.2.3)
- does the output match what the documentation claims? yes, reports versions in sync with exit code 0

## Defects — required
none

## Observations
- Performs surgical regular expression replacement (`/("version"\s*:\s*")[^"]*(")/`) to retain the existing indentation, key order, and trailing newline formatting in `.claude-plugin/plugin.json`.
- Validates the mutated JSON string prior to writing to guarantee syntactic validity and version insertion.

## Context cost
1429 bytes (~357 tokens). Repository release / CI maintenance script; not loaded into agent execution contexts.
