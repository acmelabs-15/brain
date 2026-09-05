---
unit: inv-addy-36
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-36

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/testing-patterns.md (7460 bytes, 235 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/lib/skill-lint-test.js (4645 bytes, 141 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/lib/skill-lint.js (11808 bytes, 275 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/run-evals-test.js (10378 bytes, 289 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/references-testing-patterns-md.md (5380 bytes)
- docs/analysis/inventory/addy/scripts-lib-skill-lint-test-js.md (4500 bytes)
- docs/analysis/inventory/addy/scripts-lib-skill-lint-js.md (5251 bytes)
- docs/analysis/inventory/addy/scripts-run-evals-test-js.md (5831 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-36.md (4628 bytes)

## Scripts executed
- sources/addy/scripts/lib/skill-lint-test.js: `bun test ./sources/addy/scripts/lib/skill-lint-test.js` (exit 0)
- sources/addy/scripts/lib/skill-lint.js: `bun sources/addy/scripts/lib/skill-lint.js` (exit 0)
- sources/addy/scripts/run-evals-test.js: `bun test ./sources/addy/scripts/run-evals-test.js` (exit 0)
- companion validation CLI invocation: `bun sources/addy/scripts/validate-skills.js` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Separation of linter engine and CLI driver**: `scripts/lib/skill-lint.js` is the pure rule validation engine separated from filesystem walking and CLI logic in `scripts/validate-skills.js` (covered in `inv-addy-43`). This pure engine is directly tested by `scripts/lib/skill-lint-test.js` without filesystem I/O or child processes, verifying frontmatter conventions, description trigger clauses ("Use when... / Do not use when..."), kebab-case directories, multi-step workflow header synchronization (`## The ... Workflow` vs `### Step N:`), and allowlisted exemptions.
- **Prototype pollution security safeguard**: `scripts/lib/skill-lint.js` line 194 uses `Object.hasOwn(SECTION_EXEMPT_SKILLS, dirName)` rather than the `in` operator, specifically preventing an untrusted directory named `constructor` from inheriting exemptions from `Object.prototype.constructor`. This behavior is explicitly tested in `scripts/lib/skill-lint-test.js:40-57`.
- **Orphan status of `scripts/lib/skill-lint-test.js`**: Unlike `scripts/run-evals-test.js` (which is wired into GitHub Actions CI at `.github/workflows/test-plugin-install.yml:32`), `scripts/lib/skill-lint-test.js` is not invoked in CI or defined in any package script (`orphan` defect documented on its inventory card).
- **Hermetic eval test harness and patch application**: `scripts/run-evals-test.js` exercises the evaluation harness `scripts/run-evals.js` (covered in `inv-addy-37`). It tests LLM grader parsing (`parseGrading`), minimum case enforcement, fixture validation, dialogue vs execution evaluation modes, and rank-1 accuracy thresholding (`--min-rank1`). Furthermore, it validates `materializeWorkspace` with real git operations, verifying temporary repo creation and working-tree patch application in isolated temporary sandboxes (`makeSandbox`).
- **Testing patterns reference and TDD skill integration**: `references/testing-patterns.md` is a standalone reference document implementing concrete JavaScript/TypeScript testing syntax (Jest, React Testing Library, Supertest, Playwright) to operationalize the universal principles defined in `skills/test-driven-development/SKILL.md` (covered in `inv-addy-19`). It establishes boundary mocking rules (permitting mocks for external APIs, HTTP, databases, and filesystem while strictly forbidding mocks for internal business logic, utility, or pure validation functions) and accessible query practices (`getByRole` / `getByLabelText` over test IDs). It is cross-referenced by `README.md` and `docs/getting-started.md`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~8,600 tokens (34,291 bytes across 4 files)
- Approximate tokens of output written: ~6,400 tokens (25,590 bytes across 4 inventory cards + unit report)
