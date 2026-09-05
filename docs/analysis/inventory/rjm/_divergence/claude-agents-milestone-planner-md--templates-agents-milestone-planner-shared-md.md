---
package: rjm
ledger_id: V1
canonical: .claude/agents/milestone-planner.md
variant: templates/agents/milestone-planner.shared.md
shared_ratio: 0.96
hunks: 1
declared_provenance: none
unit: inv-rjm-68
---

# .claude/agents/milestone-planner.md ↔ templates/agents/milestone-planner.shared.md

## Why two copies exist — required
Harness adaptation and template synchronization. In the rjm repository architecture (ADR-036 / ADR-052), `templates/agents/*.shared.md` serves as the multi-harness shared agent definition specifying cross-platform toolsets, while `.claude/agents/*.md` is the Claude Code specialized agent file adapted to Claude Code's native frontmatter schema.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/milestone-planner.md:1-10 ↔ templates/agents/milestone-planner.shared.md:1-13
- **class:** harness-substitution
- **canonical says:** "name: milestone-planner" — .claude/agents/milestone-planner.md:2
- **variant says:** "role: coordinator" — templates/agents/milestone-planner.shared.md:2
- **meaning:** Maps Claude Code frontmatter fields (`name`, `model: sonnet`, `metadata.role`) to shared template properties (`role: coordinator`, `tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent frontmatter metadata (`metadata.role`) ↔ multi-harness toolset declarations (`tools_vscode`, `tools_copilot`).
- **Defects:** none
