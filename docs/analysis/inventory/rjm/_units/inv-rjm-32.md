---
unit: inv-rjm-32
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-32

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-077-flip-stale-contract-tests.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-079-merge-time-plugin-version-bump.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-077-flip-stale-contract-tests-md.md (5017 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-078-autoplan-orchestrator-router-boundary-md.md (6692 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-079-merge-time-plugin-version-bump-md.md (6710 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-32.md (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-077 defines an experimental 90-day testing-rigor rule requiring authors to flip stale assertions when observable contracts change; affects `TESTING-RIGOR.md`, `implementer.shared.md`, and `critic.shared.md`.
- ADR-078 sets the two-layer routing boundary between `autoplan` (front door at skill layer) and `orchestrator` (coordinator at agent layer), documenting that descriptive role metadata confers no invocation authority. It links with issue #5130, ADR-009, ADR-030, and ADR-098 (tier hierarchy retirement).
- ADR-079 provides deep host-freshness analysis comparing Claude Code (SHA fallback) and GitHub Copilot CLI v1.0.69-0 (string inequality without SHA fallback); superseded later by ADR-091 and ADR-092.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12150 tokens (48600 bytes).
Approximate tokens of output written: ~5200 tokens (~20800 bytes).
