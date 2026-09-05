---
unit: inv-matt-45
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-45

## Files assigned
- [x] sources/matt/skills/productivity/grilling/agents/openai.yaml
- [x] sources/matt/skills/productivity/grilling/SKILL.md
- [x] sources/matt/skills/productivity/handoff/agents/openai.yaml
- [x] sources/matt/skills/productivity/handoff/SKILL.md
- [x] sources/matt/skills/productivity/README.md
- [x] sources/matt/skills/productivity/teach/agents/openai.yaml
- [x] sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md
- [x] sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md
- [x] sources/matt/skills/productivity/teach/MISSION-FORMAT.md
- [x] sources/matt/skills/productivity/teach/RESOURCES-FORMAT.md
- [x] sources/matt/skills/productivity/teach/SKILL.md

## Outputs produced
- docs/analysis/inventory/matt/skills-productivity-grilling-agents-openai-yaml.md (1857 bytes)
- docs/analysis/inventory/matt/skills-productivity-grilling-skill-md.md (2708 bytes)
- docs/analysis/inventory/matt/skills-productivity-handoff-agents-openai-yaml.md (1832 bytes)
- docs/analysis/inventory/matt/skills-productivity-handoff-skill-md.md (2242 bytes)
- docs/analysis/inventory/matt/skills-productivity-readme-md.md (2976 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-agents-openai-yaml.md (1797 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md (2892 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-learning-record-format-md.md (3532 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-mission-format-md.md (2768 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-resources-format-md.md (2531 bytes)
- docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md (5749 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-45.md (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/productivity/grilling/SKILL.md` is the fundamental interview loop and questioning primitive called by user-facing wrappers `grill-me` (inv-matt-44) and `grill-with-docs` (inv-matt-40) and embedded into `wayfinder`, `triage`, and `improve-codebase-architecture`.
- `skills/productivity/teach/SKILL.md` packages multiple pedagogical format schemas in its skill directory (`MISSION-FORMAT.md`, `RESOURCES-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`, `GLOSSARY-FORMAT.md`), but omits linking `GLOSSARY-FORMAT.md` (issue #559) and uses relative `./` syntax ambiguously across skill-bundled templates vs local workspace outputs (issue #377).
- `skills/productivity/handoff/SKILL.md` provides portable state bridging across harnesses, directories, and agents, explicitly directing its markdown output to the OS temporary directory to preserve workspace cleanliness.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,600 tokens (22,593 bytes across 11 files).
Approximate tokens of output written: ~7,800 tokens (30,884 bytes across 11 cards + work-unit report).
