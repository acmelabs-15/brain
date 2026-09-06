---
package: rjm
path: scripts/validation/citation_head_state.py
type: script
bytes: 6140
unit: inv-rjm-294
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/citation_head_state.py, sha256: 5fef428b3fc73e7fe6182283c6724ec4ada2cb6ca53e25a72fc05f480b005cf7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/citation_head_state.py

## Purpose — required, verbatim
> "Git reads backing the citation-freshness gate (issue #5337)." — scripts/validation/citation_head_state.py:2

## Design intent — required
Provides isolated, deterministic git inspection utilities for the citation-freshness validation gate (`check_citation_freshness.py`), separated to maintain file-size ceilings. It encapsulates all interactions with git to inspect the repository state at `HEAD`, specifically querying tracked paths via `ls-tree`, extracting added lines from unified zero-context diffs (`git diff -U0 --diff-filter=ACMRT base...HEAD`) with careful handling of git diff path unquoting, and providing a lazy per-file cache (`_HeadFileCache`) using `git show HEAD:<path>`. It enforces LF-only line splitting to match git's line model and prevent U+2028 line separator shifts. Without it, citation checking would redundantly invoke git without caching, risk misinterpreting diff output or path encodings, and breach file-size constraints in the main gate script.

## Phase — required
rjm:test

## Inputs — required
- Repository root path: `repo_root: Path` (lines 36, 42, 53, 140).
- Base git ref: `base_ref: str` (line 53).
- Git repository status queried via subprocess calls: `git ls-tree -r -z --name-only HEAD` (lines 44-46), `git diff ...` (lines 74-91), `git show HEAD:<path>` (lines 149-150).

## Outputs — required
- Set of tracked paths at HEAD: `set[str] | None` (lines 42, 49).
- Map of citing file path to added line tuples: `dict[str, list[tuple[int, str]]] | None` (lines 52-54, 96, 123).
- Head lines list from cache: `list[str]` (lines 143, 156).
- Exception: `HeadReadError` raised when `git show` fails for a tracked path (lines 126, 151).

## Invokes — required
- script checks_common — scripts/validation/citation_head_state.py:29
- script diff_line_scope — scripts/validation/citation_head_state.py:31

## Invoked by — required
- script citation_head_state — scripts/validation/check_citation_freshness.py:62

## Concepts named — required, verbatim
- `_HUNK_HEADER` — scripts/validation/citation_head_state.py:33 — defined here
- `_git` — scripts/validation/citation_head_state.py:36 — defined here
- `_head_tracked_paths` — scripts/validation/citation_head_state.py:42 — defined here
- `_added_lines_since_base` — scripts/validation/citation_head_state.py:52 — defined here
- `HeadReadError` — scripts/validation/citation_head_state.py:126 — defined here
- `_HeadFileCache` — scripts/validation/citation_head_state.py:136 — defined here
- `unquote_diff_path` — scripts/validation/citation_head_state.py:31 — used here
- `_run_subprocess` — scripts/validation/citation_head_state.py:29 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/citation_head_state.py`, language: Python, lines: 157
- documented invocation: none (helper module extracted from `check_citation_freshness.py`; has shebang line 1 `#!/usr/bin/env python3` but no CLI `__main__` entry point)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/validation/citation_head_state.py`, abridged stdout: `(empty)`, **actual exit code**: 0
- documented exit codes: none (module defines git query functions and `HeadReadError` exception; no direct `sys.exit` calls) vs. actual exit paths in code: none (no `sys.exit` calls in file)
- for validators/gates: can it exit non-zero? N/A (module library; functions return data structures or None, or raise HeadReadError). does it fail on the source repo's own default branch? no (exits 0 when executed standalone).
- does the output match what the documentation claims? yes (executes cleanly as an importable module without side effects).

## Defects — required
none

## Observations
- Configures deterministic diff flags (`core.quotePath=false`, `--no-color`, `--no-ext-diff`, `--no-textconv`, `--text`, `--find-renames`, `--default-prefix`, `-U0`, `--diff-filter=ACMRT`) to ensure contributors' personal git configuration does not alter diff output or path strings.
- Uses LF-only splitting (`stdout.split("\n")`) instead of `splitlines()` to prevent Unicode line break characters (such as U+2028) from shifting line numbers relative to git's line model.

## Context cost
File: 6,140 bytes (~1,535 tokens). Imports `checks_common.py` (19,425 bytes) and `diff_line_scope.py` (10,035 bytes). Total loaded: 35,600 bytes (~8,900 tokens).
