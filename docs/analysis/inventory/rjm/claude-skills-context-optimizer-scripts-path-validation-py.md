---
package: rjm
path: .claude/skills/context-optimizer/scripts/path_validation.py
type: script
bytes: 3487
unit: inv-rjm-108
in_scope_via: .claude/skills/context-optimizer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/scripts/path_validation.py

## Purpose — required, verbatim
> "Shared path validation utilities for CWE-22 path traversal prevention." — .claude/skills/context-optimizer/scripts/path_validation.py:1

## Design intent — required
Provides repository-root-anchored path validation to prevent CWE-22 path traversal attacks across context-optimizer scripts. It enforces that relative paths, absolute paths, and symlinks resolve strictly within the active git repository or worktree root, raising `PermissionError` when boundaries are breached.

## Phase — required
cross-phase

## Inputs — required
- Function argument `path: Path` (absolute or relative) and optional `repo_root: Path | None` passed to `validate_path_within_repo` ("path: Path" — .claude/skills/context-optimizer/scripts/path_validation.py:61; "repo_root: Path | None = None" — .claude/skills/context-optimizer/scripts/path_validation.py:61)
- Git repository worktree root via `git rev-parse --show-toplevel` ("git" — .claude/skills/context-optimizer/scripts/path_validation.py:29; "rev-parse" — .claude/skills/context-optimizer/scripts/path_validation.py:29; "--show-toplevel" — .claude/skills/context-optimizer/scripts/path_validation.py:29)

## Outputs — required
- Resolved `Path` guaranteed to reside within the repository root or worktree root ("The resolved path (guaranteed to be within repo or worktree root)." — .claude/skills/context-optimizer/scripts/path_validation.py:74)
- Side effects: raises `PermissionError` on path traversal ("PermissionError: If the resolved path is outside both roots." — .claude/skills/context-optimizer/scripts/path_validation.py:77) or `RuntimeError` if repository root cannot be determined ("RuntimeError: If not in a git repository or git is unavailable." — .claude/skills/context-optimizer/scripts/path_validation.py:25)

## Invokes — required
none

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:2
- script analyze_skill_placement.py (imported as "path_validation" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:39)
- script compress_markdown_content.py (imported as "path_validation" — .claude/skills/context-optimizer/scripts/compress_markdown_content.py:35)
- script extract_and_index.py (imported as "path_validation" — .claude/skills/context-optimizer/scripts/extract_and_index.py:31)

## Concepts named — required, verbatim
- `CWE-22` — .claude/skills/context-optimizer/scripts/path_validation.py:1 — used here
- `path traversal prevention` — .claude/skills/context-optimizer/scripts/path_validation.py:1 — defined here
- `repo-root-anchored path validation` — .claude/skills/context-optimizer/scripts/path_validation.py:3 — defined here
- `Symlink traversal` — .claude/skills/context-optimizer/scripts/path_validation.py:4 — defined here
- `get_repo_root` — .claude/skills/context-optimizer/scripts/path_validation.py:18 — defined here
- `_get_worktree_root` — .claude/skills/context-optimizer/scripts/path_validation.py:43 — defined here
- `validate_path_within_repo` — .claude/skills/context-optimizer/scripts/path_validation.py:61 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/path_validation.py`, language: Python, lines: 105
- documented invocation: "Shared CWE-22 repo-root-anchored path validation" — .claude/skills/context-optimizer/SKILL.md:47
- executed: yes
- actual command run: `python3 -c "import sys; sys.path.insert(0, 'sources/rjm/.claude/skills/context-optimizer/scripts'); import path_validation; from pathlib import Path; print('Repo root:', path_validation.get_repo_root())"`
  abridged stdout: `Repo root: /Users/peterkloss/Dev/ACMElabs/brain-v2`
  actual exit code: 0
- documented exit codes: "N/A (library module)" — .claude/skills/context-optimizer/SKILL.md:47 vs actual exit paths: Library module with no `sys.exit` calls or CLI entry point. Raises `PermissionError` on path traversal (.claude/skills/context-optimizer/scripts/path_validation.py:101) or `RuntimeError` on git failure (.claude/skills/context-optimizer/scripts/path_validation.py:40)
- for validators/gates: Can block path traversal by raising `PermissionError` when paths resolve outside the repo root.
- does the output match what the documentation claims: yes, acts as shared library module providing path containment checks.

## Defects — required
- `doc-drift` · .claude/skills/context-optimizer/scripts/path_validation.py:44 · Docstring of `_get_worktree_root` claims to determine worktree root "via git show-toplevel", but `git show-toplevel` is not a valid git command and the implementation executes `git rev-parse --show-toplevel`.

## Observations
- Anchors relative paths to `resolved_root` before resolving (`(resolved_root / path).resolve()`), preventing relative traversal strings like `../../etc/passwd` from escaping containment.
- Distinguishes repository root and worktree root to support git worktrees.

## Context cost
3,487 bytes. Approximately 870 tokens.
