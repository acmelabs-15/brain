---
unit: inv-rjm-96
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-96

## Files assigned
- [x] `.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`
- [x] `.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`
- [x] `.claude/skills/buy-vs-build-framework/scripts/score_decision.py`
- [x] `.claude/skills/buy-vs-build-framework/scripts/score_vendor.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-calculate-tco-py.md` (12599 bytes)
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-check-reassessment-triggers-py.md` (9706 bytes)
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-score-decision-py.md` (8696 bytes)
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-scripts-score-vendor-py.md` (7664 bytes)

## Scripts executed
- `.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py --build-initial 500000 --engineer-cost 350000 --maintenance-hours 150 --maintenance-growth 1.15 --code-churn-rate 0.45 --buy-initial 50000 --buy-ongoing 150000 --partner-initial 100000 --partner-ongoing 125000 --discount-rate 0.12 --years 5`, exit code 0
- `.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py --build-initial 500000 --build-ongoing 100000 --buy-initial 50000 --buy-ongoing 200000 --partner-initial 100000 --partner-ongoing 150000 --discount-rate 0.12 --years 5`, exit code 2 (spurious warning due to sign bug in `calculate_npv`)
- `.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py --help`, exit code 0
- `.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py --adr-file architecture/ADR-123-build-payments.md --current-state current-state.json`, exit code 1 (missing file)
- `.claude/skills/buy-vs-build-framework/scripts/score_decision.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py --help`, exit code 0
- `.claude/skills/buy-vs-build-framework/scripts/score_decision.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py --criteria-file decision-criteria.json --options "build,buy,partner"`, exit code 2 (unrecognized argument `--options`)
- `.claude/skills/buy-vs-build-framework/scripts/score_vendor.py`: `python3 sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_vendor.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All four scripts support the `buy-vs-build-framework` skill (part 1 inventoried in another unit).
- Significant documentation drift exists between `.claude/skills/buy-vs-build-framework/SKILL.md` and the scripts:
  1. Exit code misalignment across all scripts: SKILL.md documents exit codes 0, 10, 11 for scripts, but `calculate_tco.py` exits with 0, 1, 2; `check_reassessment_triggers.py` exits with 0, 1, 2, 3; and `score_decision.py` exits with 0, 1, 11.
  2. The invocation for `score_decision.py` documented in SKILL.md:150-152 passes `--options "build,buy,partner"`, which `score_decision.py` does not support, throwing an `argparse` error.
  3. `templates/` directory referenced in `SKILL.md:273-281` (`templates/core-vs-context-analysis.md`, `tco-analysis.md`, `decision-matrix.md`, `adr-buy-vs-build.md`) is completely missing from both `.claude/skills/buy-vs-build-framework/` and `src/copilot-cli/skills/buy-vs-build-framework/`.
  4. In `calculate_tco.py`, `calculate_npv` has a mathematical sign bug where initial cost is subtracted from discounted ongoing costs and then negated, producing an inverted sign whenever initial costs exceed discounted ongoing costs.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,642 tokens (42,569 bytes source code across 4 scripts + 14,826 bytes SKILL.md). Approximate tokens of output written: ~9,666 tokens (38,665 bytes across 4 inventory cards + unit report).
