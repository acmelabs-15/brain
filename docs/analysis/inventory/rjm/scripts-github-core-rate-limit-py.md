---
package: rjm
path: scripts/github_core/rate_limit.py
type: script
bytes: 11614
unit: inv-rjm-242
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/rate_limit.py, sha256: 5d4b36bbf056d64c5d45e9f783b33042a8cc0d6475888bb4b9c0f8218a39ef00}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/rate_limit.py

## Purpose — required, verbatim
> "GitHub API rate-limit checks." — scripts/github_core/rate_limit.py:1

## Design intent — required
Provides resilient GitHub API rate-limit verification and reachability preflight gates before executing automated workflows (such as PR maintenance and reviewer signal statistics). Resolves defect #4326 where gh api rate_limit falsely reported healthy quotas during active secondary rate-limiting or outages, by combining quota threshold evaluation with non-exempt live REST (meta) and GraphQL (viewer) probe calls.

## Phase — required
cross-phase

## Inputs — required
- Optional resource threshold mapping dictionary (`resource_thresholds: dict[str, int] | None`) at `scripts/github_core/rate_limit.py:220` (defaults to `DEFAULT_RATE_THRESHOLDS` at `scripts/github_core/rate_limit.py:17`).
- Remote GitHub API `rate_limit` endpoint payload via `gh api rate_limit` at `scripts/github_core/rate_limit.py:166`.
- Live probe execution outputs from `gh api -i meta` and `gh api graphql -f query=query { viewer { login } }` at `scripts/github_core/rate_limit.py:100` and `scripts/github_core/rate_limit.py:108`.
- Target repository owner (`owner: str`) and name (`repo: str`) strings for `probe_api_reachability` at `scripts/github_core/rate_limit.py:304`.

## Outputs — required
- A `RateLimitResult` dataclass instance containing status, resources, summary_markdown, core_remaining, and probe_error at `scripts/github_core/rate_limit.py:34` and `scripts/github_core/rate_limit.py:294`.
- Boolean reachability indicator from `probe_api_reachability` at `scripts/github_core/rate_limit.py:304`.

## Invokes — required
- script api — scripts/github_core/rate_limit.py:152

## Invoked by — required
- script rate_limit — scripts/github_core/api.py:36

## Concepts named — required, verbatim
- `DEFAULT_RATE_THRESHOLDS` — scripts/github_core/rate_limit.py:17 — defined here
- `RateLimitStatus` — scripts/github_core/rate_limit.py:25 — defined here
- `RateLimitResult` — scripts/github_core/rate_limit.py:34 — defined here
- `_PROBE_ENDPOINT` — scripts/github_core/rate_limit.py:92 — defined here
- `_GRAPHQL_PROBE_ARGS` — scripts/github_core/rate_limit.py:100 — defined here
- `_run_probe` — scripts/github_core/rate_limit.py:103 — defined here
- `_probe_api_serving` — scripts/github_core/rate_limit.py:122 — defined here
- `_probe_failure_is_a_refusal` — scripts/github_core/rate_limit.py:139 — defined here
- `_fetch_rate_limit` — scripts/github_core/rate_limit.py:160 — defined here
- `_evaluate_resource` — scripts/github_core/rate_limit.py:182 — defined here
- `check_workflow_rate_limit` — scripts/github_core/rate_limit.py:219 — defined here
- `probe_api_reachability` — scripts/github_core/rate_limit.py:304 — defined here

## Structure
none (python module; constants: DEFAULT_RATE_THRESHOLDS, _PROBE_ENDPOINT, _GRAPHQL_PROBE_ARGS; enum: RateLimitStatus; dataclass: RateLimitResult; functions: _run_probe, _probe_api_serving, _probe_failure_is_a_refusal, _fetch_rate_limit, _evaluate_resource, check_workflow_rate_limit, probe_api_reachability)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/github_core/rate_limit.py`, language: Python 3, lines: 325
- documented invocation: none (library module; functions called via `check_workflow_rate_limit` and `probe_api_reachability`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/github_core/rate_limit.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.rate_limit import RateLimitStatus, RateLimitResult; res = RateLimitResult(status=RateLimitStatus.VERIFIED_HEALTHY); print('success:', res.success, res.status)"`
  abridged stdout: `success: True RateLimitStatus.VERIFIED_HEALTHY`
  **actual exit code:** 0
- actual command run (live rate limit check): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python3 -c "from scripts.github_core.rate_limit import check_workflow_rate_limit; res = check_workflow_rate_limit({'core': 10}); print('res status:', res.status)"`
  abridged stdout: `res status: RateLimitStatus.VERIFIED_HEALTHY`
  **actual exit code:** 0
- documented exit codes: none (library module) vs. actual exit paths in code:
  - ValueError: `scripts/github_core/rate_limit.py:66` (success conflicts with status)
  - RuntimeError: `scripts/github_core/rate_limit.py:173` (failed to fetch rate limits)
  - RuntimeError: `scripts/github_core/rate_limit.py:178` (invalid JSON response)
  - clean module execution exits 0
- for validators/gates:
  - can it exit non-zero? no (returns RateLimitResult with `RateLimitStatus.VERIFIED_LIMITED` or `COULD_NOT_DETERMINE` rather than exiting; raises RuntimeError on transport errors)
  - does it fail on the source repo's own default branch? no, executes with exit code 0 and verifies healthy rate limit
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Circular import mitigation: imports `GhAuthStatus, classify_gh_failure_text` lazily at line 152 within `_probe_failure_is_a_refusal` because `scripts.github_core.api` re-exports `rate_limit`.
- Non-exempt live probing: probes `GET /meta` because it consumes quota (observable refusal) and works for GitHub Actions tokens where `GET /user` returns 403.
- Independent GraphQL probing: probes GraphQL viewer endpoint when `graphql` threshold is queried to catch transport-specific quotas.
- Context cost: 11,614 bytes, approximately 2,904 tokens.
