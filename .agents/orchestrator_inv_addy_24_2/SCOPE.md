# Scope: inv-addy-24

## Work Unit Summary
- Unit ID: `inv-addy-24`
- Source File: `sources/addy-external/api-and-interface-design.md` (26,413 bytes)
- Manifest Entry: `../addy-external/api-and-interface-design.md` (row 199 in `docs/analysis/manifest/addy.md`)
- Package Prefix: `addy:`
- Session: `007`

## Deliverables
1. Inventory Entry:
   - Target Directory: `docs/analysis/inventory/addy/`
   - File Name: (determined per project conventions for addy-external, e.g. `api-and-interface-design.md` or as verified by Explorers)
   - Template: Project inventory-entry template (see METHOD.md §3)
   - Mandatory Sections: Fully populated, strict adherence to R1-R6.
2. Work Unit Report:
   - Path: `docs/analysis/inventory/addy/_units/inv-addy-24.md`
   - Structure: Standard work-unit report documenting scope, execution of commands (R2), findings, verbatim extractions (R3), quality checklist (§4).
3. Manifest Update:
   - Path: `docs/analysis/manifest/addy.md`
   - Action: Mark row 199 for `../addy-external/api-and-interface-design.md` as `[x]`.
4. STATE Update:
   - Path: `docs/plan/STATE.md`
   - Action: Mark `inv-addy-24` as `complete`, session `007`, record output path, update completed counts.

## Applicable Rules & Guidelines
- `AGENTS.md`
- `docs/plan/METHOD.md` (R1-R6, §4 Checklist)
- `docs/plan/STATE.md`
- `docs/plan/DO-NOT-READ.md` (Strict: v2 branch only, no pre-project git history)
- Verbatim extraction for required verbatim fields (R3)
- Execute every script/command in scope with documented examples and capture real exit codes and outputs (R2) via Bun/TypeScript
- GLOSSARY.md conventions (package prefix `addy:`)

## Subagent Plan (Iteration 1)
- 3 Explorers:
  - `explorer_1`: Deep inspection of `sources/addy-external/api-and-interface-design.md` (structure, headings, concepts, APIs, commands, code blocks, dependencies).
  - `explorer_2`: Method, template, and precedent inspection (`docs/plan/METHOD.md`, `docs/plan/STATE.md`, previous completed unit reports in `docs/analysis/inventory/addy/_units/`, previous inventory entries in `docs/analysis/inventory/addy/`, `docs/analysis/manifest/addy.md`).
  - `explorer_3`: Command execution and R2 verification planning (identify any code/scripts/curl/endpoints/commands in the file to run via Bun/TypeScript or shell, testing feasibility, mocking if necessary, exact command runs, exit codes).
- 1 Worker:
  - Generates inventory entry, work unit report, updates manifest and STATE.md.
- 2 Reviewers:
  - Independent review against METHOD.md R1-R6 and §4 checklist.
- 2 Challengers:
  - Verification of verbatim text, commands, file paths, byte sizes, links.
- 1 Forensic Auditor:
  - Independent integrity audit (no fabrications, no hardcoded cheating, clean attestation).
