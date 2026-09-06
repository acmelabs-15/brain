---
unit: inv-rjm-242
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-242

## Files assigned
- [x] `scripts/github_core/output.py`
- [x] `scripts/github_core/placeholder_identity.py`
- [x] `scripts/github_core/pr_merge_state.py`
- [x] `scripts/github_core/protocol.py`
- [x] `scripts/github_core/pull_request_targets.py`
- [x] `scripts/github_core/rate_limit.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-github-core-output-py.md` (5608 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-placeholder-identity-py.md` (4290 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-pr-merge-state-py.md` (4649 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-protocol-py.md` (3848 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-pull-request-targets-py.md` (5329 bytes)
- `docs/analysis/inventory/rjm/scripts-github-core-rate-limit-py.md` (5842 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-242.md`

## Scripts executed
- `scripts/github_core/output.py`: `python3 sources/rjm/scripts/github_core/output.py`, exit code 0
- `scripts/github_core/output.py` (exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.output import write_skill_output; write_skill_output({'test': 1}, output_format='json')"`, exit code 0
- `scripts/github_core/placeholder_identity.py`: `python3 sources/rjm/scripts/github_core/placeholder_identity.py`, exit code 0
- `scripts/github_core/placeholder_identity.py` (exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.placeholder_identity import is_placeholder_identity, filter_coauthor_trailers; print('check:', is_placeholder_identity('Test', 'test@test.com'), repr(filter_coauthor_trailers('Co-authored-by: Test <test@test.com>')))"`, exit code 0
- `scripts/github_core/pr_merge_state.py`: `python3 sources/rjm/scripts/github_core/pr_merge_state.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts')
- `scripts/github_core/pr_merge_state.py` (with PYTHONPATH): `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/pr_merge_state.py`, exit code 0
- `scripts/github_core/pr_merge_state.py` (exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.pr_merge_state import PrMergeStatus, PrMergeState, _classify; state = _classify('o', 'r', 1, {'repository': {'pullRequest': {'merged': True}}}); print(state.status.value)"`, exit code 0
- `scripts/github_core/protocol.py`: `python3 sources/rjm/scripts/github_core/protocol.py`, exit code 0
- `scripts/github_core/protocol.py` (exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.protocol import GitHubClient; print('protocol:', GitHubClient)"`, exit code 0
- `scripts/github_core/pull_request_targets.py`: `python3 sources/rjm/scripts/github_core/pull_request_targets.py`, exit code 1 (ModuleNotFoundError: No module named 'scripts')
- `scripts/github_core/pull_request_targets.py` (with PYTHONPATH): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 sources/rjm/scripts/github_core/pull_request_targets.py`, exit code 0
- `scripts/github_core/pull_request_targets.py` (exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.pull_request_targets import target_from_pull_request; target = target_from_pull_request({'number': 123, 'head': {'ref': 'feat', 'repo': {'full_name': 'user/repo'}}}); print(target)"`, exit code 0
- `scripts/github_core/rate_limit.py`: `python3 sources/rjm/scripts/github_core/rate_limit.py`, exit code 0
- `scripts/github_core/rate_limit.py` (exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.rate_limit import RateLimitStatus, RateLimitResult; res = RateLimitResult(status=RateLimitStatus.VERIFIED_HEALTHY); print('success:', res.success, res.status)"`, exit code 0
- `scripts/github_core/rate_limit.py` (live check): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.rate_limit import check_workflow_rate_limit; res = check_workflow_rate_limit({'core': 10}); print('res status:', res.status)"`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `output.py`: Serves as the central output envelope formatting engine per ADR-056 and ADR-103, standardizing structured JSON and human-readable output across skill scripts in package `rjm`.
- `placeholder_identity.py`: Central denylist protecting against git identity leakage in worktrees, imported by git hook validation scripts (`check_placeholder_identity.py`, `git_hook_policy.py`).
- `pr_merge_state.py`: Implements 4-state PR merge verification (`MERGED`, `UNMERGED`, `NOT_FOUND`, `PROBE_FAILED`) via GraphQL to prevent false negative assertions caused by transient API failures. Direct execution fails without repo root on PYTHONPATH due to absolute import style.
- `protocol.py`: Structural subtyping protocol `GitHubClient` decoupling scripts from concrete CLI transport (`GhCliClient`).
- `pull_request_targets.py`: PR target enumeration logic extracted from `bulk_cancel_guard.py` to enforce file length ceiling; requires PYTHONPATH and repo venv dependencies (`pyyaml` via transitive imports).
- `rate_limit.py`: Dual-transport preflight gate probing both REST (`/meta`) and GraphQL (`viewer`) endpoints to detect active rate limit refusals even when quota readouts report healthy.

## Blocked or uncertain
none

## Time and size
Approximate source read: 42,501 bytes (~10,625 tokens).
Approximate output written: 32,500 bytes (~8,125 tokens).
