---
package: rjm
path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py
type: script
bytes: 20893
unit: inv-rjm-96
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py, sha256: 12d5e6321feed9b98ac6602cf514da5d873e188dcfd268dad4e556513febe92b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py

## Purpose — required, verbatim
> "Calculate Total Cost of Ownership (TCO) for Build/Buy/Partner decisions." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3

## Design intent — required
Quantifies total cost of ownership across build, buy, and partner options over 3, 5, or 10-year horizons to guide strategic sourcing decisions. To prevent underestimating build costs, it models hidden ongoing expenses that grow over time—specifically engineering overhead (maintenance expansion due to compounding system complexity) and code churn drag (unplanned maintenance and bug-fixing side quests from continuous code churn). It calculates Net Present Value (NPV) to account for the time value of money, Internal Rate of Return (IRR), break-even timelines against buying, and performs sensitivity analysis across discount rates and recurring costs.

## Phase — required
rjm:Analyze

## Inputs — required
- `--discount-rate`: "Discount rate: 0.10 = 10%%, 0.12 = 12%% (typical: 10-15%%)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:328
- `--years`: "Analysis horizon: 3, 5, or 10 years" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:330
- `--build-initial`: "Build: Upfront cost ($)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:334
- `--build-ongoing`: "Build: Annual cost - SIMPLE mode (use OR realistic params)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:336
- `--engineer-cost`: "Build: Fully-loaded engineer cost/year ($350K typical)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:340
- `--maintenance-hours`: "Build: Annual overhead hours (security, compliance, updates)." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:342
- `--maintenance-growth`: "Build: Yearly overhead growth (1.15 = 15%%/year). Typical: 1.10-1.20" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:345
- `--code-churn-rate`: "Build: Annual code churn rate (0.5 = 50%%)." — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:347
- `--buy-initial`: "Buy: Upfront cost (licenses, setup, integration)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:352
- `--buy-ongoing`: "Buy: Annual cost (subscriptions, support, training)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:354
- `--partner-initial`: "Partner: Upfront cost (integration, setup)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:356
- `--partner-ongoing`: "Partner: Annual cost (rev share, support)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:358

## Outputs — required
- Formatted console report printed to stdout:
  - "TCO Analysis" summary header with horizon and mode — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:456
  - "COSTS (in today's dollars):" for Build, Buy, and Partner — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:459
  - "RECOMMENDATION:" lowest-cost option and total cost — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:475
  - "BUILD COST BREAKDOWN:" yearly costs and average in REALISTIC mode — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:480
  - "FINANCIAL METRICS:" IRR and Break-even vs Buy — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:486
  - "SENSITIVITY ANALYSIS (±20%):" swings for discount rate and ongoing costs — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:494
  - "WHAT THIS MEANS:" interpretive financial guidance — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:500
- Exit status: code 0 (success), 1 (validation error or conflicting arguments), or 2 (warning: negative NPV detected)

## Invokes — required
none

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:113
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:207
- skill programming-advisor — src/copilot-cli/skills/programming-advisor/SKILL.md:100
- skill programming-advisor — src/copilot-cli/skills/programming-advisor/SKILL.md:226
- skill programming-advisor — src/copilot-cli/skills/programming-advisor/SKILL.md:300

## Concepts named — required, verbatim
- `Total Cost of Ownership` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3 — defined here
- `TCO` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3 — defined here
- `Build/Buy/Partner` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:3 — used here
- `TCOResult` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:26 — defined here
- `npv_build` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:28 — defined here
- `npv_buy` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:29 — defined here
- `npv_partner` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:30 — defined here
- `irr_build` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:31 — defined here
- `breakeven_years` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:32 — defined here
- `Net Present Value` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:84 — defined here
- `NPV` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:86 — defined here
- `Internal Rate of Return` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:108 — defined here
- `IRR` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:427 — defined here
- `break-even point` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:128 — defined here
- `sensitivity analysis` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:447 — defined here
- `SIMPLE MODE` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:249 — defined here
- `REALISTIC MODE` — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:255 — defined here

## Structure
none (python script; functions and classes: `TCOResult`, `calculate_realistic_build_cost`, `calculate_npv`, `calculate_irr`, `calculate_breakeven`, `sensitivity_analysis`, `validate_inputs`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`, language: Python 3, lines: 521
- documented invocation:
  - "python3 scripts/calculate_tco.py" — .claude/skills/buy-vs-build-framework/SKILL.md:113
  - "python3 scripts/calculate_tco.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:207
  - "python3 calculate_tco.py" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:289
  - "python3 calculate_tco.py" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:296
  - "python3 calculate_tco.py" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:305
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py --build-initial 500000 --engineer-cost 350000 --maintenance-hours 150 --maintenance-growth 1.15 --code-churn-rate 0.45 --buy-initial 50000 --buy-ongoing 150000 --partner-initial 100000 --partner-ongoing 125000 --discount-rate 0.12 --years 5`
  abridged stdout:
  ```
  ================================================================================
  TCO Analysis (5 year horizon) - REALISTIC MODE
  ================================================================================

  COSTS (in today's dollars):
    Build:   $   2,050,877.95
    Buy:     $     490,716.43
    Partner: $     350,597.03

  RECOMMENDATION: Partner ($350,597.03 total cost)

  BUILD COST BREAKDOWN:
    Year 1: $422,490.38
    Year 2: $426,276.44
    Year 3: $430,630.41
    Year 4: $435,637.47
    Year 5: $441,395.59
    Average: $431,286.06/year

  FINANCIAL METRICS:
    IRR (Build):          -99.0%
    Break-even vs Buy:   Year 2.1

  SENSITIVITY ANALYSIS (±20%):
    Discount rate swing: ±$185,242
    Ongoing cost swing:  ±$621,876

  WHAT THIS MEANS:
    • Buy saves $1,560,162 over 5 years
    • Strong financial case for buying
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Success" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:15
  - "1: Error (invalid inputs)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:16
  - "2: Warning (negative NPV detected - you lose money on all options)" — .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:17
  Documented in SKILL.md:
  - "0: Success" — .claude/skills/buy-vs-build-framework/SKILL.md:220
  - "10: Warning (negative NPV detected)" — .claude/skills/buy-vs-build-framework/SKILL.md:221
  - "11: Error (missing cost categories)" — .claude/skills/buy-vs-build-framework/SKILL.md:222
  Actual exit paths in code:
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:373) when both `--build-ongoing` and `--engineer-cost` are supplied.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:409) when neither `--build-ongoing` nor `--engineer-cost` is supplied.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:417) on input validation errors from `validate_inputs`.
  - `sys.exit(2)` (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:514) when `result.warning` is set ("Negative NPV detected (costs exceed discounted value)").
  - `sys.exit(0)` (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:516) on successful completion without warnings.
- for validators/gates: not a validator/gate (financial analysis calculator). Can exit non-zero (1 on invalid inputs, 2 on warning). Does not fail on clean valid inputs.
- does the output match what the documentation claims? Partially; while the output structure and calculated metrics match, the documented simple-mode command in SKILL.md:113 exits with code 2 due to a sign inversion bug in `calculate_npv`, rather than code 0.

## Defects — required
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:14 · Script docstring documents exit codes 0 (Success), 1 (Error: invalid inputs), and 2 (Warning: negative NPV detected), but `.claude/skills/buy-vs-build-framework/SKILL.md:219-223` documents exit codes 0 (Success), 10 (Warning), and 11 (Error).
- `exit-code-mismatch` · .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:514 · Actual code exits with 0, 1, or 2, whereas `.claude/skills/buy-vs-build-framework/SKILL.md:219-223` documents exit codes 0, 10, and 11.
- `script-bug` · .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:99 · In `calculate_npv`, initial cost is negated (`npv = -initial_cost`) while recurring costs are added (`npv += ongoing_cost / ((1 + discount_rate) ** year)`) and then negated (`return -npv`), reversing the sign when initial cost exceeds discounted ongoing costs, and creating a sign contradiction with realistic mode (lines 388-390) where costs are subtracted.
- `script-bug` · .claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:451 · Negative NPV warning condition `if npv_build > 0 or npv_buy > 0 or npv_partner > 0` incorrectly treats positive return values from `calculate_npv` as negative NPV warnings, causing simple mode runs with high initial costs to exit 2 with a spurious warning.

## Observations
- In realistic mode, accurately models hidden engineering overhead by applying annual compound growth (`maintenance_growth ** (year - 1)`) to maintenance hours and factoring 30% of code churn into unplanned technical debt drag.
- Financial sensitivity analysis tests ±20% variations in both discount rate and annual ongoing costs, providing Principal+ decision makers with cost swing bounds.
- The IRR calculation implements a binary search over 100 iterations with bounds `[-0.99, 1.0]`, which can converge to `-99.0%` or `100.0%` boundary extremes for pure cost outflow streams without positive revenue returns.

## Context cost
20893 bytes (~5223 tokens). Self-contained Python script importing standard library modules (`argparse`, `sys`, `dataclasses`).
