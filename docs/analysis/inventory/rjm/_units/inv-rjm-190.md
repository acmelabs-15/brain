---
unit: inv-rjm-190
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-190

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/codeql-architecture.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/codeql-integration.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/codeql-rollout-checklist.md

## Outputs produced
- docs/analysis/inventory/rjm/docs-codeql-architecture-md.md (10078 bytes)
- docs/analysis/inventory/rjm/docs-codeql-integration-md.md (8839 bytes)
- docs/analysis/inventory/rjm/docs-codeql-rollout-checklist-md.md (9306 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-190.md (4461 bytes)

## Scripts executed
- `.codeql/scripts/test_codeql_config.py`, `python3 .codeql/scripts/test_codeql_config.py --ci`, exit code 0
- `.codeql/scripts/test_codeql_config.py`, `python3 .codeql/scripts/test_codeql_config.py --config-path .github/codeql/codeql-config-quick.yml --ci`, exit code 0
- `.codeql/scripts/test_codeql_rollout.py`, `python3 .codeql/scripts/test_codeql_rollout.py --ci`, exit code 1
- `.codeql/scripts/get_codeql_diagnostics.py`, `python3 .codeql/scripts/get_codeql_diagnostics.py --output-format console`, exit code 1
- `.codeql/scripts/invoke_codeql_scan.py`, `python3 .codeql/scripts/invoke_codeql_scan.py --help`, exit code 0
- `tests/test_*.py`, `uv run pytest tests/test_install_codeql.py tests/test_install_codeql_integration.py tests/test_invoke_codeql_scan_py.py tests/test_test_codeql_config.py tests/test_get_codeql_diagnostics.py tests/test_test_codeql_rollout.py tests/skills/codeql-scan/test_invoke_codeql_scan_skill.py`, exit code 0 (145 passed in 0.53s)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-190` covers the complete set of CodeQL documentation in rjm (`docs/codeql-architecture.md`, `docs/codeql-integration.md`, `docs/codeql-rollout-checklist.md`).
- Sibling units cover CodeQL configuration (`.github/codeql/codeql-config.yml`, `codeql-config-quick.yml`), scripts (`.codeql/scripts/*`), workflows (`.github/workflows/codeql-analysis.yml`, `test-codeql-integration.yml`), Claude Code skill (`.claude/skills/codeql-scan/`), and ADR-041 (`.agents/architecture/ADR-041-codeql-integration.md`, inv-rjm-16).
- Architectural alignment & historical transition:
  - ADR-041 initially specified a 3-tier architecture with an automatic edit-time hook (`.claude/hooks/PostToolUse/invoke_codeql_quick_scan.py`).
  - On 2026-07-21, ADR-041 was formally amended to retire Tier 3 due to negative ROI, execution overhead, and lack of hook registration.
  - The architecture documents in this unit (`codeql-architecture.md`, `codeql-integration.md`, `codeql-rollout-checklist.md`) were overhauled to reflect the two-tier strategy (Tier 1 CI PR gate + Tier 2 on-demand local scan) and the migration to Python per ADR-042.
  - Cross-file defects and drift identified:
    1. `.codeql/scripts/test_codeql_config.py:258` contains a path calculation bug where `repo_root = str(Path(config_path).parent.parent)` resolves `.github/codeql/codeql-config.yml` to `.github` instead of the repository root, resulting in false path warnings for `.claude/skills/` and `.github/workflows/`.
    2. `.codeql/scripts/test_codeql_rollout.py:221` was not updated when Tier 3 was retired; it continues to assert that `PostToolUse hook exists`, causing `test_codeql_rollout.py --ci` to fail with exit code 1 on clean checkouts. This invalidates Step 1 of `codeql-rollout-checklist.md:55`.
    3. Documentation references external GitHub issue `#3219` for deferred portable automatic scanning rebuild.
- Duplication ledger:
  - None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no EXACT aliases, no VARIANT divergence cards).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,200 tokens (48,719 bytes across 3 assigned files) plus ~15,000 tokens of referenced ADRs, scripts, and test files.
- Approximate tokens of output written: ~7,100 tokens across 3 inventory cards plus ~1,000 tokens for this work-unit report.
