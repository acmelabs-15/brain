---
package: rjm
path: scripts/github_core/review_threads.py
type: script
bytes: 14595
unit: inv-rjm-243
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/review_threads.py, sha256: 98d6761bac85cc932d088f42521a191141a5e9cf0675601d681b41c0744b7d5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/review_threads.py

## Purpose — required, verbatim
> "GitHub PR review-thread helpers: thread shape, predicates, paginated fetch." — scripts/github_core/review_threads.py:1

## Design intent — required
Provides unified GraphQL query helpers, canonical flat dictionary transformations, and bounded pagination for GitHub pull request review threads. Addressing historical discrepancies (Issue #1910, PR #1887) where competing scripts either emitted divergent data shapes (crashing consumers expecting flattened comments) or masked unresolved threads due to unpaginated single-page queries, this module defines a single authoritative predicate for thread resolution (`_thread_is_unresolved`). It normalizes thread nodes into consistent dictionaries, enforces a 50-page safety ceiling with warning diagnostics, and guarantees that transport errors fail gracefully without crashing caller execution.

## Phase — required
cross-phase

## Inputs — required
- Pull request identifiers: repository owner `owner: str`, repository name `repo: str`, and pull request number `pull_request: int` (scripts/github_core/review_threads.py:327-329).
- GraphQL pagination cursor `cursor: str | None` (scripts/github_core/review_threads.py:209, 341).
- GraphQL API response payloads conforming to `_REVIEW_THREADS_QUERY` (scripts/github_core/review_threads.py:112-133, 229, 358).
- Review thread dictionaries for transformation and filtering (`thread: dict`, `thread_nodes: list[dict]`, `include_comments: bool = False`) (scripts/github_core/review_threads.py:20, 33, 46, 53).

## Outputs — required
- Unresolved review threads `list[dict]` from `get_unresolved_review_threads` (scripts/github_core/review_threads.py:330) and `filter_unresolved_threads` (scripts/github_core/review_threads.py:46).
- Unresolved thread counts `int` from `count_unresolved_threads` (scripts/github_core/review_threads.py:33).
- Canonical review thread dictionary structure from `transform_review_thread` (scripts/github_core/review_threads.py:53) containing `thread_id`, `is_resolved`, `is_outdated`, `path`, `line`, `start_line`, `diff_side`, `comment_count`, `first_comment_*`, and optional `comments` array.
- Page fetch result `tuple[FetchStatus, dict | None]` from `_fetch_review_threads_page` (scripts/github_core/review_threads.py:212).
- Structured telemetry (`op=review_threads_failed`, `op=review_threads_page`, `op=review_threads_complete`) and Python warnings (`warnings.warn`) on pagination caps, cursor absence, or transport anomalies.

## Invokes — required
- script log_safety — scripts/github_core/review_threads.py:15
- script api — scripts/github_core/review_threads.py:222

## Invoked by — required
- script review_threads — scripts/github_core/api.py:42

## Concepts named — required, verbatim
- `safe_log_str` — scripts/github_core/review_threads.py:15 — used here
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
none (python module; class FetchStatus, functions: _thread_is_unresolved, count_unresolved_threads, filter_unresolved_threads, transform_review_thread, _log_structural_missing, _unwrap_review_threads, _fetch_review_threads_page, _log_review_threads_page, _warn_review_threads_capped, _warn_structural_truncation, _warn_cursor_missing, get_unresolved_review_threads)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/review_threads.py`, language: Python 3, lines: 386
- documented invocation: none (library module without CLI entrypoint; imported and re-exported by `scripts/github_core/api.py`)
- **executed:** yes
- actual command run: `sources/rjm/.venv/bin/python sources/rjm/scripts/github_core/review_threads.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `sources/rjm/.venv/bin/python -c "from scripts.github_core.review_threads import count_unresolved_threads, transform_review_thread; print('count:', count_unresolved_threads([{'isResolved': False}, {'isResolved': True}])); print('transformed:', transform_review_thread({'id': 't1', 'isResolved': False}))"`
  abridged stdout: `count: 1\ntransformed: {'thread_id': 't1', 'is_resolved': False, 'is_outdated': False, 'path': None, 'line': None, 'start_line': None, 'diff_side': None, 'comment_count': 0, 'first_comment_id': None, 'first_comment_author': None, 'first_comment_body': None, 'first_comment_created_at': None, 'comments': None}`
  **actual exit code:** 0
- documented exit codes: none (library module without CLI docstring exit codes) vs. actual exit paths in code:
  - no `sys.exit` calls; functions return lists or dictionaries. `get_unresolved_review_threads` catches network/GraphQL errors and returns an empty list `[]` to satisfy a never-raises caller contract. Standalone execution completes with exit code 0.
- for validators/gates:
  - can it exit non-zero? no direct exit call; serves as the underlying query and resolution engine for merge gate scripts like `test_pr_merge_ready.py`.
  - does it fail on the source repo's own default branch? no, module imports and executes cleanly with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Refactoring and backwards compatibility: Extracted out of `scripts/github_core/api.py` (Issue #1910) to modularize review thread operations while `api.py` re-exports all identifiers to preserve backwards compatibility (lines 3-6).
- Silent truncation prevention: Clamps pagination to `_REVIEW_THREADS_MAX_PAGES = 50` (5,000 maximum threads) and emits machine-readable warnings when hits occur or when `hasNextPage` is true without an `endCursor` (lines 106-110, 270-281, 306-324).
- Resilient resolution defaults: `_thread_is_unresolved` treats missing or null `isResolved` values as resolved (`True`), preventing malformed payloads from spuriously blocking merges (lines 20-31).
- Lazy import: Imports `gh_graphql` lazily inside `_fetch_review_threads_page` (line 222) to avoid circular imports with `api.py`.
- Context cost: 14,595 bytes + 640 bytes (`log_safety.py`) + 43,794 bytes (`api.py`) = 59,029 bytes, approximately 14,757 tokens.
