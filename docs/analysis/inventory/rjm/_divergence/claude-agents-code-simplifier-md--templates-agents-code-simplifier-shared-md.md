---
package: rjm
ledger_id: V18
canonical: .claude/agents/code-simplifier.md
variant: templates/agents/code-simplifier.shared.md
shared_ratio: 0.88
hunks: 1
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-65
---

# .claude/agents/code-simplifier.md ↔ templates/agents/code-simplifier.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 adopts a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific model and metadata configurations, while multi-platform templates live under `templates/agents/*.shared.md` and are used by build scripts to generate Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/code-simplifier.md:1-10 ↔ templates/agents/code-simplifier.shared.md:1-19
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: code-simplifier
description: Use this agent when code has been written or modified and needs to be simplified for clarity, consistency, and maintainability while preserving all functionality. This agent should be triggered automatically after completing a coding task or writing a logical chunk of code. It simplifies code by following project best practices while retaining all functionality. The agent focuses only on recently modified code unless instructed otherwise.
model: sonnet
metadata:
  role: support
argument-hint: Point to the recently modified code to simplify
---
```
- **variant says:**
```yaml
---
role: support
model_tier: sonnet
description: Use this agent when code has been written or modified and needs to be simplified for clarity, consistency, and maintainability while preserving all functionality. This agent should be triggered automatically after completing a coding task or writing a logical chunk of code. It simplifies code by following project best practices while retaining all functionality. The agent focuses only on recently modified code unless instructed otherwise.
argument-hint: Point to the recently modified code to simplify
tools_vscode:
  - vscode
  - read
  - edit
  - search
  - execute
tools_copilot:
  - read
  - edit
  - search
  - shell
---
```
- **meaning:** Claude Code frontmatter specifies `name`, `model: sonnet`, and `metadata.role: support`, whereas the shared template specifies `role: support`, `model_tier: sonnet`, and platform-differentiated tool lists (`tools_vscode` includes execute, `tools_copilot` includes shell).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent metadata ↔ Copilot/VS Code execution tool definitions (`execute` in VS Code vs `shell` in Copilot CLI).
- **Defects:** none
