---
unit: inv-rjm-80
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-80

## Files assigned
- [x] `.claude/skills/ai-agents-architecture-contract/references/hook-runtime.md`
- [x] `.claude/skills/ai-agents-architecture-contract/references/provenance.md`
- [x] `.claude/skills/ai-agents-architecture-contract/references/weak-points.md`
- [x] `.claude/skills/ai-agents-architecture-contract/SKILL.md`
- [x] `.claude/skills/ai-agents-build-and-env/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-architecture-contract-references-hook-runtime-md.md` (4496 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-architecture-contract-references-provenance-md.md` (4808 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-architecture-contract-references-weak-points-md.md` (4006 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-architecture-contract-skill-md.md` (9127 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-build-and-env-skill-md.md` (6384 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-80.md` (this report)

## Scripts executed
- `.claude/skills/ai-agents-architecture-contract/tests/test_structure_ai_agents_architecture_contract.py` — `cd sources/rjm && uv run pytest .claude/skills/ai-agents-architecture-contract/tests/test_structure_ai_agents_architecture_contract.py` — exit code 0
- `.claude/skills/ai-agents-build-and-env/tests/test_structure_ai_agents_build_and_env.py` — `cd sources/rjm && uv run pytest .claude/skills/ai-agents-build-and-env/tests/test_structure_ai_agents_build_and_env.py` — exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Discovered missing path `tests/build_scripts/test_copilot_dispatcher_artifact.py` cited in both `.claude/skills/ai-agents-architecture-contract/SKILL.md:97` and `.claude/skills/ai-agents-architecture-contract/references/provenance.md:23`. This file does not exist anywhere in `sources/rjm/` (likely deleted during the ADR-097 tool-call hook purge).
- Discovered doc-drift in `.claude/skills/ai-agents-build-and-env/SKILL.md:48`: text cites `.python-version` as `3.14.6` (as of 2026-07-03), but repository `.python-version` is now `3.14.7`.
- Unit `inv-rjm-80` has no entries in `docs/analysis/manifest/rjm-duplicates.md`, hence zero divergence cards required.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,700 tokens (46,901 bytes across 5 files).
- Approximate tokens of output written: ~7,500 tokens (28,821 bytes across 5 cards plus unit report).
