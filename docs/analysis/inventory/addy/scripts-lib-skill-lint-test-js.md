---
package: addy
path: scripts/lib/skill-lint-test.js
type: script
bytes: 4645
unit: inv-addy-11
---

# scripts/lib/skill-lint-test.js

## Purpose — required, verbatim
> "a directory named after an Object.prototype key is not exempt from section checks" — scripts/lib/skill-lint-test.js:40
> "Deliberately narrow: #428 rewrites frontmatter parsing and the cross-reference patterns, so asserting their behaviour here would collide with that work." — scripts/lib/skill-lint-test.js:86-87 (no explicit purpose statement)

## Design intent — required
Provides isolated regression test coverage for `scripts/lib/skill-lint.js` without touching the filesystem, specifically safeguarding against prototype-chain inheritance bypasses (e.g. a skill directory named `constructor`), validating allowlist enforcement, and ensuring description trigger clauses, directory-name matching, and workflow step consistency checks operate correctly.

## Phase — required
`cross-phase`

## Inputs — required
- In-memory mock markdown string fixtures (`withAllSections`, `VALID_FRONTMATTER`, crafted YAML frontmatter blocks) — scripts/lib/skill-lint-test.js:13-36

## Outputs — required
- Test suite assertions reported via `node:test` / `bun test`
- Exit code: `0` on success, `1` on assertion failure

## Invokes — required
- script scripts/lib/skill-lint.js — scripts/lib/skill-lint-test.js:8
- module node:assert/strict (require('node:assert/strict')) — scripts/lib/skill-lint-test.js:5
- module node:test (require('node:test')) — scripts/lib/skill-lint-test.js:6

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Object.prototype key exemption bypass` — scripts/lib/skill-lint-test.js:40 — defined here
- `SECTION_EXEMPT_SKILLS allowlist` — scripts/lib/skill-lint-test.js:82 — used here
- `when to use trigger` — scripts/lib/skill-lint-test.js:100 — used here
- `workflow step validation` — scripts/lib/skill-lint-test.js:112 — used here
- `YAML frontmatter block` — scripts/lib/skill-lint-test.js:140 — used here
- `using-agent-skills` — scripts/lib/skill-lint-test.js:62 — used here
- `PR #428` — scripts/lib/skill-lint-test.js:86 — used here

## Structure
- Imports: assert, test, lintSkillContent (lines 5-8)
- Fixtures definition: VALID_FRONTMATTER, withAllSections (lines 10-36)
- // ─── Section exemptions ────────────────────────────────────────────────────── (line 38)
- Tests 1-3: prototype key check, allowlisted skill, unallowlisted exemption claim (lines 40-84)
- // ─── Guardrails on the rules this change sits beside ───────────────────────── (line 86)
- Tests 4-8: fully valid skill, missing trigger clause, name mismatch, missing step section, missing frontmatter (lines 88-142)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/lib/skill-lint-test.js`
- language: JavaScript (Node.js test runner)
- lines: 142
- documented invocation: `none` documented in repository; contains shebang `#!/usr/bin/env node`
- **executed:** yes
- actual command run: `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js`
- abridged stdout:
  ```text
  scripts/lib/skill-lint-test.js:
  (pass) a directory named after an Object.prototype key is not exempt from section checks [1.41ms]
  (pass) a genuinely allowlisted skill is still exempt [0.07ms]
  (pass) a skill claiming its own exemption without being allowlisted fails loud [0.10ms]
  (pass) a fully valid skill produces no errors [0.03ms]
  (pass) reports a description with no trigger clause [0.04ms]
  (pass) reports frontmatter name that disagrees with the directory [0.03ms]
  (pass) reports a workflow step declared without a matching process section [0.29ms]
  (pass) reports a missing frontmatter block [0.04ms]

   8 pass
   0 fail
  Ran 8 tests across 1 file. [17.00ms]
  ```
- **actual exit code:** 0
- documented exit codes: `none` documented in file; test runner exits 0 on pass, 1 on fail.
- for validators/gates: executes test assertions; exits non-zero if any assertion fails. Exits 0 on repository default branch.
- does the output match what the documentation claims? Yes, all 8 test cases pass cleanly.

## Defects — required
- `orphan` · scripts/lib/skill-lint-test.js:1 · Test file is omitted from `.github/workflows/test-plugin-install.yml` and is never executed in CI, unlike all other `*-test.js` files in `scripts/`.
- `script-bug` · scripts/lib/skill-lint-test.js:1 · Contains executable shebang `#!/usr/bin/env node` on line 1, but cannot be run directly without `--test` or a test runner (`bun test` / `node --test`).

## Observations
- Cites PR #428 at line 86 to explain why frontmatter parsing and cross-reference tests were intentionally kept narrow to avoid merge collisions.
- Uses purely in-memory string fixtures, ensuring fast and hermetic test execution.

## Context cost
4,645 bytes (file) + 11,808 bytes (`skill-lint.js`) = 16,453 bytes total, ~4,113 tokens.
