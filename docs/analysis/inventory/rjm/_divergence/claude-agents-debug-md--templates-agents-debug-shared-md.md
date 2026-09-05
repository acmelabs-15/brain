---
package: rjm
ledger_id: V17
canonical: .claude/agents/debug.md
variant: templates/agents/debug.shared.md
shared_ratio: 0.88
hunks: 1
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-65
---

# .claude/agents/debug.md ↔ templates/agents/debug.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 adopts a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific model pins, while multi-platform templates live under `templates/agents/*.shared.md` and are used by build scripts to generate Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/debug.md:1-9 ↔ templates/agents/debug.shared.md:1-17
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: debug
description: 'Debug your application to find and fix a bug. Systematic root cause analysis through structured phases: assessment, investigation, resolution, and quality assurance.'
model: opus
role: executor
argument-hint: Describe the bug, error message, or unexpected behavior to investigate
---
```
- **variant says:**
```yaml
---
role: executor
description: 'Debug your application to find and fix a bug. Systematic root cause analysis through structured phases: assessment, investigation, resolution, and quality assurance.'
argument-hint: Describe the bug, error message, or unexpected behavior to investigate
tools_vscode:
  - $toolset:editor
  - $toolset:github-research
  - $toolset:research
  - $toolset:knowledge
tools_copilot:
  - $toolset:editor
  - $toolset:github-research
  - $toolset:research
  - $toolset:knowledge
---
```
- **meaning:** Claude Code frontmatter defines `name`, `model: opus`, and `role: executor`, whereas the shared template omits the model field and defines tool bundles for VS Code and Copilot CLI (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Model tier defaults and tool bundle specifications across Claude Code and Copilot/VS Code platforms.
- **Defects:** none
