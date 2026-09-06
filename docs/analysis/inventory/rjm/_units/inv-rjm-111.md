---
unit: inv-rjm-111
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-111

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-cva-analysis-references-skill-spec-md.md (11379 bytes)
- docs/analysis/inventory/rjm/claude-skills-cva-analysis-scripts-validate-cva-matrix-py.md (11099 bytes)

## Scripts executed
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py sources/rjm/.claude/skills/cva-analysis/SKILL.md, exit 0
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py sources/rjm/.claude/skills/cva-analysis/references/matrix-building-examples.md, exit 10
- sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py: python3 sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py nonexistent.md, exit 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/cva-analysis` was split across units: inv-rjm-110 covered `SKILL.md` and initial references; inv-rjm-111 covers `references/SKILL_SPEC.md` and `scripts/validate-cva-matrix.py`.
- `SKILL_SPEC.md` references two planned scripts (`scripts/generate-cva-template.py` and `scripts/export-cva-matrix.py`) and one planned reference (`references/pattern-mapping-extended.md`) that do not exist on disk; `SKILL.md:438-442` explicitly confirms they are designed in `SKILL_SPEC.md` but not yet built.
- `validate-cva-matrix.py` parses only the first table in an input Markdown file (`parse_markdown_table` stops scanning at the first non-table line), causing it to fail validation on files with introductory non-CVA tables.

## Blocked or uncertain
none

## Time and size
Approx 12,500 tokens of source read; approx 5,600 tokens of output written.
