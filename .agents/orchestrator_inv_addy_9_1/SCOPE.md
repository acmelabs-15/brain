# Scope: inv-addy-9

## Architecture & Work Unit Overview
Work unit `inv-addy-9` in Phase 1 (Inventory) covers 10 files (42,248 bytes total) from `sources/addy/` spanning hooks and validation scripts.

## Assigned Files
| # | File Path | Bytes | Type | Target Output |
|---|---|---|---|---|
| 1 | `hooks/sdd-cache-post.sh` | 4,567 | script | `docs/analysis/inventory/addy/hooks-sdd-cache-post-sh.md` |
| 2 | `hooks/sdd-cache-pre.sh` | 4,261 | script | `docs/analysis/inventory/addy/hooks-sdd-cache-pre-sh.md` |
| 3 | `hooks/session-start.sh` | 1,392 | script | `docs/analysis/inventory/addy/hooks-session-start-sh.md` |
| 4 | `hooks/simplify-ignore-test.sh` | 8,709 | script | `docs/analysis/inventory/addy/hooks-simplify-ignore-test-sh.md` |
| 5 | `hooks/SDD-CACHE.md` | 8,398 | doc | `docs/analysis/inventory/addy/hooks-sdd-cache-md.md` |
| 6 | `hooks/hooks.json` | 364 | config | `docs/analysis/inventory/addy/hooks-hooks-json.md` |
| 7 | `scripts/validate-reference-links-test.js` | 5,666 | script | `docs/analysis/inventory/addy/scripts-validate-reference-links-test-js.md` |
| 8 | `scripts/validate-reference-links.js` | 3,832 | script | `docs/analysis/inventory/addy/scripts-validate-reference-links-js.md` |
| 9 | `scripts/validate-artifact-paths.js` | 4,102 | script | `docs/analysis/inventory/addy/scripts-validate-artifact-paths-js.md` |
| 10 | `scripts/validate-versions-test.js` | 957 | script | `docs/analysis/inventory/addy/scripts-validate-versions-test-js.md` |

Unit Report Output: `docs/analysis/inventory/addy/_units/inv-addy-9.md`

## Requirements
- Full read of all 10 files (R1).
- Script execution and exit code verification (R2).
- Verbatim quoting for Purpose, Concepts named, and Section headings (R3).
- Package-prefixed vocabulary (`addy:...`) before decisions (R4).
- Defect documentation without design dismissal (R5).
- Concept card candidate identification (R6).
- Verification via `coverage.ts` and `glossary-lint.ts`.
