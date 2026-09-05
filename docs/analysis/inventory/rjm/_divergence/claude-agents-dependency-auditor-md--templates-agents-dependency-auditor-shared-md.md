---
package: rjm
ledger_id: V7
canonical: .claude/agents/dependency-auditor.md
variant: templates/agents/dependency-auditor.shared.md
shared_ratio: 0.94
hunks: 1
declared_provenance: "Generated from: templates/agents/[name].shared.md" — CONTRIBUTING.md:474
unit: inv-rjm-66
---

# .claude/agents/dependency-auditor.md ↔ templates/agents/dependency-auditor.shared.md

## Why two copies exist — required
Multi-harness generation and build output declared in repository documentation (`CONTRIBUTING.md:474`). The shared template `templates/agents/dependency-auditor.shared.md` serves as the cross-harness source of truth declaring toolsets for VS Code and Copilot CLI, while `.claude/agents/dependency-auditor.md` is configured for Claude Code runtime loading with specific model and role frontmatter.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/dependency-auditor.md:1-9 ↔ templates/agents/dependency-auditor.shared.md:1-15
- **class:** harness-substitution
- **canonical says:** "name: dependency-auditor" — .claude/agents/dependency-auditor.md:2
- **variant says:** "role: executor" — templates/agents/dependency-auditor.shared.md:2
- **meaning:** Maps Claude Code frontmatter agent metadata (`name: dependency-auditor`, `model: sonnet`) to cross-harness template frontmatter with `role: executor`, `model_tier: sonnet`, and explicit toolset declarations (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Maps Claude Code frontmatter (`name: dependency-auditor`, `model: sonnet`) to multi-harness toolset definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
