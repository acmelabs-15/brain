---
unit: inv-matt-46
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-46

## Files assigned
- [x] sources/matt/skills/productivity/to-questionnaire/agents/openai.yaml
- [x] sources/matt/skills/productivity/to-questionnaire/SKILL.md
- [x] sources/matt/skills/productivity/wait-what/agents/openai.yaml
- [x] sources/matt/skills/productivity/wait-what/SKILL.md
- [x] sources/matt/skills/productivity/writing-for-agents/agents/openai.yaml
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL-MECHANICS.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md

## Outputs produced
- docs/analysis/inventory/matt/skills-productivity-to-questionnaire-agents-openai-yaml.md (2149 bytes)
- docs/analysis/inventory/matt/skills-productivity-to-questionnaire-skill-md.md (3890 bytes)
- docs/analysis/inventory/matt/skills-productivity-wait-what-agents-openai-yaml.md (1933 bytes)
- docs/analysis/inventory/matt/skills-productivity-wait-what-skill-md.md (2713 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-agents-openai-yaml.md (1899 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-mechanics-md.md (4530 bytes)
- docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-md.md (6698 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `writing-for-agents` is the foundational intellectual document of the `matt` package, formulating the authoring criteria (completion criteria, leading words, context pointers, information hierarchy, progressive disclosure, no-op pruning) that shape the rest of the skills.
- `SKILL-MECHANICS.md` isolates the invocation mechanics (`model-invoked` vs `user-invoked`, router skills) from general agent writing principles.
- `wait-what` references `CONTEXT-MAP.md` which does not exist in the repository (recorded as a defect).
- `agents/openai.yaml` files provide dual-harness registration for Codex environments, with `writing-for-agents` dropping `allow_implicit_invocation: false` to allow autonomous model invocation while `to-questionnaire` and `wait-what` restrict invocation to explicit user calls.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~4,200 tokens (17,239 bytes). Approximate tokens of output written: ~6,000 tokens (23,812 bytes across 7 cards).
