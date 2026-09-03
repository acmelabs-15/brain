---
unit: inv-addy-7
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-7

## Files assigned
- [x] `docs/cursor-setup.md` (8,370 bytes)
- [x] `docs/antigravity-setup.md` (5,041 bytes)
- [x] `docs/codex-setup.md` (1,805 bytes)
- [x] `docs/agents.md` (6,996 bytes)
- [x] `docs/gemini-cli-setup.md` (5,640 bytes)
- [x] `plugin.json` (129 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/docs-cursor-setup-md.md` (10,287 bytes)
- `docs/analysis/inventory/addy/docs-antigravity-setup-md.md` (11,306 bytes)
- `docs/analysis/inventory/addy/docs-codex-setup-md.md` (5,321 bytes)
- `docs/analysis/inventory/addy/docs-agents-md.md` (9,314 bytes)
- `docs/analysis/inventory/addy/docs-gemini-cli-setup-md.md` (10,803 bytes)
- `docs/analysis/inventory/addy/plugin-json.md` (3,206 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-7.md` (this report)

## Scripts executed
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: `9 commands checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: `7 files checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: `All plugin manifests use version 0.6.8.`)
- `sources/addy/scripts/validate-artifact-paths-test.js` — `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-commands-test.js` — `cd sources/addy && bun test ./scripts/validate-commands-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-reference-links-test.js` — `cd sources/addy && bun test ./scripts/validate-reference-links-test.js` — Exit code: `0` (7 pass, 0 fail)
- `sources/addy/scripts/validate-versions-test.js` — `cd sources/addy && bun test ./scripts/validate-versions-test.js` — Exit code: `0` (1 pass, 0 fail)
- `sources/addy/scripts/lib/skill-lint-test.js` — `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (8 pass, 0 fail)
- `sources/addy/scripts/run-evals-test.js` — `cd sources/addy && bun test ./scripts/run-evals-test.js` — Exit code: `0` (15 pass, 0 fail)
- `scripts/synthesis/glossary-lint.ts` — `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)
- `scripts/synthesis/coverage.ts` — `bun scripts/synthesis/coverage.ts` — Exit code: `1` (Pre-update check: 1289 unchecked manifest rows across remaining units)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Three-Layer Architectural Hierarchy (Skill vs. Persona vs. Command):** `docs/agents.md` formalizes the conceptual distinction across the repository: *Skill* (the procedural workflow with exit criteria, e.g. `code-review-and-quality`), *Persona* (the role viewpoint producing structured reports, e.g. `code-reviewer`), and *Command* (the user-facing entry point, e.g. `/review`, `/ship`). This distinction resolves cross-unit synthesis questions for Phase 2/3.
- **Definitive Clarification of `/ship` Fan-out Composition:** Reconciles the contradiction between `docs/comparison.md:54` (which claimed a 4-persona fan-out) and individual persona files: `docs/agents.md:44, 60-78` clarifies that `/ship` intentionally fans out to only three personas (`code-reviewer`, `security-auditor`, `test-engineer`). `web-performance-auditor` is excluded from `/ship` because web performance is application-specific and would generate noise for CLI, library, or backend codebases; it is dedicated to `/webperf`.
- **Prohibition of Meta-Orchestrators and Persona Chaining:** `docs/agents.md:79-98` establishes a hard prohibition against meta-orchestrators ("deciding which persona to call") and peer-to-peer delegation ("Personas do not call other personas"). This aligns with Claude Code's platform boundary ("subagents cannot spawn other subagents") and prevents multi-hop paraphrasing degradation and recursive routing loops.
- **Slash Command Count Drift across Harness Guides:** Both `docs/antigravity-setup.md:48` and `docs/gemini-cli-setup.md:110` state that the repository ships 8 custom slash commands (7 lifecycle commands + `/webperf`), omitting `/constraints` (`constraints.toml`), which exists in `.gemini/commands/constraints.toml` and `commands/constraints.toml` and is validated by `validate-commands.js`.
- **Command Name Collision Resolution (`/plan` vs `/planning`):** Both `docs/antigravity-setup.md:63` and `docs/gemini-cli-setup.md:125` document the deliberate renaming of `/plan` to `/planning` in Antigravity and Gemini CLI environments to avoid collisions with the harnesses' built-in planning commands.
- **Multi-Platform Manifest Architecture & Version Synchronization (D-009 Parity):** The repository maintains distinct manifests for each target platform (`plugin.json` for Antigravity, `.claude-plugin/plugin.json` for Claude Code, `.codex-plugin/plugin.json` for Codex), using `scripts/validate-versions.js` to enforce strict version synchronization (0.6.8). This pattern directly informs Brain's Part 2 dual-target build requirements.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~6,995 tokens (27,981 bytes across 6 files).
- Tokens of output written: ~12,560 tokens across 6 inventory entries and 1 unit report.
