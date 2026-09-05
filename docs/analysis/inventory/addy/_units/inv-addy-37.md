---
unit: inv-addy-37
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-37

## Files assigned
- [x] sources/addy/scripts/run-evals.js (24129 bytes, 590 lines)
- [x] sources/addy/scripts/validate-artifact-paths-test.js (4572 bytes, 117 lines)
- [x] sources/addy/scripts/validate-artifact-paths.js (4102 bytes, 112 lines)
- [x] sources/addy/scripts/validate-commands-test.js (5471 bytes, 151 lines)
- [x] sources/addy/scripts/validate-commands.js (7108 bytes, 188 lines)

## Outputs produced
- docs/analysis/inventory/addy/scripts-run-evals-js.md (7302 bytes)
- docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md (4880 bytes)
- docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md (5535 bytes)
- docs/analysis/inventory/addy/scripts-validate-commands-test-js.md (4718 bytes)
- docs/analysis/inventory/addy/scripts-validate-commands-js.md (6054 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-37.md

## Scripts executed
- scripts/run-evals.js: `bun scripts/run-evals.js` (exit code: 0)
- scripts/run-evals.js: `bun scripts/run-evals.js --min-rank1 80` (exit code: 0)
- scripts/run-evals.js: `bun scripts/run-evals.js --behavioral test-driven-development --dry-run` (exit code: 0)
- scripts/validate-artifact-paths.js: `bun scripts/validate-artifact-paths.js` (exit code: 0)
- scripts/validate-artifact-paths-test.js: `bun test ./scripts/validate-artifact-paths-test.js` (exit code: 0)
- scripts/validate-commands.js: `bun scripts/validate-commands.js` (exit code: 0)
- scripts/validate-commands-test.js: `bun test ./scripts/validate-commands-test.js` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/run-evals.js` orchestrates Tier 2 deterministic evaluations and Tier 3 behavioral evaluations across all skills and evals (`evals/cases/` and `evals/fixtures/`, inventoried in units inv-addy-4 through inv-addy-29 and test unit inv-addy-36).
- `scripts/validate-artifact-paths.js` enforces canonical paths across `/spec`, `/plan`, and `/build` commands (`.claude/commands/spec.md`, `plan.md`, `build.md` in inv-addy-1) and related skills (`spec-driven-development`, `planning-and-task-breakdown` in inv-addy-23 and inv-addy-25) and guides (`docs/getting-started.md`, `docs/adoption-guide.md` in inv-addy-3).
- `scripts/validate-commands.js` verifies slash-command parity across `.claude/commands/`, `.gemini/commands/`, and `commands/` (inventoried across inv-addy-1 and inv-addy-2), mapping the `plan` stem in Claude to `planning` in TOML platforms.
- All scripts in this unit are CommonJS scripts (`require(...)`) without a dedicated package.json in `sources/addy/`. When executed in monorepo workspaces where an enclosing ancestor package.json specifies `"type": "module"`, direct execution via `node` fails with `ReferenceError: require is not defined in ES module scope`, whereas execution via `bun` succeeds.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~11,350 tokens (45,382 bytes across 5 files).
Approximate output tokens: ~7,120 tokens (28,489 bytes across 5 cards).
