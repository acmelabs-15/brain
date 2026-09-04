# Teamwork interview brief — p1-run-03

## Scope & Objectives
Phase 1 — Inventory for units inv-addy-39, inv-addy-40, inv-addy-41, inv-matt-1, inv-matt-2, inv-matt-3. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in inv-addy-39, inv-addy-40, inv-addy-41, inv-matt-1, inv-matt-2, inv-matt-3 produces the deliverables named by `unit-facts.ts`, filled from templates/inventory-entry.md, obeying METHOD.md R1–R11.
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → clean for the units in scope
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in inv-addy-39, inv-addy-40, inv-addy-41, inv-matt-1, inv-matt-2, inv-matt-3: all deliverables exist, coverage.ts clean, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-03

## Integrity mode
development
