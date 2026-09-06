---
unit: inv-rjm-106
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-106

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/context-optimizer/references/rule-audit-parser-forensics.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-measurement-discipline-md.md` (7423 bytes)
- `docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-parser-forensics-md.md` (7304 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-106.md` (1734 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-106 covers the forensic and measurement reference documentation of the `context-optimizer` skill suite (part 2). Part 1 covers `SKILL.md`, and other parts cover companion references (`rule-audit-procedure.md`, `rule-audit-instrument.md`, `rule-audit-evidence.md`, `model-context-doctrine.md`, `vibe-engineering.md`, `claude-code-productivity-patterns.md`) and python scripts (`analyze_skill_placement.py`, `compress_markdown_content.py`, `extract_and_index.py`, `path_validation.py`, `test_skill_passive_compliance.py`).
- Cross-file references link directly between `rule-audit-measurement-discipline.md` and `rule-audit-parser-forensics.md` (mutual companion documents).
- Both reference documents preserve key architectural and evaluation lessons for LLM output parsing and benchmark measurement integrity: "the defect is selection, not location", the asymmetry of error costs (visible refusals vs silent fabrications), and the requirement to state denominators explicitly.
- Issue tracking cross-references: issue #3988 (arguments against handwriting parsers), issue #3998 (archive gap storing no raw payload), issue #3999 (recovery divergence between live and replay helpers), issue #4031 (`_judge_parse_failure` name asserts an outcome it does not produce), and issue #2050 (vendor portability declaration).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,600 tokens (39,896 bytes assigned source + 18,729 bytes SKILL.md context).
Approximate tokens of output written: ~4,200 tokens (16,461 bytes across 2 inventory cards and 1 unit report).
