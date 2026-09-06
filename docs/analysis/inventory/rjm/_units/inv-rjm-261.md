---
unit: inv-rjm-261
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-261

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/skill_description_budget.py (8517 bytes, 256 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/skill_registry.py (13095 bytes, 453 lines)
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/skillbook.py (24879 bytes, 675 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-skill-description-budget-py.md (8045 bytes)
- docs/analysis/inventory/rjm/scripts-skill-registry-py.md (7260 bytes)
- docs/analysis/inventory/rjm/scripts-skillbook-py.md (9994 bytes)

## Scripts executed
- scripts/skill_description_budget.py: `uv run python ./scripts/skill_description_budget.py` (exit code: 0)
- scripts/skill_description_budget.py: `uv run python ./scripts/skill_description_budget.py --max-total-tokens 8000` (exit code: 1)
- scripts/skill_description_budget.py: `uv run python ./scripts/skill_description_budget.py --root /nonexistent` (exit code: 2)
- scripts/skill_registry.py: `uv run python ./scripts/skill_registry.py --format markdown` (exit code: 0)
- scripts/skill_registry.py: `uv run python ./scripts/skill_registry.py --skills-dir /nonexistent` (exit code: 2)
- scripts/skillbook.py: `uv run python ./scripts/skillbook.py status` (exit code: 0)
- scripts/skillbook.py: `uv run python ./scripts/skillbook.py select implementer build` (exit code: 0)
- scripts/skillbook.py: `uv run python ./scripts/skillbook.py tension list` (exit code: 0)
- scripts/skillbook.py: `uv run python ./scripts/skillbook.py confirm pol-nonexistent --eval eval-1` (exit code: 1)
- scripts/skillbook.py: `uv run python ./scripts/skillbook.py --skillbook-dir /nonexistent status` (exit code: 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/skill_description_budget.py` is invoked by `src/copilot-cli/skills/ai-agents-diagnostics-toolkit/SKILL.md` and referenced in its instrument guides. It addresses Issue #2794 to track standing context cost of skill descriptions loaded into LLM context prior to prompt generation.
- `scripts/skill_registry.py` provides skill cataloging and stale skill detection for session start / reflection integration (Issue #1266). It uses `validate_safe_path` from `scripts/utils/path_validation.py`.
- `scripts/skillbook.py` implements the core policy registry CLI for `.agents/skillbook/` (`policies.json`, `tensions.json`, `workflows.json`), supporting evidence weighting, non-demoting promotion (`hypothesis` -> `observed` -> `validated`), status transitions (`active`, `questioning`, `retired`), and contextual tension resolution. It is imported by `scripts/validation/validate_skillbook.py` (`evidence_weight`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,620 tokens (46,491 bytes)
- Approximate tokens of output written: ~6,300 tokens (~25,300 bytes across 3 cards)
