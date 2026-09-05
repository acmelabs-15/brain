---
package: rjm
ledger_id: V12
canonical: .claude/agents/janitor.md
variant: templates/agents/janitor.shared.md
shared_ratio: 0.92
hunks: 1
declared_provenance: none
unit: inv-rjm-68
---

# .claude/agents/janitor.md ↔ templates/agents/janitor.shared.md

## Why two copies exist — required
Harness adaptation and platform template specialization. `templates/agents/janitor.shared.md` is the shared multi-harness agent template defining cross-platform toolsets (`tools_vscode`, `tools_copilot`), while `.claude/agents/janitor.md` is the Claude Code agent configuration defining `name: janitor` and `model: sonnet`.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/janitor.md:1-9 ↔ templates/agents/janitor.shared.md:1-17
- **class:** harness-substitution
- **canonical says:** "name: janitor" — .claude/agents/janitor.md:2
- **variant says:** "role: support" — templates/agents/janitor.shared.md:2
- **meaning:** Maps Claude Code frontmatter declarations (`name`, `model: sonnet`) to shared template tool bindings (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent properties ↔ multi-harness toolset definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
