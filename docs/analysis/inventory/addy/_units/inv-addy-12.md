---
unit: inv-addy-12
phase: 1
package: addy
session: 011
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
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-readme-md.md (3443 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-src-split-js.md (3338 bytes)
- docs/analysis/inventory/addy/evals-fixtures-test-driven-development-test-split-test-js.md (3609 bytes)
- docs/analysis/inventory/addy/evals-fixtures-using-agent-skills-incident-md.md (2054 bytes)
- docs/analysis/inventory/addy/evals-readme-md.md (7713 bytes)
- docs/analysis/inventory/addy/external-api-and-interface-design-md.md (8992 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-12.md

## Scripts executed
- `evals/fixtures/test-driven-development/package.json`: `npm --prefix sources/addy/evals/fixtures/test-driven-development test` (exit code: 0)
- `evals/fixtures/test-driven-development/test/split.test.js`: `node --test sources/addy/evals/fixtures/test-driven-development/test/split.test.js` (exit code: 0)
- `evals/fixtures/test-driven-development/src/split.js`: `node sources/addy/evals/fixtures/test-driven-development/src/split.js` (exit code: 0)
- `scripts/run-evals.js`: `bun scripts/run-evals.js` in `sources/addy` (exit code: 0)
- `scripts/run-evals.js --min-rank1 80`: `bun scripts/run-evals.js --min-rank1 80` in `sources/addy` (exit code: 0)
- `scripts/run-evals.js --behavioral test-driven-development --dry-run`: `bun scripts/run-evals.js --behavioral test-driven-development --dry-run` in `sources/addy` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V verification findings fully remediated in `evals-readme-md.md`: added missing concepts `time pressure` (line 38), `sunk cost` (line 38), `authority pressure` (line 38), `Discipline skills` (line 38), `skill-creator` (line 9), `collision check` (line 86).
- Phase 1V verification finding regarding cross-file contradiction defect (`skills/using-agent-skills/SKILL.md:180` placing TDD under `Verify` vs `README.md:363` and `CLAUDE.md:23` placing it under `Build`): `skills/using-agent-skills/SKILL.md` is owned by another unit, but note that `evals/fixtures/test-driven-development/` provides the evaluation fixture for `test-driven-development`, and `evals/cases/test-driven-development.json` tests the TDD workflow.
- `external-api-and-interface-design-md.md` documents `## Invokes` thoroughly including `/build`, `/test`, `incremental-implementation`, `test-driven-development`, `context-engineering`, and `skills/api-and-interface-design/SKILL.md`, following the Phase 1V guidance for external doc cards.
- Running `node scripts/run-evals.js` directly with standard Node fails with CommonJS/ESM module conflict when invoked in environments where a parent `package.json` specifies `"type": "module"`, but executes cleanly under Bun runtime.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,200 tokens (36,214 source bytes across 6 files).
Approximate tokens of output written: ~7,200 tokens (29,149 bytes across 6 inventory cards + unit report).
