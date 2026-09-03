## 2026-09-03T17:36:28Z

You are Reviewer 2 for work unit `inv-addy-21` (Phase 1 Inventory Extraction).
Role: Technical Accuracy & Defect Verification Reviewer.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_21_2/
Project root: /Users/peterkloss/Dev/ACMElabs/brain-v2
Parent orchestrator: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/
Original request: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/SCOPE.md

Deliverables to review:
1. `docs/analysis/inventory/addy/external-idea-refine-md.md`
2. `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-21.md`

Source files to check against:
- `sources/addy-external/idea-refine.md`
- `sources/addy-external/debugging-and-error-recovery.md`
- `sources/addy/skills/idea-refine/SKILL.md`
- `sources/addy/skills/debugging-and-error-recovery/SKILL.md`
- `sources/addy/.claude/commands/`
- `sources/addy/commands/`

Your tasks:
1. Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist). Comply with DO-NOT-READ.md.
2. Verify technical accuracy of the content in both inventory entries:
   - Check purpose statement against source lines 1 and 5.
   - Check phase assignments (`addy:Define`, `addy:Verify`).
   - Check all listed concepts named: ensure every concept is genuinely in the source file and correctly attributed (`defined here` vs `used here`).
   - Check all listed defects (§4 checklist): verify doc-drift, universal anatomy contradiction, command attribution mismatch, triage step discrepancy, and orphan status against actual repository files.
3. Run repository validation scripts:
   - `cd sources/addy && bun scripts/validate-skills.js`
   - `cd sources/addy && bun scripts/validate-reference-links.js`
   - `cd sources/addy && bun scripts/validate-versions.js`
   - `cd sources/addy && bun scripts/validate-commands.js`
   - `cd sources/addy && bun test ./scripts/*-test.js`
4. Determine your verdict: `APPROVE` or `REQUEST_CHANGES`.
5. Write `handoff.md` and `progress.md` in your working directory and send a completion message to the orchestrator.
