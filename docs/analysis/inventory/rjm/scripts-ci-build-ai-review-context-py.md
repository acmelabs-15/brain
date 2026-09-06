---
package: rjm
path: scripts/ci/build_ai_review_context.py
type: script
bytes: 18742
unit: inv-rjm-199
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/build_ai_review_context.py

## Purpose — required, verbatim
> "Build the ai-review composite action context outside workflow YAML." — scripts/ci/build_ai_review_context.py:2

## Design intent — required
Constructs comprehensive review context (pull request diffs, issue descriptions, session logs, or spec files) for downstream AI review composite actions, handling large PR diff truncation, GraphQL/REST API failover, token quota degradation, secret redaction, and robust error classification. Without it, AI review workflows would embed complex fetch, pagination, and retry logic directly in GitHub Actions YAML, risking unhandled rate limits and malformed prompt context.

## Phase — required
none

## Inputs — required
- Environment variable `CONTEXT_TYPE` (`"pr-diff"`, `"issue"`, `"session-log"`, or `"spec-file"`) — scripts/ci/build_ai_review_context.py:448
- Environment variable `PR_NUMBER` — pull request number — scripts/ci/build_ai_review_context.py:449
- Environment variable `ISSUE_NUMBER` — issue number — scripts/ci/build_ai_review_context.py:450
- Environment variable `CONTEXT_PATH` — path to session log or specification file — scripts/ci/build_ai_review_context.py:451
- Environment variable `GITHUB_REPOSITORY` — repository name (`owner/repo`) — scripts/ci/build_ai_review_context.py:452
- Environment variable `MAX_DIFF_LINES` — maximum lines before switching to summary (default `"1000"`) — scripts/ci/build_ai_review_context.py:453
- Target files on disk specified by `CONTEXT_PATH` (session logs or spec files) — scripts/ci/build_ai_review_context.py:351,368
- GitHub API endpoints via `gh` CLI (`repos/{repository}/pulls/{pr_number}`, `gh pr diff`, `gh pr view`, `gh issue view`) — scripts/ci/build_ai_review_context.py:86,97,121,327-338

## Outputs — required
- Writes step outputs via `write_outputs` — scripts/ci/build_ai_review_context.py:22 (publishing context_mode, context_file, context_built, and context_infra_failure)
- Context text file written under `RUNNER_TEMP` directory (`ai-review-context-*.txt`) — scripts/ci/build_ai_review_context.py:479

## Invokes — required
- script ai_review_outputs — scripts/ci/build_ai_review_context.py:19
- script gh_retry_helpers — scripts/ci/build_ai_review_context.py:29
- script failure_classification — scripts/ci/build_ai_review_context.py:227

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ai-review` — scripts/ci/build_ai_review_context.py:2 — used here
- `OutputConfigError` — scripts/ci/build_ai_review_context.py:20 — used here
- `gh_retry_helpers` — scripts/ci/build_ai_review_context.py:29 — used here
- `AI_REVIEW_ACTION_DEADLINE_ENV` — scripts/ci/build_ai_review_context.py:30 — used here
- `CommandResult` — scripts/ci/build_ai_review_context.py:30 — used here
- `ConfigError` — scripts/ci/build_ai_review_context.py:30 — used here
- `DIFF_TOO_LARGE` — scripts/ci/build_ai_review_context.py:30 — used here
- `ExternalGhError` — scripts/ci/build_ai_review_context.py:31 — used here
- `FILES_PER_PAGE` — scripts/ci/build_ai_review_context.py:31 — used here
- `GH_CONTEXT_RETRY_BUDGET_SECONDS` — scripts/ci/build_ai_review_context.py:31 — used here
- `GH_REFUSAL_BACKOFF_SECONDS` — scripts/ci/build_ai_review_context.py:32 — used here
- `GH_TIMEOUT_SECONDS` — scripts/ci/build_ai_review_context.py:32 — used here
- `GhLaunchError` — scripts/ci/build_ai_review_context.py:32 — used here
- `MAX_FILE_PAGES` — scripts/ci/build_ai_review_context.py:33 — used here
- `PERMANENT_AUTH_FAILURE` — scripts/ci/build_ai_review_context.py:33 — used here
- `PrMetadata` — scripts/ci/build_ai_review_context.py:33 — used here
- `ReviewContext` — scripts/ci/build_ai_review_context.py:33 — used here
- `SECRET_ENVIRONMENT_VARIABLES` — scripts/ci/build_ai_review_context.py:34 — used here
- `sanitize_title` — scripts/ci/build_ai_review_context.py:39 — defined here
- `read_utf8_file` — scripts/ci/build_ai_review_context.py:50 — defined here
- `fetch_pr_metadata` — scripts/ci/build_ai_review_context.py:73 — defined here
- `get_pr_name_only` — scripts/ci/build_ai_review_context.py:114 — defined here
- `get_paginated_file_list` — scripts/ci/build_ai_review_context.py:130 — defined here
- `build_large_pr_context` — scripts/ci/build_ai_review_context.py:164 — defined here
- `classify_pr_fetch_failure` — scripts/ci/build_ai_review_context.py:227 — used here
- `_build_pr_diff_body` — scripts/ci/build_ai_review_context.py:235 — defined here
- `build_pr_diff_context` — scripts/ci/build_ai_review_context.py:303 — defined here
- `build_issue_context` — scripts/ci/build_ai_review_context.py:313 — defined here
- `INFRASTRUCTURE_FAILURE` — scripts/ci/build_ai_review_context.py:316 — used here
- `build_session_log_context` — scripts/ci/build_ai_review_context.py:350 — defined here
- `build_spec_context` — scripts/ci/build_ai_review_context.py:362 — defined here
- `build_context_from_environment` — scripts/ci/build_ai_review_context.py:432 — defined here
- `main` — scripts/ci/build_ai_review_context.py:476 — defined here

## Structure
- Module header and sys.path configuration (lines 1-27)
- Imports from `ai_review_outputs` and `gh_retry_helpers` (lines 19-36)
- Utility functions `sanitize_title`, `count_lines`, `read_utf8_file`, and `_parse_pr_payload` (lines 39-70)
- `fetch_pr_metadata` REST and GraphQL fallback implementation (lines 73-111)
- File list pagination and fallback routines `get_pr_name_only` and `get_paginated_file_list` (lines 114-161)
- `build_large_pr_context` handling >300 file PR diff limits (lines 164-219)
- `_pr_fetch_failure_context` error redaction and classification (lines 221-233)
- `_build_pr_diff_body`, `_build_pr_diff_context`, and `build_pr_diff_context` diff assembly (lines 235-311)
- `build_issue_context` GitHub issue prompt context builder (lines 313-347)
- `build_session_log_context` file reader and validator (lines 350-360)
- `build_spec_context` specification and PR diff combiner (lines 362-430)
- `build_context_from_environment` and `_build_context_from_environment` dispatching by `CONTEXT_TYPE` (lines 432-474)
- `main` error-handling wrapper and exit routing (lines 476-493)
- `__main__` caller (lines 495-497)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/build_ai_review_context.py`
- **language:** Python 3
- **lines:** 497
- **documented invocation:**
  > "if context_type == \"pr-diff\":" — scripts/ci/build_ai_review_context.py:459
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/build_ai_review_context.py`
- **stdout:**
  ```text
  ::error::Unknown CONTEXT_TYPE: 
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "return 3" — scripts/ci/build_ai_review_context.py:482`
  - `> "return 3" — scripts/ci/build_ai_review_context.py:485`
  - `> "return 2" — scripts/ci/build_ai_review_context.py:488`
  - `> "return 2" — scripts/ci/build_ai_review_context.py:491`
  - `> "return 0" — scripts/ci/build_ai_review_context.py:492`
- **actual exit paths:**
  - `return 3` — scripts/ci/build_ai_review_context.py:482
  - `return 3` — scripts/ci/build_ai_review_context.py:485
  - `return 2` — scripts/ci/build_ai_review_context.py:488
  - `return 2` — scripts/ci/build_ai_review_context.py:491
  - `return 0` — scripts/ci/build_ai_review_context.py:492
  - `raise SystemExit(main())` — scripts/ci/build_ai_review_context.py:496
- **for validators/gates:** Can exit non-zero (exits 2 on configuration/input errors or missing UTF-8 context files; exits 3 on GitHub CLI command timeout or external gh errors). When executed on default branch with no environment variables, exits 2 (`::error::Unknown CONTEXT_TYPE: `). When run with valid session log and required output environments, exits 0.
- **output matches documentation:** yes, exports context parameters and file path to `GITHUB_OUTPUT` according to the composite action contract.

## Defects — required
none

## Observations
Features robust fallback mechanisms: REST API is preferred first for PR metadata with GraphQL fallback; PR diff queries fall back to paginated file lists when GitHub's 300-file diff ceiling is exceeded; sensitive token and key environment variables are systematically redacted from prompt context strings.

## Context cost
18,742 bytes source. Imports `scripts/ai_review_outputs.py` (3,387 bytes), `scripts/gh_retry_helpers.py` (10,609 bytes), and `scripts/ci/failure_classification.py` (3,667 bytes). Combined context cost: 36,405 bytes (~9,100 tokens).
