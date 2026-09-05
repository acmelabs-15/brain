---
package: rjm
ledger_id: V21
canonical: .claude/agents/retrospective.md
variant: templates/agents/retrospective.shared.md
shared_ratio: 0.86
hunks: 10
declared_provenance: none
unit: inv-rjm-71
---

# .claude/agents/retrospective.md ↔ templates/agents/retrospective.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/retrospective.md` contains Claude Code-specific frontmatter (`model: sonnet`, `name: retrospective`), explicit tool bindings (Read/Grep/Glob, Bash, TodoWrite), ADR-037 Memory Router python search commands, Serena filesystem-based memory tool calls (`mcp__serena__write_memory`, `mcp__serena__edit_memory`), text-based flow representations, and a mandatory structured handoff output block specifying exact files for `git add`. In contrast, `templates/agents/retrospective.shared.md` is the cross-platform shared template declaring toolsets for VS Code Copilot Chat and GitHub Copilot CLI (`tools_vscode`, `tools_copilot`), Mermaid flowchart diagrams, updated traceability validation commands, and direct CloudMCP entity and relation graph persistence tool calls (`mcp__cloudmcp-manager__memory-create_entities`, `mcp__cloudmcp-manager__memory-create_relations`, `mcp__cloudmcp-manager__memory-add_observations`, `mcp__cloudmcp-manager__memory-search_nodes`).

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/retrospective.md:1-10 ↔ templates/agents/retrospective.shared.md:1-16
- **class:** harness-substitution
- **canonical says:** "name: retrospective" — .claude/agents/retrospective.md:2
- **variant says:** "role: support" — templates/agents/retrospective.shared.md:2
- **meaning:** Replaces Claude Code agent frontmatter metadata (`name: retrospective`, `model: sonnet`, nested `metadata.role: support`) with cross-platform Copilot toolset definitions (`role: support`, `tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/retrospective.md:23-29 ↔ templates/agents/retrospective.shared.md:29-35
- **class:** content
- **canonical says:** "**Agent-Specific Requirements**:" — .claude/agents/retrospective.md:26
- **variant says:** "**Agent-Specific Requirements:**" — templates/agents/retrospective.shared.md:32
- **meaning:** Minor punctuation and markdown formatting edit moving the colon inside the bold formatting delimiters.

### Hunk 3 — .claude/agents/retrospective.md:40-59 ↔ templates/agents/retrospective.shared.md:46-51
- **class:** harness-substitution
- **canonical says:** "## Claude Code Tools" — .claude/agents/retrospective.md:43
- **variant says:** "## Core Mission" — templates/agents/retrospective.shared.md:49
- **meaning:** Removes the Claude Code-specific tools section (listing Read/Grep/Glob, Bash, Memory Router script, Serena write tools, and TodoWrite) from the platform-agnostic shared template.

### Hunk 4 — .claude/agents/retrospective.md:70-122 ↔ templates/agents/retrospective.shared.md:62-118
- **class:** harness-substitution
- **canonical says:** "Phase 0: Data Gathering" — .claude/agents/retrospective.md:74
- **variant says:** "flowchart TB" — templates/agents/retrospective.shared.md:66
- **meaning:** Replaces a plain-text ASCII hierarchical tree diagram of the seven retrospective phases with a Mermaid flowchart diagram.

### Hunk 5 — .claude/agents/retrospective.md:496-502 ↔ templates/agents/retrospective.shared.md:492-498
- **class:** content
- **canonical says:** "uv run --frozen python scripts/traceability/show_traceability_graph.py --show-orphans" — .claude/agents/retrospective.md:499
- **variant says:** "uv run --frozen python scripts/validation/traceability.py --strict" — templates/agents/retrospective.shared.md:495
- **meaning:** Migrates the spec-layer traceability health validation command from the legacy inspection script `scripts/traceability/show_traceability_graph.py --show-orphans` to the newer validation runner `scripts/validation/traceability.py --strict`.

### Hunk 6 — .claude/agents/retrospective.md:597-618 ↔ templates/agents/retrospective.shared.md:593-614
- **class:** content
- **canonical says:** "| [Finding] | [Skill-XXX] | [N+1] |" — .claude/agents/retrospective.md:600
- **variant says:** "| [Finding] | {domain}-{description} | [N+1] |" — templates/agents/retrospective.shared.md:596
- **meaning:** Updates skill placeholder naming across the Action Classification tables from bracketed identifiers (`[Skill-XXX]`, `[Skill-Category-NNN]`) to the ADR-017 domain-hyphenated convention (`{domain}-{description}`).

### Hunk 7 — .claude/agents/retrospective.md:834-847 ↔ templates/agents/retrospective.shared.md:830-868
- **class:** harness-substitution
- **canonical says:** "mcp__serena__write_memory" — .claude/agents/retrospective.md:840
- **variant says:** "mcp__cloudmcp-manager__memory-create_entities" — templates/agents/retrospective.shared.md:836
- **meaning:** Replaces Serena file-based memory creation (`mcp__serena__write_memory`) with CloudMCP manager entity and relation graph operations (`mcp__cloudmcp-manager__memory-create_entities`, `mcp__cloudmcp-manager__memory-create_relations`).

### Hunk 8 — .claude/agents/retrospective.md:904-911 ↔ templates/agents/retrospective.shared.md:925-933
- **class:** harness-substitution
- **canonical says:** "uv run python .claude/skills/memory/scripts/search_memory.py --query \"rootcause {Category} {Keywords from description}\"" — .claude/agents/retrospective.md:908
- **variant says:** "mcp__cloudmcp-manager__memory-search_nodes" — templates/agents/retrospective.shared.md:929
- **meaning:** Replaces the Python CLI Memory Router deduplication query with the CloudMCP manager graph node search tool (`mcp__cloudmcp-manager__memory-search_nodes`).

### Hunk 9 — .claude/agents/retrospective.md:1315-1358 ↔ templates/agents/retrospective.shared.md:1337-1404
- **class:** harness-substitution
- **canonical says:** "Use Memory Router for search and Serena tools for persistence (ADR-037):" — .claude/agents/retrospective.md:1318
- **variant says:** "Use cloudmcp-manager memory tools directly for all persistence operations." — templates/agents/retrospective.shared.md:1340
- **meaning:** Replaces ADR-037 Memory Router and Serena markdown file creation/editing tools with direct CloudMCP JSON entity/relation/observation tools, substitutes a Mermaid diagram for the ASCII continuous improvement loop, and moves the Execution Mindset block before the Handoff Protocol.

### Hunk 10 — .claude/agents/retrospective.md:1366-1478 ↔ templates/agents/retrospective.shared.md:1412-1421
- **class:** harness-substitution
- **canonical says:** "## Structured Handoff Output (MANDATORY)" — .claude/agents/retrospective.md:1379
- **variant says:** "**Note**: Use cloudmcp-manager memory tools directly to persist skills, relations, and observations - no delegation to memory agent required." — templates/agents/retrospective.shared.md:1421
- **meaning:** Removes Claude Code-specific mandatory Structured Handoff Output markdown tables, git add persistence tracking, and Serena file update tables in favor of a concise note directing persistence via cloudmcp-manager tools.

## Consequences — required
- **Phase 3 concordance rows raised:**
  - Hunk 5: Traceability validation script selection (`scripts/traceability/show_traceability_graph.py --show-orphans` vs `scripts/validation/traceability.py --strict`).
  - Hunk 6: Skill candidate naming schema in Action Classification (`[Skill-XXX]` / `[Skill-Category-NNN]` vs `{domain}-{description}`).
- **Phase 5 parity notes:**
  - Claude Code frontmatter metadata (`name: retrospective`, `model: sonnet`) ↔ VS Code / Copilot CLI toolset bindings (`role: support`, `tools_vscode`, `tools_copilot`).
  - Claude Code local tools (Read/Grep/Glob, Bash, TodoWrite) ↔ platform-agnostic tools.
  - Text-based ASCII process diagrams ↔ Mermaid flowchart visualizations.
  - Serena file-based markdown memory persistence (`.serena/memories/`) ↔ CloudMCP manager graph-based entity/relation/observation persistence (`cloudmcp-manager/memory-*`).
  - Claude Code structured markdown handoff and git staging (`git add`) ↔ direct MCP persistence without git staging.
- **Defects:** none
