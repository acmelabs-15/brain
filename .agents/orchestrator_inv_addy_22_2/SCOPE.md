# Scope: inv-addy-22

## Architecture
Phase 1 Inventory Extraction for work unit `inv-addy-22`.
This work unit processes 2 markdown files in `sources/addy-external/`:
1. `sources/addy-external/using-agent-skills.md` (21,955 bytes)
2. `sources/addy-external/test-driven-development.md` (26,483 bytes)
Total size: 48,438 bytes.

## Feature Inventory
| # | Feature / Deliverable | Description | Milestone | Source |
|---|-----------------------|-------------|-----------|--------|
| 1 | Inventory Entry: using-agent-skills | Full extraction following METHOD.md R1-R6, inventory-entry template | M1 | `sources/addy-external/using-agent-skills.md` |
| 2 | Inventory Entry: test-driven-development | Full extraction following METHOD.md R1-R6, inventory-entry template | M1 | `sources/addy-external/test-driven-development.md` |
| 3 | Work Unit Report | `docs/analysis/inventory/addy/_units/inv-addy-22.md` conforming to template | M1 | Synthesized from assigned files |
| 4 | Manifest Update | Update `docs/analysis/manifest/addy.md` rows 195 and 196 to `[x]` | M1 | `docs/analysis/manifest/addy.md` |
| 5 | STATE Update | Update `docs/plan/STATE.md`: mark `inv-addy-22` complete, session 007, update counts | M1 | `docs/plan/STATE.md` |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | inv-addy-22 extraction and reporting | Complete Phase 1 extraction, entries, report, manifest, and state updates | none | IN_PROGRESS |

## Code Layout & Deliverables Paths
- Inventory entries: `docs/analysis/inventory/addy/external-using-agent-skills-md.md`, `docs/analysis/inventory/addy/external-test-driven-development-md.md`
- Work unit report: `docs/analysis/inventory/addy/_units/inv-addy-22.md`
- Manifest: `docs/analysis/manifest/addy.md`
- State: `docs/plan/STATE.md`

## Interface Contracts & Constraints
- Must follow METHOD.md R1-R6 strictly.
- Strict verbatim extraction for required verbatim fields (R3).
- Must verify scripts/commands in scope with real execution where applicable (R2).
- GLOSSARY.md conventions (prefix `addy:`).
- DO-NOT-READ.md compliance (v2 branch only, no git history before project's first commit).
