---
unit: inv-rjm-101
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-101

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-code-qualities-assessment-scripts-assess-py.md (15620 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-101.md (3030 bytes)

## Scripts executed
- `.claude/skills/code-qualities-assessment/scripts/assess.py`, `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target .claude/skills/code-qualities-assessment/scripts/assess.py`, exit code 11 (Cohesion score 1.0 below threshold 7)
- `.claude/skills/code-qualities-assessment/scripts/assess.py`, `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target .claude/skills/code-qualities-assessment/scripts/assess.py --format json`, exit code 11
- `.claude/skills/code-qualities-assessment/scripts/assess.py`, `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target nonexistent.py`, exit code 1 (No files to assess)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-100` covers part 1 of `.claude/skills/code-qualities-assessment` (README.md, SKILL.md, references, templates).
- Unit `inv-rjm-101` covers part 2: the orchestrator script `scripts/assess.py`.
- Lifecycle integration: `code-qualities-assessment` is invoked as a mandatory gate across three lifecycle phases in rjm: `/build` (`.claude/commands/build.md:67`), `/test` (`.claude/commands/test.md:43`), and `/review` (`.claude/skills/review/SKILL.md:99`).
- Cross-file documentation drift: SKILL.md claims `--format html` opens an interactive dashboard showing trends and refactoring priorities, but `assess.py:1619` only returns `"HTML format not yet implemented"`. SKILL.md:476 claims a modular design with "Privates (score_*.py): Focus on one quality each, report back", but no `score_*.py` files exist in `scripts/`; all scorers are private functions inlined within `assess.py`. Furthermore, the CLI argument `--use-serena` and the parameter `context` in `assess_file_content` are unutilized in the scoring logic.
- Self-assessment failure: Running `assess.py` against itself in absolute mode exits 11 because its size (1458 LOC, 71 definitions) results in a Cohesion score of 1.0, failing the default threshold of 7.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~15,400 tokens (61,607 bytes for `assess.py` + 15,739 bytes for context `SKILL.md`)
- Approximate tokens of output written: ~4,500 tokens across 1 inventory card and 1 work-unit report
