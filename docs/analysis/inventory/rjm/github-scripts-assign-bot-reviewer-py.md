---
package: rjm
path: .github/scripts/assign_bot_reviewer.py
type: script
bytes: 7186
unit: inv-rjm-182
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/assign_bot_reviewer.py

## Purpose — required, verbatim
> "Request a PR review from the bot over REST, with bounded retry." — .github/scripts/assign_bot_reviewer.py:2

## Design intent — required
Automated PR reviewer assignment utility that calls GitHub REST API endpoint `POST /repos/{owner}/{repo}/pulls/{number}/requested_reviewers` via `gh api` with bounded exponential backoff. It was engineered to replace GraphQL-based `gh pr edit --add-reviewer` after measuring GraphQL secondary rate limits that starved automated reviews while REST endpoints remained operational. It provides granular exit codes adhering to ADR-035 and supports selective suppression of transient quota exhaustion via `--tolerate-external`, preventing non-blocking PR automation jobs from turning red during rate-limit spikes while ensuring authentication and configuration failures remain strictly fatal.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments parsed via argparse (.github/scripts/assign_bot_reviewer.py:88-100):
  - `--repo`: "owner/name" — .github/scripts/assign_bot_reviewer.py:89
  - `--pull-request`: "PR number" — .github/scripts/assign_bot_reviewer.py:90
  - `--reviewer`: "Login to request" — .github/scripts/assign_bot_reviewer.py:91
  - `--tolerate-external` flag: "Exit 0 after warning when the retry budget is spent. Auth and " — .github/scripts/assign_bot_reviewer.py:96
- Environment variable `GITHUB_WORKSPACE` (defaulting to relative repository root) (.github/scripts/assign_bot_reviewer.py:46)
- GitHub CLI authentication credentials in environment (`GH_TOKEN` or `GITHUB_TOKEN`)

## Outputs — required
- Reviewer assignment requested via GitHub REST API endpoint `POST repos/{repo}/pulls/{pr_number}/requested_reviewers` (.github/scripts/assign_bot_reviewer.py:110)
- Console output:
  - "Requested review from {reviewer} on PR #{pr_number}" — .github/scripts/assign_bot_reviewer.py:146
  - "::warning::Bot reviewer not assigned; the API refused the request " — .github/scripts/assign_bot_reviewer.py:188
- Exit codes adhering to ADR-035 (0, 2, 3, 4) (.github/scripts/assign_bot_reviewer.py:20-25)

## Invokes — required
- script scripts.github_core.api — .github/scripts/assign_bot_reviewer.py:51

## Invoked by — required
- workflow .github/workflows/auto-assign-reviewer.yml — .github/workflows/auto-assign-reviewer.yml:73
- test tests/test_assign_bot_reviewer.py — tests/test_assign_bot_reviewer.py:14

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/assign_bot_reviewer.py:20 — used here
- `bounded retry` — .github/scripts/assign_bot_reviewer.py:2 — defined here
- `requested_reviewers` — .github/scripts/assign_bot_reviewer.py:10 — used here
- `REFUSAL_BACKOFF_SECONDS` — .github/scripts/assign_bot_reviewer.py:52 — used here
- `GhAuthStatus` — .github/scripts/assign_bot_reviewer.py:53 — used here
- `tolerate-external` — .github/scripts/assign_bot_reviewer.py:26 — defined here

## Structure
none (python script; functions and constants: MAX_ATTEMPTS, GH_TIMEOUT_SECONDS, _EXIT_OK, _EXIT_CONFIG, _EXIT_EXTERNAL, _EXIT_AUTH, _RETRYABLE, _AUTH_SIGNAL, build_parser, _request_review, assign_reviewer, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/assign_bot_reviewer.py`, language: Python 3, lines: 197
- documented invocation:
  - "python3 .github/scripts/assign_bot_reviewer.py \\" — .github/workflows/auto-assign-reviewer.yml:73
- **executed:** yes
- actual command run: `python3 .github/scripts/assign_bot_reviewer.py --repo foo/bar --pull-request abc --reviewer rjmurillo-bot`
- abridged stdout:
  ```
  --pull-request must be a number: abc
  ```
- **actual exit code**: 2
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - "0 - Reviewer requested, or already requested." — .github/scripts/assign_bot_reviewer.py:21
  - "2 - Configuration error (missing or malformed arguments)." — .github/scripts/assign_bot_reviewer.py:22
  - "3 - External error after the retry budget is spent." — .github/scripts/assign_bot_reviewer.py:23
  - "4 - Authentication error." — .github/scripts/assign_bot_reviewer.py:24
  Actual exit paths in code:
  - `sys.exit(main())` — .github/scripts/assign_bot_reviewer.py:196
  - `return _EXIT_CONFIG` (.github/scripts/assign_bot_reviewer.py:180) when `--pull-request` is not digits
  - `return _EXIT_CONFIG` (.github/scripts/assign_bot_reviewer.py:183) when `--repo` lacks `/`
  - `return _EXIT_CONFIG` (.github/scripts/assign_bot_reviewer.py:140) when `gh` is not found on PATH
  - `return _EXIT_OK` (.github/scripts/assign_bot_reviewer.py:147) when review requested successfully
  - `return _EXIT_AUTH` (.github/scripts/assign_bot_reviewer.py:153) when auth failure detected
  - `return _EXIT_EXTERNAL` (.github/scripts/assign_bot_reviewer.py:173) when attempts exhausted
  - `return _EXIT_OK` (.github/scripts/assign_bot_reviewer.py:191) when `--tolerate-external` active
- for validators/gates: can it exit non-zero? Yes, exits 2 on config error, 3 on external API failure, 4 on auth failure. Does it fail on default branch? Exits 2 on invalid arguments, exits 0 on `--help`.
- does output match what documentation claims? Yes, implements ADR-035 exit codes and bounded retry backoff.

## Defects — required
none

## Observations
- Distinguishes transient rate limiting (`GhAuthStatus.RATE_LIMITED`, `GhAuthStatus.SECONDARY_RATE_LIMITED`, `GhAuthStatus.TRANSIENT_ERROR`) from authentication failures (`HTTP 401`, `bad credentials`).
- Designed specifically based on measured incident data from Issue #4326 and Issue #4335 where GraphQL hit secondary rate limits while REST remained functional.

## Context cost
7186 bytes plus `scripts/github_core/api.py` (~4KB) = ~11KB (~2800 tokens).
