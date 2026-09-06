---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/walking.py
type: script
bytes: 12883
unit: inv-rjm-131
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/walking.py, sha256: c5ec30edde983edb8e7427dbe17f5d866f34515ebdbb2b82a8867f31db8f074e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/walking.py

## Purpose — required, verbatim
> "orphan-ref-validator file walking + secret denylist." — .claude/skills/orphan-ref-validator/scripts/walking.py:2

## Design intent — required
Separates the recursive filesystem-walking, directory pruning, secret exclusion, symlink escape prevention, and size cap policies into a dedicated, reusable, testable helper module for the `orphan-ref-validator` skill. Without it, the main `scan.py` scanner would mix complex recursive filesystem traversal and security constraints (such as CWE-22 directory traversal and CWE-59 symlink escapes, circular symlink loops, reading secret credential files like `.env`, `*.key`, `id_rsa`, or attempting to parse files >5MB) directly into reference-matching logic. Furthermore, it prunes known expensive VCS/vendor directories (`.git`, `node_modules`, `worktrees`, `cache`, `__pycache__`) and progressive-disclosure documentation subtrees (`references`, `templates`) at directory discovery time rather than traversing into them and filtering later, avoiding performance traps and high-noise false positive orphan ref findings.

## Phase — required
rjm:build

## Inputs — required
- Root target directory or file passed as `target: Path` to `collect_walk_targets` or `walk_targets` (.claude/skills/orphan-ref-validator/scripts/walking.py:96, 117)
- Repository root path passed as `repo_root: Path` to enforce repository boundary containment (.claude/skills/orphan-ref-validator/scripts/walking.py:96, 117)
- Target filesystem entries traversed via `directory.iterdir()`, `entry.stat()`, `entry.is_symlink()`, `entry.is_dir()`, `entry.is_file()` (.claude/skills/orphan-ref-validator/scripts/walking.py:157, 186, 204, 210, 221, 339, 356)
- File suffixes: `SCAN_FILE_SUFFIXES` = `(".md", ".json", ".yaml", ".yml", ".py")` (.claude/skills/orphan-ref-validator/scripts/walking.py:27)
- Excluded directory names: `EXCLUDE_DIR_NAMES` = `frozenset({"node_modules", ".git", "worktrees", "cache", "__pycache__", "references", "templates"})` (.claude/skills/orphan-ref-validator/scripts/walking.py:31-34)
- Secret denylist patterns: `SECRET_DENYLIST_PATTERNS` matching 14 filename regex patterns (`.env*`, `secrets.*`, `*.key`, `*.pem`, `*.pfx`, `*.p12`, `id_rsa*`, `id_ed25519*`, `id_ecdsa*`, `id_dsa*`, `.netrc`, `.npmrc`, `.pypirc`, `credentials`) (.claude/skills/orphan-ref-validator/scripts/walking.py:38-53)
- Size cap: `MAX_FILE_BYTES` = `5 * 1024 * 1024` (5 MB) (.claude/skills/orphan-ref-validator/scripts/walking.py:55)

## Outputs — required
- List of candidate `Path` objects matching scan criteria (.claude/skills/orphan-ref-validator/scripts/walking.py:96, 117)
- Traversal problem records returned as `list[WalkProblem]` instances with fields `target: Path`, `reason: str`, `error_type: str = "config"` (or `"auth"` on `PermissionError`) (.claude/skills/orphan-ref-validator/scripts/walking.py:58-63, 96, 177, 182, 190, 208, 218, 225, 238, 242, 278, 283, 287, 311, 315, 341, 343)
- Warning log records emitted via `LOGGER.warning(...)` for symlink escapes, unreadable files, symlink cycles, stat errors, and oversized files (.claude/skills/orphan-ref-validator/scripts/walking.py:84, 89, 106, 150, 153, 159, 176, 181, 189, 207, 217, 224, 258, 277, 282, 286, 311, 314, 327, 332, 358, 361)

## Invokes — required
none

## Invoked by — required
- script scan.py — .claude/skills/orphan-ref-validator/scripts/scan.py:8

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/walking.py:2 — used here
- `scan.py` — .claude/skills/orphan-ref-validator/scripts/walking.py:4 — used here
- `scan_file` — .claude/skills/orphan-ref-validator/scripts/walking.py:7 — used here
- `EXCLUDE_DIR_NAMES` — .claude/skills/orphan-ref-validator/scripts/walking.py:10 — defined here
- `SCAN_FILE_SUFFIXES` — .claude/skills/orphan-ref-validator/scripts/walking.py:27 — defined here
- `SECRET_DENYLIST_PATTERNS` — .claude/skills/orphan-ref-validator/scripts/walking.py:38 — defined here
- `MAX_FILE_BYTES` — .claude/skills/orphan-ref-validator/scripts/walking.py:55 — defined here
- `WalkProblem` — .claude/skills/orphan-ref-validator/scripts/walking.py:59 — defined here
- `is_secret_path` — .claude/skills/orphan-ref-validator/scripts/walking.py:65 — defined here
- `is_safe_subdirectory` — .claude/skills/orphan-ref-validator/scripts/walking.py:71 — defined here
- `CWE-22` — .claude/skills/orphan-ref-validator/scripts/walking.py:78 — used here
- `CWE-59` — .claude/skills/orphan-ref-validator/scripts/walking.py:78 — used here
- `collect_walk_targets` — .claude/skills/orphan-ref-validator/scripts/walking.py:96 — defined here
- `walk_targets` — .claude/skills/orphan-ref-validator/scripts/walking.py:117 — defined here
- `rglob` — .claude/skills/orphan-ref-validator/scripts/walking.py:127 — used here

## Structure
none (python script; imports, constants: `SCAN_FILE_SUFFIXES`, `EXCLUDE_DIR_NAMES`, `SECRET_DENYLIST_PATTERNS`, `MAX_FILE_BYTES`; class: `WalkProblem`; functions: `is_secret_path`, `is_safe_subdirectory`, `collect_walk_targets`, `walk_targets`, `_iter_dir_pruned`, `_collect_dir_pruned`, `_collect_entry`, `_unsafe_symlink_problem`, `_iter_entry`, `_maybe_collect_file`, `_maybe_yield_file`, `_unsafe_file_problem`, `_is_safe_file`, `_size_problem`, `_error_type`, `_within_size_cap`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/walking.py`, language: Python 3, lines: 364
- documented invocation: none (internal module imported by `scan.py:107, 145`; no standalone CLI execution documented in `SKILL.md`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/walking.py`
  abridged stdout: (empty)
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (module defines no CLI entry point).
  Actual exit paths in code:
  No calls to `sys.exit`, `exit()`, or `raise SystemExit`. Implicit exit code 0 when evaluated as a script. Module constructs `WalkProblem` instances with `error_type="config"` or `error_type="auth"` (.claude/skills/orphan-ref-validator/scripts/walking.py:62, 347-350), which `scan.py` maps to ADR-035 exit codes 2 (config/usage) or 4 (auth/permission) via `scan_error_exit_code`.
- for validators/gates: can it exit non-zero? Only upon uncaught syntax/import exceptions. Does it fail on the source repo's own default branch? No, exits 0.
- does the output match what the documentation claims? none (no standalone output claims documented).

## Defects — required
- `doc-drift` · .claude/skills/orphan-ref-validator/scripts/walking.py:27 · `SCAN_FILE_SUFFIXES` includes `.py` files (`(".md", ".json", ".yaml", ".yml", ".py")`), but `SKILL.md:55` and `SKILL.md:129` document only `.md`, `.json`, `.yaml`, and `.yml` as scanned candidate suffixes.
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:173 · The `## Scripts` table in `SKILL.md` lists only `scripts/scan.py` and `scripts/__init__.py`, omitting helper modules `scripts/walking.py`, `scripts/envelope.py`, `scripts/filters.py`, `scripts/patterns.py`, and `scripts/counts.py` created during modularization.
- `other` · .claude/skills/orphan-ref-validator/scripts/walking.py:140 · Dead helper functions `_iter_dir_pruned` (lines 140-163), `_iter_entry` (lines 246-266), and `_maybe_yield_file` (lines 291-303) are uncalled dead code left behind after `walk_targets` was refactored to delegate to `collect_walk_targets`.

## Observations
- Defense-in-depth symlink traversal protection: checks `is_safe_subdirectory`, `_unsafe_symlink_problem`, and `_unsafe_file_problem` by testing whether `resolve()` is relative to `repo_root.resolve()` to mitigate CWE-22 (path traversal) and CWE-59 (improper link resolution).
- Circular symlink protection: maintains `visited: set[Path]` of canonical resolved paths during recursive descent in `_collect_dir_pruned` to detect and break symlink loops (.claude/skills/orphan-ref-validator/scripts/walking.py:112, 184).
- Exclusion policy: `EXCLUDE_DIR_NAMES` prunes VCS/build directories (`node_modules`, `.git`, `worktrees`, `cache`, `__pycache__`) and progressive-disclosure documentation subtrees (`references`, `templates`) at directory iteration time, preventing expensive recursive traversals into vendor/VCS trees.
- Secret denylist: `SECRET_DENYLIST_PATTERNS` checks filenames against 14 credential regexes (`.env*`, `secrets.*`, `*.key`, `*.pem`, `*.pfx`, `*.p12`, `id_rsa*`, `id_ed25519*`, `id_ecdsa*`, `id_dsa*`, `.netrc`, `.npmrc`, `.pypirc`, `credentials`) before reading.
- Size limit: enforces `MAX_FILE_BYTES = 5 * 1024 * 1024` (5 MB), flagging oversized files with a `WalkProblem` record.

## Context cost
12883 bytes (~3220 tokens). Self-contained Python module relying only on Python standard library (`pathlib`, `re`, `logging`, `dataclasses`, `collections.abc`).
