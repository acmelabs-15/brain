# Execution Plan: inv-addy-6 Inventory Extraction

## Objective
Extract exhaustive, fully-verified Phase 1 inventory entries for all 5 files in work unit `inv-addy-6` (`docs/comparison.md`, `docs/developer-onboarding.md`, `docs/getting-started.md`, `docs/copilot-setup.md`, `docs/skill-anatomy.md`), execute all package validation scripts, generate unit report `_units/inv-addy-6.md`, check off rows in `docs/analysis/manifest/addy.md`, update `docs/plan/STATE.md`, pass review, adversarial challenge, and forensic integrity audit.

## Steps
1. **Setup & Initialization**:
   - Initialize state files (`DISPATCH.md`, `BRIEFING.md`, `SCOPE.md`, `plan.md`, `progress.md`, `GATE_STATUS.md`).
   - Start 10-minute heartbeat cron.
2. **Phase 1 Exploration (3 Explorers in parallel)**:
   - Explorer 1 (`explorer_inv_addy_6_1`): Read `docs/comparison.md` (15,362 bytes) and `docs/copilot-setup.md` (3,496 bytes). Extract purpose, design intent, phase, inputs, outputs, invokes, invoked by, concepts named (verbatim with path:line), structure, defects, observations, context cost.
   - Explorer 2 (`explorer_inv_addy_6_2`): Read `docs/developer-onboarding.md` (7,850 bytes) and `docs/getting-started.md` (7,104 bytes). Extract complete template fields, check path references with ls, verify line citations.
   - Explorer 3 (`explorer_inv_addy_6_3`): Read `docs/skill-anatomy.md` (8,849 bytes). In addition, execute package validation scripts in `sources/addy` and run cross-unit analysis with prior units (inv-addy-1 through 5).
3. **Phase 2 Implementation (1 Worker)**:
   - Worker (`worker_inv_addy_6_1`): Consolidate Explorer findings.
   - Write 5 inventory files to `docs/analysis/inventory/addy/`:
     - `docs-comparison-md.md`
     - `docs-developer-onboarding-md.md`
     - `docs-getting-started-md.md`
     - `docs-copilot-setup-md.md`
     - `docs-skill-anatomy-md.md`
   - Write work-unit report to `docs/analysis/inventory/addy/_units/inv-addy-6.md`.
   - Update `docs/analysis/manifest/addy.md` to check off the 5 rows.
   - Update `docs/plan/STATE.md` to mark `inv-addy-6` complete.
   - Execute verification: `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts`.
4. **Phase 3 Independent Verification (2 Reviewers)**:
   - Reviewer 1 (`reviewer_inv_addy_6_1`): Full compliance review against METHOD.md R1-R6, required template fields non-empty, verbatim quotes, citation accuracy.
   - Reviewer 2 (`reviewer_inv_addy_6_2`): Cross-file consistency, concept naming exhaustiveness, defect classifications, reference path validity.
5. **Phase 4 Adversarial Verification (2 Challengers)**:
   - Challenger 1 (`challenger_inv_addy_6_1`): Adversarial citation & quote audit (verifying exact line numbers and quotes against source files).
   - Challenger 2 (`challenger_inv_addy_6_2`): Adversarial cross-unit and script execution validation.
6. **Phase 5 Forensic Audit (1 Auditor)**:
   - Forensic Auditor (`auditor_inv_addy_6_1`): Systematic integrity check (non-cheating, no dummy data, no hallucinated citations, authentic extraction).
7. **Phase 6 Gate & Completion Report**:
   - Evaluate gate criteria in `GATE_STATUS.md`.
   - On full PASS, compile handoff report and send comprehensive completion report to parent.
