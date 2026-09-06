---
package: rjm
path: scripts/validation/check_orchestrator_citations.py
type: script
bytes: 5254
unit: inv-rjm-280
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_orchestrator_citations.py, sha256: 843ef1704577409eb3438b7265d58b7ef7acfeb14e17e73be2d2f17cd4c740ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_orchestrator_citations.py

## Purpose — required, verbatim
> "Verify path-like citations in orchestrator prose resolve to real files." — scripts/validation/check_orchestrator_citations.py:2

## Design intent — required
Validates that backtick-wrapped, repo-relative path citations in orchestrator command files (such as `.claude/commands/pr-quality/all.md`) point to actual files that exist on disk. When orchestrator documentation cites helper modules or subcomponents that handle business logic (like verdict merging or status mappings), refactorings can leave behind dead pointers if citations are not verified. Issue #1966 documented a prior incident where a removed reference (`AIReviewCommon.psm1`) lingered in orchestrator prose because no validation gate checked command files. By scanning target orchestrator files, extracting path-like patterns with optional symbol suffixes, and asserting that every cited file exists, this gate prevents dead reference documentation rot.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `parse_args()`:
  - `--repo-root` (default: grandparent directory `Path(__file__).resolve().parent.parent.parent` — scripts/validation/check_orchestrator_citations.py:135)
- Orchestrator command files in `_TARGET_FILES`:
  - `.claude/commands/pr-quality/all.md` (scripts/validation/check_orchestrator_citations.py:37)
- File system checks:
  - Resolves extracted paths against `repo_root` to verify file existence (scripts/validation/check_orchestrator_citations.py:80-82)

## Outputs — required
- Standard output formatted report from `format_report()`:
  - `[PASS] All orchestrator path citations resolve.` (scripts/validation/check_orchestrator_citations.py:100)
  - `[FAIL] <count> broken path citation(s) in orchestrator prose.` (scripts/validation/check_orchestrator_citations.py:103)
  - `  - <source> cites <path> (not found)` (scripts/validation/check_orchestrator_citations.py:110)
- Standard error diagnostics:
  - `[FAIL] repo root not found: <repo_root>` (scripts/validation/check_orchestrator_citations.py:138)

## Invokes — required
none

## Invoked by — required
- script check_orchestrator_citations — scripts/validation/checks_spec.py:346

## Concepts named — required, verbatim
- `check_canonical_citations.py` — scripts/validation/check_orchestrator_citations.py:19 — used here
- `ADR-035` — scripts/validation/check_orchestrator_citations.py:22 — used here
- `_TARGET_FILES` — scripts/validation/check_orchestrator_citations.py:37 — defined here
- `_PATH_CITATION` — scripts/validation/check_orchestrator_citations.py:44 — defined here
- `BrokenCitation` — scripts/validation/check_orchestrator_citations.py:51 — defined here

## Structure
- Verify path-like citations in orchestrator prose resolve to real files. (module docstring, lines 2-27)
- Target file list and path citation regex (lines 28-48)
- Data class BrokenCitation (lines 50-56)
- Citation extraction and file verification functions (lines 58-95)
- Human-readable report formatting (lines 97-113)
- CLI argument parsing and main entry point (lines 115-148)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_orchestrator_citations.py`, language: Python, lines: 148
- documented invocation: none (no explicit CLI example in docstring; main entry point at line 129)
- **executed:** yes
- actual command run: `python3 scripts/validation/check_orchestrator_citations.py`
- abridged stdout:
```
[PASS] All orchestrator path citations resolve.
```
- **actual exit code:** 0
- documented exit codes:
  - "0 - Success (all citations resolve, or no target files present)" — scripts/validation/check_orchestrator_citations.py:23
  - "1 - One or more cited paths do not exist (logic/validation error)" — scripts/validation/check_orchestrator_citations.py:24
  - "2 - Configuration error (repo root not found)" — scripts/validation/check_orchestrator_citations.py:25
  - actual exit paths:
    - 0: `return 0` when `broken` is empty (line 143)
    - 1: `return 1` when `broken` contains entries (line 143)
    - 2: `return 2` when `not repo_root.is_dir()` (line 140)
- for validators/gates: can it exit non-zero? Yes, exits 1 when broken citations exist, 2 when repo root is invalid. Does it fail on the source repo's own default branch? No, passes with exit code 0.
- does the output match what the documentation claims? Yes, outputs `[PASS] All orchestrator path citations resolve.` and exits 0.

## Defects — required
none

## Observations
Separates concerns between plain path-existence validation and mirror-claim heuristics (which are handled by `check_canonical_citations.py`). A missing target orchestrator file is treated as benign to support downstream installations that omit orchestrator commands.

## Context cost
`check_orchestrator_citations.py` is 5,254 bytes. Isolated script (uses only standard library modules). Total context cost: ~5,254 bytes (~1,314 tokens).
