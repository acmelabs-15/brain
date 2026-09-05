---
package: rjm
ledger_id: V20
canonical: .claude/agents/comment-analyzer.md
variant: templates/agents/comment-analyzer.shared.md
shared_ratio: 0.87
hunks: 1
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-65
---

# .claude/agents/comment-analyzer.md ↔ templates/agents/comment-analyzer.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 adopts a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific model and metadata configurations, while multi-platform templates live under `templates/agents/*.shared.md` and are used by build scripts to generate Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/comment-analyzer.md:1-10 ↔ templates/agents/comment-analyzer.shared.md:1-21
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: comment-analyzer
description: Use this agent when you need to analyze code comments for accuracy, completeness, and long-term maintainability. Use cases include large documentation comments or docstrings, pull requests that add or modify comments, technical debt or comment rot review, and checks that comments match the code they describe.
model: sonnet
metadata:
  role: support
argument-hint: Point to the comments or PR to review for accuracy
---
```
- **variant says:**
```yaml
---
role: support
model_tier: sonnet
description: Use this agent when you need to analyze code comments for accuracy, completeness, and long-term maintainability. Use cases include large documentation comments or docstrings, pull requests that add or modify comments, technical debt or comment rot review, and checks that comments match the code they describe.
argument-hint: Point to the comments or PR to review for accuracy
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
```
- **meaning:** Claude Code frontmatter maps `name`, `model: sonnet`, and `metadata.role` to shared template fields `role: support`, `model_tier: sonnet`, and tool bundles for VS Code and Copilot CLI (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent frontmatter ↔ shared template / VS Code / Copilot CLI tool configuration.
- **Defects:** none
