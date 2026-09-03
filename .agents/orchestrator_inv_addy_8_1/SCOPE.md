# Scope: inv-addy-8

## Architecture
Phase 1 Inventory unit `inv-addy-8` covering documentation and hooks tooling in `sources/addy/`.

## Feature Inventory
| # | Feature / File | Description | Milestone | Source |
|---|---|---|---|---|
| 1 | `sources/addy/README.md` | Primary package overview, usage, philosophy, catalog (25,223 bytes) | inv-addy-8 | manifest |
| 2 | `sources/addy/CONTRIBUTING.md` | Contributing guide, rules, requirements (7,179 bytes) | inv-addy-8 | manifest |
| 3 | `sources/addy/hooks/SIMPLIFY-IGNORE.md` | Doc for code simplification ignore mechanism (3,863 bytes) | inv-addy-8 | manifest |
| 4 | `sources/addy/hooks/simplify-ignore.sh` | Shell hook for filtering files from simplify (12,173 bytes) | inv-addy-8 | manifest |
| 5 | `sources/addy/hooks/session-start-test.sh` | Shell test script for session-start hook (1,224 bytes) | inv-addy-8 | manifest |

Total bytes: 49,662 bytes.

## Milestones
| # | Name | Scope | Dependencies | Status | Key Outputs |
|---|---|---|---|---|---|
| 1 | Survey & Explore | Map dependencies, scripts, invocations in the 5 files | none | DONE | Explorer 1, Explorer 2, Spec Miner reports |
| 2 | Extraction & Execution | Full verbatim reads, script execution, inventory drafting & persistence | M1 | DONE | 5 inventory entries + unit report + manifest/state update |
| 3 | Verification & Audit | Review, adversarial challenge, forensic audit | M2 | DONE | Reviewer 1 & 2 APPROVE, Challenger 1 & 2 APPROVE, Auditor CLEAN |
| 4 | Final Gate & Hand-off | Manifest update, STATE.md check-off, completion report | M3 | DONE | Gate PASS in GATE_STATUS.md, ready for Sentinel handoff |

## Outputs Required
- `docs/analysis/inventory/addy/readme-md.md`
- `docs/analysis/inventory/addy/contributing-md.md`
- `docs/analysis/inventory/addy/hooks-simplify-ignore-md.md`
- `docs/analysis/inventory/addy/hooks-simplify-ignore-sh.md`
- `docs/analysis/inventory/addy/hooks-session-start-test-sh.md`
- `docs/analysis/inventory/addy/_units/inv-addy-8.md`
- Update `docs/analysis/manifest/addy.md` (check off the 5 rows)
- Update `docs/plan/STATE.md` (inv-addy-8 complete, metrics updated)
