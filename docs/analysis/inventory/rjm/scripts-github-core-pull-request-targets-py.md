---
package: rjm
path: scripts/github_core/pull_request_targets.py
type: script
bytes: 4531
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/pull_request_targets.py, sha256: b77350e73d1b4850cd60902799c536ed7abc7caf2899059daf667c81687fe500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/pull_request_targets.py

## Purpose — required, verbatim
> "Discover the pull requests a bulk cancellation will enumerate runs for." — scripts/github_core/pull_request_targets.py:1

## Design intent — required
Extracts and pages pull request targets for bulk workflow run operations, keeping scripts/bulk_cancel_guard.py under its 500-line ceiling (issue #4835). It resolves each pull request into a PullRequestTarget with verified head repository identification to prevent cross-fork branch collisions where two forks share a branch name, safely handling URL quoting and pagination bounds.

## Phase — required
cross-phase

## Inputs — required
- Pull request payload mappings (`payload: Mapping[str, Any]`) at `scripts/github_core/pull_request_targets.py:35`.
- Conforming `GitHubClient` instance (`client: GitHubClient`) at `scripts/github_core/pull_request_targets.py:65`, `scripts/github_core/pull_request_targets.py:86`, and `scripts/github_core/pull_request_targets.py:107`.
- Repository name string (`repository: str`) and base branch ref string (`base: str`) at `scripts/github_core/pull_request_targets.py:65`.
- Sequence of integer PR numbers (`pr_numbers: Sequence[int]`) at `scripts/github_core/pull_request_targets.py:107`.

## Outputs — required
- `PullRequestTarget` dataclass instance from `target_from_pull_request` at `scripts/github_core/pull_request_targets.py:59`.
- List of `PullRequestTarget` instances from `open_pull_request_targets` and `pull_request_targets` at `scripts/github_core/pull_request_targets.py:80` and `scripts/github_core/pull_request_targets.py:109`.
- List of raw dictionary items from `iter_paginated_list` at `scripts/github_core/pull_request_targets.py:86`.

## Invokes — required
- script protocol — scripts/github_core/pull_request_targets.py:20
- script workflow_runs — scripts/github_core/pull_request_targets.py:21

## Invoked by — required
- script pull_request_targets — scripts/bulk_cancel_guard.py:59

## Concepts named — required, verbatim
- `_MAX_LIST_PAGES` — scripts/github_core/pull_request_targets.py:32 — defined here
- `target_from_pull_request` — scripts/github_core/pull_request_targets.py:35 — defined here
- `open_pull_request_targets` — scripts/github_core/pull_request_targets.py:64 — defined here
- `iter_paginated_list` — scripts/github_core/pull_request_targets.py:86 — defined here
- `pull_request_targets` — scripts/github_core/pull_request_targets.py:106 — defined here

## Structure
none (python module; constant: _MAX_LIST_PAGES; functions: target_from_pull_request, open_pull_request_targets, iter_paginated_list, pull_request_targets)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/pull_request_targets.py`, language: Python 3, lines: 115
- documented invocation: none (library module; called by bulk_cancel_guard)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/pull_request_targets.py`
  abridged stdout: `Traceback (most recent call last): ... ModuleNotFoundError: No module named 'scripts'`
  **actual exit code:** 1
- actual command run (with PYTHONPATH and venv): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 sources/rjm/scripts/github_core/pull_request_targets.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.pull_request_targets import target_from_pull_request; target = target_from_pull_request({'number': 123, 'head': {'ref': 'feat', 'repo': {'full_name': 'user/repo'}}}); print(target)"`
  abridged stdout: `PullRequestTarget(pr_number=123, branch='feat', head_repository='user/repo')`
  **actual exit code:** 0
- documented exit codes: none (library module) vs. actual exit paths in code:
  - ValueError: `scripts/github_core/pull_request_targets.py:51` (missing number)
  - ValueError: `scripts/github_core/pull_request_targets.py:53` (missing head branch)
  - ValueError: `scripts/github_core/pull_request_targets.py:55` (missing head repository)
  - direct execution without PYTHONPATH fails with `ModuleNotFoundError` (exit 1); execution with PYTHONPATH exits 0
- for validators/gates:
  - can it exit non-zero? no (raises ValueError on missing payload attributes)
  - does it fail on the source repo's own default branch? fails without PYTHONPATH, succeeds with exit 0 with PYTHONPATH
- does the output match what the documentation claims? yes

## Defects — required
- `script-bug` · scripts/github_core/pull_request_targets.py:20 · Direct execution fails with ModuleNotFoundError because it imports from `scripts.github_core.protocol` without configuring sys.path.

## Observations
- Fork safety: strictly requires head repository in pull request payloads to differentiate between same-named branches across different fork origins.
- Query parameter encoding: uses `urllib.parse.quote` with `safe=""` for base branch refs to prevent parameter injection through special branch characters (`&`, `?`, `#`, `+`).
- Context cost: 4,531 bytes, approximately 1,133 tokens.
