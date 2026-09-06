---
unit: inv-rjm-88
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-88

## Files assigned
- [x] `.claude/skills/analyze/references/agent-architecture-patterns.md`
- [x] `.claude/skills/analyze/references/context-budget-management.md`
- [x] `.claude/skills/analyze/references/design-legacy-code.md`
- [x] `.claude/skills/analyze/references/design-tell-dont-ask.md`
- [x] `.claude/skills/analyze/references/DEVELOPMENT.md`
- [x] `.claude/skills/analyze/references/engineering-complexity-tiers.md`
- [x] `.claude/skills/analyze/references/quality-boy-scout-rule.md`
- [x] `.claude/skills/analyze/references/reliability-observability-pillars.md`
- [x] `.claude/skills/analyze/references/strategy-ooda-loop.md`
- [x] `.claude/skills/analyze/scripts/analyze.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-agent-architecture-patterns-md.md` — 4312 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-context-budget-management-md.md` — 3479 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-design-legacy-code-md.md` — 3692 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-design-tell-dont-ask-md.md` — 3676 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-development-md.md` — 3766 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-engineering-complexity-tiers-md.md` — 4113 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-quality-boy-scout-rule-md.md` — 4011 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-reliability-observability-pillars-md.md` — 4237 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-references-strategy-ooda-loop-md.md` — 3754 bytes
- `docs/analysis/inventory/rjm/claude-skills-analyze-scripts-analyze-py.md` — 6817 bytes

## Scripts executed
- `.claude/skills/analyze/scripts/analyze.py`: `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 6 --thoughts "Starting analysis. User request: test"` — exit 0
- `.claude/skills/analyze/scripts/analyze.py`: `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 3 --thoughts "should fail"` — exit 1
- `.claude/skills/analyze/scripts/analyze.py`: `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 6 --total-steps 6 --thoughts "test synthesis"` — exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/analyze/references/DEVELOPMENT.md` is present on disk and self-references within its file index, but is not referenced by `SKILL.md` or any other in-scope file, marking it as an orphan reference within `skills/analyze/`.
- `.claude/skills/analyze/references/engineering-complexity-tiers.md` is a critical cross-cutting taxonomy referenced directly by `.claude/commands/build.md:28` for pre-implementation tier classification.
- `.claude/skills/analyze/references/quality-boy-scout-rule.md` is also cited in `.claude/skills/review/references/code-quality.md:53` as sharing identical semantics with the `decision-critic` variant.
- `.claude/skills/analyze/references/strategy-ooda-loop.md` provides the foundational six-phase conceptual mapping for `analyze.py`, and is also referenced in `planner` and `pre-mortem` skills.
- The skill file `.claude/skills/analyze/SKILL.md` is inventoried in another part (part 2, inv-rjm-89), but was read in full as context for this unit.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~12,500 tokens (49,736 bytes source files + 7,180 bytes SKILL.md context).
Approximate output written: ~10,500 tokens (41,857 bytes across 10 cards + ~2,500 bytes unit report).
