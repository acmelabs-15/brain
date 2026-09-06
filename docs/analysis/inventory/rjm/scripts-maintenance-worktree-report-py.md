---
package: rjm
path: scripts/maintenance/worktree_report.py
type: script
bytes: 7422
unit: inv-rjm-253
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/worktree_report.py, sha256: 251fe398370211c41c979ce7bbd3043f34661bf3c5e70fe998fdf151cd27cf11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/worktree_report.py

## Purpose — required, verbatim
> "The garbage-collection data model and how it renders." — scripts/maintenance/worktree_report.py:2

## Design intent — required
Separates the data model (`Worktree`, `Decision`, `GcReport`), stable decision reason constants (`KEEP_*`), and presentation formatting (`format_report`) for git worktree garbage collection from the operational logic in `gc_worktrees.py`. By isolating domain models and reason strings into a pure, dependency-light module, it enables unit testing and automation to match against stable failure/retention reasons without importing execution or git subprocessing code.

## Phase — required
cross-phase

## Inputs — required
- Git worktree metadata and inspection outcomes represented via `Worktree` dataclass fields: `path`, `branch`, `head`, `locked`, `bare`, `detached`, `prunable` (scripts/maintenance/worktree_report.py:45-51)
- Garbage collection decisions encapsulated in `Decision` dataclass: `path`, `branch`, `remove`, `reason`, `head` (scripts/maintenance/worktree_report.py:58-62)
- Aggregate reporting context structured in `GcReport`: `timestamp`, `base_ref`, `apply`, `main_worktree`, `total_worktrees`, `occupancy_unreadable`, `occupancy_unavailable`, `decisions`, `removed`, `remove_errors`, `remote_head_lookup_failed`, `remote_head_lookup_error` (scripts/maintenance/worktree_report.py:83-94)

## Outputs — required
- In-memory data structures: `Worktree`, `Decision`, `GcReport` dataclasses with derived properties (`kept`, `candidates`, `needs_disposition`, `unevaluated`) (scripts/maintenance/worktree_report.py:74, 97, 102, 107, 112)
- Formatted human-readable report string returned by `format_report(report: GcReport)` detailing DRY-RUN or APPLY mode, total worktrees, removal candidates, kept worktrees, live occupancy status, and time budget warnings (scripts/maintenance/worktree_report.py:152-204)

## Invokes — required
none

## Invoked by — required
- script worktree_report — scripts/maintenance/_gc_stale.py:19
- script worktree_report — scripts/maintenance/_gc_parse.py:32
- script worktree_report — scripts/maintenance/_gc_apply.py:26
- script worktree_report — scripts/maintenance/_gc_reasons.py:38
- script worktree_report — scripts/maintenance/gc_worktrees.py:88


## Concepts named — required, verbatim
- `KEEP_MAIN` — scripts/maintenance/worktree_report.py:16 — defined here
- `KEEP_BARE` — scripts/maintenance/worktree_report.py:17 — defined here
- `KEEP_LOCKED` — scripts/maintenance/worktree_report.py:18 — defined here
- `KEEP_DIRTY` — scripts/maintenance/worktree_report.py:19 — defined here
- `KEEP_DETACHED` — scripts/maintenance/worktree_report.py:20 — defined here
- `KEEP_UNPUSHED` — scripts/maintenance/worktree_report.py:21 — defined here
- `KEEP_GIT_ERROR` — scripts/maintenance/worktree_report.py:22 — defined here
- `KEEP_TIME_BUDGET` — scripts/maintenance/worktree_report.py:23 — defined here
- `KEEP_OCCUPIED` — scripts/maintenance/worktree_report.py:24 — defined here
- `KEEP_STALE_UNREACHABLE` — scripts/maintenance/worktree_report.py:25 — defined here
- `KEEP_STALE_HEAD_UNKNOWN` — scripts/maintenance/worktree_report.py:26 — defined here
- `KEEP_STALE` — scripts/maintenance/worktree_report.py:29 — defined here
- `KEEP_STALE_OCCUPIED` — scripts/maintenance/worktree_report.py:34 — defined here
- `KEEP_ADMIN_ONLY` — scripts/maintenance/worktree_report.py:38 — defined here
- `Worktree` — scripts/maintenance/worktree_report.py:42 — defined here
- `Decision` — scripts/maintenance/worktree_report.py:55 — defined here
- `GcReport` — scripts/maintenance/worktree_report.py:80 — defined here
- `_append_decision_group` — scripts/maintenance/worktree_report.py:117 — defined here
- `_append_disposition_group` — scripts/maintenance/worktree_report.py:131 — defined here
- `_append_apply_result` — scripts/maintenance/worktree_report.py:141 — defined here
- `format_report` — scripts/maintenance/worktree_report.py:152 — defined here

## Structure
- Module docstring — scripts/maintenance/worktree_report.py:1
- Stable keep reason string constants — scripts/maintenance/worktree_report.py:15
- Worktree dataclass definition — scripts/maintenance/worktree_report.py:41
- Decision dataclass definition — scripts/maintenance/worktree_report.py:54
- GcReport dataclass definition — scripts/maintenance/worktree_report.py:79
- Report rendering helper functions — scripts/maintenance/worktree_report.py:117
- format_report main formatting function — scripts/maintenance/worktree_report.py:152

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/maintenance/worktree_report.py`
- **language:** Python (python3)
- **lines:** 205
- **documented invocation:**
  - `none` (module defining data classes and rendering functions, imported by `scripts/maintenance/gc_worktrees.py`; has no CLI entrypoint)
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/maintenance/worktree_report.py`
- **abridged stdout:** `none` (exited silently)
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: `none` (library module, no exit codes documented)
  - Actual: exits 0 upon module import/execution when run directly; no `sys.exit()` calls present in file.
- **for validators/gates:**
  - Can exit non-zero: no, pure data definition and formatting module with no validation gate or error exit paths.
  - Verified on default branch: executes cleanly with exit code 0.
- **does the output match what the documentation claims:** yes, imports without error and functions as a standalone definitions module.

## Defects — required
none

## Observations
- The module includes a shebang `#!/usr/bin/env python3` despite having no `__main__` entrypoint block; it is intended solely as an imported library module.
- `GcReport` provides property helpers (`candidates`, `kept`, `needs_disposition`, `unevaluated`) that decouple decision analysis from report formatting.

## Context cost
7422 bytes, 205 lines, ~1500 tokens.
