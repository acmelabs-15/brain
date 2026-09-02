# Project: Phase 1 Inventory Extraction (`inv-addy-1`)

## Architecture
- Repository: `brain-v2` (`/Users/peterkloss/Dev/ACMElabs/brain-v2`)
- Work Unit: `inv-addy-1` (28 files, 49,827 bytes in `sources/addy/`)
- Target Destination for Output:
  - Inventory Entries: Returned in work unit handoff and formatted per `docs/plan/templates/inventory-entry.md`
  - Work-Unit Report: Formatted per `docs/plan/templates/work-unit-report.md`
  - Tooling: Bun/TypeScript runtime (`bun test`, `sources/addy/scripts/*.js`, `scripts/synthesis/*.ts`)

## Feature Inventory
| # | Feature / File | Type | Bytes | Assigned Milestone | Source |
|---|----------------|------|-------|--------------------|--------|
| 1 | `sources/addy/.gemini/commands/ship.toml` | command | 4,780 | M1 (Commands) | Manifest Row 3 |
| 2 | `sources/addy/.gemini/commands/webperf.toml` | command | 1,884 | M1 (Commands) | Manifest Row 4 |
| 3 | `sources/addy/.gemini/commands/planning.toml` | command | 635 | M1 (Commands) | Manifest Row 5 |
| 4 | `sources/addy/.gemini/commands/review.toml` | command | 844 | M1 (Commands) | Manifest Row 6 |
| 5 | `sources/addy/.gemini/commands/constraints.toml` | command | 2,775 | M1 (Commands) | Manifest Row 7 |
| 6 | `sources/addy/.gemini/commands/build.toml` | command | 3,840 | M1 (Commands) | Manifest Row 8 |
| 7 | `sources/addy/.gemini/commands/spec.toml` | command | 911 | M1 (Commands) | Manifest Row 9 |
| 8 | `sources/addy/.gemini/commands/code-simplify.toml` | command | 1,066 | M1 (Commands) | Manifest Row 10 |
| 9 | `sources/addy/.gemini/commands/test.toml` | command | 650 | M1 (Commands) | Manifest Row 11 |
| 10 | `sources/addy/evals/cases/code-review-and-quality.json` | config (eval) | 1,374 | M2 (Evals Batch A) | Manifest Row 12 |
| 11 | `sources/addy/evals/cases/source-driven-development.json` | config (eval) | 1,287 | M2 (Evals Batch A) | Manifest Row 13 |
| 12 | `sources/addy/evals/cases/interview-me.json` | config (eval) | 1,197 | M2 (Evals Batch A) | Manifest Row 14 |
| 13 | `sources/addy/evals/cases/ci-cd-and-automation.json` | config (eval) | 1,349 | M2 (Evals Batch A) | Manifest Row 15 |
| 14 | `sources/addy/evals/cases/test-driven-development.json` | config (eval) | 3,981 | M2 (Evals Batch A) | Manifest Row 16 |
| 15 | `sources/addy/evals/cases/security-and-hardening.json` | config (eval) | 1,311 | M2 (Evals Batch A) | Manifest Row 17 |
| 16 | `sources/addy/evals/cases/doubt-driven-development.json` | config (eval) | 1,274 | M2 (Evals Batch A) | Manifest Row 18 |
| 17 | `sources/addy/evals/cases/spec-driven-development.json` | config (eval) | 2,657 | M2 (Evals Batch A) | Manifest Row 19 |
| 18 | `sources/addy/evals/cases/idea-refine.json` | config (eval) | 1,269 | M2 (Evals Batch A) | Manifest Row 20 |
| 19 | `sources/addy/evals/cases/incremental-implementation.json` | config (eval) | 1,942 | M2 (Evals Batch A) | Manifest Row 21 |
| 20 | `sources/addy/evals/cases/observability-and-instrumentation.json` | config (eval) | 1,278 | M3 (Evals Batch B) | Manifest Row 22 |
| 21 | `sources/addy/evals/cases/constraint-driven-development.json` | config (eval) | 3,353 | M3 (Evals Batch B) | Manifest Row 23 |
| 22 | `sources/addy/evals/cases/context-engineering.json` | config (eval) | 1,390 | M3 (Evals Batch B) | Manifest Row 24 |
| 23 | `sources/addy/evals/cases/browser-testing-with-devtools.json` | config (eval) | 1,455 | M3 (Evals Batch B) | Manifest Row 25 |
| 24 | `sources/addy/evals/cases/frontend-ui-engineering.json` | config (eval) | 1,430 | M3 (Evals Batch B) | Manifest Row 26 |
| 25 | `sources/addy/evals/cases/documentation-and-adrs.json` | config (eval) | 1,328 | M3 (Evals Batch B) | Manifest Row 27 |
| 26 | `sources/addy/evals/cases/shipping-and-launch.json` | config (eval) | 1,816 | M3 (Evals Batch B) | Manifest Row 28 |
| 27 | `sources/addy/evals/cases/api-and-interface-design.json` | config (eval) | 1,494 | M3 (Evals Batch B) | Manifest Row 29 |
| 28 | `sources/addy/evals/cases/deprecation-and-migration.json` | config (eval) | 1,257 | M3 (Evals Batch B) | Manifest Row 30 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Spec Mining | Rules R1-R6, 28 file survey, script survey | none | DONE |
| M1 | Commands Inventory (9 files) | Extract 9 `.gemini/commands/*.toml` entries | M0 | IN_PROGRESS |
| M2 | Evals Inventory Batch A (10 files) | Extract 10 `evals/cases/*.json` entries | M0 | IN_PROGRESS |
| M3 | Evals Inventory Batch B (9 files) | Extract 9 `evals/cases/*.json` entries | M0 | IN_PROGRESS |
| M4 | Work-Unit Synthesis & Reporting | Synthesize full work-unit report & manifest | M1, M2, M3 | PLANNED |
| M5 | E2E Verification & Adversarial Audit | 100% review pass, challenger checks, forensic audit | M4 | PLANNED |

## Code Layout
- Agent metadata: `.agents/<agent_name>/`
- Inventory output files: `.agents/orchestrator_1/inventory/addy/`
- Work-unit report: `.agents/orchestrator_1/reports/inv-addy-1.md`
- Source files (read-only): `sources/addy/`
