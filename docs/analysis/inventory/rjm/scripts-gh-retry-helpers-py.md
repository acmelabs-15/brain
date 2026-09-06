---
package: rjm
path: scripts/gh_retry_helpers.py
type: script
bytes: 8741
unit: inv-rjm-239
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/gh_retry_helpers.py

## Purpose — required, verbatim
> "GitHub CLI retry and invocation helpers for ai-review scripts." — scripts/gh_retry_helpers.py:1

## Design intent — required
Provides resilient subprocess execution and rate-limit backoff handling for GitHub CLI (`gh`) invocations within CI review actions. Handles transient errors (HTTP 429, 500, 502, 503, 504, secondary rate limits, abuse detection) using `Retry-After` and `X-RateLimit-Reset` headers while respecting action-level timeouts and redacting CI credentials from all output streams. Without this module, review workflows would frequently fail on GitHub API hiccups or leak sensitive tokens in failure diagnostics.

## Phase — required
none

## Inputs — required
- Environment variable `GH_TOKEN` — scripts/gh_retry_helpers.py:63
- Environment variable `GITHUB_TOKEN` — scripts/gh_retry_helpers.py:64
- Environment variable `COPILOT_GITHUB_TOKEN` — scripts/gh_retry_helpers.py:65
- Environment variable `BOT_PAT` — scripts/gh_retry_helpers.py:66
- Environment variable `AI_REVIEW_ACTION_DEADLINE_EPOCH` (referenced via `AI_REVIEW_ACTION_DEADLINE_ENV`) — scripts/gh_retry_helpers.py:27,144
- Subprocess arguments list passed to `run_gh` — scripts/gh_retry_helpers.py:217

## Outputs — required
- Subprocess execution result encapsulated in `CommandResult` dataclass — scripts/gh_retry_helpers.py:71,210
- Warning annotations emitted to standard output during transient refusal retries (`::warning::GitHub API transient refusal...`) — scripts/gh_retry_helpers.py:253

## Invokes — required
- script redact_ci_sink — scripts/gh_retry_helpers.py:18

## Invoked by — required
- script gh_retry_helpers — scripts/ci/build_ai_review_context.py:29

## Concepts named — required, verbatim
- `ai-review` — scripts/gh_retry_helpers.py:1 — used here
- `redact_ci_sink` — scripts/gh_retry_helpers.py:18 — used here
- `GH_TIMEOUT_SECONDS` — scripts/gh_retry_helpers.py:20 — defined here
- `GH_REFUSAL_BACKOFF_SECONDS` — scripts/gh_retry_helpers.py:21 — defined here
- `GH_CONTEXT_RETRY_BUDGET_SECONDS` — scripts/gh_retry_helpers.py:25 — defined here
- `DOWNSTREAM_REVIEW_RESERVE_SECONDS` — scripts/gh_retry_helpers.py:26 — defined here
- `AI_REVIEW_ACTION_DEADLINE_ENV` — scripts/gh_retry_helpers.py:27 — defined here
- `CommandResult` — scripts/gh_retry_helpers.py:71 — defined here
- `ReviewContext` — scripts/gh_retry_helpers.py:78 — defined here
- `PrMetadata` — scripts/gh_retry_helpers.py:85 — defined here
- `issue #4333` — scripts/gh_retry_helpers.py:89 — used here
- `ConfigError` — scripts/gh_retry_helpers.py:98 — defined here
- `GhLaunchError` — scripts/gh_retry_helpers.py:102 — defined here
- `ExternalGhError` — scripts/gh_retry_helpers.py:106 — defined here
- `_redact_secrets` — scripts/gh_retry_helpers.py:110 — defined here
- `_invoke_gh_once` — scripts/gh_retry_helpers.py:154 — defined here
- `run_gh` — scripts/gh_retry_helpers.py:217 — defined here

## Structure
- Module docstring (line 1)
- Imports, sys.path adjustment, and secret redaction import (lines 3-18)
- Timing constants, regex patterns for errors/headers, and secret variable definitions (lines 20-67)
- Data structures: `CommandResult`, `ReviewContext`, `PrMetadata` (lines 70-95)
- Custom exceptions: `ConfigError`, `GhLaunchError`, `ExternalGhError` (lines 98-108)
- Secret redaction and failure message formatting helpers (lines 110-119)
- Retry delay calculation and deadline management (lines 120-151)
- Low-level invocation handler `_invoke_gh_once` (lines 154-214)
- Main retry loop runner `run_gh` (lines 217-257)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/gh_retry_helpers.py`
- **language:** Python 3
- **lines:** 258
- **documented invocation:**
  > "GitHub CLI retry and invocation helpers for ai-review scripts." — scripts/gh_retry_helpers.py:1
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/gh_retry_helpers.py`
- **stdout:**
  ```text
  none
  ```
- **actual exit code:** 0
- **documented exit codes:** none
- **actual exit paths:**
  - `raise GhLaunchError(f"Failed to run gh: {exc}") from exc` — scripts/gh_retry_helpers.py:193
  - `raise RuntimeError("unreachable gh retry loop")` — scripts/gh_retry_helpers.py:256
- **for validators/gates:** not a standalone validator or gate; library module providing subprocess helpers with retry logic. Returns `CommandResult` object. Exits 0 on clean import.
- **output matches documentation:** yes, cleanly imports and defines helper classes and functions.

## Defects — required
none

## Observations
Converts `gh pr diff` commands with `--repo` into `gh api repos/.../pulls/...` GET requests with `Accept: application/vnd.github.v3.diff` header and `--include` to inspect response headers directly. Parses both `Retry-After` and `X-RateLimit-Reset` response headers to calculate precise sleep durations before retrying, falling back to `(60.0, 120.0)` seconds backoff. Redacts known token environment variables from stdout and stderr.

## Context cost
8741 bytes, ~2185 tokens. Loads `scripts/redact_secrets.py` (22137 bytes). Total context cost: ~30878 bytes.
