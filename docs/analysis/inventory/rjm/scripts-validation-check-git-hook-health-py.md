---
package: rjm
path: scripts/validation/check_git_hook_health.py
type: script
bytes: 11986
unit: inv-rjm-279
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_git_hook_health.py

## Purpose — required, verbatim
> "Gate: local pushes have an executable ``pre-push`` hook." — scripts/validation/check_git_hook_health.py:2

## Design intent — required
Detects inactive, broken, or uninstalled git hook configurations prior to pushing commits. Git hooks cannot detect their own absence: if git configuration `core.hooksPath` points to a non-existent directory or if local hooks are never installed after cloning or creating linked worktrees, git silently skips hook execution without warning, allowing unverified commits and stale generated files to reach CI. By resolving the effective hooks directory via `git rev-parse --git-path hooks` and checking whether the `pre-push` hook exists and has executable permissions, this gate verifies that local push validation is active. When hooks are absent or unexecutable, it inspects git configuration scopes (`--show-scope`) to identify whether `core.hooksPath` was overridden at worktree, global, or system level and outputs the exact command required to repair the configuration. To avoid spurious failures, it skips validation cleanly in CI environments or repositories that do not configure `lefthook`. Without it, broken hook installations would recur unnoticed, allowing invalid changes to escape local validation.

## Phase — required
none

## Inputs — required
- Optional repository root argument `argv[0]` (default: `Path(__file__).resolve().parents[2]`) — scripts/validation/check_git_hook_health.py:296
- Environment variable `CI` — scripts/validation/check_git_hook_health.py:228
- Environment variable `GITHUB_ACTIONS` — scripts/validation/check_git_hook_health.py:227
- Lefthook configuration names: `LEFTHOOK_CONFIG_NAMES` — scripts/validation/check_git_hook_health.py:62
- Git configuration: `core.hooksPath` — scripts/validation/check_git_hook_health.py:147

## Outputs — required
- Standard output reporting hook verification status or skip rationale — scripts/validation/check_git_hook_health.py:230, 233, 244, 255
- Standard error emitting failure diagnostics and remediation commands (`[FAIL] ... Fix: uv run --frozen lefthook install --reset-hooks-path`) — scripts/validation/check_git_hook_health.py:250, 260, 265, 298
- Exit code 0: Hooks live, not a git repository, no lefthook configured, or skipped in CI — scripts/validation/check_git_hook_health.py:41, 231, 237, 248, 258
- Exit code 1: Logic error (pre-push hook missing or not executable) — scripts/validation/check_git_hook_health.py:42, 266
- Exit code 2: Config error (invalid repository root path) — scripts/validation/check_git_hook_health.py:43, 299
- Exit code 3: External failure (git missing, command timed out, or unexpected git failure) — scripts/validation/check_git_hook_health.py:44, 251

## Invokes — required
none

## Invoked by — required
- script check_git_hook_health — scripts/validation/pre_pr_sequence.py:51

## Concepts named — required, verbatim
- `ADR-035` — scripts/validation/check_git_hook_health.py:40 — used here
- `LEFTHOOK_CONFIG_NAMES` — scripts/validation/check_git_hook_health.py:62 — defined here
- `PROBE_HOOK` — scripts/validation/check_git_hook_health.py:72 — defined here
- `REMEDY` — scripts/validation/check_git_hook_health.py:74 — defined here
- `WORKTREE_REMEDY` — scripts/validation/check_git_hook_health.py:75 — defined here
- `GLOBAL_REMEDY` — scripts/validation/check_git_hook_health.py:76 — defined here
- `SYSTEM_REMEDY` — scripts/validation/check_git_hook_health.py:77 — defined here
- `GIT_TIMEOUT_SECONDS` — scripts/validation/check_git_hook_health.py:82 — defined here
- `GitExecutionError` — scripts/validation/check_git_hook_health.py:85 — defined here
- `NotGitRepositoryError` — scripts/validation/check_git_hook_health.py:89 — defined here
- `_git` — scripts/validation/check_git_hook_health.py:93 — defined here
- `_uses_lefthook` — scripts/validation/check_git_hook_health.py:124 — defined here
- `_hooks_dir` — scripts/validation/check_git_hook_health.py:128 — defined here
- `_configured_hooks_path` — scripts/validation/check_git_hook_health.py:144 — defined here
- `_remedy` — scripts/validation/check_git_hook_health.py:165 — defined here
- `_failed_condition` — scripts/validation/check_git_hook_health.py:179 — defined here
- `_diagnose_hooks_dir` — scripts/validation/check_git_hook_health.py:205 — defined here
- `diagnose` — scripts/validation/check_git_hook_health.py:213 — defined here
- `_evaluate` — scripts/validation/check_git_hook_health.py:224 — defined here
- `validate_git_hook_health` — scripts/validation/check_git_hook_health.py:269 — defined here
- `main` — scripts/validation/check_git_hook_health.py:293 — defined here

## Structure
- Shebang and module docstring: hook health rationale, path resolution, and ADR-035 exit codes — scripts/validation/check_git_hook_health.py:1-49
- Imports and remediation command constants — scripts/validation/check_git_hook_health.py:51-82
- Custom exceptions (GitExecutionError, NotGitRepositoryError) — scripts/validation/check_git_hook_health.py:85-90
- Git subprocess wrapper with timeout handling (_git) — scripts/validation/check_git_hook_health.py:93-121
- Lefthook configuration detector (_uses_lefthook) — scripts/validation/check_git_hook_health.py:124-126
- Effective hooks directory resolution (_hooks_dir) — scripts/validation/check_git_hook_health.py:128-142
- Git configuration scope inspector and repair command selector (_remedy) — scripts/validation/check_git_hook_health.py:144-177
- Failed condition diagnostic helpers (_failed_condition, _diagnose_hooks_dir, diagnose) — scripts/validation/check_git_hook_health.py:179-222
- Hook health evaluation engine (_evaluate) — scripts/validation/check_git_hook_health.py:224-267
- Pre-PR registry adapter function (validate_git_hook_health) — scripts/validation/check_git_hook_health.py:269-291
- Main CLI runner with exit dispatch — scripts/validation/check_git_hook_health.py:293-305

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_git_hook_health.py`, language: Python, lines: 305
- documented invocation:
  - "0 - Success (hooks live, or the question does not apply here)" — scripts/validation/check_git_hook_health.py:41
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/check_git_hook_health.py sources/rjm`
- abridged stdout:
```
[FAIL] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.git/hooks/pre-push is missing and core.hooksPath is unset.
Pushes are not locally gated: pre-push does not run.
Fix: uv run --frozen lefthook install --reset-hooks-path
```
- actual exit code: 1
- documented exit codes vs. actual exit paths:
  - "0 - Success (hooks live, or the question does not apply here)" — scripts/validation/check_git_hook_health.py:41
  - "1 - Logic error (git will run no hook)" — scripts/validation/check_git_hook_health.py:42
  - "2 - Config error (invalid repository root)" — scripts/validation/check_git_hook_health.py:43
  - "3 - External failure (git missing, timed out, or failed unexpectedly)" — scripts/validation/check_git_hook_health.py:44
  - actual exit paths in code:
    - line 231: `return 0` if `CI` or `GITHUB_ACTIONS` is set
    - line 237: `return 0` if repository does not configure lefthook
    - line 248: `return 0` if target directory is not a git repository
    - line 251: `return 3` on `GitExecutionError`
    - line 258: `return 0` when `pre-push` is present and executable
    - line 266: `return 1` when probe hook is missing or unexecutable
    - line 299: `return 2` if repository root is not a directory
    - line 300: `return _evaluate(repo_root)`
    - line 304: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on missing/unexecutable hook, 2 on invalid repo root, 3 on git failure)
  - does it fail on the source repo's own default branch: in a fresh clone where `lefthook install` has not been run, it correctly fails with exit code 1; under CI environment (`CI=true`), it skips with exit code 0
- does output match what the documentation claims: yes, detects the missing pre-push hook and prints the exact repair command

## Defects — required
none

## Observations
- Scope-aware repair: When `core.hooksPath` is set in worktree scope, standard `lefthook install` fails to clear it; the script checks `--show-scope` and generates `git config --worktree --unset-all core.hooksPath && uv run --frozen lefthook install --reset-hooks-path`.
- Probe optimization: Targets `pre-push` specifically as a canary because lefthook installs all hooks simultaneously, making pre-push presence a reliable proxy for overall hook health.
- Safe Git invocation: Sets `LC_ALL=C` and a 5-second timeout on git commands to avoid locale-specific parsing errors or hangs in automated pipelines.

## Context cost
11986 bytes, 305 lines, approximately 3000 tokens. Interacts with local git binary via subprocess.
