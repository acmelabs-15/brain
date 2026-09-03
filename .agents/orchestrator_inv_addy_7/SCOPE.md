# Scope: inv-addy-7

## Architecture
- Package: `addy` (github.com/addyosmani/agent-skills @ d2c37ef6225dd8726cdd369a8030307f48592d26)
- Unit type: Setup guides, agent definitions doc, and root plugin config under `sources/addy/`
- Work unit: Phase 1 Inventory extraction following METHOD.md rules (R1-R6)

## Feature Inventory
| # | File Path | Bytes | Type | Target Output Slug |
|---|-----------|-------|------|--------------------|
| 1 | docs/cursor-setup.md | 8370 | doc | docs-cursor-setup-md.md |
| 2 | docs/antigravity-setup.md | 5041 | doc | docs-antigravity-setup-md.md |
| 3 | docs/codex-setup.md | 1805 | doc | docs-codex-setup-md.md |
| 4 | docs/agents.md | 6996 | doc | docs-agents-md.md |
| 5 | docs/gemini-cli-setup.md | 5640 | doc | docs-gemini-cli-setup-md.md |
| 6 | plugin.json | 129 | config | plugin-json.md |

Total: 6 files, 27,981 bytes.

## Work Unit Report Target
- `docs/analysis/inventory/addy/_units/inv-addy-7.md`

## Interface Contracts & Validation
- Outputs must strictly follow `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`.
- No empty required fields (`none` explicitly written if nothing to report).
- Quotes in Purpose and Concepts named must be verbatim with `path:line`.
- Validation commands:
  - `bun scripts/synthesis/coverage.ts`
  - `bun scripts/synthesis/glossary-lint.ts`
  - Package scripts execution in `sources/addy` (validate-skills.js, validate-commands.js, validate-reference-links.js, validate-artifact-paths.js, validate-versions.js, and tests)
- Manifest update: check off rows in `docs/analysis/manifest/addy.md`.
- State update: mark `inv-addy-7` complete in `docs/plan/STATE.md`.
