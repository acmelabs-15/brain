---
unit: inv-addy-35
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-35

## Files assigned
- [x] sources/addy/references/orchestration-patterns.md
- [x] sources/addy/references/performance-checklist.md
- [x] sources/addy/references/security-checklist.md

## Outputs produced
- docs/analysis/inventory/addy/references-orchestration-patterns-md.md (7585 bytes)
- docs/analysis/inventory/addy/references-performance-checklist-md.md (5132 bytes)
- docs/analysis/inventory/addy/references-security-checklist-md.md (4637 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-35.md (1850 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All three files in this unit are supplementary reference documents living under `sources/addy/references/`.
- `references/orchestration-patterns.md` articulates the fundamental addy architectural rule: the user or slash commands serve as the orchestrator; personas do not invoke other personas. It also maps multi-agent execution onto Claude Code subagents versus Agent Teams.
- `references/performance-checklist.md` and `references/security-checklist.md` provide detailed diagnostic criteria, thresholds, and checklists that supplement core skills (`performance-optimization` and `security-and-hardening`) and review agents (`web-performance-auditor`, `security-auditor`, `code-reviewer`).
- None of the three files appears in the duplication ledger (`docs/analysis/manifest/addy-duplicates.md`).

## Blocked or uncertain
none

## Time and size
Approximate source read: 43,221 bytes (~10,800 tokens).
Approximate output written: ~19,200 bytes (~4,800 tokens).
