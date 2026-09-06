---
package: rjm
path: scripts/github_core/pr_merge_state.py
type: script
bytes: 9570
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/pr_merge_state.py, sha256: 11604a6b3e6c7d85f97f123b4a945a8b18465811c07e89316eee03a3d957afda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/pr_merge_state.py

## Purpose — required, verbatim
> "Authoritative merge-state reader for a single pull request (issue #4951)." — scripts/github_core/pr_merge_state.py:1

## Design intent — required
Provides an authoritative GraphQL reader to determine whether a pull request has merged, implementing a strict four-state model (MERGED, UNMERGED, NOT_FOUND, PROBE_FAILED). It prevents false negative merge assertions caused by collapsing transport or authentication failures into "unmerged", resolving the defect from issue #4951 where transient API failures aborted valid issue closures by falsely reporting merged PRs as unmerged.

## Phase — required
cross-phase

## Inputs — required
- Repository owner (`owner: str`), repository name (`repo: str`), and PR number (`number: int`) at `scripts/github_core/pr_merge_state.py:224`.
- GraphQL payload from remote GitHub API queried via `gh_graphql` at `scripts/github_core/pr_merge_state.py:247`.

## Outputs — required
- An immutable `PrMergeState` dataclass instance containing status, state, merged_at, merged_by, detail, and exit_code at `scripts/github_core/pr_merge_state.py:113` and `scripts/github_core/pr_merge_state.py:253`.

## Invokes — required
- script api — scripts/github_core/pr_merge_state.py:78

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PR_MERGE_STATE_QUERY` — scripts/github_core/pr_merge_state.py:84 — defined here
- `_DETAIL_LIMIT` — scripts/github_core/pr_merge_state.py:100 — defined here
- `PrMergeStatus` — scripts/github_core/pr_merge_state.py:103 — defined here
- `PrMergeState` — scripts/github_core/pr_merge_state.py:113 — defined here
- `_probe_failed` — scripts/github_core/pr_merge_state.py:151 — defined here
- `_merged_by_login` — scripts/github_core/pr_merge_state.py:166 — defined here
- `_classify` — scripts/github_core/pr_merge_state.py:175 — defined here
- `read_pr_merge_state` — scripts/github_core/pr_merge_state.py:224 — defined here

## Structure
none (python module; query: PR_MERGE_STATE_QUERY; enum: PrMergeStatus; dataclass: PrMergeState; functions: _probe_failed, _merged_by_login, _classify, read_pr_merge_state)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/pr_merge_state.py`, language: Python 3, lines: 254
- documented invocation: none (library module; functions imported and called by dependent tools)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/pr_merge_state.py`
  abridged stdout: `Traceback (most recent call last): ... ModuleNotFoundError: No module named 'scripts'`
  **actual exit code:** 1
- actual command run (with PYTHONPATH): `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/pr_merge_state.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.pr_merge_state import PrMergeStatus, PrMergeState, _classify; state = _classify('o', 'r', 1, {'repository': {'pullRequest': {'merged': True}}}); print(state.status.value)"`
  abridged stdout: `merged`
  **actual exit code:** 0
- documented exit codes: none (library module) vs. actual exit paths in code:
  - exit 4 (auth failure) or exit 3 (external error) set on `PrMergeState.exit_code`: `scripts/github_core/pr_merge_state.py:163`
  - direct execution without PYTHONPATH fails with `ModuleNotFoundError` (exit 1); execution with PYTHONPATH exits 0
- for validators/gates:
  - can it exit non-zero? no direct sys.exit; sets exit_code 3 or 4 inside state object; direct execution fails if PYTHONPATH not configured
  - does it fail on the source repo's own default branch? fails without PYTHONPATH, succeeds with exit 0 with PYTHONPATH
- does the output match what the documentation claims? yes

## Defects — required
- `script-bug` · scripts/github_core/pr_merge_state.py:78 · Direct execution fails with ModuleNotFoundError because it imports from `scripts.github_core.api` without configuring sys.path.

## Observations
- Evidence-based tri-state logic: handles missing `merged` boolean key as `PROBE_FAILED` rather than assuming unmerged, preventing unverified assertions.
- Subprocess safety: catches `subprocess.TimeoutExpired` alongside `RuntimeError` on line 251 to avoid unhandled timeouts exiting with code 1.
- Context cost: 9,570 bytes, approximately 2,393 tokens.
