# Scope: inv-addy-5 (Phase 1 Inventory)

## Target Files
1. `sources/addy/agents/web-performance-auditor.md` (12,278 bytes)
2. `sources/addy/agents/security-auditor.md` (4,992 bytes)
3. `sources/addy/docs/windsurf-setup.md` (1,471 bytes)
4. `sources/addy/docs/commandcode-setup.md` (2,437 bytes)
5. `sources/addy/docs/opencode-setup.md` (9,547 bytes)
6. `sources/addy/docs/adoption-guide.md` (11,197 bytes)

## Output Files
1. `docs/analysis/inventory/addy/agents-web-performance-auditor-md.md`
2. `docs/analysis/inventory/addy/agents-security-auditor-md.md`
3. `docs/analysis/inventory/addy/docs-windsurf-setup-md.md`
4. `docs/analysis/inventory/addy/docs-commandcode-setup-md.md`
5. `docs/analysis/inventory/addy/docs-opencode-setup-md.md`
6. `docs/analysis/inventory/addy/docs-adoption-guide-md.md`
7. `docs/analysis/inventory/addy/_units/inv-addy-5.md`
8. Updates to `docs/analysis/manifest/addy.md` (marking rows checked)
9. Updates to `docs/plan/STATE.md` (inv-addy-5 complete, counts updated)

## Requirements & Acceptance Criteria
- Full read of each file (R1).
- Script execution if scripts present in scope (R2).
- Verbatim extraction with path:line citations (R3).
- Package prefix vocabulary (`addy:...`) applied (R4).
- Defect evaluation without dismissal (R5).
- Concepts named exhaustive extraction (R6).
- All required fields non-empty (`none` explicitly written if empty).
- `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts` verified by worker/reviewers.
