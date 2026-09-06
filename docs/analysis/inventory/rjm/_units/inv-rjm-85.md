---
unit: inv-rjm-85
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-85

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-generation-and-release/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-portability-campaign/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-ai-agents-generation-and-release-skill-md.md (9632 bytes)
- docs/analysis/inventory/rjm/claude-skills-ai-agents-portability-campaign-skill-md.md (10317 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-85.md (1903 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/ai-agents-generation-and-release` operates the asymmetric generation pipeline (`build/scripts/build_all.py`, `build/generate_agents.py`, `scripts/sync_plugin_lib.py`) that generates derived trees in `src/copilot-cli/`, `src/vs-code-agents/`, and `.github/instructions/`. It establishes that `.claude/` is canonical and strictly input-only (REQ-003-010).
- `.claude/skills/ai-agents-portability-campaign` coordinates cross-harness hook changes between Claude Code and Copilot CLI, relying on `agent-harness-reference` for facts and delegating mirror regeneration to `ai-agents-generation-and-release`.
- Identified a missing test file in `.claude/skills/ai-agents-portability-campaign/SKILL.md:200`: `tests/build_scripts/test_copilot_dispatcher_artifact.py` does not exist in the repository.

## Blocked or uncertain
none

## Time and size
Approx 8,650 tokens of source read; approx 4,500 tokens of output written.
