## 2026-09-02T11:38:53Z

You are Worker WP4 for work unit `inv-addy-2` in the lifecycle synthesis project.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp4

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting.

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Hard Rules (verbatim from METHOD.md)
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. No sampling.
R2 — Evidence, and scripts are run. Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths.
R3 — Verbatim in extraction. Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis.
R4 — One vocabulary, from the glossary. Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, addy:Define, etc. Read docs/plan/GLOSSARY.md.
R5 — Defect is not dismissal. Record every defect found (missing-path, script-bug, doc-drift, internal-contradiction, cross-file-contradiction, unfailable-gate, always-failing-gate, exit-code-mismatch, orphan, other) on the inventory entry.
R6 — Depth rule. If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets recorded in `Concepts named` (verbatim with path:line).

## Assigned Files (20 files)
Read each file completely:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/observability-and-instrumentation/payment-retry.js`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/observability-and-instrumentation/operations.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/code-simplification/config-parser.js`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/code-simplification/config-parser.test.js`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/doubt-driven-development/migration-plan.md`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/source-driven-development/framework-task.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/performance-optimization/products.js`
8. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/performance-optimization/benchmark.js`
9. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/ledger.py`
10. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/README.md`
11. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/test_ledger.py`
12. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/browser-testing-with-devtools/index.html`
13. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/browser-testing-with-devtools/server.js`
14. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/browser-testing-with-devtools/README.md`
15. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/git-workflow-and-versioning/app.test.js`
16. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch`
17. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/git-workflow-and-versioning/app.js`
18. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/documentation-and-adrs/decision-context.md`
19. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/LICENSE`
20. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/observability-checklist.md`

## Output Files You Own Exclusively
Write each completed inventory entry directly to disk at:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-observability-and-instrumentation-payment-retry-js.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-observability-and-instrumentation-operations-md.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-code-simplification-config-parser-js.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-code-simplification-config-parser-test-js.md`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-doubt-driven-development-migration-plan-md.md`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-source-driven-development-framework-task-md.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-performance-optimization-products-js.md`
8. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-performance-optimization-benchmark-js.md`
9. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-ledger-py.md`
10. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-readme-md.md`
11. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-test-ledger-py.md`
12. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-index-html.md`
13. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-server-js.md`
14. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-browser-testing-with-devtools-readme-md.md`
15. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning-app-test-js.md`
16. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning-eval-working-tree-patch.md`
17. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning-app-js.md`
18. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-documentation-and-adrs-decision-context-md.md`
19. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/license.md`
20. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/references-observability-checklist-md.md`

## Script Execution
Execute any scripts/tests encountered (e.g., config-parser.test.js, benchmark.js, test_ledger.py, app.test.js) and record actual command, exit code, and output in the `## Scripts` section of the corresponding inventory entry!

## Inventory Entry Schema Template (verbatim)
Follow the template in `docs/plan/templates/inventory-entry.md`:
- frontmatter: package: addy, path: <path relative to sources/addy/>, type: file | doc | config, bytes: <n>, unit: inv-addy-2
- # <path>
- ## Purpose — required, verbatim
- ## Design intent — required
- ## Phase — required
- ## Inputs — required
- ## Outputs — required
- ## Invokes — required
- ## Invoked by — required
- ## Concepts named — required, verbatim
- ## Structure
- ## Scripts — required
- ## Defects — required
- ## Observations
- ## Context cost
