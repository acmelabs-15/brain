---
package: rjm
path: scripts/github_core/api.py
type: script
bytes: 43794
unit: inv-rjm-240
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/api.py

## Purpose — required, verbatim
> "GitHub API helpers: auth, pagination, GraphQL, issue comments, rate limits." — scripts/github_core/api.py:2

## Design intent — required
Central API client facade and GitHub integration library for RJM's workflow automation and skill scripts. It unifies subprocess interactions with the GitHub CLI (`gh`), providing resilient repository inference, multi-transport authentication preflights across REST and GraphQL, bounded jittered retries for transient HTTP (429/5xx) and rate-limit refusals, paginated REST and cursor-based GraphQL queries for PR review comments, and structured issue comment operations. Without it, scripts across the system would independently implement ad-hoc `gh` invocations, misclassify transient rate limits or upstream 5xx outages as permanent authentication failures (triggering misguided credential rotations under ADR-035), leak sensitive GitHub tokens into logs and error envelopes (violating CWE-117 log safety), and lack uniform pagination, backoff, and retry handling.

## Phase — required
cross-phase

## Inputs — required
- Function arguments: `owner: str`, `repo: str`, `endpoint: str`, `page_size: int`, `query: str`, `variables: dict`, `since: datetime`, `max_pages: int`, `issue_number: int`, `comment_id: int`, `body: str`, `client: GitHubClient | None`, `comments: list[dict]`, `trusted_users: list[str]`.
- Local git remote URL via `git remote get-url origin` subprocess execution — scripts/github_core/api.py:116
- GitHub CLI commands (`gh` executable on PATH):
  - `gh auth status` for REST auth preflight probe — scripts/github_core/api.py:464
  - `gh api graphql -f query=query { viewer { login } }` for fallback GraphQL viewer probe — scripts/github_core/api.py:429
  - `gh api rate_limit` for quota status extraction — scripts/github_core/api.py:502
  - `gh api <url>` for REST pagination — scripts/github_core/api.py:647
  - `gh api graphql` with variables for GraphQL queries — scripts/github_core/api.py:810,893
  - `gh api repos/{owner}/{repo}/issues/comments/{comment_id} -X PATCH` for comment updates — scripts/github_core/api.py:1123
  - `gh api repos/{owner}/{repo}/issues/{issue_number}/comments -X POST` for comment creation — scripts/github_core/api.py:1179
- HTTP response headers: `x-ratelimit-remaining` and `Retry-After` headers parsed from stderr/stdout — scripts/github_core/api.py:339,790

## Outputs — required
- Data models and enums: `RepoInfo` dataclass (owner, repo), `GhAuthStatus` enum, `GhAuthResult` dataclass (status, detail).
- Query responses: combined items `all_items: list[dict]` from `gh_api_paginated`, GraphQL payload `data: dict` from `gh_graphql`, filtered PR list `all_prs: list[dict]` from `get_all_prs_with_comments`, and comment dictionaries from `get_issue_comments`, `update_issue_comment`, and `create_issue_comment`.
- Diagnostic tuples and guidance: `describe_gh_auth_failure` returning `(message, exit_code, error_type)` tuple, formatted `PERMISSION DENIED (403)` guidance string (`_403_GUIDANCE`).
- Process termination: calls to `error_and_exit` with exit code 2 (config/param error), exit code 3 (external API/transport error), or exit code 4 (auth error).
- GitHub mutations: updated and newly posted issue comments via `gh api` subprocess calls.

## Invokes — required
- script log_safety — scripts/github_core/api.py:35
- script rate_limit — scripts/github_core/api.py:36
- script review_threads — scripts/github_core/api.py:42
- script validation — scripts/github_core/api.py:54
- command git — scripts/github_core/api.py:116
- command gh — scripts/github_core/api.py:412

## Invoked by — required
- script scripts.github_core.api — scripts/github_core/__init__.py:9
- script scripts.github_core.api — scripts/github_core/gh_client.py:10
- script scripts.github_core.api — scripts/github_core/pr_merge_state.py:78
- script scripts.github_core.api — scripts/github_core/rate_limit.py:152
- script scripts.github_core.api — scripts/github_core/review_threads.py:222
- script scripts.github_core.api — scripts/github_core/validation.py:176
- script scripts.github_core.api — scripts/ci/verify_github_auth.py:21

## Concepts named — required, verbatim
- `safe_log_str` — scripts/github_core/api.py:35 — used here
- `DEFAULT_RATE_THRESHOLDS` — scripts/github_core/api.py:37 — used here
- `RateLimitResult` — scripts/github_core/api.py:38 — used here
- `RateLimitStatus` — scripts/github_core/api.py:39 — used here
- `check_workflow_rate_limit` — scripts/github_core/api.py:40 — used here
- `FetchStatus` — scripts/github_core/api.py:45 — used here
- `count_unresolved_threads` — scripts/github_core/api.py:49 — used here
- `filter_unresolved_threads` — scripts/github_core/api.py:50 — used here
- `get_unresolved_review_threads` — scripts/github_core/api.py:51 — used here
- `transform_review_thread` — scripts/github_core/api.py:52 — used here
- `is_github_name_valid` — scripts/github_core/api.py:54 — used here
- `RepoInfo` — scripts/github_core/api.py:65 — defined here
- `error_and_exit` — scripts/github_core/api.py:82 — defined here
- `ADR-035` — scripts/github_core/api.py:85 — used here
- `get_repo_info` — scripts/github_core/api.py:106 — defined here
- `resolve_repo_params` — scripts/github_core/api.py:138 — defined here
- `GhAuthStatus` — scripts/github_core/api.py:170 — defined here
- `AUTH_ERROR_MARKERS` — scripts/github_core/api.py:212 — defined here
- `is_auth_failure_text` — scripts/github_core/api.py:236 — defined here
- `GhAuthResult` — scripts/github_core/api.py:265 — defined here
- `sanitize_failure_detail` — scripts/github_core/api.py:343 — defined here
- `CWE-117` — scripts/github_core/api.py:346 — used here
- `classify_gh_failure_text` — scripts/github_core/api.py:362 — defined here
- `classify_gh_failure_response` — scripts/github_core/api.py:382 — defined here
- `check_gh_auth` — scripts/github_core/api.py:448 — defined here
- `is_gh_authenticated` — scripts/github_core/api.py:482 — defined here
- `drained_rate_limit_buckets` — scripts/github_core/api.py:512 — defined here
- `describe_gh_auth_failure` — scripts/github_core/api.py:571 — defined here
- `ADR-056` — scripts/github_core/api.py:588 — used here
- `assert_gh_authenticated` — scripts/github_core/api.py:607 — defined here
- `REST_PAGE_PACE_SECONDS` — scripts/github_core/api.py:626 — defined here
- `REST_REFUSAL_BACKOFF_SECONDS` — scripts/github_core/api.py:627 — defined here
- `gh_api_paginated` — scripts/github_core/api.py:673 — defined here
- `release-it.md` — scripts/github_core/api.py:732 — used here
- `REFUSAL_BACKOFF_SECONDS` — scripts/github_core/api.py:745 — defined here
- `gh_graphql` — scripts/github_core/api.py:869 — defined here
- `ADR-015` — scripts/github_core/api.py:872 — used here
- `get_all_prs_with_comments` — scripts/github_core/api.py:1020 — defined here
- `get_issue_comments` — scripts/github_core/api.py:1096 — defined here
- `update_issue_comment` — scripts/github_core/api.py:1114 — defined here
- `create_issue_comment` — scripts/github_core/api.py:1157 — defined here
- `get_trusted_source_comments` — scripts/github_core/api.py:1205 — defined here

## Structure
- "Result types" — scripts/github_core/api.py:60
- "Error handling" — scripts/github_core/api.py:78
- "Repository" — scripts/github_core/api.py:97
- "Authentication" — scripts/github_core/api.py:166
- "API helpers" — scripts/github_core/api.py:623
- "Issue comments" — scripts/github_core/api.py:1073
- "Trusted sources" — scripts/github_core/api.py:1201

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/api.py`, language: Python 3, lines: 1221
- documented invocation: none (library facade module without standalone CLI entrypoint; imported by dependent automation scripts via `from scripts.github_core.api import ...` — scripts/github_core/api.py:5)
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/github_core/api.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `python3 -c "import sys; sys.path.insert(0, 'sources/rjm'); from scripts.github_core.api import get_repo_info, is_auth_failure_text; print('repo_info:', get_repo_info()); print('auth_check:', is_auth_failure_text('bad credentials'))"`
  abridged stdout: `repo_info: RepoInfo(owner='acmelabs-15', repo='brain')\nauth_check: True`
  **actual exit code:** 0
- documented exit codes:
  - "0 - Success" — scripts/github_core/api.py:86
  - "1 - Invalid parameters / logic error" — scripts/github_core/api.py:87
  - "2 - Config error" — scripts/github_core/api.py:88
  - "3 - External error (API failure)" — scripts/github_core/api.py:89
  - "4 - Auth error (not authenticated, permission denied)" — scripts/github_core/api.py:90
  vs. actual exit paths in code:
  - `raise SystemExit(exit_code)` at scripts/github_core/api.py:93 via `error_and_exit`
  - exit 2: `error_and_exit("Could not infer repository info. Please provide -Owner and -Repo parameters.", 2)` at scripts/github_core/api.py:152
  - exit 2: `error_and_exit(f"Invalid GitHub owner name: {owner}", 2)` at scripts/github_core/api.py:158
  - exit 2: `error_and_exit(f"Invalid GitHub repository name: {repo}", 2)` at scripts/github_core/api.py:160
  - exit 3 or 4: `error_and_exit(message, code)` at scripts/github_core/api.py:619 in `assert_gh_authenticated`
  - exit 3: `error_and_exit(msg, 3)` at scripts/github_core/api.py:698 in `gh_api_paginated`
  - exit 3: `error_and_exit(msg, 3)` at scripts/github_core/api.py:711 in `gh_api_paginated`
  - exit 4: `error_and_exit(guidance, 4)` at scripts/github_core/api.py:1144 in `update_issue_comment`
  - exit 3: `error_and_exit(f"Failed to update comment: {error_str}", 3)` at scripts/github_core/api.py:1145 in `update_issue_comment`
  - exit 3: `error_and_exit(f"Failed to post comment: {error_str}", 3)` at scripts/github_core/api.py:1189 in `create_issue_comment`
  - exit 0: clean exit on standalone module import or top-level execution
- for validators/gates:
  - can it exit non-zero? yes, `assert_gh_authenticated` exits 4 on missing `gh` or invalid credentials, and exits 3 on transient/rate-limit failures; `resolve_repo_params` exits 2 on parameter resolution errors; API operations exit 3 or 4 on error.
  - does it fail on the source repo's own default branch? no, module import and function execution succeed cleanly with exit code 0 when GitHub CLI is authenticated.
- does the output match what the documentation claims? yes, provides comprehensive GitHub API helpers with robust error classification, token sanitization, and retry backoff.

## Defects — required
- exit-code-mismatch · scripts/github_core/api.py:154,158,160 · `resolve_repo_params` exits with code 2 (`Config error`) when parameters cannot be inferred or fail GitHub name validation, whereas ADR-035 specifies code 1 for `Invalid parameters / logic error` and code 2 for configuration errors.
- doc-drift · scripts/github_core/api.py:153 · Error message references PowerShell syntax `-Owner and -Repo parameters` rather than Python CLI argument conventions.

## Observations
- Dual-transport authentication verification: Mitigates GitHub 5xx and rate limit false-positives by falling back to a GraphQL viewer probe when `gh auth status` (REST) reports a failure (issue #3139, issue #4344).
- Safe logging and error envelope redaction: Strips credentials (`ghp_`, `gho_`, `github_pat_`, and 40-character hexadecimal tokens) and collapses whitespace/newlines to prevent CWE-117 log injection.
- Resilient backoff and jitter: Implements full jitter exponential backoff (`release-it.md`) and honors `Retry-After` HTTP headers to prevent thundering-herd retry storms during rate-limit recovery.
- Quota awareness: Queries `gh api rate_limit` (which is exempt from rate limits) to determine whether a 403 refusal is due to an exhausted bucket or secondary velocity limit before deciding whether retrying is feasible.

## Context cost
43,794 bytes (~10,950 tokens). Transitive dependencies: loads `log_safety.py` (640 bytes), `rate_limit.py` (11,614 bytes), `review_threads.py` (14,595 bytes), and `validation.py` (9,654 bytes) for a total load of 80,297 bytes (~20,075 tokens).
