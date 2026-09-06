---
unit: inv-rjm-95
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-95

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml`
(Also read for context: `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/buy-vs-build-framework/SKILL.md`)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-references-phase1-analysis-md.md` (11,709 bytes)
- `docs/analysis/inventory/rjm/claude-skills-buy-vs-build-framework-references-skill-spec-xml.md` (12,298 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-95.md`

## Scripts executed
none (assigned files are markdown and XML reference files, not executable scripts)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-95` is part 1 of 3 for the `buy-vs-build-framework` skill:
  - Part 1 (`inv-rjm-95`): `references/PHASE1_ANALYSIS.md` and `references/SKILL_SPEC.xml`
  - Part 2 (`inv-rjm-96`): scripts (`calculate_tco.py`, `check_reassessment_triggers.py`, `score_decision.py`, `score_vendor.py`)
  - Part 3 (`inv-rjm-97`): `SKILL.md`
- **Missing path defect**: Both `SKILL.md` (lines 274–281) and `SKILL_SPEC.xml` (lines 339–382) document four template files in `templates/` (`core-vs-context-analysis.md`, `tco-analysis.md`, `decision-matrix.md`, `adr-buy-vs-build.md`). However, no `templates/` directory exists under `.claude/skills/buy-vs-build-framework/`.
- **Missing references defect**: `SKILL_SPEC.xml` lines 384–405 lists five reference documents (`core-vs-context.md`, `tco-methodology.md`, `partnership-models.md`, `vendor-evaluation.md`, `reassessment-playbook.md`). None of these exist on disk; instead, the physical directory contains only `PHASE1_ANALYSIS.md` and `SKILL_SPEC.xml`.
- **Exit code documentation drift**: `PHASE1_ANALYSIS.md` line 144 lists exit codes for `check_reassessment_triggers.py` as `0=assumptions hold, 11=reassessment required`, omitting code `10: Minor drift (<20%), monitor closely` defined in `SKILL.md:253` and `SKILL_SPEC.xml:260`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,666 tokens (35,838 bytes assigned files + 14,826 bytes context SKILL.md)
- Approximate tokens of output written: ~6,500 tokens across two inventory cards and unit report
