# Teamwork interview brief — p1-run-08

## Scope & Objectives
Phase 1 — Inventory for units inv-rjm-9, inv-rjm-10, inv-rjm-11, inv-rjm-12, inv-rjm-13, inv-rjm-14, inv-rjm-15, inv-rjm-16, inv-rjm-17, inv-rjm-18, inv-rjm-19, inv-rjm-20, inv-rjm-21, inv-rjm-22, inv-rjm-23, inv-rjm-24, dispatched by session 007. Purpose: exploration/analysis artefacts for the brain lifecycle synthesis. Audience: the next session of this project, which reads only files.

## Requirements
- Every unit in inv-rjm-9, inv-rjm-10, inv-rjm-11, inv-rjm-12, inv-rjm-13, inv-rjm-14, inv-rjm-15, inv-rjm-16, inv-rjm-17, inv-rjm-18, inv-rjm-19, inv-rjm-20, inv-rjm-21, inv-rjm-22, inv-rjm-23, inv-rjm-24 produces the deliverables named by `unit-facts.ts`, filled from templates/inventory-entry.md, obeying METHOD.md R1–R11.
- The Project Orchestrator runs `bun scripts/synthesis/unit-facts.ts <unit>` per unit and hands each Worker its full output plus the read-list of METHOD.md §6.3 item 3 (METHOD.md R1–R11/§2.4/§4, DO-NOT-READ.md, the templates, GLOSSARY.md, this brief).
- Workers read every assigned file in full; quotations are byte-exact with path:line.
- Deliverables are the only files written; nothing under docs/plan/ or docs/analysis/manifest/ is touched; no git.

## Independent Verification
An independent agent judges every card against METHOD.md R1–R11 and runs, from the repo root:
  bun scripts/synthesis/quote-check.ts <card>        → zero FAIL
  bun scripts/synthesis/coverage.ts                  → zero failures (uncovered rows elsewhere are not failures)
A card with any FAIL or empty required field is rejected back to its Worker.

## Acceptance Criteria
- Every unit in inv-rjm-9, inv-rjm-10, inv-rjm-11, inv-rjm-12, inv-rjm-13, inv-rjm-14, inv-rjm-15, inv-rjm-16, inv-rjm-17, inv-rjm-18, inv-rjm-19, inv-rjm-20, inv-rjm-21, inv-rjm-22, inv-rjm-23, inv-rjm-24: all deliverables exist, coverage.ts zero failures, quote-check.ts zero FAIL.
- The Success Auditor's report lists, per unit, the exact commands run and their exit codes.

## Project Working Directory
/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-08

## Integrity mode
development
