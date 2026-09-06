---
unit: inv-addy-8
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-8

## Files assigned
- [x] sources/addy/evals/cases/source-driven-development.json
- [x] sources/addy/evals/cases/spec-driven-development.json
- [x] sources/addy/evals/cases/test-driven-development.json
- [x] sources/addy/evals/cases/using-agent-skills.json
- [x] sources/addy/evals/fixtures/api-and-interface-design/service-brief.md
- [x] sources/addy/evals/fixtures/browser-testing-with-devtools/index.html
- [x] sources/addy/evals/fixtures/browser-testing-with-devtools/README.md
- [x] sources/addy/evals/fixtures/browser-testing-with-devtools/server.js
- [x] sources/addy/evals/fixtures/ci-cd-and-automation/package.json
- [x] sources/addy/evals/fixtures/ci-cd-and-automation/src/slug.js
- [x] sources/addy/evals/fixtures/ci-cd-and-automation/test/slug.test.js
- [x] sources/addy/evals/fixtures/code-review-and-quality/user-search.diff

## Outputs produced
- docs/analysis/inventory/addy/evals-cases-source-driven-development-json.md (3389 bytes)
- docs/analysis/inventory/addy/evals-cases-spec-driven-development-json.md (3963 bytes)
- docs/analysis/inventory/addy/evals-cases-test-driven-development-json.md (4300 bytes)
- docs/analysis/inventory/addy/evals-cases-using-agent-skills-json.md (3228 bytes)
- docs/analysis/inventory/addy/evals-fixtures-api-and-interface-design-service-brief-md.md (2776 bytes)
- docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-index-html.md (3433 bytes)
- docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-readme-md.md (2962 bytes)
- docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-server-js.md (3947 bytes)
- docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-package-json.md (2762 bytes)
- docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-src-slug-js.md (2506 bytes)
- docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-test-slug-test-js.md (2762 bytes)
- docs/analysis/inventory/addy/evals-fixtures-code-review-and-quality-user-search-diff.md (2822 bytes)

## Scripts executed
- evals/fixtures/browser-testing-with-devtools/server.js: `bun -e 'const cp = require("child_process"); const child = cp.spawn("bun", ["server.js"], { cwd: "sources/addy/evals/fixtures/browser-testing-with-devtools" }); child.stdout.on("data", (d) => { console.log(d.toString().trim()); child.kill(); process.exit(0); });'`, exit code: 0
- evals/fixtures/ci-cd-and-automation/package.json: `node --check src/slug.js && node --test test/slug.test.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`), exit code: 0
- evals/fixtures/ci-cd-and-automation/src/slug.js: `node --check src/slug.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`), exit code: 0
- evals/fixtures/ci-cd-and-automation/test/slug.test.js: `node --test test/slug.test.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`), exit code: 0
- evals/fixtures/code-review-and-quality/user-search.diff: `git apply --check sources/addy/evals/fixtures/code-review-and-quality/user-search.diff`, exit code: 128

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed all Phase 1V verification findings for unit `inv-addy-8`:
  - In `evals/cases/test-driven-development.json`, added negative trigger owner skills `documentation-and-adrs` (line 21) and `using-agent-skills` (line 25) under `## Invokes`.
  - In `evals/cases/test-driven-development.json`, added named concepts `fairness invariant` (lines 33, 39) and `test-first` (line 59).
  - Ensured all other eval case cards similarly list their negative trigger owner skills in `## Invokes`.
- Observed doc-drift defect across CommonJS fixtures: `server.js` uses CommonJS `require()` without a `package.json` specifying `"type": "commonjs"`. When executed via `node server.js` from an environment with root ESM configuration (`brain-v2/package.json`), Node throws `ReferenceError: require is not defined in ES module scope`. Running with Bun or explicit CommonJS scope executes without error.
- Observed patch corrupt header defect: `user-search.diff` hunk header specifies `@@ -1,3 +1,15 @@` (declaring 15 post-image lines) but contains only 11 lines, resulting in git apply error.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,100 tokens (12,374 bytes across 12 files).
Approximate tokens of output written: ~9,800 tokens (38,850 bytes across 12 cards).
