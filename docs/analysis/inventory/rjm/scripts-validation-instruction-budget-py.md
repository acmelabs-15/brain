---
package: rjm
path: scripts/validation/instruction_budget.py
type: script
bytes: 12827
unit: inv-rjm-297
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/instruction_budget.py, sha256: c57feaeaba07cea56c524e40fcef7945cc51684df1a4f69733a85e65ae241183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/instruction_budget.py

## Purpose — required, verbatim
> "Measure and gate the always-on instruction budget per file language." — scripts/validation/instruction_budget.py:3

## Design intent — required
Measures and gates the cumulative byte size and estimated token count of instruction files (`.github/instructions/*.instructions.md`) that are always loaded into the agent context when editing files of given programming language extensions (`.py`, `.md`, `.ps1`, `.cs`). It acts as a non-regression ratchet to prevent silent context corpus growth (addressing issue #3419 and IFScale instruction omission degradation), enforces ceilings and reserve buffers against concurrent merges, and exits non-zero in CI mode when budgets or reserve margins are breached.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments via `argparse`:
  - `--path`: path to the repository root (default: `.` or env `REPO_PATH`) (scripts/validation/instruction_budget.py:248-251)
  - `--ci`: CI mode flag exiting 1 on budget breach (default env `CI`) (scripts/validation/instruction_budget.py:253-257)
  - `--format`: output format `table` or `json` (default: `table`) (scripts/validation/instruction_budget.py:259-264)
  - `--ceiling`: repeatable `EXT:BYTES` ceiling overrides (scripts/validation/instruction_budget.py:266-272)
  - `--reserve`: reserve headroom bytes (default: `DEFAULT_RESERVE_BYTES` or env `INSTRUCTION_BUDGET_RESERVE`) (scripts/validation/instruction_budget.py:274-286)
- Instruction markdown files under `.github/instructions/` matching `*.instructions.md` (scripts/validation/instruction_budget.py:51-52, 99-103)

## Outputs — required
- Formatted text table or JSON payload emitted to stdout detailing extension, file count, bytes, ceiling, headroom, tokens, usage percentage, and PASS/WARN/FAIL status (scripts/validation/instruction_budget.py:172-209, 318-350)
- Process exit codes:
  - 0 on success (or non-CI mode)
  - 1 on logic error (budget exceeded or under reserve in CI mode)
  - 2 on configuration error (invalid directory path, missing instructions directory, or unsupported applyTo frontmatter) (scripts/validation/instruction_budget.py:28-32, 298, 304, 314, 353, 354)

## Invokes — required
- script instruction_budget_constants — scripts/validation/instruction_budget.py:48
- script instruction_budget_globs — scripts/validation/instruction_budget.py:54
- script instruction_budget_types — scripts/validation/instruction_budget.py:61
- script token_budget — scripts/validation/instruction_budget.py:62

## Invoked by — required
- doc SKILL.md — src/copilot-cli/skills/context-optimizer/SKILL.md:114
- doc model-context-doctrine.md — src/copilot-cli/skills/context-optimizer/references/model-context-doctrine.md:188
- doc rule-audit-procedure.md — src/copilot-cli/skills/context-optimizer/references/rule-audit-procedure.md:56
- doc SKILL.md — src/copilot-cli/skills/skillforge/SKILL.md:248
- doc README.md — scripts/eval/README.md:77

## Concepts named — required, verbatim
- `language-baseline always-on budget` — scripts/validation/instruction_budget.py:12 — defined here
- `NON-REGRESSION RATCHET` — scripts/validation/instruction_budget.py:18 — defined here
- `ADR-035` — scripts/validation/instruction_budget.py:28 — used here
- `BudgetVerdict` — scripts/validation/instruction_budget.py:68 — defined here
- `build_parser` — scripts/validation/instruction_budget.py:74 — defined here
- `evaluate` — scripts/validation/instruction_budget.py:75 — defined here
- `format_json` — scripts/validation/instruction_budget.py:76 — defined here
- `format_table` — scripts/validation/instruction_budget.py:77 — defined here
- `load_instruction_files` — scripts/validation/instruction_budget.py:79 — defined here
- `main` — scripts/validation/instruction_budget.py:80 — defined here
- `measure_extension` — scripts/validation/instruction_budget.py:81 — defined here
- `parse_ceiling_override` — scripts/validation/instruction_budget.py:83 — defined here
- `parse_reserve` — scripts/validation/instruction_budget.py:84 — defined here

## Structure
- Module docstring detailing context bloat background, ADR-035 exit codes, and ratchet policy (scripts/validation/instruction_budget.py:1-32)
- Imports, path resolution, and sentinel check (scripts/validation/instruction_budget.py:34-63)
- `__all__` symbols declaration (scripts/validation/instruction_budget.py:64-85)
- `_resolve_safe`: CWE-22 directory traversal protection (scripts/validation/instruction_budget.py:88-94)
- `load_instruction_files`: scans `.github/instructions/*.instructions.md` (scripts/validation/instruction_budget.py:97-113)
- `measure_extension`: filters files by universal scope and sums bytes (scripts/validation/instruction_budget.py:116-131)
- `evaluate`: evaluates all extensions against ceilings (scripts/validation/instruction_budget.py:134-144)
- `BudgetVerdict` protocol and `_status_of` classifier (scripts/validation/instruction_budget.py:147-170)
- `format_table` and `format_json` report formatters (scripts/validation/instruction_budget.py:172-209)
- `parse_ceiling_override` and `parse_reserve` CLI argument helpers (scripts/validation/instruction_budget.py:211-240)
- `build_parser`: CLI argument parser construction (scripts/validation/instruction_budget.py:242-287)
- `main`: execution entrypoint, error handling, status reporting, and exit code resolution (scripts/validation/instruction_budget.py:290-355)
- Script entrypoint execution (scripts/validation/instruction_budget.py:357-358)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/instruction_budget.py`
- **language:** Python (python3)
- **lines:** 359
- **documented invocation:**
  - `uv run --frozen python scripts/validation/instruction_budget.py --format table` — src/copilot-cli/skills/context-optimizer/references/model-context-doctrine.md:188
  - `uv run python scripts/validation/instruction_budget.py --format json` — src/copilot-cli/skills/context-optimizer/references/rule-audit-procedure.md:56
- **executed:** yes
- **actual command run:** `uv run --frozen python scripts/validation/instruction_budget.py --path .`
- **abridged stdout:**
```
Always-On Instruction Budget (language baseline)

Ext     Files     Bytes   Ceiling  Headroom   Tokens~    Usage  Status
----------------------------------------------------------------------
.cs        11     97018     99000      1982     25660    98.0%    PASS
.md         7     70469     83000     12531     18541    84.9%    PASS
.ps1       11     96850     99000      2150     25693    97.8%    PASS
.py        11     98396     99000       604     26107    99.4%    PASS

PASS: All languages within the always-on instruction ceiling.
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - Success (all extensions within budget, or non-CI mode)" — scripts/validation/instruction_budget.py:29
    - "1 - Logic error (budget exceeded, CI mode only)" — scripts/validation/instruction_budget.py:30
    - "2 - Configuration error (invalid path or missing instructions directory)" — scripts/validation/instruction_budget.py:31
  - Actual code paths:
    - `return 0` — scripts/validation/instruction_budget.py:354
    - `return 1` — scripts/validation/instruction_budget.py:353
    - `return 2` — scripts/validation/instruction_budget.py:298
    - `return 2` — scripts/validation/instruction_budget.py:304
    - `return 2` — scripts/validation/instruction_budget.py:314
    - `raise SystemExit(main())` — scripts/validation/instruction_budget.py:358
  - Result: Documented exit codes match actual code exit paths exactly.
- **for validators/gates:**
  - Can exit non-zero: Yes, exits 1 when budget is exceeded or headroom is within reserve in CI mode (`--ci`), exits 2 on invalid path, missing directory, or unsupported `applyTo`.
  - Passes on repository default branch: all 4 configured extensions are within ceiling.
- **does the output match what the documentation claims:** yes, outputs formatted table and reports status as claimed.

## Defects — required
none

## Observations
- Employs `_resolve_safe` (scripts/validation/instruction_budget.py:89) for CWE-22 directory traversal protection.
- Evaluates four language extensions by default: `.cs`, `.md`, `.ps1`, `.py`.

## Context cost
12827 bytes, 359 lines, ~3000 tokens (plus imported dependencies ~6000 tokens).
