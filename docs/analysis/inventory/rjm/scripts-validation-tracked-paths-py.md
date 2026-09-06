---
package: rjm
path: scripts/validation/tracked_paths.py
type: script
bytes: 6579
unit: inv-rjm-308
in_scope_via: scripts/validation/check_skill_md_drift.py
aliases: []
memo_inputs:
  - {path: scripts/validation/tracked_paths.py, sha256: 2d9d92b4577f09a636d93a061b26cd143389eb6153519e0ba1b195fe9b0d9afc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/tracked_paths.py

## Purpose — required, verbatim
> "Repository path existence judged from git-tracked content." — scripts/validation/tracked_paths.py:1

## Design intent — required
Provides deterministic, environment-independent path existence checking across the repository by inspecting git's tracked index (`git ls-files -s -z`) rather than querying the live filesystem. Filesystem existence checks are vulnerable to unreproducible developer state, gitignored build outputs (such as `build/audit/`), and differences between dirty workspaces and clean CI environments. By resolving paths and symlinks against git's index snapshot, this module guarantees that validation gates, drift checks, and citation baselines evaluate only committed or staged content across machines. It includes caching with manual cache invalidation (`clear_tracked_path_cache()`), synthesized parent directory indexing, recursive tracked symlink resolution, and strict error handling (`GitQueryError`) that prevents silent filesystem fallback on operational git errors while permitting fallback when running outside a git repository or without git.

## Phase — required
cross-phase

## Inputs — required
- Repository root path: `repo_root: Path`
- Relative path to test: `rel_path: str`
- Git index query execution via `git -C <repo_root> ls-files -s -z` and `git -C <repo_root> cat-file blob <sha>`

## Outputs — required
- Boolean path existence verdict: `path_exists_in_repo(repo_root: Path, rel_path: str) -> bool`
- Tracked path frozen set: `tracked_paths(repo_root: Path) -> frozenset[str] | None`
- Cached index snapshot: `_IndexSnapshot` containing `paths: frozenset[str]` and `symlinks: dict[str, str]`
- Exception: raises `GitQueryError` on operational git failures

## Invokes — required
none

## Invoked by — required
- script tracked_paths — scripts/validation/check_skill_md_drift.py:17
- script tracked_paths — scripts/validation/check_skill_memory_references.py:90
- script tracked_paths — scripts/validation/check_skill_md_portability.py:128

## Concepts named — required, verbatim
- `git index` — scripts/validation/tracked_paths.py:9 — used here
- `git ls-files` — scripts/validation/tracked_paths.py:13 — used here
- `GitQueryError` — scripts/validation/tracked_paths.py:38 — defined here
- `_IndexSnapshot` — scripts/validation/tracked_paths.py:43 — defined here
- `clear_tracked_path_cache` — scripts/validation/tracked_paths.py:110 — defined here
- `tracked_paths` — scripts/validation/tracked_paths.py:115 — defined here
- `path_exists_in_repo` — scripts/validation/tracked_paths.py:172 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/tracked_paths.py`, language: python3, lines: 186
- documented invocation: none (library module; no direct CLI entry point documented)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/validation/tracked_paths.py`, stdout: ``, actual exit code: 0
  - Library test command: `python3 -c "import sys; from pathlib import Path; sys.path.insert(0, 'scripts/validation'); from tracked_paths import tracked_paths, path_exists_in_repo; p = tracked_paths(Path('.')); print('tracked count:', len(p) if p else None); print('exists:', path_exists_in_repo(Path('.'), 'scripts/validation/tracked_paths.py'))"`, stdout: `tracked count: 10729\nexists: True`, actual exit code: 0
- documented exit codes vs. actual exit paths in code: none documented; module defines functions and contains no `sys.exit()` or `exit()` calls; exits 0 when loaded or run directly
- for validators/gates: helper utility for gates; raises `GitQueryError` on operational git command failures (lines 65, 71); does not fail on source repo checkout
- does the output match what the documentation claims: yes, executes cleanly with exit code 0 and accurately resolves tracked repository paths from git index

## Defects — required
none

## Observations
By caching the index snapshot (`@lru_cache(maxsize=8)`) and synthesizing parent directories into `paths` (lines 95-98), path existence checks are fast and directory existence checks operate seamlessly without requiring directory walk syscalls.

## Context cost
6579 bytes, approximately 1650 tokens.
