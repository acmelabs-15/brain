---
unit: inv-addy-21
phase: 1
package: addy
session: 007
subagent_returned: complete
---

# Unit inv-addy-21

## Files assigned
- [x] `sources/addy-external/idea-refine.md` (24,943 bytes)
- [x] `sources/addy-external/debugging-and-error-recovery.md` (23,705 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-idea-refine-md.md` (12,874 bytes)
- `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md` (15,236 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-21.md` (4,318 bytes)

## Scripts executed
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — exit code: 0 (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — exit code: 0 (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — exit code: 0 (Output: `All plugin manifests use version 0.6.8.`)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — exit code: 0 (Output: `9 commands checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — exit code: 0 (Output: `7 files checked — 0 error(s) — PASSED`)
- Vercel skills CLI — `npx --yes skills add addyosmani/agent-skills --skill idea-refine --list` — exit code: 0 (Output: successfully resolved `addyosmani/agent-skills` from GitHub and listed 25 skills with descriptions)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **External Documentation Ingestion:** Work unit `inv-addy-21` is the first external-doc extraction unit in the repository, processing Astro-generated static HTML snapshots of Addy Osmani's agent skills website (`skills.addy.ie`).
- **Universal 6-Part Anatomy vs Legacy Structure Drift:** The public website asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification". However, `skills/idea-refine/SKILL.md` retains legacy section headings (`## How It Works`, `## Usage`, `## Output`, `### Philosophy`, `### Anti-patterns to Avoid`, `### Tone`), omitting `When to Use` and `Rationalizations` and requiring an explicit exemption in `scripts/lib/skill-lint.js:59` and `scripts/validate-skills.js`.
- **Lifecycle Slash Command Association Drift:** Both external pages present sidebar cards pairing their respective lifecycle phases with slash commands (`/spec` for Define phase on `idea-refine`, `/test` for Verify phase on `debugging-and-error-recovery`). In the repository implementation, slash commands only map to specific flagship skills (`spec-driven-development` for `/spec`, `test-driven-development` and `browser-testing-with-devtools` for `/test`), and do not execute `idea-refine` or `debugging-and-error-recovery`.
- **Triage Step Count Discrepancy:** Both `sources/addy-external/debugging-and-error-recovery.md` and repository-level `README.md:262` characterize debugging as a 5-step triage ("reproduce, localize, reduce, fix, guard"), omitting `Step 6: Verify End-to-End` which is explicitly mandated in `skills/debugging-and-error-recovery/SKILL.md:154-170`.
- **Modular CLI Distribution:** Both external documentation pages prominently document modular skill installation via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill <name>`), providing a distribution channel outside of full repo cloning or Claude Code plugin packaging.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,162 tokens (48,648 bytes across 2 files).
- Approximate tokens of output written: ~7,200 tokens across 2 inventory entries and 1 unit report.
