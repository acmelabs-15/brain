---
unit: inv-rjm-78
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-78

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/adr-review/scripts/detect_adr_changes.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/adr-review/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-adr-review-scripts-detect-adr-changes-py.md (10734 bytes)
- docs/analysis/inventory/rjm/claude-skills-adr-review-skill-md.md (12921 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-78.md (3134 bytes)

## Scripts executed
- `.claude/skills/adr-review/scripts/detect_adr_changes.py`, `uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py`, exit code 0
- `.claude/skills/adr-review/scripts/detect_adr_changes.py`, `uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --include-untracked`, exit code 0
- `.claude/skills/adr-review/scripts/detect_adr_changes.py`, `uv run python scripts/detect_adr_changes.py --base-path ../../..` (from skill dir), exit code 0
- `.claude/skills/adr-review/scripts/detect_adr_changes.py`, `python3 .claude/skills/adr-review/scripts/detect_adr_changes.py --base-path .`, exit code 1 (ModuleNotFoundError: No module named 'yaml')
- `.claude/skills/adr-review/scripts/detect_adr_changes.py`, `uv run python .claude/skills/adr-review/scripts/detect_adr_changes.py --since-commit invalid_sha`, exit code 3 (git diff fatal: bad revision)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-77` covers part 1 of `.claude/skills/adr-review` (CLAUDE.md, scripts/CLAUDE.md, and the 6 reference documents in `references/`: `agent-prompts.md`, `artifacts.md`, `debate-protocol.md`, `deletion-workflow.md`, `issue-resolution.md`, `zimmermann-review-guidance.md`).
- Unit `inv-rjm-78` covers part 2: the detection script `scripts/detect_adr_changes.py` and the orchestrator specification `SKILL.md`.
- Cross-references: The multi-agent debate protocol coordinates 6 agent roles (`architect`, `critic`, `independent-thinker`, `security`, `analyst`, `high-level-advisor`) and enforces the ADR-073 status governance contract (`.agents/architecture/ADR-073-adr-lifecycle-frontmatter.md`), which requires an accepted status transition to be bound to a debate-log artifact at `.agents/critique/ADR-NNN-debate-log.md`.
- Invocation origins: Invoked as a mandatory gate by `.claude/agents/architect.md:641` before routing to planning or implementation agents, and referenced in `AGENTS.md:45`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~8,074 tokens (32,297 bytes across both assigned files)
- Approximate tokens of output written: ~6,200 tokens across 2 inventory cards and 1 unit report
