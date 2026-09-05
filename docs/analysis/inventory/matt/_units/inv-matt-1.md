---
unit: inv-matt-1
phase: 1
package: matt
session: 001
subagent_returned: complete
---

# Unit inv-matt-1

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.agents/adr/0002-ship-as-a-claude-code-plugin.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.agents/install-block.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.agents/invocation.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.agents/writing-docs.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/add-implement-spec-skill.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/config.json`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/domain-modeling-trigger-context-adr.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/fix-yaml-frontmatter-colons.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/grilling-add-hr-between-questions.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/grilling-remove-em-dashes.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/.changeset/README.md`

## Outputs produced
- `docs/analysis/inventory/matt/agents-adr-0001-explicit-setup-pointer-only-for-hard-dependencies-md.md` (3961 bytes)
- `docs/analysis/inventory/matt/agents-adr-0002-ship-as-a-claude-code-plugin-md.md` (3923 bytes)
- `docs/analysis/inventory/matt/agents-install-block-md.md` (2833 bytes)
- `docs/analysis/inventory/matt/agents-invocation-md.md` (2986 bytes)
- `docs/analysis/inventory/matt/agents-writing-docs-md.md` (4077 bytes)
- `docs/analysis/inventory/matt/changeset-add-implement-spec-skill-md.md` (2788 bytes)
- `docs/analysis/inventory/matt/changeset-config-json.md` (1697 bytes)
- `docs/analysis/inventory/matt/changeset-domain-modeling-trigger-context-adr-md.md` (2153 bytes)
- `docs/analysis/inventory/matt/changeset-fix-yaml-frontmatter-colons-md.md` (2214 bytes)
- `docs/analysis/inventory/matt/changeset-grilling-add-hr-between-questions-md.md` (1707 bytes)
- `docs/analysis/inventory/matt/changeset-grilling-remove-em-dashes-md.md` (1617 bytes)
- `docs/analysis/inventory/matt/changeset-readme-md.md` (1361 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-1 covers 5 core `.agents/` operational and architectural guidance documents and 7 `.changeset/` release tracking files.
- Key architectural findings:
  - `0001-explicit-setup-pointer-only-for-hard-dependencies.md` establishes a hard vs. soft dependency split for setup config, keeping soft-dependency prompts lightweight. Found defect: references `diagnose` (should be `diagnosing-bugs`).
  - `0002-ship-as-a-claude-code-plugin.md` details why Claude Code plugins can cleanly curate promoted skills via an array of directory paths, whereas Codex plugins require a single path string and strip symlinks on installation.
  - `install-block.md` enforces a single canonical install story, ensuring that `docs/` pages omit install commands because the `aihero.dev` web interface renders them dynamically.
  - `invocation.md` formalizes the dual-harness execution model (user-invoked vs. model-invoked) and mandates that inter-skill operative dependencies use explicit Skill tool calls rather than slash commands or relative folder links.
  - `writing-docs.md` defines the standard documentation page anatomy, the requirement for a defining constraint, and explicitly lays out the sequential development chain: `grill-with-docs → to-spec → to-tickets → implement → code-review`.
  - `add-implement-spec-skill.md` records an experimental multi-agent execution pattern using task graphs, background git worktrees along the ready frontier, a merger subagent, and code review.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,100 tokens (28,495 bytes across 12 files); approximate tokens of output written: ~7,800 tokens (31,317 bytes across 12 inventory cards).
