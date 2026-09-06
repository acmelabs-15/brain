---
package: rjm
path: scripts/validate_workspace_budget.py
type: script
bytes: 6427
unit: inv-rjm-271
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validate_workspace_budget.py, sha256: 5d0155b8ada925ac4e13f5f662812bbe8d8d5aa79e289536d08af70250d0aecc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validate_workspace_budget.py

## Purpose — required, verbatim
> "Validate workspace file token budget per issue #1334." — scripts/validate_workspace_budget.py:2

## Design intent — required
Enforces strict size limits on workspace files (`CLAUDE.md`, `AGENTS.md`, `.claude/CLAUDE.md`, and `.github/copilot-instructions.md`) that are automatically injected into agent session contexts upon startup. Because these files are loaded into every turn of an agent interaction, unbounded growth wastes token budget and risks context window truncation. The validator establishes a dual-tier budgeting mechanism: an aggregate 6,600-byte budget across Claude-side workspace files, combined with an individual 3,000-byte per-file limit. For historically oversized entry-point files that cannot immediately comply with the 3,000-byte cap (specifically `.github/copilot-instructions.md`), the script implements a non-regression ratchet (`FILE_CEILING_BYTES`), excluding the file from the shared Claude pool while capping it at 6,351 bytes until reference content is migrated to governance documentation.

## Phase — required
none

## Inputs — required
- CLI flag `--path`: Path to target repository root (default: current directory) — scripts/validate_workspace_budget.py:139
- CLI flag `--total-budget`: Aggregate byte limit for shared pool workspace files (default: 6600) — scripts/validate_workspace_budget.py:143
- CLI flag `--per-file-budget`: Individual file byte limit (default: 3000) — scripts/validate_workspace_budget.py:149
- Target workspace files: `WORKSPACE_FILES` list containing Claude-side and Copilot-side files — scripts/validate_workspace_budget.py:35

## Outputs — required
- Standard output reporting per-file sizes, limits, statuses (`[OK]`, `[OVER]`, or `[MISSING]`), pool total, and final verdict — scripts/validate_workspace_budget.py:179-193
- Standard error reporting invalid repository root path error — scripts/validate_workspace_budget.py:158
- Exit code 0: Success: All workspace files within budget — scripts/validate_workspace_budget.py:13, 190
- Exit code 1: Error: Budget exceeded — scripts/validate_workspace_budget.py:14, 193
- Exit code 2: Config/environment error (e.g. invalid path) — scripts/validate_workspace_budget.py:15, 159

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/validate_workspace_budget.py:17 — used here
- `TOTAL_BUDGET_BYTES` — scripts/validate_workspace_budget.py:28 — defined here
- `PER_FILE_BUDGET_BYTES` — scripts/validate_workspace_budget.py:29 — defined here
- `WORKSPACE_FILES` — scripts/validate_workspace_budget.py:35 — defined here
- `FILE_CEILING_BYTES` — scripts/validate_workspace_budget.py:47 — defined here
- `FileMetric` — scripts/validate_workspace_budget.py:56 — defined here
- `BudgetResult` — scripts/validate_workspace_budget.py:65 — defined here
- `measure_workspace_files` — scripts/validate_workspace_budget.py:81 — defined here
- `validate_budget` — scripts/validate_workspace_budget.py:98 — defined here
- `main` — scripts/validate_workspace_budget.py:132 — defined here

## Structure
- Shebang and module docstring — scripts/validate_workspace_budget.py:1-18
- Imports and budget constants — scripts/validate_workspace_budget.py:20-30
- Workspace files list and per-file ceiling overrides — scripts/validate_workspace_budget.py:32-53
- Data classes FileMetric and BudgetResult — scripts/validate_workspace_budget.py:55-80
- Workspace file measurement function — scripts/validate_workspace_budget.py:81-96
- Budget validation and violation collection logic — scripts/validate_workspace_budget.py:98-130
- Main CLI parser, console reporting, and exit code handling — scripts/validate_workspace_budget.py:132-198

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validate_workspace_budget.py`, language: Python 3, lines: 198
- documented invocation:
  - "0  - Success: All workspace files within budget" — scripts/validate_workspace_budget.py:13
- executed: yes
- actual command run: `python3 scripts/validate_workspace_budget.py`
- abridged stdout:
```
  CLAUDE.md: 2,482 bytes (limit 3,000) [OK]
  AGENTS.md: 2,947 bytes (limit 3,000) [OK]
  .claude/CLAUDE.md: 170 bytes (limit 3,000) [OK]
  .github/copilot-instructions.md: 4,707 bytes (limit 6,351) [OK]
  Pool total: 5,599 / 6,600 bytes
Workspace budget validation passed.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "0  - Success: All workspace files within budget" — scripts/validate_workspace_budget.py:13
  - "1  - Error: Budget exceeded" — scripts/validate_workspace_budget.py:14
  - "2  - Config/environment error (e.g. invalid path)" — scripts/validate_workspace_budget.py:15
  - Actual exit paths:
    - line 159: `return 2` when repository root does not exist or is not a directory
    - line 190: `return 0` when `result.is_valid` is true
    - line 193: `return 1` when `result.is_valid` is false (budget exceeded)
    - line 197: `sys.exit(main())`
- for validators/gates:
  - Can exit non-zero: yes (exit code 1 on budget overflow, exit code 2 on invalid path)
  - Verified on repository default branch: passes with exit code 0
- does output match what the documentation claims: yes, validates sizes against total budget and per-file ceilings, reporting OK status and pool total

## Defects — required
- `orphan`: scripts/validate_workspace_budget.py:1 is not invoked by any in-scope lifecycle command or workflow; referenced only in out-of-scope test suites (`tests/test_validate_workspace_budget.py`, `tests/test_workspace_limits.py`).

## Observations
- Implements ADR-035 standard exit code contract: 0 for success, 1 for domain policy violation (budget exceeded), and 2 for environment/configuration errors.
- Claude-side files share a 6,600-byte aggregate limit while `.github/copilot-instructions.md` is tracked via a standalone ratchet ceiling of 6,351 bytes (measured on 2025-07-30).

## Context cost
6427 bytes, 198 lines, ~1600 tokens.
