---
unit: cc-rjm-376
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-376

## Files assigned
- [x] sources/rjm/templates/README.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md

## Outputs produced
- docs/analysis/concepts/rjm/drift-detected.md (1536 bytes)
- docs/analysis/concepts/rjm/no-counterpart.md (1487 bytes)
- docs/analysis/concepts/rjm/crlf-line-endings.md (919 bytes)
- docs/analysis/concepts/rjm/session-826-rca.md (1015 bytes)
- docs/analysis/concepts/rjm/platform-configuration-schema.md (1551 bytes)
- docs/analysis/concepts/rjm/adr-006-amendment-2026-04-28.md (1124 bytes)
- docs/analysis/concepts/rjm/vscode.md (883 bytes)
- docs/analysis/concepts/rjm/visual-studio.md (917 bytes)
- docs/analysis/concepts/rjm/req-003-009.md (913 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-376.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/drift-detected.md docs/analysis/concepts/rjm/no-counterpart.md docs/analysis/concepts/rjm/crlf-line-endings.md docs/analysis/concepts/rjm/session-826-rca.md docs/analysis/concepts/rjm/platform-configuration-schema.md docs/analysis/concepts/rjm/adr-006-amendment-2026-04-28.md docs/analysis/concepts/rjm/vscode.md docs/analysis/concepts/rjm/visual-studio.md docs/analysis/concepts/rjm/req-003-009.md` (exit code 0, 9 PASS, 0 FAIL, 0 MISSING source across 9 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-376 completes 9 concept cards derived from the agent template system documentation in `templates/README.md`:
  1. Drift detection quality gates and verdicts: `drift-detected` (kind: gate) and `no-counterpart` (kind: gate) evaluating semantic divergence and prompt parity between Claude Code agents and VS Code/Copilot template targets.
  2. Platform configuration schema architecture: `platform-configuration-schema` (kind: template) establishing declarative provider substitution specifications under REQ-003 and ADR-006 Amendment.
  3. Formatting, operational, and requirements metadata: `crlf-line-endings`, `session-826-rca`, `adr-006-amendment-2026-04-28`, `vscode`, `visual-studio`, and `req-003-009`, all classified as `kind: name-only` per D-023.
- All 9 occurrences recorded in `facts/cc-rjm-376.txt` are mapped in the `Where used` tables.
- Defect status for all concept cards inherits `defects: cross-file-contradiction, doc-drift` from `docs/analysis/inventory/rjm/templates-readme-md.md`.
- All 9 concept cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,500 tokens across 1 source file and 1 inventory card.
Approximate tokens of output written: ~3,500 tokens across 9 concept cards and 1 unit report.
