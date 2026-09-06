---
package: rjm
path: scripts/validation/check_push_lock_before_commit.py
type: script
bytes: 8465
unit: inv-rjm-281
in_scope_via: .claude/skills/ai-agents-config-catalog/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_push_lock_before_commit.py

## Purpose — required, verbatim
> "Refuse a commit that starts while this branch's own push is in flight." — scripts/validation/check_push_lock_before_commit.py:2

## Design intent — required
Protects test suites and repository integrity from concurrency races (issue #5123) by preventing `git commit` from proceeding when a `git push` for the same branch name is actively executing on the local machine. Because git executes pre-push hook suites (which can take 6–15 minutes) from inside `git push` while holding the canonical per-branch push flock (`$HOME/src/scratch/locks/push-lock-<slug>.lock`), a commit landing concurrently in any local worktree on that branch can modify repository HEAD and corrupt fixtures reading live git state. By performing a non-blocking flock probe of the pre-existing push-lock file during pre-commit (wired into `lefthook.yml` as `push-lock-commit-guard`), the guard refuses the commit without creating a second lock scheme, while providing an explicit bypass mechanism (`SKIP_PUSH_LOCK_COMMIT_GUARD=1`) for stuck locks. Without this guard, developers working across multiple worktrees or triggering commits during background pushes risk flaking tests and corrupting git-state-sensitive validation fixtures.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `argparse.ArgumentParser`:
  - `"--repo-root"` — scripts/validation/check_push_lock_before_commit.py:182: repository root to inspect (default: `.`)
- Environment variables:
  - `SKIP_ENV` — scripts/validation/check_push_lock_before_commit.py:71: `SKIP_PUSH_LOCK_COMMIT_GUARD`, bypasses guard when set to `1`
- Git repository state:
  - Current git branch name queried via `_current_branch` — scripts/validation/check_push_lock_before_commit.py:92
- Filesystem lock state:
  - Canonical lock path resolved via `_lock_directory` — scripts/validation/check_push_lock_before_commit.py:82 and `lock_path_for_branch` — scripts/validation/check_push_lock_before_commit.py:106

## Outputs — required
- Stdout status and block reporting:
  - Refusal message when push is active: `BLOCK_MESSAGE` — scripts/validation/check_push_lock_before_commit.py:73
  - Branch lock free notification: "push-lock: branch" — scripts/validation/check_push_lock_before_commit.py:174
  - Missing lock file notification: "push-lock: no lock file yet for branch" — scripts/validation/check_push_lock_before_commit.py:171
  - Detached HEAD bypass notification: "push-lock: detached HEAD; the per-branch guard does not apply." — scripts/validation/check_push_lock_before_commit.py:165
  - Bypass confirmation: "push-lock: commit guard bypassed via" — scripts/validation/check_push_lock_before_commit.py:179
- Exit status:
  - 0 when allowed or bypassed — scripts/validation/check_push_lock_before_commit.py:180, 187
  - 1 when push lock is in flight and commit is refused — scripts/validation/check_push_lock_before_commit.py:173, 187
  - 2 on unknown CLI arguments — scripts/validation/check_push_lock_before_commit.py:58, 183

## Invokes — required
none

## Invoked by — required
- skill .claude/skills/ai-agents-config-catalog/SKILL.md — .claude/skills/ai-agents-config-catalog/SKILL.md:64

## Concepts named — required, verbatim
- `conftest.py` — scripts/validation/check_push_lock_before_commit.py:7 — used here
- `_guard_real_repo_head` — scripts/validation/check_push_lock_before_commit.py:7 — used here
- `flock` — scripts/validation/check_push_lock_before_commit.py:9 — used here
- `pre-push hook` — scripts/validation/check_push_lock_before_commit.py:12 — used here
- `pre-push suite` — scripts/validation/check_push_lock_before_commit.py:34 — used here
- `check_push_lock_paths.py` — scripts/validation/check_push_lock_before_commit.py:23 — used here
- `pre-commit` — scripts/validation/check_push_lock_before_commit.py:32 — used here
- `SKIP_PUSH_LOCK_COMMIT_GUARD` — scripts/validation/check_push_lock_before_commit.py:45 — defined here
- `SKIP_YAMLLINT` — scripts/validation/check_push_lock_before_commit.py:46 — used here
- `FORCE_PUSH_OK` — scripts/validation/check_push_lock_before_commit.py:46 — used here
- `git_hook_policy.py` — scripts/validation/check_push_lock_before_commit.py:47 — used here
- `SKIP_CLI_E2E` — scripts/validation/check_push_lock_before_commit.py:48 — used here
- `ADR-035` — scripts/validation/check_push_lock_before_commit.py:52 — used here
- `SKIP_ENV` — scripts/validation/check_push_lock_before_commit.py:71 — defined here
- `BLOCK_MESSAGE` — scripts/validation/check_push_lock_before_commit.py:73 — defined here
- `_lock_directory` — scripts/validation/check_push_lock_before_commit.py:82 — defined here
- `_current_branch` — scripts/validation/check_push_lock_before_commit.py:92 — defined here
- `lock_path_for_branch` — scripts/validation/check_push_lock_before_commit.py:106 — defined here
- `check_push_not_in_flight` — scripts/validation/check_push_lock_before_commit.py:148 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_push_lock_before_commit.py`, language: Python 3, lines: 192
- documented invocation: `"Refuse a commit that starts while this branch's own push is in flight." — scripts/validation/check_push_lock_before_commit.py:2`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - standard run (from repo root on branch v2): `python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py`, stdout: `push-lock: no lock file yet for branch 'v2'; allowing commit.`, **actual exit code**: 0
  - standard run (from sources/rjm on branch main): `uv run --directory sources/rjm python scripts/validation/check_push_lock_before_commit.py`, stdout: `push-lock: no lock file yet for branch 'main'; allowing commit.`, **actual exit code**: 0
  - bypass run: `SKIP_PUSH_LOCK_COMMIT_GUARD=1 python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py`, stdout: `push-lock: commit guard bypassed via SKIP_PUSH_LOCK_COMMIT_GUARD=1`, **actual exit code**: 0
  - help invocation: `python3 sources/rjm/scripts/validation/check_push_lock_before_commit.py --help`, stdout: `usage: check_push_lock_before_commit.py [-h] [--repo-root REPO_ROOT]`, **actual exit code**: 0
- documented exit codes:
  - `"0 - no push is in flight for this branch, or the check does not apply" — scripts/validation/check_push_lock_before_commit.py:53`
  - `"1 - a push for this branch holds the lock right now; the commit is refused" — scripts/validation/check_push_lock_before_commit.py:57`
  - `"2 - unknown or malformed CLI arguments (argparse's own usage-error exit;" — scripts/validation/check_push_lock_before_commit.py:58
  vs. actual exit paths:
  - `scripts/validation/check_push_lock_before_commit.py:180` (`return 0` on bypass)
  - `scripts/validation/check_push_lock_before_commit.py:183` (`parser.parse_args(argv)` exiting 2 on argument error)
  - `scripts/validation/check_push_lock_before_commit.py:187` (`return 0 if allowed else 1`)
  - `scripts/validation/check_push_lock_before_commit.py:191` (`sys.exit(main())`)
- for validators/gates: can it exit non-zero? Yes, exits 1 when a push is in flight holding the exclusive lock (`_push_is_in_flight(lock_path)`) and exits 2 on invalid CLI arguments. Does it fail on the source repo's own default branch? No, passes with exit code 0 (`push-lock: no lock file yet for branch 'main'; allowing commit.`).
- does the output match what the documentation claims? Yes, probe logic, fail-open semantics, bypass handling, and exit codes match docstring.

## Defects — required
none

## Observations
- Point-in-time probe design: As documented in the module docstring, the check operates as a point-in-time probe rather than maintaining lock exclusion throughout all subsequent pre-commit hooks, narrowing the race condition window without introducing multi-stage locking complexity.
- Cross-platform file locking: Implements `fcntl.flock(handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)` for POSIX and `msvcrt.locking(handle.fileno(), msvcrt.LK_NBLCK, 1)` for Windows (`sys.platform == "win32"`).
- Fail-open reliability design: Subprocess errors querying git, detached HEAD states, or errors resolving the lock directory result in an allowed commit (exit 0) to avoid blocking commits when git or filesystem states outside push contention are encountered.

## Context cost
8465 bytes, approximately 2116 tokens.
