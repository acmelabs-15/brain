---
unit: inv-rjm-211
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-211

## Files assigned
- [x] `sources/rjm/scripts/ci/verify_codeql_sarif_structure.py`
- [x] `sources/rjm/scripts/ci/verify_github_auth.py`
- [x] `sources/rjm/scripts/ci/verify_npm_package_metadata.py`
- [x] `sources/rjm/scripts/ci/verify_npm_published.py`
- [x] `sources/rjm/scripts/ci/write_copilot_synthesis_summary.py`
- [x] `sources/rjm/scripts/ci/write_drift_job_summary.py`
- [x] `sources/rjm/scripts/ci/write_metrics_threshold_summary.py`
- [x] `sources/rjm/scripts/ci/write_pr_discovery_summary.py`
- [x] `sources/rjm/scripts/ci/write_pr_maintenance_summary.py`
- [x] `sources/rjm/scripts/ci/write_synthesis_sweep_summary.py`
- [x] `sources/rjm/scripts/CLAUDE.md`
- [x] `sources/rjm/scripts/cli_exec.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-verify-codeql-sarif-structure-py.md` (4794 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-verify-github-auth-py.md` (5350 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-verify-npm-package-metadata-py.md` (4779 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-verify-npm-published-py.md` (5023 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-copilot-synthesis-summary-py.md` (4497 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-drift-job-summary-py.md` (5160 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-metrics-threshold-summary-py.md` (5073 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-pr-discovery-summary-py.md` (3950 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-pr-maintenance-summary-py.md` (4514 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-write-synthesis-sweep-summary-py.md` (4099 bytes)
- `docs/analysis/inventory/rjm/scripts-claude-md.md` (2239 bytes)
- `docs/analysis/inventory/rjm/scripts-cli-exec-py.md` (3675 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-211.md` (unit report)

## Scripts executed
- `sources/rjm/scripts/ci/verify_codeql_sarif_structure.py`: `python3 sources/rjm/scripts/ci/verify_codeql_sarif_structure.py --results-dir sources/rjm/.codeql/results`, exit code 1
- `sources/rjm/scripts/ci/verify_github_auth.py`: `python3 sources/rjm/scripts/ci/verify_github_auth.py`, exit code 0
- `sources/rjm/scripts/ci/verify_npm_package_metadata.py`: `python3 sources/rjm/scripts/ci/verify_npm_package_metadata.py --package-dir sources/rjm/packages/ai-agents-cli`, exit code 1
- `sources/rjm/scripts/ci/verify_npm_published.py`: `python3 sources/rjm/scripts/ci/verify_npm_published.py --package-dir sources/rjm`, exit code 1
- `sources/rjm/scripts/ci/write_copilot_synthesis_summary.py`: `ISSUE_NUMBER=42 python3 sources/rjm/scripts/ci/write_copilot_synthesis_summary.py`, exit code 0
- `sources/rjm/scripts/ci/write_drift_job_summary.py`: `python3 sources/rjm/scripts/ci/write_drift_job_summary.py`, exit code 0
- `sources/rjm/scripts/ci/write_metrics_threshold_summary.py`: `CHECK_COVERAGE=60.0 CHECK_INFRA_RATE=100.0 python3 sources/rjm/scripts/ci/write_metrics_threshold_summary.py`, exit code 0
- `sources/rjm/scripts/ci/write_pr_discovery_summary.py`: `python3 sources/rjm/scripts/ci/write_pr_discovery_summary.py`, exit code 2
- `sources/rjm/scripts/ci/write_pr_maintenance_summary.py`: `python3 sources/rjm/scripts/ci/write_pr_maintenance_summary.py`, exit code 2
- `sources/rjm/scripts/ci/write_synthesis_sweep_summary.py`: `python3 sources/rjm/scripts/ci/write_synthesis_sweep_summary.py`, exit code 2
- `sources/rjm/scripts/cli_exec.py`: `python3 sources/rjm/scripts/cli_exec.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/CLAUDE.md` is the canonical file for EXACT alias group 5 in `docs/analysis/manifest/rjm-duplicates.md`, satisfying 9 duplicate alias files across `.claude/agents/`, `.claude/commands/`, `scripts/github_core/`, `scripts/hook_utilities/`, and skill subdirectories.
- `sources/rjm/packages/ai-agents-cli/package.json` lacks `publishConfig`, causing both `verify_npm_package_metadata.py` and `verify_npm_published.py` to fail when executed on the source repo default branch.
- Several summary generation scripts (`write_copilot_synthesis_summary.py`, `write_pr_discovery_summary.py`, `write_pr_maintenance_summary.py`, `write_synthesis_sweep_summary.py`) represent the ADR-006 pattern of replacing inline workflow YAML logic blocks with testable Python scripts.

## Blocked or uncertain
none

## Time and size
- Approximate source read: 30,275 bytes (~7,570 tokens) across 12 files.
- Approximate output written: 53,153 bytes (~13,290 tokens) across 12 cards and unit report.
