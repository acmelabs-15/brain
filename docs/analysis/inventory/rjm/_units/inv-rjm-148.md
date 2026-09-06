---
unit: inv-rjm-148
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-148

## Files assigned
- [x] `.claude/skills/retrospective/references/diagnosis-and-actions.md` (11208 bytes) — read in full
- [x] `.claude/skills/retrospective/references/frameworks.md` (12954 bytes) — read in full
- [x] `.claude/skills/retrospective/references/learning-template.md` (4397 bytes) — read in full
- [x] `.claude/skills/retrospective/scripts/extract_evidence.py` (15069 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-retrospective-references-diagnosis-and-actions-md.md` (11747 bytes)
- `docs/analysis/inventory/rjm/claude-skills-retrospective-references-frameworks-md.md` (9270 bytes)
- `docs/analysis/inventory/rjm/claude-skills-retrospective-references-learning-template-md.md` (4972 bytes)
- `docs/analysis/inventory/rjm/claude-skills-retrospective-scripts-extract-evidence-py.md` (6984 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-148.md`

## Scripts executed
- `.claude/skills/retrospective/scripts/extract_evidence.py`, `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --help`, exit code: 0
- `.claude/skills/retrospective/scripts/extract_evidence.py`, `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --project-dir sources/rjm`, exit code: 0
- `.claude/skills/retrospective/scripts/extract_evidence.py`, `python3 sources/rjm/.claude/skills/retrospective/scripts/extract_evidence.py --project-dir /nonexistent/path/that/does/not/exist`, exit code: 2
- `.claude/skills/retrospective/tests/test_extract_evidence.py`, `uv run pytest .claude/skills/retrospective/tests/test_extract_evidence.py`, exit code: 0 (24 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit comprises part 1 of `.claude/skills/retrospective/`. The orchestrating skill file `.claude/skills/retrospective/SKILL.md` was read in full for context, and links directly to each of the reference rubrics and scripts inventoried here.
- The reference files (`diagnosis-and-actions.md`, `frameworks.md`, `learning-template.md`) were lifted verbatim from the former canonical agent `.claude/agents/retrospective.md` during skill decomposition (Issue #2079 / ADR-030).
- The memory persistence protocol references Serena tools (`mcp__serena__write_memory`, `mcp__serena__edit_memory`) and Memory Router scripts (`search_memory.py`), which represent the memory layer excluded under METHOD.md §1.2, but the concepts of atomicity scoring and deduplication before storage are valuable lifecycle techniques.

## Blocked or uncertain
none

## Time and size
Source read: 43,628 bytes (~10,900 tokens) across 4 assigned files (plus 11,109 bytes of SKILL.md context).
Output written: 32,973 bytes (~8,240 tokens) across 4 inventory cards and 1 work-unit report.
