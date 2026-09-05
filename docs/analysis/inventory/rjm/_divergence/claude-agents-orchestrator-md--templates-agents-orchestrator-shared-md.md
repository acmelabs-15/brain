---
package: rjm
ledger_id: V4
canonical: .claude/agents/orchestrator.md
variant: templates/agents/orchestrator.shared.md
shared_ratio: 0.94
hunks: 6
declared_provenance: none
unit: inv-rjm-69
---

# .claude/agents/orchestrator.md ↔ templates/agents/orchestrator.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/orchestrator.md` is the canonical agent definition tailored for Claude Code, specifying `model: opus`, Claude frontmatter conventions, explicit termination gates tied to TODO lists and budget limits, and strict completion sequence checks. `templates/agents/orchestrator.shared.md` is the shared cross-platform template defining toolsets for VS Code Copilot Chat and GitHub Copilot CLI (`tools_vscode`, `tools_copilot`), clarifying slash-command skill resolutions (`/spec (spec-generator skill)`), and reordering reasoning protocol after target recon.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/orchestrator.md:1-10 ↔ templates/agents/orchestrator.shared.md:1-23
- **class:** harness-substitution
- **canonical says:** "name: orchestrator" — .claude/agents/orchestrator.md:2
- **variant says:** "role: coordinator" — templates/agents/orchestrator.shared.md:2
- **meaning:** Replaces Claude Code frontmatter metadata (`name: orchestrator`, `model: opus`, `metadata.role: coordinator`) with cross-platform tool declarations (`tools_vscode`, `tools_copilot`) and top-level role definition.

### Hunk 2 — .claude/agents/orchestrator.md:23-37 ↔ templates/agents/orchestrator.shared.md:36-42
- **class:** content
- **canonical says:** "## Reasoning Protocol" — .claude/agents/orchestrator.md:27
- **variant says:** "## Target Recon (Before Triage)" — templates/agents/orchestrator.shared.md:40
- **meaning:** In canonical, Reasoning Protocol precedes Target Recon; in variant, Reasoning Protocol is moved to appear after Target Recon.

### Hunk 3 — .claude/agents/orchestrator.md:46-51 ↔ templates/agents/orchestrator.shared.md:51-64
- **class:** content
- **canonical says:** "## Core Behavior" — .claude/agents/orchestrator.md:49
- **variant says:** "## Reasoning Protocol" — templates/agents/orchestrator.shared.md:54
- **meaning:** In variant, Reasoning Protocol is inserted immediately after Target Recon and before Core Behavior, establishing that stack reconnaissance must precede triage and reasoning.

### Hunk 4 — .claude/agents/orchestrator.md:57-68 ↔ templates/agents/orchestrator.shared.md:70-79
- **class:** content
- **canonical says:** "**Never delegate blind.** Every handoff includes: context, constraints, expected output format, success criteria, dependencies on prior work." — .claude/agents/orchestrator.md:60
- **variant says:** "**Never delegate blind. Skip the handoff only when the task is trivial and single-step. Ask first when irreversibility or scope boundary is ambiguous.** Every handoff includes: context, constraints, expected output format, success criteria, dependencies on prior work." — templates/agents/orchestrator.shared.md:73
- **meaning:** Variant adds explicit exceptions allowing skipping handoffs for trivial single-step tasks and asking first on ambiguous boundaries; variant also removes the inline CRITICAL termination sentence present in canonical.

### Hunk 5 — .claude/agents/orchestrator.md:127-133 ↔ templates/agents/orchestrator.shared.md:138-144
- **class:** content
- **canonical says:** "   YES → sequential routing: /spec → milestone-planner → implementer → qa → critic" — .claude/agents/orchestrator.md:130
- **variant says:** "   YES → sequential routing: /spec (spec-generator skill) → milestone-planner → implementer → qa → critic" — templates/agents/orchestrator.shared.md:141
- **meaning:** Variant clarifies that `/spec` invokes the `spec-generator` skill in environments where slash commands may not be natively bound.

### Hunk 6 — .claude/agents/orchestrator.md:220-229 ↔ templates/agents/orchestrator.shared.md:231-239
- **class:** content
- **canonical says:** "3. Verify delegation count is within budget (fewer than 15); if budget limit was reached, produce a budget-exhaustion summary." — .claude/agents/orchestrator.md:223
- **variant says:** "3. **Write per-issue handoff** to" — templates/agents/orchestrator.shared.md:234
- **meaning:** Variant omits step 3 (delegation count verification against budget of 15 and budget-exhaustion summary) from the Pre-Close Sequence checklist.

## Consequences — required
- **Phase 3 concordance rows raised:** Candidate concordance rows for triage sequencing (reconnaissance before triage vs reasoning before reconnaissance), lifecycle command alias resolution (`/spec (spec-generator skill)`), and delegation budget gate inclusion in completion sequence.
- **Phase 5 parity notes:** Claude Code agent configuration (`name: orchestrator`, `model: opus`, `metadata.role: coordinator`) ↔ Copilot toolset definitions (`tools_vscode`, `tools_copilot`); Pre-Close Sequence checklist divergence across harnesses.
- **Defects:** none
