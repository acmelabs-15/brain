---
package: rjm
ledger_id: V24
canonical: .claude/agents/security.md
variant: templates/agents/security.shared.md
shared_ratio: 0.86
hunks: 5
declared_provenance: none
unit: inv-rjm-72
---

# .claude/agents/security.md ↔ templates/agents/security.shared.md

## Why two copies exist — required
Harness adaptation and cross-platform template synchronization (undeclared). `.claude/agents/security.md` is tailored specifically for the Claude Code runtime, defining model tier (`model: opus`), role (`metadata.role: executor`), detailed frontmatter documentation on tool permissions and shell denial, specific Claude Code tools (`Read`, `Grep`, `Glob`, `Write`, GitHub and Serena MCP tools), Python `Task(subagent_type="security", ...)` invocation syntax, and Serena memory persistence. `templates/agents/security.shared.md` is the cross-platform source template declaring toolset definitions for VS Code and GitHub Copilot (`tools_vscode`, `tools_copilot` referencing `$toolset:editor`, `$toolset:github-security`, `$toolset:github-research`, `perplexity/*`, `cloudmcp-manager/*`), slash-command routing (`/agent security`), and `cloudmcp-manager` memory integration.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/security.md:1-51 ↔ templates/agents/security.shared.md:1-26
- **class:** harness-substitution
- **canonical says:** "name: security" — .claude/agents/security.md:2
- **variant says:** "role: executor" — templates/agents/security.shared.md:2
- **meaning:** Replaces Claude Code frontmatter configuration (`name: security`, `model: opus`, `metadata.role: executor`, explicit `tools` listing, and documentation on shell absence) with multi-target tool definitions (`tools_vscode`, `tools_copilot` loading `$toolset:editor`, `$toolset:github-security`, `perplexity/*`, `cloudmcp-manager/*`, and `serena/*`).

### Hunk 2 — .claude/agents/security.md:85-98 ↔ templates/agents/security.shared.md:60-69
- **class:** harness-substitution
- **canonical says:** "Write, for the report paths only" — .claude/agents/security.md:90
- **variant says:** "Security patterns and findings" — templates/agents/security.shared.md:66
- **meaning:** Canonical documents scoped `Write` tool constraints for report files and Serena MCP tools; variant declares `cloudmcp-manager memory tools` and broad GitHub alert scanning capabilities.

### Hunk 3 — .claude/agents/security.md:373-399 ↔ templates/agents/security.shared.md:344-367
- **class:** harness-substitution
- **canonical says:** "Task(subagent_type=\"security\", prompt=\"\"\"" — .claude/agents/security.md:388
- **variant says:** "/agent security" — templates/agents/security.shared.md:357
- **meaning:** Adapts post-implementation verification subagent routing from Python `Task(subagent_type="security", ...)` invocation format to cross-platform `/agent security` slash command format.

### Hunk 4 — .claude/agents/security.md:664-691 ↔ templates/agents/security.shared.md:632-658
- **class:** harness-substitution
- **canonical says:** "Use the Serena memory tools for both retrieval and persistence (ADR-037)." — .claude/agents/security.md:667
- **variant says:** "Use cloudmcp-manager memory tools directly for cross-session context:" — templates/agents/security.shared.md:634
- **meaning:** Replaces Claude Code Serena MCP memory tools (`mcp__serena__list_memories`, `mcp__serena__read_memory`, `mcp__serena__write_memory`) with `cloudmcp-manager` memory tools (`memory-search_nodes`, `memory-add_observations`) and removes the local `.serena/memories/` file fallback.

### Hunk 5 — .claude/agents/security.md:778-784 ↔ templates/agents/security.shared.md:745-751
- **class:** content
- **canonical says:** "Score new external dependencies with the weighted matrix (Maintenance 25%, Popularity 15%, Security History 30%, Lock-in 20%, License 10%) and thresholds in `security/references/dependency-risk-scoring.md`." — .claude/agents/security.md:781
- **variant says:** "Score new external dependencies with the weighted matrix (Maintenance 25%, Popularity 15%, Security History 30%, Lock-in 20%, License 10%) and thresholds in `references/dependency-risk-scoring.md`." — templates/agents/security.shared.md:748
- **meaning:** Canonical references `security/references/dependency-risk-scoring.md` relative to `.claude/agents/`, whereas the shared template references `references/dependency-risk-scoring.md` relative to a presumed agent-specific directory.

## Consequences — required
- **Phase 3 concordance rows raised:** Candidate concordance row on relative path convention for agent reference documents (`<agent>/references/...` vs `references/...`).
- **Phase 5 parity notes:** Claude Code `Task(subagent_type="security", ...)` ↔ `/agent security`; Serena MCP memory tools ↔ `cloudmcp-manager` memory tools; Claude Code scoped write tool ↔ Copilot `$toolset:editor`.
- **Defects:** none
