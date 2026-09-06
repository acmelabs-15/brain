---
package: rjm
path: scripts/validation/pr_commit_count.py
type: script
bytes: 13047
unit: inv-rjm-299
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/pr_commit_count.py, sha256: cb5a32b3515c33d1b879c79b391d4c3df5a688b7ab3d8933c89c30cbaa1eac3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/pr_commit_count.py

## Purpose — required, verbatim
> "Classify a pull request's commit count for the PR validation gate." — scripts/validation/pr_commit_count.py:2

## Design intent — required
Classifies the commit count of a GitHub Pull Request against advisory thresholds (warning at 10, alert at 15) during PR validation workflows. Extracted from inline PowerShell in `.github/workflows/pr-validation.yml` per ADR-006, it replaces former hard blocking ceilings (20/40 commits) and bypass labels (`commit-limit-bypass`) with a purely advisory notification mechanism per ADR-099 and issue #5233. Furthermore, it gracefully degrades to `status=UNKNOWN` with an exit code of 0 on transient GitHub API failures (503s, timeouts, rate limits) to prevent external infrastructure hiccups from failing developer PR validation jobs while preserving hard nonzero exits for genuine configuration or authentication failures (ADR-035).

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `build_parser` (scripts/validation/pr_commit_count.py:252):
  - `--pr-number` (required positive integer pull request number, scripts/validation/pr_commit_count.py:254, 269)
  - `--owner` (optional repository owner string, inferred from git remote if omitted, scripts/validation/pr_commit_count.py:256, 277)
  - `--repo` (optional repository name string, inferred from git remote if omitted, scripts/validation/pr_commit_count.py:259, 277)
- Environment variable `GITHUB_OUTPUT` (optional file path for writing step outputs, scripts/validation/pr_commit_count.py:243)
- GitHub REST API endpoint `repos/{owner}/{repo}/pulls/{pr_number}/commits?per_page=100` queried via `_run_gh` using `gh api` (scripts/validation/pr_commit_count.py:201-202)

## Outputs — required
- Step outputs appended to `$GITHUB_OUTPUT` when set: `status={status}` and `commit_count={count_value}` (scripts/validation/pr_commit_count.py:248-249)
- Standard output reports:
  - Formatted commit summary: `PR #{args.pr_number} has {count} commits (status: {outcome.status}){suffix}` (scripts/validation/pr_commit_count.py:308)
  - Alert notice: `::warning::PR approaching a large commit count ({count} >= {ALERT_THRESHOLD}). Consider shipping current changes.` (scripts/validation/pr_commit_count.py:311)
  - Warning notice: `::notice::PR has many commits ({count} >= {WARNING_THRESHOLD}). Consider squashing or splitting.` (scripts/validation/pr_commit_count.py:316)
  - Transient warning notice on transient API errors: `::warning::Commit count for PR #{args.pr_number} could not be determined (transient GitHub API failure). Skipping the commit-count check for this run; it re-fires on the next healthy run.` (scripts/validation/pr_commit_count.py:299)
- Error diagnostics on stderr for missing arguments, missing `gh`, unresolvable repositories, or API errors (scripts/validation/pr_commit_count.py:270, 281, 289, 292)
- Process exit codes (ADR-035):
  - `0`: Success (status classified or transient UNKNOWN, scripts/validation/pr_commit_count.py:48, 303, 319)
  - `2`: Configuration error (missing/invalid arguments, unresolvable repo, missing `gh`, scripts/validation/pr_commit_count.py:49, 271, 284, 290)
  - `3`: External error (non-transient API failure, scripts/validation/pr_commit_count.py:50, 293)

## Invokes — required
- script api — scripts/validation/pr_commit_count.py:67

## Invoked by — required
- script pr_commit_count — scripts/ci/enforce_pr_validation.py:6
- reference pr_commit_count — .claude/skills/ai-agents-change-control/references/gate-ladder.md:28
- reference pr_commit_count — .claude/skills/ai-agents-change-control/references/provenance.md:13

## Concepts named — required, verbatim
- `ADR-006` — scripts/validation/pr_commit_count.py:6 — used here
- `commit-limit-bypass` — scripts/validation/pr_commit_count.py:13 — used here
- `needs-split` — scripts/validation/pr_commit_count.py:15 — used here
- `ADR-099` — scripts/validation/pr_commit_count.py:30 — used here
- `STATUS_UNKNOWN` — scripts/validation/pr_commit_count.py:81 — defined here
- `ADR-035` — scripts/validation/pr_commit_count.py:39 — used here
- `GhAuthStatus` — scripts/validation/pr_commit_count.py:68 — used here
- `classify_gh_failure_text` — scripts/validation/pr_commit_count.py:69 — used here
- `resolve_repo_params` — scripts/validation/pr_commit_count.py:70 — used here
- `WARNING_THRESHOLD` — scripts/validation/pr_commit_count.py:77 — defined here
- `ALERT_THRESHOLD` — scripts/validation/pr_commit_count.py:78 — defined here
- `CountResult` — scripts/validation/pr_commit_count.py:99 — defined here
- `classify_count` — scripts/validation/pr_commit_count.py:116 — defined here
- `is_transient_error` — scripts/validation/pr_commit_count.py:151 — defined here
- `fetch_commit_count` — scripts/validation/pr_commit_count.py:189 — defined here
- `build_parser` — scripts/validation/pr_commit_count.py:252 — defined here

## Structure
- Module docstring on advisory PR commit count gate (scripts/validation/pr_commit_count.py:1-51)
- Imports and sys.path manipulation (scripts/validation/pr_commit_count.py:53-71)
- Constants (`WARNING_THRESHOLD`, `ALERT_THRESHOLD`, `STATUS_UNKNOWN`, `_TRANSIENT_STATUSES`) (scripts/validation/pr_commit_count.py:77-95)
- CountResult dataclass definition (scripts/validation/pr_commit_count.py:98-113)
- classify_count(count) threshold classifier (scripts/validation/pr_commit_count.py:116-126)
- _authored_commit_count(commits) non-merge commit counter (scripts/validation/pr_commit_count.py:129-148)
- is_transient_error(stderr) transient error checker (scripts/validation/pr_commit_count.py:151-159)
- _run_gh(argv) subprocess runner for GitHub CLI (scripts/validation/pr_commit_count.py:162-187)
- fetch_commit_count(pr_number, owner, repo) GitHub API fetcher and classifier (scripts/validation/pr_commit_count.py:189-238)
- _write_github_output(status, count) step output writer (scripts/validation/pr_commit_count.py:241-249)
- build_parser() command-line argument parser (scripts/validation/pr_commit_count.py:252-261)
- main(argv) CLI entry point (scripts/validation/pr_commit_count.py:264-319)
- Script launcher (scripts/validation/pr_commit_count.py:322-323)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/pr_commit_count.py`, Python 3, 324 lines
- **documented invocation:**
  > "Classify a pull request's commit count for the PR validation gate." — scripts/validation/pr_commit_count.py:2
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/validation/pr_commit_count.py --help`
- **actual exit code:** 0
- **abridged stdout:**
```
usage: pr_commit_count.py [-h] --pr-number PR_NUMBER [--owner OWNER]
                          [--repo REPO]

Classify a pull request's commit count for the PR validation gate...
```
- **documented exit codes:**
  - "0 - Success (a status was classified, including transient UNKNOWN)" — scripts/validation/pr_commit_count.py:48
  - "2 - Config error (missing/invalid arguments, unresolvable repo, missing gh)" — scripts/validation/pr_commit_count.py:49
  - "3 - External error (non-transient gh/API failure)" — scripts/validation/pr_commit_count.py:50
  vs. actual exit paths:
  - scripts/validation/pr_commit_count.py:271: `return 2` (when `--pr-number <= 0`)
  - scripts/validation/pr_commit_count.py:284: `return exc.code if isinstance(exc.code, int) else 2` (when `resolve_repo_params` exits)
  - scripts/validation/pr_commit_count.py:290: `return 2` (when `fetch_commit_count` raises `FileNotFoundError`)
  - scripts/validation/pr_commit_count.py:293: `return 3` (when `fetch_commit_count` raises `RuntimeError`)
  - scripts/validation/pr_commit_count.py:303: `return 0` (when `outcome.transient` is True)
  - scripts/validation/pr_commit_count.py:319: `return 0` (when classification succeeds)
  - scripts/validation/pr_commit_count.py:323: `raise SystemExit(main())`
- **validators/gates:** can it exit non-zero: yes (exits 2 on invalid arguments or missing `gh`, exits 3 on non-transient GitHub API errors). Does it fail on source repo's default branch: no (commit count classification is advisory per ADR-099, emitting warnings but returning 0).
- **output match:** yes, stdout/stderr messages and exit codes align with documented ADR-035 contract.

## Defects — required
none

## Observations
- Discards branch maintenance merge commits (`_authored_commit_count` at scripts/validation/pr_commit_count.py:129-148), ensuring that rebases and merges from `origin/main` do not consume the advisory commit count threshold (issue #3920).
- Fails closed on unparseable commit objects by counting them as authored commits, preventing malformed payload bugs from masking real scope growth.
- Routes error classification through shared `classify_gh_failure_text` so this script and GitHub preflight tools maintain consistent definitions of transient vs. fatal errors.
- Unpaginated query with `per_page=100` saturates at 100 commits without breaking classification, as the highest active threshold is 15.

## Context cost
13047 bytes (~3200 tokens). Imports `scripts.github_core.api` (stdlib only).
