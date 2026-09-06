---
package: rjm
path: scripts/maintenance/_gc_apply.py
type: script
bytes: 11235
unit: inv-rjm-250
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_apply.py, sha256: 1e17387d7d9985af9f3df503778f048cb2d1db2644b8c31e3583759e072b0db6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_apply.py

## Purpose — required, verbatim
> "Act on a garbage-collection plan, after confirming the plan still holds." — scripts/maintenance/_gc_apply.py:2

## Design intent — required
Isolates all destructive git worktree removal mutations into a dedicated module that performs comprehensive revalidation before deleting any worktree. Because a garbage collection plan is merely a point-in-time snapshot, `apply_removals` re-runs the entire report builder via the caller-supplied `revalidate` callable to obtain a fresh plan, verifies that candidates are still proposed, and re-validates each candidate immediately before calling `git worktree remove` (checking HEAD stability, unmerged reflog commits, in-progress operations, and linked checkout identity). Halts immediately at the first removal failure to prevent cascading inconsistency caused by non-atomic git operations, and refuses mutation completely if `/proc` occupancy scanning was unavailable or if the evaluation was incomplete.

## Phase — required
cross-phase

## Inputs — required
- Plan report object `report`: `GcReport` — scripts/maintenance/_gc_apply.py:26,35
- Revalidation callable `revalidate`: `Callable[[], GcReport]` — scripts/maintenance/_gc_apply.py:35
- Git runner callable `run_git`: `Callable[..., str]` — scripts/maintenance/_gc_apply.py:35
- Git commands executed: `["worktree", "remove", path]` (line 31), `["rev-parse", "HEAD"]` (line 187)
- Filesystem inspection via `_gc_stale.in_progress_operation` and `_gc_stale.linked_checkout_present` (lines 162, 166)

## Outputs — required
- Mutations to git repository worktrees via `git worktree remove` (scripts/maintenance/_gc_apply.py:31)
- Appends removed worktree paths to `report.removed`: `report.removed.append` — scripts/maintenance/_gc_apply.py:181
- Appends error and skip messages to `report.remove_errors`: `report.remove_errors.append` — scripts/maintenance/_gc_apply.py:136,142,146,158,164,167,175
- Appends safety refusal messages to errors: `errors.append` — scripts/maintenance/_gc_apply.py:212,218

## Invokes — required
- script _gc_reasons — scripts/maintenance/_gc_apply.py:25
- script _gc_stale — scripts/maintenance/_gc_apply.py:25
- script worktree_report — scripts/maintenance/_gc_apply.py:26

## Invoked by — required
- script _gc_apply — scripts/maintenance/gc_worktrees.py:66
- script _gc_apply — scripts/maintenance/gc_worktrees.py:70

## Concepts named — required, verbatim
- `revalidate` — scripts/maintenance/_gc_apply.py:10 — defined here
- `Issue #2761` — scripts/maintenance/_gc_apply.py:15 — used here
- `_gc_reasons` — scripts/maintenance/_gc_apply.py:25 — used here
- `_gc_stale` — scripts/maintenance/_gc_apply.py:25 — used here
- `GcReport` — scripts/maintenance/_gc_apply.py:26 — used here
- `remove_worktree` — scripts/maintenance/_gc_apply.py:29 — defined here
- `apply_removals` — scripts/maintenance/_gc_apply.py:34 — defined here
- `reflog_only_work` — scripts/maintenance/_gc_apply.py:144 — used here
- `in_progress_operation` — scripts/maintenance/_gc_apply.py:162 — used here
- `linked_checkout_present` — scripts/maintenance/_gc_apply.py:166 — used here
- `_head_of` — scripts/maintenance/_gc_apply.py:184 — defined here
- `_head_moved_since` — scripts/maintenance/_gc_apply.py:192 — defined here
- `_refuses_to_mutate` — scripts/maintenance/_gc_apply.py:209 — defined here

## Structure
- Module docstring on mutation isolation and revalidation protocol (scripts/maintenance/_gc_apply.py:1-16)
- Imports and TYPE_CHECKING guard (scripts/maintenance/_gc_apply.py:18-27)
- `remove_worktree` function (scripts/maintenance/_gc_apply.py:29-31)
- `apply_removals` candidate revalidation and execution function (scripts/maintenance/_gc_apply.py:34-182)
- `_head_of` git commit lookup helper (scripts/maintenance/_gc_apply.py:184-190)
- `_head_moved_since` commit comparison helper (scripts/maintenance/_gc_apply.py:192-206)
- `_refuses_to_mutate` safety condition validator (scripts/maintenance/_gc_apply.py:209-223)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_apply.py`, language: Python 3, lines: 224
- documented invocation:
  - "from scripts.maintenance import _gc_apply" — scripts/maintenance/gc_worktrees.py:66
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_apply.py`
- abridged stdout: `(empty)`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (internal library module without standalone CLI entry point).
  Actual exit paths in code: no `sys.exit()` or `exit()` calls in code; returns None; `remove_worktree` raises on subprocess failure (caught at line 174). Exits 0 on module load when `PYTHONPATH` is set.
- for validators/gates: can it exit non-zero? no CLI entry point. Does it fail on the source repo's own default branch? exits 0 when loaded as a module.
- does the output match what the documentation claims? yes, provides mutation application logic with multi-layer revalidation.

## Defects — required
none

## Observations
- Defense against race conditions: candidates are revalidated at the plan level (`fresh = revalidate()`) and again immediately prior to deletion (`_head_moved_since`, `_gc_reasons.reflog_only_work`, a second HEAD read after the reflog probe subprocess, `in_progress_operation`, and `linked_checkout_present`).
- Non-atomic failure handling: expressly addresses the git issue where `git worktree remove` deletes the working directory before failing to remove the admin directory if unwritable; halts at first failure to avoid compounding partial repository states.

## Context cost
11235 bytes, 224 lines, ~2800 tokens. Loads `_gc_reasons.py` (12053 bytes), `_gc_stale.py` (19140 bytes), and `worktree_report.py` (10484 bytes). Total transitive context cost: ~52912 bytes (~13200 tokens).
