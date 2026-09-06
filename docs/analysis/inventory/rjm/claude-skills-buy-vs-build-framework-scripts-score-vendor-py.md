---
package: rjm
path: .claude/skills/buy-vs-build-framework/scripts/score_vendor.py
type: script
bytes: 7813
unit: inv-rjm-96
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_vendor.py, sha256: 061027f393d2466c4024469e1804be4c726a1aa7e66475037f83ae4fd8eee157}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/scripts/score_vendor.py

## Purpose — required, verbatim
> "Score vendor stability, pricing, feature fit, and support quality." — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3

## Design intent — required
Evaluates vendor risk and product viability when considering the "Buy" option in buy-vs-build assessments. It scores a vendor across four distinct categories (each up to 25 points, total 100): financial stability (years in business, funding/revenue stage, M&A risk), product maturity (market position, customer count, public roadmap), pricing model (transparency, predictability, lock-in costs), and feature fit (core coverage percentage, customization via API/SDK). It outputs a composite score (0-100), enumerates risk flags, and produces an actionable recommendation: PASS (>70 points, exit 0), YELLOW FLAG (50-70 points, exit 10), or RED FLAG (<50 points, exit 11).

## Phase — required
rjm:Analyze

## Inputs — required
- `--vendor-data`: "JSON file with vendor information" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:234
- Consumed JSON vendor data attributes:
  - Financial stability inputs: `years_in_business`, `funding_status`, `ma_risk` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:31, 43, 55)
  - Product maturity inputs: `market_position`, `customer_count`, `public_roadmap` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:73, 85, 97)
  - Pricing model inputs: `pricing_transparency`, `pricing_model`, `lock_in_cost` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:113, 123, 133)
  - Feature fit inputs: `core_feature_coverage_percent`, `customization_options` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:151, 163)

## Outputs — required
- Structured text scorecard printed to stdout:
  - "Vendor Scorecard" header — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:266
  - "Overall Score:" numeric score out of 100 — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:268
  - Risk Flags list detailing all triggered evaluation risks (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:270)
  - "Recommendation:" status string ("PASS - Vendor meets quality standards", "YELLOW FLAG - Proceed with caution, mitigate risks", or "RED FLAG - High risk, consider alternatives") — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:277
- Exit status: code 0 (pass >70), 10 (yellow flag 50-70), 11 (red flag <50, missing file, or invalid JSON), or 1 (path traversal error)

## Invokes — required
none

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:262
- skill programming-advisor — src/copilot-cli/skills/programming-advisor/SKILL.md:100

## Concepts named — required, verbatim
- `vendor stability` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3 — defined here
- `pricing` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3 — defined here
- `feature fit` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3 — defined here
- `support quality` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3 — defined here
- `VendorScore` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:18 — defined here
- `financial stability` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:26 — defined here
- `product maturity` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:68 — defined here
- `pricing model` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:108 — defined here
- `PASS` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:198 — defined here
- `YELLOW FLAG` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:200 — defined here
- `RED FLAG` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:202 — defined here
- `Vendor Scorecard` — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:266 — defined here

## Structure
none (python script; functions and classes: `VendorScore`, `score_financial_stability`, `score_product_maturity`, `score_pricing_model`, `score_feature_fit`, `calculate_vendor_score`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/buy-vs-build-framework/scripts/score_vendor.py`, language: Python 3, lines: 290
- documented invocation:
  - "python3 scripts/score_vendor.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:262
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_vendor.py --help`
  abridged stdout:
  ```
  usage: score_vendor.py [-h] --vendor-data VENDOR_DATA

  Score vendor quality and risk profile
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: Pass (score >70)" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:6
  - "10: Yellow flag (score 50-70)" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:7
  - "11: Red flag (score <50)" — .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:8
  Documented in SKILL.md:
  - "0: Pass (score >70)" — .claude/skills/buy-vs-build-framework/SKILL.md:268
  - "10: Yellow flag (score 50-70)" — .claude/skills/buy-vs-build-framework/SKILL.md:269
  - "11: Red flag (score <50)" — .claude/skills/buy-vs-build-framework/SKILL.md:270
  Actual exit paths in code:
  - `sys.exit(1)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:254) on ValueError from path traversal security check.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:257) on FileNotFoundError.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:260) on JSONDecodeError.
  - `sys.exit(0)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:281) when `vendor_score > 70`.
  - `sys.exit(10)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:283) when `vendor_score >= 50`.
  - `sys.exit(11)` (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:285) when `vendor_score < 50`.
- for validators/gates: not a validator/gate (vendor risk scorecard). Can exit non-zero (1 on path error, 10 on yellow flag, 11 on red flag or file error).
- does the output match what the documentation claims? Yes, produces scorecard matching documented exit codes 0, 10, and 11.

## Defects — required
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:3 · Docstring claims script scores "support quality", but no support quality scoring logic or function exists in the code (it scores financial stability, product maturity, pricing model, and feature fit).
- `doc-drift` · .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:5 · Docstring and SKILL.md:267-271 omit exit code 1 (returned on path traversal validation error) and fail to note exit code 11 is overloaded for both red flag score (<50) and file/JSON decode errors.

## Observations
- Clean point allocation: 4 dimensions x 25 points = 100 points maximum.
- Implements defensive path traversal check (CWE-22) at lines 240-254.

## Context cost
7813 bytes (~1953 tokens). Self-contained Python script importing standard library modules (`argparse`, `json`, `sys`, `dataclasses`, `os`).
