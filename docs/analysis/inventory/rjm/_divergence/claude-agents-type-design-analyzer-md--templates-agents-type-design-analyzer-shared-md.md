---
package: rjm
ledger_id: V14
canonical: .claude/agents/type-design-analyzer.md
variant: templates/agents/type-design-analyzer.shared.md
shared_ratio: 0.91
hunks: 2
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-73
---

# .claude/agents/type-design-analyzer.md ↔ templates/agents/type-design-analyzer.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 establishes a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific tools and frontmatter, while cross-platform shared templates live under `templates/agents/*.shared.md` and are used by code generators to produce Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/type-design-analyzer.md:1-10 ↔ templates/agents/type-design-analyzer.shared.md:1-20
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: type-design-analyzer
description: Use this agent when you need expert analysis of type design in your codebase. Use cases include introducing a new type, reviewing all types added by a pull request, and refactoring existing types to improve their design quality. The agent provides qualitative feedback and quantitative ratings on encapsulation, invariant expression, usefulness, and enforcement.
model: opus
metadata:
  role: executor
argument-hint: Point to the type(s) or PR to review for design quality
---
``` — .claude/agents/type-design-analyzer.md:1-8
- **variant says:**
```yaml
---
role: executor
description: Use this agent when you need expert analysis of type design in your codebase. Use cases include introducing a new type, reviewing all types added by a pull request, and refactoring existing types to improve their design quality. The agent provides qualitative feedback and quantitative ratings on encapsulation, invariant expression, usefulness, and enforcement.
argument-hint: Point to the type(s) or PR to review for design quality
tools_vscode:
  - vscode
  - read
  - search
  - $toolset:github-research
  - $toolset:research
  - $toolset:knowledge
tools_copilot:
  - read
  - search
  - $toolset:github-research
  - $toolset:research
  - $toolset:knowledge
---
``` — templates/agents/type-design-analyzer.shared.md:1-18
- **meaning:** Claude Code frontmatter maps `name: type-design-analyzer`, `model: opus`, and `metadata.role: executor` to shared template root field `role: executor` and multi-platform tool definitions (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/type-design-analyzer.md:76-82 ↔ templates/agents/type-design-analyzer.shared.md:86-91
- **class:** content
- **canonical says:**
```markdown
### Ratings
- **Encapsulation**: X/10  (sub-criteria met: N/4)
  [Brief justification]

- **Invariant Expression**: X/10  (sub-criteria met: N/4)
  [Brief justification]
``` — .claude/agents/type-design-analyzer.md:76-82
- **variant says:**
```markdown
### Ratings
- **Encapsulation**: X/10  (sub-criteria met: N/4)
  [Brief justification]
- **Invariant Expression**: X/10  (sub-criteria met: N/4)
  [Brief justification]
``` — templates/agents/type-design-analyzer.shared.md:86-91
- **meaning:** Canonical Claude Code agent includes an empty newline separating the Encapsulation rating block from Invariant Expression, whereas the shared template tightens spacing by omitting the blank line.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter metadata (`name`, `model: opus`, `metadata.role`) ↔ cross-platform shared template tool definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
