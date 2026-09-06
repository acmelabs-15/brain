---
unit: inv-rjm-243
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-243

## Files assigned
- [x] sources/rjm/scripts/github_core/recovery_manifest.py
- [x] sources/rjm/scripts/github_core/repo.py
- [x] sources/rjm/scripts/github_core/review_threads.py
- [x] sources/rjm/scripts/github_core/runs_file.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-github-core-recovery-manifest-py.md (7798 bytes)
- docs/analysis/inventory/rjm/scripts-github-core-repo-py.md (5862 bytes)
- docs/analysis/inventory/rjm/scripts-github-core-review-threads-py.md (7665 bytes)
- docs/analysis/inventory/rjm/scripts-github-core-runs-file-py.md (5302 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-243.md (3823 bytes)

## Scripts executed
- scripts/github_core/repo.py: `python3 sources/rjm/scripts/github_core/repo.py`, exit code 0
- scripts/github_core/repo.py: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.repo import resolve_repo_root, get_repo_root; print(resolve_repo_root()); print(get_repo_root())"`, exit code 0
- scripts/github_core/runs_file.py: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/runs_file.py`, exit code 0
- scripts/github_core/runs_file.py: `sources/rjm/.venv/bin/python -c "from scripts.github_core.runs_file import string_list; print(string_list(['build', 'test'], 'contexts'))"`, exit code 0
- scripts/github_core/review_threads.py: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/review_threads.py`, exit code 0
- scripts/github_core/review_threads.py: `sources/rjm/.venv/bin/python -c "from scripts.github_core.review_threads import count_unresolved_threads, transform_review_thread; print('count:', count_unresolved_threads([{'isResolved': False}, {'isResolved': True}])); print('transformed:', transform_review_thread({'id': 't1', 'isResolved': False}))"`, exit code 0
- scripts/github_core/recovery_manifest.py: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/recovery_manifest.py`, exit code 0
- scripts/github_core/recovery_manifest.py: `sources/rjm/.venv/bin/python -c "from scripts.github_core.recovery_manifest import MANIFEST_VERSION, active_statuses, WorkflowRun, dedupe_runs; print('version:', MANIFEST_VERSION); print('statuses:', active_statuses()); r = WorkflowRun(1, 'w', 10, 'main', 'push', 'queued', ()); print('dedupe:', len(dedupe_runs([r, r])))"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/github_core/recovery_manifest.py` and `scripts/github_core/runs_file.py` coordinate directly with `scripts/bulk_cancel_guard.py` (inv-rjm-241) and `scripts/github_core/workflow_event_subscriptions.py` (inv-rjm-244).
- `scripts/github_core/repo.py` is widely shared by security invocation gates (`scripts/security/invoke_precommit_security.py`), traceability tools (`scripts/validation/traceability.py`), PR creation automation (`scripts/new_validated_pr.py`), and path traversal sanitization in `scripts/github_core/validation.py` (inv-rjm-244).
- `scripts/github_core/review_threads.py` was extracted from `scripts/github_core/api.py` (Issue #1910) to centralize unresolved review thread queries and canonical data transformation across PR merge gating and review response scripts.

## Blocked or uncertain
none

## Time and size
- Source read: 46,430 bytes (~11,608 tokens) across 4 assigned files
- Output written: 26,627 bytes (~6,657 tokens) across 4 inventory cards and 1 unit report
