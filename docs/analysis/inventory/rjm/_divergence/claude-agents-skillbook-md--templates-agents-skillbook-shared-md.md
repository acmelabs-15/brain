---
package: rjm
ledger_id: V2
canonical: .claude/agents/skillbook.md
variant: templates/agents/skillbook.shared.md
shared_ratio: 0.95
hunks: 1
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-73
---

# .claude/agents/skillbook.md ↔ templates/agents/skillbook.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 establishes a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific tools and frontmatter, while cross-platform shared templates live under `templates/agents/*.shared.md` and are used by code generators to produce Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/skillbook.md:1-10 ↔ templates/agents/skillbook.shared.md:1-13
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: skillbook
description: Skill manager who transforms reflections into high-quality atomic skillbook updates, guarding strategy quality, preventing duplicates, and maintaining learned patterns. Scores atomicity, runs deduplication checks, rejects vague learnings. Use for skill persistence, validation, or keeping institutional knowledge clean and actionable.
model: sonnet
metadata:
  role: support
argument-hint: Describe the learning, pattern, or strategy to encode as a skill
---
``` — .claude/agents/skillbook.md:1-8
- **variant says:**
```yaml
---
role: support
description: Skill manager who transforms reflections into high-quality atomic skillbook updates, guarding strategy quality, preventing duplicates, and maintaining learned patterns. Scores atomicity, runs deduplication checks, rejects vague learnings. Use for skill persistence, validation, or keeping institutional knowledge clean and actionable.
argument-hint: Provide the reflection or strategy pattern to persist
tools_vscode:
  - $toolset:editor
  - $toolset:knowledge
tools_copilot:
  - $toolset:editor
  - $toolset:knowledge
---
``` — templates/agents/skillbook.shared.md:1-11
- **meaning:** Claude Code frontmatter maps `name: skillbook`, `model: sonnet`, and `metadata.role: support` to shared template root field `role: support`, a slightly rephrased argument hint, and cross-platform tool definitions (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter metadata (`name`, `model: sonnet`, `metadata.role`) ↔ cross-platform shared template tool definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
