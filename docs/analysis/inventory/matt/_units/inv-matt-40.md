---
unit: inv-matt-40
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-40

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/research/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/research/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/resolving-merge-conflicts/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/resolving-merge-conflicts/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/setup-matt-pocock-skills/triage-labels.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-research-agents-openai-yaml.md` (1940 bytes)
- `docs/analysis/inventory/matt/skills-engineering-research-skill-md.md` (3159 bytes)
- `docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-agents-openai-yaml.md` (2101 bytes)
- `docs/analysis/inventory/matt/skills-engineering-resolving-merge-conflicts-skill-md.md` (2694 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-agents-openai-yaml.md` (2392 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-domain-md.md` (3912 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-github-md.md` (4092 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-gitlab-md.md` (4050 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-local-md.md` (3725 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-skill-md.md` (5863 bytes)
- `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-triage-labels-md.md` (2208 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-40 covers three engineering capabilities:
  1. `research` (with companion `agents/openai.yaml`): Background investigation skill delegating reading legwork to subagents against high-trust primary sources. Documented open issue #530 regarding unrestricted subagent recursion and absence of stopping bounds.
  2. `resolving-merge-conflicts` (with companion `agents/openai.yaml`): Disciplined 5-step git conflict resolution loop tracing intent to commit messages, PRs, and tickets, forbidding `--abort`, and requiring automated project verification checks prior to committing.
  3. `setup-matt-pocock-skills` (with companion `agents/openai.yaml` and seed templates `domain.md`, `issue-tracker-github.md`, `issue-tracker-gitlab.md`, `issue-tracker-local.md`, `triage-labels.md`): Foundational repo setup configuring issue tracking, triage vocabularies, and domain documentation layouts (`CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`) referenced as prerequisites across almost all other engineering skills (`to-spec`, `to-tickets`, `triage`, `wayfinder`, `code-review`).
- Addressed all Phase 1V verification findings:
  - Added named concepts (`interface`, `display_name`, `short_description`, `policy`, `allow_implicit_invocation`) to all companion `agents/openai.yaml` cards.
  - Documented missing repository path defect for `docs/agents/domain.md` (referenced in documentation such as `docs/engineering/domain-modeling.md:50` but not present in `sources/matt/` root, as `domain.md` acts as an un-instantiated template).
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no duplication ledger entries; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~5,300 tokens (21,340 bytes across 11 files); approximate tokens of output written: ~9,000 tokens (36,136 bytes across 11 cards).
