---
package: rjm
ledger_id: V8
canonical: .claude/agents/roadmap.md
variant: templates/agents/roadmap.shared.md
shared_ratio: 0.94
hunks: 1
declared_provenance: none
unit: inv-rjm-72
---

# .claude/agents/roadmap.md ↔ templates/agents/roadmap.shared.md

## Why two copies exist — required
Harness adaptation and cross-platform template synchronization (undeclared). `.claude/agents/roadmap.md` is configured for the Claude Code runtime environment, specifying Claude frontmatter fields (`name: roadmap`, `model: opus`, `metadata.role: strategic`) and a product-scoping argument hint. `templates/agents/roadmap.shared.md` is the cross-platform source template declaring VS Code and GitHub Copilot toolset bindings (`tools_vscode`, `tools_copilot` referencing `$toolset:knowledge`), a top-level role classification (`role: strategic`), and a feature-backlog prioritization argument hint.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/roadmap.md:1-10 ↔ templates/agents/roadmap.shared.md:1-16
- **class:** harness-substitution
- **canonical says:** "name: roadmap" — .claude/agents/roadmap.md:2
- **variant says:** "role: strategic" — templates/agents/roadmap.shared.md:2
- **meaning:** Replaces Claude Code frontmatter metadata (`name: roadmap`, `model: opus`, `metadata.role: strategic`, `argument-hint: Describe the product area, feature set, or strategic question`) with multi-platform toolset declarations (`tools_vscode`, `tools_copilot` loading `vscode`, `read`, `edit`, and `$toolset:knowledge`) and a backlog-tailored argument prompt.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent frontmatter attributes (`model: opus`, `role: strategic`) map to cross-platform tool declarations (`tools_vscode`, `tools_copilot`, `$toolset:knowledge`).
- **Defects:** none
