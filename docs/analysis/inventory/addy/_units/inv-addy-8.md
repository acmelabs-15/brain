---
unit: inv-addy-8
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-8

## Files assigned
- [x] `sources/addy/evals/cases/source-driven-development.json` (1287 bytes, 45 lines)
- [x] `sources/addy/evals/cases/spec-driven-development.json` (2657 bytes, 73 lines)
- [x] `sources/addy/evals/cases/test-driven-development.json` (3981 bytes, 74 lines)
- [x] `sources/addy/evals/cases/using-agent-skills.json` (1218 bytes, 44 lines)
- [x] `sources/addy/evals/fixtures/api-and-interface-design/service-brief.md` (693 bytes, 20 lines)
- [x] `sources/addy/evals/fixtures/browser-testing-with-devtools/index.html` (869 bytes, 25 lines)
- [x] `sources/addy/evals/fixtures/browser-testing-with-devtools/README.md` (186 bytes, 6 lines)
- [x] `sources/addy/evals/fixtures/browser-testing-with-devtools/server.js` (511 bytes, 16 lines)
- [x] `sources/addy/evals/fixtures/ci-cd-and-automation/package.json` (132 bytes, 9 lines)
- [x] `sources/addy/evals/fixtures/ci-cd-and-automation/src/slug.js` (93 bytes, 4 lines)
- [x] `sources/addy/evals/fixtures/ci-cd-and-automation/test/slug.test.js` (234 bytes, 10 lines)
- [x] `sources/addy/evals/fixtures/code-review-and-quality/user-search.diff` (513 bytes, 17 lines)

## Outputs produced
- `docs/analysis/inventory/addy/evals-cases-source-driven-development-json.md` (2906 bytes)
- `docs/analysis/inventory/addy/evals-cases-spec-driven-development-json.md` (4090 bytes)
- `docs/analysis/inventory/addy/evals-cases-test-driven-development-json.md` (3988 bytes)
- `docs/analysis/inventory/addy/evals-cases-using-agent-skills-json.md` (2741 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-api-and-interface-design-service-brief-md.md` (2371 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-index-html.md` (1985 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-readme-md.md` (1851 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-server-js.md` (3655 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-package-json.md` (1615 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-src-slug-js.md` (1335 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-test-slug-test-js.md` (1640 bytes)
- `docs/analysis/inventory/addy/evals-fixtures-code-review-and-quality-user-search-diff.md` (1972 bytes)

## Scripts executed
- `sources/addy/evals/fixtures/browser-testing-with-devtools/server.js`, `bun sources/addy/evals/fixtures/browser-testing-with-devtools/server.js`, exit 0 (listens on 127.0.0.1:4173 indefinitely until SIGTERM; direct `node server.js` fails with exit code 1 due to ancestor package.json `"type": "module"`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The eval test cases (`evals/cases/*.json`) exercise skills assigned in earlier units (`source-driven-development`, `spec-driven-development`, `test-driven-development`, `using-agent-skills`).
- `evals/cases/spec-driven-development.json:58` references `portal-brief.md`, which is provided as a fixture in `evals/fixtures/spec-driven-development-decomposition/portal-brief.md`.
- `evals/fixtures/browser-testing-with-devtools/server.js` exhibits a CommonJS/ESM module ambiguity: it uses `require()` without an adjacent `package.json` setting `type: commonjs`, causing `node server.js` to fail if run in a project root configured with `type: module`.

## Blocked or uncertain
none

## Time and size
- Source read: 12374 bytes (~3093 tokens)
- Output written: 32149 bytes (~8037 tokens) across 12 cards plus report
