---
unit: inv-addy-10
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-10

## Files assigned
- [x] `scripts/run-evals.js` (24,129 bytes)
- [x] `scripts/validate-commands-test.js` (5,471 bytes)
- [x] `scripts/run-evals-test.js` (10,378 bytes)
- [x] `scripts/validate-skills.js` (2,401 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/scripts-run-evals-js.md` (14,034 bytes)
- `docs/analysis/inventory/addy/scripts-validate-commands-test-js.md` (7,240 bytes)
- `docs/analysis/inventory/addy/scripts-run-evals-test-js.md` (8,414 bytes)
- `docs/analysis/inventory/addy/scripts-validate-skills-js.md` (7,338 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-10.md` (5,207 bytes)


## Scripts executed
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: 136 checks passed — 0 error(s), 0 warning(s), trigger rank-1 rate: 86% (72/84), PASSED)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js --min-rank1 80` — Exit code: `0` (Output: 136 checks passed, trigger rank-1 rate: 86%, PASSED)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js --min-rank1 90` — Exit code: `1` (Output: trigger rank-1 rate 86% is below required 90%, FAILED)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js --behavioral test-driven-development --dry-run` — Exit code: `0` (Output: prints 3 execution eval dry-run plans with claude flags and fixtures)
- `sources/addy/scripts/run-evals-test.js` — `cd sources/addy && bun test ./scripts/run-evals-test.js` — Exit code: `0` (Output: 15 pass, 0 fail across 1 file)
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/validate-commands-test.js` — `cd sources/addy && bun test ./scripts/validate-commands-test.js` — Exit code: `0` (Output: 6 pass, 0 fail across 1 file)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Multi-Tier Quality Architecture (`Tier 1` vs `Tier 2` vs `Tier 3`):**
  This unit extracts the core evaluation engine of the Addy repository:
  1. `Tier 1` (`validate-skills.js` + `scripts/lib/skill-lint.js`): Static/structural AST linting of frontmatter, naming, section presence, and cross-references. Runs in milliseconds, zero external dependencies.
  2. `Tier 2` (`run-evals.js` default): Deterministic NLP routing evaluation using custom stemming, TF-IDF, and cosine similarity. Verifies positive prompts rank within top-3, negative prompts do not rank #1, declared owner skills pairwise outrank the target, catalog descriptions do not collide (warning at >=50%, error at >=75%), and the catalog maintains a rank-1 ratchet floor (`--min-rank1`, currently 86% baseline). Zero external dependencies, runs in ~120ms.
  3. `Tier 3` (`run-evals.js --behavioral`): Behavioral LLM evaluation executing headless `claude -p` in ephemeral git sandboxes with fixture materialization (`materializeWorkspace`) and patch injection (`working-tree.patch`). Uses LLM-as-a-judge with prompt-injection-fenced trace parsing (`parseGrading`).
- **Environmental Module Boundary Defect (CommonJS vs. ESM Inheritance):**
  All scripts in `sources/addy/scripts/` are CommonJS (`require(...)`, `module.exports`), but lack the `.cjs` extension, and `sources/addy/` contains no `package.json`. When executed by Node.js within an enclosing repository whose root `package.json` specifies `"type": "module"` (such as `brain-v2`), Node treats all `.js` files as ES modules and crashes with `ReferenceError: require is not defined in ES module scope`. Bun executes all scripts flawlessly because Bun resolves CJS/ESM dynamically regardless of parent module boundaries.
- **Documentation Drift Across Test Suite:**
  `CLAUDE.md:43` explicitly states: `- npm test — Not applicable (this is a documentation project)`. In reality, GitHub Actions CI (`.github/workflows/test-plugin-install.yml`) runs extensive test suites via `node --test` (including `run-evals-test.js` at line 32 and `validate-commands-test.js` at line 58). Neither test suite is an orphan.
- **Lightweight NLP Algorithm Pattern:**
  `run-evals.js` demonstrates an effective pattern for self-contained lexical routing validation without heavy Python/NLP libraries. The 6-rule heuristic stemmer, token weighting (2x name weighting), smoothed IDF, and sparse cosine vector math provide a fast, deterministic CI gate against description collisions and semantic routing drift.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,595 tokens (42,379 bytes across 4 files).
- Tokens of output written: ~11,500 tokens across 4 inventory entries and 1 unit report.
