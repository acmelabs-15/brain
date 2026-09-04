# Teamwork interview brief — p1-run-01

## Scope & Objectives
Phase 1 — Inventory for units inv-addy-1, inv-addy-6, inv-addy-8, inv-addy-9, inv-addy-12, inv-addy-14. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in inv-addy-1, inv-addy-6, inv-addy-8, inv-addy-9, inv-addy-12, inv-addy-14 produces the deliverables named by `unit-facts.ts`, filled from templates/inventory-entry.md, obeying METHOD.md R1–R11.
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.
- You must use the 'Worker' and 'Critic' subagents as described in the Teamwork Preview prompt.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → clean for the units in scope
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in inv-addy-1, inv-addy-6, inv-addy-8, inv-addy-9, inv-addy-12, inv-addy-14: all deliverables exist, coverage.ts clean, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-01

## Integrity mode
development
