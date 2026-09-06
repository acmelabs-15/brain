---
package: addy
path: scripts/lib/skill-lint-test.js
type: script
bytes: 4645
unit: inv-addy-36
aliases: []
memo_inputs:
  - {path: scripts/lib/skill-lint-test.js, sha256: dc3a01270a1b83399e7f21d72f6c457ebf3d878e4e040d2db0622858ddafa7df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/lib/skill-lint-test.js

## Purpose — required, verbatim
> "A SKILL.md body carrying every required section, so tests can isolate frontmatter." — scripts/lib/skill-lint-test.js:12
(no explicit purpose statement)

## Design intent — required
Automated unit test suite verifying the behavior of `scripts/lib/skill-lint.js` (`lintSkillContent`). Uses synthetic in-memory SKILL.md fixtures to test prototype pollution security (confirming that directory names matching `Object.prototype` properties like `constructor` do not bypass section checks), adherence to the `SECTION_EXEMPT_SKILLS` allowlist, rejection of unapproved exemption declarations, required section detection, description trigger requirements, name/directory matching, and workflow step continuity.

## Phase — required
none

## Inputs — required
`scripts/lib/skill-lint.js` (imports `lintSkillContent` at line 8).

## Outputs — required
Test runner results and exit code via Node's `node:test` runner.

## Invokes — required
- script ./skill-lint.js — scripts/lib/skill-lint-test.js:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `withAllSections` — scripts/lib/skill-lint-test.js:13 — defined here
- `VALID_FRONTMATTER` — scripts/lib/skill-lint-test.js:31 — defined here
- `lintSkillContent` — scripts/lib/skill-lint-test.js:8 — used here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint-test.js:41, 82 — used here
- `Object.prototype` — scripts/lib/skill-lint-test.js:40 — used here
- `a directory named after an Object.prototype key is not exempt from section checks` — scripts/lib/skill-lint-test.js:40 — defined here
- `a genuinely allowlisted skill is still exempt` — scripts/lib/skill-lint-test.js:59 — defined here
- `a skill claiming its own exemption without being allowlisted fails loud` — scripts/lib/skill-lint-test.js:76 — defined here
- `a fully valid skill produces no errors` — scripts/lib/skill-lint-test.js:89 — defined here
- `reports a description with no trigger clause` — scripts/lib/skill-lint-test.js:94 — defined here
- `reports frontmatter name that disagrees with the directory` — scripts/lib/skill-lint-test.js:103 — defined here
- `reports a workflow step declared without a matching process section` — scripts/lib/skill-lint-test.js:112 — defined here
- `reports a missing frontmatter block` — scripts/lib/skill-lint-test.js:137 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/lib/skill-lint-test.js`, JavaScript (Node.js test runner), 142 lines
- documented invocation: none documented (orphan test file, not in CI)
- **executed:** yes
- actual command run: `bun test ./scripts/lib/skill-lint-test.js` (executed from `sources/addy`), abridged stdout: `scripts/lib/skill-lint-test.js:\n(pass) a directory named after an Object.prototype key is not exempt from section checks [2.74ms]\n(pass) a genuinely allowlisted skill is still exempt [0.09ms]\n(pass) a skill claiming its own exemption without being allowlisted fails loud [0.10ms]\n(pass) a fully valid skill produces no errors [0.03ms]\n(pass) reports a description with no trigger clause [0.04ms]\n(pass) reports frontmatter name that disagrees with the directory [0.04ms]\n(pass) reports a workflow step declared without a matching process section [0.31ms]\n(pass) reports a missing frontmatter block [0.03ms]\n\n 8 pass\n 0 fail\nRan 8 tests across 1 file.`, **actual exit code:** 0; when executed directly with `node scripts/lib/skill-lint-test.js` under brain-v2, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent package.json `"type": "module"`.
- documented exit codes: none documented vs. actual exit paths in code: exits 0 when all tests pass; exits non-zero on assertion failure via `node:assert/strict`.
- for validators/gates: test suite verifying the skill linter validation gates.
- does the output match what the documentation claims? Yes, all 8 tests pass cleanly.

## Defects — required
- orphan — scripts/lib/skill-lint-test.js:1: Test file is not executed by any CI workflow in `.github/workflows/test-plugin-install.yml` or referenced anywhere in repository documentation.
- other — scripts/lib/skill-lint-test.js:5: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed in an environment where a parent `package.json` specifies `"type": "module"`.

## Observations
- Verifies defensive prototype-pollution protections preventing skills named after Object prototype properties (e.g. `constructor`) from bypassing required section verification.
- Comment at lines 86-88 explains test scope was kept narrow to avoid colliding with PR #428.

## Context cost
4645 bytes plus scripts/lib/skill-lint.js (11808 bytes) = 16453 bytes (~4113 tokens).
