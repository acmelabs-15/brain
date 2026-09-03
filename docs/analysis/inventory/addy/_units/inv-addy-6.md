---
unit: inv-addy-6
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-6

## Files assigned
- [x] `docs/comparison.md` (15,362 bytes)
- [x] `docs/developer-onboarding.md` (7,850 bytes)
- [x] `docs/getting-started.md` (7,104 bytes)
- [x] `docs/copilot-setup.md` (3,496 bytes)
- [x] `docs/skill-anatomy.md` (8,849 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/docs-comparison-md.md` (13,240 bytes)
- `docs/analysis/inventory/addy/docs-developer-onboarding-md.md` (7,918 bytes)
- `docs/analysis/inventory/addy/docs-getting-started-md.md` (9,866 bytes)
- `docs/analysis/inventory/addy/docs-copilot-setup-md.md` (8,090 bytes)
- `docs/analysis/inventory/addy/docs-skill-anatomy-md.md` (10,806 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-6.md` (this report)

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
- `sources/addy/hooks/session-start-test.sh` — `cd sources/addy && bash hooks/session-start-test.sh` — Exit code: `1` (Output: `Error: expected IMPORTANT priority, got undefined at [stdin]:8:11`; schema divergence between hook payload and test)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Specification vs Enforcement Divergence (Recommended vs. Required Sections):**
  `docs/skill-anatomy.md:39, 178-181` describes the section layout as a "recommended pattern, not a rigid template: equivalent headings are acceptable when they serve the same purpose clearly". However, `scripts/lib/skill-lint.js:45-51, 190-210` hardcodes `REQUIRED_SECTIONS` (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) and causes `scripts/validate-skills.js` to fail CI if any standard skill lacks these exact verbatim headings. Only two skills (`using-agent-skills` and `idea-refine`) are exempt via a validator allowlist.
- **Architectural Reference Colocation vs. Shared Root Tension:**
  `docs/skill-anatomy.md:111-120, 156-158` articulates the fundamental design trade-off in the Addy ecosystem: shared checklists live in repository root `references/` to ensure single-source-of-truth maintenance without drift across 25 skills. However, this creates a major downstream packaging issue (tracked in GitHub issue #361 and noted in `docs/opencode-setup.md:45, 250` from unit 5): per-skill package managers (e.g. `npx skills add <repo> --skill <name>`, Windsurf, Command Code) isolate only `skills/<name>/` and drop root `references/`, leaving broken links. In the Addy repository, only one skill (`constraint-driven-development`) colocates its references directory (`skills/constraint-driven-development/references/`), while all other 24 skills depend on root `references/`.
- **Progressive Disclosure 3-Tier Model as Core Context Architecture:**
  `docs/skill-anatomy.md` formally establishes the context efficiency architecture governing the entire catalog:
  - Level 1: System prompt discovery (`name` + `description`, strictly <= 1024 characters, third-person with "Use when" triggers).
  - Level 2: Skill body invocation (`SKILL.md` strictly < 500 lines).
  - Level 3: Auxiliary supporting documentation (> 100 lines) or executable scripts (`scripts/`) loaded strictly on-demand.
  Crucially, `skill-anatomy.md:128` dictates: "Prefer scripts over inline code. Executing a script consumes no context; only its output does. Inline code blocks are paid for on every load."
- **Behavioral Shaping via Anti-Rationalization Tables:**
  `docs/skill-anatomy.md:60-64, 89-93` codifies the `Common Rationalizations` pattern (excuse vs reality), designed specifically to counteract LLM laziness and rationalization of skipped steps (e.g. skipping TDD, skipping specs, deferring error handling). This is a uniquely powerful behavioral engineering pattern to be considered during concordance (Phase 3) and lifecycle specification (Phase 5).
- **Agent Fan-out Composition Discrepancy (`/ship` vs `/webperf`):**
  `docs/comparison.md:54` asserts that `/ship` executes a 4-persona fan-out (`code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`). However, `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `references/orchestration-patterns.md:54`, and `.claude/commands/ship.md:15` all explicitly state that `/ship` fans out to only three personas (`code-reviewer`, `security-auditor`, `test-engineer`), deliberately excluding `web-performance-auditor` because performance audits are specific to web applications. Dedicated performance auditing is invoked via `/webperf` or direct persona dispatch. Furthermore, `docs/copilot-setup.md:30-32, 85` sets up only three agent personas, omitting `web-performance-auditor`.
- **Command Catalog Drift in Documentation:**
  Both `docs/comparison.md:23` and `docs/getting-started.md:107-120` omit `/constraints` (`.claude/commands/constraints.md`) when listing repository slash commands, even though `/constraints` is one of the 9 validated commands verified by `scripts/validate-commands.js`.
- **SessionStart Hook Regression Test Bug:**
  `docs/developer-onboarding.md:69-70, 103` instructs contributors to verify `bash hooks/session-start-test.sh`, which consistently fails with exit code 1 because `hooks/session-start.sh` emits nested `{"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": ...}}` while `hooks/session-start-test.sh` expects unnested `payload.priority` and `payload.message`.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,665 tokens (42,661 bytes across 5 files).
- Tokens of output written: ~12,100 tokens across 5 inventory entries and 1 unit report.
