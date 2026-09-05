---
unit: inv-matt-42
phase: 1
package: matt
session: 003
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
- `docs/analysis/inventory/matt/skills-engineering-wayfinder-agents-openai-yaml.md` (1830 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wayfinder-skill-md.md` (6253 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-agents-openai-yaml.md` (1471 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md` (5479 bytes)
- `docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md` (5539 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-claude-handoff-agents-openai-yaml.md` (1712 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-claude-handoff-skill-md.md` (3022 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-implement-spec-agents-openai-yaml.md` (1770 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-implement-spec-skill-md.md` (3716 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-loop-me-agents-openai-yaml.md` (1660 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-loop-me-skill-md.md` (3558 bytes)
- `docs/analysis/inventory/matt/skills-in-progress-readme-md.md` (2954 bytes)

## Scripts executed
- `skills/engineering/wizard/template.sh`: `bash -n sources/matt/skills/engineering/wizard/template.sh`, exit code 0
- `skills/engineering/wizard/template.sh`: `ENV_FILE=/tmp/test_wizard.env bash -c 'open() { echo "mock open: $1"; }; export -f open; printf "\npk_test_123\nsk_test_456\n" | bash sources/matt/skills/engineering/wizard/template.sh'`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-42 covers two promoted engineering skills (`wayfinder` and `wizard`, including `template.sh`) and four beta/in-progress artifacts (`claude-handoff`, `implement-spec`, `loop-me`, and `skills/in-progress/README.md`).
- Architectural connections:
  - `wayfinder` establishes an issue-tracker-based multi-session planning architecture ("plan, don't do") that decomposes complex initiatives into decision tickets, resolving one per session while maintaining a live frontier of unblocked tickets.
  - `implement-spec` applies a similar task-graph and active-frontier model to code implementation: dispatching concurrent implementer subagents in isolated git worktrees, integrating changes via merger subagents, and completing with `/code-review`.
  - `claude-handoff` introduces direct background agent launching (`claude --bg --name ...`) as an alternative to disk-based handoff transit documents.
  - `loop-me` defines an interview discipline for workflow specifications, introducing concepts such as `Trigger` (event vs. schedule), `Checkpoint`, `Push right`, and `Brief`.
  - `wizard` and `template.sh` separate agent code authoring from human execution, providing an interactive, single-screen bash runtime with hidden secret entry and `.env`/GitHub secret upserts.
- Duplication ledger: None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates or divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,500 tokens (33,305 bytes across 12 files); approximate tokens of output written: ~8,800 tokens (38,964 bytes across 12 cards).
