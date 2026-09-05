---
unit: inv-matt-43
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-43

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/retro/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/retro/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/setup-ts-deep-modules/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/setup-ts-deep-modules/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-beats/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-beats/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-fragments/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-fragments/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-shape/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/writing-shape/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-in-progress-retro-agents-openai-yaml.md` (1632 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-retro-skill-md.md` (3584 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-agents-openai-yaml.md` (1749 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-dependency-cruiser-config-cjs.md` (4698 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-skill-md.md` (6169 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-beats-agents-openai-yaml.md` (1648 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-beats-skill-md.md` (3541 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-fragments-agents-openai-yaml.md` (1636 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-fragments-skill-md.md` (2924 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-shape-agents-openai-yaml.md` (1623 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-writing-shape-skill-md.md` (4139 bytes)

## Scripts executed
- `skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs`: `node -e 'const cfg = require("./sources/matt/skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs"); console.log("rules:", cfg.forbidden.map(r => r.name));'`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-43 covers 5 experimental / in-progress skills in `sources/matt/skills/in-progress/`:
  - `retro`: defines post-session environment retrospectives focusing on steering hygiene, navigation pointers, and low context pressure on implementation agents vs reviewer agents.
  - `setup-ts-deep-modules` (including `dependency-cruiser.config.cjs`): establishes automated architecture boundaries ensuring packages act as deep modules, exposing only root entry points while hiding subfolder internals. Features an adversarial test step ("prove the rules bite"). Cross-referenced by `docs/engineering/codebase-design.md:52`.
  - A three-skill writing pipeline (`writing-fragments`, `writing-beats`, `writing-shape`):
    - `writing-fragments`: pure exploration mode ("grilling session") extracting raw noticings, nuggets, and high-leverage "leading words" delimited by horizontal rules (`---`).
    - `writing-beats`: exploit mode shaping raw material into an interactive choose-your-own-adventure journey of single-move beats governed by concept grounding (prerequisites vs introduced).
    - `writing-shape`: exploit mode shaping raw material paragraph-by-paragraph ("inverted grilling session") with concept grounding and explicit formatting debate (prose vs list, callouts, tables).
  - All 5 skills provide corresponding OpenAI agent configurations in `agents/openai.yaml` specifying `allow_implicit_invocation: false`, aligning with Claude Code's `disable-model-invocation: true`.
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates or divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,400 tokens (29,702 bytes across 11 files); approximate tokens of output written: ~7,500 tokens (33,343 bytes across 11 cards).
