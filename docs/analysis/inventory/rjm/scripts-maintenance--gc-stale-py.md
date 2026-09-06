---
package: rjm
path: scripts/maintenance/_gc_stale.py
type: script
bytes: 19140
unit: inv-rjm-251
in_scope_via: scripts/maintenance/gc_worktrees.py
aliases: []
memo_inputs:
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/maintenance/_gc_stale.py

## Purpose — required, verbatim
> "Diagnostics for stale (prunable) worktree admin entries." — scripts/maintenance/_gc_stale.py:1

## Design intent — required
Provides diagnostic probes for Git worktree admin directories (`.git/worktrees/<name>`) that Git classifies as `prunable` (missing worktree directories). Because Git's `prunable` marker cannot distinguish between a deleted worktree and a temporarily unmounted or moved one, `gc_worktrees.py` refuses to delete these entries automatically and instead directs operators to `git worktree prune --expire`. To support safe decision-making and prevent permanent data loss, this module investigates whether deleting an admin directory would destroy uncommitted staged work anchored only in the orphaned index (`index`), unmerged commits reachable solely through worktree-specific reflogs (`logs/HEAD`) or worktree-scoped namespaces (`refs/worktree/`, `refs/bisect/`), or in-flight Git mutations locked by operation markers (such as `MERGE_HEAD`, `index.lock`, or `HEAD.lock`). Without these helpers, running worktree garbage collection would silently purge dangling blobs and orphan active rebases, merges, or detached commits.

## Phase — required
cross-phase

## Inputs — required
- Target worktree directory path: `worktree_path` (scripts/maintenance/_gc_stale.py:24)
- Git command execution callable: `run_git` (scripts/maintenance/_gc_stale.py:24)
- Repository root directory path: `repo_dir` (scripts/maintenance/_gc_stale.py:24, 88, 133)
- Admin directory path: `admin` (scripts/maintenance/_gc_stale.py:88, 133, 355)
- Target commit hash: `head` (scripts/maintenance/_gc_stale.py:88)
- Subprocess timeout in seconds: `timeout` (scripts/maintenance/_gc_stale.py:88, 133)
- Worktree record: `worktree` (scripts/maintenance/_gc_stale.py:397)
- Live checkout checker predicate: `checkout_present` (scripts/maintenance/_gc_stale.py:397)
- Admin files read: `(admin / "gitdir").read_text(encoding="utf-8")` (scripts/maintenance/_gc_stale.py:61, 257)
- Worktree git marker read: `Path(path) / ".git"` (scripts/maintenance/_gc_stale.py:246, 309)
- Subprocess Git queries: `git rev-parse --git-common-dir` (line 47), `git diff-index --cached --quiet` (line 115), `git rev-list --no-walk --stdin --not --all` (line 170), `git cat-file --batch-check` (line 184)

## Outputs — required
- Admin directory path `Path | None` returned by `admin_dir_for` (scripts/maintenance/_gc_stale.py:24) and `admin_dir_from_marker` (scripts/maintenance/_gc_stale.py:300)
- Staged content state string (`"staged"`, `"clean"`, or `"unknown"`) returned by `staged_content_state` (scripts/maintenance/_gc_stale.py:83-85, 88)
- Unanchored commit hash list `list[str] | None` returned by `unreachable_admin_commits` (scripts/maintenance/_gc_stale.py:133)
- Live checkout presence boolean returned by `linked_checkout_present` (scripts/maintenance/_gc_stale.py:212)
- In-progress operation description string `str | None` returned by `in_progress_operation` (scripts/maintenance/_gc_stale.py:319)
- Stale status boolean returned by `is_stale` (scripts/maintenance/_gc_stale.py:397)

## Invokes — required
- script _gc_anchors — scripts/maintenance/_gc_stale.py:17
- script regular_file — scripts/maintenance/_gc_stale.py:18
- script Worktree — scripts/maintenance/_gc_stale.py:19

## Invoked by — required
- script _gc_stale — scripts/maintenance/_gc_apply.py:25
- script _gc_stale — scripts/maintenance/_gc_reasons.py:31
- script _gc_stale — scripts/maintenance/gc_worktrees.py:66

## Concepts named — required, verbatim
- `admin_dir_for` — scripts/maintenance/_gc_stale.py:24 — defined here
- `GitRunner` — scripts/maintenance/_gc_stale.py:21 — defined here
- `STAGED` — scripts/maintenance/_gc_stale.py:83 — defined here
- `CLEAN` — scripts/maintenance/_gc_stale.py:84 — defined here
- `UNKNOWN` — scripts/maintenance/_gc_stale.py:85 — defined here
- `staged_content_state` — scripts/maintenance/_gc_stale.py:88 — defined here
- `unreachable_admin_commits` — scripts/maintenance/_gc_stale.py:133 — defined here
- `_existing_objects` — scripts/maintenance/_gc_stale.py:177 — defined here
- `_run` — scripts/maintenance/_gc_stale.py:192 — defined here
- `linked_checkout_present` — scripts/maintenance/_gc_stale.py:212 — defined here
- `_OPERATION_MARKERS` — scripts/maintenance/_gc_stale.py:287 — defined here
- `admin_dir_from_marker` — scripts/maintenance/_gc_stale.py:300 — defined here
- `in_progress_operation` — scripts/maintenance/_gc_stale.py:319 — defined here
- `_ref_update_in_flight` — scripts/maintenance/_gc_stale.py:355 — defined here
- `_anchored` — scripts/maintenance/_gc_stale.py:389 — defined here
- `is_stale` — scripts/maintenance/_gc_stale.py:397 — defined here
- `_resolved` — scripts/maintenance/_gc_stale.py:69 — defined here
- `Worktree` — scripts/maintenance/_gc_stale.py:19 — used here
- `regular_file` — scripts/maintenance/_gc_stale.py:18 — used here
- `_gc_anchors` — scripts/maintenance/_gc_stale.py:17 — used here

## Structure
- Module docstring on diagnostics for stale worktree admin entries (scripts/maintenance/_gc_stale.py:1-8)
- Imports and `GitRunner` type alias (scripts/maintenance/_gc_stale.py:10-21)
- `admin_dir_for` admin directory locator (scripts/maintenance/_gc_stale.py:24-66)
- `_resolved` path normalization helper (scripts/maintenance/_gc_stale.py:69-80)
- Staged state constants `STAGED`, `CLEAN`, `UNKNOWN` (scripts/maintenance/_gc_stale.py:83-85)
- `staged_content_state` index difference inspector (scripts/maintenance/_gc_stale.py:88-130)
- `unreachable_admin_commits` orphaned commit detector (scripts/maintenance/_gc_stale.py:133-174)
- `_existing_objects` object database filter (scripts/maintenance/_gc_stale.py:177-189)
- `_run` subprocess runner for piped commit IDs (scripts/maintenance/_gc_stale.py:192-209)
- `linked_checkout_present` bidirectional worktree identity validator (scripts/maintenance/_gc_stale.py:212-261)
- `_OPERATION_MARKERS` lock and state marker table (scripts/maintenance/_gc_stale.py:287-297)
- `admin_dir_from_marker` fast marker file parser (scripts/maintenance/_gc_stale.py:300-316)
- `in_progress_operation` operation probe (scripts/maintenance/_gc_stale.py:319-352)
- `_ref_update_in_flight` ref lock probe (scripts/maintenance/_gc_stale.py:355-386)
- `_anchored` relative path resolution helper (scripts/maintenance/_gc_stale.py:389-394)
- `is_stale` stale worktree predicate (scripts/maintenance/_gc_stale.py:397-414)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/maintenance/_gc_stale.py`
- **language:** Python (python3)
- **lines:** 415
- **documented invocation:**
  - "from scripts.maintenance import _gc_stale" — scripts/maintenance/_gc_reasons.py:31
- **executed:** yes
- **actual command run:** `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/maintenance/_gc_stale.py`
- **abridged stdout:** `(empty)`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: `none` (internal helper library module with no CLI entry point or `sys.exit` calls)
  - Actual exit paths in code: none (`exit`/`sys.exit` not called; exits 0 upon clean module load)
- **for validators/gates:** Library module helper; individual functions return tri-state verdicts (`"staged"`, `"clean"`, `"unknown"`) or booleans. When executed as a script, exits 0 with no side effects.
- **does the output match what the documentation claims:** Yes, clean import and execution with no errors.

## Defects — required
none

## Observations
- Demonstrates thorough Git internals defense: inspects `.git/worktrees/<name>/index`, `logs/HEAD`, `refs/worktree/`, `refs/bisect/`, and lock markers (`MERGE_HEAD`, `CHERRY_PICK_HEAD`, `REVERT_HEAD`, `BISECT_LOG`, `rebase-merge`, `rebase-apply`, `sequencer`, `index.lock`, `HEAD.lock`).
- Bidirectional link verification in `linked_checkout_present` (lines 246-261) ensures that `.git` marker in the worktree directory points to the admin directory, and the admin directory's `gitdir` file points back to the worktree, guarding against pathname re-creation collisions and cross-mounted checkouts.
- Tolerates relative paths from `worktree.useRelativePaths` by anchoring paths against the enclosing file's parent directory rather than process working directory (lines 238-242, 389-394).

## Context cost
19140 bytes, 415 lines, ~4785 tokens.
