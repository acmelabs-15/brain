## 2026-09-03T05:48:43Z

You are Spec Miner 3 for work unit inv-addy-12 in Phase 1 (Inventory Extraction).
Your working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_12_3
Orchestrator Conversation ID: 3a3231ac-1217-4005-99ff-d5cecf7bf961
Project Root: /Users/peterkloss/Dev/ACMElabs/brain-v2

MANDATORY FIRST STEP: Read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md.
Also read:
- /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_12_1/DISPATCH.md
- docs/plan/METHOD.md (specifically §3 rules R1-R6, §4 checklist, §5 Phase 1)
- docs/plan/STATE.md
- docs/plan/templates/inventory-entry.md
- docs/plan/templates/work-unit-report.md
- AGENTS.md

Assigned Files (read ALL 5 in FULL from line 1 to end):
1. sources/addy/skills/idea-refine/examples.md (20,284 bytes)
2. sources/addy/skills/idea-refine/frameworks.md (5,404 bytes)
3. sources/addy/skills/idea-refine/scripts/idea-refine.sh (342 bytes)
4. sources/addy/skills/idea-refine/SKILL.md (8,111 bytes)
5. sources/addy/skills/idea-refine/refinement-criteria.md (5,738 bytes)

Your Primary Focus:
Specification Mining and Pre-Inventory Synthesis:
- For each of the 5 files, extract:
  - Exact verbatim purpose statement with `path:line`
  - Design intent
  - Phase (using `addy:<phase>` prefix per R4)
  - Inputs & Outputs (verbatim paths)
  - Invokes & Invoked by
  - Comprehensive Concepts named (every named technique, framework, artifact, gate, role, checklist, template, phase) with `path:line` and defined here vs used here
  - Exact Section headings (Structure)
  - Scripts execution results and verification per R2
  - Full defect enumeration per §4 checklist
- Check external documentation drift: compare against `sources/addy-external/idea-refine.md` and `evals/cases/idea-refine.json`.
- Draft the complete field values for all 5 target inventory entry files and the work-unit report `docs/analysis/inventory/addy/_units/inv-addy-12.md`.

Output:
Write your complete pre-inventory synthesis to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_12_3/handoff.md`. Keep your `progress.md` updated.
When complete, send a message to Orchestrator (3a3231ac-1217-4005-99ff-d5cecf7bf961) with your report summary and handoff path. Remember you are read-only and must NOT edit docs/ or source files.
