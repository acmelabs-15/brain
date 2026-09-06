---
package: rjm
path: scripts/validation/check_tmp_worktrees.py
type: script
bytes: 13505
unit: inv-rjm-289
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_tmp_worktrees.py

## Purpose — required, verbatim
> "Report git worktrees living under the system temp directory, and a low temp floor." — scripts/validation/check_tmp_worktrees.py:2

## Design intent — required
Safeguards repositories against lost unpushed work and machine disk-exhaustion crashes by detecting git worktrees residing in temporary directories (`/tmp`) and alerting when available free disk space falls below a safe minimum floor (default: 2.0 GiB). Placing worktrees under `/tmp` violates `.claude/rules/universal.md` MUST NOT 6 because temp directories can be purged mid-session, deleting unpushed commits that exist only in local worktree object stores, or become filled by test artifacts (`ENOSPC`), failing agent transcripts and background pushes. The script audits both registered worktrees (via `git worktree list --porcelain`) and orphaned worktrees (unregistered directories with `.git` files beginning with `gitdir:`).

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `parse_args()`:
  - `--temp-root` (default: `DEFAULT_TEMP_ROOT` which resolves to `Path("/tmp")` — scripts/validation/check_tmp_worktrees.py:57)
  - `--min-free-gib` (default: `DEFAULT_MIN_FREE_GIB` which is `2.0` GiB — scripts/validation/check_tmp_worktrees.py:56)
  - `--json` (flag: output machine-readable JSON structure — scripts/validation/check_tmp_worktrees.py:339)
- Git command execution:
  - Subprocess call `git worktree list --porcelain` with 10s timeout to inspect registered worktree entries (scripts/validation/check_tmp_worktrees.py:149)
- Host filesystem state:
  - Iteration of immediate children of `temp_root` via `iterdir()` (scripts/validation/check_tmp_worktrees.py:200)
  - Marker file inspection: checks candidate `.git` file for `gitdir:` prefix line (scripts/validation/check_tmp_worktrees.py:121, 124)
  - Filesystem disk usage probe via `shutil.disk_usage(temp_root).free` (scripts/validation/check_tmp_worktrees.py:227)

## Outputs — required
- Human-readable stdout reports via `format_report(report)`:
  - Absent temp root message: `tmp-worktrees: {report.temp_root} is not a directory; nothing examined` (scripts/validation/check_tmp_worktrees.py:259)
  - Worktree detection warning: `tmp-worktrees: {len(report.worktrees)} worktree(s) under {report.temp_root}, against {RULE_CITATION}:` (scripts/validation/check_tmp_worktrees.py:268)
  - Worktree remediation instruction: `  Move each one with: git worktree move <path> <external path>` (scripts/validation/check_tmp_worktrees.py:271)
  - Low disk space warning: `tmp-worktrees: {report.temp_root} has {report.free_bytes / _BYTES_PER_GIB:.2f} GiB free, below the {report.min_free_bytes / _BYTES_PER_GIB:.2f} GiB floor...` (scripts/validation/check_tmp_worktrees.py:275)
  - Git failure notice: `tmp-worktrees: git worktree list failed; the registered half of this report is incomplete (the filesystem half still ran).` (scripts/validation/check_tmp_worktrees.py:284)
  - Unreadable entries warning: `tmp-worktrees: {report.unreadable_entries} entry/entries under {report.temp_root} were unreadable and were not examined.` (scripts/validation/check_tmp_worktrees.py:289)
  - Scan summary line: `tmp-worktrees: {len(report.worktrees)} worktree(s) in {report.examined} examined entries under {report.temp_root}; {free_note}` (scripts/validation/check_tmp_worktrees.py:299)
- Structured JSON output:
  - Serialized `TempReport` dataclass when `--json` is supplied (scripts/validation/check_tmp_worktrees.py:363)
- Stderr error messages:
  - Negative floor value: `error: --min-free-gib must not be negative` (scripts/validation/check_tmp_worktrees.py:350)
  - Invalid directory: `error: --temp-root is not a directory: {args.temp_root}` (scripts/validation/check_tmp_worktrees.py:356)
- Process exit codes (ADR-035):
  - `0`: No findings (scripts/validation/check_tmp_worktrees.py:37, 366)
  - `1`: At least one worktree under temp root, or free space below the floor (scripts/validation/check_tmp_worktrees.py:38, 366)
  - `2`: Configuration error (unusable argument or nonexistent explicit temp root — scripts/validation/check_tmp_worktrees.py:39, 351, 357)

## Invokes — required
none

## Invoked by — required
- script check_tmp_worktrees — scripts/validation/pre_pr_sequence.py:56

## Concepts named — required, verbatim
- `.claude/rules/universal.md` — scripts/validation/check_tmp_worktrees.py:4 — used here
- `.serena/memories/git/git-worktree-tmp-not-durable.md` — scripts/validation/check_tmp_worktrees.py:9 — used here
- `ADR-035` — scripts/validation/check_tmp_worktrees.py:36 — used here
- `DEFAULT_MIN_FREE_GIB` — scripts/validation/check_tmp_worktrees.py:56 — defined here
- `DEFAULT_TEMP_ROOT` — scripts/validation/check_tmp_worktrees.py:57 — defined here
- `_BYTES_PER_GIB` — scripts/validation/check_tmp_worktrees.py:58 — defined here
- `_GIT_TIMEOUT_SECONDS` — scripts/validation/check_tmp_worktrees.py:59 — defined here
- `RULE_CITATION` — scripts/validation/check_tmp_worktrees.py:61 — defined here
- `TempWorktree` — scripts/validation/check_tmp_worktrees.py:65 — defined here
- `TempReport` — scripts/validation/check_tmp_worktrees.py:73 — defined here
- `parse_worktree_list` — scripts/validation/check_tmp_worktrees.py:96 — defined here
- `is_worktree_dir` — scripts/validation/check_tmp_worktrees.py:109 — defined here
- `find_registered_temp_worktrees` — scripts/validation/check_tmp_worktrees.py:127 — defined here
- `_list_registered` — scripts/validation/check_tmp_worktrees.py:140 — defined here
- `_is_directory` — scripts/validation/check_tmp_worktrees.py:164 — defined here
- `scan_temp_root` — scripts/validation/check_tmp_worktrees.py:177 — defined here
- `build_report` — scripts/validation/check_tmp_worktrees.py:233 — defined here
- `format_report` — scripts/validation/check_tmp_worktrees.py:255 — defined here
- `validate_tmp_worktrees` — scripts/validation/check_tmp_worktrees.py:305 — defined here
- `parse_args` — scripts/validation/check_tmp_worktrees.py:321 — defined here
- `main` — scripts/validation/check_tmp_worktrees.py:346 — defined here

## Structure
- "class TempWorktree:" — scripts/validation/check_tmp_worktrees.py:65
- "class TempReport:" — scripts/validation/check_tmp_worktrees.py:73
- "def parse_worktree_list(porcelain: str) -> list[str]:" — scripts/validation/check_tmp_worktrees.py:96
- "def is_worktree_dir(candidate: Path) -> bool:" — scripts/validation/check_tmp_worktrees.py:109
- "def find_registered_temp_worktrees(paths: list[str], temp_root: Path) -> list[str]:" — scripts/validation/check_tmp_worktrees.py:127
- "def _list_registered(repo_root: Path) -> tuple[list[str], bool]:" — scripts/validation/check_tmp_worktrees.py:140
- "def _is_directory(path: Path) -> bool | None:" — scripts/validation/check_tmp_worktrees.py:164
- "def scan_temp_root(" — scripts/validation/check_tmp_worktrees.py:177
- "def build_report(" — scripts/validation/check_tmp_worktrees.py:233
- "def format_report(report: TempReport) -> str:" — scripts/validation/check_tmp_worktrees.py:255
- "def validate_tmp_worktrees(repo_root: Path) -> bool:" — scripts/validation/check_tmp_worktrees.py:305
- "def parse_args(argv: list[str] | None = None) -> argparse.Namespace:" — scripts/validation/check_tmp_worktrees.py:321
- "def main(argv: list[str] | None = None) -> int:" — scripts/validation/check_tmp_worktrees.py:346
- "raise SystemExit(main())" — scripts/validation/check_tmp_worktrees.py:370

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_tmp_worktrees.py`, language: Python 3, lines: 371
- documented invocation:
  - "python3" — scripts/validation/check_tmp_worktrees.py:1
  - "--temp-root" — scripts/validation/check_tmp_worktrees.py:327
  - "--min-free-gib" — scripts/validation/check_tmp_worktrees.py:333
  - "--json" — scripts/validation/check_tmp_worktrees.py:339
- **executed:** yes
- actual command run: `python3 scripts/validation/check_tmp_worktrees.py` (in `sources/rjm`), abridged stdout: `tmp-worktrees: 0 worktree(s) in 14 examined entries under /private/tmp; 814.54 GiB free`, **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - no findings (prints the examined count)" — scripts/validation/check_tmp_worktrees.py:37
    - "1 - at least one worktree under the temp root, or free space below the floor" — scripts/validation/check_tmp_worktrees.py:38
    - "2 - configuration error (unusable argument, or an explicitly named temp root that does not exist)" — scripts/validation/check_tmp_worktrees.py:39-40
  - actual exit paths:
    - exit code 0: `return 1 if report.has_findings else 0` at line 366 when `report.has_findings` is False
    - exit code 1: `return 1 if report.has_findings else 0` at line 366 when `report.has_findings` is True
    - exit code 2: `return 2` at line 351 (negative `min_free_gib`); `return 2` at line 357 (explicit `temp_root` is not a directory)
    - process exit via `raise SystemExit(main())` at line 370
- for validators/gates: can it exit non-zero? yes (CLI returns 1 when findings exist and 2 on invalid configuration). Does it fail on the source repo's own default branch? no (exits 0 with 0 findings).
- does the output match what the documentation claims? yes (outputs examined count and free disk space, exiting 0).

## Defects — required
none

## Observations
- Dual-source detection strategy: scans both git metadata (`git worktree list --porcelain`) and the physical filesystem (`is_worktree_dir`) to uncover orphaned worktrees whose admin metadata was already purged from git.
- Advisory gate pattern: in `pre_pr_sequence.py`, the validator `validate_tmp_worktrees` outputs diagnostic findings but intentionally returns `True` (non-blocking) so that environmental leftovers on a developer or agent machine do not block commits authored by different sessions.
- Tri-state directory probe: `_is_directory` returns `True`, `False`, or `None`, preventing inaccessible directories from being erroneously treated as nonexistent.

## Context cost
13505 bytes, approximately 3376 tokens.
