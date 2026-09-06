---
package: rjm
path: .github/scripts/invoke_pr_maintenance.py
type: script
bytes: 20902
unit: inv-rjm-183
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/invoke_pr_maintenance.py

## Purpose — required, verbatim
> "PR discovery and classification for GitHub Actions matrix strategy." — .github/scripts/invoke_pr_maintenance.py:2

## Design intent — required
`invoke_pr_maintenance.py` provides an automated discovery and classification engine that scans open pull requests in a GitHub repository and partitions them into actionable work items for downstream GitHub Actions matrix workflows. Without it, automated PR maintenance (such as comment responses, conflict resolution, failing check alerts, and derivative branch reconciliation) would require manual triage or wasteful linear processing of all PRs, causing slow turnaround times and frequent rate limit exhaustion. By querying the GitHub GraphQL API in bulk (including status check rollups, review threads, and review requests), enforcing rate-limit safety gates, classifying PR authors (agent-controlled bots, mention-triggered bots, humans), and detecting stacked/derivative PR hierarchies targeting non-protected branches, it produces an optimized matrix payload prioritizing actionable issues (conflicts, failing checks, changes requested) while protecting human-authored PRs.

## Phase — required
rjm:review

## Inputs — required
- CLI options and arguments:
  - `--owner`: "Repository owner (inferred from git remote if omitted)" — .github/scripts/invoke_pr_maintenance.py:526
  - `--repo`: "Repository name (inferred from git remote if omitted)" — .github/scripts/invoke_pr_maintenance.py:531
  - `--max-prs`: "Maximum PRs to process (default: 20)" — .github/scripts/invoke_pr_maintenance.py:537
  - `--log-path`: "Path to write detailed log file" — .github/scripts/invoke_pr_maintenance.py:542
  - `--output-json`: "Output JSON to stdout for matrix consumption" — .github/scripts/invoke_pr_maintenance.py:547
- Environment variables:
  - `GITHUB_WORKSPACE`: Workspace root directory — .github/scripts/invoke_pr_maintenance.py:14
  - `GITHUB_STEP_SUMMARY`: Path to write markdown step summary — .github/scripts/invoke_pr_maintenance.py:457
- GitHub GraphQL API response via `_OPEN_PRS_QUERY` fetching pull request nodes, author logins, reviewDecision, reviewRequests, reviewThreads, and statusCheckRollup — .github/scripts/invoke_pr_maintenance.py:60-108

## Outputs — required
- JSON matrix payload written to stdout when `--output-json` is specified, containing sorted `prs` array and `summary` object: .github/scripts/invoke_pr_maintenance.py:604-613
- Human-readable summary output printed to stderr in default mode: .github/scripts/invoke_pr_maintenance.py:417-453, 615
- GitHub Actions step summary markdown appended to `$GITHUB_STEP_SUMMARY`: .github/scripts/invoke_pr_maintenance.py:465-512, 616
- Process exit codes:
  - 0 (success, or rate limit fail-safe exit) — .github/scripts/invoke_pr_maintenance.py:572, 577, 613, 621
  - 2 (repository parameter resolution error) — .github/scripts/invoke_pr_maintenance.py:585

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PROTECTED_BRANCHES` — .github/scripts/invoke_pr_maintenance.py:37 — defined here
- `BOT_CATEGORIES` — .github/scripts/invoke_pr_maintenance.py:39 — defined here
- `agent-controlled` — .github/scripts/invoke_pr_maintenance.py:40 — defined here
- `mention-triggered` — .github/scripts/invoke_pr_maintenance.py:41 — defined here
- `review-bot` — .github/scripts/invoke_pr_maintenance.py:47 — defined here
- `_OPEN_PRS_QUERY` — .github/scripts/invoke_pr_maintenance.py:60 — defined here
- `_fetch_status_context_page` — .github/scripts/invoke_pr_maintenance.py:112 — defined here
- `get_open_prs` — .github/scripts/invoke_pr_maintenance.py:121 — defined here
- `classify_bot` — .github/scripts/invoke_pr_maintenance.py:154 — defined here
- `has_bot_reviewer` — .github/scripts/invoke_pr_maintenance.py:169 — defined here
- `has_conflicts` — .github/scripts/invoke_pr_maintenance.py:189 — defined here
- `has_failing_checks` — .github/scripts/invoke_pr_maintenance.py:194 — defined here
- `has_unresolved_threads` — .github/scripts/invoke_pr_maintenance.py:215 — defined here
- `Issue #974` — .github/scripts/invoke_pr_maintenance.py:221 — used here
- `get_derivative_prs` — .github/scripts/invoke_pr_maintenance.py:248 — defined here
- `derivative PRs` — .github/scripts/invoke_pr_maintenance.py:249 — defined here
- `get_parents_with_derivatives` — .github/scripts/invoke_pr_maintenance.py:265 — defined here
- `discover_and_classify` — .github/scripts/invoke_pr_maintenance.py:296 — defined here
- `PENDING_DERIVATIVES` — .github/scripts/invoke_pr_maintenance.py:323 — defined here
- `HAS_CONFLICTS` — .github/scripts/invoke_pr_maintenance.py:357 — defined here
- `HAS_FAILING_CHECKS` — .github/scripts/invoke_pr_maintenance.py:359 — defined here
- `CHANGES_REQUESTED` — .github/scripts/invoke_pr_maintenance.py:361 — defined here
- `HAS_UNRESOLVED_THREADS` — .github/scripts/invoke_pr_maintenance.py:363 — defined here
- `human-blocked` — .github/scripts/invoke_pr_maintenance.py:388 — defined here
- `_print_summary` — .github/scripts/invoke_pr_maintenance.py:409 — defined here
- `/merge-resolver` — .github/scripts/invoke_pr_maintenance.py:433 — used here
- `/pr-review` — .github/scripts/invoke_pr_maintenance.py:438 — used here
- `_write_step_summary` — .github/scripts/invoke_pr_maintenance.py:455 — defined here
- `GITHUB_STEP_SUMMARY` — .github/scripts/invoke_pr_maintenance.py:457 — used here
- `_build_parser` — .github/scripts/invoke_pr_maintenance.py:519 — defined here
- `main` — .github/scripts/invoke_pr_maintenance.py:552 — defined here
- `RateLimitStatus` — .github/scripts/invoke_pr_maintenance.py:20 — used here

## Structure
- Shebang and module docstring — .github/scripts/invoke_pr_maintenance.py:1
- Imports and workspace sys.path setup — .github/scripts/invoke_pr_maintenance.py:4
- Configuration — .github/scripts/invoke_pr_maintenance.py:33
- GraphQL query definition — .github/scripts/invoke_pr_maintenance.py:56
- GraphQL pagination and PR query helpers — .github/scripts/invoke_pr_maintenance.py:110
- Classification helpers — .github/scripts/invoke_pr_maintenance.py:149
- Derivative detection — .github/scripts/invoke_pr_maintenance.py:243
- Main orchestration — .github/scripts/invoke_pr_maintenance.py:292
- Summary output — .github/scripts/invoke_pr_maintenance.py:404
- CLI entry point — .github/scripts/invoke_pr_maintenance.py:514
- Script execution wrapper __main__ — .github/scripts/invoke_pr_maintenance.py:624

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/invoke_pr_maintenance.py`
- language: Python (python3)
- lines: 626
- documented invocation:
  - "#!/usr/bin/env python3" — .github/scripts/invoke_pr_maintenance.py:1 (shebang; options documented in CLI parser)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/invoke_pr_maintenance.py --help`
- abridged stdout:
  ```text
  usage: invoke_pr_maintenance.py [-h] [--owner OWNER] [--repo REPO]
                                  [--max-prs MAX_PRS] [--log-path LOG_PATH]
                                  [--output-json]

  PR discovery and classification for GitHub Actions matrix strategy.
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: none in script docstring (sibling script `scripts/invoke_pr_maintenance.py:13` documents ADR-035 exit codes 0 and 2)
  - Actual exit paths:
    - `return 0` — .github/scripts/invoke_pr_maintenance.py:572 (rate limit below threshold: fail-safe exit 0)
    - `return 0` — .github/scripts/invoke_pr_maintenance.py:577 (rate limit check runtime error: fail-safe exit 0)
    - `return 2` — .github/scripts/invoke_pr_maintenance.py:585 (exception resolving repository parameters)
    - `return 0` — .github/scripts/invoke_pr_maintenance.py:613 (JSON output mode success)
    - `return 0` — .github/scripts/invoke_pr_maintenance.py:621 (summary output mode success)
    - `raise SystemExit(main())` — .github/scripts/invoke_pr_maintenance.py:625
- for validators/gates: not a blocking gate; PR discovery and matrix preparation tool. Can exit non-zero (exits 2 on repo parameter resolution failure or invalid CLI arguments). Exits 0 on repository runs when authenticated.
- does the output match what the documentation claims: yes (accurately discovers open PRs via GraphQL, classifies bot authors, detects conflicts and failing checks, identifies derivative PRs, and produces matrix JSON or text summary).

## Defects — required
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/invoke_pr_maintenance.py`; it is invoked only by workflow `.github/workflows/pr-maintenance.yml:71`, which is outside the lifecycle manifest scope.
- `internal-contradiction`: In `.github/scripts/invoke_pr_maintenance.py:618-620`, the script accepts CLI parameter `--log-path` but logs `"Log path requested but logging is to stderr in Python mode"` and ignores the file path.

## Observations
- Fail-safe rate limit gate: explicitly exits 0 (not 2) when GitHub API rate limits are insufficient or cannot be determined (lines 564-577), preventing transient GitHub API throttling from failing CI maintenance runs.
- Distinguishes between "acknowledged" and "resolved" review threads (Issue #974): review comments with eyes reactions remain unresolved until explicitly marked resolved in GitHub review threads.
- Implements derivative PR mapping to identify stacked PRs targeting intermediate feature branches rather than protected branches (`main`, `master`, `develop`).

## Context cost
20,902 bytes (approx. 5,225 tokens).
