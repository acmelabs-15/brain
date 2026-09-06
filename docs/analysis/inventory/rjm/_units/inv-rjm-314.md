---
unit: inv-rjm-314
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-314

## Files assigned
- [x] `templates/agents/architect.shared.md`
- [x] `templates/agents/backlog-generator.shared.md`
- [x] `templates/agents/code-reviewer.shared.md`

## Outputs produced
- `docs/analysis/inventory/rjm/templates-agents-architect-shared-md.md` (13898 bytes)
- `docs/analysis/inventory/rjm/templates-agents-backlog-generator-shared-md.md` (6789 bytes)
- `docs/analysis/inventory/rjm/templates-agents-code-reviewer-shared-md.md` (8514 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- These three agent templates form VARIANT pairs in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`) with their corresponding `.claude/agents/*.md` definitions:
  - VARIANT V15: `.claude/agents/code-reviewer.md` ↔ `templates/agents/code-reviewer.shared.md` (89% shared)
  - VARIANT V25: `.claude/agents/backlog-generator.md` ↔ `templates/agents/backlog-generator.shared.md` (77% shared)
  - VARIANT V29: `.claude/agents/architect.md` ↔ `templates/agents/architect.shared.md` (69% shared)
  All three divergence cards already exist in `docs/analysis/inventory/rjm/_divergence/`.
- Platform specialization vs shared template: `templates/agents/*.shared.md` templates define `tools_vscode` and `tools_copilot` frontmatter blocks and cross-platform instructions, whereas `.claude/agents/*.md` defines Claude Code runtime tools (`tools: Read, Grep, Glob, Bash...`) and Claude-specific Serena memory integration.

## Blocked or uncertain
none

## Time and size
Source read: 47,283 bytes (approx. 11,820 tokens). Output written: 29,201 bytes (approx. 7,300 tokens).
