---
package: rjm
ledger_id: V9
canonical: .claude/agents/explainer.md
variant: templates/agents/explainer.shared.md
shared_ratio: 0.93
hunks: 1
declared_provenance: "Generated from: templates/agents/[name].shared.md" — CONTRIBUTING.md:474
unit: inv-rjm-66
---

# .claude/agents/explainer.md ↔ templates/agents/explainer.shared.md

## Why two copies exist — required
Multi-harness generation and build output declared in repository documentation (`CONTRIBUTING.md:474`). The shared template `templates/agents/explainer.shared.md` serves as the cross-harness single source of truth for agent behavior and tools in VS Code and Copilot CLI, while `.claude/agents/explainer.md` is formatted for Claude Code runtime loading with dedicated model and metadata frontmatter.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/explainer.md:1-10 ↔ templates/agents/explainer.shared.md:1-16
- **class:** harness-substitution
- **canonical says:** "name: explainer" — .claude/agents/explainer.md:2
- **variant says:** "role: support" — templates/agents/explainer.shared.md:2
- **meaning:** Maps Claude Code frontmatter metadata (`name: explainer`, `model: sonnet`, nested `metadata.role: support`) to multi-harness shared template frontmatter specifying root `role: support` and explicit tool configurations for VS Code and Copilot CLI (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Maps Claude Code agent metadata (`model: sonnet`, `metadata.role: support`) to VS Code and Copilot tool definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
