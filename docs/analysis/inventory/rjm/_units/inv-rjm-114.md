---
unit: inv-rjm-114
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-114

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/critical-thinking-falsifiability.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/decision-pre-committed-metrics.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/mental-models-chestertons-fence.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/mental-models-conways-law.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/mental-models-fat-tails.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/mental-models-galls-law.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/quality-boy-scout-rule.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/rewrite-regression-check.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-critical-thinking-brandolinis-law-md.md` (4955 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-critical-thinking-falsifiability-md.md` (4638 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-critical-thinking-survivorship-bias-md.md` (4547 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-decision-pre-committed-metrics-md.md` (5212 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-mental-models-chestertons-fence-md.md` (3905 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-mental-models-conways-law-md.md` (4365 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-mental-models-fat-tails-md.md` (4541 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-mental-models-galls-law-md.md` (4144 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-quality-boy-scout-rule-md.md` (4412 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-rewrite-regression-check-md.md` (4666 bytes)
- `docs/analysis/inventory/rjm/claude-skills-decision-critic-references-strategic-thinking-systems-thinking-md.md` (5304 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-114.md`

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/decision-critic/SKILL.md` (part 2 of this skill, in another unit) lists 10 references at lines 98-107, but omits `decision-pre-committed-metrics.md`. However, `decision-pre-committed-metrics.md` is explicitly located in `.claude/skills/decision-critic/references/`, contains an explicit "Decision Critic Application" section tailored for Steps 5-6, and is directly cited by `.claude/skills/review/references/decision-rigor.md:54`.
- All 11 reference files contain frontmatter `source: wiki/concepts/...` pointing to a `wiki/` directory that does not exist in `sources/rjm/` (`missing-path` defect).
- Several mental model references (`quality-boy-scout-rule.md`, `mental-models-galls-law.md`) have parallel or identical representations in other skills (`analyze`, `pre-mortem`, `planner`), which will be relevant for Phase 3 concordance and deduplication.

## Blocked or uncertain
none

## Time and size
Source read: 38,806 bytes (~9,700 tokens); output written: ~50,689 bytes (~12,670 tokens) across 11 cards and 1 unit report.
