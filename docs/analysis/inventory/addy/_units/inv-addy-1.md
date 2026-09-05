---
unit: inv-addy-1
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-1

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.agents/plugins/marketplace.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude-plugin/marketplace.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude-plugin/plugin.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/build.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/code-simplify.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/constraints.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/plan.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/review.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/ship.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/spec.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/test.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/.claude/commands/webperf.md`

## Outputs produced
- `docs/analysis/inventory/addy/agents-plugins-marketplace-json.md` (1834 bytes)
- `docs/analysis/inventory/addy/claude-plugin-marketplace-json.md` (2138 bytes)
- `docs/analysis/inventory/addy/claude-plugin-plugin-json.md` (1890 bytes)
- `docs/analysis/inventory/addy/claude-commands-build-md.md` (4271 bytes)
- `docs/analysis/inventory/addy/claude-commands-code-simplify-md.md` (2252 bytes)
- `docs/analysis/inventory/addy/claude-commands-constraints-md.md` (4015 bytes)
- `docs/analysis/inventory/addy/claude-commands-plan-md.md` (2193 bytes)
- `docs/analysis/inventory/addy/claude-commands-review-md.md` (2623 bytes)
- `docs/analysis/inventory/addy/claude-commands-ship-md.md` (3184 bytes)
- `docs/analysis/inventory/addy/claude-commands-spec-md.md` (2120 bytes)
- `docs/analysis/inventory/addy/claude-commands-test-md.md` (1977 bytes)
- `docs/analysis/inventory/addy/claude-commands-webperf-md.md` (2782 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-addy-1 covers 3 plugin/marketplace configs and all 9 Claude Code slash commands (`.claude/commands/*.md`).
- These slash commands activate skills in `skills/` and specialist personas in `agents/`. Specifically:
  - `/build` invokes `incremental-implementation`, `test-driven-development`, `planning-and-task-breakdown`, `debugging-and-error-recovery`, and `doubt-driven-development`.
  - `/code-simplify` invokes `code-simplification` and references `code-review-and-quality`.
  - `/constraints` invokes `constraint-driven-development`.
  - `/plan` invokes `planning-and-task-breakdown`.
  - `/review` invokes `code-review-and-quality`, `security-and-hardening`, and `performance-optimization`.
  - `/ship` invokes `shipping-and-launch`, orchestrates subagents `code-reviewer`, `security-auditor`, and `test-engineer`, and references `references/orchestration-patterns.md`.
  - `/spec` invokes `spec-driven-development`.
  - `/test` invokes `test-driven-development` and `browser-testing-with-devtools`.
  - `/webperf` invokes `web-performance-auditor`.
- None of this unit's files appear in `docs/analysis/manifest/addy-duplicates.md` (no ledger duplicates).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4,800 tokens (19,447 bytes across 12 files); approximate tokens of output written: ~7,400 tokens (31,279 bytes across 12 inventory cards).
