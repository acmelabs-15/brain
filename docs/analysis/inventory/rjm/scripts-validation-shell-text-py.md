---
package: rjm
path: scripts/validation/shell_text.py
type: script
bytes: 3593
unit: inv-rjm-304
in_scope_via: scripts/validation/check_skill_portability.py
aliases: []
memo_inputs:
  - {path: scripts/validation/shell_text.py, sha256: 736473c178ce9bf083f65138b011174798bac8d01a76494457b9c66eaa9b5324}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/shell_text.py

## Purpose — required, verbatim
> "Shell text helpers shared by the validation gates." — scripts/validation/shell_text.py:2

## Design intent — required
Provides authoritative parsing utilities for shell commands and script lines across validation gates, specifically removing comments and splitting multi-command statements on shell control operators (`;`, `&&`, `||`, `|`, `&`). Naive regexes or line scans frequently fail when encountering quotes, escaping, nested delimiters, or trailing argument punctuation (e.g. `flock "$LOCK"; git push`). By handling single quotes, double quotes, backslash escaping, backticks, and column offsets, `shell_text.py` ensures all security and policy gates parse compound shell commands consistently without quote-related bypasses or false positives.

## Phase — required
none

## Inputs — required
- Shell text strings passed as arguments to `strip_hash_comments` — scripts/validation/shell_text.py:18
- Single-line shell commands passed as arguments to `split_statements` — scripts/validation/shell_text.py:54

## Outputs — required
- Comment-stripped shell text preserving line count — scripts/validation/shell_text.py:18, 51
- Ordered list of `(column, text)` tuples representing discrete shell statements — scripts/validation/shell_text.py:54, 92

## Invokes — required
none

## Invoked by — required
- script shell_text — scripts/validation/push_lock_resolver.py:24
- script shell_text — scripts/validation/check_skill_portability.py:71

## Concepts named — required, verbatim
- `_SEPARATORS` — scripts/validation/shell_text.py:15 — defined here
- `strip_hash_comments` — scripts/validation/shell_text.py:18 — defined here
- `split_statements` — scripts/validation/shell_text.py:54 — defined here

## Structure
- Shebang and module docstring — scripts/validation/shell_text.py:1-8
- Imports and shell separator set — scripts/validation/shell_text.py:10-15
- Hash comment stripper function — scripts/validation/shell_text.py:18-51
- Statement splitter with column offset tracking — scripts/validation/shell_text.py:54-93

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/shell_text.py`, language: Python 3, lines: 93
- documented invocation:
  - "One authoritative place that knows where a shell comment starts and where one" — scripts/validation/shell_text.py:4
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/shell_text.py`
- abridged stdout: (empty; silent exit)
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (shared library module; functions return strings and tuples)
  - Actual exit paths: no `sys.exit` calls; exits 0 upon module loading
- for validators/gates:
  - Can exit non-zero: no (library module)
  - Verified on repository default branch: executes cleanly with exit code 0
- does output match what the documentation claims: yes, acts as shared helper library without standalone CLI execution side effects

## Defects — required
none

## Observations
- Intentionally omits `>` from `_SEPARATORS` because shell redirections belong to their preceding statement rather than terminating it (lines 14-15).
- Line count is strictly preserved by `strip_hash_comments`, ensuring downstream syntax or policy errors reported by callers maintain accurate 1-indexed line numbers (lines 25-26).

## Context cost
3593 bytes, 93 lines, ~898 tokens.
