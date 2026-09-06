---
package: rjm
path: scripts/invoke_pr_maintenance.py
type: script
bytes: 17011
unit: inv-rjm-248
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/invoke_pr_maintenance.py, sha256: cf6821b40349600ee232c5ec178b4f594a01289a9f6dd3cd2787096caf8c07f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/invoke_pr_maintenance.py

## Purpose — required, verbatim
> "PR discovery and classification for GitHub Actions matrix strategy." — scripts/invoke_pr_maintenance.py:2

## Design intent — required
Automates pull request discovery and triage for GitHub Actions workflow automation. The script queries open pull requests via GitHub GraphQL API, fetches and paginates CI/CD status check rollups, inspects review thread resolutions according to the "Acknowledged vs Resolved" lifecycle model, and categorizes PRs by activation type (agent-controlled, mention-triggered, stacked derivative PRs, or human-blocked). It emits either formatted console summaries with recommended follow-up slash commands (`/merge-resolver`, `/pr-review`, `/pr-comment-responder`) or structured JSON payloads to drive parallel matrix jobs in GitHub Actions, while incorporating a fail-safe API rate limit pre-check to prevent workflow failures during rate-limit exhaustion.

## Phase — required
rjm:review

## Inputs — required
- CLI options parsed via `argparse`:
  - `--owner`: repository owner string (default empty, resolved from git remote) — scripts/invoke_pr_maintenance.py:429
  - `--repo`: repository name string (default empty, resolved from git remote) — scripts/invoke_pr_maintenance.py:430
  - `--max-prs`: maximum PRs to query and process (default 20) — scripts/invoke_pr_maintenance.py:431
  - `--log-path`: path to write log file (default empty, unused) — scripts/invoke_pr_maintenance.py:432
  - `--output-json`: flag to emit JSON matrix output — scripts/invoke_pr_maintenance.py:434
- GitHub GraphQL API responses via `GRAPHQL_QUERY` fetching repository PRs with fields `number`, `title`, `author`, `headRefName`, `baseRefName`, `mergeable`, `reviewDecision`, `reviewRequests`, `reviewThreads`, and `statusCheckRollup` — scripts/invoke_pr_maintenance.py:153-203
- Status check context pages via `fetch_status_context_page_with_gh` — scripts/invoke_pr_maintenance.py:213
- GitHub API rate limit status via `check_workflow_rate_limit` with thresholds `{"core": 100, "graphql": 50}` — scripts/invoke_pr_maintenance.py:440-442
- Environment variable `GITHUB_STEP_SUMMARY` for GitHub Actions markdown reporting — scripts/invoke_pr_maintenance.py:405

## Outputs — required
- Structured JSON output to stdout when `--output-json` is specified, containing `prs` (sorted action-required list) and `summary` counts (`total`, `actionRequired`, `blocked`, `derivatives`) — scripts/invoke_pr_maintenance.py:480-489
- Plaintext summary output to stdout when `--output-json` is omitted, reporting total open PRs, action-required PRs, suggested slash commands, and human-blocked PRs — scripts/invoke_pr_maintenance.py:377-402
- GitHub Actions step summary markdown appended to file path in `GITHUB_STEP_SUMMARY` — scripts/invoke_pr_maintenance.py:405
- Standard error messages for rate limit gate exits, repository parameter resolution failures, or fatal exceptions — scripts/invoke_pr_maintenance.py:447, 452, 461, 497
- Process exit codes: 0 on success or rate limit fail-safe exit; 2 on repository parameter failure or fatal exception — scripts/invoke_pr_maintenance.py:14-15, 448, 453, 459, 462, 490, 494, 498

## Invokes — required
- script scripts.github_core — scripts/invoke_pr_maintenance.py:36
- script scripts.pr_maintenance_rollup — scripts/invoke_pr_maintenance.py:41

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-035` — scripts/invoke_pr_maintenance.py:17 — used here
`RateLimitStatus` — scripts/invoke_pr_maintenance.py:37 — used here
`check_workflow_rate_limit` — scripts/invoke_pr_maintenance.py:38 — used here
`resolve_repo_params` — scripts/invoke_pr_maintenance.py:39 — used here
`complete_status_check_rollups` — scripts/invoke_pr_maintenance.py:42 — used here
`fetch_status_context_page_with_gh` — scripts/invoke_pr_maintenance.py:43 — used here
`rollup_has_failing_checks` — scripts/invoke_pr_maintenance.py:44 — used here
`PROTECTED_BRANCHES` — scripts/invoke_pr_maintenance.py:49 — defined here
`BOT_CATEGORIES` — scripts/invoke_pr_maintenance.py:51 — defined here
`run_gh` — scripts/invoke_pr_maintenance.py:69 — defined here
`BotInfo` — scripts/invoke_pr_maintenance.py:81 — defined here
`get_bot_author_info` — scripts/invoke_pr_maintenance.py:87 — defined here
`is_bot_reviewer` — scripts/invoke_pr_maintenance.py:97 — defined here
`has_failing_checks` — scripts/invoke_pr_maintenance.py:113 — defined here
`has_unresolved_threads` — scripts/invoke_pr_maintenance.py:127 — defined here
`Acknowledged vs Resolved` — scripts/invoke_pr_maintenance.py:133 — used here
`GRAPHQL_QUERY` — scripts/invoke_pr_maintenance.py:153 — defined here
`_fetch_status_context_page` — scripts/invoke_pr_maintenance.py:207 — defined here
`get_open_prs` — scripts/invoke_pr_maintenance.py:216 — defined here
`MaintenanceResults` — scripts/invoke_pr_maintenance.py:243 — defined here
`classify_prs` — scripts/invoke_pr_maintenance.py:251 — defined here
`print_summary` — scripts/invoke_pr_maintenance.py:376 — defined here
`/merge-resolver` — scripts/invoke_pr_maintenance.py:390 — used here
`/pr-review` — scripts/invoke_pr_maintenance.py:392 — used here
`/pr-comment-responder` — scripts/invoke_pr_maintenance.py:395 — used here
`write_step_summary` — scripts/invoke_pr_maintenance.py:404 — defined here
`main` — scripts/invoke_pr_maintenance.py:425 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/invoke_pr_maintenance.py`, language: Python 3, lines: 503
- documented invocation: `"PR discovery and classification for GitHub Actions matrix strategy." — scripts/invoke_pr_maintenance.py:2`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/invoke_pr_maintenance.py --help`
  abridged stdout:
  ```text
  usage: invoke_pr_maintenance.py [-h] [--owner OWNER] [--repo REPO]
                                  [--max-prs MAX_PRS] [--log-path LOG_PATH]
                                  [--output-json]

  PR discovery and classification

  options:
    -h, --help           show this help message and exit
    --owner OWNER        Repository owner
    --repo REPO          Repository name
    --max-prs MAX_PRS    Max PRs to process
    --log-path LOG_PATH  Path to write log file
    --output-json        Output JSON for matrix
  ```
  **actual exit code**: 0
  Additional execution with test repo: `python3 sources/rjm/scripts/invoke_pr_maintenance.py --owner test --repo test`, stdout: `Fatal error: Failed to query PRs: gh: Could not resolve to a Repository with the name 'test/test'.`, actual exit code: 2
- documented exit codes:
  `"0  - Success: PR maintenance completed" — scripts/invoke_pr_maintenance.py:14`
  `"2  - Error: Script failure, API errors, or fatal exceptions" — scripts/invoke_pr_maintenance.py:15`
  vs. actual exit paths:
  `scripts/invoke_pr_maintenance.py:448` (`return 0` on rate limit check status != VERIFIED_HEALTHY)
  `scripts/invoke_pr_maintenance.py:453` (`return 0` on rate limit check exception)
  `scripts/invoke_pr_maintenance.py:459` (`return 2` on `SystemExit` from `resolve_repo_params`)
  `scripts/invoke_pr_maintenance.py:462` (`return 2` on `RuntimeError, OSError, subprocess.SubprocessError` from `resolve_repo_params`)
  `scripts/invoke_pr_maintenance.py:490` (`return 0` on successful JSON output)
  `scripts/invoke_pr_maintenance.py:494` (`return 0` on successful summary output)
  `scripts/invoke_pr_maintenance.py:498` (`return 2` on fatal exception catch-all)
  dispatched via `sys.exit(main())` at `scripts/invoke_pr_maintenance.py:502`
- for validators/gates: not a validation gate; orchestration and classification utility. Exits 0 on success or rate limit fail-safe; exits 2 on repository parameter failure or API errors.
- does the output match what the documentation claims? yes, queries and classifies pull requests into structured JSON or formatted text summary.

## Defects — required
- `orphan` · scripts/invoke_pr_maintenance.py:1 · Uninvoked script in `scripts/`; the GitHub Actions workflow `.github/workflows/pr-maintenance.yml:71` invokes `.github/scripts/invoke_pr_maintenance.py` instead.
- `script-bug` · scripts/invoke_pr_maintenance.py:432 · CLI parameter `--log-path` is defined in argparse but never referenced, opened, or written to anywhere in the script.
- `script-bug` · scripts/invoke_pr_maintenance.py:251 · Function `classify_prs(owner, repo, prs)` accepts `owner` and `repo` arguments that are unused within the function body.

## Observations
- Fail-safe rate limit gate: explicitly exits with status 0 (lines 443-453) when API rate limit thresholds (`core: 100`, `graphql: 50`) are not met or rate limit checks fail, preventing CI job failures caused by GitHub API quota limits.
- Supports the "Acknowledged vs Resolved" lifecycle model (Issue #974): distinguishes between acknowledging review comments (e.g. eyes reaction) and full thread resolution (`isResolved` in GitHub GraphQL schema).
- Distinguishes bot categories (`agent-controlled`, `mention-triggered`, `review-bot`) and isolates derivative PR hierarchies targeting non-protected branches from human-authored PRs.

## Context cost
17011 bytes, approximately 4300 tokens (plus ~66 KB of imported library modules `scripts.github_core` and `scripts.pr_maintenance_rollup`, totaling ~83 KB / ~21,000 tokens).
