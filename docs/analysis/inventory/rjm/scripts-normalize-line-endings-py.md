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
verified: 2026-09-06 quote-check+coverage
---

# scripts/normalize_line_endings.py

## Purpose — required, verbatim
> "Normalize line endings in the repository to LF." — scripts/normalize_line_endings.py:2

## Design intent — required
Enforces repository-wide LF line endings by executing `git add --renormalize .` based on rules defined in `.gitattributes`. Gathers before-and-after line-ending statistics across both Git index and working tree, saves audit files to `.agents/analysis/line-endings-{before,after}.txt`, and supports a `--dry-run` inspection mode to prevent unintended repository mutations.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: `"--dry-run"` — scripts/normalize_line_endings.py:71
- Line endings configuration: `.gitattributes` — scripts/normalize_line_endings.py:4
- Git line-ending query: `"ls-files", "--eol"` — scripts/normalize_line_endings.py:39

## Outputs — required
- Normalized Git index: `"add", "--renormalize", "."` — scripts/normalize_line_endings.py:99
- Audit output files: `Path(".agents/analysis/line-endings-before.txt")` — scripts/normalize_line_endings.py:85 and `Path(".agents/analysis/line-endings-after.txt")` — scripts/normalize_line_endings.py:107
- Console statistics and progress: "Normalization complete!" — scripts/normalize_line_endings.py:110
- Process exit codes: "0 - Success: Line endings normalized (or already normalized)" — scripts/normalize_line_endings.py:8, "1 - Error: Not a git repository or normalization failed" — scripts/normalize_line_endings.py:9

## Invokes — required
- command git — scripts/normalize_line_endings.py:24

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `LF` — scripts/normalize_line_endings.py:2 — used here
- `renormalizing line endings` — scripts/normalize_line_endings.py:4 — defined here | used here
- `.gitattributes` — scripts/normalize_line_endings.py:4 — used here
- `ADR-035` — scripts/normalize_line_endings.py:11 — used here
- `Exit Code Standardization` — scripts/normalize_line_endings.py:11 — used here
- `run_git` — scripts/normalize_line_endings.py:22 — defined here
- `is_git_repository` — scripts/normalize_line_endings.py:32 — defined here
- `get_line_ending_stats` — scripts/normalize_line_endings.py:37 — defined here
- `save_line_ending_audit` — scripts/normalize_line_endings.py:61 — defined here
- `dry-run` — scripts/normalize_line_endings.py:71 — defined here | used here

## Structure
- Module docstring and exit code definitions — scripts/normalize_line_endings.py:2
- Git execution helper run_git — scripts/normalize_line_endings.py:22
- Git repository check is_git_repository — scripts/normalize_line_endings.py:32
- Line ending statistics parser get_line_ending_stats — scripts/normalize_line_endings.py:37
- Audit logging helper save_line_ending_audit — scripts/normalize_line_endings.py:61
- Normalization workflow and main entry point — scripts/normalize_line_endings.py:68

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/normalize_line_endings.py`
- **language:** Python
- **lines:** 123
- **documented invocation:**
  `uv run python scripts/normalize_line_endings.py --help` — scripts/README.md:227
  `#!/usr/bin/env python3` — scripts/normalize_line_endings.py:1
- **executed:** yes
- **actual command:** `python3 scripts/normalize_line_endings.py --dry-run`
- **actual stdout:**
```text
Line Ending Normalization Script
=================================

[BEFORE] Line Ending Statistics:
  Index (staged):      9618 LF, 2 CRLF
  Working directory:   9618 LF, 2 CRLF
Saved line ending audit to: .agents/analysis/line-endings-before.txt

Normalizing line endings...
  [DRY-RUN] Would normalize 2 files from CRLF to LF
```
- **actual exit code:** 0
- **documented exit codes vs actual:**
  - "0  - Success: Line endings normalized (or already normalized)" — scripts/normalize_line_endings.py:8 vs `return 0` — scripts/normalize_line_endings.py:90, 96, 118
  - "1  - Error: Not a git repository or normalization failed" — scripts/normalize_line_endings.py:9 vs `return 1` — scripts/normalize_line_endings.py:79, 102
  - Process exit via `sys.exit(main())` — scripts/normalize_line_endings.py:122
- **gate check:** Can exit non-zero (exits 1 if current directory is not a git repository or if git normalization fails). On default branch with `--dry-run`, exits 0 reporting CRLF statistics.
- **output match:** Output matches the documented line-ending normalization output.

## Defects — required
- orphan — scripts/normalize_line_endings.py:1 — No in-scope file invokes this maintenance utility; run manually following .gitattributes updates.

## Observations
Addresses cross-platform line ending issues by automating Git line ending audits (`line-endings-before.txt` and `line-endings-after.txt`) and running `git add --renormalize .`.

## Context cost
3927 bytes, 123 lines, standalone utility without internal library dependencies. ~880 tokens.
