---
unit: inv-rjm-28
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-28

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-071-plugin-hook-runtime-contract-verification-md.md` (18770 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-28.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-071 serves as the foundational authority for plugin hook runtime contract verification across harnesses (Claude Code and GitHub Copilot CLI), reversing historical blanket fail-open defaults to a binding fail-closed-and-loud rule (Decision item 5) with plugin-root anchoring (Decision item 1).
- It is closely coupled with ADR-066 (which reconciles prior fail-open ADRs 008, 033, 035 to the ADR-071 rule), ADR-068 (consolidated hook dispatcher), ADR-084 (vendored hook ROI bar), ADR-085 (cross-harness permission surface asymmetry), and ADR-097 (which retired all tool-use runtime contracts while preserving Decision item 1).
- It established Failure Mode FM #11 in `.agents/governance/FAILURE-MODES.md` ("Customer-facing generated artifact shipped without runtime verification") and rules in `.claude/rules/generated-artifacts.md`.
- Defect identified: References `PROTOCOL-ANTIPATTERNS.md` on line 744 without path (file is located at `.agents/governance/PROTOCOL-ANTIPATTERNS.md`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,130 tokens (48,525 bytes across 1 file).
Approximate tokens of output written: ~4,700 tokens (~18,770 bytes for inventory card + unit report).
