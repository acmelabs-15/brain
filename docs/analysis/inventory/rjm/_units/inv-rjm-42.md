---
unit: inv-rjm-42
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-42

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-097-zero-tool-use-hooks.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-097-zero-tool-use-hooks.md` (15944 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-42.md`

## Scripts executed
- `/Users/peterkloss/.local/bin/uv run python scripts/validation/validate_hook_anchoring.py` (exit 0)
- `/Users/peterkloss/.local/bin/uv run pytest tests/hooks/test_adr_hook_claims.py` (exit 0, 384 passed)
- `/Users/peterkloss/.local/bin/uv run pytest tests/hooks/test_zero_tool_use_hooks.py` (exit 0, 27 passed)
- `/Users/peterkloss/.local/bin/uv run pytest tests/ci/test_installed_plugin_zero_hook_state.py` (exit 0, 9 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-097 represents the culmination of hook dispatch and ROI governance across rjm: it succeeds ADR-068 (consolidated dispatcher), ADR-071 (runtime contracts), ADR-082 (grouped in-process dispatch), ADR-084 (vendored ROI bar), and ADR-085 (permission surface asymmetry), retiring all 5 live tool-use hooks and the generated Copilot dispatcher machinery.
- Note that ADR-068, ADR-071, and .claude/rules/tool-use-hook-bar.md contain dated status/amendment headers that cite ADR-097 as the authoritative basis for treating live tool-use hook contracts as historical/retired.
- The re-accretion ratchet specified in ADR-097 as "Direct, not yet written" was implemented on the branch at `tests/hooks/test_zero_tool_use_hooks.py`.

## Blocked or uncertain
none

## Time and size
Source read: 34748 bytes (~8700 tokens); outputs written: ~18000 bytes (~4500 tokens).
