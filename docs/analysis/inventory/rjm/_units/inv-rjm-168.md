---
unit: inv-rjm-168
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-168

## Files assigned
- [x] `.claude/skills/slo-designer/references/slo-design-patterns.md`
- [x] `.claude/skills/slo-designer/scripts/calculate_error_budget.py`
- [x] `.claude/skills/slo-designer/scripts/generate_slo_document.py`
- [x] `.claude/skills/slo-designer/SKILL.md`
- [x] `.claude/skills/slo-designer/templates/slo-config-template.yaml`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-slo-designer-references-slo-design-patterns-md.md` (6626 bytes)
- `docs/analysis/inventory/rjm/claude-skills-slo-designer-scripts-calculate-error-budget-py.md` (7972 bytes)
- `docs/analysis/inventory/rjm/claude-skills-slo-designer-scripts-generate-slo-document-py.md` (9086 bytes)
- `docs/analysis/inventory/rjm/claude-skills-slo-designer-skill-md.md` (8378 bytes)
- `docs/analysis/inventory/rjm/claude-skills-slo-designer-templates-slo-config-template-yaml.md` (3479 bytes)

## Scripts executed
- `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target 99.9 --period monthly`, exit code 0
- `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target 99.95 --period monthly --format json`, exit code 0
- `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py`, exit code 2
- `.claude/skills/slo-designer/scripts/calculate_error_budget.py`, `python3 sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py --target -5`, exit code 1
- `.claude/skills/slo-designer/scripts/generate_slo_document.py`, `python3 sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py --sample-config`, exit code 0
- `.claude/skills/slo-designer/scripts/generate_slo_document.py`, `sources/rjm/.venv/bin/python sources/rjm/.claude/skills/slo-designer/scripts/generate_slo_document.py --config sources/rjm/.claude/skills/slo-designer/templates/slo-config-template.yaml`, exit code 0
- `tests/test_slo_designer_scripts.py`, `sources/rjm/.venv/bin/pytest sources/rjm/tests/test_slo_designer_scripts.py`, exit code 0 (90 passed, 1 skipped)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/slo-designer/SKILL.md:38` references `../threat-modeling/SKILL.md`, but that directory is absent under `.claude/skills/` (exists only under `src/copilot-cli/skills/threat-modeling/`).
- Sibling files `.claude/skills/slo-designer/references/slo-design-patterns.md` and `.claude/skills/slo-designer/templates/slo-config-template.yaml` are not referenced by `SKILL.md` and are manifest orphans.
- Logic bug in `calculate_error_budget.py`: Burn rate calculations divide `budget_minutes` by hours instead of total period duration, erroneously reporting 43.2 minutes to exhaust at 1x burn rate instead of 30 days. This directly contradicts `SKILL.md:50` ("2x burn = budget exhausted in 15 days") and `references/slo-design-patterns.md:240` ("1x | 30 days | Normal operation").
- Inverted error budget calculation in `generate_slo_document.py`: The formula `100 - slo.target` treats all targets as availability percentages, so when given an error rate target such as 0.1%, it calculates an error budget of 99.9% (719h monthly downtime allowance).

## Blocked or uncertain
none

## Time and size
- Source read: 41,972 bytes (~10,493 tokens) across 5 assigned files.
- Output written: 35,541 bytes (~8,885 tokens) across 5 inventory cards plus 2,750 bytes (~688 tokens) for unit report.
