---
unit: inv-rjm-13
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-13

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-034-investigation-session-qa-exemption.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-035-exit-code-standardization.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-034-investigation-session-qa-exemption-md.md` (12062 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-035-exit-code-standardization-md.md` (12077 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-13 inventories two architectural governance records in the `rjm` package: ADR-034 (Investigation Session QA Exemption) and ADR-035 (Exit Code Standardization).
- ADR-034 defines the `SKIPPED: investigation-only` QA validation exemption and its staged-file allowlist guardrails (8 patterns codified in `scripts/modules/investigation_allowlist.py`), governing session lifecycle compliance in `SESSION-PROTOCOL.md` and `src/copilot-cli/skills/ai-agents-change-control/`.
- ADR-035 defines the repository-wide POSIX exit code contract (0=success, 1=logic error, 2=config error, 3=external error, 4=auth error, 5-99=reserved, 100+=script-specific) widely cited across validation scripts, generators, and test suites. It additionally defines hook blocking discipline across Claude Code and Copilot CLI harnesses, declaring exit 2 as the sole portable blocking mechanism and forbidding hooks from wedging core agentic-loop tools for advisory reasons.
- Neither file appears in `docs/analysis/manifest/rjm-duplicates.md` (no duplication ledger entries; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,400 tokens (44,111 bytes across 2 files; 936 total source lines); approximate tokens of output written: ~6,000 tokens (24,139 bytes across 2 inventory cards).
