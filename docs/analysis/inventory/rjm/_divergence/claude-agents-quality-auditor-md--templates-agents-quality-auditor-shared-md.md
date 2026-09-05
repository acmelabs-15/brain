---
package: rjm
ledger_id: V10
canonical: .claude/agents/quality-auditor.md
variant: templates/agents/quality-auditor.shared.md
shared_ratio: 0.93
hunks: 1
declared_provenance: none
unit: inv-rjm-70
---

# .claude/agents/quality-auditor.md ↔ templates/agents/quality-auditor.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/quality-auditor.md` is authored for direct execution under Claude Code runtime, declaring `name: quality-auditor` and `model: sonnet`. `templates/agents/quality-auditor.shared.md` serves as the cross-platform source template that declares `model_tier: sonnet` alongside toolset mappings for VS Code and GitHub Copilot (`tools_vscode`, `tools_copilot`).

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/quality-auditor.md:1-9 ↔ templates/agents/quality-auditor.shared.md:1-14
- **class:** harness-substitution
- **canonical says:** "model: sonnet" — .claude/agents/quality-auditor.md:4
- **variant says:** "model_tier: sonnet" — templates/agents/quality-auditor.shared.md:3
- **meaning:** Replaces Claude Code frontmatter metadata (`name: quality-auditor`, `model: sonnet`) with cross-platform model tiering (`model_tier: sonnet`) and multi-harness tool declarations (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `model: sonnet` ↔ `model_tier: sonnet`, and harness tool mappings (`$toolset:executor`, `$toolset:knowledge`) for VS Code / Copilot
- **Defects:** none
