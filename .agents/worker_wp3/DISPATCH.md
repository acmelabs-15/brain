## 2026-09-02T11:38:52Z

You are Worker WP3 for work unit `inv-addy-2` in the lifecycle synthesis project.
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_wp3

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting.

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Hard Rules (verbatim from METHOD.md)
R1 — Full reads. Coverage is proven, not asserted. Every in-scope file is read from first line to last. No sampling.
R2 — Evidence, and scripts are run. Every claim about a source names path:line. Every script in scope is executed with its own documented example before anything is recorded about what it does; documented exit codes are compared to the code's actual exit paths.
R3 — Verbatim in extraction. Inventory and concept-card fields marked verbatim carry the source's exact words, quoted. Paraphrase in those fields is a defect in the analysis.
R4 — One vocabulary, from the glossary. Until a term is decided in Phase 4, refer to it with its source and package prefix: addy:spec, addy:Define, etc. Read docs/plan/GLOSSARY.md.
R5 — Defect is not dismissal. Record every defect found (missing-path, script-bug, doc-drift, internal-contradiction, cross-file-contradiction, unfailable-gate, always-failing-gate, exit-code-mismatch, orphan, other) on the inventory entry.
R6 — Depth rule. If it has a name in any package — a technique, framework, artifact, gate, role, checklist, template, phase — it gets recorded in `Concepts named` (verbatim with path:line).

## Assigned Files (16 files)
Read each file completely:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation-pressure/scenario.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/incremental-implementation-pressure/draft-export.js`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/spec-driven-development-decomposition/portal-brief.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/ci-cd-and-automation/test/slug.test.js`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/ci-cd-and-automation/package.json`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/ci-cd-and-automation/src/slug.js`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/context-engineering/context-audit.md`
8. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/frontend-ui-engineering/design-system.md`
9. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/frontend-ui-engineering/Button.tsx`
10. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/shipping-and-launch/launch-status.md`
11. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/shipping-and-launch/authority-pressure.md`
12. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/spec-driven-development/billing-brief.md`
13. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/code-review-and-quality/user-search.diff`
14. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/security-and-hardening/webhook.js`
15. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/security-and-hardening/webhook.test.js`
16. `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/deprecation-and-migration/api-inventory.md`

## Output Files You Own Exclusively
Write each completed inventory entry directly to disk at:
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-pressure-scenario-md.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-incremental-implementation-pressure-draft-export-js.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-decomposition-portal-brief-md.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-test-slug-test-js.md`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-package-json.md`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-ci-cd-and-automation-src-slug-js.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-context-engineering-context-audit-md.md`
8. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-frontend-ui-engineering-design-system-md.md`
9. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-frontend-ui-engineering-button-tsx.md`
10. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-launch-status-md.md`
11. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-authority-pressure-md.md`
12. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-spec-driven-development-billing-brief-md.md`
13. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-code-review-and-quality-user-search-diff.md`
14. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-js.md`
15. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-security-and-hardening-webhook-test-js.md`
16. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/evals-fixtures-deprecation-and-migration-api-inventory-md.md`

## Script Execution
Execute any scripts/tests encountered (e.g., node/bun on slug.test.js, webhook.test.js) and record actual command, exit code, and output in the `## Scripts` section of the corresponding inventory entry!

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

When all 16 files are written, write handoff.md in your working directory and notify the orchestrator with send_message.
