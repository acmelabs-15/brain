---
unit: inv-addy-12
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-12

## Files assigned
- [x] sources/addy/evals/fixtures/test-driven-development/README.md
- [x] sources/addy/evals/fixtures/test-driven-development/src/split.js
- [x] sources/addy/evals/fixtures/test-driven-development/test/split.test.js
- [x] sources/addy/evals/fixtures/using-agent-skills/incident.md
- [x] sources/addy/evals/README.md
- [x] sources/addy-external/api-and-interface-design.md

## Outputs produced
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-readme-md.md (2784 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-src-split-js.md (3513 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-test-split-test-js.md (3564 bytes)
- docs/analysis/inventory/addy/evals-fixtures-using-agent-skills-incident-md.md (2426 bytes)
- docs/analysis/inventory/addy/evals-readme-md.md (3881 bytes)
- docs/analysis/inventory/addy/external-api-and-interface-design-md.md (4007 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-12.md (work-unit report)

## Scripts executed
- sources/addy/evals/fixtures/test-driven-development/test/split.test.js: `node --test sources/addy/evals/fixtures/test-driven-development/test/split.test.js` (exit 0)
- sources/addy/evals/fixtures/test-driven-development/src/split.js: `node -e 'const { splitCents } = require("./sources/addy/evals/fixtures/test-driven-development/src/split.js"); console.log(JSON.stringify(splitCents(100, 7)));'` (exit 0)
- sources/addy/scripts/run-evals.js: `bun scripts/run-evals.js` (in sources/addy) (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The `evals/fixtures/test-driven-development/` fixture files (`README.md`, `src/split.js`, `test/split.test.js`) complement `BUG.md` and `package.json` assigned to unit `inv-addy-11`. Together they form the complete reproduction fixture for the `test-driven-development` eval.
- `evals/fixtures/using-agent-skills/incident.md` is the fixture materialized by `evals/cases/using-agent-skills.json:34` (assigned to unit `inv-addy-08`).
- `sources/addy-external/api-and-interface-design.md` corresponds to in-repo skill `skills/api-and-interface-design/SKILL.md` (assigned to unit `inv-addy-02`). A `doc-drift` defect was recorded citing differences between the web page summary and in-repo skill frontmatter description.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~36,214 bytes (~8,500 tokens).
Approximate output written: ~22,500 bytes across 7 deliverable files (~5,800 tokens).
