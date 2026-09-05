---
package: addy
path: scripts/validate-reference-links.js
type: script
bytes: 3832
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-reference-links.js

## Purpose — required, verbatim
> "Guards links from skills to the shared `references/` checklists." — scripts/validate-reference-links.js:5

## Design intent — required
Validates that markdown links matching `references/*.md` inside all `skills/<name>/SKILL.md` files resolve to existing files relative to each skill's directory. This catches regressions where root-level checklists are linked without ascending two directory levels (`../../references/`), while still permitting legitimate skill-colocated `references/` subdirectories and ignoring mentions of non-existent prospective project artifacts (such as `tasks/todo.md` or `PERF.md`). Without this script, agent skill instructions could lead agents to 404 file-not-found errors during task execution.

## Phase — required
none

## Inputs — required
- Directory `skills/` (`path.join(ROOT, 'skills')` at `scripts/validate-reference-links.js:37`)
- Every `skills/<name>/SKILL.md` file located within `skills/`
- Target reference markdown files resolved relative to each skill directory

## Outputs — required
- Validation status reports printed to stdout (`✓ skills/${name}/SKILL.md` or `✗ skills/${name}/SKILL.md` with error details)
- Process exit code (0 on success, 1 on errors)

## Invokes — required
none

## Invoked by — required
- script validate-reference-links.js — scripts/validate-reference-links-test.js:12
- file .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:38

## Concepts named — required, verbatim
- `validate-reference-links.js` — scripts/validate-reference-links.js:3 — defined here
- `validate-artifact-paths.js` — scripts/validate-reference-links.js:15 — used here
- `CLAUDE.md` — scripts/validate-reference-links.js:20 — used here
- `tasks/todo.md` — scripts/validate-reference-links.js:25 — used here
- `PERF.md` — scripts/validate-reference-links.js:25 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-reference-links.js`, JavaScript (Node.js/Bun), 104 lines
- documented invocation: `"node scripts/validate-reference-links.js"` — .github/workflows/test-plugin-install.yml:38
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `bun scripts/validate-reference-links.js`
  - Output: `Checking references/ links in skills... [25 skills checked] ... 25 skills checked — 0 error(s) — PASSED`
  - Exit code: 0
  - Note: In this worktree environment, running under `node` fails because the parent root `package.json` specifies `"type": "module"`. Executing with `bun scripts/validate-reference-links.js` succeeds and passes.
- documented exit codes vs. actual exit paths:
  - Documented: "Exit codes: 0 = all clear, 1 = one or more unresolvable links." — scripts/validate-reference-links.js:28
  - Actual exit paths:
    - `process.exit(1);` at `scripts/validate-reference-links.js:99` when `errors > 0`
    - `return;` at `scripts/validate-reference-links.js:65` when `SKILLS_DIR` does not exist (implicit exit 0)
    - Normal completion at end of `main()` at `scripts/validate-reference-links.js:101` when `errors === 0` (implicit exit 0)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: Yes, exits with code 1 at line 99 when unresolvable reference links exist.
  - Default branch check: Passes with 0 errors across 25 skills, exit code 0.
- does the output match what the documentation claims?
  - Yes, accurately verifies all 25 skills against reference link resolution rules.

## Defects — required
none

## Observations
Features a targeted regular expression `/(?<![A-Za-z0-9._/-])((?:\.\.\/)*references\/[A-Za-z0-9._-]+\.md)/g` that specifically catches `references/*.md` links with arbitrary `../` ascents while avoiding false alarms on prospective artifact paths or general markdown URLs.

## Context cost
3832 bytes (~958 tokens). Isolated execution with standard library dependencies (`fs`, `path`).
