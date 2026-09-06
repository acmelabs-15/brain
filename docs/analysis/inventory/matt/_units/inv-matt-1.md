---
unit: inv-matt-1
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-1

## Files assigned
- [x] .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md
- [x] .agents/adr/0002-ship-as-a-claude-code-plugin.md
- [x] .agents/install-block.md
- [x] .agents/invocation.md
- [x] .agents/writing-docs.md
- [x] .changeset/add-implement-spec-skill.md
- [x] .changeset/config.json
- [x] .changeset/domain-modeling-trigger-context-adr.md
- [x] .changeset/fix-yaml-frontmatter-colons.md
- [x] .changeset/grilling-add-hr-between-questions.md
- [x] .changeset/grilling-remove-em-dashes.md
- [x] .changeset/README.md

## Outputs produced
- docs/analysis/inventory/matt/agents-adr-0001-explicit-setup-pointer-only-for-hard-dependencies-md.md (4310 bytes)
- docs/analysis/inventory/matt/agents-adr-0002-ship-as-a-claude-code-plugin-md.md (4153 bytes)
- docs/analysis/inventory/matt/agents-install-block-md.md (3383 bytes)
- docs/analysis/inventory/matt/agents-invocation-md.md (3709 bytes)
- docs/analysis/inventory/matt/agents-writing-docs-md.md (5283 bytes)
- docs/analysis/inventory/matt/changeset-add-implement-spec-skill-md.md (2888 bytes)
- docs/analysis/inventory/matt/changeset-config-json.md (1908 bytes)
- docs/analysis/inventory/matt/changeset-domain-modeling-trigger-context-adr-md.md (2227 bytes)
- docs/analysis/inventory/matt/changeset-fix-yaml-frontmatter-colons-md.md (2850 bytes)
- docs/analysis/inventory/matt/changeset-grilling-add-hr-between-questions-md.md (1492 bytes)
- docs/analysis/inventory/matt/changeset-grilling-remove-em-dashes-md.md (1577 bytes)
- docs/analysis/inventory/matt/changeset-readme-md.md (1542 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Addressed all Phase 1V verification findings for assigned files:
  - In `.changeset/add-implement-spec-skill.md`, captured `spec` (line 5), `tickets` (line 5), `PR` (line 5), and `code-review` (line 5).
  - In `.changeset/fix-yaml-frontmatter-colons.md`, captured all 6 affected skills in prose (`to-spec`, `code-review`, `setup-matt-pocock-skills`, `writing-fragments`, `writing-shape`, `wait-what`), `description` frontmatter key, and `npx skills` (line 5).
  - In `.agents/invocation.md`, fully captured model-invoked vs user-invoked taxonomy, Skill tool invocation patterns, and concepts `harness-neutral` and `trigger syntax` (line 16).
- `.changeset/skill-tool-invocation-terminology.md` is owned by another unit, but related conventions align with `.agents/invocation.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: 6500 tokens (28495 bytes across 12 files). Approximate tokens of output written: 8500 tokens across 12 cards and unit report.
