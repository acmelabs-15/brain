## 2026-09-03T15:42:26Z

You are Worker 2 for work unit inv-addy-16 in Iteration 2 (Remediation).
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_16_2.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- Reviewer 2 handoff: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_16_2/handoff.md
- Challenger 2 handoff: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/challenger_inv_addy_16_2/handoff.md
- Challenger 2 harness: /Users/peterkloss/Dev/ACMElabs/brain-v2/scripts/synthesis/verify-inv-16.ts

Your task is to fix the following 4 files:

1. `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`:
   - Line 14: Restore markdown bold formatting in purpose quote: `> **The approval standard:** Approve a change when it definitely improves overall code health...`
   - Defect catalog (line 198): REMOVE the fabricated quotation and invalid `cross-file-contradiction` defect regarding `skills/code-simplification/SKILL.md:25` (line 171 is about automation for refactorings > 500 lines, not file length).
   - Add omitted concepts to `Concepts named`:
     - `LGTM` — skills/code-review-and-quality/SKILL.md:273, 372 — used here
     - `rubber-stamp` — skills/code-review-and-quality/SKILL.md:273 — used here
     - `Model A` — skills/code-review-and-quality/SKILL.md:210, 213, 216 — used here
     - `Model B` — skills/code-review-and-quality/SKILL.md:210, 213, 216 — used here
     - `First line` — skills/code-review-and-quality/SKILL.md:134 — defined here
     - `Body` — skills/code-review-and-quality/SKILL.md:136 — defined here
     - `I'll clean it up later` — skills/code-review-and-quality/SKILL.md:267, 360 — used here
     - `one business day` — skills/code-review-and-quality/SKILL.md:253 — defined here

2. `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`:
   - Fix citation for `Checked by` to line 112 (table header).
   - Fix citation for `cheapest road to green` to line 206.
   - Fix citation for `de facto tool` to lines 216-217.
   - Fix citation for `edit loop` to line 200.
   - Fix citation for `WCAG` to line 120 (and/or line 220).
   - Change `External checks`, `Project checks`, `Suite checks` to verbatim `External` (line 220), `Project` (line 221), `Suite` (line 222).
   - Change `Circular checks` to verbatim `Not all checks are equally circular` (line 218).
   - Change `Verification checklist` to verbatim `Verification` (line 290).
   - In `Invoked by`: Remove `skills/constraint-driven-development/references/floor-guard.md:3` (it is invoked by this skill, not an invoking caller).
   - Add omitted concepts to `Concepts named`:
     - `Pre-product-market-fit` — skills/constraint-driven-development/SKILL.md:34 — defined here
     - `owasp-top-ten` — skills/constraint-driven-development/SKILL.md:153 — used here
     - `depcruise` — skills/constraint-driven-development/SKILL.md:159 — used here
     - `.skip` — skills/constraint-driven-development/SKILL.md:209 — used here
     - `TODO` — skills/constraint-driven-development/SKILL.md:211 — used here

3. `docs/analysis/inventory/addy/_units/inv-addy-16.md`:
   - Remove the invalid defect from cross-unit notes / defects summary.

4. `docs/plan/STATE.md`:
   - In Counts table (line 434): Set `Rows inventoried (addy / matt / rjm) | 190 / 0 / 0 |` (reconciling with the 190 checked rows in manifest/addy.md).
   - Line 13: Set `current_unit` to `inv-addy-21` (since units 16 through 20 are complete).
   - Line 15: Set `next_action` to `Process batch inv-addy-21 to 25`.

Verification Requirements:
1. Run `bun scripts/synthesis/verify-inv-16.ts` — MUST pass 100% (298 / 298 checks passing, 0 failures).
2. Run `bun run scripts/synthesis/coverage.ts` — confirm `Empty required inventory fields: 0`.
3. Run `bun run scripts/synthesis/glossary-lint.ts` — confirm clean.
4. Run `cd sources/addy && bun scripts/validate-skills.js` — confirm 25 skills pass with 0 errors.
5. Run `cd sources/addy && bun scripts/validate-reference-links.js` — confirm 0 errors.

Write progress.md and handoff.md in your working directory and notify parent orchestrator (conversation ID aed25c9d-0210-4705-b93e-eab462569ae1) via send_message when done.
