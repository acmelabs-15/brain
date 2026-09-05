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
verified: 2026-09-05 quote-check+coverage
---

# scripts/lib/skill-lint-test.js

## Purpose — required, verbatim
> "A SKILL.md body carrying every required section, so tests can isolate frontmatter." — scripts/lib/skill-lint-test.js:12
(no explicit purpose statement)

## Design intent — required
Unit test suite for the core skill validation logic in `scripts/lib/skill-lint.js`. Exercises `lintSkillContent` against isolated mock SKILL.md fixtures, verifying section exemptions (specifically preventing prototype-pollution exemptions such as a directory named `constructor`), allowlisted exemptions (`using-agent-skills`), unauthorized exemption attempts, trigger clauses in descriptions, directory-name matching, workflow step/section synchronization, and missing frontmatter handling. Ensures the validator's rules remain robust without touching the filesystem or invoking CLI processes.

## Phase — required
none

## Inputs — required
- Validator module under test: imports `lintSkillContent` via `require('./skill-lint.js')` — scripts/lib/skill-lint-test.js:8.
- Frontmatter test helpers: creates synthetic markdown fixtures via `withAllSections` — scripts/lib/skill-lint-test.js:13 and `VALID_FRONTMATTER` — scripts/lib/skill-lint-test.js:31.

## Outputs — required
- Test assertion outcomes and process exit code via `node:test` runner: 0 if all tests pass, non-zero on test assertion failure.

## Invokes — required
- script skill-lint.js — scripts/lib/skill-lint-test.js:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `withAllSections` — scripts/lib/skill-lint-test.js:13 — defined here
- `VALID_FRONTMATTER` — scripts/lib/skill-lint-test.js:31 — defined here
- `Section exemptions` — scripts/lib/skill-lint-test.js:38 — defined here
- `SECTION_EXEMPT_SKILLS` — scripts/lib/skill-lint-test.js:41 — used here
- `Guardrails on the rules this change sits beside` — scripts/lib/skill-lint-test.js:85 — defined here
- `The Optimization Workflow` — scripts/lib/skill-lint-test.js:116 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint-test.js`, language: JavaScript (Node.js test runner), lines: 142
- documented invocation: none documented in repository
- **executed:** yes
- actual command run: `bun test ./sources/addy/scripts/lib/skill-lint-test.js`, abridged stdout: `sources/addy/scripts/lib/skill-lint-test.js:\n(pass) a directory named after an Object.prototype key is not exempt from section checks [1.37ms]\n(pass) a genuinely allowlisted skill is still exempt [0.12ms]\n(pass) a skill claiming its own exemption without being allowlisted fails loud [0.10ms]\n(pass) a fully valid skill produces no errors [0.03ms]\n(pass) reports a description with no trigger clause [0.04ms]\n(pass) reports frontmatter name that disagrees with the directory [0.03ms]\n(pass) reports a workflow step declared without a matching process section [0.30ms]\n(pass) reports a missing frontmatter block [0.03ms]\n\n 8 pass\n 0 fail\nRan 8 tests across 1 file.`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths in code: Node/Bun test runner exits 0 when all tests pass, non-zero if assertions fail (`node:assert/strict`).
- for validators/gates: can it exit non-zero? Yes, on assertion failure. Does it fail on the source repo's own default branch? No, all 8 test cases pass cleanly (exit code 0).
- does the output match what the documentation claims? No documentation explicitly describes this test file, but all 8 test cases pass as expected.

## Defects — required
- `orphan`: `scripts/lib/skill-lint-test.js` is not invoked by CI workflow `.github/workflows/test-plugin-install.yml` or any npm script in the repository.

## Observations
- Tests against prototype pollution: verifies that `Object.hasOwn` prevents a directory named `constructor` from bypassing required section validation (`scripts/lib/skill-lint-test.js:40-57`).
- Fixture builder utility: `withAllSections` (lines 13-29) standardizes test frontmatter isolation by automatically appending all five required sections (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`).

## Context cost
4645 bytes (~1100 tokens). Loads `scripts/lib/skill-lint.js` (11808 bytes), totaling ~16453 bytes (~3900 tokens).
