---
unit: inv-addy-16
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-16

## Files assigned
- [x] `skills/constraint-driven-development/SKILL.md` (20,880 bytes)
- [x] `skills/code-review-and-quality/SKILL.md` (20,555 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md` (28,440 bytes)
- `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md` (18,965 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-16.md` (6,915 bytes)

## Scripts executed
- Inlined `floor-guard.mjs` — `node /tmp/floor-guard.mjs --base HEAD` — Exit code: `0` (Output: `floor-guard: clean`)
- Inlined `floor-guard.mjs` — `node /tmp/floor-guard.mjs --base non-existent-ref` — Exit code: `2` (Output: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`)
- Inlined `floor-guard.mjs` — `bun /tmp/floor-guard.mjs --base HEAD` — Exit code: `0` (Output: `floor-guard: clean`)
- Inlined `floor-guard.mjs` — `bun /tmp/floor-guard.mjs --base non-existent-ref` — Exit code: `2` (Output: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`)
- `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s), 0 warning(s) — PASSED`)
- `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (Output: `25 skills checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-artifact-paths.js` — `cd sources/addy && bun scripts/validate-artifact-paths.js` — Exit code: `0` (Output: `7 files checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-commands.js` — `cd sources/addy && bun scripts/validate-commands.js` — Exit code: `0` (Output: `9 commands checked — 0 error(s) — PASSED`)
- `sources/addy/scripts/validate-versions.js` — `cd sources/addy && bun scripts/validate-versions.js` — Exit code: `0` (Output: `All plugin manifests use version 0.6.8.`)
- `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (Output: `Running skill evals across 25 skills, 25 case files\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED`)
- Test suites in `sources/addy/scripts/` — `cd sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/validate-skills-test.js` — Exit code: `0` (Output: `35 pass, 0 fail across 5 files`)
- Additional test suite: `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` — Exit code: `0` (Output: `8 pass, 0 fail across 1 file`)
- Combined test run across all suites: `43 pass, 0 fail across 6 test suites`
- Project synthesis scripts: `bun run scripts/synthesis/coverage.ts` — Checked: 0 empty required inventory fields.
- Project glossary lint: `bun run scripts/synthesis/glossary-lint.ts` — Exit code: `0` (`Glossary lint: clean`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Phase Allocations:**
  - `constraint-driven-development` belongs to `addy:Define` (`sources/addy/README.md:356`, categorized under `# Define`).
  - `code-review-and-quality` belongs to `addy:Review` (`README.md:264, 268, 367`, `CLAUDE.md:25`, `AGENTS.md:44`).
- **Defects and Architectural Drift:**
  - `floor-guard.mjs` implementation bugs:
    1. Untracked files with diffs are dropped because `git diff --no-index` exits 1 on diffs, throwing in `execFileSync` which `git()` catches and returns null (`floor-guard.md:28-42`).
    2. Deleted test files are undetected because git diff header `+++ /dev/null` is sliced by 6 characters to `'v/null'`, failing the regex `/\.(test|spec)\.|_test\.|test_/.test(file)` (`floor-guard.md:48, 72`).
    3. Deleted constraint bullets from `CONSTRAINTS.md` without replacement are unmatched and never flagged (`floor-guard.md:81-85`).
    4. Ignore file `.constraintsignore` claimed on line 98 has zero implementation or filtering logic in `floor-guard.mjs`.
  - Severity taxonomy drift across skill, command, and agent:
    1. `skills/code-review-and-quality/SKILL.md:181-188`: `*(no prefix)*` (Required), `Critical:`, `Nit:`, `Optional:` / `Consider:`, `FYI`.
    2. `skills/code-review-and-quality/SKILL.md:228`: prompt example uses explicit `Required` prefix.
    3. `commands/review.toml:14`, `.claude/commands/review.md:15`, `.gemini/commands/review.toml:14`: `Critical, Important, or Suggestion`.
    4. `agents/code-reviewer.md:49-57`: `Critical, Required, Optional, Nit`.
    5. `README.md:268`: parenthetical `(Nit/Optional/FYI)`, omitting merge-blocking `Critical` and `Required`.
  - Command vs Persona invocation drift:
    - `/review` commands (`commands/review.toml`, `.claude/commands/review.md`, `.gemini/commands/review.toml`) directly invoke the `code-review-and-quality` skill rather than the `code-reviewer` agent persona (`agents/code-reviewer.md`), despite `agents/code-reviewer.md:101` and `references/orchestration-patterns.md:35` stating `/review` routes to the persona.
  - Tool contradiction in `constraint-driven-development/SKILL.md`:
    - Line 115 prescribes `biome check` for linting in `CONSTRAINTS.md`, but snippet on line 175 prescribes `eslint .` in `check:fast`.
  - Missing commands and path mismatches:
    - `constraint-driven-development/SKILL.md:38` cites non-existent `/loop` command.
    - `constraint-driven-development/SKILL.md:53` references `.codex/` instead of `.codex-plugin/`.
    - `constraint-driven-development/SKILL.md:140` prescribes adding instruction to `AGENTS.md` and `CLAUDE.md`, but neither file in `sources/addy` contains it.
    - Sub-commands `/constraints check`, `/constraints guard`, `/constraints ratchet` in command twins are conversational only and not implemented CLI sub-commands.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,360 tokens (41,435 bytes across 2 files).
- Tokens of output written: ~12,400 tokens across 2 inventory entries and 1 unit report.
