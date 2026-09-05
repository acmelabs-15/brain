---
package: rjm
ledger_id: V25
canonical: .claude/agents/backlog-generator.md
variant: templates/agents/backlog-generator.shared.md
shared_ratio: 0.77
hunks: 4
declared_provenance: none
unit: inv-rjm-64
---

# .claude/agents/backlog-generator.md ↔ templates/agents/backlog-generator.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/backlog-generator.md` is the canonical agent definition configured for Claude Code runtime (using Claude Code frontmatter metadata, local Memory Router search script, and Serena write tools), while `templates/agents/backlog-generator.shared.md` is the shared template declaring VS Code Copilot Chat and GitHub Copilot CLI toolsets and using direct `cloudmcp-manager` memory tools.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/backlog-generator.md:1-10 ↔ templates/agents/backlog-generator.shared.md:1-13
- **class:** harness-substitution
- **canonical says:** "name: backlog-generator" — .claude/agents/backlog-generator.md:2
- **variant says:** "role: support" — templates/agents/backlog-generator.shared.md:2
- **meaning:** Replaces Claude Code frontmatter (`name`, `model: sonnet`, `metadata.role: support`) with multi-platform template frontmatter declaring `role: support`, `tools_vscode`, and `tools_copilot`.

### Hunk 2 — .claude/agents/backlog-generator.md:29-47 ↔ templates/agents/backlog-generator.shared.md:32-32
- **class:** harness-substitution
- **canonical says:** "## Claude Code Tools" — .claude/agents/backlog-generator.md:32
- **variant says:** "" — templates/agents/backlog-generator.shared.md:32
- **meaning:** Omits Claude Code-specific tool list and Memory Router python script invocation block from the generic shared template.

### Hunk 3 — .claude/agents/backlog-generator.md:83-106 ↔ templates/agents/backlog-generator.shared.md:73-99
- **class:** harness-substitution
- **canonical says:** "Use Memory Router for search and Serena tools for persistence (ADR-037):" — .claude/agents/backlog-generator.md:86
- **variant says:** "Use cloudmcp-manager memory tools directly for cross-session context:" — templates/agents/backlog-generator.shared.md:76
- **meaning:** Substitutes Claude Code Memory Router CLI script and Serena MCP tool calls with `cloudmcp-manager` JSON tool calls (`memory-search_nodes`, `memory-add_observations`).

### Hunk 4 — .claude/agents/backlog-generator.md:140-153 ↔ templates/agents/backlog-generator.shared.md:133-147
- **class:** harness-substitution
- **canonical says:** "**As a subagent, you CANNOT delegate**. Return results to orchestrator." — .claude/agents/backlog-generator.md:143
- **variant says:** "**As a subagent, you CANNOT delegate**. Return task list to orchestrator." — templates/agents/backlog-generator.shared.md:136
- **meaning:** Adjusts subagent handoff wording from general results return to explicit task list return with separated decomposition recommendation step.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter (`model`, `metadata.role`) ↔ Copilot/VS Code toolset definitions (`tools_vscode`, `tools_copilot`); Memory Router CLI (`search_memory.py`) ↔ `cloudmcp-manager` MCP memory tools.
- **Defects:** none
