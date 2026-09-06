---
package: rjm
path: scripts/validation/check_repo_health.py
type: script
bytes: 22001
unit: inv-rjm-283
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_repo_health.py

## Purpose — required, verbatim
> "Gate: no config scope flags a repository bare while it has a work tree." — scripts/validation/check_repo_health.py:2

## Design intent — required
Prevents and diagnoses a critical git corruption failure mode where operations during `git push` erroneously write `core.bare = true` into the shared repository configuration (`.git/config`), breaking the main checkout and linked worktrees with `fatal: this operation must be run in a work tree`. The script acts as an early-stage gate in git hooks (`pre-commit` and `pre-push`) ahead of all other checks. It inspects all configuration scopes via `git config --show-scope --type=bool --get-all core.bare`, verifies whether the repository is genuinely meant to have a work tree by examining the common git directory, porcelain worktree listing, staged index file size, and checked out filesystem content, and distinguishes intentional bare repositories from corrupted working trees. Furthermore, it operates under a strict 7-second budget (`GIT_BUDGET_SECONDS`) to guarantee actionable diagnosis before Lefthook's 10-second job timeout can kill the process unhelpfully.

## Phase — required
cross-phase

## Inputs — required
- Optional CLI positional argument: `repo_root` repository path (defaults to repository root: `Path(__file__).resolve().parents[2]` at line 492)
- Git configuration and metadata:
  - Scoped `core.bare` values via `git config --show-scope --type=bool --get-all core.bare` (scripts/validation/check_repo_health.py:222)
  - Common git directory via `git rev-parse --path-format=absolute --git-common-dir` (scripts/validation/check_repo_health.py:289)
  - Worktree inventory via `git worktree list --porcelain` (scripts/validation/check_repo_health.py:301)
  - Staged index file existence and size (`<common_dir>/index` > 32 bytes) (scripts/validation/check_repo_health.py:349-353)
  - Checkout directory content (`.git` marker and working tree files) (scripts/validation/check_repo_health.py:317-319)
  - Worktree configuration support via `git config --type=bool --get extensions.worktreeConfig` (scripts/validation/check_repo_health.py:379-387)
  - Bare repository status via `git rev-parse --is-bare-repository` (scripts/validation/check_repo_health.py:459)
- Environment sanitization: removes `GIT_DIR`, `GIT_WORK_TREE`, `GIT_COMMON_DIR` and sets `LC_ALL="C"` (scripts/validation/check_repo_health.py:127, 181-183)

## Outputs — required
- Standard output:
  - Repository health summary via `report_usable`: e.g. `repo health: core.bare read in 1 config scope(s), none set true, for <repo_root>` (scripts/validation/check_repo_health.py:480)
  - Bare-by-design notice via `report_bare_by_design` (scripts/validation/check_repo_health.py:482)
  - Diagnostic error and scope-specific repair instructions via `report_corruption` (scripts/validation/check_repo_health.py:485)
  - Unreadable configuration error via `report_unreadable` (scripts/validation/check_repo_health.py:472)
  - Unverifiable error report via `report_unverifiable` (scripts/validation/check_repo_health.py:475)
  - Non-git directory notification via `report_not_a_repository` (scripts/validation/check_repo_health.py:469)
  - Invalid repository root message via `report_invalid_root` (scripts/validation/check_repo_health.py:494)
- Process exit codes: 0 (usable / bare by design / non-repo), 1 (corruption / unreadable boolean), 2 (invalid repo root), 3 (git execution error / timeout) (scripts/validation/check_repo_health.py:65-70)

## Invokes — required
- script check_repo_health_report — scripts/validation/check_repo_health.py:85

## Invoked by — required
- script check_repo_health_report — scripts/validation/check_repo_health_report.py:3

## Concepts named — required, verbatim
- `core.bare` — scripts/validation/check_repo_health.py:4 — used here
- `GOTCHAS.md` — scripts/validation/check_repo_health.py:10 — used here
- `_effective_pair` — scripts/validation/check_repo_health.py:28 — defined here
- `_active_bare_scopes` — scripts/validation/check_repo_health.py:30 — defined here
- `_main_work_tree` — scripts/validation/check_repo_health.py:42 — defined here
- `GIT_BUDGET_SECONDS` — scripts/validation/check_repo_health.py:50 — defined here
- `ADR-035` — scripts/validation/check_repo_health.py:65 — used here
- `RepoHealth` — scripts/validation/check_repo_health.py:86 — used here
- `GIT_TIMEOUT_SECONDS` — scripts/validation/check_repo_health.py:99 — defined here
- `GitBudget` — scripts/validation/check_repo_health.py:136 — defined here
- `GitExecutionError` — scripts/validation/check_repo_health.py:151 — defined here
- `NotGitRepositoryError` — scripts/validation/check_repo_health.py:155 — defined here
- `UnreadableCoreBareError` — scripts/validation/check_repo_health.py:159 — defined here
- `_scoped_core_bare` — scripts/validation/check_repo_health.py:209 — defined here
- `_marker_git_dir` — scripts/validation/check_repo_health.py:234 — defined here
- `_work_tree_root` — scripts/validation/check_repo_health.py:259 — defined here
- `_common_git_dir` — scripts/validation/check_repo_health.py:282 — defined here
- `_reported_main_worktree` — scripts/validation/check_repo_health.py:295 — defined here
- `_holds_checked_out_content` — scripts/validation/check_repo_health.py:309 — defined here
- `_has_main_work_tree_index` — scripts/validation/check_repo_health.py:323 — defined here
- `_worktree_config_enabled` — scripts/validation/check_repo_health.py:377 — defined here
- `diagnose` — scripts/validation/check_repo_health.py:438 — defined here
- `_evaluate` — scripts/validation/check_repo_health.py:464 — defined here
- `main` — scripts/validation/check_repo_health.py:489 — defined here

## Structure
- Module docstring with gate specification and ADR-035 exit codes (scripts/validation/check_repo_health.py:1-70)
- Imports and report helpers from check_repo_health_report (scripts/validation/check_repo_health.py:72-94)
- Timing constants and error markers (scripts/validation/check_repo_health.py:96-133)
- `GitBudget` dataclass definition (scripts/validation/check_repo_health.py:135-149)
- Custom exception classes (scripts/validation/check_repo_health.py:151-161)
- `_git` subprocess runner with watchdog and budget clamp (scripts/validation/check_repo_health.py:163-207)
- `_scoped_core_bare` config inspector (scripts/validation/check_repo_health.py:209-232)
- Worktree marker and directory discovery (scripts/validation/check_repo_health.py:234-321)
- Index inspection and worktree content verification (scripts/validation/check_repo_health.py:323-375)
- Effective scope resolution and bare scope evaluation (scripts/validation/check_repo_health.py:377-436)
- `diagnose` and `_evaluate` logic (scripts/validation/check_repo_health.py:438-487)
- `main` CLI entry point (scripts/validation/check_repo_health.py:489-497)
- Script execution guard (scripts/validation/check_repo_health.py:499-501)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/check_repo_health.py`
- **language:** Python (python3)
- **lines:** 501
- **documented invocation:**
  - `uv run --frozen python scripts/validation/check_repo_health.py` — lefthook.yml:42
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/validation/check_repo_health.py`
- **abridged stdout:**
```
repo health: core.bare read in 1 config scope(s), none set true, for /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - Success (no scope flags this work tree bare, or none applies here)" — scripts/validation/check_repo_health.py:66
    - "1 - Logic error (a config scope flags a repository that has a work tree)" — scripts/validation/check_repo_health.py:67
    - "2 - Config error (invalid repository root)" — scripts/validation/check_repo_health.py:68
    - "3 - External failure (git missing, timed out, budget exhausted, or failed)" — scripts/validation/check_repo_health.py:69
  - Actual exit paths:
    - `return 0` — scripts/validation/check_repo_health.py:470
    - `return 0` — scripts/validation/check_repo_health.py:480
    - `return 0` — scripts/validation/check_repo_health.py:483
    - `return 1` — scripts/validation/check_repo_health.py:473
    - `return 1` — scripts/validation/check_repo_health.py:486
    - `return 2` — scripts/validation/check_repo_health.py:495
    - `return 3` — scripts/validation/check_repo_health.py:476
    - `raise SystemExit(main())` — scripts/validation/check_repo_health.py:500
- **for validators/gates:**
  - can it exit non-zero: yes, exits 1 on corruption/unreadable boolean config, 2 on invalid repository root, 3 on git failure/budget timeout.
  - does it fail on source repo's default branch: no, exits 0 (usable repository, 1 scope read).
- **does the output match what the documentation claims:** yes, reports usable status and core.bare scope count.

## Defects — required
none

## Observations
- Enforces an internal 7-second budget (`GIT_BUDGET_SECONDS = 7`) that fails closed with exit code 3 before Lefthook's 10-second timeout (`timeout: 10s` in `lefthook.yml:41`) terminates the process without diagnostics.
- Uses flat imports (`from check_repo_health_report import ...`) rather than relative imports because Lefthook executes the script directly by path.
- Inspects `<common_dir>/index` size (> 32 bytes) rather than existence alone to prevent false alarms on bare repositories that had `git read-tree` run inside them.

## Context cost
22001 bytes, 501 lines, ~5500 tokens (plus imported `check_repo_health_report.py` 6358 bytes, 150 lines, ~1600 tokens). Total: ~28359 bytes, ~7100 tokens.
