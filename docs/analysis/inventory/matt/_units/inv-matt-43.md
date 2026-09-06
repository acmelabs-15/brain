---
unit: inv-matt-43
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-43

## Files assigned
- [x] `sources/matt/skills/in-progress/retro/agents/openai.yaml`
- [x] `sources/matt/skills/in-progress/retro/SKILL.md`
- [x] `sources/matt/skills/in-progress/setup-ts-deep-modules/agents/openai.yaml`
- [x] `sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`
- [x] `sources/matt/skills/in-progress/setup-ts-deep-modules/SKILL.md`
- [x] `sources/matt/skills/in-progress/writing-beats/agents/openai.yaml`
- [x] `sources/matt/skills/in-progress/writing-beats/SKILL.md`
- [x] `sources/matt/skills/in-progress/writing-fragments/agents/openai.yaml`
- [x] `sources/matt/skills/in-progress/writing-fragments/SKILL.md`
- [x] `sources/matt/skills/in-progress/writing-shape/agents/openai.yaml`
- [x] `sources/matt/skills/in-progress/writing-shape/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-in-progress-retro-agents-openai-yaml.md` — 1883 bytes
- `docs/analysis/inventory/matt/skills-in-progress-retro-skill-md.md` — 3929 bytes
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-agents-openai-yaml.md` — 2118 bytes
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-dependency-cruiser-config-cjs.md` — 5104 bytes
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-skill-md.md` — 5709 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-beats-agents-openai-yaml.md` — 1902 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-beats-skill-md.md` — 3459 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-fragments-agents-openai-yaml.md` — 1916 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-fragments-skill-md.md` — 3008 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-shape-agents-openai-yaml.md` — 1888 bytes
- `docs/analysis/inventory/matt/skills-in-progress-writing-shape-skill-md.md` — 4163 bytes

## Scripts executed
- `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`: `node sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`, exit code: 0
- `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`: `bun sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`, exit code: 0
- `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`: `node -e "const cfg = require('./sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs'); console.log(Object.keys(cfg));"`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/engineering/codebase-design.md:52` states that `setup-ts-deep-modules` "has no lint rule shipped with it", but this is factually inaccurate: `setup-ts-deep-modules` ships `dependency-cruiser.config.cjs` containing four forbidden rules enforcing package entry point encapsulation.
- `skills/in-progress/retro/SKILL.md:11` references and invokes `writing-for-agents`, connecting `retro` to the authoring style guide of package `matt`.
- All companion `agents/openai.yaml` files in this unit address the Phase 1V verification findings by recording `interface`, `display_name`, `short_description`, `policy`, and `allow_implicit_invocation` as named concepts, plus `deep TypeScript modules` in `setup-ts-deep-modules`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,200 tokens (29,702 bytes across 11 files).
Approximate tokens of output written: ~8,800 tokens (35,079 bytes across 11 inventory cards + unit report).
