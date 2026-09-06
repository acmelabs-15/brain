---
unit: inv-rjm-243
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-243

## Files assigned
- [x] `sources/rjm/scripts/github_core/recovery_manifest.py`
- [x] `sources/rjm/scripts/github_core/repo.py`
- [x] `sources/rjm/scripts/github_core/review_threads.py`
- [x] `sources/rjm/scripts/github_core/runs_file.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-github-core-recovery-manifest-py.md` (7796 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-repo-py.md` (4512 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-review-threads-py.md` (6737 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-runs-file-py.md` (5046 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-243.md` (2780 bytes)

## Scripts executed
- `scripts/github_core/recovery_manifest.py`: `python3 sources/rjm/scripts/github_core/recovery_manifest.py`, exit code 1 (`ModuleNotFoundError: No module named 'scripts'`)
- `scripts/github_core/recovery_manifest.py`: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/recovery_manifest.py`, exit code 0
- `scripts/github_core/repo.py`: `python3 sources/rjm/scripts/github_core/repo.py`, exit code 0
- `scripts/github_core/repo.py`: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/repo.py`, exit code 0
- `scripts/github_core/review_threads.py`: `python3 sources/rjm/scripts/github_core/review_threads.py`, exit code 1 (`ModuleNotFoundError: No module named 'scripts'`)
- `scripts/github_core/review_threads.py`: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/review_threads.py`, exit code 0
- `scripts/github_core/runs_file.py`: `python3 sources/rjm/scripts/github_core/runs_file.py`, exit code 1 (`ModuleNotFoundError: No module named 'scripts'`)
- `scripts/github_core/runs_file.py`: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/runs_file.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 4 files are Python library modules located in `scripts/github_core/`. None contain a standalone `if __name__ == "__main__":` entrypoint.
- `scripts/github_core/recovery_manifest.py` and `scripts/github_core/runs_file.py` implement the core fail-closed planning and safe deserialization logic for `scripts/bulk_cancel_guard.py` (Incident #4835).
- `scripts/github_core/review_threads.py` was extracted from `scripts/github_core/api.py` (Issue #1910) and is re-exported by `api.py` for backward compatibility. It enforces DRY review thread shaping and protects against pagination silent-truncation (PR #1887).
- `scripts/github_core/repo.py` resolves repo/worktree roots distinguishing between non-repo directories and git failures, which security gates (`scripts/github_core/validation.py`, `scripts/validation/traceability.py`) rely upon for fail-closed checks.
- Addressed Phase 1V finding in `docs/analysis/inventory/rjm/_verification.md`: `verified: 2026-09-06 quote-check+coverage` is included in all cards, specifically `scripts-github-core-recovery-manifest-py.md`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 46,430 bytes (~11,600 tokens); output written: 26,871 bytes (~6,700 tokens).
