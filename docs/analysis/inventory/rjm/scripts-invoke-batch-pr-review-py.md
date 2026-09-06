---
package: rjm
path: scripts/invoke_batch_pr_review.py
type: script
bytes: 10667
unit: inv-rjm-247
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/invoke_batch_pr_review.py, sha256: 07bbe5a940ca7a962cf3da2a1d2ee011f3afb632b4da69487c5cdf4daf9afb4c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/invoke_batch_pr_review.py

## Purpose — required, verbatim
> "Manage git worktrees for batch PR review operations." — scripts/invoke_batch_pr_review.py:2

## Design intent — required
Automates git worktree lifecycle management for concurrent, parallel GitHub pull request reviews. It provides automated branch fetching via the GitHub CLI (`gh`), worktree creation with explicit git identity re-pinning to prevent test credential leakage across review sessions, structured status reporting across multiple PR worktrees, and safe cleanup with uncommitted/unpushed change verification.

## Phase — required
none

## Inputs — required
- CLI options via `argparse`:
  - `--pr-numbers`: list of PR numbers to process (required)
  - `--operation`: execution mode from `setup`, `status`, `cleanup`, `all` (required)
  - `--worktree-root`: root directory for worktrees (optional, defaults to parent directory of git repository)
  - `--force`: boolean flag to force cleanup when worktrees have uncommitted or unpushed changes
  - `--operator-identity`: git author identity to pin (`rjmurillo-bot` or `rjmurillo`, default: `rjmurillo-bot`)
- System and GitHub state:
  - Git repository structure via `get_repo_root()`
  - GitHub PR metadata via `gh pr view <pr_number> --json headRefName`
  - Local git worktree and branch state via `git status`, `git branch`, `git log`, `git rev-parse`

## Outputs — required
- Git worktrees created under `<worktree_root>/worktree-pr-<pr_number>`
- Git commits (`chore(pr-<pr_number>): finalize review response session`) and pushes to origin during cleanup
- Worktree removals via `git worktree remove`
- Console output:
  - Operation section headers (`=== Setting up worktrees for PRs: ... ===`, `=== Worktree Status ===`, `=== Cleaning up worktrees ===`)
  - Formatted status table with columns `PR`, `Exists`, `Clean`, `Branch`, `Commit`, `Unpushed`
- Process exit codes: 0 on success, 1 on repository discovery error, 3 on subprocess timeout

## Invokes — required
- script scripts.github_core.repo — scripts/invoke_batch_pr_review.py:27
- script scripts.github_core.worktree_identity — scripts/invoke_batch_pr_review.py:28

## Invoked by — required
- doc scripts/README.md — scripts/README.md:167

## Concepts named — required, verbatim
`ADR-035` — scripts/invoke_batch_pr_review.py:11 — used here
`SUBPROCESS_TIMEOUT_SECONDS` — scripts/invoke_batch_pr_review.py:30 — defined here
`run_git` — scripts/invoke_batch_pr_review.py:33 — defined here
`run_gh` — scripts/invoke_batch_pr_review.py:53 — defined here
`get_pr_branch` — scripts/invoke_batch_pr_review.py:72 — defined here
`create_worktree` — scripts/invoke_batch_pr_review.py:86 — defined here
`WorktreeStatus` — scripts/invoke_batch_pr_review.py:118 — defined here
`get_worktree_status` — scripts/invoke_batch_pr_review.py:128 — defined here
`remove_worktree` — scripts/invoke_batch_pr_review.py:158 — defined here
`push_worktree_changes` — scripts/invoke_batch_pr_review.py:186 — defined here
`print_status_table` — scripts/invoke_batch_pr_review.py:228 — defined here
`main` — scripts/invoke_batch_pr_review.py:238 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/invoke_batch_pr_review.py`, language: Python 3, lines: 307
- documented invocation: `"Manage git worktrees for batch PR review operations." — scripts/invoke_batch_pr_review.py:2`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/invoke_batch_pr_review.py --pr-numbers 999 --operation status --worktree-root /tmp`, abridged stdout: `=== Worktree Status ===\nPR       Exists   Clean    Branch                         Commit     Unpushed\n--------------------------------------------------------------------------------\n999      False    None`, **actual exit code**: 0
- documented exit codes:
  `"0  - Success: Worktree operation completed" — scripts/invoke_batch_pr_review.py:7`
  `"1  - Error: Operation failed" — scripts/invoke_batch_pr_review.py:8`
  `"3  - External error: subprocess timed out" — scripts/invoke_batch_pr_review.py:9`
  vs. actual exit paths:
  `scripts/invoke_batch_pr_review.py:267` (`return 1` if `get_repo_root()` is None)
  `scripts/invoke_batch_pr_review.py:296` (`return 3` on `subprocess.TimeoutExpired`)
  `scripts/invoke_batch_pr_review.py:302` (`return 0` on completion of operations)
  dispatched via `sys.exit(main())` at `scripts/invoke_batch_pr_review.py:306`
- for validators/gates: not a validation gate; worktree provisioning and orchestration utility for PR review
- does the output match what the documentation claims? yes, formats status table for worktree queries

## Defects — required
- `script-bug` · `scripts/invoke_batch_pr_review.py:277` · `main()` discards boolean return values from `create_worktree`, `push_worktree_changes`, and `remove_worktree`, returning exit code 0 even if worktree creation or cleanup fails.
- `exit-code-mismatch` · `scripts/invoke_batch_pr_review.py:8` · Exit code 1 is documented as general "Error: Operation failed" but is only reached when `get_repo_root()` returns None; failed worktree operations do not trigger it.

## Observations
Implements defensive worktree git identity management (addressing Issues #2466 and #5008) by calling `reset_worktree_identity` immediately after worktree creation and right before committing review response changes to prevent pytest fixtures from leaking test identities.

## Context cost
10667 bytes, approximately 2700 tokens.
