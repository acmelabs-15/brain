---
package: rjm
path: scripts/github_core/gh_client.py
type: script
bytes: 6197
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/gh_client.py, sha256: ee75d831a56d2b286fcf4d466bd6764a41fc49d5040b1ef6907abcbdad0caa45}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/gh_client.py

## Purpose — required, verbatim
> "GhCliClient: concrete GitHubClient backed by the ``gh`` CLI." — scripts/github_core/gh_client.py:1

## Design intent — required
Provides a concrete implementation of the `GitHubClient` protocol that delegates GitHub API operations (REST GET, POST, PATCH, and GraphQL queries) to subprocess calls via the GitHub CLI (`gh`). It enforces strict UTF-8 decoding to avoid character corruption across locales, handles 202/204 empty response bodies without JSON decode errors, and delegates authentication checking to `is_gh_authenticated` to avoid misinterpreting API outages as authentication failures.

## Phase — required
cross-phase

## Inputs — required
REST endpoint strings, request payload dictionaries, GraphQL query strings, and query variable dictionaries.

## Outputs — required
Parsed response data dictionaries from REST and GraphQL endpoints; boolean authentication verdicts from `is_authenticated`.

## Invokes — required
- script api — scripts/github_core/gh_client.py:10

## Invoked by — required
- script gh_client — scripts/bulk_cancel_guard.py:57
- script gh_client — scripts/github_core/__init__.py:49

## Concepts named — required, verbatim
- `GhCliClient` — scripts/github_core/gh_client.py:1 — defined here
- `GitHubClient` — scripts/github_core/gh_client.py:1 — used here
- `is_gh_authenticated` — scripts/github_core/gh_client.py:10 — used here
- `_parse_response_body` — scripts/github_core/gh_client.py:40 — defined here
- `rest_get` — scripts/github_core/gh_client.py:79 — defined here
- `rest_post` — scripts/github_core/gh_client.py:89 — defined here
- `rest_patch` — scripts/github_core/gh_client.py:108 — defined here
- `graphql` — scripts/github_core/gh_client.py:121 — defined here
- `is_authenticated` — scripts/github_core/gh_client.py:149 — defined here

## Structure
- def _run — scripts/github_core/gh_client.py:17
- def _parse_response_body — scripts/github_core/gh_client.py:40
- class GhCliClient — scripts/github_core/gh_client.py:72
- def rest_get — scripts/github_core/gh_client.py:79
- def rest_post — scripts/github_core/gh_client.py:89
- def rest_patch — scripts/github_core/gh_client.py:108
- def graphql — scripts/github_core/gh_client.py:121
- def is_authenticated — scripts/github_core/gh_client.py:149

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/gh_client.py`, Python, 159 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/gh_client.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module when PYTHONPATH includes sources/rjm; direct execution without PYTHONPATH exits 1 with ModuleNotFoundError)

## Defects — required
none

## Observations
Implements the `GitHubClient` protocol using `subprocess.run` to call `gh api`. Enforces strict UTF-8 decoding to guard against character encoding corruption under non-UTF-8 system locales. Gracefully handles 202/204 empty response bodies (such as workflow run cancellations) without triggering `JSONDecodeError`.

## Context cost
6,197 bytes (~1,600 tokens). Loads `scripts/github_core/api.py`.
