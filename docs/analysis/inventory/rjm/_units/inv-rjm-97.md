---
unit: inv-rjm-97
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-97

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/buy-vs-build-framework/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-skill-md.md` (21628 bytes)

## Scripts executed
- `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`, `python3 scripts/calculate_tco.py --build-initial 500000 --build-ongoing 100000 --buy-initial 50000 --buy-ongoing 200000 --partner-initial 100000 --partner-ongoing 150000 --discount-rate 0.12 --years 5`, exit code 2
- `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py`, `python3 scripts/score_decision.py --help`, exit code 0
- `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py`, `python3 scripts/score_decision.py --criteria-file "decision-criteria.json" --options "build,buy,partner"`, exit code 2 (unrecognized argument --options)
- `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`, `python3 scripts/check_reassessment_triggers.py --help`, exit code 0
- `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_vendor.py`, `python3 scripts/score_vendor.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit completes part 3 of `buy-vs-build-framework`. Part 1 (references: `PHASE1_ANALYSIS.md` and `SKILL_SPEC.xml`) was unit `inv-rjm-95`; Part 2 (scripts: `calculate_tco.py`, `check_reassessment_triggers.py`, `score_decision.py`, `score_vendor.py`) was unit `inv-rjm-96`.
- The skill file claims templates exist under `templates/` (`templates/core-vs-context-analysis.md`, `templates/tco-analysis.md`, `templates/decision-matrix.md`, `templates/adr-buy-vs-build.md`), but the `templates/` directory is absent from the repository; the templates are only embedded as XML element text within `references/SKILL_SPEC.xml` (part 1).
- Script exit code discrepancies: `calculate_tco.py` and `check_reassessment_triggers.py` document exit codes 10 and 11, but the implementations return exit codes 1, 2, and 3. `score_decision.py` documents an example with `--options "build,buy,partner"`, but `--options` is not defined in `argparse` and crashes with exit code 2.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,700 tokens (14,826 bytes). Approximate tokens of output written: ~5,400 tokens (21,628 bytes).
