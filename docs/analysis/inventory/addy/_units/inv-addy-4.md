---
unit: inv-addy-4
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-4

## Files assigned
- [x] sources/addy/commands/planning.toml
- [x] sources/addy/commands/review.toml
- [x] sources/addy/commands/ship.toml
- [x] sources/addy/commands/spec.toml
- [x] sources/addy/commands/test.toml
- [x] sources/addy/commands/webperf.toml
- [x] sources/addy/CONTRIBUTING.md
- [x] sources/addy/docs/adoption-guide.md
- [x] sources/addy/docs/agents.md
- [x] sources/addy/docs/antigravity-setup.md
- [x] sources/addy/docs/codex-setup.md
- [x] sources/addy/docs/commandcode-setup.md

## Outputs produced
- docs/analysis/inventory/addy/commands-planning-toml.md (2070 bytes)
- docs/analysis/inventory/addy/commands-review-toml.md (2563 bytes)
- docs/analysis/inventory/addy/commands-ship-toml.md (3334 bytes)
- docs/analysis/inventory/addy/commands-spec-toml.md (1842 bytes)
- docs/analysis/inventory/addy/commands-test-toml.md (2002 bytes)
- docs/analysis/inventory/addy/commands-webperf-toml.md (2373 bytes)
- docs/analysis/inventory/addy/contributing-md.md (3671 bytes)
- docs/analysis/inventory/addy/docs-adoption-guide-md.md (5821 bytes)
- docs/analysis/inventory/addy/docs-agents-md.md (2828 bytes)
- docs/analysis/inventory/addy/docs-antigravity-setup-md.md (3675 bytes)
- docs/analysis/inventory/addy/docs-codex-setup-md.md (1714 bytes)
- docs/analysis/inventory/addy/docs-commandcode-setup-md.md (1531 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-ship-toml--commands-ship-toml.md (2833 bytes)
- docs/analysis/inventory/addy/_divergence/gemini-commands-webperf-toml--commands-webperf-toml.md (2229 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-4.md (3286 bytes)

## Scripts executed
- hooks/session-start-test.sh, bash hooks/session-start-test.sh, 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Direct cross-file contradiction observed between CONTRIBUTING.md line 71 (forbids instructing users to copy AGENTS.md into external projects) and docs/antigravity-setup.md line 107 (instructs users to copy or link AGENTS.md into workspace root).
- hooks/session-start-test.sh documented in CONTRIBUTING.md fails with exit code 1 on the default branch because hooks/session-start.sh does not output the required priority field.
- EXACT aliases handled: commands/planning.toml satisfies .gemini/commands/planning.toml; commands/review.toml satisfies .gemini/commands/review.toml; commands/spec.toml satisfies .gemini/commands/spec.toml; commands/test.toml satisfies .gemini/commands/test.toml.
- VARIANT pairs handled: V3 (.gemini/commands/ship.toml ↔ commands/ship.toml) and V4 (.gemini/commands/webperf.toml ↔ commands/webperf.toml) documented with divergence cards matching ledger diff hunks.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,500 tokens (44,438 bytes). Approximate tokens of output written: ~10,500 tokens (41,000 bytes).
