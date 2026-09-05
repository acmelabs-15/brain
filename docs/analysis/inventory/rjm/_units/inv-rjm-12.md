---
unit: inv-rjm-12
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-12

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-031-hybrid-powershell-architecture.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-032-ears-requirements-syntax.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-033-routing-level-enforcement-gates.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-031-hybrid-powershell-architecture-md.md (8299 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-032-ears-requirements-syntax-md.md (7010 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-033-routing-level-enforcement-gates-md.md (11539 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-12.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-031 documents why a proposed hybrid architecture (direct gh CLI calls vs persistent named-pipe daemon) for PowerShell skills was rejected after ADR-042 migrated the repo from PowerShell to Python.
- ADR-032 specifies the EARS requirements syntax standard (Ubiquitous, Event-driven, State-driven, Optional, Unwanted, Complex) adopted for formal specs in Phase 1 Spec Layer. Note that historically ADR-032 collided in number with GitHub Actions Runner Selection before being renumbered to ADR-055 in PR #1604.
- ADR-033 establishes routing-level enforcement gates via Claude Code hooks (PreToolUse) to prevent agent protocol bypass. Its amendments document why dedicated PreToolUse hooks with exit-0 JSON deny mode failed in practice and were retired under the hook ROI reduction program (#3197), shifting enforcement to Lefthook local pre-commit/pre-push hooks and CI validation.

## Blocked or uncertain
none

## Time and size
Source read: 35,446 bytes across 3 files (~8,800 tokens).
Output written: ~28,000 bytes across 4 files (~7,000 tokens).
