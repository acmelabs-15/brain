---
package: rjm
path: .github/scripts/test_rate_limit.py
type: script
bytes: 2517
unit: inv-rjm-185
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: .github/scripts/test_rate_limit.py, sha256: 51a6e37f475906db141e0afebf83f4c6d67a90e503092fdff6a0e745f60fe9f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/test_rate_limit.py

## Purpose — required, verbatim
> "Check GitHub API rate limits before workflow execution." — .github/scripts/test_rate_limit.py:2

## Design intent — required
Pre-flight rate limit inspection gate for GitHub Actions workflows, implementing ADR-006 (thin workflows, testable modules). It queries remaining core and GraphQL API quotas via `check_workflow_rate_limit` from the shared `github_core` library and validates them against configurable thresholds before heavy workflow jobs run. When quotas are insufficient or status is not verified healthy, it halts execution with exit code 1 to avoid running out of API tokens mid-job. Without this script, automated CI pipelines could exhaust GitHub API rate limits midway through execution, causing intermittent failures and leaving PR branches in half-updated states.

## Phase — required
cross-phase

## Inputs — required
Command-line arguments:
- `--core-threshold`: int (default: 100), minimum remaining core API calls required
- `--graphql-threshold`: int (default: 50), minimum remaining GraphQL API calls required
Environment variables:
- `GITHUB_WORKSPACE`: path to repository workspace root
- `GITHUB_OUTPUT`: path to GitHub Actions outputs file
- `GITHUB_STEP_SUMMARY`: path to GitHub Actions step summary file

## Outputs — required
- Formatted markdown table of API rate limit quotas and statuses printed to stdout and appended to `$GITHUB_STEP_SUMMARY`
- GitHub Actions output: `core_remaining=<count>` written to `$GITHUB_OUTPUT`
- Exit code: 0 if rate limit is verified healthy, 1 if rate limit is too low, check fails, or status is non-healthy

## Invokes — required
none

## Invoked by — required
- doc .agents/sessions/2026-08-04-session-9999-api-resilience.json — .agents/sessions/2026-08-04-session-9999-api-resilience.json:164
- doc .agents/archive/planning/v0.3.1/PLAN.md — .agents/archive/planning/v0.3.1/PLAN.md:948

## Concepts named — required, verbatim
- `github_core` — .github/scripts/test_rate_limit.py:5 — used here
- `ADR-006` — .github/scripts/test_rate_limit.py:6 — used here
- `ADR-035` — .github/scripts/test_rate_limit.py:8 — used here
- `RateLimitStatus` — .github/scripts/test_rate_limit.py:26 — used here
- `check_workflow_rate_limit` — .github/scripts/test_rate_limit.py:27 — used here
- `main` — .github/scripts/test_rate_limit.py:31 — defined here

## Structure
- def main — .github/scripts/test_rate_limit.py:31

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/test_rate_limit.py`, Python 3, 90 lines
- documented invocation: `python3 .github/scripts/test_rate_limit.py` (from `.github/workflows/pr-maintenance.yml:64`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.github/scripts/test_rate_limit.py --help`
  abridged stdout:
  ```text
  usage: test_rate_limit.py [-h] [--core-threshold CORE_THRESHOLD]
                            [--graphql-threshold GRAPHQL_THRESHOLD]

  Check GitHub API rate limits before workflow execution.
  ```
  **actual exit code:** 0
- documented exit codes (`0 - Sufficient rate limit remaining to proceed.`, `1 - Rate limit too low or check failed.` from `.github/scripts/test_rate_limit.py:9-10`) vs actual exit paths in code:
  - `return 1` at `.github/scripts/test_rate_limit.py:59` (caught RuntimeError from check)
  - `return 1` at `.github/scripts/test_rate_limit.py:83` (`result.status != RateLimitStatus.VERIFIED_HEALTHY`)
  - `return 0` at `.github/scripts/test_rate_limit.py:85` (healthy status)
  - `sys.exit(main())` at `.github/scripts/test_rate_limit.py:89`
- for validators/gates: can exit non-zero (verified with `python3 sources/rjm/.github/scripts/test_rate_limit.py --core-threshold 10000`, exit code 1, emits `Rate limit gate verified_limited; not proceeding`; healthy check runs with default thresholds and exits 0)
- does the output match what the documentation claims: yes, prints markdown status table, updates GitHub Actions summaries, and enforces rate limit thresholds

## Defects — required
none

## Observations
Exemplifies ADR-006's "thin workflows, testable modules" architectural principle by encapsulating CLI argument parsing and environment variable output handling in a 90-line script while delegating core rate limit logic to `scripts.github_core.api`.

## Context cost
2517 bytes, approximately 630 tokens.
