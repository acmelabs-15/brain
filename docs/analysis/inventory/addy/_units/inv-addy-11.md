---
unit: inv-addy-11
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-11

## Files assigned
- [x] `sources/addy/scripts/lib/skill-lint.js` (11,808 bytes)
- [x] `sources/addy/scripts/lib/skill-lint-test.js` (4,645 bytes)
- [x] `sources/addy/scripts/validate-versions.js` (949 bytes)
- [x] `sources/addy/scripts/validate-commands.js` (7,108 bytes)
- [x] `sources/addy/scripts/validate-artifact-paths-test.js` (4,572 bytes)
- [x] `sources/addy/.claude-plugin/marketplace.json` (856 bytes)
- [x] `sources/addy/.claude-plugin/plugin.json` (463 bytes)
- [x] `sources/addy/commands/ship.toml` (4,712 bytes)
- [x] `sources/addy/commands/webperf.toml` (2,031 bytes)
- [x] `sources/addy/commands/planning.toml` (635 bytes)
- [x] `sources/addy/commands/review.toml` (844 bytes)
- [x] `sources/addy/commands/constraints.toml` (2,775 bytes)
- [x] `sources/addy/commands/build.toml` (3,840 bytes)
- [x] `sources/addy/commands/spec.toml` (911 bytes)
- [x] `sources/addy/commands/code-simplify.toml` (1,066 bytes)
- [x] `sources/addy/commands/test.toml` (650 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/scripts-lib-skill-lint-js.md` (8,160 bytes)
- `docs/analysis/inventory/addy/scripts-lib-skill-lint-test-js.md` (5,141 bytes)
- `docs/analysis/inventory/addy/scripts-validate-versions-js.md` (4,360 bytes)
- `docs/analysis/inventory/addy/scripts-validate-commands-js.md` (6,550 bytes)
- `docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md` (5,995 bytes)
- `docs/analysis/inventory/addy/claude-plugin-marketplace-json.md` (2,226 bytes)
- `docs/analysis/inventory/addy/claude-plugin-plugin-json.md` (2,156 bytes)
- `docs/analysis/inventory/addy/commands-ship-toml.md` (4,552 bytes)
- `docs/analysis/inventory/addy/commands-webperf-toml.md` (3,653 bytes)
- `docs/analysis/inventory/addy/commands-planning-toml.md` (3,469 bytes)
- `docs/analysis/inventory/addy/commands-review-toml.md` (3,300 bytes)
- `docs/analysis/inventory/addy/commands-constraints-toml.md` (5,528 bytes)
- `docs/analysis/inventory/addy/commands-build-toml.md` (5,488 bytes)
- `docs/analysis/inventory/addy/commands-spec-toml.md` (3,282 bytes)
- `docs/analysis/inventory/addy/commands-code-simplify-toml.md` (3,393 bytes)
- `docs/analysis/inventory/addy/commands-test-toml.md` (3,050 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-11.md` (unit report)

## Scripts executed
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED; verified parity and description sync)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: All plugin manifests use version 0.6.8.)
- `sources/addy/scripts/validate-skills.js` (exercising `skill-lint.js`) — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/lib/skill-lint-test.js` — `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (Output: 8 pass, 0 fail across 1 file)
- `sources/addy/scripts/validate-artifact-paths-test.js` — `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (Output: 6 pass, 0 fail across 1 file)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Tripartite Slash-Command Architecture & Naming Asymmetry:**
  `sources/addy` targets three agent environments simultaneously: Claude Code (`.claude/commands/*.md`), Gemini CLI (`.gemini/commands/*.toml`), and Antigravity CLI (`commands/*.toml`). `scripts/validate-commands.js` enforces strict presence parity and description synchronization across all 9 command twins. A deliberate naming exception exists: Claude Code uses `/plan`, whereas Gemini CLI and Antigravity CLI use `/planning` (mapped in `scripts/validate-commands.js:38-40`) to prevent collisions with Antigravity's internal plan generator (`docs/antigravity-setup.md:63`).
- **Plugin Manifest Configuration & Redundant Mounts:**
  `.claude-plugin/plugin.json:11-12` mounts both `"./.claude/commands"` and `"./commands"` under `"commands"`, exposing Antigravity TOML commands to Claude Code alongside its native markdown commands.
- **Pipeline Artifact Path Enforcement & Guardrail Blind Spots:**
  `scripts/validate-artifact-paths.js` and its companion test suite `scripts/validate-artifact-paths-test.js` enforce canonical lifecycle artifact locations (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`), preventing the PR #93 regression where specifications drifted to feature subdirectories (`docs/features/[feature-name]/spec.md`). However, `validate-artifact-paths.js:44-52` monitors only `.claude/commands/*.md` and omits `commands/*.toml` (`build.toml`, `planning.toml`, `spec.toml`), leaving Antigravity commands unprotected against path drift.
- **Skill Linter Rule Rigidity vs. Documentation Drift:**
  `scripts/lib/skill-lint.js` provides an in-memory validation engine for skill structure, frontmatter, descriptions, triggers, and cross-references. It strictly enforces 5 exact heading strings (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`), directly contradicting `docs/skill-anatomy.md:38-40` and `CONTRIBUTING.md:53` which claim section headings are flexible and accept equivalents like `How It Works` or `Workflow`. This contradiction necessitated a hardcoded exemption table (`SECTION_EXEMPT_SKILLS`) for `idea-refine` and `using-agent-skills`.
- **CI Test Suite Omission (Orphan Test):**
  `scripts/lib/skill-lint-test.js` is completely omitted from `.github/workflows/test-plugin-install.yml`. Because `sources/addy` lacks a `package.json` with an `npm test` script, this test suite is never executed in CI.
- **Version Manifest Synchronization & Working Directory Dependency:**
  `scripts/validate-versions.js` validates version consistency across 5 manifest files spanning Claude Code, Codex, and Antigravity against the latest git release tag (`0.6.8`). However, omitting `cwd` from `execFileSync("git", ...)` causes fatal crashes if executed from outside the repository root.
- **Quality Standards & Constraints Tooling:**
  `commands/constraints.toml` introduces automated quality constraints, tiered checks (`check:fast`, `check:task`, `check:full`), and `CONSTRAINTS.md`. However, it leaks a Claude Code reference (`CLAUDE.md`) in line 24 into an Antigravity command and is omitted from the command listing in `docs/antigravity-setup.md:48-60`.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~11,966 tokens (47,865 bytes across 16 assigned files).
- Tokens of output written: ~18,200 tokens across 16 inventory entries and 1 work-unit report.
