---
unit: inv-matt-45
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-45

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/grilling/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/grilling/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/handoff/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/handoff/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/README.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/MISSION-FORMAT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/RESOURCES-FORMAT.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/productivity/teach/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-productivity-grilling-agents-openai-yaml.md` (1798 bytes)
- `docs/analysis/inventory/matt/skills-productivity-grilling-skill-md.md` (3793 bytes)
- `docs/analysis/inventory/matt/skills-productivity-handoff-agents-openai-yaml.md` (1890 bytes)
- `docs/analysis/inventory/matt/skills-productivity-handoff-skill-md.md` (3097 bytes)
- `docs/analysis/inventory/matt/skills-productivity-readme-md.md` (3032 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-agents-openai-yaml.md` (1804 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md` (3512 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-learning-record-format-md.md` (4377 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-mission-format-md.md` (3470 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-resources-format-md.md` (3286 bytes)
- `docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md` (5948 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-45 covers core general productivity skills (`grilling`, `handoff`, `teach`, and the productivity catalog `README.md`) along with the full specification format templates under `skills/productivity/teach/`.
- Architectural relationships:
  - `grilling` is Matt's primary interview primitive, establishing the `design tree`, `rounds`, `frontier`, and the strict mandate that fact-finding is the agent's job (via sub-agents/tools) while decisions belong to the user. It is reused across engineering skills (`grill-me`, `grill-with-docs`, `triage`, `improve-codebase-architecture`, and `ask-matt`).
  - `handoff` creates portable, static handoff documents saved to the host OS temporary directory, enabling asynchronous context passing between distinct tools, directories, or sessions without polluting repository workspaces.
  - `teach` represents an extensive multi-session learning framework rooted in cognitive learning theory (retrieval practice, desirable difficulty, spacing, storage vs. fluency strength). It splits learning materials into Knowledge, Skills, and Wisdom, and is supported by four explicit format contracts:
    - `MISSION-FORMAT.md` (`MISSION.md` at workspace root as an outcome-based compass)
    - `RESOURCES-FORMAT.md` (`RESOURCES.md` dividing sources into Knowledge and community Wisdom)
    - `LEARNING-RECORD-FORMAT.md` (`./learning-records/NNNN-<slug>.md` modeled as ADRs for learning progress)
    - `GLOSSARY-FORMAT.md` (`GLOSSARY.md` defining canonical domain language and `_Avoid_` aliases)
  - Defect noted: `teach/SKILL.md` fails to link to `GLOSSARY-FORMAT.md` despite discussing glossaries in line 134-136, leaving `GLOSSARY-FORMAT.md` an orphan within the skill package (corroborated by `docs/productivity/teach.md:38` and issue #559).
  - Invocation policies: `skills/productivity/README.md` documents dual-harness policy symmetry: `disable-model-invocation: true` in Claude Code frontmatter corresponds to `policy.allow_implicit_invocation: false` in `agents/openai.yaml` (observed in `handoff` and `teach`, while omitted in model-invoked `grilling`).
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,200 tokens (22,593 bytes across 11 files); approximate tokens of output written: ~8,500 tokens (36,007 bytes across 11 cards).
