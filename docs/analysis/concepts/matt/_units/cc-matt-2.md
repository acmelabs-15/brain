---
unit: cc-matt-2
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-2

## Files assigned
- [x] .agents/adr/0002-ship-as-a-claude-code-plugin.md
- [x] .agents/install-block.md
- [x] .agents/invocation.md
- [x] .agents/writing-docs.md
- [x] .changeset/add-implement-spec-skill.md
- [x] .changeset/domain-modeling-trigger-context-adr.md
- [x] .changeset/fix-yaml-frontmatter-colons.md
- [x] .changeset/grilling-remove-em-dashes.md
- [x] .changeset/remove-em-dashes-repo-wide.md
- [x] .changeset/skill-tool-invocation-terminology.md
- [x] .changeset/user-invoked-skill-invocation.md
- [x] CHANGELOG.md
- [x] CLAUDE.md
- [x] README.md
- [x] docs/engineering/ask-matt.md
- [x] docs/engineering/wizard.md
- [x] docs/productivity/handoff.md
- [x] docs/productivity/teach.md
- [x] docs/productivity/wait-what.md
- [x] docs/productivity/writing-for-agents.md
- [x] external/ask-matt.md
- [x] external/diagnosing-bugs.md
- [x] external/grill-with-docs.md
- [x] external/grilling.md
- [x] external/handoff.md
- [x] external/implement.md
- [x] external/setup-matt-pocock-skills.md
- [x] external/tdd.md
- [x] external/wait-what.md
- [x] external/wayfinder.md
- [x] external/wizard.md
- [x] external/writing-for-agents.md
- [x] package.json
- [x] scripts/link-skills.sh
- [x] scripts/list-skills.sh
- [x] skills/engineering/README.md
- [x] skills/engineering/grill-with-docs/SKILL.md
- [x] skills/engineering/setup-matt-pocock-skills/SKILL.md
- [x] skills/in-progress/claude-handoff/SKILL.md
- [x] skills/in-progress/retro/SKILL.md
- [x] skills/productivity/README.md
- [x] skills/productivity/grill-me/SKILL.md
- [x] skills/productivity/handoff/SKILL.md
- [x] skills/productivity/writing-for-agents/SKILL-MECHANICS.md
- [x] skills/productivity/writing-for-agents/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/symlinks.md (1012 bytes)
- docs/analysis/concepts/matt/claude-md.md (2971 bytes)
- docs/analysis/concepts/matt/scripts-link-skills-sh.md (1338 bytes)
- docs/analysis/concepts/matt/claude-plugins-official.md (1278 bytes)
- docs/analysis/concepts/matt/claude-plugins-install-mattpocock-skills.md (1081 bytes)
- docs/analysis/concepts/matt/claude-plugin-details-mattpocock-skills.md (1016 bytes)
- docs/analysis/concepts/matt/canonical-install-block.md (847 bytes)
- docs/analysis/concepts/matt/claude-code-s-official-marketplace.md (1048 bytes)
- docs/analysis/concepts/matt/auto-update.md (878 bytes)
- docs/analysis/concepts/matt/plugin-install-mattpocock-skills.md (857 bytes)
- docs/analysis/concepts/matt/npx-skills-latest-add-mattpocock-skills.md (908 bytes)
- docs/analysis/concepts/matt/npx-skills-latest-add-mattpocock-skills-skill-name.md (934 bytes)
- docs/analysis/concepts/matt/npx-skills-latest-update-name.md (848 bytes)
- docs/analysis/concepts/matt/skills-latest.md (799 bytes)
- docs/analysis/concepts/matt/plugin-marketplace-add-mattpocock-skills.md (1061 bytes)
- docs/analysis/concepts/matt/plugin-install-mattpocock-skills-mattpocock.md (1106 bytes)
- docs/analysis/concepts/matt/model-invoked.md (2746 bytes)
- docs/analysis/concepts/matt/user-invoked.md (2851 bytes)
- docs/analysis/concepts/matt/invocation.md (1436 bytes)
- docs/analysis/concepts/matt/skill-md.md (1539 bytes)
- docs/analysis/concepts/matt/disable-model-invocation-true.md (1543 bytes)
- docs/analysis/concepts/matt/policy-allow-implicit-invocation-false.md (1188 bytes)
- docs/analysis/concepts/matt/agents-openai-yaml.md (1030 bytes)
- docs/analysis/concepts/matt/description.md (1317 bytes)
- docs/analysis/concepts/matt/auto-invocation.md (1150 bytes)
- docs/analysis/concepts/matt/interface-display-name.md (933 bytes)
- docs/analysis/concepts/matt/interface-short-description.md (958 bytes)
- docs/analysis/concepts/matt/dependencies-between-them.md (838 bytes)
- docs/analysis/concepts/matt/skill-tool.md (2073 bytes)
- docs/analysis/concepts/matt/skill-invocation.md (1190 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-2.md (5939 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0 (for unit's cards: 0 empty required sections, 0 orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Multiple concepts originate from the installation block specification in `.agents/install-block.md` and ADR 0002 (`.agents/adr/0002-ship-as-a-claude-code-plugin.md`), governing plugin distribution and skills.sh installation commands. These were classified as `kind: name-only` per D-023.
- Invocation concepts (`Model-invoked`, `user-invoked`, `invocation`, `auto-invocation`, `Skill tool`, `skill-invocation`) form a coherent architectural taxonomy defined in `.agents/invocation.md` and detailed in `skills/productivity/writing-for-agents/SKILL-MECHANICS.md`.
- File name concepts (`CLAUDE.md`, `scripts/link-skills.sh`, `SKILL.md`, `agents/openai.yaml`), configuration properties (`disable-model-invocation: true`, `policy.allow_implicit_invocation: false`, `interface.display_name`, `interface.short_description`, `description`), and headings (`canonical install block`, `Dependencies between them`) were cataloged with `kind: name-only` to ensure full mechanical coverage while preserving clean semantic boundaries for Phase 3 concordance.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~80,000 tokens across 45 source files and citing inventory cards; approximate tokens of output written: ~13,000 tokens across 30 concept cards and this unit report.
