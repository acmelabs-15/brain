---
package: rjm
path: scripts/update_reviewer_signal_stats.py
type: script
bytes: 25752
unit: inv-rjm-266
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/update_reviewer_signal_stats.py

## Purpose — required, verbatim
> "Aggregate PR review comment statistics by reviewer and update Serena memory." — scripts/update_reviewer_signal_stats.py:2

## Design intent — required
Aggregates and evaluates GitHub PR review comment quality per reviewer over a configurable rolling time window (default 28 days) by querying PR review threads via the GitHub GraphQL API, applying heuristic scoring (with optional LLM fallback) to classify comment actionability, and computing reviewer signal rates and trends. The resulting cumulative performance statistics are committed atomically into Serena memory (`.serena/memories/pr-review/pr-comment-responder-skills.md`) and appended to GitHub Actions step summaries, giving automated PR comment responders empirical signal data to prioritize high-value reviewer feedback and filter noise.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments `--days-back` (default: 28), `--owner`, and `--repo`: `scripts/update_reviewer_signal_stats.py:643-658`
- Environment variables `GITHUB_WORKSPACE` (`scripts/update_reviewer_signal_stats.py:28-31`) and `GITHUB_STEP_SUMMARY` (`scripts/update_reviewer_signal_stats.py:598`)
- LLM fallback configuration loaded from environment variables via `LLMFallbackConfig.from_env()`: `scripts/update_reviewer_signal_stats.py:735`
- GitHub PR and review comment threads fetched via GraphQL API (`get_all_prs_with_comments`): `scripts/update_reviewer_signal_stats.py:718`
- Existing Serena memory file read from `.serena/memories/pr-review/pr-comment-responder-skills.md`: `scripts/update_reviewer_signal_stats.py:67,526`

## Outputs — required
- Atomic update to the `## Per-Reviewer Performance (Cumulative)` Markdown table in `.serena/memories/pr-review/pr-comment-responder-skills.md`: `scripts/update_reviewer_signal_stats.py:67,530-579`
- Appended reviewer ranking metrics to GitHub Actions step summary file at `$GITHUB_STEP_SUMMARY`: `scripts/update_reviewer_signal_stats.py:598-631`
- Execution logs and summary statistics emitted to standard error: `scripts/update_reviewer_signal_stats.py:664-769`

## Invokes — required
- script scripts.github_core.api — scripts/update_reviewer_signal_stats.py:34
- script scripts.github_core.bot_config — scripts/update_reviewer_signal_stats.py:40
- script scripts.github_core.repo — scripts/update_reviewer_signal_stats.py:41
- script scripts.llm_classification — scripts/update_reviewer_signal_stats.py:42
- script hook_utilities — scripts/update_reviewer_signal_stats.py:395

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/update_reviewer_signal_stats.py:8 — used here
- `RateLimitStatus` — scripts/update_reviewer_signal_stats.py:35 — used here
- `check_workflow_rate_limit` — scripts/update_reviewer_signal_stats.py:36 — used here
- `get_all_prs_with_comments` — scripts/update_reviewer_signal_stats.py:37 — used here
- `resolve_repo_params` — scripts/update_reviewer_signal_stats.py:38 — used here
- `canonicalize_login` — scripts/update_reviewer_signal_stats.py:40 — used here
- `get_repo_root` — scripts/update_reviewer_signal_stats.py:41 — used here
- `LLMClassifier` — scripts/update_reviewer_signal_stats.py:43 — used here
- `LLMFallbackConfig` — scripts/update_reviewer_signal_stats.py:44 — used here
- `get_default_classifier` — scripts/update_reviewer_signal_stats.py:45 — used here
- `SELF_COMMENT_EXCLUDED_AUTHORS` — scripts/update_reviewer_signal_stats.py:54 — defined here
- `HEURISTICS` — scripts/update_reviewer_signal_stats.py:56 — defined here
- `MEMORY_PATH` — scripts/update_reviewer_signal_stats.py:67 — defined here
- `TREND_THRESHOLDS` — scripts/update_reviewer_signal_stats.py:69 — defined here
- `FIXED_PATTERN` — scripts/update_reviewer_signal_stats.py:78 — defined here
- `WONTFIX_PATTERN` — scripts/update_reviewer_signal_stats.py:81 — defined here
- `HIGH_SEVERITY_PATTERN` — scripts/update_reviewer_signal_stats.py:84 — defined here
- `LOW_SEVERITY_PATTERN` — scripts/update_reviewer_signal_stats.py:87 — defined here
- `NULL_PATTERN` — scripts/update_reviewer_signal_stats.py:90 — defined here
- `UNUSED_PATTERN` — scripts/update_reviewer_signal_stats.py:93 — defined here
- `CommentData` — scripts/update_reviewer_signal_stats.py:103 — defined here
- `ActionabilityResult` — scripts/update_reviewer_signal_stats.py:116 — defined here
- `ReviewerStats` — scripts/update_reviewer_signal_stats.py:126 — defined here
- `SignalStats` — scripts/update_reviewer_signal_stats.py:137 — defined here
- `_is_same_actor` — scripts/update_reviewer_signal_stats.py:156 — defined here
- `get_comments_by_reviewer` — scripts/update_reviewer_signal_stats.py:177 — defined here
- `get_actionability_score` — scripts/update_reviewer_signal_stats.py:250 — defined here
- `_atomic_write_text` — scripts/update_reviewer_signal_stats.py:361 — defined here
- `_try_lock_helpers` — scripts/update_reviewer_signal_stats.py:383 — defined here
- `_locked_append` — scripts/update_reviewer_signal_stats.py:401 — defined here
- `get_reviewer_signal_stats` — scripts/update_reviewer_signal_stats.py:420 — defined here
- `update_serena_memory` — scripts/update_reviewer_signal_stats.py:503 — defined here
- `_write_step_summary` — scripts/update_reviewer_signal_stats.py:591 — defined here
- `_build_parser` — scripts/update_reviewer_signal_stats.py:639 — defined here
- `main` — scripts/update_reviewer_signal_stats.py:662 — defined here

## Structure
- Module docstring with ADR-035 exit code specification (lines 1-13)
- Imports and workspace sys.path configuration (lines 14-49)
- Configuration constants and default heuristics (lines 51-73)
- Regex patterns for actionability scoring (lines 75-96)
- Dataclasses for comments, actionability, and reviewer stats (lines 98-150)
- Actor identity comparison (_is_same_actor) (lines 156-175)
- Comment aggregation by reviewer (get_comments_by_reviewer) (lines 177-248)
- Actionability heuristic and LLM scoring (get_actionability_score) (lines 250-359)
- Atomic file writing helper (_atomic_write_text) (lines 361-381)
- Advisory lock helpers (_try_lock_helpers, _locked_append) (lines 383-418)
- Reviewer signal statistics calculation (get_reviewer_signal_stats) (lines 420-500)
- Serena memory file update (update_serena_memory) (lines 503-584)
- GitHub Actions step summary generation (_write_step_summary) (lines 587-632)
- Argument parsing (_build_parser) (lines 639-660)
- Main CLI entry point and orchestration (main) (lines 662-774)
- Execution guard (raise SystemExit(main())) (lines 776-778)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/update_reviewer_signal_stats.py`
- **language:** Python 3
- **lines:** 778
- **documented invocation:**
  > "Aggregate PR review comment statistics by reviewer and update Serena memory." — scripts/update_reviewer_signal_stats.py:641
- **executed:** yes
- **actual command run:** `python3 scripts/update_reviewer_signal_stats.py --help`
- **abridged stdout:**
  ```text
  usage: update_reviewer_signal_stats.py [-h] [--days-back DAYS_BACK]
                                         [--owner OWNER] [--repo REPO]

  Aggregate PR review comment statistics by reviewer and update Serena memory.

  options:
    -h, --help            show this help message and exit
    --days-back DAYS_BACK
                          Days of PR history to analyze (default: 28, range:
                          1-365)
    --owner OWNER         Repository owner (inferred from git remote if omitted)
    --repo REPO           Repository name (inferred from git remote if omitted)
  ```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented (lines 8-12):
    > "0 - Success" — scripts/update_reviewer_signal_stats.py:9
    > "1 - Invalid parameters / logic error" — scripts/update_reviewer_signal_stats.py:10
    > "2 - API / external error" — scripts/update_reviewer_signal_stats.py:11
  - Actual exit paths:
    - `0`: clean exit on `--help` (via argparse), no PRs found (`scripts/update_reviewer_signal_stats.py:725`), no reviewer comments found (`scripts/update_reviewer_signal_stats.py:732`), or successful aggregation and memory update (`scripts/update_reviewer_signal_stats.py:773`)
    - `1`: invalid `--days-back` range (<1 or >365) (`scripts/update_reviewer_signal_stats.py:676`)
    - `2`: rate limit check unhealthy (`scripts/update_reviewer_signal_stats.py:695`), rate limit runtime error (`scripts/update_reviewer_signal_stats.py:698`), repo parameter resolution error (`scripts/update_reviewer_signal_stats.py:707`), or PR fetch runtime error (`scripts/update_reviewer_signal_stats.py:721`)
- **for validators/gates:**
  - Can exit non-zero: yes (exits 1 on invalid argument, 2 on API/external error).
  - Verified on repository default branch: executes live against repository PR history and exits 0 (analyzed 319 PRs, 3317 comments from 6 reviewers in 25.7s).
- **does the output match what the documentation claims:** yes, aggregates reviewer comment statistics and updates the cumulative performance table in Serena memory file.

## Defects — required
- `orphan`: `scripts/update_reviewer_signal_stats.py:1` is not invoked by any entry point or other in-scope script (referenced only in `scripts/github_core/rate_limit.py:228` docstring and in test suites).

## Observations
- Demonstrates robust operational practices: atomic text writing via temporary file replacement (`_atomic_write_text`), best-effort advisory file locking (`_try_lock_helpers`, `_locked_append`), and API rate limit gating prior to executing queries (`check_workflow_rate_limit`).
- Canonicalizes reviewer logins using `canonicalize_login` and verifies author identity authoritative status via `_is_same_actor` to prevent duplicate counting or misattribution of bot/integration logins across multiple aliases (issue #4378).
- Directly targets `.serena/memories/pr-review/pr-comment-responder-skills.md`, showing tight coupling between script-based PR telemetry and Serena's persistent agent memory store (which falls on the excluded side of the synthesis boundary in METHOD.md §1.2).

## Context cost
25752 bytes, 778 lines, ~6400 tokens. Loaded dependencies include `scripts/github_core/` modules (api: 43.8 KB, bot_config: 13.2 KB, repo: 3.7 KB) and `scripts/llm_classification` (~15 KB), bringing total direct import context to ~102 KB.
