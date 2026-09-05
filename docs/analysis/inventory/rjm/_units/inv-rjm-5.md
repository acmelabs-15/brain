---
unit: inv-rjm-5
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-5

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-005-powershell-only-scripting.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-006-thin-workflows-testable-modules.md

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-005-powershell-only-scripting-md.md` (6833 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-006-thin-workflows-testable-modules-md.md` (9930 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-5.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-5 covers ADR-005 (PowerShell-Only Scripting Standard) and ADR-006 (Thin Workflows, Testable Modules), which form a companion architectural pair in the rjm repository.
- ADR-005 documents the project's early standard requiring PowerShell for all automation to curb autonomous agent token waste (~830 lines discarded during PR #60), but was superseded by ADR-042 (Python migration strategy), meaning directories it cites like `.github/scripts/` now contain Python instead of PowerShell.
- ADR-006 mandates thin GitHub Actions workflows (<100 lines) with business logic in testable modules to achieve 90x faster local test feedback (2 seconds vs 3 minutes). Its 2026-04-28 amendment establishes a 7-condition security exception for declarative build-pipeline YAML (`copilot-cli.yaml`), later refined in Round 3 to remove speculative rules severity gating.
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,500 tokens (35,837 bytes across 2 files); approximate tokens of output written: ~4,000 tokens (16,763 bytes across 2 inventory cards).
