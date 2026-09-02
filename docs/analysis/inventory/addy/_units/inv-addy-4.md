---
unit: inv-addy-4
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-4

## Files assigned
- [x] `references/security-checklist.md` (11,881 bytes)
- [x] `references/accessibility-checklist.md` (5,206 bytes)
- [x] `references/definition-of-done.md` (3,798 bytes)
- [x] `.opencode/skills` (864 bytes / symlink)
- [x] `.agents/plugins/marketplace.json` (535 bytes)
- [x] `.claude/rules/skills-contributing.md` (988 bytes)
- [x] `.claude/commands/ship.md` (4,601 bytes)
- [x] `.claude/commands/constraints.md` (2,762 bytes)
- [x] `.claude/commands/code-simplify.md` (1,068 bytes)
- [x] `.claude/commands/build.md` (3,959 bytes)
- [x] `.claude/commands/plan.md` (805 bytes)
- [x] `.claude/commands/spec.md` (913 bytes)
- [x] `.claude/commands/review.md` (846 bytes)
- [x] `.claude/commands/test.md` (665 bytes)
- [x] `.claude/commands/webperf.md` (1,974 bytes)
- [x] `agents/code-reviewer.md` (3,995 bytes)
- [x] `agents/test-engineer.md` (3,275 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/references-security-checklist-md.md` (4,924 bytes)
- `docs/analysis/inventory/addy/references-accessibility-checklist-md.md` (4,006 bytes)
- `docs/analysis/inventory/addy/references-definition-of-done-md.md` (4,101 bytes)
- `docs/analysis/inventory/addy/opencode-skills.md` (1,456 bytes)
- `docs/analysis/inventory/addy/agents-plugins-marketplace-json.md` (1,705 bytes)
- `docs/analysis/inventory/addy/claude-rules-skills-contributing-md.md` (1,776 bytes)
- `docs/analysis/inventory/addy/claude-commands-ship-md.md` (3,854 bytes)
- `docs/analysis/inventory/addy/claude-commands-constraints-md.md` (3,119 bytes)
- `docs/analysis/inventory/addy/claude-commands-code-simplify-md.md` (2,337 bytes)
- `docs/analysis/inventory/addy/claude-commands-build-md.md` (4,509 bytes)
- `docs/analysis/inventory/addy/claude-commands-plan-md.md` (2,583 bytes)
- `docs/analysis/inventory/addy/claude-commands-spec-md.md` (2,152 bytes)
- `docs/analysis/inventory/addy/claude-commands-review-md.md` (3,001 bytes)
- `docs/analysis/inventory/addy/claude-commands-test-md.md` (2,315 bytes)
- `docs/analysis/inventory/addy/claude-commands-webperf-md.md` (2,639 bytes)
- `docs/analysis/inventory/addy/agents-code-reviewer-md.md` (4,649 bytes)
- `docs/analysis/inventory/addy/agents-test-engineer-md.md` (4,151 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-4.md` (this report)

## Scripts executed
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-commands-test.js` — `cd sources/addy && bun test ./scripts/validate-commands-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-reference-links-test.js` — `cd sources/addy && bun test ./scripts/validate-reference-links-test.js` — Exit code: `0` (7 pass, 0 fail)
- `sources/addy/scripts/validate-artifact-paths-test.js` — `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/lib/skill-lint-test.js` — `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (8 pass, 0 fail)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Command Twin Equivalence & Naming Discrepancy:** The slash commands in `.claude/commands/*.md` have twins in `.gemini/commands/*.toml` and `commands/*.toml`. Eight of the nine commands share identical names (`build`, `code-simplify`, `constraints`, `review`, `ship`, `spec`, `test`, `webperf`). The planning command is named `.claude/commands/plan.md` in Claude Code but `.gemini/commands/planning.toml` and `commands/planning.toml` in TOML directories. This alias mapping is codified and tested in `sources/addy/scripts/validate-commands.js:33-35` and `sources/addy/scripts/validate-commands-test.js:61`.
- **Review Severity Classification Drift:** `.claude/commands/review.md:15` classifies findings as `Critical, Important, or Suggestion`. In contrast, `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` classify findings as `Critical`, `Required`, `Optional`, `Nit`. This cross-file contradiction must be resolved during Phase 3/4 alignment.
- **Symlink Inode vs Manifest Classification:** `.opencode/skills` is cataloged in the manifest as a file of 864 bytes, but in the filesystem it is a symbolic link (`skills -> ../skills/`) pointing to directory `../skills/`.
- **Persona Resolution & Subagent Priority:** `.claude/commands/ship.md:26` and `commands/ship.toml:25` explicitly document that user-defined personas in `.claude/agents/` or `~/.claude/agents/` override plugin-shipped personas (`code-reviewer`, `security-auditor`, `test-engineer`) by design.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~12,030 tokens (48,135 bytes across 17 files).
- Tokens of output written: ~11,200 tokens across 17 inventory entries and 1 unit report.
