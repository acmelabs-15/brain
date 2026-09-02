# E2E Test Infra: Phase 1 Inventory Extraction (`inv-addy-1`)

## Test Philosophy
- Requirement-driven, rigorous verification of inventory extraction against `docs/plan/METHOD.md` rules R1–R6.
- Comprehensive 4-tier verification:
  1. Tier 1: Feature Coverage (all 28 files have completed entries, all required frontmatter and markdown sections present without empty fields).
  2. Tier 2: Boundary & Formatting (exact path citations `path:line`, exact byte counts, valid enum types, package prefixes `addy:<name>`, YAML syntax valid).
  3. Tier 3: Cross-File & Execution Verification (consistency with manifests, script execution verification, dependency and invocation links).
  4. Tier 4: Real-World Synthesis & Integrity (Work-unit report completeness, zero hardcoded fakes, authentic reads from line 1 to EOF).

## Feature Inventory & Test Coverage
| # | Feature / Target File | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|-----------------------|:------:|:------:|:------:|:------:|
| 1 | `sources/addy/.gemini/commands/ship.toml` | ✓ | ✓ | ✓ | ✓ |
| 2 | `sources/addy/.gemini/commands/webperf.toml` | ✓ | ✓ | ✓ | ✓ |
| 3 | `sources/addy/.gemini/commands/planning.toml` | ✓ | ✓ | ✓ | ✓ |
| 4 | `sources/addy/.gemini/commands/review.toml` | ✓ | ✓ | ✓ | ✓ |
| 5 | `sources/addy/.gemini/commands/constraints.toml` | ✓ | ✓ | ✓ | ✓ |
| 6 | `sources/addy/.gemini/commands/build.toml` | ✓ | ✓ | ✓ | ✓ |
| 7 | `sources/addy/.gemini/commands/spec.toml` | ✓ | ✓ | ✓ | ✓ |
| 8 | `sources/addy/.gemini/commands/code-simplify.toml` | ✓ | ✓ | ✓ | ✓ |
| 9 | `sources/addy/.gemini/commands/test.toml` | ✓ | ✓ | ✓ | ✓ |
| 10 | `sources/addy/evals/cases/code-review-and-quality.json` | ✓ | ✓ | ✓ | ✓ |
| 11 | `sources/addy/evals/cases/source-driven-development.json` | ✓ | ✓ | ✓ | ✓ |
| 12 | `sources/addy/evals/cases/interview-me.json` | ✓ | ✓ | ✓ | ✓ |
| 13 | `sources/addy/evals/cases/ci-cd-and-automation.json` | ✓ | ✓ | ✓ | ✓ |
| 14 | `sources/addy/evals/cases/test-driven-development.json` | ✓ | ✓ | ✓ | ✓ |
| 15 | `sources/addy/evals/cases/security-and-hardening.json` | ✓ | ✓ | ✓ | ✓ |
| 16 | `sources/addy/evals/cases/doubt-driven-development.json` | ✓ | ✓ | ✓ | ✓ |
| 17 | `sources/addy/evals/cases/spec-driven-development.json` | ✓ | ✓ | ✓ | ✓ |
| 18 | `sources/addy/evals/cases/idea-refine.json` | ✓ | ✓ | ✓ | ✓ |
| 19 | `sources/addy/evals/cases/incremental-implementation.json` | ✓ | ✓ | ✓ | ✓ |
| 20 | `sources/addy/evals/cases/observability-and-instrumentation.json` | ✓ | ✓ | ✓ | ✓ |
| 21 | `sources/addy/evals/cases/constraint-driven-development.json` | ✓ | ✓ | ✓ | ✓ |
| 22 | `sources/addy/evals/cases/context-engineering.json` | ✓ | ✓ | ✓ | ✓ |
| 23 | `sources/addy/evals/cases/browser-testing-with-devtools.json` | ✓ | ✓ | ✓ | ✓ |
| 24 | `sources/addy/evals/cases/frontend-ui-engineering.json` | ✓ | ✓ | ✓ | ✓ |
| 25 | `sources/addy/evals/cases/documentation-and-adrs.json` | ✓ | ✓ | ✓ | ✓ |
| 26 | `sources/addy/evals/cases/shipping-and-launch.json` | ✓ | ✓ | ✓ | ✓ |
| 27 | `sources/addy/evals/cases/api-and-interface-design.json` | ✓ | ✓ | ✓ | ✓ |
| 28 | `sources/addy/evals/cases/deprecation-and-migration.json` | ✓ | ✓ | ✓ | ✓ |

## Test Verification Commands
- Bun test runner: `bun test`
- Addy commands validation: `bun run sources/addy/scripts/validate-commands.js`
- Addy evals validation: `bun run sources/addy/scripts/run-evals.js`
- Synthesis glossary validation: `bun run scripts/synthesis/glossary-lint.ts`
- Synthesis manifest validation: `bun run scripts/synthesis/manifest.ts`
