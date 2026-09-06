---
package: rjm
path: scripts/ci/diff_line_scope.py
type: script
bytes: 10035
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/diff_line_scope.py, sha256: 2acbbeda2f56a2d40dde6d3d9499acc048748b1547e9622623ddf65f3c05cc17}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/diff_line_scope.py

## Purpose — required, verbatim
> "Shared unified-diff line-scope parsing for the per-change lint gates." — scripts/ci/diff_line_scope.py:1

## Design intent — required
Provides unified diff line-scope parsing and C-style quoted path decoding so lint gates (such as `git_hook_policy.py` and `ruff_ratchet.py`) evaluate only post-image lines actually touched by a change. Without it, gates lint whole touched files and block contributors on pre-existing issues or fail silently on renamed files and filenames with non-ASCII or escaped characters.

## Phase — required
none

## Inputs — required
- Unified diff text (`diff_text`) — scripts/ci/diff_line_scope.py:155
- Git revision reference (`base_ref`) — scripts/ci/diff_line_scope.py:181
- Repository root path (`repo_root`) — scripts/ci/diff_line_scope.py:182
- Sequence of file paths (`paths`) — scripts/ci/diff_line_scope.py:217

## Outputs — required
- Post-image touched line sets per file path (`dict[str, set[int]]`) — scripts/ci/diff_line_scope.py:155,218
- Intersection check boolean result (`bool`) — scripts/ci/diff_line_scope.py:241

## Invokes — required
- command git — scripts/ci/diff_line_scope.py:195

## Invoked by — required
- script diff_line_scope — scripts/validation/git_hook_policy.py:45
- script diff_line_scope — scripts/validation/citation_head_state.py:31
- script diff_line_scope — scripts/ci/ruff_ratchet.py:39

## Concepts named — required, verbatim
- `DIFF_ADDED_FILE_RE` — scripts/ci/diff_line_scope.py:57 — defined here
- `DIFF_HUNK_RE` — scripts/ci/diff_line_scope.py:58 — defined here
- `normalize_path` — scripts/ci/diff_line_scope.py:61 — defined here
- `_NAMED_ESCAPES` — scripts/ci/diff_line_scope.py:73 — defined here
- `_OCTAL_DIGITS` — scripts/ci/diff_line_scope.py:84 — defined here
- `_flush` — scripts/ci/diff_line_scope.py:87 — defined here
- `unquote_diff_path` — scripts/ci/diff_line_scope.py:99 — defined here
- `file_header_path` — scripts/ci/diff_line_scope.py:140 — defined here
- `parse_changed_lines` — scripts/ci/diff_line_scope.py:155 — defined here
- `git_diff_unified_zero` — scripts/ci/diff_line_scope.py:180 — defined here
- `changed_line_map` — scripts/ci/diff_line_scope.py:214 — defined here
- `intersects_changed_lines` — scripts/ci/diff_line_scope.py:236 — defined here

## Structure
- Module docstring defining diff line scope specification and contract with issue #2993 (lines 1-42)
- Regex definitions `DIFF_ADDED_FILE_RE` and `DIFF_HUNK_RE` (lines 57-58)
- Path normalization helper `normalize_path` (lines 61-68)
- C-style string unquoting routines `_flush` and `unquote_diff_path` (lines 73-137)
- Header parser `file_header_path` (lines 140-152)
- Hunk parser `parse_changed_lines` (lines 155-177)
- Zero-context diff runner `git_diff_unified_zero` (lines 180-211)
- Query APIs `changed_line_map` and `intersects_changed_lines` (lines 214-256)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/diff_line_scope.py`
- **language:** Python 3
- **lines:** 256
- **documented invocation:** none explicit (library module imported by lint and validation scripts)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/diff_line_scope.py`
- **stdout:** `(empty)`
- **actual exit code:** 0
- **documented exit codes:** none explicit (library module)
- **actual exit paths:**
  - implicit return 0 upon module load / execution
- **for validators/gates:** Library module supporting lint gates; contains no standalone validator CLI entrypoint. Calling `intersects_changed_lines` fails closed (returns `True`) if `changed_lines` is `None` (unresolvable diff base).
- **output matches documentation:** yes, exports functions matching module documentation and test suite specifications.

## Defects — required
none

## Observations
Exhibits careful attention to git edge cases: zero-context diffs are run without pathspecs so rename detection (`--find-renames`) remains intact; octal and named escapes from `quote_c_style` in git's `quote.c` are fully decoded to UTF-8; deletion-only hunks (`+N,0`) and pure renames intentionally contribute empty sets to avoid false positives on neighboring lines.

## Context cost
10,035 bytes source (~2,500 tokens).
