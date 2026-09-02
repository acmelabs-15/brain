# Scope: inv-addy-3

## Overview
Work unit `inv-addy-3` covers 3 reference documentation files in the `addy` source repository:
1. `sources/addy/references/performance-checklist.md` (13,139 bytes)
2. `sources/addy/references/orchestration-patterns.md` (18,201 bytes)
3. `sources/addy/references/testing-patterns.md` (7,460 bytes)

## Deliverables
1. `docs/analysis/inventory/addy/references-performance-checklist-md.md`
2. `docs/analysis/inventory/addy/references-orchestration-patterns-md.md`
3. `docs/analysis/inventory/addy/references-testing-patterns-md.md`
4. `docs/analysis/inventory/addy/_units/inv-addy-3.md` (work unit report)
5. Updated manifest `docs/analysis/manifest/addy.md` (checking off 3 rows)

## Requirements & Acceptance Criteria
- Full reads of all 3 files (R1).
- Comprehensive inventory extraction per `docs/plan/templates/inventory-entry.md` and METHOD.md R1-R6, §4 checklist.
- All scripts (if any) executed and verified (R2).
- Verbatim quotes with `path:line` for Purpose, Concepts Named, and other required sections (R3).
- Package prefix naming (`addy:<term>`) until formal glossary decision (R4).
- Detailed identification of defects, design intent, invokes/invoked by, structure, observations, and context cost (R5, R6).
- Verification via `bun run scripts/synthesis/coverage.ts`, `bun run scripts/synthesis/glossary-lint.ts`, and `bun test`.
