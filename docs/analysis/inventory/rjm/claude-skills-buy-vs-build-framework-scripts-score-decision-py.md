---
package: rjm
path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py
type: script
bytes: 6144
unit: inv-rjm-96
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_decision.py, sha256: 482aba62657f1d636ac910c399c5799245380818be20d222c9c09fab62856f4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/scripts/score_decision.py

## Purpose — required, verbatim
> "Calculate weighted decision scores with sensitivity analysis." — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:3

## Design intent — required
Provides objective multi-criteria decision evaluation across strategic, operational, and risk dimensions for build, buy, and partner alternatives. Consuming a JSON criteria configuration containing category weights and criteria scores, it calculates normalized weighted scores, ranks the options, and calculates confidence ("high", "medium", "low") based on the percentage gap between top contenders. If a tie occurs (confidence "low" due to a <10% score gap), it flags the result for human tie-breaker intervention and exits with code 1. It also tests weight sensitivity (±20%) across each category.

## Phase — required
rjm:Evaluate

## Inputs — required
- `--criteria-file`: "JSON file with criteria weights and scores" — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:130
- JSON criteria input structure:
  - `weights`: dictionary mapping category name to float weight (must sum to 100.0) (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:34, 111)
  - `options`: dictionary mapping option name (e.g. `build`, `buy`, `partner`) to category sub-scores (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:41, 116)

## Outputs — required
- Formatted console report printed to stdout:
  - "Decision Matrix Scores" header — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:177
  - Ranked list of evaluated options and their composite weighted scores (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:179)
  - "Winner:" capitalized winning option — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:182
  - "Confidence:" HIGH, MEDIUM, or LOW confidence rating — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:183
  - "Sensitivity Analysis (±20% weight)" displaying impact of weight adjustments per category — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:185
  - "NOTE: Low confidence (scores within 10%) - human judgment required" when confidence is low — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:191
- Exit status: code 0 (high/medium confidence winner), 1 (low confidence tie requiring human judgment, or path traversal error), or 11 (missing file, invalid JSON, or schema validation failure)

## Invokes — required
none

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:150
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:230
- skill programming-advisor — src/copilot-cli/skills/programming-advisor/SKILL.md:100

## Concepts named — required, verbatim
- `weighted decision scores` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:3 — defined here
- `sensitivity analysis` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:3 — defined here
- `DecisionScore` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:17 — defined here
- `scores` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:19 — defined here
- `winner` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:20 — defined here
- `confidence` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:21 — defined here
- `weights` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:29 — defined here
- `options` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:37 — defined here
- `strategic` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:112 — used here
- `operational` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:113 — used here
- `risk` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:114 — used here
- `build` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:117 — used here
- `buy` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:122 — used here
- `partner` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:123 — used here
- `Decision Matrix Scores` — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:177 — defined here

## Structure
none (python script; functions and classes: `DecisionScore`, `validate_criteria`, `calculate_scores`, `determine_confidence`, `sensitivity_analysis`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/buy-vs-build-framework/scripts/score_decision.py`, language: Python 3, lines: 199
- documented invocation:
  - "python3 scripts/score_decision.py" — .claude/skills/buy-vs-build-framework/SKILL.md:150
  - "python3 scripts/score_decision.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:230
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py --help`
  abridged stdout:
  ```
  usage: score_decision.py [-h] --criteria-file CRITERIA_FILE

  Calculate weighted decision scores
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Clear winner (>20% score gap)" — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:6
  - "1: Tie requires human judgment (scores within 10%)" — .claude/skills/buy-vs-build-framework/scripts/score_decision.py:7
  Documented in SKILL.md:
  - "0: Clear winner (>20% score gap)" — .claude/skills/buy-vs-build-framework/SKILL.md:236
  - "1: Tie requires human judgment (scores within 10%)" — .claude/skills/buy-vs-build-framework/SKILL.md:237
  Actual exit paths in code:
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:147) on ValueError from path traversal security check.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:155) on FileNotFoundError.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:158) on JSONDecodeError.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:166) on validation error from `validate_criteria`.
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:192) when `confidence == "low"`.
  - `sys.exit(0)` (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:194) when `confidence != "low"` (returns 0 for both "high" and "medium" confidence).
- for validators/gates: not a validator/gate (decision matrix scoring engine). Can exit non-zero (1 on low-confidence tie or path error, 11 on data/schema errors).
- does the output match what the documentation claims? Partially; while the scores and sensitivity outputs match the documented structure, the invocation documented in SKILL.md:150-152 includes an unsupported argument `--options "build,buy,partner"` that causes `argparse` to fail with exit code 2.

## Defects — required
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/score_decision.py:129 · In `.claude/skills/buy-vs-build-framework/SKILL.md:150-152`, the documented invocation passes `--options "build,buy,partner"`, but `score_decision.py` does not define an `--options` CLI argument, causing `argparse` to fail with exit code 2 (`error: unrecognized arguments: --options build,buy,partner`).
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/score_decision.py:5 · Script docstring and SKILL.md:235-238 omit exit code 11 (returned on missing file, invalid JSON, or invalid criteria weights/categories).
- `exit-code-mismatch` · .claude/skills/buy-vs-build-framework/scripts/score_decision.py:6 · Docstring claims exit code 0 indicates "Clear winner (>20% score gap)", but line 194 exits 0 for any `confidence != "low"`, which includes medium confidence (10-20% gap).

## Observations
- CWE-22 protection at lines 136-147 enforces that `--criteria-file` must reside under the current working directory.
- Implements category-level sensitivity analysis by recalculating weighted scores under ±20% shifts in each category's weight and reallocating remaining weight proportionally across other categories.

## Context cost
6144 bytes (~1536 tokens). Self-contained Python script importing standard library modules (`argparse`, `json`, `sys`, `dataclasses`, `os`).
