---
unit: inv-rjm-185
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-185

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/run_with_retry.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/safe_push_pr_branch.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/set_item_milestone.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/test_rate_limit.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/scripts/validate_investigation_claims.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/workflows/drift-detection.yml`

## Outputs produced
- `docs/analysis/inventory/rjm/github-scripts-run-with-retry-py.md` (5355 bytes)
- `docs/analysis/inventory/rjm/github-scripts-safe-push-pr-branch-py.md` (7131 bytes)
- `docs/analysis/inventory/rjm/github-scripts-set-item-milestone-py.md` (5965 bytes)
- `docs/analysis/inventory/rjm/github-scripts-test-rate-limit-py.md` (4609 bytes)
- `docs/analysis/inventory/rjm/github-scripts-validate-investigation-claims-py.md` (7534 bytes)
- `docs/analysis/inventory/rjm/github-workflows-drift-detection-yml.md` (3766 bytes)

## Scripts executed
- `.github/scripts/run_with_retry.py`: `python3 sources/rjm/.github/scripts/run_with_retry.py -- echo "hello"`, exit code 0; `python3 sources/rjm/.github/scripts/run_with_retry.py -- python3 -c "import sys; sys.exit(2)"`, exit code 2; `python3 sources/rjm/.github/scripts/run_with_retry.py --max-retries 1 --retry-delay 1 -- python3 -c "import sys; sys.exit(3)"`, exit code 3
- `.github/scripts/safe_push_pr_branch.py`: `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --help`, exit code 0; `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --branch non-existent-branch`, exit code 1; `python3 sources/rjm/.github/scripts/safe_push_pr_branch.py --branch v2 --force-with-lease`, exit code 2
- `.github/scripts/set_item_milestone.py`: `python3 sources/rjm/.github/scripts/set_item_milestone.py --help`, exit code 0; `python3 sources/rjm/.github/scripts/set_item_milestone.py`, exit code 2; `python3 sources/rjm/.github/scripts/set_item_milestone.py --item-type pr --item-number 1`, exit code 3
- `.github/scripts/test_rate_limit.py`: `python3 sources/rjm/.github/scripts/test_rate_limit.py --help`, exit code 0; `python3 sources/rjm/.github/scripts/test_rate_limit.py`, exit code 0; `python3 sources/rjm/.github/scripts/test_rate_limit.py --core-threshold 10000`, exit code 1
- `.github/scripts/validate_investigation_claims.py`: `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --help`, exit code 0; `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --mode session --session-dir sources/rjm/.agents/sessions`, exit code 0; `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --mode session --session-dir /nonexistent/sessions`, exit code 2; `python3 sources/rjm/.github/scripts/validate_investigation_claims.py --base-ref=-invalid`, exit code 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-185 covers GitHub Actions automation scripts and workflow configuration in `rjm`:
  - `run_with_retry.py`: Implements ADR-035 exit code retry semantics (exit 0=success, exit 1=logic passthrough, exit 2=config error fail-fast, exit 3=transient external error retried then passed through, exit 4=auth error fail-fast).
  - `safe_push_pr_branch.py`: Implements issue #3412 safe git push mechanics; requires matching local branch, pushes explicit `<sha>:refs/heads/<branch>` refspec, checks porcelain output for single ref update, queries `ls-remote` to confirm arrival, and guards `--force-with-lease` with mandatory `--expected-remote-sha`.
  - `set_item_milestone.py`: Implements semantic version milestone auto-detection (`v?X.Y.Z`) and assignment for PRs/issues via `gh` CLI; skips if milestone is already set. Supports `--missing-milestone-ok` to treat absence as success.
  - `test_rate_limit.py`: Implements ADR-006 thin workflow gate; wraps `check_workflow_rate_limit` from `scripts.github_core.api`, emits markdown status table to `$GITHUB_STEP_SUMMARY` and outputs `core_remaining` to `$GITHUB_OUTPUT`. Halts with exit 1 if status is not verified healthy.
  - `validate_investigation_claims.py`: Implements CI backstop for ADR-034 (`SKIPPED: investigation-only`). Audits session log files and git diffs against the investigation allowlist (`.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/security/`, `.agents/critique/`). In session mode, violations fail with exit 1; in diff mode, it records violations advisably and exits 0. Includes CWE-78 argument injection protection on git refs.
  - `drift-detection.yml`: Implements weekly Monday 09:00 UTC drift detection workflow running on ARM runners (`ubuntu-24.04-arm`, ADR-025). Executes `drift_run_detection.py`, emits `K2` kill-criteria telemetry event (REQ-008-09), uploads artifact, and manages issue tracking under label `drift-detected`.
- None of this unit's files appear in `docs/analysis/manifest/rjm-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,400 tokens (49,541 bytes across 6 files, 1,448 lines); approximate tokens of output written: ~8,600 tokens (34,360 bytes across 6 cards, 4,200 bytes for unit report).
