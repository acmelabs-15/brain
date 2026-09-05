---
unit: inv-rjm-22
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-22

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-060-rework-warning-session-log-persistence.md (6858 bytes) — read in full
- [x] sources/rjm/.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md (20444 bytes) — read in full

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-060-rework-warning-session-log-persistence-md.md (8474 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-061-hook-matcher-shims-delegate-pattern-md.md (12620 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-22.md (1966 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-060 governs the addition of `protocolCompliance.sessionEnd.reworkWarning.Evidence` to the session log JSON schema, adhering to DDIA backward compatibility principles. Downstream units should note that `complete_session_log.py`, which originally wrote this field, was later removed when the `session-end` skill was retired.
- ADR-061 documents a proposal to replace inline-body hook shims with delegate shims, which was withdrawn/rejected following a 6-agent critique debate citing premature abstraction. It is retained as institutional memory and referenced as architectural precedent in ADR-062 (inv-rjm-23) and ADR-068.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,825 tokens (27,302 bytes across 2 files).
Approximate tokens of output written: ~5,250 tokens (22,988 bytes across 2 inventory cards and 1 unit report).
