# Handoff Report: `inv-addy-6` Exploration, Script Execution & Synthesis (`docs/skill-anatomy.md`)

## 1. Observation

- **Assigned Scope**: Work unit `inv-addy-6` target file `sources/addy/docs/skill-anatomy.md` (8,849 bytes, 183 lines), package validation script execution in `sources/addy/`, cross-unit analysis, and work-unit report drafting.
- **Assigned Unit Composition**: Unit `inv-addy-6` comprises 5 files totaling 42,661 bytes:
  1. `docs/comparison.md` (15,362 bytes)
  2. `docs/developer-onboarding.md` (7,850 bytes)
  3. `docs/getting-started.md` (7,104 bytes)
  4. `docs/copilot-setup.md` (3,496 bytes)
  5. `docs/skill-anatomy.md` (8,849 bytes)

- **Verbatim Purpose Statement**:
  - `docs/skill-anatomy.md:3`: `"This document describes the structure and format of agent-skills skill files. Use this as a guide when contributing new skills or understanding existing ones."`

- **Execution Results (Direct Tool Observation)**:
  1. `cd sources/addy && bun scripts/validate-skills.js`: Exit code `0`
     - Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`
  2. `cd sources/addy && bun scripts/validate-commands.js`: Exit code `0`
     - Output: `Checking command parity... 9 commands checked — 0 error(s) — PASSED`
  3. `cd sources/addy && bun scripts/validate-reference-links.js`: Exit code `0`
     - Output: `Checking references/ links in skills... 25 skills checked — 0 error(s) — PASSED`
  4. `cd sources/addy && bun scripts/validate-artifact-paths.js`: Exit code `0`
     - Output: `Checking spec/plan/todo artifact paths... 7 files checked — 0 error(s) — PASSED`
  5. `cd sources/addy && bun scripts/validate-versions.js`: Exit code `0`
     - Output: `All plugin manifests use version 0.6.8.`
  6. `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js`: Exit code `0` (6 pass, 0 fail)
  7. `cd sources/addy && bun test ./scripts/validate-commands-test.js`: Exit code `0` (6 pass, 0 fail)
  8. `cd sources/addy && bun test ./scripts/validate-reference-links-test.js`: Exit code `0` (7 pass, 0 fail)
  9. `cd sources/addy && bun test ./scripts/validate-versions-test.js`: Exit code `0` (1 pass, 0 fail)
  10. `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js`: Exit code `0` (8 pass, 0 fail)
  11. `cd sources/addy && bun test ./scripts/run-evals-test.js`: Exit code `0` (15 pass, 0 fail)
  12. `cd sources/addy && bun test`: Exit code `1`
     - Output: 7 pass, 1 fail. Failure occurred at `evals/fixtures/debugging-and-error-recovery/pagination.test.js:8:10` (`AssertionError: Expected values to be strictly deep-equal: actual [ 'e' ], expected [ 'c', 'd' ]`).
     - Analysis of `evals/fixtures/debugging-and-error-recovery/pagination.js`: `function paginate(items, page, pageSize) { const start = page * pageSize; return items.slice(start, start + pageSize); }`. This is an intentional off-by-one error in a synthetic eval fixture used to evaluate agent error recovery, rather than a regression in repository code.

- **Defects & Inconsistencies Directly Observed**:
  1. `doc-drift`: `docs/skill-anatomy.md:39` states: `"The section layout below is a recommended pattern, not a rigid template: equivalent headings are acceptable when they serve the same purpose clearly"`, and lines 178-181 list the standard sections under `"Recommended"`. However, `scripts/lib/skill-lint.js:45-51, 190-210` hard-enforces five exact headings (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) as `REQUIRED_SECTIONS`, throwing fatal errors on any non-exempt skill that deviates. Only two skills (`using-agent-skills` and `idea-refine`) are permitted exceptions via an internal allowlist.
  2. `missing-path`: `docs/skill-anatomy.md:116-117` documents an unresolved packaging dependency hazard (tracked in GitHub issue #361) where per-skill installation tooling copies only `skills/<name>/`, leaving shared root `references/` behind and breaking markdown links at runtime.

- **Cross-Unit Architectural Observations**:
  1. **Reference Colocation vs. Shared Root Tension**: Across the 25 skills in `sources/addy/skills/`, exactly one skill (`constraint-driven-development`) has a colocated `references/` directory (`skills/constraint-driven-development/references/`), while all other 24 skills depend on root `references/`.
  2. **Scripts Colocation**: Across all 25 skills, exactly one skill (`idea-refine`) ships a `scripts/` directory (`skills/idea-refine/scripts/idea-refine.sh`).
  3. **Progressive Disclosure Rules**:
     - System prompt frontmatter: `name` + `description` (strictly <= 1024 characters, third-person with "Use when" trigger clause).
     - Skill definition: `SKILL.md` (< 500 lines).
     - Supporting files: Reference docs (> 100 lines) or runnable bash scripts (`scripts/`).
     - Script execution over inline code blocks: `skill-anatomy.md:128` prescribes scripts over inline code blocks because script execution adds 0 static context tokens (only stdout enters context).
     - 1-level-deep reference linking constraint to prevent agent navigation cycles.

## 2. Logic Chain

1. **Full-Read Observation**: Line-by-line inspection of `sources/addy/docs/skill-anatomy.md` (183 lines, 8,849 bytes) verified all headings, frontmatter schemas, structural requirements, and design principles.
2. **Empirical Execution**: Running all 5 validation scripts (`validate-skills.js`, `validate-commands.js`, `validate-reference-links.js`, `validate-artifact-paths.js`, `validate-versions.js`) and 6 test suites confirmed 100% pass rates on repository scripts and linters (exit code 0).
3. **Root Cause Analysis of Test Suite**: Running unconstrained `bun test` in `sources/addy` failed on `evals/fixtures/debugging-and-error-recovery/pagination.test.js`. Inspection of `evals/fixtures/debugging-and-error-recovery/pagination.js` confirmed that this fixture intentionally contains a pagination bug for eval benchmarking. The project unit tests in `scripts/` all pass (43 tests, 0 failures).
4. **Specification Reconciliation**: Comparing `docs/skill-anatomy.md` with `scripts/lib/skill-lint.js` proved that while documentation labels section headings as "recommended", the linter enforces them as mandatory blocking requirements.
5. **Report & Inventory Persistence**: Full inventory entry matching `docs/plan/templates/inventory-entry.md` and complete draft sections for `inv-addy-6.md` were generated and written to `.agents/explorer_inv_addy_6_3/report.md`.

## 3. Caveats

No caveats. `docs/skill-anatomy.md` was read in full, all package validation scripts and tests were executed directly, all referenced paths were checked on disk, and the complete inventory entry and unit report drafts are persisted.

## 4. Conclusion

Exploration and script execution for `docs/skill-anatomy.md` and unit `inv-addy-6` are complete. All required fields are non-empty. The inventory entry is ready for extraction to `docs/analysis/inventory/addy/docs-skill-anatomy-md.md`, and the unit report sections are ready for consolidation into `docs/analysis/inventory/addy/_units/inv-addy-6.md`.

## 5. Verification Method

To independently reproduce and verify findings:

1. **Verify script and test executions**:
   ```bash
   cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy
   bun scripts/validate-skills.js
   bun scripts/validate-commands.js
   bun scripts/validate-reference-links.js
   bun scripts/validate-artifact-paths.js
   bun scripts/validate-versions.js
   bun test ./scripts/validate-artifact-paths-test.js
   bun test ./scripts/validate-commands-test.js
   bun test ./scripts/validate-reference-links-test.js
   bun test ./scripts/validate-versions-test.js
   bun test ./scripts/lib/skill-lint-test.js
   bun test ./scripts/run-evals-test.js
   ```
2. **Inspect generated report and inventory artifacts**:
   - `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3/report.md`
   - `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_3/handoff.md`
3. **Verify invalidation conditions**:
   - Any changes to `sources/addy/docs/skill-anatomy.md` or `sources/addy/scripts/lib/skill-lint.js` would require re-running validation scripts and updating line citations.
