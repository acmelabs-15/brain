---
unit: inv-addy-22
phase: 1
package: addy
session: 007
subagent_returned: complete
---

# Unit inv-addy-22

## Files assigned
- [x] `../addy-external/using-agent-skills.md` (21,955 bytes)
- [x] `../addy-external/test-driven-development.md` (26,483 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-using-agent-skills-md.md` (12,617 bytes)
- `docs/analysis/inventory/addy/external-test-driven-development-md.md` (16,109 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-22.md` (6,338 bytes)

## Scripts executed
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: `9 commands checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: `7 files checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/*-test.js` suite — `cd sources/addy && bun test ./scripts/*-test.js` — Exit code: `0` (Output: `35 pass, 0 fail across 5 test files`)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: `136 checks passed — 0 error(s), 0 warning(s) trigger rank-1 rate: 86% PASSED`)
- `scripts/synthesis/glossary-lint.ts` — `bun scripts/synthesis/glossary-lint.ts` — Exit code: `0` (Output: `Glossary lint: clean`)
- `scripts/synthesis/coverage.ts` — `bun scripts/synthesis/coverage.ts` — Exit code: `1` (Output: `Unchecked manifest rows: 1207, Empty required inventory fields: 0`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Self-Contradictory Command Binding on External TDD Page**:
  `sources/addy-external/test-driven-development.md` contains a severe internal contradiction: the header badge (line 5) specifies `/test` (`<span class="detail-cmd-badge mono">/test</span>`), whereas the sidebar card (line 12) specifies `Command: /build` (`<code class="mono">/build</code>`). In the upstream repository, `/test` maps to `skills/test-driven-development/SKILL.md` (`commands/test.toml:4`), while `/build` maps to `skills/incremental-implementation/SKILL.md` (`commands/build.toml:4`). This defect stems from the Astro site sidebar inheriting `/build` from a generic Build phase template without overriding it for the TDD skill detail page.
- **The "Meta Phase" Lifecycle Taxonomy Drift**:
  `sources/addy-external/using-agent-skills.md` categorizes `using-agent-skills` under a distinct 7th lifecycle phase labeled `addy:Meta phase` / `Meta` (lines 5, 12). In contrast, the authoritative repository lifecycle taxonomy in `CLAUDE.md:21-26`, `README.md:353-377`, and `skills/using-agent-skills/SKILL.md:168` defines only six phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship`). `CLAUDE.md` and `README.md` omit `using-agent-skills` entirely from their phase tables, treating it as an ambient, cross-phase meta-skill.
- **Generic 6-Step Anatomy Boilerplate**:
  Both external web pages render a standardized 6-row anatomy table (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`) asserting that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" (lines 9-10). In reality, `skills/using-agent-skills/SKILL.md` completely omits sections 02-06 and is explicitly exempted from section checks in `scripts/lib/skill-lint.js:58`. Similarly, `skills/test-driven-development/SKILL.md` has no `Process` section, titles its rationalizations section `Common Rationalizations`, and features numerous intermediate technical sections (`Discover the Stack First`, `The TDD Cycle`, `The Prove-It Pattern`, `The Test Pyramid`, `Writing Good Tests`, `Browser Testing with DevTools`). The static site generates uniform structural boilerplate that obscures actual repository variations.
- **Phase Collision on TDD (Build vs Verify)**:
  `sources/addy-external/test-driven-development.md` classifies TDD under `Build phase`, aligning with `CLAUDE.md:23` and `README.md:363`. However, the repository's authoritative routing meta-skill, `skills/using-agent-skills/SKILL.md:180`, classifies `test-driven-development` under `Verify`. On the public web site, TDD is grouped in the Build phase alongside `incremental-implementation`, `context-engineering`, and `source-driven-development`.
- **Vercel Labs CLI vs addy-skills / Claude Marketplace**:
  Both external pages promote skill installation exclusively via `npx skills add addyosmani/agent-skills --skill <name>` using the Vercel Labs open `skills CLI` (`github.com/vercel-labs/skills`), whereas the repository documents `npx addy-skills add <name>` or native Claude Code plugin installation. As documented in `docs/skill-anatomy.md:111-119`, single-skill installation tools fail to copy shared root references (`references/definition-of-done.md`, `references/testing-patterns.md`), causing broken markdown links when skills are executed in isolation.
- **Collapsed Platform Setup Links in Footer**:
  The footer on both external documentation pages links all four platform options (`Claude Code`, `Codex`, `Cursor`, `Antigravity`) to the same destination URL `/docs/getting-started/`, collapsing the distinct platform guides that exist in the repository (`docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,108 tokens (48,438 bytes across 2 external HTML docs).
- Approximate tokens of output written: ~7,600 tokens across 2 inventory entries and 1 unit report.
