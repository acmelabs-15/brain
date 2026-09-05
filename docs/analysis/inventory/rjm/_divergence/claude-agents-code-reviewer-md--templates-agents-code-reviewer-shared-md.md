---
package: rjm
ledger_id: V15
canonical: .claude/agents/code-reviewer.md
variant: templates/agents/code-reviewer.shared.md
shared_ratio: 0.89
hunks: 3
declared_provenance: "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50
unit: inv-rjm-65
---

# .claude/agents/code-reviewer.md ↔ templates/agents/code-reviewer.shared.md

## Why two copies exist — required
Two copies exist because repository architecture decision ADR-036 adopts a two-source template architecture: Claude Code agent definitions live directly under `.claude/agents/*.md` with harness-specific metadata and instructions, while multi-platform templates live under `templates/agents/*.shared.md` and are used by build scripts to generate Copilot CLI and VS Code agent configurations.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/code-reviewer.md:1-11 ↔ templates/agents/code-reviewer.shared.md:1-21
- **class:** harness-substitution
- **canonical says:**
```yaml
---
name: code-reviewer
description: Use this agent when you need to review code changes for correctness, discovered project-convention compliance, and duplicated logic. Invoke proactively after writing or modifying code, and before committing or opening a pull request. Reviews an explicit diff, pull request, or named file set; defaults to the repository's current working changes when scope is omitted.
model: haiku
model-rationale: cost. The reviewer filters to high-confidence findings and escalates complex architecture or security concerns to specialist agents, so the lower-cost tier is sufficient.
metadata:
  role: executor
argument-hint: Point to the diff, PR, or files to review; defaults to current working changes
---
```
- **variant says:**
```yaml
---
role: executor
model_tier: haiku
description: Use this agent when you need to review code changes for correctness, discovered project-convention compliance, and duplicated logic. Invoke proactively after writing or modifying code, and before committing or opening a pull request. Reviews an explicit diff, pull request, or named file set; defaults to the repository's current working changes when scope is omitted.
argument-hint: Point to the diff, PR, or files to review; defaults to current working changes
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
- **meaning:** Claude Code frontmatter maps `name`, `model: haiku`, `model-rationale`, and `metadata.role` to shared template fields `role: executor`, `model_tier: haiku`, and platform-specific tool definitions (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/code-reviewer.md:18-32 ↔ templates/agents/code-reviewer.shared.md:28-34
- **class:** harness-substitution
- **canonical says:**
```markdown
## Style Guide Compliance

Follow discovered repository style rules. Do not invent a convention when the repository does not define one.

## Claude Code Tools

Use read and search tools only. Never edit files, stage changes, approve a pull request, or merge.
```
- **variant says:** (section omitted before Core Mission)
- **meaning:** Canonical Claude Code agent defines Style Guide Compliance and Claude Code Tools immediately after Activation Profile, whereas the shared template relocates them below Core Mission.

### Hunk 3 — .claude/agents/code-reviewer.md:37-43 ↔ templates/agents/code-reviewer.shared.md:39-47
- **class:** harness-substitution
- **canonical says:** (section absent after Key Responsibilities)
- **variant says:**
```markdown
## Style Guide Compliance

Follow discovered repository style rules. Do not invent a convention when the repository does not define one.

## Tool Use

Use read and search tools only. Never edit files, stage changes, approve a pull request, or merge.
```
- **meaning:** Shared template places Style Guide Compliance and generic "Tool Use" heading after Key Responsibilities, replacing harness-specific "Claude Code Tools".

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Claude Code agent frontmatter (`model`, `metadata.role`, `Claude Code Tools`) ↔ shared template / Copilot CLI / VS Code (`model_tier`, `role`, `tools_vscode`, `tools_copilot`, `Tool Use`).
- **Defects:** none
