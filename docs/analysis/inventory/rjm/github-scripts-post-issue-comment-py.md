---
package: rjm
path: .github/scripts/post_issue_comment.py
type: script
bytes: 10867
unit: inv-rjm-184
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/post_issue_comment.py

## Purpose — required, verbatim
> "Post a comment to a GitHub issue with idempotency support." — .github/scripts/post_issue_comment.py:2

## Design intent — required
Provides an idempotent CLI utility for GitHub Actions workflows to post comments to GitHub issues and PRs without duplicate comment spam across repeated workflow executions. It queries existing comments on the target issue for an HTML comment marker (`<!-- <marker> -->`), either skipping the post (write-once idempotency) or updating the existing comment in place if `--update-if-exists` is passed. It handles GitHub API permission errors (HTTP 403) by outputting actionable diagnostic guidance (such as missing `issues: write` workflow permissions) and serializing the failed comment payload to `.github/artifacts/failed-comment-<timestamp>.json` for manual recovery. Without this script, automated CI notifications on issues/PRs would risk duplicating comments on rerun or silently failing upon permission errors without preserving comment contents.

## Phase — required
none

## Inputs — required
- CLI option `--owner`: "Repository owner (inferred from git remote if omitted)" — .github/scripts/post_issue_comment.py:145
- CLI option `--repo`: "Repository name (inferred from git remote if omitted)" — .github/scripts/post_issue_comment.py:150
- CLI option `--issue`: "Issue number" — .github/scripts/post_issue_comment.py:152
- CLI option `--body`: "Comment body text" — .github/scripts/post_issue_comment.py:155
- CLI option `--body-file`: "Path to file containing comment body" — .github/scripts/post_issue_comment.py:156
- CLI option `--marker`: "HTML comment marker for idempotency" — .github/scripts/post_issue_comment.py:158
- CLI flag `--update-if-exists`: "Update existing comment instead of skipping when marker found" — .github/scripts/post_issue_comment.py:162
- Environment variable `GITHUB_WORKSPACE`: Workspace root directory — .github/scripts/post_issue_comment.py:26
- GitHub CLI `gh` authenticated via `assert_gh_authenticated` — .github/scripts/post_issue_comment.py:34, 179

## Outputs — required
- GitHub issue comment posted or updated on target issue — .github/scripts/post_issue_comment.py:215, 255
- GitHub Actions output step variables written via `write_github_output` — .github/scripts/post_issue_comment.py:31, 218, 235, 278, 320
- Recovery artifact payload saved to `.github/artifacts` on 403 errors — .github/scripts/post_issue_comment.py:93, 277
- Process exit code: 0 on success/skip, 2 on config/argument error, 3 on API timeout/failure, 4 on auth/permission error — .github/scripts/post_issue_comment.py:5-9, 192, 196, 267, 286, 288, 322

## Invokes — required
- script scripts.ai_review_common — .github/scripts/post_issue_comment.py:31
- script scripts.github_core.api — .github/scripts/post_issue_comment.py:32

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — .github/scripts/post_issue_comment.py:4 — used here
- `write_github_output` — .github/scripts/post_issue_comment.py:31 — used here
- `_403_PATTERN` — .github/scripts/post_issue_comment.py:33 — used here
- `assert_gh_authenticated` — .github/scripts/post_issue_comment.py:34 — used here
- `error_and_exit` — .github/scripts/post_issue_comment.py:35 — used here
- `get_issue_comments` — .github/scripts/post_issue_comment.py:36 — used here
- `resolve_repo_params` — .github/scripts/post_issue_comment.py:37 — used here
- `update_issue_comment` — .github/scripts/post_issue_comment.py:38 — used here
- `save_failed_comment_artifact` — .github/scripts/post_issue_comment.py:59 — defined here
- `_prepend_marker` — .github/scripts/post_issue_comment.py:125 — defined here
- `build_parser` — .github/scripts/post_issue_comment.py:137 — defined here
- `main` — .github/scripts/post_issue_comment.py:173 — defined here

## Structure
- Script docstring and exit codes — .github/scripts/post_issue_comment.py:2
- Workspace setup and imports — .github/scripts/post_issue_comment.py:25
- Error guidance template — .github/scripts/post_issue_comment.py:41
- Recovery artifact saver `save_failed_comment_artifact` — .github/scripts/post_issue_comment.py:59
- Marker helper `_prepend_marker` — .github/scripts/post_issue_comment.py:125
- Argument parser `build_parser` — .github/scripts/post_issue_comment.py:137
- Entry point `main` — .github/scripts/post_issue_comment.py:173

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/post_issue_comment.py`
- language: Python (python3)
- lines: 327
- documented invocation:
  - none (CLI executable with shebang; options defined in `build_parser` — .github/scripts/post_issue_comment.py:137)
- executed: yes
- actual command run: `python3 sources/rjm/.github/scripts/post_issue_comment.py --issue 123 --body ""`
- abridged stdout:
  ```text
  Body cannot be empty.
  ```
- actual exit code: 2
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success (includes idempotent skip)" — .github/scripts/post_issue_comment.py:5
    - "1 - Invalid parameters / logic error" — .github/scripts/post_issue_comment.py:6
    - "2 - Config error (file not found)" — .github/scripts/post_issue_comment.py:7
    - "3 - External error (API failure)" — .github/scripts/post_issue_comment.py:8
    - "4 - Auth error (not authenticated, permission denied)" — .github/scripts/post_issue_comment.py:9
  - Actual exit paths:
    - `return 0` — .github/scripts/post_issue_comment.py:230
    - `return 0` — .github/scripts/post_issue_comment.py:243
    - `return 0` — .github/scripts/post_issue_comment.py:304
    - `return 0` — .github/scripts/post_issue_comment.py:322
    - `error_and_exit(f"Body file not found: {args.body_file}", 2)` — .github/scripts/post_issue_comment.py:192
    - `error_and_exit("Body cannot be empty.", 2)` — .github/scripts/post_issue_comment.py:196
    - `error_and_exit("GitHub API request timed out while posting comment", 3)` — .github/scripts/post_issue_comment.py:267
    - `error_and_exit(f"Failed to post comment: {error_str}", 3)` — .github/scripts/post_issue_comment.py:288
    - `raise SystemExit(4)` — .github/scripts/post_issue_comment.py:286
    - `assert_gh_authenticated` — .github/scripts/post_issue_comment.py:179
- for validators/gates: not a gate; comment posting utility. Can exit non-zero (exits 2 on invalid/empty body; exits 3 on API timeout or failure; exits 4 on 403 permission denied or auth error).
- does the output match what the documentation claims: partial (implements idempotency and posting with exit codes 0, 2, 3, 4 as documented, but has no code path returning exit code 1 because argument errors exit 2 via argparse).

## Defects — required
- `exit-code-mismatch`: In `.github/scripts/post_issue_comment.py:6`, the docstring documents exit code 1 ("1 - Invalid parameters / logic error"), but invalid parameters exit with code 2 via argparse or `error_and_exit`, leaving exit code 1 unused.
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/post_issue_comment.py`; it is invoked only by GitHub Actions workflows (e.g. `.github/workflows/pr-validation.yml`), which are outside the lifecycle manifest scope.

## Observations
- On HTTP 403 errors, prints detailed diagnostic guidance (`_403_GUIDANCE`, lines 41-51) listing potential root causes across GitHub Apps, workflow permissions, fine-grained PATs, and classic PATs.
- Dumps failed comment bodies to `.github/artifacts/failed-comment-<timestamp>.json` with a ready-to-run manual `gh api` command so workflow operators can post the failed comment manually without losing data.
- Distinguished from `.claude/skills/github/scripts/issue/post_issue_comment.py`: this script is tailored specifically for CI workflow output formatting (`write_github_output`) rather than interactive skill output (`write_skill_output`).

## Context cost
10,867 bytes (approx. 2,720 tokens).
