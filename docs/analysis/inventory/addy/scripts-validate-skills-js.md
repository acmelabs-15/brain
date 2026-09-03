---
package: addy
path: scripts/validate-skills.js
type: script
bytes: 2401
unit: inv-addy-10
---

# scripts/validate-skills.js

## Purpose — required, verbatim
> "CLI that validates every skill in skills/ against the rules in
 * docs/skill-anatomy.md. The rules themselves live in scripts/lib/skill-lint.js
 * (a single source of truth, importable and unit-testable); this file is a thin
 * wrapper that walks the skills directory, runs the linter, prints the report,
 * and sets the exit code.
 *
 * Exit codes: 0 = all clear, 1 = one or more errors" — scripts/validate-skills.js:5-11

## Design intent — required
Enforces repository-wide structural compliance for every skill in `skills/` against the canonical schema specified in `docs/skill-anatomy.md`. By serving as a CLI entry point for CI and pre-commit checks while delegating validation rules to `scripts/lib/skill-lint.js`, it provides an automated quality gate for skill discovery, agent routing (trigger phrasing), section completeness, and cross-skill references, preventing invalid skill definitions from entering the catalog.

## Phase — required
`cross-phase` (developer tooling and automated CI quality gate validating skills across all six lifecycle phases: `addy:Define`, `addy:Plan`, `addy:Build`, `addy:Verify`, `addy:Review`, `addy:Ship`)

## Inputs — required
- Directory tree: `skills/` (`path.resolve(__dirname, '..', 'skills')`) — scripts/validate-skills.js:21
- Skill markdown files: `skills/*/SKILL.md` (read via `lintSkill`) — scripts/validate-skills.js:41
- In-memory set of known skill directory names (`knownSkills` set) — scripts/validate-skills.js:35

## Outputs — required
- Formatted console output per skill: `  ✓  <name>`, `  ✗  <name>`, or `  ⚠  <name>` with error and warning details
- Summary status line: `<count> skills checked — <errors> error(s), <warnings> warning(s) — <status>`
- Exit code: `0` on pass or warnings-only; `1` on one or more errors or unexpected runtime exceptions

## Invokes — required
- script `scripts/lib/skill-lint.js` — scripts/validate-skills.js:19
- directory `skills/` — scripts/validate-skills.js:21
- function `lintSkill` — scripts/validate-skills.js:19, 41
- doc `docs/skill-anatomy.md` — scripts/validate-skills.js:6

## Invoked by — required
- config `.github/workflows/test-plugin-install.yml` — .github/workflows/test-plugin-install.yml:23
- doc `docs/developer-onboarding.md` — docs/developer-onboarding.md:56, 100
- doc `evals/README.md` — evals/README.md:18
- doc `CLAUDE.md` — CLAUDE.md:44

## Concepts named — required, verbatim
- `validate-skills.js` — scripts/validate-skills.js:3 — defined here
- `docs/skill-anatomy.md` — scripts/validate-skills.js:6 — used here
- `scripts/lib/skill-lint.js` — scripts/validate-skills.js:6 — used here
- `SKILLS_DIR` — scripts/validate-skills.js:21 — defined here
- `lintSkill` — scripts/validate-skills.js:19, 41 — used here
- `knownSkills` — scripts/validate-skills.js:35 — defined here
- `section checks exempt` — scripts/validate-skills.js:47 — used here

## Structure
- Header block comment & purpose summary (lines 2-12)
- Configuration & imports: fs, path, lintSkill, SKILLS_DIR (lines 14-21)
- `// ─── Main ────────────────────────────────────────────────────────────────────` (line 23)
- `main()` function definition: dir walking, linting loop, summary output (lines 25-60)
- Execution try/catch wrapper for structured CI error reporting (lines 64-69)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate-skills.js`
- language: JavaScript (Node.js / Bun CommonJS)
- lines: 70
- documented invocation:
  - `node scripts/validate-skills.js` — docs/developer-onboarding.md:56, 100; .github/workflows/test-plugin-install.yml:23; evals/README.md:18
- **executed:** yes
- actual command run: `bun scripts/validate-skills.js`
- actual stdout (abridged):
  ```
    ✓  api-and-interface-design
    ✓  browser-testing-with-devtools
    ✓  ci-cd-and-automation
    ✓  code-review-and-quality
    ✓  code-simplification
    ✓  constraint-driven-development
    ✓  context-engineering
    ✓  debugging-and-error-recovery
    ✓  deprecation-and-migration
    ✓  documentation-and-adrs
    ✓  doubt-driven-development
    ✓  frontend-ui-engineering
    ✓  git-workflow-and-versioning
    ✓  idea-refine (section checks exempt)
    ✓  incremental-implementation
    ✓  interview-me
    ✓  observability-and-instrumentation
    ✓  performance-optimization
    ✓  planning-and-task-breakdown
    ✓  security-and-hardening
    ✓  shipping-and-launch
    ✓  source-driven-development
    ✓  spec-driven-development
    ✓  test-driven-development
    ✓  using-agent-skills (section checks exempt)

  25 skills checked — 0 error(s), 0 warning(s) — PASSED
  ```
- **actual exit code: 0**
- documented exit codes: "Exit codes: 0 = all clear, 1 = one or more errors" (scripts/validate-skills.js:11) vs actual exit paths:
  - line 28: `process.exit(1)` (missing `SKILLS_DIR` directory)
  - line 59: `process.exit(1)` (`totalErrors > 0`)
  - line 68: `process.exit(1)` (unexpected error caught in wrapper)
  - implicit `0` when `totalErrors === 0` (even with warnings)
- for validators/gates: can exit non-zero (exits 1 on missing directory, lint errors, or unhandled exceptions); does not fail on default branch (25 skills pass with 0 errors and 0 warnings).
- does output match documentation: Yes, matches documented Tier 1 structural validation output.

## Defects — required
- `other` — scripts/validate-skills.js:16: CommonJS script without `.cjs` extension fails when executed with Node inside an enclosing ESM parent workspace (`brain-v2/package.json` contains `"type": "module"`), failing on `require()` because `sources/addy/` lacks its own `package.json` declaring CommonJS. Runs cleanly with `bun` or in a standalone checkout.
- `doc-drift` — CLAUDE.md:44 vs docs/developer-onboarding.md:56 and .github/workflows/test-plugin-install.yml:23: `CLAUDE.md:44` lists `Validate: Check that all SKILL.md files have valid YAML frontmatter with name and description` under `Commands` without the exact CLI command name, whereas onboarding guide and GitHub Actions specify `node scripts/validate-skills.js`.
- `doc-drift` — CLAUDE.md:43: Asserts `npm test — Not applicable (this is a documentation project)` despite `validate-skills.js` functioning as the primary Tier 1 validation gate in CI (`.github/workflows/test-plugin-install.yml:23`).

## Observations
- Clean architectural decoupling between the CLI wrapper (`validate-skills.js`) and the validation engine (`scripts/lib/skill-lint.js`).
- Warnings (such as dead cross-references) correctly do not trigger CI failure (exits 0 with `PASSED WITH WARNINGS`).
- Supports exemption labeling: skills in `SECTION_EXEMPT_SKILLS` (`using-agent-skills`, `idea-refine`) receive `(section checks exempt)` notice.

## Context cost
- File size: 2,401 bytes (70 lines, ~600 tokens).
- Dynamic load: Imports `scripts/lib/skill-lint.js` (11,808 bytes). Total context footprint: ~14,209 bytes (~3,550 tokens).
