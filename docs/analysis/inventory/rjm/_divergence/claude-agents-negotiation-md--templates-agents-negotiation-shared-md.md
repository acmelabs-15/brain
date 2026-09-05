---
package: rjm
ledger_id: V3
canonical: .claude/agents/negotiation.md
variant: templates/agents/negotiation.shared.md
shared_ratio: 0.95
hunks: 2
declared_provenance: none
unit: inv-rjm-68
---

# .claude/agents/negotiation.md ↔ templates/agents/negotiation.shared.md

## Why two copies exist — required
Harness adaptation and multi-platform template synchronization. `templates/agents/negotiation.shared.md` is the cross-platform source template specifying VS Code and Copilot toolbindings (`tools_vscode`, `tools_copilot`) and model tiering (`model_tier: opus`), while `.claude/agents/negotiation.md` provides Claude Code specific frontmatter (`model: opus`, `metadata.role: support`).

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/negotiation.md:1-10 ↔ templates/agents/negotiation.shared.md:1-16
- **class:** harness-substitution
- **canonical says:** "name: negotiation" — .claude/agents/negotiation.md:2
- **variant says:** "role: support" — templates/agents/negotiation.shared.md:2
- **meaning:** Frontmatter schema adaptation: Claude Code uses `name`, `model: opus`, and `metadata.role: support`, whereas the shared template specifies `role: support`, `model_tier: opus`, and explicit platform toolsets (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/negotiation.md:154-160 ↔ templates/agents/negotiation.shared.md:160-165
- **class:** harness-substitution
- **canonical says:** "---" — .claude/agents/negotiation.md:156
- **variant says:** "---" — templates/agents/negotiation.shared.md:162
- **meaning:** Minor spacing difference: Claude Code agent retains an empty newline between the horizontal rule separator and `ANALYSIS NOTES:`.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter metadata (`metadata.role`) ↔ shared multi-harness toolset definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
