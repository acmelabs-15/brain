# Dispatch for Worker 1 (inv-addy-15)

## Objective
Author the 4 inventory-entry deliverables, the work-unit report, update the manifest, and update STATE.md for unit `inv-addy-15`. Run synthesis coverage and glossary checks, and report results.

## Metadata
- Archetype: worker
- Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_15_1
- Parent Orchestrator ID: 6c3faf20-5077-4549-84dc-6a2dd5b1b92d
- Original Request File: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
- Scope Document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_15_1/SCOPE.md

You MUST read `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md` before starting work.

## MANDATORY INTEGRITY WARNING
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Input Evidence Sources
Carefully read the reports produced by the 3 Explorers:
1. Explorer 1 Gen 2: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1_gen2/report.md` (covers `skills/frontend-ui-engineering/SKILL.md` and `skills/shipping-and-launch/SKILL.md`)
2. Explorer 2 Gen 3: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_2_gen3/report.md` (covers `skills/spec-driven-development/SKILL.md` and `skills/constraint-driven-development/references/floor-guard.md`)
3. Explorer 3 Gen 2: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/report.md` (cross-cutting verification, empirical tests, toolchain, and defect analysis)

Also reference:
- Template schemas: `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`
- Previous unit report: `docs/analysis/inventory/addy/_units/inv-addy-10.md` for structure and tone

## Files You Exclusively Own and Must Author/Update
1. `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md`
2. `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`
3. `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`
4. `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-15.md`
6. `docs/analysis/manifest/addy.md` (mark the 4 assigned file rows `[x]`)
7. `docs/plan/STATE.md` (mark `inv-addy-15` status `complete`, session `006`, output path `docs/analysis/inventory/addy/_units/inv-addy-15.md`)

## Hard Rules (verbatim from METHOD.md §3)
R1 — Full reads. Coverage is proven, not asserted.
R2 — Evidence, and scripts are run. Every claim names path:line.
R3 — Verbatim in extraction. Required verbatim fields carry exact words in quotes.
R4 — One vocabulary, from the glossary (`addy:` prefix).
R5 — Defect is not dismissal. Catalog all defects found by explorers (`missing-path`, `doc-drift`, `unfailable-gate`, `script-bug`, etc.).
R6 — Depth rule. Named concepts must be exhaustively cataloged with exact line numbers and `defined here | used here`.

## Required Verification Commands
After writing the files, execute and record:
1. `bun scripts/synthesis/coverage.ts`
2. `bun scripts/synthesis/glossary-lint.ts`
3. Verify files on disk with `ls -la docs/analysis/inventory/addy/skills-*.md`
4. Confirm `STATE.md` table and current position

Save your completion handoff to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_15_1/handoff.md` and notify parent via `send_message`.

## 2026-09-03T14:40:27Z

You are Worker 1 for work unit inv-addy-15 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_15_1
You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.
Read your dispatch at /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_15_1/DISPATCH.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your task:
Synthesize the detailed findings and drafted entries from the 3 Explorers:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_1_gen2/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_2_gen3/report.md
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_15_3_gen2/report.md

Author and write to disk the following deliverables:
1. /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md
2. /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md
3. /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md
4. /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md
5. /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-15.md
6. Update /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md (mark rows for the 4 files [x])
7. Update /Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md (inv-addy-15 row status: complete, session 006, output: docs/analysis/inventory/addy/_units/inv-addy-15.md)

Verify by running:
- `bun scripts/synthesis/coverage.ts`
- `bun scripts/synthesis/glossary-lint.ts`
Write your handoff report to /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/worker_inv_addy_15_1/handoff.md and notify parent via send_message.

