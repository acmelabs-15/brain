---
package: rjm
path: .claude/skills/slo-designer/scripts/calculate_error_budget.py
type: script
bytes: 8648
unit: inv-rjm-168
in_scope_via: .claude/skills/slo-designer/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slo-designer/scripts/calculate_error_budget.py, sha256: c93bcddda600634ae423a52f821863f60cf8a9638f4a78f311523f24840c7d1e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slo-designer/scripts/calculate_error_budget.py

## Purpose — required, verbatim
> "Calculate error budget for SLO targets." — .claude/skills/slo-designer/scripts/calculate_error_budget.py:2

## Design intent — required
Calculates allowed downtime durations across multiple rolling periods (daily, weekly, monthly, quarterly, yearly) for a specified Service Level Objective target percentage. Provides plain text, JSON, and Markdown formatted tables summarizing downtime allowances and burn rate progression for operational alerts. Without this script, engineers and automated agents would manually compute downtime allowances and time-to-exhaustion projections, introducing mathematical calculation errors or inconsistent alerting threshold tables.

## Phase — required
rjm:spec

## Inputs — required
- CLI arguments: `--target <float>` (required; SLO percentage e.g. 99.9), `--period <daily|weekly|monthly|quarterly|yearly>` (optional, default: `monthly`), `--format <text|json|markdown>` (optional, default: `text`)

## Outputs — required
- Plain text summary to stdout with target percentage, period, error budget percentage, allowed downtime, and burn rate analysis table
- JSON structure to stdout when `--format json` is requested
- Markdown table to stdout when `--format markdown` is requested
- Error messages to stderr when target is invalid (`ValueError`) or calculations fail
- Process exit code: 0 on success, 1 on ValueError/invalid target, 2 on argparse error or unexpected exception

## Invokes — required
none

## Invoked by — required
- skill slo-designer — .claude/skills/slo-designer/SKILL.md:132

## Concepts named — required, verbatim
- `ErrorBudget` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:21 — defined here
- `PERIOD_MINUTES` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:53 — defined here
- `calculate_error_budget` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:62 — defined here
- `calculate_burn_rates` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:96 — defined here
- `format_text_output` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:138 — defined here
- `format_json_output` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:171 — defined here
- `format_markdown_output` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:192 — defined here
- `main` — .claude/skills/slo-designer/scripts/calculate_error_budget.py:224 — defined here

## Structure
none (python script; classes and functions: ErrorBudget, format_downtime, calculate_error_budget, calculate_burn_rates, format_text_output, format_json_output, format_markdown_output, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, language: Python 3, lines: 291
- documented invocation:
  - "python3 .claude/skills/slo-designer/scripts/calculate_error_budget.py \\" — .claude/skills/slo-designer/SKILL.md:132
  - "%(prog)s --target 99.9" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:231
  - "%(prog)s --target 99.9 --period weekly" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:232
  - "%(prog)s --target 99.95 --period monthly --format json" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:233
  - "%(prog)s --target 99.99 --format markdown" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:234
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target 99.9 --period monthly`
  abridged stdout:
  ```
  SLO Error Budget Calculator
  ========================================

  Target: 99.9%
  Period: monthly

  Error Budget: 0.1%
  Allowed Downtime: 43m 12s
    (43.20 minutes)

  Burn Rate Analysis:
  ----------------------------------------
        1x burn:    43.2 minutes to exhaust (Info)
        2x burn:    21.6 minutes to exhaust (Warning)
        6x burn:     7.2 minutes to exhaust (Urgent)
     14.4x burn:     3.0 minutes to exhaust (Critical)
       36x burn:     1.2 minutes to exhaust (Emergency)
  ```
  **actual exit code:** 0
- actual command run (json): `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target 99.95 --period monthly --format json`
  abridged stdout:
  ```json
  {
    "target_percent": 99.95,
    "error_budget_percent": 0.05,
    "period": "monthly",
    "period_minutes": 43200,
    "downtime_minutes": 21.6,
    "downtime_seconds": 1296.0,
    "downtime_formatted": "21m 36s",
    "burn_rates": {
      "1x": {
        "hours_to_exhaust": 0.36,
        "alert_severity": "Info"
      },
      "2x": {
        "hours_to_exhaust": 0.18,
        "alert_severity": "Warning"
      }
    }
  }
  ```
  **actual exit code:** 0
- documented exit codes:
  - "0: Success" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:8
  - "1: Invalid arguments" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:9
  - "2: Calculation error" — .claude/skills/slo-designer/scripts/calculate_error_budget.py:10
  vs. actual exit paths in code:
  - exit 0: `return 0` at .claude/skills/slo-designer/scripts/calculate_error_budget.py:279 (propagated via `sys.exit(main())` at line 290)
  - exit 1: `return 1` at .claude/skills/slo-designer/scripts/calculate_error_budget.py:283 (on `ValueError`, e.g. `--target -5` or `--target 105`)
  - exit 2: `return 2` at .claude/skills/slo-designer/scripts/calculate_error_budget.py:286 (on unhandled `Exception`)
  - exit 2: `argparse.ArgumentParser.parse_args()` exits with status code 2 on missing or unrecognized CLI arguments (e.g. missing `--target`), conflicting with docstring claim that invalid arguments exit with code 1.
- for validators/gates:
  - Can it exit non-zero? Yes, exits 1 on invalid target value (out of range 0..100) and exits 2 on missing required arguments or unexpected calculation exceptions.
  - Does it fail on the source repo's own default branch? Exits 0 with valid arguments. All functional tests in `tests/test_slo_designer_scripts.py` pass.
- does the output match what the documentation claims? No. The burn rate calculation in `calculate_burn_rates` divides `budget_minutes` instead of `period_hours`, producing severe calculation errors (e.g., claiming 1x burn exhausts a monthly budget in 43.2 minutes instead of 30 days, 2x in 21.6 minutes instead of 15 days, 14.4x in 3 minutes instead of 50 hours).

## Defects — required
- script-bug · .claude/skills/slo-designer/scripts/calculate_error_budget.py:110 · Burn rate calculation in `calculate_burn_rates` divides `budget_minutes` by hours divisor (`budget_minutes / 60`) instead of period duration (`period_hours / burn_rate`), erroneously reporting time to exhaust at 1x burn as 43.2 minutes instead of 30 days.
- cross-file-contradiction · .claude/skills/slo-designer/scripts/calculate_error_budget.py:110 · Script calculation outputs 43.2 minutes at 1x burn and 21.6 minutes at 2x burn, contradicting SKILL.md:50 ("2x burn = budget exhausted in 15 days") and references/slo-design-patterns.md:240 ("1x | 30 days | Normal operation").
- exit-code-mismatch · .claude/skills/slo-designer/scripts/calculate_error_budget.py:9 · Docstring and SKILL.md document exit code 1 for invalid arguments, but argparse exits with code 2 on missing or malformed CLI arguments.

## Observations
- Simple dataclass model `ErrorBudget` with custom string formatting for hours, minutes, seconds.
- Uses `round(100 - target, 6)` to avoid IEEE-754 floating point subtraction inaccuracies.

## Context cost
8,648 bytes, approximately 2,162 tokens.
