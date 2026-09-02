---
unit: inv-addy-5
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-5

## Files assigned
- [x] `agents/web-performance-auditor.md` (12,278 bytes)
- [x] `agents/security-auditor.md` (4,992 bytes)
- [x] `docs/windsurf-setup.md` (1,471 bytes)
- [x] `docs/commandcode-setup.md` (2,437 bytes)
- [x] `docs/opencode-setup.md` (9,547 bytes)
- [x] `docs/adoption-guide.md` (11,197 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/agents-web-performance-auditor-md.md` (12,272 bytes)
- `docs/analysis/inventory/addy/agents-security-auditor-md.md` (8,255 bytes)
- `docs/analysis/inventory/addy/docs-windsurf-setup-md.md` (3,857 bytes)
- `docs/analysis/inventory/addy/docs-commandcode-setup-md.md` (3,906 bytes)
- `docs/analysis/inventory/addy/docs-opencode-setup-md.md` (9,569 bytes)
- `docs/analysis/inventory/addy/docs-adoption-guide-md.md` (9,262 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-5.md` (this report)

## Scripts executed
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: All plugin manifests use version 0.6.8)
- `sources/addy/scripts/validate-artifact-paths-test.js` — `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-commands-test.js` — `cd sources/addy && bun test ./scripts/validate-commands-test.js` — Exit code: `0` (6 pass, 0 fail)
- `sources/addy/scripts/validate-reference-links-test.js` — `cd sources/addy && bun test ./scripts/validate-reference-links-test.js` — Exit code: `0` (7 pass, 0 fail)
- `sources/addy/scripts/validate-versions-test.js` — `cd sources/addy && bun test ./scripts/validate-versions-test.js` — Exit code: `0` (1 pass, 0 fail)
- `sources/addy/scripts/lib/skill-lint-test.js` — `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (8 pass, 0 fail)
- `sources/addy/scripts/run-evals-test.js` — `cd sources/addy && bun test ./scripts/run-evals-test.js` — Exit code: `0` (15 pass, 0 fail)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Agent Fan-out Composition Discrepancy (`/ship` vs `/webperf`):** `docs/comparison.md:54` asserts that `/ship` executes a 4-persona fan-out (`code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`). However, `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `references/orchestration-patterns.md:54`, and `.claude/commands/ship.md:15` all explicitly state that `/ship` fans out to only three personas (`code-reviewer`, `security-auditor`, `test-engineer`), deliberately excluding `web-performance-auditor` because performance audits are specific to web applications. Dedicated performance auditing is invoked via `/webperf` or direct persona dispatch.
- **Severity Classification Discordance across Addy's Agent Subsystem:** `agents/web-performance-auditor.md:116-122`, `agents/security-auditor.md:59-65`, and `agents/test-engineer.md:46-52` adopt a 5-tier severity scale: `Critical`, `High`, `Medium`, `Low`, `Info`. In contrast, `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` adopt a 4-tier scale: `Critical`, `Required`, `Optional`, `Nit`. Further, `.claude/commands/review.md:15` adopts a 3-tier scale: `Critical`, `Important`, `Suggestion`. This 3-way contradiction across agent personas, skills, and slash commands is a primary alignment item for Phase 3/4.
- **Tool Harness Ingestion Paradigms (Static Aggregation vs. CLI Package Management vs. Runtime System-Prompt Steering):**
  - **Windsurf (`docs/windsurf-setup.md`):** Static file concatenation (`cat ... > .windsurfrules`), requiring strict curation of 2-3 essential skills to fit context budgets.
  - **Command Code (`docs/commandcode-setup.md`):** CLI-driven package management (`cmd skills add`) with automated multi-select discovery, branch pinning, `--force` updates, and auto-mapping to interactive TUI slash commands (`/[skill]`).
  - **OpenCode (`docs/opencode-setup.md`):** Dual-mode integration: (a) system-prompt intent routing (`AGENTS.md`) using dynamic `skill({ name })` tool invocations, and (b) optional file-based slash commands (`.opencode/commands/*.md`).
- **Transitive Dependency Hazard on Shared `references/`:** Both `docs/opencode-setup.md:45, 250` and `docs/windsurf-setup.md:48` reveal that per-skill installation mechanisms (`npx skills add <repo> --skill <name>`) isolate only the target `skills/<name>/` directory without copying shared root assets in `references/` (e.g., `references/security-checklist.md`). Unless users install the entire repository pack or manually copy `references/`, skills that load shared references will encounter missing file paths at runtime.
- **Greenfield vs. Brownfield Strategic Framework:** `docs/adoption-guide.md` establishes the conceptual architecture for incremental agent adoption: "Two-Speed Adoption" (protecting legacy surfaces via read-only context, characterization tests, and Chesterton's Fence while running full 5-stage lifecycles on new work) and monotonic quality "Ratcheting".

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,480 tokens (41,922 bytes across 6 files).
- Tokens of output written: ~12,200 tokens across 6 inventory entries and 1 unit report.
