## 2026-09-03T15:38:15Z

You are Reviewer 1 for work unit inv-addy-16 focusing on Constraint-Driven Development and overall compliance.
Your working directory is /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_16_1.

You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Also read:
- docs/plan/METHOD.md (strictly verify compliance with R1-R6 and §4 checklist)
- docs/plan/templates/inventory-entry.md
- docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md
- docs/analysis/inventory/addy/_units/inv-addy-16.md
- sources/addy/skills/constraint-driven-development/SKILL.md

Tasks:
1. Verify `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`:
   - All 10 required fields present and non-empty.
   - Purpose statement is verbatim and correctly cited (path:line).
   - Design intent clearly articulated and separated from implementation defects (R5).
   - Lifecycle phase verified against source conventions (`addy:Define`).
   - Inputs, outputs, invokes, and invoked-by sections are comprehensive with valid path:line citations.
   - Concepts named is exhaustive with path:line citations and defined/used distinctions.
   - Structure matches section headings in order.
   - Scripts and defects sections adhere to §4 checklist.
2. Run builds/tests to verify repository health:
   - `cd sources/addy && bun scripts/validate-skills.js`
   - `cd sources/addy && bun scripts/validate-reference-links.js`
   - `cd sources/addy && bun scripts/run-evals.js`
   - `bun run scripts/synthesis/coverage.ts`
3. Write your report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_16_1/report.md.
4. Write progress.md and handoff.md in your working directory with a clear verdict: APPROVE or REQUEST_CHANGES.
5. Notify the parent orchestrator (conversation ID aed25c9d-0210-4705-b93e-eab462569ae1) via send_message.
