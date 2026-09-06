---
unit: inv-matt-42
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-42

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/wayfinder/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/wayfinder/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/wizard/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/wizard/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/wizard/template.sh`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/claude-handoff/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/claude-handoff/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/implement-spec/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/implement-spec/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/loop-me/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/loop-me/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/in-progress/README.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-wayfinder-agents-openai-yaml.md` (2105 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wayfinder-skill-md.md` (6808 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-agents-openai-yaml.md` (1787 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md` (4234 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md` (5782 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-claude-handoff-agents-openai-yaml.md` (2020 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-claude-handoff-skill-md.md` (3489 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-implement-spec-agents-openai-yaml.md` (1965 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-implement-spec-skill-md.md` (3696 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-loop-me-agents-openai-yaml.md` (1868 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-loop-me-skill-md.md` (3420 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-readme-md.md` (2956 bytes)

## Scripts executed
- `skills/engineering/wizard/template.sh`: `ENV_FILE=/tmp/test-wizard.env bash sources/matt/skills/engineering/wizard/template.sh < /dev/null`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-42 inventories 12 files spanning engineering skills (`wayfinder`, `wizard`), companion Codex metadata configs (`openai.yaml`), and the experimental incubation suite in `skills/in-progress/` (`claude-handoff`, `implement-spec`, `loop-me`, and `README.md`).
- Addressed all Phase 1V verification findings from `docs/analysis/inventory/matt/_verification.md` and DISPATCH.md:
  - For all `openai.yaml` cards (`wayfinder`, `wizard`, `claude-handoff`, `implement-spec`, `loop-me`), captured `interface`, `display_name`, `short_description`, and `policy`/`allow_implicit_invocation` in `Concepts named`.
  - In `skills/engineering/wizard/SKILL.md`, captured helper functions `say`, `step`, `ask`, `pause` (line 35), `hidden secret entry` (line 10), and `WSL` (line 10).
  - In `skills/engineering/wizard/template.sh`, captured helper functions `note` (line 62), `warn` (line 63), and browser utilities `wslview`, `explorer.exe`, `xdg-open`, `open` (lines 69-72).
  - Recorded live execution of `skills/engineering/wizard/template.sh` with actual command, stdout, and exit code 0.
- None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (0 duplicates, no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,800 tokens (33,305 bytes across 12 source files); approximate tokens of output written: ~8,900 tokens (40,130 bytes across 12 inventory cards + ~1,800 bytes unit report).
