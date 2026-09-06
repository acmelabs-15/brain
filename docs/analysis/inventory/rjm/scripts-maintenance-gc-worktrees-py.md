---
package: rjm
path: scripts/maintenance/gc_worktrees.py
type: script
bytes: 20410
unit: inv-rjm-252
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/gc_worktrees.py

## Purpose — required, verbatim
> "Garbage-collect stale git worktrees safely." — scripts/maintenance/gc_worktrees.py:3

## Design intent — required
Agent and automated PR workflows frequently create transient git worktrees that accumulate without cleanup, consuming gigabytes of disk space and exhausting system resources such as the workspace markdown language server (issue #2761). `gc_worktrees.py` provides an automated, dry-run-by-default garbage collector that identifies and safely removes worktrees whose branches are fully merged into a specified base ref or fully pushed to remote repositories. To ensure zero loss of work, it enforces strict safety invariants (refusing to delete dirty worktrees, locked checkouts, active or main worktrees, checkouts holding unpushed commits, unmerged reflog commits, or suspended git operations) and guards against deleting worktrees currently occupied by live processes. It operates under a configurable execution time budget to prevent blocking git pre-push hooks.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments: `--apply` (scripts/maintenance/gc_worktrees.py:453), `--base` (scripts/maintenance/gc_worktrees.py:458), `--json` (scripts/maintenance/gc_worktrees.py:463), `--time-budget` (scripts/maintenance/gc_worktrees.py:468)
- Git repository state via subprocess commands:
  - `git status --porcelain` in worktree directory: `["status", "--porcelain"]` — scripts/maintenance/gc_worktrees.py:148
  - `git log HEAD --not --remotes` to check unpushed commits: `["log", "--format=%H", "HEAD", "--not", "--remotes"]` — scripts/maintenance/gc_worktrees.py:159
  - `git merge-base --is-ancestor HEAD <base_ref>` to verify merge ancestor status: `["git", "merge-base", "--is-ancestor", "HEAD", base_ref]` — scripts/maintenance/gc_worktrees.py:173
  - `git rev-parse --show-toplevel` for current checkout root: `["rev-parse", "--show-toplevel"]` — scripts/maintenance/gc_worktrees.py:404
- Worktree inventory list via `_gc_parse.list_worktrees` — scripts/maintenance/gc_worktrees.py:400
- Process working directory occupancy via `worktree_occupancy.occupied_paths()` or overridden `cwds` parameter — scripts/maintenance/gc_worktrees.py:401
- Remote tracking refs via `_gc_remote.load_remote_head_refs` — scripts/maintenance/gc_worktrees.py:409
- Upstream origin tracking via `_gc_remote.try_load_origin_upstreams` — scripts/maintenance/gc_worktrees.py:415
- Stale checkout check via `_gc_stale.linked_checkout_present` — scripts/maintenance/gc_worktrees.py:239
- Stale checkout evaluation via `_gc_stale.is_stale` — scripts/maintenance/gc_worktrees.py:260
- Suspended operation checks via `_gc_stale.in_progress_operation` — scripts/maintenance/gc_worktrees.py:288
- Reflog commit detection via `_gc_reasons.reflog_only_work` — scripts/maintenance/gc_worktrees.py:292

## Outputs — required
- Formatted human-readable report printed to stdout via `format_report(report)` — scripts/maintenance/gc_worktrees.py:499
- Machine-readable JSON summary printed to stdout via `json.dumps(asdict(report), indent=2)` — scripts/maintenance/gc_worktrees.py:497
- Error messages printed to stderr — scripts/maintenance/gc_worktrees.py:493
- Destructive worktree deletions when `--apply` is passed, delegated to `_gc_apply.apply_removals` — scripts/maintenance/gc_worktrees.py:487
- Process exit codes: 0 on success, 2 on withheld removals, 3 on git subprocess failure

## Invokes — required
- script _gc_apply — scripts/maintenance/gc_worktrees.py:70
- script _gc_parse — scripts/maintenance/gc_worktrees.py:71
- script _gc_reasons — scripts/maintenance/gc_worktrees.py:72
- script _gc_remote — scripts/maintenance/gc_worktrees.py:73
- script _gc_stale — scripts/maintenance/gc_worktrees.py:74
- script worktree_occupancy — scripts/maintenance/gc_worktrees.py:83
- script worktree_report — scripts/maintenance/gc_worktrees.py:88

## Invoked by — required
- file lefthook.yml — lefthook.yml:585
- doc scripts/README.md — scripts/README.md:223
- script worktree_occupancy.py — scripts/maintenance/worktree_occupancy.py:4
- script worktree_report.py — scripts/maintenance/worktree_report.py:6

## Concepts named — required, verbatim
- `gc_worktrees.py` — scripts/maintenance/gc_worktrees.py:27 — defined here
- `Issue #2761` — scripts/maintenance/gc_worktrees.py:6 — used here
- `ADR-035` — scripts/maintenance/gc_worktrees.py:43 — used here
- `Occupancy` — scripts/maintenance/gc_worktrees.py:84 — used here
- `is_occupied` — scripts/maintenance/gc_worktrees.py:85 — used here
- `occupied_paths` — scripts/maintenance/gc_worktrees.py:86 — used here
- `Decision` — scripts/maintenance/gc_worktrees.py:99 — used here
- `GcReport` — scripts/maintenance/gc_worktrees.py:100 — used here
- `Worktree` — scripts/maintenance/gc_worktrees.py:101 — used here
- `format_report` — scripts/maintenance/gc_worktrees.py:102 — used here
- `_DEFAULT_BASE` — scripts/maintenance/gc_worktrees.py:105 — defined here
- `_GIT_TIMEOUT_SECONDS` — scripts/maintenance/gc_worktrees.py:106 — defined here
- `_DECIDE_WORKERS` — scripts/maintenance/gc_worktrees.py:107 — defined here
- `_DEFAULT_TIME_BUDGET_SECONDS` — scripts/maintenance/gc_worktrees.py:121 — defined here
- `_run_git` — scripts/maintenance/gc_worktrees.py:124 — defined here
- `has_uncommitted_changes` — scripts/maintenance/gc_worktrees.py:146 — defined here
- `has_unpushed_commits` — scripts/maintenance/gc_worktrees.py:151 — defined here
- `is_merged_to_base` — scripts/maintenance/gc_worktrees.py:165 — defined here
- `decide` — scripts/maintenance/gc_worktrees.py:191 — defined here
- `_keep` — scripts/maintenance/gc_worktrees.py:354 — defined here
- `build_report` — scripts/maintenance/gc_worktrees.py:359 — defined here
- `parse_args` — scripts/maintenance/gc_worktrees.py:447 — defined here
- `main` — scripts/maintenance/gc_worktrees.py:481 — defined here

## Structure
- Module docstring with safety conditions, CLI usage, exit codes, and issue references (scripts/maintenance/gc_worktrees.py:1-45)
- Imports and PYTHONPATH resolution (scripts/maintenance/gc_worktrees.py:47-82)
- Module imports from worktree_occupancy and worktree_report (scripts/maintenance/gc_worktrees.py:83-103)
- Configuration constants and time budget definitions (scripts/maintenance/gc_worktrees.py:105-121)
- Subprocess helper function `_run_git` (scripts/maintenance/gc_worktrees.py:124-144)
- Git state inspection functions: `has_uncommitted_changes`, `has_unpushed_commits`, `is_merged_to_base` (scripts/maintenance/gc_worktrees.py:146-189)
- Safety decision engine `decide` with `kept` and `removable` closures (scripts/maintenance/gc_worktrees.py:191-352)
- `_keep` decision constructor (scripts/maintenance/gc_worktrees.py:354-356)
- Report compiler `build_report` with thread pool execution (scripts/maintenance/gc_worktrees.py:359-445)
- Command-line argument parser `parse_args` (scripts/maintenance/gc_worktrees.py:447-479)
- Entry point `main` and invocation block (scripts/maintenance/gc_worktrees.py:481-507)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/gc_worktrees.py`, language: Python, lines: 507
- documented invocation:
  `uv run python scripts/maintenance/gc_worktrees.py` — scripts/maintenance/gc_worktrees.py:27
- executed: yes
- actual command run: `python3 scripts/maintenance/gc_worktrees.py`
- abridged stdout:
```
Worktree GC [DRY-RUN] base=origin/main
  total worktrees: 1
  removal candidates: 0
  kept: 1
  occupancy check unavailable: /proc could not be read, so no worktree was checked for a live process. Every worktree below is reported without occupancy evidence.
  Kept:
    - /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm [main] KEEP: main-or-current worktree
  DRY-RUN: removed nothing. Pass --apply to remove 0 candidate(s).
```
- actual exit code: 0
- documented exit codes:
  - "0 - Success (dry-run completed, or apply removed/kept as planned)" — scripts/maintenance/gc_worktrees.py:39
  - "2 - Apply ran, but one or more removals were withheld or failed" — scripts/maintenance/gc_worktrees.py:40
  - "3 - External: a git subprocess failed (for example, an unusable base ref)" — scripts/maintenance/gc_worktrees.py:41
- actual exit paths in code:
  - `return 3` — scripts/maintenance/gc_worktrees.py:494
  - `return 2` — scripts/maintenance/gc_worktrees.py:501
  - `return 0` — scripts/maintenance/gc_worktrees.py:502
  - `sys.exit(main())` — scripts/maintenance/gc_worktrees.py:506
- for validators/gates: can exit 2 (withheld removals on apply) or 3 (subprocess failure); exits 0 on the source repository's default branch.
- does output match documentation: yes, executes a dry run without mutations and summarizes kept worktrees and reasons.

## Defects — required
none

## Observations
- Thread safety by immutability: `build_report` freezes all input collections (such as `live_cwds`, `remote_head_refs`, `origin_upstreams`) before launching `ThreadPoolExecutor`, ensuring that parallel worktree inspections do not race on shared state.
- Deterministic output ordering: `executor.map` returns decisions strictly matching input worktree order regardless of which thread completes first.
- Strict mutation isolation: actual deletion logic is segregated into `_gc_apply.py` (`apply_removals`), which requires a fresh revalidation callback before performing any deletions.

## Context cost
20410 bytes for this file alone; 80044 bytes (~20000 tokens) including all imported internal maintenance modules (`_gc_apply`, `_gc_parse`, `_gc_reasons`, `_gc_remote`, `_gc_stale`, `worktree_occupancy`, `worktree_report`).
