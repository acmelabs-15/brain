---
unit: inv-matt-37
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-37

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/README.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/link-skills.sh`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/list-skills.sh`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/sync-plugin-version.mjs`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/deprecated/README.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/ask-matt/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/ask-matt/PHASE-BOUNDARIES.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/ask-matt/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/code-review/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/code-review/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/readme-md.md` (5158 bytes)
- `docs/analysis/inventory/matt/scripts-link-skills-sh.md` (2919 bytes)
- `docs/analysis/inventory/matt/scripts-list-skills-sh.md` (2318 bytes)
- `docs/analysis/inventory/matt/scripts-sync-plugin-version-mjs.md` (3005 bytes)
- `docs/analysis/inventory/matt/skills-deprecated-readme-md.md` (1683 bytes)
- `docs/analysis/inventory/matt/skills-engineering-ask-matt-agents-openai-yaml.md` (1832 bytes)
- `docs/analysis/inventory/matt/skills-engineering-ask-matt-phase-boundaries-md.md` (3687 bytes)
- `docs/analysis/inventory/matt/skills-engineering-ask-matt-skill-md.md` (5388 bytes)
- `docs/analysis/inventory/matt/skills-engineering-code-review-agents-openai-yaml.md` (1791 bytes)
- `docs/analysis/inventory/matt/skills-engineering-code-review-skill-md.md` (5832 bytes)

## Scripts executed
- `scripts/link-skills.sh`, `TMP_HOME=$(mktemp -d); HOME="$TMP_HOME" bash /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/link-skills.sh`, exit code: 0
- `scripts/list-skills.sh`, `bash /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/scripts/list-skills.sh`, exit code: 0
- `scripts/sync-plugin-version.mjs`, `node sources/matt/scripts/sync-plugin-version.mjs --check`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-37 encompasses root documentation (`README.md`), repository management scripts (`link-skills.sh`, `list-skills.sh`, `sync-plugin-version.mjs`), deprecation policy (`skills/deprecated/README.md`), the core routing skill (`ask-matt` with `openai.yaml`, `PHASE-BOUNDARIES.md`, and `SKILL.md`), and the code review quality gate (`code-review` with `openai.yaml` and `SKILL.md`).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no duplication ledger entries; no divergence cards required).
- Core architectural findings:
  - `README.md` and `ask-matt` formalize the canonical development lifecycle flow: `/grill-with-docs` → `/to-spec` → `/to-tickets` → `/implement` (driving `/tdd` and `/code-review`).
  - `PHASE-BOUNDARIES.md` introduces an ordered 5-option decision tree for managing LLM context (Continue, `/clear`, `/handoff`, Subagent, `/compact`), demonstrating why lossless primary sources should be preserved and warning that `/compact` flattens reasoning context.
  - `code-review` specifies a two-axis review architecture (Standards + Spec) running in parallel sub-agents to avoid cognitive bias and context pollution, using Fowler's 12 code smells as an autonomous heuristic baseline.
  - Identified defects in `code-review`: sub-agent prompts lack delegation guards allowing runaway recursive sub-agent spawns (documented in `docs/engineering/code-review.md:54-56`), diff checking ignores uncommitted changes when invoked before committing in `/implement` (documented in `docs/engineering/implement.md:63-65`), and naming collision with Claude Code's built-in `/code-review`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,400 tokens (41,651 bytes across 10 files); approximate tokens of output written: ~8,400 tokens (33,613 bytes across 10 cards).
