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
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate-skills.js

## Purpose — required, verbatim
> "CLI that validates every skill in skills/ against the rules in" — scripts/validate-skills.js:5

## Design intent — required
Thin CLI wrapper that executes the skill linter (`scripts/lib/skill-lint.js`) across all subdirectories in `skills/`. Validates that every skill conforms to the anatomy rules defined in `docs/skill-anatomy.md` (frontmatter with name and description, required headings, exempt section checks, cross-skill references). Prints structured per-skill status and exits 0 on success or 1 on validation errors.

## Phase — required
none

## Inputs — required
`skills/` directory and its subdirectories, `scripts/lib/skill-lint.js`.

## Outputs — required
Console summary of skill validation errors and warnings, exits with 0 or 1.

## Invokes — required
- script ./lib/skill-lint — scripts/validate-skills.js:19

## Invoked by — required
- script test-plugin-install.yml — .github/workflows/test-plugin-install.yml:23
- doc developer-onboarding.md — docs/developer-onboarding.md:56

## Concepts named — required, verbatim
- `docs/skill-anatomy.md` — scripts/validate-skills.js:6 — used here
- `scripts/lib/skill-lint.js` — scripts/validate-skills.js:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `scripts/validate-skills.js`, JavaScript (Node.js), 70 lines
- documented invocation: `node scripts/validate-skills.js` — docs/developer-onboarding.md:56
- executed: yes
- actual command run: `bun scripts/validate-skills.js`, stdout: `  ✓  api-and-interface-design\n... 25 skills checked — 0 error(s), 0 warning(s) — PASSED`, actual exit code: 0; when run with `node scripts/validate-skills.js` under brain-v2, exits with code 1 and stdout `ReferenceError: require is not defined in ES module scope` due to parent repo package.json `"type": "module"`
- documented exit codes: `0 = all clear, 1 = one or more errors` — scripts/validate-skills.js:11 vs. actual exit paths: `process.exit(1)` at scripts/validate-skills.js:28 if skills directory is missing, `process.exit(1)` at scripts/validate-skills.js:59 if `totalErrors > 0`, `process.exit(1)` at scripts/validate-skills.js:68 in catch handler, normal completion exit 0 at scripts/validate-skills.js:65
- for validators/gates: can exit non-zero (exits 1 if validation errors occur); does not fail on default branch (25 skills checked, 0 errors, 0 warnings, PASSED)
- does the output match what the documentation claims: yes, validates skills directory against anatomy rules and exits 0 when clean

## Defects — required
- other — scripts/validate-skills.js:16: Uses CommonJS `require()` syntax in a `.js` file, causing Node.js to fail with a ReferenceError when executed where a parent `package.json` specifies `"type": "module"`.

## Observations
- Wraps execution in top-level try/catch block to format unexpected runtime errors as structured one-line messages for CI rather than unhandled stack traces.
- Displays `(section checks exempt)` for skills like `idea-refine` and `using-agent-skills` that are exempt from strict section checks.

## Context cost
2401 bytes plus scripts/lib/skill-lint.js (9134 bytes) = 11535 bytes, ~2600 tokens.
