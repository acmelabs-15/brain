---
unit: inv-rjm-34
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-34

## Files assigned
- [x] `.agents/architecture/ADR-083-copilot-dogfood-surface-separation.md` (27155 bytes, 431 lines, sha256 2e49561b59500f4a)
- [x] `.agents/architecture/ADR-084-vendored-hook-roi-bar.md` (18236 bytes, 322 lines, sha256 f803b402a803541a)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-083-copilot-dogfood-surface-separation-md.md (8362 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-084-vendored-hook-roi-bar-md.md (6748 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-34.md (2635 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-083 establishes the `surface: ship|internal` boundary and Copilot dogfood install mechanism (`scripts/dev/dogfood_copilot_plugin.py --install`), and designs the `src/copilot-cli-internal` overlay plugin with a kill-criterion deferral. It interfaces directly with ADR-079 (version-bump rules), ADR-042 (Python migration), and ADR-092 (which later retired the manifest `version` field in favor of content fingerprints). Note the missing path defect: `build/scripts/generate_agents.py` referenced in ADR-083:306 does not exist on disk.
- ADR-084 establishes the six-rule ROI bar for vendored hooks, eliminating dead/self-neutering hooks from customer plugins and restricting per-call events (`PreToolUse`, `PostToolUse`, `PermissionRequest`, `PostToolUseFailure`). It provides the policy foundation applied across issue #3197, issue #5154, ADR-085 (which cites ADR-084's security carve-out), ADR-086 (moving local enforcement to Lefthook), and ADR-097 (retiring remaining tool-use hooks). Note that ADR-084:115-119 documents a doc-drift where a promised dedicated CI job was replaced by pytest enforcement in `tests/hooks/test_dispatch_groups_parity.py`.
- Both ADRs represent the crucial transition in `rjm` from internal-developer-only Claude-centric workflows toward disciplined, multi-platform marketplace packaging where customer surfaces are protected from internal ceremony, dead code, and latency overheads.

## Blocked or uncertain
none

## Time and size
Source read: 45391 bytes (~11350 tokens). Output written: ~17560 bytes (~4400 tokens).
