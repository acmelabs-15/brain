# Scope: inv-addy-15

## Overview
Phase 1 (Inventory Extraction) work unit `inv-addy-15` covering 4 files in `sources/addy/` totaling 38,862 bytes.

## Assigned Source Files
| # | Path | Bytes | Type | Target Output Slug |
|---|------|-------|------|--------------------|
| 1 | `sources/addy/skills/frontend-ui-engineering/SKILL.md` | 10,711 | skill | `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md` |
| 2 | `sources/addy/skills/shipping-and-launch/SKILL.md` | 10,137 | skill | `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md` |
| 3 | `sources/addy/skills/spec-driven-development/SKILL.md` | 12,163 | skill | `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md` |
| 4 | `sources/addy/skills/constraint-driven-development/references/floor-guard.md` | 5,851 | reference | `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md` |

## Target Deliverables
1. `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md`
2. `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`
3. `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`
4. `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-15.md` (work-unit report)
6. Updates to `docs/analysis/manifest/addy.md` (checking the 4 assigned file rows `[x]`)
7. Updates to `docs/plan/STATE.md` (inv-addy-15 status `complete`, session 006, output path, updated counts)

## Methodology & Verification Requirements
- METHOD.md rules R1-R6:
  - R1: Read every assigned file in full (no sampling).
  - R2: Evidence and scripts run (`path:line` citations; execute any executable scripts/examples with exact exit codes and output).
  - R3: Verbatim extraction for required verbatim fields.
  - R4: One vocabulary from GLOSSARY.md (package prefix `addy:`).
  - R5: Defect is not dismissal (record defects, evaluate design intent separately).
  - R6: Depth rule (exhaustive named concepts with `path:line` and defined/used tag).
- METHOD.md §4 checklist:
  - Existence (check all referenced paths with `ls`).
  - Execution (run documented examples, check exit paths).
  - Documentation drift.
  - Internal consistency.
  - Cross-file consistency.
  - Composition (invokes / invoked by).
  - Context cost (file bytes + loaded assets).
  - Design intent.
