---
unit: inv-matt-45
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-45

## Files assigned
- [x] `sources/matt/skills/productivity/grilling/agents/openai.yaml` (113 bytes)
- [x] `sources/matt/skills/productivity/grilling/SKILL.md` (1987 bytes)
- [x] `sources/matt/skills/productivity/handoff/agents/openai.yaml` (141 bytes)
- [x] `sources/matt/skills/productivity/handoff/SKILL.md` (894 bytes)
- [x] `sources/matt/skills/productivity/README.md` (1480 bytes)
- [x] `sources/matt/skills/productivity/teach/agents/openai.yaml` (139 bytes)
- [x] `sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md` (2122 bytes)
- [x] `sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md` (2747 bytes)
- [x] `sources/matt/skills/productivity/teach/MISSION-FORMAT.md` (1540 bytes)
- [x] `sources/matt/skills/productivity/teach/RESOURCES-FORMAT.md` (1924 bytes)
- [x] `sources/matt/skills/productivity/teach/SKILL.md` (9506 bytes)

## Outputs produced
- `docs/analysis/inventory/matt/skills-productivity-grilling-agents-openai-yaml.md` (2079 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grilling-skill-md.md` (3400 bytes)
- `docs/analysis/inventory/matt/skills-productivity-handoff-agents-openai-yaml.md` (2103 bytes)
- `docs/analysis/inventory/matt/skills-productivity-handoff-skill-md.md` (3578 bytes)
- `docs/analysis/inventory/matt/skills-productivity-readme-md.md` (3582 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-agents-openai-yaml.md` (2345 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md` (3390 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-learning-record-format-md.md` (4204 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-mission-format-md.md` (2753 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-resources-format-md.md` (2811 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md` (8055 bytes)
- `docs/analysis/inventory/matt/_units/inv-matt-45.md` (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Skills in `productivity` serve general workflow support across the lifecycle: `grilling` is the reusable interview loop underlying `grill-with-docs`, `triage`, `wayfinder`, and `improve-codebase-architecture`. `handoff` provides session portability for bridging contexts out to prototypes or fresh directory workspaces.
- `teach` is a multi-session pedagogical workspace skill shipping four format specifications: `GLOSSARY-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`, `MISSION-FORMAT.md`, and `RESOURCES-FORMAT.md`. A doc-drift defect was identified where `SKILL.md` references the latter three directly but omits a link to `GLOSSARY-FORMAT.md` despite referencing glossaries.
- Phase 1V omissions for `skills/productivity/teach/agents/openai.yaml` (`Teach`, `guided workspace`, `interface`, `display_name`, `short_description`) and companion `openai.yaml` files have been comprehensively resolved.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,500 tokens across 11 files (22,593 bytes).
Approximate tokens of output written: ~8,500 tokens across 11 inventory cards and unit report.
