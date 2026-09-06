---
unit: inv-rjm-88
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-88

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/agent-architecture-patterns.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/context-budget-management.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/design-legacy-code.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/design-tell-dont-ask.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/DEVELOPMENT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/engineering-complexity-tiers.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/quality-boy-scout-rule.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/reliability-observability-pillars.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/references/strategy-ooda-loop.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-agent-architecture-patterns-md.md` (5655 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-context-budget-management-md.md` (4471 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-design-legacy-code-md.md` (4353 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-design-tell-dont-ask-md.md` (4599 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-development-md.md` (4176 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-engineering-complexity-tiers-md.md` (8725 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-quality-boy-scout-rule-md.md` (4374 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-reliability-observability-pillars-md.md` (5416 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-strategy-ooda-loop-md.md` (4950 bytes)
- `docs/analysis/inventory/rjm/claude-skills-analyze-scripts-analyze-py.md` (8950 bytes)

## Scripts executed
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 6 --thoughts "Explore found: test"`, exit code 0
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 6 --total-steps 6 --thoughts "test synthesis"`, exit code 0
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 3 --thoughts "should fail"`, exit code 1
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 0 --total-steps 6 --thoughts "fail"`, exit code 1
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 8 --total-steps 6 --thoughts "fail"`, exit code 1
- `.claude/skills/analyze/scripts/analyze.py`: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py`, exit code 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `engineering-complexity-tiers.md` is invoked across multiple units and lifecycle commands as the single source of truth for task classification: `/build` (`inv-rjm-74`), `planner` (`inv-rjm-119`), `review` (`inv-rjm-150`), and `spec-generator` (`inv-rjm-226`).
- Reference files with `source: wiki/concepts/...` frontmatter have missing target files because the `wiki/` directory does not exist in `sources/rjm`. This was highlighted in Phase 1V verification (`_verification.md:29, 53`) and documented on each affected card.
- `DEVELOPMENT.md` is an unreferenced contributor guide under `references/` (`Invoked by: orphan`), flagged with an `orphan` defect.
- `scripts/analyze.py` argument parsing exits with code 2 on missing flags, while documentation claims all argument errors exit with code 1, documented as an `exit-code-mismatch` defect.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~13,000 tokens (49,736 bytes). Approximate tokens of output written: ~14,000 tokens (55,669 bytes).
