---
package: rjm
ledger_id: V23
canonical: .claude/agents/high-level-advisor.md
variant: templates/agents/high-level-advisor.shared.md
shared_ratio: 0.86
hunks: 6
declared_provenance: "Generated from: templates/agents/[name].shared.md" — CONTRIBUTING.md:474
unit: inv-rjm-66
---

# .claude/agents/high-level-advisor.md ↔ templates/agents/high-level-advisor.shared.md

## Why two copies exist — required
Multi-harness generation and build output declared in repository documentation (`CONTRIBUTING.md:474`). The shared template `templates/agents/high-level-advisor.shared.md` serves as the cross-harness single source of truth for agent behavior and tools in VS Code and Copilot CLI, while `.claude/agents/high-level-advisor.md` contains Claude Code runtime-specific tool declarations, Memory Router CLI invocations, and section ordering.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/high-level-advisor.md:1-10 ↔ templates/agents/high-level-advisor.shared.md:1-13
- **class:** harness-substitution
- **canonical says:** "name: high-level-advisor" — .claude/agents/high-level-advisor.md:2
- **variant says:** "role: strategic" — templates/agents/high-level-advisor.shared.md:2
- **meaning:** Maps Claude Code frontmatter metadata (`name: high-level-advisor`, `model: opus`, `metadata.role: strategic`) to cross-harness template frontmatter declaring tools for VS Code and Copilot CLI (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/high-level-advisor.md:35-41 ↔ templates/agents/high-level-advisor.shared.md:38-44
- **class:** content
- **canonical says:** "**Key Style Requirements for Strategic Advice:**" — .claude/agents/high-level-advisor.md:38
- **variant says:** "**Agent-Specific Requirements:**" — templates/agents/high-level-advisor.shared.md:41
- **meaning:** Section heading wording difference introducing strategic advice requirements and priority frameworks.

### Hunk 3 — .claude/agents/high-level-advisor.md:64-90 ↔ templates/agents/high-level-advisor.shared.md:67-79
- **class:** harness-substitution
- **canonical says:** "Access via Memory Router or direct file read:" — .claude/agents/high-level-advisor.md:69
- **variant says:** "Access via:" — templates/agents/high-level-advisor.shared.md:70
- **meaning:** Replaces Claude Code Memory Router CLI retrieval commands and the dedicated `## Claude Code Tools` section with generic python-style `serena/read_memory` invocation.

### Hunk 4 — .claude/agents/high-level-advisor.md:99-112 ↔ templates/agents/high-level-advisor.shared.md:87-99
- **class:** content
- **canonical says:** "## Key Responsibilities" — .claude/agents/high-level-advisor.md:102
- **variant says:** "Provide ruthless triage, strategic prioritization, and direct verdicts. Unblock decision paralysis by being the person willing to say the hard thing." — templates/agents/high-level-advisor.shared.md:88
- **meaning:** Removes the `## Key Responsibilities` section from preceding the `## Analysis Framework` section in the canonical file (moved to follow it in the variant).

### Hunk 5 — .claude/agents/high-level-advisor.md:132-137 ↔ templates/agents/high-level-advisor.shared.md:112-120
- **class:** content
- **canonical says:** "- Clarity in communication" — .claude/agents/high-level-advisor.md:134
- **variant says:** "## Key Responsibilities" — templates/agents/high-level-advisor.shared.md:115
- **meaning:** Inserts the `## Key Responsibilities` section after `## Analysis Framework` and before `## Behavioral Principles` in the variant template.

### Hunk 6 — .claude/agents/high-level-advisor.md:152-176 ↔ templates/agents/high-level-advisor.shared.md:140-167
- **class:** harness-substitution
- **canonical says:** "Use Memory Router for search and Serena tools for persistence (ADR-037):" — .claude/agents/high-level-advisor.md:155
- **variant says:** "Use cloudmcp-manager memory tools directly for cross-session context:" — templates/agents/high-level-advisor.shared.md:143
- **meaning:** Maps Claude Code ADR-037 Memory Router script and Serena tool persistence to Copilot CLI `cloudmcp-manager` memory search and observation tools.

## Consequences — required
- **Phase 3 concordance rows raised:** Key Responsibilities ordering relative to Analysis Framework; section heading variation (`**Key Style Requirements for Strategic Advice:**` vs `**Agent-Specific Requirements:**`).
- **Phase 5 parity notes:** Claude Code Memory Router CLI and `mcp__serena__write_memory` map to Copilot CLI `mcp__cloudmcp-manager__memory-search_nodes` and `mcp__cloudmcp-manager__memory-add_observations`.
- **Defects:** none
