# Execution Plan: inv-addy-7 Inventory Extraction

## Objective
Extract exhaustive, fully-verified Phase 1 inventory entries for all 6 files in work unit `inv-addy-7`:
1. `sources/addy/docs/cursor-setup.md` (8,370 bytes)
2. `sources/addy/docs/antigravity-setup.md` (5,041 bytes)
3. `sources/addy/docs/codex-setup.md` (1,805 bytes)
4. `sources/addy/docs/agents.md` (6,996 bytes)
5. `sources/addy/docs/gemini-cli-setup.md` (5,640 bytes)
6. `sources/addy/plugin.json` (129 bytes)

Execute all package validation scripts, generate unit report `_units/inv-addy-7.md`, check off rows in `docs/analysis/manifest/addy.md`, update `docs/plan/STATE.md`, pass review, adversarial challenge, and forensic integrity audit.

## Steps
1. **Setup & Initialization**:
   - Initialize state files (`DISPATCH.md`, `BRIEFING.md`, `SCOPE.md`, `plan.md`, `progress.md`, `GATE_STATUS.md`).
   - Start 10-minute heartbeat cron.
2. **Phase 1 Exploration (3 Explorers in parallel)**:
   - Explorer 1 (`explorer_inv_addy_7_1`): Read `sources/addy/docs/cursor-setup.md` and `sources/addy/docs/codex-setup.md`. Extract purpose, design intent, phase, inputs, outputs, invokes, invoked by, concepts named (verbatim with path:line), structure, defects, observations, context cost.
   - Explorer 2 (`explorer_inv_addy_7_2`): Read `sources/addy/docs/antigravity-setup.md` and `sources/addy/docs/gemini-cli-setup.md`. Extract complete template fields, check path references with ls, verify line citations.
   - Explorer 3 (`explorer_inv_addy_7_3`): Read `sources/addy/docs/agents.md` and `sources/addy/plugin.json`. Execute package validation scripts in `sources/addy` and run cross-unit analysis with prior units (inv-addy-1 through 6).
3. **Phase 2 Implementation (1 Worker)**:
   - Worker (`worker_inv_addy_7_1`): Consolidate Explorer findings.
   - Write 6 inventory files to `docs/analysis/inventory/addy/`:
     - `docs-cursor-setup-md.md`
     - `docs-antigravity-setup-md.md`
     - `docs-codex-setup-md.md`
     - `docs-agents-md.md`
     - `docs-gemini-cli-setup-md.md`
     - `plugin-json.md`
   - Write work-unit report to `docs/analysis/inventory/addy/_units/inv-addy-7.md`.
   - Update `docs/analysis/manifest/addy.md` to check off the 6 rows.
   - Update `docs/plan/STATE.md` to mark `inv-addy-7` complete and update counts.
   - Execute verification: `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts`.
4. **Phase 3 Independent Verification (2 Reviewers)**:
   - Reviewer 1 (`reviewer_inv_addy_7_1`): Full compliance review against METHOD.md R1-R6, required template fields non-empty, verbatim quotes, citation accuracy.
   - Reviewer 2 (`reviewer_inv_addy_7_2`): Cross-file consistency, concept naming exhaustiveness, defect classifications, reference path validity.
5. **Phase 4 Adversarial Verification (2 Challengers)**:
   - Challenger 1 (`challenger_inv_addy_7_1`): Adversarial citation & quote audit (verifying exact line numbers and quotes against source files).
   - Challenger 2 (`challenger_inv_addy_7_2`): Adversarial cross-unit and script execution validation.
6. **Phase 5 Forensic Audit (1 Auditor)**:
   - Forensic Auditor (`auditor_inv_addy_7_1`): Systematic integrity check (non-cheating, no dummy data, no hallucinated citations, authentic extraction).
7. **Phase 6 Gate & Completion Report**:
   - Evaluate gate criteria in `GATE_STATUS.md`.
   - On full PASS, compile handoff report and send comprehensive completion report to parent.
