---
package: rjm
path: scripts/normalize_line_endings.py
type: script
bytes: 3927
unit: inv-rjm-254
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/normalize_line_endings.py

## Purpose — required, verbatim
> "Normalize line endings in the repository to LF." — scripts/normalize_line_endings.py:2

## Design intent — required
Enforces LF line endings across the repository by applying `.gitattributes` normalization rules via `git add --renormalize .`. It generates line ending audit logs before and after renormalization, tallies LF and CRLF counts in both git index and working tree, and provides a `--dry-run` mode to preview affected files without modifying the working tree.

## Phase — required
cross-phase

## Inputs — required
- CLI flag `--dry-run`: "Show what would change without making changes" — scripts/normalize_line_endings.py:73
- Git repository tracked files and `.gitattributes` configuration (scripts/normalize_line_endings.py:4, 33, 99)

## Outputs — required
- Renormalized line endings staged in git index via `git add --renormalize .` (scripts/normalize_line_endings.py:99)
- Audit log files: `.agents/analysis/line-endings-before.txt` and `.agents/analysis/line-endings-after.txt` (scripts/normalize_line_endings.py:85, 107)
- Line ending statistics and progress messages printed to stdout (scripts/normalize_line_endings.py:50-51, 88, 110)
- Exit codes: 0 on success (including clean check and dry-run), 1 on error (not a git repo or git failure) (scripts/normalize_line_endings.py:8-9)

## Invokes — required
none

## Invoked by — required
- scripts/README.md:227 — scripts/README.md:227
- tests/test_normalize_line_endings.py:1 — tests/test_normalize_line_endings.py:1

## Concepts named — required, verbatim
- `ADR-035` — scripts/normalize_line_endings.py:11 — used here
- `run_git` — scripts/normalize_line_endings.py:22 — defined here
- `is_git_repository` — scripts/normalize_line_endings.py:32 — defined here
- `get_line_ending_stats` — scripts/normalize_line_endings.py:37 — defined here
- `save_line_ending_audit` — scripts/normalize_line_endings.py:61 — defined here
- `main` — scripts/normalize_line_endings.py:68 — defined here

## Structure
- Module docstring and exit codes — scripts/normalize_line_endings.py:1
- Imports — scripts/normalize_line_endings.py:14
- Git subprocess runner helper — scripts/normalize_line_endings.py:22
- Repository existence check — scripts/normalize_line_endings.py:32
- Line ending statistics parser — scripts/normalize_line_endings.py:37
- Line ending audit file saver — scripts/normalize_line_endings.py:61
- Main execution and normalization workflow — scripts/normalize_line_endings.py:68

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/normalize_line_endings.py`
- **language:** Python (python3)
- **lines:** 123
- **documented invocation:**
  - `python3 scripts/normalize_line_endings.py --help`
  - `python3 scripts/normalize_line_endings.py --dry-run`
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/normalize_line_endings.py --help`
- **abridged stdout:**
```
usage: normalize_line_endings.py [-h] [--dry-run]

Normalize line endings to LF

options:
  -h, --help  show this help message and exit
  --dry-run   Show what would change without making changes
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: Line endings normalized (or already normalized)" — scripts/normalize_line_endings.py:8
    - "1  - Error: Not a git repository or normalization failed" — scripts/normalize_line_endings.py:9
  - Actual exit paths:
    - `return 1` — scripts/normalize_line_endings.py:79
    - `return 0` — scripts/normalize_line_endings.py:90
    - `return 0` — scripts/normalize_line_endings.py:96
    - `return 1` — scripts/normalize_line_endings.py:102
    - `return 0` — scripts/normalize_line_endings.py:118
    - `sys.exit(main())` — scripts/normalize_line_endings.py:122
- **for validators/gates:**
  - Can exit non-zero: exits 1 if not inside a git repository or if `git add --renormalize` fails.
  - Verified on repository default branch: running `--dry-run` in repository executes successfully and exits 0.
- **does the output match what the documentation claims:** yes, displays help options and accurately calculates before/after statistics.

## Defects — required
none

## Observations
- Creates `.agents/analysis/line-endings-before.txt` even when `--dry-run` is passed before checking dry-run flag.

## Context cost
3927 bytes, 123 lines, ~850 tokens.
