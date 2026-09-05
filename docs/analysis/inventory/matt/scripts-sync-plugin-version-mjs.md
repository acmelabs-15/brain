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
verified: 2026-09-05 quote-check+coverage
---

# scripts/sync-plugin-version.mjs

## Purpose — required, verbatim
> "Copies package.json's version into .claude-plugin/plugin.json." — scripts/sync-plugin-version.mjs:2

## Design intent — required
Maintains metadata synchronization between the repository's root `package.json` and `.claude-plugin/plugin.json`. Ensures that when Changesets increments the package release version during publishing workflows (`npm run version`), the Claude Code plugin manifest is automatically updated with the matching version string while strictly preserving key order and formatting. Provides a `--check` verification mode for CI validation.

## Phase — required
cross-phase

## Inputs — required
`package.json`, `.claude-plugin/plugin.json`, and command-line arguments (checking for `--check`).

## Outputs — required
Updated `.claude-plugin/plugin.json` on disk (when versions differ without `--check`), and informative status messages printed to stdout or stderr.

## Invokes — required
none

## Invoked by — required
- config package.json — package.json:13
- config package.json — package.json:14

## Concepts named — required, verbatim
- `plugin.json` — scripts/sync-plugin-version.mjs:2 — used here
- `changeset version` — scripts/sync-plugin-version.mjs:3 — used here
- `--check` — scripts/sync-plugin-version.mjs:4 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/sync-plugin-version.mjs`, language: `node/esm`, lines: 42
- documented invocation: "With --check it changes nothing and exits 1 if the two versions differ." — scripts/sync-plugin-version.mjs:4
- **executed:** yes
- actual command run: `node sources/matt/scripts/sync-plugin-version.mjs --check`
- abridged stdout: `plugin.json version is 1.2.3 (already in sync)`
- **actual exit code:** 0
- documented exit codes: "exits 1 if the two versions differ." — scripts/sync-plugin-version.mjs:4 vs. actual exit paths in code: `process.exit(0)` — scripts/sync-plugin-version.mjs:19 (already in sync), `process.exit(1)` — scripts/sync-plugin-version.mjs:26 (versions differ with --check), `process.exit(1)` — scripts/sync-plugin-version.mjs:37 (version replacement regex failed), implicit exit 0 upon successful file write
- for validators/gates: yes, operates as a validator when `--check` is passed. Exits non-zero (exit 1) if `package.json` and `plugin.json` versions diverge. Passes (exit 0) on default branch.
- does the output match what the documentation claims? yes, confirms versions are synchronized.

## Defects — required
none

## Observations
Uses regex substitution (`/("version"\s*:\s*")[^"]*("/)`) rather than `JSON.stringify` specifically to preserve JSON key order and original whitespace indentation in `plugin.json`.

## Context cost
1429 bytes, 42 lines, approximately 350 tokens.
