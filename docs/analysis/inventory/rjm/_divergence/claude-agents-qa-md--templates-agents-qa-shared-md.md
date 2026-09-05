---
package: rjm
ledger_id: V19
canonical: .claude/agents/qa.md
variant: templates/agents/qa.shared.md
shared_ratio: 0.87
hunks: 8
declared_provenance: none
unit: inv-rjm-70
---

# .claude/agents/qa.md ↔ templates/agents/qa.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/qa.md` is configured for Claude Code runtime, declaring Opus model tier, isolation requirement, direct file editing scopes, Claude Code tools (Read/Grep/Glob, Bash `dotnet test`, Memory Router CLI, Serena memory persistence), Step 5 PR description validation, and an explicit Degraded Mode protocol. `templates/agents/qa.shared.md` is the cross-platform source template declaring VS Code and Copilot toolsets (`tools_vscode`, `tools_copilot`), cloudmcp-manager memory tools, and omitting Claude-specific tool lists, PR description validation, and Degraded Mode fallbacks.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/qa.md:1-12 ↔ templates/agents/qa.shared.md:1-15
- **class:** harness-substitution
- **canonical says:** "model: opus" — .claude/agents/qa.md:4
- **variant says:** "model_tier: opus" — templates/agents/qa.shared.md:3
- **meaning:** Replaces Claude Code frontmatter metadata (`name: qa`, `model: opus`, `metadata.role: executor`, `isolation_required: true`) with cross-platform declarations (`role: executor`, `model_tier: opus`, `tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/qa.md:40-67 ↔ templates/agents/qa.shared.md:43-57
- **class:** harness-substitution
- **canonical says:** "## Claude Code Tools" — .claude/agents/qa.md:51
- **variant says:** "- Text status indicators: [PASS], [FAIL], [WARNING], [COMPLETE], [BLOCKED]" — templates/agents/qa.shared.md:46
- **meaning:** Shared template generalizes text status indicators to include WARNING/COMPLETE/BLOCKED, moves test indicators under QA-specific requirements, and omits the Claude Code Tools section (Read/Grep/Glob, Bash `dotnet test`, Memory Router `search_memory.py`, Serena write tools).

### Hunk 3 — .claude/agents/qa.md:116-120 ↔ templates/agents/qa.shared.md:106-110
- **class:** content
- **canonical says:** "8. **Validate** coverage comprehensively" — .claude/agents/qa.md:119
- **variant says:** "8. **Validate** coverage comprehensively, including completeness against the promised scope" — templates/agents/qa.shared.md:109
- **meaning:** Shared template broadens key responsibility 8 to explicitly mandate validating completeness against the promised scope in addition to comprehensive coverage.

### Hunk 4 — .claude/agents/qa.md:208-214 ↔ templates/agents/qa.shared.md:198-204
- **class:** content
- **canonical says:** "**Verdict**: CRITICAL_FAIL" — .claude/agents/qa.md:211
- **variant says:** "**Verdict**: [FAIL]" — templates/agents/qa.shared.md:201
- **meaning:** Shared template standardizes the insufficient test verdict indicator to `[FAIL]` instead of `CRITICAL_FAIL`.

### Hunk 5 — .claude/agents/qa.md:493-526 ↔ templates/agents/qa.shared.md:483-488
- **class:** content
- **canonical says:** "#### Step 5: PR Description Validation" — .claude/agents/qa.md:498
- **variant says:** "### Pre-PR Validation Report" — templates/agents/qa.shared.md:488
- **meaning:** Canonical includes Step 5 PR description validation via `validate_pr_description.py` (checking conventional commits, issue keywords, template compliance), which is completely removed in the shared template.

### Hunk 6 — .claude/agents/qa.md:542-548 ↔ templates/agents/qa.shared.md:504-509
- **class:** content
- **canonical says:** "| PR Description | [PASS]/[FAIL] | Yes |" — .claude/agents/qa.md:545
- **variant says:** "| Coverage Threshold | [PASS]/[FAIL] | Yes |" — templates/agents/qa.shared.md:506
- **meaning:** Canonical requires PR Description as a mandatory pre-PR gate in the validation summary table; the shared template omits this gate.

### Hunk 7 — .claude/agents/qa.md:578-585 ↔ templates/agents/qa.shared.md:539-546
- **class:** content
- **canonical says:** "| All 5 gates PASS, line coverage >=80%, branch coverage >=70%, new-code coverage >=80% | APPROVED | All gates green |" — .claude/agents/qa.md:581
- **variant says:** "| All 4 gates PASS, line coverage >=80%, branch coverage >=70%, new-code coverage >=80% | APPROVED | All gates green |" — templates/agents/qa.shared.md:541
- **meaning:** Verdict decision logic checks "All 5 gates PASS" in canonical (including PR Description) versus "All 4 gates PASS" in the shared template.

### Hunk 8 — .claude/agents/qa.md:725-786 ↔ templates/agents/qa.shared.md:686-716
- **class:** harness-substitution
- **canonical says:** "## Degraded Mode Protocol" — .claude/agents/qa.md:765
- **variant says:** "Use cloudmcp-manager memory tools directly for cross-session context:" — templates/agents/qa.shared.md:693
- **meaning:** Canonical defines Claude Code / .NET test commands, ADR-037 Memory Router script with Serena write tools, and an explicit Degraded Mode fallback matrix; shared template replaces this with cloudmcp-manager memory tools and omits Test Commands and Degraded Mode Protocol.

## Consequences — required
- **Phase 3 concordance rows raised:** Hunks 3, 4, 5, 6, 7 represent content divergences (scope completeness validation requirement, verdict string normalization, PR description validation gate, and 4 vs 5 gate pass threshold) candidate for `gates` and `roles` concordance rows.
- **Phase 5 parity notes:** Hunks 1, 2, 8 define harness substitutions (`model: opus` / `isolation_required` ↔ `model_tier: opus` / `tools_*`; Claude Code CLI tools / Memory Router / Serena ↔ cloudmcp-manager memory tools) for the Claude Code ↔ Antigravity parity table (D-009).
- **Defects:** none
