---
unit: inv-rjm-113
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-113

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cynefin-classifier/references/cynefin-deep-dive.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cynefin-classifier/references/domain-transitions.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cynefin-classifier/references/software-applications.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cynefin-classifier/scripts/classify.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cynefin-classifier/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-cynefin-deep-dive-md.md` (6725 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-domain-transitions-md.md` (6729 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-software-applications-md.md` (7681 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-scripts-classify-py.md` (8458 bytes)
- `docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-skill-md.md` (11555 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-113.md`

## Scripts executed
- `.claude/skills/cynefin-classifier/scripts/classify.py`:
  - `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "Description of the problem" --context "Additional context about constraints, environment"` (exit code: 2)
  - `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "Fix typo in documentation"` (exit code: 0)
  - `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "   "` (exit code: 1)
  - `python3 .claude/skills/cynefin-classifier/scripts/classify.py --problem "Production outage down crisis emergency" --json` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Upstream specification integration: Cynefin problem-domain classification serves as an orthogonal assessment to engineering complexity tiers (Tier 1-5) in `spec-generator` (`.claude/skills/spec-generator/references/spec-prior-art-schema.md:164`).
- Upstream gating constraint: in `spec-prior-art-schema.md:180`, a classification of Chaotic domain triggers a mandatory halt condition on the `/spec` command, requiring stabilization before any PRD can be specified. All other domain classifications (Clear, Complicated, Complex) are soft metadata annotations.
- Integration table doc-drift: `SKILL.md:231-238` tabulates `milestone-planner`, `architect`, and `analyst` under a "Skill" column heading, but these exist as agents under `.claude/agents/` in the repository.
- Compound problem implementation gap: `SKILL.md:240-250` defines decomposition and sequencing rules for multi-domain problems, but the bundled script `scripts/classify.py` hardcodes `compound_note=None` at line 309 without implementing multi-domain decomposition.

## Blocked or uncertain
none

## Time and size
Source read: 43838 bytes (~10960 tokens). Deliverables written: 41148 bytes (~10287 tokens).
