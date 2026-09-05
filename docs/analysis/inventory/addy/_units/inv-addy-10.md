---
unit: inv-addy-10
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-10

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/git-workflow-and-versioning/app.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/git-workflow-and-versioning/app.test.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation-pressure/draft-export.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation-pressure/scenario.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation/reports.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation/reports.test.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation/tasks/plan.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/observability-and-instrumentation/operations.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/observability-and-instrumentation/payment-retry.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/performance-optimization/benchmark.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/performance-optimization/products.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/planning-and-task-breakdown/notifications-spec.md

## Outputs produced
- docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning-app-js.md (2748 bytes)
- docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning-app-test-js.md (2725 bytes)
- docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-pressure-draft-export-js.md (3012 bytes)
- docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-pressure-scenario-md.md (2367 bytes)
- docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-reports-js.md (2815 bytes)
- docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-reports-test-js.md (2603 bytes)
- docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-tasks-plan-md.md (2174 bytes)
- docs/analysis/inventory/addy/evals-fixtures-observability-and-instrumentation-operations-md.md (2390 bytes)
- docs/analysis/inventory/addy/evals-fixtures-observability-and-instrumentation-payment-retry-js.md (3337 bytes)
- docs/analysis/inventory/addy/evals-fixtures-performance-optimization-benchmark-js.md (3046 bytes)
- docs/analysis/inventory/addy/evals-fixtures-performance-optimization-products-js.md (3158 bytes)
- docs/analysis/inventory/addy/evals-fixtures-planning-and-task-breakdown-notifications-spec-md.md (2885 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-10.md (unit report)

## Scripts executed
- sources/addy/evals/fixtures/git-workflow-and-versioning/app.js: `bun -e 'const { total } = require("./sources/addy/evals/fixtures/git-workflow-and-versioning/app.js"); console.log(total([{price: 10}, {price: 20}]));'` (exit 0)
- sources/addy/evals/fixtures/git-workflow-and-versioning/app.test.js: `bun test --cwd sources/addy/evals/fixtures/git-workflow-and-versioning` (exit 0)
- sources/addy/evals/fixtures/incremental-implementation/reports.js: `bun -e 'const { visibleReports } = require("./sources/addy/evals/fixtures/incremental-implementation/reports.js"); console.log(visibleReports([{id: 1, archived: false}, {id: 2, archived: true}]));'` (exit 0)
- sources/addy/evals/fixtures/incremental-implementation/reports.test.js: `bun test --cwd sources/addy/evals/fixtures/incremental-implementation` (exit 0)
- sources/addy/evals/fixtures/observability-and-instrumentation/payment-retry.js: `bun -e 'const { retryPayment } = require("./sources/addy/evals/fixtures/observability-and-instrumentation/payment-retry.js"); retryPayment({}, { charge: async () => "charged" }).then(console.log);'` (exit 0)
- sources/addy/evals/fixtures/performance-optimization/benchmark.js: `bun sources/addy/evals/fixtures/performance-optimization/benchmark.js` (exit 0)
- sources/addy/evals/fixtures/performance-optimization/products.js: `bun -e 'const { renderProducts } = require("./sources/addy/evals/fixtures/performance-optimization/products.js"); console.log(renderProducts([{id: 1, name: "Widget", sales: 100}]));'` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 12 files in this unit are evaluation fixtures utilized by Addy's Tier 3 behavioral eval harness (`scripts/run-evals.js` and `evals/cases/*.json`).
- These fixtures pair directly with the evaluation cases in `evals/cases/` (covered in `inv-addy-7` and `inv-addy-8`), specifically: `git-workflow-and-versioning.json`, `incremental-implementation.json`, `observability-and-instrumentation.json`, `performance-optimization.json`, and `planning-and-task-breakdown.json`.
- The fixture files exhibit deliberate anti-patterns or baseline states (e.g. O(N^2 log N) loops in `products.js`, un-instrumented error swallowing in `payment-retry.js`, and monolithic multi-responsibility drafting in `draft-export.js`) designed to test agent discipline under behavioral evaluation conditions.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~1,100 tokens (4,581 bytes across 12 files); approximate tokens of output written: ~7,500 tokens (33,260 bytes across 12 inventory cards).
