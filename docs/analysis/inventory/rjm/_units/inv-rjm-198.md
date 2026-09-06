---
unit: inv-rjm-198
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-198

## Files assigned
- [x] `sources/rjm/scripts/ci/_main_binding.py`
- [x] `sources/rjm/scripts/ci/adr006_run_block_scanner.py`
- [x] `sources/rjm/scripts/ci/adr015_workflow_retention.py`
- [x] `sources/rjm/scripts/ci/apply_ai_conflict_resolution.py`
- [x] `sources/rjm/scripts/ci/artifact_build_context.py`
- [x] `sources/rjm/scripts/ci/artifact_collect.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci--main-binding-py.md` (4496 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-adr006-run-block-scanner-py.md` (5806 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-adr015-workflow-retention-py.md` (5038 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-apply-ai-conflict-resolution-py.md` (5916 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-artifact-build-context-py.md` (4992 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-artifact-collect-py.md` (3961 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-198.md`

## Scripts executed
- `sources/rjm/scripts/ci/_main_binding.py`: `python3 sources/rjm/scripts/ci/_main_binding.py`, exit code 0
- `sources/rjm/scripts/ci/adr006_run_block_scanner.py`: `python3 sources/rjm/scripts/ci/adr006_run_block_scanner.py --root sources/rjm`, exit code 0; `python3 sources/rjm/scripts/ci/adr006_run_block_scanner.py --root sources/rjm --exact 1`, exit code 1; `python3 sources/rjm/scripts/ci/adr006_run_block_scanner.py --max 1 --exact 1`, exit code 2
- `sources/rjm/scripts/ci/adr015_workflow_retention.py`: `python3 sources/rjm/scripts/ci/adr015_workflow_retention.py --workflows-dir sources/rjm/.github/workflows`, exit code 0; `python3 sources/rjm/scripts/ci/adr015_workflow_retention.py --workflows-dir /nonexistent`, exit code 2
- `sources/rjm/scripts/ci/apply_ai_conflict_resolution.py`: `python3 sources/rjm/scripts/ci/apply_ai_conflict_resolution.py`, exit code 2; `HEAD_REF=test BASE_REF=main python3 sources/rjm/scripts/ci/apply_ai_conflict_resolution.py`, exit code 1
- `sources/rjm/scripts/ci/artifact_build_context.py`: `python3 sources/rjm/scripts/ci/artifact_build_context.py`, exit code 1; tested with mock artifact list file, exit code 0
- `sources/rjm/scripts/ci/artifact_collect.py`: `python3 sources/rjm/scripts/ci/artifact_collect.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/ci/_main_binding.py` is an internal helper imported by `scripts/ci/cli_exit_contract_coverage.py:229` (in unit `inv-rjm-199`). It has no independent CLI entry point.
- `scripts/ci/apply_ai_conflict_resolution.py` references `.trusted-helper/.github/scripts/safe_push_pr_branch.py` at line 28; that helper script is not present in the static repository checkout and is checked out dynamically at CI runtime.
- `scripts/ci/artifact_collect.py` is explicitly cited by `scripts/bulk_cancel_guard.py:93` in unit `inv-rjm-197`.
- Several scripts in this unit (`adr006_run_block_scanner.py`, `adr015_workflow_retention.py`, `apply_ai_conflict_resolution.py`, `artifact_build_context.py`) are invoked by GitHub Actions workflows under `.github/workflows/` (which are out-of-scope for the rjm manifest per METHOD §1.2), making them orphans from the perspective of in-scope file reachability.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,500 tokens (49,712 bytes across 6 Python files)
- Approximate tokens of output written: ~8,000 tokens (30,209 bytes across 6 cards + unit report)
