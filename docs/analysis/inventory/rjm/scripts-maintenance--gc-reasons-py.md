---
package: rjm
path: scripts/maintenance/_gc_reasons.py
type: script
bytes: 12053
unit: inv-rjm-250
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_reasons.py, sha256: 22de18647c922dbf12c06b57fa8f9ac95d21742f8903a2d4d1bc145dc78af179}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_reasons.py

## Purpose — required, verbatim
> "Turn what the stale-entry probes found into advice a reader can act on." — scripts/maintenance/_gc_reasons.py:2

## Design intent — required
Generates actionable, safe advice and recovery guidance for stale git worktree entries, ensuring that multiple independent forms of data loss are separately warned about and command-remediated. A stale worktree entry can abandon up to three distinct components: a detached HEAD reachable from no reference, staged blobs in an orphaned index, and commits anchored only in the worktree's admin reflog. `stale_keep_reason` joins separate warnings for each risk (emitting precise, executable recovery commands targeting the main worktree with `git -C`) before ending with the retention verdict, while `reflog_only_work` ensures healthy-looking removal candidates are checked for reflog-anchored commits before destruction.

## Phase — required
cross-phase

## Inputs — required
- Worktree records `worktree`: `Worktree` — scripts/maintenance/_gc_reasons.py:43,71
- Main repository path `main_path`: `str` — scripts/maintenance/_gc_reasons.py:71,113,134,153,180
- Git runner callable `run_git`: `Callable[..., str]` — scripts/maintenance/_gc_reasons.py:71,113,134,217
- Admin directory path `admin`: `Path` — scripts/maintenance/_gc_reasons.py:153,180
- Probe results from `_gc_stale.admin_dir_for`, `_gc_stale.staged_content_state`, `_gc_stale.unreachable_admin_commits` (lines 96, 157, 182)

## Outputs — required
- Formatted explanation strings with embedded recovery commands (scripts/maintenance/_gc_reasons.py:71,113,246)

## Invokes — required
- script _gc_stale — scripts/maintenance/_gc_reasons.py:31
- script worktree_report — scripts/maintenance/_gc_reasons.py:38

## Invoked by — required
- script _gc_reasons — scripts/maintenance/gc_worktrees.py:66
- script _gc_reasons — scripts/maintenance/gc_worktrees.py:72
- script _gc_reasons — scripts/maintenance/gc_worktrees.py:79
- script _gc_reasons — scripts/maintenance/_gc_apply.py:25

## Concepts named — required, verbatim
- `Issue #2761` — scripts/maintenance/_gc_reasons.py:17 — used here
- `_gc_stale` — scripts/maintenance/_gc_reasons.py:31 — used here
- `KEEP_STALE` — scripts/maintenance/_gc_reasons.py:39 — used here
- `KEEP_STALE_HEAD_UNKNOWN` — scripts/maintenance/_gc_reasons.py:40 — used here
- `KEEP_STALE_OCCUPIED` — scripts/maintenance/_gc_reasons.py:41 — used here
- `KEEP_STALE_UNREACHABLE` — scripts/maintenance/_gc_reasons.py:42 — used here
- `Worktree` — scripts/maintenance/_gc_reasons.py:43 — used here
- `_path_confirmed_absent` — scripts/maintenance/_gc_reasons.py:49 — defined here
- `stale_keep_reason` — scripts/maintenance/_gc_reasons.py:71 — defined here
- `reflog_only_work` — scripts/maintenance/_gc_reasons.py:113 — defined here
- `_head_warning` — scripts/maintenance/_gc_reasons.py:134 — defined here
- `_staged_warning` — scripts/maintenance/_gc_reasons.py:153 — defined here
- `_admin_warning` — scripts/maintenance/_gc_reasons.py:180 — defined here
- `stale_head_is_reachable` — scripts/maintenance/_gc_reasons.py:217 — defined here
- `suspended_operation_reason` — scripts/maintenance/_gc_reasons.py:246 — defined here

## Structure
- Module docstring on three independent loss modes in stale entries (scripts/maintenance/_gc_reasons.py:1-18)
- Imports and TYPE_CHECKING block (scripts/maintenance/_gc_reasons.py:20-46)
- `_path_confirmed_absent` FileNotFoundError validator (scripts/maintenance/_gc_reasons.py:49-68)
- `stale_keep_reason` warning and recovery advice aggregator (scripts/maintenance/_gc_reasons.py:71-110)
- `reflog_only_work` healthy candidate reflog loss probe (scripts/maintenance/_gc_reasons.py:113-131)
- `_head_warning` detached HEAD rescue generator (scripts/maintenance/_gc_reasons.py:134-150)
- `_staged_warning` index staged content recovery generator (scripts/maintenance/_gc_reasons.py:153-177)
- `_admin_warning` unreachable admin reflog commit rescue generator (scripts/maintenance/_gc_reasons.py:180-214)
- `stale_head_is_reachable` for-each-ref reachability verifier (scripts/maintenance/_gc_reasons.py:217-243)
- `suspended_operation_reason` in-progress git operation explanation helper (scripts/maintenance/_gc_reasons.py:246-252)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/maintenance/_gc_reasons.py`, language: Python 3, lines: 253
- documented invocation:
  - "import _gc_reasons" — scripts/maintenance/gc_worktrees.py:79
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_reasons.py`
- abridged stdout: `(empty)`
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (internal reasons generator module without standalone CLI entry point).
  Actual exit paths in code: no `sys.exit()` or `exit()` calls in code; module defines functions and returns. Exits 0 on module execution.
- for validators/gates: can it exit non-zero? no CLI entry point. Does it fail on the source repo's own default branch? exits 0 when loaded as a module.
- does the output match what the documentation claims? yes, provides reason formatting and recovery commands.

## Defects — required
none

## Observations
- Command chaining safety: recovery commands are joined with `&&` rather than `;` so a failure in an earlier recovery branch aborts the sequence rather than silently executing later commands.
- Delimiter protection: warnings use `" | "` delimiters rather than periods (`.`) because git commands pasted into bash would interpret a trailing period as part of an argument (e.g. `bad object` on SHA with trailing period).

## Context cost
12053 bytes, 253 lines, ~3000 tokens. Loads `_gc_stale.py` (19140 bytes) and `worktree_report.py` (10484 bytes). Total transitive context cost: ~41677 bytes (~10400 tokens).
