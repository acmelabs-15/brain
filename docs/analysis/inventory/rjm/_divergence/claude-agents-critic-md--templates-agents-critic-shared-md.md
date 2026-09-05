---
package: rjm
ledger_id: V16
canonical: .claude/agents/critic.md
variant: templates/agents/critic.shared.md
shared_ratio: 0.89
hunks: 3
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-65
---

# .claude/agents/critic.md ↔ templates/agents/critic.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 adopts a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific tools and prompt features, while multi-platform templates live under `templates/agents/*.shared.md` and are used by build scripts to generate Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/critic.md:1-10 ↔ templates/agents/critic.shared.md:1-14
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: critic
description: Constructive reviewer who stress-tests plans before implementation, validates completeness, identifies gaps, catches ambiguity. Challenges assumptions, checks alignment, and blocks approval when risks aren't mitigated. Use when you say "review this plan", "stress-test this plan", "is this plan ready", "poke holes in this", or hand it a plan file or planning artifact and need a clear ready-or-revise verdict. Do NOT use to stress-test a single decision's reasoning (use decision-critic).
model: opus
metadata:
  role: coordinator
argument-hint: Provide the plan file path or planning artifact to review
---
```
- **variant says:**
```yaml
---
role: coordinator
model_tier: opus
description: Constructive reviewer who stress-tests plans before implementation, validates completeness, identifies gaps, catches ambiguity. Challenges assumptions, checks alignment, and blocks approval when risks aren't mitigated. Use when you say "review this plan", "stress-test this plan", "is this plan ready", "poke holes in this", or hand it a plan file or planning artifact and need a clear ready-or-revise verdict. Do NOT use to stress-test a single decision's reasoning (use decision-critic).
argument-hint: Provide the plan file path or planning artifact to review
tools_vscode:
  - $toolset:editor
  - $toolset:knowledge
tools_copilot:
  - $toolset:editor
  - $toolset:knowledge
---
```
- **meaning:** Claude Code frontmatter maps `name`, `model: opus`, and `metadata.role` to shared template fields `role: coordinator`, `model_tier: opus`, and multi-platform tool definitions (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/critic.md:43-47 ↔ templates/agents/critic.shared.md:47-51
- **class:** content
- **canonical says:**
```markdown
- **Whitespace / unicode / token boundary variants for regexes**: leading or trailing whitespace, mixed line endings, unicode lookalikes, surrounding tokens that change matching context. A regex without a word-boundary test is suspect; cite the wiki entry on regex token boundaries when you write the finding.
```
- **variant says:**
```markdown
- **Whitespace / unicode / token boundary variants for regexes**: leading or trailing whitespace, mixed line endings, unicode lookalikes, surrounding tokens that change matching context. A regex without a word-boundary test is suspect; name the boundary class concretely (e.g. "missing `\b` anchor; matches inside `STBDX`") when you write the finding.
```
- **meaning:** Canonical requires citing a missing wiki entry for regex token boundaries, whereas the shared template instructs naming the boundary class concretely with an inline example.

### Hunk 3 — .claude/agents/critic.md:218-245 ↔ templates/agents/critic.shared.md:222-227
- **class:** harness-substitution
- **canonical says:**
```markdown
## Tools

Read, Grep, Glob, TodoWrite. Memory via `mcp__serena__read_memory` / `mcp__serena__write_memory`.

## Degraded Mode Protocol

If a tool or service is unavailable, do not halt on first failure or retry indefinitely. Follow this protocol:

1. **Log** which tool failed, the error message, and the step attempted
2. **Apply** the fallback from the table below
3. **Continue** remaining steps where possible
4. **Document** all skipped steps and degraded behavior in handoff

| Primary Tool | Fallback | If Fallback Also Fails |
|--------------|----------|------------------------|
| Memory Router (`search_memory.py`) | Read `.serena/memories/` directly with Read tool | Proceed without memory context, note gap in handoff |
| Serena write (`mcp__serena__write_memory`, `mcp__serena__edit_memory`) | Write to `.agents/notes/` as temp markdown with intended memory name | Note in handoff that memory was not persisted |
| MCP servers (Context7, DeepWiki, Forgetful) | Use WebSearch or WebFetch as alternative | Proceed with available information, document unverified claims |
| External CLIs (`dotnet`, `gh`, `python3`) | Report error with exit code and failing command | Return to orchestrator as [BLOCKED] with reproduction steps |
| Partial tool availability | Use working tools, note unavailable ones | Continue with reduced scope, flag in handoff |

**Do not** silently skip steps. **Do not** retry the same tool more than twice. **Do not** halt when a documented fallback exists.
```
- **variant says:**
```markdown
## Tools

read, search. Memory via `mcp__serena__read_memory` / `mcp__serena__write_memory`.
```
- **meaning:** Canonical Claude Code agent defines specific Claude Code tools and a comprehensive Degraded Mode Protocol fallback table, whereas the shared template specifies generic tools (`read, search`) and omits the Degraded Mode Protocol.

## Consequences — required
- **Phase 3 concordance rows raised:** Hunk 2 regex token boundary reporting guidance (wiki citation requirement vs concrete boundary class naming).
- **Phase 5 parity notes:** Claude Code tool allocation and Degraded Mode Protocol ↔ shared / cross-harness toolsets.
- **Defects:** `doc-drift` / `missing-path` in canonical `.claude/agents/critic.md:46` citing a nonexistent repository wiki entry.
