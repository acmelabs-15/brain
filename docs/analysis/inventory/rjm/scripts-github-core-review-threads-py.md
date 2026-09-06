---
package: rjm
path: scripts/github_core/review_threads.py
type: script
bytes: 14595
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# scripts/github_core/review_threads.py

## Purpose — required, verbatim
> "GitHub PR review-thread helpers: thread shape, predicates, paginated fetch." — scripts/github_core/review_threads.py:1

## Design intent — required
Extracts and consolidates PR review-thread handling (extracted from `scripts/github_core/api.py` under Issue #1910) to provide a single authoritative definition (DRY) for review-thread shapes, unresolved-thread predicates, and robust cursor-based GraphQL pagination. It eliminates shape incompatibilities between scripts (`get_pr_review_threads.py` vs `get_unresolved_review_threads.py`), prevents false-zero unresolved counts caused by GraphQL pagination truncations (resolving the PR #1887 incident where single-page 100-thread queries masked unresolved review comments), and guarantees bounded, warning-instrumented pagination up to 50 pages (5,000 threads) without raising uncaught exceptions.

## Phase — required
cross-phase

## Inputs — required
- Raw GraphQL review thread nodes (`thread: dict`, `thread_nodes: list[dict]`, scripts/github_core/review_threads.py:20, 33, 46, 53).
- Repository identifier, PR number, and pagination cursor (`owner: str`, `repo: str`, `pull_request: int`, `cursor: str | None`, scripts/github_core/review_threads.py:206-209, 327-329).
- Flag controlling full comment materialization (`include_comments: bool = False`, scripts/github_core/review_threads.py:53).

## Outputs — required
- Unresolved thread count (`int`) from `count_unresolved_threads` (scripts/github_core/review_threads.py:33-43).
- Filtered list of unresolved thread nodes (`list[dict]`) from `filter_unresolved_threads` (scripts/github_core/review_threads.py:46-50).
- Canonical flat review-thread dictionary from `transform_review_thread` containing `thread_id`, `is_resolved`, `is_outdated`, `path`, `line`, `start_line`, `diff_side`, `comment_count`, `first_comment_*`, and optional `comments` list (scripts/github_core/review_threads.py:53-103).
- `FetchStatus` enum member (`OK`, `TRANSPORT_ERROR`, `STRUCTURAL_MISSING`) (scripts/github_core/review_threads.py:136-150).
- List of unresolved review thread dictionaries from `get_unresolved_review_threads` (scripts/github_core/review_threads.py:326-385).

## Invokes — required
- script log_safety — scripts/github_core/review_threads.py:15
- script api — scripts/github_core/review_threads.py:222

## Invoked by — required
- script review_threads — scripts/github_core/api.py:42

## Concepts named — required, verbatim
- `Issue #1910` — scripts/github_core/review_threads.py:3 — used here
- `_thread_is_unresolved` — scripts/github_core/review_threads.py:20 — defined here
- `count_unresolved_threads` — scripts/github_core/review_threads.py:33 — defined here
- `filter_unresolved_threads` — scripts/github_core/review_threads.py:46 — defined here
- `transform_review_thread` — scripts/github_core/review_threads.py:53 — defined here
- `_REVIEW_THREADS_MAX_PAGES` — scripts/github_core/review_threads.py:110 — defined here
- `_REVIEW_THREADS_QUERY` — scripts/github_core/review_threads.py:112 — defined here
- `FetchStatus` — scripts/github_core/review_threads.py:136 — defined here
- `_log_structural_missing` — scripts/github_core/review_threads.py:152 — defined here
- `_unwrap_review_threads` — scripts/github_core/review_threads.py:170 — defined here
- `_fetch_review_threads_page` — scripts/github_core/review_threads.py:205 — defined here
- `_log_review_threads_page` — scripts/github_core/review_threads.py:252 — defined here
- `_warn_review_threads_capped` — scripts/github_core/review_threads.py:270 — defined here
- `_warn_structural_truncation` — scripts/github_core/review_threads.py:283 — defined here
- `_warn_cursor_missing` — scripts/github_core/review_threads.py:306 — defined here
- `get_unresolved_review_threads` — scripts/github_core/review_threads.py:326 — defined here

## Structure
none (python module; class: FetchStatus; functions: _thread_is_unresolved, count_unresolved_threads, filter_unresolved_threads, transform_review_thread, _log_structural_missing, _unwrap_review_threads, _fetch_review_threads_page, _log_review_threads_page, _warn_review_threads_capped, _warn_structural_truncation, _warn_cursor_missing, get_unresolved_review_threads)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/review_threads.py`, language: Python 3, lines: 386
- documented invocation: none (library module without CLI entrypoint; re-exported by `scripts/github_core/api.py`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/review_threads.py`
  abridged stdout: (empty)
  **actual exit code:** 1 (fails with `ModuleNotFoundError: No module named 'scripts'` without PYTHONPATH)
- actual command run: `PYTHONPATH=sources/rjm ./sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/review_threads.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- documented exit codes: none (library module without CLI entrypoint) vs. actual exit paths in code:
  - no `exit`, `sys.exit`, or `raise SystemExit` statements in code
  - returns empty list `[]` on transport errors without raising exceptions (`scripts/github_core/review_threads.py:350`)
- for validators/gates:
  - can it exit non-zero? no direct process exit; provides thread resolution predicates and queries (`count_unresolved_threads`, `get_unresolved_review_threads`) that gate PR mergeability and review status checks.
  - does it fail on the source repo's own default branch? no, imports cleanly and executes with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Silent truncation prevention: eliminates false-zero review thread results from PR #1887 by detecting and warning on pagination cap exhaustion (`_REVIEW_THREADS_MAX_PAGES = 50`), missing end cursors, and mid-pagination structural errors.
- Circular import avoidance: lazily imports `gh_graphql` from `scripts.github_core.api` inside `_fetch_review_threads_page` (line 222), matching the circular dependency resolution pattern used across `github_core`.
- Canonical unresolved predicate: `_thread_is_unresolved` treats missing `isResolved` keys or `None` values as `True` (resolved), preventing malformed data from masquerading as blocking unresolved comments.
- Context cost: 14,595 bytes, 386 lines, ~3,648 tokens.

## Context cost
14595 bytes, ~3648 tokens.
