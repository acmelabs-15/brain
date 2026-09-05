---
unit: inv-addy-1
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-1

## Files assigned
- [x] sources/addy/.agents/plugins/marketplace.json (535 bytes, 23 lines)
- [x] sources/addy/.claude-plugin/marketplace.json (856 bytes, 24 lines)
- [x] sources/addy/.claude-plugin/plugin.json (463 bytes, 14 lines)
- [x] sources/addy/.claude/commands/build.md (3959 bytes, 45 lines)
- [x] sources/addy/.claude/commands/code-simplify.md (1068 bytes, 23 lines)
- [x] sources/addy/.claude/commands/constraints.md (2762 bytes, 33 lines)
- [x] sources/addy/.claude/commands/plan.md (805 bytes, 19 lines)
- [x] sources/addy/.claude/commands/review.md (846 bytes, 17 lines)
- [x] sources/addy/.claude/commands/ship.md (4601 bytes, 73 lines)
- [x] sources/addy/.claude/commands/spec.md (913 bytes, 18 lines)
- [x] sources/addy/.claude/commands/test.md (665 bytes, 20 lines)
- [x] sources/addy/.claude/commands/webperf.md (1974 bytes, 33 lines)

## Outputs produced
- docs/analysis/inventory/addy/agents-plugins-marketplace-json.md (1805 bytes)
- docs/analysis/inventory/addy/claude-plugin-marketplace-json.md (1863 bytes)
- docs/analysis/inventory/addy/claude-plugin-plugin-json.md (1905 bytes)
- docs/analysis/inventory/addy/claude-commands-build-md.md (3329 bytes)
- docs/analysis/inventory/addy/claude-commands-code-simplify-md.md (2159 bytes)
- docs/analysis/inventory/addy/claude-commands-constraints-md.md (3209 bytes)
- docs/analysis/inventory/addy/claude-commands-plan-md.md (2070 bytes)
- docs/analysis/inventory/addy/claude-commands-review-md.md (2398 bytes)
- docs/analysis/inventory/addy/claude-commands-ship-md.md (2856 bytes)
- docs/analysis/inventory/addy/claude-commands-spec-md.md (2162 bytes)
- docs/analysis/inventory/addy/claude-commands-test-md.md (2191 bytes)
- docs/analysis/inventory/addy/claude-commands-webperf-md.md (2225 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-1.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Slash commands in `.claude/commands/*.md` orchestrate underlying skills under `skills/` and agent personas under `agents/` (covered in later units). Specifically:
  - `build.md` invokes skills: `incremental-implementation`, `test-driven-development`, `planning-and-task-breakdown`, `debugging-and-error-recovery`, `doubt-driven-development`.
  - `code-simplify.md` invokes skills: `code-simplification`, `code-review-and-quality`.
  - `constraints.md` invokes skill: `constraint-driven-development`.
  - `plan.md` invokes skill: `planning-and-task-breakdown`.
  - `review.md` invokes skills: `code-review-and-quality`, `security-and-hardening`, `performance-optimization`.
  - `ship.md` invokes skill: `shipping-and-launch`, personas: `code-reviewer`, `security-auditor`, `test-engineer`, and reference: `references/orchestration-patterns.md`.
  - `spec.md` invokes skill: `spec-driven-development`.
  - `test.md` invokes skills: `test-driven-development`, `browser-testing-with-devtools`.
  - `webperf.md` invokes persona: `web-performance-auditor`.
- The marketplace configurations (`.agents/plugins/marketplace.json` and `.claude-plugin/marketplace.json`) both describe lifecycle phases as "spec, plan, build, verify, review, and ship", using "verify" where the command layer provides `/test`.
- `.claude-plugin/plugin.json` configures command paths `./.claude/commands` and `./commands` in parallel; the TOML command variants under `.gemini/commands/` and `commands/` belong to subsequent units (inv-addy-2).

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~4,862 tokens (19,447 bytes across 12 files).
Approximate output tokens: ~7,043 tokens (28,172 bytes across 12 cards).
