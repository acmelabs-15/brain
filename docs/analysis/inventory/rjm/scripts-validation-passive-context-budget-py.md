---
package: rjm
path: scripts/validation/passive_context_budget.py
type: script
bytes: 7556
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/passive_context_budget.py

## Purpose — required, verbatim
> "Validate passive context file token budgets." — scripts/validation/passive_context_budget.py:3

## Design intent — required
Enforces token size budgets for files that are unconditionally loaded into agent context on every invocation (`AGENTS.md`, `CLAUDE.md`, `.claude/CLAUDE.md`), implementing Vercel research guidance (<8KB compressed passive context per file). By measuring token usage with heuristics and failing in CI mode when budgets are exceeded, it prevents context bloat from degrading model reasoning and instruction following across sessions.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments via `argparse`:
  - `--path`: path to the repository root (default: `.` or env `REPO_PATH`) (scripts/validation/passive_context_budget.py:174-177)
  - `--ci`: CI mode flag exiting 1 on budget breach (default: env `CI`) (scripts/validation/passive_context_budget.py:179-183)
  - `--format`: output format `table` or `json` (default: `table`) (scripts/validation/passive_context_budget.py:184-189)
  - `--budget`: repeatable `PATH:TOKENS` budget overrides (scripts/validation/passive_context_budget.py:191-198)
- Passive context markdown files: `AGENTS.md`, `CLAUDE.md`, `.claude/CLAUDE.md` (scripts/validation/passive_context_budget.py:34-38)

## Outputs — required
- Formatted text table or JSON payload emitted to stdout detailing file name, size, estimated tokens, budget, usage percentage, and PASS/FAIL/SKIP status (scripts/validation/passive_context_budget.py:114-149, 220-238)
- Process exit codes:
  - 0 on success (or non-CI mode)
  - 1 on logic error (budget exceeded in CI mode)
  - 2 on configuration error (invalid directory path) (scripts/validation/passive_context_budget.py:12-16, 209, 240, 241)

## Invokes — required
- script token_budget — scripts/validation/passive_context_budget.py:32

## Invoked by — required
- script passive_context_budget — tests/ci/test_validation_scripts_are_reachable.py:403

## Concepts named — required, verbatim
- `passive context` — scripts/validation/passive_context_budget.py:3 — used here
- `ADR-035` — scripts/validation/passive_context_budget.py:12 — used here
- `DEFAULT_BUDGETS` — scripts/validation/passive_context_budget.py:34 — defined here
- `FileResult` — scripts/validation/passive_context_budget.py:42 — defined here
- `measure_file` — scripts/validation/passive_context_budget.py:71 — defined here
- `validate_passive_context` — scripts/validation/passive_context_budget.py:102 — defined here
- `format_table` — scripts/validation/passive_context_budget.py:113 — defined here
- `format_json` — scripts/validation/passive_context_budget.py:134 — defined here
- `parse_budget_override` — scripts/validation/passive_context_budget.py:151 — defined here
- `build_parser` — scripts/validation/passive_context_budget.py:168 — defined here
- `main` — scripts/validation/passive_context_budget.py:202 — defined here

## Structure
- Module docstring detailing Vercel <8KB research and ADR-035 exit codes (scripts/validation/passive_context_budget.py:1-16)
- Imports and sentinel path resolution (scripts/validation/passive_context_budget.py:18-32)
- `DEFAULT_BUDGETS` dictionary (scripts/validation/passive_context_budget.py:34-38)
- `FileResult` dataclass definition (scripts/validation/passive_context_budget.py:41-60)
- `_resolve_safe`: CWE-22 traversal protection (scripts/validation/passive_context_budget.py:62-69)
- `measure_file`: reads file and estimates tokens (scripts/validation/passive_context_budget.py:71-100)
- `validate_passive_context`: iterates files and evaluates budgets (scripts/validation/passive_context_budget.py:102-111)
- `format_table` and `format_json` report formatters (scripts/validation/passive_context_budget.py:113-149)
- `parse_budget_override`: CLI parameter validator (scripts/validation/passive_context_budget.py:151-166)
- `build_parser`: CLI argument parser setup (scripts/validation/passive_context_budget.py:168-200)
- `main`: entrypoint and exit code orchestration (scripts/validation/passive_context_budget.py:202-242)
- Script entrypoint execution (scripts/validation/passive_context_budget.py:244-245)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/passive_context_budget.py`
- **language:** Python (python3)
- **lines:** 246
- **documented invocation:**
  - `python3 -m scripts.validation.passive_context_budget --ci` — tests/ci/test_validation_scripts_are_reachable.py:403
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/passive_context_budget.py --path .`
- **abridged stdout:**
```
Passive Context Token Budget Validation

File                               Size   Tokens   Budget    Usage   Status
----------------------------------------------------------------------------------
.claude/CLAUDE.md               0.17 KB       53     4000     1.3%     PASS
AGENTS.md                       2.88 KB      945     2000    47.2%     PASS
CLAUDE.md                       2.42 KB      728     2000    36.4%     PASS

PASS: All passive context files within budget.
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - Success (all files within budget)" — scripts/validation/passive_context_budget.py:13
    - "1 - Logic error (budget exceeded, CI mode only)" — scripts/validation/passive_context_budget.py:14
    - "2 - Configuration error (invalid path)" — scripts/validation/passive_context_budget.py:15
  - Actual code paths:
    - `return 0` — scripts/validation/passive_context_budget.py:241
    - `return 1` — scripts/validation/passive_context_budget.py:240
    - `return 2` — scripts/validation/passive_context_budget.py:210
    - `raise SystemExit(main())` — scripts/validation/passive_context_budget.py:245
  - Result: Documented exit codes match actual code exit paths exactly.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 when budget is exceeded in CI mode (`--ci`), exits 2 on invalid path.
  - Passes on repository default branch: all present passive context files are within budget.
- **does the output match what the documentation claims:** yes, outputs validation table and summary verdict.

## Defects — required
none

## Observations
- Automatically reports missing files as `SKIP` status rather than raising fatal errors, supporting varying workspace configurations.

## Context cost
7556 bytes, 246 lines, ~1800 tokens (plus imported `token_budget` module).
