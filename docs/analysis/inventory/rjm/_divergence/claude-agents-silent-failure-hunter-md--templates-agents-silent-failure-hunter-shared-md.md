---
package: rjm
ledger_id: V11
canonical: .claude/agents/silent-failure-hunter.md
variant: templates/agents/silent-failure-hunter.shared.md
shared_ratio: 0.92
hunks: 1
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-73
---

# .claude/agents/silent-failure-hunter.md ↔ templates/agents/silent-failure-hunter.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 establishes a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific tools and frontmatter, while cross-platform shared templates live under `templates/agents/*.shared.md` and are used by code generators to produce Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/silent-failure-hunter.md:1-10 ↔ templates/agents/silent-failure-hunter.shared.md:1-20
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: silent-failure-hunter
description: Use this agent when reviewing code changes in a pull request to identify silent failures, inadequate error handling, and inappropriate fallback behavior. This agent should be invoked proactively after completing a logical chunk of work that involves error handling, catch blocks, fallback logic, or any code that could potentially suppress errors.
model: opus
metadata:
  role: executor
argument-hint: Point to the PR, diff, or files whose error handling to audit
---
``` — .claude/agents/silent-failure-hunter.md:1-8
- **variant says:**
```yaml
---
role: executor
description: Use this agent when reviewing code changes in a pull request to identify silent failures, inadequate error handling, and inappropriate fallback behavior. This agent should be invoked proactively after completing a logical chunk of work that involves error handling, catch blocks, fallback logic, or any code that could potentially suppress errors.
argument-hint: Point to the PR, diff, or files whose error handling to audit
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
``` — templates/agents/silent-failure-hunter.shared.md:1-18
- **meaning:** Claude Code frontmatter maps `name: silent-failure-hunter`, `model: opus`, and `metadata.role: executor` to shared template root field `role: executor` and multi-platform tool definitions (`tools_vscode`, `tools_copilot`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code frontmatter metadata (`name`, `model: opus`, `metadata.role`) ↔ cross-platform shared template tool definitions (`tools_vscode`, `tools_copilot`).
- **Defects:** none
