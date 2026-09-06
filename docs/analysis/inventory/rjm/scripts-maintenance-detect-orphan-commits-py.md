---
package: rjm
path: scripts/maintenance/detect_orphan_commits.py
type: script
bytes: 9560
unit: inv-rjm-251
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/detect_orphan_commits.py

## Purpose — required, verbatim
> "Report commits pushed to a PR branch after that PR merged." — scripts/maintenance/detect_orphan_commits.py:2

## Design intent — required
Detects commits erroneously pushed to remote pull request branches after those pull requests have already merged on GitHub. Because GitHub silently accepts pushes to merged PR head branches without triggering CI checks or alerting repository maintainers, autonomous agents or developers operating concurrently can commit changes to a branch believing work is ongoing, causing code modifications to be lost when branches are subsequently pruned. By fetching recent merged PR records via the GitHub CLI (`gh pr list`), querying remote branch head SHAs via `git ls-remote`, and checking reachability from `origin/main` using `git merge-base`, this tool identifies diverged post-merge branches and generates actionable diff recovery commands (`git diff <merged_head> <current_tip>`) for human reviewers in both terminal and GitHub Actions job summary formats.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--limit`: "DEFAULT_LIMIT = 50" (line 38), parsed at scripts/maintenance/detect_orphan_commits.py:220
- CLI option `--repo`: "owner/name; defaults to the clone" — scripts/maintenance/detect_orphan_commits.py:221
- CLI option `--base-ref`: "origin/main" (scripts/maintenance/detect_orphan_commits.py:222)
- CLI option `--json`: Flag controlling JSON serialization (scripts/maintenance/detect_orphan_commits.py:223)
- Environment variable `GITHUB_STEP_SUMMARY`: File path for writing Markdown job summary (scripts/maintenance/detect_orphan_commits.py:250)
- GitHub API via `gh pr list --state merged` returning PR metadata JSON: `number`, `headRefName`, `headRefOid`, `mergedAt` (scripts/maintenance/detect_orphan_commits.py:107-111)
- Git remote heads via `git ls-remote --heads` (scripts/maintenance/detect_orphan_commits.py:126)
- Git commit object verification and ancestry checks: `git cat-file -e <sha>^{commit}` and `git merge-base --is-ancestor <sha> <base_ref>` (scripts/maintenance/detect_orphan_commits.py:147, 150-153)

## Outputs — required
- Human-readable report written to stdout with finding counts, branch names, commit SHAs, landed status, and recovery commands (scripts/maintenance/detect_orphan_commits.py:160-171, 247)
- JSON report written to stdout when `--json` is supplied (scripts/maintenance/detect_orphan_commits.py:237-245)
- Markdown table appended to GitHub Actions job summary file specified by `GITHUB_STEP_SUMMARY` (scripts/maintenance/detect_orphan_commits.py:176-194, 198-215, 248-251)
- Error message written to stderr on failure: `ERROR: <msg>` (scripts/maintenance/detect_orphan_commits.py:233) or warning on unwritable summary (line 213)
- Process exit code: 0 (no orphan commits found), 1 (orphan commits detected), 2 (configuration or runtime error) (scripts/maintenance/detect_orphan_commits.py:23-25, 234, 252)

## Invokes — required
- script audit_orphaned_branches.py — scripts/maintenance/detect_orphan_commits.py:22
- script write_pr_discovery_summary.py — scripts/maintenance/detect_orphan_commits.py:204

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `OrphanFinding` — scripts/maintenance/detect_orphan_commits.py:44 — defined here
- `find_orphan_commits` — scripts/maintenance/detect_orphan_commits.py:55 — defined here
- `fetch_merged_prs` — scripts/maintenance/detect_orphan_commits.py:105 — defined here
- `fetch_remote_tips` — scripts/maintenance/detect_orphan_commits.py:124 — defined here
- `make_is_landed` — scripts/maintenance/detect_orphan_commits.py:139 — defined here
- `format_report` — scripts/maintenance/detect_orphan_commits.py:158 — defined here
- `format_step_summary` — scripts/maintenance/detect_orphan_commits.py:174 — defined here
- `write_step_summary` — scripts/maintenance/detect_orphan_commits.py:197 — defined here
- `parse_args` — scripts/maintenance/detect_orphan_commits.py:218 — defined here
- `main` — scripts/maintenance/detect_orphan_commits.py:227 — defined here
- `_run` — scripts/maintenance/detect_orphan_commits.py:92 — defined here
- `DEFAULT_LIMIT` — scripts/maintenance/detect_orphan_commits.py:38 — defined here
- `_GH_TIMEOUT` — scripts/maintenance/detect_orphan_commits.py:39 — defined here
- `_GIT_TIMEOUT` — scripts/maintenance/detect_orphan_commits.py:40 — defined here

## Structure
- Shebang and module docstring detailing post-merge push problem, detection logic, and exit codes (scripts/maintenance/detect_orphan_commits.py:1-26)
- Imports and timeout/limit constants (scripts/maintenance/detect_orphan_commits.py:28-40)
- `OrphanFinding` dataclass definition (scripts/maintenance/detect_orphan_commits.py:43-52)
- `find_orphan_commits` detection comparison logic (scripts/maintenance/detect_orphan_commits.py:55-89)
- `_run` subprocess runner helper (scripts/maintenance/detect_orphan_commits.py:92-102)
- `fetch_merged_prs` GitHub CLI query (scripts/maintenance/detect_orphan_commits.py:105-121)
- `fetch_remote_tips` git ls-remote parser (scripts/maintenance/detect_orphan_commits.py:124-136)
- `make_is_landed` ancestry predicate factory (scripts/maintenance/detect_orphan_commits.py:139-155)
- `format_report` terminal plaintext formatter (scripts/maintenance/detect_orphan_commits.py:158-171)
- `format_step_summary` Markdown job summary formatter (scripts/maintenance/detect_orphan_commits.py:174-194)
- `write_step_summary` job summary appender (scripts/maintenance/detect_orphan_commits.py:197-215)
- `parse_args` CLI argument parser (scripts/maintenance/detect_orphan_commits.py:218-224)
- `main` entry point and error handler (scripts/maintenance/detect_orphan_commits.py:227-252)
- Top-level script execution guard (scripts/maintenance/detect_orphan_commits.py:255-256)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/maintenance/detect_orphan_commits.py`
- **language:** Python (python3)
- **lines:** 257
- **documented invocation:**
  - `python3 scripts/maintenance/detect_orphan_commits.py --limit 50` — .github/workflows/pr-maintenance.yml:98
- **executed:** yes
- **actual command run:** `python3 scripts/maintenance/detect_orphan_commits.py`
- **abridged stdout:**
```
orphan-commits: 1 finding(s) in 50 merged PR(s)
  PR #5527 renovate/github-copilot-1.x: merged at bdcb77c57f56361c7533898a4d2f736a2a3c3fe0 but branch now at 751be86ac0efc34d6b74c3317888c52da9fd0ddd (NOT on main); merged 2026-09-03T21:43:15Z
    recover with: git diff bdcb77c57f56361c7533898a4d2f736a2a3c3fe0 751be86ac0efc34d6b74c3317888c52da9fd0ddd
```
- **actual exit code:** 1
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - no orphan commits found" — scripts/maintenance/detect_orphan_commits.py:23
    - "1 - orphan commits detected (warning, not a gate)" — scripts/maintenance/detect_orphan_commits.py:24
    - "2 - configuration or runtime error" — scripts/maintenance/detect_orphan_commits.py:25
  - Actual exit paths in code:
    - `return 1 if findings else 0` — scripts/maintenance/detect_orphan_commits.py:252
    - `return 2` — scripts/maintenance/detect_orphan_commits.py:234
    - `sys.exit(main())` — scripts/maintenance/detect_orphan_commits.py:256
  - Result: Documented exit codes match actual code exit paths exactly. Tested with `python3 scripts/maintenance/detect_orphan_commits.py --limit 1` (exit 0), `python3 scripts/maintenance/detect_orphan_commits.py` (exit 1), and `python3 scripts/maintenance/detect_orphan_commits.py --limit 0` (exit 2).
- **for validators/gates:** Can exit non-zero (1 when orphans exist, 2 on runtime error). On the source repo's default branch, exits 1 due to PR #5527 holding post-merge commits.
- **does the output match what the documentation claims:** Yes, accurately reports examined PR count, finding details, landed status, and recovery git command.

## Defects — required
- orphan · scripts/maintenance/detect_orphan_commits.py:1 · Script is invoked by .github/workflows/pr-maintenance.yml:98 and tests/maintenance/test_detect_orphan_commits.py:16; no caller in the in-scope manifest graph.

## Observations
- Solves a specific multi-agent coordination risk: agents pushing code to remote branches after an automated or squash merge has already occurred.
- Designed to run with `continue-on-error: true` in GitHub Actions hourly sweep (`.github/workflows/pr-maintenance.yml:95`), routing advisory findings to `GITHUB_STEP_SUMMARY` without halting the CI pipeline.

## Context cost
9560 bytes, 257 lines, ~2390 tokens.
