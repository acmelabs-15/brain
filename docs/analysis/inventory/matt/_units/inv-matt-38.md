---
unit: inv-matt-38
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-38

## Files assigned
- [x] sources/matt/skills/engineering/codebase-design/agents/openai.yaml
- [x] sources/matt/skills/engineering/codebase-design/DEEPENING.md
- [x] sources/matt/skills/engineering/codebase-design/DESIGN-IT-TWICE.md
- [x] sources/matt/skills/engineering/codebase-design/SKILL.md
- [x] sources/matt/skills/engineering/diagnosing-bugs/agents/openai.yaml
- [x] sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh
- [x] sources/matt/skills/engineering/diagnosing-bugs/SKILL.md
- [x] sources/matt/skills/engineering/domain-modeling/ADR-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/agents/openai.yaml
- [x] sources/matt/skills/engineering/domain-modeling/CONTEXT-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/SKILL.md

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-codebase-design-agents-openai-yaml.md (1633 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-deepening-md.md (3895 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-design-it-twice-md.md (3544 bytes)
- docs/analysis/inventory/matt/skills-engineering-codebase-design-skill-md.md (4239 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-agents-openai-yaml.md (1563 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-scripts-hitl-loop-template-sh.md (3372 bytes)
- docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-skill-md.md (5581 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-adr-format-md.md (2732 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-agents-openai-yaml.md (1569 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-context-format-md.md (2675 bytes)
- docs/analysis/inventory/matt/skills-engineering-domain-modeling-skill-md.md (3372 bytes)

## Scripts executed
- skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh: `printf '\ny\nnone\n' | bash sources/matt/skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed all Phase 1V verification findings: specifically added `interface`, `display_name`, and `short_description` concepts to all `agents/openai.yaml` cards with exact line citations.
- `codebase-design` and `domain-modeling` form the underlying twin vocabulary layers (architectural structure and domain language respectively) referenced by skills in `inv-matt-37` (`ask-matt`), `inv-matt-41` (`improve-codebase-architecture`), `inv-matt-42` (`tdd`), and `inv-matt-43` (`grill-with-docs`, `wayfinder`).
- `diagnosing-bugs` provides the diagnostic counterpart to `triage` (`inv-matt-44`), with `scripts/hitl-loop.template.sh` acting as the human-in-the-loop fallback reproduction driver.

## Blocked or uncertain
none

## Time and size
Source read: 30168 bytes (~7500 tokens across 11 source files). Output written: 34175 bytes (~8500 tokens across 11 cards).
