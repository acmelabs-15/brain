# Teamwork interview brief — p1-run-07

## Scope & Objectives
Phase 1 — Inventory for units inv-matt-39, inv-matt-40, inv-matt-41, inv-matt-42, inv-matt-43, inv-matt-44, inv-matt-45, inv-matt-46, inv-rjm-1, inv-rjm-2, inv-rjm-3, inv-rjm-4, inv-rjm-5, inv-rjm-6, inv-rjm-7, inv-rjm-8, dispatched by session 006. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in inv-matt-39, inv-matt-40, inv-matt-41, inv-matt-42, inv-matt-43, inv-matt-44, inv-matt-45, inv-matt-46, inv-rjm-1, inv-rjm-2, inv-rjm-3, inv-rjm-4, inv-rjm-5, inv-rjm-6, inv-rjm-7, inv-rjm-8 produces the deliverables named by `unit-facts.ts`, filled from templates/inventory-entry.md, obeying METHOD.md R1–R11.
- The Project Orchestrator runs `bun scripts/synthesis/unit-facts.ts <unit>` per unit and hands each Worker its full output plus the read-list of METHOD.md §6.3 item 3 (METHOD.md R1–R11/§2.4/§4, DO-NOT-READ.md, the templates, GLOSSARY.md, this brief).
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → zero failures (uncovered rows elsewhere are not failures)
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in inv-matt-39, inv-matt-40, inv-matt-41, inv-matt-42, inv-matt-43, inv-matt-44, inv-matt-45, inv-matt-46, inv-rjm-1, inv-rjm-2, inv-rjm-3, inv-rjm-4, inv-rjm-5, inv-rjm-6, inv-rjm-7, inv-rjm-8: all deliverables exist, coverage.ts zero failures, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-07

## Integrity mode
development
