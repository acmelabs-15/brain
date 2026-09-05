---
package: addy
path: scripts/validate-skills.js
type: script
bytes: 2401
unit: inv-addy-38
deprecated: false
aliases: []
memo_inputs:
  - {path: scripts/validate-skills.js, sha256: 2d6c3d8798af354a4d482efb561571421552805a3f80e398c20a2dbd204134f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# scripts/validate-skills.js

## Purpose — required, verbatim
> "CLI that validates every skill in skills/ against the rules in" — scripts/validate-skills.js:5

## Design intent — required
Command-line validator that checks every skill in `skills/` against structural and anatomical standards defined in `docs/skill-anatomy.md`. It delegates linting rule logic to `scripts/lib/skill-lint.js` while driving directory traversal, handling formatted console output (errors, warnings, section check exemptions), and setting exit codes. Without this script, non-compliant skills missing mandatory sections or YAML frontmatter could enter the repository unnoticed.

## Phase — required
none

## Inputs — required
- Directory `skills/` (`path.resolve(__dirname, '..', 'skills')` at `scripts/validate-skills.js:21`)
- Skill subdirectories inside `skills/`
- Linting module: `scripts/lib/skill-lint.js` (`scripts/validate-skills.js:19`)

## Outputs — required
- Formatted console output reporting checked skills, error messages, warning messages, and summary status (`PASSED`, `PASSED WITH WARNINGS`, or `FAILED`)
- Process exit code (0 for success or warnings only, 1 for errors)

## Invokes — required
- script ./lib/skill-lint — scripts/validate-skills.js:19

## Invoked by — required
- file .github/workflows/test-plugin-install.yml — .github/workflows/test-plugin-install.yml:23

## Concepts named — required, verbatim
- `validate-skills.js` — scripts/validate-skills.js:3 — defined here
- `docs/skill-anatomy.md` — scripts/validate-skills.js:6 — used here
- `scripts/lib/skill-lint.js` — scripts/validate-skills.js:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-skills.js`, JavaScript (Node.js/Bun), 70 lines
- documented invocation: `"node scripts/validate-skills.js"` — .github/workflows/test-plugin-install.yml:23
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `bun scripts/validate-skills.js`
  - Output: `✓ api-and-interface-design ... 25 skills checked — 0 error(s), 0 warning(s) — PASSED`
  - Exit code: 0
  - Note: In this worktree environment, running under `node` fails because parent root `package.json` specifies `"type": "module"`. Executing with `bun scripts/validate-skills.js` succeeds and passes.
- documented exit codes vs. actual exit paths:
  - Documented: "Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-skills.js:11
  - Actual exit paths:
    - `process.exit(1);` at `scripts/validate-skills.js:28` if `SKILLS_DIR` does not exist
    - `process.exit(1);` at `scripts/validate-skills.js:59` if `totalErrors > 0`
    - `process.exit(1);` at `scripts/validate-skills.js:68` on unexpected exception in catch block
    - Implicit exit 0 at end of `main()` at line 60 when `totalErrors === 0`
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: Yes, exits with code 1 on missing directory, lint errors, or unhandled exceptions.
  - Default branch check: Passes with 0 errors and 0 warnings across 25 skills, exit code 0.
- does the output match what the documentation claims?
  - Yes, correctly verifies 25 skills against skill-anatomy rules.

## Defects — required
none

## Observations
Separates CLI execution and formatted reporting from linting rules (which are isolated in `scripts/lib/skill-lint.js`). Recognizes section-check exemptions for meta-skills such as `idea-refine` and `using-agent-skills`.

## Context cost
2401 bytes (~600 tokens) + `scripts/lib/skill-lint.js` (11808 bytes / ~2952 tokens) = 14209 bytes (~3552 tokens).
