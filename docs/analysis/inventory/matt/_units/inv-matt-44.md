---
unit: inv-matt-44
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-44

## Files assigned
- [x] sources/matt/skills/misc/git-guardrails-claude-code/agents/openai.yaml
- [x] sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh
- [x] sources/matt/skills/misc/git-guardrails-claude-code/SKILL.md
- [x] sources/matt/skills/misc/migrate-to-shoehorn/agents/openai.yaml
- [x] sources/matt/skills/misc/migrate-to-shoehorn/SKILL.md
- [x] sources/matt/skills/misc/README.md
- [x] sources/matt/skills/misc/scaffold-exercises/agents/openai.yaml
- [x] sources/matt/skills/misc/scaffold-exercises/SKILL.md
- [x] sources/matt/skills/misc/setup-pre-commit/agents/openai.yaml
- [x] sources/matt/skills/misc/setup-pre-commit/SKILL.md
- [x] sources/matt/skills/productivity/grill-me/agents/openai.yaml
- [x] sources/matt/skills/productivity/grill-me/SKILL.md

## Outputs produced
- docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-agents-openai-yaml.md (1585 bytes)
- docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md (4053 bytes)
- docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-skill-md.md (4658 bytes)
- docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-agents-openai-yaml.md (1439 bytes)
- docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-skill-md.md (2759 bytes)
- docs/analysis/inventory/matt/skills-misc-readme-md.md (1704 bytes)
- docs/analysis/inventory/matt/skills-misc-scaffold-exercises-agents-openai-yaml.md (1429 bytes)
- docs/analysis/inventory/matt/skills-misc-scaffold-exercises-skill-md.md (2782 bytes)
- docs/analysis/inventory/matt/skills-misc-setup-pre-commit-agents-openai-yaml.md (1397 bytes)
- docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md (3197 bytes)
- docs/analysis/inventory/matt/skills-productivity-grill-me-agents-openai-yaml.md (1733 bytes)
- docs/analysis/inventory/matt/skills-productivity-grill-me-skill-md.md (2122 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-44.md (this report)

## Scripts executed
- sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, `echo '{"tool_input": {"command": "git push origin main"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, exit code 2
- sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh, `echo '{"tool_input": {"command": "git status"}}' | bash sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/productivity/grill-me/SKILL.md` is an 8-line adapter that calls `grilling` (`Call the Skill tool with "grilling"`). The underlying primitive `skills/productivity/grilling` is part of another unit (inv-matt-45).
- All four skills in `skills/misc/` are unpromoted utility skills linked only from `skills/misc/README.md`. They are excluded from root `README.md` and the plugin manifest.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~3,200 tokens (12,869 bytes across 12 files).
Approximate tokens of output written: ~7,200 tokens (28,858 bytes across 12 cards + work-unit report).
