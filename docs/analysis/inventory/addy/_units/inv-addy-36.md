---
unit: inv-addy-36
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-36

## Files assigned
- [x] sources/addy/references/testing-patterns.md (7460 bytes, 236 lines)
- [x] sources/addy/scripts/lib/skill-lint-test.js (4645 bytes, 142 lines)
- [x] sources/addy/scripts/lib/skill-lint.js (11808 bytes, 276 lines)
- [x] sources/addy/scripts/run-evals-test.js (10378 bytes, 290 lines)

## Outputs produced
- docs/analysis/inventory/addy/references-testing-patterns-md.md (4866 bytes)
- docs/analysis/inventory/addy/scripts-lib-skill-lint-test-js.md (4207 bytes)
- docs/analysis/inventory/addy/scripts-lib-skill-lint-js.md (4889 bytes)
- docs/analysis/inventory/addy/scripts-run-evals-test-js.md (4336 bytes)

## Scripts executed
- sources/addy/scripts/lib/skill-lint-test.js: `bun test ./sources/addy/scripts/lib/skill-lint-test.js`, exit code 0
- sources/addy/scripts/lib/skill-lint-test.js: `node sources/addy/scripts/lib/skill-lint-test.js`, exit code 1 (enclosing package ESM error)
- sources/addy/scripts/lib/skill-lint.js: `bun sources/addy/scripts/lib/skill-lint.js`, exit code 0
- sources/addy/scripts/lib/skill-lint.js: `node sources/addy/scripts/lib/skill-lint.js`, exit code 1 (enclosing package ESM error)
- sources/addy/scripts/run-evals-test.js: `bun test ./sources/addy/scripts/run-evals-test.js`, exit code 0
- sources/addy/scripts/run-evals-test.js: `node --test scripts/run-evals-test.js`, exit code 1 (enclosing package ESM error)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `references/testing-patterns.md` provides language-specific testing patterns for `test-driven-development` (`skills/test-driven-development/SKILL.md` in inv-addy-11), referenced in `README.md` (inv-addy-1) and `docs/getting-started.md` (inv-addy-4).
- `scripts/lib/skill-lint.js` is the core linting engine used by `scripts/validate-skills.js` (inv-addy-37) and tested by `scripts/lib/skill-lint-test.js`.
- `scripts/lib/skill-lint-test.js` is an orphan unit test file for `skill-lint.js` that is omitted from the CI workflow `.github/workflows/test-plugin-install.yml` (inv-addy-3).
- `scripts/run-evals-test.js` provides integration tests for `scripts/run-evals.js` (inv-addy-37) and is invoked by `.github/workflows/test-plugin-install.yml:32`.
- All three JavaScript files in this unit rely on CommonJS syntax without a local `package.json` specifying `"type": "commonjs"`. When run from environments with an ancestor ESM `package.json`, direct `node` invocation fails with `ReferenceError: require is not defined in ES module scope`, whereas `bun` / `bun test` runs them cleanly.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,600 tokens (34,291 bytes across 4 files)
Approximate tokens of output written: ~4,600 tokens (18,298 bytes across 4 cards + unit report)
