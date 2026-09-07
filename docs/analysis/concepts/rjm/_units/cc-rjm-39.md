---
unit: cc-rjm-39
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-39

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-079-merge-time-plugin-version-bump.md
- [x] sources/rjm/.agents/architecture/ADR-083-copilot-dogfood-surface-separation.md
- [x] sources/rjm/.agents/architecture/ADR-084-vendored-hook-roi-bar.md
- [x] sources/rjm/.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md
- [x] sources/rjm/.agents/architecture/ADR-091-post-merge-version-bot.md
- [x] sources/rjm/scripts/dev/dogfood_copilot_plugin.py
- [x] sources/rjm/scripts/hook_utilities/__init__.py
- [x] sources/rjm/scripts/hook_utilities/guards.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-079-merge-time-plugin-version-bump-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-083-copilot-dogfood-surface-separation-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-084-vendored-hook-roi-bar-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-085-cross-harness-permission-surface-asymmetry-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-091-post-merge-version-bot-md.md
- [x] docs/analysis/inventory/rjm/scripts-dev-dogfood-copilot-plugin-py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-guards-py.md

## Outputs produced
- docs/analysis/concepts/rjm/manifest-parity-gate.md (1528 bytes)
- docs/analysis/concepts/rjm/freshness-requirement.md (1418 bytes)
- docs/analysis/concepts/rjm/version-resolution-order.md (1506 bytes)
- docs/analysis/concepts/rjm/silent-staleness-bug.md (1568 bytes)
- docs/analysis/concepts/rjm/merge-resolver-rule.md (1493 bytes)
- docs/analysis/concepts/rjm/recovery-recipe-instruction-file.md (1535 bytes)
- docs/analysis/concepts/rjm/post-merge-auto-bump-bot.md (1775 bytes)
- docs/analysis/concepts/rjm/github-merge-queue.md (1446 bytes)
- docs/analysis/concepts/rjm/git-height.md (1434 bytes)
- docs/analysis/concepts/rjm/content-addressable-freshness-key.md (1413 bytes)
- docs/analysis/concepts/rjm/git-merge-driver.md (1531 bytes)
- docs/analysis/concepts/rjm/semver-2-0-0.md (1270 bytes)
- docs/analysis/concepts/rjm/overlay-decision-gate.md (1428 bytes)
- docs/analysis/concepts/rjm/dogfood-install.md (1714 bytes)
- docs/analysis/concepts/rjm/base-alone-e2e.md (1375 bytes)
- docs/analysis/concepts/rjm/two-plugin-split.md (1374 bytes)
- docs/analysis/concepts/rjm/surface-ship.md (997 bytes)
- docs/analysis/concepts/rjm/surface-internal.md (1036 bytes)
- docs/analysis/concepts/rjm/dogfood-parity.md (1431 bytes)
- docs/analysis/concepts/rjm/internal-overlay.md (1397 bytes)
- docs/analysis/concepts/rjm/surface-ship-internal.md (1039 bytes)
- docs/analysis/concepts/rjm/primary-signal.md (1342 bytes)
- docs/analysis/concepts/rjm/co-primary-signal.md (1296 bytes)
- docs/analysis/concepts/rjm/secondary-soft-signal.md (1382 bytes)
- docs/analysis/concepts/rjm/delete-and-re-home.md (1427 bytes)
- docs/analysis/concepts/rjm/security-carve-out.md (1376 bytes)
- docs/analysis/concepts/rjm/vendored-hook-surface.md (1373 bytes)
- docs/analysis/concepts/rjm/skip-if-consumer-repo.md (1899 bytes)
- docs/analysis/concepts/rjm/lsp-first-enforcement.md (1380 bytes)
- docs/analysis/concepts/rjm/process-spawning-hooks.md (1440 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-39.md (7076 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/manifest-parity-gate.md docs/analysis/concepts/rjm/freshness-requirement.md docs/analysis/concepts/rjm/version-resolution-order.md docs/analysis/concepts/rjm/silent-staleness-bug.md docs/analysis/concepts/rjm/merge-resolver-rule.md docs/analysis/concepts/rjm/recovery-recipe-instruction-file.md docs/analysis/concepts/rjm/post-merge-auto-bump-bot.md docs/analysis/concepts/rjm/github-merge-queue.md docs/analysis/concepts/rjm/git-height.md docs/analysis/concepts/rjm/content-addressable-freshness-key.md docs/analysis/concepts/rjm/git-merge-driver.md docs/analysis/concepts/rjm/semver-2-0-0.md docs/analysis/concepts/rjm/overlay-decision-gate.md docs/analysis/concepts/rjm/dogfood-install.md docs/analysis/concepts/rjm/base-alone-e2e.md docs/analysis/concepts/rjm/two-plugin-split.md docs/analysis/concepts/rjm/surface-ship.md docs/analysis/concepts/rjm/surface-internal.md docs/analysis/concepts/rjm/dogfood-parity.md docs/analysis/concepts/rjm/internal-overlay.md docs/analysis/concepts/rjm/surface-ship-internal.md docs/analysis/concepts/rjm/primary-signal.md docs/analysis/concepts/rjm/co-primary-signal.md docs/analysis/concepts/rjm/secondary-soft-signal.md docs/analysis/concepts/rjm/delete-and-re-home.md docs/analysis/concepts/rjm/security-carve-out.md docs/analysis/concepts/rjm/vendored-hook-surface.md docs/analysis/concepts/rjm/skip-if-consumer-repo.md docs/analysis/concepts/rjm/lsp-first-enforcement.md docs/analysis/concepts/rjm/process-spawning-hooks.md` (exit code 0, 35 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-39 covers 30 concept cards across plugin release engineering (ADR-079, ADR-091), multi-harness dogfooding and surface separation (ADR-083), vendored hook ROI latency thresholds (ADR-084, ADR-085), and hook execution guards (`dogfood_copilot_plugin.py`, `scripts/hook_utilities/guards.py`).
- 3 concepts representing metadata frontmatter tags and schema specifications (`surface: ship`, `surface: internal`, `surface: ship|internal`) were assigned `kind: name-only` per D-023.
- Core architectural patterns and gates were categorized under standard kinds (`manifest-parity-gate`, `overlay-decision-gate`, `security-carve-out` as `gate`; `post-merge-auto-bump-bot` as `role`; `internal-overlay`, `recovery-recipe-instruction-file` as `artifact`; `git-height`, `git-merge-driver`, `dogfood-install`, `base-alone-e2e`, `primary-signal`, `co-primary-signal`, `secondary-soft-signal`, `skip_if_consumer_repo` as `technique`; `github-merge-queue`, `version-resolution-order`, `semver-2-0-0` as `reference`; and remaining concepts as `pattern`).
- Multi-occurrence concepts (`post-merge-auto-bump-bot` across ADR-079 and ADR-091; `dogfood-install` across ADR-083 and `dogfood_copilot_plugin.py`; `skip_if_consumer_repo` across ADR-084, ADR-085, `__init__.py`, and `guards.py`) have all occurrences recorded in their `Where used` tables with full role and usage annotations.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~43,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
