---
package: rjm
path: scripts/validation/checks_common.py
type: script
bytes: 19425
unit: inv-rjm-291
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_common.py, sha256: 9aa4472080646e8ab1a6cfd238f27026ec1875b981ba3b251b0b9e2efe3d0897}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_common.py

## Purpose — required, verbatim
> "Shared infrastructure for the pre-PR validation check modules." — scripts/validation/checks_common.py:2

## Design intent — required
Provides centralized, reusable execution and git resolution primitives for all pre-PR validation check suites across the repository. Extracted from `pre_pr.py` to keep modules below repo file-size limits, it defines the `MissingScriptSkip` exception (allowing checks for expunged legacy PowerShell scripts to be recorded as skipped without triggering misleading test failures per ADR-042), deterministic child process execution via sanitized git subprocess environments (`_git_subprocess_env`), robust and cached base-reference discovery (`_resolve_branch_base_ref` and `_resolve_default_base_ref`), protection against self-tracking upstream branches that previously caused empty diffs and bypassed gates (issue #2571), GitHub PR base lookup with retry and transient error recovery, best-effort remote base refreshing (`_refresh_remote_base`), and uniform execution of build script gates (`_run_build_script_gate`).

## Phase — required
rjm:test

## Inputs — required
- Function arguments:
  - `repo_root: Path` specifying repository root path (scripts/validation/checks_common.py:61, 115, 131, 166, 210, 254, 302, 356, 388, 435)
  - `selector: list[str]` for PR head branch selection in `_gh_pr_base_ref_name` (scripts/validation/checks_common.py:115)
  - `base_ref: str` for remote base refresh in `_refresh_remote_base` (scripts/validation/checks_common.py:388)
  - `script_name: str` and `gate_label: str` for build gate execution (scripts/validation/checks_common.py:436, 437)
- Environment variables:
  - Sanitized in `_git_subprocess_env`: pops `GIT_DIR`, `GIT_WORK_TREE`, `GIT_COMMON_DIR`, `GIT_INDEX_FILE` and sets `LC_ALL=C` (scripts/validation/checks_common.py:55-57)
  - Evaluated in `_refresh_remote_base`: `CI`, `GITHUB_ACTIONS` (scripts/validation/checks_common.py:401-403)
- Subprocess invocations:
  - Git commands via `_run_subprocess`: `git rev-parse --abbrev-ref HEAD`, `git config --get branch.<branch>.merge`, `git rev-parse HEAD`, `git rev-parse --symbolic-full-name @{u}`, `git rev-parse --verify --quiet <ref>`, `git fetch --no-tags --quiet origin <branch>`
  - GitHub CLI commands: `gh pr view <selector> --json baseRefName -q .baseRefName` (scripts/validation/checks_common.py:122)
  - Python scripts under `build/scripts/<script_name>` (scripts/validation/checks_common.py:484)

## Outputs — required
- Exceptions:
  - `MissingScriptSkip` (control-flow signal for skipped validators) — scripts/validation/checks_common.py:43
- Returned values:
  - Resolved git ref strings (e.g. `origin/<branch>`, `refs/remotes/origin/HEAD`, `origin/main`) or `None` (scripts/validation/checks_common.py:331, 352, 353, 384, 385)
  - `_PrViewProbe` namedtuple: `(base_ref, no_pr_confirmed, exit_code, stderr)` (scripts/validation/checks_common.py:98)
  - Boolean gate verdict from `_run_build_script_gate`: `True` if build script exits 0, `False` on failure or missing script (scripts/validation/checks_common.py:463, 471, 490)
  - Remote fetch error string or `""` (scripts/validation/checks_common.py:430, 432)
- Diagnostics written to standard error:
  - `[base-ref] selected origin/{probe2.base_ref}: PR resolved by upstream head...` (scripts/validation/checks_common.py:157)
  - `[WARN] base-ref: gh pr view did not give an authoritative answer...` (scripts/validation/checks_common.py:246)
  - `[base-ref] selected {pr_base}: open PR base branch` (scripts/validation/checks_common.py:330)
  - `[base-ref] selected {ref}: no PR base resolved...` (scripts/validation/checks_common.py:348)
  - `[WARN] {gate_label}: could not refresh {base_ref}...` (scripts/validation/checks_common.py:479)
  - `[ERROR] {script_name} absent; the {gate_label} gate cannot run...` (scripts/validation/checks_common.py:458)
  - `[ERROR] {gate_label} gate: base ref could not be resolved...` (scripts/validation/checks_common.py:467)

## Invokes — required
- script subprocess_runner — scripts/validation/checks_common.py:39
- script pre_pr — scripts/validation/checks_common.py:4
- script checks_tooling — scripts/validation/checks_common.py:6
- script checks_dash — scripts/validation/checks_common.py:6
- script checks_spec — scripts/validation/checks_common.py:6
- script checks_plugin — scripts/validation/checks_common.py:6
- script checks_coverage — scripts/validation/checks_common.py:7

## Invoked by — required
- script checks_common — scripts/validation/checks_changed_paths.py:22
- script checks_common — scripts/validation/pre_pr.py:82
- script checks_common — scripts/validation/checks_tooling.py:32
- script checks_common — scripts/validation/checks_spec.py:23
- script checks_common — scripts/validation/checks_coverage.py:22
- script checks_common — scripts/validation/checks_dash.py:24
- script checks_common — scripts/validation/checks_plugin.py:25

## Concepts named — required, verbatim
- `MissingScriptSkip` — scripts/validation/checks_common.py:43 — defined here
- `_git_subprocess_env` — scripts/validation/checks_common.py:52 — defined here
- `_upstream_head_ref_name` — scripts/validation/checks_common.py:61 — defined here
- `_NO_PR_MARKER` — scripts/validation/checks_common.py:95 — defined here
- `_PrViewProbe` — scripts/validation/checks_common.py:98 — defined here
- `_gh_pr_base_ref_name` — scripts/validation/checks_common.py:115 — defined here
- `_gh_base_ref_probe` — scripts/validation/checks_common.py:131 — defined here
- `_branch_head_cache_key` — scripts/validation/checks_common.py:166 — defined here
- `_gh_pr_base_cache` — scripts/validation/checks_common.py:191 — defined here
- `_gh_pr_base_logged_failures` — scripts/validation/checks_common.py:193 — defined here
- `_reset_gh_base_cache` — scripts/validation/checks_common.py:196 — defined here
- `_gh_base_ref` — scripts/validation/checks_common.py:210 — defined here
- `_is_self_tracking_upstream` — scripts/validation/checks_common.py:254 — defined here
- `_resolve_branch_base_ref` — scripts/validation/checks_common.py:302 — defined here
- `_resolve_default_base_ref` — scripts/validation/checks_common.py:356 — defined here
- `_refresh_remote_base` — scripts/validation/checks_common.py:388 — defined here
- `_run_build_script_gate` — scripts/validation/checks_common.py:434 — defined here
- `_run_subprocess` — scripts/validation/checks_common.py:39 — used here

## Structure
- `MissingScriptSkip` — scripts/validation/checks_common.py:43
- `_git_subprocess_env` — scripts/validation/checks_common.py:52
- `_upstream_head_ref_name` — scripts/validation/checks_common.py:61
- `_PrViewProbe` — scripts/validation/checks_common.py:98
- `_gh_pr_base_ref_name` — scripts/validation/checks_common.py:115
- `_gh_base_ref_probe` — scripts/validation/checks_common.py:131
- `_branch_head_cache_key` — scripts/validation/checks_common.py:166
- `_reset_gh_base_cache` — scripts/validation/checks_common.py:196
- `_gh_base_ref` — scripts/validation/checks_common.py:210
- `_is_self_tracking_upstream` — scripts/validation/checks_common.py:254
- `_resolve_branch_base_ref` — scripts/validation/checks_common.py:302
- `_resolve_default_base_ref` — scripts/validation/checks_common.py:356
- `_refresh_remote_base` — scripts/validation/checks_common.py:388
- `_run_build_script_gate` — scripts/validation/checks_common.py:434

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_common.py`, language: Python, lines: 491
- documented invocation:
  - "Extracted from ``scripts/validation/pre_pr.py`` (issue #2223) so the pre-PR" — scripts/validation/checks_common.py:4
- executed: yes
- actual command run:
  `sources/rjm/.venv/bin/python -c "import sys; sys.path.insert(0, 'sources/rjm/scripts/validation'); import checks_common; from pathlib import Path; print('branch_base:', checks_common._resolve_branch_base_ref(Path('sources/rjm'))); print('default_base:', checks_common._resolve_default_base_ref(Path('sources/rjm')))"`
  abridged stdout:
  ```
  [base-ref] selected refs/remotes/origin/HEAD: no PR base resolved, first candidate ref that exists locally
  branch_base: refs/remotes/origin/HEAD
  default_base: refs/remotes/origin/HEAD
  ```
  actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: Shared infrastructure library; no direct CLI exit codes documented.
  - Actual exit paths: Direct CLI invocation `python checks_common.py` executes imports and exits 0. `_run_build_script_gate` returns `False` when build script is missing (scripts/validation/checks_common.py:463) or base ref cannot be resolved (scripts/validation/checks_common.py:471), or returns `exit_code == 0` (scripts/validation/checks_common.py:490).
- for validators/gates: can it exit non-zero?
  `_run_build_script_gate` returns `False` on gate failure. Does it fail on the source repo's own default branch? No, resolves local default base ref cleanly.
- does output match what documentation claims?
  Yes, safely resolves base references across multiple priority levels and caches GitHub PR queries.

## Defects — required
none

## Observations
Contains essential defensive programming for git interactions: clears git worktree environment variables that would corrupt nested subprocess commands (`_git_subprocess_env`), caches `gh pr view` calls by `(repo_root, branch, HEAD sha)` to avoid repetitive API network round trips (~0.45s each), and explicitly handles git edge cases such as self-tracking branches where `@{u}` points to the branch's own remote push destination.

## Context cost
File size: 19425 bytes, 491 lines, ~4800 tokens. Re-exports `_run_subprocess` from `subprocess_runner.py` (8701 bytes).
