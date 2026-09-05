---
unit: inv-matt-1
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-1

## Files assigned
- [x] sources/matt/.agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md (1154 bytes, 11 lines)
- [x] sources/matt/.agents/adr/0002-ship-as-a-claude-code-plugin.md (5528 bytes, 42 lines)
- [x] sources/matt/.agents/install-block.md (2780 bytes, 62 lines)
- [x] sources/matt/.agents/invocation.md (3848 bytes, 27 lines)
- [x] sources/matt/.agents/writing-docs.md (12688 bytes, 97 lines)
- [x] sources/matt/.changeset/add-implement-spec-skill.md (450 bytes, 6 lines)
- [x] sources/matt/.changeset/config.json (380 bytes, 16 lines)
- [x] sources/matt/.changeset/domain-modeling-trigger-context-adr.md (437 bytes, 6 lines)
- [x] sources/matt/.changeset/fix-yaml-frontmatter-colons.md (387 bytes, 6 lines)
- [x] sources/matt/.changeset/grilling-add-hr-between-questions.md (169 bytes, 6 lines)
- [x] sources/matt/.changeset/grilling-remove-em-dashes.md (162 bytes, 6 lines)
- [x] sources/matt/.changeset/README.md (512 bytes, 9 lines)

## Outputs produced
- docs/analysis/inventory/matt/agents-adr-0001-explicit-setup-pointer-only-for-hard-dependencies-md.md (3532 bytes)
- docs/analysis/inventory/matt/agents-adr-0002-ship-as-a-claude-code-plugin-md.md (3641 bytes)
- docs/analysis/inventory/matt/agents-install-block-md.md (2510 bytes)
- docs/analysis/inventory/matt/agents-invocation-md.md (2713 bytes)
- docs/analysis/inventory/matt/agents-writing-docs-md.md (3791 bytes)
- docs/analysis/inventory/matt/changeset-add-implement-spec-skill-md.md (2434 bytes)
- docs/analysis/inventory/matt/changeset-config-json.md (1779 bytes)
- docs/analysis/inventory/matt/changeset-domain-modeling-trigger-context-adr-md.md (2307 bytes)
- docs/analysis/inventory/matt/changeset-fix-yaml-frontmatter-colons-md.md (2532 bytes)
- docs/analysis/inventory/matt/changeset-grilling-add-hr-between-questions-md.md (1686 bytes)
- docs/analysis/inventory/matt/changeset-grilling-remove-em-dashes-md.md (1547 bytes)
- docs/analysis/inventory/matt/changeset-readme-md.md (1558 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-1.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Architecture decision records in `.agents/adr/` establish cross-cutting repository standards:
  - `0001-explicit-setup-pointer-only-for-hard-dependencies.md` defines hard vs soft dependencies relative to `/setup-matt-pocock-skills`. It lists `to-tickets`, `to-spec`, `triage` as hard dependencies, and `diagnose` (defect: actual path is `diagnosing-bugs`), `tdd`, `improve-codebase-architecture` as soft dependencies.
  - `0002-ship-as-a-claude-code-plugin.md` defines Claude Code plugin architecture (`.claude-plugin/plugin.json`), explains deferral of Codex plugin support (Codex manifest requires single directory string and strips symlinks on copy), and documents acceptance into Claude Code official marketplace (`claude-plugins-official`). Defect: mentions uncommitted `.codex-plugin/plugin.json` and references non-existent `skills/personal/` directory.
- Documentation standards in `.agents/`:
  - `install-block.md` sets the canonical copyable commands for Claude Code plugin (`claude plugins install mattpocock-skills`) and skills.sh (`npx skills@latest add mattpocock/skills`), emphasizing they are mutually exclusive.
  - `invocation.md` establishes the primary taxonomy between user-invoked (`disable-model-invocation: true`, human-facing description) and model-invoked (default, model-facing triggers), and mandates dependencies be invoked via the Skill tool sequentially.
  - `writing-docs.md` specifies the public docs page standard (`docs/<bucket>/<skill>.md` published to `aihero.dev/skills-<skill>`), requiring defining constraints, AI Coding Dictionary terminology, and forbidding embedded install commands or author attribution.
- Changeset files (`.changeset/*.md`) document package evolution:
  - `add-implement-spec-skill.md` outlines the `implement-spec` skill's execution architecture: parsing tickets as a dependency task graph, executing implementer subagents in background git worktrees across the ready frontier, merging via a merger subagent, and concluding with `/code-review`.
  - `domain-modeling-trigger-context-adr.md` documents trigger tuning for `domain-modeling`.
  - `fix-yaml-frontmatter-colons.md` documents YAML frontmatter parser failures in `skills.sh` caused by unquoted colons.
  - `grilling-add-hr-between-questions.md` and `grilling-remove-em-dashes.md` document UX and formatting updates to `grilling`.
  - `README.md` and `config.json` provide standard Changesets configuration.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~7,100 tokens (28,495 bytes across 12 files).
Approximate output tokens: ~7,500 tokens (30,030 bytes across 12 cards and unit report).
