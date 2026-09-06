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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/diff_line_scope.py

## Purpose — required, verbatim
> "Shared unified-diff line-scope parsing for the per-change lint gates." — scripts/ci/diff_line_scope.py:1

## Design intent — required
Defines authoritative, shared parsing of git unified diff (`--unified=0`) output to identify post-image touched lines, ensuring per-change lint gates (mypy in git hook policy and ruff in CI ratchets) do not drift, handling C-style quoted paths, deletion-only hunks, and rename detection without pathspec limitations.

## Phase — required
cross-phase

## Inputs — required
- Unified diff output text from `git diff --unified=0`
- Git repository commit graph via `"core.quotePath=false"` — scripts/ci/diff_line_scope.py:199 and `"--unified=0"` — scripts/ci/diff_line_scope.py:201

## Outputs — required
- Mapping from file path to sets of post-image modified line numbers `dict[str, set[int]]` — scripts/ci/diff_line_scope.py:155
- Boolean indicator `intersects_changed_lines` — scripts/ci/diff_line_scope.py:236

## Invokes — required
none

## Invoked by — required
- script scripts/validation/git_hook_policy.py — scripts/validation/git_hook_policy.py:3404

## Concepts named — required, verbatim
`unified-diff` — scripts/ci/diff_line_scope.py:1 — used here
`mypy gate` — scripts/ci/diff_line_scope.py:4 — used here
`DIFF_ADDED_FILE_RE` — scripts/ci/diff_line_scope.py:57 — defined here
`DIFF_HUNK_RE` — scripts/ci/diff_line_scope.py:58 — defined here
`normalize_path` — scripts/ci/diff_line_scope.py:61 — defined here
`unquote_diff_path` — scripts/ci/diff_line_scope.py:99 — defined here
`file_header_path` — scripts/ci/diff_line_scope.py:140 — defined here
`parse_changed_lines` — scripts/ci/diff_line_scope.py:155 — defined here
`git_diff_unified_zero` — scripts/ci/diff_line_scope.py:180 — defined here
`changed_line_map` — scripts/ci/diff_line_scope.py:214 — defined here
`intersects_changed_lines` — scripts/ci/diff_line_scope.py:236 — defined here

## Structure
(no markdown headings; module with helper functions and regex patterns)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/diff_line_scope.py`, language: Python 3, lines: 256
- documented invocation: `"Shared unified-diff line-scope parsing for the per-change lint gates." — scripts/ci/diff_line_scope.py:1`
- **executed:** yes
- actual command run: `python3 scripts/ci/diff_line_scope.py`, abridged stdout: ``, **actual exit code**: 0
- documented exit codes: none (imported module, no CLI entry point); actual exit paths: `scripts/ci/diff_line_scope.py:1` (module execution exits 0)
- for validators/gates: module supporting lint gates; fails closed by returning `None` (blocking on any finding) if git diff base cannot be resolved
- does the output match what the documentation claims? yes, provides exact line mapping and intersection tests

## Defects — required
none

## Observations
Exemplary implementation of diff parsing that accounts for git C-style escaping (`quote_c_style`), multi-byte UTF-8 octal escape decoding, and rename preservation by avoiding pathspecs during git diff execution.

## Context cost
10035 bytes, approximately 2508 tokens.
