---
package: addy
path: scripts/lib/skill-lint-test.js
type: script
bytes: 4645
unit: inv-addy-36
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/lib/skill-lint-test.js, sha256: dc3a01270a1b83399e7f21d72f6c457ebf3d878e4e040d2db0622858ddafa7df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/lib/skill-lint-test.js

## Purpose — required, verbatim
> "A SKILL.md body carrying every required section, so tests can isolate frontmatter." — scripts/lib/skill-lint-test.js:12
(no explicit purpose statement)

## Design intent — required
Provides unit test coverage for the `skill-lint.js` validation rules using Node.js native test modules (`node:test` and `node:assert/strict`). It tests critical edge cases such as preventing prototype chain pollution where a directory named after `Object.prototype` properties (like `constructor`) might bypass section checks, ensuring allowlisted skills (`using-agent-skills`) are properly exempted, rejecting unallowlisted self-exemptions, validating trigger clauses in descriptions, checking directory-to-name alignment, and enforcing that declared workflow steps have matching process sections.

## Phase — required
cross-phase

## Inputs — required
In-memory mock markdown strings and frontmatter blocks — scripts/lib/skill-lint-test.js:13-36

## Outputs — required
Test assertion results reported via `node:test` reporter

## Invokes — required
- script skill-lint.js — scripts/lib/skill-lint-test.js:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `lintSkillContent` — scripts/lib/skill-lint-test.js:8 — used here
- `KNOWN` — scripts/lib/skill-lint-test.js:10 — defined here
- `withAllSections` — scripts/lib/skill-lint-test.js:13 — defined here
- `VALID_FRONTMATTER` — scripts/lib/skill-lint-test.js:31 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint-test.js:41 — used here
- `KEBAB_CASE` — scripts/lib/skill-lint-test.js:41 — used here
- `using-agent-skills` — scripts/lib/skill-lint-test.js:62 — used here
- `The Optimization Workflow` — scripts/lib/skill-lint-test.js:116 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/lib/skill-lint-test.js`, JavaScript (Node.js CommonJS), 142 lines
- documented invocation: none documented in repository docs or README
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun test ./sources/addy/scripts/lib/skill-lint-test.js`, stdout `8 pass 0 fail`, exit code: 0. Direct execution via `node scripts/lib/skill-lint-test.js` fails with exit code 1 due to enclosing workspace package.json ESM module configuration (`ReferenceError: require is not defined in ES module scope`).
- documented exit codes vs. actual exit paths in code: none documented; uses `node:test` runner; exits 0 on all test assertions passing, non-zero on assertion failure; zero explicit `process.exit()` calls in source code.
- for validators/gates: test suite for validator library. When assertions fail, exits non-zero. Currently passes all 8 test cases.
- does the output match what the documentation claims? No documentation exists for running this test script directly.

## Defects — required
- `orphan` · `scripts/lib/skill-lint-test.js:1` · Test suite is never invoked by the CI workflow `.github/workflows/test-plugin-install.yml` nor any other script or npm script in the repository, leaving `skill-lint.js` unit tests unrun in automated CI.
- `script-bug` · `scripts/lib/skill-lint-test.js:5` · Uses CommonJS `require()` without a local `package.json` declaring `"type": "commonjs"`; in projects where an enclosing package.json declares `"type": "module"`, running `node --test scripts/lib/skill-lint-test.js` fails with `ReferenceError: require is not defined in ES module scope`.

## Observations
- Contains regression tests specifically targeting prototype pollution vulnerability where `dirName in SECTION_EXEMPT_SKILLS` could match properties on `Object.prototype` (like `constructor`).
- Mentions in comments: "Deliberately narrow: #428 rewrites frontmatter parsing and the cross-reference patterns, so asserting their behaviour here would collide with that work." (line 86).

## Context cost
4645 bytes + 11808 bytes (`skill-lint.js`) = 16453 bytes, ~4113 tokens.
