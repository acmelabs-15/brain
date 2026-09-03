---
unit: inv-addy-13
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-13

## Files assigned
- [x] `skills/debugging-and-error-recovery/SKILL.md` (10,837 bytes)
- [x] `skills/using-agent-skills/SKILL.md` (10,426 bytes)
- [x] `skills/test-driven-development/SKILL.md` (16,483 bytes)
- [x] `skills/planning-and-task-breakdown/SKILL.md` (10,564 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md` (12,634 bytes)
- `docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md` (14,120 bytes)
- `docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md` (11,857 bytes)
- `docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md` (8,508 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-13.md` (3,400 bytes)

## Scripts executed
- none present in assigned skill directories (`skills/<name>/scripts/`).
- Verification suite executed in repository:
  - `sources/addy/scripts/validate-skills.js` — `cd sources/addy && bun scripts/validate-skills.js` — Exit code: `0` (25 skills checked — 0 error(s), 0 warning(s) — PASSED; using-agent-skills confirmed section checks exempt)
  - `sources/addy/scripts/validate-reference-links.js` — `cd sources/addy && bun scripts/validate-reference-links.js` — Exit code: `0` (25 skills checked — 0 error(s) — PASSED)
  - `sources/addy/scripts/run-evals.js` — `cd sources/addy && bun scripts/run-evals.js` — Exit code: `0` (136 checks passed — 0 error(s), 0 warning(s), trigger rank-1 rate: 86% (72/84) — PASSED)
  - `sources/addy/scripts/run-evals.js --behavioral debugging-and-error-recovery --dry-run` — Exit code: `0` (2 execution evals dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral using-agent-skills --dry-run` — Exit code: `0` (1 execution eval dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral test-driven-development --dry-run` — Exit code: `0` (3 execution evals dry-run verified)
  - `sources/addy/scripts/run-evals.js --behavioral planning-and-task-breakdown --dry-run` — Exit code: `0` (1 execution eval dry-run verified)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **The Operational Core of the Lifecycle:**
  This unit extracts four central workflow engines:
  1. `using-agent-skills`: The meta-skill that bootstraps every session (injected via `hooks/session-start.sh`) and governs task-to-skill routing, assumption surfacing, push-back rules, and simplicity enforcement.
  2. `planning-and-task-breakdown`: The canonical planning authority invoked by `/planning` and `/build`, enforcing plan mode, bottom-up dependency analysis, vertical feature slicing, and standardized `tasks/plan.md` and `tasks/todo.md` conventions.
  3. `test-driven-development`: The behavioral driver invoked by `/test` and `/build`, establishing the universal RED-GREEN-REFACTOR cycle, the Prove-It Pattern for bug reproduction, test pyramid sizing (80/15/5), DAMP over DRY principles, mock minimization, and Chrome DevTools runtime verification.
  4. `debugging-and-error-recovery`: The systematic fault triage skill, codifying the Stop-the-Line rule, 6-step root-cause triage (reproduce, localize, reduce, fix, guard, verify), safe fallbacks, and prompt-injection-safe error data boundaries.
- **Documentation Drift across Triage Steps:**
  `README.md:262` and `docs/adoption-guide.md:83` summarize `debugging-and-error-recovery` as a "five-step triage (reproduce, localize, reduce, fix, guard)", omitting Step 6 ("Verify End-to-End") defined in `skills/debugging-and-error-recovery/SKILL.md:155-171`.
- **Phase Classification Drift for TDD:**
  `README.md:363`, `CLAUDE.md:23`, and `AGENTS.md:42` place `test-driven-development` under the `Build` phase, whereas `using-agent-skills/SKILL.md:180` tabulates it under `Verify`. TDD bridges both phases.
- **Portability Boundary Defect (Issue #361):**
  Relative links to `../../references/definition-of-done.md` and `../../references/testing-patterns.md` function properly within the repository, but break when skills are installed individually into user environments using `npx skills add <repo> --skill <name>`.
- **Untrusted Diagnostic Data Boundary:**
  Both `debugging-and-error-recovery` (lines 272-280) and `test-driven-development` (lines 337-340) explicitly formulate an agent security policy treating errors, logs, stack traces, and browser DevTools DOM/console outputs as untrusted data to analyze rather than executable instructions.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~12,075 tokens (48,310 bytes across 4 files).
- Tokens of output written: ~11,800 tokens across 4 inventory entries and 1 unit report.
