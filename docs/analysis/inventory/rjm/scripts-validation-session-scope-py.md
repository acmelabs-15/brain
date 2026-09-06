---
package: rjm
path: scripts/validation/session_scope.py
type: script
bytes: 14205
unit: inv-rjm-304
in_scope_via: scripts/validate_session_json.py
aliases: []
memo_inputs:
  - {path: scripts/validation/session_scope.py, sha256: 4681b6ffbc1a872813cfe4b75e2a2382b925a6dbe1313ac9555ad3ea478fb830}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/session_scope.py

## Purpose — required, verbatim
> "Decide whether a session log is being added or edited (issue #3385)." — scripts/validation/session_scope.py:1

## Design intent — required
Provides centralized Git-history inspection logic to distinguish between session log creation (new logs requiring full compliance validation like markdownlint and session contract verification) versus session log edits (pre-existing historical logs where historical assertions like "markdownlint ran" cannot be retroactively performed). It also verifies Git commit reachability for commit SHAs recorded in session logs. By centralizing these checks in standard-library-only Python without external dependencies like PyYAML, both pre-commit git hooks and CI workflows can reliably evaluate session change scope and reachability without duplicate logic or dependency overhead.

## Phase — required
none

## Inputs — required
- Git repository state via `git` CLI subprocesses (`merge-base`, `diff`, `diff-tree`, `cat-file`, `rev-list`, `ls-files`, `rev-parse`) — scripts/validation/session_scope.py:55
- GitHub Actions pull request event payload via `GITHUB_EVENT_PATH` — scripts/validation/session_scope.py:228
- Active Git index file via `GIT_INDEX_FILE` environment variable — scripts/validation/session_scope.py:47
- Commit SHA and session log file paths passed as function arguments — scripts/validation/session_scope.py:68, 143, 185, 256, 318, 348, 376, 387

## Outputs — required
- Commit reachability diagnostics and status constants (`NOT_A_COMMIT_SHA`, `NO_SUCH_COMMIT`, `NOT_AN_ANCESTOR`) — scripts/validation/session_scope.py:37, 38, 39
- Resolved merge base commit SHA — scripts/validation/session_scope.py:107
- Filtered sets of newly added session log paths — scripts/validation/session_scope.py:185, 256, 318, 376
- Validation mode mapping (`creation`, `full`, or `existing`) for committed session logs — scripts/validation/session_scope.py:348
- Boolean classification of session logs as new additions vs edits — scripts/validation/session_scope.py:387
- Standard error diagnostic output on failed git subprocess execution — scripts/validation/session_scope.py:170, 172, 217, 219

## Invokes — required
- script checks_common — scripts/validation/session_scope.py:44

## Invoked by — required
- script session_scope — scripts/validation/git_hook_policy.py:54
- script session_scope — scripts/validation/checks_tooling.py:40
- script session_scope — scripts/validate_session_json.py:61

## Concepts named — required, verbatim
- `NOT_A_COMMIT_SHA` — scripts/validation/session_scope.py:37 — defined here
- `NO_SUCH_COMMIT` — scripts/validation/session_scope.py:38 — defined here
- `NOT_AN_ANCESTOR` — scripts/validation/session_scope.py:39 — defined here
- `_git_env` — scripts/validation/session_scope.py:42 — defined here
- `_git` — scripts/validation/session_scope.py:52 — defined here
- `commit_reachability_problem` — scripts/validation/session_scope.py:68 — defined here
- `session_merge_base` — scripts/validation/session_scope.py:107 — defined here
- `_tracked` — scripts/validation/session_scope.py:124 — defined here
- `_added_session_paths` — scripts/validation/session_scope.py:143 — defined here
- `added_session_paths_in_index` — scripts/validation/session_scope.py:185 — defined here
- `_commit_object_parents` — scripts/validation/session_scope.py:195 — defined here
- `_head_parents` — scripts/validation/session_scope.py:209 — defined here
- `_pull_request_head_sha` — scripts/validation/session_scope.py:227 — defined here
- `_validation_head` — scripts/validation/session_scope.py:247 — defined here
- `added_session_paths_in_head` — scripts/validation/session_scope.py:256 — defined here
- `_added_paths_from_name_status` — scripts/validation/session_scope.py:291 — defined here
- `session_change_scope` — scripts/validation/session_scope.py:318 — defined here
- `committed_session_validation_modes` — scripts/validation/session_scope.py:348 — defined here
- `new_session_logs` — scripts/validation/session_scope.py:376 — defined here
- `session_log_is_new` — scripts/validation/session_scope.py:387 — defined here

## Structure
- Module docstring and callers — scripts/validation/session_scope.py:1-15
- Imports and sys.path setup — scripts/validation/session_scope.py:17-30
- Constants and commit reachability error fragments — scripts/validation/session_scope.py:31-40
- Subprocess execution helpers — scripts/validation/session_scope.py:42-66
- Commit reachability validation — scripts/validation/session_scope.py:68-105
- Merge base resolution — scripts/validation/session_scope.py:107-122
- Tracked file filtering — scripts/validation/session_scope.py:124-141
- Staged index added path detection — scripts/validation/session_scope.py:143-193
- Commit parentage and PR head resolution — scripts/validation/session_scope.py:195-254
- Head commit added path detection — scripts/validation/session_scope.py:256-289
- Diff name-status token parser — scripts/validation/session_scope.py:291-316
- Session change scope and validation modes — scripts/validation/session_scope.py:318-374
- New session log query helpers — scripts/validation/session_scope.py:376-396

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/session_scope.py`, language: Python 3, lines: 396
- documented invocation:
  - "Two callers need the same answer: the git hook (``git_hook_policy``) and the" — scripts/validation/session_scope.py:3
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/session_scope.py`
- abridged stdout: (empty; silent exit)
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (shared library module; functions return booleans, paths, or error fragments)
  - Actual exit paths: no `sys.exit` or `exit` calls; script exits 0 upon module import/execution
- for validators/gates:
  - Can exit non-zero: no (shared library module; callers handle returned statuses)
  - Verified on repository default branch: imports cleanly without error, exit code 0
- does output match what the documentation claims: yes, acts as shared library without standalone CLI execution side effects

## Defects — required
none

## Observations
- Pure standard-library implementation designed specifically so that CI workflows running bare `python3` can validate session scopes without installing PyYAML or other dependencies (lines 12-14).
- Protects against option injection (CWE-88) by regex-validating commit SHAs before passing them to git CLI commands (lines 82-84, 90).
- Explicitly handles GitHub's synthetic merge commit in pull requests by inspecting `GITHUB_EVENT_PATH` to resolve the actual PR head commit (lines 227-254).

## Context cost
14205 bytes, 396 lines, ~3550 tokens.
