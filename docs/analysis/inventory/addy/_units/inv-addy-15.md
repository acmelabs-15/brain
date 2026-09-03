---
unit: inv-addy-15
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-15

## Files assigned
- [x] `skills/frontend-ui-engineering/SKILL.md` (10,711 bytes)
- [x] `skills/shipping-and-launch/SKILL.md` (10,137 bytes)
- [x] `skills/spec-driven-development/SKILL.md` (12,163 bytes)
- [x] `skills/constraint-driven-development/references/floor-guard.md` (5,851 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md` (9,834 bytes)
- `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md` (12,055 bytes)
- `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md` (12,519 bytes)
- `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md` (10,419 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-15.md` (4,420 bytes)

## Scripts executed
- Inlined `floor-guard.mjs` — `node floor-guard.mjs --base HEAD` — Exit code: `0` (Output: `floor-guard: clean`)
- Inlined `floor-guard.mjs` — `node floor-guard.mjs --base non-existent-ref` — Exit code: `2` (Output: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`)
- Inlined `floor-guard.mjs` — `bun run floor-guard.mjs --base HEAD` — Exit code: `0` (Output: `floor-guard: clean`)
- Inlined `floor-guard.mjs` — `node floor-guard.mjs --base main` (with injected violations: silenced checker, unfinished work, test skip, assertion removal, threshold lower, new exception) — Exit code: `1` (Output: 6 floor violation(s) flagged)
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s), 0 warning(s) — PASSED)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: 25 skills checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: 7 files checked — 0 error(s) — PASSED)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: 9 commands checked — 0 error(s) — PASSED)
- Test suites in `sources/addy/scripts/` — `cd sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js` — Exit code: `0` (Output: 35 pass, 0 fail across 5 test suites)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Phase Allocations:**
  - `frontend-ui-engineering` belongs to `addy:Build` (`CLAUDE.md:23`, `AGENTS.md:32`, `README.md:362`).
  - `shipping-and-launch` belongs to `addy:Ship` (`CLAUDE.md:26`, `AGENTS.md:45`, `README.md:376`).
  - `spec-driven-development` belongs to `addy:Define` (`CLAUDE.md:21`, `AGENTS.md:26, 40`, `README.md:355`).
  - `floor-guard.md` belongs to `addy:Define` as a reference for `constraint-driven-development` (`SKILL.md:216`, `.claude/commands/constraints.md:31`).
- **Critical Implementation Bugs in `floor-guard.mjs`:**
  1. *Untracked files dropped:* `git diff --no-index` exits 1 on diffs, causing `execFileSync` to throw in `git()`, which returns `null`. Thus untracked files with violations evaluate to `''` and are never scanned.
  2. *Deleted test files undetected:* Deleted files have diff header `+++ /dev/null`, which is sliced by 6 characters to `v/null`, failing the regex match for test files (`/\.(test|spec)\.|_test\.|test_/.test(file)`). Deleted test files exit 0 undetected.
  3. *Deleted constraint bullets undetected:* Line 82 looks for matching lines in `addedConstraints`. If a bullet is removed without a replacement, it is not matched and never flagged.
  4. *Ignore file unimplemented:* `.constraintsignore` is documented on line 98 but has zero parsing or application logic in the script.
- **Architectural / Orchestration Drift:**
  - `/ship` (`commands/ship.toml:1-72`) defines an automated 3-subagent parallel fan-out (`code-reviewer`, `security-auditor`, `test-engineer`) synthesizing a GO / NO-GO decision, whereas `shipping-and-launch/SKILL.md` is strictly an operational manual checklist.
  - `/spec` (`commands/spec.toml:1-55`, `.claude/commands/spec.md`) handles Phase 0 and Phase 1, whereas `spec-driven-development/SKILL.md` defines the full 4-phase sequential gated workflow.
  - Multi-module spec artifact naming: `spec-driven-development/SKILL.md:65` prescribes `SPEC-<module-id>.md`, but `scripts/validate-artifact-paths.js:36-37` restricts spec filenames strictly to `SPEC.md` and `docs/SPEC.md`.
- **Acronym Disambiguation:**
  - `hooks/sdd-cache-*` and `hooks/SDD-CACHE.md` use the acronym "SDD" exclusively for `source-driven-development` (revalidating external docs), having no connection to `spec-driven-development`.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~9,715 tokens (38,862 bytes across 4 files).
- Tokens of output written: ~11,200 tokens across 4 inventory entries and 1 unit report.
