---
unit: inv-addy-20
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-20

## Files assigned
- [x] `skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes)
- [x] `skills/documentation-and-adrs/SKILL.md` (9,782 bytes)
- [x] `AGENTS.md` (5,386 bytes)
- [x] `.codex-plugin/plugin.json` (1,119 bytes)
- [x] `CLAUDE.md` (4,094 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-git-workflow-and-versioning-skill-md.md` (10,765 bytes)
- `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md` (9,341 bytes)
- `docs/analysis/inventory/addy/agents-md.md` (9,496 bytes)
- `docs/analysis/inventory/addy/codex-plugin-plugin-json.md` (3,578 bytes)
- `docs/analysis/inventory/addy/claude-md.md` (10,541 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-20.md` (4,550 bytes)

## Scripts executed
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: `All plugin manifests use version 0.6.8.`)
- `sources/addy/scripts/validate-versions-test.js` — `cd sources/addy && bun test ./scripts/validate-versions-test.js` — Exit code: `0` (Output: `1 pass, 0 fail across 1 test file`)
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/run-evals.js` (Node) — `cd sources/addy && node scripts/run-evals.js` — Exit code: `1` (Output: `ReferenceError: require is not defined in ES module scope`)
- `sources/addy/scripts/run-evals.js` (Bun) — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: `136 checks passed — 0 error(s), 0 warning(s) trigger rank-1 rate: 86% PASSED`)
- Addy script unit test suite — `cd sources/addy && bun test ./scripts/validate-versions-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-artifact-paths-test.js ./scripts/run-evals-test.js` — Exit code: `0` (Output: `35 pass, 0 fail across 5 test files`)
- Ephemeral Git Sandbox Verification — `bun run /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_explorer_inv_addy_20_3/verify-inv-addy-20.ts` — Exit code: `0` (Output: Verified git init, atomic commits, oneline log, diff secret grep filter, release tagging, worktree add/remove, bisect cycle, TypeScript syntax build, OpenAPI YAML parse)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Phase Allocations:**
  - `skills/git-workflow-and-versioning/SKILL.md` and `skills/documentation-and-adrs/SKILL.md` belong to `addy:Ship` (`CLAUDE.md:26`, `README.md:374, 377`).
  - `AGENTS.md` and `CLAUDE.md` are repository-level agent configurations operating across all lifecycle stages (`cross-phase`).
  - `.codex-plugin/plugin.json` is a plugin packaging configuration (`none`).
- **The 23 vs 24 vs 25 Skill Discrepancy:**
  - The repository contains exactly 25 skill subdirectories in `sources/addy/skills/` (validated by `scripts/validate-skills.js`).
  - `.codex-plugin/plugin.json:16` claims the plugin bundles `"24 production engineering workflows"`.
  - `CLAUDE.md:21-26` and `README.md:353-377` categorize only 23 skills, omitting `constraint-driven-development` and `using-agent-skills`.
- **Multi-Agent Orchestration Rules in AGENTS.md:**
  - `AGENTS.md:78` formalizes the core rule: the user (or slash command) is the orchestrator; personas do not invoke other personas.
  - The only endorsed multi-agent pattern is parallel fan-out with a merge step (used by `/ship`). Router personas are explicitly forbidden.
- **Cross-File Contradiction regarding AGENTS.md Scope:**
  - `docs/antigravity-setup.md:107` instructs users to "copy or link AGENTS.md into the root of your workspace", contradicting `AGENTS.md:5`, `CONTRIBUTING.md:71`, and `docs/developer-onboarding.md:26`, which all prohibit copying the root `AGENTS.md` into external workspaces.
- **Node CommonJS / ESM Conflict:**
  - `CLAUDE.md:45` documents running `node scripts/run-evals.js`. In an ESM-configured workspace, Node fails with exit code 1 (`ReferenceError: require is not defined`). Running with Bun natively handles the CommonJS script and passes with exit code 0.
- **ADR Storage Path Absence:**
  - `skills/documentation-and-adrs/SKILL.md:48` recommends storing ADRs in `docs/decisions/`, but `sources/addy` does not maintain a `docs/decisions/` directory internally.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~8,611 tokens (34,444 bytes across 5 files).
- Approximate tokens of output written: ~11,500 tokens across 5 inventory entries and 1 unit report.
