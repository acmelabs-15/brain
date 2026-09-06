---
unit: inv-rjm-244
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-244

## Files assigned
- [x] `sources/rjm/scripts/github_core/validation.py`
- [x] `sources/rjm/scripts/github_core/workflow_event_subscriptions.py`
- [x] `sources/rjm/scripts/github_core/workflow_provenance.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-github-core-validation-py.md` (6423 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-workflow-event-subscriptions-py.md` (7774 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-workflow-provenance-py.md` (5823 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-244.md` (3359 bytes)

## Scripts executed
- `scripts/github_core/validation.py`, `python3 sources/rjm/scripts/github_core/validation.py`, 0
- `scripts/github_core/validation.py`, `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.validation import is_github_name_valid, is_safe_file_path; print('valid:', is_github_name_valid('octocat', 'owner'), is_safe_file_path('.'))"`, 0
- `scripts/github_core/workflow_event_subscriptions.py`, `python3 sources/rjm/scripts/github_core/workflow_event_subscriptions.py`, 1 (ModuleNotFoundError: No module named 'yaml')
- `scripts/github_core/workflow_event_subscriptions.py`, `uv run --directory sources/rjm python scripts/github_core/workflow_event_subscriptions.py`, 0
- `scripts/github_core/workflow_event_subscriptions.py`, `uv run --directory sources/rjm python -c "from scripts.github_core.workflow_event_subscriptions import DEFAULT_PULL_REQUEST_TYPES, RECOVERY_EVENTS; print('defaults:', sorted(list(DEFAULT_PULL_REQUEST_TYPES)), 'recovery:', sorted(list(RECOVERY_EVENTS)))"`, 0
- `scripts/github_core/workflow_provenance.py`, `python3 sources/rjm/scripts/github_core/workflow_provenance.py`, 1 (ModuleNotFoundError: No module named 'yaml')
- `scripts/github_core/workflow_provenance.py`, `uv run --directory sources/rjm python scripts/github_core/workflow_provenance.py`, 0
- `scripts/github_core/workflow_provenance.py`, `uv run --directory sources/rjm python -c "from scripts.github_core.workflow_provenance import merge_ref; print('merge_ref(4835):', merge_ref(4835))"`, 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Both `workflow_event_subscriptions.py` and `workflow_provenance.py` were introduced to resolve incident #4835 and protect bulk run cancellations orchestrated by `scripts/bulk_cancel_guard.py` (unit `inv-rjm-197`).
- `workflow_provenance.py` imports `scripts.github_core.protocol` and `scripts.github_core.recovery_manifest` (unit `inv-rjm-243`).
- `validation.py` imports `scripts.github_core.repo` and `scripts.github_core.api` (unit `inv-rjm-242`).
- No cross-unit defects found; all module interfaces integrate cleanly.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,500 tokens (38,050 bytes across 3 files).
Approximate tokens of output written: ~5,500 tokens (~22,000 bytes across 3 inventory cards and unit report).
