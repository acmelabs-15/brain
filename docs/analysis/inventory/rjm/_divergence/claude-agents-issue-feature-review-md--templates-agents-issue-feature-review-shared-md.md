---
package: rjm
ledger_id: V13
canonical: .claude/agents/issue-feature-review.md
variant: templates/agents/issue-feature-review.shared.md
shared_ratio: 0.91
hunks: 1
declared_provenance: none
unit: inv-rjm-68
---

# .claude/agents/issue-feature-review.md ↔ templates/agents/issue-feature-review.shared.md

## Why two copies exist — required
Harness adaptation and multi-harness tooling configuration. `templates/agents/issue-feature-review.shared.md` is the shared multi-platform agent template declaring explicit GitHub tool bindings (`github/issue_read`, `github/pull_request_read`, etc.) for VS Code and GitHub Copilot, while `.claude/agents/issue-feature-review.md` targets Claude Code with `name: issue-feature-review`, `model: sonnet`, and `metadata.role: coordinator`.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/issue-feature-review.md:1-10 ↔ templates/agents/issue-feature-review.shared.md:1-22
- **class:** harness-substitution
- **canonical says:** "name: issue-feature-review" — .claude/agents/issue-feature-review.md:2
- **variant says:** "role: coordinator" — templates/agents/issue-feature-review.shared.md:2
- **meaning:** Frontmatter adaptation: Claude Code declares `name`, `model: sonnet`, and nested `metadata.role`, whereas the shared template declares `role: coordinator`, `model_tier: sonnet`, and explicit GitHub API tool lists (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter metadata (`metadata.role`) ↔ platform tool bindings (`tools_vscode`, `tools_copilot`).
- **Defects:** none
