# Teamwork interview brief — p1-run-18

## Scope & Objectives
Phase 1 — Inventory for units inv-addy-2..inv-rjm-302 (48 units: 13 addy, 13 matt, 22 rjm), dispatched by session 011. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in inv-addy-2, inv-addy-3, inv-addy-4, inv-addy-7, inv-addy-8, inv-addy-12, inv-addy-19, inv-addy-29, inv-addy-30, inv-addy-33, inv-addy-35, inv-addy-36, inv-addy-46, inv-matt-1, inv-matt-2, inv-matt-3, inv-matt-4, inv-matt-5, inv-matt-8, inv-matt-38, inv-matt-40, inv-matt-41, inv-matt-42, inv-matt-43, inv-matt-44, inv-matt-45, inv-rjm-3, inv-rjm-70, inv-rjm-72, inv-rjm-88, inv-rjm-128, inv-rjm-138, inv-rjm-171, inv-rjm-174, inv-rjm-178, inv-rjm-194, inv-rjm-195, inv-rjm-200, inv-rjm-201, inv-rjm-203, inv-rjm-206, inv-rjm-208, inv-rjm-226, inv-rjm-243, inv-rjm-249, inv-rjm-254, inv-rjm-256, inv-rjm-302 produces the deliverables named by `unit-facts.ts`, filled from templates/inventory-entry.md, obeying METHOD.md R1–R11.
- The Project Orchestrator runs `bun scripts/synthesis/unit-facts.ts <unit>` per unit and hands each Worker its full output plus the read-list of METHOD.md §6.3 item 3 (METHOD.md R1–R11/§2.4/§4, DO-NOT-READ.md, the templates, GLOSSARY.md, this brief).
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- One Worker per unit, and every Worker dispatched at the same time: a Worker never receives a second unit, and no unit waits for another unit's milestone to be gated first. Review, challenge and audit run per unit or across the run — never as a sequence of gated milestones that holds units back (D-021: the unit caps of METHOD.md §6.5 are per Worker context).
- The Sentinel reports to the dispatching conversation only when the run is complete or blocked — no periodic progress messages: the dispatcher reads the run's files, and every message it receives costs it context (D-022).
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.
- (re-runs after Phase 1V only) These units are re-runs: each Worker reads docs/analysis/inventory/<pkg>/_verification.md first (where <pkg> is the unit's package: addy, matt, or rjm) and addresses every finding for its files; the earlier cards were removed.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → zero failures (uncovered rows elsewhere are not failures)
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in inv-addy-2..inv-rjm-302: all deliverables exist, coverage.ts zero failures, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-18

## Integrity mode
development
