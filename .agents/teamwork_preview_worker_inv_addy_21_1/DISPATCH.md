## 2026-09-03T17:30:17Z

You are the Worker for work unit `inv-addy-21` (Phase 1 Inventory Extraction).

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_21_1/
Project root: /Users/peterkloss/Dev/ACMElabs/brain-v2
Parent orchestrator: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/
Original request: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/SCOPE.md

Explorer Reports to read first:
1. Explorer 1 (Methodology, templates, manifest & STATE schemas):
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_1_gen2/analysis.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_1_gen2/handoff.md
2. Explorer 2 (idea-refine.md deep-dive, concepts, defects):
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_2_gen2/analysis.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_2_gen2/handoff.md
3. Explorer 3 (debugging-and-error-recovery.md deep-dive, concepts, defects):
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_3_gen2/analysis.md
   - /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_21_3_gen2/handoff.md

Assigned Files:
1. `sources/addy-external/idea-refine.md` (24,943 bytes)
2. `sources/addy-external/debugging-and-error-recovery.md` (23,705 bytes)

Exclusive Write Ownership:
- `docs/analysis/inventory/addy/external-idea-refine-md.md`
- `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`
- `docs/analysis/inventory/addy/_units/inv-addy-21.md`
- `docs/analysis/manifest/addy.md` (rows 193 and 194)
- `docs/plan/STATE.md` (inv-addy-21 entry, session 007, and counts)

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Operating Rules:
- Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist), `docs/plan/STATE.md`.
- Comply strictly with DO-NOT-READ.md (v2 branch only, no pre-project git history).
- Bun/TypeScript only for any scripts.
- Verbatim extraction for required verbatim fields (R3).
- Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2).
- GLOSSARY.md conventions (package prefix `addy:`).
- Populate all 13 standard sections in each inventory entry. No required field may be empty; write `none` if nothing to report.
- Populate `docs/analysis/inventory/addy/_units/inv-addy-21.md` following `docs/plan/templates/work-unit-report.md`.
- Update `docs/analysis/manifest/addy.md` rows 193 and 194 to `[x]`.
- Update `docs/plan/STATE.md`: mark `inv-addy-21` as `complete`, session `007`, output path `docs/analysis/inventory/addy/_units/inv-addy-21.md`, and update counts:
  - Rows inventoried: `190 / 0 / 0` -> `192 / 0 / 0`
  - Units complete: `20 / 0 / 0` -> `21 / 0 / 0`
  - Units remaining: `36 / 21 / 20` -> `35 / 21 / 20`
  - Bytes inventoried: `879,881 / 0 / 0` -> `928,529 / 0 / 0` (+48,648)
  - Current unit: `inv-addy-22`
- Run verification commands:
  - `bun scripts/synthesis/coverage.ts`
  - `bun scripts/synthesis/glossary-lint.ts`
  - Validation scripts in `sources/addy/scripts/`
  - Capture real exit codes and outputs.
- Write `handoff.md` and `progress.md` in your working directory and send a completion message to the orchestrator.
