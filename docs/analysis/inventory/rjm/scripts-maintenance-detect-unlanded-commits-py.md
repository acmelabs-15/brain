---
package: rjm
path: scripts/maintenance/detect_unlanded_commits.py
type: script
bytes: 4687
unit: inv-rjm-251
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/detect_unlanded_commits.py

## Purpose — required, verbatim
> "Detect remote branches whose PR merged but whose tip is not an ancestor of main." — scripts/maintenance/detect_unlanded_commits.py:1

## Design intent — required
Identifies remote branches whose commits are not reachable from the default branch (`main`) following pull request mergers. When PRs are merged via squash merge, the original commits and branch HEAD remain disconnected from `main`'s history, appearing as unmerged ancestry despite the PR being marked closed/merged. Any subsequent commits pushed to the branch before deletion risk being permanently lost. This script queries Git remote branches using `git branch -r --no-merged`, computes unlanded commit counts via `git rev-list --count`, and optionally validates PR merge status via GitHub REST API calls (`gh api /repos/{owner}/{repo}/pulls`), outputting warning summaries with branch names, tip SHAs, and unlanded commit counts so humans can inspect and recover lost diffs.

## Phase — required
cross-phase

## Inputs — required
- CLI option `--repo`: "path to git repo (default: .)" — scripts/maintenance/detect_unlanded_commits.py:128
- CLI option `--base-ref`: "base ref to check against" — scripts/maintenance/detect_unlanded_commits.py:130
- CLI option `--check-github`: "filter to branches whose PR is confirmed merged on GitHub (requires gh CLI)" — scripts/maintenance/detect_unlanded_commits.py:135
- Remote branches query: `git branch -r --no-merged` (scripts/maintenance/detect_unlanded_commits.py:47)
- Commit SHA query: `git rev-parse` (scripts/maintenance/detect_unlanded_commits.py:61)
- Unmerged commit count query: `git rev-list --count` (scripts/maintenance/detect_unlanded_commits.py:66)
- Ancestry check query: `git merge-base --is-ancestor` (scripts/maintenance/detect_unlanded_commits.py:56)
- GitHub REST API PR check via `gh api /repos/{owner}/{repo}/pulls` querying `merged_at` (scripts/maintenance/detect_unlanded_commits.py:85-95)

## Outputs — required
- Success message written to stdout when clean: "No unlanded commits found." — scripts/maintenance/detect_unlanded_commits.py:146
- Warning message and branch list written to stdout when unlanded branches are found (scripts/maintenance/detect_unlanded_commits.py:149-151)
- Error message written to stderr on runtime exception (scripts/maintenance/detect_unlanded_commits.py:142)
- Process exit code: 0 (clean), 1 (unlanded branches detected), 2 (error) (scripts/maintenance/detect_unlanded_commits.py:10-12, 143, 147, 152)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `UnlandedBranch` — scripts/maintenance/detect_unlanded_commits.py:38 — defined here
- `_git` — scripts/maintenance/detect_unlanded_commits.py:25 — defined here
- `_remote_merged_branches` — scripts/maintenance/detect_unlanded_commits.py:44 — defined here
- `_is_ancestor` — scripts/maintenance/detect_unlanded_commits.py:55 — defined here
- `_tip_sha` — scripts/maintenance/detect_unlanded_commits.py:60 — defined here
- `_commit_count_not_in_base` — scripts/maintenance/detect_unlanded_commits.py:65 — defined here
- `_branch_pr_merged` — scripts/maintenance/detect_unlanded_commits.py:75 — defined here
- `scan` — scripts/maintenance/detect_unlanded_commits.py:109 — defined here
- `main` — scripts/maintenance/detect_unlanded_commits.py:126 — defined here
- `_GIT_TIMEOUT` — scripts/maintenance/detect_unlanded_commits.py:22 — defined here

## Structure
- Module docstring detailing squash merge problem, unlanded diff surfacing, and exit codes (scripts/maintenance/detect_unlanded_commits.py:1-13)
- Imports and `_GIT_TIMEOUT` constant (scripts/maintenance/detect_unlanded_commits.py:15-22)
- `_git` subprocess execution helper (scripts/maintenance/detect_unlanded_commits.py:25-35)
- `UnlandedBranch` NamedTuple definition (scripts/maintenance/detect_unlanded_commits.py:38-41)
- `_remote_merged_branches` non-ancestor branch collector (scripts/maintenance/detect_unlanded_commits.py:44-52)
- `_is_ancestor` merge-base check (scripts/maintenance/detect_unlanded_commits.py:55-57)
- `_tip_sha` commit SHA resolver (scripts/maintenance/detect_unlanded_commits.py:60-62)
- `_commit_count_not_in_base` commit counter (scripts/maintenance/detect_unlanded_commits.py:65-72)
- `_branch_pr_merged` GitHub API merge checker (scripts/maintenance/detect_unlanded_commits.py:75-106)
- `scan` branch enumerator and filter (scripts/maintenance/detect_unlanded_commits.py:109-123)
- `main` CLI argument parsing and driver (scripts/maintenance/detect_unlanded_commits.py:126-152)
- Top-level script execution guard (scripts/maintenance/detect_unlanded_commits.py:155-156)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/maintenance/detect_unlanded_commits.py`
- **language:** Python (python3)
- **lines:** 157
- **documented invocation:**
  - none (CLI entry point defined in `main`; options documented in argparse parser)
- **executed:** yes
- **actual command run:** `python3 scripts/maintenance/detect_unlanded_commits.py`
- **abridged stdout:**
```
WARNING: 274 branch(es) have commits not in origin/main:
  origin/adr-058-scrap-distinction-2389  tip=d868b5e1ce5b  commits=1
  origin/adr/2615-pr-autofix-lease  tip=043a35949332  commits=4
  origin/agent/docs  tip=48f9e2ad0eba  commits=12
```
- **actual exit code:** 1
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - no unlanded commits found" — scripts/maintenance/detect_unlanded_commits.py:10
    - "1 - one or more branches have unlanded commits" — scripts/maintenance/detect_unlanded_commits.py:11
    - "2 - configuration error" — scripts/maintenance/detect_unlanded_commits.py:12
  - Actual exit paths in code:
    - `return 0` — scripts/maintenance/detect_unlanded_commits.py:147
    - `return 1` — scripts/maintenance/detect_unlanded_commits.py:152
    - `return 2` — scripts/maintenance/detect_unlanded_commits.py:143
    - `sys.exit(main())` — scripts/maintenance/detect_unlanded_commits.py:156
  - Result: Documented exit codes match actual code exit paths exactly. Tested with `python3 scripts/maintenance/detect_unlanded_commits.py` (exit 1) and `python3 scripts/maintenance/detect_unlanded_commits.py --repo /nonexistent` (exit 2).
- **for validators/gates:** Can exit non-zero (1 when unlanded branches found, 2 on configuration/runtime error). On the source repo's default branch, exits 1 due to 274 remote branches holding commits not merged to `origin/main`.
- **does the output match what the documentation claims:** Yes, outputs warning count and per-branch tip SHA and commit count.

## Defects — required
- doc-drift · scripts/maintenance/detect_unlanded_commits.py:44 · Function name `_remote_merged_branches` contradicts its docstring "Return remote branches that are NOT ancestors of base_ref." (line 45) and implementation using `--no-merged` filter (line 47).
- orphan · scripts/maintenance/detect_unlanded_commits.py:1 · Script is tested by tests/maintenance/test_detect_unlanded_commits.py:16; no caller in the in-scope manifest graph.

## Observations
- Unlike `detect_orphan_commits.py`, which compares GitHub PR merge SHAs (`headRefOid`) against current remote tips, `detect_unlanded_commits.py` operates primarily via local `git branch -r --no-merged` queries and computes commit distance with `git rev-list --count`, making it an earlier or simpler predecessor to `detect_orphan_commits.py`.
- Function `_is_ancestor` at lines 55-57 is defined and implemented, but is never invoked anywhere in the module (dead code).

## Context cost
4687 bytes, 157 lines, ~1170 tokens.
