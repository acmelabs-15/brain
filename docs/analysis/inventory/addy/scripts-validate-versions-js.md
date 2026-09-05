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
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-versions.js

## Purpose — required, verbatim
> "All plugin manifests use version" — scripts/validate-versions.js:36
*(no explicit purpose statement; CLI validator for plugin manifest versions)*

## Design intent — required
Command-line validation gate ensuring that all five plugin manifests (`plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and `.agents/plugins/marketplace.json`) declare the same version number as the current git release tag (`git describe --tags --abbrev=0`). It throws an error and halts execution if any manifest has a mismatched or missing version. Without this gate, mismatched version numbers could be merged or published across supported agent platforms.

## Phase — required
none

## Inputs — required
- Git repository tag metadata via `git describe --tags --abbrev=0` (`scripts/validate-versions.js:21-25`)
- Manifest JSON files: `plugin.json`, `.codex-plugin/plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json` (`scripts/validate-versions.js:9-13`)

## Outputs — required
- Success message to stdout (`All plugin manifests use version ${expectedVersion}.` at `scripts/validate-versions.js:36`)
- Process exit code (0 on success, 1 on thrown Error)

## Invokes — required
- file plugin.json — scripts/validate-versions.js:9
- file .codex-plugin/plugin.json — scripts/validate-versions.js:10
- file .claude-plugin/plugin.json — scripts/validate-versions.js:11
- file .claude-plugin/marketplace.json — scripts/validate-versions.js:12
- file .agents/plugins/marketplace.json — scripts/validate-versions.js:13

## Invoked by — required
- file .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:26

## Concepts named — required, verbatim
- `plugin.json` — scripts/validate-versions.js:9 — used here
- `.codex-plugin/plugin.json` — scripts/validate-versions.js:10 — used here
- `.claude-plugin/plugin.json` — scripts/validate-versions.js:11 — used here
- `.claude-plugin/marketplace.json` — scripts/validate-versions.js:12 — used here
- `.agents/plugins/marketplace.json` — scripts/validate-versions.js:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-versions.js`, JavaScript (Node.js/Bun), 37 lines
- documented invocation: `"node scripts/validate-versions.js"` — .github/workflows/test-plugin-install.yml:26
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `bun scripts/validate-versions.js`
  - Output: `All plugin manifests use version 0.6.8.`
  - Exit code: 0
  - Note: In this worktree environment, running under `node` fails because parent root `package.json` specifies `"type": "module"`. Executing with `bun scripts/validate-versions.js` succeeds and passes.
- documented exit codes vs. actual exit paths:
  - Documented: none
  - Actual exit paths:
    - Throws unhandled `Error` at `scripts/validate-versions.js:30-32` on version mismatch (process exits with code 1)
    - Throws if `git describe` fails at line 21-25 (process exits with code 1)
    - Normal completion after line 36 (implicit exit 0)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: Yes, throws Error and exits with code 1 if any manifest version does not equal expected tag version.
  - Default branch check: Passes with exit code 0 on default branch (0.6.8).
- does the output match what the documentation claims?
  - Yes, prints confirmation that all manifests use version 0.6.8.

## Defects — required
none

## Observations
Direct companion to `scripts/validate-versions-test.js`, running as a standalone script step in `.github/workflows/test-plugin-install.yml:26`.

## Context cost
949 bytes (~237 tokens). Reads 5 small manifest files (~3 KB total).
