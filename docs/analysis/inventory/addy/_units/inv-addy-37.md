---
unit: inv-addy-37
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-37

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/run-evals.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-artifact-paths-test.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-artifact-paths.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-commands-test.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/scripts/validate-commands.js

## Outputs produced
- docs/analysis/inventory/addy/scripts-run-evals-js.md (6222 bytes)
- docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md (4604 bytes)
- docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md (4726 bytes)
- docs/analysis/inventory/addy/scripts-validate-commands-test-js.md (4603 bytes)
- docs/analysis/inventory/addy/scripts-validate-commands-js.md (5282 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-37.md (unit report)

## Scripts executed
- sources/addy/scripts/run-evals.js: `bun scripts/run-evals.js` (exit 0); `bun scripts/run-evals.js --dry-run --behavioral spec-driven-development` (exit 0)
- sources/addy/scripts/validate-artifact-paths-test.js: `bun test ./scripts/validate-artifact-paths-test.js` (exit 0)
- sources/addy/scripts/validate-artifact-paths.js: `bun scripts/validate-artifact-paths.js` (exit 0)
- sources/addy/scripts/validate-commands-test.js: `bun test ./scripts/validate-commands-test.js` (exit 0)
- sources/addy/scripts/validate-commands.js: `bun scripts/validate-commands.js` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/run-evals.js` relies on case files in `evals/cases/` (covered in `inv-addy-7` and `inv-addy-8`), skill frontmatter in `skills/` (covered across multiple units), and fixture files in `evals/fixtures/` (covered in `inv-addy-9` and `inv-addy-10`).
- `scripts/validate-artifact-paths.js` and its companion test enforce canonical consistency of `SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, and `tasks/todo.md` across producer commands (`.claude/commands/spec.md`, `plan.md`) and consumer commands/skills (`.claude/commands/build.md`, `skills/spec-driven-development/SKILL.md`, `skills/planning-and-task-breakdown/SKILL.md`), guarding against regression of issue #93.
- `scripts/validate-commands.js` and its companion test enforce cross-platform command parity and description synchronization across `.claude/commands/*.md` (Claude Code), `.gemini/commands/*.toml` (Gemini CLI), and `commands/*.toml` (Antigravity CLI), including stem alias mapping of `plan` to `planning`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,350 tokens (45,382 bytes across 5 files); approximate tokens of output written: ~6,350 tokens (25,437 bytes across 5 inventory cards plus report).
