# Scope: inv-addy-25

## Architecture
- Phase 1 Inventory Extraction for `addy` package.
- Single file: `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes, external-doc).
- Outputs:
  - Inventory entry in `docs/analysis/inventory/addy/`
  - Unit report: `docs/analysis/inventory/addy/_units/inv-addy-25.md`
  - Manifest update in `docs/analysis/manifest/addy.md`
  - State update in `docs/plan/STATE.md`

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Inventory entry extraction | Extract inventory entry for sources/addy-external/ci-cd-and-automation.md | M1 | DISPATCH.md |
| 2 | Unit report creation | Create inv-addy-25.md in docs/analysis/inventory/addy/_units/ | M1 | DISPATCH.md |
| 3 | Manifest update | Mark row for ../addy-external/ci-cd-and-automation.md checked in docs/analysis/manifest/addy.md | M1 | DISPATCH.md |
| 4 | State update | Mark inv-addy-25 complete in docs/plan/STATE.md with session 006, path, counts | M1 | DISPATCH.md |

## Milestones
| # | Name | Scope | Dependencies | Status | Outputs |
|---|------|-------|-------------|--------|---------|
| 1 | M1: inv-addy-25 Inventory Extraction | Complete inventory entry, unit report, manifest, and state updates | none | DONE | `sources-addy-external-ci-cd-and-automation-md.md`, `inv-addy-25.md`, manifest line 200 checked, STATE line 89 complete |

## Interface Contracts
- Standard inventory markdown format matching existing entries in `docs/analysis/inventory/addy/`
- Standard unit report format matching existing reports in `docs/analysis/inventory/addy/_units/`
- Manifest row checked `[x]` for `../addy-external/ci-cd-and-automation.md`
- STATE.md table updated with complete status, session 006, output path
